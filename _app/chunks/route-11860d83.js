import{d as a}from"./index-236d7f9e.js";import{ac as u,aa as c}from"./index-bbca5c05.js";import{b as r}from"./paths-396f020f.js";import{r as g,e as t}from"./routes-10413546.js";const b=()=>{const e=u("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session,updated:e.updated}},i={subscribe(e){return b().page.subscribe(e)}};function p(e){return r&&e.startsWith(r)?e.slice(r.length):e}function n(e){return e?p(e).replace(/#.*$/,"").replace(/^\/+/,"").split("/").map(s=>`/${s}`):null}const x=a(i,e=>g.find(s=>n(s.path)[0]===n(e.url.pathname)[0])),d=a(i,e=>t.find(o=>o.path===e.url.pathname)||c(d),t[0]);export{d as e,n as g,x as r};
