(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06ad9dad"],{3981:function(e,t,l){"use strict";var a,r=l("a4ee"),o=(l("c120"),l("7ffa")),i=(l("e92d"),l("cea0"),l("59b2")),s=l("d386"),n=(l("e041"),l("8eed"),l("f402"),l("6a0e"));let c=a=class extends n["a"]{constructor(e){super(e)}clone(){return new a({customLayerParameters:Object(o["a"])(this.customLayerParameters),customParameters:Object(o["a"])(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};Object(r["a"])([Object(i["b"])({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),Object(r["a"])([Object(i["b"])({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),Object(r["a"])([Object(i["b"])({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),Object(r["a"])([Object(i["b"])({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),Object(r["a"])([Object(i["b"])({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=a=Object(r["a"])([Object(s["a"])("esri.layer.support.WMTSLayerInfo")],c);var p=c;t["a"]=p},"9dc3":function(e,t,l){"use strict";l.r(t);var a=l("a4ee"),r=(l("c120"),l("b3b6")),o=(l("e92d"),l("cea0"),l("59b2")),i=l("afcf"),s=l("d386"),n=l("09db"),c=l("ce50"),p=l("e041"),u=(l("8eed"),l("f402"),l("5996")),b=l("4ae5"),j=l("3af1"),d=(l("e06a"),l("2eab")),y=l("a6a3"),h=l("e694"),O=l("b911"),f=l("997b"),m=l("0db5"),v=l("8e17"),w=l("5a62"),g=l("50e6"),T=l("dff3"),S=l("3981");let R=class extends(Object(f["a"])(Object(v["a"])(Object(w["a"])(Object(O["a"])(Object(m["a"])(Object(h["a"])(y["a"]))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new j["a"](-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,u["a"].WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=u["a"].WebMercator,this.subDomains=null,this.tileInfo=new T["a"]({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new b["a"]({x:-20037508.342787,y:20037508.342787,spatialReference:u["a"].WebMercator}),spatialReference:u["a"].WebMercator,lods:[new g["a"]({level:0,scale:591657527.591555,resolution:156543.033928}),new g["a"]({level:1,scale:295828763.795777,resolution:78271.5169639999}),new g["a"]({level:2,scale:147914381.897889,resolution:39135.7584820001}),new g["a"]({level:3,scale:73957190.948944,resolution:19567.8792409999}),new g["a"]({level:4,scale:36978595.474472,resolution:9783.93962049996}),new g["a"]({level:5,scale:18489297.737236,resolution:4891.96981024998}),new g["a"]({level:6,scale:9244648.868618,resolution:2445.98490512499}),new g["a"]({level:7,scale:4622324.434309,resolution:1222.99245256249}),new g["a"]({level:8,scale:2311162.217155,resolution:611.49622628138}),new g["a"]({level:9,scale:1155581.108577,resolution:305.748113140558}),new g["a"]({level:10,scale:577790.554289,resolution:152.874056570411}),new g["a"]({level:11,scale:288895.277144,resolution:76.4370282850732}),new g["a"]({level:12,scale:144447.638572,resolution:38.2185141425366}),new g["a"]({level:13,scale:72223.819286,resolution:19.1092570712683}),new g["a"]({level:14,scale:36111.909643,resolution:9.55462853563415}),new g["a"]({level:15,scale:18055.954822,resolution:4.77731426794937}),new g["a"]({level:16,scale:9027.977411,resolution:2.38865713397468}),new g["a"]({level:17,scale:4513.988705,resolution:1.19432856685505}),new g["a"]({level:18,scale:2256.994353,resolution:.597164283559817}),new g["a"]({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new p["a"](this.urlTemplate);this.subDomains&&this.subDomains.length>0||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new c["a"]("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&u["a"].fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,a=new p["a"](t),r=a.scheme?a.scheme+"://":"//",o=r+a.authority+"/";if(-1===a.authority.indexOf("{subDomain}"))e.push(o);else if(l&&l.length>0&&a.authority.split(".").length>1)for(const i of l)e.push(r+a.authority.replace(/\{subDomain\}/gi,i)+"/");return e.map(e=>("/"!==e.charAt(e.length-1)&&(e+="/"),e))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new p["a"](e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&Object(p["v"])(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(p["C"])(e)),t.templateUrl=e}fetchTile(e,t,l,a={}){const{signal:r,timestamp:o}=a,i=this.getTileUrl(e,t,l),s={responseType:"image",signal:r};return null!=o&&(s.query={_ts:a.timestamp}),Object(d["default"])(i,s).then(e=>e.data)}getTileUrl(e,t,l){const a=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(r["c"])(this.urlPath,{level:a,z:a,col:l,x:l,row:t,y:t})}};Object(a["a"])([Object(o["b"])({type:String,value:"",json:{write:!0}})],R.prototype,"copyright",void 0),Object(a["a"])([Object(o["b"])({type:j["a"],json:{write:!0}})],R.prototype,"fullExtent",void 0),Object(a["a"])([Object(o["b"])({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"legendEnabled",void 0),Object(a["a"])([Object(o["b"])({type:["show","hide"]})],R.prototype,"listMode",void 0),Object(a["a"])([Object(o["b"])()],R.prototype,"levelValues",null),Object(a["a"])([Object(o["b"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],R.prototype,"isReference",void 0),Object(a["a"])([Object(o["b"])({type:["WebTiledLayer"],value:"WebTiledLayer"})],R.prototype,"operationalLayerType",void 0),Object(a["a"])([Object(o["b"])({readOnly:!0,json:{read:!1,write:!1}})],R.prototype,"popupEnabled",void 0),Object(a["a"])([Object(o["b"])({type:u["a"]})],R.prototype,"spatialReference",void 0),Object(a["a"])([Object(i["a"])("spatialReference",["spatialReference","fullExtent.spatialReference"])],R.prototype,"readSpatialReference",null),Object(a["a"])([Object(o["b"])({type:[String],json:{write:!0}})],R.prototype,"subDomains",void 0),Object(a["a"])([Object(o["b"])({type:T["a"],json:{write:!0}})],R.prototype,"tileInfo",void 0),Object(a["a"])([Object(o["b"])({readOnly:!0})],R.prototype,"tileServers",null),Object(a["a"])([Object(o["b"])({json:{read:!1}})],R.prototype,"type",void 0),Object(a["a"])([Object(o["b"])()],R.prototype,"urlPath",null),Object(a["a"])([Object(o["b"])({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],R.prototype,"urlTemplate",void 0),Object(a["a"])([Object(i["a"])("urlTemplate",["urlTemplate","templateUrl"])],R.prototype,"readUrlTemplate",null),Object(a["a"])([Object(n["a"])("urlTemplate",{templateUrl:{type:String}})],R.prototype,"writeUrlTemplate",null),Object(a["a"])([Object(o["b"])({type:S["a"],json:{write:!0}})],R.prototype,"wmtsInfo",void 0),R=Object(a["a"])([Object(s["a"])("esri.layers.WebTileLayer")],R);var x=R;t["default"]=x}}]);
//# sourceMappingURL=chunk-06ad9dad.4c080f1c.js.map