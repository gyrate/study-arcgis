(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63e4c91e"],{"24be":function(t,e,i){"use strict";i.r(e);var s=i("a4ee"),a=(i("c120"),i("7ffa")),r=i("b2b2"),c=(i("e92d"),i("cea0"),i("59b2")),h=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("ce6d")),o=i("af40"),l=i("3795"),p=i("2589"),b=i("412f"),d=i("cdc1"),u=i("3cde");class g{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-click"}}class v{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-double-click"}}class y{constructor(t,e,i,s,a,r,c,h,n,o){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=c,this.totalDx=h,this.totalDy=n,this.viewEvent=o,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class f{constructor(t,e,i,s,a,r,c,h,n,o){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=c,this.totalDx=h,this.totalDy=n,this.viewEvent=o,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class _{constructor(t,e,i,s,a,r,c,h,n,o){this.graphic=t,this.allGraphics=e,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=c,this.totalDx=h,this.totalDy=n,this.viewEvent=o,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class m{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-over"}}class O{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-out"}}class j{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-down"}}class G{constructor(t,e,i,s,a){this.graphic=t,this.index=e,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-up"}}let w=class extends n["a"].EventedAccessor{constructor(t){super(t),this._activeGraphic=null,this._dragEvent=null,this._handles=new o["a"],this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new o["a"],this._manipulators=[],this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.view=null}initialize(){this._setUpManipulators(),this._handles.add([Object(l["e"])(this,["graphics","graphics.length"],()=>{this._setUpManipulators()}),Object(l["k"])(this,"view.ready",()=>{this._viewHandles.add([this.view.on("immediate-click",t=>this._clickHandler(t),p["b"].TOOL),this.view.on("double-click",t=>this._doubleClickHandler(t),p["b"].TOOL),this.view.on("pointer-down",t=>this._pointerDownHandler(t),p["b"].TOOL),this.view.on("pointer-move",t=>this._pointerMoveHandler(t),p["b"].TOOL),this.view.on("pointer-up",t=>this._pointerUpHandler(t),p["b"].TOOL),this.view.on("drag",t=>this._dragHandler(t),p["b"].TOOL),this.view.on("key-down",t=>this._keyDownHandler(t),p["b"].TOOL)])})])}destroy(){this.reset(),this._manipulators.forEach(t=>t.destroy()),this._manipulators=null,this._viewHandles.removeAll(),this._handles.removeAll()}get state(){const t=!!this.get("view.ready"),e=!!this.get("graphics.length"),i=this._activeGraphic;return t&&e?i?"moving":"active":t?"ready":"disabled"}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}updateGeometry(t,e){const i=this.graphics[t];i&&i.set("geometry",e)}_clickHandler(t){const e=this._findTargetGraphic(Object(b["a"])(t));if(e){const i=new g(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}_doubleClickHandler(t){const e=this._findTargetGraphic(Object(b["a"])(t));if(e){const i=new v(e,this.graphics.indexOf(e),t.x,t.y,t);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}_pointerDownHandler(t){const e=this._findTargetGraphic(Object(b["a"])(t));if(e){this._activeGraphic=e;const{x:i,y:s}=t,a=new j(e,this.graphics.indexOf(e),i,s,t);this.emit("graphic-pointer-down",a),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(a)}else this._activeGraphic=null}_pointerUpHandler(t){if(this._activeGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._activeGraphic),a=new G(this._activeGraphic,s,e,i,t);this.emit("graphic-pointer-up",a),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(a)}}_pointerMoveHandler(t){if(this._dragEvent)return;const e=this._findTargetGraphic(Object(b["a"])(t));if(e){const{x:i,y:s}=t;if(this._hoverGraphic){if(this._hoverGraphic===e)return;const a=this.graphics.indexOf(this._hoverGraphic),r=new O(this.graphics[a],a,i,s,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}const a=this.graphics.indexOf(e),r=new m(e,a,i,s,t);return this._hoverGraphic=e,this.emit("graphic-pointer-over",r),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(r))}if(this._hoverGraphic){const{x:e,y:i}=t,s=this.graphics.indexOf(this._hoverGraphic),a=new O(this.graphics[s],s,e,i,t);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}}_dragHandler(t){if("start"!==t.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;t.stopPropagation();const{action:e,x:i,y:s}=t,r=this.graphics.indexOf(this._activeGraphic),c=this._activeGraphic.geometry,h=this._dragEvent?i-this._dragEvent.x:0,n=this._dragEvent?s-this._dragEvent.y:0,o=i-t.origin.x,l=s-t.origin.y;if(this._activeGraphic.geometry=Object(d["a"])(c,h,n,this.view),this.enableMoveAllGraphics&&this.graphics.forEach(t=>{t!==this._activeGraphic&&(t.geometry=Object(d["a"])(t.geometry,h,n,this.view))}),this._dragEvent=t,"start"===e){this._initialDragGeometry=Object(a["a"])(c);const e=new y(this._activeGraphic,this.graphics,r,i,s,h,n,o,l,t);this.emit("graphic-move-start",e),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(e),e.defaultPrevented&&this._activeGraphic.set("geometry",c)}else if("update"===e){const e=new f(this._activeGraphic,this.graphics,r,i,s,h,n,o,l,t);this.emit("graphic-move",e),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(e),e.defaultPrevented&&this._activeGraphic.set("geometry",c)}else{const e=new _(this._activeGraphic,this.graphics,r,i,s,h,n,o,l,t);this._dragEvent=null,this._activeGraphic=null,this.emit("graphic-move-stop",e),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(e),e.defaultPrevented&&this.graphics[r].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null}}_keyDownHandler(t){"a"!==t.key&&"d"!==t.key&&"n"!==t.key||"moving"!==this.state||t.stopPropagation()}_findTargetGraphic(t){let e=null,i=Number.MAX_VALUE;return this._manipulators.forEach(s=>{const a=s.intersectionDistance(t);Object(r["k"])(a)&&a<i&&(i=a,e=s.graphic)}),e}_setUpManipulators(){const{graphics:t,view:e}=this;this._manipulators.forEach(t=>t.destroy()),this._manipulators=null!=t&&t.length?t.map(t=>new u["a"]({graphic:t,view:e})):[]}};Object(s["a"])([Object(c["b"])()],w.prototype,"_activeGraphic",void 0),Object(s["a"])([Object(c["b"])({readOnly:!0})],w.prototype,"type",void 0),Object(s["a"])([Object(c["b"])()],w.prototype,"callbacks",void 0),Object(s["a"])([Object(c["b"])()],w.prototype,"enableMoveAllGraphics",void 0),Object(s["a"])([Object(c["b"])()],w.prototype,"graphics",void 0),Object(s["a"])([Object(c["b"])({readOnly:!0})],w.prototype,"state",null),Object(s["a"])([Object(c["b"])()],w.prototype,"view",void 0),w=Object(s["a"])([Object(h["a"])("esri.views.draw.support.GraphicMover")],w);var x=w;e["default"]=x},"3cde":function(t,e,i){"use strict";i.d(e,"a",(function(){return m}));var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=i("e92d"),c=(i("cea0"),i("59b2")),h=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("fc29")),o=i("ce6d"),l=i("a915"),p=i("0b2d"),b=i("e431"),d=i("8188"),u=i("fd14"),g=i("a6c1"),v=i("3349"),y=i("f408"),f=i("e94b");const _=r["a"].getLogger("esri.views.interactive.GraphicManipulator");let m=class extends n["a"]{constructor(t){super(t),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new o["a"].EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(t){"mesh"!==Object(a["i"])(t.geometry,"type")?(this._circleCollisionCache=null,this._originalSymbol=t.symbol,this._set("graphic",t),this.attachSymbolChanged()):_.error("Mesh geometries are not supported")}get elevationInfo(){const t="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,e=Object(y["e"])(this.graphic),i=t?t.offset:0;return new u["a"]({mode:e,offset:i})}set focusedSymbol(t){t!==this._get("focusedSymbol")&&(this._set("focusedSymbol",t),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(t){t!==this._get("grabbing")&&(this._set("grabbing",t),this._updateGraphicSymbol())}set hovering(t){t!==this._get("hovering")&&(this._set("hovering",t),this._updateGraphicSymbol())}set selected(t){t!==this._get("selected")&&(this._set("selected",t),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:t?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(t){const e=this.graphic;if(!1===e.visible)return null;const i=e.geometry;if(Object(a["j"])(i))return null;const s=this._get("focusedSymbol"),r=Object(a["k"])(s)?s:e.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,t,i,r):this._intersectDistance3D(this.view,t,e)}attach(){this.attachSymbolChanged(),Object(a["k"])(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(a["k"])(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",t=>{Object(a["k"])(t)&&t!==this.focusedSymbol&&t!==this._originalSymbol&&(this._originalSymbol=t,this._focused&&Object(a["k"])(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))},!0)}detachSymbolChanged(){Object(a["k"])(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&Object(a["k"])(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(t,e,i,s){if(s=s||Object(g["h"])(i),Object(a["j"])(s))return null;const r=1;let c=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==s.type)return Object(f["b"])(e,i,t)?r:null;if(Object(a["j"])(c)||!c.originalPoint.equals(i)){const e=i,a=t.spatialReference;if(Object(d["b"])(e.spatialReference,a)){const t=Object(d["n"])(e,a);c={originalPoint:e.clone(),mapPoint:t,radiusPx:Object(l["h"])(s.size)},this._circleCollisionCache=c}}if(Object(a["k"])(c)){const i=Object(l["j"])(e,j),a=t.toScreen(c.mapPoint),h=c.radiusPx,n=a.x+Object(l["h"])(s.xoffset),o=a.y-Object(l["h"])(s.yoffset);return Object(v["j"])(i,[n,o])<h*h?r:null}return null}_intersectDistance3D(t,e,i){const s=t.toMap(e,{include:[i]});return s&&Object(d["t"])(s,O,t.renderSpatialReference)?Object(b["p"])(O,t.state.camera.eye):null}};Object(s["a"])([Object(c["b"])({constructOnly:!0,nonNullable:!0})],m.prototype,"graphic",null),Object(s["a"])([Object(c["b"])({readOnly:!0})],m.prototype,"elevationInfo",null),Object(s["a"])([Object(c["b"])({constructOnly:!0,nonNullable:!0})],m.prototype,"view",void 0),Object(s["a"])([Object(c["b"])({value:null})],m.prototype,"focusedSymbol",null),Object(s["a"])([Object(c["b"])({constructOnly:!0})],m.prototype,"layer",void 0),Object(s["a"])([Object(c["b"])()],m.prototype,"interactive",void 0),Object(s["a"])([Object(c["b"])()],m.prototype,"selectable",void 0),Object(s["a"])([Object(c["b"])()],m.prototype,"grabbable",void 0),Object(s["a"])([Object(c["b"])({value:!1})],m.prototype,"grabbing",null),Object(s["a"])([Object(c["b"])()],m.prototype,"dragging",void 0),Object(s["a"])([Object(c["b"])()],m.prototype,"hovering",null),Object(s["a"])([Object(c["b"])({value:!1})],m.prototype,"selected",null),Object(s["a"])([Object(c["b"])()],m.prototype,"cursor",void 0),m=Object(s["a"])([Object(h["a"])("esri.views.interactive.GraphicManipulator")],m);const O=Object(p["e"])(),j=Object(l["g"])()},"536f":function(t,e,i){"use strict";function s(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function a(t){let e=0,i=0;for(let s=0;s<t.length;s++){const a=t[s].size;"number"==typeof a&&(e+=a,i++)}return e/i}function r(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?a(t.stops):e}function c(t,e){if(!e)return t;const i=e.filter(t=>"size"===t.type).map(e=>{const{maxSize:i,minSize:s}=e;return(r(i,t)+r(s,t))/2});let s=0;const a=i.length;if(0===a)return t;for(let r=0;r<a;r++)s+=i[r];const c=Math.floor(s/a);return Math.max(c,t)}function h(t){const e=t&&t.renderer,i="touch"===(t&&t.event&&t.event.pointerType)?9:6;if(!e)return i;const a="visualVariables"in e?c(i,e.visualVariables):i;if("simple"===e.type)return s(a,e.symbol);if("unique-value"===e.type){let t=a;return e.uniqueValueInfos.forEach(e=>{t=s(t,e.symbol)}),t}if("class-breaks"===e.type){let t=a;return e.classBreakInfos.forEach(e=>{t=s(t,e.symbol)}),t}return e.type,a}i.d(e,"a",(function(){return h}))},e94b:function(t,e,i){"use strict";i.d(e,"a",(function(){return h})),i.d(e,"b",(function(){return n}));var s=i("b2b2"),a=i("3af1"),r=(i("e06a"),i("8048")),c=i("536f");function h(t,e,i,c=new a["a"]){let h;if("2d"===i.type)h=e*i.resolution;else if("3d"===i.type){const a=i.overlayPixelSizeInMapUnits(t),c=i.basemapSpatialReference;h=Object(s["k"])(c)&&!c.equals(i.spatialReference)?Object(r["e"])(c)/Object(r["e"])(i.spatialReference):e*a}const n=t.x-h,o=t.y-h,l=t.x+h,p=t.y+h,{spatialReference:b}=i;return c.xmin=Math.min(n,l),c.ymin=Math.min(o,p),c.xmax=Math.max(n,l),c.ymax=Math.max(o,p),c.spatialReference=b,c}function n(t,e,i){const a=i.toMap(t);return!Object(s["j"])(a)&&h(a,Object(c["a"])(),i,o).intersects(e)}const o=new a["a"]}}]);
//# sourceMappingURL=chunk-63e4c91e.23aea771.js.map