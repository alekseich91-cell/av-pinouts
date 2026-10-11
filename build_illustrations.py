"""Original SVG connector illustrations; silhouettes are illustrative, not pin geometry."""
from pathlib import Path
import json
OUT=Path('images');OUT.mkdir(exist_ok=True)
DEFS='''<defs>
<linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#c5cfd0"/><stop offset=".18" stop-color="#f3f7f5"/><stop offset=".45" stop-color="#89989b"/><stop offset=".65" stop-color="#e5ebeb"/><stop offset="1" stop-color="#67797e"/></linearGradient>
<linearGradient id="rubber" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#586260"/><stop offset=".3" stop-color="#2d3936"/><stop offset="1" stop-color="#111a17"/></linearGradient>
<linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#f4dd93"/><stop offset=".45" stop-color="#b58b34"/><stop offset=".7" stop-color="#ffe9a7"/><stop offset="1" stop-color="#947025"/></linearGradient>
<linearGradient id="blue" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#67a9dc"/><stop offset=".45" stop-color="#2274b5"/><stop offset="1" stop-color="#123f7b"/></linearGradient>
<linearGradient id="gray" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#d4d8d8"/><stop offset=".45" stop-color="#8d9899"/><stop offset="1" stop-color="#5f6e70"/></linearGradient>
<pattern id="mesh" width="7" height="7" patternUnits="userSpaceOnUse"><path d="M0 0L7 7M7 0L0 7" stroke="#fff" opacity=".13" stroke-width="1"/></pattern>
</defs>'''
def rect(x,y,w,h,fill,rx=0,stroke='#243632',sw=1.5):return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'
def circle(x,y,r,fill,stroke='#243632',sw=1.5):return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'
def path(d,fill='none',stroke='#243632',sw=1.5):return f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>'
def text(x,y,label,size=11,color='#708479'):return f'<text x="{x}" y="{y}" font-family="Arial,sans-serif" font-size="{size}" fill="{color}" text-anchor="middle">{label}</text>'
def cable(y=105):return rect(350,y-13,150,26,'url(#rubber)',13)+path(f'M380 {y-6}H500',stroke='#6b7872',sw=2)
def grip(x=320,y=72,w=70,h=66):return rect(x,y,w,h,'url(#rubber)',10)+''.join(path(f'M{z} {y+5}V{y+h-5}',stroke='#7c8980',sw=1) for z in range(x+10,x+w-6,9))
def face_ring(n=3):
 import math
 pts={3:[(70,83),(101,83),(86,112)],5:[(60,96),(70,117),(101,117),(111,96),(86,78)]}
 points=pts.get(n,[(86+25*math.cos(i*2*math.pi/n),99+25*math.sin(i*2*math.pi/n)) for i in range(n)])
 return circle(86,99,49,'url(#metal)')+circle(86,99,40,'#293632')+circle(86,99,34,'#19241f')+''.join(circle(x,y,4.6,'url(#gold)',sw=.8) for x,y in points)+rect(79,51,14,10,'#506462',2)
