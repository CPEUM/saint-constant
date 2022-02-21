var P=Object.defineProperty,q=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var L=(e,r,s)=>r in e?P(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,M=(e,r)=>{for(var s in r||(r={}))H.call(r,s)&&L(e,s,r[s]);if(D)for(var s of D(r))W.call(r,s)&&L(e,s,r[s]);return e},R=(e,r)=>q(e,z(r));import{i as Y}from"./intersect-2f4a341d.js";function Z(e,{granularity:r="char",maskNodeInitCallback:s=null,targetNodeInitCallback:v=null}={}){const u="text-split",T="text-target-node",y="text-mask-node",o=[],f=[];function d(n){n.style.position="relative",n.style.display="inline-block",n.style.transformStyle="preserve-3d"}function p(n){Array.from(n.childNodes).forEach(l=>{if(l instanceof HTMLElement)d(l),p(l);else if(l.nodeType===Node.TEXT_NODE){const m=[];l.textContent.split(/(\s)/).forEach(c=>{if(!!c)if(c===" ")m.push(document.createTextNode(" "));else{const a=document.createElement("span");d(a),a.style.whiteSpace="nowrap",a.setAttribute(y,""),f.push(a),s&&s(a,f.length);for(const h of c.split(r==="word"?" ":"")){const i=document.createElement("span");i.textContent=h,i.style.transformStyle="preserve-3d",i.style.position="relative",i.style.display="inline-block",i.setAttribute(T,""),a.appendChild(i),o.push(i),v&&v(i,o.length)}m.push(a)}}),l.replaceWith(...m)}})}return e.hasAttribute(u)?(o.push(...Array.from(e.querySelectorAll(`[${T}]`))),f.push(...Array.from(e.querySelectorAll(`[${y}]`)))):(e.setAttribute(u,""),e.normalize(),p(e)),{targets:o,masks:f}}const G=/px|%|em|vh|vw|rem/;function K(e){return typeof e=="number"?null:e.match(G)[0]||null}function Q(e,{duration:r=450,delay:s=0,stagger:v=!0,staggerDelay:u=25,opacity:T=0,x:y=0,y:o=0,scale:f=1,rotateX:d=0,rotateY:p=0,rotateZ:n=0,transformOrigin:l="0% 90%",perspective:m=1e3,hideOnLeave:c=!1,mask:a=!1,maskPadding:h="0.1em",easing:i="cubic-bezier(0.7, 0, 0.2, 1)",granularity:X="char",useIntersect:_=!0,intersectOptions:B={rootMargin:"-200px 0px -200px"},visible:N=void 0}={}){e.style.perspective=m+"px",e.style.perspectiveOrigin="center";const b=parseFloat(h+""),S=K(h)||"px";function C(t,$){N?U(t):k(t),t.style.transformOrigin=l,t.style.transitionDelay=s+(v?u*$:0)+"ms",t.style.transitionDuration=r+"ms",t.style.transitionTimingFunction=i,t.style.transitionProperty="opacity, transform, top, left"}function F(t,$){t.style.overflow="hidden",t.style.padding=b+S,t.style.margin=-1*b+S}function k(t){t.style.opacity=T+"",t.style.transform=`rotateX(${d}deg) rotateY(${p}deg) rotateZ(${n}deg) scale(${f})`,t.style.top=o+(isNaN(Number(o))?"":"px"),t.style.left=y+(isNaN(Number(y))?"":"px")}function U(t){t.style.opacity="1",t.style.transform="initial",t.style.top="0",t.style.left="0"}const{targets:E,masks:I}=Z(e,{granularity:X,maskNodeInitCallback:a?F:null,targetNodeInitCallback:C});let g;_&&N===void 0&&(g=Y(e,B),e.addEventListener("enter",x),c&&e.addEventListener("leave",A));function x(){for(const t of E)U(t);e.style.userSelect="",e.style.pointerEvents="",!c&&g&&(g.destroy(),e.removeEventListener("enter",x))}function A(){for(const t of E)k(t);e.style.userSelect="none",e.style.pointerEvents="none"}return{update(t){t.duration&&(r=t.duration),t.delay&&(s=t.delay),t.staggerDelay&&(u=t.staggerDelay),t.scale&&(f=t.scale),t.rotateX&&(d=t.rotateX),t.rotateY&&(p=t.rotateY),t.rotateZ&&(n=t.rotateZ),t.x&&(y=t.y),t.y&&(o=t.y),t.visible!==void 0&&(t.visible?x():A())},destroy(){g&&(g.destroy(),e.removeEventListener("enter",x),e.removeEventListener("leave",A))},masks:I,targets:E}}const V={mask:!0,maskPadding:"0em",y:"0.75em",opacity:0,rotateX:60,transformOrigin:"0% 80%",staggerDelay:15,duration:750};R(M({},V),{y:"-1.1em"});export{V as a,Q as r};