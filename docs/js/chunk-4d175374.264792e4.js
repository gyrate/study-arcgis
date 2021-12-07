(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d175374"],{"0c9a":function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return f}));r("c120");var i=r("b2b2"),n=r("ce6d"),s=r("971e"),a=r("4261"),o=r("901f"),u=r("8483"),c=r("f209");function d(e,t){return e<<16|t}function l(e){return(4294901760&e)>>>16}function h(e){return 65535&e}const f={getObjectId:e=>e.getObjectId(),getAttributes:e=>e.readAttributes(),getAttribute:(e,t)=>e.readAttribute(t),cloneWithGeometry:(e,t)=>e,getGeometry:e=>e.readHydratedGeometry(),getCentroid:(e,t)=>e.readCentroid()};class _ extends u["a"]{constructor(e,t,r){super(e,t),this.featureAdapter=f,this.events=new n["a"],this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new s["a"](50),this._index=Object(o["a"])(9,e=>({minX:this._storage.getXMin(e),minY:this._storage.getYMin(e),maxX:this._storage.getXMax(e),maxY:this._storage.getYMax(e)})),this._storage=t,this.mode=r}get storage(){return this._storage}get storeStatistics(){return{featureCount:0,vertexCount:0}}hasInstance(e){return this._featureSetsByInstance.has(e)}onTileData(e,t){if(Object(i["j"])(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const r=t.addOrUpdate.getCursor();for(;r.next();){const t=r.getDisplayId();this.setComputedAttributes(this._storage,r,t,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);const r=t.addOrUpdate.getCursor();for(;r.next();)this._insertFeature(r,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}search(e){this._rebuildIndex();const t=e.id,r=this._indexSearchCache.find(e=>e.tileId===t);if(Object(i["k"])(r))return r.readers;const n=new Map,s=this._searchIndex(e.bounds),a=[];for(const i of s){const e=this._storage.getInstanceId(i),t=l(e),r=h(e);n.has(t)||n.set(t,[]),n.get(t).push(r)}return n.forEach((e,t)=>{const r=this._featureSetsByInstance.get(t);a.push(c["a"].from(r,e))}),this._indexSearchCache.enqueue({tileId:t,readers:a}),a}insert(e){const t=e.getCursor(),r=this._storage;for(;t.next();){var i;const e=d(t.instance,t.getIndex()),n=t.getObjectId(),s=null!=(i=this._objectIdToDisplayId.get(n))?i:this._storage.createDisplayId();t.setDisplayId(s),r.setInstanceId(s,e),this._objectIdToDisplayId.set(n,s)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}remove(e){const t=this._objectIdToDisplayId.get(e);if(!t)return;const r=this._storage.getInstanceId(t),i=h(r),n=l(r),s=this._featureSetsByInstance.get(n);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),s.removeAtIndex(i),s.isEmpty&&this._featureSetsByInstance.delete(n),this._spatialIndexInvalid=!0}forEach(e){this._objectIdToDisplayId.forEach(t=>{const r=this._storage.getInstanceId(t),i=this._lookupFeature(r);e(i)})}forEachUnsafe(e){this._objectIdToDisplayId.forEach(t=>{const r=this._storage.getInstanceId(t),i=l(r),n=h(r),s=this._getFeatureSet(i);s.setIndex(n),e(s)})}forEachInBounds(e,t){const r=this._searchIndex(e);for(const n of r){const e=this.lookupFeatureByDisplayId(n,this._storage);t(Object(i["t"])(e))}}forEachBounds(e,t,r){this._rebuildIndex();const i=[0,0,0,0];for(const n of e){if(!n.readGeometry())continue;const e=n.getDisplayId();i[0]=this._storage.getXMin(e),i[1]=this._storage.getYMin(e),i[2]=this._storage.getXMax(e),i[3]=this._storage.getYMax(e),t(Object(a["s"])(r,i))}}sweepFeatures(e,t,r){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach((i,n)=>{e.has(i)||(t.releaseDisplayId(i),r&&r.unsetAttributeData(i),this._objectIdToDisplayId.delete(n))}),this.events.emit("changed")}sweepFeatureSets(e){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach((t,r)=>{e.has(r)||this._featureSetsByInstance.delete(r)})}lookupObjectId(e,t){const r=this.lookupFeatureByDisplayId(e,t);return Object(i["j"])(r)?null:r.getObjectId()}lookupDisplayId(e){return this._objectIdToDisplayId.get(e)}lookupFeatureByDisplayId(e,t){const r=t.getInstanceId(e);return this._lookupFeature(r)}lookupByDisplayIdUnsafe(e){const t=this._storage.getInstanceId(e),r=l(t),i=h(t),n=this._getFeatureSet(r);return n?(n.setIndex(i),n):null}_insertFeature(e,t){const r=this._storage,i=e.getObjectId(),n=d(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());let s=this._objectIdToDisplayId.get(i);s||(s=r.createDisplayId(),this._objectIdToDisplayId.set(i,s),this._spatialIndexInvalid=!0),e.setDisplayId(s),r.setInstanceId(s,n),this.setComputedAttributes(r,e,s,t)}_searchIndex(e){this._rebuildIndex();const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const e=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach(t=>{const r=t.getCursor();for(;r.next();){const t=r.getDisplayId();this._storage.setBounds(t,r)&&e.push(t)}}):this._objectIdToDisplayId.forEach(t=>{const r=this._storage.getInstanceId(t);this._storage.setBounds(t,this._lookupFeature(r))&&e.push(t)}),this._index.clear(),this._index.load(e),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(e){const t=l(e),r=h(e),i=this._getFeatureSet(t);if(!i)return null;const n=i.getCursor();return n.setIndex(r),n}_getFeatureSet(e){return this._featureSetsByInstance.get(e)}}},"1eef":function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return I}));var i=r("b2b2"),n=r("fa8a"),s=r("7f83"),a=r("f8d4"),o=r("a9ab"),u=r("8048"),c=r("a8d5"),d=r("8152"),l=r("6655"),h=(r("d97e"),r("1ec3"));const f=new n["a"]({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),_=Object.freeze({}),p=new d["a"],m=new d["a"],g=new d["a"],b={esriGeometryPoint:l["m"],esriGeometryPolyline:l["o"],esriGeometryPolygon:l["n"],esriGeometryMultipoint:l["l"]};function I(e,t,r,i=e.hasZ,n=e.hasM){const s=e.hasZ&&i,a=e.hasM&&n;if(r){const o=Object(l["u"])(g,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,n);return Object(l["m"])(o,s,a)}return Object(l["m"])(t,s,a)}function y(e,t,r,i,n,s,a=t,o=r){const u=t&&a,c=r&&o,d=i?"coords"in i?i:i.geometry:null;if(!d)return null;if(n){let i=Object(l["q"])(m,d,t,r,e,n,a,o);return s&&(i=Object(l["u"])(g,i,u,c,e,s)),b[e](i,u,c)}if(s){const i=Object(l["u"])(g,d,t,r,e,s,a,o);return b[e](i,u,c)}return Object(l["x"])(p,d,t,r,a,o),b[e](p,u,c)}async function x(e,t,r){const{outFields:i,orderByFields:n,groupByFieldsForStatistics:s,outStatistics:a}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),S(e,t,r)}async function S(e,t,r){if(!e)return null;let{where:n}=e;if(e.where=n=n&&n.trim(),(!n||/^1 *= *1$/.test(n)||t&&t===n)&&(e.where=null),!e.geometry)return e;let s=await j(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;s=Object(a["a"])(s),s.spatialReference=t}e.geometry=s,await Object(h["a"])(s.spatialReference,r);const u=(await Object(c["a"])(Object(o["a"])(s)))[0];if(Object(i["j"])(u))throw _;const d=u.toJSON(),l=await Object(h["b"])(d,d.spatialReference,r);if(!l)throw _;return l.spatialReference=r,e.geometry=l,e}async function j(e){const{geometry:t,distance:r,units:i}=e;if(null==r||"vertexAttributes"in t)return t;const n=t.spatialReference,a=i?f.fromJSON(i):Object(u["g"])(n),o=n&&(Object(s["g"])(n)||Object(s["n"])(n))?t:await Object(h["a"])(n,s["a"]).then(()=>Object(h["b"])(t,s["a"]));return(await O())(o.spatialReference,o,r,a)}async function O(){return(await Promise.all([r.e("chunk-2d22cf8c"),r.e("chunk-180660b2")]).then(r.bind(null,"00ac"))).geodesicBuffer}function w(e){return e&&F in e?JSON.parse(JSON.stringify(e,M)):e}const F="_geVersion",M=(e,t)=>e!==F?t:void 0},"2a5b":function(e,t,r){"use strict";r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return O}));var i=r("ce50"),n=r("7f83"),s=r("2172"),a=r("3cd6"),o=r("a9ab"),u=r("8152"),c=r("6655");function d(e,t){return e?t?4:3:t?3:2}function l(e,t,r,i){return f(e,t,r,i.coords[0],i.coords[1])}function h(e,t,r,i,n,s){const a=d(n,s),{coords:o,lengths:u}=i;if(!u)return!1;for(let c=0,d=0;c<u.length;c++,d+=a)if(!f(e,t,r,o[d],o[d+1]))return!1;return!0}function f(e,t,r,i,n){if(!e)return!1;const s=d(t,r),{coords:a,lengths:o}=e;let u=!1,c=0;for(const d of o)u=_(u,a,s,c,d,i,n),c+=d*s;return u}function _(e,t,r,i,n,s,a){let o=e,u=i;for(let c=i,d=i+n*r;c<d;c+=r){u=c+r,u===d&&(u=i);const e=t[c],n=t[c+1],l=t[u],h=t[u+1];(n<a&&h>=a||h<a&&n>=a)&&e+(a-n)/(h-n)*(l-e)<s&&(o=!o)}return o}var p=r("1ec3"),m=r("1eef");const g="feature-store:unsupported-query",b={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},I={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function y(e){return!0===I.spatialRelationship[e]}function x(e){return!0===I.queryGeometry[Object(o["c"])(e)]}function S(e){return!0===I.layerGeometry[e]}function j(){return Promise.all([r.e("chunk-2d22cf8c"),r.e("chunk-180660b2")]).then(r.bind(null,"00ac"))}function O(e,t,r,i,n){if(Object(o["g"])(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=Object(c["g"])(new u["a"],t,!1,!1);return Promise.resolve(t=>l(e,!1,!1,t))}if(Object(o["g"])(t)&&"esriGeometryMultipoint"===r){const r=Object(c["g"])(new u["a"],t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve(e=>h(r,!1,!1,e,i,n))}if(Object(o["d"])(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve(e=>Object(s["e"])(t,Object(m["c"])(r,i,n,e)));if(Object(o["d"])(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return Promise.resolve(e=>Object(s["d"])(t,Object(m["c"])(r,i,n,e)));if(Object(o["d"])(t)&&"esriSpatialRelIntersects"===e){const e=Object(a["b"])(r);return Promise.resolve(s=>e(t,Object(m["c"])(r,i,n,s)))}return j().then(s=>{const a=s[b[e]].bind(null,t.spatialReference,t);return e=>a(Object(m["c"])(r,i,n,e))})}async function w(e,t,r){const{spatialRel:s,geometry:a}=e;if(a){if(!y(s))throw new i["a"](g,"Unsupported query spatial relationship",{query:e});if(Object(n["j"])(a.spatialReference)&&Object(n["j"])(r)){if(!x(a))throw new i["a"](g,"Unsupported query geometry type",{query:e});if(!S(t))throw new i["a"](g,"Unsupported layer geometry type",{query:e});if(e.outSR)return Object(p["a"])(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function F(e){if(Object(o["d"])(e))return!0;if(Object(o["g"])(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},4261:function(e,t,r){"use strict";r.d(t,"a",(function(){return P})),r.d(t,"b",(function(){return z})),r.d(t,"c",(function(){return U})),r.d(t,"d",(function(){return _})),r.d(t,"e",(function(){return I})),r.d(t,"f",(function(){return j})),r.d(t,"g",(function(){return S})),r.d(t,"h",(function(){return a})),r.d(t,"i",(function(){return m})),r.d(t,"j",(function(){return b})),r.d(t,"k",(function(){return C})),r.d(t,"l",(function(){return B})),r.d(t,"m",(function(){return u})),r.d(t,"n",(function(){return l})),r.d(t,"o",(function(){return f})),r.d(t,"p",(function(){return h})),r.d(t,"q",(function(){return c})),r.d(t,"r",(function(){return d})),r.d(t,"s",(function(){return E})),r.d(t,"t",(function(){return o})),r.d(t,"u",(function(){return v})),r.d(t,"v",(function(){return g})),r.d(t,"w",(function(){return O})),r.d(t,"x",(function(){return w})),r.d(t,"y",(function(){return D})),r.d(t,"z",(function(){return x})),r.d(t,"A",(function(){return F})),r.d(t,"B",(function(){return M})),r.d(t,"C",(function(){return T})),r.d(t,"D",(function(){return R})),r.d(t,"E",(function(){return A})),r.d(t,"F",(function(){return y})),r.d(t,"G",(function(){return G})),r.d(t,"H",(function(){return p})),r.d(t,"I",(function(){return k}));var i=r("b2b2"),n=(r("3af1"),r("9180"));function s(e){return e}function a(e=U){return s([e[0],e[1],e[2],e[3],e[4],e[5]])}function o(e,t,r,i,n,s,o=a()){return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o[4]=n,o[5]=s,o}function u(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function c(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function d(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function l(e,t,r=0,i=t.length/3){let n=e[0],s=e[1],a=e[2],o=e[3],u=e[4],c=e[5];for(let d=0;d<i;d++)n=Math.min(n,t[r+3*d]),s=Math.min(s,t[r+3*d+1]),a=Math.min(a,t[r+3*d+2]),o=Math.max(o,t[r+3*d]),u=Math.max(u,t[r+3*d+1]),c=Math.max(c,t[r+3*d+2]);e[0]=n,e[1]=s,e[2]=a,e[3]=o,e[4]=u,e[5]=c}function h(e,t,r,i){e[0]=Math.min(e[0],e[0]+t),e[3]=Math.max(e[3],e[3]+t),e[1]=Math.min(e[1],e[1]+r),e[4]=Math.max(e[4],e[4]+r),e[2]=Math.min(e[2],e[2]+i),e[5]=Math.max(e[5],e[5]+i)}function f(e,t,r){const i=t.length;let n=e[0],s=e[1],a=e[2],o=e[3],u=e[4],c=e[5];if(r)for(let d=0;d<i;d++){const e=t[d];n=Math.min(n,e[0]),s=Math.min(s,e[1]),a=Math.min(a,e[2]),o=Math.max(o,e[0]),u=Math.max(u,e[1]),c=Math.max(c,e[2])}else for(let d=0;d<i;d++){const e=t[d];n=Math.min(n,e[0]),s=Math.min(s,e[1]),o=Math.max(o,e[0]),u=Math.max(u,e[1])}e[0]=n,e[1]=s,e[2]=a,e[3]=o,e[4]=u,e[5]=c}function _(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1;return!0}function p(e){return e[0]>=e[3]?0:e[3]-e[0]}function m(e){return e[1]>=e[4]?0:e[4]-e[1]}function g(e){return e[2]>=e[5]?0:e[5]-e[2]}function b(e){const t=p(e),r=g(e),i=m(e);return Math.sqrt(t*t+r*r+i*i)}function I(e,t=[0,0,0]){return t[0]=e[0]+p(e)/2,t[1]=e[1]+m(e)/2,t[2]=e[2]+g(e)/2,t}function y(e,t=[0,0,0]){return t[0]=p(e),t[1]=m(e),t[2]=g(e),t}function x(e){return Math.max(p(e),g(e),m(e))}function S(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function j(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]}function O(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}function w(e,t){return!!Object(i["j"])(t)||O(e,t)}function F(e,t,r,i,n=e){return n[0]=e[0]+t,n[1]=e[1]+r,n[2]=e[2]+i,n[3]=e[3]+t,n[4]=e[4]+r,n[5]=e[5]+i,n}function M(e,t,r=e){const i=e[0]+p(e)/2,n=e[1]+m(e)/2,s=e[2]+g(e)/2;return r[0]=i+(e[0]-i)*t,r[1]=n+(e[1]-n)*t,r[2]=s+(e[2]-s)*t,r[3]=i+(e[3]-i)*t,r[4]=n+(e[4]-n)*t,r[5]=s+(e[5]-s)*t,r}function v(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function A(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function R(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function T(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function C(e){return e?T(e,P):a(P)}function G(e,t){return t||(t=Object(n["l"])()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function E(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function N(e){return 6===e.length}function D(e){return 0===p(e)&&0===m(e)&&0===g(e)}function B(e,t,r){if(Object(i["j"])(e)||Object(i["j"])(t))return e===t;if(!N(e)||!N(t))return!1;if(r){for(let i=0;i<e.length;i++)if(!r(e[i],t[i]))return!1}else for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}function k(e,t,r,i,n,s){return o(e,t,r,i,n,s,q)}const z=s([-1/0,-1/0,-1/0,1/0,1/0,1/0]),P=s([1/0,1/0,1/0,-1/0,-1/0,-1/0]),U=s([0,0,0,0,0,0]),q=a()},8483:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var i=r("c120"),n=r("b2b2"),s=r("82fa"),a=r("0f1c"),o=r("e92d");function u(e,t,r){e.referencesGeometry();const i=t.readArcadeFeature();try{return e.evaluate({...r,$feature:i})}catch(n){return o["a"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",n),null}}var c=u;const d=r.e("chunk-2d222178").then(r.bind(null,"ccac"));class l{constructor(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:t.getBitset(t.createBitset())}}invalidate(){this._bitsets.computed.clear()}async updateSchema(e,t){const r=Object(a["a"])(this._schema,t);if(this._schema=t,!t||Object(n["j"])(r)||!Object(a["b"])(r,"attributes"))return;Object(i["a"])("esri-2d-update-debug")&&console.debug("Applying Update - Store:",r),this._bitsets.computed.clear(),e.targets[t.name]=!0;const s=t.attributes,o=[],u=[];for(const i in s){const e=s[i];switch(e.type){case"field":break;case"expression":o.push(this._createArcadeComputedField(e));break;case"label-expression":o.push(this._createLabelArcadeComputedField(e));break;case"statistic":u.push(e)}}this._computedFields=await Promise.all(o),this._canCacheExpressionValue=!this._computedFields.some(e=>"expression"===e.type&&e.expression.referencesScale()),this._statisticFields=u}setComputedAttributes(e,t,r,i){const n=this._bitsets.computed;if(!this._canCacheExpressionValue||!n.has(r)){n.set(r);for(const n of this._computedFields){const s=this._evaluateField(t,n,i);switch(n.resultType){case"numeric":e.setComputedNumericAtIndex(r,n.fieldIndex,s);break;case"string":e.setComputedStringAtIndex(r,n.fieldIndex,s)}}}}async _createArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex;return{...e,expression:await Object(s["d"])(e.valueExpression,t,r)}}async _createLabelArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fields,{createLabelFunction:i}=await d,n=await i(e.label,r,t);return{...e,builder:n}}_evaluateField(e,t,r){switch(t.type){case"label-expression":{const r=e.readArcadeFeature();return t.builder.evaluate(r)||""}case"expression":{const{expression:i}=t;return c(i,e,{$view:{scale:r}})}}}}},"971e":function(e,t,r){"use strict";var i=r("b2b2");class n{constructor(e=Number.POSITIVE_INFINITY){this.size=0,this._start=0,this.maxSize=e,this._buffer=isFinite(e)?new Array(e):[]}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=e:this._buffer[this._start+this.size++]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if(Object(i["k"])(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;Object(i["k"])(t);)e&&e(t),t=this.dequeue()}}t["a"]=n},abb8:function(e,t,r){"use strict";function i(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:n}=e;let s=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&n)t.forEach(e=>{const t=r.getAttribute(e,i),o=r.getAttribute(e,n);null==t||isNaN(t)||(s=Math.min(s,t)),null==o||isNaN(o)||(a=Math.max(a,o))});else{const e=i||n;t.forEach(t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(s=Math.min(s,i),a=Math.max(a,i))})}return{start:s,end:a}}function n(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:n}=e;if(!i&&!n)return null;const{start:u,end:c}=t;return null===u&&null===c?null:void 0===u&&void 0===c?o():i&&n?s(r,i,n,u,c):a(r,i||n,u,c)}function s(e,t,r,i,n){return null!=i&&null!=n?s=>{const a=e.getAttribute(s,t),o=e.getAttribute(s,r);return(null==a||a<=n)&&(null==o||o>=i)}:null!=i?t=>{const n=e.getAttribute(t,r);return null==n||n>=i}:null!=n?r=>{const i=e.getAttribute(r,t);return null==i||i<=n}:void 0}function a(e,t,r,i){return null!=r&&null!=i&&r===i?i=>e.getAttribute(i,t)===r:null!=r&&null!=i?n=>{const s=e.getAttribute(n,t);return s>=r&&s<=i}:null!=r?i=>e.getAttribute(i,t)>=r:null!=i?r=>e.getAttribute(r,t)<=i:void 0}function o(){return()=>!1}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}))},eb83:function(e,t,r){"use strict";r.r(t);var i=r("b2b2"),n=r("e92d"),s=r("ce50"),a=r("28b1"),o=r("9180"),u=r("c64f"),c=r("1eef"),d=r("2a5b"),l=r("abb8"),h=r("0c9a");const f=n["a"].getLogger("esri.views.2d.layers.features.support.whereUtils"),_={getAttribute:(e,t)=>e.field(t)};async function p(e,t){const i=await r.e("chunk-2d0d03a7").then(r.bind(null,"66a2"));try{const r=i.WhereClause.create(e,t);if(!r.isStandardized){const e=new s["a"]("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);f.error(e)}return e=>{const t=e.readArcadeFeature();return r.testFeature(t,_)}}catch(n){return f.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}const m=n["a"].getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),g=1,b=2;class I{constructor(e){this._geometryBounds=Object(o["l"])(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,g)}setTrue(e){const t=[],r=[],i=new Set(e);return this._idToVisibility.forEach((e,n)=>{const s=!!(this._idToVisibility.get(n)&g),a=i.has(n);!s&&a?t.push(n):s&&!a&&r.push(n),this._idToVisibility.set(n,a?g|b:0)}),{show:t,hide:r}}createQuery(){const{geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:n}=this;return u["a"].fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:n})}async update(e,t){this._hash=JSON.stringify(e);const r=await Object(c["e"])(e,null,t);await Promise.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await p(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,r=e.spatialRel||"esriSpatialRelIntersects",i=await Object(d["c"])(r,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);Object(a["a"])(this._geometryBounds,t),this._spatialQueryOperator=i,this.geometry=t,this.spatialRel=r}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(l["b"])(this._serviceInfo.timeInfo,e.timeExtent,h["b"]);else{const t=new s["a"]("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!Object(i["k"])(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,r)=>{t&g||(this._idToVisibility.set(r,g),e.push(r))}),e}}t["default"]=I},f209:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r("f0d0");class n extends i["a"]{constructor(e,t){super(i["a"].createInstance()),this._currentIndex=-1,this._reader=e,this._indices=t}static from(e,t){return new n(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getApproximateSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new n(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._passesFilter()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this._reader.setComputedNumericAtIndex(t,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,t){return this._reader.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,t){this._reader.setComputedNumericAtIndex(e,t)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,t){return this._reader.setComputedStringAtIndex(e,t)}transform(e,t,r,i){const n=this.copy();return n._reader=this._reader.transform(e,t,r,i),n}extent(e,t,r,i){const n=this.copy();return n._reader=this._reader.extent(e,t,r,i),n}hasFilter(){return this._reader.hasFilter()}readAttribute(e,t=!1){return this._reader.readAttribute(e,t)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,t){return this._reader.setField(e,t)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrate(){return this._reader.getXHydrate()}getYHydrate(){return this._reader.getYHydrate()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_passesFilter(){return this._reader._passesFilter()}_readAttribute(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}}}]);