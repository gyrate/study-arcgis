(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6fb21b8","chunk-63e4c91e"],{"053b":function(e,t,i){"use strict";i.r(t);var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=(i("e92d"),i("cea0"),i("59b2")),o=i("d386"),n=(i("e041"),i("8eed"),i("f402"),i("f4cc")),c=i("4ae5"),h=i("32ed"),l=(i("e06a"),i("ce6d")),p=i("4dc9"),d=i("8d60"),b=i("af40"),v=i("3795"),y=i("2589"),g=i("7779"),u=i("1381"),_=i("6ae9"),m=i("27df"),f=i("1f1c"),G=i("cdc1"),O=i("b65e"),x=i("24be");class j{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-start"}}class w{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape"}}class S{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-stop"}}class k{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-start"}}class M{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move"}}class H{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-stop"}}class E{constructor(e){this.added=e,this.type="vertex-select"}}class C{constructor(e){this.removed=e,this.type="vertex-deselect"}}class D{constructor(e,t,i,s){this.added=e,this.graphic=t,this.oldGraphic=i,this.vertices=s,this.type="vertex-add"}}class I{constructor(e,t,i,s){this.removed=e,this.graphic=t,this.oldGraphic=i,this.vertices=s,this.type="vertex-remove"}}const V={removeVertex:["Backspace","Delete"]},R=g["b"].reshapeGraphics,P={vertices:{default:new p["a"]({style:"circle",size:R.vertex.size,color:R.vertex.color,outline:{color:R.vertex.outlineColor,width:1}}),hover:new p["a"]({style:"circle",size:R.vertex.hoverSize,color:R.vertex.hoverColor,outline:{color:R.vertex.hoverOutlineColor,width:1}}),selected:new p["a"]({style:"circle",size:R.selected.size,color:R.selected.color,outline:{color:R.selected.outlineColor,width:1}})},midpoints:{default:new p["a"]({style:"circle",size:R.midpoint.size,color:R.midpoint.color,outline:{color:R.midpoint.outlineColor,width:1}}),hover:new p["a"]({style:"circle",size:R.midpoint.size,color:R.midpoint.color,outline:{color:R.midpoint.outlineColor,width:1}})}};let A=class extends l["a"].EventedAccessor{constructor(e){super(e),this._handles=new b["a"],this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingTask=null,this._stagedVertex=null,this._totalDx=0,this._totalDy=0,this._viewHandles=new b["a"],this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.graphic=null,this.handleGraphics=[],this.layer=null,this.midpointGraphics=[],this.midpointSymbol=new p["a"]({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedHandles=[],this.snappingManager=null,this.type="reshape",this.view=null}initialize(){this._setup(),this._handles.add([Object(v["k"])(this,"view.ready",()=>{const{layer:e,view:t}=this;Object(O["a"])(t,e),this._viewHandles.add([t.on("key-down",e=>this._keyDownHandler(e),y["b"].TOOL)])}),Object(v["d"])(this,"graphic",()=>this.refresh()),Object(v["d"])(this,"layer",(e,t)=>{t&&(this._clearSelection(),this._resetGraphics(t)),this.refresh()}),Object(v["d"])(this,"enableMidpoints",()=>{this.refresh()})])}destroy(){this._reset(),this._mover&&this._mover.destroy(),this._mover=null,this._handles.removeAll(),this._handles=null,this._viewHandles.removeAll(),this._viewHandles=null}get state(){const e=!!this.get("view.ready"),t=!(!this.get("graphic")||!this.get("layer"));return e&&t?"active":e?"ready":"disabled"}set symbols(e){const{midpoints:t=P.midpoints,vertices:i=P.vertices}=e||{};this._set("symbols",{midpoints:t,vertices:i})}isUIGraphic(e){const t=[];return this.graphic&&t.push(this.graphic),t.concat(this.handleGraphics,this.midpointGraphics),t.length&&t.includes(e)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedHandles(){this.selectedHandles.length&&this._removeVertex(this.selectedHandles)}_setup(){this.graphic&&this.layer&&(this._setupGraphics(),this._setupMover())}_setUpGeometryHelper(){const e=this.graphic.geometry;Object(a["j"])(e)||"polygon"!==e.type&&"polyline"!==e.type||(this._geometryHelper=new m["a"](_["c"].fromGeometry(e,"local"),e.type))}_saveSnappingContextForHandle(e,t){var i;this._snappingContext=new f["a"]({geometry:this._geometryHelper,elevationInfo:{mode:"on-the-ground",offset:0},pointer:(null==(i=t.viewEvent)?void 0:i.pointerType)||"mouse",excludeFeature:this.graphic,visualizer:new u["a"],vertexHandle:this._getVertexFromEditGeometry(e)})}_reset(){this._clearSelection(),this._resetGraphicStateVars(),this._resetGraphics(),this._resetSnappingStateVars(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){var e;Object(a["k"])(this.snappingManager)&&this.snappingManager.doneSnapping(),null==(e=this._geometryHelper)||e.destroy(),this._geometryHelper=null,this._snappingTask=Object(a["a"])(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphicStateVars(){this._totalDx=0,this._totalDy=0}_resetGraphics(e){const t=e||this.layer;t&&(t.removeMany(this.handleGraphics),t.removeMany(this.midpointGraphics)),this.handleGraphics.forEach(e=>e.destroy()),this.midpointGraphics.forEach(e=>e.destroy()),this._set("handleGraphics",[]),this._set("midpointGraphics",[]),this._set("selectedHandles",[])}_setupGraphics(){const e=Object(a["t"])(this.graphic.geometry),t=Object(h["b"])(e.clone());if("polygon"===e.type)for(const i of t){const e=i[i.length-1];i[0][0]===e[0]&&i[0][1]===e[1]&&i.length>2&&i.pop()}this._set("handleGraphics",this._createHandleGraphics(t)),this.enableMidpoints&&this._set("midpointGraphics",this._createMidpointGraphics(t)),this._saveRelatedIndices(this.handleGraphics),this.layer.addMany(this.midpointGraphics),this.layer.addMany(this.handleGraphics)}_createHandleGraphics(e){const{_graphicAttributes:t,symbols:i,view:{spatialReference:s}}=this,a=[];return null==e||e.forEach((e,r)=>{e.forEach((e,o)=>{var n;const[h,l]=e;a.push(new d["a"]({geometry:new c["a"]({x:h,y:l,spatialReference:s}),symbol:null==i||null==(n=i.vertices)?void 0:n.default,attributes:{...t,pathIndex:r,pointIndex:o}}))})}),a}_createMidpointGraphics(e){const{_graphicAttributes:t,symbols:i,view:{spatialReference:s}}=this,r=[];return null==e||e.forEach((e,o)=>{e.forEach((n,l)=>{const[p,b]=n,v=e[l+1]?l+1:0;if("polygon"===Object(a["i"])(this.graphic.geometry,"type")||0!==v){const[a,n]=e[v],[y,g]=Object(h["d"])([p,b],[a,n]);r.push(new d["a"]({geometry:new c["a"]({x:y,y:g,spatialReference:s}),symbol:i.midpoints.default,attributes:{...t,pathIndex:o,pointIndexStart:l,pointIndexEnd:v}}))}})}),r}_saveRelatedIndices(e){if(!e)return;const t=e.map(({geometry:e})=>({x:e.x,y:e.y}));for(let i=0;i<t.length;i++){const s=[];for(let e=0;e<t.length;e++){if(i===e)continue;const a=t[i],r=t[e];a.x===r.x&&a.y===r.y&&s.push(e)}e[i].attributes.relatedGraphicIndices=s}}_setupMover(){this._mover=new x["default"]({enableMoveAllGraphics:!1,graphics:[].concat(this.handleGraphics,this.midpointGraphics,this.graphic),view:this.view,callbacks:{onGraphicClick:e=>this._onGraphicClickCallback(e),onGraphicMoveStart:e=>this._onGraphicMoveStartCallback(e),onGraphicMove:e=>this._onGraphicMoveCallback(e),onGraphicMoveStop:e=>this._onGraphicMoveStopCallback(e),onGraphicPointerOver:e=>this._onGraphicPointerOverCallback(e),onGraphicPointerOut:e=>this._onGraphicPointerOutCallback(e)}})}_onGraphicClickCallback(e){e.viewEvent.stopPropagation();const t=e.graphic;if(t===this.graphic)this.clearSelection(),this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e);else if(this._isMidpoint(t)){if(2===e.viewEvent.button)return;const i=this.graphic.clone(),s=this._createHandleFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,s)}else this._isHandle(t)&&(e.viewEvent.stopPropagation(),2===e.viewEvent.button?this._removeVertex(t):(e.viewEvent.native.shiftKey||this._clearSelection(),this.selectedHandles.includes(t)?this._removeFromSelection(t,!0):this._addToSelection(t)))}_onGraphicMoveStartCallback(e){const t=e.graphic,{dx:i,dy:s}=e;if(this._resetGraphicStateVars(),this._resetSnappingStateVars(),t===this.graphic)return this.handleGraphics.forEach(e=>e.visible=!1),this.midpointGraphics.forEach(e=>e.visible=!1),this._clearSelection(),void this._emitMoveStartEvent(i,s);if(this._isMidpoint(t)){this._clearSelection();const e=this.graphic.clone(),i=this._createHandleFromMidpoint(t);this._emitVertexAddEvent([t],e,i),this._addToSelection(t)}else this.selectedHandles.includes(t)||(this._clearSelection(),this._addToSelection(t));this._setUpGeometryHelper(),this._saveSnappingContextForHandle(t,e),this._onHandleMove(t,i,s,e),this._emitReshapeStartEvent(t)}_onGraphicMoveCallback(e){const{graphic:t,dx:i,dy:s}=e;this._totalDx+=i,this._totalDy+=s,t===this.graphic?(this._syncGraphicsWithGeometry(),this._emitMoveEvent(i,s)):(this._onHandleMove(t,i,s,e),this._emitReshapeEvent(t))}_onGraphicMoveStopCallback(e){const{graphic:t,dx:i,dy:s}=e;if(this._totalDx+=i,this._totalDy+=s,t===this.graphic){this._syncGraphicsWithGeometry();for(const e of[].concat(this.handleGraphics,this.midpointGraphics))e.visible=!0;this._emitMoveStopEvent(),this._resetGraphicStateVars()}else this._onHandleMove(t,i,s,e),this._resetSnappingStateVars(),this._isMidpoint(t)&&this.refresh(),this._emitReshapeStopEvent(t),this._resetGraphicStateVars()}_syncGraphicsWithGeometry(){const e=this.graphic.geometry,t="polyline"===e.type?e.paths:e.rings;this._updateHandleGraphicLocations(t),this._updateMidpointGraphicLocations(t)}_updateHandleGraphicLocations(e){for(const t of this.handleGraphics){const{pathIndex:i,pointIndex:s}=t.attributes,[a,r]=e[i][s];t.set("geometry",new c["a"](a,r,this.view.spatialReference))}}_updateMidpointGraphicLocations(e){for(const t of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:a}=t.attributes,[r,o]=e[i][s],[n,l]=e[i][a],[p,d]=Object(h["d"])([r,o],[n,l]);t.geometry=new c["a"]({x:p,y:d,spatialReference:this.view.spatialReference})}}_getVertexFromEditGeometry(e){var t;const{pathIndex:i,pointIndex:s}=e.attributes;return null==(t=this._geometryHelper)?void 0:t.editGeometry.components[i].vertices[s]}_onHandleMove(e,t,i,s){Object(a["a"])(this._snappingTask);const r=e.geometry,o="graphic-move-stop"===s.type;if(Object(a["k"])(this.snappingManager)&&1===this.selectedHandles.length&&!o){const s=this.snappingManager;this._stagedVertex=s.update(r,this._snappingContext),this._syncGeometryAfterHandleMove(e,new c["a"](this._stagedVertex),t,i,o),this._emitReshapeEvent(e),this._snappingTask=Object(n["i"])(async a=>{const n=await s.snap(r,this._snappingContext,a);n.valid&&(this._stagedVertex=n.apply(),this._syncGeometryAfterHandleMove(e,new c["a"](this._stagedVertex),t,i,o),this._emitReshapeEvent(e))})}else{const n=Object(a["k"])(this._stagedVertex)?new c["a"](this._stagedVertex):r;this._syncGeometryAfterHandleMove(e,n,t,i,o),"graphic-move"===s.type&&this._emitReshapeEvent(e)}}async _syncGeometryAfterHandleMove(e,t,i,s,a=!1){const{x:r,y:o}=t,n=this._getUpdatedGeometryAfterHandleMove(e,t);let c="polyline"===n.type?n.paths:n.rings;this._isHandle(e)&&(c=this._moveRelatedCoordinates(c,e,r,o),c=this._moveSelectedHandleCoordinates(c,e,i,s,"polygon"===n.type),this._updateMidpointGraphicLocations(c)),this.graphic.geometry=n,this._syncEditGeometryAfterHandleMove(e,r,o),a&&(e.geometry=t)}_getUpdatedGeometryAfterHandleMove(e,t){const{x:i,y:s}=t,r=Object(a["t"])(this.graphic.geometry).clone(),o="polyline"===r.type?r.paths:r.rings,{pathIndex:n,pointIndex:c}=e.attributes,h=o[n].length-1;return o[n][c]=[i,s],"polygon"===r.type&&(0===c?o[n][h]=[i,s]:c===h&&(o[n][0]=[i,s])),r}_moveRelatedCoordinates(e,t,i,s){const{relatedGraphicIndices:a}=t.attributes;for(const r of a){const a=this.handleGraphics[r],{pathIndex:o,pointIndex:n}=a.attributes;e[o][n]=[i,s],a.geometry=t.geometry}return e}_moveSelectedHandleCoordinates(e,t,i,s,a){for(const r of this.selectedHandles)if(r!==t){const{pathIndex:t,pointIndex:o,relatedGraphicIndices:n}=r.attributes,c=Object(G["a"])(r.geometry,i,s,this.view),h=e[t].length-1;e[t][o]=[c.x,c.y],r.geometry=c,a&&(0===o?e[t][h]=[c.x,c.y]:o===h&&(e[t][0]=[c.x,c.y]));for(const i of n){const t=this.handleGraphics[i],{pathIndex:s,pointIndex:a}=t.attributes;e[s][a]=[c.x,c.y],t.geometry=c}}return e}_syncEditGeometryAfterHandleMove(e,t,i){const s=this._getVertexFromEditGeometry(e),a=t-s.pos[0],r=i-s.pos[1];this._geometryHelper.moveVertices([s],a,r,0)}_onGraphicPointerOverCallback(e){const t=e.graphic;this._isHandle(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.hover),this._updateHoverCursor(t)}_onGraphicPointerOutCallback(e){const t=e.graphic;this._isHandle(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.default),this.view.cursor="default"}_createHandleFromMidpoint(e){const{_graphicAttributes:t}=this,i=[],s=Object(a["t"])(this.graphic.geometry).clone(),{pathIndex:r,pointIndexStart:o,pointIndexEnd:n}=e.attributes,{x:c,y:h}=e.geometry,l=0===n?o+1:n,p="polyline"===s.type?s.paths:s.rings;return p[r].splice(l,0,[c,h]),e.attributes={...t,pathIndex:r,pointIndex:l,relatedGraphicIndices:[]},i.push({coordinates:p[r][l],componentIndex:r,vertexIndex:l}),this.graphic.geometry=s,i}_removeHandles(e){const t=Object(a["t"])(this.graphic.geometry).clone(),i="polygon"===t.type?t.rings:t.paths,s=[];e instanceof d["a"]&&(e=[e]);for(const a of e){const{x:e,y:t}=a.geometry;for(let a=0;a<i.length;a++){const r=i[a];for(let o=0;o<r.length;o++){const[n,c]=r[o];e===n&&t===c&&(s.push({coordinates:i[a][o],componentIndex:a,vertexIndex:o}),i[a].splice(Number(o),1))}}}if("polygon"===t.type)for(const a of i){const[e,t]=a[0],[s,r]=a[a.length-1];(1===a.length||a.length<3&&e===s&&t===r)&&i.splice(i.indexOf(a),1),a.length>2&&(e!==s||t!==r)&&a.push(a[0])}else for(const a of i)1===a.length&&i.splice(i.indexOf(a),1);return this.graphic.geometry=t,s}_addToSelection(e){e instanceof d["a"]&&(e=[e]);for(const t of e)t.symbol=this.symbols.vertices.selected;this._set("selectedHandles",this.selectedHandles.concat(e)),this._emitSelectEvent(e)}_removeFromSelection(e,t){const{vertices:i}=this.symbols,s=t?i.hover:i.default;e instanceof d["a"]&&(e=[e]);for(const a of e)this.selectedHandles.splice(this.selectedHandles.indexOf(a),1),this._set("selectedHandles",this.selectedHandles),a.set("symbol",s);this._emitDeselectEvent(e)}_clearSelection(){if(this.selectedHandles.length){const e=this.selectedHandles;for(const t of this.selectedHandles)t.set("symbol",this.symbols.vertices.default);this._set("selectedHandles",[]),this._emitDeselectEvent(e)}}_keyDownHandler(e){V.removeVertex.includes(e.key)&&!e.repeat&&this.selectedHandles.length&&this._removeVertex(this.selectedHandles)}_removeVertex(e){if("polygon"===this.graphic.geometry.type&&this.handleGraphics.length<4||this.handleGraphics.length<3)return;const t=this.graphic.clone();e instanceof d["a"]&&(e=[e]);const i=this._removeHandles(e);this.refresh(),this._emitVertexRemoveEvent(e,t,i)}_isHandle(e){return this.handleGraphics.includes(e)}_isSelected(e){return this._isHandle(e)&&this.selectedHandles.includes(e)}_isMidpoint(e){return this.midpointGraphics.includes(e)}_updateHoverCursor(e){this.view.cursor=this._isMidpoint(e)?"copy":"move"}_emitMoveStartEvent(e,t){const i=new k(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}_emitMoveEvent(e,t){const i=new M(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}_emitMoveStopEvent(){const e=new H(this.graphic,this._totalDx,this._totalDy);this.emit("move-stop",e),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(e)}_emitReshapeStartEvent(e){const t=new j(this.graphic,e,this.selectedHandles);this.emit("reshape-start",t),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(t)}_emitReshapeEvent(e){const t=new w(this.graphic,e,this.selectedHandles);this.emit("reshape",t),this.callbacks.onReshape&&this.callbacks.onReshape(t)}_emitReshapeStopEvent(e){const t=new S(this.graphic,e,this.selectedHandles);this.emit("reshape-stop",t),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(t)}_emitSelectEvent(e){const t=new E(e);this.emit("select",t),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(t)}_emitDeselectEvent(e){const t=new C(e);this.emit("deselect",t),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(t)}_emitVertexAddEvent(e,t,i){const s=new D(e,this.graphic,t,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(s)}_emitVertexRemoveEvent(e,t,i){const s=new I(e,this.graphic,t,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(s)}};Object(s["a"])([Object(r["b"])()],A.prototype,"callbacks",void 0),Object(s["a"])([Object(r["b"])()],A.prototype,"enableMidpoints",void 0),Object(s["a"])([Object(r["b"])()],A.prototype,"graphic",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],A.prototype,"handleGraphics",void 0),Object(s["a"])([Object(r["b"])()],A.prototype,"layer",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],A.prototype,"midpointGraphics",void 0),Object(s["a"])([Object(r["b"])()],A.prototype,"midpointSymbol",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],A.prototype,"selectedHandles",void 0),Object(s["a"])([Object(r["b"])()],A.prototype,"snappingManager",void 0),Object(s["a"])([Object(r["b"])({readOnly:!0})],A.prototype,"state",null),Object(s["a"])([Object(r["b"])({value:P})],A.prototype,"symbols",null),Object(s["a"])([Object(r["b"])({readOnly:!0})],A.prototype,"type",void 0),Object(s["a"])([Object(r["b"])()],A.prototype,"view",void 0),A=Object(s["a"])([Object(o["a"])("esri.views.draw.support.Reshape")],A);var T=A;t["default"]=T},"24be":function(e,t,i){"use strict";i.r(t);var s=i("a4ee"),a=(i("c120"),i("7ffa")),r=i("b2b2"),o=(i("e92d"),i("cea0"),i("59b2")),n=i("d386"),c=(i("e041"),i("8eed"),i("f402"),i("ce6d")),h=i("af40"),l=i("3795"),p=i("2589"),d=i("412f"),b=i("cdc1"),v=i("3cde");class y{constructor(e,t,i,s,a){this.graphic=e,this.index=t,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-click"}}class g{constructor(e,t,i,s,a){this.graphic=e,this.index=t,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-double-click"}}class u{constructor(e,t,i,s,a,r,o,n,c,h){this.graphic=e,this.allGraphics=t,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=o,this.totalDx=n,this.totalDy=c,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-start"}preventDefault(){this.defaultPrevented=!0}}class _{constructor(e,t,i,s,a,r,o,n,c,h){this.graphic=e,this.allGraphics=t,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=o,this.totalDx=n,this.totalDy=c,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move"}preventDefault(){this.defaultPrevented=!0}}class m{constructor(e,t,i,s,a,r,o,n,c,h){this.graphic=e,this.allGraphics=t,this.index=i,this.x=s,this.y=a,this.dx=r,this.dy=o,this.totalDx=n,this.totalDy=c,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-stop"}preventDefault(){this.defaultPrevented=!0}}class f{constructor(e,t,i,s,a){this.graphic=e,this.index=t,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-over"}}class G{constructor(e,t,i,s,a){this.graphic=e,this.index=t,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-out"}}class O{constructor(e,t,i,s,a){this.graphic=e,this.index=t,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-down"}}class x{constructor(e,t,i,s,a){this.graphic=e,this.index=t,this.x=i,this.y=s,this.viewEvent=a,this.type="graphic-pointer-up"}}let j=class extends c["a"].EventedAccessor{constructor(e){super(e),this._activeGraphic=null,this._dragEvent=null,this._handles=new h["a"],this._hoverGraphic=null,this._initialDragGeometry=null,this._viewHandles=new h["a"],this._manipulators=[],this.type="graphic-mover",this.callbacks={onGraphicClick(){},onGraphicDoubleClick(){},onGraphicMoveStart(){},onGraphicMove(){},onGraphicMoveStop(){},onGraphicPointerOver(){},onGraphicPointerOut(){},onGraphicPointerDown(){},onGraphicPointerUp(){}},this.enableMoveAllGraphics=!1,this.graphics=[],this.view=null}initialize(){this._setUpManipulators(),this._handles.add([Object(l["e"])(this,["graphics","graphics.length"],()=>{this._setUpManipulators()}),Object(l["k"])(this,"view.ready",()=>{this._viewHandles.add([this.view.on("immediate-click",e=>this._clickHandler(e),p["b"].TOOL),this.view.on("double-click",e=>this._doubleClickHandler(e),p["b"].TOOL),this.view.on("pointer-down",e=>this._pointerDownHandler(e),p["b"].TOOL),this.view.on("pointer-move",e=>this._pointerMoveHandler(e),p["b"].TOOL),this.view.on("pointer-up",e=>this._pointerUpHandler(e),p["b"].TOOL),this.view.on("drag",e=>this._dragHandler(e),p["b"].TOOL),this.view.on("key-down",e=>this._keyDownHandler(e),p["b"].TOOL)])})])}destroy(){this.reset(),this._manipulators.forEach(e=>e.destroy()),this._manipulators=null,this._viewHandles.removeAll(),this._handles.removeAll()}get state(){const e=!!this.get("view.ready"),t=!!this.get("graphics.length"),i=this._activeGraphic;return e&&t?i?"moving":"active":e?"ready":"disabled"}reset(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null}updateGeometry(e,t){const i=this.graphics[e];i&&i.set("geometry",t)}_clickHandler(e){const t=this._findTargetGraphic(Object(d["a"])(e));if(t){const i=new y(t,this.graphics.indexOf(t),e.x,e.y,e);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}_doubleClickHandler(e){const t=this._findTargetGraphic(Object(d["a"])(e));if(t){const i=new g(t,this.graphics.indexOf(t),e.x,e.y,e);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}_pointerDownHandler(e){const t=this._findTargetGraphic(Object(d["a"])(e));if(t){this._activeGraphic=t;const{x:i,y:s}=e,a=new O(t,this.graphics.indexOf(t),i,s,e);this.emit("graphic-pointer-down",a),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(a)}else this._activeGraphic=null}_pointerUpHandler(e){if(this._activeGraphic){const{x:t,y:i}=e,s=this.graphics.indexOf(this._activeGraphic),a=new x(this._activeGraphic,s,t,i,e);this.emit("graphic-pointer-up",a),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(a)}}_pointerMoveHandler(e){if(this._dragEvent)return;const t=this._findTargetGraphic(Object(d["a"])(e));if(t){const{x:i,y:s}=e;if(this._hoverGraphic){if(this._hoverGraphic===t)return;const a=this.graphics.indexOf(this._hoverGraphic),r=new G(this.graphics[a],a,i,s,e);this._hoverGraphic=null,this.emit("graphic-pointer-out",r),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(r)}const a=this.graphics.indexOf(t),r=new f(t,a,i,s,e);return this._hoverGraphic=t,this.emit("graphic-pointer-over",r),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(r))}if(this._hoverGraphic){const{x:t,y:i}=e,s=this.graphics.indexOf(this._hoverGraphic),a=new G(this.graphics[s],s,t,i,e);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}}_dragHandler(e){if("start"!==e.action&&!this._dragEvent||!this._activeGraphic||!this._activeGraphic.geometry)return;e.stopPropagation();const{action:t,x:i,y:s}=e,r=this.graphics.indexOf(this._activeGraphic),o=this._activeGraphic.geometry,n=this._dragEvent?i-this._dragEvent.x:0,c=this._dragEvent?s-this._dragEvent.y:0,h=i-e.origin.x,l=s-e.origin.y;if(this._activeGraphic.geometry=Object(b["a"])(o,n,c,this.view),this.enableMoveAllGraphics&&this.graphics.forEach(e=>{e!==this._activeGraphic&&(e.geometry=Object(b["a"])(e.geometry,n,c,this.view))}),this._dragEvent=e,"start"===t){this._initialDragGeometry=Object(a["a"])(o);const t=new u(this._activeGraphic,this.graphics,r,i,s,n,c,h,l,e);this.emit("graphic-move-start",t),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(t),t.defaultPrevented&&this._activeGraphic.set("geometry",o)}else if("update"===t){const t=new _(this._activeGraphic,this.graphics,r,i,s,n,c,h,l,e);this.emit("graphic-move",t),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(t),t.defaultPrevented&&this._activeGraphic.set("geometry",o)}else{const t=new m(this._activeGraphic,this.graphics,r,i,s,n,c,h,l,e);this._dragEvent=null,this._activeGraphic=null,this.emit("graphic-move-stop",t),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(t),t.defaultPrevented&&this.graphics[r].set("geometry",this._initialDragGeometry),this._initialDragGeometry=null}}_keyDownHandler(e){"a"!==e.key&&"d"!==e.key&&"n"!==e.key||"moving"!==this.state||e.stopPropagation()}_findTargetGraphic(e){let t=null,i=Number.MAX_VALUE;return this._manipulators.forEach(s=>{const a=s.intersectionDistance(e);Object(r["k"])(a)&&a<i&&(i=a,t=s.graphic)}),t}_setUpManipulators(){const{graphics:e,view:t}=this;this._manipulators.forEach(e=>e.destroy()),this._manipulators=null!=e&&e.length?e.map(e=>new v["a"]({graphic:e,view:t})):[]}};Object(s["a"])([Object(o["b"])()],j.prototype,"_activeGraphic",void 0),Object(s["a"])([Object(o["b"])({readOnly:!0})],j.prototype,"type",void 0),Object(s["a"])([Object(o["b"])()],j.prototype,"callbacks",void 0),Object(s["a"])([Object(o["b"])()],j.prototype,"enableMoveAllGraphics",void 0),Object(s["a"])([Object(o["b"])()],j.prototype,"graphics",void 0),Object(s["a"])([Object(o["b"])({readOnly:!0})],j.prototype,"state",null),Object(s["a"])([Object(o["b"])()],j.prototype,"view",void 0),j=Object(s["a"])([Object(n["a"])("esri.views.draw.support.GraphicMover")],j);var w=j;t["default"]=w},"3cde":function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var s=i("a4ee"),a=(i("c120"),i("b2b2")),r=i("e92d"),o=(i("cea0"),i("59b2")),n=i("d386"),c=(i("e041"),i("8eed"),i("f402"),i("fc29")),h=i("ce6d"),l=i("a915"),p=i("0b2d"),d=i("e431"),b=i("8188"),v=i("fd14"),y=i("a6c1"),g=i("3349"),u=i("f408"),_=i("e94b");const m=r["a"].getLogger("esri.views.interactive.GraphicManipulator");let f=class extends c["a"]{constructor(e){super(e),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.events=new h["a"].EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}set graphic(e){"mesh"!==Object(a["i"])(e.geometry,"type")?(this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged()):m.error("Mesh geometries are not supported")}get elevationInfo(){const e="elevationInfo"in this.graphic.layer&&this.graphic.layer.elevationInfo,t=Object(u["e"])(this.graphic),i=e?e.offset:0;return new v["a"]({mode:t,offset:i})}set focusedSymbol(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol())}set hovering(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol())}set selected(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(e){const t=this.graphic;if(!1===t.visible)return null;const i=t.geometry;if(Object(a["j"])(i))return null;const s=this._get("focusedSymbol"),r=Object(a["k"])(s)?s:t.symbol;return"2d"===this.view.type?this._intersectDistance2D(this.view,e,i,r):this._intersectDistance3D(this.view,e,t)}attach(){this.attachSymbolChanged(),Object(a["k"])(this.layer)&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),Object(a["k"])(this.layer)&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=this.graphic.watch("symbol",e=>{Object(a["k"])(e)&&e!==this.focusedSymbol&&e!==this._originalSymbol&&(this._originalSymbol=e,this._focused&&Object(a["k"])(this.focusedSymbol)&&(this.graphic.symbol=this.focusedSymbol))},!0)}detachSymbolChanged(){Object(a["k"])(this._graphicSymbolChangedHandle)&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&Object(a["k"])(this.focusedSymbol)?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(e,t,i,s){if(s=s||Object(y["h"])(i),Object(a["j"])(s))return null;const r=1;let o=this._circleCollisionCache;if("point"!==i.type||"simple-marker"!==s.type)return Object(_["b"])(t,i,e)?r:null;if(Object(a["j"])(o)||!o.originalPoint.equals(i)){const t=i,a=e.spatialReference;if(Object(b["b"])(t.spatialReference,a)){const e=Object(b["n"])(t,a);o={originalPoint:t.clone(),mapPoint:e,radiusPx:Object(l["h"])(s.size)},this._circleCollisionCache=o}}if(Object(a["k"])(o)){const i=Object(l["j"])(t,O),a=e.toScreen(o.mapPoint),n=o.radiusPx,c=a.x+Object(l["h"])(s.xoffset),h=a.y-Object(l["h"])(s.yoffset);return Object(g["j"])(i,[c,h])<n*n?r:null}return null}_intersectDistance3D(e,t,i){const s=e.toMap(t,{include:[i]});return s&&Object(b["t"])(s,G,e.renderSpatialReference)?Object(d["p"])(G,e.state.camera.eye):null}};Object(s["a"])([Object(o["b"])({constructOnly:!0,nonNullable:!0})],f.prototype,"graphic",null),Object(s["a"])([Object(o["b"])({readOnly:!0})],f.prototype,"elevationInfo",null),Object(s["a"])([Object(o["b"])({constructOnly:!0,nonNullable:!0})],f.prototype,"view",void 0),Object(s["a"])([Object(o["b"])({value:null})],f.prototype,"focusedSymbol",null),Object(s["a"])([Object(o["b"])({constructOnly:!0})],f.prototype,"layer",void 0),Object(s["a"])([Object(o["b"])()],f.prototype,"interactive",void 0),Object(s["a"])([Object(o["b"])()],f.prototype,"selectable",void 0),Object(s["a"])([Object(o["b"])()],f.prototype,"grabbable",void 0),Object(s["a"])([Object(o["b"])({value:!1})],f.prototype,"grabbing",null),Object(s["a"])([Object(o["b"])()],f.prototype,"dragging",void 0),Object(s["a"])([Object(o["b"])()],f.prototype,"hovering",null),Object(s["a"])([Object(o["b"])({value:!1})],f.prototype,"selected",null),Object(s["a"])([Object(o["b"])()],f.prototype,"cursor",void 0),f=Object(s["a"])([Object(n["a"])("esri.views.interactive.GraphicManipulator")],f);const G=Object(p["e"])(),O=Object(l["g"])()},"536f":function(e,t,i){"use strict";function s(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function a(e){let t=0,i=0;for(let s=0;s<e.length;s++){const a=e[s].size;"number"==typeof a&&(t+=a,i++)}return t/i}function r(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?a(e.stops):t}function o(e,t){if(!t)return e;const i=t.filter(e=>"size"===e.type).map(t=>{const{maxSize:i,minSize:s}=t;return(r(i,e)+r(s,e))/2});let s=0;const a=i.length;if(0===a)return e;for(let r=0;r<a;r++)s+=i[r];const o=Math.floor(s/a);return Math.max(o,e)}function n(e){const t=e&&e.renderer,i="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return i;const a="visualVariables"in t?o(i,t.visualVariables):i;if("simple"===t.type)return s(a,t.symbol);if("unique-value"===t.type){let e=a;return t.uniqueValueInfos.forEach(t=>{e=s(e,t.symbol)}),e}if("class-breaks"===t.type){let e=a;return t.classBreakInfos.forEach(t=>{e=s(e,t.symbol)}),e}return t.type,a}i.d(t,"a",(function(){return n}))},e94b:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return c}));var s=i("b2b2"),a=i("3af1"),r=(i("e06a"),i("8048")),o=i("536f");function n(e,t,i,o=new a["a"]){let n;if("2d"===i.type)n=t*i.resolution;else if("3d"===i.type){const a=i.overlayPixelSizeInMapUnits(e),o=i.basemapSpatialReference;n=Object(s["k"])(o)&&!o.equals(i.spatialReference)?Object(r["e"])(o)/Object(r["e"])(i.spatialReference):t*a}const c=e.x-n,h=e.y-n,l=e.x+n,p=e.y+n,{spatialReference:d}=i;return o.xmin=Math.min(c,l),o.ymin=Math.min(h,p),o.xmax=Math.max(c,l),o.ymax=Math.max(h,p),o.spatialReference=d,o}function c(e,t,i){const a=i.toMap(e);return!Object(s["j"])(a)&&n(a,Object(o["a"])(),i,h).intersects(t)}const h=new a["a"]}}]);
//# sourceMappingURL=chunk-f6fb21b8.c04b00f7.js.map