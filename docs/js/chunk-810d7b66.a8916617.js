(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-810d7b66"],{"008c":function(t,n,e){"use strict";e.d(n,"a",(function(){return P})),e.d(n,"b",(function(){return M})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return D})),e.d(n,"e",(function(){return C})),e.d(n,"f",(function(){return I})),e.d(n,"g",(function(){return G}));var r=e("a9ab");const o=(t,n,e)=>[n,e],i=(t,n,e)=>[n,e,t[2]],u=(t,n,e)=>[n,e,t[2],t[3]];function a(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:t.extent?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function c({scale:t,translate:n},e){return Math.round((e-n[0])/t[0])}function l({scale:t,translate:n},e){return Math.round((n[1]-e)/t[1])}function s(t,n,e){const r=[];let o,i,u,a;for(let s=0;s<e.length;s++){const f=e[s];s>0?(u=c(t,f[0]),a=l(t,f[1]),u===o&&a===i||(r.push(n(f,u-o,a-i)),o=u,i=a)):(o=c(t,f[0]),i=l(t,f[1]),r.push(n(f,o,i)))}return r.length>0?r:null}function f(t,n,e,r){return s(t,e?r?u:i:r?i:o,n)}function m(t,n,e,r){const a=[],c=e?r?u:i:r?i:o;for(let o=0;o<n.length;o++){const e=s(t,c,n[o]);e&&e.length>=3&&a.push(e)}return a.length?a:null}function h(t,n,e,r){const a=[],c=e?r?u:i:r?i:o;for(let o=0;o<n.length;o++){const e=s(t,c,n[o]);e&&e.length>=2&&a.push(e)}return a.length?a:null}function g({scale:t,translate:n},e){return e*t[0]+n[0]}function d({scale:t,translate:n},e){return n[1]-e*t[1]}function p(t,n,e){const r=new Array(e.length);if(!e.length)return r;const[o,i]=t.scale;let u=g(t,e[0][0]),a=d(t,e[0][1]);r[0]=n(e[0],u,a);for(let c=1;c<e.length;c++){const t=e[c];u+=t[0]*o,a-=t[1]*i,r[c]=n(t,u,a)}return r}function y(t,n,e){const r=new Array(e.length);for(let o=0;o<e.length;o++)r[o]=p(t,n,e[o]);return r}function b(t,n,e,r){return p(t,e?r?u:i:r?i:o,n)}function w(t,n,e,r){return y(t,e?r?u:i:r?i:o,n)}function x(t,n,e,r){return y(t,e?r?u:i:r?i:o,n)}function O(t,n,e,r,o){return n.xmin=c(t,e.xmin),n.ymin=l(t,e.ymin),n.xmax=c(t,e.xmax),n.ymax=l(t,e.ymax),n!==e&&(r&&(n.zmin=e.zmin,n.zmax=e.zmax),o&&(n.mmin=e.mmin,n.mmax=e.mmax)),n}function v(t,n,e,r,o){return n.points=f(t,e.points,r,o),n}function M(t,n,e,r,o){return n.x=c(t,e.x),n.y=l(t,e.y),n!==e&&(r&&(n.z=e.z),o&&(n.m=e.m)),n}function j(t,n,e,r,o){const i=m(t,e.rings,r,o);return i?(n.rings=i,n):null}function z(t,n,e,r,o){const i=h(t,e.paths,r,o);return i?(n.paths=i,n):null}function P(t,n){return t&&n?Object(r["f"])(n)?M(t,{},n,!1,!1):Object(r["h"])(n)?z(t,{},n,!1,!1):Object(r["g"])(n)?j(t,{},n,!1,!1):Object(r["e"])(n)?v(t,{},n,!1,!1):Object(r["d"])(n)?O(t,{},n,!1,!1):null:null}function D(t,n,e,r,o){return n.points=b(t,e.points,r,o),n}function C(t,n,e,r,o){return n.x=g(t,e.x),n.y=d(t,e.y),n!==e&&(r&&(n.z=e.z),o&&(n.m=e.m)),n}function I(t,n,e,r,o){return n.rings=x(t,e.rings,r,o),n}function G(t,n,e,r,o){return n.paths=w(t,e.paths,r,o),n}},"89cb":function(t,n,e){"use strict";var r=e("e92d"),o=e("ce50"),i=e("008c");function u(t,n,e,o,i){const u=t.referencesGeometry()&&i?c(n,o,i):n,a=t.repurposeFeature(u);try{return t.evaluate({...e,$feature:a})}catch(l){return r["a"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",l),null}}const a=new Map;function c(t,n,e){const{transform:r,hasZ:o,hasM:i}=e;a.has(n)||a.set(n,l(n));const u=a.get(n)(t.geometry,r,o,i);return{...t,geometry:u}}function l(t){const n={};switch(t){case"esriGeometryPoint":return(t,e,r,o)=>Object(i["e"])(e,n,t,r,o);case"esriGeometryPolygon":return(t,e,r,o)=>Object(i["f"])(e,n,t,r,o);case"esriGeometryPolyline":return(t,e,r,o)=>Object(i["g"])(e,n,t,r,o);case"esriGeometryMultipoint":return(t,e,r,o)=>Object(i["d"])(e,n,t,r,o);default:return r["a"].getLogger("esri.views.2d.support.arcadeOnDemand").error(new o["a"]("mapview-arcade","Unable to handle geometryType: "+t)),t=>t}}n["a"]=u},fcb9:function(t,n,e){"use strict";e.r(n),e.d(n,"previewCIMSymbol",(function(){return c}));var r=e("a915"),o=e("d445"),i=e("6b49");const u=new i["CIMSymbolRasterizer"](null,!0),a=120;async function c(t,n={}){const{size:e,maxSize:i,node:c,opacity:l}=n,s=n.cimOptions||n,{feature:f,fieldMap:m,geometryType:h,style:g}=s,d=Object(o["c"])(t),p=Math.min(null!=e?e:d,null!=i?i:Object(r["i"])(a));p!==d&&(t=t.clone(),Object(o["e"])(t,p,{preserveOutlineWidth:!0}));let y=3;t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(y=1);const b=await u.rasterizeCIMSymbolAsync(t,f,m,h,{scaleFactor:y,style:g}),w=document.createElement("canvas");w.width=b.imageData.width,w.height=b.imageData.height,w.getContext("2d").putImageData(b.imageData,0,0);let x=w.width/y,O=w.height/y;if(null!=e&&(null==(null==n?void 0:n.scale)||(null==n?void 0:n.scale))){const t=x/O;x=t<=1?Math.ceil(p*t):p,O=t<=1?p:Math.ceil(p/t)}const v=new Image(x,O);return v.src=w.toDataURL(),null!=l&&(v.style.opacity=""+l),c&&c.appendChild(v),v}}}]);