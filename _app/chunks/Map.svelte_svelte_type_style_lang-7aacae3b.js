import{c as i}from"./themeColors-84e338fb.js";import{b as c}from"./paths-396f020f.js";import{c as s}from"./map-322c38b0.js";const g={fallback:new s.LngLatBounds([[-73.6,45.29],[-73.58,45.4]]),agroparc:new s.LngLatBounds([-73.577405,45.354136],[-73.552339,45.369695]),promenades:new s.LngLatBounds([-73.616978,45.35106],[-73.545042,45.399776]),poles:new s.LngLatBounds([-73.615091,45.355221],[-73.548476,45.401041])},u=[];function h(e){e.addSource("city",{type:"geojson",data:c+"/data/geo/saint-constant.geojson"});const a="city";return e.addLayer({id:a,type:"line",source:"city",paint:{"line-color":i.accent3,"line-width":5,"line-opacity":1,"line-dasharray":[0,1.5]},layout:{"line-cap":"round","line-join":"round"}}),a}let t=null;async function y(e){const n=await(await fetch("/data/geo/propositions.geojson")).json();n.features.forEach((o,l)=>{o.id=l+1}),u.push(...n.features),e.addSource("propositions",{type:"geojson",data:n});const r=["propositions-lines","propositions-points"];return e.addLayer({id:r[0],type:"line",source:"propositions",filter:["any",["==",["geometry-type"],"LineString"],["==",["geometry-type"],"MultiLineString"]],paint:{"line-width":["case",["boolean",["feature-state","hover"],!1],20,["boolean",["feature-state","highlight"],!1],15,10],"line-color":["get",["concat",["get","exercice"],["case",["boolean",["feature-state","hover"],!1],"3",["boolean",["feature-state","highlight"],!1],"3","2"]],["literal",i]],"line-opacity":["case",["boolean",["feature-state","hover"],!1],.9,["boolean",["feature-state","highlight"],!1],.75,.5]},layout:{"line-cap":"round","line-join":"round"}}),e.on("mousemove","propositions-lines",function(o){o.features.length>0&&(t!==null&&e.setFeatureState({source:"propositions",id:t},{hover:!1}),t=o.features[0].id,e.setFeatureState({source:"propositions",id:t},{hover:!0}))}),e.on("mouseleave","propositions-lines",function(){t!==null&&(e.setFeatureState({source:"propositions",id:t},{hover:!1}),t=null),t=null}),e.addLayer({id:r[1],type:"circle",filter:["any",["==",["geometry-type"],"Point"],["==",["geometry-type"],"MultiPoint"]],source:"propositions",paint:{"circle-radius":["interpolate",["exponential",2],["zoom"],10,["/",["get","radius"],58.554],20,["/",["get","radius"],.014]],"circle-color":["get",["concat",["get","exercice"],"2"],["literal",i]],"circle-opacity":["case",["boolean",["feature-state","hover"],!1],.9,["boolean",["feature-state","highlight"],!1],.75,.5],"circle-stroke-color":["get",["concat",["get","exercice"],"3"],["literal",i]],"circle-stroke-width":["case",["boolean",["feature-state","hover"],!1],10,["boolean",["feature-state","highlight"],!1],5,0],"circle-stroke-opacity":.8,"circle-pitch-alignment":"map","circle-pitch-scale":"map"}}),e.on("mousemove","propositions-points",function(o){o.features.length>0&&(t!==null&&e.setFeatureState({source:"propositions",id:t},{hover:!1}),t=o.features[0].id,e.setFeatureState({source:"propositions",id:t},{hover:!0}))}),e.on("mouseleave","propositions-points",function(){t!==null&&(e.setFeatureState({source:"propositions",id:t},{hover:!1}),t=null)}),r}export{h as a,g as b,y as c,u as p};
