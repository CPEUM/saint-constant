import{S as x,i as E,s as L,C as f,e as B,R as m,c as C,a as g,T as k,d as _,b as l,aa as h,G as b,g as S,H as y,z as q,Z as D,ab as G,ac as p,ad as H}from"./vendor-54ef53c2.js";function I(n){let e,a,t,u,c,o,d=[{class:"loading-wrapper"},{style:u="font-size: "+n[0]+"px; background-color: "+n[2]},n[3]],r={};for(let s=0;s<d.length;s+=1)r=f(r,d[s]);return{c(){e=B("div"),a=m("svg"),t=m("circle"),this.h()},l(s){e=C(s,"DIV",{class:!0,style:!0});var i=g(e);a=k(i,"svg",{class:!0,viewBox:!0});var v=g(a);t=k(v,"circle",{cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"vector-effect":!0,class:!0});var z=g(t);z.forEach(_),v.forEach(_),i.forEach(_),this.h()},h(){l(t,"cx","50"),l(t,"cy","50"),l(t,"r","50"),l(t,"fill","none"),l(t,"stroke",n[1]),l(t,"stroke-width","5"),l(t,"stroke-linecap","round"),l(t,"vector-effect","non-scaling-stroke"),l(t,"class","cpeum-13to7g7"),l(a,"class","loading cpeum-13to7g7"),l(a,"viewBox","0 0 100 100"),h(e,r),b(e,"cpeum-13to7g7",!0)},m(s,i){S(s,e,i),y(e,a),y(a,t),o=!0},p(s,[i]){(!o||i&2)&&l(t,"stroke",s[1]),h(e,r=q(d,[{class:"loading-wrapper"},(!o||i&5&&u!==(u="font-size: "+s[0]+"px; background-color: "+s[2]))&&{style:u},i&8&&s[3]])),b(e,"cpeum-13to7g7",!0)},i(s){o||(c&&c.end(1),o=!0)},o(s){c=D(e,G,{duration:250}),o=!1},d(s){s&&_(e),s&&c&&c.end()}}}function M(n,e,a){const t=["size","color","background"];let u=p(e,t),{size:c=40}=e,{color:o="var(--dark1)"}=e,{background:d="transparent"}=e;return n.$$set=r=>{e=f(f({},e),H(r)),a(3,u=p(e,t)),"size"in r&&a(0,c=r.size),"color"in r&&a(1,o=r.color),"background"in r&&a(2,d=r.background)},[c,o,d,u]}class R extends x{constructor(e){super();E(this,e,M,I,L,{size:0,color:1,background:2})}}export{R as L};