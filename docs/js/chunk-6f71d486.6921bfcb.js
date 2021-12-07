(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f71d486","chunk-2d0d3e74","chunk-2d0d3e74"],{"0959":function(t,n,e){"use strict";e.r(n),e.d(n,"ElevationSamplerWorker",(function(){return o}));var i=e("c120"),r=e("b2b2"),a=e("ce76");class o{async createIndex(t,n){const e=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new a["a"];const i=this.createMeshData(t),o=Object(r["k"])(n)?await n.invoke("createIndexThread",i,{transferList:e}):this.createIndexThread(i).result;return this.createPooledRBush().fromJSON(o)}createIndexThread(t){const n=new Float64Array(t.position),e=this.createPooledRBush();return t.components?this.createIndexComponentsThread(e,n,t.components.map(t=>new Uint32Array(t))):this.createIndexAllThread(e,n)}createIndexAllThread(t,n){const e=new Array(n.length/9);let i=0;for(let r=0;r<n.length;r+=9)e[i++]=s(n,r+0,r+3,r+6);return t.load(e),{result:t.toJSON()}}createIndexComponentsThread(t,n,e){let i=0;for(const o of e)i+=o.length/3;const r=new Array(i);let a=0;for(const o of e)for(let t=0;t<o.length;t+=3)r[a++]=s(n,3*o[t+0],3*o[t+1],3*o[t+2]);return t.load(r),{result:t.toJSON()}}createMeshData(t){const n=t.vertexAttributes.position.buffer;return!t.components||t.components.some(t=>!t.faces)?{position:n}:{position:n,components:t.components.map(t=>t.faces)}}createPooledRBush(){return new a["a"](9,Object(i["a"])("csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function s(t,n,e,i){return{minX:Math.min(t[n+0],t[e+0],t[i+0]),maxX:Math.max(t[n+0],t[e+0],t[i+0]),minY:Math.min(t[n+1],t[e+1],t[i+1]),maxY:Math.max(t[n+1],t[e+1],t[i+1]),p0:[t[n+0],t[n+1],t[n+2]],p1:[t[e+0],t[e+1],t[e+2]],p2:[t[i+0],t[i+1],t[i+2]]}}n["default"]=o},4637:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("5f6c"),r=Object(i["b"])((function(t){var n;void 0!==(n=function(){function t(t,e,r,a,o){n(t,e,r||0,a||t.length-1,o||i)}function n(t,i,r,a,o){for(;a>r;){if(a-r>600){var s=a-r+1,h=i-r+1,c=Math.log(s),l=.5*Math.exp(2*c/3),u=.5*Math.sqrt(c*l*(s-l)/s)*(h-s/2<0?-1:1);n(t,i,Math.max(r,Math.floor(i-h*l/s+u)),Math.min(a,Math.floor(i+(s-h)*l/s+u)),o)}var d=t[i],m=r,f=a;for(e(t,r,i),o(t[a],d)>0&&e(t,r,a);m<f;){for(e(t,m,f),m++,f--;o(t[m],d)<0;)m++;for(;o(t[f],d)>0;)f--}0===o(t[r],d)?e(t,r,f):e(t,++f,a),f<=i&&(r=f+1),i<=f&&(a=f-1)}}function e(t,n,e){var i=t[n];t[n]=t[e],t[e]=i}function i(t,n){return t<n?-1:t>n?1:0}return t}())&&(t.exports=n)}))},"5f6c":function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i}));"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof t||"undefined"!=typeof self&&self;function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return a(t,null==n?e.path:n)}},e.exports),e.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}}).call(this,e("c8ba"))},ce76:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var i=e("b2b2"),r=e("b50f"),a=e("8a44"),o=e("4637");class s{constructor(t=9,n){this.compareMinX=u,this.compareMinY=d,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}destroy(){this.clear(),Y.prune(),B.prune(),_.prune(),w.prune()}all(t){this._all(this.data,t)}search(t,n){let e=this.data;const i=this.toBBox;if(g(t,e))for(Y.clear();e;){for(let r=0,a=e.children.length;r<a;r++){const a=e.children[r],o=e.leaf?i(a):a;g(t,o)&&(e.leaf?n(a):M(t,o)?this._all(a,n):Y.push(a))}e=Y.pop()}}collides(t){let n=this.data;const e=this.toBBox;if(!g(t,n))return!1;for(Y.clear();n;){for(let i=0,r=n.children.length;i<r;i++){const r=n.children[i],a=n.leaf?e(r):r;if(g(t,a)){if(n.leaf||M(t,a))return!0;Y.push(r)}}n=Y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,e=t.length;n<e;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new y([]),this}remove(t){if(!t)return this;let n,e=this.data,a=null,o=0,s=!1;const h=this.toBBox(t);for(_.clear(),w.clear();e||_.length>0;){var c;if(e||(e=Object(i["d"])(_.pop()),a=_.data[_.length-1],o=null!=(c=w.pop())?c:0,s=!0),e.leaf&&(n=Object(r["g"])(e.children,t,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),_.push(e),this._condense(_),this;s||e.leaf||!M(e,h)?a?(o++,e=a.children[o],s=!1):e=null:(_.push(e),w.push(o),o=0,a=e,e=e.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){let e=t;for(B.clear();e;){var i;if(!0===e.leaf)for(const t of e.children)n(t);else B.pushArray(e.children);e=null!=(i=B.pop())?i:null}}_build(t,n,e,i){const r=e-n+1;let a=this._maxEntries;if(r<=a){const i=new y(t.slice(n,e+1));return h(i,this.toBBox),i}i||(i=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/a**(i-1)));const o=new O([]);o.height=i;const s=Math.ceil(r/a),c=s*Math.ceil(Math.sqrt(a));X(t,n,e,c,this.compareMinX);for(let h=n;h<=e;h+=c){const n=Math.min(h+c-1,e);X(t,h,n,s,this.compareMinY);for(let e=h;e<=n;e+=s){const r=Math.min(e+s-1,n);o.children.push(this._build(t,e,r,i-1))}}return h(o,this.toBBox),o}_chooseSubtree(t,n,e,i){for(;i.push(n),!0!==n.leaf&&i.length-1!==e;){let e,i=1/0,r=1/0;for(let a=0,o=n.children.length;a<o;a++){const o=n.children[a],s=m(o),h=p(t,o)-s;h<r?(r=h,i=s<i?s:i,e=o):h===r&&s<i&&(i=s,e=o)}n=e||n.children[0]}return n}_insert(t,n,e){const i=this.toBBox,r=e?t:i(t);_.clear();const a=this._chooseSubtree(r,this.data,n,_);for(a.children.push(t),l(a,r);n>=0&&_.data[n].children.length>this._maxEntries;)this._split(_,n),n--;this._adjustParentBBoxes(r,_,n)}_split(t,n){const e=t.data[n],i=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,i);const a=this._chooseSplitIndex(e,r,i);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=e.children.splice(a,e.children.length-a),s=e.leaf?new y(o):new O(o);s.height=e.height,h(e,this.toBBox),h(s,this.toBBox),n?t.data[n-1].children.push(s):this._splitRoot(e,s)}_splitRoot(t,n){this.data=new O([t,n]),this.data.height=t.height+1,h(this.data,this.toBBox)}_chooseSplitIndex(t,n,e){let i,r,a;i=r=1/0;for(let o=n;o<=e-n;o++){const n=c(t,0,o,this.toBBox),s=c(t,o,e,this.toBBox),h=x(n,s),l=m(n)+m(s);h<i?(i=h,a=o,r=l<r?l:r):h===i&&l<r&&(r=l,a=o)}return a}_chooseSplitAxis(t,n,e){const i=t.leaf?this.compareMinX:u,r=t.leaf?this.compareMinY:d;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,r)&&t.children.sort(i)}_allDistMargin(t,n,e,i){t.children.sort(i);const r=this.toBBox,a=c(t,0,n,r),o=c(t,e-n,e,r);let s=f(a)+f(o);for(let h=n;h<e-n;h++){const n=t.children[h];l(a,t.leaf?r(n):n),s+=f(a)}for(let h=e-n-1;h>=n;h--){const n=t.children[h];l(o,t.leaf?r(n):n),s+=f(o)}return s}_adjustParentBBoxes(t,n,e){for(let i=e;i>=0;i--)l(n.data[i],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const i=t.data[n-1],a=i.children;a.splice(Object(r["g"])(a,e,a.length,i.indexHint),1)}else this.clear();else h(e,this.toBBox)}}_initFormat(t){const n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function h(t,n){c(t,0,t.children.length,n,t)}function c(t,n,e,i,r){r||(r=new y([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let a,o=n;o<e;o++)a=t.children[o],l(r,t.leaf?i(a):a);return r}function l(t,n){t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY)}function u(t,n){return t.minX-n.minX}function d(t,n){return t.minY-n.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function x(t,n){const e=Math.max(t.minX,n.minX),i=Math.max(t.minY,n.minY),r=Math.min(t.maxX,n.maxX),a=Math.min(t.maxY,n.maxY);return Math.max(0,r-e)*Math.max(0,a-i)}function M(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function g(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function X(t,n,e,r,a){const s=[n,e];for(;s.length;){const n=Object(i["d"])(s.pop()),e=Object(i["d"])(s.pop());if(n-e<=r)continue;const h=e+Math.ceil((n-e)/r/2)*r;Object(o["a"])(t,h,e,n,a),s.push(e,h,h,n)}}const Y=new a["a"],B=new a["a"],_=new a["a"],w=new a["a"]({deallocator:void 0});class b{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends b{constructor(){super(...arguments),this.height=1,this.indexHint=new r["a"]}}class y extends v{constructor(t){super(),this.children=t,this.leaf=!0}}class O extends v{constructor(t){super(),this.children=t,this.leaf=!1}}}}]);
//# sourceMappingURL=chunk-6f71d486.6921bfcb.js.map