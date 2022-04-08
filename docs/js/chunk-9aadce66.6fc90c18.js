(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9aadce66"],{"0310":function(e,t,r){"use strict";r.d(t,"a",(function(){return B})),r.d(t,"b",(function(){return P}));var o=r("bd75"),a=r("17ca"),n=r("d272"),i=r("4db9"),s=r("d539"),c=r("c332"),l=r("b09a"),d=r("6cb2"),u=r("dfaf"),m=r("6d5b"),f=r("7d11"),p=r("17b0"),v=r("7e21"),b=r("d047"),h=r("0d7a"),g=r("7088"),x=r("ea4b"),y=r("c6d7"),O=r("aab5"),T=r("5d5f"),C=r("a7d7"),w=r("d017"),M=r("be24"),S=r("ebd5"),j=r("d56e"),_=r("3626"),A=r("3886"),R=r("690a");function P(e){const t=new R["a"],r=t.vertex.code,P=t.fragment.code;return t.include(j["a"],{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l["a"]),t.varyings.add("vpos","vec3"),t.include(M["a"],e),t.include(s["a"],e),t.include(p["a"],e),0!==e.output&&7!==e.output||(t.include(c["a"],e),t.include(i["a"],{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(a["a"]),t.include(h["a"],e),t.include(f["a"],e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(u["a"],e),t.include(o["a"],e),t.include(d["a"],e),t.include(m["a"],e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(A["a"]`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${A["a"].float(S["c"])}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?A["a"]`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(n["a"],e),t.include(S["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(b["a"]),t.include(y["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(_["a"]),P.add(A["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?A["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:A["a"]`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?A["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:A["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n["a"],e),t.include(x["a"],e),t.include(g["a"],e),t.include(S["a"],e),e.receiveShadows&&t.include(w["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(b["a"]),t.include(y["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(C["b"],e),t.include(T["a"],e),t.fragment.include(_["a"]),t.include(O["a"],e),P.add(A["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?A["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:A["a"]`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?A["a"]`
        vec3 normal = screenDerivativeNormal(localvpos);`:A["a"]`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?A["a"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:A["a"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?A["a"]`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?A["a"]`vec3 normalGround = normalize(vpos + localOrigin);`:A["a"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:A["a"]``}
        ${1===e.pbrMode||2===e.pbrMode?A["a"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(v["a"],e),t}const B=Object.freeze({__proto__:null,build:P})},"0613":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));const o=2.1},"087c":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n}));var o=r("a21b"),a=r("1038");function n(e,t=a["d"]){return"number"==typeof e?t(e):Object(o["i"])(e)||Object(o["k"])(e)?new Uint32Array(e):e}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let a=0;a<r;a+=1)if(a%2==0){const r=e[a],n=e[a+1],i=e[a+2];o[t++]=r,o[t++]=n,o[t++]=i}else{const r=e[a+1],n=e[a],i=e[a+2];o[t++]=r,o[t++]=n,o[t++]=i}}return o}function s(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}{const t=e[0];let a=e[1],n=0;for(let i=0;i<r;++i){const r=e[i+2];o[n++]=t,o[n++]=a,o[n++]=r,a=r}return o}}},"0d7a":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("7cb4"),a=r("3886");function n(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(a["a"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(a["a"]`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(a["a"]`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),0!==t.attributeTextureCoordinates&&(e.include(o["a"],t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(a["a"]`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},"17ca":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){e.vertex.code.add(o["a"]`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},"1c20":function(e,t,r){"use strict";function o(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*i;for(let d=0;d<s;++d)o[c]=n[l],o[c+1]=n[l+1],o[c+2]=n[l+2],o[c+3]=n[l+3],c+=a,l+=i}function a(e,t,r,o,a,n){var i,s;const c=e.typedBuffer,l=e.typedBufferStride,d=null!=(i=null==n?void 0:n.count)?i:e.count;let u=(null!=(s=null==n?void 0:n.dstIndex)?s:0)*l;for(let m=0;m<d;++m)c[u]=t,c[u+1]=r,c[u+2]=o,c[u+3]=a,u+=l}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));Object.freeze({__proto__:null,copy:o,fill:a})},"22f5":function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return T}));var o=r("2eab"),a=r("792b"),n=r("ce50"),i=r("e92d"),s=r("b2b2"),c=r("f4cc"),l=r("549a"),d=r("0b2d"),u=r("4261"),m=r("2db0"),f=r("0278"),p=r("1e2c"),v=r("dbad");const b=i["a"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function h(e,t){const r=await g(e,t);return{resource:r,textures:await w(r.textureDefinitions,t)}}async function g(e,t){const r=Object(s["l"])(t)&&t.streamDataRequester;if(r)return x(e,r,t);const n=await Object(a["d"])(Object(o["default"])(e,Object(s["u"])(t)));if(!0===n.ok)return n.value.data;Object(c["v"])(n.error),y(n.error)}async function x(e,t,r){const o=await Object(a["d"])(t.request(e,"json",r));if(!0===o.ok)return o.value;Object(c["v"])(o.error),y(o.error.details.url)}function y(e){throw new n["a"]("","Request for object resource failed: "+e)}function O(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(b.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(b.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(b.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(b.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else b.warn("Indexed geometries must specify faces"),o=!1;break}default:b.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(b.warn("Geometry requires material"),o=!1);const a=e.params.vertexAttributes;for(const n in a)a[n].values||(b.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function T(e,t){const r=[],o=[],a=[],n=[],i=e.resource,c=l["a"].parse(i.version||"1.0","wosr");j.validate(c);const u=i.model.name,m=i.model.geometries,b=i.materialDefinitions,h=e.textures;let g=0;const x=new Map;for(let l=0;l<m.length;l++){const e=m[l];if(!O(e))continue;const i=S(e),c=e.params.vertexAttributes,u=[];for(const t in c){const e=c[t],r=e.values;u.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const y=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)y.push([e,new Uint32Array(t[e].values)])}const T=h&&h[i.texture];if(T&&!x.has(i.texture)){const{image:e,params:t}=T,r=new p["a"](e,t);n.push(r),x.set(i.texture,r)}const C=x.get(i.texture),w=C?C.id:void 0;let j=a[i.material]?a[i.material][i.texture]:null;if(!j){const e=b[i.material.substring(i.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=T&&T.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n=T?M(T.alphaChannelUsage):void 0,c={ambient:Object(d["g"])(e.diffuse),diffuse:Object(d["g"])(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:w,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!T&&!!T.params.preMultiplyAlpha};Object(s["l"])(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),j=new v["a"](c),a[i.material]||(a[i.material]={}),a[i.material][i.texture]=j}o.push(j);const _=new f["a"](u,y);g+=y.position?y.position.length:0,r.push(_)}return{name:u,stageResources:{textures:n,materials:o,geometries:r},pivotOffset:i.model.pivotOffset,boundingBox:C(r),numberOfVertices:g,lodThreshold:null}}function C(e){const t=Object(u["k"])();return e.forEach(e=>{const r=e.boundingInfo;Object(s["l"])(r)&&(Object(u["r"])(t,r.getBBMin()),Object(u["r"])(t,r.getBBMax()))}),t}async function w(e,t){const r=[];for(const n in e){const o=e[n],a=o.images[0].data;if(!a){b.warn("Externally referenced texture data is not yet supported");continue}const i=o.encoding+";base64,"+a,c="/textureDefinitions/"+n,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",d={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:1!==M(l)},u=Object(s["l"])(t)&&t.disableTextures?Promise.resolve(null):Object(m["a"])(i,t);r.push(u.then(e=>({refId:c,image:e,params:d,alphaChannelUsage:l})))}const o=await Promise.all(r),a={};for(const n of o)a[n.refId]=n;return a}function M(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;default:return 0}}function S(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const j=new l["a"](1,2,"wosr")},2906:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e,t){const r=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(o["a"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===a?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(o["a"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===a&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(o["a"]`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(o["a"]`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}},"2b60":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r("2eab"),a=r("792b"),n=r("ce50"),i=r("b2b2"),s=r("f4cc"),c=r("e041");class l{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return Object(c["u"])(e)?(Object(s["w"])(t),Object(c["j"])(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(Object(i["k"])(this.streamDataRequester))return(await Object(o["default"])(t,{responseType:d[e]})).data;const c=await Object(a["d"])(this.streamDataRequester.request(t,e,r));if(!0===c.ok)return c.value;throw Object(s["v"])(c.error),new n["a"]("","Request for resource failed: "+c.error)}}const d={image:"image",binary:"array-buffer",json:"json"}},3626:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("4377"),a=r("3886");function n(e){e.include(o["a"]),e.code.add(a["a"]`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a["a"].int(1)}) {
        return allMixed;
      }
      else if (mode == ${a["a"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${a["a"].int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${a["a"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${a["a"].int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},"3c3b":function(e,t,r){"use strict";r.d(t,"a",(function(){return V}));var o=r("b2b2"),a=r("afe1"),n=r("ce50"),i=r("e92d");const s=i["a"].getLogger("esri.views.3d.glTF");class c{error(e){throw new n["a"]("gltf-loader-error",e)}errorUnsupported(e){throw new n["a"]("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){s.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}}function l(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function d(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}var u=r("6c97"),m=r("28eb"),f=r("e041"),p=r("549a"),v=r("d791"),b=r("04f0"),h=r("b139"),g=r("8190"),x=r("7cfb");class y{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const O={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},T={pbrMetallicRoughness:O,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},C={ESRI_externalColorMixMode:"tint"},w=(e={})=>{const t={...O,...e.pbrMetallicRoughness},r=M({...C,...e.extras});return{...T,...e,pbrMetallicRoughness:t,extras:r}};function M(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(u["a"])(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}const S={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},j=e=>({...S,...e});function _(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,(e,o,a)=>(t=o||"",r=a||"","")),{dirPart:t,filePart:r}}const A={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class R{constructor(e,t,r,o,a){this.context=e,this.errorContext=t,this.uri=r,this.json=o,this.glbBuffer=a,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=_(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==o.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==o.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==o.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,o){if(Object(f["u"])(r)){const o=Object(f["i"])(r);if("model/gltf-binary"!==o.mediaType)try{const a=JSON.parse(o.isBase64?atob(o.data):o.data);return new R(e,t,r,a)}catch{}const a=Object(f["j"])(r);if(R.isGLBData(a))return this.fromGLBData(e,t,r,a)}if(r.endsWith(".gltf")){const a=await e.loadJSON(r,o);return new R(e,t,r,a)}const a=await e.loadBinary(r,o);if(R.isGLBData(a))return this.fromGLBData(e,t,r,a);const n=await e.loadJSON(r,o);return new R(e,t,r,n)}static isGLBData(e){const t=new y(e);return t.remainingBytes()>=4&&t.readUint32()===A.MAGIC}static async fromGLBData(e,t,r,o){const a=await R.parseGLBData(t,o);return new R(e,t,r,a.json,a.binaryData)}static async parseGLBData(e,t){const r=new y(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const o=r.readUint32(),a=r.readUint32(),n=r.readUint32();e.assert(o===A.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=n,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==a,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),o=r.readUint32();0===c?(e.assert(o===A.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await N(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(o!==A.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],o=this.errorContext;if(null==r.uri)return o.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const a=await this.getBufferLoader(e,t);return o.assert(a.byteLength===r.byteLength,"Buffer byte lengths should match."),a}async getBufferLoader(e,t){const r=this.bufferLoaders.get(e);if(r)return r;const o=this.json.buffers[e],a=this.context.loadBinary(this.resolveUri(o.uri),t).then(e=>new Uint8Array(e));return this.bufferLoaders.set(e,a),a}async getAccessor(e,t){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const o=this.json.accessors[e];r.errorUnsupportedIf(null==(null==o?void 0:o.bufferView),"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(o.type in["MAT2","MAT3","MAT4"],`AttributeType ${o.type} is not supported`);const a=this.json.bufferViews[o.bufferView],n=await this.getBuffer(a.buffer,t),i=I[o.type],s=L[o.componentType],c=i*s,l=a.byteStride||c;return{raw:n.buffer,byteStride:l,byteOffset:n.byteOffset+(a.byteOffset||0)+(o.byteOffset||0),entryCount:o.count,isDenselyPacked:l===c,componentCount:i,componentByteSize:s,componentType:o.componentType,min:o.min,max:o.max,normalized:!!o.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Object(x["a"])(this.wrapAccessor(g["l"],r));case 5123:return Object(x["a"])(this.wrapAccessor(g["j"],r));case 5125:return Object(x["a"])(this.wrapAccessor(g["k"],r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const o=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+z[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(g["u"],o)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const o=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+z[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(g["u"],o)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const o=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+z[o.componentType]),r.errorUnsupportedIf(4!==o.componentCount,"TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed()),new g["C"](o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(g["m"],o):(r.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),F(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const o=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==o.componentCount&&3!==o.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed()),4===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(g["C"],o);if(5121===o.componentType)return this.wrapAccessor(g["J"],o);if(5123===o.componentType)return this.wrapAccessor(g["H"],o)}else if(3===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(g["u"],o);if(5121===o.componentType)return this.wrapAccessor(g["B"],o);if(5123===o.componentType)return this.wrapAccessor(g["z"],o)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+z[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let o=this.materialCache.get(e.material);if(!o){const a=null!=e.material?w(this.json.materials[e.material]):w(),n=a.pbrMetallicRoughness,i=this.hasVertexColors(e),s=this.getTexture(n.baseColorTexture,t),c=this.getTexture(a.normalTexture,t),l=r?this.getTexture(a.occlusionTexture,t):null,d=r?this.getTexture(a.emissiveTexture,t):null,u=r?this.getTexture(n.metallicRoughnessTexture,t):null,m=null!=e.material?e.material:-1;o={alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,color:n.baseColorFactor,doubleSided:!!a.doubleSided,colorTexture:await s,normalTexture:await c,name:a.name,id:m,occlusionTexture:await l,emissiveTexture:await d,emissiveFactor:a.emissiveFactor,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,metallicRoughnessTexture:await u,vertexColors:i,ESRI_externalColorMixMode:a.extras.ESRI_externalColorMixMode}}return o}async getTexture(e,t){if(!e)return null;this.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const r=e.index,o=this.errorContext,a=this.json.textures[r],n=j(null!=a.sampler?this.json.samplers[a.sampler]:{});o.errorUnsupportedIf(null==a.source,"Source is expected to be defined for a texture.");const i=this.json.images[a.source],s=await this.loadTextureImageData(r,a,t);return Object(m["b"])(this.textureCache,r,()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(o.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return{data:s,wrapS:e(n.wrapS)?n.wrapS:t(n.wrapS),wrapT:e(n.wrapT)?n.wrapT:t(n.wrapT),minFilter:n.minFilter,name:i.name,id:r}})}getNodeTransform(e){if(void 0===e)return B;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=Object(v["n"])(Object(a["d"])(),r,o.matrix):o.translation||o.rotation||o.scale?(t=Object(a["c"])(r),o.translation&&Object(v["b"])(t,t,o.translation),o.rotation&&(E[3]=Object(b["c"])(E,o.rotation),Object(v["f"])(t,t,E[3],E)),o.scale&&Object(v["g"])(t,t,o.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(f["A"])(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=p["a"].parse(this.json.asset.version,"glTF");P.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(e=>{this.nodeParentMap.set(e,t)})})}async loadTextureImageData(e,t,r){const o=this.textureLoaders.get(e);if(o)return o;const a=this.createTextureLoader(t,r);return this.textureLoaders.set(e,a),a}async createTextureLoader(e,t){const r=this.json.images[e.source];if(r.uri)return this.context.loadImage(this.resolveUri(r.uri),t);const o=this.errorContext;o.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),o.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const a=this.json.bufferViews[r.bufferView],n=await this.getBuffer(a.buffer,t);return o.errorUnsupportedIf(null!=a.byteStride,"byteStride not supported for image buffer"),D(new Uint8Array(n.buffer,n.byteOffset+(a.byteOffset||0),a.byteLength),r.mimeType)}}const P=new p["a"](2,0,"glTF"),B=Object(v["v"])(Object(a["d"])(),Math.PI/2),E=Object(h["b"])(),I={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},L={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function F(e){switch(e.componentType){case 5120:return new g["q"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new g["t"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new g["o"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new g["r"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new g["s"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new g["m"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Object(u["a"])(e.componentType)}}async function N(e){return new Promise((t,r)=>{const o=new Blob([e]),a=new FileReader;a.onload=()=>{const e=a.result;t(JSON.parse(e))},a.onerror=e=>{r(e)},a.readAsText(o)})}async function D(e,t){return new Promise((r,o)=>{const a=new Blob([e],{type:t}),n=URL.createObjectURL(a),i=new Image;i.addEventListener("load",()=>{URL.revokeObjectURL(n),"decode"in i?i.decode().then(()=>r(i),()=>r(i)):r(i)}),i.addEventListener("error",e=>{URL.revokeObjectURL(n),o(e)}),i.src=n})}const z={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let U=0;async function V(e,t,r={},n=!0){const i=await R.load(e,q,t,r),s="gltf_"+U++,c={lods:[],materials:new Map,textures:new Map,meta:G(i)},l=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type),d=new Map;await $(i,async(e,t,l,u)=>{var m;const f=null!=(m=d.get(l))?m:0;d.set(l,f+1);const p=void 0!==e.mode?e.mode:4,v=4===p||5===p||6===p?p:null;if(Object(o["k"])(v))return void q.warnUnsupported("Unsupported primitive mode ("+J[p]+"). Skipping primitive.");if(!i.hasPositions(e))return void q.warn("Skipping primitive without POSITION vertex attribute.");const b=i.getPositionData(e,r),h=i.getMaterial(e,r,n),g=i.hasNormals(e)?i.getNormalData(e,r):null,x=i.hasTangents(e)?i.getTangentData(e,r):null,y=i.hasTextureCoordinates(e)?i.getTextureCoordinates(e,r):null,O=i.hasVertexColors(e)?i.getVertexColors(e,r):null,T=i.getIndexData(e,r),C={transform:Object(a["c"])(t),attributes:{position:await b,normal:g?await g:null,texCoord0:y?await y:null,color:O?await O:null,tangent:x?await x:null},indices:await T,primitiveType:v,material:H(c,await h,s)};let w=null;Object(o["l"])(c.meta)&&Object(o["l"])(c.meta.ESRI_lod)&&"screenSpaceRadius"===c.meta.ESRI_lod.metric&&(w=c.meta.ESRI_lod.thresholds[l]),c.lods[l]=c.lods[l]||{parts:[],name:u,lodThreshold:w},c.lods[l].parts[f]=C});for(const o of c.lods)o.parts=o.parts.filter(e=>!!e);return{model:c,meta:{isEsriSymbolResource:l,uri:i.uri},customMeta:{}}}function G(e){const t=e.json;let r=null;return t.nodes.forEach(e=>{const t=e.extras;Object(o["l"])(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)}),r}async function $(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,a=o.length>1,n=[];for(const s of o){const e=r.nodes[s];n.push(i(s,0)),k(e)&&!a&&e.extensions.MSFT_lod.ids.forEach((e,t)=>i(e,t+1))}async function i(o,a){const s=r.nodes[o],c=e.getNodeTransform(o);if(q.warnUnsupportedIf(null!=s.weights,"Morph targets are not supported."),null!=s.mesh){const e=r.meshes[s.mesh];for(const r of e.primitives)n.push(t(r,c,a,e.name))}for(const e of s.children||[])n.push(i(e,a))}await Promise.all(n)}function k(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function H(e,t,r){const o=t=>{const o=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const r=d(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:W.some(e=>e===t.minFilter),noUnpackFlip:!0});e.textures.set(o,r)}return o},a=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(a)){const r=l({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(a,r)}return a}const q=new c,W=[9987,9985],J=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},"49b8":function(e,t,r){"use strict";function o(e){return e=e||globalThis.location.hostname,l.some(t=>{var r;return null!=(null==(r=e)?void 0:r.match(t))})}function a(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(n)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(i)||null!=t.match(c)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return o}));const n=/^devext.arcgis.com$/,i=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,c=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n,i,/^jsapps.esri.com$/,s,c]},"4c96":function(e,t,r){"use strict";function o(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*i;for(let d=0;d<s;++d)o[c]=n[l],o[c+1]=n[l+1],o[c+2]=n[l+2],c+=a,l+=i}function a(e,t,r,o,a){var n,i;const s=e.typedBuffer,c=e.typedBufferStride,l=null!=(n=null==a?void 0:a.count)?n:e.count;let d=(null!=(i=null==a?void 0:a.dstIndex)?i:0)*c;for(let u=0;u<l;++u)s[d]=t,s[d+1]=r,s[d+2]=o,d+=c}r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));Object.freeze({__proto__:null,copy:o,fill:a})},5211:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o["a"]`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}},"549a":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("ce50");class a{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new o["a"](t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new a(this.major,this.minor,this._context)}static parse(e,t=""){const[r,n]=e.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new o["a"]((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!n||!n.match||!n.match(i))throw new o["a"]((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),c=parseInt(n,10);return new a(s,c,t)}}},5876:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){e.vertex.code.add(o["a"]`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o["a"].int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o["a"].int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o["a"].int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o["a"].int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},6415:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("e92d");const a=o["a"].getLogger("esri.views.3d.support.buffer.math")},"668b":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return a}));var o=r("6415");function a(e,t,r){if(e.count!==t.count)return void o["a"].error("source and destination buffers need to have the same number of elements");const a=e.count,n=r[0],i=r[1],s=r[2],c=r[4],l=r[5],d=r[6],u=r[8],m=r[9],f=r[10],p=r[12],v=r[13],b=r[14],h=e.typedBuffer,g=e.typedBufferStride,x=t.typedBuffer,y=t.typedBufferStride;for(let o=0;o<a;o++){const e=o*g,t=o*y,r=x[t],a=x[t+1],O=x[t+2];h[e]=n*r+c*a+u*O+p,h[e+1]=i*r+l*a+m*O+v,h[e+2]=s*r+d*a+f*O+b}}function n(e,t,r){if(e.count!==t.count)return void o["a"].error("source and destination buffers need to have the same number of elements");const a=e.count,n=r[0],i=r[1],s=r[2],c=r[3],l=r[4],d=r[5],u=r[6],m=r[7],f=r[8],p=e.typedBuffer,v=e.typedBufferStride,b=t.typedBuffer,h=t.typedBufferStride;for(let o=0;o<a;o++){const e=o*v,t=o*h,r=b[t],a=b[t+1],g=b[t+2];p[e]=n*r+c*a+u*g,p[e+1]=i*r+l*a+m*g,p[e+2]=s*r+d*a+f*g}}function i(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,n=e.typedBufferStride,i=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*n,t=c*s;a[e]=r*i[t],a[e+1]=r*i[t+1],a[e+2]=r*i[t+2]}}function s(e,t){const r=Math.min(e.count,t.count),o=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,i=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*a,t=s*i,r=n[t],c=n[t+1],l=n[t+2],d=Math.sqrt(r*r+c*c+l*l);if(d>0){const t=1/d;o[e]=t*r,o[e+1]=t*c,o[e+2]=t*l}}}function c(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,n=e.typedBufferStride,i=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*n,t=c*s;a[e]=i[t]>>r,a[e+1]=i[t+1]>>r,a[e+2]=i[t+2]>>r}}Object.freeze({__proto__:null,transformMat4:a,transformMat3:n,scale:i,normalize:s,shiftRight:c})},"6a21":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));var o=r("c120"),a=r("3886");function n({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(a["a"]`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(a["a"]`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function i(e){return!!Object(o["a"])("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},"6cb2":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("5876"),a=r("3886");function n(e,t){t.symbolColor?(e.include(o["a"]),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(a["a"]`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(a["a"]`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},7088:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(o["a"]`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(o["a"]`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},"7cb4":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("dfaf"),a=r("5211"),n=r("3886");function i(e,t){e.include(o["a"],t),e.fragment.code.add(n["a"]`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(n["a"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),2===t.attributeTextureCoordinates&&(e.include(a["a"]),e.fragment.code.add(n["a"]`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},"7cfb":function(e,t,r){"use strict";function o(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*i;for(let d=0;d<s;++d)o[c]=n[l],c+=a,l+=i}function a(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}r.d(t,"a",(function(){return a}));Object.freeze({__proto__:null,copy:o,makeDense:a})},"7d11":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("c332"),a=r("bc40"),n=r("3886");function i(e,t){0===t.normalType||1===t.normalType?(e.include(o["a"],t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(n["a"]`void forwardNormal() {
vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
}`)):2===t.normalType?(e.include(a["a"],t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(n["a"]`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?n["a"]`normalize(vPositionWorldCameraRelative);`:n["a"]`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(n["a"]`void forwardNormal() {}`)}!function(e){function t(e,t){e.setUniformMatrix4fv("viewNormal",t)}e.bindUniforms=t}(i||(i={}))},"7e21":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var o=r("d272"),a=r("4db9"),n=r("c332"),i=r("dfaf"),s=r("7d11"),c=r("c2d1"),l=r("6a07"),d=r("be24"),u=r("ebd5"),m=r("3886");function f(e,t){const r=e.vertex.code,f=e.fragment.code;1!==t.output&&3!==t.output||(e.include(a["a"],{linearDepth:!0}),e.include(i["a"],t),e.include(d["a"],t),e.include(c["a"],t),e.include(o["a"],t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(m["a"]`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
forwardTextureCoordinates();
}`),e.include(u["a"],t),f.add(m["a"]`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?m["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(a["a"],{linearDepth:!1}),e.include(n["a"],t),e.include(s["a"],t),e.include(i["a"],t),e.include(d["a"],t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(m["a"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?m["a"]`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(o["a"],t),e.include(u["a"],t),f.add(m["a"]`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?m["a"]`
            vec3 normal = screenDerivativeNormal(vPositionView);`:m["a"]`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(a["a"],{linearDepth:!1}),e.include(i["a"],t),e.include(d["a"],t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(m["a"]`void main(void) {
vpos = calculateVPos();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(o["a"],t),e.include(u["a"],t),e.include(l["a"]),f.add(m["a"]`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?m["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},"7e2d":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("c6ac");function a(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*i;for(let d=0;d<s;++d){for(let e=0;e<9;++e)o[c+e]=n[l+e];c+=a,l+=i}}Object.freeze({__proto__:null,copy:a});function n(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*i;for(let d=0;d<s;++d){for(let e=0;e<16;++e)o[c+e]=n[l+e];c+=a,l+=i}}Object.freeze({__proto__:null,copy:n});r("7cfb"),r("dc56"),r("4c96"),r("1c20");function i(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Object(o["a"])(e.ElementType)))}},"94a6":function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return j})),r.d(t,"gltfToEngineResources",(function(){return A})),r.d(t,"parseUrl",(function(){return _}));var o=r("49b8"),a=r("b2b2"),n=r("1c92"),i=r("dae5"),s=r("d791"),c=r("afe1"),l=r("e431"),d=r("0b2d"),u=r("4261"),m=r("8190"),f=r("668b"),p=r("e4c1"),v=r("7e2d"),b=r("2b60"),h=r("3c3b"),g=r("087c"),x=r("22f5"),y=r("0278"),O=r("1e2c"),T=r("dbad"),C=r("0613"),w=r("dc56"),M=r("1c20"),S=r("4c96");async function j(e,t){const r=_(Object(o["a"])(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Object(x["a"])(r.url,t)),o=Object(x["b"])(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const n=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Object(h["a"])(new b["a"](t.streamDataRequester),r.url,t,t.usePBR)),i=Object(a["j"])(n.model.meta,"ESRI_proxyEllipsoid");n.meta.isEsriSymbolResource&&Object(a["l"])(i)&&-1!==n.meta.uri.indexOf("/RealisticTrees/")&&B(n,i);const s=n.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:n.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},c={...t.materialParamsMixin,treeRendering:n.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=A(n,s,c,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=A(n,s,c,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}const l=A(n,s,c);return{lods:l,referenceBoundingBox:l[0].boundingBox,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1,remove:n.remove}}function _(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function A(e,t,r,o){const s=e.model,c=Object(i["b"])(),l=new Array,d=new Map,b=new Map;return s.lods.forEach((e,i)=>{if(void 0!==o&&i!==o)return;const h={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(a["l"])(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(u["k"])()};l.push(h),e.parts.forEach(e=>{const o=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),i=s.materials.get(e.material),l=Object(a["l"])(e.attributes.texCoord0),g=Object(a["l"])(e.attributes.normal),x=R(i.alphaMode);if(!d.has(o)){if(l){if(Object(a["l"])(i.textureColor)&&!b.has(i.textureColor)){const e=s.textures.get(i.textureColor),t={...e.parameters,preMultiplyAlpha:1!==x};b.set(i.textureColor,new O["a"](e.data,t))}if(Object(a["l"])(i.textureNormal)&&!b.has(i.textureNormal)){const e=s.textures.get(i.textureNormal);b.set(i.textureNormal,new O["a"](e.data,e.parameters))}if(Object(a["l"])(i.textureOcclusion)&&!b.has(i.textureOcclusion)){const e=s.textures.get(i.textureOcclusion);b.set(i.textureOcclusion,new O["a"](e.data,e.parameters))}if(Object(a["l"])(i.textureEmissive)&&!b.has(i.textureEmissive)){const e=s.textures.get(i.textureEmissive);b.set(i.textureEmissive,new O["a"](e.data,e.parameters))}if(Object(a["l"])(i.textureMetallicRoughness)&&!b.has(i.textureMetallicRoughness)){const e=s.textures.get(i.textureMetallicRoughness);b.set(i.textureMetallicRoughness,new O["a"](e.data,e.parameters))}}const n=i.color[0]**(1/C["a"]),c=i.color[1]**(1/C["a"]),u=i.color[2]**(1/C["a"]),m=i.emissiveFactor[0]**(1/C["a"]),f=i.emissiveFactor[1]**(1/C["a"]),p=i.emissiveFactor[2]**(1/C["a"]),v=Object(a["l"])(i.textureColor)&&l?b.get(i.textureColor):null;d.set(o,new T["a"]({...t,transparent:0===x,textureAlphaMode:x,textureAlphaCutoff:i.alphaCutoff,diffuse:[n,c,u],ambient:[n,c,u],opacity:i.opacity,doubleSided:i.doubleSided,doubleSidedType:"winding-order",cullFace:i.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:g?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(a["l"])(v)?v.id:void 0,colorMixMode:i.colorMixMode,normalTextureId:Object(a["l"])(i.textureNormal)&&l?b.get(i.textureNormal).id:void 0,textureAlphaPremultiplied:Object(a["l"])(v)&&!!v.params.preMultiplyAlpha,occlusionTextureId:Object(a["l"])(i.textureOcclusion)&&l?b.get(i.textureOcclusion).id:void 0,emissiveTextureId:Object(a["l"])(i.textureEmissive)&&l?b.get(i.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(a["l"])(i.textureMetallicRoughness)&&l?b.get(i.textureMetallicRoughness).id:void 0,emissiveFactor:[m,f,p],mrrFactors:[i.metallicFactor,i.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const j=P(e.indices||e.attributes.position.count,e.primitiveType),_=e.attributes.position.count,A=Object(v["a"])(m["u"],_);Object(f["e"])(A,e.attributes.position,e.transform);const B=[["position",{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],E=[["position",j]];if(Object(a["l"])(e.attributes.normal)){const t=Object(v["a"])(m["u"],_);Object(n["a"])(c,e.transform),Object(f["a"])(t,e.attributes.normal,c),B.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),E.push(["normal",j])}if(Object(a["l"])(e.attributes.tangent)){const t=Object(v["a"])(m["C"],_);Object(n["a"])(c,e.transform),Object(p["c"])(t,e.attributes.tangent,c),B.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),E.push(["tangent",j])}if(Object(a["l"])(e.attributes.texCoord0)){const t=Object(v["a"])(m["m"],_);Object(w["b"])(t,e.attributes.texCoord0),B.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),E.push(["uv0",j])}if(Object(a["l"])(e.attributes.color)){const t=Object(v["a"])(m["J"],_);if(4===e.attributes.color.elementCount)e.attributes.color instanceof m["C"]?Object(p["b"])(t,e.attributes.color,255):e.attributes.color instanceof m["J"]?Object(M["a"])(t,e.attributes.color):e.attributes.color instanceof m["H"]&&Object(p["b"])(t,e.attributes.color,1/256);else{Object(M["b"])(t,255,255,255,255);const r=new m["B"](t.buffer,0,4);e.attributes.color instanceof m["u"]?Object(f["d"])(r,e.attributes.color,255):e.attributes.color instanceof m["B"]?Object(S["a"])(r,e.attributes.color):e.attributes.color instanceof m["z"]&&Object(f["d"])(r,e.attributes.color,1/256)}B.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),E.push(["color",j])}const I=new y["a"](B,E);h.stageResources.geometries.push(I),h.stageResources.materials.push(d.get(o)),l&&(Object(a["l"])(i.textureColor)&&h.stageResources.textures.push(b.get(i.textureColor)),Object(a["l"])(i.textureNormal)&&h.stageResources.textures.push(b.get(i.textureNormal)),Object(a["l"])(i.textureOcclusion)&&h.stageResources.textures.push(b.get(i.textureOcclusion)),Object(a["l"])(i.textureEmissive)&&h.stageResources.textures.push(b.get(i.textureEmissive)),Object(a["l"])(i.textureMetallicRoughness)&&h.stageResources.textures.push(b.get(i.textureMetallicRoughness))),h.numberOfVertices+=_;const L=I.boundingInfo;Object(a["l"])(L)&&(Object(u["r"])(h.boundingBox,L.getBBMin()),Object(u["r"])(h.boundingBox,L.getBBMax()))})}),l}function R(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":case null:case void 0:return 1}}function P(e,t){switch(t){case 4:return Object(g["c"])(e);case 5:return Object(g["b"])(e);case 6:return Object(g["a"])(e)}}function B(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const n of o.parts){const o=n.attributes.normal;if(Object(a["k"])(o))return;const i=n.attributes.position,u=i.count,f=Object(d["f"])(),p=Object(d["f"])(),b=Object(d["f"])(),h=Object(v["a"])(m["J"],u),g=Object(v["a"])(m["u"],u),x=Object(s["c"])(Object(c["d"])(),n.transform);for(let a=0;a<u;a++){i.getVec(a,p),o.getVec(a,f),Object(l["t"])(p,p,n.transform),Object(l["m"])(b,p,t.center),Object(l["e"])(b,b,t.radius);const s=b[2],c=Object(l["s"])(b),d=Math.min(.45+.55*c*c,1);Object(l["e"])(b,b,t.radius),Object(l["t"])(b,b,x),Object(l["u"])(b,b),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(l["l"])(b,b,f,s>-1?.2:Math.min(-4*s-3.8,1)),g.setVec(a,b),h.set(a,0,255*d),h.set(a,1,255*d),h.set(a,2,255*d),h.set(a,3,255)}n.attributes.normal=g,n.attributes.color=h}}}},a7d7:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c}));var o=r("47f8"),a=r("7cb4"),n=r("3886");const i=Object(o["d"])(0,.6,.2);function s(e,t){const r=e.fragment,o=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&o&&e.include(a["a"],t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(n["a"]`float getBakedOcclusion() { return 1.0; }`),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(n["a"]`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(n["a"]`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(n["a"]`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(n["a"]`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(n["a"]`float getBakedOcclusion() { return 1.0; }`),r.code.add(n["a"]`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(n["a"]`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function c(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}},aab5:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e,t){const r=e.fragment;r.code.add(o["a"]`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),1===t.doubleSidedMode?r.code.add(o["a"]`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`):2===t.doubleSidedMode?r.code.add(o["a"]`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`):r.code.add(o["a"]`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`)}},b09a:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){e.attributes.add("position","vec3"),e.vertex.code.add(o["a"]`vec3 positionModel() { return position; }`)}},b0ab:function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return j}));var o=r("bd75"),a=r("17ca"),n=r("d272"),i=r("4db9"),s=r("d539"),c=r("c332"),l=r("b09a"),d=r("6cb2"),u=r("dfaf"),m=r("6d5b"),f=r("17b0"),p=r("7e21"),v=r("d047"),b=r("7088"),h=r("ea4b"),g=r("c6d7"),x=r("5d5f"),y=r("a7d7"),O=r("d017"),T=r("be24"),C=r("ebd5"),w=r("3626"),M=r("3886"),S=r("690a");function j(e){const t=new S["a"],r=t.vertex.code,j=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(l["a"]),t.varyings.add("vpos","vec3"),t.include(T["a"],e),t.include(s["a"],e),t.include(f["a"],e),0!==e.output&&7!==e.output||(t.include(c["a"],e),t.include(i["a"],{linearDepth:!1}),e.offsetBackfaces&&t.include(a["a"]),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(u["a"],e),t.include(o["a"],e),t.include(d["a"],e),t.include(m["a"],e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(M["a"]`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${M["a"].float(C["c"])}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          ${e.multipassTerrainEnabled?M["a"]`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(n["a"],e),t.include(C["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(v["a"]),t.include(g["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(w["a"]),j.add(M["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?M["a"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?M["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:M["a"]`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?M["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:M["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n["a"],e),t.include(h["a"],e),t.include(b["a"],e),t.include(C["a"],e),e.receiveShadows&&t.include(O["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(v["a"]),t.include(g["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(y["b"],e),t.include(x["a"],e),t.fragment.include(w["a"]),j.add(M["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?M["a"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?M["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:M["a"]`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?M["a"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:M["a"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${M["a"]`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?M["a"]`vec3 normalGround = normalize(vpos + localOrigin);`:M["a"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:M["a"]``}
        ${1===e.pbrMode||2===e.pbrMode?M["a"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(p["a"],e),t}const _=Object.freeze({__proto__:null,build:j})},bc40:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r("dae5"),a=r("afe1"),n=r("0b2d"),i=r("b09a"),s=r("6a21"),c=r("3886");function l(e,t){e.include(i["a"]),e.vertex.include(s["a"],t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(c["a"]`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
uTransform_WorldFromModel_TL,
uTransform_WorldFromModel_TH,
-uTransform_WorldFromView_TL,
-uTransform_WorldFromView_TH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(c["a"]`vec3 positionWorld() {
return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
}`)}!function(e){class t{constructor(){this.worldFromModel_RS=Object(o["b"])(),this.worldFromModel_TH=Object(n["f"])(),this.worldFromModel_TL=Object(n["f"])()}}e.ModelTransform=t;class r{constructor(){this.worldFromView_TH=Object(n["f"])(),this.worldFromView_TL=Object(n["f"])(),this.viewFromCameraRelative_RS=Object(o["b"])(),this.projFromView=Object(a["d"])()}}function i(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)}function s(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}e.ViewProjectionTransform=r,e.bindModelTransform=i,e.bindViewProjTransform=s}(l||(l={}))},c332:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("3886");function a(e){const t=o["a"]`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}function n(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(o["a"]`vec3 normalModel() {
return normal;
}`)),1===t.normalType&&(e.include(a),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(o["a"]`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o["a"]`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}},d539:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r("0b2d"),a=r("6a21"),n=r("3886"),i=r("9cc4");function s(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(a["a"],t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[n["a"]`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,n["a"]`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?n["a"]`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,n["a"]`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,n["a"]`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?n["a"]`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:n["a"]``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){class t{}function r(e,t){Object(i["b"])(t,c,l,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",l)}e.Uniforms=t,e.bindCustomOrigin=r}(s||(s={}));const c=Object(o["f"])(),l=Object(o["f"])()},d56e:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("3886"),a=r("1956");function n(e,t){const r=o["a"]`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `;Object(a["c"])()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},dbad:function(e,t,r){"use strict";r.d(t,"a",(function(){return D})),r.d(t,"b",(function(){return $}));var o=r("dae5"),a=r("e431"),n=r("0b2d"),i=r("fc00"),s=r("ebd5"),c=r("68af"),l=r("35b3"),d=r("7438"),u=r("89bf"),m=r("5957"),f=r("7c51"),p=r("a4ee"),v=r("d272"),b=r("d539"),h=r("17b0"),g=r("6a07"),x=r("c6d7"),y=r("a7d7"),O=r("d017"),T=r("be24"),C=r("6a21"),w=r("8e97"),M=r("c3a4"),S=r("ca98"),j=r("da35"),_=r("fa1e"),A=r("c829"),R=r("87b7"),P=r("0310"),B=r("189c");class E extends S["a"]{initializeProgram(e){const t=E.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(C["b"])(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new A["a"](e.rctx,o,_["a"])}bindPass(e,t){var r,o;Object(w["c"])(this.program,t.camera.projectionMatrix);const a=this.configuration.output;(1===this.configuration.output||t.multipassTerrainEnabled||3===a)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),Object(x["a"])(this.program,t)),7===a&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",f["b"][e.colorMixMode])),0===a?(t.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",f["b"][e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&Object(y["c"])(this.program,e,this.configuration.isSchematic)):4===a&&Object(g["b"])(this.program,t),Object(T["c"])(this.program,e),Object(h["b"])(this.program,e,t),Object(f["a"])(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==e.textureAlphaMode&&3!==e.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(o=t.ssaoHelper)||o.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(n["h"])(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;Object(w["e"])(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&Object(w["a"])(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&b["a"].bindCustomOrigin(this.program,t),Object(v["b"])(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&Object(O["d"])(this.program,e,t)}setPipeline(e,t){const r=this.configuration,o=3===e,a=2===e;return Object(B["g"])({blending:0!==r.output&&7!==r.output||!r.transparent?null:o?d["g"]:Object(d["a"])(e),culling:I(r)&&Object(B["c"])(r.cullFace),depthTest:{func:Object(d["b"])(e)},depthWrite:o||a?r.writeDepth&&B["e"]:null,colorWrite:B["d"],stencilWrite:r.sceneHasOcludees?R["j"]:null,stencilTest:r.sceneHasOcludees?t?R["f"]:R["e"]:null,polygonOffset:o||a?null:Object(d["h"])(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function I(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}E.shader=new M["a"](P["a"],()=>r.e("chunk-2d0cb6c5").then(r.bind(null,"4a35")));class L extends j["a"]{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1}}Object(p["a"])([Object(j["b"])({count:8})],L.prototype,"output",void 0),Object(p["a"])([Object(j["b"])({count:4})],L.prototype,"alphaDiscardMode",void 0),Object(p["a"])([Object(j["b"])({count:3})],L.prototype,"doubleSidedMode",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"isSchematic",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"vertexColors",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"offsetBackfaces",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"symbolColors",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"vvSize",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"vvColor",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"verticalOffset",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"receiveShadows",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"slicePlaneEnabled",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"sliceHighlightDisabled",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"receiveAmbientOcclusion",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"screenSizePerspective",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"textureAlphaPremultiplied",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"hasColorTexture",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"usePBR",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"hasEmissionTexture",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"hasOcclusionTexture",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"hasNormalTexture",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"instanced",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"instancedColor",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"instancedDoublePrecision",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"vertexTangents",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"normalsTypeDerivate",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"writeDepth",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"sceneHasOcludees",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"transparent",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"enableOffset",void 0),Object(p["a"])([Object(j["b"])({count:3})],L.prototype,"cullFace",void 0),Object(p["a"])([Object(j["b"])({count:4})],L.prototype,"transparencyPassType",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"multipassTerrainEnabled",void 0),Object(p["a"])([Object(j["b"])()],L.prototype,"cullAboveGround",void 0);var F=r("b0ab");class N extends E{initializeProgram(e){const t=N.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(C["b"])(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new A["a"](e.rctx,o,_["a"])}}N.shader=new M["a"](F["a"],()=>r.e("chunk-2d0ab897").then(r.bind(null,"1662")));class D extends l["a"]{constructor(e){super(e,U),this.supportsEdges=!0,this.techniqueConfig=new L,this.vertexBufferLayout=G(this.parameters),this.instanceBufferLayout=e.instanced?$(this.parameters):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,o=e.symbolColors,a=!!t&&t.indexOf("color")>-1,n=e.vvColorEnabled,i="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(a||n||o)?!!i||s:r?i?c:s:a||n||o?!!i||s:i?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?0:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?1:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<d["e"]),this.techniqueConfig}intersect(e,t,r,o,n,i,s){if(null!==this.parameters.verticalOffset){const e=o.camera;Object(a["z"])(X,r[12],r[13],r[14]);let t=null;switch(o.viewingMode){case 1:t=Object(a["u"])(W,X);break;case 2:t=Object(a["n"])(W,q)}let s=0;if(null!==this.parameters.verticalOffset){const r=Object(a["m"])(Q,X,e.eye),o=Object(a["s"])(r),n=Object(a["h"])(r,r,1/o);let i=null;this.parameters.screenSizePerspective&&(i=Object(a["k"])(t,n)),s+=Object(f["l"])(e,o,this.parameters.verticalOffset,i,this.parameters.screenSizePerspective)}Object(a["h"])(t,t,s),Object(a["A"])(J,t,o.transform.inverseRotation),n=Object(a["m"])(k,n,J),i=Object(a["m"])(H,i,J)}Object(f["i"])(e,t,o,n,i,Object(u["d"])(o.verticalOffset),s)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?4:7:2)||20===e}createGLMaterial(e){return 0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output?new z(e):null}createBufferWriter(){return new V(this.vertexBufferLayout,this.instanceBufferLayout)}}class z extends c["a"]{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?N:E,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return 0!==this._output&&7!==this._output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const U={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:2,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(o["b"])(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:s["b"],textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...l["b"]};class V{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,o){Object(m["c"])(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,o)}}function G(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(i["a"])().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}function $(e){let t=Object(i["a"])();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}const k=Object(n["f"])(),H=Object(n["f"])(),q=Object(n["h"])(0,0,1),W=Object(n["f"])(),J=Object(n["f"])(),X=Object(n["f"])(),Q=Object(n["f"])()},dc56:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n}));var o=r("c6ac");function a(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,n=t.typedBuffer,i=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*i;for(let d=0;d<s;++d)o[c]=n[l],o[c+1]=n[l+1],c+=a,l+=i}function n(e,t,r){const n=e.typedBuffer,i=e.typedBufferStride,s=t.typedBuffer,c=t.typedBufferStride,l=r?r.count:t.count;let d=(r&&r.dstIndex?r.dstIndex:0)*i,u=(r&&r.srcIndex?r.srcIndex:0)*c;if(Object(o["b"])(t.elementType)){const e=Object(o["d"])(t.elementType);if(Object(o["c"])(t.elementType))for(let t=0;t<l;++t)n[d]=Math.max(s[u]/e,-1),n[d+1]=Math.max(s[u+1]/e,-1),d+=i,u+=c;else for(let t=0;t<l;++t)n[d]=s[u]/e,n[d+1]=s[u+1]/e,d+=i,u+=c}else a(e,t,r);return e}function i(e,t,r,o){var a,n;const i=e.typedBuffer,s=e.typedBufferStride,c=null!=(a=null==o?void 0:o.count)?a:e.count;let l=(null!=(n=null==o?void 0:o.dstIndex)?n:0)*s;for(let d=0;d<c;++d)i[l]=t,i[l+1]=r,l+=s}Object.freeze({__proto__:null,copy:a,normalizeIntegerBuffer:n,fill:i})},dea3:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(o["a"]`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}},dfaf:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(o["a"]`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(o["a"]`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),0===t.attributeTextureCoordinates&&e.vertex.code.add(o["a"]`void forwardTextureCoordinates() {}`)}},e4c1:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return n}));var o=r("6415");function a(e,t,r){if(e.count!==t.count)return void o["a"].error("source and destination buffers need to have the same number of elements");const a=e.count,n=r[0],i=r[1],s=r[2],c=r[3],l=r[4],d=r[5],u=r[6],m=r[7],f=r[8],p=r[9],v=r[10],b=r[11],h=r[12],g=r[13],x=r[14],y=r[15],O=e.typedBuffer,T=e.typedBufferStride,C=t.typedBuffer,w=t.typedBufferStride;for(let o=0;o<a;o++){const e=o*T,t=o*w,r=C[t],a=C[t+1],M=C[t+2],S=C[t+3];O[e]=n*r+l*a+f*M+h*S,O[e+1]=i*r+d*a+p*M+g*S,O[e+2]=s*r+u*a+v*M+x*S,O[e+3]=c*r+m*a+b*M+y*S}}function n(e,t,r){if(e.count!==t.count)return void o["a"].error("source and destination buffers need to have the same number of elements");const a=e.count,n=r[0],i=r[1],s=r[2],c=r[3],l=r[4],d=r[5],u=r[6],m=r[7],f=r[8],p=e.typedBuffer,v=e.typedBufferStride,b=t.typedBuffer,h=t.typedBufferStride;for(let o=0;o<a;o++){const e=o*v,t=o*h,r=b[t],a=b[t+1],g=b[t+2],x=b[t+3];p[e]=n*r+c*a+u*g,p[e+1]=i*r+l*a+m*g,p[e+2]=s*r+d*a+f*g,p[e+3]=x}}function i(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,n=e.typedBufferStride,i=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*n,t=c*s;a[e]=r*i[t],a[e+1]=r*i[t+1],a[e+2]=r*i[t+2],a[e+3]=r*i[t+3]}}function s(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,n=e.typedBufferStride,i=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*n,t=c*s;a[e]=i[t]>>r,a[e+1]=i[t+1]>>r,a[e+2]=i[t+2]>>r,a[e+3]=i[t+3]>>r}}Object.freeze({__proto__:null,transformMat4:a,transformMat3:n,scale:i,shiftRight:s})},ea4b:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var o=r("2906"),a=r("7088"),n=r("dea3"),i=r("5d5f"),s=r("c51b"),c=r("d017"),l=r("3886");function d(e,t){const r=e.fragment;e.include(n["a"]),e.include(a["a"],t),0!==t.pbrMode&&e.include(i["a"],t),e.include(o["a"],t),t.receiveShadows&&e.include(c["a"],t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(s["a"]),r.code.add(l["a"]`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(l["a"]`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${1===t.viewingMode?l["a"]`normalize(vPosWorld)`:l["a"]`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(l["a"]`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),0===t.pbrMode||4===t.pbrMode?r.code.add(l["a"]`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(l["a"]`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(l["a"]`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(l["a"]`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = abs(dot(normal, ambientDir));
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(l["a"]`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(l["a"]`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?l["a"]`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:l["a"]`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}}}]);