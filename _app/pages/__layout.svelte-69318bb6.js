import{S as H,i as Q,s as J,e as M,k as A,F as L,c as N,a as k,m as I,G as S,d as g,b as c,H as B,g as T,I as y,J as Te,q as E,K as O,L as R,M as oe,N as ie,O as K,P as j,Q as P,R as we,T as ce,U as Le,w as W,x as X,y as Y,t as G,h as z,f as Se,l as V,V as fe,z as Ae,W as Ie,n as q,p as D,o as w,X as Z,j as te,B as x,v as ue,C as Fe,Y as Be,Z as Oe,_ as Re,$ as Ue,a0 as je}from"../chunks/vendor-14fed204.js";import{i as le}from"../chunks/map-ef33ca88.js";import{e as Pe,r as ee}from"../chunks/routes-2652564b.js";import{g as he}from"../chunks/path-3c87e442.js";import{m as Ve}from"../chunks/scroll-c052606b.js";import{L as qe}from"../chunks/Link-dbf09e83.js";import"../chunks/paths-4b3c6e7e.js";function De(r){let e,l,t,s;return{c(){e=L("line"),t=L("line"),this.h()},l(n){e=S(n,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),k(e).forEach(g),t=S(n,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"vector-effect":!0}),k(t).forEach(g),this.h()},h(){c(e,"x1","30"),c(e,"y1","30"),c(e,"x2","70"),c(e,"y2","70"),c(e,"vector-effect","non-scaling-stroke"),c(t,"x1","30"),c(t,"y1","70"),c(t,"x2","70"),c(t,"y2","30"),c(t,"vector-effect","non-scaling-stroke")},m(n,a){T(n,e,a),T(n,t,a)},i(n){l||O(()=>{l=R(e,P,{}),l.start()}),s||O(()=>{s=R(t,P,{delay:150}),s.start()})},o:K,d(n){n&&g(e),n&&g(t)}}}function Ge(r){let e,l,t,s;return{c(){e=L("path"),t=L("circle"),this.h()},l(n){e=S(n,"path",{d:!0,"vector-effect":!0}),k(e).forEach(g),t=S(n,"circle",{cx:!0,cy:!0,r:!0,"vector-effect":!0}),k(t).forEach(g),this.h()},h(){c(e,"d",`M46,88.3L25.8,50.5c-5.7-10.7-3.8-23.9,4.8-32.4l0,0c10.7-10.7,28.2-10.7,38.9,0l0,0
			c8.6,8.6,10.5,21.7,4.8,32.4L54.1,88.3C52.4,91.5,47.7,91.5,46,88.3z`),c(e,"vector-effect","non-scaling-stroke"),c(t,"cx","50.5"),c(t,"cy","37.4"),c(t,"r","11.1"),c(t,"vector-effect","non-scaling-stroke")},m(n,a){T(n,e,a),T(n,t,a)},i(n){l||O(()=>{l=R(e,P,{}),l.start()}),s||O(()=>{s=R(t,P,{delay:150}),s.start()})},o:K,d(n){n&&g(e),n&&g(t)}}}function ze(r){let e,l,t,s,n,a,o;function i(f,h){return f[0]?De:Ge}let v=i(r),b=v(r);return{c(){e=M("label"),l=M("input"),s=A(),n=L("svg"),b.c(),this.h()},l(f){e=N(f,"LABEL",{id:!0,for:!0,class:!0});var h=k(e);l=N(h,"INPUT",{id:!0,type:!0,class:!0}),s=I(h),n=S(h,"svg",{version:!0,viewBox:!0,"shape-rendering":!0,class:!0});var u=k(n);b.l(u),u.forEach(g),h.forEach(g),this.h()},h(){c(l,"id","map-toggle-input"),c(l,"type","checkbox"),c(l,"class","svelte-g0h48p"),c(n,"version","1.1"),c(n,"viewBox","0 0 100 100"),c(n,"shape-rendering","geometricPrecision"),c(n,"class","svelte-g0h48p"),c(e,"id","map-toggle"),c(e,"for","map-toggle-input"),c(e,"class","svelte-g0h48p"),B(e,"active",r[0])},m(f,h){T(f,e,h),y(e,l),l.checked=r[0],y(e,s),y(e,n),b.m(n,null),a||(o=Te(l,"change",r[1]),a=!0)},p(f,[h]){r=f,h&1&&(l.checked=r[0]),v!==(v=i(r))&&(b.d(1),b=v(r),b&&(b.c(),E(b,1),b.m(n,null))),h&1&&B(e,"active",r[0])},i(f){t||O(()=>{t=R(l,ie,{x:-40,easing:oe,duration:500,delay:1500}),t.start()}),E(b)},o:K,d(f){f&&g(e),b.d(),a=!1,o()}}}function He(r,e,l){let t;j(r,le,n=>l(0,t=n));function s(){t=this.checked,le.set(t)}return[t,s]}class Qe extends H{constructor(e){super();Q(this,e,He,ze,J,{})}}const _e=()=>{const r=we("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session}},Je={subscribe(r){return _e().page.subscribe(r)}},Ke={subscribe(r){return _e().navigating.subscribe(r)}},We=ce(Je,r=>Le(ee).find(e=>he(e.path)[0]===he(r.url.pathname)[0]));ce(ee,r=>Pe.find(e=>e.path===r.find(l=>l.exercices).path));function pe(r,e,l){const t=r.slice();return t[4]=e[l],t[6]=l,t}function ve(r,e,l){const t=r.slice();return t[7]=e[l],t[6]=l,t}function ge(r){let e,l,t,s,n,a,o,i=r[2],v=[];for(let f=0;f<i.length;f+=1)v[f]=be(pe(r,i,f));const b=f=>w(v[f],1,1,()=>{v[f]=null});return n=new Qe({}),{c(){e=M("header"),l=M("div"),t=M("nav");for(let f=0;f<v.length;f+=1)v[f].c();s=A(),W(n.$$.fragment),this.h()},l(f){e=N(f,"HEADER",{class:!0});var h=k(e);l=N(h,"DIV",{class:!0});var u=k(l);t=N(u,"NAV",{class:!0});var $=k(t);for(let _=0;_<v.length;_+=1)v[_].l($);$.forEach(g),s=I(u),X(n.$$.fragment,u),u.forEach(g),h.forEach(g),this.h()},h(){c(t,"class","svelte-1clhnin"),B(t,"hidden",r[1].direction=="down"&&r[1].y>ye),c(l,"class","svelte-1clhnin"),c(e,"class","svelte-1clhnin")},m(f,h){T(f,e,h),y(e,l),y(l,t);for(let u=0;u<v.length;u+=1)v[u].m(t,null);y(l,s),Y(n,l,null),o=!0},p(f,h){if(r=f,h&12){i=r[2];let u;for(u=0;u<i.length;u+=1){const $=pe(r,i,u);v[u]?(v[u].p($,h),E(v[u],1)):(v[u]=be($),v[u].c(),E(v[u],1),v[u].m(t,null))}for(q(),u=i.length;u<v.length;u+=1)b(u);D()}h&2&&B(t,"hidden",r[1].direction=="down"&&r[1].y>ye)},i(f){if(!o){for(let h=0;h<i.length;h+=1)E(v[h]);E(n.$$.fragment,f),a||O(()=>{a=R(e,ie,{opacity:0,y:-20,duration:800,easing:oe,delay:1e3}),a.start()}),o=!0}},o(f){v=v.filter(Boolean);for(let h=0;h<v.length;h+=1)w(v[h]);w(n.$$.fragment,f),o=!1},d(f){f&&g(e),Z(v,f),x(n)}}}function de(r){let e,l,t=$e(),s=[];for(let a=0;a<t.length;a+=1)s[a]=me(ve(r,t,a));const n=a=>w(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=V()},l(a){for(let o=0;o<s.length;o+=1)s[o].l(a);e=V()},m(a,o){for(let i=0;i<s.length;i+=1)s[i].m(a,o);T(a,e,o),l=!0},p(a,o){if(o&0){t=$e();let i;for(i=0;i<t.length;i+=1){const v=ve(a,t,i);s[i]?(s[i].p(v,o),E(s[i],1)):(s[i]=me(v),s[i].c(),E(s[i],1),s[i].m(e.parentNode,e))}for(q(),i=t.length;i<s.length;i+=1)n(i);D()}},i(a){if(!l){for(let o=0;o<t.length;o+=1)E(s[o]);l=!0}},o(a){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)w(s[o]);l=!1},d(a){Z(s,a),a&&g(e)}}}function me(r){let e,l,t,s,n=[r[7],{"vector-effect":"non-scaling-stroke"}],a={};for(let o=0;o<n.length;o+=1)a=Fe(a,n[o]);return{c(){e=L("line"),this.h()},l(o){e=S(o,"line",{"vector-effect":!0}),k(e).forEach(g),this.h()},h(){fe(e,a),B(e,"svelte-1clhnin",!0)},m(o,i){T(o,e,i),s=!0},p(o,i){fe(e,a=Ae(n,[o[7],{"vector-effect":"non-scaling-stroke"}])),B(e,"svelte-1clhnin",!0)},i(o){s||(O(()=>{t&&t.end(1),l=R(e,P,{duration:200,delay:r[6]*20}),l.start()}),s=!0)},o(o){l&&l.invalidate(),t=Ie(e,P,{duration:350,delay:r[6]*20}),s=!1},d(o){o&&g(e),o&&t&&t.end()}}}function be(r){let e,l,t,s,n=r[4].title+"",a,o,i,v=r[4].title+"",b,f,h,u=`${r[6]*60}ms`,$,_=r[4]===r[3]&&de(r);return{c(){e=M("a"),l=L("svg"),_&&_.c(),t=A(),s=M("span"),a=G(n),o=A(),i=M("span"),b=G(v),f=A(),this.h()},l(d){e=N(d,"A",{href:!0,"sveltekit:prefetch":!0,class:!0});var p=k(e);l=S(p,"svg",{class:!0});var C=k(l);_&&_.l(C),C.forEach(g),t=I(p),s=N(p,"SPAN",{class:!0});var m=k(s);a=z(m,n),m.forEach(g),o=I(p),i=N(p,"SPAN",{class:!0});var F=k(i);b=z(F,v),F.forEach(g),f=I(p),p.forEach(g),this.h()},h(){c(l,"class","svelte-1clhnin"),c(s,"class","text svelte-1clhnin"),c(i,"class","hover-text svelte-1clhnin"),c(e,"href",h=r[4].path),c(e,"sveltekit:prefetch",""),c(e,"class","svelte-1clhnin"),B(e,"current",r[4]==r[3]),Se(e,"--delay",u,!1)},m(d,p){T(d,e,p),y(e,l),_&&_.m(l,null),y(e,t),y(e,s),y(s,a),y(e,o),y(e,i),y(i,b),y(e,f),$=!0},p(d,p){d[4]===d[3]?_?(_.p(d,p),p&12&&E(_,1)):(_=de(d),_.c(),E(_,1),_.m(l,null)):_&&(q(),w(_,1,1,()=>{_=null}),D()),(!$||p&4)&&n!==(n=d[4].title+"")&&te(a,n),(!$||p&4)&&v!==(v=d[4].title+"")&&te(b,v),(!$||p&4&&h!==(h=d[4].path))&&c(e,"href",h),p&12&&B(e,"current",d[4]==d[3])},i(d){$||(E(_),$=!0)},o(d){w(_),$=!1},d(d){d&&g(e),_&&_.d()}}}function Xe(r){let e,l,t=r[0]&&ge(r);return{c(){t&&t.c(),e=V()},l(s){t&&t.l(s),e=V()},m(s,n){t&&t.m(s,n),T(s,e,n),l=!0},p(s,[n]){s[0]?t?(t.p(s,n),n&1&&E(t,1)):(t=ge(s),t.c(),E(t,1),t.m(e.parentNode,e)):t&&(q(),w(t,1,1,()=>{t=null}),D())},i(s){l||(E(t),l=!0)},o(s){w(t),l=!1},d(s){t&&t.d(s),s&&g(e)}}}const ye=120;function $e(){const r=Math.round(8+Math.random()*4),e=10,l=0;return[...Array(r)].map(t=>({x1:l+Math.random()*(100-2*l)+"%",y1:e+Math.random()*(100-2*e)+"%",x2:l+Math.random()*(100-2*l)+"%",y2:e+Math.random()*(100-2*e)+"%",stroke:`hsl(${20+Math.random()*180}, 50%, 65%)`}))}function Ye(r,e,l){let t,s,n;j(r,Ve,o=>l(1,t=o)),j(r,ee,o=>l(2,s=o)),j(r,We,o=>l(3,n=o));let a=!1;return ue(()=>{l(0,a=!0)}),[a,t,s,n]}class Ze extends H{constructor(e){super();Q(this,e,Ye,Xe,J,{})}}function ke(r,e,l){const t=r.slice();return t[2]=e[l],t}function Ee(r,e,l){const t=r.slice();return t[5]=e[l],t}function xe(r){let e=r[5].title+"",l;return{c(){l=G(e)},l(t){l=z(t,e)},m(t,s){T(t,l,s)},p:K,d(t){t&&g(l)}}}function Ce(r){let e,l,t;return l=new qe({props:{href:r[5].href,$$slots:{default:[xe]},$$scope:{ctx:r}}}),{c(){e=M("li"),W(l.$$.fragment),this.h()},l(s){e=N(s,"LI",{class:!0});var n=k(e);X(l.$$.fragment,n),n.forEach(g),this.h()},h(){c(e,"class","svelte-o49755")},m(s,n){T(s,e,n),Y(l,e,null),t=!0},p(s,n){const a={};n&256&&(a.$$scope={dirty:n,ctx:s}),l.$set(a)},i(s){t||(E(l.$$.fragment,s),t=!0)},o(s){w(l.$$.fragment,s),t=!1},d(s){s&&g(e),x(l)}}}function Me(r){let e,l,t=r[2].title+"",s,n,a;return{c(){e=M("li"),l=M("a"),s=G(t),a=A(),this.h()},l(o){e=N(o,"LI",{class:!0});var i=k(e);l=N(i,"A",{href:!0});var v=k(l);s=z(v,t),v.forEach(g),a=I(i),i.forEach(g),this.h()},h(){c(l,"href",n=r[2].path),c(e,"class","svelte-o49755")},m(o,i){T(o,e,i),y(e,l),y(l,s),y(e,a)},p(o,i){i&1&&t!==(t=o[2].title+"")&&te(s,t),i&1&&n!==(n=o[2].path)&&c(l,"href",n)},d(o){o&&g(e)}}}function et(r){let e,l,t,s,n,a,o,i,v,b,f,h=r[1],u=[];for(let p=0;p<h.length;p+=1)u[p]=Ce(Ee(r,h,p));const $=p=>w(u[p],1,1,()=>{u[p]=null});let _=r[0],d=[];for(let p=0;p<_.length;p+=1)d[p]=Me(ke(r,_,p));return{c(){e=M("footer"),l=M("div"),t=M("section"),s=M("ul");for(let p=0;p<u.length;p+=1)u[p].c();n=A(),a=M("section"),o=M("ul");for(let p=0;p<d.length;p+=1)d[p].c();i=A(),v=M("section"),b=G("Copyright"),this.h()},l(p){e=N(p,"FOOTER",{class:!0});var C=k(e);l=N(C,"DIV",{class:!0});var m=k(l);t=N(m,"SECTION",{class:!0});var F=k(t);s=N(F,"UL",{class:!0});var se=k(s);for(let U=0;U<u.length;U+=1)u[U].l(se);se.forEach(g),F.forEach(g),n=I(m),a=N(m,"SECTION",{class:!0});var re=k(a);o=N(re,"UL",{class:!0});var ne=k(o);for(let U=0;U<d.length;U+=1)d[U].l(ne);ne.forEach(g),re.forEach(g),i=I(m),v=N(m,"SECTION",{class:!0});var ae=k(v);b=z(ae,"Copyright"),ae.forEach(g),m.forEach(g),C.forEach(g),this.h()},h(){c(s,"class","svelte-o49755"),c(t,"class","svelte-o49755"),c(o,"class","svelte-o49755"),c(a,"class","svelte-o49755"),c(v,"class","svelte-o49755"),c(l,"class","svelte-o49755"),c(e,"class","svelte-o49755")},m(p,C){T(p,e,C),y(e,l),y(l,t),y(t,s);for(let m=0;m<u.length;m+=1)u[m].m(s,null);y(l,n),y(l,a),y(a,o);for(let m=0;m<d.length;m+=1)d[m].m(o,null);y(l,i),y(l,v),y(v,b),f=!0},p(p,[C]){if(C&2){h=p[1];let m;for(m=0;m<h.length;m+=1){const F=Ee(p,h,m);u[m]?(u[m].p(F,C),E(u[m],1)):(u[m]=Ce(F),u[m].c(),E(u[m],1),u[m].m(s,null))}for(q(),m=h.length;m<u.length;m+=1)$(m);D()}if(C&1){_=p[0];let m;for(m=0;m<_.length;m+=1){const F=ke(p,_,m);d[m]?d[m].p(F,C):(d[m]=Me(F),d[m].c(),d[m].m(o,null))}for(;m<d.length;m+=1)d[m].d(1);d.length=_.length}},i(p){if(!f){for(let C=0;C<h.length;C+=1)E(u[C]);f=!0}},o(p){u=u.filter(Boolean);for(let C=0;C<u.length;C+=1)w(u[C]);f=!1},d(p){p&&g(e),Z(u,p),Z(d,p)}}}function tt(r,e,l){let t;return j(r,ee,n=>l(0,t=n)),[t,[{title:"Chaire en paysage et environnement de l\u2019Universit\xE9 de Montr\xE9al (CPEUM)",href:"https://paysage.umontreal.ca"},{title:"Chaire UNESCO en paysage urbain (CUPUM)",href:"https://unesco-paysage.umontreal.ca"},{title:"Ville de Saint-Constant",href:"https://saint-constant.ca"},{title:"MRC de Roussillon",href:"https://roussillon.ca"},{title:"Minist\xE8re de l\u2019\xC9conomie et de l\u2019Innovation du Qu\xE9bec",href:"https://www.economie.gouv.qc.ca/accueil/"}]]}class lt extends H{constructor(e){super();Q(this,e,tt,et,J,{})}}function Ne(r){let e,l,t,s,n,a,o,i;const v=r[4].default,b=Ue(v,r,r[3],null);return a=new lt({}),{c(){e=M("main"),l=M("div"),t=A(),s=M("article"),b&&b.c(),n=A(),W(a.$$.fragment),this.h()},l(f){e=N(f,"MAIN",{class:!0});var h=k(e);l=N(h,"DIV",{class:!0}),k(l).forEach(g),t=I(h),s=N(h,"ARTICLE",{class:!0});var u=k(s);b&&b.l(u),u.forEach(g),n=I(h),X(a.$$.fragment,h),h.forEach(g),this.h()},h(){c(l,"class","grain svelte-11ppn89"),c(s,"class","svelte-11ppn89"),c(e,"class","svelte-11ppn89"),B(e,"is-map-full",r[2])},m(f,h){T(f,e,h),y(e,l),y(e,t),y(e,s),b&&b.m(s,null),y(e,n),Y(a,e,null),i=!0},p(f,h){b&&b.p&&(!i||h&8)&&Be(b,v,f,f[3],i?Re(v,f[3],h,null):Oe(f[3]),null),h&4&&B(e,"is-map-full",f[2])},i(f){i||(E(b,f),E(a.$$.fragment,f),o||O(()=>{o=R(e,je,{}),o.start()}),i=!0)},o(f){w(b,f),w(a.$$.fragment,f),i=!1},d(f){f&&g(e),b&&b.d(f),x(a)}}}function st(r){let e,l,t,s,n,a,o,i,v,b,f,h,u;b=new Ze({});let $=r[0]&&!r[1]&&Ne(r);return{c(){e=L("svg"),l=L("filter"),t=L("feTurbulence"),s=L("feColorMatrix"),n=L("feComponentTransfer"),a=L("feFuncA"),o=L("feComposite"),i=L("feBlend"),v=A(),W(b.$$.fragment),f=A(),$&&$.c(),h=V(),this.h()},l(_){e=S(_,"svg",{width:!0,height:!0,class:!0});var d=k(e);l=S(d,"filter",{id:!0,height:!0,width:!0});var p=k(l);t=S(p,"feTurbulence",{type:!0,baseFrequency:!0,numOctaves:!0,stitchTiles:!0}),k(t).forEach(g),s=S(p,"feColorMatrix",{type:!0,values:!0}),k(s).forEach(g),n=S(p,"feComponentTransfer",{});var C=k(n);a=S(C,"feFuncA",{type:!0,slope:!0}),k(a).forEach(g),C.forEach(g),o=S(p,"feComposite",{operator:!0,in2:!0,result:!0}),k(o).forEach(g),i=S(p,"feBlend",{in:!0,in2:!0,mode:!0}),k(i).forEach(g),p.forEach(g),d.forEach(g),v=I(_),X(b.$$.fragment,_),f=I(_),$&&$.l(_),h=V(),this.h()},h(){c(t,"type","fractalNoise"),c(t,"baseFrequency","5.5"),c(t,"numOctaves","3"),c(t,"stitchTiles","stitch"),c(s,"type","saturate"),c(s,"values",".3"),c(a,"type","linear"),c(a,"slope",".4"),c(o,"operator","in"),c(o,"in2","SourceGraphic"),c(o,"result","masked"),c(i,"in","SourceGraphic"),c(i,"in2","masked"),c(i,"mode","overlay"),c(l,"id","grain"),c(l,"height","100%"),c(l,"width","100%"),c(e,"width","0"),c(e,"height","0"),c(e,"class","svelte-11ppn89")},m(_,d){T(_,e,d),y(e,l),y(l,t),y(l,s),y(l,n),y(n,a),y(l,o),y(l,i),T(_,v,d),Y(b,_,d),T(_,f,d),$&&$.m(_,d),T(_,h,d),u=!0},p(_,[d]){_[0]&&!_[1]?$?($.p(_,d),d&3&&E($,1)):($=Ne(_),$.c(),E($,1),$.m(h.parentNode,h)):$&&(q(),w($,1,1,()=>{$=null}),D())},i(_){u||(E(b.$$.fragment,_),E($),u=!0)},o(_){w(b.$$.fragment,_),w($),u=!1},d(_){_&&g(e),_&&g(v),x(b,_),_&&g(f),$&&$.d(_),_&&g(h)}}}function rt(r,e,l){let t,s;j(r,Ke,i=>l(1,t=i)),j(r,le,i=>l(2,s=i));let{$$slots:n={},$$scope:a}=e,o=!1;return ue(()=>{l(0,o=!0)}),r.$$set=i=>{"$$scope"in i&&l(3,a=i.$$scope)},[o,t,s,a,n]}class ht extends H{constructor(e){super();Q(this,e,rt,st,J,{})}}export{ht as default};