def drawing(kind):
 s=''
 if kind in ('xlr3','xlr5','din5','svideo'):
  n={'xlr3':3,'xlr5':5,'din5':5,'svideo':4}[kind]
  s=cable()+grip()+rect(155,66,175,78,'url(#metal)',10)+rect(262,68,40,74,'url(#metal)',5)+rect(265,69,34,72,'url(#mesh)',5)
  s+=rect(173,82,44,9,'#687977',3)+rect(162,66,10,78,'url(#metal)',2)
  for y in (83,104,125):s+=rect(130,y,28,5,'url(#gold)',2)
  s+=face_ring(n)
  if kind=='din5':s=cable()+grip(265,75,103,60)+rect(160,79,111,52,'url(#metal)',5)+face_ring(5)+text(265,159,'DIN · 180°')
  if kind=='svideo':s=cable()+grip(250,79,130,54)+rect(161,84,89,44,'url(#metal)',3)+circle(86,99,41,'url(#metal)')+circle(86,99,32,'#1b2924')+''.join(circle(x,y,4,'url(#gold)') for x,y in [(67,91),(105,91),(77,113),(95,113)])+rect(80,119,12,8,'#697872',1)
 elif kind in ('ts','trs','trrs'):
  n={'ts':2,'trs':3,'trrs':4}[kind]
  s=cable()+grip(283,82,94,47)+rect(263,73,30,64,'url(#metal)',5)+rect(157,91,108,29,'url(#gold)',3)+path('M157 91L135 97V114L157 120Z','url(#gold)')
  for i in range(n-1):s+=rect(167+i*28,90,4,31,'#243632',0,sw=0)
  s+=text(225,163,{'ts':'TS · 1 кольцо изоляции','trs':'TRS · 2 кольца изоляции','trrs':'TRRS · 3 кольца изоляции'}[kind],12)
 elif kind in ('rca-audio','rca-video','bnc'):
  color={'rca-audio':'#c45146','rca-video':'#e3bd4d','bnc':'url(#metal)'}[kind]
  s=cable()+grip(312,78,73,57)+rect(191,75,125,62,'url(#metal)',6)+rect(261,76,21,60,color,3)+rect(157,83,36,45,'url(#metal)',4)+rect(133,99,25,11,'url(#gold)',2)
  s+=circle(86,99,40,'url(#metal)')+circle(86,99,28,'#e7e8d8')+circle(86,99,6,'url(#gold)')
  if kind=='bnc':s+=rect(160,73,12,14,'url(#metal)',2)+rect(160,126,12,14,'url(#metal)',2)+circle(86,57,5,'url(#metal)')+circle(86,141,5,'url(#metal)')
 elif kind in ('nl2','nl4','nl8','powercon','true1'):
  n={'nl2':2,'nl4':4,'nl8':8,'powercon':3,'true1':3}[kind]
  collar='url(#blue)' if kind!='true1' else '#d5d372'
  s=cable()+grip(322,67,75,79)+rect(149,61,105,90,'url(#rubber)',15)+rect(246,60,75,92,collar,9)+rect(258,64,53,84,'url(#mesh)',3)+rect(191,56,42,15,'url(#metal)',3)+face_ring(n)
  if kind=='powercon':s+=text(267,173,'A / IN · синий',13)+text(267,193,'B / OUT · серый',12)
  elif kind=='true1':s+=text(263,174,'TRUE1 · отдельная система',12)
 elif kind=='rj45':
  s=cable()+rect(281,75,97,63,'#adb8b9',8)+rect(171,67,122,78,'#e1eeeeb3',5,stroke='#819893')+path('M175 71H271V92H175Z','#f4faf5b3',stroke='#9aaeaa')+path('M197 67V46H263L282 67','#dae6e4',stroke='#708a83')
  for i in range(8):s+=rect(176+i*11,101,6,31,'url(#gold)',1,sw=.5)
  s+=rect(37,65,93,85,'#d8e8e5',4,stroke='#79938c')+rect(47,76,73,44,'#3d5149',2)+''.join(rect(51+i*8,84,4,27,'url(#gold)',1,sw=.5) for i in range(8))+rect(67,124,34,12,'#839a92',2)
 elif kind in ('usb-a','usb-b','usb-mini-b','usb-micro-b','usbc','hdmi','displayport'):
  s=cable()+grip(280,73,99,65)
  if kind=='usb-a':
   s+=rect(150,76,134,58,'url(#metal)',3)+rect(155,87,26,11,'#536762',1)+rect(155,112,26,11,'#536762',1)+rect(29,71,107,72,'url(#metal)',5)+rect(38,80,89,52,'#293b33',2)+rect(42,102,81,21,'#c3c9bc',1)+''.join(rect(51+i*18,103,10,8,'url(#gold)',1,sw=.4) for i in range(4))
  elif kind=='usb-b':
   s+=rect(160,76,122,58,'url(#metal)',3)+path('M45 72H117L134 89V143H28V89Z','url(#metal)')+path('M50 81H112L124 94V134H38V94Z','#d2d7cc')+''.join(rect(x,y,10,7,'url(#gold)',1,sw=.5) for x,y in [(48,91),(105,91),(48,118),(105,118)])
  else:
   heights={'usb-mini-b':40,'usb-micro-b':27,'usbc':32,'hdmi':40,'displayport':44};h=heights[kind]
   s+=rect(160,105-h/2,121,h,'url(#metal)',5)
   if kind=='usbc':face=rect(26,82,108,45,'url(#metal)',22)+rect(34,90,92,29,'#293b33',14)+rect(45,101,70,7,'#99a49b',3)
   elif kind=='displayport':face=path('M30 80H113L133 98V134H30Z','url(#metal)')+path('M38 89H108L123 103V126H38Z','#223c30')
   elif kind=='hdmi':face=path('M27 81H137L124 132H40Z','url(#metal)')+path('M37 91H127L117 122H47Z','#243b30')
   elif kind=='usb-mini-b':face=path('M31 86H131L122 128H40Z','url(#metal)')+path('M43 95H119L112 120H49Z','#34483f')
   else:face=path('M32 92H130L138 121H24Z','url(#metal)')+path('M40 100H122L127 114H35Z','#34483f')
   s+=face
   n=12 if kind=='usbc' else 10 if kind in ('hdmi','displayport') else 5
   for i in range(n):s+=rect(48+i*(66/(n-1)),103,3,8,'url(#gold)',1,sw=.3)
 elif kind in ('vga','db9','db25','dvi'):
  s=cable()+rect(239,56,125,101,'url(#rubber)',14)+rect(150,65,96,84,'url(#metal)',4)
  s+=rect(197,49,30,19,'url(#metal)',4)+rect(197,146,30,18,'url(#metal)',4)+''.join(path(f'M{x} 51V66M{x} 149V160',stroke='#677f76') for x in range(201,224,5))
  face_fill='url(#blue)' if kind=='vga' else '#6d9796' if kind=='db9' else '#dddfd2'
  s+=path('M19 69H143L132 140H31Z','url(#metal)')+path('M29 79H133L124 130H38Z',face_fill)
  if kind=='dvi':points=[(39+i*9,88+j*13) for j in range(3) for i in range(8)];s+=''.join(circle(x,y,2.1,'#273a30',sw=.5) for x,y in points)+path('M116 106H128',stroke='#34483b',sw=3)
  else:
   rows={'vga':[5,5,5],'db9':[5,4],'db25':[13,12]}[kind]
   for j,n in enumerate(rows):
    for i in range(n):s+=circle(40+i*82/(n-1)+(4 if j%2 else 0),88+j*(30/(len(rows)-1)),2.8 if n<10 else 1.8,'url(#gold)',sw=.7)
 return s
kinds=['xlr3','xlr5','din5','svideo','ts','trs','trrs','rca-audio','rca-video','bnc','nl2','nl4','nl8','powercon','true1','rj45','usb-a','usb-b','usb-mini-b','usb-micro-b','usbc','hdmi','displayport','vga','db9','db25','dvi']
for kind in kinds:
 svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 220" role="img"><title>Иллюстрация разъёма {kind}</title>{DEFS}<ellipse cx="256" cy="177" rx="200" ry="9" fill="#637b6e" opacity=".09"/>{drawing(kind)}</svg>'
 (OUT/(kind+'.svg')).write_text(svg)
for name,left,right in [('xlr-trs','xlr3','trs'),('dmx-adapter','xlr3','xlr5')]:
 svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" role="img"><title>Разъёмы переходника {name}</title>{DEFS}<g transform="translate(0,-8) scale(.7)">{drawing(left)}</g><g transform="translate(125,106) scale(.7)">{drawing(right)}</g></svg>'
 (OUT/(name+'.svg')).write_text(svg)
print(f'{len(list(OUT.glob("*.svg")))} illustrations')
