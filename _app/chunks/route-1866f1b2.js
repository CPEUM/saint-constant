import{d as a}from"./index-2b88267d.js";import{af as u,ac as c}from"./index-246e4404.js";import{b as r}from"./paths-396f020f.js";import{r as g,e as t}from"./routes-8f75ae92.js";const p=()=>{const e=u("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},i={subscribe(e){return p().page.subscribe(e)}};function b(e){return r&&e.startsWith(r)?e.slice(r.length):e}function n(e){return e?b(e).replace(/#.*$/,"").replace(/^\/+/,"").split("/").map(s=>`/${s}`):null}const x=a(i,e=>g.find(s=>n(s.path)[0]===n(e.url.pathname)[0])),d=a(i,e=>t.find(o=>o.path===e.url.pathname)||c(d),t[0]);export{d as e,n as g,i as p,x as r};