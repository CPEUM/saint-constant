import{a7 as m}from"./index-897d5eac.js";function $(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function l(t){const e=t-1;return e*e*e+1}function g(t){return t===1?t:1-Math.pow(2,-10*t)}function h(t,{delay:e=0,duration:s=400,easing:n=m}={}){const a=+getComputedStyle(t).opacity;return{delay:e,duration:s,easing:n,css:o=>`opacity: ${o*a}`}}function x(t,{delay:e=0,duration:s=400,easing:n=l,x:a=0,y:o=0,opacity:c=0}={}){const r=getComputedStyle(t),f=+r.opacity,p=r.transform==="none"?"":r.transform,u=f*(1-c);return{delay:e,duration:s,easing:n,css:(y,i)=>`
			transform: ${p} translate(${(1-y)*a}px, ${(1-y)*o}px);
			opacity: ${f-u*i}`}}function C(t,{delay:e=0,duration:s=400,easing:n=l,start:a=0,opacity:o=0}={}){const c=getComputedStyle(t),r=+c.opacity,f=c.transform==="none"?"":c.transform,p=1-a,u=r*(1-o);return{delay:e,duration:s,easing:n,css:(y,i)=>`
			transform: ${f} scale(${1-p*i});
			opacity: ${r-u*i}
		`}}function S(t,{delay:e=0,speed:s,duration:n,easing:a=$}={}){let o=t.getTotalLength();const c=getComputedStyle(t);return c.strokeLinecap!=="butt"&&(o+=parseInt(c.strokeWidth)),n===void 0?s===void 0?n=800:n=o/s:typeof n=="function"&&(n=n(o)),{delay:e,duration:n,easing:a,css:(r,f)=>`stroke-dasharray: ${r*o} ${f*o}`}}export{h as a,S as d,g as e,x as f,C as s};
