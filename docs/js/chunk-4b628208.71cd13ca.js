(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b628208"],{"0959":function(t,n,e){"use strict";e.r(n),e.d(n,"ElevationSamplerWorker",(function(){return o})),e.d(n,"default",(function(){return o}));var i=e("c120"),r=e("b2b2"),a=e("ce76"),s=e("e9ba");class o{async createIndex(t,n){const e=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new a["a"];const i=this.createMeshData(t),s=Object(r["l"])(n)?await n.invoke("createIndexThread",i,{transferList:e}):this.createIndexThread(i).result;return this.createPooledRBush().fromJSON(s)}createIndexThread(t){const n=new Float64Array(t.position),e=this.createPooledRBush();return t.components?this.createIndexComponentsThread(e,n,t.components.map(t=>new Uint32Array(t))):this.createIndexAllThread(e,n)}createIndexAllThread(t,n){const e=new Array(n.length/9);let i=0;for(let r=0;r<n.length;r+=9)e[i++]=h(n,r+0,r+3,r+6);return t.load(e),{result:t.toJSON()}}createIndexComponentsThread(t,n,e){let i=0;for(const s of e)i+=s.length/3;const r=new Array(i);let a=0;for(const s of e)for(let t=0;t<s.length;t+=3)r[a++]=h(n,3*s[t+0],3*s[t+1],3*s[t+2]);return t.load(r),{result:t.toJSON()}}createMeshData(t){const n=(t.transform?Object(s["b"])({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(t=>!t.faces)?{position:n}:{position:n,components:t.components.map(t=>t.faces)}}createPooledRBush(){return new a["a"](9,Object(i["a"])("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function h(t,n,e,i){return{minX:Math.min(t[n+0],t[e+0],t[i+0]),maxX:Math.max(t[n+0],t[e+0],t[i+0]),minY:Math.min(t[n+1],t[e+1],t[i+1]),maxY:Math.max(t[n+1],t[e+1],t[i+1]),p0:[t[n+0],t[n+1],t[n+2]],p1:[t[e+0],t[e+1],t[e+2]],p2:[t[i+0],t[i+1],t[i+2]]}}},4637:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i,r,a,s={exports:{}};i=s,r=function(){function t(t,e,r,a,s){n(t,e,r||0,a||t.length-1,s||i)}function n(t,i,r,a,s){for(;a>r;){if(a-r>600){var o=a-r+1,h=i-r+1,l=Math.log(o),c=.5*Math.exp(2*l/3),m=.5*Math.sqrt(l*c*(o-c)/o)*(h-o/2<0?-1:1);n(t,i,Math.max(r,Math.floor(i-h*c/o+m)),Math.min(a,Math.floor(i+(o-h)*c/o+m)),s)}var u=t[i],d=r,f=a;for(e(t,r,i),s(t[a],u)>0&&e(t,r,a);d<f;){for(e(t,d,f),d++,f--;s(t[d],u)<0;)d++;for(;s(t[f],u)>0;)f--}0===s(t[r],u)?e(t,r,f):e(t,++f,a),f<=i&&(r=f+1),i<=f&&(a=f-1)}}function e(t,n,e){var i=t[n];t[n]=t[e],t[e]=i}function i(t,n){return t<n?-1:t>n?1:0}return t},void 0!==(a=r())&&(i.exports=a);const o=s.exports},ce76:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("b50f"),r=e("b2b2"),a=e("8a44"),s=e("4637");class o{constructor(t=9,n){this.compareMinX=m,this.compareMinY=u,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),Y.prune(),B.prune(),_.prune(),b.prune()}all(t){this._all(this.data,t)}search(t,n){let e=this.data;const i=this.toBBox;if(g(t,e))for(Y.clear();e;){for(let r=0,a=e.children.length;r<a;r++){const a=e.children[r],s=e.leaf?i(a):a;g(t,s)&&(e.leaf?n(a):M(t,s)?this._all(a,n):Y.push(a))}e=Y.pop()}}collides(t){let n=this.data;const e=this.toBBox;if(!g(t,n))return!1;for(Y.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],a=n.leaf?e(r):r;if(g(t,a)){if(n.leaf||M(t,a))return!0;Y.push(r)}}n=Y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new A([]),this}remove(t){if(!t)return this;let n,e=this.data,a=null,s=0,o=!1;const h=this.toBBox(t);for(_.clear(),b.clear();e||_.length>0;){var l;if(e||(e=Object(r["d"])(_.pop()),a=_.data[_.length-1],s=null!=(l=b.pop())?l:0,o=!0),e.leaf&&(n=Object(i["g"])(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),_.push(e),this._condense(_),this;o||e.leaf||!M(e,h)?a?(s++,e=a.children[s],o=!1):e=null:(_.push(e),b.push(s),s=0,a=e,e=e.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){let e=t;for(B.clear();e;){var i;if(!0===e.leaf)for(const t of e.children)n(t);else B.pushArray(e.children);e=null!=(i=B.pop())?i:null}}_build(t,n,e,i){const r=e-n+1;let a=this._maxEntries;if(r<=a){const i=new A(t.slice(n,e+1));return h(i,this.toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/a**(i-1)));const s=new O([]);s.height=i;const o=Math.ceil(r/a),l=o*Math.ceil(Math.sqrt(a));X(t,n,e,l,this.compareMinX);for(let h=n;h<=e;h+=l){const n=Math.min(h+l-1,e);X(t,h,n,o,this.compareMinY);for(let e=h;e<=n;e+=o){const r=Math.min(e+o-1,n);s.children.push(this._build(t,e,r,i-1))}}return h(s,this.toBBox),s}_chooseSubtree(t,n,e,i){for(;i.push(n),!0!==n.leaf&&i.length-1!==e;){let e,i=1/0,r=1/0;for(let a=0,s=n.children.length;a<s;a++){const s=n.children[a],o=d(s),h=x(t,s)-o;h<r?(r=h,i=o<i?o:i,e=s):h===r&&o<i&&(i=o,e=s)}n=e||n.children[0]}return n}_insert(t,n,e){const i=this.toBBox,r=e?t:i(t);_.clear();const a=this._chooseSubtree(r,this.data,n,_);for(a.children.push(t),c(a,r);n>=0&&_.data[n].children.length>this._maxEntries;)this._split(_,n),n--;this._adjustParentBBoxes(r,_,n)}_split(t,n){const e=t.data[n],i=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,i);const a=this._chooseSplitIndex(e,r,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const s=e.children.splice(a,e.children.length-a),o=e.leaf?new A(s):new O(s);o.height=e.height,h(e,this.toBBox),h(o,this.toBBox),n?t.data[n-1].children.push(o):this._splitRoot(e,o)}_splitRoot(t,n){this.data=new O([t,n]),this.data.height=t.height+1,h(this.data,this.toBBox)}_chooseSplitIndex(t,n,e){let i,r,a;i=r=1/0;for(let s=n;s<=e-n;s++){const n=l(t,0,s,this.toBBox),o=l(t,s,e,this.toBBox),h=p(n,o),c=d(n)+d(o);h<i?(i=h,a=s,r=c<r?c:r):h===i&&c<r&&(r=c,a=s)}return a}_chooseSplitAxis(t,n,e){const i=t.leaf?this.compareMinX:m,r=t.leaf?this.compareMinY:u;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,r)&&t.children.sort(i)}_allDistMargin(t,n,e,i){t.children.sort(i);const r=this.toBBox,a=l(t,0,n,r),s=l(t,e-n,e,r);let o=f(a)+f(s);for(let h=n;h<e-n;h++){const n=t.children[h];c(a,t.leaf?r(n):n),o+=f(a)}for(let h=e-n-1;h>=n;h--){const n=t.children[h];c(s,t.leaf?r(n):n),o+=f(s)}return o}_adjustParentBBoxes(t,n,e){for(let i=e;i>=0;i--)c(n.data[i],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const r=t.data[n-1],a=r.children;a.splice(Object(i["g"])(a,e,a.length,r.indexHint),1)}else this.clear();else h(e,this.toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,n){l(t,0,t.children.length,n,t)}function l(t,n,e,i,r){r||(r=new A([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let a,s=n;s<e;s++)a=t.children[s],c(r,t.leaf?i(a):a);return r}function c(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function m(t,n){return t.minX-n.minX}function u(t,n){return t.minY-n.minY}function d(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function p(t,n){const e=Math.max(t.minX,n.minX),i=Math.max(t.minY,n.minY),r=Math.min(t.maxX,n.maxX),a=Math.min(t.maxY,n.maxY);return Math.max(0,r-e)*Math.max(0,a-i)}function M(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function g(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function X(t,n,e,i,a){const o=[n,e];for(;o.length;){const n=Object(r["d"])(o.pop()),e=Object(r["d"])(o.pop());if(n-e<=i)continue;const h=e+Math.ceil((n-e)/i/2)*i;Object(s["a"])(t,h,e,n,a),o.push(e,h,h,n)}}const Y=new a["a"],B=new a["a"],_=new a["a"],b=new a["a"]({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new i["a"]}}class A extends v{constructor(t){super(),this.children=t,this.leaf=!0}}class O extends v{constructor(t){super(),this.children=t,this.leaf=!1}}}}]);