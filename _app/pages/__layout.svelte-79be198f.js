import{S as ce,i as ue,s as ae,e as N,c as M,a as y,d as p,b as u,I as W,g as L,t as U,k as I,h as F,m as R,J as k,K as ee,L as Ue,M as ie,l as x,q as $,n as X,o as B,p as Z,N as z,O as te,P as le,Q as ke,R as re,E,f as ve,T as Fe,z as Mt,U as vt,C as Ct,w as Y,x as G,y as Q,B as J,v as Bt,V as Lt,W as Pe,G as Pt,j as kt,X as At,Y as It,Z as Rt,_ as St,$ as Ht,a0 as Ot,a1 as je,a2 as qe}from"../chunks/index-3ec01f6b.js";import{g as Tt,a as Vt,c as oe}from"../chunks/themeColors-35fcc233.js";import{M as Dt,g as We}from"../chunks/getData-a3bdde63.js";import{m as be,b as Ut,a as Ft,c as jt,d as qt,e as ze}from"../chunks/Map.svelte_svelte_type_style_lang-2f27db00.js";import{r as ge,e as Ae,g as Le,p as Wt}from"../chunks/route-e284fd6f.js";import{e as Ye,r as Ne}from"../chunks/routes-856f8ba3.js";import{f as $e,e as Ie,d as de,a as zt}from"../chunks/index-ddb46137.js";import{m as Yt}from"../chunks/scroll-90a6affb.js";import{b as Gt}from"../chunks/paths-396f020f.js";import{i as Qt}from"../chunks/intersect-eda3c074.js";import{L as bt}from"../chunks/Link-dd71a4dc.js";import{l as we,h as $t}from"../chunks/logos-909daec5.js";import{g as Ge}from"../chunks/generateSvgPaths-8c5d72ca.js";import{L as Jt}from"../chunks/Loading-d139a3fb.js";import{M as yt}from"../chunks/MapFeature-c704ef1e.js";import"../chunks/index-0353028f.js";import"../chunks/map-92890404.js";import"../chunks/singletons-d1fb5791.js";function Qe(n,e,l){const t=n.slice();return t[3]=e[l],t[5]=l,t}function Je(n){let e,l,t,a=Ye,r=[];for(let s=0;s<a.length;s+=1)r[s]=Ke(Qe(n,a,s));return{c(){e=N("nav");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=M(s,"NAV",{class:!0});var i=y(e);for(let o=0;o<r.length;o+=1)r[o].l(i);i.forEach(p),this.h()},h(){u(e,"class","cpeum-17tbchp"),W(e,"min",n[1].full)},m(s,i){L(s,e,i);for(let o=0;o<r.length;o+=1)r[o].m(e,null);t=!0},p(s,i){if(i&4){a=Ye;let o;for(o=0;o<a.length;o+=1){const f=Qe(s,a,o);r[o]?r[o].p(f,i):(r[o]=Ke(f),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=a.length}i&2&&W(e,"min",s[1].full)},i(s){t||(ee(()=>{l||(l=Ue(e,$e,{y:-25},!0)),l.run(1)}),t=!0)},o(s){l||(l=Ue(e,$e,{y:-25},!1)),l.run(0),t=!1},d(s){s&&p(e),ie(r,s),s&&l&&l.end()}}}function Ke(n){let e,l,t,a=n[5]+1+"",r,s,i,o,f=n[3].title+"",c,g,_,b;return{c(){e=N("a"),l=N("span"),t=U("0"),r=U(a),s=U("."),i=U("\xA0"),o=N("span"),c=U(f),g=I(),this.h()},l(v){e=M(v,"A",{href:!0,"sveltekit:prefetch":!0,style:!0,class:!0});var h=y(e);l=M(h,"SPAN",{class:!0});var A=y(l);t=F(A,"0"),r=F(A,a),s=F(A,"."),A.forEach(p),i=F(h,"\xA0"),o=M(h,"SPAN",{class:!0});var w=y(o);c=F(w,f),w.forEach(p),g=R(h),h.forEach(p),this.h()},h(){u(l,"class","number cpeum-17tbchp"),u(o,"class","title cpeum-17tbchp"),u(e,"href",_=n[3].path),u(e,"sveltekit:prefetch",""),u(e,"style",b=Tt(n[3].key)),u(e,"class","cpeum-17tbchp"),W(e,"current",n[2]===n[3])},m(v,h){L(v,e,h),k(e,l),k(l,t),k(l,r),k(l,s),k(e,i),k(e,o),k(o,c),k(e,g)},p(v,h){h&4&&W(e,"current",v[2]===v[3])},d(v){v&&p(e)}}}function Kt(n){var a;let e,l,t=((a=n[0])==null?void 0:a.exercices)&&Je(n);return{c(){t&&t.c(),e=x()},l(r){t&&t.l(r),e=x()},m(r,s){t&&t.m(r,s),L(r,e,s),l=!0},p(r,[s]){var i;(i=r[0])!=null&&i.exercices?t?(t.p(r,s),s&1&&$(t,1)):(t=Je(r),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(X(),B(t,1,1,()=>{t=null}),Z())},i(r){l||($(t),l=!0)},o(r){B(t),l=!1},d(r){t&&t.d(r),r&&p(e)}}}function Xt(n,e,l){let t,a,r;return z(n,ge,s=>l(0,t=s)),z(n,be,s=>l(1,a=s)),z(n,Ae,s=>l(2,r=s)),[t,a,r]}class Zt extends ce{constructor(e){super(),ue(this,e,Xt,Kt,ae,{})}}function xt(n){let e,l,t,a;return{c(){e=te("line"),t=te("line"),this.h()},l(r){e=le(r,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),y(e).forEach(p),t=le(r,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),y(t).forEach(p),this.h()},h(){u(e,"x1","30"),u(e,"y1","30"),u(e,"x2","70"),u(e,"y2","70"),u(e,"vector-effect","non-scaling-stroke"),u(t,"x1","30"),u(t,"y1","70"),u(t,"x2","70"),u(t,"y2","30"),u(t,"vector-effect","non-scaling-stroke")},m(r,s){L(r,e,s),L(r,t,s)},i(r){l||ee(()=>{l=re(e,de,{}),l.start()}),a||ee(()=>{a=re(t,de,{delay:150}),a.start()})},o:E,d(r){r&&p(e),r&&p(t)}}}function el(n){let e,l,t,a;return{c(){e=te("path"),t=te("circle"),this.h()},l(r){e=le(r,"path",{d:!0,"vector-effect":!0}),y(e).forEach(p),t=le(r,"circle",{cx:!0,cy:!0,r:!0,"vector-effect":!0}),y(t).forEach(p),this.h()},h(){u(e,"d",`M46,88.3L25.8,50.5c-5.7-10.7-3.8-23.9,4.8-32.4l0,0c10.7-10.7,28.2-10.7,38.9,0l0,0
			c8.6,8.6,10.5,21.7,4.8,32.4L54.1,88.3C52.4,91.5,47.7,91.5,46,88.3z`),u(e,"vector-effect","non-scaling-stroke"),u(t,"cx","50.5"),u(t,"cy","37.4"),u(t,"r","11.1"),u(t,"vector-effect","non-scaling-stroke")},m(r,s){L(r,e,s),L(r,t,s)},i(r){l||ee(()=>{l=re(e,de,{}),l.start()}),a||ee(()=>{a=re(t,de,{delay:150}),a.start()})},o:E,d(r){r&&p(e),r&&p(t)}}}function tl(n){let e,l,t,a,r,s,i;function o(g,_){return g[0].full?xt:el}let f=o(n),c=f(n);return{c(){e=N("label"),l=N("input"),a=I(),r=te("svg"),c.c(),this.h()},l(g){e=M(g,"LABEL",{id:!0,for:!0,class:!0});var _=y(e);l=M(_,"INPUT",{id:!0,type:!0,class:!0}),a=R(_),r=le(_,"svg",{version:!0,viewBox:!0,"shape-rendering":!0,class:!0});var b=y(r);c.l(b),b.forEach(p),_.forEach(p),this.h()},h(){u(l,"id","map-toggle-input"),u(l,"type","checkbox"),u(l,"class","cpeum-1sn1vss"),u(r,"version","1.1"),u(r,"viewBox","0 0 100 100"),u(r,"shape-rendering","geometricPrecision"),u(r,"class","cpeum-1sn1vss"),u(e,"id","map-toggle"),u(e,"for","map-toggle-input"),u(e,"class","cpeum-1sn1vss"),W(e,"active",n[0].full)},m(g,_){L(g,e,_),k(e,l),l.checked=n[0].full,k(e,a),k(e,r),c.m(r,null),s||(i=ke(l,"change",n[1]),s=!0)},p(g,[_]){n=g,_&1&&(l.checked=n[0].full),f!==(f=o(n))&&(c.d(1),c=f(n),c&&(c.c(),$(c,1),c.m(r,null))),_&1&&W(e,"active",n[0].full)},i(g){t||ee(()=>{t=re(l,$e,{x:-40,easing:Ie,duration:500,delay:1500}),t.start()}),$(c)},o:E,d(g){g&&p(e),c.d(),s=!1,i()}}}function ll(n,e,l){let t;z(n,be,r=>l(0,t=r));function a(){t.full=this.checked,be.set(t)}return[t,a]}class rl extends ce{constructor(e){super(),ue(this,e,ll,tl,ae,{})}}function Xe(n,e,l){const t=n.slice();return t[6]=e[l],t[8]=l,t}function Ze(n,e,l){const t=n.slice();return t[9]=e[l],t[8]=l,t}function xe(n){let e,l,t=lt(),a=[];for(let s=0;s<t.length;s+=1)a[s]=et(Ze(n,t,s));const r=s=>B(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();e=x()},l(s){for(let i=0;i<a.length;i+=1)a[i].l(s);e=x()},m(s,i){for(let o=0;o<a.length;o+=1)a[o].m(s,i);L(s,e,i),l=!0},p(s,i){if(i&0){t=lt();let o;for(o=0;o<t.length;o+=1){const f=Ze(s,t,o);a[o]?(a[o].p(f,i),$(a[o],1)):(a[o]=et(f),a[o].c(),$(a[o],1),a[o].m(e.parentNode,e))}for(X(),o=t.length;o<a.length;o+=1)r(o);Z()}},i(s){if(!l){for(let i=0;i<t.length;i+=1)$(a[i]);l=!0}},o(s){a=a.filter(Boolean);for(let i=0;i<a.length;i+=1)B(a[i]);l=!1},d(s){ie(a,s),s&&p(e)}}}function et(n){let e,l,t,a,r=[n[9],{"vector-effect":"non-scaling-stroke"}],s={};for(let i=0;i<r.length;i+=1)s=Ct(s,r[i]);return{c(){e=te("line"),this.h()},l(i){e=le(i,"line",{"vector-effect":!0}),y(e).forEach(p),this.h()},h(){Fe(e,s),W(e,"cpeum-1bp8poh",!0)},m(i,o){L(i,e,o),a=!0},p(i,o){Fe(e,s=Mt(r,[i[9],{"vector-effect":"non-scaling-stroke"}])),W(e,"cpeum-1bp8poh",!0)},i(i){a||(ee(()=>{t&&t.end(1),l=re(e,de,{speed:.25,delay:n[8]*20}),l.start()}),a=!0)},o(i){l&&l.invalidate(),t=vt(e,de,{speed:.5,delay:n[8]*20}),a=!1},d(i){i&&p(e),i&&t&&t.end()}}}function tt(n){var A;let e,l,t,a,r=n[6].title+"",s,i,o,f=n[6].title+"",c,g,_,b=`${n[8]*60}ms`,v,h=n[6].title==((A=n[4])==null?void 0:A.title)&&xe(n);return{c(){e=N("a"),l=te("svg"),h&&h.c(),t=I(),a=N("span"),s=U(r),i=I(),o=N("span"),c=U(f),g=I(),this.h()},l(w){e=M(w,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var S=y(e);l=le(S,"svg",{class:!0});var K=y(l);h&&h.l(K),K.forEach(p),t=R(S),a=M(S,"SPAN",{class:!0});var C=y(a);s=F(C,r),C.forEach(p),i=R(S),o=M(S,"SPAN",{class:!0});var q=y(o);c=F(q,f),q.forEach(p),g=R(S),S.forEach(p),this.h()},h(){var w;u(l,"class","cpeum-1bp8poh"),u(a,"class","text cpeum-1bp8poh"),u(o,"class","hover-text cpeum-1bp8poh"),u(e,"href",_=n[6].exercices?n[3].path:n[6].path),u(e,"sveltekit:prefetch",""),u(e,"class","cpeum-1bp8poh"),W(e,"current",n[6].title==((w=n[4])==null?void 0:w.title)),ve(e,"background-color",n[1].y>Me+200?"var(--light1)":"",!1),ve(e,"--delay",b,!1),ve(e,"--activebg",Et(),!1)},m(w,S){L(w,e,S),k(e,l),h&&h.m(l,null),k(e,t),k(e,a),k(a,s),k(e,i),k(e,o),k(o,c),k(e,g),v=!0},p(w,S){var K,C;w[6].title==((K=w[4])==null?void 0:K.title)?h?(h.p(w,S),S&16&&$(h,1)):(h=xe(w),h.c(),$(h,1),h.m(l,null)):h&&(X(),B(h,1,1,()=>{h=null}),Z()),(!v||S&8&&_!==(_=w[6].exercices?w[3].path:w[6].path))&&u(e,"href",_),S&16&&W(e,"current",w[6].title==((C=w[4])==null?void 0:C.title)),S&2&&ve(e,"background-color",w[1].y>Me+200?"var(--light1)":"",!1)},i(w){v||($(h),v=!0)},o(w){B(h),v=!1},d(w){w&&p(e),h&&h.d()}}}function al(n){let e,l,t,a,r=Ne,s=[];for(let o=0;o<r.length;o+=1)s[o]=tt(Xe(n,r,o));const i=o=>B(s[o],1,1,()=>{s[o]=null});return{c(){e=N("nav");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=M(o,"NAV",{class:!0});var f=y(e);for(let c=0;c<s.length;c+=1)s[c].l(f);f.forEach(p),this.h()},h(){u(e,"class","cpeum-1bp8poh"),W(e,"min",n[1].y>Me&&n[0]||n[2].full)},m(o,f){L(o,e,f);for(let c=0;c<s.length;c+=1)s[c].m(e,null);l=!0,t||(a=ke(window,"mousemove",n[5]),t=!0)},p(o,[f]){if(f&26){r=Ne;let c;for(c=0;c<r.length;c+=1){const g=Xe(o,r,c);s[c]?(s[c].p(g,f),$(s[c],1)):(s[c]=tt(g),s[c].c(),$(s[c],1),s[c].m(e,null))}for(X(),c=r.length;c<s.length;c+=1)i(c);Z()}f&7&&W(e,"min",o[1].y>Me&&o[0]||o[2].full)},i(o){if(!l){for(let f=0;f<r.length;f+=1)$(s[f]);l=!0}},o(o){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)B(s[f]);l=!1},d(o){o&&p(e),ie(s,o),t=!1,a()}}}const Me=120;function Et(){return`hsl(${20+Math.random()*180}, 60%, 70%)`}function lt(){const n=Math.round(8+Math.random()*4),e=0,l=0;return[...Array(n)].map(t=>({x1:l+Math.random()*(100-2*l)+"%",y1:e+Math.random()*(100-2*e)+"%",x2:l+Math.random()*(100-2*l)+"%",y2:e+Math.random()*(100-2*e)+"%",stroke:Et()}))}function sl(n,e,l){let t,a,r,s;z(n,Yt,f=>l(1,t=f)),z(n,be,f=>l(2,a=f)),z(n,Ae,f=>l(3,r=f)),z(n,ge,f=>l(4,s=f));let i;function o(f){f.clientY>120?l(0,i=!0):l(0,i=!1)}return[i,t,a,r,s,o]}class nl extends ce{constructor(e){super(),ue(this,e,sl,al,ae,{})}}function rt(n){let e,l,t,a,r,s,i,o,f,c;return a=new nl({}),s=new Zt({}),o=new rl({}),{c(){e=N("header"),l=N("div"),t=N("section"),Y(a.$$.fragment),r=I(),Y(s.$$.fragment),i=I(),Y(o.$$.fragment),this.h()},l(g){e=M(g,"HEADER",{class:!0});var _=y(e);l=M(_,"DIV",{class:!0});var b=y(l);t=M(b,"SECTION",{class:!0});var v=y(t);G(a.$$.fragment,v),r=R(v),G(s.$$.fragment,v),v.forEach(p),i=R(b),G(o.$$.fragment,b),b.forEach(p),_.forEach(p),this.h()},h(){u(t,"class","cpeum-leg40a"),u(l,"class","cpeum-leg40a"),u(e,"class","cpeum-leg40a")},m(g,_){L(g,e,_),k(e,l),k(l,t),Q(a,t,null),k(t,r),Q(s,t,null),k(l,i),Q(o,l,null),c=!0},p(g,_){},i(g){c||($(a.$$.fragment,g),$(s.$$.fragment,g),$(o.$$.fragment,g),f||ee(()=>{f=re(e,$e,{opacity:0,y:-20,duration:800,easing:Ie,delay:1e3}),f.start()}),c=!0)},o(g){B(a.$$.fragment,g),B(s.$$.fragment,g),B(o.$$.fragment,g),c=!1},d(g){g&&p(e),J(a),J(s),J(o)}}}function ol(n){let e,l,t=n[0]&&rt();return{c(){t&&t.c(),e=x()},l(a){t&&t.l(a),e=x()},m(a,r){t&&t.m(a,r),L(a,e,r),l=!0},p(a,[r]){a[0]?t?r&1&&$(t,1):(t=rt(),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(X(),B(t,1,1,()=>{t=null}),Z())},i(a){l||($(t),l=!0)},o(a){B(t),l=!1},d(a){t&&t.d(a),a&&p(e)}}}function il(n,e,l){let t=!1;return Bt(()=>{l(0,t=!0)}),[t]}class cl extends ce{constructor(e){super(),ue(this,e,il,ol,ae,{})}}function at(n,e,l){const t=n.slice();return t[6]=e[l],t}function st(n,e,l){const t=n.slice();return t[9]=e[l],t}function nt(n,e,l){const t=n.slice();return t[12]=e[l],t}function ot(n,e,l){const t=n.slice();return t[15]=e[l],t}function it(n){let e,l,t,a;return{c(){e=te("path"),this.h()},l(r){e=le(r,"path",{"vector-effect":!0,d:!0,fill:!0,"stroke-width":!0,"stroke-linejoin":!0,"stroke-linecap":!0,"stroke-dasharray":!0,"stroke-dashoffset":!0}),y(e).forEach(p),this.h()},h(){u(e,"vector-effect","non-scaling-stroke"),u(e,"d",l=n[15].d),u(e,"fill",t=n[15].fill),u(e,"stroke-width","0"),u(e,"stroke-linejoin","round"),u(e,"stroke-linecap","round"),u(e,"stroke-dasharray","54% 20% 64% 90% 30% 130%"),u(e,"stroke-dashoffset",a=Math.random()*300+"%")},m(r,s){L(r,e,s)},p:E,d(r){r&&p(e)}}}function ct(n){let e,l,t,a,r,s;return{c(){e=N("a"),l=N("img"),this.h()},l(i){e=M(i,"A",{href:!0,rel:!0,target:!0,title:!0,class:!0});var o=y(e);l=M(o,"IMG",{src:!0,alt:!0}),o.forEach(p),this.h()},h(){Lt(l.src,t=Gt+"/media/logos/"+n[12].filename)||u(l,"src",t),u(l,"alt",a="Logo: "+n[12].alt),u(e,"href",r=n[12].href),u(e,"rel","external"),u(e,"target","_blank"),u(e,"title",s=n[12].alt),u(e,"class","cpeum-v0lnac")},m(i,o){L(i,e,o),k(e,l)},p:E,d(i){i&&p(e)}}}function ul(n){let e=n[9].title+"",l;return{c(){l=U(e)},l(t){l=F(t,e)},m(t,a){L(t,l,a)},p:E,d(t){t&&p(l)}}}function ut(n){let e,l,t,a;return l=new bt({props:{style:"font-weight: 400",href:n[9].href,rel:"external",color:Re,$$slots:{default:[ul]},$$scope:{ctx:n}}}),{c(){e=N("li"),Y(l.$$.fragment),t=I(),this.h()},l(r){e=M(r,"LI",{class:!0});var s=y(e);G(l.$$.fragment,s),t=R(s),s.forEach(p),this.h()},h(){u(e,"class","cpeum-v0lnac")},m(r,s){L(r,e,s),Q(l,e,null),k(e,t),a=!0},p(r,s){const i={};s&262144&&(i.$$scope={dirty:s,ctx:r}),l.$set(i)},i(r){a||($(l.$$.fragment,r),a=!0)},o(r){B(l.$$.fragment,r),a=!1},d(r){r&&p(e),J(l)}}}function fl(n){let e=n[6].title+"",l;return{c(){l=U(e)},l(t){l=F(t,e)},m(t,a){L(t,l,a)},p:E,d(t){t&&p(l)}}}function ft(n){let e,l,t,a;return l=new bt({props:{style:"font-weight: 400",href:n[6].path,color:Re,$$slots:{default:[fl]},$$scope:{ctx:n}}}),{c(){e=N("li"),Y(l.$$.fragment),t=I(),this.h()},l(r){e=M(r,"LI",{class:!0});var s=y(e);G(l.$$.fragment,s),t=R(s),s.forEach(p),this.h()},h(){u(e,"class","cpeum-v0lnac")},m(r,s){L(r,e,s),Q(l,e,null),k(e,t),a=!0},p(r,s){const i={};s&262144&&(i.$$scope={dirty:s,ctx:r}),l.$set(i)},i(r){a||($(l.$$.fragment,r),a=!0)},o(r){B(l.$$.fragment,r),a=!1},d(r){r&&p(e),J(l)}}}function hl(n){let e,l,t,a,r,s,i,o,f,c,g,_,b,v,h,A,w,S,K,C,q,fe,ye,Ce,Se,he=n[2],T=[];for(let d=0;d<he.length;d+=1)T[d]=it(ot(n,he,d));let pe=[...we.prime,...we.second],V=[];for(let d=0;d<pe.length;d+=1)V[d]=ct(nt(n,pe,d));let se=n[1],H=[];for(let d=0;d<se.length;d+=1)H[d]=ut(st(n,se,d));const wt=d=>B(H[d],1,1,()=>{H[d]=null});let ne=Ne,O=[];for(let d=0;d<ne.length;d+=1)O[d]=ft(at(n,ne,d));const Nt=d=>B(O[d],1,1,()=>{O[d]=null});return{c(){e=te("svg");for(let d=0;d<T.length;d+=1)T[d].c();l=I(),t=N("footer"),a=N("div"),r=N("section");for(let d=0;d<V.length;d+=1)V[d].c();s=I(),i=N("hr"),o=I(),f=N("section"),c=N("ul");for(let d=0;d<H.length;d+=1)H[d].c();g=I(),_=N("ul");for(let d=0;d<O.length;d+=1)O[d].c();b=I(),v=N("div"),h=N("p"),A=U("\xA9"),w=I(),S=N("p"),K=U("Chaire en paysage urbain de l'Universit\xE9 de Montr\xE9al"),C=I(),q=N("p"),fe=U("2022"),this.h()},l(d){e=le(d,"svg",{viewBox:!0,preserveAspectRatio:!0,class:!0});var P=y(e);for(let j=0;j<T.length;j+=1)T[j].l(P);P.forEach(p),l=R(d),t=M(d,"FOOTER",{class:!0});var m=y(t);a=M(m,"DIV",{id:!0,class:!0});var D=y(a);r=M(D,"SECTION",{id:!0,class:!0});var Ee=y(r);for(let j=0;j<V.length;j+=1)V[j].l(Ee);s=R(Ee),i=M(Ee,"HR",{class:!0}),Ee.forEach(p),o=R(D),f=M(D,"SECTION",{id:!0,class:!0});var _e=y(f);c=M(_e,"UL",{class:!0});var He=y(c);for(let j=0;j<H.length;j+=1)H[j].l(He);He.forEach(p),g=R(_e),_=M(_e,"UL",{class:!0});var Oe=y(_);for(let j=0;j<O.length;j+=1)O[j].l(Oe);Oe.forEach(p),b=R(_e),v=M(_e,"DIV",{class:!0});var me=y(v);h=M(me,"P",{class:!0});var Te=y(h);A=F(Te,"\xA9"),Te.forEach(p),w=R(me),S=M(me,"P",{class:!0});var Ve=y(S);K=F(Ve,"Chaire en paysage urbain de l'Universit\xE9 de Montr\xE9al"),Ve.forEach(p),C=R(me),q=M(me,"P",{class:!0});var De=y(q);fe=F(De,"2022"),De.forEach(p),me.forEach(p),_e.forEach(p),D.forEach(p),m.forEach(p),this.h()},h(){u(e,"viewBox",n[2][0].viewBox),u(e,"preserveAspectRatio","xMidYMin slice"),u(e,"class","cpeum-v0lnac"),u(i,"class","cpeum-v0lnac"),u(r,"id","logos"),u(r,"class","cpeum-v0lnac"),u(c,"class","cpeum-v0lnac"),u(_,"class","cpeum-v0lnac"),u(h,"class","cpeum-v0lnac"),u(S,"class","cpeum-v0lnac"),u(q,"class","cpeum-v0lnac"),u(v,"class","cpeum-v0lnac"),u(f,"id","links"),u(f,"class","cpeum-v0lnac"),u(a,"id","content"),u(a,"class","cpeum-v0lnac"),W(a,"expand",n[0]),ve(a,"color",Re,!1),u(t,"class","cpeum-v0lnac")},m(d,P){L(d,e,P);for(let m=0;m<T.length;m+=1)T[m].m(e,null);L(d,l,P),L(d,t,P),k(t,a),k(a,r);for(let m=0;m<V.length;m+=1)V[m].m(r,null);k(r,s),k(r,i),k(a,o),k(a,f),k(f,c);for(let m=0;m<H.length;m+=1)H[m].m(c,null);k(f,g),k(f,_);for(let m=0;m<O.length;m+=1)O[m].m(_,null);k(f,b),k(f,v),k(v,h),k(h,A),k(v,w),k(v,S),k(S,K),k(v,C),k(v,q),k(q,fe),ye=!0,Ce||(Se=[Pe(Qt.call(null,t,{rootMargin:"0px 0px",threshold:.5})),ke(t,"enter",n[3]),ke(t,"leave",n[4])],Ce=!0)},p(d,[P]){if(P&4){he=d[2];let m;for(m=0;m<he.length;m+=1){const D=ot(d,he,m);T[m]?T[m].p(D,P):(T[m]=it(D),T[m].c(),T[m].m(e,null))}for(;m<T.length;m+=1)T[m].d(1);T.length=he.length}if(P&0){pe=[...we.prime,...we.second];let m;for(m=0;m<pe.length;m+=1){const D=nt(d,pe,m);V[m]?V[m].p(D,P):(V[m]=ct(D),V[m].c(),V[m].m(r,s))}for(;m<V.length;m+=1)V[m].d(1);V.length=pe.length}if(P&2){se=d[1];let m;for(m=0;m<se.length;m+=1){const D=st(d,se,m);H[m]?(H[m].p(D,P),$(H[m],1)):(H[m]=ut(D),H[m].c(),$(H[m],1),H[m].m(c,null))}for(X(),m=se.length;m<H.length;m+=1)wt(m);Z()}if(P&0){ne=Ne;let m;for(m=0;m<ne.length;m+=1){const D=at(d,ne,m);O[m]?(O[m].p(D,P),$(O[m],1)):(O[m]=ft(D),O[m].c(),$(O[m],1),O[m].m(_,null))}for(X(),m=ne.length;m<O.length;m+=1)Nt(m);Z()}P&1&&W(a,"expand",d[0])},i(d){if(!ye){for(let P=0;P<se.length;P+=1)$(H[P]);for(let P=0;P<ne.length;P+=1)$(O[P]);ye=!0}},o(d){H=H.filter(Boolean);for(let P=0;P<H.length;P+=1)B(H[P]);O=O.filter(Boolean);for(let P=0;P<O.length;P+=1)B(O[P]);ye=!1},d(d){d&&p(e),ie(T,d),d&&p(l),d&&p(t),ie(V,d),ie(H,d),ie(O,d),Ce=!1,Pt(Se)}}}const Re="rgba(0, 0, 0, 0.4)";function pl(n,e,l){const t=[{title:"CPEUM",href:"https://paysage.umontreal.ca"},{title:"CUPUM",href:"https://unesco-paysage.umontreal.ca"},{title:"Ville de Saint-Constant",href:"https://saint-constant.ca"},{title:"MRC de Roussillon",href:"https://roussillon.ca"},{title:"Minist\xE8re de l\u2019\xC9conomie et de l\u2019Innovation du Qu\xE9bec",href:"https://www.economie.gouv.qc.ca/accueil/"}];let a=!1;const r={width:1e3,height:800},s=Ge(3,{direction:"up",viewBox:r,padding:600}).map(f=>({viewBox:`0 0 ${r.width} ${r.height}`,d:f,fill:Vt([3],["light"])}));return s.push(...Ge(1,{direction:"up",viewBox:r,padding:540}).map(f=>({viewBox:`0 0 ${r.width} ${r.height}`,d:f,fill:"var(--light2)"}))),[a,t,s,()=>l(0,a=!0),()=>l(0,a=!1)]}class _l extends ce{constructor(e){super(),ue(this,e,pl,hl,ae,{})}}function ht(n){let e,l,t,a,r,s=n[0].previous().title+"",i,o,f,c,g;return{c(){e=N("a"),l=N("p"),t=U("\u2190 Revenir"),a=I(),r=N("p"),i=U(s),this.h()},l(_){e=M(_,"A",{href:!0,id:!0,class:!0});var b=y(e);l=M(b,"P",{class:!0});var v=y(l);t=F(v,"\u2190 Revenir"),v.forEach(p),a=R(b),r=M(b,"P",{class:!0});var h=y(r);i=F(h,s),h.forEach(p),b.forEach(p),this.h()},h(){u(l,"class","label cpeum-srs09g"),u(r,"class","title cpeum-srs09g"),u(e,"href",o=n[0].previous().path),u(e,"id","prev"),u(e,"class","cpeum-srs09g")},m(_,b){L(_,e,b),k(e,l),k(l,t),k(e,a),k(e,r),k(r,i),c||(g=Pe(f=$t.call(null,e,{size:350})),c=!0)},p(_,b){b&1&&s!==(s=_[0].previous().title+"")&&kt(i,s),b&1&&o!==(o=_[0].previous().path)&&u(e,"href",o)},d(_){_&&p(e),c=!1,g()}}}function pt(n){let e,l,t,a,r,s=n[0].next().title+"",i,o,f,c,g;return{c(){e=N("a"),l=N("p"),t=U("Poursuivre \u2192"),a=I(),r=N("p"),i=U(s),this.h()},l(_){e=M(_,"A",{href:!0,id:!0,class:!0});var b=y(e);l=M(b,"P",{class:!0});var v=y(l);t=F(v,"Poursuivre \u2192"),v.forEach(p),a=R(b),r=M(b,"P",{class:!0});var h=y(r);i=F(h,s),h.forEach(p),b.forEach(p),this.h()},h(){u(l,"class","label cpeum-srs09g"),u(r,"class","title cpeum-srs09g"),u(e,"href",o=n[0].next().path),u(e,"id","next"),u(e,"class","cpeum-srs09g")},m(_,b){L(_,e,b),k(e,l),k(l,t),k(e,a),k(e,r),k(r,i),c||(g=Pe(f=$t.call(null,e,{size:350})),c=!0)},p(_,b){b&1&&s!==(s=_[0].next().title+"")&&kt(i,s),b&1&&o!==(o=_[0].next().path)&&u(e,"href",o)},d(_){_&&p(e),c=!1,g()}}}function ml(n){var r,s,i;let e,l,t=(((r=n[0])==null?void 0:r.previous)||((s=n[0])==null?void 0:s.previous))&&ht(n),a=((i=n[0])==null?void 0:i.next)&&pt(n);return{c(){e=N("nav"),t&&t.c(),l=I(),a&&a.c(),this.h()},l(o){e=M(o,"NAV",{class:!0});var f=y(e);t&&t.l(f),l=R(f),a&&a.l(f),f.forEach(p),this.h()},h(){u(e,"class","cpeum-srs09g")},m(o,f){L(o,e,f),t&&t.m(e,null),k(e,l),a&&a.m(e,null)},p(o,[f]){var c,g,_;((c=o[0])==null?void 0:c.previous)||((g=o[0])==null?void 0:g.previous)?t?t.p(o,f):(t=ht(o),t.c(),t.m(e,l)):t&&(t.d(1),t=null),(_=o[0])!=null&&_.next?a?a.p(o,f):(a=pt(o),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i:E,o:E,d(o){o&&p(e),t&&t.d(),a&&a.d()}}}function gl(n,e,l){let t,a;z(n,ge,s=>l(1,t=s)),z(n,Ae,s=>l(2,a=s));let r;return n.$$.update=()=>{n.$$.dirty&6&&l(0,r=t!=null&&t.exercices?a:t||null)},[r,t,a]}class dl extends ce{constructor(e){super(),ue(this,e,gl,ml,ae,{})}}const{document:Be}=Ht;function _t(n){let e,l,t,a,r,s,i,o;const f=n[9].default,c=Ot(f,n,n[14],null);return{c(){e=N("article"),c&&c.c(),l=I(),t=N("div"),this.h()},l(g){e=M(g,"ARTICLE",{class:!0});var _=y(e);c&&c.l(_),l=R(_),t=M(_,"DIV",{class:!0}),y(t).forEach(p),_.forEach(p),this.h()},h(){u(t,"class","grain cpeum-71b31k"),u(e,"class","cpeum-71b31k")},m(g,_){L(g,e,_),c&&c.m(e,null),k(e,l),k(e,t),s=!0,i||(o=ke(e,"outroend",n[7]),i=!0)},p(g,_){n=g,c&&c.p&&(!s||_&16384)&&At(c,f,n,n[14],s?Rt(f,n[14],_,null):It(n[14]),null)},i(g){s||($(c,g),ee(()=>{r&&r.end(1),a=re(e,$e,{y:40,duration:1550,easing:Ie}),a.start()}),s=!0)},o(g){B(c,g),a&&a.invalidate(),r=vt(e,zt,{duration:350}),s=!1},d(g){g&&p(e),c&&c.d(g),g&&r&&r.end(),i=!1,o()}}}function mt(n){let e,l,t=n[2]&&!n[0]&&_t(n);return{c(){t&&t.c(),e=x()},l(a){t&&t.l(a),e=x()},m(a,r){t&&t.m(a,r),L(a,e,r),l=!0},p(a,r){a[2]&&!a[0]?t?(t.p(a,r),r&5&&$(t,1)):(t=_t(a),t.c(),$(t,1),t.m(e.parentNode,e)):t&&(X(),B(t,1,1,()=>{t=null}),Z())},i(a){l||($(t),l=!0)},o(a){B(t),l=!1},d(a){t&&t.d(a),a&&p(e)}}}function gt(n){let e,l,t,a;return e=new dl({}),t=new _l({}),{c(){Y(e.$$.fragment),l=I(),Y(t.$$.fragment)},l(r){G(e.$$.fragment,r),l=R(r),G(t.$$.fragment,r)},m(r,s){Q(e,r,s),L(r,l,s),Q(t,r,s),a=!0},i(r){a||($(e.$$.fragment,r),$(t.$$.fragment,r),a=!0)},o(r){B(e.$$.fragment,r),B(t.$$.fragment,r),a=!1},d(r){J(e,r),r&&p(l),J(t,r)}}}function dt(n){let e,l;return e=new Jt({}),{c(){Y(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,a){Q(e,t,a),l=!0},i(t){l||($(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function vl(n){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function kl(n){let e,l;return e=new yt({props:{id:"municipal",data:n[17],fillColor:"white",fillOpacity:0,strokeColor:oe.accent3,strokeWidth:2,strokeOpacity:1,strokeDashArray:[1,2],initialVisibility:"visible"}}),{c(){Y(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,a){Q(e,t,a),l=!0},p:E,i(t){l||($(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function bl(n){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function $l(n){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function yl(n){let e,l;return e=new yt({props:{id:"propositions",data:n[17],fillColor:["get",["concat",["get","exercice"],"1"],["literal",oe]],fillColorHover:["get",["concat",["get","exercice"],"2"],["literal",oe]],fillColorHighlight:["get",["concat",["get","exercice"],"2"],["literal",oe]],fillOpacity:0,fillOpacityHover:.8,fillOpacityHighlight:.65,strokeColor:["get",["concat",["get","exercice"],"2"],["literal",oe]],strokeColorHover:["get",["concat",["get","exercice"],"3"],["literal",oe]],strokeColorHighlight:["get",["concat",["get","exercice"],"3"],["literal",oe]],strokeOpacity:.5,strokeOpacityHover:.85,strokeOpacityHighlight:.65,strokeWidth:6,strokeWidthHighlight:8,strokeWidthHover:10,initialVisibility:"visible"}}),e.$on("hover",n[10]),e.$on("leave",n[11]),{c(){Y(e.$$.fragment)},l(t){G(e.$$.fragment,t)},m(t,a){Q(e,t,a),l=!0},p:E,i(t){l||($(e.$$.fragment,t),l=!0)},o(t){B(e.$$.fragment,t),l=!1},d(t){J(e,t)}}}function El(n){return{c:E,l:E,m:E,p:E,i:E,o:E,d:E}}function wl(n){let e,l,t,a={ctx:n,current:null,token:null,hasCatch:!1,pending:bl,then:kl,catch:vl,value:17,blocks:[,,,]};je(n[4],a);let r={ctx:n,current:null,token:null,hasCatch:!1,pending:El,then:yl,catch:$l,value:17,blocks:[,,,]};return je(n[5],r),{c(){a.block.c(),e=I(),l=x(),r.block.c()},l(s){a.block.l(s),e=R(s),l=x(),r.block.l(s)},m(s,i){a.block.m(s,a.anchor=i),a.mount=()=>e.parentNode,a.anchor=e,L(s,e,i),L(s,l,i),r.block.m(s,r.anchor=i),r.mount=()=>l.parentNode,r.anchor=l,t=!0},p(s,i){n=s,qe(a,n,i),qe(r,n,i)},i(s){t||($(a.block),$(r.block),t=!0)},o(s){for(let i=0;i<3;i+=1){const o=a.blocks[i];B(o)}for(let i=0;i<3;i+=1){const o=r.blocks[i];B(o)}t=!1},d(s){a.block.d(s),a.token=null,a=null,s&&p(e),s&&p(l),r.block.d(s),r.token=null,r=null}}}function Nl(n){let e,l,t,a,r,s=n[1],i,o,f,c,g;Be.title=e="Paysage Saint-Constant"+(ge&&n[3]?":"+n[3].title:""),t=new cl({});let _=mt(n),b=n[2]&&gt(),v=(!n[2]||n[0])&&dt();return c=new Dt({props:{$$slots:{default:[wl]},$$scope:{ctx:n}}}),c.$on("load",n[12]),c.$on("error",n[13]),{c(){l=I(),Y(t.$$.fragment),a=I(),r=N("main"),_.c(),i=I(),b&&b.c(),o=I(),v&&v.c(),f=I(),Y(c.$$.fragment),this.h()},l(h){St('[data-svelte="svelte-1tgoswh"]',Be.head).forEach(p),l=R(h),G(t.$$.fragment,h),a=R(h),r=M(h,"MAIN",{class:!0});var w=y(r);_.l(w),i=R(w),b&&b.l(w),w.forEach(p),o=R(h),v&&v.l(h),f=R(h),G(c.$$.fragment,h),this.h()},h(){u(r,"class","cpeum-71b31k")},m(h,A){L(h,l,A),Q(t,h,A),L(h,a,A),L(h,r,A),_.m(r,null),k(r,i),b&&b.m(r,null),L(h,o,A),v&&v.m(h,A),L(h,f,A),Q(c,h,A),g=!0},p(h,[A]){(!g||A&8)&&e!==(e="Paysage Saint-Constant"+(ge&&h[3]?":"+h[3].title:""))&&(Be.title=e),A&2&&ae(s,s=h[1])?(X(),B(_,1,1,E),Z(),_=mt(h),_.c(),$(_,1),_.m(r,i)):_.p(h,A),h[2]?b?A&4&&$(b,1):(b=gt(),b.c(),$(b,1),b.m(r,null)):b&&(X(),B(b,1,1,()=>{b=null}),Z()),!h[2]||h[0]?v?A&5&&$(v,1):(v=dt(),v.c(),$(v,1),v.m(f.parentNode,f)):v&&(X(),B(v,1,1,()=>{v=null}),Z());const w={};A&16384&&(w.$$scope={dirty:A,ctx:h}),c.$set(w)},i(h){g||($(t.$$.fragment,h),$(_),$(b),$(v),$(c.$$.fragment,h),g=!0)},o(h){B(t.$$.fragment,h),B(_),B(b),B(v),B(c.$$.fragment,h),g=!1},d(h){h&&p(l),J(t,h),h&&p(a),h&&p(r),_.d(h),b&&b.d(),h&&p(o),v&&v.d(h),h&&p(f),J(c,h)}}}function zl({url:n}){const e=Le(n.pathname);return{props:{topRoute:"key"+e[0]}}}function Ml(n,e,l){let t,a;z(n,Wt,C=>l(15,t=C)),z(n,ge,C=>l(3,a=C));let{$$slots:r={},$$scope:s}=e,{topRoute:i=null}=e,{topNavigating:o=!0}=e,f=!1,c=!1;const g=We("/data/geo/saint-constant.geojson"),_=We("/data/geo/propositions.geojson");function b(C){ze.set({text:`${C.features[0].properties.type} ${C.features[0].properties.key}: ${C.features[0].properties.title}`,coords:C.features[0].geometry.type.toLowerCase()==="point"?C.features[0].geometry.coordinates:C.lngLat})}function v(){if(t.url.hash){const C=document.getElementById(t.url.hash.replace("#",""));if(C)return document.body.style.scrollBehavior="unset",C.scrollIntoView(),document.body.style.scrollBehavior="smooth"}return document.body.style.scrollBehavior="unset",document.body.scrollTop=0,document.body.style.scrollBehavior="smooth"}Ut(({from:C,to:q})=>{var fe;be.setClass(""),Ft.set(null),jt.set(null),Le(C==null?void 0:C.href)[0]!==((fe=Le(q==null?void 0:q.href))==null?void 0:fe[0])&&l(0,o=!0)}),qt(({from:C,to:q})=>{o&&l(0,o=!1),v()});function h(){l(8,c=!0),o&&l(0,o=!1)}const A=C=>b(C.detail),w=()=>ze.set(null),S=()=>l(2,f=!0),K=()=>l(2,f=!0);return n.$$set=C=>{"topRoute"in C&&l(1,i=C.topRoute),"topNavigating"in C&&l(0,o=C.topNavigating),"$$scope"in C&&l(14,s=C.$$scope)},n.$$.update=()=>{n.$$.dirty&260&&f&&c&&setTimeout(()=>v(),1e3)},[o,i,f,a,g,_,b,h,c,r,A,w,S,K,s]}class Yl extends ce{constructor(e){super(),ue(this,e,Ml,Nl,ae,{topRoute:1,topNavigating:0})}}export{Yl as default,zl as load};
