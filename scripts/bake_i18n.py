"""Zapíše překlady z script.js přímo do statického HTML (stejná logika jako setLanguage).

Díky tomu vidí vyhledávače a návštěvníci bez JS na /en/ a /de/ stránkách správný jazyk.
Spouštět z kořene repozitáře po každé změně objektu `translations`:

    python3 scripts/bake_i18n.py          # zapíše změny
    python3 scripts/bake_i18n.py --dry    # jen vypíše, co by se změnilo
"""
import json,sys,re,html,subprocess

NODE_EXPORT = (
    'const fs=require("fs");const s=fs.readFileSync("script.js","utf8");'
    'const e=s.indexOf("\\nfunction setLanguage");'
    'process.stdout.write(JSON.stringify(new Function(s.slice(0,e)+";return translations;")()));'
)
from html.parser import HTMLParser
T=json.loads(subprocess.check_output(["node","-e",NODE_EXPORT])); dry="--dry" in sys.argv
VOID={"area","base","br","col","embed","hr","img","input","link","meta","source","track","wbr"}
class P(HTMLParser):
    def __init__(s,src):
        super().__init__(convert_charrefs=False); s.src=src; s.lines=[0]
        for m in re.finditer("\n",src): s.lines.append(m.end())
        s.stack=[]; s.found=[]
    def off(s):
        l,c=s.getpos(); return s.lines[l-1]+c
    def handle_starttag(s,tag,attrs):
        if tag in VOID: return
        a=dict(attrs); start=s.off(); end=start+len(s.get_starttag_text())
        s.stack.append((tag,a,end))
    def handle_startendtag(s,tag,attrs): pass
    def handle_endtag(s,tag):
        for i in range(len(s.stack)-1,-1,-1):
            if s.stack[i][0]==tag:
                t,a,inner_start=s.stack[i]; del s.stack[i:]
                if "data-i18n" in a:
                    nested=any("data-i18n" in x[1] for x in s.stack)
                    s.found.append((inner_start,s.off(),t,a,nested))
                return
def norm(x): return re.sub(r"\s+"," ",html.unescape(re.sub(r"<[^>]+>"," ",x))).strip()
def render(t,a,v):
    ishtml="data-i18n-html" in a
    if t in("ul","ol"):
        return "".join("<li>"+(it.strip() if ishtml else html.escape(it.strip(),quote=False))+"</li>" for it in v.split(";"))
    return v if ishtml else html.escape(v,quote=False)
def lang_of(f): return "en" if f.startswith("en/") else "de" if f.startswith("de/") else "cs"
total=0
for f in subprocess.check_output(["git","ls-files","*.html"]).decode().split():
    src=open(f,encoding="utf-8").read(); p=P(src); p.feed(src)
    d=T[lang_of(f)]; reps=[]
    for s0,e0,t,a,nested in p.found:
        if nested: continue
        v=d.get(a["data-i18n"])
        if not v: continue
        new=render(t,a,v)
        if norm(src[s0:e0])==norm(new): continue
        reps.append((s0,e0,new,a["data-i18n"]))
    if reps:
        total+=len(reps); print(f,len(reps))
        if dry:
            for s0,e0,new,k in reps[:3]: print("   ",k,"|",norm(src[s0:e0])[:50],"=>",norm(new)[:50])
        else:
            for s0,e0,new,k in sorted(reps,reverse=True): src=src[:s0]+new+src[e0:]
            open(f,"w",encoding="utf-8").write(src)
print("total",total)
