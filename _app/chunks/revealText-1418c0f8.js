var X=Object.defineProperty,q=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var D=(e,s,r)=>s in e?X(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,L=(e,s)=>{for(var r in s||(s={}))Y.call(s,r)&&D(e,r,s[r]);if(M)for(var r of M(s))Z.call(s,r)&&D(e,r,s[r]);return e},H=(e,s)=>q(e,W(s));import{i as V}from"./intersect-18a8b327.js";const v={HOST:"text-split-host",TARGET:"text-split-target",MASK:"text-split-mask"};function _(e,{granularity:s="char",maskNodeInitCallback:r=null,targetNodeInitCallback:c=null}={}){const o=[],y=[];function u(f){f.style.position="relative",f.style.display="inline-block",f.style.transformStyle="preserve-3d"}function p(f){Array.from(f.childNodes).forEach(n=>{if(n instanceof HTMLElement)u(n),p(n);else if(n.nodeType===Node.TEXT_NODE){const d=[];n.textContent.split(/(\s)/).forEach(m=>{if(!!m)if(m===" ")d.push(document.createTextNode(" "));else{const l=document.createElement("span");u(l),l.style.whiteSpace="nowrap",l.setAttribute(v.MASK,""),y.push(l),r&&r(l,y.length);for(const T of m.split(s==="word"?" ":"")){const a=document.createElement("span");a.textContent=T,a.style.transformStyle="preserve-3d",a.style.position="relative",a.style.display="inline-block",a.setAttribute(v.TARGET,""),l.appendChild(a),c&&c(a,o.length),o.push(a)}d.push(l)}}),n.replaceWith(...d)}})}return e.hasAttribute(v.HOST)?(o.push(...Array.from(e.querySelectorAll(`[${v.TARGET}]`))),y.push(...Array.from(e.querySelectorAll(`[${v.MASK}]`)))):(e.setAttribute(v.HOST,""),e.normalize(),p(e)),{targets:o,masks:y}}const j=/px|%|em|vh|vw|rem/;function B(e){return typeof e=="number"?null:e.match(j)[0]||null}function w(e,{duration:s=450,delay:r=0,stagger:c=!0,staggerDelay:o=25,opacity:y=0,x:u=0,y:p=0,scale:f=1,rotateX:n=0,rotateY:d=0,rotateZ:m=0,transformOrigin:l="0% 90%",perspective:T=1e3,hideOnLeave:a=!1,mask:z=!1,maskPadding:A="0.1em",easing:C="cubic-bezier(0.7, 0, 0.2, 1)",granularity:F="char",useIntersect:G=!0,intersectOptions:K={rootMargin:"-200px 0px -200px"},visible:S=void 0}={}){e.style.perspective=T+"px",e.style.perspectiveOrigin="center";const b=parseFloat(A+""),N=B(A)||"px";function P(t,i){S?$(t,i):k(t,i),t.style.transformOrigin=l,t.style.transitionDelay=r+(c?o*i:0)+"ms",t.style.transitionDuration=s+"ms",t.style.transitionTimingFunction=C,t.style.transitionProperty="opacity, transform, top, left"}function R(t,i){t.style.overflow="hidden",t.style.padding=b+N,t.style.margin=-1*b+N}function k(t,i){t.style.transitionDelay=r+(c?o*i:0)+"ms",t.style.opacity=y+"",t.style.transform=`rotateX(${n}deg) rotateY(${d}deg) rotateZ(${m}deg) translate(${u+(isNaN(Number(u))?"":"px")}, ${p+(isNaN(Number(p))?"":"px")}) scale(${f})`}function $(t,i){t.style.transitionDelay=r+(c?o*i:0)+"ms",t.style.opacity="1",t.style.transform="initial"}const{targets:x,masks:U}=_(e,{granularity:F,maskNodeInitCallback:z?R:null,targetNodeInitCallback:P});let h;G&&S===void 0&&(h=V(e,K),e.addEventListener("enter",g),a&&e.addEventListener("leave",E));function g(){let t=0;for(const i of x)$(i,t++);e.style.userSelect="",e.style.pointerEvents="",!a&&h&&(h.destroy(),e.removeEventListener("enter",g))}function E(){let t=0;for(const i of x)k(i,t++);e.style.userSelect="none",e.style.pointerEvents="none"}return{update(t){t.duration&&(s=t.duration),t.delay&&(r=t.delay),t.staggerDelay&&(o=t.staggerDelay),t.scale&&(f=t.scale),t.rotateX&&(n=t.rotateX),t.rotateY&&(d=t.rotateY),t.rotateZ&&(m=t.rotateZ),t.x&&(u=t.y),t.y&&(p=t.y),t.visible!==void 0&&(t.visible?g():E())},destroy(){h&&(h.destroy(),e.removeEventListener("enter",g),e.removeEventListener("leave",E))},masks:U,targets:x}}const I={mask:!0,maskPadding:".1em",y:"1.1em",opacity:0,staggerDelay:70,duration:1250,easing:"cubic-bezier(.2, 0, 0, 1)",granularity:"word"};H(L({},I),{y:"-1.1em"});export{I as a,w as r};
