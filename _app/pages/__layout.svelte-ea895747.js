import{S as fe,i as ue,s as ae,e as N,c as M,a as E,d as p,b as c,I as F,g as L,t as D,k as P,h as V,m as R,J as v,K as ee,L as Ue,M as ie,l as X,q as b,n as J,o as C,p as K,N as Y,O as te,P as le,Q as Ee,R as re,E as w,f as ce,T as Fe,z as Ct,U as vt,C as Lt,w as z,x as G,y as Q,B as W,v as At,V as Bt,W as Ae,G as Pt,j as $t,X as Rt,Y as It,Z as St,_ as Ot,$ as qe,a0 as je}from"../chunks/index-bbca5c05.js";import{g as Tt,a as Ht,c as oe}from"../chunks/themeColors-35fcc233.js";import{M as Dt}from"../chunks/Map-7fb134cf.js";import{m as ve,a as Vt,b as Ut,c as ze}from"../chunks/maplibre-gl-05c428df.js";import{r as Be,e as Pe,g as Le}from"../chunks/route-11860d83.js";import{e as Ge,r as we}from"../chunks/routes-10413546.js";import{f as $e,e as Re,d as de,s as Ft}from"../chunks/index-d82f60b1.js";import{m as kt}from"../chunks/scroll-ddb61233.js";import{b as qt}from"../chunks/paths-396f020f.js";import{i as jt}from"../chunks/intersect-eda3c074.js";import{l as ye,L as bt,h as yt}from"../chunks/logos-ca65e911.js";import{g as Qe}from"../chunks/generateSvgPaths-8c5d72ca.js";import{L as zt}from"../chunks/Loading-dfb6db7c.js";import{c as he}from"../chunks/singletons-d1fb5791.js";import{g as We,M as Et}from"../chunks/getData-e71cdcb7.js";import"../chunks/index-236d7f9e.js";import"../chunks/Map.svelte_svelte_type_style_lang-a346c26e.js";import"../chunks/_commonjsHelpers-7d66b65f.js";function Ye(s,e,l){const t=s.slice();return t[3]=e[l],t[5]=l,t}function Je(s){let e,l,t,r=Ge,a=[];for(let n=0;n<r.length;n+=1)a[n]=Ke(Ye(s,r,n));return{c(){e=N("nav");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=M(n,"NAV",{class:!0});var o=E(e);for(let i=0;i<a.length;i+=1)a[i].l(o);o.forEach(p),this.h()},h(){c(e,"class","cpeum-17tbchp"),F(e,"min",s[1].full)},m(n,o){L(n,e,o);for(let i=0;i<a.length;i+=1)a[i].m(e,null);t=!0},p(n,o){if(o&4){r=Ge;let i;for(i=0;i<r.length;i+=1){const g=Ye(n,r,i);a[i]?a[i].p(g,o):(a[i]=Ke(g),a[i].c(),a[i].m(e,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=r.length}o&2&&F(e,"min",n[1].full)},i(n){t||(ee(()=>{l||(l=Ue(e,$e,{y:-25},!0)),l.run(1)}),t=!0)},o(n){l||(l=Ue(e,$e,{y:-25},!1)),l.run(0),t=!1},d(n){n&&p(e),ie(a,n),n&&l&&l.end()}}}function Ke(s){let e,l,t,r=s[5]+1+"",a,n,o,i,g=s[3].title+"",d,h,f,u;return{c(){e=N("a"),l=N("span"),t=D("0"),a=D(r),n=D("."),o=D("\xA0"),i=N("span"),d=D(g),h=P(),this.h()},l($){e=M($,"A",{href:!0,"sveltekit:prefetch":!0,style:!0,class:!0});var y=E(e);l=M(y,"SPAN",{class:!0});var q=E(l);t=V(q,"0"),a=V(q,r),n=V(q,"."),q.forEach(p),o=V(y,"\xA0"),i=M(y,"SPAN",{class:!0});var k=E(i);d=V(k,g),k.forEach(p),h=R(y),y.forEach(p),this.h()},h(){c(l,"class","number cpeum-17tbchp"),c(i,"class","title cpeum-17tbchp"),c(e,"href",f=s[3].path),c(e,"sveltekit:prefetch",""),c(e,"style",u=Tt(s[3].key)),c(e,"class","cpeum-17tbchp"),F(e,"current",s[2]===s[3])},m($,y){L($,e,y),v(e,l),v(l,t),v(l,a),v(l,n),v(e,o),v(e,i),v(i,d),v(e,h)},p($,y){y&4&&F(e,"current",$[2]===$[3])},d($){$&&p(e)}}}function Gt(s){var r;let e,l,t=((r=s[0])==null?void 0:r.exercices)&&Je(s);return{c(){t&&t.c(),e=X()},l(a){t&&t.l(a),e=X()},m(a,n){t&&t.m(a,n),L(a,e,n),l=!0},p(a,[n]){var o;(o=a[0])!=null&&o.exercices?t?(t.p(a,n),n&1&&b(t,1)):(t=Je(a),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(J(),C(t,1,1,()=>{t=null}),K())},i(a){l||(b(t),l=!0)},o(a){C(t),l=!1},d(a){t&&t.d(a),a&&p(e)}}}function Qt(s,e,l){let t,r,a;return Y(s,Be,n=>l(0,t=n)),Y(s,ve,n=>l(1,r=n)),Y(s,Pe,n=>l(2,a=n)),[t,r,a]}class Wt extends fe{constructor(e){super(),ue(this,e,Qt,Gt,ae,{})}}function Yt(s){let e,l,t,r;return{c(){e=te("line"),t=te("line"),this.h()},l(a){e=le(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),E(e).forEach(p),t=le(a,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),E(t).forEach(p),this.h()},h(){c(e,"x1","30"),c(e,"y1","30"),c(e,"x2","70"),c(e,"y2","70"),c(e,"vector-effect","non-scaling-stroke"),c(t,"x1","30"),c(t,"y1","70"),c(t,"x2","70"),c(t,"y2","30"),c(t,"vector-effect","non-scaling-stroke")},m(a,n){L(a,e,n),L(a,t,n)},i(a){l||ee(()=>{l=re(e,de,{}),l.start()}),r||ee(()=>{r=re(t,de,{delay:150}),r.start()})},o:w,d(a){a&&p(e),a&&p(t)}}}function Jt(s){let e,l,t,r;return{c(){e=te("path"),t=te("circle"),this.h()},l(a){e=le(a,"path",{d:!0,"vector-effect":!0}),E(e).forEach(p),t=le(a,"circle",{cx:!0,cy:!0,r:!0,"vector-effect":!0}),E(t).forEach(p),this.h()},h(){c(e,"d",`M46,88.3L25.8,50.5c-5.7-10.7-3.8-23.9,4.8-32.4l0,0c10.7-10.7,28.2-10.7,38.9,0l0,0
			c8.6,8.6,10.5,21.7,4.8,32.4L54.1,88.3C52.4,91.5,47.7,91.5,46,88.3z`),c(e,"vector-effect","non-scaling-stroke"),c(t,"cx","50.5"),c(t,"cy","37.4"),c(t,"r","11.1"),c(t,"vector-effect","non-scaling-stroke")},m(a,n){L(a,e,n),L(a,t,n)},i(a){l||ee(()=>{l=re(e,de,{}),l.start()}),r||ee(()=>{r=re(t,de,{delay:150}),r.start()})},o:w,d(a){a&&p(e),a&&p(t)}}}function Kt(s){let e,l,t,r,a,n,o;function i(h,f){return h[0].full?Yt:Jt}let g=i(s),d=g(s);return{c(){e=N("label"),l=N("input"),r=P(),a=te("svg"),d.c(),this.h()},l(h){e=M(h,"LABEL",{id:!0,for:!0,class:!0});var f=E(e);l=M(f,"INPUT",{id:!0,type:!0,class:!0}),r=R(f),a=le(f,"svg",{version:!0,viewBox:!0,"shape-rendering":!0,class:!0});var u=E(a);d.l(u),u.forEach(p),f.forEach(p),this.h()},h(){c(l,"id","map-toggle-input"),c(l,"type","checkbox"),c(l,"class","cpeum-1sn1vss"),c(a,"version","1.1"),c(a,"viewBox","0 0 100 100"),c(a,"shape-rendering","geometricPrecision"),c(a,"class","cpeum-1sn1vss"),c(e,"id","map-toggle"),c(e,"for","map-toggle-input"),c(e,"class","cpeum-1sn1vss"),F(e,"active",s[0].full)},m(h,f){L(h,e,f),v(e,l),l.checked=s[0].full,v(e,r),v(e,a),d.m(a,null),n||(o=Ee(l,"change",s[1]),n=!0)},p(h,[f]){s=h,f&1&&(l.checked=s[0].full),g!==(g=i(s))&&(d.d(1),d=g(s),d&&(d.c(),b(d,1),d.m(a,null))),f&1&&F(e,"active",s[0].full)},i(h){t||ee(()=>{t=re(l,$e,{x:-40,easing:Re,duration:500,delay:1500}),t.start()}),b(d)},o:w,d(h){h&&p(e),d.d(),n=!1,o()}}}function Xt(s,e,l){let t;Y(s,ve,a=>l(0,t=a));function r(){t.full=this.checked,ve.set(t)}return[t,r]}class Zt extends fe{constructor(e){super(),ue(this,e,Xt,Kt,ae,{})}}function Xe(s,e,l){const t=s.slice();return t[4]=e[l],t[6]=l,t}function Ze(s,e,l){const t=s.slice();return t[7]=e[l],t[6]=l,t}function xe(s){let e,l,t=lt(),r=[];for(let n=0;n<t.length;n+=1)r[n]=et(Ze(s,t,n));const a=n=>C(r[n],1,1,()=>{r[n]=null});return{c(){for(let n=0;n<r.length;n+=1)r[n].c();e=X()},l(n){for(let o=0;o<r.length;o+=1)r[o].l(n);e=X()},m(n,o){for(let i=0;i<r.length;i+=1)r[i].m(n,o);L(n,e,o),l=!0},p(n,o){if(o&0){t=lt();let i;for(i=0;i<t.length;i+=1){const g=Ze(n,t,i);r[i]?(r[i].p(g,o),b(r[i],1)):(r[i]=et(g),r[i].c(),b(r[i],1),r[i].m(e.parentNode,e))}for(J(),i=t.length;i<r.length;i+=1)a(i);K()}},i(n){if(!l){for(let o=0;o<t.length;o+=1)b(r[o]);l=!0}},o(n){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)C(r[o]);l=!1},d(n){ie(r,n),n&&p(e)}}}function et(s){let e,l,t,r,a=[s[7],{"vector-effect":"non-scaling-stroke"}],n={};for(let o=0;o<a.length;o+=1)n=Lt(n,a[o]);return{c(){e=te("line"),this.h()},l(o){e=le(o,"line",{"vector-effect":!0}),E(e).forEach(p),this.h()},h(){Fe(e,n),F(e,"cpeum-1bp8poh",!0)},m(o,i){L(o,e,i),r=!0},p(o,i){Fe(e,n=Ct(a,[o[7],{"vector-effect":"non-scaling-stroke"}])),F(e,"cpeum-1bp8poh",!0)},i(o){r||(ee(()=>{t&&t.end(1),l=re(e,de,{speed:.25,delay:s[6]*20}),l.start()}),r=!0)},o(o){l&&l.invalidate(),t=vt(e,de,{speed:.5,delay:s[6]*20}),r=!1},d(o){o&&p(e),o&&t&&t.end()}}}function tt(s){var q;let e,l,t,r,a=s[4].title+"",n,o,i,g=s[4].title+"",d,h,f,u=`${s[6]*60}ms`,$,y=s[4].title==((q=s[3])==null?void 0:q.title)&&xe(s);return{c(){e=N("a"),l=te("svg"),y&&y.c(),t=P(),r=N("span"),n=D(a),o=P(),i=N("span"),d=D(g),h=P(),this.h()},l(k){e=M(k,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var B=E(e);l=le(B,"svg",{class:!0});var j=E(l);y&&y.l(j),j.forEach(p),t=R(B),r=M(B,"SPAN",{class:!0});var Z=E(r);n=V(Z,a),Z.forEach(p),o=R(B),i=M(B,"SPAN",{class:!0});var x=E(i);d=V(x,g),x.forEach(p),h=R(B),B.forEach(p),this.h()},h(){var k;c(l,"class","cpeum-1bp8poh"),c(r,"class","text cpeum-1bp8poh"),c(i,"class","hover-text cpeum-1bp8poh"),c(e,"href",f=s[4].exercices?s[2].path:s[4].path),c(e,"sveltekit:prefetch",""),c(e,"class","cpeum-1bp8poh"),F(e,"current",s[4].title==((k=s[3])==null?void 0:k.title)),ce(e,"background-color",s[0].y>Ne+200?"var(--light1)":"",!1),ce(e,"--delay",u,!1),ce(e,"--activebg",wt(),!1)},m(k,B){L(k,e,B),v(e,l),y&&y.m(l,null),v(e,t),v(e,r),v(r,n),v(e,o),v(e,i),v(i,d),v(e,h),$=!0},p(k,B){var j,Z;k[4].title==((j=k[3])==null?void 0:j.title)?y?(y.p(k,B),B&8&&b(y,1)):(y=xe(k),y.c(),b(y,1),y.m(l,null)):y&&(J(),C(y,1,1,()=>{y=null}),K()),(!$||B&4&&f!==(f=k[4].exercices?k[2].path:k[4].path))&&c(e,"href",f),B&8&&F(e,"current",k[4].title==((Z=k[3])==null?void 0:Z.title)),B&1&&ce(e,"background-color",k[0].y>Ne+200?"var(--light1)":"",!1)},i(k){$||(b(y),$=!0)},o(k){C(y),$=!1},d(k){k&&p(e),y&&y.d()}}}function xt(s){let e,l,t=we,r=[];for(let n=0;n<t.length;n+=1)r[n]=tt(Xe(s,t,n));const a=n=>C(r[n],1,1,()=>{r[n]=null});return{c(){e=N("nav");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=M(n,"NAV",{class:!0});var o=E(e);for(let i=0;i<r.length;i+=1)r[i].l(o);o.forEach(p),this.h()},h(){c(e,"class","cpeum-1bp8poh"),F(e,"min",s[0].direction=="down"&&s[0].y>Ne||s[1].full)},m(n,o){L(n,e,o);for(let i=0;i<r.length;i+=1)r[i].m(e,null);l=!0},p(n,[o]){if(o&13){t=we;let i;for(i=0;i<t.length;i+=1){const g=Xe(n,t,i);r[i]?(r[i].p(g,o),b(r[i],1)):(r[i]=tt(g),r[i].c(),b(r[i],1),r[i].m(e,null))}for(J(),i=t.length;i<r.length;i+=1)a(i);K()}o&3&&F(e,"min",n[0].direction=="down"&&n[0].y>Ne||n[1].full)},i(n){if(!l){for(let o=0;o<t.length;o+=1)b(r[o]);l=!0}},o(n){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)C(r[o]);l=!1},d(n){n&&p(e),ie(r,n)}}}const Ne=120;function wt(){return`hsl(${20+Math.random()*180}, 60%, 70%)`}function lt(){const s=Math.round(8+Math.random()*4),e=0,l=0;return[...Array(s)].map(t=>({x1:l+Math.random()*(100-2*l)+"%",y1:e+Math.random()*(100-2*e)+"%",x2:l+Math.random()*(100-2*l)+"%",y2:e+Math.random()*(100-2*e)+"%",stroke:wt()}))}function el(s,e,l){let t,r,a,n;return Y(s,kt,o=>l(0,t=o)),Y(s,ve,o=>l(1,r=o)),Y(s,Pe,o=>l(2,a=o)),Y(s,Be,o=>l(3,n=o)),[t,r,a,n]}class tl extends fe{constructor(e){super(),ue(this,e,el,xt,ae,{})}}function rt(s){let e,l,t,r,a,n,o,i,g,d;return r=new tl({}),n=new Wt({}),i=new Zt({}),{c(){e=N("header"),l=N("div"),t=N("section"),z(r.$$.fragment),a=P(),z(n.$$.fragment),o=P(),z(i.$$.fragment),this.h()},l(h){e=M(h,"HEADER",{class:!0});var f=E(e);l=M(f,"DIV",{class:!0});var u=E(l);t=M(u,"SECTION",{class:!0});var $=E(t);G(r.$$.fragment,$),a=R($),G(n.$$.fragment,$),$.forEach(p),o=R(u),G(i.$$.fragment,u),u.forEach(p),f.forEach(p),this.h()},h(){c(t,"class","cpeum-leg40a"),c(l,"class","cpeum-leg40a"),c(e,"class","cpeum-leg40a")},m(h,f){L(h,e,f),v(e,l),v(l,t),Q(r,t,null),v(t,a),Q(n,t,null),v(l,o),Q(i,l,null),d=!0},p(h,f){},i(h){d||(b(r.$$.fragment,h),b(n.$$.fragment,h),b(i.$$.fragment,h),g||ee(()=>{g=re(e,$e,{opacity:0,y:-20,duration:800,easing:Re,delay:1e3}),g.start()}),d=!0)},o(h){C(r.$$.fragment,h),C(n.$$.fragment,h),C(i.$$.fragment,h),d=!1},d(h){h&&p(e),W(r),W(n),W(i)}}}function ll(s){let e,l,t=s[0]&&rt();return{c(){t&&t.c(),e=X()},l(r){t&&t.l(r),e=X()},m(r,a){t&&t.m(r,a),L(r,e,a),l=!0},p(r,[a]){r[0]?t?a&1&&b(t,1):(t=rt(),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(J(),C(t,1,1,()=>{t=null}),K())},i(r){l||(b(t),l=!0)},o(r){C(t),l=!1},d(r){t&&t.d(r),r&&p(e)}}}function rl(s,e,l){let t=!1;return At(()=>{l(0,t=!0)}),[t]}class al extends fe{constructor(e){super(),ue(this,e,rl,ll,ae,{})}}function at(s,e,l){const t=s.slice();return t[6]=e[l],t}function nt(s,e,l){const t=s.slice();return t[9]=e[l],t}function st(s,e,l){const t=s.slice();return t[12]=e[l],t}function ot(s,e,l){const t=s.slice();return t[15]=e[l],t}function it(s){let e,l,t,r;return{c(){e=te("path"),this.h()},l(a){e=le(a,"path",{"vector-effect":!0,d:!0,fill:!0,"stroke-width":!0,"stroke-linejoin":!0,"stroke-linecap":!0,"stroke-dasharray":!0,"stroke-dashoffset":!0}),E(e).forEach(p),this.h()},h(){c(e,"vector-effect","non-scaling-stroke"),c(e,"d",l=s[15].d),c(e,"fill",t=s[15].fill),c(e,"stroke-width","0"),c(e,"stroke-linejoin","round"),c(e,"stroke-linecap","round"),c(e,"stroke-dasharray","54% 20% 64% 90% 30% 130%"),c(e,"stroke-dashoffset",r=Math.random()*300+"%")},m(a,n){L(a,e,n)},p:w,d(a){a&&p(e)}}}function ct(s){let e,l,t,r,a,n;return{c(){e=N("a"),l=N("img"),this.h()},l(o){e=M(o,"A",{href:!0,rel:!0,target:!0,title:!0,class:!0});var i=E(e);l=M(i,"IMG",{src:!0,alt:!0}),i.forEach(p),this.h()},h(){Bt(l.src,t=qt+"/media/logos/"+s[12].filename)||c(l,"src",t),c(l,"alt",r="Logo: "+s[12].alt),c(e,"href",a=s[12].href),c(e,"rel","external"),c(e,"target","_blank"),c(e,"title",n=s[12].alt),c(e,"class","cpeum-v0lnac")},m(o,i){L(o,e,i),v(e,l)},p:w,d(o){o&&p(e)}}}function nl(s){let e=s[9].title+"",l;return{c(){l=D(e)},l(t){l=V(t,e)},m(t,r){L(t,l,r)},p:w,d(t){t&&p(l)}}}function ft(s){let e,l,t,r;return l=new bt({props:{style:"font-weight: 400",href:s[9].href,rel:"external",color:Ie,$$slots:{default:[nl]},$$scope:{ctx:s}}}),{c(){e=N("li"),z(l.$$.fragment),t=P(),this.h()},l(a){e=M(a,"LI",{class:!0});var n=E(e);G(l.$$.fragment,n),t=R(n),n.forEach(p),this.h()},h(){c(e,"class","cpeum-v0lnac")},m(a,n){L(a,e,n),Q(l,e,null),v(e,t),r=!0},p(a,n){const o={};n&262144&&(o.$$scope={dirty:n,ctx:a}),l.$set(o)},i(a){r||(b(l.$$.fragment,a),r=!0)},o(a){C(l.$$.fragment,a),r=!1},d(a){a&&p(e),W(l)}}}function sl(s){let e=s[6].title+"",l;return{c(){l=D(e)},l(t){l=V(t,e)},m(t,r){L(t,l,r)},p:w,d(t){t&&p(l)}}}function ut(s){let e,l,t,r;return l=new bt({props:{style:"font-weight: 400",href:s[6].path,color:Ie,$$slots:{default:[sl]},$$scope:{ctx:s}}}),{c(){e=N("li"),z(l.$$.fragment),t=P(),this.h()},l(a){e=M(a,"LI",{class:!0});var n=E(e);G(l.$$.fragment,n),t=R(n),n.forEach(p),this.h()},h(){c(e,"class","cpeum-v0lnac")},m(a,n){L(a,e,n),Q(l,e,null),v(e,t),r=!0},p(a,n){const o={};n&262144&&(o.$$scope={dirty:n,ctx:a}),l.$set(o)},i(a){r||(b(l.$$.fragment,a),r=!0)},o(a){C(l.$$.fragment,a),r=!1},d(a){a&&p(e),W(l)}}}function ol(s){let e,l,t,r,a,n,o,i,g,d,h,f,u,$,y,q,k,B,j,Z,x,Me,ke,Ce,Se,pe=s[2],O=[];for(let m=0;m<pe.length;m+=1)O[m]=it(ot(s,pe,m));let _e=[...ye.prime,...ye.second],T=[];for(let m=0;m<_e.length;m+=1)T[m]=ct(st(s,_e,m));let ne=s[1],I=[];for(let m=0;m<ne.length;m+=1)I[m]=ft(nt(s,ne,m));const Nt=m=>C(I[m],1,1,()=>{I[m]=null});let se=we,S=[];for(let m=0;m<se.length;m+=1)S[m]=ut(at(s,se,m));const Mt=m=>C(S[m],1,1,()=>{S[m]=null});return{c(){e=te("svg");for(let m=0;m<O.length;m+=1)O[m].c();l=P(),t=N("footer"),r=N("div"),a=N("section");for(let m=0;m<T.length;m+=1)T[m].c();n=P(),o=N("hr"),i=P(),g=N("section"),d=N("ul");for(let m=0;m<I.length;m+=1)I[m].c();h=P(),f=N("ul");for(let m=0;m<S.length;m+=1)S[m].c();u=P(),$=N("div"),y=N("p"),q=D("\xA9"),k=P(),B=N("p"),j=D("Chaire en paysage urbain de l'Universit\xE9 de Montr\xE9al"),Z=P(),x=N("p"),Me=D("2022"),this.h()},l(m){e=le(m,"svg",{viewBox:!0,preserveAspectRatio:!0,class:!0});var A=E(e);for(let U=0;U<O.length;U+=1)O[U].l(A);A.forEach(p),l=R(m),t=M(m,"FOOTER",{class:!0});var _=E(t);r=M(_,"DIV",{id:!0,class:!0});var H=E(r);a=M(H,"SECTION",{id:!0,class:!0});var be=E(a);for(let U=0;U<T.length;U+=1)T[U].l(be);n=R(be),o=M(be,"HR",{class:!0}),be.forEach(p),i=R(H),g=M(H,"SECTION",{id:!0,class:!0});var me=E(g);d=M(me,"UL",{class:!0});var Oe=E(d);for(let U=0;U<I.length;U+=1)I[U].l(Oe);Oe.forEach(p),h=R(me),f=M(me,"UL",{class:!0});var Te=E(f);for(let U=0;U<S.length;U+=1)S[U].l(Te);Te.forEach(p),u=R(me),$=M(me,"DIV",{class:!0});var ge=E($);y=M(ge,"P",{class:!0});var He=E(y);q=V(He,"\xA9"),He.forEach(p),k=R(ge),B=M(ge,"P",{class:!0});var De=E(B);j=V(De,"Chaire en paysage urbain de l'Universit\xE9 de Montr\xE9al"),De.forEach(p),Z=R(ge),x=M(ge,"P",{class:!0});var Ve=E(x);Me=V(Ve,"2022"),Ve.forEach(p),ge.forEach(p),me.forEach(p),H.forEach(p),_.forEach(p),this.h()},h(){c(e,"viewBox",s[2][0].viewBox),c(e,"preserveAspectRatio","xMidYMin slice"),c(e,"class","cpeum-v0lnac"),c(o,"class","cpeum-v0lnac"),c(a,"id","logos"),c(a,"class","cpeum-v0lnac"),c(d,"class","cpeum-v0lnac"),c(f,"class","cpeum-v0lnac"),c(y,"class","cpeum-v0lnac"),c(B,"class","cpeum-v0lnac"),c(x,"class","cpeum-v0lnac"),c($,"class","cpeum-v0lnac"),c(g,"id","links"),c(g,"class","cpeum-v0lnac"),c(r,"id","content"),c(r,"class","cpeum-v0lnac"),F(r,"expand",s[0]),ce(r,"color",Ie,!1),c(t,"class","cpeum-v0lnac")},m(m,A){L(m,e,A);for(let _=0;_<O.length;_+=1)O[_].m(e,null);L(m,l,A),L(m,t,A),v(t,r),v(r,a);for(let _=0;_<T.length;_+=1)T[_].m(a,null);v(a,n),v(a,o),v(r,i),v(r,g),v(g,d);for(let _=0;_<I.length;_+=1)I[_].m(d,null);v(g,h),v(g,f);for(let _=0;_<S.length;_+=1)S[_].m(f,null);v(g,u),v(g,$),v($,y),v(y,q),v($,k),v($,B),v(B,j),v($,Z),v($,x),v(x,Me),ke=!0,Ce||(Se=[Ae(jt.call(null,t,{rootMargin:"0px 0px",threshold:.5})),Ee(t,"enter",s[3]),Ee(t,"leave",s[4])],Ce=!0)},p(m,[A]){if(A&4){pe=m[2];let _;for(_=0;_<pe.length;_+=1){const H=ot(m,pe,_);O[_]?O[_].p(H,A):(O[_]=it(H),O[_].c(),O[_].m(e,null))}for(;_<O.length;_+=1)O[_].d(1);O.length=pe.length}if(A&0){_e=[...ye.prime,...ye.second];let _;for(_=0;_<_e.length;_+=1){const H=st(m,_e,_);T[_]?T[_].p(H,A):(T[_]=ct(H),T[_].c(),T[_].m(a,n))}for(;_<T.length;_+=1)T[_].d(1);T.length=_e.length}if(A&2){ne=m[1];let _;for(_=0;_<ne.length;_+=1){const H=nt(m,ne,_);I[_]?(I[_].p(H,A),b(I[_],1)):(I[_]=ft(H),I[_].c(),b(I[_],1),I[_].m(d,null))}for(J(),_=ne.length;_<I.length;_+=1)Nt(_);K()}if(A&0){se=we;let _;for(_=0;_<se.length;_+=1){const H=at(m,se,_);S[_]?(S[_].p(H,A),b(S[_],1)):(S[_]=ut(H),S[_].c(),b(S[_],1),S[_].m(f,null))}for(J(),_=se.length;_<S.length;_+=1)Mt(_);K()}A&1&&F(r,"expand",m[0])},i(m){if(!ke){for(let A=0;A<ne.length;A+=1)b(I[A]);for(let A=0;A<se.length;A+=1)b(S[A]);ke=!0}},o(m){I=I.filter(Boolean);for(let A=0;A<I.length;A+=1)C(I[A]);S=S.filter(Boolean);for(let A=0;A<S.length;A+=1)C(S[A]);ke=!1},d(m){m&&p(e),ie(O,m),m&&p(l),m&&p(t),ie(T,m),ie(I,m),ie(S,m),Ce=!1,Pt(Se)}}}const Ie="rgba(0, 0, 0, 0.4)";function il(s,e,l){const t=[{title:"CPEUM",href:"https://paysage.umontreal.ca"},{title:"CUPUM",href:"https://unesco-paysage.umontreal.ca"},{title:"Ville de Saint-Constant",href:"https://saint-constant.ca"},{title:"MRC de Roussillon",href:"https://roussillon.ca"},{title:"Minist\xE8re de l\u2019\xC9conomie et de l\u2019Innovation du Qu\xE9bec",href:"https://www.economie.gouv.qc.ca/accueil/"}];let r=!1;const a={width:1e3,height:800},n=Qe(3,{direction:"up",viewBox:a,padding:600}).map(g=>({viewBox:`0 0 ${a.width} ${a.height}`,d:g,fill:Ht([3],["light"])}));return n.push(...Qe(1,{direction:"up",viewBox:a,padding:540}).map(g=>({viewBox:`0 0 ${a.width} ${a.height}`,d:g,fill:"var(--light2)"}))),[r,t,n,()=>l(0,r=!0),()=>l(0,r=!1)]}class cl extends fe{constructor(e){super(),ue(this,e,il,ol,ae,{})}}he.disable_scroll_handling;he.goto;he.invalidate;he.prefetch;he.prefetch_routes;const fl=he.before_navigate,ul=he.after_navigate;function ht(s){let e,l,t,r,a,n=s[0].previous().title+"",o,i,g,d,h;return{c(){e=N("a"),l=N("p"),t=D("\u2190 Revenir"),r=P(),a=N("p"),o=D(n),this.h()},l(f){e=M(f,"A",{href:!0,id:!0,class:!0});var u=E(e);l=M(u,"P",{class:!0});var $=E(l);t=V($,"\u2190 Revenir"),$.forEach(p),r=R(u),a=M(u,"P",{class:!0});var y=E(a);o=V(y,n),y.forEach(p),u.forEach(p),this.h()},h(){c(l,"class","label cpeum-srs09g"),c(a,"class","title cpeum-srs09g"),c(e,"href",i=s[0].previous().path),c(e,"id","prev"),c(e,"class","cpeum-srs09g")},m(f,u){L(f,e,u),v(e,l),v(l,t),v(e,r),v(e,a),v(a,o),d||(h=Ae(g=yt.call(null,e,{size:350})),d=!0)},p(f,u){u&1&&n!==(n=f[0].previous().title+"")&&$t(o,n),u&1&&i!==(i=f[0].previous().path)&&c(e,"href",i)},d(f){f&&p(e),d=!1,h()}}}function pt(s){let e,l,t,r,a,n=s[0].next().title+"",o,i,g,d,h;return{c(){e=N("a"),l=N("p"),t=D("Poursuivre \u2192"),r=P(),a=N("p"),o=D(n),this.h()},l(f){e=M(f,"A",{href:!0,id:!0,class:!0});var u=E(e);l=M(u,"P",{class:!0});var $=E(l);t=V($,"Poursuivre \u2192"),$.forEach(p),r=R(u),a=M(u,"P",{class:!0});var y=E(a);o=V(y,n),y.forEach(p),u.forEach(p),this.h()},h(){c(l,"class","label cpeum-srs09g"),c(a,"class","title cpeum-srs09g"),c(e,"href",i=s[0].next().path),c(e,"id","next"),c(e,"class","cpeum-srs09g")},m(f,u){L(f,e,u),v(e,l),v(l,t),v(e,r),v(e,a),v(a,o),d||(h=Ae(g=yt.call(null,e,{size:350})),d=!0)},p(f,u){u&1&&n!==(n=f[0].next().title+"")&&$t(o,n),u&1&&i!==(i=f[0].next().path)&&c(e,"href",i)},d(f){f&&p(e),d=!1,h()}}}function hl(s){var a,n,o;let e,l,t=(((a=s[0])==null?void 0:a.previous)||((n=s[0])==null?void 0:n.previous))&&ht(s),r=((o=s[0])==null?void 0:o.next)&&pt(s);return{c(){e=N("nav"),t&&t.c(),l=P(),r&&r.c(),this.h()},l(i){e=M(i,"NAV",{class:!0});var g=E(e);t&&t.l(g),l=R(g),r&&r.l(g),g.forEach(p),this.h()},h(){c(e,"class","cpeum-srs09g")},m(i,g){L(i,e,g),t&&t.m(e,null),v(e,l),r&&r.m(e,null)},p(i,[g]){var d,h,f;((d=i[0])==null?void 0:d.previous)||((h=i[0])==null?void 0:h.previous)?t?t.p(i,g):(t=ht(i),t.c(),t.m(e,l)):t&&(t.d(1),t=null),(f=i[0])!=null&&f.next?r?r.p(i,g):(r=pt(i),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:w,o:w,d(i){i&&p(e),t&&t.d(),r&&r.d()}}}function pl(s,e,l){let t,r;Y(s,Be,n=>l(1,t=n)),Y(s,Pe,n=>l(2,r=n));let a;return s.$$.update=()=>{s.$$.dirty&6&&l(0,a=t!=null&&t.exercices?r:t||null)},[a,t,r]}class _l extends fe{constructor(e){super(),ue(this,e,pl,hl,ae,{})}}function _t(s){let e,l,t,r,a,n=`center ${s[3].y}px`,o,i,g;const d=s[8].default,h=Ot(d,s,s[13],null);return{c(){e=N("article"),h&&h.c(),l=P(),t=N("div"),this.h()},l(f){e=M(f,"ARTICLE",{class:!0});var u=E(e);h&&h.l(u),l=R(u),t=M(u,"DIV",{class:!0}),E(t).forEach(p),u.forEach(p),this.h()},h(){c(t,"class","grain cpeum-1oka6rq"),c(e,"class","cpeum-1oka6rq"),ce(e,"transform-origin",n,!1)},m(f,u){L(f,e,u),h&&h.m(e,null),v(e,l),v(e,t),o=!0,i||(g=Ee(e,"outroend",s[7]),i=!0)},p(f,u){s=f,h&&h.p&&(!o||u&8192)&&Rt(h,d,s,s[13],o?St(d,s[13],u,null):It(s[13]),null),u&8&&n!==(n=`center ${s[3].y}px`)&&ce(e,"transform-origin",n,!1)},i(f){o||(b(h,f),ee(()=>{a&&a.end(1),r=re(e,$e,{y:40,duration:1550,easing:Re}),r.start()}),o=!0)},o(f){C(h,f),r&&r.invalidate(),a=vt(e,Ft,{opacity:0,start:.98,duration:350}),o=!1},d(f){f&&p(e),h&&h.d(f),f&&a&&a.end(),i=!1,g()}}}function mt(s){let e,l,t=s[2]&&!s[0]&&_t(s);return{c(){t&&t.c(),e=X()},l(r){t&&t.l(r),e=X()},m(r,a){t&&t.m(r,a),L(r,e,a),l=!0},p(r,a){r[2]&&!r[0]?t?(t.p(r,a),a&5&&b(t,1)):(t=_t(r),t.c(),b(t,1),t.m(e.parentNode,e)):t&&(J(),C(t,1,1,()=>{t=null}),K())},i(r){l||(b(t),l=!0)},o(r){C(t),l=!1},d(r){t&&t.d(r),r&&p(e)}}}function gt(s){let e,l,t,r;return e=new _l({}),t=new cl({}),{c(){z(e.$$.fragment),l=P(),z(t.$$.fragment)},l(a){G(e.$$.fragment,a),l=R(a),G(t.$$.fragment,a)},m(a,n){Q(e,a,n),L(a,l,n),Q(t,a,n),r=!0},i(a){r||(b(e.$$.fragment,a),b(t.$$.fragment,a),r=!0)},o(a){C(e.$$.fragment,a),C(t.$$.fragment,a),r=!1},d(a){W(e,a),a&&p(l),W(t,a)}}}function dt(s){let e,l;return e=new zt({}),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){Q(e,t,r),l=!0},i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function ml(s){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function gl(s){let e,l;return e=new Et({props:{id:"municipal",data:s[14],fillColor:"white",fillOpacity:0,strokeColor:oe.accent3,strokeWidth:4,strokeOpacity:1,strokeDashArray:[0,1.5]}}),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){Q(e,t,r),l=!0},p:w,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function dl(s){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function vl(s){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function $l(s){let e,l;return e=new Et({props:{id:"propositions",data:s[14],fillColor:["get",["concat",["get","exercice"],"1"],["literal",oe]],fillColorHover:["get",["concat",["get","exercice"],"2"],["literal",oe]],fillColorHighlight:["get",["concat",["get","exercice"],"2"],["literal",oe]],fillOpacity:.5,fillOpacityHover:.8,fillOpacityHighlight:.65,strokeColor:["get",["concat",["get","exercice"],"2"],["literal",oe]],strokeColorHover:["get",["concat",["get","exercice"],"3"],["literal",oe]],strokeColorHighlight:["get",["concat",["get","exercice"],"3"],["literal",oe]],strokeOpacity:.5,strokeOpacityHover:.8,strokeOpacityHighlight:.65}}),e.$on("hover",s[9]),e.$on("leave",s[10]),{c(){z(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,r){Q(e,t,r),l=!0},p:w,i(t){l||(b(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){W(e,t)}}}function kl(s){return{c:w,l:w,m:w,p:w,i:w,o:w,d:w}}function bl(s){let e,l,t,r={ctx:s,current:null,token:null,hasCatch:!1,pending:dl,then:gl,catch:ml,value:14,blocks:[,,,]};qe(s[4],r);let a={ctx:s,current:null,token:null,hasCatch:!1,pending:kl,then:$l,catch:vl,value:14,blocks:[,,,]};return qe(s[5],a),{c(){r.block.c(),e=P(),l=X(),a.block.c()},l(n){r.block.l(n),e=R(n),l=X(),a.block.l(n)},m(n,o){r.block.m(n,r.anchor=o),r.mount=()=>e.parentNode,r.anchor=e,L(n,e,o),L(n,l,o),a.block.m(n,a.anchor=o),a.mount=()=>l.parentNode,a.anchor=l,t=!0},p(n,o){s=n,je(r,s,o),je(a,s,o)},i(n){t||(b(r.block),b(a.block),t=!0)},o(n){for(let o=0;o<3;o+=1){const i=r.blocks[o];C(i)}for(let o=0;o<3;o+=1){const i=a.blocks[o];C(i)}t=!1},d(n){r.block.d(n),r.token=null,r=null,n&&p(e),n&&p(l),a.block.d(n),a.token=null,a=null}}}function yl(s){let e,l,t,r=s[1],a,n,o,i,g;e=new al({});let d=mt(s),h=s[2]&&gt(),f=(!s[2]||s[0])&&dt();return i=new Dt({props:{$$slots:{default:[bl]},$$scope:{ctx:s}}}),i.$on("load",s[11]),i.$on("error",s[12]),{c(){z(e.$$.fragment),l=P(),t=N("main"),d.c(),a=P(),h&&h.c(),n=P(),f&&f.c(),o=P(),z(i.$$.fragment),this.h()},l(u){G(e.$$.fragment,u),l=R(u),t=M(u,"MAIN",{class:!0});var $=E(t);d.l($),a=R($),h&&h.l($),$.forEach(p),n=R(u),f&&f.l(u),o=R(u),G(i.$$.fragment,u),this.h()},h(){c(t,"class","cpeum-1oka6rq")},m(u,$){Q(e,u,$),L(u,l,$),L(u,t,$),d.m(t,null),v(t,a),h&&h.m(t,null),L(u,n,$),f&&f.m(u,$),L(u,o,$),Q(i,u,$),g=!0},p(u,[$]){$&2&&ae(r,r=u[1])?(J(),C(d,1,1,w),K(),d=mt(u),d.c(),b(d),d.m(t,a)):d.p(u,$),u[2]?h?$&4&&b(h,1):(h=gt(),h.c(),b(h,1),h.m(t,null)):h&&(J(),C(h,1,1,()=>{h=null}),K()),!u[2]||u[0]?f?$&5&&b(f,1):(f=dt(),f.c(),b(f,1),f.m(o.parentNode,o)):f&&(J(),C(f,1,1,()=>{f=null}),K());const y={};$&8192&&(y.$$scope={dirty:$,ctx:u}),i.$set(y)},i(u){g||(b(e.$$.fragment,u),b(d),b(h),b(f),b(i.$$.fragment,u),g=!0)},o(u){C(e.$$.fragment,u),C(d),C(h),C(f),C(i.$$.fragment,u),g=!1},d(u){W(e,u),u&&p(l),u&&p(t),d.d(u),h&&h.d(),u&&p(n),f&&f.d(u),u&&p(o),W(i,u)}}}function ql({url:s}){const e=Le(s.pathname);return{props:{topRoute:"key"+e[0]}}}function El(s,e,l){let t;Y(s,kt,k=>l(3,t=k));let{$$slots:r={},$$scope:a}=e,{topRoute:n=null}=e,{topNavigating:o=!0}=e,i=!1;const g=We("/data/geo/saint-constant.geojson"),d=We("/data/geo/propositions.geojson");function h(k){ze.set({text:`${k.features[0].properties.type} ${k.features[0].properties.key}: ${k.features[0].properties.title}`,coords:k.features[0].geometry.type.toLowerCase()==="point"?k.features[0].geometry.coordinates:k.lngLat})}fl(({from:k,to:B})=>{var j;ve.setClass(""),Vt.set(null),Ut.set(null),Le(k==null?void 0:k.href)[0]!==((j=Le(B==null?void 0:B.href))==null?void 0:j[0])&&l(0,o=!0)}),ul(({from:k,to:B})=>{o&&l(0,o=!1)});function f(){o&&l(0,o=!1),document.body.style.scrollBehavior="unset",document.body.scrollTop=0,document.body.style.scrollBehavior="smooth"}const u=k=>h(k.detail),$=()=>ze.set(null),y=()=>l(2,i=!0),q=()=>l(2,i=!0);return s.$$set=k=>{"topRoute"in k&&l(1,n=k.topRoute),"topNavigating"in k&&l(0,o=k.topNavigating),"$$scope"in k&&l(13,a=k.$$scope)},[o,n,i,t,g,d,h,f,r,u,$,y,q,a]}class jl extends fe{constructor(e){super(),ue(this,e,El,yl,ae,{topRoute:1,topNavigating:0})}}export{jl as default,ql as load};
