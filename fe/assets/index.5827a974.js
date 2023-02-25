import{R as Le,U as Fe}from"./index.ac35c7db.js";import{m as se}from"./vendor.82ee877c.js";var k={exports:{}},ae=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}},je=ae,H=Object.prototype.toString,J=function(r){return function(e){var t=H.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return J(t)===r}}function W(r){return Array.isArray(r)}function D(r){return typeof r=="undefined"}function qe(r){return r!==null&&!D(r)&&r.constructor!==null&&!D(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var oe=A("ArrayBuffer");function Ie(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&oe(r.buffer),e}function Me(r){return typeof r=="string"}function ke(r){return typeof r=="number"}function ue(r){return r!==null&&typeof r=="object"}function $(r){if(J(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var He=A("Date"),Je=A("File"),We=A("Blob"),Ve=A("FileList");function V(r){return H.call(r)==="[object Function]"}function ze(r){return ue(r)&&V(r.pipe)}function Xe(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||H.call(r)===e||V(r.toString)&&r.toString()===e)}var Ke=A("URLSearchParams");function Qe(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Ge(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function z(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),W(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function X(){var r={};function e(n,s){$(r[s])&&$(n)?r[s]=X(r[s],n):$(n)?r[s]=X({},n):W(n)?r[s]=n.slice():r[s]=n}for(var t=0,i=arguments.length;t<i;t++)z(arguments[t],e);return r}function Ye(r,e,t){return z(e,function(n,s){t&&typeof n=="function"?r[s]=je(n,t):r[s]=n}),r}function Ze(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function er(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function rr(r,e,t){var i,n,s,a={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)s=i[n],a[s]||(e[s]=r[s],a[s]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function tr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function nr(r){if(!r)return null;var e=r.length;if(D(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var ir=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),h={isArray:W,isArrayBuffer:oe,isBuffer:qe,isFormData:Xe,isArrayBufferView:Ie,isString:Me,isNumber:ke,isObject:ue,isPlainObject:$,isUndefined:D,isDate:He,isFile:Je,isBlob:We,isFunction:V,isStream:ze,isURLSearchParams:Ke,isStandardBrowserEnv:Ge,forEach:z,merge:X,extend:Ye,trim:Qe,stripBOM:Ze,inherits:er,toFlatObject:rr,kindOf:J,kindOfTest:A,endsWith:tr,toArray:nr,isTypedArray:ir,isFileList:Ve},C=h;function fe(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var le=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(C.isURLSearchParams(t))n=t.toString();else{var s=[];C.forEach(t,function(f,d){f===null||typeof f=="undefined"||(C.isArray(f)?d=d+"[]":f=[f],C.forEach(f,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),s.push(fe(d)+"="+fe(l))}))}),n=s.join("&")}if(n){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},sr=h;function g(){this.handlers=[]}g.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};g.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};g.prototype.forEach=function(e){sr.forEach(this.handlers,function(i){i!==null&&e(i)})};var ar=g,or=h,ur=function(e,t){or.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})},ce=h;function x(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}ce.inherits(x,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var de=x.prototype,he={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){he[r]={value:r}});Object.defineProperties(x,he);Object.defineProperty(de,"isAxiosError",{value:!0});x.from=function(r,e,t,i,n,s){var a=Object.create(de);return ce.toFlatObject(r,a,function(f){return f!==Error.prototype}),x.call(a,r.message,e,t,i,n),a.name=r.name,s&&Object.assign(a,s),a};var T=x,pe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},R=h;function fr(r,e){e=e||new FormData;var t=[];function i(s){return s===null?"":R.isDate(s)?s.toISOString():R.isArrayBuffer(s)||R.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(R.isPlainObject(s)||R.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);t.push(s),R.forEach(s,function(f,d){if(!R.isUndefined(f)){var o=a?a+"."+d:d,l;if(f&&!a&&typeof f=="object"){if(R.endsWith(d,"{}"))f=JSON.stringify(f);else if(R.endsWith(d,"[]")&&(l=R.toArray(f))){l.forEach(function(v){!R.isUndefined(v)&&e.append(o,i(v))});return}}n(f,o)}}),t.pop()}else e.append(a,i(s))}return n(r),e}var me=fr,K=T,lr=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new K("Request failed with status code "+i.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},B=h,cr=B.isStandardBrowserEnv()?function(){return{write:function(t,i,n,s,a,u){var f=[];f.push(t+"="+encodeURIComponent(i)),B.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),B.isString(s)&&f.push("path="+s),B.isString(a)&&f.push("domain="+a),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),dr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},hr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},pr=dr,mr=hr,ve=function(e,t){return e&&!pr(t)?mr(e,t):t},Q=h,vr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Er=function(e){var t={},i,n,s;return e&&Q.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),i=Q.trim(u.substr(0,s)).toLowerCase(),n=Q.trim(u.substr(s+1)),i){if(t[i]&&vr.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t},Ee=h,yr=Ee.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(s){var a=s;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(a){var u=Ee.isString(a)?n(a):a;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),G=T,Rr=h;function ye(r){G.call(this,r==null?"canceled":r,G.ERR_CANCELED),this.name="CanceledError"}Rr.inherits(ye,G,{__CANCEL__:!0});var L=ye,wr=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},U=h,br=lr,Or=cr,Ar=le,Sr=ve,Cr=Er,xr=yr,Tr=pe,w=T,Nr=L,Pr=wr,Re=function(e){return new Promise(function(i,n){var s=e.data,a=e.headers,u=e.responseType,f;function d(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}U.isFormData(s)&&U.isStandardBrowserEnv()&&delete a["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(l+":"+v)}var p=Sr(e.baseURL,e.url);o.open(e.method.toUpperCase(),Ar(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function ne(){if(!!o){var y="getAllResponseHeaders"in o?Cr(o.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?o.responseText:o.response,O={data:S,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};br(function(M){i(M),d()},function(M){n(M),d()},O),o=null}}if("onloadend"in o?o.onloadend=ne:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(ne)},o.onabort=function(){!o||(n(new w("Request aborted",w.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||Tr;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(new w(S,O.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,o)),o=null},U.isStandardBrowserEnv()){var ie=(e.withCredentials||xr(p))&&e.xsrfCookieName?Or.read(e.xsrfCookieName):void 0;ie&&(a[e.xsrfHeaderName]=ie)}"setRequestHeader"in o&&U.forEach(a,function(S,O){typeof s=="undefined"&&O.toLowerCase()==="content-type"?delete a[O]:o.setRequestHeader(O,S)}),U.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(y){!o||(n(!y||y&&y.type?new Nr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),s||(s=null);var I=Pr(p);if(I&&["http","https","file"].indexOf(I)===-1){n(new w("Unsupported protocol "+I+":",w.ERR_BAD_REQUEST,e));return}o.send(s)})},_r=null,c=h,we=ur,be=T,Ur=pe,Dr=me,$r={"Content-Type":"application/x-www-form-urlencoded"};function Oe(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function gr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=Re),r}function Br(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var F={transitional:Ur,adapter:gr(),transformRequest:[function(e,t){if(we(t,"Accept"),we(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e))return e;if(c.isArrayBufferView(e))return e.buffer;if(c.isURLSearchParams(e))return Oe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=c.isObject(e),n=t&&t["Content-Type"],s;if((s=c.isFileList(e))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return Dr(s?{"files[]":e}:e,a&&new a)}else if(i||n==="application/json")return Oe(t,"application/json"),Br(e);return e}],transformResponse:[function(e){var t=this.transitional||F.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?be.from(a,be.ERR_BAD_RESPONSE,this,null,this.response):a}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_r},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){F.headers[e]={}});c.forEach(["post","put","patch"],function(e){F.headers[e]=c.merge($r)});var Y=F,Lr=h,Fr=Y,jr=function(e,t,i){var n=this||Fr;return Lr.forEach(i,function(a){e=a.call(n,e,t)}),e},Ae=function(e){return!!(e&&e.__CANCEL__)},Se=h,Z=jr,qr=Ae,Ir=Y,Mr=L;function ee(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Mr}var kr=function(e){ee(e),e.headers=e.headers||{},e.data=Z.call(e,e.data,e.headers,e.transformRequest),e.headers=Se.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Se.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Ir.adapter;return t(e).then(function(n){return ee(e),n.data=Z.call(e,n.data,n.headers,e.transformResponse),n},function(n){return qr(n)||(ee(e),n&&n.response&&(n.response.data=Z.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=h,Ce=function(e,t){t=t||{};var i={};function n(o,l){return E.isPlainObject(o)&&E.isPlainObject(l)?E.merge(o,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function s(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function a(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function f(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var d={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var v=d[l]||s,p=v(l);E.isUndefined(p)&&v!==f||(i[l]=p)}),i},xe={version:"0.27.2"},Hr=xe.version,b=T,re={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){re[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var Te={};re.transitional=function(e,t,i){function n(s,a){return"[Axios v"+Hr+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,u){if(e===!1)throw new b(n(a," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!Te[a]&&(Te[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,u):!0}};function Jr(r,e,t){if(typeof r!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var s=i[n],a=e[s];if(a){var u=r[s],f=u===void 0||a(u,s,r);if(f!==!0)throw new b("option "+s+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+s,b.ERR_BAD_OPTION)}}var Wr={assertOptions:Jr,validators:re},Ne=h,Vr=le,Pe=ar,_e=kr,j=Ce,zr=ve,Ue=Wr,N=Ue.validators;function P(r){this.defaults=r,this.interceptors={request:new Pe,response:new Pe}}P.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=j(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&Ue.assertOptions(i,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(s=s&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var a=[];this.interceptors.response.forEach(function(p){a.push(p.fulfilled,p.rejected)});var u;if(!s){var f=[_e,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(a),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var d=t;n.length;){var o=n.shift(),l=n.shift();try{d=o(d)}catch(v){l(v);break}}try{u=_e(d)}catch(v){return Promise.reject(v)}for(;a.length;)u=u.then(a.shift(),a.shift());return u};P.prototype.getUri=function(e){e=j(this.defaults,e);var t=zr(e.baseURL,e.url);return Vr(t,e.params,e.paramsSerializer)};Ne.forEach(["delete","get","head","options"],function(e){P.prototype[e]=function(t,i){return this.request(j(i||{},{method:e,url:t,data:(i||{}).data}))}});Ne.forEach(["post","put","patch"],function(e){function t(i){return function(s,a,u){return this.request(j(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}P.prototype[e]=t(),P.prototype[e+"Form"]=t(!0)});var Xr=P,Kr=L;function _(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,s=new Promise(function(a){t.subscribe(a),n=a}).then(i);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new Kr(n),e(t.reason))})}_.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};_.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};_.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};_.source=function(){var e,t=new _(function(n){e=n});return{token:t,cancel:e}};var Qr=_,Gr=function(e){return function(i){return e.apply(null,i)}},Yr=h,Zr=function(e){return Yr.isObject(e)&&e.isAxiosError===!0},De=h,et=ae,q=Xr,rt=Ce,tt=Y;function $e(r){var e=new q(r),t=et(q.prototype.request,e);return De.extend(t,q.prototype,e),De.extend(t,e),t.create=function(n){return $e(rt(r,n))},t}var m=$e(tt);m.Axios=q;m.CanceledError=L;m.CancelToken=Qr;m.isCancel=Ae;m.VERSION=xe.version;m.toFormData=me;m.AxiosError=T;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=Gr;m.isAxiosError=Zr;k.exports=m;k.exports.default=m;var nt=k.exports;const te=nt.create({baseURL:Le,timeout:6e3});te.interceptors.request.use(r=>r,r=>{Promise.reject(r)});function it(r){return{code:1,message:"mock",data:r}}te.interceptors.response.use(r=>{const e=r.data;return it(e)},r=>{var t,i,n;const e=(n=(i=(t=r==null?void 0:r.response)==null?void 0:t.data)==null?void 0:i.message)!=null?n:Fe;return r.message=e,Promise.reject(r)});const ge=async(r,e={})=>{try{const t=await te.request(r),{successMsg:i,errorMsg:n}=e;return i&&se.success(i),n&&se.error(n),t}catch(t){return Promise.reject(t)}};function ot(r){return ge({url:"/query",method:"post",data:r})}function ut(r){return ge({url:"/depository",method:"post",data:r})}export{ot as d,ut as s};
