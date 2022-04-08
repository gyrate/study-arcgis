(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72218984"],{"0e25":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("c649");class a{constructor(){this.items=[]}addObject(e,t){this.items.push({type:0,objectStateId:t,object:e})}addRenderGeometry(e,t,i){this.items.push({type:1,objectStateId:t,renderGeometry:e,owner:i})}addExternal(e,t){this.items.push({type:2,objectStateId:t,remove:e})}remove(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];i.objectStateId===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeObject(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];0===i.type&&i.object===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeRenderGeometry(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];1===i.type&&i.renderGeometry===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeAll(){this.items.forEach(e=>{this._removeObjectStateItem(e)}),this.items=[]}_removeObjectStateItem(e){switch(e.type){case 0:0===e.objectStateId.channel?e.object.removeHighlight(e.objectStateId):1===e.objectStateId.channel&&e.object.removeOcclude(e.objectStateId);break;case 1:e.owner.removeRenderGeometryObjectState(e.renderGeometry,e.objectStateId);break;case 2:e.remove(e.objectStateId)}}}class r{constructor(e,t){this.stateType=e,this.objectIdField=t,this.objectStateSet=new a,this.ids=new Set,this.paused=!1}hasGraphic(e){if(this.objectIdField){const t=e.graphic.attributes[this.objectIdField];return this.ids.has(t)}return this.ids.has(e.graphic.uid)}}class n{constructor(e){this._graphicsCore=e,this._stateSets=new Array}destroy(){this._stateSets&&this._stateSets.forEach(e=>e.objectStateSet.removeAll()),this._stateSets=null}acquireSet(e,t){const i=new r(e,t);this._stateSets.push(i);const a=Object(s["c"])(()=>this.releaseSet(i));return{set:i,handle:a}}releaseSet(e){e.objectStateSet.removeAll();const t=this._stateSets?this._stateSets.indexOf(e):-1;-1!==t&&this._stateSets.splice(t,1)}_addObjectStateSet(e,t){e.addObjectStateSet(t.stateType,t.objectStateSet)}_removeObjectStateSet(e,t){e.removeObjectState(t.objectStateSet)}setUid(e,t){e.ids.add(t);const i=this._graphicsCore.graphics3DGraphics.get(t);i&&this._addObjectStateSet(i,e)}setUids(e,t){t.forEach(t=>this.setUid(e,t))}setObjectIds(e,t){t.forEach(t=>e.ids.add(t)),this.initializeSet(e)}addGraphic(e){this._stateSets.forEach(t=>{!t.paused&&t.hasGraphic(e)&&this._addObjectStateSet(e,t)})}removeGraphic(e){this._stateSets.forEach(t=>{t.hasGraphic(e)&&this._removeObjectStateSet(e,t)})}allGraphicsDeleted(){this._stateSets&&this._stateSets.forEach(e=>e.objectStateSet.removeAll())}initializeSet(e){const t=this._graphicsCore.graphics3DGraphics;e.objectIdField?t.forEach(t=>{t&&e.hasGraphic(t)&&this._addObjectStateSet(t,e)}):e.ids.forEach(i=>{const s=t.get(i);s&&this._addObjectStateSet(s,e)})}get test(){return{states:this._stateSets}}}},"0efb":function(e,t,i){"use strict";var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=(i("e92d"),i("cea0"),i("59b2")),n=i("d386"),h=(i("e041"),i("8eed"),i("f402"),i("f4cc")),c=i("fc29"),o=i("2c4f"),l=i("8d60"),d=i("af40"),p=i("a6a3"),u=i("3795"),b=i("0f1c"),g=i("c64f"),y=i("d347"),m=i("d3cf"),f=i("ba58"),O=i("ed70"),j=i("4c84"),v=i("3422"),S=i("8202"),w=i("0e25");let I=class extends c["a"]{constructor(e){super(e),this.graphicsCore=null,this.elevationAlignment=new S["a"],this.watchUpdatingTracking=new y["a"],this.handles=new d["a"],this.suspendResumeExtent=null}normalizeCtorArgs(e){let t=null;e.scaleVisibilityEnabled&&(delete(e={...e}).scaleVisibilityEnabled,t=new v["a"]);const i=new j["a"]({owner:e.owner,layer:e.layer,preferredUpdatePolicy:0,graphicSymbolSupported:!0});return{...e,graphicsCore:i,scaleVisibility:t}}initialize(){const e=this.scaleVisibility;Object(a["k"])(e)&&"minScale"in this.layer&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",()=>e.layerMinMaxScaleChangeHandler()),"elevationInfo"in this.layer&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",(e,t)=>{Object(b["a"])(e,t)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange())})}async setup(){const e=(e,t,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i);if(this.elevationAlignment.setup(this.owner,e,this.graphicsCore,this.view.elevationProvider),Object(a["k"])(this.scaleVisibility)&&"minScale"in this.layer){const t=this.owner.view.basemapTerrain;this.scaleVisibility.setup(this.owner,this.layer,e,this.graphicsCore,t)}this._set("objectStates",new w["a"](this.graphicsCore));try{await this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates})}catch(t){if(Object(h["n"])(t))return;throw t}this.destroyed||(this.handles.add(this.view.watch("clippingArea",()=>this.updateClippingExtent(),!0)),this.updateClippingExtent(),this.setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this.handles=Object(a["e"])(this.handles),this.watchUpdatingTracking.destroy(),this._set("elevationAlignment",Object(a["e"])(this.elevationAlignment)),this._set("scaleVisibility",Object(a["e"])(this.scaleVisibility)),this._set("objectStates",Object(a["e"])(this.objectStates)),this._set("graphicsCore",Object(a["e"])(this.graphicsCore))}get suspended(){return!(!Object(a["k"])(this.scaleVisibility)||!this.scaleVisibility.suspended)}get updating(){var e,t;return!!(null!=(e=this.graphicsCore)&&e.updating||Object(a["k"])(this.scaleVisibility)&&this.scaleVisibility.updating||null!=(t=this.watchUpdatingTracking)&&t.updating)}getGraphicFromGraphicUid(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find(t=>t.uid===e);if(t){const e=this.layer instanceof p["a"]?this.layer:null;return Object(m["c"])(t,e)}}}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){const{set:t,handle:i}=this.objectStates.acquireSet(1,null);return this.objectStates.setUid(t,e.uid),i}highlight(e){if(e instanceof g["a"])return x;if("number"==typeof e)return this.highlight([e]);if(e instanceof l["a"])return this.highlight([e]);if(e instanceof o["a"]&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof l["a"]){const t=e.map(e=>e.uid),{set:i,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setUids(i,t),s}if("number"==typeof e[0]){const t=e,{set:i,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setObjectIds(i,t),s}}return x}updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}updateSuspendResumeExtent(){Object(a["j"])(this.scaleVisibility)||(this.suspendResumeExtent=Object(f["e"])(this.graphicsCore.computedExtent,this.suspendResumeExtent,O["a"],this.graphicsCore.extentPadding),this.scaleVisibility.setExtent(this.suspendResumeExtent))}setupSuspendResumeExtent(){Object(a["j"])(this.scaleVisibility)||(Object(u["a"])(this.graphicsCore,"computedExtent",e=>this.updateSuspendResumeExtent(),!0),this.graphicsCore.watch("extentPadding",e=>this.updateSuspendResumeExtent()))}};Object(s["a"])([Object(r["b"])({constructOnly:!0})],I.prototype,"owner",void 0),Object(s["a"])([Object(r["b"])({constructOnly:!0})],I.prototype,"layer",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0,aliasOf:"owner.view"})],I.prototype,"view",void 0),Object(s["a"])([Object(r["b"])({constructOnly:!0})],I.prototype,"graphicsCore",void 0),Object(s["a"])([Object(r["b"])({constructOnly:!0})],I.prototype,"scaleVisibility",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],I.prototype,"elevationAlignment",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],I.prototype,"objectStates",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],I.prototype,"watchUpdatingTracking",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],I.prototype,"suspended",null),Object(s["a"])([Object(r["b"])({readOnly:!0})],I.prototype,"updating",null),I=Object(s["a"])([Object(n["a"])("esri.views.3d.layers.graphics.Graphics3DGraphicLikeLayerView")],I);const x={remove(){},pause(){},resume(){}};var E=I;t["a"]=E},4637:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var s=i("5f6c"),a=Object(s["b"])((function(e){var t;void 0!==(t=function(){function e(e,i,a,r,n){t(e,i,a||0,r||e.length-1,n||s)}function t(e,s,a,r,n){for(;r>a;){if(r-a>600){var h=r-a+1,c=s-a+1,o=Math.log(h),l=.5*Math.exp(2*o/3),d=.5*Math.sqrt(o*l*(h-l)/h)*(c-h/2<0?-1:1);t(e,s,Math.max(a,Math.floor(s-c*l/h+d)),Math.min(r,Math.floor(s+(h-c)*l/h+d)),n)}var p=e[s],u=a,b=r;for(i(e,a,s),n(e[r],p)>0&&i(e,a,r);u<b;){for(i(e,u,b),u++,b--;n(e[u],p)<0;)u++;for(;n(e[b],p)>0;)b--}0===n(e[a],p)?i(e,a,b):i(e,++b,r),b<=s&&(a=b+1),s<=b&&(r=b-1)}}function i(e,t,i){var s=e[t];e[t]=e[i],e[i]=s}function s(e,t){return e<t?-1:e>t?1:0}return e}())&&(e.exports=t)}))},8202:function(e,t,i){"use strict";var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=(i("e92d"),i("cea0"),i("59b2")),n=i("d386"),h=(i("e041"),i("8eed"),i("f402"),i("fc29")),c=i("ce6d"),o=i("af40"),l=i("9305"),d=i("8a44"),p=i("9180");const u=.05;class b{constructor(){this.extents=new d["a"]({allocator:e=>e||Object(p["l"])()}),this.tempExtent=Object(p["l"])(),this.dirty=!1}get empty(){return 0===this.extents.length}clear(){this.extents.clear()}add(e){this.contains(e)||(this.removeContained(e),Object(p["z"])(this.extents.pushNew(),e),this.dirty=!0)}pop(){return this.dirty&&this.mergeTight(),this.extents.pop()}merge(e){return this.mergeTight(e),e.hasProgressed}mergeTight(e=l["d"]){const t=this.extents,i=new Set;let s=0;for(;s!==t.length;){t.sort((e,t)=>e[0]-t[0]),s=t.length,i.clear();for(let s=0;s<t.length;++s){if(e.done)return;const a=t.getItemAt(s);for(let e=s+1;e<t.length;++e){const s=t.getItemAt(e);if(s[0]>=a[2])break;i.add(s)}i.forEach(s=>{if(a===s)return;if(s[2]<=a[0])return void i.delete(s);const r=Object(p["d"])(a),n=Object(p["d"])(s),h=this.tempExtent;Object(p["p"])(a,s,h);const c=r+n;(Object(p["d"])(h)-c)/c<u&&(Object(p["z"])(a,h),i.delete(s),t.remove(s),e.madeProgress())}),i.add(a)}}this.dirty=!1}contains(e){return this.extents.some(t=>Object(p["g"])(t,e))}removeContained(e){this.extents.filterInPlace(t=>!Object(p["g"])(e,t))}get test(){const e=this;return{containsPoint:t=>e.extents.some(e=>Object(p["h"])(e,t))}}}let g=class extends h["a"]{constructor(){super(...arguments),this.dirtyExtents=new b,this.globalDirty=!1,this.dirtyGraphicsSet=new Set,this.handles=new o["a"],this.updateElevation=!1,this.layerView=null,this.graphicsCore=null,this.events=new c["a"]}get updating(){return this.needsUpdate()}setup(e,t,i,s){this.layerView=e,this.queryGraphicUIDsInExtent=t,this.graphicsCore=i,this.elevationProvider=s;const a=this.layerView.view.resourceController.scheduler;this.handles.add([s.on("elevation-change",e=>this._elevationChanged(e)),this.layerView.watch("suspended",()=>this.suspendedChange()),a.registerTask(l["b"].ELEVATION_ALIGNMENT,e=>this.update(e),()=>this.needsUpdate())])}destroy(){this.dirtyGraphicsSet.clear(),this.handles.destroy(),this.handles=null,this.layerView=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null}clear(){this.dirtyGraphicsSet.clear(),this.notifyChange("updating")}suspendedChange(){!0===this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))}elevationInfoChange(){this.globalDirty=!0,this.notifyChange("updating")}needsUpdate(){return this.dirtyGraphicsSet.size>0||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty}update(e){for(this.globalDirty&&(this.markAllGraphicsElevationDirty(),this.globalDirty=!1,e.madeProgress()),e.run(()=>this.dirtyExtents.merge(e));this.needsUpdate()&&!e.done;)this._updateDirtyGraphics(e),this._updateDirtyExtents(e);this.layerView.view.deconflictor.setDirty(),this.notifyChange("updating")}_updateDirtyGraphics(e){const t=this.layerView.view.renderCoordsHelper,i=this.graphicsCore.asyncUpdates;for(const s of this.dirtyGraphicsSet.keys()){const r=this.graphicsCore.getGraphics3DGraphicById(s);if(this.dirtyGraphicsSet.delete(s),Object(a["k"])(r)&&(r.alignWithElevation(this.elevationProvider,t,i),e.madeProgress()),e.done)return}}_updateDirtyExtents(e){for(;!this.dirtyExtents.empty&&!e.done;){const t=this.dirtyExtents.pop(),i=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:t,spatialReference:i}),this.queryGraphicUIDsInExtent(t,i,e=>{const t=this.graphicsCore.getGraphics3DGraphicById(e);Object(a["k"])(t)&&t.needsElevationUpdates()&&this.dirtyGraphicsSet.add(e)}),e.madeProgress()}}markAllGraphicsElevationDirty(){this.dirtyExtents.clear(),this.dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach((e,t)=>this.dirtyGraphicsSet.add(t))}_elevationChanged(e){if("scene"===e.context&&(!this.graphicsCore.layer.elevationInfo||"relative-to-scene"!==this.graphicsCore.layer.elevationInfo.mode))return;const{extent:t,spatialReference:i}=e;if(this.layerView.suspended){if(!this.updateElevation){const e=this.graphicsCore.computedExtent;e&&t[2]>e.xmin&&t[0]<e.xmax&&t[3]>e.ymin&&t[1]<e.ymax&&(this.updateElevation=!0)}this.events.emit("invalidate-elevation",{extent:t,spatialReference:i})}else t[0]===-1/0?this.globalDirty=!0:this.dirtyExtents.add(t),this.notifyChange("updating")}};Object(s["a"])([Object(r["b"])({readOnly:!0})],g.prototype,"updating",null),g=Object(s["a"])([Object(n["a"])("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],g);var y=g;t["a"]=y},bb49:function(e,t,i){"use strict";i.r(t);var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=(i("e92d"),i("cea0"),i("59b2")),n=i("d386"),h=(i("e041"),i("8eed"),i("f402"),i("3795")),c=i("ba58"),o=i("66af"),l=i("365a"),d=i("eec2"),p=i("ebae"),u=i("0efb");const b=1.2;let g=class extends(Object(o["a"])(l["a"])){constructor(){super(...arguments),this.frustumVisibility=new p["a"],this.slicePlaneEnabled=!1,this.drapeSourceType=1,this.suspendResumeExtent=null,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("graphics3d",new u["a"]({owner:this,layer:this.layer,scaleVisibilityEnabled:!0})),this.graphics3d.setup(),this.frustumVisibility.setup(this),this.setupSuspendResumeExtent(),this.updatingHandles.add(this,"fullOpacity",()=>this.graphics3d.graphicsCore.opacityChange()),this.handles.add(this.layer.on("graphic-update",e=>this.graphics3d.graphicsCore.graphicUpdateHandler(e)));const e=Object(d["a"])(this).then(e=>{this.fullExtentInLocalViewSpatialReference=e});e&&this.addResolvingPromise(e),this.layer.internal?this.notifyChange("updating"):this.handles.add(Object(h["m"])(this.view,"basemapTerrain.ready",()=>this.notifyChange("updating")))}destroy(){this.frustumVisibility&&(this.frustumVisibility.destroy(),this._set("frustumVisibility",null)),this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null))}get legendEnabled(){return this.canResume()&&!this.frustumVisibility.suspended}get suspendInfo(){var e;const t={};return Object(a["k"])(this.graphics3d.scaleVisibility)&&this.graphics3d.scaleVisibility.suspended&&(t.outsideScaleRange=!0),t.outsideOfView=!(null==(e=this.frustumVisibility)||!e.suspended),t}async fetchPopupFeatures(e,t){return Object(a["k"])(t)?t.clientGraphics:null}notifyGraphicGeometryChanged(e){this.graphics3d.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphics3d.graphicsCore.notifyGraphicVisibilityChanged(e)}get graphics3DGraphics(){return this.graphics3d.graphicsCore.graphics3DGraphics}get graphics3DGraphicsByObjectID(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null}get symbolUpdateType(){return this.graphics3d.graphicsCore.symbolUpdateType}getGraphicFromGraphicUid(e){return this.graphics3d.getGraphicFromGraphicUid(e)}whenGraphicBounds(e,t){return this.graphics3d.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.graphics3d?this.graphics3d.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphics3d.getSymbolLayerSize(e,t)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.graphics3d.maskOccludee(e)}highlight(e){return this.graphics3d.highlight(e)}canResume(){var e;return super.canResume()&&!(null!=(e=this.graphics3d)&&e.suspended)}isUpdating(){var e,t;return!(!(this.graphics3d&&this.graphics3d.updating||this.frustumVisibility&&this.frustumVisibility.updating)&&(this.layer.internal||null!=(e=this.view)&&null!=(t=e.basemapTerrain)&&t.ready))}setupSuspendResumeExtent(){const e=()=>{this.suspendResumeExtent=Object(c["e"])(this.graphics3d.graphicsCore.computedExtent,this.suspendResumeExtent,b,this.graphics3d.graphicsCore.extentPadding),this.frustumVisibility.setExtent(this.suspendResumeExtent)};Object(h["a"])(this.graphics3d.graphicsCore,"computedExtent",()=>e(),!0),Object(h["e"])(this.graphics3d.graphicsCore,"extentPadding",()=>e(),!0)}get performanceInfo(){return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.frustumVisibility.suspended}}};Object(s["a"])([Object(r["b"])({aliasOf:"layer.graphics"})],g.prototype,"loadedGraphics",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],g.prototype,"suspended",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],g.prototype,"legendEnabled",null),Object(s["a"])([Object(r["b"])({readOnly:!0})],g.prototype,"updating",void 0),Object(s["a"])([Object(r["b"])()],g.prototype,"layer",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],g.prototype,"frustumVisibility",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],g.prototype,"graphics3d",void 0),Object(s["a"])([Object(r["b"])({type:Boolean})],g.prototype,"slicePlaneEnabled",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],g.prototype,"suspendInfo",null),g=Object(s["a"])([Object(n["a"])("esri.views.3d.layers.GraphicsLayerView3D")],g);var y=g;t["default"]=y},d97e:function(e,t,i){"use strict";function s(e,t){return e?t?4:3:t?3:2}function a(e,t,i,a,h){if(!t||!t.lengths.length)return null;const c="upperLeft"===(null==h?void 0:h.originPosition)?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const o=e.coords,l=[],d=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:p,coords:u}=t,b=s(i,a);let g=0;for(const s of p){const e=r(d,u,g,s,i,a,c);e&&l.push(e),g+=s*b}if(l.sort((e,t)=>{let s=c*e[2]-c*t[2];return 0===s&&i&&(s=e[4]-t[4]),s}),l.length){let e=6*l[0][2];o[0]=l[0][0]/e,o[1]=l[0][1]/e,i&&(e=6*l[0][4],o[2]=0!==e?l[0][3]/e:0),(o[0]<d[0]||o[0]>d[1]||o[1]<d[2]||o[1]>d[3]||i&&(o[2]<d[4]||o[2]>d[5]))&&(o.length=0)}if(!o.length){const e=t.lengths[0]?n(u,0,p[0],i,a):null;if(!e)return null;o[0]=e[0],o[1]=e[1],i&&e.length>2&&(o[2]=e[2])}return e}function r(e,t,i,a,r,n,h=1){const c=s(r,n);let o=i,l=i+c,d=0,p=0,u=0,b=0,g=0;for(let s=0,m=a-1;s<m;s++,o+=c,l+=c){const i=t[o],s=t[o+1],a=t[o+2],n=t[l],h=t[l+1],c=t[l+2];let y=i*h-n*s;b+=y,d+=(i+n)*y,p+=(s+h)*y,r&&(y=i*c-n*a,u+=(a+c)*y,g+=y),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),r&&(a<e[4]&&(e[4]=a),a>e[5]&&(e[5]=a))}if(b*h>0&&(b*=-1),g*h>0&&(g*=-1),!b)return null;const y=[d,p,.5*b];return r&&(y[3]=u,y[4]=.5*g),y}function n(e,t,i,a,r){const n=s(a,r);let d=t,p=t+n,u=0,b=0,g=0,y=0;for(let s=0,m=i-1;s<m;s++,d+=n,p+=n){const t=e[d],i=e[d+1],s=e[d+2],r=e[p],n=e[p+1],m=e[p+2],f=a?c(t,i,s,r,n,m):h(t,i,r,n);if(f)if(u+=f,a){const e=l(t,i,s,r,n,m);b+=f*e[0],g+=f*e[1],y+=f*e[2]}else{const e=o(t,i,r,n);b+=f*e[0],g+=f*e[1]}}return u>0?a?[b/u,g/u,y/u]:[b/u,g/u]:i>0?a?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function h(e,t,i,s){const a=i-e,r=s-t;return Math.sqrt(a*a+r*r)}function c(e,t,i,s,a,r){const n=s-e,h=a-t,c=r-i;return Math.sqrt(n*n+h*h+c*c)}function o(e,t,i,s){return[e+.5*(i-e),t+.5*(s-t)]}function l(e,t,i,s,a,r){return[e+.5*(s-e),t+.5*(a-t),i+.5*(r-i)]}i.d(t,"a",(function(){return a}))},ebae:function(e,t,i){"use strict";var s=i("a4ee"),a=(i("c120"),i("e92d"),i("cea0"),i("59b2")),r=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("fc29")),h=i("af40"),c=i("3795"),o=i("f694"),l=i("9305"),d=i("6b38");const p=1.2;let u=class extends n["a"]{constructor(){super(...arguments),this.suspended=!1,this.extent=null,this.extentIntersectionDirty=!0,this._isVisibleBelowSurface=!1,this.handles=new h["a"],this.layerView=null,this.updating=!0}setup(e){this.layerView=e,this.extentIntersection=new d["a"]({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,i=t.basemapTerrain,s=t.resourceController.scheduler;this.handles.add([t.on("resize",()=>this.viewChange()),t.state.watch("camera",()=>this.viewChange(),!0),s.registerTask(l["b"].FRUSTUM_VISIBILITY,()=>this.update(),()=>this.updating),i.on("elevation-bounds-change",()=>this.elevationBoundsChange())]),"local"===t.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([Object(c["a"])(i,["opacity","wireframe"],()=>this.updateIsVisibleBelowSurface()),Object(c["a"])(t,"map.ground.navigationConstraint.type",()=>this.updateIsVisibleBelowSurface())])}destroy(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}_setDirty(){this.updating||this._set("updating",!0)}setExtent(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()}viewChange(){this._setDirty()}elevationBoundsChange(){this._setDirty(),this.extentIntersectionDirty=!0}set isVisibleBelowSurface(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}updateIsVisibleBelowSurface(){const e=this.layerView.view,t=e.basemapTerrain,i="local"===e.viewingMode,s=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=i||!t.opaque||s}updateExtentIntersection(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const e=this.layerView.view;let t;if(this._isVisibleBelowSurface)t=-.3*Object(o["e"])(e.spatialReference).radius;else{const{min:i,max:s}=e.basemapTerrain.elevationBounds;t=i-Math.max(1,(s-i)*(p-1))}this.extentIntersection.update(this.extent,e.spatialReference,t)}update(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();const e=this.layerView.view.frustum,t=Object(o["e"])(this.layerView.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))}};Object(s["a"])([Object(a["b"])({readOnly:!0})],u.prototype,"suspended",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0})],u.prototype,"updating",void 0),u=Object(s["a"])([Object(r["a"])("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],u);var b=u;t["a"]=b},eec2:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i("9786"),a=i("e2e8");function r(e){const t=e.view.spatialReference,i=e.layer.fullExtent,r=i&&i.spatialReference;return r?r.equals(t)?Promise.resolve(i.clone()):Object(s["a"])(r,t)?Promise.resolve(Object(s["d"])(i,t)):e.view.state.isLocal?Object(a["projectGeometry"])(i,t,e.layer.portalItem).then(t=>!e.destroyed&&t?t:void 0).catch(()=>null):Promise.resolve(null):Promise.resolve(null)}}}]);