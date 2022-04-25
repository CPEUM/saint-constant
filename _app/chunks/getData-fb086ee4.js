import{S as j,i as w,s as _,N,ac as R,a9 as B,a5 as q}from"./index-bbca5c05.js";import{m as z,a as i}from"./Map-2b951721.js";import{f as I}from"./maplibre-gl-394f1951.js";import{b as K}from"./paths-396f020f.js";function T(f,t,o){let g,E;N(f,z,e=>o(19,g=e));let{data:r}=t,{fillColor:n="none"}=t,{fillColorHover:y=n}=t,{fillColorHighlight:d=n}=t,{fillOpacity:h=1}=t,{fillOpacityHover:m=h}=t,{fillOpacityHighlight:v=h}=t,{strokeWidth:k=6}=t,{strokeWidthHover:H=12}=t,{strokeWidthHighlight:C=10}=t,{strokeColor:c="none"}=t,{strokeColorHover:b=c}=t,{strokeColorHighlight:L=c}=t,{strokeOpacity:u=1}=t,{strokeOpacityHover:S=u}=t,{strokeOpacityHighlight:O=u}=t,{strokeDashArray:M=[1,0]}=t,{id:l}=t;const P=R("figuremap");R("currentKey");const W=P?P.active:null;N(f,W,e=>o(20,E=e));const a={LINES:l+"-lines",CIRCLES:l+"-circles",FILLS:l+"-fills"};let s=null;const x=B();function F(e){e.features.length>0&&(s!==e.features[0].id&&(x("hover",e),s!==null&&i.setFeatureState({source:l,id:s},{hover:!1})),s=e.features[0].id,i.setFeatureState({source:l,id:s},{hover:!0}))}function D(e){s!==null&&(i.setFeatureState({source:l,id:s},{hover:!1}),s=null),s=null,x("leave",e)}return r.features?(r.features.forEach((e,A)=>{e.id||(e.id=Math.floor((A+Math.random())*1e3))}),I.add(...r.features)):(r.id||(r.id=Math.floor(Math.random()*1e3)),I.add(r)),q(()=>{i.getSource(l)&&i.removeSource(l);for(const e of Object.values(a))i.removeLayer(e);r.features?r.features.forEach(e=>I.removeById(e.id)):I.removeById(r.id)}),f.$$set=e=>{"data"in e&&o(1,r=e.data),"fillColor"in e&&o(2,n=e.fillColor),"fillColorHover"in e&&o(3,y=e.fillColorHover),"fillColorHighlight"in e&&o(4,d=e.fillColorHighlight),"fillOpacity"in e&&o(5,h=e.fillOpacity),"fillOpacityHover"in e&&o(6,m=e.fillOpacityHover),"fillOpacityHighlight"in e&&o(7,v=e.fillOpacityHighlight),"strokeWidth"in e&&o(8,k=e.strokeWidth),"strokeWidthHover"in e&&o(9,H=e.strokeWidthHover),"strokeWidthHighlight"in e&&o(10,C=e.strokeWidthHighlight),"strokeColor"in e&&o(11,c=e.strokeColor),"strokeColorHover"in e&&o(12,b=e.strokeColorHover),"strokeColorHighlight"in e&&o(13,L=e.strokeColorHighlight),"strokeOpacity"in e&&o(14,u=e.strokeOpacity),"strokeOpacityHover"in e&&o(15,S=e.strokeOpacityHover),"strokeOpacityHighlight"in e&&o(16,O=e.strokeOpacityHighlight),"strokeDashArray"in e&&o(17,M=e.strokeDashArray),"id"in e&&o(18,l=e.id)},f.$$.update=()=>{if(f.$$.dirty&1572864&&W&&g){const e=E?"visible":"none";for(const A of Object.values(a))i.setLayoutProperty(A,"visibility",e)}f.$$.dirty&1048574&&g&&!i.getSource(l)&&(i.addSource(l,{type:"geojson",data:r}),i.addLayer({id:a.LINES,type:"line",source:l,filter:["any",["==",["geometry-type"],"LineString"],["==",["geometry-type"],"MultiLineString"],["==",["geometry-type"],"Polygon"],["==",["geometry-type"],"MultiPolygon"]],paint:{"line-width":["case",["boolean",["feature-state","hover"],!1],H,["boolean",["feature-state","highlight"],!1],C,k],"line-color":["case",["boolean",["feature-state","hover"],!1],b,["boolean",["feature-state","highlight"],!1],L,c],"line-opacity":["case",["boolean",["feature-state","hover"],!1],S,["boolean",["feature-state","highlight"],!1],O,u],"line-dasharray":M},layout:{visibility:"visible","line-cap":"round","line-join":"round"}}),i.on("mouseenter",a.LINES,function(e){}),i.on("mousemove",a.LINES,function(e){F(e)}),i.on("mouseleave",a.LINES,function(e){D(e)}),i.addLayer({id:a.CIRCLES,type:"circle",source:l,filter:["any",["==",["geometry-type"],"Point"],["==",["geometry-type"],"MultiPoint"]],paint:{"circle-pitch-alignment":"map","circle-pitch-scale":"map","circle-radius":["interpolate",["exponential",2],["zoom"],10,["/",["get","radius"],58.554],20,["/",["get","radius"],.014]],"circle-color":["case",["boolean",["feature-state","hover"],!1],y,["boolean",["feature-state","highlight"],!1],d,n],"circle-opacity":["case",["boolean",["feature-state","hover"],!1],m,["boolean",["feature-state","highlight"],!1],v,h],"circle-stroke-width":["case",["boolean",["feature-state","hover"],!1],H,["boolean",["feature-state","highlight"],!1],C,k],"circle-stroke-color":["case",["boolean",["feature-state","hover"],!1],b,["boolean",["feature-state","highlight"],!1],L,c],"circle-stroke-opacity":["case",["boolean",["feature-state","hover"],!1],S,["boolean",["feature-state","highlight"],!1],O,u]},layout:{visibility:"visible"}}),i.on("mouseenter",a.CIRCLES,function(e){}),i.on("mousemove",a.CIRCLES,function(e){F(e)}),i.on("mouseleave",a.CIRCLES,function(e){D(e)}),i.addLayer({id:a.FILLS,type:"fill",source:l,filter:["any",["==",["geometry-type"],"Polygon"],["==",["geometry-type"],"MultiPolygon"]],paint:{"fill-color":["case",["boolean",["feature-state","hover"],!1],y,["boolean",["feature-state","highlight"],!1],d,n],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],m,["boolean",["feature-state","highlight"],!1],v,h],"fill-antialias":!0},layout:{visibility:"visible"}}),i.on("mouseenter",a.FILLS,function(e){}),i.on("mousemove",a.FILLS,function(e){F(e)}),i.on("mouseleave",a.FILLS,function(e){D(e)}))},[W,r,n,y,d,h,m,v,k,H,C,c,b,L,u,S,O,M,l,g,E]}class U extends j{constructor(t){super(),w(this,t,T,null,_,{data:1,fillColor:2,fillColorHover:3,fillColorHighlight:4,fillOpacity:5,fillOpacityHover:6,fillOpacityHighlight:7,strokeWidth:8,strokeWidthHover:9,strokeWidthHighlight:10,strokeColor:11,strokeColorHover:12,strokeColorHighlight:13,strokeOpacity:14,strokeOpacityHover:15,strokeOpacityHighlight:16,strokeDashArray:17,id:18})}}async function V(f){const t=await fetch(K+f);if(t.ok)return t.json();throw Error(t.status+": "+t.statusText)}export{U as M,V as g};
