import{S as ae,i as oe,s as ee,e as k,c as b,a as g,d as f,b as c,F as Le,G as B,g as I,H as p,I as G,J as z,K as st,v as Ze,L as at,M as ot,t as V,k as C,h as D,m as P,N as H,O as je,P as ue,l as Z,q as v,n as Q,o as M,p as J,Q as _e,R as ne,T as se,U as ye,V as x,W as ke,X as he,f as de,Y as Ae,z as it,Z as xe,C as ct,w as K,x as W,y as X,B as Y,_ as ft,$ as ut,a0 as ht,a1 as _t,a2 as pt,a3 as mt,a4 as dt,a5 as gt}from"../chunks/vendor-dc8c1d98.js";import{m as pe,g as vt}from"../chunks/exerciceColors-c77c9288.js";/* empty css                                                  */import{r as et,e as tt,g as $t,n as yt}from"../chunks/route-7d2d5430.js";import{e as Ce,r as ge}from"../chunks/routes-68efdb25.js";import{m as kt}from"../chunks/scroll-bba83cb1.js";import{b as bt}from"../chunks/paths-4b3c6e7e.js";import{i as Et}from"../chunks/intersect-2f4a341d.js";import{l as me,L as lt}from"../chunks/logos-fed1bace.js";async function Nt(o){const e=await fetch(o);if(e.ok)return await e.json();throw new Error(`Couldn't get data fetched at ${o}`)}function wt(o){let e,l,t,r;return{c(){e=k("figure"),l=k("div"),this.h()},l(s){e=b(s,"FIGURE",{class:!0,style:!0});var n=g(e);l=b(n,"DIV",{class:!0}),g(l).forEach(f),n.forEach(f),this.h()},h(){c(l,"class","cpeum-i6hd3v"),c(e,"class",t=Le(o[1].class)+" cpeum-i6hd3v"),c(e,"style",r=o[1].style),B(e,"full",o[1].isfull)},m(s,n){I(s,e,n),p(e,l),o[2](l)},p(s,[n]){n&2&&t!==(t=Le(s[1].class)+" cpeum-i6hd3v")&&c(e,"class",t),n&2&&r!==(r=s[1].style)&&c(e,"style",r),n&2&&B(e,"full",s[1].isfull)},i:G,o:G,d(s){s&&f(e),o[2](null)}}}let Pe;function Mt(o,e,l){let t;z(o,pe,a=>l(1,t=a));let r;const s=st();Ze(async()=>{Nt("/data/test.json"),Pe=new at.exports.Map({container:r,style:"mapbox://styles/iolyd/ckzw8nw7y001z14pq7ek199lr",center:[0,0],zoom:1}),Pe.once("load",()=>{s("load")})});function n(a){ot[a?"unshift":"push"](()=>{r=a,l(0,r)})}return[r,t,n]}class St extends ae{constructor(e){super();oe(this,e,Mt,wt,ee,{})}}const It=!0;function qe(o,e,l){const t=o.slice();return t[3]=e[l],t[5]=l,t}function Be(o){let e,l,t,r=Ce,s=[];for(let n=0;n<r.length;n+=1)s[n]=Te(qe(o,r,n));return{c(){e=k("nav");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=b(n,"NAV",{class:!0});var a=g(e);for(let i=0;i<s.length;i+=1)s[i].l(a);a.forEach(f),this.h()},h(){c(e,"class","cpeum-17tbchp"),B(e,"min",o[1].isfull)},m(n,a){I(n,e,a);for(let i=0;i<s.length;i+=1)s[i].m(e,null);t=!0},p(n,a){if(a&4){r=Ce;let i;for(i=0;i<r.length;i+=1){const d=qe(n,r,i);s[i]?s[i].p(d,a):(s[i]=Te(d),s[i].c(),s[i].m(e,null))}for(;i<s.length;i+=1)s[i].d(1);s.length=r.length}a&2&&B(e,"min",n[1].isfull)},i(n){t||(H(()=>{l||(l=je(e,_e,{y:-25},!0)),l.run(1)}),t=!0)},o(n){l||(l=je(e,_e,{y:-25},!1)),l.run(0),t=!1},d(n){n&&f(e),ue(s,n),n&&l&&l.end()}}}function Te(o){let e,l,t,r=o[5]+1+"",s,n,a,i,d=o[3].title+"",$,h,_,E;return{c(){e=k("a"),l=k("span"),t=V("0"),s=V(r),n=V("."),a=V("\xA0"),i=k("span"),$=V(d),h=C(),this.h()},l(S){e=b(S,"A",{href:!0,"sveltekit:prefetch":!0,style:!0,class:!0});var y=g(e);l=b(y,"SPAN",{class:!0});var T=g(l);t=D(T,"0"),s=D(T,r),n=D(T,"."),T.forEach(f),a=D(y,"\xA0"),i=b(y,"SPAN",{class:!0});var N=g(i);$=D(N,d),N.forEach(f),h=P(y),y.forEach(f),this.h()},h(){c(l,"class","number cpeum-17tbchp"),c(i,"class","title cpeum-17tbchp"),c(e,"href",_=o[3].path),c(e,"sveltekit:prefetch",""),c(e,"style",E=vt(o[3].key)),c(e,"class","cpeum-17tbchp"),B(e,"current",o[2]===o[3])},m(S,y){I(S,e,y),p(e,l),p(l,t),p(l,s),p(l,n),p(e,a),p(e,i),p(i,$),p(e,h)},p(S,y){y&4&&B(e,"current",S[2]===S[3])},d(S){S&&f(e)}}}function Lt(o){let e,l,t=o[0].exercices&&Be(o);return{c(){t&&t.c(),e=Z()},l(r){t&&t.l(r),e=Z()},m(r,s){t&&t.m(r,s),I(r,e,s),l=!0},p(r,[s]){r[0].exercices?t?(t.p(r,s),s&1&&v(t,1)):(t=Be(r),t.c(),v(t,1),t.m(e.parentNode,e)):t&&(Q(),M(t,1,1,()=>{t=null}),J())},i(r){l||(v(t),l=!0)},o(r){M(t),l=!1},d(r){t&&t.d(r),r&&f(e)}}}function jt(o,e,l){let t,r,s;return z(o,et,n=>l(0,t=n)),z(o,pe,n=>l(1,r=n)),z(o,tt,n=>l(2,s=n)),[t,r,s]}class At extends ae{constructor(e){super();oe(this,e,jt,Lt,ee,{})}}function Ct(o){let e,l,t,r;return{c(){e=ne("line"),t=ne("line"),this.h()},l(s){e=se(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),g(e).forEach(f),t=se(s,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),g(t).forEach(f),this.h()},h(){c(e,"x1","30"),c(e,"y1","30"),c(e,"x2","70"),c(e,"y2","70"),c(e,"vector-effect","non-scaling-stroke"),c(t,"x1","30"),c(t,"y1","70"),c(t,"x2","70"),c(t,"y2","30"),c(t,"vector-effect","non-scaling-stroke")},m(s,n){I(s,e,n),I(s,t,n)},i(s){l||H(()=>{l=x(e,he,{}),l.start()}),r||H(()=>{r=x(t,he,{delay:150}),r.start()})},o:G,d(s){s&&f(e),s&&f(t)}}}function Pt(o){let e,l,t,r;return{c(){e=ne("path"),t=ne("circle"),this.h()},l(s){e=se(s,"path",{d:!0,"vector-effect":!0}),g(e).forEach(f),t=se(s,"circle",{cx:!0,cy:!0,r:!0,"vector-effect":!0}),g(t).forEach(f),this.h()},h(){c(e,"d",`M46,88.3L25.8,50.5c-5.7-10.7-3.8-23.9,4.8-32.4l0,0c10.7-10.7,28.2-10.7,38.9,0l0,0
			c8.6,8.6,10.5,21.7,4.8,32.4L54.1,88.3C52.4,91.5,47.7,91.5,46,88.3z`),c(e,"vector-effect","non-scaling-stroke"),c(t,"cx","50.5"),c(t,"cy","37.4"),c(t,"r","11.1"),c(t,"vector-effect","non-scaling-stroke")},m(s,n){I(s,e,n),I(s,t,n)},i(s){l||H(()=>{l=x(e,he,{}),l.start()}),r||H(()=>{r=x(t,he,{delay:150}),r.start()})},o:G,d(s){s&&f(e),s&&f(t)}}}function qt(o){let e,l,t,r,s,n,a;function i(h,_){return h[0].isfull?Ct:Pt}let d=i(o),$=d(o);return{c(){e=k("label"),l=k("input"),r=C(),s=ne("svg"),$.c(),this.h()},l(h){e=b(h,"LABEL",{id:!0,for:!0,class:!0});var _=g(e);l=b(_,"INPUT",{id:!0,type:!0,class:!0}),r=P(_),s=se(_,"svg",{version:!0,viewBox:!0,"shape-rendering":!0,class:!0});var E=g(s);$.l(E),E.forEach(f),_.forEach(f),this.h()},h(){c(l,"id","map-toggle-input"),c(l,"type","checkbox"),c(l,"class","cpeum-1sn1vss"),c(s,"version","1.1"),c(s,"viewBox","0 0 100 100"),c(s,"shape-rendering","geometricPrecision"),c(s,"class","cpeum-1sn1vss"),c(e,"id","map-toggle"),c(e,"for","map-toggle-input"),c(e,"class","cpeum-1sn1vss"),B(e,"active",o[0].isfull)},m(h,_){I(h,e,_),p(e,l),l.checked=o[0].isfull,p(e,r),p(e,s),$.m(s,null),n||(a=ye(l,"change",o[1]),n=!0)},p(h,[_]){o=h,_&1&&(l.checked=o[0].isfull),d!==(d=i(o))&&($.d(1),$=d(o),$&&($.c(),v($,1),$.m(s,null))),_&1&&B(e,"active",o[0].isfull)},i(h){t||H(()=>{t=x(l,_e,{x:-40,easing:ke,duration:500,delay:1500}),t.start()}),v($)},o:G,d(h){h&&f(e),$.d(),n=!1,a()}}}function Bt(o,e,l){let t;z(o,pe,s=>l(0,t=s));function r(){t.isfull=this.checked,pe.set(t)}return[t,r]}class Tt extends ae{constructor(e){super();oe(this,e,Bt,qt,ee,{})}}function Ue(o,e,l){const t=o.slice();return t[4]=e[l],t[6]=l,t}function Re(o,e,l){const t=o.slice();return t[7]=e[l],t[6]=l,t}function Ve(o){let e,l,t=ze(),r=[];for(let n=0;n<t.length;n+=1)r[n]=De(Re(o,t,n));const s=n=>M(r[n],1,1,()=>{r[n]=null});return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=Z()},l(n){for(let a=0;a<r.length;a+=1)r[a].l(n);e=Z()},m(n,a){for(let i=0;i<r.length;i+=1)r[i].m(n,a);I(n,e,a),l=!0},p(n,a){if(a&0){t=ze();let i;for(i=0;i<t.length;i+=1){const d=Re(n,t,i);r[i]?(r[i].p(d,a),v(r[i],1)):(r[i]=De(d),r[i].c(),v(r[i],1),r[i].m(e.parentNode,e))}for(Q(),i=t.length;i<r.length;i+=1)s(i);J()}},i(n){if(!l){for(let a=0;a<t.length;a+=1)v(r[a]);l=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)M(r[a]);l=!1},d(n){ue(r,n),n&&f(e)}}}function De(o){let e,l,t,r,s=[o[7],{"vector-effect":"non-scaling-stroke"}],n={};for(let a=0;a<s.length;a+=1)n=ct(n,s[a]);return{c(){e=ne("line"),this.h()},l(a){e=se(a,"line",{"vector-effect":!0}),g(e).forEach(f),this.h()},h(){Ae(e,n),B(e,"cpeum-1hk0nx3",!0)},m(a,i){I(a,e,i),r=!0},p(a,i){Ae(e,n=it(s,[a[7],{"vector-effect":"non-scaling-stroke"}])),B(e,"cpeum-1hk0nx3",!0)},i(a){r||(H(()=>{t&&t.end(1),l=x(e,he,{speed:.25,delay:o[6]*20}),l.start()}),r=!0)},o(a){l&&l.invalidate(),t=xe(e,he,{speed:.5,delay:o[6]*20}),r=!1},d(a){a&&f(e),a&&t&&t.end()}}}function Oe(o){var T;let e,l,t,r,s=o[4].title+"",n,a,i,d=o[4].title+"",$,h,_,E=`${o[6]*60}ms`,S,y=o[4].title==((T=o[3])==null?void 0:T.title)&&Ve(o);return{c(){e=k("a"),l=ne("svg"),y&&y.c(),t=C(),r=k("span"),n=V(s),a=C(),i=k("span"),$=V(d),h=C(),this.h()},l(N){e=b(N,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var A=g(e);l=se(A,"svg",{class:!0});var R=g(l);y&&y.l(R),R.forEach(f),t=P(A),r=b(A,"SPAN",{class:!0});var F=g(r);n=D(F,s),F.forEach(f),a=P(A),i=b(A,"SPAN",{class:!0});var te=g(i);$=D(te,d),te.forEach(f),h=P(A),A.forEach(f),this.h()},h(){var N;c(l,"class","cpeum-1hk0nx3"),c(r,"class","text cpeum-1hk0nx3"),c(i,"class","hover-text cpeum-1hk0nx3"),c(e,"href",_=o[4].exercices?o[2].path:o[4].path),c(e,"sveltekit:prefetch",""),c(e,"class","cpeum-1hk0nx3"),B(e,"current",o[4].title==((N=o[3])==null?void 0:N.title)),de(e,"background-color",o[0].y>ve+200?"var(--light1)":"",!1),de(e,"--delay",E,!1)},m(N,A){I(N,e,A),p(e,l),y&&y.m(l,null),p(e,t),p(e,r),p(r,n),p(e,a),p(e,i),p(i,$),p(e,h),S=!0},p(N,A){var R,F;N[4].title==((R=N[3])==null?void 0:R.title)?y?(y.p(N,A),A&8&&v(y,1)):(y=Ve(N),y.c(),v(y,1),y.m(l,null)):y&&(Q(),M(y,1,1,()=>{y=null}),J()),(!S||A&4&&_!==(_=N[4].exercices?N[2].path:N[4].path))&&c(e,"href",_),A&8&&B(e,"current",N[4].title==((F=N[3])==null?void 0:F.title)),A&1&&de(e,"background-color",N[0].y>ve+200?"var(--light1)":"",!1)},i(N){S||(v(y),S=!0)},o(N){M(y),S=!1},d(N){N&&f(e),y&&y.d()}}}function Ut(o){let e,l,t=ge,r=[];for(let n=0;n<t.length;n+=1)r[n]=Oe(Ue(o,t,n));const s=n=>M(r[n],1,1,()=>{r[n]=null});return{c(){e=k("nav");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=b(n,"NAV",{class:!0});var a=g(e);for(let i=0;i<r.length;i+=1)r[i].l(a);a.forEach(f),this.h()},h(){c(e,"class","cpeum-1hk0nx3"),B(e,"min",o[0].direction=="down"&&o[0].y>ve||o[1].isfull)},m(n,a){I(n,e,a);for(let i=0;i<r.length;i+=1)r[i].m(e,null);l=!0},p(n,[a]){if(a&13){t=ge;let i;for(i=0;i<t.length;i+=1){const d=Ue(n,t,i);r[i]?(r[i].p(d,a),v(r[i],1)):(r[i]=Oe(d),r[i].c(),v(r[i],1),r[i].m(e,null))}for(Q(),i=t.length;i<r.length;i+=1)s(i);J()}a&3&&B(e,"min",n[0].direction=="down"&&n[0].y>ve||n[1].isfull)},i(n){if(!l){for(let a=0;a<t.length;a+=1)v(r[a]);l=!0}},o(n){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)M(r[a]);l=!1},d(n){n&&f(e),ue(r,n)}}}const ve=120;function ze(){const o=Math.round(8+Math.random()*4),e=0,l=0;return[...Array(o)].map(t=>({x1:l+Math.random()*(100-2*l)+"%",y1:e+Math.random()*(100-2*e)+"%",x2:l+Math.random()*(100-2*l)+"%",y2:e+Math.random()*(100-2*e)+"%",stroke:`hsl(${20+Math.random()*180}, 60%, 70%)`}))}function Rt(o,e,l){let t,r,s,n;return z(o,kt,a=>l(0,t=a)),z(o,pe,a=>l(1,r=a)),z(o,tt,a=>l(2,s=a)),z(o,et,a=>l(3,n=a)),[t,r,s,n]}class Vt extends ae{constructor(e){super();oe(this,e,Rt,Ut,ee,{})}}function Fe(o){let e,l,t,r,s,n,a,i,d,$;return r=new Vt({}),n=new At({}),i=new Tt({}),{c(){e=k("header"),l=k("div"),t=k("section"),K(r.$$.fragment),s=C(),K(n.$$.fragment),a=C(),K(i.$$.fragment),this.h()},l(h){e=b(h,"HEADER",{class:!0});var _=g(e);l=b(_,"DIV",{class:!0});var E=g(l);t=b(E,"SECTION",{class:!0});var S=g(t);W(r.$$.fragment,S),s=P(S),W(n.$$.fragment,S),S.forEach(f),a=P(E),W(i.$$.fragment,E),E.forEach(f),_.forEach(f),this.h()},h(){c(t,"class","cpeum-f692is"),c(l,"class","cpeum-f692is"),c(e,"class","cpeum-f692is")},m(h,_){I(h,e,_),p(e,l),p(l,t),X(r,t,null),p(t,s),X(n,t,null),p(l,a),X(i,l,null),$=!0},p(h,_){},i(h){$||(v(r.$$.fragment,h),v(n.$$.fragment,h),v(i.$$.fragment,h),d||H(()=>{d=x(e,_e,{opacity:0,y:-20,duration:800,easing:ke,delay:1e3}),d.start()}),$=!0)},o(h){M(r.$$.fragment,h),M(n.$$.fragment,h),M(i.$$.fragment,h),$=!1},d(h){h&&f(e),Y(r),Y(n),Y(i)}}}function Dt(o){let e,l,t=o[0]&&Fe();return{c(){t&&t.c(),e=Z()},l(r){t&&t.l(r),e=Z()},m(r,s){t&&t.m(r,s),I(r,e,s),l=!0},p(r,[s]){r[0]?t?s&1&&v(t,1):(t=Fe(),t.c(),v(t,1),t.m(e.parentNode,e)):t&&(Q(),M(t,1,1,()=>{t=null}),J())},i(r){l||(v(t),l=!0)},o(r){M(t),l=!1},d(r){t&&t.d(r),r&&f(e)}}}function Ot(o,e,l){let t=!1;return Ze(()=>{l(0,t=!0)}),[t]}class zt extends ae{constructor(e){super();oe(this,e,Ot,Dt,ee,{})}}function Ge(o,e,l){const t=o.slice();return t[4]=e[l],t}function He(o,e,l){const t=o.slice();return t[7]=e[l],t}function Qe(o,e,l){const t=o.slice();return t[10]=e[l],t}function Je(o){let e,l,t,r,s,n;return{c(){e=k("a"),l=k("img"),this.h()},l(a){e=b(a,"A",{href:!0,rel:!0,target:!0,title:!0,class:!0});var i=g(e);l=b(i,"IMG",{src:!0,alt:!0}),i.forEach(f),this.h()},h(){ft(l.src,t=bt+"/media/logos/"+o[10].filename)||c(l,"src",t),c(l,"alt",r="Logo: "+o[10].alt),c(e,"href",s=o[10].href),c(e,"rel","external"),c(e,"target","_blank"),c(e,"title",n=o[10].alt),c(e,"class","cpeum-nft00j")},m(a,i){I(a,e,i),p(e,l)},p:G,d(a){a&&f(e)}}}function Ft(o){let e=o[7].title+"",l;return{c(){l=V(e)},l(t){l=D(t,e)},m(t,r){I(t,l,r)},p:G,d(t){t&&f(l)}}}function Ke(o){let e,l,t,r;return l=new lt({props:{style:"font-weight: 400",href:o[7].href,rel:"external",color:be,$$slots:{default:[Ft]},$$scope:{ctx:o}}}),{c(){e=k("li"),K(l.$$.fragment),t=C(),this.h()},l(s){e=b(s,"LI",{class:!0});var n=g(e);W(l.$$.fragment,n),t=P(n),n.forEach(f),this.h()},h(){c(e,"class","cpeum-nft00j")},m(s,n){I(s,e,n),X(l,e,null),p(e,t),r=!0},p(s,n){const a={};n&8192&&(a.$$scope={dirty:n,ctx:s}),l.$set(a)},i(s){r||(v(l.$$.fragment,s),r=!0)},o(s){M(l.$$.fragment,s),r=!1},d(s){s&&f(e),Y(l)}}}function Gt(o){let e=o[4].title+"",l;return{c(){l=V(e)},l(t){l=D(t,e)},m(t,r){I(t,l,r)},p:G,d(t){t&&f(l)}}}function We(o){let e,l,t,r;return l=new lt({props:{style:"font-weight: 400",href:o[4].path,color:be,$$slots:{default:[Gt]},$$scope:{ctx:o}}}),{c(){e=k("li"),K(l.$$.fragment),t=C(),this.h()},l(s){e=b(s,"LI",{class:!0});var n=g(e);W(l.$$.fragment,n),t=P(n),n.forEach(f),this.h()},h(){c(e,"class","cpeum-nft00j")},m(s,n){I(s,e,n),X(l,e,null),p(e,t),r=!0},p(s,n){const a={};n&8192&&(a.$$scope={dirty:n,ctx:s}),l.$set(a)},i(s){r||(v(l.$$.fragment,s),r=!0)},o(s){M(l.$$.fragment,s),r=!1},d(s){s&&f(e),Y(l)}}}function Ht(o){let e,l,t,r,s,n,a,i,d,$,h,_,E,S,y,T,N,A,R,F,te,$e,Ee,ie=[...me.prime,...me.second],q=[];for(let m=0;m<ie.length;m+=1)q[m]=Je(Qe(o,ie,m));let le=o[1],L=[];for(let m=0;m<le.length;m+=1)L[m]=Ke(He(o,le,m));const rt=m=>M(L[m],1,1,()=>{L[m]=null});let re=ge,j=[];for(let m=0;m<re.length;m+=1)j[m]=We(Ge(o,re,m));const nt=m=>M(j[m],1,1,()=>{j[m]=null});return{c(){e=k("footer"),l=k("div"),t=k("section");for(let m=0;m<q.length;m+=1)q[m].c();r=C(),s=k("hr"),n=C(),a=k("section"),i=k("ul");for(let m=0;m<L.length;m+=1)L[m].c();d=C(),$=k("ul");for(let m=0;m<j.length;m+=1)j[m].c();h=C(),_=k("div"),E=k("p"),S=V("\xA9"),y=C(),T=k("p"),N=V("Chaire en paysage urbain de l'Universit\xE9 de Montr\xE9al"),A=C(),R=k("p"),F=V("2022"),this.h()},l(m){e=b(m,"FOOTER",{class:!0});var w=g(e);l=b(w,"DIV",{id:!0,class:!0});var u=g(l);t=b(u,"SECTION",{id:!0,class:!0});var U=g(t);for(let O=0;O<q.length;O+=1)q[O].l(U);r=P(U),s=b(U,"HR",{class:!0}),U.forEach(f),n=P(u),a=b(u,"SECTION",{id:!0,class:!0});var ce=g(a);i=b(ce,"UL",{class:!0});var Ne=g(i);for(let O=0;O<L.length;O+=1)L[O].l(Ne);Ne.forEach(f),d=P(ce),$=b(ce,"UL",{class:!0});var we=g($);for(let O=0;O<j.length;O+=1)j[O].l(we);we.forEach(f),h=P(ce),_=b(ce,"DIV",{class:!0});var fe=g(_);E=b(fe,"P",{class:!0});var Me=g(E);S=D(Me,"\xA9"),Me.forEach(f),y=P(fe),T=b(fe,"P",{class:!0});var Se=g(T);N=D(Se,"Chaire en paysage urbain de l'Universit\xE9 de Montr\xE9al"),Se.forEach(f),A=P(fe),R=b(fe,"P",{class:!0});var Ie=g(R);F=D(Ie,"2022"),Ie.forEach(f),fe.forEach(f),ce.forEach(f),u.forEach(f),w.forEach(f),this.h()},h(){c(s,"class","cpeum-nft00j"),c(t,"id","logos"),c(t,"class","cpeum-nft00j"),c(i,"class","cpeum-nft00j"),c($,"class","cpeum-nft00j"),c(E,"class","cpeum-nft00j"),c(T,"class","cpeum-nft00j"),c(R,"class","cpeum-nft00j"),c(_,"class","cpeum-nft00j"),c(a,"id","links"),c(a,"class","cpeum-nft00j"),c(l,"id","content"),c(l,"class","cpeum-nft00j"),B(l,"expand",o[0]),de(l,"color",be,!1),c(e,"class","cpeum-nft00j")},m(m,w){I(m,e,w),p(e,l),p(l,t);for(let u=0;u<q.length;u+=1)q[u].m(t,null);p(t,r),p(t,s),p(l,n),p(l,a),p(a,i);for(let u=0;u<L.length;u+=1)L[u].m(i,null);p(a,d),p(a,$);for(let u=0;u<j.length;u+=1)j[u].m($,null);p(a,h),p(a,_),p(_,E),p(E,S),p(_,y),p(_,T),p(T,N),p(_,A),p(_,R),p(R,F),te=!0,$e||(Ee=[ut(Et.call(null,e,{rootMargin:"0px 0px",threshold:.5})),ye(e,"enter",o[2]),ye(e,"leave",o[3])],$e=!0)},p(m,[w]){if(w&0){ie=[...me.prime,...me.second];let u;for(u=0;u<ie.length;u+=1){const U=Qe(m,ie,u);q[u]?q[u].p(U,w):(q[u]=Je(U),q[u].c(),q[u].m(t,r))}for(;u<q.length;u+=1)q[u].d(1);q.length=ie.length}if(w&2){le=m[1];let u;for(u=0;u<le.length;u+=1){const U=He(m,le,u);L[u]?(L[u].p(U,w),v(L[u],1)):(L[u]=Ke(U),L[u].c(),v(L[u],1),L[u].m(i,null))}for(Q(),u=le.length;u<L.length;u+=1)rt(u);J()}if(w&0){re=ge;let u;for(u=0;u<re.length;u+=1){const U=Ge(m,re,u);j[u]?(j[u].p(U,w),v(j[u],1)):(j[u]=We(U),j[u].c(),v(j[u],1),j[u].m($,null))}for(Q(),u=re.length;u<j.length;u+=1)nt(u);J()}w&1&&B(l,"expand",m[0])},i(m){if(!te){for(let w=0;w<le.length;w+=1)v(L[w]);for(let w=0;w<re.length;w+=1)v(j[w]);te=!0}},o(m){L=L.filter(Boolean);for(let w=0;w<L.length;w+=1)M(L[w]);j=j.filter(Boolean);for(let w=0;w<j.length;w+=1)M(j[w]);te=!1},d(m){m&&f(e),ue(q,m),ue(L,m),ue(j,m),$e=!1,ht(Ee)}}}const be="rgba(0, 0, 0, 0.4)";function Qt(o,e,l){const t=[{title:"CPEUM",href:"https://paysage.umontreal.ca"},{title:"CUPUM",href:"https://unesco-paysage.umontreal.ca"},{title:"Ville de Saint-Constant",href:"https://saint-constant.ca"},{title:"MRC de Roussillon",href:"https://roussillon.ca"},{title:"Minist\xE8re de l\u2019\xC9conomie et de l\u2019Innovation du Qu\xE9bec",href:"https://www.economie.gouv.qc.ca/accueil/"}];let r=!1;return[r,t,()=>l(0,r=!0),()=>l(0,r=!1)]}class Jt extends ae{constructor(e){super();oe(this,e,Qt,Ht,ee,{})}}function Xe(o){let e=o[0],l,t,r=Ye(o);return{c(){r.c(),l=Z()},l(s){r.l(s),l=Z()},m(s,n){r.m(s,n),I(s,l,n),t=!0},p(s,n){n&1&&ee(e,e=s[0])?(Q(),M(r,1,1,G),J(),r=Ye(s),r.c(),v(r),r.m(l.parentNode,l)):r.p(s,n)},i(s){t||(v(r),t=!0)},o(s){M(r),t=!1},d(s){s&&f(l),r.d(s)}}}function Ye(o){let e,l,t,r,s,n,a,i,d;const $=o[4].default,h=dt($,o,o[3],null);return n=new Jt({}),{c(){e=k("main"),l=k("div"),t=C(),r=k("article"),h&&h.c(),s=C(),K(n.$$.fragment),this.h()},l(_){e=b(_,"MAIN",{class:!0});var E=g(e);l=b(E,"DIV",{class:!0}),g(l).forEach(f),t=P(E),r=b(E,"ARTICLE",{class:!0});var S=g(r);h&&h.l(S),S.forEach(f),s=P(E),W(n.$$.fragment,E),E.forEach(f),this.h()},h(){c(l,"class","grain cpeum-qyneqt"),c(r,"class","cpeum-qyneqt"),c(e,"class","cpeum-qyneqt")},m(_,E){I(_,e,E),p(e,l),p(e,t),p(e,r),h&&h.m(r,null),p(e,s),X(n,e,null),d=!0},p(_,E){o=_,h&&h.p&&(!d||E&8)&&_t(h,$,o,o[3],d?mt($,o[3],E,null):pt(o[3]),null)},i(_){d||(v(h,_),v(n.$$.fragment,_),H(()=>{i&&i.end(1),a=x(e,_e,{y:40,duration:1550,delay:350,easing:ke}),a.start()}),d=!0)},o(_){M(h,_),M(n.$$.fragment,_),a&&a.invalidate(),i=xe(e,gt,{duration:350}),d=!1},d(_){_&&f(e),h&&h.d(_),Y(n),_&&i&&i.end()}}}function Kt(o){let e,l,t,r,s;e=new zt({});let n=o[1]&&Xe(o);return r=new St({}),r.$on("load",o[5]),{c(){K(e.$$.fragment),l=C(),n&&n.c(),t=C(),K(r.$$.fragment)},l(a){W(e.$$.fragment,a),l=P(a),n&&n.l(a),t=P(a),W(r.$$.fragment,a)},m(a,i){X(e,a,i),I(a,l,i),n&&n.m(a,i),I(a,t,i),X(r,a,i),s=!0},p(a,[i]){a[1]?n?(n.p(a,i),i&2&&v(n,1)):(n=Xe(a),n.c(),v(n,1),n.m(t.parentNode,t)):n&&(Q(),M(n,1,1,()=>{n=null}),J())},i(a){s||(v(e.$$.fragment,a),v(n),v(r.$$.fragment,a),s=!0)},o(a){M(e.$$.fragment,a),M(n),M(r.$$.fragment,a),s=!1},d(a){Y(e,a),a&&f(l),n&&n.d(a),a&&f(t),Y(r,a)}}}function sl({url:o}){return{props:{topNavigation:$t(o.pathname)[0]}}}function Wt(o,e,l){let t;z(o,yt,d=>l(2,t=d));let{$$slots:r={},$$scope:s}=e,{topNavigation:n}=e,a=!1;const i=()=>l(1,a=!0);return o.$$set=d=>{"topNavigation"in d&&l(0,n=d.topNavigation),"$$scope"in d&&l(3,s=d.$$scope)},o.$$.update=()=>{o.$$.dirty&4&&!t&&It&&(document.body.style.scrollBehavior="unset",document.body.scrollTop=0,document.body.style.scrollBehavior="smooth")},[n,a,t,s,r,i]}class al extends ae{constructor(e){super();oe(this,e,Wt,Kt,ee,{topNavigation:0})}}export{al as default,sl as load};
