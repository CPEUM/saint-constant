var B=Object.defineProperty,C=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var m=(e,t,r)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))H.call(t,r)&&m(e,r,t[r]);if(b)for(var r of b(t))I.call(t,r)&&m(e,r,t[r]);return e},v=(e,t)=>C(e,D(t));import{S as k,i as y,s as L,e as Y,c as A,a as X,d as f,f as u,b as g,g as E,J as O,K as P,L as S,a3 as J,a4 as w,W as K,a5 as R,a6 as z,P as M,n as T,o as j,p as V,$ as W,a7 as Z,Y as F,Z as G,_ as N,q as Q}from"./vendor-16750a59.js";const U="rgb(248, 250, 255)",x="rgb(240, 242, 254)",$="rgb(230, 235, 250)",tt="rgb(074, 076, 082)",et="rgb(060, 062, 068)",rt="rgb(046, 048, 052)",st="rgb(248, 230, 120)",ot="rgb(234, 206, 082)",nt="rgb(210, 164, 060)",at="rgb(250, 204, 178)",it="rgb(240, 165, 130)",lt="rgb(235, 134, 115)",ct="rgb(180, 190, 245)",ut="rgb(146, 159, 243)",ft="rgb(118, 111, 230)",gt="rgb(164, 250, 172)",dt="rgb(124, 218, 127)",_t="rgb(059, 181, 108)";var ht={light1:U,light2:x,light3:$,dark1:tt,dark2:et,dark3:rt,accent1:st,accent2:ot,accent3:nt,agroparc1:at,agroparc2:it,agroparc3:lt,poles1:ct,poles2:ut,poles3:ft,promenades1:gt,promenades2:dt,promenades3:_t};function bt(e=[1,2,3],t=["accent","promenades","poles","agroparc"]){Array.isArray(e)||(e=[e]);const r=`${t[Math.floor(Math.random()*t.length)]}${e[Math.floor(Math.random()*e.length)]}`;return ht[r]}function mt(e){let t,r,i,n,l,o;return{c(){t=Y("div"),this.h()},l(s){t=A(s,"DIV",{style:!0,class:!0}),X(t).forEach(f),this.h()},h(){u(t,"width",e[0]+"px"),u(t,"height",e[0]+"px"),u(t,"top",e[2]+"px"),u(t,"left",e[3]+"px"),u(t,"background-color",e[1]),g(t,"class","svelte-1ek8j01")},m(s,a){E(s,t,a),n=!0,l||(o=O(window,"mousemove",e[6]),l=!0)},p(s,[a]){e=s,(!n||a&1)&&u(t,"width",e[0]+"px"),(!n||a&1)&&u(t,"height",e[0]+"px"),(!n||a&4)&&u(t,"top",e[2]+"px"),(!n||a&8)&&u(t,"left",e[3]+"px"),(!n||a&2)&&u(t,"background-color",e[1])},i(s){n||(P(()=>{i&&i.end(1),r=S(t,w,{start:.25,opacity:0,duration:250,easing:J}),r.start()}),n=!0)},o(s){r&&r.invalidate(),i=K(t,w,{start:.5,opacity:0,duration:150,easing:R}),n=!1},d(s){s&&f(t),s&&i&&i.end(),l=!1,o()}}}function pt(e,t,r){let i,n,{size:l=50}=t,{color:o=bt(3)}=t,{initX:s}=t,{initY:a}=t;const h={stiffness:.3,damping:.42},d=z(s,h);M(e,d,c=>r(3,n=c));const _=z(a,h);M(e,_,c=>r(2,i=c));function q(c){d.set(c.clientX),_.set(c.clientY)}return e.$$set=c=>{"size"in c&&r(0,l=c.size),"color"in c&&r(1,o=c.color),"initX"in c&&r(7,s=c.initX),"initY"in c&&r(8,a=c.initY)},[l,o,i,n,d,_,q,s,a]}class vt extends k{constructor(t){super();y(this,t,pt,mt,L,{size:0,color:1,initX:7,initY:8})}}function kt(e){e.$$.fragment&&e.$$.fragment.o?(T(),j(e.$$.fragment,0,0,()=>{e.$destroy()}),V()):e.$destroy()}function yt(e,t){let r;const i=e.getAttribute("title");function n(o){i&&e.removeAttribute("title"),r=new vt({target:e,intro:!0,props:v(p({},t),{initX:o.clientX,initY:o.clientY})})}function l(){i&&e.setAttribute("title",i),kt(r)}return e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",l),{destroy(){e.removeEventListener("mouseover",n),e.removeEventListener("mouseleave",l)}}}function Lt(e){let t,r,i,n;const l=e[2].default,o=W(l,e,e[1],null);return{c(){t=Y("a"),o&&o.c(),this.h()},l(s){t=A(s,"A",{href:!0,class:!0});var a=X(t);o&&o.l(a),a.forEach(f),this.h()},h(){g(t,"href",e[0]),g(t,"class","svelte-1tc2d7a")},m(s,a){E(s,t,a),o&&o.m(t,null),r=!0,i||(n=Z(yt.call(null,t,{color:"var(--accent3)"})),i=!0)},p(s,[a]){o&&o.p&&(!r||a&2)&&F(o,l,s,s[1],r?N(l,s[1],a,null):G(s[1]),null),(!r||a&1)&&g(t,"href",s[0])},i(s){r||(Q(o,s),r=!0)},o(s){j(o,s),r=!1},d(s){s&&f(t),o&&o.d(s),i=!1,n()}}}function Yt(e,t,r){let{$$slots:i={},$$scope:n}=t,{href:l}=t;return e.$$set=o=>{"href"in o&&r(0,l=o.href),"$$scope"in o&&r(1,n=o.$$scope)},[l,n,i]}class Et extends k{constructor(t){super();y(this,t,Yt,Lt,L,{href:0})}}export{Et as L,bt as g,yt as h};