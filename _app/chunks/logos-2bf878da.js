var V=Object.defineProperty;var M=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var C=(e,t,i)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,X=(e,t)=>{for(var i in t||(t={}))A.call(t,i)&&C(e,i,t[i]);if(M)for(var i of M(t))N.call(t,i)&&C(e,i,t[i]);return e};import{ad as Y,ae as Q,S as x,i as B,s as H,e as K,c as T,a as U,d as E,f,b as F,g as D,K as G,R as J,U as W,l as j,Q as Z,q as k,n as $,o as q,p as ee,N as z}from"./index-8814b013.js";import{c as te,s as I,b as ie}from"./index-b9ab12a0.js";import{w as se}from"./index-ff6a0fc0.js";import"./Link-3680a59c.js";function L(e){return Object.prototype.toString.call(e)==="[object Date]"}function y(e,t,i,r){if(typeof i=="number"||L(i)){const o=r-i,s=(i-t)/(e.dt||1/60),n=e.opts.stiffness*o,l=e.opts.damping*s,u=(n-l)*e.inv_mass,c=(s+u)*e.dt;return Math.abs(c)<e.opts.precision&&Math.abs(o)<e.opts.precision?r:(e.settled=!1,L(i)?new Date(i.getTime()+c):i+c)}else{if(Array.isArray(i))return i.map((o,s)=>y(e,t[s],i[s],r[s]));if(typeof i=="object"){const o={};for(const s in i)o[s]=y(e,t[s],i[s],r[s]);return o}else throw new Error(`Cannot spring ${typeof i} values`)}}function O(e,t={}){const i=se(e),{stiffness:r=.15,damping:o=.8,precision:s=.01}=t;let n,l,u,c=e,d=e,m=1,p=0,b=!1;function a(_,h={}){d=_;const P=u={};if(e==null||h.hard||v.stiffness>=1&&v.damping>=1)return b=!0,n=Y(),c=_,i.set(e=d),Promise.resolve();if(h.soft){const g=h.soft===!0?.5:+h.soft;p=1/(g*60),m=0}return l||(n=Y(),b=!1,l=Q(g=>{if(b)return b=!1,l=null,!1;m=Math.min(m+p,1);const w={inv_mass:m,opts:v,settled:!0,dt:(g-n)*60/1e3},R=y(w,c,e,d);return n=g,c=e,i.set(e=R),w.settled&&(l=null),!w.settled})),new Promise(g=>{l.promise.then(()=>{P===u&&g()})})}const v={set:a,update:(_,h)=>a(_(d,e),h),subscribe:i.subscribe,stiffness:r,damping:o,precision:s};return v}function S(e){let t,i,r,o;return{c(){t=K("div"),this.h()},l(s){t=T(s,"DIV",{style:!0,class:!0}),U(t).forEach(E),this.h()},h(){f(t,"width",e[0]+"px"),f(t,"height",e[0]+"px"),f(t,"top",e[3]+"px"),f(t,"left",e[4]+"px"),f(t,"background-color",e[1]),F(t,"class","cpeum-1ek8j01")},m(s,n){D(s,t,n),o=!0},p(s,n){e=s,(!o||n&1)&&f(t,"width",e[0]+"px"),(!o||n&1)&&f(t,"height",e[0]+"px"),(!o||n&8)&&f(t,"top",e[3]+"px"),(!o||n&16)&&f(t,"left",e[4]+"px"),(!o||n&2)&&f(t,"background-color",e[1])},i(s){o||(G(()=>{r&&r.end(1),i=J(t,I,{start:.25,opacity:0,duration:250,easing:te}),i.start()}),o=!0)},o(s){i&&i.invalidate(),r=W(t,I,{start:.5,opacity:0,duration:150,easing:ie}),o=!1},d(s){s&&E(t),s&&r&&r.end()}}}function ne(e){let t,i,r,o,s=e[2]&&S(e);return{c(){s&&s.c(),t=j()},l(n){s&&s.l(n),t=j()},m(n,l){s&&s.m(n,l),D(n,t,l),i=!0,r||(o=Z(window,"mousemove",e[7]),r=!0)},p(n,[l]){n[2]?s?(s.p(n,l),l&4&&k(s,1)):(s=S(n),s.c(),k(s,1),s.m(t.parentNode,t)):s&&($(),q(s,1,1,()=>{s=null}),ee())},i(n){i||(k(s),i=!0)},o(n){q(s),i=!1},d(n){s&&s.d(n),n&&E(t),r=!1,o()}}}function oe(e,t,i){let r,o,{size:s=50}=t,{color:n="var(--light3)"}=t,{initX:l=0}=t,{initY:u=0}=t,{active:c=!1}=t;const d={stiffness:.15,damping:.5},m=O(l,d);z(e,m,a=>i(4,o=a));const p=O(u,d);z(e,p,a=>i(3,r=a));function b(a){m.set(a.clientX),p.set(a.clientY)}return e.$$set=a=>{"size"in a&&i(0,s=a.size),"color"in a&&i(1,n=a.color),"initX"in a&&i(8,l=a.initX),"initY"in a&&i(9,u=a.initY),"active"in a&&i(2,c=a.active)},[s,n,c,r,o,m,p,b,l,u]}class re extends x{constructor(t){super(),B(this,t,oe,ne,H,{size:0,color:1,initX:8,initY:9,active:2})}}function me(e,t){const i=new re({target:e,intro:!0,props:X({},t)});function r(s){i.$set({active:!0})}function o(){i.$set({active:!1})}return e.addEventListener("mouseenter",r),e.addEventListener("mouseleave",o),{destroy(){e.removeEventListener("mouseover",r),e.removeEventListener("mouseleave",o)}}}var de={prime:[{filename:"saint-constant-couleur.svg",alt:"Ville de Saint-Constant",href:"https://saint-constant.ca/"},{filename:"mrc-roussillon-couleur.svg",alt:"Municipalit\xE9s r\xE9gionales de comt\xE9 de Roussillon",href:"https://roussillon.ca/"},{filename:"quebec-couleur.svg",alt:"Minist\xE8re de l\u2019\xC9conomie et de l\u2019Innovation du Qu\xE9bec",href:"https://www.economie.gouv.qc.ca/accueil/"}],second:[{filename:"vrm-couleur.svg",alt:"Villes R\xE9gions Monde",href:"http://www.vrm.ca/"},{filename:"ivanhoe-cambridge-couleur.svg",alt:"Observatoire Ivanho\xE9 Cambridge du d\xE9veloppement urbain et immobilier",href:"https://observatoire-ivanhoe-cambridge.umontreal.ca/"}]};export{me as h,de as l};
