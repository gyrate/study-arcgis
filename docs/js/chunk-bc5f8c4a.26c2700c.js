(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc5f8c4a","chunk-63e4c91e"],{"24be":function(t,e,i){"use strict";i.r(e);var s=i("a4ee"),a=(i("c120"),i("7ffa")),r=i("b2b2"),c=(i("e92d"),i("cea0"),i("59b2")),h=i("d386"),o=(i("e041"),i("8eed"),i("f402"),i("ce6d")),n=i("af40"),l=i("3795"),p=i("2589"),b=i("412f"),d=i("cdc1"),u=i("3cde");class v{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-click"}}class g{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-double-click"}}class y{constructor(t,e,i,s,a,r,c,h,o,n){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=c,this.totalDx=h,this.totalDy=o,this.viewEvent=n,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class _{constructor(t,e,i,s,a,r,c,h,o,n){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=c,this.totalDx=h,this.totalDy=o,this.viewEvent=n,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class f{constructor(t,e,i,s,a,r,c,h,o,n){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=c,this.totalDx=h,this.totalDy=o,this.viewEvent=n,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class m{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-over"}}class G{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-out"}}class O{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-down"}}class w{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-up"}}let j=class extends o["a"].EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._dragEvent=null,this._handles=new n["a"],this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new n["a"],this._manipulators=[],this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.view=null}initialize(){this._setUpManipulators(),this._handles.add([Object(l["e"])(this,["graphics","graphics.length"],()=>{this._setUpManipulators()}),Object(l["k"])(this,"view.ready",()=>{this._viewHandles.add([this.view.on("immediate-click",t=>this._clickHandler(t),p["b"].TOOL),this.view.on("double-click",t=>this._doubleClickHandler(t),p["b"].TOOL),this.view.on("pointer-down",t=>this._pointerDownHandler(t),p["b"].TOOL),this.view.on("pointer-move",t=>this._pointerMoveHandler(t),p["b"].TOOL),this.view.on("pointer-up",t=>this._pointerUpHandler(t),p["b"].TOOL),this.view.on("drag",t=>this._dragHandler(t),p["b"].TOOL),this.view.on("key-down",t=>this._keyDownHandler(t),p["b"].TOOL)])})])}destroy(){this.reset(),this._manipulators.forEach(t=>t.destroy()),this._manipulators=null,this._viewHandles.removeAll(),this._handles.removeAll()}get state(){const t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}updateGeometry(t,e){const i=this.graphics[t];i&&i.set("geometry",e)}_clickHandler(t){const e=this._findTargetGraphic(Object(b["a"])(t));if(e){const i=new v(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}_doubleClickHandler(t){const e=this._findTargetGraphic(Object(b["a"])(t));if(e){const i=new g(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}_pointerDownHandler(t){const e=this._findTargetGraphic(Object(b["a"])(t));if(e){this._activeGraphic=e;const{x:i,y:s}=t,a=new O(e,this.graphics.indexOf(e),i,s,t);this.emit("graphic-pointer-down",a),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(a)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._activeGraphic),a=new w(this._activeGraphic,s,e,i,t);this.emit("graphic-pointer-up",a),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(a)}}_pointerMoveHandler(t){if(this._dragEvent)return;const e=this._findTargetGraphic(Object(b["a"])(t));if(e){const{x:i,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===e)return;const a=this.graphics.indexOf(this._hoverGraphic),r=new G(this.graphics[a],a,i,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}const a=this.graphics.indexOf(e),r=new m(e,a,i,s,t);return this._hoverGraphic=e,this.emit("graphic-pointer-over",r),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(r))}if(this._hoverGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._hoverGraphic),a=new G(this.graphics[s],s,e,i,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;t.stopPropagation();const{action:e,x:i,y:s}=t,r=this.graphics.indexOf(this._activeGraphic),c=this._activeGraphic.geometry,h=this._dragEvent?i-this._dragEvent.x:0,o=this._dragEvent?s-this._dragEvent.y:0,n=i-t.origin.x,l=s-t.origin.y;if(this._activeGraphic.geometry=Object(d["a"])(c,h,o,this.view),this.enableMoveAllGraphics&&this.graphics.forEach(t=>{t!==this._activeGraphic&&(t.geometry=Object(d["a"])(t.geometry,h,o,this.view))}),this._dragEvent=t,"start"===e){this._initialDragGeometry=Object(a["a"])(c);const e=new y(this._activeGraphic,this.graphics,r,i,s,h,o,n,l,t);this.emit("graphic-move-start",e),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(e),e.defaultPrevented&&this._activeGraphic.set("geometry",c)}else if("update"===e){const e=new _(this._activeGraphic,this.graphics,r,i,s,h,o,n,l,t);this.emit("graphic-move",e),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(e),e.defaultPrevented&&this._activeGraphic.set("geometry",c)}else{const e=new f(this._activeGraphic,this.graphics,r,i,s,h,o,n,l,t);this._dragEvent=null,this._activeGraphic=null,this.emit("graphic-move-stop",e),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(e),e.defaultPrevented&&this.graphics[r].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){let e=null,i=Number.MAX_VALUE;return this._manipulators.forEach(s=>{const a=s.intersectionDistance(t);Object(r["k"])(a)&&a<i&&(i=a,e=s.graphic)}),e}_setUpManipulators(){const{graphics:t,view:e}=this;this._manipulators.forEach(t=>t.destroy()),this._manipulators=null!=t&&t.length?t.map(t=>new u["a"]({graphic:t,view:e})):[]}};Object(s["a"])([Object(c["b"])()],j.prototype,"_activeGraphic",void 0),Object(s["a"])([Object(c["b"])({readOnly:!0})],j.prototype,"type",void 0),Object(s["a"])([Object(c["b"])()],j.prototype,"callbacks",void 0),Object(s["a"])([Object(c["b"])()],j.prototype,"enableMoveAllGraphics",void 0),Object(s["a"])([Object(c["b"])()],j.prototype,"graphics",void 0),Object(s["a"])([Object(c["b"])({readOnly:!0})],j.prototype,"state",null),Object(s["a"])([Object(c["b"])()],j.prototype,"view",void 0),j=Object(s["a"])([Object(h["a"])("esri.views.draw.support.GraphicMover")],j);var x=j;e["default"]=x},"3cde":function(t,e,i){"use strict";i.d(e,"a",(function(){return m}));var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=i("e92d"),c=(i("cea0"),i("59b2")),h=i("d386"),o=(i("e041"),i("8eed"),i("f402"),i("fc29")),n=i("ce6d"),l=i("a915"),p=i("0b2d"),b=i("e431"),d=i("8188"),u=i("fd14"),v=i("a6c1"),g=i("3349"),y=i("f408"),_=i("e94b");const f=r["a"].getLogger("esri.views.interactive.GraphicManipulator");let m=class extends o["a"]{constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new n["a"].EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(t){"mesh"!==Object(a["i"])(t.geometry,"type")?(this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()):f.error("Mesh geometries are not supported")}get elevationInfo(){const t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,e=Object(y["e"])(this.graphic),i=t?t.offset:0;return new u["a"]({mode:e,offset:i})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const e=this.graphic;if(!1===e.visible)return null;const i=e.geometry;if(Object(a["j"])(i))return null;const s=this._get("focusedSymbol"),r=Object(a["k"])(s)?s:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,i,r):this._intersectDistance3D(this.view,t,e)}attach(){this.attachSymbolChanged(),Object(a["k"])(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(a["k"])(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",t=>{Object(a["k"])(t)&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&Object(a["k"])(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))},!0)}detachSymbolChanged(){Object(a["k"])(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&Object(a["k"])(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,e,i,s){if(s=s||Object(v["h"])(i),Object(a["j"])(s))return null;const r=1;let c=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==s.type)return Object(_["b"])(e,i,t)?r:null;if(Object(a["j"])(c)||!c.originalPoint.equals(i)){const e=i,a=t.spatialReference;if(Object(d["b"])(e.spatialReference,a)){const t=Object(d["n"])(e,a);c={originalPoint:e.clone(),mapPoint:t,radiusPx:Object(l["h"])(s.size)},this._circleCollisionCache=c}}if(Object(a["k"])(c)){const i=Object(l["j"])(e,O),a=t.toScreen(c.mapPoint),h=c.radiusPx,o=a.x+Object(l["h"])(s.xoffset),n=a.y-Object(l["h"])(s.yoffset);return Object(g["j"])(i,[o,n])<h*h?r:null}return null}_intersectDistance3D(t,e,i){const s=t.toMap(e,{include:[i]});return s&&Object(d["t"])(s,G,t.renderSpatialReference)?Object(b["p"])(G,t.state.camera.eye):null}};Object(s["a"])([Object(c["b"])({constructOnly:!0,nonNullable:!0})],m.prototype,"graphic",null),Object(s["a"])([Object(c["b"])({readOnly:!0})],m.prototype,"elevationInfo",null),Object(s["a"])([Object(c["b"])({constructOnly:!0,nonNullable:!0})],m.prototype,"view",void 0),Object(s["a"])([Object(c["b"])({value:null})],m.prototype,"focusedSymbol",null),Object(s["a"])([Object(c["b"])({constructOnly:!0})],m.prototype,"layer",void 0),Object(s["a"])([Object(c["b"])()],m.prototype,"interactive",void 0),Object(s["a"])([Object(c["b"])()],m.prototype,"selectable",void 0),Object(s["a"])([Object(c["b"])()],m.prototype,"grabbable",void 0),Object(s["a"])([Object(c["b"])({value:!1})],m.prototype,"grabbing",null),Object(s["a"])([Object(c["b"])()],m.prototype,"dragging",void 0),Object(s["a"])([Object(c["b"])()],m.prototype,"hovering",null),Object(s["a"])([Object(c["b"])({value:!1})],m.prototype,"selected",null),Object(s["a"])([Object(c["b"])()],m.prototype,"cursor",void 0),m=Object(s["a"])([Object(h["a"])("esri.views.interactive.GraphicManipulator")],m);const G=Object(p["e"])(),O=Object(l["g"])()},"4c3c":function(t,e,i){"use strict";i.r(e);var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=(i("e92d"),i("cea0"),i("59b2")),c=i("d386"),h=(i("e041"),i("8eed"),i("f402"),i("4ae5")),o=i("32ed"),n=i("28b1"),l=i("1219"),p=i("521c"),b=(i("e06a"),i("ce6d")),d=i("db52"),u=i("0d76"),v=i("4dc9"),g=i("8d60"),y=i("af40"),_=i("3795"),f=i("9180"),m=i("7779"),G=i("cdc1"),O=i("b65e"),w=i("57dc");function j(t){let e=0,i=0;const s=t.length;let a,r=t[i];for(i=0;i<s-1;i++)a=t[i+1],e+=(a[0]-r[0])*(a[1]+r[1]),r=a;return e>=0}function x(t,e,i,s){const a=[];for(const r of t){const t=r.slice(0);a.push(t);const c=e*(r[0]-s.x)-i*(r[1]-s.y)+s.x,h=i*(r[0]-s.x)+e*(r[1]-s.y)+s.y;t[0]=c,t[1]=h}return a}function S(t,e,i){const s=t.spatialReference,a=e*Math.PI/180,r=Math.cos(a),c=Math.sin(a);var o,n;if("xmin"in t&&(i=null!=(o=i)?o:t.center,t=new l["a"]({spatialReference:s,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){var b;i=null!=(b=i)?b:t.extent.center;const e=[];for(const s of t.paths)e.push(x(s,r,c,i));return new p["a"]({spatialReference:s,paths:e})}if("rings"in t){var d;i=null!=(d=i)?d:t.extent.center;const e=[];for(const s of t.rings){const t=j(s),a=x(s,r,c,i);j(a)!==t&&a.reverse(),e.push(a)}return new l["a"]({spatialReference:s,rings:e})}if("x"in t){var u;i=null!=(u=i)?u:t;const e=new h["a"]({x:r*(t.x-i.x)-c*(t.y-i.y)+i.x,y:c*(t.x-i.x)+r*(t.y-i.y)+i.y,spatialReference:s});return null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}return"points"in t?(i=null!=(n=i)?n:t.extent.center,new w["a"]({points:x(t.points,r,c,i),spatialReference:s})):null}var k=S,M=i("24be");class C{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-start"}}class R{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move"}}class E{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.dx=i,this.dy=s,this.type="move-stop"}}class I{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-start"}}class P{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate"}}class D{constructor(t,e,i){this.graphics=t,this.mover=e,this.angle=i,this.type="rotate-stop"}}class L{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-start"}}class z{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale"}}class H{constructor(t,e,i,s){this.graphics=t,this.mover=e,this.xScale=i,this.yScale=s,this.type="scale-stop"}}const T=m["b"].transformGraphics,A={centerIndicator:new v["a"]({style:"cross",size:T.center.size,color:T.center.color}),fill:{default:new u["a"]({color:T.fill.color,outline:{color:T.fill.outlineColor,join:"round",width:1}}),active:new u["a"]({color:T.fill.stagedColor,outline:{color:T.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new v["a"]({style:"square",size:T.vertex.size,color:T.vertex.color,outline:{color:T.vertex.outlineColor,width:1}}),hover:new v["a"]({style:"square",size:T.vertex.hoverSize,color:T.vertex.hoverColor,outline:{color:T.vertex.hoverOutlineColor,width:1}})},rotator:{default:new v["a"]({style:"circle",size:T.vertex.size,color:T.vertex.color,outline:{color:T.vertex.outlineColor,width:1}}),hover:new v["a"]({style:"circle",size:T.vertex.hoverSize,color:T.vertex.hoverColor,outline:{color:T.vertex.hoverOutlineColor,width:1}})},rotatorLine:new d["a"]({color:T.line.color,width:1})};let B=class extends b["a"].EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._handles=new y["a"],this._mover=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.centerGraphic=null,this.backgroundGraphic=null,this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.handleGraphics=[],this.layer=null,this.preserveAspectRatio=!1,this.rotateGraphic=null,this.showCenterGraphic=!0,this.view=null,this._getBounds=(()=>{const t=Object(f["l"])();return(e,i)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const s of i){if(!s)continue;let i,a,r,c;if("point"===s.type)i=r=s.x,a=c=s.y;else if("multipoint"===s.type){const e=Object(o["b"])(s);[i,a,r,c]=Object(n["d"])(t,[e])}else if("extent"===s.type)[i,a,r,c]=[s.xmin,s.ymin,s.xmax,s.ymax];else{const e=Object(o["b"])(s);[i,a,r,c]=Object(n["d"])(t,e)}e[0]=Math.min(i,e[0]),e[1]=Math.min(a,e[1]),e[2]=Math.max(r,e[2]),e[3]=Math.max(c,e[3])}return e}})()}initialize(){this._setup(),this._handles.add([Object(_["k"])(this,"view.ready",()=>{const{layer:t,view:e}=this;Object(O["a"])(e,t)}),Object(_["d"])(this,"preserveAspectRatio",()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics())}),Object(_["d"])(this,"view.scale",()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),Object(_["d"])(this,"graphics",()=>this.refresh()),Object(_["d"])(this,"layer",(t,e)=>{e&&this._resetGraphics(e),this.refresh()})])}destroy(){this._reset(),this._handles&&(this._handles.removeAll(),this._handles=null)}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{centerIndicator:e=A.centerIndicator,fill:i=A.fill,handles:s=A.handles,rotator:a=A.rotator,rotatorLine:r=A.rotatorLine}=t||{};this._set("symbols",{centerIndicator:e,fill:i,handles:s,rotator:a,rotatorLine:r})}isUIGraphic(t){let e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,a=Object(G["a"])(s,t,e,this.view);i.geometry=a}this.refresh(),this._emitMoveStopEvent(t,e,null)}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,a=Object(G["e"])(s,t,e);i.geometry=a}this.refresh(),this._emitScaleStopEvent(t,e,null)}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const t=this.handleGraphics[1].geometry.x,i=this.handleGraphics[3].geometry.y;e=new h["a"](t,i,this.view.spatialReference)}for(const i of this.graphics){const s=i.geometry,a=k(s,t,e);i.geometry=a}this.refresh(),this._emitRotateStopEvent(t,null)}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){"active"===this.state&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){const e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(const i of this.handleGraphics)i.destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}_setupMover(){let t=[].concat(this.handleGraphics);this.enableMovement&&(t=t.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&t.push(this.rotateGraphic),this.showCenterGraphic&&t.push(this.centerGraphic),this._mover=new M["default"]({enableMoveAllGraphics:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:t=>this._onGraphicClickCallback(t),onGraphicMoveStart:t=>this._onGraphicMoveStartCallback(t),onGraphicMove:t=>this._onGraphicMoveCallback(t),onGraphicMoveStop:t=>this._onGraphicMoveStopCallback(t),onGraphicPointerOver:t=>this._onGraphicPointerOverCallback(t),onGraphicPointerOut:t=>this._onGraphicPointerOutCallback(t)}})}_getStartInfo(t){const[e,i,s,a]=this._getBoxBounds(Object(f["l"])()),r=Math.abs(s-e),c=Math.abs(a-i),h=(s+e)/2,o=(a+i)/2,{x:n,y:l}=t.geometry;return{width:r,height:c,centerX:h,centerY:o,startX:n,startY:l,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const e=t.geometry,[i,s,a,r]=this._getBounds(Object(f["l"])(),[e]);return{width:Math.abs(a-i),height:Math.abs(r-s),centerX:(a+i)/2,centerY:(r+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,backgroundGraphic:a,handleGraphics:r,rotateGraphic:c,symbols:h}=this,o=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),a.symbol=h.fill.active,this._startInfo=this._getStartInfo(o),o===c?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,o)):r.includes(o)?(this._activeHandleGraphic=o,this._emitScaleStartEvent(i,s,o)):this._emitMoveStartEvent(t.dx,t.dy,o)}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else{const i=t.dx,s=t.dy;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._emitMoveEvent(i,s,e)}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:a,_xScale:r,_yScale:c,backgroundGraphic:h,handleGraphics:o,rotateGraphic:n,symbols:l}=this;this._updateGraphics(),this._showGraphicsAfterUpdate(),h.symbol=l.fill.default,e===n?(this.view.cursor="pointer",this._emitRotateStopEvent(i,e)):o.includes(e)?this._emitScaleStopEvent(r,c,e):this._emitMoveStopEvent(s,a,e),this._resetGraphicStateVars()}_onGraphicPointerOverCallback(t){const{backgroundGraphic:e,handleGraphics:i,graphics:s,rotateGraphic:a,symbols:r,view:c}=this,h=t.graphic;if(h===a)return a.symbol=r.rotator.hover,void(c.cursor="pointer");if(s.includes(h)||h===e)return void(c.cursor="move");if(!i.includes(h))return void(c.cursor="pointer");t.graphic.symbol=r.handles.hover;const o=c.rotation;let n,l=t.index;switch(l<8&&(o>=0&&o<45?l%=8:l=o>=45&&o<90?(l+1)%8:o>=90&&o<135?(l+2)%8:o>=135&&o<180?(l+3)%8:o>=180&&o<225?(l+4)%8:o>=225&&o<270?(l+5)%8:o>=270&&o<315?(l+6)%8:(l+7)%8),l){case 0:n="nwse-resize";break;case 1:n="ns-resize";break;case 2:n="nesw-resize";break;case 3:n="ew-resize";break;case 4:n="nwse-resize";break;case 5:n="ns-resize";break;case 6:n="nesw-resize";break;case 7:n="ew-resize";break;default:n="pointer"}c.cursor=n}_onGraphicPointerOutCallback(t){const{handleGraphics:e,rotateGraphic:i,symbols:s,view:a}=this;t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),a.cursor="default"}_scaleGraphic(t){const{_startInfo:e,handleGraphics:i,preserveAspectRatio:s,view:a}=this,{centerX:r,centerY:c,startX:o,startY:n}=e,{resolution:l,transform:p}=a.state,b=i.indexOf(t);1!==b&&5!==b||this._updateX(t,r),3!==b&&7!==b||this._updateY(t,c);const{x:d,y:u}=t.geometry,v=p[0]*d+p[2]*u+p[4],g=p[1]*d+p[3]*u+p[5],y=e.graphicInfos.map(t=>t.geometry);if(s){const t=p[0]*r+p[2]*c+p[4],e=p[1]*r+p[3]*c+p[5],i=p[0]*o+p[2]*n+p[4],s=p[1]*o+p[3]*n+p[5];this._xScale=this._yScale=Object(G["c"])(t,e,i,s,v,g);for(const a of y){const t=y.indexOf(a);this.graphics[t].geometry=Object(G["e"])(a,this._xScale,this._yScale,[r,c])}this._updateBackgroundGraphic()}else{const{width:t,height:i}=e;let s=d-o,p=n-u;if(1===b||5===b?s=0:3!==b&&7!==b||(p=0),0===s&&0===p)return;const v=t+(o>r?s:-1*s),g=i+(n<c?p:-1*p),_=r+s/2,f=c+p/2;this._xScale=v/t||1,this._yScale=g/i||1,1===b||5===b?this._xScale=1:3!==b&&7!==b||(this._yScale=1);const m=(_-r)/l,O=(f-c)/l,w=Object(G["e"])(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=Object(G["a"])(w,m,O,a,!0);const{centerX:j,centerY:x}=this._getGraphicInfo(this.backgroundGraphic),S=(j-r)/l,k=-1*(x-c)/l;for(const e of y){const t=y.indexOf(e),i=Object(G["e"])(e,this._xScale,this._yScale,[r,c]);this.graphics[t].geometry=Object(G["a"])(i,S,k,a,!0)}this.centerGraphic.geometry=new h["a"](j,x,a.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s,startY:a,box:r,rotate:c}=this._startInfo,{x:o,y:n}=t.geometry,l=new h["a"](e,i,this.view.spatialReference);this._angleOfRotation=Object(G["b"])(e,i,s,a,o,n);const p=this._startInfo.graphicInfos.map(t=>t.geometry);for(const h of p){const t=p.indexOf(h),e=k(h,this._angleOfRotation,l);this.graphics[t].geometry=e}this.backgroundGraphic.geometry=k(r,this._angleOfRotation,l),this.rotateGraphic.geometry=k(c,this._angleOfRotation,l)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(G["a"])(s,e,i,this.view);for(const a of this.graphics)a!==t&&(a.geometry=Object(G["a"])(a.geometry,e,i,this.view))}else if(t===this.centerGraphic){const t=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=Object(G["a"])(t,e,i,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic)for(const s of this.graphics)s.geometry=Object(G["a"])(s.geometry,e,i,this.view)}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._set("centerGraphic",new g["a"](null,e.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new g["a"](null,e.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new g["a"](null,e.rotatorLine,t),this._set("rotateGraphic",new g["a"](null,e.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(let i=0;i<8;i++)this.handleGraphics.push(new g["a"](null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach(t=>t.visible=!1)}_showGraphicsAfterUpdate(){this.enableRotation&&(this._rotateLineGraphic.visible=!0,this.rotateGraphic.visible=!0),this.showCenterGraphic&&(this.centerGraphic.visible=!0),this.enableScaling&&this.handleGraphics.forEach(t=>t.visible=!0)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this.handleGraphics.forEach((e,i)=>{const[s,a]=t[i];this._updateXY(e,s,a)})}_updateBackgroundGraphic(){const t=this._getCoordinates();this.backgroundGraphic.geometry=new l["a"]({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds(Object(f["l"])()),a=(i+t)/2,r=(s+e)/2;this.centerGraphic.geometry=new h["a"](a,r,this.view.spatialReference)}_updateRotateGraphic(){if(!this.handleGraphics.length)return;const{x:t,y:e}=this.handleGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new h["a"](t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this.handleGraphics.length||!this.rotateGraphic||!this.rotateGraphic.geometry)return;const t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new p["a"]({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new h["a"](e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new h["a"](e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new h["a"](i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>t&&Object(a["k"])(t.geometry)&&"extent"===t.geometry.type)}_getBoxBounds(t){const e=this.graphics.map(t=>t.geometry);return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,a]=this._getBoxBounds(Object(f["l"])());if(t){const t=(e+s)/2,r=(a+i)/2;return[[e,a],[t,a],[s,a],[s,r],[s,i],[t,i],[e,i],[e,r]]}return[[e,a],[s,a],[s,i],[e,i]]}_emitMoveStartEvent(t,e,i){const s=new C(this.graphics,i,t,e);this.emit("move-start",s),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(s)}_emitMoveEvent(t,e,i){const s=new R(this.graphics,i,t,e);this.emit("move",s),this.callbacks.onMove&&this.callbacks.onMove(s)}_emitMoveStopEvent(t,e,i){const s=new E(this.graphics,i,t,e);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitRotateStartEvent(t,e){const i=new I(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)}_emitRotateEvent(t,e){const i=new P(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)}_emitRotateStopEvent(t,e){const i=new D(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)}_emitScaleStartEvent(t,e,i){const s=new L(this.graphics,i,t,e);this.emit("scale-start",s),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(s)}_emitScaleEvent(t,e,i){const s=new z(this.graphics,i,t,e);this.emit("scale",s),this.callbacks.onScale&&this.callbacks.onScale(s)}_emitScaleStopEvent(t,e,i){const s=new H(this.graphics,i,t,e);this.emit("scale-stop",s),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(s)}};Object(s["a"])([Object(r["b"])()],B.prototype,"_rotateLineGraphic",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],B.prototype,"type",void 0),Object(s["a"])([Object(r["b"])()],B.prototype,"callbacks",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],B.prototype,"centerGraphic",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],B.prototype,"backgroundGraphic",void 0),Object(s["a"])([Object(r["b"])()],B.prototype,"enableMovement",void 0),Object(s["a"])([Object(r["b"])()],B.prototype,"enableRotation",void 0),Object(s["a"])([Object(r["b"])()],B.prototype,"enableScaling",void 0),Object(s["a"])([Object(r["b"])()],B.prototype,"graphics",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],B.prototype,"handleGraphics",void 0),Object(s["a"])([Object(r["b"])()],B.prototype,"layer",void 0),Object(s["a"])([Object(r["b"])()],B.prototype,"preserveAspectRatio",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],B.prototype,"rotateGraphic",void 0),Object(s["a"])([Object(r["b"])()],B.prototype,"showCenterGraphic",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],B.prototype,"state",null),Object(s["a"])([Object(r["b"])({value:A})],B.prototype,"symbols",null),Object(s["a"])([Object(r["b"])()],B.prototype,"view",void 0),B=Object(s["a"])([Object(c["a"])("esri.views.draw.support.Box")],B);var N=B;e["default"]=N},"536f":function(t,e,i){"use strict";function s(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function a(t){let e=0,i=0;for(let s=0;s<t.length;s++){const a=t[s].size;"number"==typeof a&&(e+=a,i++)}return e/i}function r(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?a(t.stops):e}function c(t,e){if(!e)return t;const i=e.filter(t=>"size"===t.type).map(e=>{const{maxSize:i,minSize:s}=e;return(r(i,t)+r(s,t))/2});let s=0;const a=i.length;if(0===a)return t;for(let r=0;r<a;r++)s+=i[r];const c=Math.floor(s/a);return Math.max(c,t)}function h(t){const e=t&&t.renderer,i="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!e)return i;const a="visualVariables"in e?c(i,e.visualVariables):i;if("simple"===e.type)return s(a,e.symbol);if("unique-value"===e.type){let t=a;return e.uniqueValueInfos.forEach(e=>{t=s(t,e.symbol)}),t}if("class-breaks"===e.type){let t=a;return e.classBreakInfos.forEach(e=>{t=s(t,e.symbol)}),t}return e.type,a}i.d(e,"a",(function(){return h}))},e94b:function(t,e,i){"use strict";i.d(e,"a",(function(){return h})),i.d(e,"b",(function(){return o}));var s=i("b2b2"),a=i("3af1"),r=(i("e06a"),i("8048")),c=i("536f");function h(t,e,i,c=new a["a"]){let h;if("2d"===i.type)h=e*i.resolution;else if("3d"===i.type){const a=i.overlayPixelSizeInMapUnits(t),c=i.basemapSpatialReference;h=Object(s["k"])(c)&&!c.equals(i.spatialReference)?Object(r["e"])(c)/Object(r["e"])(i.spatialReference):e*a}const o=t.x-h,n=t.y-h,l=t.x+h,p=t.y+h,{spatialReference:b}=i;return c.xmin=Math.min(o,l),c.ymin=Math.min(n,p),c.xmax=Math.max(o,l),c.ymax=Math.max(n,p),c.spatialReference=b,c}function o(t,e,i){const a=i.toMap(t);return!Object(s["j"])(a)&&h(a,Object(c["a"])(),i,n).intersects(e)}const n=new a["a"]}}]);