(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5084825c","chunk-2d22611c"],{2698:function(e,t,r){"use strict";function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return o}))},"44bb":function(e,t,r){"use strict";r.r(t);var o=r("a4ee"),i=(r("c120"),r("7ffa")),a=r("9d1d"),n=r("b2b2"),s=r("e92d"),l=r("cea0"),c=r("59b2"),p=r("afcf"),d=r("d386"),u=r("09db"),b=r("ce50"),y=r("e041"),h=(r("8eed"),r("f402"),r("f4cc")),f=r("1637"),j=r("4856"),O=r("2eab"),m=r("a6a3"),v=r("e694"),w=r("22f4"),g=r("b911"),S=r("a1f3"),I=r("80b7"),x=r("3d59"),T=r("0db5"),R=r("5a62"),P=r("2feb"),C=r("f51b"),N=r("96ae"),F=r("6a0e");let V=class extends F["a"]{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};Object(o["a"])([Object(c["b"])({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"field",void 0),Object(o["a"])([Object(c["b"])({readOnly:!0,nonNullable:!0,json:{read:!1}})],V.prototype,"type",void 0),V=Object(o["a"])([Object(d["a"])("esri.layers.pointCloudFilters.PointCloudFilter")],V);var q,_=V,A=_,E=r("448d");let B=q=class extends A{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new q({field:this.field,requiredClearBits:Object(i["a"])(this.requiredClearBits),requiredSetBits:Object(i["a"])(this.requiredSetBits)})}};Object(o["a"])([Object(c["b"])({type:[l["a"]],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],B.prototype,"requiredClearBits",void 0),Object(o["a"])([Object(c["b"])({type:[l["a"]],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],B.prototype,"requiredSetBits",void 0),Object(o["a"])([Object(E["a"])({pointCloudBitfieldFilter:"bitfield"})],B.prototype,"type",void 0),B=q=Object(o["a"])([Object(d["a"])("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],B);var K,k=B,z=k;let U=K=class extends A{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new K({field:this.field,includedReturns:Object(i["a"])(this.includedReturns)})}};Object(o["a"])([Object(c["b"])({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],U.prototype,"includedReturns",void 0),Object(o["a"])([Object(E["a"])({pointCloudReturnFilter:"return"})],U.prototype,"type",void 0),U=K=Object(o["a"])([Object(d["a"])("esri.layers.pointCloudFilters.PointCloudReturnFilter")],U);var M,D=U,L=D;let J=M=class extends A{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new M({field:this.field,mode:this.mode,values:Object(i["a"])(this.values)})}};Object(o["a"])([Object(c["b"])({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"mode",void 0),Object(o["a"])([Object(E["a"])({pointCloudValueFilter:"value"})],J.prototype,"type",void 0),Object(o["a"])([Object(c["b"])({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],J.prototype,"values",void 0),J=M=Object(o["a"])([Object(d["a"])("esri.layers.pointCloudFilters.PointCloudValueFilter")],J);var $=J,G=$;const W={key:"type",base:A,typeMap:{value:G,bitfield:z,return:L}};var Z,H=r("7731"),Q=r("4e0d");let X=Z=class extends H["a"]{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new Z({...this.cloneProperties(),field:Object(i["a"])(this.field)})}};Object(o["a"])([Object(E["a"])({pointCloudRGBRenderer:"point-cloud-rgb"})],X.prototype,"type",void 0),Object(o["a"])([Object(c["b"])({type:String,json:{write:!0}})],X.prototype,"field",void 0),X=Z=Object(o["a"])([Object(d["a"])("esri.renderers.PointCloudRGBRenderer")],X);var Y=X,ee=Y,te=r("578b"),re=r("a1f7");const oe={key:"type",base:H["a"],typeMap:{"point-cloud-class-breaks":Q["a"],"point-cloud-rgb":ee,"point-cloud-stretch":te["a"],"point-cloud-unique-value":re["a"]},errorContext:"renderer"},ie=s["a"].getLogger("esri.layers.PointCloudLayer"),ae=Object(P["a"])();let ne=class extends(Object(N["a"])(Object(x["a"])(Object(g["a"])(Object(T["a"])(Object(R["a"])(Object(v["a"])(m["a"]))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}get fieldsIndex(){return new I["a"](this.fields)}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}readServiceFields(e,t,r){return Array.isArray(e)?e.map(e=>{const t=new S["a"];return"FieldTypeInteger"===e.type&&((e=Object(i["a"])(e)).type="esriFieldTypeInteger"),t.read(e,r),t}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(e=>new S["a"]({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,r,o){Object(a["c"])("layerDefinition.drawingInfo.renderer",e.write(null,o),t)}load(e){const t=Object(n["k"])(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(h["v"]).then(()=>this._fetchService(t));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){const t=Object(C["a"])(this,e);return this.formatPopupTemplateReturnsField(t),this.formatPopupTemplateRGBField(t),t}formatPopupTemplateReturnsField(e){const t=this.fieldsIndex.get("RETURNS");if(!t)return;const r=e.fieldInfos.find(e=>e.fieldName===t.name);if(!r)return;const o=new f["a"]({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`\n        var returnValue = $feature.${t.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-returns-decoded"}formatPopupTemplateRGBField(e){const t=this.fieldsIndex.get("RGB");if(!t)return;const r=e.fieldInfos.find(e=>e.fieldName===t.name);if(!r)return;const o=new f["a"]({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`\n        var rgb = $feature.${t.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new b["a"]("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new b["a"]("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===r.name){const e=Object(y["y"])(this.parsedUrl.path,"./statistics/"+o.key);return Object(O["default"])(e,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then(e=>e.data)}throw new b["a"]("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new b["a"]("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new b["a"]("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new b["a"]("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&ie.warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&ie.warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}};Object(o["a"])([Object(c["b"])({type:["PointCloudLayer"]})],ne.prototype,"operationalLayerType",void 0),Object(o["a"])([Object(c["b"])(w["j"])],ne.prototype,"popupEnabled",void 0),Object(o["a"])([Object(c["b"])({type:j["a"],json:{name:"popupInfo",write:!0}})],ne.prototype,"popupTemplate",void 0),Object(o["a"])([Object(c["b"])({readOnly:!0,json:{read:!1}})],ne.prototype,"defaultPopupTemplate",null),Object(o["a"])([Object(c["b"])({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ne.prototype,"opacity",void 0),Object(o["a"])([Object(c["b"])({type:["show","hide"]})],ne.prototype,"listMode",void 0),Object(o["a"])([Object(c["b"])({types:[W],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ne.prototype,"filters",void 0),Object(o["a"])([Object(c["b"])({type:[S["a"]]})],ne.prototype,"fields",void 0),Object(o["a"])([Object(c["b"])({readOnly:!0})],ne.prototype,"fieldsIndex",null),Object(o["a"])([Object(p["a"])("service","fields",["fields","attributeStorageInfo"])],ne.prototype,"readServiceFields",null),Object(o["a"])([Object(c["b"])(ae.outFields)],ne.prototype,"outFields",void 0),Object(o["a"])([Object(c["b"])({readOnly:!0})],ne.prototype,"attributeStorageInfo",void 0),Object(o["a"])([Object(c["b"])(w["b"])],ne.prototype,"elevationInfo",null),Object(o["a"])([Object(c["b"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ne.prototype,"path",void 0),Object(o["a"])([Object(c["b"])(w["e"])],ne.prototype,"legendEnabled",void 0),Object(o["a"])([Object(c["b"])({types:oe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:oe},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ne.prototype,"renderer",void 0),Object(o["a"])([Object(u["a"])("renderer")],ne.prototype,"writeRenderer",null),Object(o["a"])([Object(c["b"])({json:{read:!1},readOnly:!0})],ne.prototype,"type",void 0),ne=Object(o["a"])([Object(d["a"])("esri.layers.PointCloudLayer")],ne);var se=ne;t["default"]=se},"4e0d":function(e,t,r){"use strict";var o,i=r("a4ee"),a=(r("c120"),r("7ffa")),n=(r("e92d"),r("cea0")),s=r("59b2"),l=r("448d"),c=r("d386"),p=(r("e041"),r("8eed"),r("f402"),r("7731")),d=r("d611"),u=r("6a0e"),b=r("9ef0");let y=o=class extends u["a"]{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new o({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(a["a"])(this.color)})}};Object(i["a"])([Object(s["b"])({type:String,json:{write:!0}})],y.prototype,"description",void 0),Object(i["a"])([Object(s["b"])({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(i["a"])([Object(s["b"])({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),Object(i["a"])([Object(s["b"])({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),Object(i["a"])([Object(s["b"])({type:b["a"],json:{type:[n["a"]],write:!0}})],y.prototype,"color",void 0),y=o=Object(i["a"])([Object(c["a"])("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);var h,f=y,j=f;let O=h=class extends p["a"]{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(a["a"])(this.colorClassBreakInfos),legendOptions:Object(a["a"])(this.legendOptions)})}};Object(i["a"])([Object(l["a"])({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],O.prototype,"type",void 0),Object(i["a"])([Object(s["b"])({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(i["a"])([Object(s["b"])({type:d["a"],json:{write:!0}})],O.prototype,"legendOptions",void 0),Object(i["a"])([Object(s["b"])({type:p["a"].fieldTransformTypeKebabDict.apiValues,json:{type:p["a"].fieldTransformTypeKebabDict.jsonValues,read:p["a"].fieldTransformTypeKebabDict.read,write:p["a"].fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(i["a"])([Object(s["b"])({type:[j],json:{write:!0}})],O.prototype,"colorClassBreakInfos",void 0),O=h=Object(i["a"])([Object(c["a"])("esri.renderers.PointCloudClassBreaksRenderer")],O);var m=O;t["a"]=m},"578b":function(e,t,r){"use strict";var o,i=r("a4ee"),a=(r("c120"),r("7ffa")),n=(r("e92d"),r("cea0"),r("59b2")),s=r("448d"),l=r("d386"),c=(r("e041"),r("8eed"),r("f402"),r("7731")),p=r("d611"),d=r("3f60");let u=o=class extends c["a"]{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new o({...this.cloneProperties(),field:Object(a["a"])(this.field),fieldTransformType:Object(a["a"])(this.fieldTransformType),stops:Object(a["a"])(this.stops),legendOptions:Object(a["a"])(this.legendOptions)})}};Object(i["a"])([Object(s["a"])({pointCloudStretchRenderer:"point-cloud-stretch"})],u.prototype,"type",void 0),Object(i["a"])([Object(n["b"])({json:{write:!0},type:String})],u.prototype,"field",void 0),Object(i["a"])([Object(n["b"])({type:p["a"],json:{write:!0}})],u.prototype,"legendOptions",void 0),Object(i["a"])([Object(n["b"])({type:c["a"].fieldTransformTypeKebabDict.apiValues,json:{type:c["a"].fieldTransformTypeKebabDict.jsonValues,read:c["a"].fieldTransformTypeKebabDict.read,write:c["a"].fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),Object(i["a"])([Object(n["b"])({type:[d["a"]],json:{write:!0}})],u.prototype,"stops",void 0),u=o=Object(i["a"])([Object(l["a"])("esri.renderers.PointCloudStretchRenderer")],u);var b=u;t["a"]=b},"6e36":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("b2b2"),i=r("ce50"),a=r("2eab");async function n(e,t,r,n,s){let l=null;if(Object(o["k"])(r)){const t=e+"/nodepages/",i=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await Object(a["default"])(i,{query:{f:"json"},responseType:"json",signal:s})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(d){Object(o["k"])(n)&&n.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",i,d),l=d}}if(!t)return null;const c=e+"/nodes/",p=c+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await Object(a["default"])(p,{query:{f:"json"},responseType:"json",signal:s})).data,urlPrefix:c}}catch(d){throw new i["a"]("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:d,url:p})}}},7731:function(e,t,r){"use strict";var o,i=r("a4ee"),a=(r("c120"),r("7ffa")),n=(r("e92d"),r("cea0"),r("59b2")),s=r("fa8a"),l=r("d386"),c=(r("e041"),r("8eed"),r("f402"),r("6a0e"));let p=o=class extends c["a"]{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new o({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};Object(i["a"])([Object(n["b"])({type:String,json:{write:!0}})],p.prototype,"field",void 0),Object(i["a"])([Object(n["b"])({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),Object(i["a"])([Object(n["b"])({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=o=Object(i["a"])([Object(l["a"])("esri.renderers.support.pointCloud.ColorModulation")],p);var d=p,u=d;const b=new s["a"]({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends c["a"]{};Object(i["a"])([Object(n["b"])({type:b.apiValues,readOnly:!0,nonNullable:!0,json:{type:b.jsonValues,read:!1,write:b.write}})],y.prototype,"type",void 0),y=Object(i["a"])([Object(l["a"])("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);var h,f=y,j=f,O=r("448d");let m=h=class extends j{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new h({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};Object(i["a"])([Object(O["a"])({pointCloudFixedSizeAlgorithm:"fixed-size"})],m.prototype,"type",void 0),Object(i["a"])([Object(n["b"])({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"size",void 0),Object(i["a"])([Object(n["b"])({type:Boolean,json:{write:!0}})],m.prototype,"useRealWorldSymbolSizes",void 0),m=h=Object(i["a"])([Object(l["a"])("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],m);var v,w=m,g=w;let S=v=class extends j{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new v({scaleFactor:this.scaleFactor})}};Object(i["a"])([Object(O["a"])({pointCloudSplatAlgorithm:"splat"})],S.prototype,"type",void 0),Object(i["a"])([Object(n["b"])({type:Number,value:1,nonNullable:!0,json:{write:!0}})],S.prototype,"scaleFactor",void 0),S=v=Object(i["a"])([Object(l["a"])("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],S);var I=S,x=I;const T={key:"type",base:j,typeMap:{"fixed-size":g,splat:x}},R=Object(s["b"])()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let P=class extends c["a"]{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:Object(a["a"])(this.pointSizeAlgorithm),colorModulation:Object(a["a"])(this.colorModulation),pointsPerInch:Object(a["a"])(this.pointsPerInch)}}};Object(i["a"])([Object(n["b"])({type:R.apiValues,readOnly:!0,nonNullable:!0,json:{type:R.jsonValues,read:!1,write:R.write}})],P.prototype,"type",void 0),Object(i["a"])([Object(n["b"])({types:T,json:{write:!0}})],P.prototype,"pointSizeAlgorithm",void 0),Object(i["a"])([Object(n["b"])({type:u,json:{write:!0}})],P.prototype,"colorModulation",void 0),Object(i["a"])([Object(n["b"])({json:{write:!0},nonNullable:!0,type:Number})],P.prototype,"pointsPerInch",void 0),P=Object(i["a"])([Object(l["a"])("esri.renderers.PointCloudRenderer")],P),function(e){e.fieldTransformTypeKebabDict=new s["a"]({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(P||(P={}));var C=P;t["a"]=C},"96ae":function(e,t,r){"use strict";r.d(t,"a",(function(){return F}));var o=r("a4ee"),i=(r("c120"),r("b2b2")),a=r("e92d"),n=(r("cea0"),r("59b2")),s=r("afcf"),l=r("d386"),c=r("09db"),p=r("ce50"),d=r("e041"),u=r("8eed"),b=(r("f402"),r("f4cc")),y=r("5996"),h=r("3af1"),f=r("2eab"),j=r("0224"),O=r("a7e1"),m=r("2698");function v(e){e&&e.writtenProperties&&e.writtenProperties.forEach(e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&Object(m["a"])(t)&&t.updateOrigin(e.propName,e.newOrigin)})}var w=r("54b4"),g=r("e64d"),S=r("792b"),I=r("e6a6");async function x(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const i=new Set(t.resources.toKeep.map(e=>e.resource.path)),a=new Set,n=[];i.forEach(t=>{o.delete(t),e.paths.push(t)});for(const c of t.resources.toUpdate)if(o.delete(c.resource.path),i.has(c.resource.path)||a.has(c.resource.path)){const{resource:t,content:o,finish:i,error:a}=c,s=Object(I["getSiblingOfSameTypeI"])(t,Object(u["a"])());e.paths.push(s.path),n.push(T({resource:s,content:o,finish:i,error:a},r))}else e.paths.push(c.resource.path),n.push(R(c,r)),a.add(c.resource.path);for(const c of t.resources.toAdd)n.push(T(c,r)),e.paths.push(c.resource.path);if(o.forEach(e=>{const r=t.portalItem.resourceFromPath(e);n.push(r.portalItem.removeResource(r).catch(()=>{}))}),0===n.length)return;const s=await Object(b["k"])(n);Object(b["w"])(r);const l=s.filter(e=>"error"in e).map(e=>e.error);if(l.length>0)throw new p["a"]("save:resources","Failed to save one or more resources",{errors:l})}async function T(e,t){const r=await Object(S["d"])(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function R(e,t){const r=await Object(S["d"])(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}var P=r("22f4"),C=r("6e36");const N=a["a"].getLogger("esri.layers.mixins.SceneService"),F=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=Object(b["j"])(async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return y["a"].fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new y["a"](o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e)return h["a"].fromJSON(e,r);const o=t.store,i=this._readSpatialReference(t);return null==i||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some(e=>e<V)?null:new h["a"]({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",i={major:Number.NaN,minor:Number.NaN,versionString:o},a=o.split(".");return a.length>=2&&(i.major=parseInt(a[0],10),i.minor=parseInt(a[1],10)),i}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(w["i"])(this.url,t.name);let o=t.name;if(!o&&this.url){const e=Object(w["e"])(this.url);Object(i["k"])(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),Object(w["a"])(o)}set url(e){const t=Object(w["h"])({layer:this,url:e,nonStandardUrlAllowed:!1,logger:N});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(w["j"])(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(d["J"])(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Object(C["a"])(this.parsedUrl.path,this.rootNode,e,N,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,i=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==i||null==i.obb||null==i.obb.center||null==i.obb.halfSize)throw new p["a"]("sceneservice:invalid-node-page","Invalid node page.");if(i.obb.center[0]<V||null==this.fullExtent||this.fullExtent.hasZ)return;const a=i.obb.halfSize,n=i.obb.center[2],s=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);this.fullExtent.zmin=n-s,this.fullExtent.zmax=n+s}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<V)return;const r=t[2],i=t[3];this.fullExtent.zmin=r-i,this.fullExtent.zmax=r+i}}async _fetchService(e){if(null==this.url)throw new p["a"]("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(f["default"])(this.url,{query:{f:"json"},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(f["default"])(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t),1===r&&(e.typeKeywords=e.typeKeywords.filter(e=>"Hosted Service"!==e)))}async _saveAs(e,t){const r={...A,...t};let o=O["default"].from(e);o||(N.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new p["a"]("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const i=o.portal||j["a"].getDefault();await this._ensureLoadBeforeSave(),o.type=_,o.portal=i;const a={origin:"portal-item",url:null,messages:[],portal:i,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write(null,a)]};return await Promise.all(a.resources.pendingOperations),await this._validateAgainstJSONSchema(n,a,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await i._signIn(),await i.user.addItem({item:o,folder:r&&r.folder,data:n}),await x(this.resourceReferences,a,null),this.portalItem=o,v(a),a.portalItem=o,o}async _save(e){const t={...A,...e};this.portalItem||(N.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new p["a"]("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==_&&(N.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+_),await Promise.reject(new p["a"]("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${_}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(d["J"])(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||j["a"].getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await x(this.resourceReferences,r,null),v(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let i=t.messages.filter(e=>"error"===e.type).map(e=>new p["a"](e.name,e.message,e.details));if(o&&o.validationOptions.ignoreUnsupported&&(i=i.filter(e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)),o.validationOptions.enabled||q){const t=(await r.e("chunk-ea395404").then(r.bind(null,"a7eb"))).validate(e,o.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n"+t.join("\n");if(N.error("_validateAgainstJSONSchema(): "+e),"throw"===o.validationOptions.failPolicy){const e=t.map(e=>new p["a"]("sceneservice:schema-validation",e)).concat(i);throw new p["a"]("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(i.length>0)throw new p["a"]("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}};return Object(o["a"])([Object(n["b"])(P["c"])],t.prototype,"id",void 0),Object(o["a"])([Object(n["b"])({type:y["a"]})],t.prototype,"spatialReference",void 0),Object(o["a"])([Object(s["a"])("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(o["a"])([Object(n["b"])({type:h["a"]})],t.prototype,"fullExtent",void 0),Object(o["a"])([Object(s["a"])("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(o["a"])([Object(n["b"])({readOnly:!0,type:g["a"]})],t.prototype,"heightModelInfo",void 0),Object(o["a"])([Object(n["b"])({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(o["a"])([Object(n["b"])({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(o["a"])([Object(n["b"])({readOnly:!0})],t.prototype,"version",void 0),Object(o["a"])([Object(s["a"])("version",["store.version"])],t.prototype,"readVersion",null),Object(o["a"])([Object(n["b"])({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o["a"])([Object(n["b"])({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(o["a"])([Object(n["b"])({type:String})],t.prototype,"title",void 0),Object(o["a"])([Object(s["a"])("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(o["a"])([Object(s["a"])("service","title",["name"])],t.prototype,"readTitleService",null),Object(o["a"])([Object(n["b"])({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(o["a"])([Object(n["b"])(P["n"])],t.prototype,"url",null),Object(o["a"])([Object(c["a"])("url")],t.prototype,"writeUrl",null),Object(o["a"])([Object(n["b"])()],t.prototype,"parsedUrl",null),Object(o["a"])([Object(n["b"])({readOnly:!0})],t.prototype,"store",void 0),Object(o["a"])([Object(n["b"])({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(o["a"])([Object(l["a"])("esri.layers.mixins.SceneService")],t),t},V=-1e38,q=!1,_="Scene Service",A={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},a1f7:function(e,t,r){"use strict";var o,i=r("a4ee"),a=(r("c120"),r("7ffa")),n=(r("e92d"),r("cea0")),s=r("59b2"),l=r("448d"),c=r("d386"),p=(r("e041"),r("8eed"),r("f402"),r("7731")),d=r("d611"),u=r("6a0e"),b=r("9ef0");let y=o=class extends u["a"]{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new o({description:this.description,label:this.label,values:Object(a["a"])(this.values),color:Object(a["a"])(this.color)})}};Object(i["a"])([Object(s["b"])({type:String,json:{write:!0}})],y.prototype,"description",void 0),Object(i["a"])([Object(s["b"])({type:String,json:{write:!0}})],y.prototype,"label",void 0),Object(i["a"])([Object(s["b"])({type:[String],json:{write:!0}})],y.prototype,"values",void 0),Object(i["a"])([Object(s["b"])({type:b["a"],json:{type:[n["a"]],write:!0}})],y.prototype,"color",void 0),y=o=Object(i["a"])([Object(c["a"])("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);var h,f=y,j=f;let O=h=class extends p["a"]{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:Object(a["a"])(this.field),fieldTransformType:Object(a["a"])(this.fieldTransformType),colorUniqueValueInfos:Object(a["a"])(this.colorUniqueValueInfos),legendOptions:Object(a["a"])(this.legendOptions)})}};Object(i["a"])([Object(l["a"])({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],O.prototype,"type",void 0),Object(i["a"])([Object(s["b"])({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(i["a"])([Object(s["b"])({type:p["a"].fieldTransformTypeKebabDict.apiValues,json:{type:p["a"].fieldTransformTypeKebabDict.jsonValues,read:p["a"].fieldTransformTypeKebabDict.read,write:p["a"].fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(i["a"])([Object(s["b"])({type:[j],json:{write:!0}})],O.prototype,"colorUniqueValueInfos",void 0),Object(i["a"])([Object(s["b"])({type:d["a"],json:{write:!0}})],O.prototype,"legendOptions",void 0),O=h=Object(i["a"])([Object(c["a"])("esri.renderers.PointCloudUniqueValueRenderer")],O);var m=O;t["a"]=m},e6a6:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return l})),r.d(t,"contentToBlob",(function(){return y})),r.d(t,"fetchResources",(function(){return s})),r.d(t,"getSiblingOfSameType",(function(){return h})),r.d(t,"getSiblingOfSameTypeI",(function(){return f})),r.d(t,"removeAllResources",(function(){return p})),r.d(t,"removeResource",(function(){return c})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return u}));var o=r("b2b2"),i=r("ce50"),a=r("e041"),n=r("2eab");async function s(e,t={},r){await e.load(r);const i=Object(a["y"])(e.itemUrl,"resources"),{start:n=1,num:s=10,sortOrder:l="asc",sortField:c="created"}=t,p={query:{start:n,num:s,sortOrder:l,sortField:c},signal:Object(o["i"])(r,"signal")},d=await e.portal._request(i,p);return{total:d.total,nextStart:d.nextStart,resources:d.resources.map(({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)}))}}async function l(e,t,r,n){if(!e.hasPath())throw new i["a"](`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(n);const s=Object(a["y"])(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[l,c]=d(e.path),p=await y(r),u=new FormData;return l&&"."!==l&&u.append("resourcesPrefix",l),u.append("fileName",c),u.append("file",p,c),u.append("f","json"),Object(o["k"])(n)&&n.access&&u.append("access",n.access),await e.portalItem.portal._request(s,{method:"post",body:u,signal:Object(o["i"])(n,"signal")}),e}async function c(e,t,r){if(!t.hasPath())throw new i["a"]("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const n=Object(a["y"])(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:t.path},signal:Object(o["i"])(r,"signal")}),t.portalItem=null}async function p(e,t){await e.load(t);const r=Object(a["y"])(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(o["i"])(t,"signal")})}function d(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function u(e){const[t,r]=b(e),[o,i]=d(t);return[o,i,r]}function b(e){const t=Object(a["n"])(e);return Object(o["j"])(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}async function y(e){return e instanceof Blob?e:(await Object(n["default"])(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,o]=u(e.path);return e.portalItem.resourceFromPath(Object(a["y"])(r,t+o))}function f(e,t){if(!e.hasPath())return null;const[r,,o]=u(e.path);return e.portalItem.resourceFromPath(Object(a["y"])(r,t+o))}}}]);
//# sourceMappingURL=chunk-5084825c.a01ef2d9.js.map