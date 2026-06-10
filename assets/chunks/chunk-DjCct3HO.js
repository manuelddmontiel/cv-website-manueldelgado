import{r as d,j as c,R as x}from"./chunk-BR75Kv1E.js";const N=d.forwardRef((e,t)=>c.jsx("span",{...e,ref:t}));N.displayName="Span";var y=[16,32,48,64,96,128,256,384],f=[640,750,828,1080,1200,1920,2048,3840],h=[...y,...f],S=(e,t)=>{if(t){const s=/(^|\s)(1?\d?\d)vw/g,a=[];for(let n;n=s.exec(t);n)a.push(Number.parseInt(n[2],10));if(a.length){const n=Math.min(...a)*.01;return{widths:h.filter(l=>l>=f[0]*n),kind:"w"}}return{widths:h,kind:"w"}}if(e==null)return{widths:f,kind:"w"};const r=2;let i=h.findIndex(s=>s>=r*e);return i=i<0?h.length:i,{widths:h.slice(0,i+1),kind:"w"}},R=({src:e,width:t,quality:r,sizes:i,loader:s})=>{const{widths:a,kind:n}=S(t,i);return{sizes:!i&&n==="w"?"100vw":i,srcSet:a.map((l,o)=>`${s({src:e,quality:r,width:l})} ${n==="w"?l:o+1}${n}`).join(", "),src:s({src:e,quality:r,width:a[a.length-1]})}},w=e=>{if(typeof e=="number")return Math.round(e);if(typeof e=="string"){const t=Number.parseFloat(e);if(!Number.isNaN(t))return Math.round(t)}},I="(min-width: 1280px) 50vw, 100vw",z=80,b=e=>{try{return new URL(e),!0}catch{return!1}},E=e=>{const t=w(e.width),r=Math.max(Math.min(w(e.quality)??z,100),0);if(e.src!=null&&e.src!==""){if(e.src.startsWith("data:"))return{src:e.src};if(e.srcSet==null&&e.optimize){const s=e.sizes??(e.width==null?I:void 0);return R({src:e.src,width:t,quality:r,sizes:s,loader:e.loader})}const i={src:b(e.src)?e.src:e.loader({src:e.src,format:"raw"})};return e.srcSet!=null&&(i.srcSet=e.srcSet),e.sizes!=null&&(i.sizes=e.sizes),i}},g=d.forwardRef(({quality:e,loader:t,optimize:r=!0,loading:i="lazy",decoding:s="async",...a},n)=>{const l=E({src:a.src,srcSet:a.srcSet,sizes:a.sizes,width:a.width,quality:e,loader:t,optimize:r})??{src:L};return c.jsx("img",{alt:"",...a,...l,decoding:s,loading:i,ref:n})});g.displayName="Image";var L=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;const j=d.forwardRef(({loading:e="lazy",width:t,height:r,optimize:i=!0,decoding:s,$webstudio$canvasOnly$assetId:a,...n},l)=>{const o=String(n.src??""),{imageLoader:v,renderer:C}=d.useContext(x);let m=s,u=o;return C==="canvas"&&(e="eager",m="sync",u=a??o,t!==void 0&&r!==void 0&&Number.isNaN(t)&&Number.isNaN(r)&&(i=!1,t=void 0,r=void 0)),c.jsx(g,{loading:e,decoding:m,optimize:i,width:t,height:r,...n,loader:v,src:o,ref:l},u)});j.displayName="Image";const M=d.forwardRef(({children:e,...t},r)=>c.jsx("blockquote",{...t,ref:r,children:e}));M.displayName="Blockquote";const A="ul",k="ol",D=d.forwardRef(({ordered:e=!1,...t},r)=>d.createElement(e?k:A,{...t,ref:r}));D.displayName="List";const $=d.forwardRef(({children:e,...t},r)=>c.jsx("li",{...t,ref:r,children:e}));$.displayName="ListItem";const V="hr",U=d.forwardRef((e,t)=>d.createElement(V,{...e,ref:t}));U.displayName="Separator";const H=({innerRef:e,...t})=>c.jsx("code",{...t,style:{padding:20},ref:e,children:'Open the "Settings" panel to edit the code.'}),T=d.forwardRef(({code:e,children:t,...r},i)=>t===void 0&&e===void 0||String(e).trim().length===0?c.jsx(H,{innerRef:i,...r}):c.jsx("code",{...r,ref:i,children:e??t}));T.displayName="CodeText";export{M as c,D as d,$ as i,T as l,N as m,U as p,j as y};
