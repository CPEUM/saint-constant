var oe=Object.defineProperty,ie=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var G=(l,e,a)=>e in l?oe(l,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[e]=a,O=(l,e)=>{for(var a in e||(e={}))ue.call(e,a)&&G(l,a,e[a]);if(F)for(var a of F(e))fe.call(e,a)&&G(l,a,e[a]);return l},X=(l,e)=>ie(l,ne(e));import{S as re,i as le,s as C,I as ae,k as U,l as S,J as se,a as b,d as m,m as W,b as f,g as $,n as H,o as y,E as I,p as M,q as d,$ as P,a0 as E,a1 as ce,e as R,t as D,c as B,h as T,f as J,M as w,j as V,a2 as _e,a4 as he,Y as z,v as pe,R as me,w as de,x as ke,y as ve,V as ge,W as ye,X as $e,B as we}from"../../chunks/index-897d5eac.js";import{e as A,g as K,a as be}from"../../chunks/themeColors-84e338fb.js";/* empty css                                                       */import{e as Ee}from"../../chunks/route-dab53cb1.js";import{m as qe}from"../../chunks/scroll-b5859ca7.js";import{t as q}from"../../chunks/text-fd1b3079.js";import{a as j}from"../../chunks/index-3148e0ff.js";import{g as Re}from"../../chunks/generateSvgPaths-8c5d72ca.js";import{r as L}from"../../chunks/revealText-510b6fa3.js";import"../../chunks/paths-396f020f.js";import"../../chunks/index-3c0165fd.js";import"../../chunks/intersect-eda3c074.js";function Q(l,e,a){const i=l.slice();return i[6]=e[a],i}function Z(l){let e,a=l[0],i,r,o,t,s,n=l[0],c,k,p=ee(l),h=te(l);return{c(){e=ae("svg"),p.c(),s=U(),h.c(),c=S(),this.h()},l(u){e=se(u,"svg",{height:!0,width:!0,viewBox:!0,preserveAspectRatio:!0,class:!0});var _=b(e);p.l(_),_.forEach(m),s=W(u),h.l(u),c=S(),this.h()},h(){f(e,"height",i=l[4].height),f(e,"width",r=l[4].width),f(e,"viewBox",o="0 0 "+l[4].width+" "+l[4].height),f(e,"preserveAspectRatio","xMidYMax slice"),f(e,"class","cpeum-dp5hqo")},m(u,_){$(u,e,_),p.m(e,null),$(u,s,_),h.m(u,_),$(u,c,_),k=!0},p(u,_){_&1&&C(a,a=u[0])?(H(),y(p,1,1,I),M(),p=ee(u),p.c(),d(p),p.m(e,null)):p.p(u,_),_&1&&C(n,n=u[0])?(H(),y(h,1,1,I),M(),h=te(u),h.c(),d(h),h.m(c.parentNode,c)):h.p(u,_)},i(u){k||(d(p),u&&P(()=>{t||(t=E(e,j,{},!0)),t.run(1)}),d(h),k=!0)},o(u){y(p),u&&(t||(t=E(e,j,{},!1)),t.run(0)),y(h),k=!1},d(u){u&&m(e),p.d(u),u&&t&&t.end(),u&&m(s),u&&m(c),h.d(u)}}}function x(l){let e,a,i,r,o,t;return{c(){e=ae("path"),this.h()},l(s){e=se(s,"path",{"vector-effect":!0,d:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linejoin":!0,"stroke-linecap":!0,"stroke-dasharray":!0,"stroke-dashoffset":!0}),b(e).forEach(m),this.h()},h(){f(e,"vector-effect","non-scaling-stroke"),f(e,"d",a=l[6].d),f(e,"fill",i=l[6].fill),f(e,"stroke",r=l[6].strokeColor),f(e,"stroke-width","50"),f(e,"stroke-linejoin","round"),f(e,"stroke-linecap","round"),f(e,"stroke-dasharray","54% 20% 64% 90% 30% 130%"),f(e,"stroke-dashoffset",Math.random()*300+"%")},m(s,n){$(s,e,n),t=!0},p(s,n){(!t||n&4&&a!==(a=s[6].d))&&f(e,"d",a),(!t||n&4&&i!==(i=s[6].fill))&&f(e,"fill",i),(!t||n&4&&r!==(r=s[6].strokeColor))&&f(e,"stroke",r)},i(s){t||(P(()=>{o||(o=E(e,j,{},!0)),o.run(1)}),t=!0)},o(s){o||(o=E(e,j,{},!1)),o.run(0),t=!1},d(s){s&&m(e),s&&o&&o.end()}}}function ee(l){let e,a,i=l[2],r=[];for(let t=0;t<i.length;t+=1)r[t]=x(Q(l,i,t));const o=t=>y(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let s=0;s<r.length;s+=1)r[s].l(t);e=S()},m(t,s){for(let n=0;n<r.length;n+=1)r[n].m(t,s);$(t,e,s),a=!0},p(t,s){if(s&4){i=t[2];let n;for(n=0;n<i.length;n+=1){const c=Q(t,i,n);r[n]?(r[n].p(c,s),d(r[n],1)):(r[n]=x(c),r[n].c(),d(r[n],1),r[n].m(e.parentNode,e))}for(H(),n=i.length;n<r.length;n+=1)o(n);M()}},i(t){if(!a){for(let s=0;s<i.length;s+=1)d(r[s]);a=!0}},o(t){r=r.filter(Boolean);for(let s=0;s<r.length;s+=1)y(r[s]);a=!1},d(t){ce(r,t),t&&m(e)}}}function te(l){let e,a,i,r=A.indexOf(l[0])+1+"",o,t,s,n,c=l[0].heading+"",k,p,h,u=`${l[3].y}px`,_;return{c(){e=R("hgroup"),a=R("span"),i=D("eXERCicE 0"),o=D(r),s=U(),n=R("h1"),k=D(c),this.h()},l(v){e=B(v,"HGROUP",{class:!0});var g=b(e);a=B(g,"SPAN",{class:!0});var N=b(a);i=T(N,"eXERCicE 0"),o=T(N,r),N.forEach(m),s=W(g),n=B(g,"H1",{class:!0});var Y=b(n);k=T(Y,c),Y.forEach(m),g.forEach(m),this.h()},h(){f(a,"class","cpeum-dp5hqo"),f(n,"class","cpeum-dp5hqo"),f(e,"class","cpeum-dp5hqo"),J(e,"--scroll",u,!1)},m(v,g){$(v,e,g),w(e,a),w(a,i),w(a,o),w(e,s),w(e,n),w(n,k),_=!0},p(v,g){l=v,(!_||g&1)&&r!==(r=A.indexOf(l[0])+1+"")&&V(o,r),(!_||g&1)&&c!==(c=l[0].heading+"")&&V(k,c),g&8&&u!==(u=`${l[3].y}px`)&&J(e,"--scroll",u,!1)},i(v){_||(P(()=>{t||(t=E(a,q,X(O({},L),{granularity:"char"}),!0)),t.run(1)}),P(()=>{h&&h.end(1),p=_e(n,q,{y:".5em",mask:!0,maskPadding:".1em",granularity:"word",staggerDelay:50,delay:500}),p.start()}),_=!0)},o(v){t||(t=E(a,q,X(O({},L),{granularity:"char"}),!1)),t.run(0),p&&p.invalidate(),h=he(n,q,{y:"-.5em",mask:!0,maskPadding:".1em",delay:0}),_=!1},d(v){v&&m(e),v&&t&&t.end(),v&&h&&h.end()}}}function Be(l){let e,a,i,r=l[1]&&Z(l);return{c(){e=R("header"),r&&r.c(),this.h()},l(o){e=B(o,"HEADER",{style:!0,class:!0});var t=b(e);r&&r.l(t),t.forEach(m),this.h()},h(){f(e,"style",a=K(l[0].key)),f(e,"class","cpeum-dp5hqo")},m(o,t){$(o,e,t),r&&r.m(e,null),i=!0},p(o,[t]){o[1]?r?(r.p(o,t),t&2&&d(r,1)):(r=Z(o),r.c(),d(r,1),r.m(e,null)):r&&(H(),y(r,1,1,()=>{r=null}),M()),(!i||t&1&&a!==(a=K(o[0].key)))&&f(e,"style",a)},i(o){i||(d(r),i=!0)},o(o){y(r),i=!1},d(o){o&&m(e),r&&r.d()}}}function Ce(l,e,a){let i,r;z(l,Ee,c=>a(0,i=c)),z(l,qe,c=>a(3,r=c));let o=!1,t;const s={width:1500,height:1200};function n(c){return Re(4,{viewBox:s,padding:800}).map(k=>({viewBox:`0 0 ${s.width} ${s.height}`,d:k,fill:be([3,2],[i.key])}))}return pe(()=>{a(1,o=!0)}),l.$$.update=()=>{l.$$.dirty&1&&a(2,t=n(i.key))},[i,o,t,r,s]}class Se extends re{constructor(e){super(),le(this,e,Ce,Be,C,{})}}function He(l){let e,a,i;e=new Se({});const r=l[1].default,o=me(r,l,l[0],null);return{c(){de(e.$$.fragment),a=U(),o&&o.c()},l(t){ke(e.$$.fragment,t),a=W(t),o&&o.l(t)},m(t,s){ve(e,t,s),$(t,a,s),o&&o.m(t,s),i=!0},p(t,[s]){o&&o.p&&(!i||s&1)&&ge(o,r,t,t[0],i?$e(r,t[0],s,null):ye(t[0]),null)},i(t){i||(d(e.$$.fragment,t),d(o,t),i=!0)},o(t){y(e.$$.fragment,t),y(o,t),i=!1},d(t){we(e,t),t&&m(a),o&&o.d(t)}}}async function Ie({url:l}){return A.find(a=>a.path===l.pathname)?{props:{}}:{status:308,redirect:A[0].path}}function Me(l,e,a){let{$$slots:i={},$$scope:r}=e;return l.$$set=o=>{"$$scope"in o&&a(0,r=o.$$scope)},[r,i]}class Je extends re{constructor(e){super(),le(this,e,Me,He,C,{})}}export{Je as default,Ie as load};
