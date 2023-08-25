(()=>{var t={44:function(t,n,e){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.reorder=n.elideShorterThan=n.merge=void 0;const r=e(245),o=e(629),s=i(e(582));function a(t,n){return t.slice(t.findIndex((t=>!n(t))))}function*h(t,n){for(let e=t;e<n;e++)yield e}n.merge=function(t,n=.5){if(0===t.length)return[];const e=n*n,i=t.slice(),r=[i.shift()];for(;i.length;){const t=r[r.length-1],n=i.shift(),o=t[t.length-1],s=n[0],h=o.x-s.x,c=o.y-s.y;h*h+c*c<=e?r[r.length-1]=r[r.length-1].concat(a(n,(t=>{const n=o.x-t.x,i=o.y-t.y;return n*n+i*i<=e}))):r.push(n)}return r},n.elideShorterThan=function(t,n){return t.filter((t=>function(t){if(t.length<=1)return 0;let n=0,e=t[0];for(let i=1;i<t.length;i++)n+=r.vlen(r.vsub(e,t[i])),e=t[i];return n}(t)>=n))},n.reorder=function(t){if(0===t.length)return t;const n=n=>n%2==0?t[n/2|0][0]:t[n/2|0][t[n/2|0].length-1];class e extends s.default{toBBox(t){const{x:e,y:i}=n(t);return{minX:e,minY:i,maxX:e,maxY:i}}compareMinX(t,e){return n(t).x-n(e).x}compareMinY(t,e){return n(t).y-n(e).y}}const i=new e;i.load([...h(2,2*t.length)]);const r=[];r.push(t[0]);let a=n(1),c=2*t.length-2;for(;c;){const[e]=o.knn(i,a.x,a.y,1),s=e/2|0;i.remove(2*s),i.remove(2*s+1),r.push(e%2==0?t[s]:t[s].slice().reverse()),a=n(e%2==0?e+1:e-1),c-=2}return r}},629:function(t,n,e){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.knn=void 0;const r=i(e(842));function o(t,n){return t.dist-n.dist}function s(t,n,e){var i=a(t,e.minX,e.maxX),r=a(n,e.minY,e.maxY);return i*i+r*r}function a(t,n,e){return t<n?n-t:t<=e?0:t-e}n.knn=function(t,n,e,i,a,h){let c,l,u,p,f=t.data,m=[],d=t.toBBox,x=new r.default(void 0,o);for(;f;){for(c=0;c<f.children.length;c++)l=f.children[c],u=s(n,e,f.leaf?d(l):l),(!h||u<=h*h)&&x.push({node:l,isItem:f.leaf,dist:u});for(;x.length&&x.peek().isItem;)if(p=x.pop().node,a&&!a(p)||m.push(p),i&&m.length===i)return m;f=x.pop(),f&&(f=f.node)}return m}},245:(t,n)=>{"use strict";function e(t){return t.x*t.x+t.y*t.y}Object.defineProperty(n,"__esModule",{value:!0}),n.vsub=n.vlen=n.vlen2=void 0,n.vlen2=e,n.vlen=function(t){return Math.sqrt(e(t))},n.vsub=function(t,n){return{x:t.x-n.x,y:t.y-n.y}}},582:function(t){t.exports=function(){"use strict";function t(t,i,r,o,s){!function t(e,i,r,o,s){for(;o>r;){if(o-r>600){var a=o-r+1,h=i-r+1,c=Math.log(a),l=.5*Math.exp(2*c/3),u=.5*Math.sqrt(c*l*(a-l)/a)*(h-a/2<0?-1:1);t(e,i,Math.max(r,Math.floor(i-h*l/a+u)),Math.min(o,Math.floor(i+(a-h)*l/a+u)),s)}var p=e[i],f=r,m=o;for(n(e,r,i),s(e[o],p)>0&&n(e,r,o);f<m;){for(n(e,f,m),f++,m--;s(e[f],p)<0;)f++;for(;s(e[m],p)>0;)m--}0===s(e[r],p)?n(e,r,m):n(e,++m,o),m<=i&&(r=m+1),i<=m&&(o=m-1)}}(t,i,r||0,o||t.length-1,s||e)}function n(t,n,e){var i=t[n];t[n]=t[e],t[e]=i}function e(t,n){return t<n?-1:t>n?1:0}var i=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function r(t,n,e){if(!e)return n.indexOf(t);for(var i=0;i<n.length;i++)if(e(t,n[i]))return i;return-1}function o(t,n){s(t,0,t.children.length,n,t)}function s(t,n,e,i,r){r||(r=m(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o=n;o<e;o++){var s=t.children[o];a(r,t.leaf?i(s):s)}return r}function a(t,n){return t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY),t}function h(t,n){return t.minX-n.minX}function c(t,n){return t.minY-n.minY}function l(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function f(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function m(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d(n,e,i,r,o){for(var s=[e,i];s.length;)if(!((i=s.pop())-(e=s.pop())<=r)){var a=e+Math.ceil((i-e)/r/2)*r;t(n,a,e,i,o),s.push(e,a,a,i)}}return i.prototype.all=function(){return this._all(this.data,[])},i.prototype.search=function(t){var n=this.data,e=[];if(!f(t,n))return e;for(var i=this.toBBox,r=[];n;){for(var o=0;o<n.children.length;o++){var s=n.children[o],a=n.leaf?i(s):s;f(t,a)&&(n.leaf?e.push(s):p(t,a)?this._all(s,e):r.push(s))}n=r.pop()}return e},i.prototype.collides=function(t){var n=this.data;if(!f(t,n))return!1;for(var e=[];n;){for(var i=0;i<n.children.length;i++){var r=n.children[i],o=n.leaf?this.toBBox(r):r;if(f(t,o)){if(n.leaf||p(t,o))return!0;e.push(r)}}n=e.pop()}return!1},i.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var n=0;n<t.length;n++)this.insert(t[n]);return this}var e=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){var i=this.data;this.data=e,e=i}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this},i.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},i.prototype.clear=function(){return this.data=m([]),this},i.prototype.remove=function(t,n){if(!t)return this;for(var e,i,o,s=this.data,a=this.toBBox(t),h=[],c=[];s||h.length;){if(s||(s=h.pop(),i=h[h.length-1],e=c.pop(),o=!0),s.leaf){var l=r(t,s.children,n);if(-1!==l)return s.children.splice(l,1),h.push(s),this._condense(h),this}o||s.leaf||!p(s,a)?i?(e++,s=i.children[e],o=!1):s=null:(h.push(s),c.push(e),e=0,i=s,s=s.children[0])}return this},i.prototype.toBBox=function(t){return t},i.prototype.compareMinX=function(t,n){return t.minX-n.minX},i.prototype.compareMinY=function(t,n){return t.minY-n.minY},i.prototype.toJSON=function(){return this.data},i.prototype.fromJSON=function(t){return this.data=t,this},i.prototype._all=function(t,n){for(var e=[];t;)t.leaf?n.push.apply(n,t.children):e.push.apply(e,t.children),t=e.pop();return n},i.prototype._build=function(t,n,e,i){var r,s=e-n+1,a=this._maxEntries;if(s<=a)return o(r=m(t.slice(n,e+1)),this.toBBox),r;i||(i=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/Math.pow(a,i-1))),(r=m([])).leaf=!1,r.height=i;var h=Math.ceil(s/a),c=h*Math.ceil(Math.sqrt(a));d(t,n,e,c,this.compareMinX);for(var l=n;l<=e;l+=c){var u=Math.min(l+c-1,e);d(t,l,u,h,this.compareMinY);for(var p=l;p<=u;p+=h){var f=Math.min(p+h-1,u);r.children.push(this._build(t,p,f,i-1))}}return o(r,this.toBBox),r},i.prototype._chooseSubtree=function(t,n,e,i){for(;i.push(n),!n.leaf&&i.length-1!==e;){for(var r=1/0,o=1/0,s=void 0,a=0;a<n.children.length;a++){var h=n.children[a],c=l(h),u=(p=t,f=h,(Math.max(f.maxX,p.maxX)-Math.min(f.minX,p.minX))*(Math.max(f.maxY,p.maxY)-Math.min(f.minY,p.minY))-c);u<o?(o=u,r=c<r?c:r,s=h):u===o&&c<r&&(r=c,s=h)}n=s||n.children[0]}var p,f;return n},i.prototype._insert=function(t,n,e){var i=e?t:this.toBBox(t),r=[],o=this._chooseSubtree(i,this.data,n,r);for(o.children.push(t),a(o,i);n>=0&&r[n].children.length>this._maxEntries;)this._split(r,n),n--;this._adjustParentBBoxes(i,r,n)},i.prototype._split=function(t,n){var e=t[n],i=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,i);var s=this._chooseSplitIndex(e,r,i),a=m(e.children.splice(s,e.children.length-s));a.height=e.height,a.leaf=e.leaf,o(e,this.toBBox),o(a,this.toBBox),n?t[n-1].children.push(a):this._splitRoot(e,a)},i.prototype._splitRoot=function(t,n){this.data=m([t,n]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},i.prototype._chooseSplitIndex=function(t,n,e){for(var i,r,o,a,h,c,u,p=1/0,f=1/0,m=n;m<=e-n;m++){var d=s(t,0,m,this.toBBox),x=s(t,m,e,this.toBBox),y=(r=d,o=x,void 0,void 0,void 0,void 0,a=Math.max(r.minX,o.minX),h=Math.max(r.minY,o.minY),c=Math.min(r.maxX,o.maxX),u=Math.min(r.maxY,o.maxY),Math.max(0,c-a)*Math.max(0,u-h)),g=l(d)+l(x);y<p?(p=y,i=m,f=g<f?g:f):y===p&&g<f&&(f=g,i=m)}return i||e-n},i.prototype._chooseSplitAxis=function(t,n,e){var i=t.leaf?this.compareMinX:h,r=t.leaf?this.compareMinY:c;this._allDistMargin(t,n,e,i)<this._allDistMargin(t,n,e,r)&&t.children.sort(i)},i.prototype._allDistMargin=function(t,n,e,i){t.children.sort(i);for(var r=this.toBBox,o=s(t,0,n,r),h=s(t,e-n,e,r),c=u(o)+u(h),l=n;l<e-n;l++){var p=t.children[l];a(o,t.leaf?r(p):p),c+=u(o)}for(var f=e-n-1;f>=n;f--){var m=t.children[f];a(h,t.leaf?r(m):m),c+=u(h)}return c},i.prototype._adjustParentBBoxes=function(t,n,e){for(var i=e;i>=0;i--)a(n[i],t)},i.prototype._condense=function(t){for(var n=t.length-1,e=void 0;n>=0;n--)0===t[n].children.length?n>0?(e=t[n-1].children).splice(e.indexOf(t[n]),1):this.clear():o(t[n],this.toBBox)},i}()},842:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>i});class i{constructor(t=[],n=r){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let t=(this.length>>1)-1;t>=0;t--)this._down(t)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(0===this.length)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:e}=this,i=n[t];for(;t>0;){const r=t-1>>1,o=n[r];if(e(i,o)>=0)break;n[t]=o,t=r}n[t]=i}_down(t){const{data:n,compare:e}=this,i=this.length>>1,r=n[t];for(;t<i;){let i=1+(t<<1),o=n[i];const s=i+1;if(s<this.length&&e(n[s],o)<0&&(i=s,o=n[s]),e(o,r)>=0)break;n[t]=o,t=i}n[t]=r}}function r(t,n){return t<n?-1:t>n?1:0}},537:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>A});var i=e(44);function r(t){return t.x*t.x+t.y*t.y}function o(t){return Math.sqrt(r(t))}function s(t,n){return{x:t.x-n.x,y:t.y-n.y}}function a(t,n){return{x:t.x*n,y:t.y*n}}function h(t){return a(t,1/o(t))}function c(t,n){return{x:t.x+n.x,y:t.y+n.y}}function l(t,n=2){return{x:Number(t.x.toFixed(n)),y:Number(t.y.toFixed(n))}}class u{get landscape(){return new u({x:Math.max(this.size.x,this.size.y),y:Math.min(this.size.x,this.size.y)})}get portrait(){return new u({x:Math.min(this.size.x,this.size.y),y:Math.max(this.size.x,this.size.y)})}get isLandscape(){return this.size.x===Math.max(this.size.x,this.size.y)}constructor(t){this.size=t}}u.standard={USDollar:new u({x:148.45,y:59.5}),USLetter:new u(l(a({x:8.5,y:11},25.4))),USLegal:new u(l(a({x:8.5,y:14},25.4))),ArchA:new u(l(a({x:9,y:12},25.4))),A3:new u({x:297,y:420}),A4:new u({x:210,y:297}),A5:new u({x:148,y:210}),A6:new u({x:105,y:148}),"6x8":new u(l(a({x:6,y:8},25.4))),"5x7":new u(l(a({x:5,y:7},25.4))),"11x14":new u(l(a({x:11,y:14},25.4)))};const p=1e-9,f=(u.standard.ArchA.landscape,new Set,new Set,{Axidraw:{stepsPerMm:5,penServoMin:7500,penServoMax:28e3,penPctToPos(t){const n=t/100;return Math.round(this.penServoMin*n+this.penServoMax*(1-n))}}});f.Axidraw.stepsPerMm,f.Axidraw.stepsPerMm,f.Axidraw.stepsPerMm,f.Axidraw.stepsPerMm,f.Axidraw.stepsPerMm,f.Axidraw.penPctToPos(50),f.Axidraw.penPctToPos(60);class m{static deserialize(t){return new m(t.accel,t.duration,t.vInitial,t.p1,t.p2)}constructor(t,n,e,i,r){if(!(e>=0))throw new Error(`vInitial must be >= 0, but was ${e}`);if(!(e+t*n>=-p))throw new Error(`vFinal must be >= 0, but vInitial=${e}, duration=${n}, accel=${t}`);this.accel=t,this.duration=n,this.vInitial=e,this.p1=i,this.p2=r,this.distance=o(s(i,r))}get vFinal(){return Math.max(0,this.vInitial+this.accel*this.duration)}instant(t,n=0,e=0){const i=Math.max(0,Math.min(this.duration,t)),r=this.accel,o=this.vInitial+this.accel*i,l=Math.max(0,Math.min(this.distance,this.vInitial*i+r*i*i/2));return{t:i+n,p:c(this.p1,a(h(s(this.p2,this.p1)),l)),s:l+e,v:o,a:r}}serialize(){return{accel:this.accel,duration:this.duration,vInitial:this.vInitial,p1:this.p1,p2:this.p2}}}class d{static deserialize(t){return new d(t.initialPos,t.finalPos,t.duration)}constructor(t,n,e){this.initialPos=t,this.finalPos=n,this.pDuration=e}duration(){return this.pDuration}serialize(){return{t:"PenMotion",initialPos:this.initialPos,finalPos:this.finalPos,duration:this.pDuration}}}function x(t,n,e){const i=[];let r=n;i.push(r);for(const n of t)r=e(r,n),i.push(r);return i}class y{static deserialize(t){return new y(t.blocks.map(m.deserialize))}constructor(t){this.blocks=t,this.ts=x(t.map((t=>t.duration)),0,((t,n)=>t+n)).slice(0,-1),this.ss=x(t.map((t=>t.distance)),0,((t,n)=>t+n)).slice(0,-1)}get p1(){return this.blocks[0].p1}get p2(){return this.blocks[this.blocks.length-1].p2}duration(){return this.blocks.map((t=>t.duration)).reduce(((t,n)=>t+n),0)}instant(t){const n=function(t,n){let e=0,i=t.length;for(;e<i;){const r=Math.floor((e+i)/2);t[r]<n?e=r+1:i=r}return e}(this.ts,t),e=this.ts[n]===t?n:n-1;return this.blocks[e].instant(t-this.ts[e],this.ts[e],this.ss[e])}serialize(){return{t:"XYMotion",blocks:this.blocks.map((t=>t.serialize()))}}}class g{static deserialize(t){return new g(t.motions.map((t=>{switch(t.t){case"XYMotion":return y.deserialize(t);case"PenMotion":return d.deserialize(t)}})))}constructor(t){this.motions=t}duration(t=0){return this.motions.slice(t).map((t=>t.duration())).reduce(((t,n)=>t+n),0)}motion(t){return this.motions[t]}withPenHeights(t,n){let e=0;return new g(this.motions.map(((i,r)=>i instanceof y?i:i instanceof d?r===this.motions.length-3?new d(n,f.Axidraw.penPctToPos(0),i.duration()):r===this.motions.length-1?new d(f.Axidraw.penPctToPos(0),t,i.duration()):e++%2==0?new d(t,n,i.duration()):new d(n,t,i.duration()):void 0)))}serialize(){return{motions:this.motions.map((t=>t.serialize()))}}}class M{constructor(t,n){this.maxEntryVelocity=0,this.entryVelocity=0,this.p1=t,this.p2=n,this.blocks=[]}length(){return o(s(this.p2,this.p1))}direction(){return h(s(this.p2,this.p1))}}function v(t,n,e,i,r,o){const l=(2*i*t+e*e-n*n)/(4*i),u=t-l,p=Math.sqrt(n*n+2*i*l);return{s1:l,s2:u,t1:(p-n)/i,t2:(e-p)/-i,vMax:p,p1:r,p2:c(r,a(h(s(o,r)),l)),p3:o}}function w(t,n,e,i,r,o,l){const u=(e-n)/r,p=(e+n)/2*u,f=(i-e)/-r,m=(i+e)/2*f,d=t-p-m,x=d/e,y=h(s(l,o));return{s1:p,s2:d,s3:m,t1:u,t2:x,t3:f,p1:o,p2:c(o,a(y,p)),p3:c(o,a(y,t-m)),p4:l}}function P(t,n){const e=function(t,n){if(0===n)return t;const e=[];e.push(t[0]);for(const i of t.slice(1))o(s(i,e[e.length-1]))>n&&e.push(i);return e}(t,p);if(1===e.length)return new y([new m(0,0,0,e[0],e[0])]);const i=e.slice(1).map(((t,n)=>new M(e[n],t))),r=n.acceleration,a=n.maximumVelocity,h=n.corneringFactor;i.slice(1).forEach(((t,n)=>{const e=i[n];t.maxEntryVelocity=function(t,n,e,i,r){const o=(s=t.direction(),a=n.direction(),-(s.x*a.x+s.y*a.y));var s,a;if(Math.abs(o-1)<p)return 0;const h=Math.sqrt((1-o)/2);if(Math.abs(h-1)<p)return e;const c=Math.sqrt(i*r*h/(1-h));return Math.min(c,e)}(e,t,a,r,h)}));const c=e[e.length-1];i.push(new M(c,c));let l=0;for(;l<i.length-1;){const t=i[l],n=i[l+1],e=t.length(),o=t.entryVelocity,s=n.maxEntryVelocity,h=t.p1,c=t.p2,u=v(e,o,s,r,h,c);if(u.s1<-p)t.maxEntryVelocity=Math.sqrt(s*s+2*r*e),l-=1;else if(u.s2<=0){const i=Math.sqrt(o*o+2*r*e),s=(i-o)/r;t.blocks=[new m(r,s,o,h,c)],n.entryVelocity=i,l+=1}else if(u.vMax>a){const i=w(e,o,a,s,r,h,c);t.blocks=[new m(r,i.t1,o,i.p1,i.p2),new m(0,i.t2,a,i.p2,i.p3),new m(-r,i.t3,a,i.p3,i.p4)],n.entryVelocity=s,l+=1}else t.blocks=[new m(r,u.t1,o,u.p1,u.p2),new m(-r,u.t2,u.vMax,u.p2,u.p3)],n.entryVelocity=s,l+=1}const u=[];return i.forEach((t=>{t.blocks.forEach((t=>{t.duration>p&&u.push(t)}))})),new y(u)}function _(t,n){const[e,i]=t,[r,o]=n,h=s(o,r),l=[-h.x,h.x,-h.y,h.y],u=[r.x-e.x,i.x-r.x,r.y-e.y,i.y-r.y];let p=-1/0,f=1/0;for(let t=0;t<4;t++)if(0==l[t]){if(u[t]<0)return null}else{const n=u[t]/l[t];l[t]<0&&p<n?p=n:l[t]>0&&f>n&&(f=n)}return p>f||p>1||p<0?null:c(r,a(h,p))}function b(t,n){const[e,i]=t;return n.x>=e.x&&n.x<=i.x&&n.y>=e.y&&n.y<=i.y}function X(t,n){const[e,i]=n,r=b(t,e),o=b(t,i);if(r&&o)return n;if(r&&!o)return[n[0],_(t,[n[1],n[0]])];if(!r&&o)return[_(t,n),n[1]];const s=_(t,n),a=_(t,[n[1],n[0]]);return s&&a?[s,a]:null}function Y(t,n){const e=[];let i=null;for(let r=1;r<t.length;r++){const[o,s]=[t[r-1],t[r]],a=X(n,[o,s]);a?(i||(i=[a[0]],e.push(i)),i.push(a[1]),a[1]!==s&&(i=null)):i=null}return e}const z=25.4/96;function B(t,n){let e=t;var o,h,l;0!==n.rotateDrawing&&(console.time("rotating paths"),e=e.map((t=>t.map((t=>function(t,n,e){if(0===e)return t;const i=Math.PI/180*e,r=Math.cos(i),o=Math.sin(i);return{x:r*(t.x-n.x)-o*(t.y-n.y)+n.x,y:r*(t.y-n.y)+o*(t.x-n.x)+n.y}}(t,a({x:n.paperSize.size.x/2,y:n.paperSize.size.y/2},1/z),n.rotateDrawing))))),console.timeEnd("rotating paths")),n.fitPage?(o=e,h=n.paperSize,l=n.marginMm,e=function(t,n,e){const[i,r]=function(t){let n=-1/0,e=-1/0,i=1/0,r=1/0;for(const o of t)for(const t of o)t.x>n&&(n=t.x),t.y>e&&(e=t.y),t.x<i&&(i=t.x),t.y<r&&(r=t.y);return[{x:i,y:r},{x:n,y:e}]}(t),o=e.x-n.x,h=e.y-n.y,l=o/(r.x-i.x),u=h/(r.y-i.y),p=Math.min(l,u),f=c(n,a(s(e,n),.5)),m=s(f,a(s(r,i),.5*p));return t.map((t=>t.map((t=>c(a(s(t,i),p),m)))))}(o,{x:l,y:l},s(h.size,{x:l,y:l}))):(e=e.map((t=>t.map((t=>a(t,z))))),n.cropToMargins&&(e=function(t,n,e){const i=[{x:0,y:0},n.size],r={x:e,y:e},o=[c(i[0],r),s(i[1],r)],a=[];for(const n of t)for(const t of Y(n,o))a.push(t);return a}(e,n.paperSize,n.marginMm))),"group"===n.layerMode?e=e.filter(((e,i)=>n.selectedGroupLayers.has(t[i].groupId))):"stroke"===n.layerMode&&(e=e.filter(((e,i)=>n.selectedStrokeLayers.has(t[i].stroke)))),n.pointJoinRadius>0&&(e=e.map((t=>function(t,n){if(0===n)return t;const e=[t[0]],i=n*n;for(const n of t.slice(1))r(s(n,e[e.length-1]))>i&&e.push(n);return e}(t,n.pointJoinRadius)))),n.sortPaths&&(console.time("sorting paths"),e=i.reorder(e),console.timeEnd("sorting paths")),n.minimumPathLength>0&&(console.time("eliding short paths"),e=i.elideShorterThan(e,n.minimumPathLength),console.timeEnd("eliding short paths")),n.pathJoinRadius>0&&(console.time("joining nearby paths"),e=i.merge(e,n.pathJoinRadius),console.timeEnd("joining nearby paths")),e=e.map((t=>t.map((t=>a(t,f.Axidraw.stepsPerMm))))),console.time("planning pen motions");const u=function(t,n){const e=[];let i={x:0,y:0};const r=n.penUpPos<n.penDownPos?100:0;return t.forEach(((o,s)=>{const a=P(o,n.penDownProfile),h=s===t.length-1?f.Axidraw.penPctToPos(r):n.penUpPos;e.push(P([i,a.p1],n.penUpProfile),new d(n.penUpPos,n.penDownPos,n.penDropDuration),a,new d(n.penDownPos,h,n.penLiftDuration)),i=a.p2})),e.push(P([i,{x:0,y:0}],n.penUpProfile)),e.push(new d(f.Axidraw.penPctToPos(r),n.penUpPos,n.penDropDuration)),new g(e)}(e,{penUpPos:f.Axidraw.penPctToPos(n.penUpHeight),penDownPos:f.Axidraw.penPctToPos(n.penDownHeight),penDownProfile:{acceleration:n.penDownAcceleration*f.Axidraw.stepsPerMm,maximumVelocity:n.penDownMaxVelocity*f.Axidraw.stepsPerMm,corneringFactor:n.penDownCorneringFactor*f.Axidraw.stepsPerMm},penUpProfile:{acceleration:n.penUpAcceleration*f.Axidraw.stepsPerMm,maximumVelocity:n.penUpMaxVelocity*f.Axidraw.stepsPerMm,corneringFactor:0},penDropDuration:n.penDropDuration,penLiftDuration:n.penLiftDuration});return console.timeEnd("planning pen motions"),u}self.addEventListener("message",(t=>{const{paths:n,planOptions:e}=t.data,i=B(n,e);console.time("serializing");const r=i.serialize();console.timeEnd("serializing"),self.postMessage(r)}));const A={}}},n={};function e(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={exports:{}};return t[i].call(o.exports,o,o.exports,e),o.exports}e.d=(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e(537)})();
//# sourceMappingURL=main.worker.js.map