import{D as a}from"./vendor-16750a59.js";const r=function(){const{subscribe:l,set:n,update:u}=a(!1);return{subscribe:l,set:n,toggle:()=>u(s=>!s)}}(),b=function(){const{subscribe:l,set:n,update:u}=a(null),s=150;let o;function e(t){o&&clearTimeout(o),o=setTimeout(t,s)}return{subscribe:l,set:t=>e(()=>n(t)),unset:t=>e(()=>u(c=>c===t?null:c)),toggle:t=>e(u(c=>c===t?null:t)),clear:()=>e(n(null))}}(),d=function(){const{subscribe:l,set:n}=a(null),u=150;let s;function o(e){s&&clearTimeout(s),s=setTimeout(e,u)}return{subscribe:l,set:e=>o(()=>n(e)),clear:()=>o(()=>n(null))}}();export{b as a,r as i,d as m};