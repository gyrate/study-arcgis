(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bcda5"],{"2a00":function(e,t,n){"use strict";n.r(t),n.d(t,"destroyContext",(function(){return h})),n.d(t,"dracoDecompressPointCloudData",(function(){return b})),n.d(t,"filterObbsForModifications",(function(){return d})),n.d(t,"filterObbsForModificationsSync",(function(){return w})),n.d(t,"initialize",(function(){return L})),n.d(t,"interpretObbModificationResults",(function(){return g})),n.d(t,"process",(function(){return l})),n.d(t,"setLegacySchema",(function(){return m})),n.d(t,"setModifications",(function(){return y})),n.d(t,"setModificationsSync",(function(){return E})),n.d(t,"test",(function(){return _}));var r=n("a21b"),o=n("b2b2"),i=n("b2cd");function s(){return a||(a=new Promise(e=>n.e("chunk-f1a47972").then(n.bind(null,"8a55")).then((function(e){return e.i})).then(({default:t})=>{const n=t({locateFile:f,onRuntimeInitialized:()=>e(n)});delete n.then})).catch(e=>Promise.reject(e))),a}function f(e){return Object(i["b"])("esri/libs/i3s/"+e)}let a,c,u;async function l(e){await L();const t=[e.geometryBuffer];return{result:p(e,t),transferList:t}}async function b(e){var t;await L();const n=[e.geometryBuffer],{geometryBuffer:o}=e,i=o.byteLength,s=u._malloc(i),f=new Uint8Array(u.HEAPU8.buffer,s,i);f.set(new Uint8Array(o));const a=u.dracoDecompressPointCloudData(s,f.byteLength);if(u._free(s),a.error.length>0)throw"i3s.wasm: "+a.error;const c=(null==(t=a.featureIds)?void 0:t.length)>0?Object(r["m"])(a.featureIds):null,l=Object(r["m"])(a.positions);return c&&n.push(c.buffer),n.push(l.buffer),{result:{positions:l,featureIds:c},transferList:n}}async function d(e){await L(),w(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function y(e){await L(),E(e)}async function m(e){await L(),u.setLegacySchema(e.context,e.jsonSchema)}function h(e){O(e)}function E(e){const t=e.modifications,n=u._malloc(8*t.length),r=new Float64Array(u.HEAPU8.buffer,n,t.length);for(let o=0;o<t.length;++o)r[o]=t[o];u.setModifications(e.context,n,t.length,e.isGeodetic),u._free(n)}function p(e,t){if(!u)return null;const{context:n,localOrigin:i,globalTrafo:s,mbs:f,obb:a,elevationOffset:c,geometryBuffer:l,geometryDescriptor:b,indexToVertexProjector:d,vertexToRenderProjector:y}=e,m=u._malloc(l.byteLength),h=33,E=u._malloc(h*Float64Array.BYTES_PER_ELEMENT),p=new Uint8Array(u.HEAPU8.buffer,m,l.byteLength);p.set(new Uint8Array(l));const g=new Float64Array(u.HEAPU8.buffer,E,h);A(g,i);let w=g.byteOffset+3*g.BYTES_PER_ELEMENT,O=new Float64Array(g.buffer,w);A(O,s),w+=16*g.BYTES_PER_ELEMENT,O=new Float64Array(g.buffer,w),A(O,f),w+=4*g.BYTES_PER_ELEMENT,Object(o["k"])(a)&&(O=new Float64Array(g.buffer,w),A(O,a.center),w+=3*g.BYTES_PER_ELEMENT,O=new Float64Array(g.buffer,w),A(O,a.halfSize),w+=3*g.BYTES_PER_ELEMENT,O=new Float64Array(g.buffer,w),A(O,a.quaternion));const L=b,_={isDraco:!1,isLegacy:!1,color:e.layouts.some(e=>e.some(e=>"color"===e.name)),normal:e.needNormals&&e.layouts.some(e=>e.some(e=>"normalCompressed"===e.name)),uv0:e.layouts.some(e=>e.some(e=>"uv0"===e.name)),uvRegion:e.layouts.some(e=>e.some(e=>"uvRegion"===e.name)),featureIndex:L.featureIndex},P=u.process(n,!!e.obb,m,p.byteLength,L,_,E,c,d,y,e.normalReferenceFrame);if(u._free(E),u._free(m),P.error.length>0)throw"i3s.wasm: "+P.error;if(P.discarded)return null;const T=P.componentOffsets.length>0?Object(r["m"])(P.componentOffsets):null,j=P.featureIds.length>0?Object(r["m"])(P.featureIds):null,I=Object(r["m"])(P.interleavedVertedData).buffer,F=1===P.indicesType?Object(r["m"])(new Uint16Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/2)):Object(r["m"])(new Uint32Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/4)),M=Object(r["m"])(P.positions),B=1===P.positionIndicesType?Object(r["m"])(new Uint16Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/2)):Object(r["m"])(new Uint32Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/4)),R={layout:e.layouts[0],interleavedVertexData:I,indices:F,hasColors:P.hasColors,hasModifications:P.hasModifications,positionData:{data:M,indices:B}};return j&&t.push(j.buffer),T&&t.push(T.buffer),t.push(I),t.push(F.buffer),t.push(M.buffer),t.push(B.buffer),{componentOffsets:T,featureIds:j,transformedGeometry:R,obb:P.obb}}function g(e){return 0===e?0:1===e?1:2===e?2:3}function w(e){const{context:t,buffer:n}=e,r=u._malloc(n.byteLength),o=n.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(u.HEAPU8.buffer,r,o),s=new Float64Array(n);i.set(s),u.filterOBBs(t,r,o),s.set(i),u._free(r)}function O(e){u&&u.destroy(e)}function A(e,t){for(let n=0;n<t.length;++n)e[n]=t[n]}function L(){return u?Promise.resolve():(c||(c=s().then(e=>{u=e,c=null})),c)}const _={transform:p,destroy:O}}}]);
//# sourceMappingURL=chunk-2d0bcda5.02df3b0e.js.map