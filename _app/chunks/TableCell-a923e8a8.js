import{S as P,i as S,s as B,a4 as W,C as q,e as g,t as L,c as k,a as C,h as O,d as b,g as v,H as j,j as U,k as F,l as E,m as J,a9 as N,f as r,G as p,$ as K,U as M,a1 as D,a2 as w,a3 as A,z as Q,q as I,o as T,a0 as R,ab as V,r as X,ac as Y,n as Z,p as x,a6 as $,b as y,I as z}from"./vendor-7a55a818.js";import{i as ee}from"./intersect-eda3c074.js";function H(t){let e,l;return{c(){e=g("caption"),l=L(t[1])},l(i){e=k(i,"CAPTION",{});var u=C(e);l=O(u,t[1]),u.forEach(b)},m(i,u){v(i,e,u),j(e,l)},p(i,u){u&2&&U(l,i[1])},d(i){i&&b(e)}}}function le(t){let e,l,i,u,o,s;const f=t[8].default,n=W(f,t,t[7],null);let _=[{visible:t[2]},t[5]],h={};for(let a=0;a<_.length;a+=1)h=q(h,_[a]);let c=t[1]&&H(t);return{c(){e=g("table"),n&&n.c(),l=F(),c&&c.c(),i=E(),this.h()},l(a){e=k(a,"TABLE",{visible:!0});var m=C(e);n&&n.l(m),m.forEach(b),l=J(a),c&&c.l(a),i=E(),this.h()},h(){N(e,h),r(e,"--cols",t[0],!1),r(e,"grid-template-columns",t[3],!1),p(e,"cpeum-1yjt815",!0)},m(a,m){v(a,e,m),n&&n.m(e,null),v(a,l,m),c&&c.m(a,m),v(a,i,m),u=!0,o||(s=[K(ee.call(null,e)),M(e,"enter",t[4],{once:!0})],o=!0)},p(a,[m]){n&&n.p&&(!u||m&128)&&D(n,f,a,a[7],u?A(f,a[7],m,null):w(a[7]),null),N(e,h=Q(_,[(!u||m&4)&&{visible:a[2]},m&32&&a[5]])),r(e,"--cols",a[0],!1),r(e,"grid-template-columns",a[3],!1),p(e,"cpeum-1yjt815",!0),a[1]?c?c.p(a,m):(c=H(a),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null)},i(a){u||(I(n,a),u=!0)},o(a){T(n,a),u=!1},d(a){a&&b(e),n&&n.d(a),a&&b(l),c&&c.d(a),a&&b(i),o=!1,R(s)}}}function se(t,e,l){const i=["cols","caption","colsWidth"];let u=V(e,i),{$$slots:o={},$$scope:s}=e,{cols:f}=e,{caption:n=null}=e,{colsWidth:_={}}=e;const h=Array(parseInt(f+"")).fill("auto").map((d,G)=>_[G+1]||d).join(" ");let c=!1,a=0;X("table",{setCellIndex:()=>a++});function m(){l(2,c=!0)}return t.$$set=d=>{e=q(q({},e),Y(d)),l(5,u=V(e,i)),"cols"in d&&l(0,f=d.cols),"caption"in d&&l(1,n=d.caption),"colsWidth"in d&&l(6,_=d.colsWidth),"$$scope"in d&&l(7,s=d.$$scope)},[f,n,c,h,m,u,_,s,o]}class re extends P{constructor(e){super();S(this,e,se,le,B,{cols:0,caption:1,colsWidth:6})}}function ae(t){let e;return{c(){e=g("div"),this.h()},l(l){e=k(l,"DIV",{class:!0}),C(e).forEach(b),this.h()},h(){y(e,"class","spacer cpeum-1qybubh"),r(e,"--colspan",t[1],!1),r(e,"--rowspan",t[2],!1)},m(l,i){v(l,e,i)},p(l,i){i&2&&r(e,"--colspan",l[1],!1),i&4&&r(e,"--rowspan",l[2],!1)},i:z,o:z,d(l){l&&b(e)}}}function te(t){let e,l,i;const u=t[7].default,o=W(u,t,t[6],null);return{c(){e=g("td"),l=g("div"),o&&o.c(),this.h()},l(s){e=k(s,"TD",{class:!0});var f=C(e);l=k(f,"DIV",{class:!0});var n=C(l);o&&o.l(n),n.forEach(b),f.forEach(b),this.h()},h(){y(l,"class","inner cpeum-1qybubh"),p(l,"vertical",t[4]==="vertical"),y(e,"class","cpeum-1qybubh"),r(e,"--colspan",t[1],!1),r(e,"--rowspan",t[2],!1),r(e,"--cellIndex",t[5],!1),r(e,"text-align",t[3],!1),r(e,"align-items",t[3],!1)},m(s,f){v(s,e,f),j(e,l),o&&o.m(l,null),i=!0},p(s,f){o&&o.p&&(!i||f&64)&&D(o,u,s,s[6],i?A(u,s[6],f,null):w(s[6]),null),f&16&&p(l,"vertical",s[4]==="vertical"),f&2&&r(e,"--colspan",s[1],!1),f&4&&r(e,"--rowspan",s[2],!1),f&8&&r(e,"text-align",s[3],!1),f&8&&r(e,"align-items",s[3],!1)},i(s){i||(I(o,s),i=!0)},o(s){T(o,s),i=!1},d(s){s&&b(e),o&&o.d(s)}}}function ie(t){let e,l,i;const u=t[7].default,o=W(u,t,t[6],null);return{c(){e=g("th"),l=g("div"),o&&o.c(),this.h()},l(s){e=k(s,"TH",{class:!0});var f=C(e);l=k(f,"DIV",{class:!0});var n=C(l);o&&o.l(n),n.forEach(b),f.forEach(b),this.h()},h(){y(l,"class","inner cpeum-1qybubh"),p(l,"vertical",t[4]==="vertical"),y(e,"class","cpeum-1qybubh"),p(e,"sub",t[0]==="subheading"),r(e,"--colspan",t[1],!1),r(e,"--rowspan",t[2],!1),r(e,"--cellIndex",t[5],!1),r(e,"text-align",t[3],!1),r(e,"align-items",t[3],!1)},m(s,f){v(s,e,f),j(e,l),o&&o.m(l,null),i=!0},p(s,f){o&&o.p&&(!i||f&64)&&D(o,u,s,s[6],i?A(u,s[6],f,null):w(s[6]),null),f&16&&p(l,"vertical",s[4]==="vertical"),f&1&&p(e,"sub",s[0]==="subheading"),f&2&&r(e,"--colspan",s[1],!1),f&4&&r(e,"--rowspan",s[2],!1),f&8&&r(e,"text-align",s[3],!1),f&8&&r(e,"align-items",s[3],!1)},i(s){i||(I(o,s),i=!0)},o(s){T(o,s),i=!1},d(s){s&&b(e),o&&o.d(s)}}}function ne(t){let e,l,i,u;const o=[ie,te,ae],s=[];function f(n,_){return n[0]==="heading"||n[0]==="subheading"?0:n[0]==="body"?1:n[0]==="spacer"?2:-1}return~(e=f(t))&&(l=s[e]=o[e](t)),{c(){l&&l.c(),i=E()},l(n){l&&l.l(n),i=E()},m(n,_){~e&&s[e].m(n,_),v(n,i,_),u=!0},p(n,[_]){let h=e;e=f(n),e===h?~e&&s[e].p(n,_):(l&&(Z(),T(s[h],1,1,()=>{s[h]=null}),x()),~e?(l=s[e],l?l.p(n,_):(l=s[e]=o[e](n),l.c()),I(l,1),l.m(i.parentNode,i)):l=null)},i(n){u||(I(l),u=!0)},o(n){T(l),u=!1},d(n){~e&&s[e].d(n),n&&b(i)}}}function fe(t,e,l){let{$$slots:i={},$$scope:u}=e,{type:o="body"}=e,{colspan:s=1}=e,{rowspan:f=1}=e,{align:n="left"}=e,{orientation:_="horizontal"}=e;const c=$("table").setCellIndex();return t.$$set=a=>{"type"in a&&l(0,o=a.type),"colspan"in a&&l(1,s=a.colspan),"rowspan"in a&&l(2,f=a.rowspan),"align"in a&&l(3,n=a.align),"orientation"in a&&l(4,_=a.orientation),"$$scope"in a&&l(6,u=a.$$scope)},[o,s,f,n,_,c,u,i]}class ce extends P{constructor(e){super();S(this,e,fe,ne,B,{type:0,colspan:1,rowspan:2,align:3,orientation:4})}}export{re as T,ce as a};
