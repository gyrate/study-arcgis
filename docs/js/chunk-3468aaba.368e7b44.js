(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3468aaba"],{"5afa":function(e,t,a){"use strict";a.r(t);var r=a("a4ee"),o=(a("c120"),a("7ffa")),i=a("9d1d"),n=a("b2b2"),l=(a("e92d"),a("cea0"),a("59b2")),s=a("afcf"),y=a("0028"),c=a("d386"),p=a("09db"),b=a("ce50"),u=(a("e041"),a("8eed"),a("f402"),a("7f83")),d=a("5996"),O=a("3af1"),f=(a("e06a"),a("2c4f")),m=a("db52"),j=a("0d76"),h=a("4dc9"),g=a("21ba"),S=(a("1fd7"),a("8d60")),v=a("a6a3"),w=a("e694"),N=a("8188"),J=a("b911"),L=a("a8d5"),T=a("a1f3"),x=a("997b"),C=a("0db5"),M=a("5a62"),I=a("5bd5"),R=a("ce0b"),E=a("a745");function D(e){return e.layers.some(e=>null!=e.layerDefinition.visibilityField)}const P=new T["a"]({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),G=new T["a"]({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let _=class extends R["a"]{constructor(){super(...arguments),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",e=>{e.item.sourceLayer=this.layer}),this.graphics.on("after-remove",e=>{e.item.sourceLayer=null})}get sublayers(){return this.graphics}};Object(r["a"])([Object(l["b"])({readOnly:!0})],_.prototype,"sublayers",null),Object(r["a"])([Object(l["b"])()],_.prototype,"layer",void 0),Object(r["a"])([Object(l["b"])({readOnly:!0})],_.prototype,"visibilityMode",void 0),_=Object(r["a"])([Object(c["a"])("esri.layers.MapNotesLayer.MapNotesSublayer")],_);const F=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",layerId:"polygonLayer",title:"Polygons",identifyingSymbol:(new j["a"]).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",layerId:"polylineLayer",title:"Polylines",identifyingSymbol:(new m["a"]).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",layerId:"multipointLayer",title:"Multipoints",identifyingSymbol:(new h["a"]).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"pointLayer",title:"Points",identifyingSymbol:(new h["a"]).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",layerId:"textLayer",title:"Text",identifyingSymbol:(new g["a"]).toJSON()}];let k=class extends(Object(x["a"])(Object(M["a"])(Object(J["a"])(Object(C["a"])(Object(w["a"])(v["a"])))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.minScale=0,this.maxScale=0,this.spatialReference=d["a"].WGS84,this.sublayers=new f["a"](F.map(e=>new _({id:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,a){return{operations:{supportsMapNotesEditing:!D(t)&&"portal-item"!==(null==a?void 0:a.origin)}}}readFeatureCollections(e,t,a){if(!D(t))return null;const r=t.layers.map(e=>{const t=new I["default"];return t.read(e,a),t});return new f["a"]({items:r})}readLegacyfeatureCollectionJSON(e,t){return D(t)?Object(o["a"])(t.featureCollection):null}readFullExtent(e,t){if(!t.layers.length)return new O["a"]({xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:d["a"].WGS84});const a=d["a"].fromJSON(t.layers[0].layerDefinition.spatialReference);return t.layers.reduce((e,t)=>{const a=t.layerDefinition.extent;return a?O["a"].fromJSON(a).union(e):e},new O["a"]({spatialReference:a}))}readMinScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.minScale)return a.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const a of t.layers)if(null!=a.layerDefinition.maxScale)return a.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?d["a"].fromJSON(t.layers[0].layerDefinition.spatialReference):d["a"].WGS84}readSublayers(e,t,a){if(D(t))return null;const r=[];for(let i=0;i<t.layers.length;i++){var o;const{layerDefinition:e,featureSet:a}=t.layers[i],n=null!=(o=e.geometryType)?o:a.geometryType,l=F.find(t=>{var a,r,o;return n===t.geometryTypeJSON&&(null==(a=e.drawingInfo)||null==(r=a.renderer)||null==(o=r.symbol)?void 0:o.type)===t.identifyingSymbol.type});if(l){const t=new _({id:l.layerId,title:e.name,layer:this,graphics:a.features.map(({geometry:e,symbol:t,attributes:a,popupInfo:r})=>S["a"].fromJSON({attributes:a,geometry:e,symbol:t,popupTemplate:r}))});r.push(t)}}return new f["a"](r)}writeSublayers(e,t,a,r){const{minScale:o,maxScale:l}=this;if(Object(n["j"])(e))return;const s=e.some(e=>e.graphics.length>0);var y;if(!this.capabilities.operations.supportsMapNotesEditing)return void(s&&(null==r||null==(y=r.messages)||y.push(new b["a"]("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const c=[];let p=this.spatialReference.toJSON();e:for(const i of e)for(const e of i.graphics)if(Object(n["k"])(e.geometry)){p=e.geometry.spatialReference.toJSON();break e}for(const i of F){const t=e.find(e=>i.layerId===e.id);this._writeMapNoteSublayer(c,t,i,o,l,p,r)}Object(i["c"])("featureCollection.layers",c,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=Object(o["a"])(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(Object(n["j"])(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const a of r.graphics)if(Object(n["k"])(a.geometry)){const r=a.geometry;e?Object(u["c"])(r.spatialReference,e)||(Object(N["b"])(r.spatialReference,e)||Object(N["h"])()||await Object(N["j"])(),a.geometry=Object(N["n"])(r,e)):e=r.spatialReference,t.push(a)}const a=await Object(L["a"])(t.map(e=>e.geometry));t.forEach((e,t)=>e.geometry=a[t])}_findSublayer(e){var t,a;return Object(n["j"])(this.sublayers)?null:null!=(t=null==(a=this.sublayers)?void 0:a.find(t=>t.id===e))?t:null}_writeMapNoteSublayer(e,t,a,r,i,l,s){const y=[];if(!Object(n["j"])(t)){for(const e of t.graphics)this._writeMapNote(y,e,a.geometryType,s);this._normalizeObjectIds(y,P),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:Object(o["a"])(a.identifyingSymbol)}},geometryType:a.geometryTypeJSON,minScale:r,maxScale:i,objectIdField:"OBJECTID",fields:[P.toJSON(),G.toJSON()],spatialReference:l},featureSet:{features:y,geometryType:a.geometryTypeJSON}})}}_writeMapNote(e,t,a,r){if(Object(n["j"])(t))return;const{geometry:o,symbol:i,popupTemplate:l}=t;if(Object(n["j"])(o))return;var s,c;if(o.type!==a)return void(null==r||null==(s=r.messages)||s.push(new y["a"]("map-notes-layer:invalid-geometry-type",`Geometry "${o.type}" cannot be saved in "${a}" layer`,{graphic:t})));if(Object(n["j"])(i))return void(null==r||null==(c=r.messages)||c.push(new y["a"]("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t})));const p={attributes:{...t.attributes},geometry:o.toJSON(),symbol:i.toJSON()};Object(n["k"])(l)&&(p.popupInfo=l.toJSON()),e.push(p)}_normalizeObjectIds(e,t){const a=t.name;let r=Object(E["a"])(a,e)+1;const o=new Set;for(const i of e){i.attributes||(i.attributes={});const{attributes:e}=i;(null==e[a]||o.has(e[a]))&&(e[a]=r++),o.add(e[a])}}};Object(r["a"])([Object(l["b"])({readOnly:!0})],k.prototype,"capabilities",void 0),Object(r["a"])([Object(s["a"])(["portal-item","web-map"],"capabilities",["layers"])],k.prototype,"readCapabilities",null),Object(r["a"])([Object(l["b"])({readOnly:!0})],k.prototype,"featureCollections",void 0),Object(r["a"])([Object(s["a"])(["web-map","portal-item"],"featureCollections",["layers"])],k.prototype,"readFeatureCollections",null),Object(r["a"])([Object(l["b"])({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],k.prototype,"featureCollectionJSON",void 0),Object(r["a"])([Object(s["a"])(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],k.prototype,"readLegacyfeatureCollectionJSON",null),Object(r["a"])([Object(l["b"])({readOnly:!0,json:{read:!1,write:{enabled:!0,ignoreOrigin:!0}}})],k.prototype,"featureCollectionType",void 0),Object(r["a"])([Object(l["b"])({json:{write:!1}})],k.prototype,"fullExtent",void 0),Object(r["a"])([Object(s["a"])(["web-map","portal-item"],"fullExtent",["layers"])],k.prototype,"readFullExtent",null),Object(r["a"])([Object(l["b"])({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],k.prototype,"legendEnabled",void 0),Object(r["a"])([Object(l["b"])({type:["show","hide"]})],k.prototype,"listMode",void 0),Object(r["a"])([Object(l["b"])({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"minScale",void 0),Object(r["a"])([Object(s["a"])(["web-map","portal-item"],"minScale",["layers"])],k.prototype,"readMinScale",null),Object(r["a"])([Object(l["b"])({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"maxScale",void 0),Object(r["a"])([Object(s["a"])(["web-map","portal-item"],"maxScale",["layers"])],k.prototype,"readMaxScale",null),Object(r["a"])([Object(l["b"])({readOnly:!0})],k.prototype,"multipointLayer",null),Object(r["a"])([Object(l["b"])({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],k.prototype,"operationalLayerType",void 0),Object(r["a"])([Object(l["b"])({readOnly:!0})],k.prototype,"pointLayer",null),Object(r["a"])([Object(l["b"])({readOnly:!0})],k.prototype,"polygonLayer",null),Object(r["a"])([Object(l["b"])({readOnly:!0})],k.prototype,"polylineLayer",null),Object(r["a"])([Object(l["b"])({type:d["a"]})],k.prototype,"spatialReference",void 0),Object(r["a"])([Object(s["a"])(["web-map","portal-item"],"spatialReference",["layers"])],k.prototype,"readSpatialReference",null),Object(r["a"])([Object(l["b"])({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],k.prototype,"sublayers",void 0),Object(r["a"])([Object(s["a"])("web-map","sublayers",["layers"])],k.prototype,"readSublayers",null),Object(r["a"])([Object(p["a"])("web-map","sublayers")],k.prototype,"writeSublayers",null),Object(r["a"])([Object(l["b"])({readOnly:!0})],k.prototype,"textLayer",null),Object(r["a"])([Object(l["b"])()],k.prototype,"title",void 0),Object(r["a"])([Object(l["b"])({readOnly:!0,json:{read:!1}})],k.prototype,"type",void 0),k=Object(r["a"])([Object(c["a"])("esri.layers.MapNotesLayer")],k);var z=k;t["default"]=z},a745:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));const r=1;function o(e,t){let a=0;for(const o of t){var r;const t=null==(r=o.attributes)?void 0:r[e];"number"==typeof t&&isFinite(t)&&(a=Math.max(a,t))}return a}},ce0b:function(e,t,a){"use strict";var r=a("a4ee"),o=(a("c120"),a("e92d"),a("cea0"),a("59b2")),i=a("d386"),n=(a("e041"),a("8eed"),a("f402"),a("a6a3")),l=a("fd14"),s=a("997b"),y=a("5a62"),c=a("f626");let p=class extends(Object(s["a"])(Object(y["a"])(n["a"]))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new c["b"],this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};Object(r["a"])([Object(o["b"])({type:l["a"]})],p.prototype,"elevationInfo",void 0),Object(r["a"])([Object(o["b"])(Object(c["c"])())],p.prototype,"graphics",void 0),Object(r["a"])([Object(o["b"])({type:["show","hide"]})],p.prototype,"listMode",void 0),Object(r["a"])([Object(o["b"])()],p.prototype,"screenSizePerspectiveEnabled",void 0),Object(r["a"])([Object(o["b"])({readOnly:!0})],p.prototype,"type",void 0),Object(r["a"])([Object(o["b"])({constructOnly:!0})],p.prototype,"internal",void 0),p=Object(r["a"])([Object(i["a"])("esri.layers.GraphicsLayer")],p);var b=p;t["a"]=b}}]);
//# sourceMappingURL=chunk-3468aaba.368e7b44.js.map