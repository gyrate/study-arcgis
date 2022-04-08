(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32dd8f58"],{"0310":function(e,t,r){"use strict";r.d(t,"a",(function(){return L})),r.d(t,"b",(function(){return R}));var o=r("3886"),a=r("4db9"),i=r("690a"),n=r("d272"),s=r("d047"),c=r("be24"),l=r("ebd5"),d=r("17b0"),u=r("c6d7"),f=r("d017"),m=r("bd75"),h=r("5d5f"),p=r("d539"),v=r("dfaf"),b=r("a7d7"),g=r("17ca"),x=r("c332"),y=r("b09a"),O=r("6cb2"),w=r("6d5b"),_=r("7d11"),T=r("7e21"),C=r("0d7a"),S=r("7088"),M=r("ea4b"),A=r("aab5"),j=r("d56e"),P=r("3626");function R(e){const t=new i["a"],r=t.vertex.code,R=t.fragment.code;return t.include(j["a"],{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(y["a"]),t.varyings.add("vpos","vec3"),t.include(c["a"],e),t.include(p["a"],e),t.include(d["a"],e),0!==e.output&&7!==e.output||(t.include(x["a"],e),t.include(a["a"],{linearDepth:!1}),0===e.normalType&&e.offsetBackfaces&&t.include(g["a"]),t.include(C["a"],e),t.include(_["a"],e),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("localvpos","vec3"),t.include(v["a"],e),t.include(m["a"],e),t.include(O["a"],e),t.include(w["a"],e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(o["a"]`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${o["a"].float(l["c"])}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===e.normalType?o["a"]`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===e.normalType&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===e.output&&(t.include(n["a"],e),t.include(l["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(s["a"]),t.include(u["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(P["a"]),R.add(o["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?o["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o["a"]`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?o["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n["a"],e),t.include(M["a"],e),t.include(S["a"],e),t.include(l["a"],e),e.receiveShadows&&t.include(f["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(s["a"]),t.include(u["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b["b"],e),t.include(h["a"],e),t.fragment.include(P["a"]),t.include(A["a"],e),R.add(o["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?o["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o["a"]`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===e.normalType?o["a"]`
        vec3 normal = screenDerivativeNormal(localvpos);`:o["a"]`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?o["a"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o["a"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?o["a"]`
              mat3 tangentSpace = ${e.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?o["a"]`vec3 normalGround = normalize(vpos + localOrigin);`:o["a"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:o["a"]``}
        ${1===e.pbrMode||2===e.pbrMode?o["a"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(T["a"],e),t}var L=Object.freeze({__proto__:null,build:R})},"0d7a":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("3886"),a=r("7cb4");function i(e,t){const r=e.fragment;r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),t.vertexTangets?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),2===t.doubleSidedMode?r.code.add(o["a"]`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):r.code.add(o["a"]`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(o["a"]`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==t.attributeTextureCoordinates&&(e.include(a["a"],t),r.code.add(o["a"]`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},"0fa6":function(e,t,r){"use strict";var o=r("b2b2"),a=r("8539");class i{constructor(e,t,r,o,a){this._context=e,this._locations=t,this._layout=r,this._buffers=o,this._indexBuffer=a,this._glName=null,this._initialized=!1,e.instanceCounter.increment(2,this)}get glName(){return this._glName}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get size(){return Object.keys(this._buffers).reduce((e,t)=>e+this._buffers[t].size,this._indexBuffer?this._indexBuffer.size:0)}get layout(){return this._layout}get locations(){return this._locations}dispose(e=!0){if(!this._context)return;const t=this._context.capabilities.vao;if(t&&this._glName&&(t.deleteVertexArray(this._glName),this._glName=null),this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(const e in this._buffers)this._buffers[e].dispose(),delete this._buffers[e];this._indexBuffer=Object(o["f"])(this._indexBuffer)}this._context.instanceCounter.decrement(2,this),this._context=null}initialize(){if(this._initialized)return;const e=this._context.capabilities.vao;if(e){const t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}bind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}_bindLayout(){const e=this._buffers,t=!!this._context.capabilities.vao,r=this._layout,o=this._indexBuffer;e||console.error("Vertex buffer dictionary is empty!");const i=this._context.gl;for(const n in e){const t=e[n];t||console.error("Vertex buffer is uninitialized!");const o=r[n];o||console.error("Vertex element descriptor is empty!"),Object(a["a"])(this._context,this._locations,t,o)}o&&(t?i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,o.glName):this._context.bindBuffer(o))}unbind(){this.initialize();const e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}_unbindLayout(){const e=this._buffers,t=this._layout;e||console.error("Vertex buffer dictionary is empty!");for(const r in e){const o=e[r];o||console.error("Vertex buffer is uninitialized!");const i=t[r];Object(a["e"])(this._context,this._locations,o,i)}this._indexBuffer&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}t["a"]=i},"17ca":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){e.vertex.code.add(o["a"]`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}},"22f5":function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return w}));var o=r("b2b2"),a=r("e92d"),i=r("ce50"),n=r("f4cc"),s=r("2eab"),c=r("792b"),l=r("0b2d"),d=r("549a"),u=r("4261"),f=r("2db0"),m=r("0278"),h=r("dbad"),p=r("1e2c");const v=a["a"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function b(e,t){const r=await g(e,t);return{resource:r,textures:await T(r.textureDefinitions,t)}}async function g(e,t){const r=Object(o["k"])(t)&&t.streamDataRequester;if(r)return x(e,r,t);const a=await Object(c["d"])(Object(s["default"])(e,Object(o["t"])(t)));if(!0===a.ok)return a.value.data;Object(n["v"])(a.error),y(a.error)}async function x(e,t,r){const o=await Object(c["d"])(t.request(e,"json",r));if(!0===o.ok)return o.value;Object(n["v"])(o.error),y(o.error.details.url)}function y(e){throw new i["a"]("","Request for object resource failed: "+e)}function O(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(v.warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(v.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(v.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(v.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else v.warn("Indexed geometries must specify faces"),o=!1;break}default:v.warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(v.warn("Geometry requires material"),o=!1);const a=e.params.vertexAttributes;for(const i in a)a[i].values||(v.warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function w(e,t){const r=[],a=[],i=[],n=[],s=e.resource,c=d["a"].parse(s.version||"1.0","wosr");M.validate(c);const u=s.model.name,f=s.model.geometries,v=s.materialDefinitions,b=e.textures;let g=0;const x=new Map;for(let d=0;d<f.length;d++){const e=f[d];if(!O(e))continue;const s=S(e),c=e.params.vertexAttributes,u=[];for(const t in c){const e=c[t],r=e.values;u.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const y=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)y.push([e,new Uint32Array(t[e].values)])}const w=b&&b[s.texture];if(w&&!x.has(s.texture)){const{image:e,params:t}=w,r=new p["a"](e,t);n.push(r),x.set(s.texture,r)}const _=x.get(s.texture),T=_?_.id:void 0;let M=i[s.material]?i[s.material][s.texture]:null;if(!M){const e=v[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=w&&w.alphaChannelUsage,a=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,n={ambient:Object(l["f"])(e.diffuse),diffuse:Object(l["f"])(e.diffuse),opacity:1-(e.transparency||0),transparent:a,textureAlphaMode:w?C(w.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(o["k"])(t)&&t.materialParamsMixin&&Object.assign(n,t.materialParamsMixin),M=new h["b"](n),i[s.material]||(i[s.material]={}),i[s.material][s.texture]=M}a.push(M);const A=new m["a"](u,y);g+=y.position?y.position.length:0,r.push(A)}return{name:u,stageResources:{textures:n,materials:a,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:_(r),numberOfVertices:g,lodThreshold:null}}function _(e){const t=Object(u["k"])();return e.forEach(e=>{const r=e.boundingInfo;Object(o["k"])(r)&&(Object(u["r"])(t,r.getBBMin()),Object(u["r"])(t,r.getBBMax()))}),t}async function T(e,t){const r=[];for(const n in e){const a=e[n],i=a.images[0].data;if(!i){v.warn("Externally referenced texture data is not yet supported");continue}const s=a.encoding+";base64,"+i,c="/textureDefinitions/"+n,l={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},d=Object(o["k"])(t)&&t.disableTextures?Promise.resolve(null):Object(f["a"])(s,t);r.push(d.then(e=>({refId:c,image:e,params:l,alphaChannelUsage:"rgba"===a.channels?a.alphaChannelUsage||"transparency":"none"})))}const a=await Promise.all(r),i={};for(const o of a)i[o.refId]=o;return i}function C(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function S(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const M=new d["a"](1,2,"wosr")},"2b60":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r("b2b2"),a=r("ce50"),i=r("e041"),n=r("f4cc"),s=r("2eab"),c=r("792b");class l{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this.load("json",e,t)}async loadBinary(e,t){return Object(i["u"])(e)?(Object(n["w"])(t),Object(i["j"])(e)):this.load("binary",e,t)}async loadImage(e,t){return this.load("image",e,t)}async load(e,t,r){if(Object(o["j"])(this.streamDataRequester))return(await Object(s["default"])(t,{responseType:d[e]})).data;const i=await Object(c["d"])(this.streamDataRequester.request(t,e,r));if(!0===i.ok)return i.value;throw Object(n["v"])(i.error),new a["a"]("","Request for resource failed: "+i.error)}}const d={image:"image",binary:"array-buffer",json:"json"}},3626:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("3886"),a=r("4377");function i(e){e.include(a["a"]),e.code.add(o["a"]`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o["a"].int(1)}) {
        return allMixed;
      }
      else if (mode == ${o["a"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${o["a"].int(3)}) {
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

      if (mode == ${o["a"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${o["a"].int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},"377b":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("c120");var o=r("8e37"),a=r("7ce4"),i=r("a1ff"),n=r("0fa6"),s=r("d267");async function c(e){const t=new Image;if(t.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",t.width=5,t.height=5,await t.decode(),!e.gl)return!0;const r=new s["a"](e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),c=a["a"].createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),l=new n["a"](e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:c}),d=new o["a"](e,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",{a_pos:0});e.bindProgram(d);const u=new i["a"](e,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},t);e.bindTexture(u,0),d.setUniform1i("u_texture",0);const f=e.getBoundFramebufferObject(),{x:m,y:h,width:p,height:v}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(l),e.drawArrays(5,0,4);const b=new Uint8Array(4);return r.readPixels(0,0,1,1,6408,5121,b),d.dispose(),l.dispose(!1),c.dispose(),r.dispose(),u.dispose(),e.setViewport(m,h,p,v),e.bindFramebuffer(f),t.src="",255===b[0]}},"3c3b":function(e,t,r){"use strict";r.d(t,"a",(function(){return z}));var o=r("b2b2"),a=r("afe1"),i=r("e92d"),n=r("ce50");const s=i["a"].getLogger("esri.views.3d.glTF");class c{error(e){throw new n["a"]("gltf-loader-error",e)}errorUnsupported(e){throw new n["a"]("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){s.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}}function l(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function d(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}var u=r("6c97"),f=r("e041"),m=r("549a"),h=r("d791"),p=r("b139"),v=r("55e6"),b=r("04f0");class g{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const x={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},y={pbrMetallicRoughness:x,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},O={ESRI_externalColorMixMode:"tint"},w=(e={})=>{const t={...x,...e.pbrMetallicRoughness},r=_({...O,...e.extras});return{...y,...e,pbrMetallicRoughness:t,extras:r}};function _(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(u["a"])(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}const T={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},C=e=>({...T,...e});function S(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,(e,o,a)=>(t=o||"",r=a||"","")),{dirPart:t,filePart:r}}var M=r("7cfb");const A={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class j{constructor(e,t,r,o,a){this.context=e,this.errorContext=t,this.uri=r,this.json=o,this.glbBuffer=a,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=S(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==o.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==o.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==o.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,t,r,o){if(Object(f["u"])(r)){const o=Object(f["i"])(r);if("model/gltf-binary"!==o.mediaType)try{const a=JSON.parse(o.isBase64?atob(o.data):o.data);return new j(e,t,r,a)}catch{}const a=Object(f["j"])(r);if(j.isGLBData(a))return this.fromGLBData(e,t,r,a)}if(r.endsWith(".gltf")){const a=await e.loadJSON(r,o);return new j(e,t,r,a)}const a=await e.loadBinary(r,o);if(j.isGLBData(a))return this.fromGLBData(e,t,r,a);const i=await e.loadJSON(r,o);return new j(e,t,r,i)}static isGLBData(e){const t=new g(e);return t.remainingBytes()>=4&&t.readUint32()===A.MAGIC}static async fromGLBData(e,t,r,o){const a=await j.parseGLBData(t,o);return new j(e,t,r,a.json,a.binaryData)}static async parseGLBData(e,t){const r=new g(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const o=r.readUint32(),a=r.readUint32(),i=r.readUint32();e.assert(o===A.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=i,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==a,"An unsupported GLB container version was detected. Only version 2 is supported.");let n,s,c=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),o=r.readUint32();0===c?(e.assert(o===A.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),n=await N(r.readUint8Array(t))):1===c?(e.errorUnsupportedIf(o!==A.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),s=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),c+=1}return n||e.error("No GLB JSON chunk detected."),{json:n,binaryData:s}}async getBuffer(e,t){const r=this.json.buffers[e],o=this.errorContext;if(null==r.uri)return o.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let a=this.bufferCache.get(e);if(!a){const i=await this.context.loadBinary(this.resolveUri(r.uri),t);a=new Uint8Array(i),this.bufferCache.set(e,a),o.assert(a.byteLength===r.byteLength,"Buffer byte lengths should match.")}return a}async getAccessor(e,t){const r=this.json.accessors[e],o=this.errorContext;o.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),o.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const a=this.json.bufferViews[r.bufferView],i=await this.getBuffer(a.buffer,t),n=I[r.type],s=B[r.componentType],c=n*s,l=a.byteStride||c;return{raw:i.buffer,byteStride:l,byteOffset:i.byteOffset+(a.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===c,componentCount:n,componentByteSize:s,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Object(M["a"])(this.wrapAccessor(v["l"],r));case 5123:return Object(M["a"])(this.wrapAccessor(v["j"],r));case 5125:return Object(M["a"])(this.wrapAccessor(v["k"],r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const o=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+F[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(v["u"],o)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const o=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+F[o.componentType]),r.errorUnsupportedIf(3!==o.componentCount,"NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed()),this.wrapAccessor(v["u"],o)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const o=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==o.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+F[o.componentType]),r.errorUnsupportedIf(4!==o.componentCount,"TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed()),new v["C"](o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(v["m"],o):(r.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),D(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const o=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==o.componentCount&&3!==o.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed()),4===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(v["C"],o);if(5121===o.componentType)return this.wrapAccessor(v["J"],o);if(5123===o.componentType)return this.wrapAccessor(v["H"],o)}else if(3===o.componentCount){if(5126===o.componentType)return this.wrapAccessor(v["u"],o);if(5121===o.componentType)return this.wrapAccessor(v["B"],o);if(5123===o.componentType)return this.wrapAccessor(v["z"],o)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+F[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){const o=this.errorContext;let a=this.materialCache.get(e.material);if(!a){const i=null!=e.material?w(this.json.materials[e.material]):w(),n=i.pbrMetallicRoughness,s=this.hasVertexColors(e);let c,l,d,u,f;n.baseColorTexture&&(o.errorUnsupportedIf(0!==(n.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),c=await this.getTexture(n.baseColorTexture.index,t)),i.normalTexture&&(0!==(i.normalTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):l=await this.getTexture(i.normalTexture.index,t)),i.occlusionTexture&&r&&(0!==(i.occlusionTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):d=await this.getTexture(i.occlusionTexture.index,t)),i.emissiveTexture&&r&&(0!==(i.emissiveTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):u=await this.getTexture(i.emissiveTexture.index,t)),n.metallicRoughnessTexture&&r&&(0!==(n.metallicRoughnessTexture.texCoord||0)?o.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):f=await this.getTexture(n.metallicRoughnessTexture.index,t));const m=null!=e.material?e.material:-1;a={alphaMode:i.alphaMode,alphaCutoff:i.alphaCutoff,color:n.baseColorFactor,doubleSided:!!i.doubleSided,colorTexture:c,normalTexture:l,name:i.name,id:m,occlusionTexture:d,emissiveTexture:u,emissiveFactor:i.emissiveFactor,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,metallicRoughnessTexture:f,vertexColors:s,ESRI_externalColorMixMode:i.extras.ESRI_externalColorMixMode}}return a}async getTexture(e,t){const r=this.errorContext,o=this.json.textures[e],a=C(null!=o.sampler?this.json.samplers[o.sampler]:{});r.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const i=this.json.images[o.source];let n=this.textureCache.get(e);if(!n){let o;if(i.uri)o=await this.context.loadImage(this.resolveUri(i.uri),t);else{r.errorUnsupportedIf(null==i.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==i.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[i.bufferView],a=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),o=await E(new Uint8Array(a.buffer,a.byteOffset+(e.byteOffset||0),e.byteLength),i.mimeType)}n={data:o,wrapS:a.wrapS,wrapT:a.wrapT,minFilter:a.minFilter,name:i.name,id:e},this.textureCache.set(e,n)}return n}getNodeTransform(e){if(void 0===e)return R;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=Object(h["m"])(Object(a["b"])(),r,o.matrix):o.translation||o.rotation||o.scale?(t=Object(a["c"])(r),o.translation&&Object(h["t"])(t,t,o.translation),o.rotation&&(L[3]=Object(b["c"])(L,o.rotation),Object(h["r"])(t,t,L[3],L)),o.scale&&Object(h["s"])(t,t,o.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(f["z"])(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=m["a"].parse(this.json.asset.version,"glTF");P.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((e,t)=>{e.children&&e.children.forEach(e=>{this.nodeParentMap.set(e,t)})})}}const P=new m["a"](2,0,"glTF"),R=Object(h["k"])(Object(a["b"])(),Math.PI/2),L=Object(p["a"])(),I={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},B={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function D(e){switch(e.componentType){case 5120:return new v["q"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new v["t"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new v["o"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new v["r"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new v["s"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new v["m"](e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void Object(u["a"])(e.componentType)}}async function N(e){return new Promise((t,r)=>{const o=new Blob([e]),a=new FileReader;a.onload=()=>{const e=a.result;t(JSON.parse(e))},a.onerror=e=>{r(e)},a.readAsText(o)})}async function E(e,t){return new Promise((r,o)=>{const a=new Blob([e],{type:t}),i=URL.createObjectURL(a),n=new Image;n.addEventListener("load",()=>{URL.revokeObjectURL(i),"decode"in n?n.decode().then(()=>r(n),()=>r(n)):r(n)}),n.addEventListener("error",e=>{URL.revokeObjectURL(i),o(e)}),n.src=i})}const F={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let U=0;async function z(e,t,r={},i=!0){const n=await j.load(e,W,t,r),s="gltf_"+U++,c={lods:[],materials:new Map,textures:new Map,meta:k(n)},l=!(!n.json.asset.extras||"symbolResource"!==n.json.asset.extras.ESRI_type);return await G(n,async(e,t,l,d)=>{const u=void 0!==e.mode?e.mode:4,f=V(u);if(Object(o["j"])(f))return void W.warnUnsupported("Unsupported primitive mode ("+J[u]+"). Skipping primitive.");if(!n.hasPositions(e))return void W.warn("Skipping primitive without POSITION vertex attribute.");const m=await n.getMaterial(e,r,i),h={transform:Object(a["c"])(t),attributes:{position:await n.getPositionData(e,r),normal:null,texCoord0:null,color:null,tangent:null},indices:await n.getIndexData(e,r),primitiveType:f,material:q(c,m,s)};n.hasNormals(e)&&(h.attributes.normal=await n.getNormalData(e,r)),n.hasTangents(e)&&(h.attributes.tangent=await n.getTangentData(e,r)),n.hasTextureCoordinates(e)&&(h.attributes.texCoord0=await n.getTextureCoordinates(e,r)),n.hasVertexColors(e)&&(h.attributes.color=await n.getVertexColors(e,r));let p=null;Object(o["k"])(c.meta)&&Object(o["k"])(c.meta.ESRI_lod)&&"screenSpaceRadius"===c.meta.ESRI_lod.metric&&(p=c.meta.ESRI_lod.thresholds[l]),c.lods[l]=c.lods[l]||{parts:[],name:d,lodThreshold:p},c.lods[l].parts.push(h)}),{model:c,meta:{isEsriSymbolResource:l,uri:n.uri},customMeta:{}}}function V(e){switch(e){case 4:case 5:case 6:return e;default:return null}}function k(e){const t=e.json;let r=null;return t.nodes.forEach(e=>{const t=e.extras;Object(o["k"])(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)}),r}async function G(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,a=o.length>1;for(const n of o){const e=r.nodes[n],t=[i(n,0)];if(H(e)&&!a){const r=e.extensions.MSFT_lod.ids;t.push(...r.map((e,t)=>i(e,t+1)))}await Promise.all(t)}async function i(o,a){const n=r.nodes[o],s=e.getNodeTransform(o);if(W.warnUnsupportedIf(null!=n.weights,"Morph targets are not supported."),null!=n.mesh){const e=r.meshes[n.mesh];for(const r of e.primitives)await t(r,s,a,e.name)}for(const e of n.children||[])await i(e,a)}}function H(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function q(e,t,r){const o=t=>{const o=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const r=d(t.data,{wrap:{s:$(t.wrapS),t:$(t.wrapT)},mipmap:X.some(e=>e===t.minFilter),noUnpackFlip:!0});e.textures.set(o,r)}return o},a=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(a)){const r=l({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(a,r)}return a}function $(e){if(33071===e||33648===e||10497===e)return e;W.error("Unexpected TextureSampler WrapMode: "+e)}const W=new c,X=[9987,9985],J=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},"4c96":function(e,t,r){"use strict";function o(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d)o[c]=i[l],o[c+1]=i[l+1],o[c+2]=i[l+2],c+=a,l+=n}r.d(t,"a",(function(){return o}));Object.freeze({__proto__:null,copy:o})},5211:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o["a"]`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      // clamp the derivatives to avoid discoloring when zooming out.
      float maxdUV = 0.125; // Emprirically tuned compromise between discoloring and aliasing noise.
      vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
      vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}},"549a":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("ce50");class a{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new o["a"](t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new a(this.major,this.minor,this._context)}static parse(e,t=""){const[r,i]=e.split("."),n=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(n))throw new o["a"]((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!i||!i.match||!i.match(n))throw new o["a"]((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const s=parseInt(r,10),c=parseInt(i,10);return new a(s,c,t)}}},5876:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){e.vertex.code.add(o["a"]`
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
  `)}},"5d5f":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("3886"),a=r("c51b");function i(e){const t=e.fragment.code;t.add(o["a"]`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),t.add(o["a"]`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),t.add(o["a"]`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}function n(e,t){const r=e.fragment.code;e.include(a["a"]),3===t.pbrMode||4===t.pbrMode?(r.add(o["a"]`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(o["a"]`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(o["a"]`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(o["a"]`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(o["a"]`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==t.pbrMode&&2!==t.pbrMode||(e.include(i),r.add(o["a"]`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(o["a"]`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(o["a"]`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(o["a"]`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(o["a"]`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(o["a"]`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}},"668b":function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a}));var o=r("da6c");function a(e,t,r){if(e.count!==t.count)return void o["a"].error("source and destination buffers need to have the same number of elements");const a=e.count,i=r[0],n=r[1],s=r[2],c=r[4],l=r[5],d=r[6],u=r[8],f=r[9],m=r[10],h=r[12],p=r[13],v=r[14],b=e.typedBuffer,g=e.typedBufferStride,x=t.typedBuffer,y=t.typedBufferStride;for(let o=0;o<a;o++){const e=o*g,t=o*y,r=x[t],a=x[t+1],O=x[t+2];b[e]=i*r+c*a+u*O+h,b[e+1]=n*r+l*a+f*O+p,b[e+2]=s*r+d*a+m*O+v}}function i(e,t,r){if(e.count!==t.count)return void o["a"].error("source and destination buffers need to have the same number of elements");const a=e.count,i=r[0],n=r[1],s=r[2],c=r[3],l=r[4],d=r[5],u=r[6],f=r[7],m=r[8],h=e.typedBuffer,p=e.typedBufferStride,v=t.typedBuffer,b=t.typedBufferStride;for(let o=0;o<a;o++){const e=o*p,t=o*b,r=v[t],a=v[t+1],g=v[t+2];h[e]=i*r+c*a+u*g,h[e+1]=n*r+l*a+f*g,h[e+2]=s*r+d*a+m*g}}function n(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*i,t=c*s;a[e]=r*n[t],a[e+1]=r*n[t+1],a[e+2]=r*n[t+2]}}function s(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*i,t=c*s;a[e]=n[t]>>r,a[e+1]=n[t+1]>>r,a[e+2]=n[t+2]>>r}}Object.freeze({__proto__:null,transformMat4:a,transformMat3:i,scale:n,shiftRight:s})},"6a21":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var o=r("c120"),a=r("3886"),i=r("998f");function n({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(a["a"]`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(a["a"]`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function s(e){return!!Object(o["a"])("force-double-precision-obfuscation")||Object(i["b"])(e).doublePrecisionRequiresObfuscation}},"6cb2":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("3886"),a=r("5876");function i(e,t){t.symbolColor?(e.include(a["a"]),e.attributes.add("symbolColor","vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(o["a"]`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):e.vertex.code.add(o["a"]`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}},7088:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(o["a"]`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(o["a"]`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}},"7cb4":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("3886"),a=r("dfaf"),i=r("5211");function n(e,t){e.include(a["a"],t),e.fragment.code.add(o["a"]`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===t.attributeTextureCoordinates&&e.fragment.code.add(o["a"]`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===t.attributeTextureCoordinates&&(e.include(i["a"]),e.fragment.code.add(o["a"]`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}},"7ce4":function(e,t,r){"use strict";var o=r("a21b"),a=r("1956");class i{constructor(e,t,r,o,i){this._context=e,this.bufferType=t,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,e.instanceCounter.increment(1,this),this._glName=this._context.gl.createBuffer(),Object(a["a"])(this._context.gl),o&&this.setData(o,i)}static createIndex(e,t,r,o){return new i(e,34963,t,r,o)}static createVertex(e,t,r){return new i(e,34962,t,r)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get byteSize(){return 34962===this.bufferType?this._size:5125===this._indexType?4*this._size:2*this._size}dispose(){this._context&&(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(1,this),this._context=null)}setData(e,t){if(!e)return;if("number"==typeof e){if(e<0&&console.error("Buffer size cannot be negative!"),34963===this.bufferType&&t)switch(this._indexType=t,this._size=e,t){case 5123:e*=2;break;case 5125:e*=4}}else{let t=e.byteLength;Object(o["i"])(e)&&(t/=2,this._indexType=5123),Object(o["j"])(e)&&(t/=4,this._indexType=5125),this._size=t}const r=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this),this._context.gl.bufferData(this.bufferType,e,this.usage),this._context.bindVAO(r)}setSubData(e,t=0,r=0,a=e.byteLength){if(!e)return;(t<0||t>=this._size)&&console.error("offset is out of range!");let i=t,n=r,s=a,c=e.byteLength;Object(o["i"])(e)&&(c/=2,i*=2,n*=2,s*=2),Object(o["j"])(e)&&(c/=4,i*=4,n*=4,s*=4),void 0===a&&(a=c-1),r>=a&&console.error("end must be bigger than start!"),t+r-a>this._size&&console.error("An attempt to write beyond the end of the buffer!");const l=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);const d=this._context.gl,u=ArrayBuffer.isView(e)?e.buffer:e,f=0===n&&s===e.byteLength?u:u.slice(n,s);d.bufferSubData(this.bufferType,i,f),this._context.bindVAO(l)}}t["a"]=i},"7cfb":function(e,t,r){"use strict";function o(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d)o[c]=i[l],c+=a,l+=n}function a(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}r.d(t,"a",(function(){return a}));Object.freeze({__proto__:null,copy:o,makeDense:a})},"7d11":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r("3886"),a=r("c332"),i=r("bc40");function n(e,t){0===t.normalType||1===t.normalType?(e.include(a["a"],t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),e.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),e.vertex.code.add(o["a"]`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===t.normalType?(e.include(i["a"],t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(o["a"]`
    void forwardNormal() {
      vNormalWorld = ${1===t.viewingMode?o["a"]`normalize(vPositionWorldCameraRelative);`:o["a"]`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(o["a"]`
      void forwardNormal() {}
    `)}!function(e){function t(e,t){e.setUniformMatrix4fv("viewNormal",t)}e.bindUniforms=t}(n||(n={}))},"7e21":function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var o=r("3886"),a=r("4db9"),i=r("d272"),n=r("6a07"),s=r("be24"),c=r("ebd5"),l=r("c2d1"),d=r("dfaf"),u=r("c332"),f=r("7d11");function m(e,t){const r=e.vertex.code,m=e.fragment.code;1!==t.output&&3!==t.output||(e.include(a["a"],{linearDepth:!0}),e.include(d["a"],t),e.include(s["a"],t),e.include(l["a"],t),e.include(i["a"],t),e.vertex.uniforms.add("cameraNearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(o["a"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, cameraNearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(c["a"],t),m.add(o["a"]`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?o["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===t.output&&(e.include(a["a"],{linearDepth:!1}),e.include(u["a"],t),e.include(f["a"],t),e.include(d["a"],t),e.include(s["a"],t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(o["a"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===t.normalType?o["a"]`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i["a"],t),e.include(c["a"],t),m.add(o["a"]`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?o["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===t.normalType?o["a"]`
            vec3 normal = screenDerivativeNormal(vPositionView);`:o["a"]`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===t.output&&(e.include(a["a"],{linearDepth:!1}),e.include(d["a"],t),e.include(s["a"],t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(o["a"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),e.include(i["a"],t),e.include(c["a"],t),e.include(n["a"]),m.add(o["a"]`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?o["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},8539:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return i})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return a}));r("c120");var o=r("b2b2");function a(e,t){return e.vertexBuffers[t].size/i(e.layout[t])}function i(e){return e[0].stride}function n(e,t,r,o,a){const i=e.gl,n=e.capabilities.instancing;e.bindBuffer(r);for(const s of o){const e=t[s.name],r=(a||(0+s.baseInstance?s.baseInstance:0))*s.stride;if(void 0===e&&console.error(`There is no location for vertex attribute '${s.name}' defined.`),s.baseInstance&&!s.divisor&&console.error(`Vertex attribute '${s.name}' uses baseInstanceOffset without divisor.`),s.count<=4)i.vertexAttribPointer(e,s.count,s.type,s.normalized,s.stride,s.offset+r),i.enableVertexAttribArray(e),s.divisor&&s.divisor>0&&n&&n.vertexAttribDivisor(e,s.divisor);else if(9===s.count)for(let t=0;t<3;t++)i.vertexAttribPointer(e+t,3,s.type,s.normalized,s.stride,s.offset+12*t+r),i.enableVertexAttribArray(e+t),s.divisor&&s.divisor>0&&n&&n.vertexAttribDivisor(e+t,s.divisor);else if(16===s.count)for(let t=0;t<4;t++)i.vertexAttribPointer(e+t,4,s.type,s.normalized,s.stride,s.offset+16*t+r),i.enableVertexAttribArray(e+t),s.divisor&&s.divisor>0&&n&&n.vertexAttribDivisor(e+t,s.divisor);else console.error("Unsupported vertex attribute element count: "+s.count)}}function s(e,t,r,o){const a=e.gl,i=e.capabilities.instancing;e.bindBuffer(r);for(const n of o){const e=t[n.name];if(n.count<=4)a.disableVertexAttribArray(e),n.divisor&&n.divisor>0&&i&&i.vertexAttribDivisor(e,0);else if(9===n.count)for(let t=0;t<3;t++)a.disableVertexAttribArray(e+t),n.divisor&&n.divisor>0&&i&&i.vertexAttribDivisor(e+t,0);else if(16===n.count)for(let t=0;t<4;t++)a.disableVertexAttribArray(e+t),n.divisor&&n.divisor>0&&i&&i.vertexAttribDivisor(e+t,0);else console.error("Unsupported vertex attribute element count: "+n.count)}e.unbindBuffer(34962)}function c(e){switch(e){case 6406:case 6409:case 36168:return 1;case 6410:case 32854:case 33325:case 32854:case 33189:return 2;case 6407:case 6402:return 3;case 6408:case 34041:case 33326:case 35898:case 33327:case 34041:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33776:case 33777:return.5;case 33778:case 33779:return 1;case 37488:case 37489:case 37492:case 37493:case 37494:case 37495:return.5;case 37490:case 37491:case 37496:case 37497:return 1}return 0}function l(e){if(Object(o["j"])(e))return 0;if("colorAttachment"in e)return e.glName?l(e.colorAttachment)+l(e.depthStencilAttachment):0;if("descriptor"in e)return e.glName?l(e.descriptor):0;const t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;const r="hasMipmap"in e&&e.hasMipmap?1.3:1,a=e.width*e.height;return c(t)*a*r}},"8e37":function(e,t,r){"use strict";r("c120");var o=r("b2b2"),a=["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"],i=a,n=r("9f8b"),s=999,c=9999,l=0,d=1,u=2,f=3,m=4,h=5,p=6,v=7,b=8,g=9,x=10,y=11,O=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];function w(){var e,t,r,o=0,a=0,i=s,w=[],_=[],T=1,C=0,S=0,M=!1,A=!1,j="";return function(e){return _=[],null!==e?R(e.replace?e.replace(/\r\n/g,"\n"):e):L()};function P(e){e.length&&_.push({type:O[i],data:e,position:S,line:T,column:C})}function R(t){var n;for(o=0,r=(j+=t).length;e=j[o],o<r;){switch(n=o,i){case l:o=E();break;case d:o=N();break;case u:o=D();break;case f:o=F();break;case m:o=V();break;case y:o=z();break;case h:o=k();break;case c:o=G();break;case g:o=B();break;case s:o=I()}if(n!==o)switch(j[n]){case"\n":C=0,++T;break;default:++C}}return a+=o,j=j.slice(o),_}function L(e){return w.length&&P(w.join("")),i=x,P("(eof)"),_}function I(){return w=w.length?[]:w,"/"===t&&"*"===e?(S=a+o-1,i=l,t=e,o+1):"/"===t&&"/"===e?(S=a+o-1,i=d,t=e,o+1):"#"===e?(i=u,S=a+o,o):/\s/.test(e)?(i=g,S=a+o,o):(M=/\d/.test(e),A=/[^\w_]/.test(e),S=a+o,i=M?m:A?f:c,o)}function B(){return/[^\s]/g.test(e)?(P(w.join("")),i=s,o):(w.push(e),t=e,o+1)}function D(){return"\r"!==e&&"\n"!==e||"\\"===t?(w.push(e),t=e,o+1):(P(w.join("")),i=s,o)}function N(){return D()}function E(){return"/"===e&&"*"===t?(w.push(e),P(w.join("")),i=s,o+1):(w.push(e),t=e,o+1)}function F(){if("."===t&&/\d/.test(e))return i=h,o;if("/"===t&&"*"===e)return i=l,o;if("/"===t&&"/"===e)return i=d,o;if("."===e&&w.length){for(;U(w););return i=h,o}if(";"===e||")"===e||"("===e){if(w.length)for(;U(w););return P(e),i=s,o+1}var r=2===w.length&&"="!==e;if(/[\w_\d\s]/.test(e)||r){for(;U(w););return i=s,o}return w.push(e),t=e,o+1}function U(e){for(var t,r,o=0;;){if(t=n["c"].indexOf(e.slice(0,e.length+o).join("")),r=n["c"][t],-1===t){if(o--+e.length>0)continue;r=e.slice(0,1).join("")}return P(r),S+=r.length,(w=w.slice(r.length)).length}}function z(){return/[^a-fA-F0-9]/.test(e)?(P(w.join("")),i=s,o):(w.push(e),t=e,o+1)}function V(){return"."===e||/[eE]/.test(e)?(w.push(e),i=h,t=e,o+1):"x"===e&&1===w.length&&"0"===w[0]?(i=y,w.push(e),t=e,o+1):/[^\d]/.test(e)?(P(w.join("")),i=s,o):(w.push(e),t=e,o+1)}function k(){return"f"===e&&(w.push(e),t=e,o+=1),/[eE]/.test(e)||"-"===e&&/[eE]/.test(t)?(w.push(e),t=e,o+1):/[^\d]/.test(e)?(P(w.join("")),i=s,o):(w.push(e),t=e,o+1)}function G(){if(/[^\d\w_]/.test(e)){var r=w.join("");return i=n["b"].indexOf(r)>-1?b:n["a"].indexOf(r)>-1?v:p,P(w.join("")),i=s,o}return w.push(e),t=e,o+1}}function _(e){var t=w(),r=[];return(r=r.concat(t(e))).concat(t(null))}function T(e){return _(e)}function C(e){return e.map(e=>"eof"!==e.type?e.data:"").join("")}const S=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];function M(e,t="100",r="300 es"){const o=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;for(const a of e)if("preprocessor"===a.type){const e=o.exec(a.data);if(e){const o=e[1].replace(/\s\s+/g," ");if(o===r)return o;if(o===t)return a.data="#version "+r,t;throw new Error("unknown glsl version: "+o)}}return e.splice(0,0,{type:"preprocessor",data:"#version "+r},{type:"whitespace",data:"\n"}),null}function A(e,t){for(let r=t-1;r>=0;r--){const t=e[r];if("whitespace"!==t.type&&"block-comment"!==t.type){if("keyword"!==t.type)break;if("attribute"===t.data||"in"===t.data)return!0}}return!1}function j(e,t,r,o){o=o||r;for(const a of e)if("ident"===a.type&&a.data===r)return o in t?t[o]++:t[o]=0,j(e,t,o+"_"+t[o],o);return r}function P(e,t,r="afterVersion"){function o(e,t){for(let r=t;r<e.length;r++){const t=e[r];if("operator"===t.type&&";"===t.data)return r}return null}function a(e){let t=-1,a=0,i=-1;for(let n=0;n<e.length;n++){const s=e[n];if("preprocessor"===s.type&&(s.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++a:s.data.match(/\#endif\s*.*/)&&--a),"afterVersion"!==r&&"afterPrecision"!==r||"preprocessor"===s.type&&/^#version/.test(s.data)&&(i=Math.max(i,n)),"afterPrecision"===r&&"keyword"===s.type&&"precision"===s.data){const t=o(e,n);if(null===t)throw new Error("precision statement not followed by any semicolons!");i=Math.max(i,t)}t<i&&0===a&&(t=n)}return t+1}const i={data:"\n",type:"whitespace"},n=t=>t<e.length&&/[^\r\n]$/.test(e[t].data);let s=a(e);n(s-1)&&e.splice(s++,0,i);for(const c of t)e.splice(s++,0,c);n(s-1)&&n(s)&&e.splice(s,0,i)}function R(e,t,r,o="lowp"){P(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:o},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function L(e,t,r,o,a="lowp"){P(e,[{type:"keyword",data:"layout"},{type:"operator",data:"("},{type:"keyword",data:"location"},{type:"whitespace",data:" "},{type:"operator",data:"="},{type:"whitespace",data:" "},{type:"integer",data:o.toString()},{type:"operator",data:")"},{type:"whitespace",data:" "},{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function I(e,t){let r,o,a=-1;for(let i=t;i<e.length;i++){const t=e[i];if("operator"===t.type&&("["===t.data&&(r=i),"]"===t.data)){o=i;break}"integer"===t.type&&(a=parseInt(t.data,10))}return r&&o&&e.splice(r,o-r+1),a}function B(e,t){const r=T(e);if("300 es"===M(r,"100","300 es"))throw new Error("shader is already glsl 300 es");let o=null,a=null;const n={},s={};for(let c=0;c<r.length;++c){const e=r[c];switch(e.type){case"keyword":"vertex"===t&&"attribute"===e.data?e.data="in":"varying"===e.data&&(e.data="vertex"===t?"out":"in");break;case"builtin":if(/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(e.data.trim())&&(e.data=e.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===t&&"gl_FragColor"===e.data&&(o||(o=j(r,n,"fragColor"),R(r,o,"vec4")),e.data=o),"fragment"===t&&"gl_FragData"===e.data){const t=I(r,c+1),o=j(r,n,"fragData");L(r,o,"vec4",t,"mediump"),e.data=o}else"fragment"===t&&"gl_FragDepthEXT"===e.data&&(a||(a=j(r,n,"gl_FragDepth")),e.data=a);break;case"ident":if(i.indexOf(e.data)>=0){if("vertex"===t&&A(r,c))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");e.data in s||(s[e.data]=j(r,n,e.data)),e.data=s[e.data]}}}for(let i=r.length-1;i>=0;--i){const e=r[i];if("preprocessor"===e.type){const t=e.data.match(/\#extension\s+(.*)\:/);if(t&&t[1]&&S.indexOf(t[1].trim())>=0){const e=r[i+1];r.splice(i,e&&"whitespace"===e.type?2:1)}const o=e.data.match(/\#ifdef\s+(.*)/);o&&o[1]&&S.indexOf(o[1].trim())>=0&&(e.data="#if 1");const a=e.data.match(/\#ifndef\s+(.*)/);a&&a[1]&&S.indexOf(a[1].trim())>=0&&(e.data="#if 0")}}return C(r)}class D{constructor(e,t,r,o,a={}){if(this._context=null,this._glName=null,this._locations={},this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},e||console.error("RenderingContext isn't initialized!"),0===t.length&&console.error("Shaders source should not be empty!"),e.instanceCounter.increment(3,this),this._context=e,this._vertexShaderSource=t,this._fragmentShaderSource=r,Array.isArray(a))for(const i of a)this._defines[i]="1";else this._defines=a;this._locations=o}get glName(){return this._glName}get locations(){return this._locations}getDefine(e){return this._defines[e]}dispose(){if(!this._context)return;const e=this._context.gl;if(this._vShader){const t=this._vShader;e.deleteShader(t),this._vShader=null}if(this._fShader){const t=this._fShader;e.deleteShader(t),this._fShader=null}this._glName&&(e.deleteProgram(this._glName),this._glName=null),this._context.instanceCounter.decrement(3,this),this._context=null}initialize(){if(this._initialized)return;this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");const e=this._context.gl,t=e.createProgram();e.attachShader(t,this._vShader),e.attachShader(t,this._fShader);for(const r in this._locations){const o=this._locations[r];e.bindAttribLocation(t,o,r)}e.linkProgram(t),this._glName=t,this._initialized=!0}getUniformLocation(e){return this.initialize(),void 0===this._nameToUniformLocation[e]&&(this._nameToUniformLocation[e]=this._context.gl.getUniformLocation(this._glName,e)),this._nameToUniformLocation[e]}hasUniform(e){return null!==this.getUniformLocation(e)}getAttribLocation(e){return this.initialize(),void 0===this._nameToAttribLocation[e]&&(this._nameToAttribLocation[e]=this._context.gl.getAttribLocation(this._glName,e)),this._nameToAttribLocation[e]}setUniform1i(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1iv(e,t){const r=this._nameToUniform1v[e];N(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=D._arrayCopy(t):D._arrayAssign(t,r))}setUniform2iv(e,t){const r=this._nameToUniform2[e];N(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=D._arrayCopy(t):D._arrayAssign(t,r))}setUniform3iv(e,t){const r=this._nameToUniform3[e];N(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=D._arrayCopy(t):D._arrayAssign(t,r))}setUniform4iv(e,t){const r=this._nameToUniform4[e];N(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=D._arrayCopy(t):D._arrayAssign(t,r))}setUniform1f(e,t){const r=this._nameToUniform1[e];void 0!==r&&t===r||(this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(e),t),this._nameToUniform1[e]=t)}setUniform1fv(e,t){const r=this._nameToUniform1v[e];N(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform1v[e]=D._arrayCopy(t):D._arrayAssign(t,r))}setUniform2f(e,t,r){const o=this._nameToUniform2[e];void 0!==o&&t===o[0]&&r===o[1]||(this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(e),t,r),void 0===o?this._nameToUniform2[e]=[t,r]:(o[0]=t,o[1]=r))}setUniform2fv(e,t){const r=this._nameToUniform2[e];N(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform2[e]=D._arrayCopy(t):D._arrayAssign(t,r))}setUniform3f(e,t,r,o){const a=this._nameToUniform3[e];void 0!==a&&t===a[0]&&r===a[1]&&o===a[2]||(this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(e),t,r,o),void 0===a?this._nameToUniform3[e]=[t,r,o]:(a[0]=t,a[1]=r,a[2]=o))}setUniform3fv(e,t){const r=this._nameToUniform3[e];N(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform3[e]=D._arrayCopy(t):D._arrayAssign(t,r))}setUniform4f(e,t,r,o,a){const i=this._nameToUniform4[e];void 0!==i&&t===i[0]&&r===i[1]&&o===i[2]&&a===i[3]||(this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(e),t,r,o,a),void 0===i?this._nameToUniform4[e]=[t,r,o,a]:(i[0]=t,i[1]=r,i[2]=o,i[3]=a))}setUniform4fv(e,t){const r=this._nameToUniform4[e];N(r,t)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(e),t),void 0===r?this._nameToUniform4[e]=D._arrayCopy(t):D._arrayAssign(t,r))}setUniformMatrix3fv(e,t,r=!1){const o=this._nameToUniformMatrix3[e];E(o,t)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(e),r,t),void 0===o?this._nameToUniformMatrix3[e]=D._arrayCopy(t):D._arrayAssign(t,o))}setUniformMatrix4fv(e,t,r=!1){const o=this._nameToUniformMatrix4[e];F(o,t)&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(e),r,t),void 0===o?this._nameToUniformMatrix4[e]=D._arrayCopy(t):D._arrayAssign(t,o))}assertCompatibleVertexAttributeLocations(e){const t=e.locations===this.locations;return t||console.error("VertexAttributeLocations are incompatible"),t}static _padToThree(e){let t=e.toString();return e<1e3&&(t=("  "+e).slice(-3)),t}_addLineNumbers(e){let t=2;return e.replace(/\n/g,()=>"\n"+D._padToThree(t++)+":")}_loadShader(e){const t=35633===e;let r=t?this._vertexShaderSource:this._fragmentShaderSource,o="";for(const n in this._defines)o+=`#define ${n} ${this._defines[n]}\n`;r=o+r,"webgl2"===this._context.contextVersion&&(r=B(r,t?"vertex":"fragment"));const a=this._context.gl,i=a.createShader(e);return a.shaderSource(i,r),a.compileShader(i),i}static _arrayCopy(e){const t=[];for(let r=0;r<e.length;++r)t.push(e[r]);return t}static _arrayAssign(e,t){for(let r=0;r<e.length;++r)t[r]=e[r]}}function N(e,t){if(Object(o["j"])(e)||e.length!==t.length)return!0;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!0;return!1}function E(e,t){return!!Object(o["j"])(e)||(9!==e.length?N(e,t):9!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8])}function F(e,t){return!!Object(o["j"])(e)||(16!==e.length?N(e,t):16!==e.length||e[0]!==t[0]||e[1]!==t[1]||e[2]!==t[2]||e[3]!==t[3]||e[4]!==t[4]||e[5]!==t[5]||e[6]!==t[6]||e[7]!==t[7]||e[8]!==t[8]||e[9]!==t[9]||e[10]!==t[10]||e[11]!==t[11]||e[12]!==t[12]||e[13]!==t[13]||e[14]!==t[14]||e[15]!==t[15])}t["a"]=D},"94a6":function(e,t,r){"use strict";r.r(t),r.d(t,"fetch",(function(){return U})),r.d(t,"gltfToEngineResources",(function(){return V})),r.d(t,"parseUrl",(function(){return z}));var o=r("b2b2"),a=r("0b2d"),i=r("e431"),n=r("d791"),s=r("49b8"),c=r("dae5"),l=r("afe1"),d=r("1c92"),u=r("55e6"),f=r("668b"),m=r("4261"),h=r("0278"),p=r("dbad"),v=r("1e2c"),b=r("2b60"),g=r("82b9");function x(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d)o[c]=i[l],o[c+1]=i[l+1],c+=a,l+=n}function y(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;if(Object(g["b"])(t.elementType)){const e=Object(g["d"])(t.elementType);if(Object(g["c"])(t.elementType))for(let t=0;t<s;++t)o[c]=Math.max(i[l]/e,-1),o[c+1]=Math.max(i[l+1]/e,-1),c+=a,l+=n;else for(let t=0;t<s;++t)o[c]=i[l]/e,o[c+1]=i[l+1]/e,c+=a,l+=n}else x(e,t,r);return e}Object.freeze({__proto__:null,copy:x,normalizeIntegerBuffer:y});var O=r("4c96");function w(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d)o[c]=i[l],o[c+1]=i[l+1],o[c+2]=i[l+2],o[c+3]=i[l+3],c+=a,l+=n}function _(e,t,r,o,a,i){const n=e.typedBuffer,s=e.typedBufferStride,c=i?i.count:e.count;let l=(i&&i.dstIndex?i.dstIndex:0)*s;for(let d=0;d<c;++d)n[l]=t,n[l+1]=r,n[l+2]=o,n[l+3]=a,l+=s}Object.freeze({__proto__:null,copy:w,fill:_});function T(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d){for(let e=0;e<9;++e)o[c+e]=i[l+e];c+=a,l+=n}}Object.freeze({__proto__:null,copy:T});function C(e,t,r){const o=e.typedBuffer,a=e.typedBufferStride,i=t.typedBuffer,n=t.typedBufferStride,s=r?r.count:t.count;let c=(r&&r.dstIndex?r.dstIndex:0)*a,l=(r&&r.srcIndex?r.srcIndex:0)*n;for(let d=0;d<s;++d){for(let e=0;e<16;++e)o[c+e]=i[l+e];c+=a,l+=n}}Object.freeze({__proto__:null,copy:C}),r("7cfb");function S(e,t){return new e(new ArrayBuffer(t*e.ElementCount*Object(g["a"])(e.ElementType)))}var M=r("3c3b"),A=r("a21b"),j=r("1038");function P(e){return"number"==typeof e?Object(j["d"])(e):Object(A["i"])(e)||Object(A["k"])(e)?new Uint32Array(e):e}function R(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let a=0;a<r;a+=1)if(a%2==0){const r=e[a],i=e[a+1],n=e[a+2];o[t++]=r,o[t++]=i,o[t++]=n}else{const r=e[a+1],i=e[a],n=e[a+2];o[t++]=r,o[t++]=i,o[t++]=n}}return o}function L(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}{const t=e[0];let a=e[1],i=0;for(let n=0;n<r;++n){const r=e[n+2];o[i++]=t,o[i++]=a,o[i++]=r,a=r}return o}}var I=r("22f5"),B=r("da6c");function D(e,t,r){if(e.count!==t.count)return void B["a"].error("source and destination buffers need to have the same number of elements");const o=e.count,a=r[0],i=r[1],n=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=r[9],h=r[10],p=r[11],v=r[12],b=r[13],g=r[14],x=r[15],y=e.typedBuffer,O=e.typedBufferStride,w=t.typedBuffer,_=t.typedBufferStride;for(let T=0;T<o;T++){const e=T*O,t=T*_,r=w[t],o=w[t+1],C=w[t+2],S=w[t+3];y[e]=a*r+c*o+f*C+v*S,y[e+1]=i*r+l*o+m*C+b*S,y[e+2]=n*r+d*o+h*C+g*S,y[e+3]=s*r+u*o+p*C+x*S}}function N(e,t,r){if(e.count!==t.count)return void B["a"].error("source and destination buffers need to have the same number of elements");const o=e.count,a=r[0],i=r[1],n=r[2],s=r[3],c=r[4],l=r[5],d=r[6],u=r[7],f=r[8],m=e.typedBuffer,h=e.typedBufferStride,p=t.typedBuffer,v=t.typedBufferStride;for(let b=0;b<o;b++){const e=b*h,t=b*v,r=p[t],o=p[t+1],g=p[t+2],x=p[t+3];m[e]=a*r+s*o+d*g,m[e+1]=i*r+c*o+u*g,m[e+2]=n*r+l*o+f*g,m[e+3]=x}}function E(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*i,t=c*s;a[e]=r*n[t],a[e+1]=r*n[t+1],a[e+2]=r*n[t+2],a[e+3]=r*n[t+3]}}function F(e,t,r){const o=Math.min(e.count,t.count),a=e.typedBuffer,i=e.typedBufferStride,n=t.typedBuffer,s=t.typedBufferStride;for(let c=0;c<o;c++){const e=c*i,t=c*s;a[e]=n[t]>>r,a[e+1]=n[t+1]>>r,a[e+2]=n[t+2]>>r,a[e+3]=n[t+3]>>r}}Object.freeze({__proto__:null,transformMat4:D,transformMat3:N,scale:E,shiftRight:F});async function U(e,t){const r=z(Object(s["a"])(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Object(I["a"])(r.url,t)),o=Object(I["b"])(e,t);return{lods:[o],referenceBoundingBox:o.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const a=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):Object(M["a"])(new b["a"](t.streamDataRequester),r.url,t,t.usePBR)),i=Object(o["i"])(a.model.meta,"ESRI_proxyEllipsoid");a.meta.isEsriSymbolResource&&Object(o["k"])(i)&&-1!==a.meta.uri.indexOf("/RealisticTrees/")&&H(a,i);const n=a.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:a.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},c={...t.materialParamsMixin,treeRendering:a.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=V(a,n,c,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=V(a,n,c,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}const l=V(a,n,c);return{lods:l,referenceBoundingBox:l[0].boundingBox,isEsriSymbolResource:a.meta.isEsriSymbolResource,isWosr:!1,remove:a.remove}}function z(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function V(e,t,r,a){const i=e.model,n=Object(c["a"])(),s=new Array,l=new Map,b=new Map;return i.lods.forEach((e,c)=>{if(void 0!==a&&c!==a)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(o["k"])(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(m["k"])()};s.push(g),e.parts.forEach(e=>{const a=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=i.materials.get(e.material),c=Object(o["k"])(e.attributes.texCoord0),x=Object(o["k"])(e.attributes.normal);if(!l.has(a)){if(c){if(Object(o["k"])(s.textureColor)&&!b.has(s.textureColor)){const e=i.textures.get(s.textureColor),t={...e.parameters,preMultiplyAlpha:!0};b.set(s.textureColor,new v["a"](e.data,t))}if(Object(o["k"])(s.textureNormal)&&!b.has(s.textureNormal)){const e=i.textures.get(s.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};b.set(s.textureNormal,new v["a"](e.data,t))}if(Object(o["k"])(s.textureOcclusion)&&!b.has(s.textureOcclusion)){const e=i.textures.get(s.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};b.set(s.textureOcclusion,new v["a"](e.data,t))}if(Object(o["k"])(s.textureEmissive)&&!b.has(s.textureEmissive)){const e=i.textures.get(s.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};b.set(s.textureEmissive,new v["a"](e.data,t))}if(Object(o["k"])(s.textureMetallicRoughness)&&!b.has(s.textureMetallicRoughness)){const e=i.textures.get(s.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};b.set(s.textureMetallicRoughness,new v["a"](e.data,t))}}const n=s.color[0]**(1/p["a"]),d=s.color[1]**(1/p["a"]),u=s.color[2]**(1/p["a"]),f=s.emissiveFactor[0]**(1/p["a"]),m=s.emissiveFactor[1]**(1/p["a"]),h=s.emissiveFactor[2]**(1/p["a"]);l.set(a,new p["b"]({...t,transparent:"BLEND"===s.alphaMode,textureAlphaMode:k(s.alphaMode),textureAlphaCutoff:s.alphaCutoff,diffuse:[n,d,u],ambient:[n,d,u],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?0:2,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(o["k"])(s.textureColor)&&c?b.get(s.textureColor).id:void 0,colorMixMode:s.colorMixMode,normalTextureId:Object(o["k"])(s.textureNormal)&&c?b.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(o["k"])(s.textureOcclusion)&&c?b.get(s.textureOcclusion).id:void 0,emissiveTextureId:Object(o["k"])(s.textureEmissive)&&c?b.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(o["k"])(s.textureMetallicRoughness)&&c?b.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[f,m,h],mrrFactors:[s.metallicFactor,s.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const T=G(e.indices||e.attributes.position.count,e.primitiveType),C=e.attributes.position.count,M=S(u["u"],C);Object(f["c"])(M,e.attributes.position,e.transform);const A=[["position",{data:M.typedBuffer,size:M.elementCount,exclusive:!0}]],j=[["position",T]];if(Object(o["k"])(e.attributes.normal)){const t=S(u["u"],C);Object(d["k"])(n,e.transform),Object(f["a"])(t,e.attributes.normal,n),A.push(["normal",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),j.push(["normal",T])}if(Object(o["k"])(e.attributes.tangent)){const t=S(u["C"],C);Object(d["k"])(n,e.transform),N(t,e.attributes.tangent,n),A.push(["tangent",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),j.push(["tangent",T])}if(Object(o["k"])(e.attributes.texCoord0)){const t=S(u["m"],C);y(t,e.attributes.texCoord0),A.push(["uv0",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),j.push(["uv0",T])}if(Object(o["k"])(e.attributes.color)){const t=S(u["J"],C);if(4===e.attributes.color.elementCount)e.attributes.color instanceof u["C"]?E(t,e.attributes.color,255):e.attributes.color instanceof u["J"]?w(t,e.attributes.color):e.attributes.color instanceof u["H"]&&E(t,e.attributes.color,1/256);else{_(t,255,255,255,255);const r=new u["B"](t.buffer,0,4);e.attributes.color instanceof u["u"]?Object(f["b"])(r,e.attributes.color,255):e.attributes.color instanceof u["B"]?Object(O["a"])(r,e.attributes.color):e.attributes.color instanceof u["z"]&&Object(f["b"])(r,e.attributes.color,1/256)}A.push(["color",{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),j.push(["color",T])}const P=new h["a"](A,j);g.stageResources.geometries.push(P),g.stageResources.materials.push(l.get(a)),c&&(Object(o["k"])(s.textureColor)&&g.stageResources.textures.push(b.get(s.textureColor)),Object(o["k"])(s.textureNormal)&&g.stageResources.textures.push(b.get(s.textureNormal)),Object(o["k"])(s.textureOcclusion)&&g.stageResources.textures.push(b.get(s.textureOcclusion)),Object(o["k"])(s.textureEmissive)&&g.stageResources.textures.push(b.get(s.textureEmissive)),Object(o["k"])(s.textureMetallicRoughness)&&g.stageResources.textures.push(b.get(s.textureMetallicRoughness))),g.numberOfVertices+=C;const R=P.boundingInfo;Object(o["k"])(R)&&(Object(m["r"])(g.boundingBox,R.getBBMin()),Object(m["r"])(g.boundingBox,R.getBBMax()))})}),s}function k(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}function G(e,t){switch(t){case 4:return P(e);case 5:return R(e);case 6:return L(e)}}function H(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const c of s.parts){const s=c.attributes.normal;if(Object(o["j"])(s))return;const d=c.attributes.position,f=d.count,m=Object(a["e"])(),h=Object(a["e"])(),p=Object(a["e"])(),v=S(u["J"],f),b=S(u["u"],f),g=Object(n["a"])(Object(l["b"])(),c.transform);for(let o=0;o<f;o++){d.getVec(o,h),s.getVec(o,m),Object(i["n"])(h,h,c.transform),Object(i["k"])(p,h,t.center),Object(i["c"])(p,p,t.radius);const a=p[2],n=Object(i["q"])(p),l=Math.min(.45+.55*n*n,1);Object(i["c"])(p,p,t.radius),Object(i["n"])(p,p,g),Object(i["s"])(p,p),r+1!==e.model.lods.length&&e.model.lods.length>1&&Object(i["j"])(p,p,m,a>-1?.2:Math.min(-4*a-3.8,1)),b.setVec(o,p),v.set(o,0,255*l),v.set(o,1,255*l),v.set(o,2,255*l),v.set(o,3,255)}c.attributes.normal=b,c.attributes.color=v}}}},"998f":function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));r("c120");var o=r("b2b2"),a=(r("38a4"),r("0b2d")),i=r("8e37"),n=r("1153"),s=r("7ce4"),c=r("0fa6"),l=r("9a64"),d=r("d267"),u=r("377b");class f{constructor(e){this.context=e,this.svgAlwaysPremultipliesAlpha=!1,this._doublePrecisionRequiresObfuscation=null,Object(u["a"])(e).then(e=>{this.svgAlwaysPremultipliesAlpha=!e})}get doublePrecisionRequiresObfuscation(){if(Object(o["j"])(this._doublePrecisionRequiresObfuscation)){const e=v(this.context,!1),t=v(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===t||e/t>5)}return this._doublePrecisionRequiresObfuscation}}let m=null;function h(e){return(Object(o["j"])(m)||m.context!==e)&&(m=new f(e)),m}function p(e){Object(o["k"])(m)&&m.context===e&&(m=null)}function v(e,t){const r=new d["a"](e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});function o(r,o){const a=new i["a"](e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${t?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),n=new Float32Array(6);Object(l["a"])(r,n,3);const s=new Float32Array(6);return Object(l["a"])(o,s,3),e.bindProgram(a),a.setUniform3f("u_highA",n[0],n[2],n[4]),a.setUniform3f("u_lowA",n[1],n[3],n[5]),a.setUniform3f("u_highB",s[0],s[2],s[4]),a.setUniform3f("u_lowB",s[1],s[3],s[5]),a}const u=s["a"].createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),f=new c["a"](e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:u}),m=Object(a["g"])(5633261.287538229,2626832.878767164,1434988.0495278358),h=Object(a["g"])(5633271.46742708,2626873.6381334523,1434963.231608387),p=o(m,h),v=e.getBoundFramebufferObject(),{x:b,y:g,width:x,height:y}=e.getViewport();e.bindFramebuffer(r),e.setViewport(0,0,1,1),e.bindVAO(f),e.drawArrays(5,0,4);const O=new Uint8Array(4);r.readPixels(0,0,1,1,6408,5121,O),p.dispose(),f.dispose(!1),u.dispose(),r.dispose(),e.setViewport(b,g,x,y),e.bindFramebuffer(v);const w=(m[2]-h[2])/25,_=Object(n["n"])(O);return Math.abs(w-_)}},a7d7:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));var o=r("3886"),a=r("47f8"),i=r("7cb4");const n=Object(a["d"])(0,.6,.2);function s(e,t){const r=e.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&e.include(i["a"],t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(o["a"]`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(o["a"]`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(o["a"]`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(o["a"]`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(o["a"]`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(o["a"]`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(o["a"]`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(o["a"]`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}!function(e){function t(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}e.bindUniforms=t}(s||(s={}))},a978:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return T})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return U})),r.d(t,"f",(function(){return N})),r.d(t,"g",(function(){return B})),r.d(t,"h",(function(){return F})),r.d(t,"i",(function(){return x}));var o=r("b2b2"),a=r("0b2d"),i=r("e431"),n=r("d791"),s=r("dae5"),c=r("afe1"),l=r("b139"),d=r("0fc4"),u=r("1c92"),f=r("7577"),m=r("04f0"),h=r("47f8"),p=r("f895"),v=r("0d9f"),b=r("d0ac"),g=r("5a22");function x(e){return(t,r,o)=>(Object(i["j"])(z,t,r,o),!Object(v["c"])(e,z))}class y{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=2}}class O{constructor(){this._transform=Object(c["b"])(),this._transformInverse=new w({value:this._transform},n["a"],c["b"]),this._transformInverseTranspose=new w(this._transformInverse,n["b"],c["b"]),this._transformTranspose=new w({value:this._transform},n["b"],c["b"]),this._transformInverseRotation=new w({value:this._transform},u["b"],s["a"])}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){Object(n["c"])(this._transform,e)}multiplyTransform(e){Object(n["m"])(this._transform,this._transform,e)}set(e){Object(n["c"])(this._transform,e),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,t){this.setTransformMatrix(e),this.multiplyTransform(t),this.invalidateLazyTransforms()}}class w{constructor(e,t,r){this.original=e,this.update=t,this.dirty=!0,this.transform=r()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class _{constructor(){this.min=new T,this.max=new T,this.hud=new T,this.ground=new T}init(e){this.min.init(e),this.max.init(e),this.hud.init(e),this.ground.init(e),this.all=[]}}class T{constructor(e){this.normal=Object(a["e"])(),this.transformation=Object(c["b"])(),this._ray=b["g"].create(),this.init(e)}get ray(){return this._ray}get hasIntersectionPoint(){return null!=this.dist}get distanceInRenderSpace(){if(null!=this.dist)return Object(i["f"])(V,this.ray.direction,this.dist),Object(i["q"])(V)}getIntersectionPoint(e){return!!this.hasIntersectionPoint&&(Object(i["f"])(V,this.ray.direction,this.dist),Object(i["g"])(e,this.ray.origin,V),!0)}getTransformedNormal(e){return Object(i["l"])(k,this.normal),k[3]=0,Object(f["m"])(k,k,this.transformation),Object(i["l"])(e,k),Object(i["s"])(e,e),e}init(e){this.dist=void 0,this.target=void 0,this.name=void 0,this.drapedLayerOrder=void 0,this.drapedLayerGraphicOrder=void 0,this.center=null,this.geometryId=null,this.triangleNr=null,this.intersector="Stage",e?b["g"].copy(e,this._ray):this._ray=b["g"].create()}set(e,t,r,o,s,c,l,d,u,f){e instanceof g["a"]&&(e={type:"stage",obj:e}),this.dist=r,Object(i["l"])(this.normal,o),Object(n["c"])(this.transformation,s),this.target=e,this.name=t,this.drapedLayerOrder=c,this.center=l?Object(a["d"])(l):null,this.geometryId=d,this.triangleNr=u,this.drapedLayerGraphicOrder=f}copyFrom(e){b["g"].copy(e._ray,this._ray),this.dist=e.dist,this.target=e.target,this.name=e.name,this.drapedLayerOrder=e.drapedLayerOrder,this.center=e.center?Object(a["d"])(e.center):null,this.geometryId=e.geometryId,this.triangleNr=e.triangleNr,this.intersector=e.intersector,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,Object(i["l"])(this.normal,e.normal),Object(n["c"])(this.transformation,e.transformation)}toOwner(e){if(!this.target)return null;switch(this.target.type){case"stage":return C(this.target.obj.metadata,e);case"external":switch(this.intersector){case"PointRenderer":return A(this.target,e);case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return C(this.target.metadata,e);case"TerrainRenderer":return e.map&&e.map.ground}}return null}toGraphic(e){if(!this.target)return null;switch(this.target.type){case"stage":return S(this.target.obj.metadata,e);case"external":switch(this.intersector){case"PointRenderer":return j(this.target);case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return S(this.target.metadata,e)}}return null}}function C(e,t){return Object(o["j"])(e)||null==e.layerUid?null:Object(o["k"])(t.graphicsView)&&e.layerUid===t.graphicsView.graphics3d.layer.id?t.graphics:t.map.findLayerByUid(e.layerUid)}function S(e,t){if(Object(o["j"])(e))return null;const r=C(e,t);if(Object(o["j"])(r))return null;if(r===t.graphics)return Object(o["k"])(t.graphicsView)?Object(o["t"])(t.graphicsView.getGraphicFromGraphicUid(e.graphicUid)):null;const a=t.allLayerViews.find(e=>e.layer===r);return a?M(a,e):null}function M(e,t){return!e||e.suspended?null:"getGraphicFromIntersectorMetadata"in e&&t?e.getGraphicFromIntersectorMetadata(t):"getGraphicFromGraphicUid"in e&&null!=t.graphicUid?e.getGraphicFromGraphicUid(t.graphicUid):null}function A(e,t){const r=e.metadata.layerUid;return null!=r?t.map.findLayerByUid(r):null}function j(e){return e.metadata.createGraphic()}class P{constructor(e=0){this.offset=e,this.tmpVertex=Object(a["e"])()}applyToVertex(e,t,r){const o=e+this.localOrigin[0],a=t+this.localOrigin[1],i=r+this.localOrigin[2],n=this.offset/Math.sqrt(o*o+a*a+i*i);return this.tmpVertex[0]=e+o*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=r+i*n,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],o=e[2]+this.localOrigin[2],a=e[3]+this.localOrigin[0],i=e[4]+this.localOrigin[1],n=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+o*o);e[0]+=t*s,e[1]+=r*s,e[2]+=o*s;const c=this.offset/Math.sqrt(a*a+i*i+n*n);return e[3]+=a*c,e[4]+=i*c,e[5]+=n*c,e}}class R{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=Object(a["e"])(),this.mbs=Object(d["c"])(),this.obb={center:Object(a["e"])(),halfSize:Object(h["c"])(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const o=e,a=t,i=r+this.componentLocalOriginLength,n=this.offset/Math.sqrt(o*o+a*a+i*i);return this.tmpVertex[0]=e+o*n,this.tmpVertex[1]=t+a*n,this.tmpVertex[2]=r+i*n,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],o=e[2]+this.componentLocalOriginLength,a=e[3],i=e[4],n=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+o*o);e[0]+=t*s,e[1]+=r*s,e[2]+=o*s;const c=this.offset/Math.sqrt(a*a+i*i+n*n);return e[3]+=a*c,e[4]+=i*c,e[5]+=n*c,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,Object(i["v"])(this.obb.halfSize,e.halfSize,e.quaternion),Object(i["g"])(this.obb.halfSize,this.obb.halfSize,e.center);const o=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*o,this.obb.halfSize[1]+=this.obb.halfSize[1]*o,this.obb.halfSize[2]+=this.obb.halfSize[2]*o,Object(i["k"])(this.obb.halfSize,this.obb.halfSize,e.center),Object(m["b"])(G,e.quaternion),Object(i["v"])(this.obb.halfSize,this.obb.halfSize,G),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}}class L{constructor(e=0){this.offset=e,this.sphere=Object(p["b"])(),this.tmpVertex=Object(a["e"])()}applyToVertex(e,t,r){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*t+o[8]*r+o[12],i=o[1]*e+o[5]*t+o[9]*r+o[13],n=o[2]*e+o[6]*t+o[10]*r+o[14];const s=this.offset/Math.sqrt(a*a+i*i+n*n);a+=a*s,i+=i*s,n+=n*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*i+c[8]*n+c[12],this.tmpVertex[1]=c[1]*a+c[5]*i+c[9]*n+c[13],this.tmpVertex[2]=c[2]*a+c[6]*i+c[10]*n+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const o=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*o,t[1]+=t[1]*o,t[2]+=t[2]*o}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const I=new L;function B(e){return Object(o["k"])(e)?(I.offset=e,I):null}const D=new R;function N(e){return Object(o["k"])(e)?(D.offset=e,D):null}const E=new P;function F(e){return Object(o["k"])(e)?(E.offset=e,E):null}const U="terrain",z=Object(a["e"])(),V=Object(a["e"])(),k=Object(d["c"])(),G=Object(l["a"])()},aab5:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e,t){const r=e.fragment;r.code.add(o["a"]`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===t.doubleSidedMode?r.code.add(o["a"]`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===t.doubleSidedMode?r.code.add(o["a"]`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):r.code.add(o["a"]`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}},b09a:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){e.attributes.add("position","vec3"),e.vertex.code.add(o["a"]`
    vec3 positionModel() { return position; }
  `)}},b0ab:function(e,t,r){"use strict";r.d(t,"a",(function(){return A})),r.d(t,"b",(function(){return M}));var o=r("3886"),a=r("4db9"),i=r("690a"),n=r("d272"),s=r("d047"),c=r("be24"),l=r("ebd5"),d=r("17b0"),u=r("c6d7"),f=r("d017"),m=r("bd75"),h=r("5d5f"),p=r("d539"),v=r("dfaf"),b=r("a7d7"),g=r("17ca"),x=r("c332"),y=r("b09a"),O=r("6cb2"),w=r("6d5b"),_=r("7e21"),T=r("7088"),C=r("ea4b"),S=r("3626");function M(e){const t=new i["a"],r=t.vertex.code,M=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),t.include(y["a"]),t.varyings.add("vpos","vec3"),t.include(c["a"],e),t.include(p["a"],e),t.include(d["a"],e),0!==e.output&&7!==e.output||(t.include(x["a"],e),t.include(a["a"],{linearDepth:!1}),e.offsetBackfaces&&t.include(g["a"]),e.instancedColor&&t.attributes.add("instanceColor","vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(v["a"],e),t.include(m["a"],e),t.include(O["a"],e),t.include(w["a"],e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(o["a"]`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${o["a"].float(l["c"])}) {
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
          ${e.multipassTerrainEnabled?o["a"]`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===e.output&&(t.include(n["a"],e),t.include(l["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(s["a"]),t.include(u["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(S["a"]),M.add(o["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?o["a"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?o["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o["a"]`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?o["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o["a"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===e.output&&(t.include(n["a"],e),t.include(C["a"],e),t.include(T["a"],e),t.include(l["a"],e),e.receiveShadows&&t.include(f["a"],e),e.multipassTerrainEnabled&&(t.fragment.include(s["a"]),t.include(u["b"],e)),t.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(b["b"],e),t.include(h["a"],e),t.fragment.include(S["a"]),M.add(o["a"]`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?o["a"]`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?o["a"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:o["a"]`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===e.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===e.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?o["a"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o["a"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${o["a"]`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===e.pbrMode||2===e.pbrMode?1===e.viewingMode?o["a"]`vec3 normalGround = normalize(vpos + localOrigin);`:o["a"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:o["a"]``}
        ${1===e.pbrMode||2===e.pbrMode?o["a"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(_["a"],e),t}var A=Object.freeze({__proto__:null,build:M})},bc40:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r("0b2d"),a=r("dae5"),i=r("afe1"),n=r("3886"),s=r("6a21"),c=r("b09a");function l(e,t){e.include(c["a"]),e.vertex.include(s["a"],t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),e.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),e.vertex.uniforms.add("uTransform_ProjFromView","mat4"),e.vertex.code.add(n["a"]`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),e.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),e.fragment.code.add(n["a"]`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}!function(e){class t{constructor(){this.worldFromModel_RS=Object(a["a"])(),this.worldFromModel_TH=Object(o["e"])(),this.worldFromModel_TL=Object(o["e"])()}}e.ModelTransform=t;class r{constructor(){this.worldFromView_TH=Object(o["e"])(),this.worldFromView_TL=Object(o["e"])(),this.viewFromCameraRelative_RS=Object(a["a"])(),this.projFromView=Object(i["b"])()}}function n(e,t){e.setUniformMatrix3fv("uTransform_WorldFromModel_RS",t.worldFromModel_RS),e.setUniform3fv("uTransform_WorldFromModel_TH",t.worldFromModel_TH),e.setUniform3fv("uTransform_WorldFromModel_TL",t.worldFromModel_TL)}function s(e,t){e.setUniform3fv("uTransform_WorldFromView_TH",t.worldFromView_TH),e.setUniform3fv("uTransform_WorldFromView_TL",t.worldFromView_TL),e.setUniformMatrix4fv("uTransform_ProjFromView",t.projFromView),e.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",t.viewFromCameraRelative_RS)}e.ViewProjectionTransform=r,e.bindModelTransform=n,e.bindViewProjTransform=s}(l||(l={}))},bd75:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e,t){0===t.output&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(o["a"]`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===t.output||3===t.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("cameraNearFar","vec2"),e.vertex.code.add(o["a"]`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - cameraNearFar[0]) / (cameraNearFar[1] - cameraNearFar[0]);
      }
    `)):e.vertex.code.add(o["a"]`
      void forwardLinearDepth() {}
    `)}},c332:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("3886");function a(e){const t=o["a"]`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;e.fragment.code.add(t),e.vertex.code.add(t)}function i(e,t){0===t.normalType&&(e.attributes.add("normal","vec3"),e.vertex.code.add(o["a"]`
      vec3 normalModel() {
        return normal;
      }
    `)),1===t.normalType&&(e.include(a),e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(o["a"]`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===t.normalType&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o["a"]`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}},d017:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("3886"),a=r("501b");function i(e){e.fragment.include(a["a"]),e.fragment.uniforms.add("uShadowMapTex","sampler2D"),e.fragment.uniforms.add("uShadowMapNum","int"),e.fragment.uniforms.add("uShadowMapDistance","vec4"),e.fragment.uniforms.add("uShadowMapMatrix","mat4",4),e.fragment.uniforms.add("uDepthHalfPixelSz","float"),e.fragment.code.add(o["a"]`
    int chooseCascade(float _linearDepth, out mat4 mat) {
      vec4 distance = uShadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? uShadowMapMatrix[0] : i == 1 ? uShadowMapMatrix[1] : i == 2 ? uShadowMapMatrix[2] : uShadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= uShadowMapNum) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      return filterShadow(uv, lvpos, uDepthHalfPixelSz, uShadowMapTex);
    }
  `)}!function(e){function t(e,t,r){t.shadowMappingEnabled&&(t.shadowMap.bind(e,r),t.shadowMap.bindView(e,t.origin))}function r(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}function o(e,t){t.shadowMappingEnabled&&t.shadowMap.bindView(e,t.origin)}e.bindUniforms=t,e.bindViewCustomOrigin=r,e.bindView=o}(i||(i={}))},d539:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var o=r("0b2d"),a=r("3886"),i=r("9a64"),n=r("6a21");function s(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),t.instancedDoublePrecision&&(e.vertex.include(n["a"],t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[a["a"]`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,a["a"]`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?a["a"]`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,a["a"]`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,a["a"]`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangets?a["a"]`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:a["a"]``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===t.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}!function(e){class t{}function r(e,t){Object(i["b"])(t,c,l,3),e.setUniform3fv("viewOriginHi",c),e.setUniform3fv("viewOriginLo",l)}e.Uniforms=t,e.bindCustomOrigin=r}(s||(s={}));const c=Object(o["e"])(),l=Object(o["e"])()},d56e:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("c120");var o=r("3886");function a(e,t){o["a"]`
  /*
  *  ${t.name}
  *  ${0===t.output?"RenderOutput: Color":1===t.output?"RenderOutput: Depth":3===t.output?"RenderOutput: Shadow":2===t.output?"RenderOutput: Normal":4===t.output?"RenderOutput: Highlight":""}
  */
  `}},da6c:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("e92d");const a=o["a"].getLogger("esri.views.3d.support.buffer.math")},dbad:function(e,t,r){"use strict";r.d(t,"a",(function(){return V})),r.d(t,"b",(function(){return U}));var o=r("0b2d"),a=r("e431"),i=r("dae5"),n=r("fc00"),s=r("a978"),c=r("68af"),l=r("7c51"),d=r("35b3"),u=r("5957"),f=r("ebd5"),m=r("7438"),h=r("a4ee"),p=r("c3a4"),v=r("ca98"),b=r("da35"),g=r("fa1e"),x=r("8e37"),y=r("189c"),O=r("8e97"),w=r("d272"),_=r("6a07"),T=r("be24"),C=r("17b0"),S=r("c6d7"),M=r("87b7"),A=r("d017"),j=r("6a21"),P=r("d539"),R=r("a7d7"),L=r("0310");class I extends v["a"]{initializeProgram(e){const t=I.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?r.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?3:0,doubleSidedMode:r.doubleSidedMode,vertexTangets:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(j["b"])(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new x["a"](e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),g["a"])}bindPass(e,t,r){O["a"].bindProjectionMatrix(this.program,r.camera.projectionMatrix);const o=this.configuration.output;(1===this.configuration.output||r.multipassTerrainEnabled||3===o)&&this.program.setUniform2fv("cameraNearFar",r.camera.nearFar),r.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",r.inverseViewport),Object(S["a"])(this.program,e,r)),7===o&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",l["b"][t.colorMixMode])),0===o?(r.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",l["b"][t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&R["b"].bindUniforms(this.program,t,this.configuration.isSchematic)):4===o&&_["a"].bindOutputHighlight(e,this.program,r),T["a"].bindUniformsForSymbols(this.program,t),C["a"].bindUniforms(this.program,t,r),Object(l["a"])(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?Object(o["g"])(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;O["a"].bindViewCustomOrigin(this.program,t,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&O["a"].bindCamPosition(this.program,t,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&P["a"].bindCustomOrigin(this.program,t),w["a"].bindUniforms(this.program,this.configuration,e.slicePlane,t),0===this.configuration.output&&A["a"].bindViewCustomOrigin(this.program,e,t)}setPipeline(e,t){const r=this.configuration,o=3===e,a=2===e;return Object(y["e"])({blending:0!==r.output&&7!==r.output||!r.transparent?null:o?m["f"]:Object(m["a"])(e),culling:D(r),depthTest:{func:Object(m["b"])(e)},depthWrite:o||a?r.writeDepth&&y["d"]:null,colorWrite:y["c"],stencilWrite:r.sceneHasOcludees?M["j"]:null,stencilTest:r.sceneHasOcludees?t?M["f"]:M["e"]:null,polygonOffset:o||a?null:Object(m["g"])(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}function B(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}I.shader=new p["a"](L["a"],()=>r.e("chunk-2d0cb6c5").then(r.bind(null,"4a35")));const D=e=>B(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class N extends b["a"]{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3,this.multipassTerrainEnabled=!1,this.cullAboveGround=!0}}Object(h["a"])([Object(b["b"])({count:8})],N.prototype,"output",void 0),Object(h["a"])([Object(b["b"])({count:4})],N.prototype,"alphaDiscardMode",void 0),Object(h["a"])([Object(b["b"])({count:3})],N.prototype,"doubleSidedMode",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"isSchematic",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"vertexColors",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"offsetBackfaces",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"symbolColors",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"vvSize",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"vvColor",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"verticalOffset",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"receiveShadows",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"slicePlaneEnabled",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"sliceHighlightDisabled",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"receiveAmbientOcclusion",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"screenSizePerspective",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"textureAlphaPremultiplied",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"hasColorTexture",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"usePBR",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"hasEmissionTexture",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"hasOcclusionTexture",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"hasNormalTexture",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"instanced",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"instancedColor",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"instancedDoublePrecision",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"vertexTangents",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"normalsTypeDerivate",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"writeDepth",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"sceneHasOcludees",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"transparent",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"enableOffset",void 0),Object(h["a"])([Object(b["b"])({count:3})],N.prototype,"cullFace",void 0),Object(h["a"])([Object(b["b"])({count:4})],N.prototype,"transparencyPassType",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"multipassTerrainEnabled",void 0),Object(h["a"])([Object(b["b"])()],N.prototype,"cullAboveGround",void 0);var E=r("b0ab");class F extends I{initializeProgram(e){const t=F.shader.get(),r=this.configuration,o=t.build({OITEnabled:0===r.transparencyPassType,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:r.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:r.hasColorTexture?1:0,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(j["b"])(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new x["a"](e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),g["a"])}}F.shader=new p["a"](E["a"],()=>r.e("chunk-2d0ab897").then(r.bind(null,"1662")));class U extends d["a"]{constructor(e){super(e,k),this.supportsEdges=!0,this.techniqueConfig=new N,this.vertexBufferLayout=U.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?U.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e&&6!==e&&7!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,o=e.symbolColors,a=!!t&&t.indexOf("color")>-1,i=e.vvColorEnabled,n="replace"===e.colorMixMode,s=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return r&&(a||i||o)?!!n||s:r?n?c:s:a||i||o?!!n||s:n?c:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,this.techniqueConfig.multipassTerrainEnabled=!!t&&t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=!t||t.cullAboveGround,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!(!t||!t.ssaoEnabled)&&this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<m["e"]),this.techniqueConfig}intersect(e,t,r,o,i,n,c){if(null!==this.params.verticalOffset){const e=o.camera;Object(a["x"])(J,r[12],r[13],r[14]);let t=null;switch(o.viewingMode){case 1:t=Object(a["s"])(W,J);break;case 2:t=Object(a["l"])(W,$)}let s=0;if(null!==this.params.verticalOffset){const r=Object(a["k"])(Q,J,e.eye),o=Object(a["q"])(r),i=Object(a["f"])(r,r,1/o);let n=null;this.params.screenSizePerspective&&(n=Object(a["i"])(t,i)),s+=Object(l["l"])(e,o,this.params.verticalOffset,n,this.params.screenSizePerspective)}Object(a["f"])(t,t,s),Object(a["y"])(X,t,o.transform.inverseRotation),i=Object(a["k"])(H,i,X),n=Object(a["k"])(q,n,X)}Object(l["i"])(e,t,o,i,n,Object(s["g"])(o.verticalOffset),c)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new z(e)}createBufferWriter(){return new G(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=Object(n["a"])().vec3f("position").vec3f("normal");return e.vertexTangents&&r.vec4f("tangent"),t&&r.vec2f("uv0"),e.vertexColors&&r.vec4u8("color"),e.symbolColors&&r.vec4u8("symbolColor"),r}static getInstanceBufferLayout(e){let t=Object(n["a"])();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class z extends c["a"]{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(F,this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(I,this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const V=2.1,k={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(i["a"])(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:f["b"],textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...d["b"]};class G{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get("position").length}write(e,t,r,o){Object(u["c"])(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,o)}}const H=Object(o["e"])(),q=Object(o["e"])(),$=Object(o["g"])(0,0,1),W=Object(o["e"])(),X=Object(o["e"])(),J=Object(o["e"])(),Q=Object(o["e"])()},dea3:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.code.add(o["a"]`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}},dfaf:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("3886");function a(e,t){1===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(o["a"]`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===t.attributeTextureCoordinates&&(e.attributes.add("uv0","vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add("uvRegion","vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(o["a"]`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===t.attributeTextureCoordinates&&e.vertex.code.add(o["a"]`
      void forwardTextureCoordinates() {}
    `)}},ea4b:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var o=r("3886"),a=r("c51b"),i=r("d017"),n=r("5d5f"),s=r("7088");function c(e,t){const r=e.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(o["a"]`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===a?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(o["a"]`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
      }
    `)):2===a&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(o["a"]`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||r.code.add(o["a"]`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}var l=r("dea3");function d(e,t){const r=e.fragment;e.include(l["a"]),e.include(s["a"],t),0!==t.pbrMode&&e.include(n["a"],t),e.include(c,t),t.receiveShadows&&e.include(i["a"],t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),e.include(a["a"]),r.code.add(o["a"]`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===t.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),t.useOldSceneLightInterface?r.code.add(o["a"]`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===t.viewingMode?r.code.add(o["a"]`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):r.code.add(o["a"]`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),r.code.add(o["a"]`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===t.pbrMode||4===t.pbrMode?r.code.add(o["a"]`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==t.pbrMode&&2!==t.pbrMode||(r.code.add(o["a"]`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
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
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),r.code.add(o["a"]`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),r.code.add(o["a"]`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),r.code.add(o["a"]`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),r.code.add(o["a"]`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===t.pbrMode?o["a"]`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:o["a"]`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}}}]);