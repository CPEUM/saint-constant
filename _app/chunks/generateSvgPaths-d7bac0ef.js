import{b as r}from"./paths-4b3c6e7e.js";const T=[{title:"Accueil",path:`${r}/`},{title:"\xC9quipe & partenaires",path:`${r}/equipe-partenaires`},{title:"Exercices d\u2019id\xE9ation",path:`${r}/ideation`,exercices:!0},{title:"Principes directeurs",path:`${r}/principes-directeurs`},{title:"Conclusion",path:`${r}/conclusion`}],Y=[{title:"Agroparc",path:`${r}/ideation/agroparc`,heading:"L\u2019agroparc de Saint-Constant",description:"Revitaliser le noyau villageois par le d\xE9veloppement d\u2019un p\xF4le d\u2019interconnexion entre le milieu urbain et rural",key:"agroparc"},{title:"Promenades citoyennes",path:`${r}/ideation/promenades-citoyennes`,heading:"Les promenades citoyennes de Saint-Constant",description:"Am\xE9nager des parcours de mobilit\xE9 active afin de faire la promotion de la qualit\xE9 du cadre de vie et des milieux naturels de Saint&#8209;Constant",key:"promenades"},{title:"P\xF4les de mixit\xE9 & de densification",path:`${r}/ideation/poles-mixite-densification`,heading:"Les p\xF4les de mixit\xE9 et de densification",description:"Concevoir des aires de densification du territoire qui s\u2019int\xE8grent au paysage actuel",key:"poles"}],h="rgb(248, 250, 255)",u="rgb(240, 242, 254)",f="rgb(230, 235, 250)",m="rgb(074, 076, 082)",b="rgb(060, 062, 068)",x="rgb(046, 048, 052)",$="rgb(248, 230, 120)",y="rgb(234, 206, 082)",C="rgb(220, 185, 080)",k="rgb(250, 204, 178)",E="rgb(240, 165, 130)",M="rgb(235, 134, 115)",Z="rgb(180, 190, 245)",A="rgb(146, 159, 243)",L="rgb(118, 111, 230)",q="rgb(164, 250, 172)",P="rgb(124, 218, 127)",S="rgb(059, 181, 108)";var F={light1:h,light2:u,light3:f,dark1:m,dark2:b,dark3:x,accent1:$,accent2:y,accent3:C,agroparc1:k,agroparc2:E,agroparc3:M,poles1:Z,poles2:A,poles3:L,promenades1:q,promenades2:P,promenades3:S};function j(n=[1,2,3],o=["accent","promenades","poles","agroparc"]){Array.isArray(n)||(n=[n]);const i=`${o[Math.floor(Math.random()*o.length)]}${n[Math.floor(Math.random()*n.length)]}`;return F[i]}function z(n,{direction:o="down",padding:i=500,viewBox:t={width:1e3,height:1e3},relative:s=!1}={}){const e={x:s?1/t.width:1,y:s?1/t.height:1};function a(l){const d=Math.round(Math.random()*((l==="x"?t.width:t.height)-i));return o==="down"?d+i:d}const c=o==="down"?-100*e.y:t.height+100*e.y,p=`-${100*e.x}, ${c}`,g=`${(t.width+100)*e.x}, ${c}`;return[...Array(n)].map(()=>`M ${p} 		L -${100*e.x},${a("y")*e.y} 		C ${Math.min(a("x"),t.width/2)*e.x},${a("y")*e.y} 		${Math.max(a("x"),t.width/2)*e.x},${a("y")*e.y} 		${(t.width+100)*e.x},${a("y")*e.y} 		L ${g} Z`)}export{j as a,Y as e,z as g,T as r};
