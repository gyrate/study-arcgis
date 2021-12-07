(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0025"],{"9b17":function(t,i,e){"use strict";e.r(i),e.d(i,"Bloom",(function(){return u}));e("c120"),e("38a4"),e("9f8b"),e("1956");var s=e("d267"),r=e("823a");const o=5,n=[1,0],a=[0,1],h=[1,.8,.6,.4,.2],l=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];class u{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(o),this._nMips=o,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:{a_position:0}},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){if(this._quad&&(this._quad.dispose(),this._quad=null),this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null),this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null),this._mipsFBOs){for(let t=0;t<this._nMips;t++)this._mipsFBOs[t]&&(this._mipsFBOs[t].horizontal.dispose(),this._mipsFBOs[t].vertical.dispose());this._mipsFBOs=null}}draw(t,i,e){const{width:s,height:u}=i,{context:p,painter:d}=t,{materialManager:c}=d,m=p.gl,_=this._programDesc,{strength:f,radius:g,threshold:b}=e;this._quad||(this._quad=new r["a"](p,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(t,s,u),p.setStencilTestEnabled(!1),p.setBlendingEnabled(!0),p.setBlendFunction(1,771),p.setStencilWriteMask(0);const F=this._quad;F.bind(),p.bindFramebuffer(this._intensityFBO);const B=c.getProgram(t,_.luminosityHighPass);p.bindProgram(B),p.bindTexture(i.colorTexture,0),B.setUniform1i("u_texture",0),B.setUniform3fv("u_defaultColor",[0,0,0]),B.setUniform1f("u_defaultOpacity",0),B.setUniform1f("u_luminosityThreshold",b),B.setUniform1f("u_smoothWidth",.01);const T=[Math.round(s/2),Math.round(u/2)];p.setViewport(0,0,T[0],T[1]),p.setClearColor(0,0,0,0),p.clear(m.COLOR_BUFFER_BIT),F.draw(),p.setBlendingEnabled(!1);let O=this._intensityFBO.colorTexture;for(let r=0;r<this._nMips;r++){const i=c.getProgram(t,_.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[r]}]);p.bindProgram(i),p.bindTexture(O,r+1),i.setUniform1i("u_colorTexture",r+1),i.setUniform2fv("u_texSize",T),i.setUniform2fv("u_direction",n),p.setViewport(0,0,T[0],T[1]);const e=this._mipsFBOs[r];p.bindFramebuffer(e.horizontal),F.draw(),O=e.horizontal.colorTexture,p.bindFramebuffer(e.vertical),p.bindTexture(O,r+1),i.setUniform2fv("u_direction",a),F.draw(),O=e.vertical.colorTexture,T[0]=Math.round(T[0]/2),T[1]=Math.round(T[1]/2)}p.setViewport(0,0,s,u);const x=c.getProgram(t,_.composite,[{name:"nummips",value:o}]);p.bindFramebuffer(this._compositeFBO),p.bindProgram(x),x.setUniform1f("u_bloomStrength",f),x.setUniform1f("u_bloomRadius",g),x.setUniform1fv("u_bloomFactors",h),x.setUniform3fv("u_bloomTintColors",l),p.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),x.setUniform1i("u_blurTexture1",1),p.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),x.setUniform1i("u_blurTexture2",2),p.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),x.setUniform1i("u_blurTexture3",3),p.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),x.setUniform1i("u_blurTexture4",4),p.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),x.setUniform1i("u_blurTexture5",5),F.draw(),p.bindFramebuffer(i),p.setBlendingEnabled(!0);const w=c.getProgram(t,_.blit);p.bindProgram(w),p.bindTexture(this._compositeFBO.colorTexture,6),w.setUniform1i("u_texture",6),p.setBlendFunction(1,1),F.draw(),F.unbind(),p.setBlendFunction(1,771),p.setStencilTestEnabled(!0)}_createOrResizeResources(t,i,e){const{context:r}=t;if(this._compositeFBO&&this._size[0]===i&&this._size[1]===e)return;this._size[0]=i,this._size[1]=e;const o=[Math.round(i/2),Math.round(e/2)];this._compositeFBO?this._compositeFBO.resize(i,e):this._compositeFBO=new s["a"](r,{colorTarget:0,depthStencilTarget:0,width:i,height:e}),this._intensityFBO?this._intensityFBO.resize(o[0],o[1]):this._intensityFBO=new s["a"](r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]});for(let n=0;n<this._nMips;n++)this._mipsFBOs[n]?(this._mipsFBOs[n].horizontal.resize(o[0],o[1]),this._mipsFBOs[n].vertical.resize(o[0],o[1])):this._mipsFBOs[n]={horizontal:new s["a"](r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),vertical:new s["a"](r,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]})},o[0]=Math.round(o[0]/2),o[1]=Math.round(o[1]/2)}}}}]);
//# sourceMappingURL=chunk-2d0f0025.aa58aa65.js.map