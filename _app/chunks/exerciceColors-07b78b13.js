function c(t){return[1,2,3].map(n=>`--accent${n}: var(--${t}${n})`).join("; ")}export{c as g};
