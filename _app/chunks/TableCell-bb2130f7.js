import{S,i as B,s as G,_ as j,C as W,e as g,t as J,c as k,a as C,h as L,d as h,g as v,J as q,j as M,k as O,l as y,m as Q,a1 as N,f as r,I as p,W as X,Q as Y,X as D,Y as w,Z as A,z as Z,q as I,o as E,G as F,a2 as V,r as K,a3 as R,n as U,p as x,ac as $,b as T,E as z}from"./index-82593c41.js";import{i as ee}from"./intersect-eda3c074.js";function P(t){let e,l;return{c(){e=g("caption"),l=J(t[1])},l(i){e=k(i,"CAPTION",{});var u=C(e);l=L(u,t[1]),u.forEach(h)},m(i,u){v(i,e,u),q(e,l)},p(i,u){u&2&&M(l,i[1])},d(i){i&&h(e)}}}function le(t){let e,l,i,u,o,s;const f=t[8].default,n=j(f,t,t[7],null);let _=[{visible:t[2]},t[5]],d={};for(let a=0;a<_.length;a+=1)d=W(d,_[a]);let c=t[1]&&P(t);return{c(){e=g("table"),n&&n.c(),l=O(),c&&c.c(),i=y(),this.h()},l(a){e=k(a,"TABLE",{visible:!0});var m=C(e);n&&n.l(m),m.forEach(h),l=Q(a),c&&c.l(a),i=y(),this.h()},h(){N(e,d),r(e,"--cols",t[0],!1),r(e,"grid-template-columns",t[3],!1),p(e,"cpeum-1vqy99j",!0)},m(a,m){v(a,e,m),n&&n.m(e,null),v(a,l,m),c&&c.m(a,m),v(a,i,m),u=!0,o||(s=[X(ee.call(null,e,{rootMargin:"-25% 0% -25%"})),Y(e,"enter",t[4],{once:!0})],o=!0)},p(a,[m]){n&&n.p&&(!u||m&128)&&D(n,f,a,a[7],u?A(f,a[7],m,null):w(a[7]),null),N(e,d=Z(_,[(!u||m&4)&&{visible:a[2]},m&32&&a[5]])),r(e,"--cols",a[0],!1),r(e,"grid-template-columns",a[3],!1),p(e,"cpeum-1vqy99j",!0),a[1]?c?c.p(a,m):(c=P(a),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null)},i(a){u||(I(n,a),u=!0)},o(a){E(n,a),u=!1},d(a){a&&h(e),n&&n.d(a),a&&h(l),c&&c.d(a),a&&h(i),o=!1,F(s)}}}function se(t,e,l){const i=["cols","caption","colsWidth"];let u=V(e,i),{$$slots:o={},$$scope:s}=e,{cols:f}=e,{caption:n=null}=e,{colsWidth:_={}}=e;const d=Array(parseInt(f+"")).fill("auto").map((b,H)=>_[H+1]||b).join(" ");let c=!1,a=0;K("table",{setCellIndex:()=>a++});function m(){l(2,c=!0)}return t.$$set=b=>{e=W(W({},e),R(b)),l(5,u=V(e,i)),"cols"in b&&l(0,f=b.cols),"caption"in b&&l(1,n=b.caption),"colsWidth"in b&&l(6,_=b.colsWidth),"$$scope"in b&&l(7,s=b.$$scope)},[f,n,c,d,m,u,_,s,o]}class re extends S{constructor(e){super(),B(this,e,se,le,G,{cols:0,caption:1,colsWidth:6})}}function ae(t){let e;return{c(){e=g("div"),this.h()},l(l){e=k(l,"DIV",{class:!0}),C(e).forEach(h),this.h()},h(){T(e,"class","spacer cpeum-1yu2976"),r(e,"--colspan",t[1],!1),r(e,"--rowspan",t[2],!1)},m(l,i){v(l,e,i)},p(l,i){i&2&&r(e,"--colspan",l[1],!1),i&4&&r(e,"--rowspan",l[2],!1)},i:z,o:z,d(l){l&&h(e)}}}function te(t){let e,l,i;const u=t[7].default,o=j(u,t,t[6],null);return{c(){e=g("td"),l=g("div"),o&&o.c(),this.h()},l(s){e=k(s,"TD",{class:!0});var f=C(e);l=k(f,"DIV",{class:!0});var n=C(l);o&&o.l(n),n.forEach(h),f.forEach(h),this.h()},h(){T(l,"class","inner cpeum-1yu2976"),p(l,"vertical",t[4]==="vertical"),T(e,"class","cpeum-1yu2976"),r(e,"--colspan",t[1],!1),r(e,"--rowspan",t[2],!1),r(e,"--cellIndex",t[5],!1),r(e,"text-align",t[3],!1),r(e,"align-items",t[3],!1)},m(s,f){v(s,e,f),q(e,l),o&&o.m(l,null),i=!0},p(s,f){o&&o.p&&(!i||f&64)&&D(o,u,s,s[6],i?A(u,s[6],f,null):w(s[6]),null),f&16&&p(l,"vertical",s[4]==="vertical"),f&2&&r(e,"--colspan",s[1],!1),f&4&&r(e,"--rowspan",s[2],!1),f&8&&r(e,"text-align",s[3],!1),f&8&&r(e,"align-items",s[3],!1)},i(s){i||(I(o,s),i=!0)},o(s){E(o,s),i=!1},d(s){s&&h(e),o&&o.d(s)}}}function ie(t){let e,l,i;const u=t[7].default,o=j(u,t,t[6],null);return{c(){e=g("th"),l=g("div"),o&&o.c(),this.h()},l(s){e=k(s,"TH",{class:!0});var f=C(e);l=k(f,"DIV",{class:!0});var n=C(l);o&&o.l(n),n.forEach(h),f.forEach(h),this.h()},h(){T(l,"class","inner cpeum-1yu2976"),p(l,"vertical",t[4]==="vertical"),T(e,"class","cpeum-1yu2976"),p(e,"sub",t[0]==="subheading"),r(e,"--colspan",t[1],!1),r(e,"--rowspan",t[2],!1),r(e,"--cellIndex",t[5],!1),r(e,"text-align",t[3],!1),r(e,"align-items",t[3],!1)},m(s,f){v(s,e,f),q(e,l),o&&o.m(l,null),i=!0},p(s,f){o&&o.p&&(!i||f&64)&&D(o,u,s,s[6],i?A(u,s[6],f,null):w(s[6]),null),f&16&&p(l,"vertical",s[4]==="vertical"),f&1&&p(e,"sub",s[0]==="subheading"),f&2&&r(e,"--colspan",s[1],!1),f&4&&r(e,"--rowspan",s[2],!1),f&8&&r(e,"text-align",s[3],!1),f&8&&r(e,"align-items",s[3],!1)},i(s){i||(I(o,s),i=!0)},o(s){E(o,s),i=!1},d(s){s&&h(e),o&&o.d(s)}}}function ne(t){let e,l,i,u;const o=[ie,te,ae],s=[];function f(n,_){return n[0]==="heading"||n[0]==="subheading"?0:n[0]==="body"?1:n[0]==="spacer"?2:-1}return~(e=f(t))&&(l=s[e]=o[e](t)),{c(){l&&l.c(),i=y()},l(n){l&&l.l(n),i=y()},m(n,_){~e&&s[e].m(n,_),v(n,i,_),u=!0},p(n,[_]){let d=e;e=f(n),e===d?~e&&s[e].p(n,_):(l&&(U(),E(s[d],1,1,()=>{s[d]=null}),x()),~e?(l=s[e],l?l.p(n,_):(l=s[e]=o[e](n),l.c()),I(l,1),l.m(i.parentNode,i)):l=null)},i(n){u||(I(l),u=!0)},o(n){E(l),u=!1},d(n){~e&&s[e].d(n),n&&h(i)}}}function fe(t,e,l){let{$$slots:i={},$$scope:u}=e,{type:o="body"}=e,{colspan:s=1}=e,{rowspan:f=1}=e,{align:n="left"}=e,{orientation:_="horizontal"}=e;const c=$("table").setCellIndex();return t.$$set=a=>{"type"in a&&l(0,o=a.type),"colspan"in a&&l(1,s=a.colspan),"rowspan"in a&&l(2,f=a.rowspan),"align"in a&&l(3,n=a.align),"orientation"in a&&l(4,_=a.orientation),"$$scope"in a&&l(6,u=a.$$scope)},[o,s,f,n,_,c,u,i]}class ce extends S{constructor(e){super(),B(this,e,fe,ne,G,{type:0,colspan:1,rowspan:2,align:3,orientation:4})}}export{re as T,ce as a};
