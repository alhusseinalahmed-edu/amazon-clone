import{S as f,i as m,s as u,e as o,t as v,c as _,a as c,h as p,d as n,b as g,g as y,J as d,j,Q as h}from"../chunks/vendor-ea2fd3bb.js";function x(a){let t,s,r;return{c(){t=o("div"),s=o("h1"),r=v(a[0]),this.h()},l(e){t=_(e,"DIV",{class:!0});var i=c(t);s=_(i,"H1",{});var l=c(s);r=p(l,a[0]),l.forEach(n),i.forEach(n),this.h()},h(){g(t,"class","error svelte-117jjaa")},m(e,i){y(e,t,i),d(t,s),d(s,r)},p(e,[i]){i&1&&j(r,e[0])},i:h,o:h,d(e){e&&n(t)}}}const $=({error:a,status:t})=>({props:{title:`${t}: ${a.message}`}});function E(a,t,s){let{title:r}=t;return a.$$set=e=>{"title"in e&&s(0,r=e.title)},[r]}class b extends f{constructor(t){super();m(this,t,E,x,u,{title:0})}}export{b as default,$ as load};
