(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71d0a93d"],{"15ec":function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t=n("e041"),l=n("0224");function r(e){return{origin:"portal-item",url:Object(t["J"])(e.itemUrl),portal:e.portal||l["a"].getDefault(),portalItem:e,readResourcePaths:[]}}},"3b92":function(e,a,n){"use strict";n.r(a),n.d(a,"load",(function(){return d}));var t=n("ce50"),l=n("2eab"),r=n("0224"),u=n("60ec"),c=n("15ec"),i=n("a0b4");async function d(e,a){const n=e.instance.portalItem;return n&&n.id?(await n.load(a),o(e),s(e,a)):Promise.resolve()}function o(e){const a=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(a.type))throw new t["a"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}async function s(e,a){const n=e.instance,t=n.portalItem,{url:l,title:r}=t,i=Object(c["a"])(t);if("group"===n.type)return n.read({title:r},i),y(n,e);l&&n.read({url:l},i);const d=await b(e,a);return d&&n.read(d,i),n.resourceReferences={portalItem:t,paths:i.readResourcePaths},n.read({title:r},i),Object(u["a"])(n,i)}function y(e,a){let n;const l=e.portalItem.type;switch(l){case"Feature Service":n=i["a"].FeatureLayer;break;case"Stream Service":n=i["a"].StreamLayer;break;case"Scene Service":n=i["a"].SceneLayer;break;case"Feature Collection":n=i["a"].FeatureLayer;break;default:throw new t["a"]("portal:unsupported-item-type-as-group",`The item type '${l}' is not supported as a 'GroupLayer'`)}let r;return n().then(e=>(r=e,b(a))).then(a=>k(a)>0?h(e,r,a):f(e,r))}function f(e,a){if(!e.portalItem.url)return Promise.resolve();const n={responseType:"json",query:{f:"json"}};return Object(l["default"])(e.portalItem.url,n).then(n=>{var t,l;const r=n.data;function u(e){return{id:e.id,name:e.name}}r&&h(e,a,{layers:null==(t=r.layers)?void 0:t.map(u),tables:null==(l=r.tables)?void 0:l.map(u)})})}function h(e,a,n){let t=n.layers||[];const l=n.tables||[];"Feature Collection"===e.portalItem.type&&(t.forEach(e=>{var a;"Table"===(null==e||null==(a=e.layerDefinition)?void 0:a.type)&&l.push(e)}),t=t.filter(e=>{var a;return"Table"!==(null==e||null==(a=e.layerDefinition)?void 0:a.type)})),t.reverse().forEach(t=>{const l=p(e,a,n,t);e.add(l)}),l.reverse().forEach(t=>{const l=p(e,a,n,t);e.tables.add(l)})}function p(e,a,n,t){const l=new a({portalItem:e.portalItem.clone(),layerId:t.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||r["a"].getDefault()};l.read(t,a);const u=n.showLegend;null!=u&&l.read({showLegend:u},a)}return l}function b(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const n=e.instance;return n.portalItem.fetchData("json",a).catch(()=>null).then(e=>{const a=e;let t;if(L(n)){let l=!0;return e&&k(a)>0&&(null==n.layerId&&(n.layerId=w(a)),t=m(a,n.layerId),t&&(1===k(a)&&(l=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),l&&"service-name"!==n.sublayerTitleMode&&(n.sublayerTitleMode="item-title-and-service-name"),t}return e})}function w(e){const a=e.layers;if(a&&a.length)return a[0].id;const n=e.tables;return n&&n.length?n[0].id:null}function m(e,a){const n=e.layers;if(n)for(let l=0;l<n.length;l++)if(n[l].id===a)return n[l];const t=e.tables;if(t)for(let l=0;l<t.length;l++)if(t[l].id===a)return t[l];return null}function k(e){var a,n,t,l;return(null!=(a=null==e||null==(n=e.layers)?void 0:n.length)?a:0)+(null!=(t=null==e||null==(l=e.tables)?void 0:l.length)?t:0)}function L(e){return"stream"!==e.type&&"layerId"in e}},a0b4:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));const t={BingMapsLayer:async()=>(await n.e("chunk-2d0a4f14").then(n.bind(null,"091f"))).default,BuildingSceneLayer:async()=>(await n.e("chunk-4af69bc1").then(n.bind(null,"4d64e"))).default,CSVLayer:async()=>(await n.e("chunk-056983d8").then(n.bind(null,"2a7d"))).default,ElevationLayer:async()=>(await n.e("chunk-546fd515").then(n.bind(null,"f20e"))).default,FeatureLayer:async()=>(await Promise.resolve().then(n.bind(null,"5bd5"))).default,GroupLayer:async()=>(await n.e("chunk-2d0c8892").then(n.bind(null,"54fc"))).default,GeoRSSLayer:async()=>(await n.e("chunk-2d0a33b6").then(n.bind(null,"00ff"))).default,ImageryLayer:async()=>(await Promise.all([n.e("chunk-506436f8"),n.e("chunk-d11d6fe0"),n.e("chunk-2d237932")]).then(n.bind(null,"fc65"))).default,ImageryTileLayer:async()=>(await Promise.all([n.e("chunk-506436f8"),n.e("chunk-d11d6fe0"),n.e("chunk-30099953")]).then(n.bind(null,"9917"))).default,IntegratedMeshLayer:async()=>(await n.e("chunk-7a316b47").then(n.bind(null,"cafc"))).default,KMLLayer:async()=>(await n.e("chunk-70b2ed33").then(n.bind(null,"f5fc"))).default,MapImageLayer:async()=>(await n.e("chunk-792b91aa").then(n.bind(null,"53f8"))).default,MapNotesLayer:async()=>(await n.e("chunk-3468aaba").then(n.bind(null,"5afa"))).default,OpenStreetMapLayer:async()=>(await n.e("chunk-88f92b30").then(n.bind(null,"8c58"))).default,PointCloudLayer:async()=>(await n.e("chunk-5084825c").then(n.bind(null,"44bb"))).default,RouteLayer:async()=>(await n.e("chunk-2d20f003").then(n.bind(null,"b285"))).default,SceneLayer:async()=>(await n.e("chunk-55a2b5c0").then(n.bind(null,"d321"))).default,StreamLayer:async()=>(await n.e("chunk-2d21a92d").then(n.bind(null,"bba8"))).default,TileLayer:async()=>(await n.e("chunk-479b5802").then(n.bind(null,"2650"))).default,UnknownLayer:async()=>(await n.e("chunk-2d209b4c").then(n.bind(null,"a9ca"))).default,UnsupportedLayer:async()=>(await n.e("chunk-2d0ac5dd").then(n.bind(null,"18dd"))).default,VectorTileLayer:async()=>(await Promise.all([n.e("chunk-342283ac"),n.e("chunk-1f78c444")]).then(n.bind(null,"173c"))).default,WebTileLayer:async()=>(await n.e("chunk-06ad9dad").then(n.bind(null,"9dc3"))).default,WMSLayer:async()=>(await n.e("chunk-d4d5c964").then(n.bind(null,"8760"))).default,WMTSLayer:async()=>(await n.e("chunk-6964ca64").then(n.bind(null,"b039"))).default}}}]);
//# sourceMappingURL=chunk-71d0a93d.d5a09e42.js.map