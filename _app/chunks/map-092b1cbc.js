var i=Object.defineProperty,p=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var o=(t,l,s)=>l in t?i(t,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[l]=s,u=(t,l)=>{for(var s in l||(l={}))b.call(l,s)&&o(t,s,l[s]);if(c)for(var s of c(l))m.call(l,s)&&o(t,s,l[s]);return t},a=(t,l)=>p(t,f(l));import{D as n}from"./vendor-4610afbe.js";const h=n(null),v=function(){const{subscribe:t,update:l}=n(null);let s;return{subscribe:t,set:e=>{l(r=>(s=r,e))},getPrevious:()=>s}}(),C=function(){const{subscribe:t,set:l,update:s}=n({full:!1,class:""});return{subscribe:t,set:l,toggle:()=>{s(e=>a(u({},e),{full:!e.full}))},setFull:e=>{s(r=>a(u({},r),{full:e}))},setClass:e=>{s(r=>a(u({},r),{class:e}))},clearClass:()=>{s(e=>a(u({},e),{class:""}))}}}();export{h as a,C as b,v as m};
