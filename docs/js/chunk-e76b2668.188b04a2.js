(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e76b2668"],{1793:function(e,t,n){"use strict";n.r(t);var i=n("a4ee"),a=(n("c120"),n("b2b2")),r=(n("e92d"),n("cea0"),n("59b2")),s=n("d386"),l=(n("e041"),n("8eed"),n("f402"),n("3795")),o=n("6c7a"),c=n("d4de"),u=n("66af"),f=n("45e3"),p=n("365a"),h=n("e94b"),d=n("72d8");let m=class extends(Object(d["a"])(Object(o["a"])(Object(f["a"])(Object(u["a"])(p["a"]))))){constructor(){super(...arguments),this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage();const e=this.updateFullExtent();this.addResolvingPromise(e);const t=Object(l["m"])(this.view,"basemapTerrain.tilingSchemeLocked").then(()=>{const e=this.view.basemapTerrain.tilingScheme,{tileInfo:t}=this.layer,n=["png","png24","png32","jpg","mixed"].indexOf(t.format)>-1&&e.compatibleWith(t);this.isAlignedMapTile=n;const i=n?t:e.toTileInfo();this._set("tileInfo",i),this.updatingHandles.add(this,"layer.renderer",()=>this.refresh()),this.updatingHandles.add(this,"layer.interpolation",()=>this.refresh()),this.updatingHandles.add(this,"layer.bandIds",()=>this.refresh()),this.updatingHandles.add(this,"layer.multidimensionalDefinition",()=>this.refresh())});this.addResolvingPromise(t)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),t=e.getContext("2d"),[n,i]=this.tileInfo.size;return e.width=n,e.height=i,t.clearRect(0,0,n,i),t.getImageData(0,0,n,i)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){const e=this.tileInfo.lods,t=this.layer.tileInfo.lods,n=e[0].scale,i=t[t.length-1].scale;return this.levelRangeFromScaleRange(n,i)}async fetchTile(e,t,n,i){const r=this.tileInfo,s=this.layer.symbolizer.canRenderInWebGL,l={tileInfo:r,requestRawData:s,signal:Object(a["t"])(i.signal),requestAsImageElement:this.isAlignedMapTile},o=await this.layer.fetchTile(e,t,n,l);if(o instanceof HTMLImageElement)return o;let u=o&&o.pixelBlock;if(!u)return this._blankTile;if(!s&&(u=await this.layer.applyRenderer(o),null==u))return this._blankTile;const f=new c["a"]([e,t,n],u,r.size[0],r.size[1]);return s&&(f.symbolizerRenderer=this.layer.symbolizer.rendererJSON,f.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),f.transformGrid=o.transformGrid),f.bandIds=this.layer.bandIds,f}_getSymbolizerOptions(e){const t=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:t,y:t},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,t){return Object(h["a"])(e,t,this.view)}refresh(){this.emit("data-changed")}async doRefresh(e){this.suspended||this.emit("data-changed")}};Object(i["a"])([Object(r["b"])({readOnly:!0})],m.prototype,"_blankTile",null),Object(i["a"])([Object(r["b"])({readOnly:!0})],m.prototype,"imageFormatIsOpaque",null),Object(i["a"])([Object(r["b"])({readOnly:!0})],m.prototype,"hasMixedImageFormats",null),Object(i["a"])([Object(r["b"])({readOnly:!0})],m.prototype,"dataLevelRange",null),m=Object(i["a"])([Object(s["a"])("esri.views.3d.layers.ImageryTileLayerView3D")],m);var b=m;t["default"]=b},"536f":function(e,t,n){"use strict";function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function a(e){let t=0,n=0;for(let i=0;i<e.length;i++){const a=e[i].size;"number"==typeof a&&(t+=a,n++)}return t/n}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?a(e.stops):t}function s(e,t){if(!t)return e;const n=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:n,minSize:i}=t;return(r(n,e)+r(i,e))/2});let i=0;const a=n.length;if(0===a)return e;for(let r=0;r<a;r++)i+=n[r];const s=Math.floor(i/a);return Math.max(s,e)}function l(e){const t=e&&e.renderer,n="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return n;const a="visualVariables"in t?s(n,t.visualVariables):n;if("simple"===t.type)return i(a,t.symbol);if("unique-value"===t.type){let e=a;return t.uniqueValueInfos.forEach(t=>{e=i(e,t.symbol)}),e}if("class-breaks"===t.type){let e=a;return t.classBreakInfos.forEach(t=>{e=i(e,t.symbol)}),e}return t.type,a}n.d(t,"a",(function(){return l}))},"72d8":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n("a4ee"),a=(n("c120"),n("b2b2")),r=(n("e92d"),n("cea0"),n("59b2")),s=n("d386"),l=n("ce50"),o=(n("e041"),n("8eed"),n("f402"),n("8d60")),c=n("b4e0"),u=n("ad73");const f=e=>{let t=class extends e{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,t){const{layer:n}=this;if(!e)return Promise.reject(new l["a"]("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:n}));const{popupEnabled:i}=n,r=Object(u["a"])(n,t);if(!i||!Object(a["k"])(r))throw new l["a"]("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:r});const s=[],{value:c}=await n.identify(e);if(c){var f,p;const e=c.join(", "),t={ObjectId:0},i="Raster.ServicePixelValue";t[i]=this._formatAttributeValue(e,i);const a=null==(f=n.rasterInfo)||null==(p=f.attributeTable)?void 0:p.features;if(a&&a.length>0){const n=a.filter(t=>{const n=t.attributes.value||t.attributes.Value||t.attributes.VALUE;return String(n)===e});if(n.length>0){const e=n[0];if(e)for(const n in e.attributes)if(e.attributes.hasOwnProperty(n)){const i=this._rasterFieldPrefix+n;t[i]=this._formatAttributeValue(e.attributes[n],i)}}}const r=new o["a"](this.fullExtent.clone(),null,t);r.layer=n,r.sourceLayer=r.layer,s.push(r)}return s}updateFullExtent(){const e=this.layer.tileInfo;let t;e&&e.spatialReference||(t=new l["a"]("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));const n=Object(c["b"])(this.layer.fullExtent,this.view.spatialReference,!1),i=Object(c["e"])(this.layer.fullExtent,this.view.spatialReference,n);return null==i&&(t=new l["a"]("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",i),this.datumTransformation||(this.datumTransformation=Object(c["b"])(this.layer.fullExtent,this.view.spatialReference,!0)),t?Promise.reject(t):Promise.resolve()}_formatAttributeValue(e,t){if("string"==typeof e){const n=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(n,t),a=i&&i.format;if(a){let t,n;return e.trim().indexOf(",")>-1?(t=",",n=t+" ",this._formatDelimitedString(e,t,n,a)):e.trim().indexOf(" ")>-1?(t=n=" ",this._formatDelimitedString(e,t,n,a)):this._formatNumberFromString(e,a)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const n=t.toLowerCase();let i;return e.some(e=>!(!e.fieldName||e.fieldName.toLowerCase()!==n&&e.fieldName.toLowerCase()!==n.replace(/ /g,"_"))&&(i=e,!0)),i}_formatDelimitedString(e,t,n,i){return e&&t&&n&&i?e.trim().split(t).map(e=>this._formatNumberFromString(e,i)).join(n):e}_formatNumberFromString(e,t){if(!e||!t)return e;const n=Number(e);return isNaN(n)?e:t.format(n)}};return Object(i["a"])([Object(r["b"])()],t.prototype,"layer",void 0),Object(i["a"])([Object(r["b"])()],t.prototype,"view",void 0),Object(i["a"])([Object(r["b"])()],t.prototype,"fullExtent",void 0),Object(i["a"])([Object(r["b"])()],t.prototype,"tileInfo",void 0),Object(i["a"])([Object(r["b"])({readOnly:!0})],t.prototype,"hasTilingEffects",null),t=Object(i["a"])([Object(s["a"])("esri.views.layers.ImageryTileLayerView")],t),t}},ad73:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return r}));var i=n("b2b2"),a=n("c1da");async function r(e,t=e.popupTemplate){if(!Object(i["k"])(t))return[];const n=await t.getRequiredFields(e.fields),{lastEditInfoEnabled:r}=t,{objectIdField:s,typeIdField:l,globalIdField:o,relationships:c}=e;if(n.includes("*"))return["*"];const u=r?await Object(a["m"])(e):[],f=Object(a["i"])(e.fields,[...n,...u]);return l&&f.push(l),f&&s&&Object(a["p"])(e.fields,s)&&-1===f.indexOf(s)&&f.push(s),f&&o&&Object(a["p"])(e.fields,o)&&-1===f.indexOf(o)&&f.push(o),c&&c.forEach(t=>{const{keyField:n}=t;f&&n&&Object(a["p"])(e.fields,n)&&-1===f.indexOf(n)&&f.push(n)}),f}function s(e,t){return e.popupTemplate?e.popupTemplate:Object(i["k"])(t)&&t.defaultPopupTemplateEnabled&&Object(i["k"])(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},b4e0:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return O}));var i=n("ce50"),a=n("7f83"),r=n("9786"),s=n("4ae5"),l=n("3af1"),o=(n("e06a"),n("8048")),c=n("8188");const u=5e-4,f=function(e,t){const n=(e.isWGS84||e.isWebMercator)&&(t.isWGS84||t.isWebMercator);return!(e.equals(t)||n)},p=function(e,t){const n=(e[0]+e[4]+e[4*t.cols]+e[4*t.cols+4])/4,i=(e[1]+e[5]+e[4*t.rows+1]+e[4*t.rows+5])/4;return[Math.abs(n-e[2*t.rows+2]),Math.abs(i-e[2*t.rows+3])]},h=32;async function d(){if(Object(c["h"])()||!Object(c["i"])())return null;await Object(c["j"])()}function m(e,t,n){if(!f(e.spatialReference,t))return null;if(!Object(c["h"])())throw new i["a"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");return n?Object(c["f"])(t,e.spatialReference,e):Object(c["f"])(e.spatialReference,t,e)}function b(e,t,n,a=null){if(e.spatialReference.equals(t))return e;const s=f(e.spatialReference,t);if(s&&!Object(c["h"])())throw new i["a"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");const o=n.center,u=new l["a"]({xmin:o.x-e.x/2,xmax:o.x+e.x/2,ymin:o.y-e.y/2,ymax:o.y+e.y/2,spatialReference:e.spatialReference}),p=s?Object(c["n"])(u,t,a):Object(r["d"])(u,t);return null==p?null:{x:p.xmax-p.xmin,y:p.ymax-p.ymin}}function y(e,t=.01){return Object(o["e"])(e)?t/Object(o["e"])(e):0}function x(e,t,n=null,s=!0){const l=e.spatialReference;if(l.equals(t))return e;const o=f(l,t);if(o&&!Object(c["h"])())throw new i["a"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");const p=o?Object(c["n"])(e,t,n):Object(r["d"])(e,t);if(p&&s&&t.isGeographic){var h,d;const[t,n]=l.isWebMercator?Object(a["d"])(l).origin:null!=(h=null==(d=Object(a["d"])(l))?void 0:d.valid)?h:[],i=y(l);i&&null!=t&&null!=n&&(Math.abs(e.x-t)<i&&Math.abs(180-p.x)<u?p.x-=360:Math.abs(e.x-n)<i&&Math.abs(180+p.x)<u&&(p.x+=360))}return p}function g(e,t,n=null,l=!0){var o,p,h,d;const m=e.spatialReference;if(m.equals(t))return e;const b=f(m,t);if(b&&!Object(c["h"])())throw new i["a"]("rasterprojectionhelper-projectExtent","projection engine is not loaded");const g=b?Object(c["n"])(e,t,n):Object(r["d"])(e,t);let[j,O]=null!=(o=null==(p=Object(a["d"])(m))?void 0:p.origin)?o:[];if(g&&l&&m.isWebMercator&&t.isGeographic&&null!=j&&null!=O){const i=.001,a=1e3;if(Math.abs(e.xmin-j)<i&&Math.abs(O-e.xmax)>a&&Math.abs(180-g.xmax)<u){g.xmin=-180;const i=[];i.push(new s["a"](e.xmax,e.ymin,m)),i.push(new s["a"](e.xmax,(e.ymin+e.ymax)/2,m)),i.push(new s["a"](e.xmax,e.ymax,m));const a=i.map(e=>x(e,t,n)).filter(e=>!isNaN(null==e?void 0:e.x)).map(e=>e.x);g.xmax=Math.max.apply(null,a)}if(Math.abs(e.xmax-O)<i&&Math.abs(j-e.xmin)>a&&Math.abs(180+g.xmin)<u){g.xmax=180;const i=[];i.push(new s["a"](e.xmin,e.ymin,m)),i.push(new s["a"](e.xmin,(e.ymin+e.ymax)/2,m)),i.push(new s["a"](e.xmin,e.ymax,m));const a=i.map(e=>x(e,t,n)).filter(e=>!isNaN(null==e?void 0:e.x)).map(e=>e.x);g.xmin=Math.min.apply(null,a)}}[j,O]=t.isWebMercator?Object(a["d"])(t).origin:null!=(h=null==(d=Object(a["d"])(t))?void 0:d.valid)?h:[];const w=y(t);return w&&null!=j&&null!=O&&(Math.abs(g.xmin-j)<w&&(g.xmin=j),Math.abs(g.xmax-O)<w&&(g.xmax=O)),g}function j(e,t,n,r=null,l=null,o=!1,u=[h,h]){var d,m;if(f(e.spatialReference,t.spatialReference)&&!Object(c["h"])())throw new i["a"]("rasterprojectionhelper-projectResolution","projection engine is not loaded");if(!(e&&t&&n))return null;const{xmin:b,ymin:y,xmax:g,ymax:j}=e,O=e.spatialReference,w=t.spatialReference,[v,M]=null!=(d=null==(m=Object(a["d"])(O))?void 0:m.valid)?d:[],R={x:u[0]*n.x,y:u[1]*n.y},I={cols:Math.ceil((g-b)/R.x-.1)+1,rows:Math.ceil((j-y)/R.y-.1)+1},T=R.x,S=R.y,z=[];let F,N=!1;for(let i=0;i<I.cols;i++){const e=[];for(let n=0;n<I.rows;n++){let a=x(new s["a"]({x:b+T*i,y:j-S*n,spatialReference:O}),w,r);l&&(a=l.inverseTransform(a)),e.push(a),i>0&&o&&a&&F[n]&&null!=v&&a.x<F[n].x&&(a.x+=M-v),a?(z.push((a.x-t.xmin)/(t.xmax-t.xmin)),z.push((t.ymax-a.y)/(t.ymax-t.ymin))):(z.push(NaN),z.push(NaN),N=!0)}F=e}const P=p(z,I),E=new Float32Array((I.cols-1)*(I.rows-1)*2*6),_=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),L=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let i=0;i<I.cols-1;i++){for(let e=0;e<I.rows-1;e++){let t=i*I.rows*2+2*e;const n=z[t],a=z[t+1],r=z[t+2],s=z[t+3];t+=2*I.rows;const l=z[t],o=z[t+1],c=z[t+2],u=z[t+3];let f=0,p=12*(e*(I.cols-1)+i);for(let e=0;e<3;e++)E[p++]=_[f++]*n+_[f++]*r+_[f++]*c;f=0;for(let e=0;e<3;e++)E[p++]=_[f++]*a+_[f++]*s+_[f++]*u;f=0;for(let e=0;e<3;e++)E[p++]=L[f++]*n+L[f++]*l+L[f++]*c;f=0;for(let e=0;e<3;e++)E[p++]=L[f++]*a+L[f++]*o+L[f++]*u}if(N)for(let e=0;e<E.length;e++)isNaN(E[e])&&(E[e]=-1)}return{offsets:z,error:P,coefficients:E,spacing:u,size:[I.cols-1,I.rows-1]}}function O(e,t,n){const i=Math.log(e.x/t.pixelSize.x)/Math.LN2,a=Math.log(e.y/t.pixelSize.y)/Math.LN2,r=t.storageInfo.maximumPyramidLevel||0;let l="down"===n?Math.floor(Math.min(i,a)):"up"===n?Math.ceil(Math.max(i,a)):Math.round((i+a)/2),o=!1;l<0?l=0:l>r&&(o=l>r+3,l=r);const c=2**l;return{pyramidLevel:l,pyramidResolution:new s["a"]({x:c*t.nativePixelSize.x,y:c*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:o}}function w(e,t,n=512,i=!0){const{extent:a,spatialReference:r,pixelSize:l}=e,c=b(new s["a"]({x:l.x,y:l.y,spatialReference:r}),t,a);if(null==c)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const u=(c.x+c.y)/2,f=Object(o["e"])(t),p=u*f*96*39.37,h=t.isGeographic?512/n*295828763.7958547:512/n*591657527.591555;let d=!1;const m=g(a,t);i&&(t.isGeographic||t.isWebMercator)&&(d=m.xmin*m.xmax<0);let y,x=p;const j=1.001;if(d){x=h;const e=.29858214164761665,t=e*(96*f*39.37);y=b(new s["a"]({x:e,y:e,spatialReference:{wkid:3857}}),r,m),y.x*=x/t,y.y*=x/t}else{y={x:l.x,y:l.y};const t=Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2);let n=0;for(;x<h*(j/2)&&n<t;)n++,x*=2,y.x*=2,y.y*=2;Math.max(x,h)/Math.min(x,h)<=j&&(x=h)}const O=[x],w=[{x:y.x,y:y.y}],v=70.5310735,M=Math.min(v,p)/j;for(;x>=M;)x/=2,y.x/=2,y.y/=2,O.push(x),w.push({x:y.x,y:y.y});return{projectedPixelSize:c,scales:O,srcResolutions:w,isCustomTilingScheme:!d}}},e94b:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o}));var i=n("b2b2"),a=n("3af1"),r=(n("e06a"),n("8048")),s=n("536f");function l(e,t,n,s=new a["a"]){let l;if("2d"===n.type)l=t*n.resolution;else if("3d"===n.type){const a=n.overlayPixelSizeInMapUnits(e),s=n.basemapSpatialReference;l=Object(i["k"])(s)&&!s.equals(n.spatialReference)?Object(r["e"])(s)/Object(r["e"])(n.spatialReference):t*a}const o=e.x-l,c=e.y-l,u=e.x+l,f=e.y+l,{spatialReference:p}=n;return s.xmin=Math.min(o,u),s.ymin=Math.min(c,f),s.xmax=Math.max(o,u),s.ymax=Math.max(c,f),s.spatialReference=p,s}function o(e,t,n){const a=n.toMap(e);return!Object(i["j"])(a)&&l(a,Object(s["a"])(),n,c).intersects(t)}const c=new a["a"]}}]);