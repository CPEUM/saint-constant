import{S as q,i as H,s as I,$ as O,e as b,t as P,k as B,c as $,a as v,h as S,d as m,m as w,g as E,J as p,a0 as D,q as d,o as y,E as i,w as J,x as M,y as z,B as A,l as x,n as F,p as G,M as K}from"../chunks/index-8814b013.js";import{P as L}from"../chunks/PieChart-69a8f341.js";import{g as N}from"../chunks/getData-ef8f77e9.js";import"../chunks/Map.svelte_svelte_type_style_lang-ad9468b4.js";import"../chunks/index-ff6a0fc0.js";import"../chunks/index-b9ab12a0.js";import"../chunks/paths-396f020f.js";function T(r,o,c){const a=r.slice();return a[2]=o[c],a}function Q(r){return{c:i,l:i,m:i,p:i,i,o:i,d:i}}function R(r){let o,c,a=r[1][1].charts,e=[];for(let t=0;t<a.length;t+=1)e[t]=j(T(r,a,t));const h=t=>y(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();o=x()},l(t){for(let l=0;l<e.length;l+=1)e[l].l(t);o=x()},m(t,l){for(let n=0;n<e.length;n+=1)e[n].m(t,l);E(t,o,l),c=!0},p(t,l){if(l&1){a=t[1][1].charts;let n;for(n=0;n<a.length;n+=1){const _=T(t,a,n);e[n]?(e[n].p(_,l),d(e[n],1)):(e[n]=j(_),e[n].c(),d(e[n],1),e[n].m(o.parentNode,o))}for(F(),n=a.length;n<e.length;n+=1)h(n);G()}},i(t){if(!c){for(let l=0;l<a.length;l+=1)d(e[l]);c=!0}},o(t){e=e.filter(Boolean);for(let l=0;l<e.length;l+=1)y(e[l]);c=!1},d(t){K(e,t),t&&m(o)}}}function j(r){let o,c;return o=new L({props:{data:r[2].data,columns:r[1][1].groups,key:r[2].id}}),{c(){J(o.$$.fragment)},l(a){M(o.$$.fragment,a)},m(a,e){z(o,a,e),c=!0},p:i,i(a){c||(d(o.$$.fragment,a),c=!0)},o(a){y(o.$$.fragment,a),c=!1},d(a){A(o,a)}}}function U(r){return{c:i,l:i,m:i,p:i,i,o:i,d:i}}function V(r){let o,c,a,e,h,t,l,n,_,u={ctx:r,current:null,token:null,hasCatch:!1,pending:U,then:R,catch:Q,value:1,blocks:[,,,]};return O(r[0],u),{c(){o=b("section"),c=b("h1"),a=P("Barchart"),e=B(),h=b("section"),t=b("h1"),l=P("Piechart"),n=B(),u.block.c()},l(s){o=$(s,"SECTION",{});var f=v(o);c=$(f,"H1",{});var k=v(c);a=S(k,"Barchart"),k.forEach(m),f.forEach(m),e=w(s),h=$(s,"SECTION",{});var g=v(h);t=$(g,"H1",{});var C=v(t);l=S(C,"Piechart"),C.forEach(m),n=w(g),u.block.l(g),g.forEach(m)},m(s,f){E(s,o,f),p(o,c),p(c,a),E(s,e,f),E(s,h,f),p(h,t),p(t,l),p(h,n),u.block.m(h,u.anchor=null),u.mount=()=>h,u.anchor=null,_=!0},p(s,[f]){r=s,D(u,r,f)},i(s){_||(d(u.block),_=!0)},o(s){for(let f=0;f<3;f+=1){const k=u.blocks[f];y(k)}_=!1},d(s){s&&m(o),s&&m(e),s&&m(h),u.block.d(),u.token=null,u=null}}}function W(r){return[Promise.all([N("/data/geo/poles/identified-sectors.geojson"),N("/data/charts/poles/preferences.json")])]}class ne extends q{constructor(o){super(),H(this,o,W,V,I,{})}}export{ne as default};
