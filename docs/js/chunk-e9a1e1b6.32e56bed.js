(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9a1e1b6"],{"0e25":function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i("c649");class a{constructor(){this.items=[]}addObject(e,t){this.items.push({type:0,objectStateId:t,object:e})}addRenderGeometry(e,t,i){this.items.push({type:1,objectStateId:t,renderGeometry:e,owner:i})}addExternal(e,t){this.items.push({type:2,objectStateId:t,remove:e})}remove(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];i.objectStateId===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeObject(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];0===i.type&&i.object===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeRenderGeometry(e){for(let t=this.items.length-1;t>=0;--t){const i=this.items[t];1===i.type&&i.renderGeometry===e&&(this._removeObjectStateItem(i),this.items.splice(t,1))}}removeAll(){this.items.forEach(e=>{this._removeObjectStateItem(e)}),this.items=[]}_removeObjectStateItem(e){switch(e.type){case 0:0===e.objectStateId.channel?e.object.removeHighlight(e.objectStateId):1===e.objectStateId.channel&&e.object.removeOcclude(e.objectStateId);break;case 1:e.owner.removeRenderGeometryObjectState(e.renderGeometry,e.objectStateId);break;case 2:e.remove(e.objectStateId)}}}class r{constructor(e,t){this.stateType=e,this.objectIdField=t,this.objectStateSet=new a,this.ids=new Set,this.paused=!1}hasGraphic(e){if(this.objectIdField){const t=e.graphic.attributes[this.objectIdField];return this.ids.has(t)}return this.ids.has(e.graphic.uid)}}class n{constructor(e){this._graphicsCore=e,this._stateSets=new Array}destroy(){this._stateSets&&this._stateSets.forEach(e=>e.objectStateSet.removeAll()),this._stateSets=null}acquireSet(e,t){const i=new r(e,t);this._stateSets.push(i);const a=Object(s["c"])(()=>this.releaseSet(i));return{set:i,handle:a}}releaseSet(e){e.objectStateSet.removeAll();const t=this._stateSets?this._stateSets.indexOf(e):-1;-1!==t&&this._stateSets.splice(t,1)}_addObjectStateSet(e,t){e.addObjectStateSet(t.stateType,t.objectStateSet)}_removeObjectStateSet(e,t){e.removeObjectState(t.objectStateSet)}setUid(e,t){e.ids.add(t);const i=this._graphicsCore.graphics3DGraphics.get(t);i&&this._addObjectStateSet(i,e)}setUids(e,t){t.forEach(t=>this.setUid(e,t))}setObjectIds(e,t){t.forEach(t=>e.ids.add(t)),this.initializeSet(e)}addGraphic(e){this._stateSets.forEach(t=>{!t.paused&&t.hasGraphic(e)&&this._addObjectStateSet(e,t)})}removeGraphic(e){this._stateSets.forEach(t=>{t.hasGraphic(e)&&this._removeObjectStateSet(e,t)})}allGraphicsDeleted(){this._stateSets&&this._stateSets.forEach(e=>e.objectStateSet.removeAll())}initializeSet(e){const t=this._graphicsCore.graphics3DGraphics;e.objectIdField?t.forEach(t=>{t&&e.hasGraphic(t)&&this._addObjectStateSet(t,e)}):e.ids.forEach(i=>{const s=t.get(i);s&&this._addObjectStateSet(s,e)})}get test(){return{states:this._stateSets}}}},"33c9":function(e,t,i){"use strict";var s,a=i("a4ee"),r=(i("c120"),i("7ffa")),n=(i("e92d"),i("cea0"),i("59b2")),c=i("fa8a"),h=i("d386"),l=i("09db"),o=(i("e041"),i("8eed"),i("f402"),i("6a0e")),d=i("a9ab"),u=i("e06a"),p=i("658b"),y=i("c64f");const b=new c["a"]({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),g=new c["a"]({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let f=s=class extends o["a"]{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.hiddenIds=new Set,this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null,this.enabled=!1}writeWhere(e,t){t.where=e||"1=1"}enable(){this._set("enabled",!0)}createQuery(e={}){const{where:t,geometry:i,spatialRelationship:s,timeExtent:a,objectIds:n,units:c,distance:h}=this;return new y["a"]({geometry:Object(r["a"])(i),objectIds:Object(r["a"])(n),spatialRelationship:s,timeExtent:Object(r["a"])(a),where:t,units:c,distance:h,...e})}clone(){const{where:e,geometry:t,spatialRelationship:i,hiddenIds:a,timeExtent:n,objectIds:c,units:h,distance:l}=this,o=new Set;return a.forEach(e=>o.add(e)),new s({geometry:Object(r["a"])(t),hiddenIds:o,objectIds:Object(r["a"])(c),spatialRelationship:i,timeExtent:Object(r["a"])(n),where:e,units:h,distance:l})}};Object(a["a"])([Object(n["b"])({type:String})],f.prototype,"where",void 0),Object(a["a"])([Object(l["a"])("where")],f.prototype,"writeWhere",null),Object(a["a"])([Object(n["b"])({types:u["a"],json:{read:d["a"],write:!0}})],f.prototype,"geometry",void 0),Object(a["a"])([Object(n["b"])({type:String,json:{read:{source:"spatialRel",reader:b.read},write:{target:"spatialRel",writer:b.write}}})],f.prototype,"spatialRelationship",void 0),Object(a["a"])([Object(n["b"])({json:{write:(e,t,i)=>t[i]=Array.from(e),read:e=>new Set(e)}})],f.prototype,"hiddenIds",void 0),Object(a["a"])([Object(n["b"])({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],f.prototype,"distance",void 0),Object(a["a"])([Object(n["b"])({type:[Number],json:{write:!0}})],f.prototype,"objectIds",void 0),Object(a["a"])([Object(n["b"])({type:String,json:{read:g.read,write:{writer:g.write,overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],f.prototype,"units",void 0),Object(a["a"])([Object(n["b"])({type:p["a"],json:{write:!0}})],f.prototype,"timeExtent",void 0),Object(a["a"])([Object(n["b"])({readOnly:!0})],f.prototype,"enabled",void 0),f=s=Object(a["a"])([Object(h["a"])("esri.views.layers.support.FeatureFilter")],f);var j=f;t["a"]=j},"5abc":function(e,t,i){"use strict";var s=i("a4ee"),a=(i("c120"),i("6c97")),r=i("e92d"),n=(i("cea0"),i("59b2")),c=i("d386"),h=(i("e041"),i("8eed"),i("f402"),i("f4cc")),l=i("fc29"),o=i("9786"),d=i("8d60"),u=i("af40"),p=i("3795"),y=i("0f1c"),b=i("c64f"),g=i("d347"),f=i("ba58"),j=i("ed70"),O=i("4c84"),m=i("3422"),w=i("d36d"),S=i("8202"),v=i("b2b2"),_=i("9305"),x=i("33c9"),E=i("a207"),I=i("72e1");const C=r["a"].getLogger("esri.views.3d.layers.graphics.Graphics3DFilterVisibility");let V=class extends l["a"]{constructor(...e){super(...e),this.filter=null,this._dirty=!1,this._querying=!1,this._handles=new u["a"]}get updating(){return this._dirty||this._querying||null!=this._queryResult}setup(e,t){this._layerView=e,this._core=t,this._objectIdField=e.layer.objectIdField,this._queryEngine=new E["a"]({layerView:this._layerView,task:_["b"].FILTER_VISIBILITY});const i=this._layerView.view.resourceController.scheduler;this._handles.add(i.registerTask(_["b"].FILTER_VISIBILITY,e=>this._update(e),()=>this._needsUpdate())),this._handles.add(Object(p["b"])(t.owner,"loadedGraphics","after-changes",e=>this._graphicsChanged(e),()=>this.dirty=!0)),this.filterChanged()}destroy(){this._handles.destroy(),this._handles=null,this.clear(),this._layerView=null,this._core=null}clear(){this._queryEngine.clear()&&(this._core.modifyGraphics3DGraphicVisibilities(e=>e.clearVisibilityFlag(2)),this._queryResult=null,this._querying=!1),this.dirty=!1,this.notifyChange("updating")}_graphicsChanged(e){this._queryEngine&&0==(1&e.type)||(this.dirty=!0)}updateVisibility(e){this.active&&(e.hasVisibilityFlag(2,0)||e.setVisibilityFlag(2,!1,0),this.dirty=!0)}filterChanged(){const e=this.recomputeFilter();e!==this.filter&&(this.filter=e,this.dirty=!0)}get active(){return this.filter&&this._core.graphics3DGraphics.size>0}recomputeFilter(){const e="filter"in this._layerView?this._layerView.filter:null,t="timeExtent"in this._layerView?this._layerView.timeExtent:null,i=Object(I["a"])(this._layerView);if(Object(v["j"])(t)&&Object(v["j"])(i))return e;const s=Object(v["k"])(e)?e.clone():new x["a"];if(Object(v["k"])(t)&&(s.timeExtent=Object(v["k"])(s.timeExtent)?s.timeExtent.intersection(t):t),Object(v["k"])(i)){const e=null==s.where||""===s.where;s.where=e?i:`(${s.where}) AND (${i})`}return s}_needsUpdate(){return this._dirty&&!this._querying||null!=this._queryResult}_update(e){this.active?(!this._dirty||this._querying||e.done||(this._querying=!0,this.dirty=!1,this._queryEngine.executeQueryForIdSet(this.filter).then(e=>{this._queryResult=e,this._querying=!1}).catch(e=>{Object(h["n"])(e)||(C.warn("FeatureFilter query failed: "+e,{error:e}),this._queryResult=new Set,this._core.graphics3DGraphics.forEach(e=>this._queryResult.add(this._getFeatureId(e.graphic))),this._querying=!1)}),e.madeProgress()),this._queryResult&&!e.done&&(this._core.modifyGraphics3DGraphicVisibilities(t=>{if(e.done)return!1;const i=this._queryResult.has(this._getFeatureId(t.graphic));return!!t.setVisibilityFlag(2,i,0)&&(e.madeProgress(),!0)}),e.done||(this._queryResult=null)),this.notifyChange("updating")):this.clear()}_getFeatureId(e){return null==e.objectId?e.attributes[this._objectIdField]:e.objectId}set dirty(e){this._dirty!==e&&(this._dirty=e,this.notifyChange("updating"))}};Object(s["a"])([Object(n["b"])({readOnly:!0})],V.prototype,"updating",null),V=Object(s["a"])([Object(c["a"])("esri.views.3d.layers.graphics.Graphics3DFilterVisibility")],V);var R=i("ebae"),G=i("0e25");let D=class extends l["a"]{constructor(e){super(e),this._handles=new u["a"],this.watchUpdatingTracking=new g["a"],this.suspendResumeExtentMode="computed",this.dataExtent=null,this.suspendResumeExtent=null}get suspended(){var e;return null==(e=this.scaleVisibility)?void 0:e.suspended}get suspendInfo(){var e,t;const i={};return null!=(e=this.scaleVisibility)&&e.suspended&&(i.outsideScaleRange=!0),null!=(t=this.frustumVisibility)&&t.suspended&&(i.outsideOfView=!0),i}get updating(){var e,t,i;return!!(null!=(e=this.graphicsCore)&&e.updating||null!=(t=this.frustumVisibility)&&t.updating||null!=(i=this.watchUpdatingTracking)&&i.updating)}normalizeCtorArgs(e){const t=e.frustumVisibilityEnabled?new R["a"]:null,i=e.scaleVisibilityEnabled?new m["a"]:null,s=(e.filterVisibilityEnabled||e.timeExtentVisibilityEnabled)&&"multipatch"!==e.layer.geometryType?new V:null,a=e.elevationAlignmentEnabled?new S["a"]:null,r=new O["a"]({owner:e.owner,layer:e.layer,preferredUpdatePolicy:e.preferredUpdatePolicy,elevationFeatureExpressionEnabled:e.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:e.owner.hasZ,hasM:e.owner.hasM}),{updateClippingExtent:n,suspendResumeExtentMode:c,dataExtent:h}=e;return{graphicsCore:r,frustumVisibility:t,scaleVisibility:i,filterVisibility:s,elevationAlignment:a,updateClippingExtent:n,suspendResumeExtentMode:c,dataExtent:h}}initialize(){this.scaleVisibility&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",()=>this.scaleVisibility.layerMinMaxScaleChangeHandler()),this.filterVisibility&&(this.watchUpdatingTracking.add(this.owner,"filter",()=>this.filterVisibility.filterChanged()),this.watchUpdatingTracking.add(this.owner,"timeExtent",()=>this.filterVisibility.filterChanged())),this.elevationAlignment&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",(e,t)=>{Object(y["a"])(e,t)&&this.watchUpdatingTracking.addPromise(this.graphicsCore.elevationInfoChange())}),this.watchUpdatingTracking.add(this.layer,"labelsVisible",()=>this.graphicsCore.updateVisibilityInfo()),this.watchUpdatingTracking.add(this.layer,"labelingInfo",(e,t)=>{Object(y["a"])(e,t)&&this.graphicsCore.updateLabelingInfo()})}async setup(){this.frustumVisibility&&this.frustumVisibility.setup(this.owner);const e=this.owner,t=this.owner.view.basemapTerrain,i=(e,t,i)=>this.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(e,t,i);if(this.scaleVisibility&&this.scaleVisibility.setup(e,this.layer,i,this.graphicsCore,t),this.filterVisibility&&("filter"in e||"timeExtent"in e)&&this.filterVisibility.setup(e,this.graphicsCore),this.elevationAlignment){const t=e.view.elevationProvider;this.elevationAlignment.setup(e,i,this.graphicsCore,t)}this._set("objectStates",new G["a"](this.graphicsCore)),this._set("labeling",this.owner.view.labeler.addGraphicsOwner(this.graphicsCore,this.scaleVisibility)),this._set("deconfliction",e.view.deconflictor.addGraphicsOwner(this.graphicsCore)),await Object(h["q"])(this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,filterVisibility:this.filterVisibility,deconflictor:this.deconfliction,labeler:this.labeling,objectStates:this.objectStates})),this.watchUpdatingTracking.add(this.layer,"renderer",e=>this.watchUpdatingTracking.addPromise(this.graphicsCore.rendererChange(e))),this.watchUpdatingTracking.add(e,"fullOpacity",()=>this.graphicsCore.opacityChange()),this.setupSuspendResumeExtent(),this.updateClippingExtent&&(this.watchUpdatingTracking.add(e.view,"clippingArea",()=>this._updateClippingExtent()),this._updateClippingExtent()),this.graphicsCore.startCreateGraphics(),this.graphicsCore.labelsEnabled&&await Object(h["q"])(this.graphicsCore.updateLabelingInfo())}destroy(){this._handles&&(this._handles.destroy(),this._handles=null);const e=["watchUpdatingTracking","frustumVisibility","scaleVisibility","filterVisibility","elevationAlignment","objectStates","graphicsCore"];for(const t of e){const e=this[t];e&&(e.destroy(),this._set(t,null))}this._set("layer",null),this._set("owner",null)}maskOccludee(e){const{set:t,handle:i}=this.objectStates.acquireSet(1,null);return this.objectStates.setUid(t,e.uid),i}highlight(e,t){if(e instanceof b["a"]){const{set:i,handle:s}=this.objectStates.acquireSet(0,t);return this.owner.queryObjectIds(e).then(e=>this.objectStates.setObjectIds(i,e)),s}if("number"==typeof e||"string"==typeof e)return this.highlight([e],t);if(e instanceof d["a"])return this.highlight([e],t);if("toArray"in e&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof d["a"]){const i=e;if(null==Object(w["a"])(this.layer.fieldsIndex,i[0].attributes,t)){const e=i.map(e=>e.uid),{set:t,handle:s}=this.objectStates.acquireSet(0,null);return this.objectStates.setUids(t,e),s}e=i.map(e=>Object(w["a"])(this.layer.fieldsIndex,e.attributes,t))}if("number"==typeof e[0]||"string"==typeof e[0]){const i=e,{set:s,handle:a}=this.objectStates.acquireSet(0,t);return this.objectStates.setObjectIds(s,i),a}}return U}_updateClippingExtent(){const e=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.owner.view.spatialReference)&&(this.updateClippingExtent(e)||this.graphicsCore.recreateAllGraphics())}setupSuspendResumeExtent(){(this.frustumVisibility||this.scaleVisibility)&&this._handles.add(Object(p["a"])(this,"suspendResumeExtentMode",()=>{switch(this._handles.remove(F),this.suspendResumeExtentMode){case"computed":this._handles.add([Object(p["a"])(this.graphicsCore,"computedExtent",e=>this.updateSuspendResumeExtent(e)),this.graphicsCore.watch("extentPadding",()=>this.updateSuspendResumeExtent(this.graphicsCore.computedExtent))],F);break;case"data":this._handles.add([Object(p["a"])(this,"dataExtent",e=>this.updateSuspendResumeExtent(e)),this.graphicsCore.watch("extentPadding",()=>this.updateSuspendResumeExtent(this.dataExtent))],F);break;default:Object(a["a"])(this.suspendResumeExtentMode)}}))}updateSuspendResumeExtent(e){e?this.suspendResumeExtentChanged(this.extentToSuspendResumeRect(e,this.suspendResumeExtent)):this.suspendResumeExtentChanged(null)}extentToSuspendResumeRect(e,t){const i=this.owner.view.spatialReference;if(!e.spatialReference.equals(i)){if(!Object(o["a"])(e,i))return;e=Object(o["d"])(e,i)}return Object(f["e"])(e,t,j["a"],this.graphicsCore.extentPadding)}suspendResumeExtentChanged(e){this.frustumVisibility&&this.frustumVisibility.setExtent(e),this.scaleVisibility&&this.scaleVisibility.setExtent(e)}};Object(s["a"])([Object(n["b"])({aliasOf:"graphicsCore.layer"})],D.prototype,"layer",void 0),Object(s["a"])([Object(n["b"])({aliasOf:"graphicsCore.owner"})],D.prototype,"owner",void 0),Object(s["a"])([Object(n["b"])({constructOnly:!0})],D.prototype,"updateClippingExtent",void 0),Object(s["a"])([Object(n["b"])({constructOnly:!0})],D.prototype,"graphicsCore",void 0),Object(s["a"])([Object(n["b"])({constructOnly:!0})],D.prototype,"scaleVisibility",void 0),Object(s["a"])([Object(n["b"])({constructOnly:!0})],D.prototype,"filterVisibility",void 0),Object(s["a"])([Object(n["b"])({constructOnly:!0})],D.prototype,"elevationAlignment",void 0),Object(s["a"])([Object(n["b"])({constructOnly:!0})],D.prototype,"frustumVisibility",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],D.prototype,"deconfliction",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],D.prototype,"labeling",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],D.prototype,"objectStates",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],D.prototype,"watchUpdatingTracking",void 0),Object(s["a"])([Object(n["b"])()],D.prototype,"suspendResumeExtentMode",void 0),Object(s["a"])([Object(n["b"])()],D.prototype,"dataExtent",void 0),Object(s["a"])([Object(n["b"])({readOnly:!0})],D.prototype,"suspended",null),Object(s["a"])([Object(n["b"])({readOnly:!0})],D.prototype,"suspendInfo",null),Object(s["a"])([Object(n["b"])({readOnly:!0,dependsOn:["graphicsCore.updating","frustumVisibility.updating","watchUpdatingTracking.updating"]})],D.prototype,"updating",null),D=Object(s["a"])([Object(c["a"])("esri.views.3d.layers.graphics.Graphics3DFeatureLikeLayerView")],D);var T=D;const F="suspendResumeExtentMode",U={remove(){},pause(){},resume(){}};t["a"]=T},"72e1":function(e,t,i){"use strict";function s(e){const t=e.layer;if("floorInfo"in t&&t.floorInfo){const i=e.view.floors;if(!i||!i.length)return null;const s=i.filter(e=>""!==e).map(e=>`'${e}'`);s.push("''");const a=t.floorInfo.floorField;return`${a} IN (${s.join(", ")}) OR ${a} IS NULL`}return null}i.d(t,"a",(function(){return s}))},8202:function(e,t,i){"use strict";var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=(i("e92d"),i("cea0"),i("59b2")),n=i("d386"),c=(i("e041"),i("8eed"),i("f402"),i("fc29")),h=i("ce6d"),l=i("af40"),o=i("9305"),d=i("8a44"),u=i("9180");const p=.05;class y{constructor(){this.extents=new d["a"]({allocator:e=>e||Object(u["l"])()}),this.tempExtent=Object(u["l"])(),this.dirty=!1}get empty(){return 0===this.extents.length}clear(){this.extents.clear()}add(e){this.contains(e)||(this.removeContained(e),Object(u["z"])(this.extents.pushNew(),e),this.dirty=!0)}pop(){return this.dirty&&this.mergeTight(),this.extents.pop()}merge(e){return this.mergeTight(e),e.hasProgressed}mergeTight(e=o["d"]){const t=this.extents,i=new Set;let s=0;for(;s!==t.length;){t.sort((e,t)=>e[0]-t[0]),s=t.length,i.clear();for(let s=0;s<t.length;++s){if(e.done)return;const a=t.getItemAt(s);for(let e=s+1;e<t.length;++e){const s=t.getItemAt(e);if(s[0]>=a[2])break;i.add(s)}i.forEach(s=>{if(a===s)return;if(s[2]<=a[0])return void i.delete(s);const r=Object(u["d"])(a),n=Object(u["d"])(s),c=this.tempExtent;Object(u["p"])(a,s,c);const h=r+n;(Object(u["d"])(c)-h)/h<p&&(Object(u["z"])(a,c),i.delete(s),t.remove(s),e.madeProgress())}),i.add(a)}}this.dirty=!1}contains(e){return this.extents.some(t=>Object(u["g"])(t,e))}removeContained(e){this.extents.filterInPlace(t=>!Object(u["g"])(e,t))}get test(){const e=this;return{containsPoint:t=>e.extents.some(e=>Object(u["h"])(e,t))}}}let b=class extends c["a"]{constructor(){super(...arguments),this.dirtyExtents=new y,this.globalDirty=!1,this.dirtyGraphicsSet=new Set,this.handles=new l["a"],this.updateElevation=!1,this.layerView=null,this.graphicsCore=null,this.events=new h["a"]}get updating(){return this.needsUpdate()}setup(e,t,i,s){this.layerView=e,this.queryGraphicUIDsInExtent=t,this.graphicsCore=i,this.elevationProvider=s;const a=this.layerView.view.resourceController.scheduler;this.handles.add([s.on("elevation-change",e=>this._elevationChanged(e)),this.layerView.watch("suspended",()=>this.suspendedChange()),a.registerTask(o["b"].ELEVATION_ALIGNMENT,e=>this.update(e),()=>this.needsUpdate())])}destroy(){this.dirtyGraphicsSet.clear(),this.handles.destroy(),this.handles=null,this.layerView=null,this.graphicsCore=null,this.queryGraphicUIDsInExtent=null}clear(){this.dirtyGraphicsSet.clear(),this.notifyChange("updating")}suspendedChange(){!0===this.layerView.suspended?this.updateElevation=!1:!1===this.layerView.suspended&&this.updateElevation&&(this.globalDirty=!0,this.notifyChange("updating"))}elevationInfoChange(){this.globalDirty=!0,this.notifyChange("updating")}needsUpdate(){return this.dirtyGraphicsSet.size>0||this.dirtyExtents&&!this.dirtyExtents.empty||this.globalDirty}update(e){for(this.globalDirty&&(this.markAllGraphicsElevationDirty(),this.globalDirty=!1,e.madeProgress()),e.run(()=>this.dirtyExtents.merge(e));this.needsUpdate()&&!e.done;)this._updateDirtyGraphics(e),this._updateDirtyExtents(e);this.layerView.view.deconflictor.setDirty(),this.notifyChange("updating")}_updateDirtyGraphics(e){const t=this.layerView.view.renderCoordsHelper,i=this.graphicsCore.asyncUpdates;for(const s of this.dirtyGraphicsSet.keys()){const r=this.graphicsCore.getGraphics3DGraphicById(s);if(this.dirtyGraphicsSet.delete(s),Object(a["k"])(r)&&(r.alignWithElevation(this.elevationProvider,t,i),e.madeProgress()),e.done)return}}_updateDirtyExtents(e){for(;!this.dirtyExtents.empty&&!e.done;){const t=this.dirtyExtents.pop(),i=this.elevationProvider.spatialReference;this.events.emit("invalidate-elevation",{extent:t,spatialReference:i}),this.queryGraphicUIDsInExtent(t,i,e=>{const t=this.graphicsCore.getGraphics3DGraphicById(e);Object(a["k"])(t)&&t.needsElevationUpdates()&&this.dirtyGraphicsSet.add(e)}),e.madeProgress()}}markAllGraphicsElevationDirty(){this.dirtyExtents.clear(),this.dirtyGraphicsSet.clear(),this.graphicsCore.graphics3DGraphics.forEach((e,t)=>this.dirtyGraphicsSet.add(t))}_elevationChanged(e){if("scene"===e.context&&(!this.graphicsCore.layer.elevationInfo||"relative-to-scene"!==this.graphicsCore.layer.elevationInfo.mode))return;const{extent:t,spatialReference:i}=e;if(this.layerView.suspended){if(!this.updateElevation){const e=this.graphicsCore.computedExtent;e&&t[2]>e.xmin&&t[0]<e.xmax&&t[3]>e.ymin&&t[1]<e.ymax&&(this.updateElevation=!0)}this.events.emit("invalidate-elevation",{extent:t,spatialReference:i})}else t[0]===-1/0?this.globalDirty=!0:this.dirtyExtents.add(t),this.notifyChange("updating")}};Object(s["a"])([Object(r["b"])({readOnly:!0})],b.prototype,"updating",null),b=Object(s["a"])([Object(n["a"])("esri.views.3d.layers.graphics.Graphics3DElevationAlignment")],b);var g=b;t["a"]=g},a207:function(e,t,i){"use strict";var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=(i("e92d"),i("cea0"),i("59b2")),n=i("d386"),c=(i("e041"),i("8eed"),i("f402"),i("fc29")),h=i("3af1"),l=i("74e2"),o=(i("e06a"),i("f29a")),d=i("c64f"),u=i("6411");const p=u["a"];let y=class extends c["a"]{constructor(e){super(e),this._dataQueryEngineInstance=null}get queryGeometryType(){switch(this.layer.geometryType){case"multipoint":case"point":case"polygon":case"polyline":return this.layer.geometryType;case"mesh":return"polygon";default:return}}get defaultQueryJSON(){return new d["a"]({outSpatialReference:this.spatialReference}).toJSON()}get dataQueryEngine(){return this.ensureDataQueryEngine()}destroy(){this.clear()}clear(){return!!this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0)}async executeQueryForIdSet(e,t){return this.dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(e),t)}async executeQueryForCount(e,t){return this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:i,extent:s}=await this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:i,extent:h["a"].fromJSON(s)}}async executeQueryForIds(e,t){return this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQueryForLatestObservations(e,t){const i=await this.dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(e),t),s=o["default"].fromJSON(i);return s.features.forEach(e=>{e.layer=this.layer,e.sourceLayer=this.layer}),s}async executeQuery(e,t){const i=await this.dataQueryEngine.executeQuery(this._ensureQueryJSON(e),t),s=o["default"].fromJSON(i);return s.features.forEach(e=>{e.layer=this.layer,e.sourceLayer=this.layer}),s}_ensureQueryJSON(e){return Object(a["j"])(e)?this.defaultQueryJSON:("outSpatialReference"in e&&!e.outSpatialReference&&(e.outSpatialReference=this.spatialReference),e.toJSON())}ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,t=this.layer.objectIdField,i=l["a"].toJSON(this.queryGeometryType),s=this.layer.fields.map(e=>e.toJSON()),a=this.layerView.view.resourceController.scheduler,r=this.task,n=this.spatialReference.toJSON(),c=this.layerView.graphics3d.graphicsCore.featureStore,{hasZ:h,hasM:o}=this.layerView;return this._dataQueryEngineInstance=new p({hasZ:h,hasM:o,geometryType:i,fields:s,timeInfo:e,spatialReference:n,objectIdField:t,featureStore:c,scheduler:a,task:r}),this._dataQueryEngineInstance}};Object(s["a"])([Object(r["b"])({constructOnly:!0})],y.prototype,"layerView",void 0),Object(s["a"])([Object(r["b"])({constructOnly:!0})],y.prototype,"task",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],y.prototype,"spatialReference",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0,aliasOf:"layerView.layer"})],y.prototype,"layer",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],y.prototype,"queryGeometryType",null),Object(s["a"])([Object(r["b"])({readOnly:!0})],y.prototype,"defaultQueryJSON",null),y=Object(s["a"])([Object(n["a"])("esri.views.3d.layers.graphics.QueryEngine")],y);var b=y;t["a"]=b},d36d:function(e,t,i){"use strict";function s(e,t,i){if(!i||null==t)return null;if(!e)return a(t,i);const s=e.get(i);return s?t[s.name]:null}function a(e,t){const i=t.toLowerCase();for(const s in e)if(s.toLowerCase()===i)return e[s];return null}i.d(t,"a",(function(){return s}))},ebae:function(e,t,i){"use strict";var s=i("a4ee"),a=(i("c120"),i("e92d"),i("cea0"),i("59b2")),r=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("fc29")),c=i("af40"),h=i("3795"),l=i("f694"),o=i("9305"),d=i("6b38");const u=1.2;let p=class extends n["a"]{constructor(){super(...arguments),this.suspended=!1,this.extent=null,this.extentIntersectionDirty=!0,this._isVisibleBelowSurface=!1,this.handles=new c["a"],this.layerView=null,this.updating=!0}setup(e){this.layerView=e,this.extentIntersection=new d["a"]({renderCoordsHelper:e.view.renderCoordsHelper});const t=e.view,i=t.basemapTerrain,s=t.resourceController.scheduler;this.handles.add([t.on("resize",()=>this.viewChange()),t.state.watch("camera",()=>this.viewChange(),!0),s.registerTask(o["b"].FRUSTUM_VISIBILITY,()=>this.update(),()=>this.updating),i.on("elevation-bounds-change",()=>this.elevationBoundsChange())]),"local"===t.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([Object(h["a"])(i,["opacity","wireframe"],()=>this.updateIsVisibleBelowSurface()),Object(h["a"])(t,"map.ground.navigationConstraint.type",()=>this.updateIsVisibleBelowSurface())])}destroy(){this.layerView=null,this.extent=null,this.extentIntersection=null,this.handles&&(this.handles.destroy(),this.handles=null)}_setDirty(){this.updating||this._set("updating",!0)}setExtent(e){this.extent=e,this.extentIntersectionDirty=!0,this._setDirty()}viewChange(){this._setDirty()}elevationBoundsChange(){this._setDirty(),this.extentIntersectionDirty=!0}set isVisibleBelowSurface(e){this._isVisibleBelowSurface=e,this._setDirty(),this.extentIntersectionDirty=!0}updateIsVisibleBelowSurface(){const e=this.layerView.view,t=e.basemapTerrain,i="local"===e.viewingMode,s=e.map.ground&&e.map.ground.navigationConstraint&&"none"===e.map.ground.navigationConstraint.type;this.isVisibleBelowSurface=i||!t.opaque||s}updateExtentIntersection(){if(!this.extentIntersectionDirty)return;this.extentIntersectionDirty=!1;const e=this.layerView.view;let t;if(this._isVisibleBelowSurface)t=-.3*Object(l["e"])(e.spatialReference).radius;else{const{min:i,max:s}=e.basemapTerrain.elevationBounds;t=i-Math.max(1,(s-i)*(u-1))}this.extentIntersection.update(this.extent,e.spatialReference,t)}update(){if(this._set("updating",!1),!this.extent)return void this._set("suspended",!1);this.updateExtentIntersection();const e=this.layerView.view.frustum,t=Object(l["e"])(this.layerView.view.spatialReference).radius;this._set("suspended",!this.extentIntersection.isVisibleInFrustum(e,t))}};Object(s["a"])([Object(a["b"])({readOnly:!0})],p.prototype,"suspended",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0})],p.prototype,"updating",void 0),p=Object(s["a"])([Object(r["a"])("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],p);var y=p;t["a"]=y}}]);
//# sourceMappingURL=chunk-e9a1e1b6.32e56bed.js.map