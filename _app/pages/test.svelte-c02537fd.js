import{S as Ee,i as ke,s as be,e as p,t as T,c as h,a as _,h as y,d as n,g as H,H as t,N as Te,Z as ye,k as x,m as A,b as N,U as ue,$ as fe,j as pe,ag as Ce,q as ie,o as he,p as Ie,a0 as Ne,ak as l,v as Se,V as ge,n as we,M as me}from"../chunks/vendor-54ef53c2.js";import{r as de}from"../chunks/revealText-1418c0f8.js";import{t as _e}from"../chunks/text-c98617ab.js";import"../chunks/matter-58dddc05.js";import"../chunks/intersect-18a8b327.js";function ve(r){let a,m,v,i,c;return{c(){a=p("h1"),m=T("This is a test title")},l(s){a=h(s,"H1",{});var d=_(a);m=y(d,"This is a test title"),d.forEach(n)},m(s,d){H(s,a,d),t(a,m),c=!0},i(s){c||(Te(()=>{i&&i.end(1),v=ge(a,_e,{}),v.start()}),c=!0)},o(s){v&&v.invalidate(),i=ye(a,_e,{}),c=!1},d(s){s&&n(a),s&&i&&i.end()}}}function xe(r){let a,m,v,i,c,s,d,P,q,C,W,b,f,S,g,B,L,w,E,k,O,Q,j,X,M,Y,Z,I,R,$,ee,U,te,V,se,oe,o=r[1]&&ve();return{c(){a=p("section"),m=p("canvas"),v=x(),i=p("section"),c=p("label"),s=p("span"),d=T("Visibility var: "),P=T(r[0]),q=x(),C=p("input"),W=x(),b=p("h1"),f=T("This is "),S=p("em"),g=T("a test"),B=T(" title"),w=x(),E=p("section"),k=p("label"),O=p("span"),Q=T("Insert / remove from dom (transition): "),j=T(r[1]),X=x(),M=p("input"),Y=x(),o&&o.c(),Z=x(),I=p("section"),R=p("p"),$=T("Intersection"),ee=x(),U=p("h1"),te=T("This is a test title"),this.h()},l(e){a=h(e,"SECTION",{class:!0});var u=_(a);m=h(u,"CANVAS",{}),_(m).forEach(n),u.forEach(n),v=A(e),i=h(e,"SECTION",{class:!0});var z=_(i);c=h(z,"LABEL",{class:!0});var D=_(c);s=h(D,"SPAN",{});var ne=_(s);d=y(ne,"Visibility var: "),P=y(ne,r[0]),ne.forEach(n),q=A(D),C=h(D,"INPUT",{type:!0}),D.forEach(n),W=A(z),b=h(z,"H1",{});var F=_(b);f=y(F,"This is "),S=h(F,"EM",{});var le=_(S);g=y(le,"a test"),le.forEach(n),B=y(F," title"),F.forEach(n),z.forEach(n),w=A(e),E=h(e,"SECTION",{class:!0});var G=_(E);k=h(G,"LABEL",{class:!0});var J=_(k);O=h(J,"SPAN",{});var ae=_(O);Q=y(ae,"Insert / remove from dom (transition): "),j=y(ae,r[1]),ae.forEach(n),X=A(J),M=h(J,"INPUT",{type:!0}),J.forEach(n),Y=A(G),o&&o.l(G),G.forEach(n),Z=A(e),I=h(e,"SECTION",{class:!0});var K=_(I);R=h(K,"P",{class:!0});var re=_(R);$=y(re,"Intersection"),re.forEach(n),ee=A(K),U=h(K,"H1",{});var ce=_(U);te=y(ce,"This is a test title"),ce.forEach(n),K.forEach(n),this.h()},h(){N(a,"class","cpeum-poxdku"),N(C,"type","checkbox"),N(c,"class","cpeum-poxdku"),N(i,"class","cpeum-poxdku"),N(M,"type","checkbox"),N(k,"class","cpeum-poxdku"),N(E,"class","cpeum-poxdku"),N(R,"class","cpeum-poxdku"),N(I,"class","cpeum-poxdku")},m(e,u){H(e,a,u),t(a,m),r[4](m),r[5](a),H(e,v,u),H(e,i,u),t(i,c),t(c,s),t(s,d),t(s,P),t(c,q),t(c,C),C.checked=r[0],t(i,W),t(i,b),t(b,f),t(b,S),t(S,g),t(b,B),H(e,w,u),H(e,E,u),t(E,k),t(k,O),t(O,Q),t(O,j),t(k,X),t(k,M),M.checked=r[1],t(E,Y),o&&o.m(E,null),H(e,Z,u),H(e,I,u),t(I,R),t(R,$),t(I,ee),t(I,U),t(U,te),V=!0,se||(oe=[ue(C,"change",r[6]),fe(L=de.call(null,b,{visible:r[0]})),ue(M,"change",r[7]),fe(de.call(null,U))],se=!0)},p(e,[u]){(!V||u&1)&&pe(P,e[0]),u&1&&(C.checked=e[0]),L&&Ce(L.update)&&u&1&&L.update.call(null,{visible:e[0]}),(!V||u&2)&&pe(j,e[1]),u&2&&(M.checked=e[1]),e[1]?o?u&2&&ie(o,1):(o=ve(),o.c(),ie(o,1),o.m(E,null)):o&&(we(),he(o,1,1,()=>{o=null}),Ie())},i(e){V||(ie(o),V=!0)},o(e){he(o),V=!1},d(e){e&&n(a),r[4](null),r[5](null),e&&n(v),e&&n(i),e&&n(w),e&&n(E),o&&o.d(),e&&n(Z),e&&n(I),se=!1,Ne(oe)}}}function Ae(r,a,m){let v=!1,i=!1,c,s;const d=l.Engine.create(),P=l.Runner.create();l.Runner.run(P,d),Se(()=>{const f=l.Render.create({canvas:s,engine:d,options:{width:s.clientWidth,height:s.clientHeight,wireframes:!1}});l.Render.run(f);var S=d.world;d.gravity.scale=0;const g=l.Bodies.circle(f.options.width/2,f.options.height/2,50,{isStatic:!0,plugin:{attractors:[function(E,k){return{x:(E.position.x-k.position.x)*1e-6,y:(E.position.y-k.position.y)*1e-6}}]}});l.Composite.add(S,g);for(var B=0;B<150;B+=1){var L=l.Bodies.polygon(l.Common.random(0,f.options.width),l.Common.random(0,f.options.height),l.Common.random(1,5),l.Common.random()>.9?l.Common.random(15,25):l.Common.random(5,10));l.World.add(S,L)}var w=l.Mouse.create(f.canvas);l.Events.on(d,"afterUpdate",function(){!w.position.x||l.Body.translate(g,{x:(w.position.x-g.position.x)*.25,y:(w.position.y-g.position.y)*.25})})});function q(f){me[f?"unshift":"push"](()=>{s=f,m(3,s)})}function C(f){me[f?"unshift":"push"](()=>{c=f,m(2,c)})}function W(){v=this.checked,m(0,v)}function b(){i=this.checked,m(1,i)}return[v,i,c,s,q,C,W,b]}class Oe extends Ee{constructor(a){super();ke(this,a,Ae,xe,be,{})}}export{Oe as default};