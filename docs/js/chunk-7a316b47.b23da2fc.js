(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a316b47","chunk-2d22611c"],{2698:function(e,t,r){"use strict";function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,"a",(function(){return o}))},"5d34":function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return b}));var o=r("a4ee"),a=(r("c120"),r("e92d"),r("cea0"),r("59b2")),i=r("448d"),s=r("d386"),n=(r("e041"),r("8eed"),r("f402"),r("6a0e"));let c=class extends n["a"]{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};Object(o["a"])([Object(a["b"])({type:Number})],c.prototype,"nodesPerPage",void 0),Object(o["a"])([Object(a["b"])({type:Number})],c.prototype,"rootIndex",void 0),Object(o["a"])([Object(a["b"])({type:String})],c.prototype,"lodSelectionMetricType",void 0),c=Object(o["a"])([Object(s["a"])("esri.layer.support.I3SNodePageDefinition")],c);let l=class extends n["a"]{constructor(){super(...arguments),this.factor=1}};Object(o["a"])([Object(a["b"])({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),Object(o["a"])([Object(a["b"])({type:Number})],l.prototype,"factor",void 0),l=Object(o["a"])([Object(s["a"])("esri.layer.support.I3SMaterialTexture")],l);let p=class extends n["a"]{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};Object(o["a"])([Object(a["b"])({type:[Number]})],p.prototype,"baseColorFactor",void 0),Object(o["a"])([Object(a["b"])({type:l})],p.prototype,"baseColorTexture",void 0),Object(o["a"])([Object(a["b"])({type:l})],p.prototype,"metallicRoughnessTexture",void 0),Object(o["a"])([Object(a["b"])({type:Number})],p.prototype,"metallicFactor",void 0),Object(o["a"])([Object(a["b"])({type:Number})],p.prototype,"roughnessFactor",void 0),p=Object(o["a"])([Object(s["a"])("esri.layer.support.I3SMaterialPBRMetallicRoughness")],p);let u=class extends n["a"]{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};Object(o["a"])([Object(i["a"])({opaque:"opaque",mask:"mask",blend:"blend"})],u.prototype,"alphaMode",void 0),Object(o["a"])([Object(a["b"])({type:Number})],u.prototype,"alphaCutoff",void 0),Object(o["a"])([Object(a["b"])({type:Boolean})],u.prototype,"doubleSided",void 0),Object(o["a"])([Object(i["a"])({none:"none",back:"back",front:"front"})],u.prototype,"cullFace",void 0),Object(o["a"])([Object(a["b"])({type:l})],u.prototype,"normalTexture",void 0),Object(o["a"])([Object(a["b"])({type:l})],u.prototype,"occlusionTexture",void 0),Object(o["a"])([Object(a["b"])({type:l})],u.prototype,"emissiveTexture",void 0),Object(o["a"])([Object(a["b"])({type:[Number]})],u.prototype,"emissiveFactor",void 0),Object(o["a"])([Object(a["b"])({type:p})],u.prototype,"pbrMetallicRoughness",void 0),u=Object(o["a"])([Object(s["a"])("esri.layer.support.I3SMaterialDefinition")],u);let d=class extends n["a"]{};Object(o["a"])([Object(a["b"])({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:""+t.index}}})],d.prototype,"name",void 0),Object(o["a"])([Object(i["a"])({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",basis:"basis"})],d.prototype,"format",void 0),d=Object(o["a"])([Object(s["a"])("esri.layer.support.I3STextureFormat")],d);let b=class extends n["a"]{constructor(){super(...arguments),this.atlas=!1}};Object(o["a"])([Object(a["b"])({type:[d]})],b.prototype,"formats",void 0),Object(o["a"])([Object(a["b"])({type:Boolean})],b.prototype,"atlas",void 0),b=Object(o["a"])([Object(s["a"])("esri.layer.support.I3STextureSetDefinition")],b);let y=class extends n["a"]{};Object(o["a"])([Object(i["a"])({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],y.prototype,"type",void 0),Object(o["a"])([Object(a["b"])({type:Number})],y.prototype,"component",void 0),y=Object(o["a"])([Object(s["a"])("esri.layer.support.I3SGeometryAttribute")],y);let h=class extends n["a"]{};Object(o["a"])([Object(i["a"])({draco:"draco"})],h.prototype,"encoding",void 0),Object(o["a"])([Object(a["b"])({type:[String]})],h.prototype,"attributes",void 0),h=Object(o["a"])([Object(s["a"])("esri.layer.support.I3SGeometryCompressedAttributes")],h);let f=class extends n["a"]{constructor(){super(...arguments),this.offset=0}};Object(o["a"])([Object(a["b"])({type:Number})],f.prototype,"offset",void 0),Object(o["a"])([Object(a["b"])({type:y})],f.prototype,"position",void 0),Object(o["a"])([Object(a["b"])({type:y})],f.prototype,"normal",void 0),Object(o["a"])([Object(a["b"])({type:y})],f.prototype,"uv0",void 0),Object(o["a"])([Object(a["b"])({type:y})],f.prototype,"color",void 0),Object(o["a"])([Object(a["b"])({type:y})],f.prototype,"uvRegion",void 0),Object(o["a"])([Object(a["b"])({type:y})],f.prototype,"featureId",void 0),Object(o["a"])([Object(a["b"])({type:y})],f.prototype,"faceRange",void 0),Object(o["a"])([Object(a["b"])({type:h})],f.prototype,"compressedAttributes",void 0),f=Object(o["a"])([Object(s["a"])("esri.layer.support.I3SGeometryBuffer")],f);let O=class extends n["a"]{};Object(o["a"])([Object(i["a"])({triangle:"triangle"})],O.prototype,"topology",void 0),Object(o["a"])([Object(a["b"])()],O.prototype,"geometryBuffers",void 0),O=Object(o["a"])([Object(s["a"])("esri.layer.support.I3SGeometryDefinition")],O)},"623b":function(e,t,r){"use strict";var o,a=r("a4ee"),i=(r("c120"),r("7ffa")),s=(r("e92d"),r("cea0"),r("59b2")),n=r("0028"),c=r("d386"),l=r("09db"),p=r("c6f7"),u=r("6a0e"),d=r("1219"),b=(r("e06a"),r("8188"));let y=o=class extends u["a"]{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,r,o){if(o.layer&&o.layer.spatialReference&&!o.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Object(b["b"])(e.spatialReference,o.layer.spatialReference))return void(o&&o.messages&&o.messages.push(new n["a"]("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:o.layer.spatialReference,context:o})));const a=new d["a"];Object(b["v"])(e,a,o.layer.spatialReference),t[r]=a.toJSON(o)}else t[r]=e.toJSON(o);delete t[r].spatialReference}clone(){return new o({geometry:Object(i["a"])(this.geometry),type:this.type})}};Object(a["a"])([Object(s["b"])({type:d["a"]}),Object(p["a"])()],y.prototype,"geometry",void 0),Object(a["a"])([Object(l["a"])(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),Object(a["a"])([Object(s["b"])({type:["clip","mask","replace"],nonNullable:!0}),Object(p["a"])()],y.prototype,"type",void 0),y=o=Object(a["a"])([Object(c["a"])("esri.layers.support.SceneModification")],y);var h=y;t["a"]=h},"6e36":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r("b2b2"),a=r("ce50"),i=r("2eab");async function s(e,t,r,s,n){let c=null;if(Object(o["k"])(r)){const t=e+"/nodepages/",a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await Object(i["default"])(a,{query:{f:"json"},responseType:"json",signal:n})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(u){Object(o["k"])(s)&&s.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,u),c=u}}if(!t)return null;const l=e+"/nodes/",p=l+(t&&t.split("/").pop());try{return{type:"node",rootNode:(await Object(i["default"])(p,{query:{f:"json"},responseType:"json",signal:n})).data,urlPrefix:l}}catch(u){throw new a["a"]("sceneservice:root-node-missing","Root node missing.",{pageError:c,nodeError:u,url:p})}}},"96ae":function(e,t,r){"use strict";r.d(t,"a",(function(){return U}));var o=r("a4ee"),a=(r("c120"),r("b2b2")),i=r("e92d"),s=(r("cea0"),r("59b2")),n=r("afcf"),c=r("d386"),l=r("09db"),p=r("ce50"),u=r("e041"),d=r("8eed"),b=(r("f402"),r("f4cc")),y=r("5996"),h=r("3af1"),f=r("2eab"),O=r("0224"),j=r("a7e1"),m=r("2698");function v(e){e&&e.writtenProperties&&e.writtenProperties.forEach(e=>{const t=e.target;e.newOrigin&&e.oldOrigin!==e.newOrigin&&Object(m["a"])(t)&&t.updateOrigin(e.propName,e.newOrigin)})}var g=r("54b4"),w=r("e64d"),S=r("792b"),I=r("e6a6");async function x(e,t,r){if(!t||!t.resources)return;const o=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(e=>e.resource.path)),i=new Set,s=[];a.forEach(t=>{o.delete(t),e.paths.push(t)});for(const l of t.resources.toUpdate)if(o.delete(l.resource.path),a.has(l.resource.path)||i.has(l.resource.path)){const{resource:t,content:o,finish:a,error:i}=l,n=Object(I["getSiblingOfSameTypeI"])(t,Object(d["a"])());e.paths.push(n.path),s.push(T({resource:n,content:o,finish:a,error:i},r))}else e.paths.push(l.resource.path),s.push(R(l,r)),i.add(l.resource.path);for(const l of t.resources.toAdd)s.push(T(l,r)),e.paths.push(l.resource.path);if(o.forEach(e=>{const r=t.portalItem.resourceFromPath(e);s.push(r.portalItem.removeResource(r).catch(()=>{}))}),0===s.length)return;const n=await Object(b["k"])(s);Object(b["w"])(r);const c=n.filter(e=>"error"in e).map(e=>e.error);if(c.length>0)throw new p["a"]("save:resources","Failed to save one or more resources",{errors:c})}async function T(e,t){const r=await Object(S["d"])(e.resource.portalItem.addResource(e.resource,e.content,t));if(!0!==r.ok)throw e.error&&e.error(r.error),r.error;e.finish&&e.finish(e.resource)}async function R(e,t){const r=await Object(S["d"])(e.resource.update(e.content,t));if(!0!==r.ok)throw e.error(r.error),r.error;e.finish(e.resource)}var N=r("22f4"),_=r("6e36");const P=i["a"].getLogger("esri.layers.mixins.SceneService"),U=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=Object(b["j"])(async(e,t,r)=>{switch(e){case 0:return this._save(t);case 1:return this._saveAs(r,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return y["a"].fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new y["a"](o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e)return h["a"].fromJSON(e,r);const o=t.store,a=this._readSpatialReference(t);return null==a||null==o||null==o.extent||!Array.isArray(o.extent)||o.extent.some(e=>e<F)?null:new h["a"]({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"",a={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(a.major=parseInt(i[0],10),a.minor=parseInt(i[1],10)),a}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return Object(g["i"])(this.url,t.name);let o=t.name;if(!o&&this.url){const e=Object(g["e"])(this.url);Object(a["k"])(e)&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),Object(g["a"])(o)}set url(e){const t=Object(g["h"])({layer:this,url:e,nonStandardUrlAllowed:!1,logger:P});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){Object(g["j"])(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url");if(!e)return null;const t=Object(u["J"])(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Object(_["a"])(this.parsedUrl.path,this.rootNode,e,P,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null==e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null==(t=e.rootPage)||null==(r=t.nodes)?void 0:r[o];if(null==a||null==a.obb||null==a.obb.center||null==a.obb.halfSize)throw new p["a"]("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<F||null==this.fullExtent||this.fullExtent.hasZ)return;const i=a.obb.halfSize,s=a.obb.center[2],n=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s-n,this.fullExtent.zmax=s+n}else if("node"===(null==e?void 0:e.type)){var o;const t=null==(o=e.rootNode)?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<F)return;const r=t[2],a=t[3];this.fullExtent.zmin=r-a,this.fullExtent.zmax=r+a}}async _fetchService(e){if(null==this.url)throw new p["a"]("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await Object(f["default"])(this.url,{query:{f:"json"},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await Object(f["default"])(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));const r=t.data;this.read(r,{origin:"service",url:this.parsedUrl}),this.validateLayer(r)}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t),1===r&&(e.typeKeywords=e.typeKeywords.filter(e=>"Hosted Service"!==e)))}async _saveAs(e,t){const r={...k,...t};let o=j["default"].from(e);o||(P.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new p["a"]("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),o.id&&(o=o.clone(),o.id=null);const a=o.portal||O["a"].getDefault();await this._ensureLoadBeforeSave(),o.type=A,o.portal=a;const i={origin:"portal-item",url:null,messages:[],portal:a,portalItem:o,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},s={layers:[this.write(null,i)]};return await Promise.all(i.resources.pendingOperations),await this._validateAgainstJSONSchema(s,i,r),o.url=this.url,o.title||(o.title=this.title),this._updateTypeKeywords(o,r,1),await a._signIn(),await a.user.addItem({item:o,folder:r&&r.folder,data:s}),await x(this.resourceReferences,i,null),this.portalItem=o,v(i),i.portalItem=o,o}async _save(e){const t={...k,...e};this.portalItem||(P.error("_save(): requires the .portalItem property to be set"),await Promise.reject(new p["a"]("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService"))),this.portalItem.type!==A&&(P.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+A),await Promise.reject(new p["a"]("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${A}"`))),await this._ensureLoadBeforeSave();const r={origin:"portal-item",url:this.portalItem.itemUrl&&Object(u["J"])(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||O["a"].getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},o={layers:[this.write(null,r)]};return await Promise.all(r.resources.pendingOperations),await this._validateAgainstJSONSchema(o,r,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,0),await this.portalItem.update({data:o}),await x(this.resourceReferences,r,null),v(r),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let a=t.messages.filter(e=>"error"===e.type).map(e=>new p["a"](e.name,e.message,e.details));if(o&&o.validationOptions.ignoreUnsupported&&(a=a.filter(e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)),o.validationOptions.enabled||M){const t=(await r.e("chunk-ea395404").then(r.bind(null,"a7eb"))).validate(e,o.portalItemLayerType);if(t.length>0){const e="Layer item did not validate:\n"+t.join("\n");if(P.error("_validateAgainstJSONSchema(): "+e),"throw"===o.validationOptions.failPolicy){const e=t.map(e=>new p["a"]("sceneservice:schema-validation",e)).concat(a);throw new p["a"]("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(a.length>0)throw new p["a"]("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:a})}};return Object(o["a"])([Object(s["b"])(N["c"])],t.prototype,"id",void 0),Object(o["a"])([Object(s["b"])({type:y["a"]})],t.prototype,"spatialReference",void 0),Object(o["a"])([Object(n["a"])("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),Object(o["a"])([Object(s["b"])({type:h["a"]})],t.prototype,"fullExtent",void 0),Object(o["a"])([Object(n["a"])("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),Object(o["a"])([Object(s["b"])({readOnly:!0,type:w["a"]})],t.prototype,"heightModelInfo",void 0),Object(o["a"])([Object(s["b"])({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),Object(o["a"])([Object(s["b"])({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),Object(o["a"])([Object(s["b"])({readOnly:!0})],t.prototype,"version",void 0),Object(o["a"])([Object(n["a"])("version",["store.version"])],t.prototype,"readVersion",null),Object(o["a"])([Object(s["b"])({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o["a"])([Object(s["b"])({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),Object(o["a"])([Object(s["b"])({type:String})],t.prototype,"title",void 0),Object(o["a"])([Object(n["a"])("portal-item","title")],t.prototype,"readTitlePortalItem",null),Object(o["a"])([Object(n["a"])("service","title",["name"])],t.prototype,"readTitleService",null),Object(o["a"])([Object(s["b"])({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),Object(o["a"])([Object(s["b"])(N["n"])],t.prototype,"url",null),Object(o["a"])([Object(l["a"])("url")],t.prototype,"writeUrl",null),Object(o["a"])([Object(s["b"])()],t.prototype,"parsedUrl",null),Object(o["a"])([Object(s["b"])({readOnly:!0})],t.prototype,"store",void 0),Object(o["a"])([Object(s["b"])({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=Object(o["a"])([Object(c["a"])("esri.layers.mixins.SceneService")],t),t},F=-1e38,M=!1,A="Scene Service",k={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}}},c6f7:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var o=r("b2b2"),a=r("7af8"),i=r("59b2"),s=r("2698"),n=r("e041"),c=r("8eed"),l=r("92ef"),p=r("f402"),u=r("fcf2");function d(e){const t=Object(o["k"])(e)&&e.origins?e.origins:[void 0];return(r,o)=>{const a=b(e,r,o);for(const e of t){const t=Object(i["c"])(r,e,o);for(const e in a)t[e]=a[e]}}}function b(e,t,r){if(Object(o["k"])(e)&&"resource"===e.type)return y(e,t,r);switch(Object(o["k"])(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=u["c"];return{read:e,write:t}}}}function y(e,t,r){const i=Object(a["b"])(t,r);return{type:String,read:(e,t,r)=>{const o=Object(u["d"])(e,t,r);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(t,a,c,p){if(!p||!p.resources)return"string"==typeof t?void(a[c]=Object(u["e"])(t,p)):void(a[c]=t.write({},p));const d=g(t),b=d?Object(u["e"])(d,{...p,verifyItemRelativeUrls:p&&p.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},1):null,y=i.type!==String&&(!Object(s["a"])(this)||p&&p.origin&&this.originIdOf(r)>Object(l["d"])(p.origin));p&&p.portalItem&&Object(o["k"])(b)&&!Object(n["s"])(b)?y?f(this,r,t,b,a,c,p,e):O(b,a,c,p):p&&p.portalItem&&(Object(o["j"])(b)||Object(o["k"])(Object(u["b"])(b))||Object(n["t"])(b)||y)?h(this,r,t,b,a,c,p,e):a[c]=b}}}}function h(e,t,r,a,i,s,l,u){const d=Object(c["a"])(),b=m(r,a,l),y=Object(n["y"])(Object(o["i"])(u,"prefix"),d),h=`${y}.${Object(p["a"])(b)}`,f=l.portalItem.resourceFromPath(h);Object(n["t"])(a)&&l.resources.pendingOperations.push(v(a).then(e=>{f.path=`${y}.${Object(p["a"])(e)}`,i[s]=f.itemRelativeUrl}).catch(()=>{})),j(e,t,f,b,l.resources.toAdd),i[s]=f.itemRelativeUrl}function f(e,t,r,o,a,i,s,c){const l=s.portalItem.resourceFromPath(o),u=m(r,o,s);Object(p["a"])(u)===Object(n["n"])(l.path)?(j(e,t,l,u,s.resources.toUpdate),a[i]=o):h(e,t,r,o,a,i,s,c)}function O(e,t,r,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(e)}),t[r]=e}function j(e,t,r,o,a){a.push({resource:r,content:o,finish:r=>{w(e,t,r)}})}function m(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}async function v(e){const t=(await Promise.resolve().then(r.bind(null,"2eab"))).default,{data:o}=await t(e,{responseType:"blob"});return o}function g(e){return Object(o["j"])(e)?null:"string"==typeof e?e:e.url}function w(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}},cafc:function(e,t,r){"use strict";r.r(t);var o,a=r("a4ee"),i=(r("c120"),r("b2b2")),s=(r("e92d"),r("cea0"),r("59b2")),n=r("afcf"),c=r("d386"),l=r("ce50"),p=r("fcf2"),u=r("c6f7"),d=r("f4cc"),b=r("af40"),y=r("a6a3"),h=r("e694"),f=r("3795"),O=r("22f4"),j=r("b911"),m=r("3d59"),v=r("0db5"),g=r("5a62"),w=r("5d34"),S=r("96ae"),I=r("e041"),x=(r("8eed"),r("f402"),r("6a0e")),T=r("2c4f"),R=r("2eab"),N=r("623b");let _=o=class extends(Object(x["b"])(T["a"].ofType(N["a"]))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map(t=>t.toJSON(e)).filter(e=>!!e.geometry)}clone(){return new o({url:this.url,items:this.items.map(e=>e.clone())})}_readModifications(e,t){for(const r of e)this.add(N["a"].fromJSON(r,t))}static fromJSON(e,t){const r=new o;return r._readModifications(e,t),r}static async fromUrl(e,t,r){const a={url:Object(I["J"])(e),origin:"service"},s=await Object(R["default"])(e,{responseType:"json",signal:Object(i["i"])(r,"signal")}),n=t.toJSON(),c=[];for(const o of s.data)c.push(N["a"].fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},a));return new o({url:e,items:c})}};Object(a["a"])([Object(s["b"])({type:String})],_.prototype,"url",void 0),_=o=Object(a["a"])([Object(c["a"])("esri.layers.support.SceneModifications")],_);var P=_,U=P;let F=class extends(Object(S["a"])(Object(m["a"])(Object(j["a"])(Object(v["a"])(Object(g["a"])(Object(h["a"])(y["a"]))))))){constructor(...e){super(...e),this.handles=new b["a"],this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add(Object(f["b"])(this,"modifications","after-changes",()=>this.modifications=this.modifications,null,null,!0))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:Object(p["a"])(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=Object(i["i"])(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){Object(d["v"])(r)}if(await this._fetchService(t),Object(i["k"])(this._modificationsSource)){const t=await U.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!Object(i["j"])(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,t){return this._debouncedSaveOperations(1,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(0,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new l["a"]("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l["a"]("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new l["a"]("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};Object(a["a"])([Object(s["b"])({type:String,readOnly:!0})],F.prototype,"geometryType",void 0),Object(a["a"])([Object(s["b"])({type:["show","hide"]})],F.prototype,"listMode",void 0),Object(a["a"])([Object(s["b"])({type:["IntegratedMeshLayer"]})],F.prototype,"operationalLayerType",void 0),Object(a["a"])([Object(s["b"])({json:{read:!1},readOnly:!0})],F.prototype,"type",void 0),Object(a["a"])([Object(s["b"])({type:w["c"],readOnly:!0})],F.prototype,"nodePages",void 0),Object(a["a"])([Object(s["b"])({type:[w["b"]],readOnly:!0})],F.prototype,"materialDefinitions",void 0),Object(a["a"])([Object(s["b"])({type:[w["d"]],readOnly:!0})],F.prototype,"textureSetDefinitions",void 0),Object(a["a"])([Object(s["b"])({type:[w["a"]],readOnly:!0})],F.prototype,"geometryDefinitions",void 0),Object(a["a"])([Object(s["b"])({readOnly:!0})],F.prototype,"serviceUpdateTimeStamp",void 0),Object(a["a"])([Object(s["b"])({type:U}),Object(u["a"])({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],F.prototype,"modifications",void 0),Object(a["a"])([Object(n["a"])(["web-scene","portal-item"],"modifications")],F.prototype,"readModifications",null),Object(a["a"])([Object(s["b"])(O["b"])],F.prototype,"elevationInfo",void 0),Object(a["a"])([Object(s["b"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],F.prototype,"path",void 0),F=Object(a["a"])([Object(c["a"])("esri.layers.IntegratedMeshLayer")],F);var M=F;t["default"]=M},e6a6:function(e,t,r){"use strict";r.r(t),r.d(t,"addOrUpdateResource",(function(){return c})),r.d(t,"contentToBlob",(function(){return y})),r.d(t,"fetchResources",(function(){return n})),r.d(t,"getSiblingOfSameType",(function(){return h})),r.d(t,"getSiblingOfSameTypeI",(function(){return f})),r.d(t,"removeAllResources",(function(){return p})),r.d(t,"removeResource",(function(){return l})),r.d(t,"splitPrefixFileNameAndExtension",(function(){return d}));var o=r("b2b2"),a=r("ce50"),i=r("e041"),s=r("2eab");async function n(e,t={},r){await e.load(r);const a=Object(i["y"])(e.itemUrl,"resources"),{start:s=1,num:n=10,sortOrder:c="asc",sortField:l="created"}=t,p={query:{start:s,num:n,sortOrder:c,sortField:l},signal:Object(o["i"])(r,"signal")},u=await e.portal._request(a,p);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map(({created:t,size:r,resource:o})=>({created:new Date(t),size:r,resource:e.resourceFromPath(o)}))}}async function c(e,t,r,s){if(!e.hasPath())throw new a["a"](`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");await e.portalItem.load(s);const n=Object(i["y"])(e.portalItem.userItemUrl,"add"===t?"addResources":"updateResources"),[c,l]=u(e.path),p=await y(r),d=new FormData;return c&&"."!==c&&d.append("resourcesPrefix",c),d.append("fileName",l),d.append("file",p,l),d.append("f","json"),Object(o["k"])(s)&&s.access&&d.append("access",s.access),await e.portalItem.portal._request(n,{method:"post",body:d,signal:Object(o["i"])(s,"signal")}),e}async function l(e,t,r){if(!t.hasPath())throw new a["a"]("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const s=Object(i["y"])(e.userItemUrl,"removeResources");await e.portal._request(s,{method:"post",query:{resource:t.path},signal:Object(o["i"])(r,"signal")}),t.portalItem=null}async function p(e,t){await e.load(t);const r=Object(i["y"])(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:Object(o["i"])(t,"signal")})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=b(e),[o,a]=u(t);return[o,a,r]}function b(e){const t=Object(i["n"])(e);return Object(o["j"])(t)?[e,""]:[e.slice(0,e.length-t.length-1),"."+t]}async function y(e){return e instanceof Blob?e:(await Object(s["default"])(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(i["y"])(r,t+o))}function f(e,t){if(!e.hasPath())return null;const[r,,o]=d(e.path);return e.portalItem.resourceFromPath(Object(i["y"])(r,t+o))}}}]);