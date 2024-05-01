import{S as V,i as _,s as B,J as j,af as w,ab as q,a8 as z}from"./index-246e4404.js";import{f as J,g as M,h as t}from"./Map-928639cc.js";function K(n,i,o){let d,W;j(n,J,e=>o(21,d=e));let{data:r}=i,{fillColor:s="none"}=i,{fillColorHover:k=s}=i,{fillColorHighlight:m=s}=i,{fillOpacity:c=1}=i,{fillOpacityHover:v=c}=i,{fillOpacityHighlight:H=c}=i,{strokeWidth:h=6}=i,{strokeWidthHover:L=h}=i,{strokeWidthHighlight:C=h}=i,{strokeColor:u="none"}=i,{strokeColorHover:b=u}=i,{strokeColorHighlight:S=u}=i,{strokeOpacity:g=1}=i,{strokeOpacityHover:O=g}=i,{strokeOpacityHighlight:I=g}=i,{strokeDashArray:F=[1,0]}=i,{radius:E=10}=i,{id:l}=i,{initialVisibility:y="none"}=i;const N=w("figuremap");w("currentKey");const A=N?N.active:null;j(n,A,e=>o(22,W=e));const a={LINES:l+"-lines",CIRCLES:l+"-circles",FILLS:l+"-fills"};let f=null;const x=q();function D(e){e.features.length>0&&(f!==e.features[0].id&&(x("hover",e),f!==null&&t.setFeatureState({source:l,id:f},{hover:!1})),f=e.features[0].id,t.setFeatureState({source:l,id:f},{hover:!0}))}function P(e){f!==null&&(t.setFeatureState({source:l,id:f},{hover:!1}),f=null),f=null,x("leave",e)}return r.features?(r.features.forEach((e,R)=>{e.id=Math.floor((R+Math.random())*1e3),e.properties.source=l}),M.add(...r.features)):(r.id=Math.floor(Math.random()*1e3),r.properties.source=l,M.add(r)),z(()=>{t.getSource(l)&&t.removeSource(l);for(const e of Object.values(a))t.getLayer(e)&&t.removeLayer(e);r.features?r.features.forEach(e=>M.removeById(e.id)):M.removeById(r.id)}),n.$$set=e=>{"data"in e&&o(1,r=e.data),"fillColor"in e&&o(2,s=e.fillColor),"fillColorHover"in e&&o(3,k=e.fillColorHover),"fillColorHighlight"in e&&o(4,m=e.fillColorHighlight),"fillOpacity"in e&&o(5,c=e.fillOpacity),"fillOpacityHover"in e&&o(6,v=e.fillOpacityHover),"fillOpacityHighlight"in e&&o(7,H=e.fillOpacityHighlight),"strokeWidth"in e&&o(8,h=e.strokeWidth),"strokeWidthHover"in e&&o(9,L=e.strokeWidthHover),"strokeWidthHighlight"in e&&o(10,C=e.strokeWidthHighlight),"strokeColor"in e&&o(11,u=e.strokeColor),"strokeColorHover"in e&&o(12,b=e.strokeColorHover),"strokeColorHighlight"in e&&o(13,S=e.strokeColorHighlight),"strokeOpacity"in e&&o(14,g=e.strokeOpacity),"strokeOpacityHover"in e&&o(15,O=e.strokeOpacityHover),"strokeOpacityHighlight"in e&&o(16,I=e.strokeOpacityHighlight),"strokeDashArray"in e&&o(17,F=e.strokeDashArray),"radius"in e&&o(18,E=e.radius),"id"in e&&o(19,l=e.id),"initialVisibility"in e&&o(20,y=e.initialVisibility)},n.$$.update=()=>{if(n.$$.dirty&6291456&&d&&A){const e=W?"visible":"none";for(const R of Object.values(a))t.setLayoutProperty(R,"visibility",e)}n.$$.dirty&4194302&&d&&(t.getSource(l)||t.addSource(l,{type:"geojson",data:r}),t.getLayer(a.LINES)||(t.addLayer({id:a.LINES,type:"line",source:l,filter:["any",["==",["geometry-type"],"LineString"],["==",["geometry-type"],"MultiLineString"],["==",["geometry-type"],"Polygon"],["==",["geometry-type"],"MultiPolygon"]],paint:{"line-width":["let","widthfactor",["case",["any",["==",["geometry-type"],"LineString"],["==",["geometry-type"],"MultiLineString"]],2,1],["*",["var","widthfactor"],["case",["boolean",["feature-state","hover"],!1],L,["boolean",["feature-state","highlight"],!1],C,h]]],"line-color":["case",["boolean",["feature-state","hover"],!1],b,["boolean",["feature-state","highlight"],!1],S,u],"line-opacity":["case",["boolean",["feature-state","hover"],!1],O,["boolean",["feature-state","highlight"],!1],I,g],"line-dasharray":F},layout:{visibility:y,"line-cap":"round","line-join":"round"}}),t.on("mouseenter",a.LINES,function(e){}),t.on("mousemove",a.LINES,function(e){D(e)}),t.on("mouseleave",a.LINES,function(e){P(e)})),t.getLayer(a.CIRCLES)||(t.addLayer({id:a.CIRCLES,type:"circle",source:l,filter:["any",["==",["geometry-type"],"Point"],["==",["geometry-type"],"MultiPoint"]],paint:{"circle-pitch-alignment":"map","circle-pitch-scale":"map","circle-radius":["interpolate",["exponential",2],["zoom"],10,["/",["coalesce",["get","radius"],E],58.554],20,["/",["coalesce",["get","radius"],E],.014]],"circle-color":["case",["boolean",["feature-state","hover"],!1],k,["boolean",["feature-state","highlight"],!1],m,s],"circle-opacity":["case",["boolean",["feature-state","hover"],!1],v,["boolean",["feature-state","highlight"],!1],H,c],"circle-stroke-width":["case",["boolean",["feature-state","hover"],!1],L,["boolean",["feature-state","highlight"],!1],C,h],"circle-stroke-color":["case",["boolean",["feature-state","hover"],!1],b,["boolean",["feature-state","highlight"],!1],S,u],"circle-stroke-opacity":["case",["boolean",["feature-state","hover"],!1],O,["boolean",["feature-state","highlight"],!1],I,g]},layout:{visibility:y}}),t.on("mouseenter",a.CIRCLES,function(e){}),t.on("mousemove",a.CIRCLES,function(e){D(e)}),t.on("mouseleave",a.CIRCLES,function(e){P(e)})),t.getLayer(a.FILLS)||(t.addLayer({id:a.FILLS,type:"fill",source:l,filter:["any",["==",["geometry-type"],"Polygon"],["==",["geometry-type"],"MultiPolygon"]],paint:{"fill-color":["case",["boolean",["feature-state","hover"],!1],k,["boolean",["feature-state","highlight"],!1],m,s],"fill-opacity":["case",["boolean",["feature-state","hover"],!1],v,["boolean",["feature-state","highlight"],!1],H,c],"fill-antialias":!0},layout:{visibility:y}}),t.on("mouseenter",a.FILLS,function(e){}),t.on("mousemove",a.FILLS,function(e){D(e)}),t.on("mouseleave",a.FILLS,function(e){P(e)})))},[A,r,s,k,m,c,v,H,h,L,C,u,b,S,g,O,I,F,E,l,y,d,W]}class Q extends V{constructor(i){super(),_(this,i,K,null,B,{data:1,fillColor:2,fillColorHover:3,fillColorHighlight:4,fillOpacity:5,fillOpacityHover:6,fillOpacityHighlight:7,strokeWidth:8,strokeWidthHover:9,strokeWidthHighlight:10,strokeColor:11,strokeColorHover:12,strokeColorHighlight:13,strokeOpacity:14,strokeOpacityHover:15,strokeOpacityHighlight:16,strokeDashArray:17,radius:18,id:19,initialVisibility:20})}}export{Q as M};