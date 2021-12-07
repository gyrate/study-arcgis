(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-056983d8"],{"2a7d":function(e,t,o){"use strict";o.r(t);var i=o("a4ee"),r=o("c120"),s=(o("e92d"),o("cea0"),o("59b2")),n=o("afcf"),a=o("d386"),l=(o("e041"),o("8eed"),o("f402"),o("fcf2")),u=o("5996"),p=(o("e06a"),o("c64f")),c=o("5bd5"),d=o("a94c"),b=o("b2b2"),y=o("3af1"),h=o("6d5f"),O=o("dfa0"),j=o("f29a");let f=class extends h["a"]{constructor(e){super(e),this.type="csv"}load(e){const t=Object(b["k"])(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(e=>j["default"].fromJSON(e))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(e=>({count:e.count,extent:y["a"].fromJSON(e.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}async _startWorker(e){this._connection=await Object(O["b"])("CSVSourceWorker",{strategy:Object(r["a"])("feature-layers-workers")?"dedicated":"local",signal:e});const t=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map(e=>e.toJSON()),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=t.locationInfo,this.sourceJSON=t.layerDefinition,this.columnDelimiter=t.columnDelimiter}};Object(i["a"])([Object(s["b"])()],f.prototype,"type",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"url",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"delimiter",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"fields",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"latitudeField",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"longitudeField",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"spatialReference",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"timeInfo",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"locationInfo",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"sourceJSON",void 0),Object(i["a"])([Object(s["b"])()],f.prototype,"columnDelimiter",void 0),f=Object(i["a"])([Object(a["a"])("esri.layers.graphics.sources.CSVSource")],f);var m=f,g=m;let v=class extends c["default"]{constructor(...e){super(...e),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=u["a"].WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get capabilities(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:d["a"],queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}async createGraphicsSource(e){const t=new g({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(p["a"].from(e)||this.createQuery())).then(e=>{if(e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(p["a"].from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(p["a"].from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(p["a"].from(e)||this.createQuery()))}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};Object(i["a"])([Object(s["b"])({readOnly:!0,dependsOn:["loaded"],json:{read:!1,write:!1}})],v.prototype,"capabilities",null),Object(i["a"])([Object(s["b"])({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],v.prototype,"delimiter",void 0),Object(i["a"])([Object(s["b"])({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],v.prototype,"editingEnabled",void 0),Object(i["a"])([Object(s["b"])({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],v.prototype,"fields",void 0),Object(i["a"])([Object(s["b"])({type:Boolean,readOnly:!0})],v.prototype,"isTable",null),Object(i["a"])([Object(n["a"])("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],v.prototype,"readWebMapLabelsVisible",null),Object(i["a"])([Object(s["b"])({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],v.prototype,"latitudeField",void 0),Object(i["a"])([Object(s["b"])({type:["show","hide"]})],v.prototype,"listMode",void 0),Object(i["a"])([Object(s["b"])({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],v.prototype,"locationType",void 0),Object(i["a"])([Object(s["b"])({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],v.prototype,"longitudeField",void 0),Object(i["a"])([Object(s["b"])({type:["CSV"]})],v.prototype,"operationalLayerType",void 0),Object(i["a"])([Object(s["b"])()],v.prototype,"outFields",void 0),Object(i["a"])([Object(s["b"])({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],v.prototype,"path",void 0),Object(i["a"])([Object(s["b"])({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],v.prototype,"portalItem",void 0),Object(i["a"])([Object(s["b"])({json:{read:!1},cast:null,type:g,readOnly:!0})],v.prototype,"source",void 0),Object(i["a"])([Object(s["b"])({json:{read:!1},value:"csv",readOnly:!0})],v.prototype,"type",void 0),Object(i["a"])([Object(s["b"])({json:{read:l["d"],write:{isRequired:!0,ignoreOrigin:!0,writer:l["f"]}}})],v.prototype,"url",null),v=Object(i["a"])([Object(a["a"])("esri.layers.CSVLayer")],v);var w=v;t["default"]=w},a94c:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));const i={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}}]);
//# sourceMappingURL=chunk-056983d8.d1de21c7.js.map