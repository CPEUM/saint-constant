import{b as a}from"./paths-396f020f.js";async function e(s){const t=await fetch(a+s);if(t.ok)return t.json();throw Error(t.status+": "+t.statusText)}export{e as g};
