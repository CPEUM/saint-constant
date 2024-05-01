import{S as Ge,i as Ye,s as Ze,l as S,a as D,m as L,n as C,c as O,h as r,p as c,b as E,O as o,W as ee,R as Fe,F as ye,N as Be,H as be,r as g,u as h,K as Ce,q as X,I as xe,P as ue,Q as pe,o as ut,x as I,y as q,z as U,f as x,t as H,C as B}from"../chunks/index-246e4404.js";import{L as oe}from"../chunks/Link-8bae95a6.js";import{e as de}from"../chunks/routes-8f75ae92.js";import{i as it}from"../chunks/intersect-af4d5670.js";import{m as We,a as Je,c as pt}from"../chunks/Map-928639cc.js";import{g as ot,a as Ae}from"../chunks/themeColors-35fcc233.js";import{a as ce,r as et}from"../chunks/revealText-e21e8cbe.js";import{b as dt}from"../chunks/map-9509ad70.js";import{g as ct}from"../chunks/generateSvgPaths-99180b66.js";import{L as ft}from"../chunks/Logos-4fc48c4c.js";import{L as mt,a as He}from"../chunks/ListItem-877cccc5.js";import"../chunks/paths-396f020f.js";import"../chunks/index-2b88267d.js";import"../chunks/index-7f5d761f.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/logos-5fb0526b.js";function tt(l,e,t){const s=l.slice();return s[4]=e[t],s[6]=t,s}function st(l,e,t){const s=l.slice();return s[4]=e[t],s[6]=t,s}function at(l){let e,t,s,f=l[6]+1+"",v,w=`${-6+Math.random()*12}deg`,n,i;function _(){return l[3](l[4],l[6])}return{c(){e=S("div"),t=S("span"),s=g("0"),v=g(f),this.h()},l(d){e=L(d,"DIV",{class:!0,style:!0});var p=C(e);t=L(p,"SPAN",{class:!0});var y=C(t);s=h(y,"0"),v=h(y,f),y.forEach(r),p.forEach(r),this.h()},h(){c(t,"class","number cpeum-fyt9ye"),Ce(t,"right",l[6]%2!==0),c(e,"class","triggers cpeum-fyt9ye"),c(e,"style",ot(l[4].key)),Ce(e,"right",l[6]%2!==0),X(e,"--angle",w)},m(d,p){E(d,e,p),o(e,t),o(t,s),o(t,v),n||(i=[ee(it.call(null,e,{rootMargin:ht})),Fe(e,"enter",_)],n=!0)},p(d,p){l=d},d(d){d&&r(e),n=!1,be(i)}}}function lt(l){let e,t,s,f=l[6]+1+"",v,w,n,i,_=l[4].heading+"",d,p,y,u,j=l[4].description+"",$,G,T,F;return{c(){e=S("a"),t=S("p"),s=g("Exercice 0"),v=g(f),n=D(),i=S("p"),d=g(_),y=D(),u=S("p"),G=D(),this.h()},l(A){e=L(A,"A",{href:!0,"sveltekit:prefetch":!0,style:!0,class:!0});var R=C(e);t=L(R,"P",{class:!0});var b=C(t);s=h(b,"Exercice 0"),v=h(b,f),b.forEach(r),n=O(R),i=L(R,"P",{class:!0});var k=C(i);d=h(k,_),k.forEach(r),y=O(R),u=L(R,"P",{class:!0});var M=C(u);M.forEach(r),G=O(R),R.forEach(r),this.h()},h(){c(t,"class","label cpeum-fyt9ye"),c(i,"class","title cpeum-fyt9ye"),c(u,"class","desc cpeum-fyt9ye"),c(e,"href",l[4].path),c(e,"sveltekit:prefetch",""),c(e,"style",ot(l[4].key)),c(e,"class","cpeum-fyt9ye"),Ce(e,"right",l[6]%2!==0),Ce(e,"disabled",l[6]!==l[0]),X(e,"--angle",Math.random()*90+"deg"),X(e,"--size",Math.random()*200+500+"px")},m(A,R){E(A,e,R),o(e,t),o(t,s),o(t,v),o(e,n),o(e,i),o(i,d),o(e,y),o(e,u),u.innerHTML=j,o(e,G),T||(F=[ee(w=ce.call(null,t,{visible:l[6]===l[0],duration:850,staggerDelay:175,mask:!0,maskPadding:0,y:"1em",granularity:"word"})),ee(p=ce.call(null,i,{visible:l[6]===l[0],duration:650,staggerDelay:55,mask:!0,maskPadding:".1em",y:"1em",granularity:"word"})),ee($=ce.call(null,u,{visible:l[6]===l[0],duration:350,staggerDelay:35,rotateX:-80,granularity:"word"}))],T=!0)},p(A,R){l=A,w&&xe(w.update)&&R&1&&w.update.call(null,{visible:l[6]===l[0],duration:850,staggerDelay:175,mask:!0,maskPadding:0,y:"1em",granularity:"word"}),p&&xe(p.update)&&R&1&&p.update.call(null,{visible:l[6]===l[0],duration:650,staggerDelay:55,mask:!0,maskPadding:".1em",y:"1em",granularity:"word"}),$&&xe($.update)&&R&1&&$.update.call(null,{visible:l[6]===l[0],duration:350,staggerDelay:35,rotateX:-80,granularity:"word"}),R&1&&Ce(e,"disabled",l[6]!==l[0])},d(A){A&&r(e),T=!1,be(F)}}}function gt(l){let e,t,s,f,v,w,n=de,i=[];for(let p=0;p<n.length;p+=1)i[p]=at(st(l,n,p));let _=de,d=[];for(let p=0;p<_.length;p+=1)d[p]=lt(tt(l,_,p));return{c(){e=S("section");for(let p=0;p<i.length;p+=1)i[p].c();t=D(),s=S("div"),f=S("div");for(let p=0;p<d.length;p+=1)d[p].c();this.h()},l(p){e=L(p,"SECTION",{class:!0});var y=C(e);for(let $=0;$<i.length;$+=1)i[$].l(y);t=O(y),s=L(y,"DIV",{id:!0,class:!0});var u=C(s);f=L(u,"DIV",{id:!0,class:!0});var j=C(f);for(let $=0;$<d.length;$+=1)d[$].l(j);j.forEach(r),u.forEach(r),y.forEach(r),this.h()},h(){c(f,"id","board-content"),c(f,"class","cpeum-fyt9ye"),c(s,"id","board"),c(s,"class","cpeum-fyt9ye"),c(e,"class","cpeum-fyt9ye")},m(p,y){E(p,e,y);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(e,null);o(e,t),o(e,s),o(s,f);for(let u=0;u<d.length;u+=1)d[u]&&d[u].m(f,null);v||(w=[ee(it.call(null,e)),Fe(e,"leave",l[1])],v=!0)},p(p,[y]){if(y&4){n=de;let u;for(u=0;u<n.length;u+=1){const j=st(p,n,u);i[u]?i[u].p(j,y):(i[u]=at(j),i[u].c(),i[u].m(e,t))}for(;u<i.length;u+=1)i[u].d(1);i.length=n.length}if(y&1){_=de;let u;for(u=0;u<_.length;u+=1){const j=tt(p,_,u);d[u]?d[u].p(j,y):(d[u]=lt(j),d[u].c(),d[u].m(f,null))}for(;u<d.length;u+=1)d[u].d(1);d.length=_.length}},i:ye,o:ye,d(p){p&&r(e),Be(i,p),Be(d,p),v=!1,be(w)}}}const ht="-50% 0% -50% 0%";function $t(l,e,t){let s=null;function f(){t(0,s=null),We.setClass(""),Je.set(null)}function v(n,i){t(0,s=i),We.setClass(i%2===0?"medium right":"medium left"),pt.set({bounds:dt[n.key]}),Je.set({exercice:n.key})}return[s,f,v,(n,i)=>v(n,i)]}class vt extends Ge{constructor(e){super(),Ye(this,e,$t,gt,Ze,{})}}const _t=[{width:1372,height:1e3,d:"M78.1733 508.5C27.6733 442 -8.32667 386.5 1.67333 238.5L333 0L522 28L913.173 284.5C942.007 293 1018.97 325.3 1096.17 386.5C1173.37 447.7 1311.67 673.333 1371.17 778.5L1203.17 982C949.072 1077.09 769.075 743.899 424.173 727.5C382.429 281.547 173.327 633.802 78.1733 508.5Z",fill:!0,stroke:!1},{width:1008,height:1327,d:"M387.5 1323C494.5 1246.5 845 1018.5 1008 809.5C986 750.167 931.8 595.8 891 453C850.2 310.2 617.333 185.333 692 100.5L0 0L213 676.5C291 678.167 301.9 1384.2 387.5 1323Z",fill:!0,stroke:!1},{width:2132,height:1489,d:"M22.0306 734.892C17.8123 716.125 7.90054 674.872 2.00003 660C-27.8746 584.701 450.245 294.179 518.949 252.432L519.588 252.043C585.902 211.748 1914.78 -33.0744 1976.88 4.14638C2026.57 33.923 2098.87 185.078 2128.82 256.934L2100.14 748.669C2113.84 905.683 2138.95 1223.42 2129.77 1238.25C2118.3 1256.78 1978.18 1460.84 1936.79 1451.44C1903.69 1443.92 1720.96 1473.24 1633.73 1488.84C1554.56 1455.17 1395.68 1375.87 1393.52 1328.1C1391.35 1280.33 1312 1203.55 1272.6 1171.13C1138.17 1188.42 865.273 1219.88 849.116 1207.35C828.919 1191.7 754.668 1016.75 729.492 988.546C709.352 965.983 707.21 944.133 708.656 936.029L22.0306 734.892Z",fill:!0,stroke:!1},{width:753,height:1466,d:"M16.5001 486C-64.4999 252.5 179 171.5 295.5 8.99994C339.667 8.99994 479.954 -23.3547 509 39.4999C600.5 237.5 321.5 735 565 735C545 779.8 658 1295.17 752.5 1466C644.333 1432.17 419.8 1361.5 387 1349.5C346 1334.5 97.5001 719.5 16.5001 486Z",fill:!0,stroke:!1}];function nt(l,e,t){const s=l.slice();return s[6]=e[t],s}function rt(l){let e;return{c(){e=ue("path"),this.h()},l(t){e=pe(t,"path",{"vector-effect":!0,d:!0,fill:!0,opacity:!0,stroke:!0,"stroke-width":!0,"stroke-linejoin":!0,"stroke-linecap":!0,"stroke-dasharray":!0}),C(e).forEach(r),this.h()},h(){c(e,"vector-effect","non-scaling-stroke"),c(e,"d",l[6].d),c(e,"fill",l[6].fillColor),c(e,"opacity",.9),c(e,"stroke","none"),c(e,"stroke-width","0"),c(e,"stroke-linejoin","round"),c(e,"stroke-linecap","round"),c(e,"stroke-dasharray","20")},m(t,s){E(t,e,s)},p:ye,d(t){t&&r(e)}}}function Ct(l){let e,t,s,f,v,w,n,i,_,d,p,y,u,j,$,G,T=`translateY(${l[0]*.4}px)`,F,A,R=l[1],b=[];for(let k=0;k<R.length;k+=1)b[k]=rt(nt(l,R,k));return{c(){e=D(),t=S("header"),s=ue("svg"),f=ue("path"),v=ue("clipPath"),w=ue("path"),n=ue("g");for(let k=0;k<b.length;k+=1)b[k].c();i=D(),_=S("hgroup"),d=S("h1"),p=g("\u2192LA "),y=S("span"),u=g("CO-CREATION"),j=g(` DES PAYSaGES URBAINS
			`),$=S("span"),G=g("DE LA VILLE DE SaINT-CONSTANT \u2193"),this.h()},l(k){e=O(k),t=L(k,"HEADER",{class:!0});var M=C(t);s=pe(M,"svg",{viewBox:!0,preserveAspectRatio:!0,class:!0});var P=C(s);f=pe(P,"path",{d:!0,fill:!0,opacity:!0}),C(f).forEach(r),v=pe(P,"clipPath",{id:!0});var N=C(v);w=pe(N,"path",{d:!0}),C(w).forEach(r),N.forEach(r),n=pe(P,"g",{"clip-path":!0});var le=C(n);for(let Y=0;Y<b.length;Y+=1)b[Y].l(le);le.forEach(r),P.forEach(r),i=O(M),_=L(M,"HGROUP",{class:!0});var W=C(_);d=L(W,"H1",{class:!0});var z=C(d);p=h(z,"\u2192LA "),y=L(z,"SPAN",{class:!0});var ne=C(y);u=h(ne,"CO-CREATION"),ne.forEach(r),j=h(z,` DES PAYSaGES URBAINS
			`),$=L(z,"SPAN",{class:!0});var te=C($);G=h(te,"DE LA VILLE DE SaINT-CONSTANT \u2193"),te.forEach(r),z.forEach(r),W.forEach(r),M.forEach(r),this.h()},h(){c(f,"d",l[2][0].d),c(f,"fill",l[2][0].fill),c(f,"opacity",.8),c(w,"d",l[2][1].d),c(v,"id","wave-mask"),c(n,"clip-path","url(#wave-mask)"),c(s,"viewBox",l[2][1].viewBox),c(s,"preserveAspectRatio","xMidYMax slice"),c(s,"class","cpeum-1rfbfwe"),c(y,"class","alt"),c($,"class","left cpeum-1rfbfwe"),c(d,"class","cpeum-1rfbfwe"),c(_,"class","cpeum-1rfbfwe"),X(_,"transform",T),c(t,"class","cpeum-1rfbfwe"),X(t,"--accent-color",Ae([1,2],["agroparc","poles","promenades"]))},m(k,M){E(k,e,M),E(k,t,M),o(t,s),o(s,f),o(s,v),o(v,w),o(s,n);for(let P=0;P<b.length;P+=1)b[P]&&b[P].m(n,null);o(t,i),o(t,_),o(_,d),o(d,p),o(d,y),o(y,u),o(d,j),o(d,$),o($,G),F||(A=[Fe(document.body,"scroll",l[3]),ee(ce.call(null,d,{duration:600,staggerDelay:15,transformOrigin:"0% 20%",rotateX:-80}))],F=!0)},p(k,[M]){if(M&2){R=k[1];let P;for(P=0;P<R.length;P+=1){const N=nt(k,R,P);b[P]?b[P].p(N,M):(b[P]=rt(N),b[P].c(),b[P].m(n,null))}for(;P<b.length;P+=1)b[P].d(1);b.length=R.length}M&1&&T!==(T=`translateY(${k[0]*.4}px)`)&&X(_,"transform",T)},i:ye,o:ye,d(k){k&&r(e),k&&r(t),Be(b,k),F=!1,be(A)}}}function yt(l,e,t){const s=_t.slice(0,3).map(i=>Object.assign(Object.assign({},i),{fillColor:Ae([2,3],de.map(_=>_.key)),strokeColor:Ae([2,3])})),f={width:1e3,height:1500},v=ct(2,{viewBox:f,padding:900}).map(i=>({viewBox:`0 0 ${f.width} ${f.height}`,d:i,fill:Ae([2,3],de.map(_=>_.key))}));ut(()=>{setTimeout(()=>{},0)});let w=0;function n(i){t(0,w=i.target.scrollTop)}return[w,s,v,n]}class bt extends Ge{constructor(e){super(),Ye(this,e,yt,Ct,Ze,{})}}function Et(l){let e;return{c(){e=g("Ville de Saint-Constant")},l(t){e=h(t,"Ville de Saint-Constant")},m(t,s){E(t,e,s)},d(t){t&&r(e)}}}function kt(l){let e;return{c(){e=g("minist\xE8re de l\u2019\xC9conomie et de l\u2019Innovation du Qu\xE9bec")},l(t){e=h(t,"minist\xE8re de l\u2019\xC9conomie et de l\u2019Innovation du Qu\xE9bec")},m(t,s){E(t,e,s)},d(t){t&&r(e)}}}function wt(l){let e;return{c(){e=g("Ville de Saint-Constant")},l(t){e=h(t,"Ville de Saint-Constant")},m(t,s){E(t,e,s)},d(t){t&&r(e)}}}function St(l){let e;return{c(){e=g("MRC de Roussillon")},l(t){e=h(t,"MRC de Roussillon")},m(t,s){E(t,e,s)},d(t){t&&r(e)}}}function Lt(l){let e;return{c(){e=g("Chaire en paysage et environnement de l\u2019Universit\xE9 de Montr\xE9al (CPEUM)")},l(t){e=h(t,"Chaire en paysage et environnement de l\u2019Universit\xE9 de Montr\xE9al (CPEUM)")},m(t,s){E(t,e,s)},d(t){t&&r(e)}}}function Pt(l){let e;return{c(){e=g("Chaire UNESCO en paysage urbain (CUPUM)")},l(t){e=h(t,"Chaire UNESCO en paysage urbain (CUPUM)")},m(t,s){E(t,e,s)},d(t){t&&r(e)}}}function Rt(l){let e;return{c(){e=g(`Co-construire des outils de connaissance, d\u2019intervention et de gestion des paysages et des
		cadres de vie de la Ville de Saint-Constant;`)},l(t){e=h(t,`Co-construire des outils de connaissance, d\u2019intervention et de gestion des paysages et des
		cadres de vie de la Ville de Saint-Constant;`)},m(t,s){E(t,e,s)},d(t){t&&r(e)}}}function Mt(l){let e;return{c(){e=g(`Co-r\xE9aliser un mod\xE8le strat\xE9gique innovant de mise en valeur et de d\xE9veloppement des
		paysages urbains;`)},l(t){e=h(t,`Co-r\xE9aliser un mod\xE8le strat\xE9gique innovant de mise en valeur et de d\xE9veloppement des
		paysages urbains;`)},m(t,s){E(t,e,s)},d(t){t&&r(e)}}}function At(l){let e;return{c(){e=g(`Assurer un dialogue inclusif entre les milieux preneurs (Ville de Saint-Constant, MRC de
		Roussillon) et le public interpell\xE9, ainsi que valoriser et diffuser le processus et les
		r\xE9sultats de la d\xE9marche.`)},l(t){e=h(t,`Assurer un dialogue inclusif entre les milieux preneurs (Ville de Saint-Constant, MRC de
		Roussillon) et le public interpell\xE9, ainsi que valoriser et diffuser le processus et les
		r\xE9sultats de la d\xE9marche.`)},m(t,s){E(t,e,s)},d(t){t&&r(e)}}}function jt(l){let e,t,s,f,v,w;return e=new He({props:{$$slots:{default:[Rt]},$$scope:{ctx:l}}}),s=new He({props:{$$slots:{default:[Mt]},$$scope:{ctx:l}}}),v=new He({props:{$$slots:{default:[At]},$$scope:{ctx:l}}}),{c(){I(e.$$.fragment),t=D(),I(s.$$.fragment),f=D(),I(v.$$.fragment)},l(n){q(e.$$.fragment,n),t=O(n),q(s.$$.fragment,n),f=O(n),q(v.$$.fragment,n)},m(n,i){U(e,n,i),E(n,t,i),U(s,n,i),E(n,f,i),U(v,n,i),w=!0},p(n,i){const _={};i&1&&(_.$$scope={dirty:i,ctx:n}),e.$set(_);const d={};i&1&&(d.$$scope={dirty:i,ctx:n}),s.$set(d);const p={};i&1&&(p.$$scope={dirty:i,ctx:n}),v.$set(p)},i(n){w||(x(e.$$.fragment,n),x(s.$$.fragment,n),x(v.$$.fragment,n),w=!0)},o(n){H(e.$$.fragment,n),H(s.$$.fragment,n),H(v.$$.fragment,n),w=!1},d(n){B(e,n),n&&r(t),B(s,n),n&&r(f),B(v,n)}}}function Dt(l){let e,t,s,f,v,w,n,i,_,d,p,y,u,j,$,G,T,F,A,R,b,k,M,P,N,le,W,z,ne,te,Y,Ee,se,re,je,ke,ie,De,we,J,Se,Q,fe,Oe,Te,Le,ae,Pe,Z,Ve,me,Ne,Ie,Re,qe,Qe;return e=new bt({}),_=new oe({props:{rel:"external",href:"https://saint-constant.ca/",$$slots:{default:[Et]},$$scope:{ctx:l}}}),T=new oe({props:{rel:"external",href:"https://www.economie.gouv.qc.ca/accueil/",$$slots:{default:[kt]},$$scope:{ctx:l}}}),A=new oe({props:{rel:"external",href:"https://saint-constant.ca/",$$slots:{default:[wt]},$$scope:{ctx:l}}}),b=new oe({props:{rel:"external",href:"https://roussillon.ca/",$$slots:{default:[St]},$$scope:{ctx:l}}}),M=new oe({props:{rel:"external",href:"https://paysage.umontreal.ca",$$slots:{default:[Lt]},$$scope:{ctx:l}}}),N=new oe({props:{rel:"external",href:"https://unesco-paysage.umontreal.ca",$$slots:{default:[Pt]},$$scope:{ctx:l}}}),Y=new ft({}),J=new mt({props:{class:"left",$$slots:{default:[jt]},$$scope:{ctx:l}}}),ae=new vt({}),{c(){I(e.$$.fragment),t=D(),s=S("div"),f=S("h2"),v=g("Contexte"),w=D(),n=S("p"),i=g("Localis\xE9e sur la Rive-Sud de Montr\xE9al, la "),I(_.$$.fragment),d=g(`
		est en grande transformation en raison de sa croissance d\xE9mographique et de la r\xE9alisation, au
		cours des prochaines ann\xE9es, de plusieurs projets d\u2019infrastructures et de d\xE9veloppement urbain.
		Afin d\u2019alimenter la planification de ces projets, la Ville de Saint-Constant s\u2019interroge sur
		la port\xE9e de ses interventions sur ses paysages, autant du point de vue de ses r\xE9sidents que
		des visiteurs. \xC0 cette fin, la ville d\xE9sire se doter d\u2019outils pour
		`),p=S("strong"),y=g(`am\xE9liorer sa connaissance des enjeux de paysage et pour assurer la coh\xE9rence des
			interventions sur l\u2019ensemble du territoire municipal`),u=g("."),j=D(),$=S("p"),G=g("Dans le cadre d\u2019un appel \xE0 projets en innovation sociale financ\xE9 par le "),I(T.$$.fragment),F=g(" et en appui avec la "),I(A.$$.fragment),R=g(" et la "),I(b.$$.fragment),k=g(`,
		l\u2019expertise de la `),I(M.$$.fragment),P=g(" et de la "),I(N.$$.fragment),le=g(` de la m\xEAme institution a \xE9t\xE9 mise \xE0 profit pour d\xE9velopper de
		`),W=S("strong"),z=g(`nouveaux outils et de nouvelles approches de planification territoriale plus sensibles
			aux valorisations sociales et culturelles des paysages`),ne=g("."),te=D(),I(Y.$$.fragment),Ee=D(),se=S("div"),re=S("h2"),je=g("Objectifs du projet"),ke=D(),ie=S("p"),De=g("Ce projet vise trois principaux objectifs\xA0:"),we=D(),I(J.$$.fragment),Se=D(),Q=S("p"),fe=S("strong"),Oe=g(`Le pr\xE9sent site vise \xE0 exposer les r\xE9sultats de ce travail de co-construction.
		Il\xA0pr\xE9sente ainsi les assises de la vision strat\xE9gique d\u2019am\xE9nagement des paysages de la
		Ville de Saint-Constant.`),Te=g(` Celles-ci se d\xE9clinent selon trois grandes orientations qui reposent sur la lecture des attraits
	du territoire, des pr\xE9occupations et des aspirations entretenues envers les paysages qui ont \xE9t\xE9
	d\xE9gag\xE9s dans le cadre de la phase de diagnostic du projet\xA0:`),Le=D(),I(ae.$$.fragment),Pe=D(),Z=S("p"),Ve=g(`Ces orientations d\xE9coulent des propositions d\u2019am\xE9nagement formul\xE9es au cours de la phase
	d\u2019id\xE9ation. Les propositions d\u2019am\xE9nagement pr\xE9sent\xE9es sont assorties d\u2019une `),me=S("strong"),Ne=g(`charte de principes directeurs susceptibles d\u2019assurer, \xE0 terme, la coh\xE9rence des actions en
		vue de la pr\xE9servation, de la mise en valeur et du d\xE9veloppement des attraits des paysages
		de la Ville de Saint-Constant`),Ie=g("."),this.h()},l(a){q(e.$$.fragment,a),t=O(a),s=L(a,"DIV",{class:!0});var m=C(s);f=L(m,"H2",{});var ge=C(f);v=h(ge,"Contexte"),ge.forEach(r),w=O(m),n=L(m,"P",{});var K=C(n);i=h(K,"Localis\xE9e sur la Rive-Sud de Montr\xE9al, la "),q(_.$$.fragment,K),d=h(K,`
		est en grande transformation en raison de sa croissance d\xE9mographique et de la r\xE9alisation, au
		cours des prochaines ann\xE9es, de plusieurs projets d\u2019infrastructures et de d\xE9veloppement urbain.
		Afin d\u2019alimenter la planification de ces projets, la Ville de Saint-Constant s\u2019interroge sur
		la port\xE9e de ses interventions sur ses paysages, autant du point de vue de ses r\xE9sidents que
		des visiteurs. \xC0 cette fin, la ville d\xE9sire se doter d\u2019outils pour
		`),p=L(K,"STRONG",{});var he=C(p);y=h(he,`am\xE9liorer sa connaissance des enjeux de paysage et pour assurer la coh\xE9rence des
			interventions sur l\u2019ensemble du territoire municipal`),he.forEach(r),u=h(K,"."),K.forEach(r),j=O(m),$=L(m,"P",{});var V=C($);G=h(V,"Dans le cadre d\u2019un appel \xE0 projets en innovation sociale financ\xE9 par le "),q(T.$$.fragment,V),F=h(V," et en appui avec la "),q(A.$$.fragment,V),R=h(V," et la "),q(b.$$.fragment,V),k=h(V,`,
		l\u2019expertise de la `),q(M.$$.fragment,V),P=h(V," et de la "),q(N.$$.fragment,V),le=h(V,` de la m\xEAme institution a \xE9t\xE9 mise \xE0 profit pour d\xE9velopper de
		`),W=L(V,"STRONG",{});var $e=C(W);z=h($e,`nouveaux outils et de nouvelles approches de planification territoriale plus sensibles
			aux valorisations sociales et culturelles des paysages`),$e.forEach(r),ne=h(V,"."),V.forEach(r),m.forEach(r),te=O(a),q(Y.$$.fragment,a),Ee=O(a),se=L(a,"DIV",{class:!0});var ve=C(se);re=L(ve,"H2",{});var _e=C(re);je=h(_e,"Objectifs du projet"),_e.forEach(r),ve.forEach(r),ke=O(a),ie=L(a,"P",{});var Xe=C(ie);De=h(Xe,"Ce projet vise trois principaux objectifs\xA0:"),Xe.forEach(r),we=O(a),q(J.$$.fragment,a),Se=O(a),Q=L(a,"P",{class:!0,style:!0});var Ue=C(Q);fe=L(Ue,"STRONG",{});var ze=C(fe);Oe=h(ze,`Le pr\xE9sent site vise \xE0 exposer les r\xE9sultats de ce travail de co-construction.
		Il\xA0pr\xE9sente ainsi les assises de la vision strat\xE9gique d\u2019am\xE9nagement des paysages de la
		Ville de Saint-Constant.`),ze.forEach(r),Te=h(Ue,` Celles-ci se d\xE9clinent selon trois grandes orientations qui reposent sur la lecture des attraits
	du territoire, des pr\xE9occupations et des aspirations entretenues envers les paysages qui ont \xE9t\xE9
	d\xE9gag\xE9s dans le cadre de la phase de diagnostic du projet\xA0:`),Ue.forEach(r),Le=O(a),q(ae.$$.fragment,a),Pe=O(a),Z=L(a,"P",{class:!0,style:!0});var Me=C(Z);Ve=h(Me,`Ces orientations d\xE9coulent des propositions d\u2019am\xE9nagement formul\xE9es au cours de la phase
	d\u2019id\xE9ation. Les propositions d\u2019am\xE9nagement pr\xE9sent\xE9es sont assorties d\u2019une `),me=L(Me,"STRONG",{});var Ke=C(me);Ne=h(Ke,`charte de principes directeurs susceptibles d\u2019assurer, \xE0 terme, la coh\xE9rence des actions en
		vue de la pr\xE9servation, de la mise en valeur et du d\xE9veloppement des attraits des paysages
		de la Ville de Saint-Constant`),Ke.forEach(r),Ie=h(Me,"."),Me.forEach(r),this.h()},h(){c(s,"class","text-wrap"),c(se,"class","text-wrap"),c(Q,"class","bg"),X(Q,"--bgtop","-1500px"),X(Q,"--bgbottom","-350px"),c(Z,"class","bg"),X(Z,"--bgtop","-4rem"),X(Z,"--bgbottom","-20rem")},m(a,m){U(e,a,m),E(a,t,m),E(a,s,m),o(s,f),o(f,v),o(s,w),o(s,n),o(n,i),U(_,n,null),o(n,d),o(n,p),o(p,y),o(n,u),o(s,j),o(s,$),o($,G),U(T,$,null),o($,F),U(A,$,null),o($,R),U(b,$,null),o($,k),U(M,$,null),o($,P),U(N,$,null),o($,le),o($,W),o(W,z),o($,ne),E(a,te,m),U(Y,a,m),E(a,Ee,m),E(a,se,m),o(se,re),o(re,je),E(a,ke,m),E(a,ie,m),o(ie,De),E(a,we,m),U(J,a,m),E(a,Se,m),E(a,Q,m),o(Q,fe),o(fe,Oe),o(Q,Te),E(a,Le,m),U(ae,a,m),E(a,Pe,m),E(a,Z,m),o(Z,Ve),o(Z,me),o(me,Ne),o(Z,Ie),Re=!0,qe||(Qe=[ee(ce.call(null,f,et)),ee(ce.call(null,re,et))],qe=!0)},p(a,[m]){const ge={};m&1&&(ge.$$scope={dirty:m,ctx:a}),_.$set(ge);const K={};m&1&&(K.$$scope={dirty:m,ctx:a}),T.$set(K);const he={};m&1&&(he.$$scope={dirty:m,ctx:a}),A.$set(he);const V={};m&1&&(V.$$scope={dirty:m,ctx:a}),b.$set(V);const $e={};m&1&&($e.$$scope={dirty:m,ctx:a}),M.$set($e);const ve={};m&1&&(ve.$$scope={dirty:m,ctx:a}),N.$set(ve);const _e={};m&1&&(_e.$$scope={dirty:m,ctx:a}),J.$set(_e)},i(a){Re||(x(e.$$.fragment,a),x(_.$$.fragment,a),x(T.$$.fragment,a),x(A.$$.fragment,a),x(b.$$.fragment,a),x(M.$$.fragment,a),x(N.$$.fragment,a),x(Y.$$.fragment,a),x(J.$$.fragment,a),x(ae.$$.fragment,a),Re=!0)},o(a){H(e.$$.fragment,a),H(_.$$.fragment,a),H(T.$$.fragment,a),H(A.$$.fragment,a),H(b.$$.fragment,a),H(M.$$.fragment,a),H(N.$$.fragment,a),H(Y.$$.fragment,a),H(J.$$.fragment,a),H(ae.$$.fragment,a),Re=!1},d(a){B(e,a),a&&r(t),a&&r(s),B(_),B(T),B(A),B(b),B(M),B(N),a&&r(te),B(Y,a),a&&r(Ee),a&&r(se),a&&r(ke),a&&r(ie),a&&r(we),B(J,a),a&&r(Se),a&&r(Q),a&&r(Le),B(ae,a),a&&r(Pe),a&&r(Z),qe=!1,be(Qe)}}}class zt extends Ge{constructor(e){super(),Ye(this,e,null,Dt,Ze,{})}}export{zt as default};
