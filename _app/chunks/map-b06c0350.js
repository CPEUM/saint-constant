var p=Object.defineProperty,f=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(e,t,s)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,r=(e,t)=>{for(var s in t||(t={}))m.call(t,s)&&c(e,s,t[s]);if(o)for(var s of o(t))b.call(t,s)&&c(e,s,t[s]);return e},n=(e,t)=>f(e,d(t));import{w as a}from"./index-0df86b8c.js";const v=a(null),F=function(){const{subscribe:e,update:t}=a(null);let s;return{subscribe:e,set:u=>{t(l=>(s=l,u))},getPrevious:()=>s}}(),w=function(){const{subscribe:e,set:t,update:s}=a({full:!1,class:""});return{subscribe:e,set:t,toggle:()=>{s(u=>n(r({},u),{full:!u.full}))},setFull:u=>{s(l=>n(r({},l),{full:u}))},setClass:u=>{s(l=>n(r({},l),{class:u}))},clearClass:()=>{s(u=>n(r({},u),{class:""}))}}}(),y=a(null),C=function(){const{subscribe:e,set:t,update:s}=a([]);return{subscribe:e,add:(...u)=>s(l=>(l.push(...u),l)),removeById:(...u)=>s(l=>l.filter(i=>[...u].includes(!i.id)))}}();export{F as a,v as b,y as c,C as d,w as m};
