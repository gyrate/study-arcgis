(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ec210914"],{"6c7a":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("a4ee"),r=a("e92d"),n=a("f4cc"),s=a("3795"),o=a("59b2"),c=(a("b50f"),a("c120"),a("cea0"),a("d386"));const l=e=>{let t=class extends e{initialize(){this.handles.add(Object(s["b"])(this,"layer","refresh",e=>{this.doRefresh(e.dataChanged).catch(e=>{Object(n["m"])(e)||r["a"].getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return Object(i["a"])([Object(o["b"])()],t.prototype,"layer",void 0),t=Object(i["a"])([Object(c["a"])("esri.layers.mixins.RefreshableLayerView")],t),t}},"7af4":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var i=a("a4ee"),r=(a("e92d"),a("cea0"),a("b50f"),a("c120"),a("2dd4"),a("d386")),n=a("843f");let s=class extends n["a"]{constructor(){super(...arguments),this.type="base-dynamic-3d"}};s=Object(i["a"])([Object(r["a"])("esri.views.3d.layers.BaseDynamicLayerView3D")],s);const o=s},"843f":function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var i=a("a4ee"),r=a("792b"),n=a("e92d"),s=a("b2b2"),o=a("f4cc"),c=a("3795"),l=a("59b2"),d=(a("b50f"),a("c120"),a("cea0"),a("d386")),h=a("3af1"),u=a("9180"),p=a("66af"),b=a("0278"),m=a("caf7");function g(e,t,a){const i=Object(u["C"])(e)/Object(u["v"])(e),r={width:a,height:a};return i>1.0001?r.height=a/i:i<.9999&&(r.width=a*i),r.width=Math.round(r.width/(Object(u["C"])(e)/Object(u["C"])(t))),r.height=Math.round(r.height/(Object(u["v"])(e)/Object(u["v"])(t))),r}function f(e){return m["a"].createSquareGeometry([[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function y(e,t){if(!Object(u["x"])(e,t))return f(t);const a=[e[1]-t[1],Math.min(e[3],t[3])-Math.max(e[1],t[1]),t[3]-e[3],123456],i=[e[0]-t[0],Math.min(e[2],t[2])-Math.max(e[0],t[0]),t[2]-e[2],123456],r=t[2]-t[0],n=t[3]-t[1],s=i[0]>0&&i[2]>0?3:2,o=a[0]>0&&a[2]>0?3:2,c=(o+1)*(s+1),l=new Float64Array(3*c),d=new Float32Array(2*c),h=new Uint32Array(6*(o*s-1));let p=0,m=0,g=0,y=0,v=0;for(let u=0;u<4;u++){const e=a[u];if(e<=0)continue;let o=0;for(let a=0;a<4;a++){const e=i[a];e<=0||(l[m++]=t[0]+o,l[m++]=t[1]+p,l[m++]=-1,d[g++]=o/r,d[g++]=p/n,a<3&&u<3&&(1!==a||1!==u)&&(h[v++]=y,h[v++]=y+1,h[v++]=y+s+1,h[v++]=y+1,h[v++]=y+s+2,h[v++]=y+s+1),y++,o+=e)}p+=e}const j=new Uint32Array(h.length);return new b["a"]([["position",{size:3,data:l,exclusive:!0}],["normal",{size:3,data:O,exclusive:!0}],["uv0",{size:2,data:d,exclusive:!0}]],[["position",h],["normal",j],["uv0",h]])}const O=[0,0,1];var v=a("eec2"),j=a("6611"),w=a("6061"),x=a("1e2c"),_=a("ad96"),C=a("365a"),S=a("6c7a");const E=n["a"].getLogger("esri.views.3d.layers.DynamicLayerView3D");let P=class extends(Object(S["a"])(Object(p["a"])(C["a"]))){constructor(){super(...arguments),this.drapeSourceType=0,this.updatePolicy=1,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this.refreshDebounced=Object(o["i"])(async e=>{this.destroyed||await this._doRefresh(e).catch(e=>{Object(o["m"])(e)||n["a"].getLogger(this.declaredClass).error(e)})},2e3)}initialize(){this.addResolvingPromise(Object(v["a"])(this).then(e=>this._set("fullExtentInLocalViewSpatialReference",e))),this.updatingHandles.add(this,"suspended",()=>this._suspendedChangeHandler()),this.handles.add(this.view.resourceController.scheduler.registerIdleStateCallbacks(()=>{this._isScaleRangeActive()&&this.notifyChange("suspended")},()=>{})),this._isScaleRangeLayer()&&this.updatingHandles.add(this.layer,"scaleRangeId",()=>this.notifyChange("suspended"))}destroy(){this.clear()}setDrapingExtent(e,t){this._spatialReference=t,e.forEach(e=>{this._overlays[e.index]=e,this._updateImageExtent(e)})}_updateImageExtent(e){const t=this._clippedExtent(e.extent,T);if(Object(s["k"])(t))return;const a=g(e.extent,t,e.resolution);let i=e.pixelRatio*this.view.pixelRatio;if("imageMaxWidth"in this.layer||"imageMaxHeight"in this.layer){const e=this.layer.imageMaxWidth,t=this.layer.imageMaxHeight;if(a.width>e){const t=e/a.width;a.height=Math.floor(a.height*t),a.width=e,i*=t}if(a.height>t){const e=t/a.height;a.width=Math.floor(a.width*e),a.height=t,i*=e}}const r=this._extents[e.index];r&&Object(u["p"])(r.extent,t)&&this._imageSizeEquals(t,r.imageSize,a)||(this._extents[e.index]={extent:Object(u["m"])(t),imageSize:a,pixelRatio:i},this.suspended||this._fetch(e.index).catch(e=>{Object(o["m"])(e)||E.error(e)}))}clear(){for(let e=0;e<this._images.length;e++)this._clearImage(e)}async doRefresh(){return this._doRefresh()}async _doRefresh(e){if(this.suspended)return;const t=[];for(let a=0;a<this._extents.length;a++)this._extents[a]&&t.push(this._fetch(a,e));await Object(o["j"])(t)}canResume(){if(!super.canResume())return!1;if(this._isScaleRangeLayer()){const{minScale:e,maxScale:t}=this.layer;if(e>0||t>0){const a=this.view.scale;if(a<t||e>0&&a>e)return!1}}return!0}isUpdating(){return this._images.some(e=>!!e.loadingPromise)}async processResult(e,t,a){(t instanceof HTMLImageElement||t instanceof HTMLCanvasElement)&&(e.image=t)}findExtentInfoAt(e){for(const t of this._extents){const a=t.extent;if(new h["a"](a[0],a[1],a[2],a[3],this._spatialReference).contains(e))return t}return null}getFetchOptions(){}async redraw(e,t){await Object(r["b"])(this._images,async(a,i)=>{a&&(await e(a,t),await this._createStageObjects(i,a.image,t))})}_imageSizeEquals(e,t,a){if(!this.maximumDataResolution)return!1;const i=Object(u["C"])(e)/this.maximumDataResolution.x,r=Object(u["v"])(e)/this.maximumDataResolution.y,n=i/t.width,s=r/t.height,o=i/a.width,c=r/a.height,l=Math.abs(n-o),d=Math.abs(s-c),h=j["a"].TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return l<=h&&d<=h}async _fetch(e,t){if(this.suspended)return;const a=this._extents[e],i=a.extent;this._images[e]||(this._images[e]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:Object(u["m"])(i)});const r=this._images[e];r.loadingAbortController&&(r.loadingAbortController.abort(),r.loadingAbortController=null);const n=new h["a"](i[0],i[1],i[2],i[3],this._spatialReference);if(0===n.width||0===n.height)return void this._clearImage(e);const s=new AbortController;r.loadingAbortController=s,Object(o["r"])(t,()=>s.abort());const c=s.signal,l=this._waitFetchReady(c).then(()=>{const t={requestAsImageElement:!0,pixelRatio:this._overlays[e].pixelRatio,...this.getFetchOptions(),signal:c},{height:i,width:r}=a.imageSize;return this.layer.fetchImage(n,r,i,t)}).then(e=>{if(Object(o["n"])(c))throw E.warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),Object(o["e"])();return this.processResult(r,e)}).then(()=>Object(u["l"])(r.renderExtent,i));r.loadingPromise=l,Object(o["c"])(l,()=>{l===r.loadingPromise&&(r.loadingPromise=null,r.loadingAbortController=null)}),this.notifyChange("updating"),await l.then(async()=>{if(c.aborted)throw Object(o["e"])();await this._createStageObjects(e,r.image,c),this.notifyChange("updating")}).catch(e=>{throw e&&!Object(o["m"])(e)&&E.error(e),this.notifyChange("updating"),e})}_clearImage(e){const t=this._images[e];if(t){Object(s["l"])(t.renderGeometry)&&(this.view.basemapTerrain.overlayManager.renderer.removeGeometries([t.renderGeometry],this,2),t.renderGeometry=null);const e=this.view._stage;e.remove(t.texture),t.texture=null,e.remove(t.material),t.material=null,t.loadingAbortController&&(t.loadingAbortController.abort(),t.loadingAbortController=null),t.loadingPromise=null,t.image=null,t.pixelData=null}}async _createStageObjects(e,t,a){const i=this.view._stage,n=this._images[e],c=this.view.basemapTerrain.overlayManager.renderer,l=()=>{i.remove(n.texture),n.texture=null,Object(s["l"])(n.renderGeometry)&&(c.removeGeometries([n.renderGeometry],this,2),n.renderGeometry=null)};if(t){const d=new x["a"](t,{width:t.width,height:t.height,preMultiplyAlpha:!0,wrap:{s:33071,t:33071}});let h;if(await Object(r["d"])(this._images[0===e?1:0].loadingPromise),Object(o["w"])(a),0===e)h=f(n.renderExtent);else{const e=this._images[0].renderExtent;if(!e)return void l();h=y(e,n.renderExtent)}l(),i.add(d),i.loadSynchronous(d),n.texture=d,Object(s["k"])(n.material)?(n.material=new _["a"]({transparent:!0,textureId:d.id}),i.add(n.material)):n.material.setParameters({textureId:d.id}),n.renderGeometry=new w["a"](h,n.material),n.renderGeometry.origin=this._overlays[e].renderLocalOrigin,c.addGeometries([n.renderGeometry],this,2)}else l(),i.remove(n.material),n.material=null}_isScaleRangeLayer(){return"minScale"in this.layer&&"maxScale"in this.layer}_isScaleRangeActive(){return!!this._isScaleRangeLayer()&&(this.layer.minScale>0||this.layer.maxScale>0)}_clippedExtent(e,t){if("local"!==this.view.viewingMode)return Object(u["l"])(t,e);const a=this.view.basemapTerrain;return a.ready?Object(u["w"])(e,a.extent,t):Object(u["l"])(t,e)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(e){await Object(c["k"])(this.view,"stationary",e),Object(o["w"])(e)}};Object(i["a"])([Object(l["b"])()],P.prototype,"layer",void 0),Object(i["a"])([Object(l["b"])()],P.prototype,"suspended",void 0),Object(i["a"])([Object(l["b"])({readOnly:!0})],P.prototype,"fullExtentInLocalViewSpatialReference",void 0),Object(i["a"])([Object(l["b"])()],P.prototype,"updating",void 0),P=Object(i["a"])([Object(d["a"])("esri.views.3d.layers.DynamicLayerView3D")],P);const T=Object(u["m"])(),R=P},ad96:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var i=a("b061"),r=a("68af"),n=a("35b3"),s=a("7438"),o=a("8675"),c=a("7c51"),l=a("a4ee"),d=a("d272"),h=a("c6d7"),u=a("8e97"),p=a("c3a4"),b=a("ca98"),m=a("da35"),g=a("fa1e"),f=a("c829"),y=a("87b7"),O=a("f3d9"),v=a("189c");class j extends b["a"]{initializeProgram(e){const t=j.shader.get(),a=this.configuration,i=t.build({output:a.output,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,OITEnabled:0===a.transparencyPassType,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new f["a"](e.rctx,i,g["a"])}bindPass(e,t){Object(u["c"])(this.program,t.camera.projectionMatrix),this.program.setUniform1f("opacity",e.opacity),t.multipassTerrainEnabled&&(this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(h["a"])(this.program,t))}bindDraw(e){Object(u["d"])(this.program,e),Object(d["c"])(this.program,this.configuration,e),this.program.rebindTextures()}setPipelineState(e,t){const a=this.configuration,i=3===e,r=2===e;return Object(v["g"])({blending:0!==a.output&&7!==a.output||!a.transparent?null:i?w:Object(s["a"])(e),culling:Object(v["c"])(a.cullFace),depthTest:{func:Object(s["b"])(e)},depthWrite:i?a.writeDepth&&v["e"]:Object(s["c"])(e),colorWrite:v["d"],stencilWrite:a.sceneHasOcludees?y["j"]:null,stencilTest:a.sceneHasOcludees?t?y["f"]:y["e"]:null,polygonOffset:i||r?null:Object(s["h"])(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}j.shader=new p["a"](O["a"],()=>a.e("chunk-2d215c84").then(a.bind(null,"c056")));const w=Object(v["i"])(1,771);class x extends m["a"]{constructor(){super(...arguments),this.output=0,this.cullFace=0,this.slicePlaneEnabled=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(l["a"])([Object(m["b"])({count:8})],x.prototype,"output",void 0),Object(l["a"])([Object(m["b"])({count:3})],x.prototype,"cullFace",void 0),Object(l["a"])([Object(m["b"])()],x.prototype,"slicePlaneEnabled",void 0),Object(l["a"])([Object(m["b"])()],x.prototype,"transparent",void 0),Object(l["a"])([Object(m["b"])()],x.prototype,"enableOffset",void 0),Object(l["a"])([Object(m["b"])()],x.prototype,"writeDepth",void 0),Object(l["a"])([Object(m["b"])()],x.prototype,"sceneHasOcludees",void 0),Object(l["a"])([Object(m["b"])({count:4})],x.prototype,"transparencyPassType",void 0),Object(l["a"])([Object(m["b"])()],x.prototype,"multipassTerrainEnabled",void 0),Object(l["a"])([Object(m["b"])()],x.prototype,"cullAboveGround",void 0);class _ extends n["a"]{constructor(e){super(e,S),this.supportsEdges=!0,this.techniqueConfig=new x}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<s["e"],this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig}intersect(e,t,a,i,r,n,s){Object(c["i"])(e,t,i,r,n,void 0,s)}requiresSlot(e,t){return 20===e||(4===Object(i["b"])(t)?2===e:e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2))}createGLMaterial(e){return 0===e.output||7===e.output||4===e.output?new C(e):void 0}createBufferWriter(){return new o["a"](o["d"])}}class C extends r["a"]{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(j,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&(this._material.setParameters({sceneHasOcludees:e.hasOccludees}),this.updateParameters(e))}beginSlot(e){return 0!==this._output&&7!==this._output||this._updateOccludeeState(e),this.updateParameters(e)}bind(e,t){this.bindTextures(t.program),this.bindTextureScale(t.program),t.bindPass(this._material.parameters,e)}}const S={transparent:!1,writeDepth:!0,slicePlaneEnabled:!1,cullFace:0,sceneHasOcludees:!1,opacity:1,textureId:null,initTextureTransparent:!0,...n["b"]}},eec2:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a("b2b2"),r=a("9786"),n=a("e2e8");function s(e){const t=e.view.spatialReference,a=e.layer.fullExtent,s=Object(i["l"])(a)&&a.spatialReference;if(Object(i["k"])(a)||!s)return Promise.resolve(null);if(s.equals(t))return Promise.resolve(a.clone());const o=Object(r["d"])(a,t);return Object(i["l"])(o)?Promise.resolve(o):e.view.state.isLocal?Object(n["projectGeometry"])(a,t,e.layer.portalItem).then(t=>!e.destroyed&&t?t:void 0).catch(()=>null):Promise.resolve(null)}},f3d9:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var i=a("d272"),r=a("4db9"),n=a("d047"),s=a("c6d7"),o=a("ebd5"),c=a("4377"),l=a("3886"),d=a("690a");function h(e){const t=new d["a"];return t.include(r["a"],{linearDepth:!1}),t.vertex.uniforms.add("proj","mat4").add("view","mat4"),t.attributes.add("position","vec3"),t.attributes.add("uv0","vec2"),t.varyings.add("vpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.vertex.uniforms.add("textureCoordinateScaleFactor","vec2"),t.vertex.code.add(l["a"]`
    void main(void) {
      vpos = position;
      ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),t.include(i["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(n["a"]),t.include(s["b"],e)),t.fragment.uniforms.add("tex","sampler2D"),t.fragment.uniforms.add("opacity","float"),t.varyings.add("vTexCoord","vec2"),7===e.output?t.fragment.code.add(l["a"]`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${l["a"].float(o["b"])}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(t.fragment.include(c["a"]),t.fragment.code.add(l["a"]`
    void main() {
      discardBySlice(vpos);
      ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${l["a"].float(o["b"])}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),t}const u=Object.freeze({__proto__:null,build:h})}}]);