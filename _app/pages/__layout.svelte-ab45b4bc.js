import{S as ce,i as fe,s as ae,e as w,c as N,a as y,d as _,b as f,I as q,g as C,t as V,k as P,h as U,m as R,J as v,K as ee,L as Ue,M as ie,l as K,q as k,n as Q,o as M,p as W,N as J,O as te,P as le,Q as ve,R as re,E,f as de,T as Fe,z as Mt,U as vt,C as Ct,w as j,x as z,y as Y,B as G,v as Lt,V as At,W as Ae,G as Bt,j as $t,X as Pt,Y as Rt,Z as It,_ as Ot,$ as qe,a0 as je}from"../chunks/index-bbca5c05.js";import{g as St,a as Tt,c as oe}from"../chunks/themeColors-35fcc233.js";import{M as Ht}from"../chunks/Map-124020e9.js";import{m as $e,a as Dt,b as Vt,c as ze}from"../chunks/Map.svelte_svelte_type_style_lang-00527014.js";import{r as Be,e as Pe,g as Le}from"../chunks/route-11860d83.js";import{e as Ye,r as we}from"../chunks/routes-10413546.js";import{f as ke,e as Re,d as ge,a as Ut}from"../chunks/index-d82f60b1.js";import{m as Ft}from"../chunks/scroll-701ec54a.js";import{b as qt}from"../chunks/paths-396f020f.js";import{i as jt}from"../chunks/intersect-eda3c074.js";import{l as Ee,L as kt,h as bt}from"../chunks/logos-ca65e911.js";import{g as Ge}from"../chunks/generateSvgPaths-8c5d72ca.js";import{L as zt}from"../chunks/Loading-dfb6db7c.js";import{c as ue}from"../chunks/singletons-d1fb5791.js";import{g as Qe,M as yt}from"../chunks/getData-3c274f38.js";import"../chunks/index-236d7f9e.js";function We(s,e,l){const t=s.slice();return t[3]=e[l],t[5]=l,t}function Je(s){let e,l,t,a=Ye,r=[];for(let n=0;n<a.length;n+=1)r[n]=Ke(We(s,a,n));return{c(){e=w("nav");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=N(n,"NAV",{class:!0});var i=y(e);for(let o=0;o<r.length;o+=1)r[o].l(i);i.forEach(_),this.h()},h(){f(e,"class","cpeum-17tbchp"),q(e,"min",s[1].full)},m(n,i){C(n,e,i);for(let o=0;o<r.length;o+=1)r[o].m(e,null);t=!0},p(n,i){if(i&4){a=Ye;let o;for(o=0;o<a.length;o+=1){const u=We(n,a,o);r[o]?r[o].p(u,i):(r[o]=Ke(u),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=a.length}i&2&&q(e,"min",n[1].full)},i(n){t||(ee(()=>{l||(l=Ue(e,ke,{y:-25},!0)),l.run(1)}),t=!0)},o(n){l||(l=Ue(e,ke,{y:-25},!1)),l.run(0),t=!1},d(n){n&&_(e),ie(r,n),n&&l&&l.end()}}}function Ke(s){let e,l,t,a=s[5]+1+"",r,n,i,o,u=s[3].title+"",c,h,p,m;return{c(){e=w("a"),l=w("span"),t=V("0"),r=V(a),n=V("."),i=V("\xA0"),o=w("span"),c=V(u),h=P(),this.h()},l($){e=N($,"A",{href:!0,"sveltekit:prefetch":!0,style:!0,class:!0});var b=y(e);l=N(b,"SPAN",{class:!0});var A=y(l);t=U(A,"0"),r=U(A,a),n=U(A,"."),A.forEach(_),i=U(b,"\xA0"),o=N(b,"SPAN",{class:!0});var L=y(o);c=U(L,u),L.forEach(_),h=R(b),b.forEach(_),this.h()},h(){f(l,"class","number cpeum-17tbchp"),f(o,"class","title cpeum-17tbchp"),f(e,"href",p=s[3].path),f(e,"sveltekit:prefetch",""),f(e,"style",m=St(s[3].key)),f(e,"class","cpeum-17tbchp"),q(e,"current",s[2]===s[3])},m($,b){C($,e,b),v(e,l),v(l,t),v(l,r),v(l,n),v(e,i),v(e,o),v(o,c),v(e,h)},p($,b){b&4&&q(e,"current",$[2]===$[3])},d($){$&&_(e)}}}function Yt(s){var a;let e,l,t=((a=s[0])==null?void 0:a.exercices)&&Je(s);return{c(){t&&t.c(),e=K()},l(r){t&&t.l(r),e=K()},m(r,n){t&&t.m(r,n),C(r,e,n),l=!0},p(r,[n]){var i;(i=r[0])!=null&&i.exercices?t?(t.p(r,n),n&1&&k(t,1)):(t=Je(r),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(Q(),M(t,1,1,()=>{t=null}),W())},i(r){l||(k(t),l=!0)},o(r){M(t),l=!1},d(r){t&&t.d(r),r&&_(e)}}}function Gt(s,e,l){let t,a,r;return J(s,Be,n=>l(0,t=n)),J(s,$e,n=>l(1,a=n)),J(s,Pe,n=>l(2,r=n)),[t,a,r]}class Qt extends ce{constructor(e){super(),fe(this,e,Gt,Yt,ae,{})}}function Wt(s){let e,l,t,a;return{c(){e=te("line"),t=te("line"),this.h()},l(r){e=le(r,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),y(e).forEach(_),t=le(r,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),y(t).forEach(_),this.h()},h(){f(e,"x1","30"),f(e,"y1","30"),f(e,"x2","70"),f(e,"y2","70"),f(e,"vector-effect","non-scaling-stroke"),f(t,"x1","30"),f(t,"y1","70"),f(t,"x2","70"),f(t,"y2","30"),f(t,"vector-effect","non-scaling-stroke")},m(r,n){C(r,e,n),C(r,t,n)},i(r){l||ee(()=>{l=re(e,ge,{}),l.start()}),a||ee(()=>{a=re(t,ge,{delay:150}),a.start()})},o:E,d(r){r&&_(e),r&&_(t)}}}function Jt(s){let e,l,t,a;return{c(){e=te("path"),t=te("circle"),this.h()},l(r){e=le(r,"path",{d:!0,"vector-effect":!0}),y(e).forEach(_),t=le(r,"circle",{cx:!0,cy:!0,r:!0,"vector-effect":!0}),y(t).forEach(_),this.h()},h(){f(e,"d",`M46,88.3L25.8,50.5c-5.7-10.7-3.8-23.9,4.8-32.4l0,0c10.7-10.7,28.2-10.7,38.9,0l0,0
			c8.6,8.6,10.5,21.7,4.8,32.4L54.1,88.3C52.4,91.5,47.7,91.5,46,88.3z`),f(e,"vector-effect","non-scaling-stroke"),f(t,"cx","50.5"),f(t,"cy","37.4"),f(t,"r","11.1"),f(t,"vector-effect","non-scaling-stroke")},m(r,n){C(r,e,n),C(r,t,n)},i(r){l||ee(()=>{l=re(e,ge,{}),l.start()}),a||ee(()=>{a=re(t,ge,{delay:150}),a.start()})},o:E,d(r){r&&_(e),r&&_(t)}}}function Kt(s){let e,l,t,a,r,n,i;function o(h,p){return h[0].full?Wt:Jt}let u=o(s),c=u(s);return{c(){e=w("label"),l=w("input"),a=P(),r=te("svg"),c.c(),this.h()},l(h){e=N(h,"LABEL",{id:!0,for:!0,class:!0});var p=y(e);l=N(p,"INPUT",{id:!0,type:!0,class:!0}),a=R(p),r=le(p,"svg",{version:!0,viewBox:!0,"shape-rendering":!0,class:!0});var m=y(r);c.l(m),m.forEach(_),p.forEach(_),this.h()},h(){f(l,"id","map-toggle-input"),f(l,"type","checkbox"),f(l,"class","cpeum-1sn1vss"),f(r,"version","1.1"),f(r,"viewBox","0 0 100 100"),f(r,"shape-rendering","geometricPrecision"),f(r,"class","cpeum-1sn1vss"),f(e,"id","map-toggle"),f(e,"for","map-toggle-input"),f(e,"class","cpeum-1sn1vss"),q(e,"active",s[0].full)},m(h,p){C(h,e,p),v(e,l),l.checked=s[0].full,v(e,a),v(e,r),c.m(r,null),n||(i=ve(l,"change",s[1]),n=!0)},p(h,[p]){s=h,p&1&&(l.checked=s[0].full),u!==(u=o(s))&&(c.d(1),c=u(s),c&&(c.c(),k(c,1),c.m(r,null))),p&1&&q(e,"active",s[0].full)},i(h){t||ee(()=>{t=re(l,ke,{x:-40,easing:Re,duration:500,delay:1500}),t.start()}),k(c)},o:E,d(h){h&&_(e),c.d(),n=!1,i()}}}function Xt(s,e,l){let t;J(s,$e,r=>l(0,t=r));function a(){t.full=this.checked,$e.set(t)}return[t,a]}class Zt extends ce{constructor(e){super(),fe(this,e,Xt,Kt,ae,{})}}function Xe(s,e,l){const t=s.slice();return t[6]=e[l],t[8]=l,t}function Ze(s,e,l){const t=s.slice();return t[9]=e[l],t[8]=l,t}function xe(s){let e,l,t=lt(),a=[];for(let n=0;n<t.length;n+=1)a[n]=et(Ze(s,t,n));const r=n=>M(a[n],1,1,()=>{a[n]=null});return{c(){for(let n=0;n<a.length;n+=1)a[n].c();e=K()},l(n){for(let i=0;i<a.length;i+=1)a[i].l(n);e=K()},m(n,i){for(let o=0;o<a.length;o+=1)a[o].m(n,i);C(n,e,i),l=!0},p(n,i){if(i&0){t=lt();let o;for(o=0;o<t.length;o+=1){const u=Ze(n,t,o);a[o]?(a[o].p(u,i),k(a[o],1)):(a[o]=et(u),a[o].c(),k(a[o],1),a[o].m(e.parentNode,e))}for(Q(),o=t.length;o<a.length;o+=1)r(o);W()}},i(n){if(!l){for(let i=0;i<t.length;i+=1)k(a[i]);l=!0}},o(n){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)M(a[i]);l=!1},d(n){ie(a,n),n&&_(e)}}}function et(s){let e,l,t,a,r=[s[9],{"vector-effect":"non-scaling-stroke"}],n={};for(let i=0;i<r.length;i+=1)n=Ct(n,r[i]);return{c(){e=te("line"),this.h()},l(i){e=le(i,"line",{"vector-effect":!0}),y(e).forEach(_),this.h()},h(){Fe(e,n),q(e,"cpeum-1bp8poh",!0)},m(i,o){C(i,e,o),a=!0},p(i,o){Fe(e,n=Mt(r,[i[9],{"vector-effect":"non-scaling-stroke"}])),q(e,"cpeum-1bp8poh",!0)},i(i){a||(ee(()=>{t&&t.end(1),l=re(e,ge,{speed:.25,delay:s[8]*20}),l.start()}),a=!0)},o(i){l&&l.invalidate(),t=vt(e,ge,{speed:.5,delay:s[8]*20}),a=!1},d(i){i&&_(e),i&&t&&t.end()}}}function tt(s){var A;let e,l,t,a,r=s[6].title+"",n,i,o,u=s[6].title+"",c,h,p,m=`${s[8]*60}ms`,$,b=s[6].title==((A=s[4])==null?void 0:A.title)&&xe(s);return{c(){e=w("a"),l=te("svg"),b&&b.c(),t=P(),a=w("span"),n=V(r),i=P(),o=w("span"),c=V(u),h=P(),this.h()},l(L){e=N(L,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var I=y(e);l=le(I,"svg",{class:!0});var X=y(l);b&&b.l(X),X.forEach(_),t=R(I),a=N(I,"SPAN",{class:!0});var Z=y(a);n=U(Z,r),Z.forEach(_),i=R(I),o=N(I,"SPAN",{class:!0});var x=y(o);c=U(x,u),x.forEach(_),h=R(I),I.forEach(_),this.h()},h(){var L;f(l,"class","cpeum-1bp8poh"),f(a,"class","text cpeum-1bp8poh"),f(o,"class","hover-text cpeum-1bp8poh"),f(e,"href",p=s[6].exercices?s[3].path:s[6].path),f(e,"sveltekit:prefetch",""),f(e,"class","cpeum-1bp8poh"),q(e,"current",s[6].title==((L=s[4])==null?void 0:L.title)),de(e,"background-color",s[1].y>Ne+200?"var(--light1)":"",!1),de(e,"--delay",m,!1),de(e,"--activebg",Et(),!1)},m(L,I){C(L,e,I),v(e,l),b&&b.m(l,null),v(e,t),v(e,a),v(a,n),v(e,i),v(e,o),v(o,c),v(e,h),$=!0},p(L,I){var X,Z;L[6].title==((X=L[4])==null?void 0:X.title)?b?(b.p(L,I),I&16&&k(b,1)):(b=xe(L),b.c(),k(b,1),b.m(l,null)):b&&(Q(),M(b,1,1,()=>{b=null}),W()),(!$||I&8&&p!==(p=L[6].exercices?L[3].path:L[6].path))&&f(e,"href",p),I&16&&q(e,"current",L[6].title==((Z=L[4])==null?void 0:Z.title)),I&2&&de(e,"background-color",L[1].y>Ne+200?"var(--light1)":"",!1)},i(L){$||(k(b),$=!0)},o(L){M(b),$=!1},d(L){L&&_(e),b&&b.d()}}}function xt(s){let e,l,t,a,r=we,n=[];for(let o=0;o<r.length;o+=1)n[o]=tt(Xe(s,r,o));const i=o=>M(n[o],1,1,()=>{n[o]=null});return{c(){e=w("nav");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){e=N(o,"NAV",{class:!0});var u=y(e);for(let c=0;c<n.length;c+=1)n[c].l(u);u.forEach(_),this.h()},h(){f(e,"class","cpeum-1bp8poh"),q(e,"min",s[1].y>Ne&&s[0]||s[2].full)},m(o,u){C(o,e,u);for(let c=0;c<n.length;c+=1)n[c].m(e,null);l=!0,t||(a=ve(window,"mousemove",s[5]),t=!0)},p(o,[u]){if(u&26){r=we;let c;for(c=0;c<r.length;c+=1){const h=Xe(o,r,c);n[c]?(n[c].p(h,u),k(n[c],1)):(n[c]=tt(h),n[c].c(),k(n[c],1),n[c].m(e,null))}for(Q(),c=r.length;c<n.length;c+=1)i(c);W()}u&7&&q(e,"min",o[1].y>Ne&&o[0]||o[2].full)},i(o){if(!l){for(let u=0;u<r.length;u+=1)k(n[u]);l=!0}},o(o){n=n.filter(Boolean);for(let u=0;u<n.length;u+=1)M(n[u]);l=!1},d(o){o&&_(e),ie(n,o),t=!1,a()}}}const Ne=120;function Et(){return`hsl(${20+Math.random()*180}, 60%, 70%)`}function lt(){const s=Math.round(8+Math.random()*4),e=0,l=0;return[...Array(s)].map(t=>({x1:l+Math.random()*(100-2*l)+"%",y1:e+Math.random()*(100-2*e)+"%",x2:l+Math.random()*(100-2*l)+"%",y2:e+Math.random()*(100-2*e)+"%",stroke:Et()}))}function el(s,e,l){let t,a,r,n;J(s,Ft,u=>l(1,t=u)),J(s,$e,u=>l(2,a=u)),J(s,Pe,u=>l(3,r=u)),J(s,Be,u=>l(4,n=u));let i;function o(u){u.clientY>120?l(0,i=!0):l(0,i=!1)}return[i,t,a,r,n,o]}class tl extends ce{constructor(e){super(),fe(this,e,el,xt,ae,{})}}function rt(s){let e,l,t,a,r,n,i,o,u,c;return a=new tl({}),n=new Qt({}),o=new Zt({}),{c(){e=w("header"),l=w("div"),t=w("section"),j(a.$$.fragment),r=P(),j(n.$$.fragment),i=P(),j(o.$$.fragment),this.h()},l(h){e=N(h,"HEADER",{class:!0});var p=y(e);l=N(p,"DIV",{class:!0});var m=y(l);t=N(m,"SECTION",{class:!0});var $=y(t);z(a.$$.fragment,$),r=R($),z(n.$$.fragment,$),$.forEach(_),i=R(m),z(o.$$.fragment,m),m.forEach(_),p.forEach(_),this.h()},h(){f(t,"class","cpeum-leg40a"),f(l,"class","cpeum-leg40a"),f(e,"class","cpeum-leg40a")},m(h,p){C(h,e,p),v(e,l),v(l,t),Y(a,t,null),v(t,r),Y(n,t,null),v(l,i),Y(o,l,null),c=!0},p(h,p){},i(h){c||(k(a.$$.fragment,h),k(n.$$.fragment,h),k(o.$$.fragment,h),u||ee(()=>{u=re(e,ke,{opacity:0,y:-20,duration:800,easing:Re,delay:1e3}),u.start()}),c=!0)},o(h){M(a.$$.fragment,h),M(n.$$.fragment,h),M(o.$$.fragment,h),c=!1},d(h){h&&_(e),G(a),G(n),G(o)}}}function ll(s){let e,l,t=s[0]&&rt();return{c(){t&&t.c(),e=K()},l(a){t&&t.l(a),e=K()},m(a,r){t&&t.m(a,r),C(a,e,r),l=!0},p(a,[r]){a[0]?t?r&1&&k(t,1):(t=rt(),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(Q(),M(t,1,1,()=>{t=null}),W())},i(a){l||(k(t),l=!0)},o(a){M(t),l=!1},d(a){t&&t.d(a),a&&_(e)}}}function rl(s,e,l){let t=!1;return Lt(()=>{l(0,t=!0)}),[t]}class al extends ce{constructor(e){super(),fe(this,e,rl,ll,ae,{})}}function at(s,e,l){const t=s.slice();return t[6]=e[l],t}function nt(s,e,l){const t=s.slice();return t[9]=e[l],t}function st(s,e,l){const t=s.slice();return t[12]=e[l],t}function ot(s,e,l){const t=s.slice();return t[15]=e[l],t}function it(s){let e,l,t,a;return{c(){e=te("path"),this.h()},l(r){e=le(r,"path",{"vector-effect":!0,d:!0,fill:!0,"stroke-width":!0,"stroke-linejoin":!0,"stroke-linecap":!0,"stroke-dasharray":!0,"stroke-dashoffset":!0}),y(e).forEach(_),this.h()},h(){f(e,"vector-effect","non-scaling-stroke"),f(e,"d",l=s[15].d),f(e,"fill",t=s[15].fill),f(e,"stroke-width","0"),f(e,"stroke-linejoin","round"),f(e,"stroke-linecap","round"),f(e,"stroke-dasharray","54% 20% 64% 90% 30% 130%"),f(e,"stroke-dashoffset",a=Math.random()*300+"%")},m(r,n){C(r,e,n)},p:E,d(r){r&&_(e)}}}function ct(s){let e,l,t,a,r,n;return{c(){e=w("a"),l=w("img"),this.h()},l(i){e=N(i,"A",{href:!0,rel:!0,target:!0,title:!0,class:!0});var o=y(e);l=N(o,"IMG",{src:!0,alt:!0}),o.forEach(_),this.h()},h(){At(l.src,t=qt+"/media/logos/"+s[12].filename)||f(l,"src",t),f(l,"alt",a="Logo: "+s[12].alt),f(e,"href",r=s[12].href),f(e,"rel","external"),f(e,"target","_blank"),f(e,"title",n=s[12].alt),f(e,"class","cpeum-v0lnac")},m(i,o){C(i,e,o),v(e,l)},p:E,d(i){i&&_(e)}}}function nl(s){let e=s[9].title+"",l;return{c(){l=V(e)},l(t){l=U(t,e)},m(t,a){C(t,l,a)},p:E,d(t){t&&_(l)}}}function ft(s){let e,l,t,a;return l=new kt({props:{style:"font-weight: 400",href:s[9].href,rel:"external",color:Ie,$$slots:{default:[nl]},$$scope:{ctx:s}}}),{c(){e=w("li"),j(l.$$.fragment),t=P(),this.h()},l(r){e=N(r,"LI",{class:!0});var n=y(e);z(l.$$.fragment,n),t=R(n),n.forEach(_),this.h()},h(){f(e,"class","cpeum-v0lnac")},m(r,n){C(r,e,n),Y(l,e,null),v(e,t),a=!0},p(r,n){const i={};n&262144&&(i.$$scope={dirty:n,ctx:r}),l.$set(i)},i(r){a||(k(l.$$.fragment,r),a=!0)},o(r){M(l.$$.fragment,r),a=!1},d(r){r&&_(e),G(l)}}}function sl(s){let e=s[6].title+"",l;return{c(){l=V(e)},l(t){l=U(t,e)},m(t,a){C(t,l,a)},p:E,d(t){t&&_(l)}}}function ut(s){let e,l,t,a;return l=new kt({props:{style:"font-weight: 400",href:s[6].path,color:Ie,$$slots:{default:[sl]},$$scope:{ctx:s}}}),{c(){e=w("li"),j(l.$$.fragment),t=P(),this.h()},l(r){e=N(r,"LI",{class:!0});var n=y(e);z(l.$$.fragment,n),t=R(n),n.forEach(_),this.h()},h(){f(e,"class","cpeum-v0lnac")},m(r,n){C(r,e,n),Y(l,e,null),v(e,t),a=!0},p(r,n){const i={};n&262144&&(i.$$scope={dirty:n,ctx:r}),l.$set(i)},i(r){a||(k(l.$$.fragment,r),a=!0)},o(r){M(l.$$.fragment,r),a=!1},d(r){r&&_(e),G(l)}}}function ol(s){let e,l,t,a,r,n,i,o,u,c,h,p,m,$,b,A,L,I,X,Z,x,Me,be,Ce,Oe,he=s[2],T=[];for(let d=0;d<he.length;d+=1)T[d]=it(ot(s,he,d));let pe=[...Ee.prime,...Ee.second],H=[];for(let d=0;d<pe.length;d+=1)H[d]=ct(st(s,pe,d));let ne=s[1],O=[];for(let d=0;d<ne.length;d+=1)O[d]=ft(nt(s,ne,d));const wt=d=>M(O[d],1,1,()=>{O[d]=null});let se=we,S=[];for(let d=0;d<se.length;d+=1)S[d]=ut(at(s,se,d));const Nt=d=>M(S[d],1,1,()=>{S[d]=null});return{c(){e=te("svg");for(let d=0;d<T.length;d+=1)T[d].c();l=P(),t=w("footer"),a=w("div"),r=w("section");for(let d=0;d<H.length;d+=1)H[d].c();n=P(),i=w("hr"),o=P(),u=w("section"),c=w("ul");for(let d=0;d<O.length;d+=1)O[d].c();h=P(),p=w("ul");for(let d=0;d<S.length;d+=1)S[d].c();m=P(),$=w("div"),b=w("p"),A=V("\xA9"),L=P(),I=w("p"),X=V("Chaire en paysage urbain de l'Universit\xE9 de Montr\xE9al"),Z=P(),x=w("p"),Me=V("2022"),this.h()},l(d){e=le(d,"svg",{viewBox:!0,preserveAspectRatio:!0,class:!0});var B=y(e);for(let F=0;F<T.length;F+=1)T[F].l(B);B.forEach(_),l=R(d),t=N(d,"FOOTER",{class:!0});var g=y(t);a=N(g,"DIV",{id:!0,class:!0});var D=y(a);r=N(D,"SECTION",{id:!0,class:!0});var ye=y(r);for(let F=0;F<H.length;F+=1)H[F].l(ye);n=R(ye),i=N(ye,"HR",{class:!0}),ye.forEach(_),o=R(D),u=N(D,"SECTION",{id:!0,class:!0});var _e=y(u);c=N(_e,"UL",{class:!0});var Se=y(c);for(let F=0;F<O.length;F+=1)O[F].l(Se);Se.forEach(_),h=R(_e),p=N(_e,"UL",{class:!0});var Te=y(p);for(let F=0;F<S.length;F+=1)S[F].l(Te);Te.forEach(_),m=R(_e),$=N(_e,"DIV",{class:!0});var me=y($);b=N(me,"P",{class:!0});var He=y(b);A=U(He,"\xA9"),He.forEach(_),L=R(me),I=N(me,"P",{class:!0});var De=y(I);X=U(De,"Chaire en paysage urbain de l'Universit\xE9 de Montr\xE9al"),De.forEach(_),Z=R(me),x=N(me,"P",{class:!0});var Ve=y(x);Me=U(Ve,"2022"),Ve.forEach(_),me.forEach(_),_e.forEach(_),D.forEach(_),g.forEach(_),this.h()},h(){f(e,"viewBox",s[2][0].viewBox),f(e,"preserveAspectRatio","xMidYMin slice"),f(e,"class","cpeum-v0lnac"),f(i,"class","cpeum-v0lnac"),f(r,"id","logos"),f(r,"class","cpeum-v0lnac"),f(c,"class","cpeum-v0lnac"),f(p,"class","cpeum-v0lnac"),f(b,"class","cpeum-v0lnac"),f(I,"class","cpeum-v0lnac"),f(x,"class","cpeum-v0lnac"),f($,"class","cpeum-v0lnac"),f(u,"id","links"),f(u,"class","cpeum-v0lnac"),f(a,"id","content"),f(a,"class","cpeum-v0lnac"),q(a,"expand",s[0]),de(a,"color",Ie,!1),f(t,"class","cpeum-v0lnac")},m(d,B){C(d,e,B);for(let g=0;g<T.length;g+=1)T[g].m(e,null);C(d,l,B),C(d,t,B),v(t,a),v(a,r);for(let g=0;g<H.length;g+=1)H[g].m(r,null);v(r,n),v(r,i),v(a,o),v(a,u),v(u,c);for(let g=0;g<O.length;g+=1)O[g].m(c,null);v(u,h),v(u,p);for(let g=0;g<S.length;g+=1)S[g].m(p,null);v(u,m),v(u,$),v($,b),v(b,A),v($,L),v($,I),v(I,X),v($,Z),v($,x),v(x,Me),be=!0,Ce||(Oe=[Ae(jt.call(null,t,{rootMargin:"0px 0px",threshold:.5})),ve(t,"enter",s[3]),ve(t,"leave",s[4])],Ce=!0)},p(d,[B]){if(B&4){he=d[2];let g;for(g=0;g<he.length;g+=1){const D=ot(d,he,g);T[g]?T[g].p(D,B):(T[g]=it(D),T[g].c(),T[g].m(e,null))}for(;g<T.length;g+=1)T[g].d(1);T.length=he.length}if(B&0){pe=[...Ee.prime,...Ee.second];let g;for(g=0;g<pe.length;g+=1){const D=st(d,pe,g);H[g]?H[g].p(D,B):(H[g]=ct(D),H[g].c(),H[g].m(r,n))}for(;g<H.length;g+=1)H[g].d(1);H.length=pe.length}if(B&2){ne=d[1];let g;for(g=0;g<ne.length;g+=1){const D=nt(d,ne,g);O[g]?(O[g].p(D,B),k(O[g],1)):(O[g]=ft(D),O[g].c(),k(O[g],1),O[g].m(c,null))}for(Q(),g=ne.length;g<O.length;g+=1)wt(g);W()}if(B&0){se=we;let g;for(g=0;g<se.length;g+=1){const D=at(d,se,g);S[g]?(S[g].p(D,B),k(S[g],1)):(S[g]=ut(D),S[g].c(),k(S[g],1),S[g].m(p,null))}for(Q(),g=se.length;g<S.length;g+=1)Nt(g);W()}B&1&&q(a,"expand",d[0])},i(d){if(!be){for(let B=0;B<ne.length;B+=1)k(O[B]);for(let B=0;B<se.length;B+=1)k(S[B]);be=!0}},o(d){O=O.filter(Boolean);for(let B=0;B<O.length;B+=1)M(O[B]);S=S.filter(Boolean);for(let B=0;B<S.length;B+=1)M(S[B]);be=!1},d(d){d&&_(e),ie(T,d),d&&_(l),d&&_(t),ie(H,d),ie(O,d),ie(S,d),Ce=!1,Bt(Oe)}}}const Ie="rgba(0, 0, 0, 0.4)";function il(s,e,l){const t=[{title:"CPEUM",href:"https://paysage.umontreal.ca"},{title:"CUPUM",href:"https://unesco-paysage.umontreal.ca"},{title:"Ville de Saint-Constant",href:"https://saint-constant.ca"},{title:"MRC de Roussillon",href:"https://roussillon.ca"},{title:"Minist\xE8re de l\u2019\xC9conomie et de l\u2019Innovation du Qu\xE9bec",href:"https://www.economie.gouv.qc.ca/accueil/"}];let a=!1;const r={width:1e3,height:800},n=Ge(3,{direction:"up",viewBox:r,padding:600}).map(u=>({viewBox:`0 0 ${r.width} ${r.height}`,d:u,fill:Tt([3],["light"])}));return n.push(...Ge(1,{direction:"up",viewBox:r,padding:540}).map(u=>({viewBox:`0 0 ${r.width} ${r.height}`,d:u,fill:"var(--light2)"}))),[a,t,n,()=>l(0,a=!0),()=>l(0,a=!1)]}class cl extends ce{constructor(e){super(),fe(this,e,il,ol,ae,{})}}ue.disable_scroll_handling;ue.goto;ue.invalidate;ue.prefetch;ue.prefetch_routes;const fl=ue.before_navigate,ul=ue.after_navigate;function ht(s){let e,l,t,a,r,n=s[0].previous().title+"",i,o,u,c,h;return{c(){e=w("a"),l=w("p"),t=V("\u2190 Revenir"),a=P(),r=w("p"),i=V(n),this.h()},l(p){e=N(p,"A",{href:!0,id:!0,class:!0});var m=y(e);l=N(m,"P",{class:!0});var $=y(l);t=U($,"\u2190 Revenir"),$.forEach(_),a=R(m),r=N(m,"P",{class:!0});var b=y(r);i=U(b,n),b.forEach(_),m.forEach(_),this.h()},h(){f(l,"class","label cpeum-srs09g"),f(r,"class","title cpeum-srs09g"),f(e,"href",o=s[0].previous().path),f(e,"id","prev"),f(e,"class","cpeum-srs09g")},m(p,m){C(p,e,m),v(e,l),v(l,t),v(e,a),v(e,r),v(r,i),c||(h=Ae(u=bt.call(null,e,{size:350})),c=!0)},p(p,m){m&1&&n!==(n=p[0].previous().title+"")&&$t(i,n),m&1&&o!==(o=p[0].previous().path)&&f(e,"href",o)},d(p){p&&_(e),c=!1,h()}}}function pt(s){let e,l,t,a,r,n=s[0].next().title+"",i,o,u,c,h;return{c(){e=w("a"),l=w("p"),t=V("Poursuivre \u2192"),a=P(),r=w("p"),i=V(n),this.h()},l(p){e=N(p,"A",{href:!0,id:!0,class:!0});var m=y(e);l=N(m,"P",{class:!0});var $=y(l);t=U($,"Poursuivre \u2192"),$.forEach(_),a=R(m),r=N(m,"P",{class:!0});var b=y(r);i=U(b,n),b.forEach(_),m.forEach(_),this.h()},h(){f(l,"class","label cpeum-srs09g"),f(r,"class","title cpeum-srs09g"),f(e,"href",o=s[0].next().path),f(e,"id","next"),f(e,"class","cpeum-srs09g")},m(p,m){C(p,e,m),v(e,l),v(l,t),v(e,a),v(e,r),v(r,i),c||(h=Ae(u=bt.call(null,e,{size:350})),c=!0)},p(p,m){m&1&&n!==(n=p[0].next().title+"")&&$t(i,n),m&1&&o!==(o=p[0].next().path)&&f(e,"href",o)},d(p){p&&_(e),c=!1,h()}}}function hl(s){var r,n,i;let e,l,t=(((r=s[0])==null?void 0:r.previous)||((n=s[0])==null?void 0:n.previous))&&ht(s),a=((i=s[0])==null?void 0:i.next)&&pt(s);return{c(){e=w("nav"),t&&t.c(),l=P(),a&&a.c(),this.h()},l(o){e=N(o,"NAV",{class:!0});var u=y(e);t&&t.l(u),l=R(u),a&&a.l(u),u.forEach(_),this.h()},h(){f(e,"class","cpeum-srs09g")},m(o,u){C(o,e,u),t&&t.m(e,null),v(e,l),a&&a.m(e,null)},p(o,[u]){var c,h,p;((c=o[0])==null?void 0:c.previous)||((h=o[0])==null?void 0:h.previous)?t?t.p(o,u):(t=ht(o),t.c(),t.m(e,l)):t&&(t.d(1),t=null),(p=o[0])!=null&&p.next?a?a.p(o,u):(a=pt(o),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:E,o:E,d(o){o&&_(e),t&&t.d(),a&&a.d()}}}function pl(s,e,l){let t,a;J(s,Be,n=>l(1,t=n)),J(s,Pe,n=>l(2,a=n));let r;return s.$$.update=()=>{s.$$.dirty&6&&l(0,r=t!=null&&t.exercices?a:t||null)},[r,t,a]}class _l extends ce{constructor(e){super(),fe(this,e,pl,hl,ae,{})}}function _t(s){let e,l,t,a,r,n,i,o;const u=s[7].default,c=Ot(u,s,s[12],null);return{c(){e=w("article"),c&&c.c(),l=P(),t=w("div"),this.h()},l(h){e=N(h,"ARTICLE",{class:!0});var p=y(e);c&&c.l(p),l=R(p),t=N(p,"DIV",{class:!0}),y(t).forEach(_),p.forEach(_),this.h()},h(){f(t,"class","grain cpeum-1pi7k6q"),f(e,"class","cpeum-1pi7k6q")},m(h,p){C(h,e,p),c&&c.m(e,null),v(e,l),v(e,t),n=!0,i||(o=ve(e,"outroend",s[6]),i=!0)},p(h,p){s=h,c&&c.p&&(!n||p&4096)&&Pt(c,u,s,s[12],n?It(u,s[12],p,null):Rt(s[12]),null)},i(h){n||(k(c,h),ee(()=>{r&&r.end(1),a=re(e,ke,{y:40,duration:1550,easing:Re}),a.start()}),n=!0)},o(h){M(c,h),a&&a.invalidate(),r=vt(e,Ut,{duration:350}),n=!1},d(h){h&&_(e),c&&c.d(h),h&&r&&r.end(),i=!1,o()}}}function mt(s){let e,l,t=s[2]&&!s[0]&&_t(s);return{c(){t&&t.c(),e=K()},l(a){t&&t.l(a),e=K()},m(a,r){t&&t.m(a,r),C(a,e,r),l=!0},p(a,r){a[2]&&!a[0]?t?(t.p(a,r),r&5&&k(t,1)):(t=_t(a),t.c(),k(t,1),t.m(e.parentNode,e)):t&&(Q(),M(t,1,1,()=>{t=null}),W())},i(a){l||(k(t),l=!0)},o(a){M(t),l=!1},d(a){t&&t.d(a),a&&_(e)}}}function gt(s){let e,l,t,a;return e=new _l({}),t=new cl({}),{c(){j(e.$$.fragment),l=P(),j(t.$$.fragment)},l(r){z(e.$$.fragment,r),l=R(r),z(t.$$.fragment,r)},m(r,n){Y(e,r,n),C(r,l,n),Y(t,r,n),a=!0},i(r){a||(k(e.$$.fragment,r),k(t.$$.fragment,r),a=!0)},o(r){M(e.$$.fragment,r),M(t.$$.fragment,r),a=!1},d(r){G(e,r),r&&_(l),G(t,r)}}}function dt(s){let e,l;return e=new zt({}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){Y(e,t,a),l=!0},i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function ml(s){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function gl(s){let e,l;return e=new yt({props:{id:"municipal",data:s[13],fillColor:"white",fillOpacity:0,strokeColor:oe.accent3,strokeWidth:4,strokeOpacity:1,strokeDashArray:[0,1.5]}}),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){Y(e,t,a),l=!0},p:E,i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function dl(s){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function vl(s){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function $l(s){let e,l;return e=new yt({props:{id:"propositions",data:s[13],fillColor:["get",["concat",["get","exercice"],"1"],["literal",oe]],fillColorHover:["get",["concat",["get","exercice"],"2"],["literal",oe]],fillColorHighlight:["get",["concat",["get","exercice"],"2"],["literal",oe]],fillOpacity:.5,fillOpacityHover:.8,fillOpacityHighlight:.65,strokeColor:["get",["concat",["get","exercice"],"2"],["literal",oe]],strokeColorHover:["get",["concat",["get","exercice"],"3"],["literal",oe]],strokeColorHighlight:["get",["concat",["get","exercice"],"3"],["literal",oe]],strokeOpacity:.5,strokeOpacityHover:.8,strokeOpacityHighlight:.65}}),e.$on("hover",s[8]),e.$on("leave",s[9]),{c(){j(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,a){Y(e,t,a),l=!0},p:E,i(t){l||(k(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){G(e,t)}}}function kl(s){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function bl(s){let e,l,t,a={ctx:s,current:null,token:null,hasCatch:!1,pending:dl,then:gl,catch:ml,value:13,blocks:[,,,]};qe(s[3],a);let r={ctx:s,current:null,token:null,hasCatch:!1,pending:kl,then:$l,catch:vl,value:13,blocks:[,,,]};return qe(s[4],r),{c(){a.block.c(),e=P(),l=K(),r.block.c()},l(n){a.block.l(n),e=R(n),l=K(),r.block.l(n)},m(n,i){a.block.m(n,a.anchor=i),a.mount=()=>e.parentNode,a.anchor=e,C(n,e,i),C(n,l,i),r.block.m(n,r.anchor=i),r.mount=()=>l.parentNode,r.anchor=l,t=!0},p(n,i){s=n,je(a,s,i),je(r,s,i)},i(n){t||(k(a.block),k(r.block),t=!0)},o(n){for(let i=0;i<3;i+=1){const o=a.blocks[i];M(o)}for(let i=0;i<3;i+=1){const o=r.blocks[i];M(o)}t=!1},d(n){a.block.d(n),a.token=null,a=null,n&&_(e),n&&_(l),r.block.d(n),r.token=null,r=null}}}function yl(s){let e,l,t,a=s[1],r,n,i,o,u;e=new al({});let c=mt(s),h=s[2]&&gt(),p=(!s[2]||s[0])&&dt();return o=new Ht({props:{$$slots:{default:[bl]},$$scope:{ctx:s}}}),o.$on("load",s[10]),o.$on("error",s[11]),{c(){j(e.$$.fragment),l=P(),t=w("main"),c.c(),r=P(),h&&h.c(),n=P(),p&&p.c(),i=P(),j(o.$$.fragment),this.h()},l(m){z(e.$$.fragment,m),l=R(m),t=N(m,"MAIN",{class:!0});var $=y(t);c.l($),r=R($),h&&h.l($),$.forEach(_),n=R(m),p&&p.l(m),i=R(m),z(o.$$.fragment,m),this.h()},h(){f(t,"class","cpeum-1pi7k6q")},m(m,$){Y(e,m,$),C(m,l,$),C(m,t,$),c.m(t,null),v(t,r),h&&h.m(t,null),C(m,n,$),p&&p.m(m,$),C(m,i,$),Y(o,m,$),u=!0},p(m,[$]){$&2&&ae(a,a=m[1])?(Q(),M(c,1,1,E),W(),c=mt(m),c.c(),k(c),c.m(t,r)):c.p(m,$),m[2]?h?$&4&&k(h,1):(h=gt(),h.c(),k(h,1),h.m(t,null)):h&&(Q(),M(h,1,1,()=>{h=null}),W()),!m[2]||m[0]?p?$&5&&k(p,1):(p=dt(),p.c(),k(p,1),p.m(i.parentNode,i)):p&&(Q(),M(p,1,1,()=>{p=null}),W());const b={};$&4096&&(b.$$scope={dirty:$,ctx:m}),o.$set(b)},i(m){u||(k(e.$$.fragment,m),k(c),k(h),k(p),k(o.$$.fragment,m),u=!0)},o(m){M(e.$$.fragment,m),M(c),M(h),M(p),M(o.$$.fragment,m),u=!1},d(m){G(e,m),m&&_(l),m&&_(t),c.d(m),h&&h.d(),m&&_(n),p&&p.d(m),m&&_(i),G(o,m)}}}function Ul({url:s}){const e=Le(s.pathname);return{props:{topRoute:"key"+e[0]}}}function El(s,e,l){let{$$slots:t={},$$scope:a}=e,{topRoute:r=null}=e,{topNavigating:n=!0}=e,i=!1;const o=Qe("/data/geo/saint-constant.geojson"),u=Qe("/data/geo/propositions.geojson");function c(A){ze.set({text:`${A.features[0].properties.type} ${A.features[0].properties.key}: ${A.features[0].properties.title}`,coords:A.features[0].geometry.type.toLowerCase()==="point"?A.features[0].geometry.coordinates:A.lngLat})}fl(({from:A,to:L})=>{var I;$e.setClass(""),Dt.set(null),Vt.set(null),Le(A==null?void 0:A.href)[0]!==((I=Le(L==null?void 0:L.href))==null?void 0:I[0])&&l(0,n=!0)}),ul(({from:A,to:L})=>{n&&l(0,n=!1)});function h(){n&&l(0,n=!1),document.body.style.scrollBehavior="unset",document.body.scrollTop=0,document.body.style.scrollBehavior="smooth"}const p=A=>c(A.detail),m=()=>ze.set(null),$=()=>l(2,i=!0),b=()=>l(2,i=!0);return s.$$set=A=>{"topRoute"in A&&l(1,r=A.topRoute),"topNavigating"in A&&l(0,n=A.topNavigating),"$$scope"in A&&l(12,a=A.$$scope)},[n,r,i,o,u,c,h,t,p,m,$,b,a]}class Fl extends ce{constructor(e){super(),fe(this,e,El,yl,ae,{topRoute:1,topNavigating:0})}}export{Fl as default,Ul as load};