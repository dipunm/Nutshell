import{g as d,b as g}from"./navigation.76c92d44.js";const k=async()=>{const t=[c(window.location)];await d(window.location.toString(),{replaceState:!0,state:{...history.state,stack:t}})},c=t=>`${t.pathname}${t.search}${t.hash}`,m=()=>g(async t=>{if(t.type==="link"){if(t.to===null||t.to.url.protocol!==window.location.protocol||t.to.url.host!==window.location.host)return;t.cancel(),await l(t.to.url.toString())}});async function u(){var t,a;if(!Array.isArray((t=history.state)==null?void 0:t.stack)||((a=history.state)==null?void 0:a.stack.length)===0)throw new Error("History API not properly configured!");window.location.search!==""||window.location.hash!==""?await l(window.location.pathname):await l(window.location.pathname.replace(/\/[^/]+\/?$/,""))}async function l(t,a={}){var f,y;const r=new URL(t,window.location.href);if(r.protocol!==window.location.protocol||r.host!==window.location.host)throw new Error("Navigating away from site, cannot be performed by stackGo.");if(!Array.isArray((f=history.state)==null?void 0:f.stack)||((y=history.state)==null?void 0:y.stack.length)===0)throw new Error("History API not properly configured!");const{stack:e}=history.state,w=c(r);let o=e.findLastIndex(i=>w.startsWith(i));for(;!(o<0||!(new URL(e[o],window.location.href).search!==""));)o--;let n=0,s=!1;o===-1?(n=e.length-1,s=!0):(n=e.length-o-1,e[o]===w?s=!0:n===1&&(n=0,s=!0));const h=async()=>{const i=s?[...e.slice(0,o),c(r)]:[...e.slice(0,o+1),c(r)];await d(t,{...a??{},replaceState:s,state:{...history.state,...(a==null?void 0:a.state)??{},stack:i}})};if(n>0){const i=()=>{window.removeEventListener("popstate",i),h()};window.addEventListener("popstate",i),history.go(-n)}else await h()}export{u as a,m as c,k as i,l as s};
