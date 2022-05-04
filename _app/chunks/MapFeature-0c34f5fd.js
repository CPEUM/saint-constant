import{S as Q,i as T,s as X,C as R,e as Z,O as w,c as p,a as N,P as q,d as W,b as g,a1 as J,I as K,g as $,J as U,z as ee,U as te,a2 as V,a3 as ie,N as Y,ac as G,a9 as oe,a5 as le}from"./index-8814b013.js";import{a as ae}from"./index-b9ab12a0.js";import{m as re,a}from"./getData-ef8f77e9.js";import{g as F}from"./Map.svelte_svelte_type_style_lang-ad9468b4.js";function se(f){let t,i,l,y,r,c,d=[{class:"loading-wrapper"},{style:y="font-size: "+f[0]+"px; background-color: "+f[2]},f[3]],s={};for(let o=0;o<d.length;o+=1)s=R(s,d[o]);return{c(){t=Z("div"),i=w("svg"),l=w("circle"),this.h()},l(o){t=p(o,"DIV",{class:!0,style:!0});var h=N(t);i=q(h,"svg",{class:!0,viewBox:!0});var k=N(i);l=q(k,"circle",{cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"vector-effect":!0,class:!0});var m=N(l);m.forEach(W),k.forEach(W),h.forEach(W),this.h()},h(){g(l,"cx","50"),g(l,"cy","50"),g(l,"r","50"),g(l,"fill","none"),g(l,"stroke",f[1]),g(l,"stroke-width","4"),g(l,"stroke-linecap","round"),g(l,"vector-effect","non-scaling-stroke"),g(l,"class","cpeum-13to7g7"),g(i,"class","loading cpeum-13to7g7"),g(i,"viewBox","0 0 100 100"),J(t,s),K(t,"cpeum-13to7g7",!0)},m(o,h){$(o,t,h),U(t,i),U(i,l),c=!0},p(o,[h]){(!c||h&2)&&g(l,"stroke",o[1]),J(t,s=ee(d,[{class:"loading-wrapper"},(!c||h&5&&y!==(y="font-size: "+o[0]+"px; background-color: "+o[2]))&&{style:y},h&8&&o[3]])),K(t,"cpeum-13to7g7",!0)},i(o){c||(r&&r.end(1),c=!0)},o(o){r=te(t,ae,{duration:250}),c=!1},d(o){o&&W(t),o&&r&&r.end()}}}function ne(f,t,i){const l=["size","color","background"];let y=V(t,l),{size:r=40}=t,{color:c="var(--dark1)"}=t,{background:d="transparent"}=t;return f.$$set=s=>{t=R(R({},t),ie(s)),i(3,y=V(t,l)),"size"in s&&i(0,r=s.size),"color"in s&&i(1,c=s.color),"background"in s&&i(2,d=s.background)},[r,c,d,y]}class ye extends Q{constructor(t){super(),T(this,t,ne,se,X,{size:0,color:1,background:2})}}function ce(f,t,i){let l,y;Y(f,re,e=>i(21,l=e));let{data:r}=t,{fillColor:c="none"}=t,{fillColorHover:d=c}=t,{fillColorHighlight:s=c}=t,{fillOpacity:o=1}=t,{fillOpacityHover:h=o}=t,{fillOpacityHighlight:k=o}=t,{strokeWidth:m=6}=t,{strokeWidthHover:L=m}=t,{strokeWidthHighlight:S=m}=t,{strokeColor:H="none"}=t,{strokeColorHover:_=H}=t,{strokeColorHighlight:O=H}=t,{strokeOpacity:b=1}=t,{strokeOpacityHover:I=b}=t,{strokeOpacityHighlight:E=b}=t,{strokeDashArray:z=[1,0]}=t,{radius:M=10}=t,{id:n}=t,{initialState:C="none"}=t;const j=G("figuremap");G("currentKey");const P=j?j.active:null;Y(f,P,e=>i(22,y=e));const u={LINES:n+"-lines",CIRCLES:n+"-circles",FILLS:n+"-fills"};let v=null;const B=oe();function D(e){e.features.length>0&&(v!==e.features[0].id&&(B("hover",e),v!==null&&a.setFeatureState({source:n,id:v},{hover:!1})),v=e.features[0].id,a.setFeatureState({source:n,id:v},{hover:!0}))}function x(e){v!==null&&(a.setFeatureState({source:n,id:v},{hover:!1}),v=null),v=null,B("leave",e)}return r.features?(r.features.forEach((e,A)=>{e.id=Math.floor((A+Math.random())*1e3),e.properties.source=n}),F.add(...r.features)):(r.id=Math.floor(Math.random()*1e3),r.properties.source=n,F.add(r)),le(()=>{a.getSource(n)&&a.removeSource(n);for(const e of Object.values(u))a.getLayer(e)&&a.removeLayer(e);r.features?r.features.forEach(e=>F.removeById(e.id)):F.removeById(r.id)}),f.$$set=e=>{"data"in e&&i(1,r=e.data),"fillColor"in e&&i(2,c=e.fillColor),"fillColorHover"in e&&i(3,d=e.fillColorHover),"fillColorHighlight"in e&&i(4,s=e.fillColorHighlight),"fillOpacity"in e&&i(5,o=e.fillOpacity),"fillOpacityHover"in e&&i(6,h=e.fillOpacityHover),"fillOpacityHighlight"in e&&i(7,k=e.fillOpacityHighlight),"strokeWidth"in e&&i(8,m=e.strokeWidth),"strokeWidthHover"in e&&i(9,L=e.strokeWidthHover),"strokeWidthHighlight"in e&&i(10,S=e.strokeWidthHighlight),"strokeColor"in e&&i(11,H=e.strokeColor),"strokeColorHover"in e&&i(12,_=e.strokeColorHover),"strokeColorHighlight"in e&&i(13,O=e.strokeColorHighlight),"strokeOpacity"in e&&i(14,b=e.strokeOpacity),"strokeOpacityHover"in e&&i(15,I=e.strokeOpacityHover),"strokeOpacityHighlight"in e&&i(16,E=e.strokeOpacityHighlight),"strokeDashArray"in e&&i(17,z=e.strokeDashArray),"radius"in e&&i(18,M=e.radius),"id"in e&&i(19,n=e.id),"initialState"in e&&i(20,C=e.initialState)},f.$$.update=()=>{if(f.$$.dirty&6291456&&P&&l){const e=y?"visible":"none";for(const A of Object.values(u))a.setLayoutProperty(A,"visibility",e)}f.$$.dirty&4194302&&l&&!a.getSource(n)&&(a.addSource(n,{type:"geojson",data:r}),a.addLayer({id:u.LINES,type:"line",source:n,filter:["any",["==",["geometry-type"],"LineString"],["==",["geometry-type"],"MultiLineString"],["==",["geometry-type"],"Polygon"],["==",["geometry-type"],"MultiPolygon"]],paint:{"line-width":["case",["boolean",["feature-state","hover"],!1],L,["boolean",["feature-state","highlight"],!1],S,m],"line-color":["case",["boolean",["feature-state","hover"],!1],_,["boolean",["feature-state","highlight"],!1],O,H],"line-opacity":["case",["boolean",["feature-state","hover"],!1],I,["boolean",["feature-state","highlight"],!1],E,b],"line-dasharray":z},layout:{visibility:C,"line-cap":"round","line-join":"round"}}),a.on("mouseenter",u.LINES,function(e){}),a.on("mousemove",u.LINES,function(e){D(e)}),a.on("mouseleave",u.LINES,function(e){x(e)}),a.addLayer({id:u.CIRCLES,type:"circle",source:n,filter:["any",["==",["geometry-type"],"Point"],["==",["geometry-type"],"MultiPoint"]],paint:{"circle-pitch-alignment":"map","circle-pitch-scale":"map","circle-radius":["interpolate",["exponential",2],["zoom"],10,["/",["coalesce",["get","radius"],M],58.554],20,["/",["coalesce",["get","radius"],M],.014]],"circle-color":["case",["boolean",["feature-state","hover"],!1],d,["boolean",["feature-state","highlight"],!1],s,c],"circle-opacity":["case",["boolean",["feature-state","hover"],!1],h,["boolean",["feature-state","highlight"],!1],k,o],"circle-stroke-width":["case",["boolean",["feature-state","hover"],!1],L,["boolean",["feature-state","highlight"],!1],S,m],"circle-stroke-color":["case",["boolean",["feature-state","hover"],!1],_,["boolean",["feature-state","highlight"],!1],O,H],"circle-stroke-opacity":["case",["boolean",["feature-state","hover"],!1],I,["boolean",["feature-state","highlight"],!1],E,b]},layout:{visibility:C}}),a.on("mouseenter",u.CIRCLES,function(e){}),a.on("mousemove",u.CIRCLES,function(e){D(e)}),a.on("mouseleave",u.CIRCLES,function(e){x(e)}),a.addLayer({id:u.FILLS,type:"fill",source:n,filter:["any",["==",["geometry-type"],"Polygon"],["==",["geometry-type"],"MultiPolygon"]],paint:{"fill-color":["case",["boolean",["feature-state","hover"],!1],d,["boolean",["feature-state","highlight"],!1],s,c],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],h,["boolean",["feature-state","highlight"],!1],k,o],"fill-antialias":!0},layout:{visibility:C}}),a.on("mouseenter",u.FILLS,function(e){}),a.on("mousemove",u.FILLS,function(e){D(e)}),a.on("mouseleave",u.FILLS,function(e){x(e)}))},[P,r,c,d,s,o,h,k,m,L,S,H,_,O,b,I,E,z,M,n,C,l,y]}class de extends Q{constructor(t){super(),T(this,t,ce,null,X,{data:1,fillColor:2,fillColorHover:3,fillColorHighlight:4,fillOpacity:5,fillOpacityHover:6,fillOpacityHighlight:7,strokeWidth:8,strokeWidthHover:9,strokeWidthHighlight:10,strokeColor:11,strokeColorHover:12,strokeColorHighlight:13,strokeOpacity:14,strokeOpacityHover:15,strokeOpacityHighlight:16,strokeDashArray:17,radius:18,id:19,initialState:20})}}export{ye as L,de as M};
