(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f003"],{b285:function(e,t,r){"use strict";r.r(t);var a=r("a4ee"),o=(r("c120"),r("e92d"),r("cea0"),r("59b2")),l=r("afcf"),n=r("d386"),i=(r("e041"),r("8eed"),r("f402"),r("2c4f")),c=r("a6a3"),s=r("e694"),u=r("b911"),b=r("0db5"),p=r("5bd5");let d=class extends(Object(u["a"])(Object(b["a"])(Object(s["a"])(c["a"])))){constructor(...e){super(...e),this.type="route"}get barrierLines(){return this._getNamedFeatureLayer("PolylineBarriers")}get barrierPoints(){return this._getNamedFeatureLayer("Barriers")}get barrierPolygons(){return this._getNamedFeatureLayer("PolygonBarriers")}get directionLines(){return this._getNamedFeatureLayer("DirectionLines")}get directionPoints(){return this._getNamedFeatureLayer("DirectionPoints")}readFeatureCollectionsFromItem(e,t,r){return this.revert("featureCollections","portal-item"),t.layers.map(e=>{const t=new p["default"];return t.read(e,r),t})}readFeatureCollectionsFromWebMap(e,t,r){return t.featureCollection.layers.map(e=>{const t=new p["default"];return t.read(e,r),t})}get fullExtent(){const e=null;return this.featureCollections?this.featureCollections.reduce((e,t)=>e?e.union(t.fullExtent):t.fullExtent,e):e}get maxScale(){const e=null;return this.featureCollections?this.featureCollections.reduce((e,t)=>null==e?t.maxScale:Math.min(e,t.maxScale),e):0}set maxScale(e){this.featureCollections.forEach(t=>{t.maxScale=e}),this._set("maxScale",e)}get minScale(){const e=null;return this.featureCollections?this.featureCollections.reduce((e,t)=>null==e?t.minScale:Math.min(e,t.minScale),e):0}set minScale(e){this.featureCollections.forEach(t=>{t.minScale=e}),this._set("minScale",e)}get routeInfo(){return this._getNamedFeatureLayer("RouteInfo")}get stops(){return this._getNamedFeatureLayer("Stops")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}_getNamedFeatureLayer(e){if(this.featureCollections)return this.featureCollections.find(t=>t.title===e)}};Object(a["a"])([Object(o["b"])()],d.prototype,"barrierLines",null),Object(a["a"])([Object(o["b"])()],d.prototype,"barrierPoints",null),Object(a["a"])([Object(o["b"])()],d.prototype,"barrierPolygons",null),Object(a["a"])([Object(o["b"])()],d.prototype,"directionLines",null),Object(a["a"])([Object(o["b"])()],d.prototype,"directionPoints",null),Object(a["a"])([Object(o["b"])({type:i["a"].ofType(p["default"])})],d.prototype,"featureCollections",void 0),Object(a["a"])([Object(l["a"])("portal-item","featureCollections",["layers"])],d.prototype,"readFeatureCollectionsFromItem",null),Object(a["a"])([Object(l["a"])("web-map","featureCollections",["featureCollection.layers"])],d.prototype,"readFeatureCollectionsFromWebMap",null),Object(a["a"])([Object(o["b"])({readOnly:!0})],d.prototype,"fullExtent",null),Object(a["a"])([Object(o["b"])({type:["show","hide"]})],d.prototype,"listMode",void 0),Object(a["a"])([Object(o["b"])()],d.prototype,"maxScale",null),Object(a["a"])([Object(o["b"])()],d.prototype,"minScale",null),Object(a["a"])([Object(o["b"])()],d.prototype,"routeInfo",null),Object(a["a"])([Object(o["b"])()],d.prototype,"stops",null),Object(a["a"])([Object(o["b"])({readOnly:!0,json:{read:!1}})],d.prototype,"type",void 0),d=Object(a["a"])([Object(n["a"])("esri.layers.RouteLayer")],d);var y=d;t["default"]=y}}]);
//# sourceMappingURL=chunk-2d20f003.6b25d869.js.map