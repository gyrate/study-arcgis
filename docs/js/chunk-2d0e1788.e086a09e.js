(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1788"],{"7b29":function(t,e,i){"use strict";i.r(e),i.d(e,"DropShadow",(function(){return u}));i("c120");var r=i("a915"),s=(i("9f8b"),i("1956"),i("a1ff")),o=i("d267"),a=i("823a");const n=[1,0],l=[0,1];class u{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(t,e,i){const{context:s,state:o,painter:u,pixelRatio:h}=t,{materialManager:d}=u,p=this._programDesc,c=e.width,_=e.height,f=[Math.round(c/2),Math.round(_/2)],{blurRadius:B,offsetX:m,offsetY:b,color:g}=i,F=[h*Object(r["h"])(m/2),h*Object(r["h"])(b/2)];this._createOrResizeResources(t,c,_,f);const w=this._horizontalBlurFBO,T=this._verticalBlurFBO;s.setStencilWriteMask(0),s.setStencilTestEnabled(!1),s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1);const O=this._layerFBOTexture;e.copyToTexture(0,0,c,_,0,0,O),this._quad||(this._quad=new a["a"](s,[-1,-1,1,-1,-1,1,1,1])),s.setViewport(0,0,f[0],f[1]);const x=this._quad;x.bind(),s.setBlendingEnabled(!1);const v=d.getProgram(t,p.blur,[{name:"radius",value:Math.ceil(B)}]);s.bindProgram(v),s.bindFramebuffer(w),s.bindTexture(e.colorTexture,4),v.setUniformMatrix3fv("u_displayViewMat3",o.displayMat3),v.setUniform2fv("u_offset",F),v.setUniform1i("u_colorTexture",4),v.setUniform2fv("u_texSize",f),v.setUniform2fv("u_direction",n),v.setUniform1f("u_sigma",B),x.draw(),s.bindFramebuffer(T),s.bindTexture(w.colorTexture,5),v.setUniformMatrix3fv("u_displayViewMat3",o.displayMat3),v.setUniform2fv("u_offset",[0,0]),v.setUniform1i("u_colorTexture",5),v.setUniform2fv("u_direction",l),x.draw(),s.bindFramebuffer(e),s.setViewport(0,0,c,_);const z=d.getProgram(t,p.composite);s.bindProgram(z),s.bindTexture(T.colorTexture,2),z.setUniform1i("u_blurTexture",2),s.bindTexture(O,3),z.setUniform1i("u_layerFBOTexture",3),z.setUniform4fv("u_shadowColor",[g[3]*(g[0]/255),g[3]*(g[1]/255),g[3]*(g[2]/255),g[3]]),x.draw(),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!0),s.setBlendFunction(1,771),x.unbind()}_createOrResizeResources(t,e,i,r){const{context:a}=t;this._horizontalBlurFBO&&this._size[0]===e&&this._size[1]===i||(this._size[0]=e,this._size[1]=i,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(r[0],r[1]):this._horizontalBlurFBO=new o["a"](a,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(r[0],r[1]):this._verticalBlurFBO=new o["a"](a,{colorTarget:0,depthStencilTarget:0,width:r[0],height:r[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r[0],height:r[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(e,i):this._layerFBOTexture=new s["a"](a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:e,height:i}))}}}}]);