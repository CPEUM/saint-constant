import{ad as s}from"./vendor-dc8c1d98.js";function d(r){return[1,2,3].map(o=>`--accent${o}: var(--${r}${o})`).join("; ")}const l={y:0,delta:0,direction:null},u=s(l,function(o){let n=l;function c(t){const e=t.target.scrollTop-n.y,a={y:t.target.scrollTop,delta:e,direction:n.delta>0&&e>0?"down":"up"};o(a),n=a}{const t=document.body;return t.addEventListener("scroll",c),function(){t.removeEventListener("scroll",c)}}});export{d as g,u as m};
