(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b4e548a"],{"59fd":function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var r=i("e6b5"),s=i("92af"),n=i("43e0");class a extends s["a"]{constructor(e){super({...e,constraint:new n["b"](e.coordinateHelper,e.edgeStart,e.edgeEnd)})}get hints(){return[new r["a"](1,this.constraint.start,this.constraint.end)]}}var o=i("b63c");class l extends s["a"]{constructor(e){super({...e,constraint:new n["d"](e.coordinateHelper,e.targetPoint)})}get hints(){return[new o["a"](this.targetPoint)]}}function c(e,t){switch(e.type){case"edge":return new a({coordinateHelper:t,edgeStart:t.fromPoint(e.start),edgeEnd:t.fromPoint(e.end),targetPoint:t.fromPoint(e.target),objectId:e.objectId});case"vertex":return new l({coordinateHelper:t,targetPoint:t.fromPoint(e.target),objectId:e.objectId})}}},"5abb":function(e,t,i){"use strict";i.d(t,"a",(function(){return O}));var r=i("a4ee"),s=(i("c120"),i("b2b2")),n=(i("e92d"),i("cea0"),i("59b2")),a=i("d386"),o=(i("e041"),i("8eed"),i("f402"),i("fc29")),l=i("38a4"),c=i("9ef0"),d=i("a957"),h=i("7533"),u=i("0d76"),b=i("21ba"),p=i("8d60");const f=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let O=class extends o["a"]{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=f.map(e=>new u["a"]({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=e=>{if(Object(s["k"])(e.label))return e.label;let t=e.lij.toString();return Object(s["k"])(e.loadPriority)&&(t+=` (${e.loadPriority})`),t},t=this.getTiles(),i=new Array,r=new Set((this._labels.size,this._labels.keys()));t.forEach((n,a)=>{const o=n.lij.toString();r.delete(o);const u=n.lij[0],f=n.geometry;if(this.enablePolygons&&!this._polygons.has(o)){const e=new p["a"]({geometry:f,symbol:this._symbols[u%this._symbols.length]});this._polygons.set(o,e),i.push(e)}if(this.enableLabels){const r=e(n),u=a/(t.length-1),O=Object(l["l"])(0,200,u),g=Object(l["l"])(20,6,u)/.75,y=Object(s["k"])(n.loadPriority)&&n.loadPriority>=t.length,v=new c["a"]([O,y?0:O,y?0:O]),w="3d"===this.view.type?()=>new h["a"]({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new d["a"]({text:r,halo:{color:"white",size:1/.75},material:{color:v},size:g})]}):()=>new b["a"]({text:r,haloColor:"white",haloSize:1/.75,color:v,size:g});if(this._labels.has(o)){const e=this._labels.get(o),t=w();(Object(s["j"])(e.symbol)||JSON.stringify(t)!==JSON.stringify(e.symbol))&&(e.symbol=t)}else{const e=new p["a"]({geometry:f.extent.center,symbol:w()});this._labels.set(o,e),i.push(e)}}});const n=new Array;r.forEach(e=>{this._polygons.has(e)&&(n.push(this._polygons.get(e)),this._polygons.delete(e)),this._labels.has(e)&&(n.push(this._labels.get(e)),this._labels.delete(e))}),this.view.graphics.removeMany(n),this.view.graphics.addMany(i)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};Object(r["a"])([Object(n["b"])({constructOnly:!0})],O.prototype,"view",void 0),Object(r["a"])([Object(n["b"])({readOnly:!0})],O.prototype,"updating",void 0),Object(r["a"])([Object(n["b"])()],O.prototype,"enabled",null),O=Object(r["a"])([Object(a["a"])("esri.views.support.TileTreeDebugger")],O)},"78ba":function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i("b2b2"),s=i("e92d"),n=i("c649"),a=i("b50f"),o=i("f4cc"),l=i("dfa0");const c=s["a"].getLogger("esri.core.workers.WorkerHandle");class d{constructor(e,t,i,r={}){this._mainMethod=t,this._listeners=[],this._promise=Object(l["b"])(e,{...r,scheduler:i}).then(e=>{if(void 0===this._thread){this._thread=e,this._promise=null,r.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()}),this._promise.catch(t=>c.error(`Failed to initialize ${e} worker: ${t}`))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),Object(n["c"])(()=>{i.removed=!0,Object(a["k"])(this._listeners,i),this._thread&&Object(r["k"])(i.threadHandle)&&i.threadHandle.remove()})}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const r=this.getTransferList(t,e);return this._thread.invoke(e,t,{transferList:r,signal:i})}return this._promise?this._promise.then(()=>(Object(o["w"])(i),this.invokeMethod(e,t,i))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then(()=>{}):this._promise?this._promise.then(()=>this.broadcast(e,t)):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then(t=>{e.removed||(e.threadHandle=t)})}}},ba80:function(e,t,i){"use strict";i.r(t),i.d(t,"FeatureServiceSnappingSource",(function(){return J}));var r=i("a4ee"),s=(i("c120"),i("b2b2")),n=(i("e92d"),i("cea0"),i("c649")),a=i("59b2"),o=i("d386"),l=(i("e041"),i("8eed"),i("f402"),i("9efb")),c=i("fc29"),d=i("4ae5"),h=i("3795"),u=i("26cd"),b=i("9096"),p=i("59fd"),f=i("5e70"),O=i("e431"),g=i("0fc4"),y=i("d0ac");function v(e,t){return y["b"].fromAABoundingRect(t.extent,w),y["b"].distance(w,Object(O["x"])(j,e.x,e.y,0))}const w=y["b"].create(),j=Object(g["c"])();let m=class extends(Object(b["b"])(c["a"])){constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=Object(s["k"])(this.pointOfInterest)?this.pointOfInterest:this.view.center;return e.sort((e,i)=>v(t,e)-v(t,i)),e}scaleEnabled(){return Object(f["d"])(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||Object(s["j"])(this.tileInfo))return[];if(!this.scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,r=[];for(const{row:s,colFrom:n,colTo:a}of e)for(let e=n;e<=a;e++){const n={id:null,level:i,row:s,col:t.normalizeCol(e)};this.tileInfo.updateTileInfo(n),r.push(n)}return r}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featuresTilingScheme)?void 0:t.tileInfo)?e:null}get tileSize(){return Object(s["k"])(this.tileInfo)?this.tileInfo.size[0]:256}initialize(){this.handles.add(this.watch("view.state.viewpoint",()=>this.notifyChange("tilesCoveringView"),!0))}};Object(r["a"])([Object(a["b"])({readOnly:!0})],m.prototype,"tiles",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],m.prototype,"scaleEnabled",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],m.prototype,"tilesCoveringView",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],m.prototype,"tileInfo",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],m.prototype,"tileSize",null),Object(r["a"])([Object(a["b"])({constructOnly:!0})],m.prototype,"view",void 0),Object(r["a"])([Object(a["b"])({constructOnly:!0})],m.prototype,"layer",void 0),Object(r["a"])([Object(a["b"])()],m.prototype,"pointOfInterest",void 0),m=Object(r["a"])([Object(o["a"])("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],m);let k=class extends b["a"]{constructor(e){super(e),this.pointOfInterest=null}get tiles(){const e=this.tilesCoveringView,t=this.effectivePointOfInterest;if(Object(s["k"])(t)){const i=e.map(e=>v(t,e));for(let r=1;r<i.length;r++)if(i[r-1]>i[r])return e.sort((e,i)=>v(t,e)-v(t,i)),e.slice()}return e}get tilesCoveringView(){var e,t;return this.filterTiles(null==(e=this.view.featureTiles)||null==(t=e.tiles)?void 0:t.toArray()).map(I)}get tileInfo(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tilingScheme.toTileInfo())?e:null}get tileSize(){var e,t;return null!=(e=null==(t=this.view.featureTiles)?void 0:t.tileSize)?e:256}get effectivePointOfInterest(){var e;const t=this.pointOfInterest;return Object(s["k"])(t)?t:null==(e=this.view.pointsOfInterest)?void 0:e.focus.location}initialize(){this.handles.add(Object(h["a"])(this.view,"featureTiles",e=>{this.handles.remove(_),e&&this.handles.add(e.addClient(),_)}))}filterTiles(e){return Object(s["j"])(e)?[]:e.filter(e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>S&&2===e.measures.visibility)}};function I({lij:[e,t,i],extent:r}){return{id:`${e}/${t}/${i}`,level:e,row:t,col:i,extent:r}}Object(r["a"])([Object(a["b"])({readOnly:!0})],k.prototype,"tiles",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],k.prototype,"tilesCoveringView",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],k.prototype,"tileInfo",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],k.prototype,"tileSize",null),Object(r["a"])([Object(a["b"])({constructOnly:!0})],k.prototype,"view",void 0),Object(r["a"])([Object(a["b"])()],k.prototype,"pointOfInterest",void 0),Object(r["a"])([Object(a["b"])()],k.prototype,"effectivePointOfInterest",null),k=Object(r["a"])([Object(o["a"])("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],k);const S=50,_="feature-tiles";var H=i("1219"),T=i("af40"),P=i("9180"),z=i("5abb");let M=class extends z["a"]{constructor(e){super(e),this.handles=new T["a"]}initialize(){const e=setInterval(()=>this.fetchDebugInfo(),2e3);this.handles.add(Object(n["c"])(()=>clearInterval(e)))}destroy(){this.handles.destroy()}getTiles(){if(!this.debugInfo)return[];const e=new Map,t=new Map;this.debugInfo.storedTiles.forEach(t=>{e.set(t.data.id,t.featureCount)}),this.debugInfo.pendingTiles.forEach(i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)});const i=i=>{var r;const s=t.get(i),n=null!=(r=e.get(i))?r:"?";return s?`${s}:${n}\n${i}`:`store:${n}\n${i}`},r=new Map;return this.debugInfo.storedTiles.forEach(e=>{r.set(e.data.id,e.data)}),this.debugInfo.pendingTiles.forEach(e=>{r.set(e.data.id,e.data)}),Array.from(r.values()).map(e=>({lij:[e.level,e.row,e.col],geometry:H["a"].fromExtent(Object(P["A"])(e.extent,this.view.spatialReference)),label:i(e.id)}))}fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this.debugInfo=e,this.update()})}};Object(r["a"])([Object(a["b"])({constructOnly:!0})],M.prototype,"handle",void 0),M=Object(r["a"])([Object(o["a"])("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],M);var E=i("f4cc"),x=i("74e2"),C=i("78ba");let N=class extends b["a"]{constructor(e){super(e),this.availability=0,this.workerHandleUpdating=!0,this.editId=0}get updating(){return this.updatingHandles.updating||this.workerHandleUpdating}destroy(){this.workerHandle.destroy()}initialize(){this.workerHandle=new F(this.scheduler),this.handles.add([this.workerHandle.on("notify-updating",({updating:e})=>this.workerHandleUpdating=e),this.workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){const i=this.serviceInfoFromLayer(e.layer);if(Object(s["j"])(i))return;const r={configuration:this.convertConfiguration(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON()};await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("setup",r,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=this.convertConfiguration(e);await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("configure",i,t)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this.updatingHandles.addPromise(this.workerHandle.invokeMethod("refresh",{},e)),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const i={distance:e.distance,point:e.coordinateHelper.toPoint(e.point,new d["a"]).toJSON(),types:e.types,filter:Object(s["k"])(e.filter)?e.filter.createQuery().toJSON():null};return this.workerHandle.invoke(i,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:Object(s["k"])(e.tileInfo)?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this.workerHandle.invokeMethod("updateTiles",i,t),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var i,r,s,n,a,o;const l=this.editId++,c={id:l};await this.workerHandle.invokeMethod("beginApplyEdits",c,t),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t));const d=await Object(E["z"])(e.result,t),h={id:l,edits:{addedFeatures:null!=(i=null==(r=d.addedFeatures)?void 0:r.map(({objectId:e})=>e))?i:[],deletedFeatures:null!=(s=null==(n=d.deletedFeatures)?void 0:n.map(({objectId:e})=>e))?s:[],updatedFeatures:null!=(a=null==(o=d.updatedFeatures)?void 0:o.map(({objectId:e})=>e))?a:[]}};await this.workerHandle.invokeMethod("endApplyEdits",h,t),this.updatingHandles.addPromise(this.workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this.workerHandle.invokeMethod("getDebugInfo",{},e)}convertConfiguration(e){return{filter:Object(s["k"])(e.filter)?e.filter.toJSON():null,customParameters:e.customParameters}}serviceInfoFromLayer(e){var t;return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:e.parsedUrl.path,fields:e.fields.map(e=>e.toJSON()),geometryType:x["a"].toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null==(t=e.timeInfo)?void 0:t.toJSON()}}};Object(r["a"])([Object(a["b"])({constructOnly:!0})],N.prototype,"scheduler",void 0),Object(r["a"])([Object(a["b"])({readOnly:!0})],N.prototype,"updating",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],N.prototype,"availability",void 0),Object(r["a"])([Object(a["b"])()],N.prototype,"workerHandleUpdating",void 0),N=Object(r["a"])([Object(o["a"])("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],N);class F extends C["a"]{constructor(e){super("FeatureServiceSnappingSourceWorker","fetchCandidates",e,{strategy:"dedicated"})}getTransferList(){return[]}}var R=i("50e6"),L=i("dff3");let A=class extends c["a"]{constructor(e){super(e),this.pointOfInterest=null}get tiles(){return[{id:"0/0/0",level:0,row:0,col:0,extent:Object(P["t"])(-1e8,-1e8,1e8,1e8)}]}get tileInfo(){return new L["a"]({origin:new d["a"]({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new R["a"]({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}};Object(r["a"])([Object(a["b"])({readOnly:!0})],A.prototype,"tiles",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],A.prototype,"tileInfo",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],A.prototype,"tileSize",null),Object(r["a"])([Object(a["b"])({constructOnly:!0})],A.prototype,"layer",void 0),Object(r["a"])([Object(a["b"])()],A.prototype,"pointOfInterest",void 0),A=Object(r["a"])([Object(o["a"])("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],A);let J=class extends(Object(b["b"])(c["a"])){constructor(e){super(e)}get updateTilesParameters(){return{tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return{filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}get availability(){return this.workerHandle.availability}get layer(){return this.layerSource.layer}initialize(){if(Object(s["k"])(this.view))switch(this.view.type){case"2d":this.tilesOfInterest=new m({view:this.view,layer:this.layer});break;case"3d":this.tilesOfInterest=new k({view:this.view})}else this.tilesOfInterest=new A({layer:this.layer});if(this.workerHandle=new N({scheduler:Object(s["k"])(this.view)&&"3d"===this.view.type?this.view.resourceController.scheduler:null}),this.handles.add([Object(n["a"])(this.workerHandle)]),this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add(this,"updateTilesParameters",()=>this.workerHandle.updateTiles(this.updateTilesParameters,null),2),this.handles.add([Object(l["a"])(()=>this.configuration,e=>this.workerHandle.configure(e,null))]),Object(s["k"])(this.view)){const e=this.view;this.handles.add(Object(h["a"])(u["a"],"FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES",t=>{t&&!this.debug?(this.debug=new M({view:e,handle:this.workerHandle}),this.handles.add(Object(n["a"])(this.debug),"debug")):!t&&this.debug&&this.handles.remove("debug")}))}this.handles.add(this.layerSource.layer.on("apply-edits",e=>{this.workerHandle.applyEdits(e,null)}))}refresh(){this.workerHandle.refresh(null)}async fetchCandidates(e,t){this.tilesOfInterest.pointOfInterest=e.coordinateHelper.toPoint(e.point,new d["a"]);const{candidates:i}=await this.workerHandle.fetchCandidates({...e,filter:null},t);return{candidates:i.map(t=>Object(p["a"])(t,e.coordinateHelper))}}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};Object(r["a"])([Object(a["b"])({constructOnly:!0})],J.prototype,"spatialReference",void 0),Object(r["a"])([Object(a["b"])({constructOnly:!0})],J.prototype,"layerSource",void 0),Object(r["a"])([Object(a["b"])({constructOnly:!0})],J.prototype,"view",void 0),Object(r["a"])([Object(a["b"])()],J.prototype,"tilesOfInterest",void 0),Object(r["a"])([Object(a["b"])({readOnly:!0})],J.prototype,"updateTilesParameters",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],J.prototype,"updating",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],J.prototype,"configuration",null),Object(r["a"])([Object(a["b"])({readOnly:!0})],J.prototype,"availability",null),J=Object(r["a"])([Object(o["a"])("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],J)}}]);
//# sourceMappingURL=chunk-6b4e548a.7c8f8fcb.js.map