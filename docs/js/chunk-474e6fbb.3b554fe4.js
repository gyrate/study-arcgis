(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-474e6fbb"],{"2dca":function(e,t,n){"use strict";n.r(t),n.d(t,"FeatureCollectionSnappingSource",(function(){return u}));var r=n("a4ee"),a=(n("c120"),n("b2b2")),o=(n("e92d"),n("cea0"),n("59b2")),c=n("d386"),i=(n("e041"),n("8eed"),n("f402"),n("fc29")),s=n("4ae5"),d=n("59fd");let u=class extends i["a"]{constructor(e){super(e)}get availability(){return 1}refresh(){}async fetchCandidates(e,t){const n=this.layerSource.layer.source;if(!n.querySnapping)return{candidates:[]};const{candidates:r}=await n.querySnapping({distance:e.distance,point:e.coordinateHelper.toPoint(e.point,new s["a"]).toJSON(),types:e.types,query:Object(a["k"])(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:t});return{candidates:r.map(t=>Object(d["a"])(t,e.coordinateHelper))}}};Object(r["a"])([Object(o["b"])({constructOnly:!0})],u.prototype,"layerSource",void 0),Object(r["a"])([Object(o["b"])({readOnly:!0})],u.prototype,"availability",null),u=Object(r["a"])([Object(c["a"])("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],u)},"59fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("e6b5"),a=n("92af"),o=n("43e0");class c extends a["a"]{constructor(e){super({...e,constraint:new o["b"](e.coordinateHelper,e.edgeStart,e.edgeEnd)})}get hints(){return[new r["a"](1,this.constraint.start,this.constraint.end)]}}var i=n("b63c");class s extends a["a"]{constructor(e){super({...e,constraint:new o["d"](e.coordinateHelper,e.targetPoint)})}get hints(){return[new i["a"](this.targetPoint)]}}function d(e,t){switch(e.type){case"edge":return new c({coordinateHelper:t,edgeStart:t.fromPoint(e.start),edgeEnd:t.fromPoint(e.end),targetPoint:t.fromPoint(e.target),objectId:e.objectId});case"vertex":return new s({coordinateHelper:t,targetPoint:t.fromPoint(e.target),objectId:e.objectId})}}}}]);
//# sourceMappingURL=chunk-474e6fbb.3b554fe4.js.map