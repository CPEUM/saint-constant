var d=Object.defineProperty;var i=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var u=(r,t,e)=>t in r?d(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,n=(r,t)=>{for(var e in t||(t={}))v.call(t,e)&&u(r,e,t[e]);if(i)for(var e of i(t))f.call(t,e)&&u(r,e,t[e]);return r};const s=[],a={root:null,rootMargin:"-50% 0px -50%",threshold:0};function b(r,t){return r.root==t.root&&r.rootMargin==t.rootMargin&&r.thresholds==t.threshold}function l(r){const t=s.findIndex(o=>b(o,r));if(t>-1)return s[t];const e=new IntersectionObserver(o=>{o.forEach(c=>{const h=c.isIntersecting?"enter":"leave";c.target.dispatchEvent(new CustomEvent(h))})},r);return s.push(e),e}function x(r,t=a){const e=l(n(n({},a),t));return e.observe(r),{destroy(){e.unobserve(r)}}}export{x as i};