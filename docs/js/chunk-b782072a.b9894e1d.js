(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b782072a"],{"536f":function(e,t,a){"use strict";function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e){let t=0,a=0;for(let i=0;i<e.length;i++){const r=e[i].size;"number"==typeof r&&(t+=r,a++)}return t/a}function n(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?r(e.stops):t}function s(e,t){if(!t)return e;const a=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:a,minSize:i}=t;return(n(a,e)+n(i,e))/2});let i=0;const r=a.length;if(0===r)return e;for(let n=0;n<r;n++)i+=a[n];const s=Math.floor(i/r);return Math.max(s,e)}function o(e){const t=e&&e.renderer,a="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return a;const r="visualVariables"in t?s(a,t.visualVariables):a;if("simple"===t.type)return i(r,t.symbol);if("unique-value"===t.type){let e=r;return t.uniqueValueInfos.forEach(t=>{e=i(e,t.symbol)}),e}if("class-breaks"===t.type){let e=r;return t.classBreakInfos.forEach(t=>{e=i(e,t.symbol)}),e}return t.type,r}a.d(t,"a",(function(){return o}))},"537c":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var i=a("a4ee"),r=(a("c120"),a("b2b2")),n=(a("e92d"),a("cea0"),a("59b2")),s=a("d386"),o=a("ce50"),l=(a("e041"),a("8eed"),a("f402"),a("f4cc")),c=a("82fa"),u=a("22f4"),d=a("70ce"),h=a("536f"),p=a("ad73");const m=e=>{let t=class extends e{initialize(){this.exportImageParameters=new d["a"]({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:a}=this;if(!e)return Promise.reject(new o["a"]("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const i=this.get("view.scale"),n=[],s=async e=>{const a=0===e.minScale||i<=e.minScale,o=0===e.maxScale||i>=e.maxScale;if(e.visible&&a&&o)if(e.sublayers)e.sublayers.forEach(s);else if(e.popupEnabled){const a=Object(p["a"])(e,{...t,defaultPopupTemplateEnabled:!1});Object(r["k"])(a)&&n.unshift({sublayer:e,popupTemplate:a})}},c=a.sublayers.toArray().reverse().map(s);await Promise.all(c);const u=n.map(async({sublayer:a,popupTemplate:i})=>{await a.load().catch(()=>{});const n=a.createQuery(),s=Object(r["k"])(t)?t.event:null,o=Object(h["a"])({renderer:a.renderer,event:s}),l=this.createFetchPopupFeaturesQueryGeometry(e,o);n.geometry=l,n.outFields=await Object(p["b"])(a,i);const c=await this._loadArcadeModules(i);return c&&c.arcadeUtils.hasGeometryOperations(i)||(n.maxAllowableOffset=l.width/o),(await a.queryFeatures(n)).features});return(await Object(l["k"])(u)).reduce((e,t)=>t.value?[...e,...t.value]:e,[]).filter(e=>null!=e)}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return Object(c["e"])()}};return Object(i["a"])([Object(n["b"])()],t.prototype,"exportImageParameters",void 0),Object(i["a"])([Object(n["b"])({readOnly:!0})],t.prototype,"exportImageVersion",null),Object(i["a"])([Object(n["b"])()],t.prototype,"layer",void 0),Object(i["a"])([Object(n["b"])()],t.prototype,"suspended",void 0),Object(i["a"])([Object(n["b"])(u["a"])],t.prototype,"timeExtent",void 0),t=Object(i["a"])([Object(s["a"])("esri.views.layers.MapImageLayerView")],t),t}},"843f":function(e,t,a){"use strict";var i=a("a4ee"),r=(a("c120"),a("e92d")),n=(a("cea0"),a("59b2")),s=a("d386"),o=(a("e041"),a("8eed"),a("f402"),a("f4cc")),l=a("3af1"),c=a("792b"),u=a("3795"),d=a("9180"),h=a("6c7a"),p=a("6611"),m=a("6061"),b=a("1e2c"),f=a("66af"),g=a("365a"),y=a("ad96"),v=a("0278"),x=a("caf7");function O(e,t,a){const i=Object(d["B"])(e)/Object(d["u"])(e),r={width:a,height:a};return i>1.0001?r.height=a/i:i<.9999&&(r.width=a*i),r.width=Math.round(r.width/(Object(d["B"])(e)/Object(d["B"])(t))),r.height=Math.round(r.height/(Object(d["u"])(e)/Object(d["u"])(t))),r}function j(e,t){const a=[[e[0],e[1],t],[e[2],e[1],t],[e[2],e[3],t],[e[0],e[3],t]];return x["a"].createSquareGeometry(a)}function w(e,t,a){if(!Object(d["w"])(e,t))return j(t,a);const i=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],r=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],n=t[2]-t[0],s=t[3]-t[1],o=r[0]>0&&r[2]>0?3:2,l=i[0]>0&&i[2]>0?3:2,c=(l+1)*(o+1),u=new Float64Array(3*c),h=new Float32Array(2*c),p=new Uint32Array(6*(l*o-1));let m=0,b=0,f=0,g=0,y=0;for(let d=0;d<4;d++){const e=i[d];if(e<=0)continue;let l=0;for(let i=0;i<4;i++){const e=r[i];e<=0||(u[b++]=t[0]+l,u[b++]=t[1]+m,u[b++]=a,h[f++]=l/n,h[f++]=m/s,i<3&&d<3&&(1!==i||1!==d)&&(p[y++]=g,p[y++]=g+1,p[y++]=g+o+1,p[y++]=g+1,p[y++]=g+o+2,p[y++]=g+o+1),g++,l+=e)}m+=e}const x=new Uint32Array(p.length);return new v["a"]([["position",{size:3,data:u,exclusive:!0}],["normal",{size:3,data:_,exclusive:!0}],["uv0",{size:2,data:h,exclusive:!0}]],[["position",p],["normal",x],["uv0",p]])}const _=[0,0,1];var E=a("eec2");const P=r["a"].getLogger("esri.views.3d.layers.DynamicLayerView3D");let S=class extends(Object(h["a"])(Object(f["a"])(g["a"]))){constructor(){super(...arguments),this.drapeSourceType=0,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlayExtents=new Array,this.updateWhenStationary=!0}initialize(){this.addResolvingPromise(Object(E["a"])(this).then(e=>this._set("fullExtentInLocalViewSpatialReference",e))),this.updatingHandles.add(this,"suspended",()=>this._suspendedChangeHandler()),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this.updatingHandles.add(this.layer,"scaleRangeId",()=>this.notifyChange("suspended")),"local"===this.view.viewingMode&&this.updatingHandles.add(this.view.basemapTerrain,"extent",()=>this._overlayExtents.forEach((e,t)=>this._updateImageExtent(t)))}destroy(){this.clear()}setDrapingExtent(e,t,a,i,r,n){this._overlayExtents[e]={extent:Object(d["l"])(t),spatialReference:a,resolution:i,renderLocalOrigin:r,pixelRatio:n},this._updateImageExtent(e)}_updateImageExtent(e){const t=this._overlayExtents[e],a=this._clippedExtent(t.extent,T),i=O(t.extent,a,t.resolution);let r=t.pixelRatio*this.view.pixelRatio;if("imageMaxWidth"in this.layer||"imageMaxHeight"in this.layer){const e=this.layer.imageMaxWidth,t=this.layer.imageMaxHeight;if(i.width>e){const t=e/i.width;i.height=Math.floor(i.height*t),i.width=e,r*=t}if(i.height>t){const e=t/i.height;i.width=Math.floor(i.width*e),i.height=t,r*=e}}const n=this._extents[e];n&&Object(d["o"])(n.extent,a)&&!this._imageSizeDiffers(a,n.imageSize,i)||(this._extents[e]={extent:Object(d["l"])(a),spatialReference:t.spatialReference,imageSize:i,pixelRatio:r},this.suspended||this._fetch(e).catch(e=>{Object(o["n"])(e)||P.error(e)}))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(e){if(this.suspended)return;const t=[];for(let a=0;a<this._extents.length;a++)this._extents[a]&&t.push(this._fetch(a,e));await Object(o["k"])(t)}canResume(){if(!super.canResume())return!1;if(this._isScaleRangeLayer()){const{minScale:e,maxScale:t}=this.layer;if(e>0||t>0){const a=this.view.scale;if(a<t||e>0&&a>e)return!1}}return!0}isUpdating(){return this._images.some(e=>!!e.loadingPromise)}async processResult(e,t,a){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const a=t.extent;if(new l["a"](a[0],a[1],a[2],a[3],t.spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await Object(c["b"])(this._images,async(a,i)=>{a&&(await e(a,t),this._createStageObjects(i,a.image))})}_imageSizeDiffers(e,t,a){if(!this.maximumDataResolution)return!0;if(p["a"].TESTS_DISABLE_UPDATE_THRESHOLDS)return!0;const i=Object(d["B"])(e)/this.maximumDataResolution.x,r=Object(d["u"])(e)/this.maximumDataResolution.y,n=i/t.width,s=r/t.height,o=i/a.width,l=r/a.height,c=Math.abs(n-o),u=Math.abs(s-l);return c>1.5||u>1.5}async _fetch(e,t){if(this.suspended)return;const a=this._overlayExtents[e],i=this._extents[e],r=i.extent,n=new l["a"](r[0],r[1],r[2],r[3],i.spatialReference);this._images[e]||(this._images[e]={texture:null,material:null,rendergeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:Object(d["l"])(r)});const s=this._images[e];if(s.loadingAbortController&&(s.loadingAbortController.abort(),s.loadingAbortController=null),0===n.width||0===n.height)return void this._clearImage(e);const c=Object(o["e"])();s.loadingAbortController=c,Object(o["r"])(t,()=>c.abort());const u=c.signal,h=this._waitFetchReady(u).then(()=>{const e={requestAsImageElement:!0,pixelRatio:a.pixelRatio,...this.getFetchOptions(),signal:u},{height:t,width:r}=i.imageSize;return e.timestamp=this.refreshTimestamp,this.layer.fetchImage(n,r,t,e)}).then(e=>{if(Object(o["o"])(u))throw P.warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),Object(o["f"])();return this.processResult(s,e)});s.loadingPromise=h,Object(o["c"])(h,()=>{h===s.loadingPromise&&(s.loadingPromise=null,s.loadingAbortController=null)});const p=h.then(()=>{Object(d["z"])(s.renderExtent,r),this._createStageObjects(e,s.image),this.notifyChange("updating")}).catch(e=>{throw e&&!Object(o["n"])(e)&&P.error(e),this.notifyChange("updating"),e});this.notifyChange("updating"),await p}_clearImage(e){const t=this._images[e],a=this.view._stage;t&&(t.rendergeometry&&(this.view.basemapTerrain.overlayManager.renderer.removeGeometries([t.rendergeometry],this,2),t.rendergeometry=null),t.texture&&(a.remove(t.texture),t.texture=null),t.material&&(a.remove(t.material),t.material=null),t.loadingAbortController&&(t.loadingAbortController.abort(),t.loadingAbortController=null),t.loadingPromise=null,t.image=null,t.pixelData=null)}_createStageObjects(e,t){const a=this.view._stage,i=this._images[e];i.texture&&(a.remove(i.texture),i.texture=null),t?(i.texture=new b["a"](t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:33071,t:33071}}),a.add(i.texture)):i.material&&(a.remove(i.material),i.material=null),!i.material&&i.texture?(i.material=new y["a"]({transparent:!0,textureId:i.texture.id}),a.add(i.material)):i.material&&t&&i.material.setParameterValues({textureId:i.texture.id});const r=this.view.basemapTerrain.overlayManager.renderer;if(i.material){const t=-1;let a;const n=this._overlayExtents[e].renderLocalOrigin;if(0===e)a=j(i.renderExtent,t);else{if(1!==e)return void console.error("DynamicLayerView3D._createStageObjects: Invalid extent idx");{const e=this._extents[0].extent;if(!e)return;a=w(e,i.renderExtent,t)}}const s=new m["a"](a,i.material);s.origin=n,r.addGeometries([s],this,2),i.rendergeometry&&r.removeGeometries([i.rendergeometry],this,2),i.rendergeometry=s}else i.rendergeometry&&(r.removeGeometries([i.rendergeometry],this,2),i.rendergeometry=null)}_isScaleRangeLayer(){return"minScale"in this.layer&&"maxScale"in this.layer}_isScaleRangeActive(){return!!this._isScaleRangeLayer()&&(this.layer.minScale>0||this.layer.maxScale>0)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return Object(d["z"])(t,e);const a=this.view.basemapTerrain,i=a.extent;return a.ready&&i?Object(d["v"])(e,i,t):Object(d["z"])(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refresh()}async _waitFetchReady(e){this.updateWhenStationary&&await Object(u["k"])(this.view,"stationary",e),Object(o["w"])(e)}};Object(i["a"])([Object(n["b"])()],S.prototype,"layer",void 0),Object(i["a"])([Object(n["b"])()],S.prototype,"suspended",void 0),Object(i["a"])([Object(n["b"])({readOnly:!0})],S.prototype,"fullExtentInLocalViewSpatialReference",void 0),Object(i["a"])([Object(n["b"])()],S.prototype,"updating",void 0),S=Object(i["a"])([Object(s["a"])("esri.views.3d.layers.DynamicLayerView3D")],S);const T=Object(d["l"])();var C=S;t["a"]=C},"997a":function(e,t,a){"use strict";a.r(t);var i=a("a4ee"),r=(a("c120"),a("e92d"),a("cea0"),a("59b2"),a("d386")),n=(a("e041"),a("8eed"),a("f402"),a("e94b")),s=a("537c"),o=a("843f");let l=class extends(Object(s["a"])(o["a"])){constructor(){super(...arguments),this.updateWhenStationary=!0}initialize(){this.updatingHandles.add(this,"exportImageVersion",()=>this.updatingHandles.addPromise(this.refreshDebounced()))}createFetchPopupFeaturesQueryGeometry(e,t){return Object(n["a"])(e,t,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent,timestamp:this.refreshTimestamp}}};l=Object(i["a"])([Object(r["a"])("esri.views.3d.layers.MapImageLayerView3D")],l);var c=l;t["default"]=c},ad73:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n}));var i=a("b2b2"),r=a("c1da");async function n(e,t=e.popupTemplate){if(!Object(i["k"])(t))return[];const a=await t.getRequiredFields(e.fields),{lastEditInfoEnabled:n}=t,{objectIdField:s,typeIdField:o,globalIdField:l,relationships:c}=e;if(a.includes("*"))return["*"];const u=n?await Object(r["m"])(e):[],d=Object(r["i"])(e.fields,[...a,...u]);return o&&d.push(o),d&&s&&Object(r["p"])(e.fields,s)&&-1===d.indexOf(s)&&d.push(s),d&&l&&Object(r["p"])(e.fields,l)&&-1===d.indexOf(l)&&d.push(l),c&&c.forEach(t=>{const{keyField:a}=t;d&&a&&Object(r["p"])(e.fields,a)&&-1===d.indexOf(a)&&d.push(a)}),d}function s(e,t){return e.popupTemplate?e.popupTemplate:Object(i["k"])(t)&&t.defaultPopupTemplateEnabled&&Object(i["k"])(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},ad96:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var i=a("68af"),r=a("7c51"),n=a("35b3"),s=a("7438"),o=a("8675"),l=a("a4ee"),c=a("c3a4"),u=a("ca98"),d=a("da35"),h=a("fa1e"),p=a("8e37"),m=a("189c"),b=a("8e97"),f=a("d272"),g=a("c6d7"),y=a("87b7"),v=a("f3d9");class x extends u["a"]{initializeProgram(e){const t=x.shader.get(),a=this.configuration,i=t.build({output:a.output,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===a.transparencyPassType,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new p["a"](e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),h["a"])}bindPass(e,t,a){b["a"].bindProjectionMatrix(this.program,a.camera.projectionMatrix),this.program.setUniform1f("opacity",t.opacity),a.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",a.camera.nearFar),this.program.setUniform2fv("inverseViewport",a.inverseViewport),Object(g["a"])(this.program,e,a))}bindDraw(e){b["a"].bindView(this.program,e),f["a"].bindUniformsWithOrigin(this.program,this.configuration,e)}setPipelineState(e,t){const a=this.configuration,i=3===e,r=2===e,n=e=>0!==e&&{face:1===e?1028:1029,mode:2305};return Object(m["e"])({blending:0!==a.output&&7!==a.output||!a.transparent?null:i?O:Object(s["a"])(e),culling:n(a.cullFace),depthTest:{func:Object(s["b"])(e)},depthWrite:i?a.writeDepth&&m["d"]:Object(s["c"])(e),colorWrite:m["c"],stencilWrite:a.sceneHasOcludees?y["j"]:null,stencilTest:a.sceneHasOcludees?t?y["f"]:y["e"]:null,polygonOffset:i||r?null:Object(s["g"])(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}x.shader=new c["a"](v["a"],()=>a.e("chunk-2d215c84").then(a.bind(null,"c056")));const O=Object(m["g"])(1,771);class j extends d["a"]{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}Object(l["a"])([Object(d["b"])({count:8})],j.prototype,"output",void 0),Object(l["a"])([Object(d["b"])({count:3})],j.prototype,"cullFace",void 0),Object(l["a"])([Object(d["b"])()],j.prototype,"slicePlaneEnabled",void 0),Object(l["a"])([Object(d["b"])()],j.prototype,"transparent",void 0),Object(l["a"])([Object(d["b"])()],j.prototype,"enableOffset",void 0),Object(l["a"])([Object(d["b"])()],j.prototype,"writeDepth",void 0),Object(l["a"])([Object(d["b"])()],j.prototype,"sceneHasOcludees",void 0),Object(l["a"])([Object(d["b"])({count:4})],j.prototype,"transparencyPassType",void 0),Object(l["a"])([Object(d["b"])()],j.prototype,"multipassTerrainEnabled",void 0),Object(l["a"])([Object(d["b"])()],j.prototype,"cullAboveGround",void 0);class w extends n["a"]{constructor(e){super(e,E),this.supportsEdges=!0,this.techniqueConfig=new j}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.params.cullFace,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<s["e"],this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,this.techniqueConfig}intersect(e,t,a,i,n,s,o){Object(r["i"])(e,t,i,n,s,void 0,o)}getGLMaterial(e){return 0===e.output||7===e.output||4===e.output?new _(e):void 0}createBufferWriter(){return new o["a"](o["d"])}}class _ extends i["a"]{constructor(e){super({...e,...e.material.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=this.techniqueRep.acquireAndReleaseExisting(x,this.material.getTechniqueConfig(this.output,e),this.technique)}beginSlot(e){return 4===this.output?3===e:e===(this.technique.configuration.transparent?this.technique.configuration.writeDepth?5:8:3)}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&(this.material.setParameterValues({sceneHasOcludees:e.hasOccludees}),this.updateParameters(e))}ensureParameters(e){0!==this.output&&7!==this.output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.bindTexture(e,this.technique.program),this.bindTextureScale(e,this.technique.program),this.technique.bindPass(e,this.material.params,t)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const E={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...n["b"]}},e94b:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));var i=a("b2b2"),r=a("3af1"),n=(a("e06a"),a("8048")),s=a("536f");function o(e,t,a,s=new r["a"]){let o;if("2d"===a.type)o=t*a.resolution;else if("3d"===a.type){const r=a.overlayPixelSizeInMapUnits(e),s=a.basemapSpatialReference;o=Object(i["k"])(s)&&!s.equals(a.spatialReference)?Object(n["e"])(s)/Object(n["e"])(a.spatialReference):t*r}const l=e.x-o,c=e.y-o,u=e.x+o,d=e.y+o,{spatialReference:h}=a;return s.xmin=Math.min(l,u),s.ymin=Math.min(c,d),s.xmax=Math.max(l,u),s.ymax=Math.max(c,d),s.spatialReference=h,s}function l(e,t,a){const r=a.toMap(e);return!Object(i["j"])(r)&&o(r,Object(s["a"])(),a,c).intersects(t)}const c=new r["a"]},eec2:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a("9786"),r=a("e2e8");function n(e){const t=e.view.spatialReference,a=e.layer.fullExtent,n=a&&a.spatialReference;return n?n.equals(t)?Promise.resolve(a.clone()):Object(i["a"])(n,t)?Promise.resolve(Object(i["d"])(a,t)):e.view.state.isLocal?Object(r["projectGeometry"])(a,t,e.layer.portalItem).then(t=>!e.destroyed&&t?t:void 0).catch(()=>null):Promise.resolve(null):Promise.resolve(null)}},f3d9:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var i=a("3886"),r=a("4db9"),n=a("690a"),s=a("4377"),o=a("d272"),l=a("d047"),c=a("ebd5"),u=a("c6d7");function d(e){const t=new n["a"];return t.include(r["a"],{linearDepth:!1}),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.attributes.add("position","vec3"),t.attributes.add("uv0","vec2"),t.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),t.vertex.code.add(i["a"]`
    void main(void) {
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),t.include(o["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(l["a"]),t.include(u["b"],e)),t.fragment.uniforms.add("tex","sampler2D"),t.fragment.uniforms.add("opacity","float"),t.varyings.add("vTexCoord","vec2"),7===e.output?t.fragment.code.add(i["a"]`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${i["a"].float(c["b"])}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(t.fragment.include(s["a"]),t.fragment.code.add(i["a"]`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${i["a"].float(c["b"])}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),t}var h=Object.freeze({__proto__:null,build:d})}}]);
//# sourceMappingURL=chunk-b782072a.b9894e1d.js.map