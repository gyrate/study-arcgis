(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70b2ed33"],{"046b":function(e,t,r){"use strict";r.d(t,"a",(function(){return M})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return d})),r.d(t,"e",(function(){return O}));var n=r("7ffa"),i=r("1325"),o=r("e041"),a=r("5996"),s=r("28b1"),l=r("4856"),u=r("f7be"),c=r("2eab"),b=r("f976"),f=r("f29a"),y=r("4261");const h={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const t=e.folders||[],r=t.slice(),i=new Map,o=new Map,a=new Map,s=new Map,l=new Map,u={esriGeometryPoint:o,esriGeometryPolyline:a,esriGeometryPolygon:s};(e.featureCollection&&e.featureCollection.layers||[]).forEach(e=>{const t=Object(n["a"])(e);t.featureSet.features=[];const r=e.featureSet.geometryType;i.set(r,t);const l=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?m(o,l,e.featureSet.features):"esriGeometryPolyline"===r?m(a,l,e.featureSet.features):"esriGeometryPolygon"===r&&m(s,l,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(e=>{l.set(e.id,e)}),t.forEach(t=>{t.networkLinkIds.forEach(n=>{const i=v(n,t.id,e.networkLinks);i&&r.push(i)})}),r.forEach(e=>{e.featureInfos&&(e.points=Object(n["a"])(i.get("esriGeometryPoint")),e.polylines=Object(n["a"])(i.get("esriGeometryPolyline")),e.polygons=Object(n["a"])(i.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(t=>{switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const r=u[t.type].get(t.id);r&&e[h[t.type]].featureSet.features.push(r);break}case"GroundOverlay":{const r=l.get(t.id);r&&e.mapImages.push(r);break}}}),e.fullExtent=M([e]))});const c=M(r);return{folders:t,sublayers:r,extent:c}}function p(e,t,r,n){const a=u["b"]&&u["b"].findCredential(e);e=Object(o["e"])(e,{token:a&&a.token});const s=i["a"].kmlServiceUrl;return Object(c["default"])(s,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function O(e,t,r=null,n=[]){const i=[],o={},a=t.sublayers,s=t.folders.map(e=>e.id);return a.forEach(t=>{const a=new e;if(r?a.read(t,r):a.read(t),n.length&&s.indexOf(a.id)>-1&&(a.visible=-1!==n.indexOf(a.id)),o[t.id]=a,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=o[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(a)}else i.unshift(a)}),i}function m(e,t,r){r.forEach(r=>{e.set(r.attributes[t],r)})}function j(e,t){let r;return t.some(t=>t.id===e&&(r=t,!0)),r}function v(e,t,r){const n=j(e,r);return n&&(n.parentFolderId=t,n.networkLink=n),n}async function g(e){const t=f["default"].fromJSON(e.featureSet).features,r=e.layerDefinition,n=Object(b["a"])(r.drawingInfo.renderer),i=l["a"].fromJSON(e.popupInfo),o=[];for(const a of t){const e=await n.getSymbolAsync(a);a.symbol=e,a.popupTemplate=i,a.visible=!0,o.push(a)}return o}function M(e){const t=Object(y["h"])(),r=Object(y["h"])(y["a"]);for(const n of e){if(n.polygons&&n.polygons.featureSet&&n.polygons.featureSet.features)for(const e of n.polygons.featureSet.features)Object(s["b"])(t,e.geometry),Object(y["m"])(r,t);if(n.polylines&&n.polylines.featureSet&&n.polylines.featureSet.features)for(const e of n.polylines.featureSet.features)Object(s["b"])(t,e.geometry),Object(y["m"])(r,t);if(n.points&&n.points.featureSet&&n.points.featureSet.features)for(const e of n.points.featureSet.features)Object(s["b"])(t,e.geometry),Object(y["m"])(r,t);if(n.mapImages)for(const e of n.mapImages)Object(s["b"])(t,e.extent),Object(y["m"])(r,t)}return Object(y["l"])(r,y["a"])?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:a["a"].WGS84}}},4261:function(e,t,r){"use strict";r.d(t,"a",(function(){return A})),r.d(t,"b",(function(){return z})),r.d(t,"c",(function(){return K})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return j})),r.d(t,"f",(function(){return S})),r.d(t,"g",(function(){return M})),r.d(t,"h",(function(){return a})),r.d(t,"i",(function(){return p})),r.d(t,"j",(function(){return m})),r.d(t,"k",(function(){return G})),r.d(t,"l",(function(){return J})),r.d(t,"m",(function(){return l})),r.d(t,"n",(function(){return b})),r.d(t,"o",(function(){return y})),r.d(t,"p",(function(){return f})),r.d(t,"q",(function(){return u})),r.d(t,"r",(function(){return c})),r.d(t,"s",(function(){return N})),r.d(t,"t",(function(){return s})),r.d(t,"u",(function(){return I})),r.d(t,"v",(function(){return O})),r.d(t,"w",(function(){return x})),r.d(t,"x",(function(){return w})),r.d(t,"y",(function(){return C})),r.d(t,"z",(function(){return g})),r.d(t,"A",(function(){return k})),r.d(t,"B",(function(){return E})),r.d(t,"C",(function(){return P})),r.d(t,"D",(function(){return F})),r.d(t,"E",(function(){return _})),r.d(t,"F",(function(){return v})),r.d(t,"G",(function(){return L})),r.d(t,"H",(function(){return d})),r.d(t,"I",(function(){return R}));var n=r("b2b2"),i=(r("3af1"),r("9180"));function o(e){return e}function a(e=K){return o([e[0],e[1],e[2],e[3],e[4],e[5]])}function s(e,t,r,n,i,o,s=a()){return s[0]=e,s[1]=t,s[2]=r,s[3]=n,s[4]=i,s[5]=o,s}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function u(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[3]=Math.max(e[3],t[2]),e[4]=Math.max(e[4],t[3])}function c(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function b(e,t,r=0,n=t.length/3){let i=e[0],o=e[1],a=e[2],s=e[3],l=e[4],u=e[5];for(let c=0;c<n;c++)i=Math.min(i,t[r+3*c]),o=Math.min(o,t[r+3*c+1]),a=Math.min(a,t[r+3*c+2]),s=Math.max(s,t[r+3*c]),l=Math.max(l,t[r+3*c+1]),u=Math.max(u,t[r+3*c+2]);e[0]=i,e[1]=o,e[2]=a,e[3]=s,e[4]=l,e[5]=u}function f(e,t,r,n){e[0]=Math.min(e[0],e[0]+t),e[3]=Math.max(e[3],e[3]+t),e[1]=Math.min(e[1],e[1]+r),e[4]=Math.max(e[4],e[4]+r),e[2]=Math.min(e[2],e[2]+n),e[5]=Math.max(e[5],e[5]+n)}function y(e,t,r){const n=t.length;let i=e[0],o=e[1],a=e[2],s=e[3],l=e[4],u=e[5];if(r)for(let c=0;c<n;c++){const e=t[c];i=Math.min(i,e[0]),o=Math.min(o,e[1]),a=Math.min(a,e[2]),s=Math.max(s,e[0]),l=Math.max(l,e[1]),u=Math.max(u,e[2])}else for(let c=0;c<n;c++){const e=t[c];i=Math.min(i,e[0]),o=Math.min(o,e[1]),s=Math.max(s,e[0]),l=Math.max(l,e[1])}e[0]=i,e[1]=o,e[2]=a,e[3]=s,e[4]=l,e[5]=u}function h(e){for(let t=0;t<6;t++)if(!isFinite(e[t]))return!1;return!0}function d(e){return e[0]>=e[3]?0:e[3]-e[0]}function p(e){return e[1]>=e[4]?0:e[4]-e[1]}function O(e){return e[2]>=e[5]?0:e[5]-e[2]}function m(e){const t=d(e),r=O(e),n=p(e);return Math.sqrt(t*t+r*r+n*n)}function j(e,t=[0,0,0]){return t[0]=e[0]+d(e)/2,t[1]=e[1]+p(e)/2,t[2]=e[2]+O(e)/2,t}function v(e,t=[0,0,0]){return t[0]=d(e),t[1]=p(e),t[2]=O(e),t}function g(e){return Math.max(d(e),O(e),p(e))}function M(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]}function S(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]}function x(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])}function w(e,t){return!!Object(n["j"])(t)||x(e,t)}function k(e,t,r,n,i=e){return i[0]=e[0]+t,i[1]=e[1]+r,i[2]=e[2]+n,i[3]=e[3]+t,i[4]=e[4]+r,i[5]=e[5]+n,i}function E(e,t,r=e){const n=e[0]+d(e)/2,i=e[1]+p(e)/2,o=e[2]+O(e)/2;return r[0]=n+(e[0]-n)*t,r[1]=i+(e[1]-i)*t,r[2]=o+(e[2]-o)*t,r[3]=n+(e[3]-n)*t,r[4]=i+(e[4]-i)*t,r[5]=o+(e[5]-o)*t,r}function I(e,t){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function _(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function F(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function P(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function G(e){return e?P(e,A):a(A)}function L(e,t){return t||(t=Object(i["l"])()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t}function N(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function T(e){return 6===e.length}function C(e){return 0===d(e)&&0===p(e)&&0===O(e)}function J(e,t,r){if(Object(n["j"])(e)||Object(n["j"])(t))return e===t;if(!T(e)||!T(t))return!1;if(r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function R(e,t,r,n,i,o){return s(e,t,r,n,i,o,H)}const z=o([-1/0,-1/0,-1/0,1/0,1/0,1/0]),A=o([1/0,1/0,1/0,-1/0,-1/0,-1/0]),K=o([0,0,0,0,0,0]),H=a()},f5fc:function(e,t,r){"use strict";r.r(t);var n,i=r("a4ee"),o=(r("c120"),r("b2b2")),a=(r("e92d"),r("cea0")),s=r("59b2"),l=r("afcf"),u=r("d386"),c=r("09db"),b=r("e041"),f=(r("8eed"),r("f402"),r("5996")),y=r("3af1"),h=(r("e06a"),r("2c4f")),d=r("4d10"),p=r("a6a3"),O=r("e694"),m=r("22f4"),j=r("b911"),v=r("997b"),g=r("0db5"),M=r("8e17"),S=r("5a62"),x=r("046b"),w=r("b3b6"),k=r("1a3e"),E=r("6a0e"),I=r("ce6d"),_=r("6d5f"),F=r("3795");let P=n=class extends(I["a"].EventedMixin(Object(E["b"])(_["a"]))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){Object(F["k"])(this,"networkLink").then(()=>Object(F["m"])(this,"visible")).then(()=>this.load())}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=Object(o["k"])(e)?e.signal:null,r=this._fetchService(this._get("networkLink").href,t).then(e=>{const t=Object(x["a"])(e.sublayers);this.fullExtent=y["a"].fromJSON(t),this.sourceJSON=e;const r=Object(a["m"])(h["a"].ofType(n),Object(x["e"])(n,e));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this._sublayersHandles.forEach(e=>e.remove()),this._sublayersHandles=null),e&&(e.forEach(e=>{e.parent=this,e.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})]),this._set("sublayers",e)}castSublayers(e){return Object(a["m"])(h["a"].ofType(n),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return Object(x["b"])(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(e=>Object(x["d"])(e.data))}};Object(i["a"])([Object(s["b"])()],P.prototype,"description",void 0),Object(i["a"])([Object(s["b"])()],P.prototype,"id",void 0),Object(i["a"])([Object(s["b"])({readOnly:!0,value:null})],P.prototype,"networkLink",void 0),Object(i["a"])([Object(s["b"])({json:{write:{allowNull:!0}}})],P.prototype,"parent",void 0),Object(i["a"])([Object(s["b"])({value:null,json:{write:{allowNull:!0}}})],P.prototype,"sublayers",null),Object(i["a"])([Object(k["a"])("sublayers")],P.prototype,"castSublayers",null),Object(i["a"])([Object(s["b"])({value:null,json:{read:{source:"name",reader:e=>Object(w["d"])(e)}}})],P.prototype,"title",void 0),Object(i["a"])([Object(s["b"])({value:!0})],P.prototype,"visible",null),Object(i["a"])([Object(l["a"])("visible",["visibility"])],P.prototype,"readVisible",null),Object(i["a"])([Object(s["b"])()],P.prototype,"sourceJSON",void 0),Object(i["a"])([Object(s["b"])({value:null})],P.prototype,"layer",null),Object(i["a"])([Object(s["b"])({type:y["a"]})],P.prototype,"fullExtent",void 0),P=n=Object(i["a"])([Object(u["a"])("esri.layers.support.KMLSublayer")],P);var G=P,L=G;const N=["kml","xml"];let T=class extends(Object(v["a"])(Object(M["a"])(Object(S["a"])(Object(j["a"])(Object(g["a"])(Object(O["a"])(p["a"]))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new d["a"]({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=f["a"].WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",(e,t)=>{t&&t.forEach(e=>{e.parent=null,e.layer=null}),e&&e.forEach(e=>{e.parent=this,e.layer=this})},!0),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return Object(x["e"])(L,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],n=e.toArray();for(;n.length;){const e=n[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&n.push(...e.sublayers.toArray())),n.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(b["k"])(this.url,N)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=Object(o["k"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:Object(x["b"])(this.url,this.outSpatialReference,this.refreshInterval,e)),r=Object(x["d"])(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const n of r.sublayers.items)t(n),n.visible&&n.fullExtent&&(e?e.union(n.fullExtent):e=n.fullExtent.clone())};return t(this),e}};Object(i["a"])([Object(s["b"])({readOnly:!0})],T.prototype,"allSublayers",void 0),Object(i["a"])([Object(s["b"])({type:f["a"]})],T.prototype,"outSpatialReference",void 0),Object(i["a"])([Object(s["b"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),Object(i["a"])([Object(s["b"])({readOnly:!0,json:{read:!1,write:!1}})],T.prototype,"legendEnabled",void 0),Object(i["a"])([Object(s["b"])({type:["show","hide","hide-children"]})],T.prototype,"listMode",void 0),Object(i["a"])([Object(s["b"])({type:["KML"]})],T.prototype,"operationalLayerType",void 0),Object(i["a"])([Object(s["b"])({})],T.prototype,"resourceInfo",void 0),Object(i["a"])([Object(s["b"])({type:h["a"].ofType(L),json:{write:{ignoreOrigin:!0}}})],T.prototype,"sublayers",void 0),Object(i["a"])([Object(l["a"])(["web-map","portal-item"],"sublayers",["visibleFolders"])],T.prototype,"readSublayersFromItemOrWebMap",null),Object(i["a"])([Object(l["a"])("service","sublayers",["sublayers"])],T.prototype,"readSublayers",null),Object(i["a"])([Object(c["a"])("sublayers")],T.prototype,"writeSublayers",null),Object(i["a"])([Object(s["b"])({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),Object(i["a"])([Object(s["b"])({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],T.prototype,"title",null),Object(i["a"])([Object(s["b"])(m["n"])],T.prototype,"url",void 0),Object(i["a"])([Object(s["b"])({readOnly:!0})],T.prototype,"visibleSublayers",null),Object(i["a"])([Object(s["b"])({type:y["a"]})],T.prototype,"extent",void 0),Object(i["a"])([Object(s["b"])()],T.prototype,"fullExtent",null),T=Object(i["a"])([Object(u["a"])("esri.layers.KMLLayer")],T);var C=T;t["default"]=C}}]);
//# sourceMappingURL=chunk-70b2ed33.55498a2d.js.map