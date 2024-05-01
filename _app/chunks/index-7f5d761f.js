import{ad as m,ae as _}from"./index-246e4404.js";function x(t){return 1-Math.sqrt(1-t*t)}function C(t){return Math.sqrt(1- --t*t)}function b(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function $(t){const s=t-1;return s*s*s+1}function M(t){return t===1?t:1-Math.pow(2,-10*t)}function O(t,{delay:s=0,duration:o=400,easing:n=_}={}){const r=+getComputedStyle(t).opacity;return{delay:s,duration:o,easing:n,css:e=>`opacity: ${e*r}`}}function S(t,{delay:s=0,duration:o=400,easing:n=$,x:r=0,y:e=0,opacity:c=0}={}){const a=getComputedStyle(t),f=+a.opacity,u=a.transform==="none"?"":a.transform,y=f*(1-c),[p,i]=m(r),[d,g]=m(e);return{delay:s,duration:o,easing:n,css:(l,h)=>`
			transform: ${u} translate(${(1-l)*p}${i}, ${(1-l)*d}${g});
			opacity: ${f-y*h}`}}function w(t,{delay:s=0,duration:o=400,easing:n=$,start:r=0,opacity:e=0}={}){const c=getComputedStyle(t),a=+c.opacity,f=c.transform==="none"?"":c.transform,u=1-r,y=a*(1-e);return{delay:s,duration:o,easing:n,css:(p,i)=>`
			transform: ${f} scale(${1-u*i});
			opacity: ${a-y*i}
		`}}function I(t,{delay:s=0,speed:o,duration:n,easing:r=b}={}){let e=t.getTotalLength();const c=getComputedStyle(t);return c.strokeLinecap!=="butt"&&(e+=parseInt(c.strokeWidth)),n===void 0?o===void 0?n=800:n=e/o:typeof n=="function"&&(n=n(e)),{delay:s,duration:n,easing:r,css:(a,f)=>`
			stroke-dasharray: ${e};
			stroke-dashoffset: ${f*e};
		`}}export{O as a,x as b,C as c,I as d,M as e,S as f,w as s};
