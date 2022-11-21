"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,r){r.d(t,{EK:function(){return M},IO:function(){return n1},PL:function(){return se},Xo:function(){return n4},ad:function(){return nz},hJ:function(){return nV}});var n,s,i=r(5816),a=r(8463),o=r(3333),l=r(4444),u=r(3510);r(3454);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let d="9.13.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let r=t.map(v);f.debug(`Firestore (${d}): ${e}`,...r)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let r=t.map(v);f.error(`Firestore (${d}): ${e}`,...r)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let r=t.map(v);f.warn(`Firestore (${d}): ${e}`,...r)}}function v(e){var t;if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(r){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class N{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),s=new C;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new C,e.enqueueRetryable(()=>n(this.currentUser))};let i=()=>{let t=s;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new C)}},0),i()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>{var r;return this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new I(t.accessToken,this.currentUser)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new c(e)}}class _{constructor(e,t,r,n){this.h=e,this.l=t,this.m=r,this.g=n,this.type="FirstParty",this.user=c.FIRST_PARTY,this.p=new Map}I(){var e;return this.g?this.g():(("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)&&w(),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class k{constructor(e,t,r,n){this.h=e,this.l=t,this.m=r,this.g=n}getToken(){return Promise.resolve(new _(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class D{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){let r=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.A;return this.A=e.token,g("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.T.getImmediate({optional:!0});e?n(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>{var t;return e?("string"==typeof e.token||w(),this.A=e.token,new D(e.token)):null}):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function L(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let n=0;n<e;n++)r[n]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class R{static R(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=L(40);for(let s=0;s<n.length;++s)r.length<20&&n[s]<t&&(r+=e.charAt(n[s]%e.length))}return r}}function x(e,t){return e<t?-1:e>t?1:0}function V(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return M.fromMillis(Date.now())}static fromDate(e){return M.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new M(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new M(0,0))}static max(){return new O(new M(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U{constructor(e,t,r){void 0===t?t=0:t>e.length&&w(),void 0===r?r=e.length-t:r>e.length-t&&w(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===U.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof U?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let s=e.get(n),i=t.get(n);if(s<i)return -1;if(s>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends U{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new F(t)}static emptyPath(){return new F([])}}let P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends U{construct(e,t,r){return new q(e,t,r)}static isValidIdentifier(e){return P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new q(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,s=()=>{if(0===r.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},i=!1;for(;n<e.length;){let a=e[n];if("\\"===a){if(n+1===e.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let o=e[n+1];if("\\"!==o&&"."!==o&&"`"!==o)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=o,n+=2}else"`"===a?(i=!i,n++):"."!==a||i?(r+=a,n++):(s(),n++)}if(s(),i)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new q(t)}static emptyPath(){return new q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class B{constructor(e){this.path=e}static fromPath(e){return new B(F.fromString(e))}static fromName(e){return new B(F.fromString(e).popFirst(5))}static empty(){return new B(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===F.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new F(e.slice()))}}function K(e){return new Q(e.readTime,e.key,-1)}class Q{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Q(O.min(),B.empty(),-1)}static max(){return new Q(O.max(),B.empty(),-1)}}function z(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=B.comparator(e.documentKey,t.documentKey))?r:x(e.largestBatchId,t.largestBatchId)}class G{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function $(e){if(e.code!==E.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof j?t:j.resolve(t)}catch(r){return j.reject(r)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,r)=>{t(e)})}static reject(e){return new j((t,r)=>{r(e)})}static waitFor(e){return new j((t,r)=>{let n=0,s=0,i=!1;e.forEach(e=>{++n,e.next(()=>{++s,i&&s===n&&t()},e=>r(e))}),i=!0,s===n&&t()})}static or(e){let t=j.resolve(!1);for(let r of e)t=t.next(e=>e?j.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new j((r,n)=>{let s=e.length,i=Array(s),a=0;for(let o=0;o<s;o++){let l=o;t(e[l]).next(e=>{i[l]=e,++a===s&&r(i)},e=>n(e))}})}static doWhile(e,t){return new j((r,n)=>{let s=()=>{!0===e()?t().next(()=>{s()},n):r()};s()})}}function H(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class W{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Y(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function X(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ W.at=-1;class J{constructor(e,t){this.comparator=e,this.root=t||ee.EMPTY}insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ee.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Z(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Z(this.root,e,this.comparator,!1)}getReverseIterator(){return new Z(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Z(this.root,e,this.comparator,!0)}}class Z{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ee{constructor(e,t,r,n,s){this.key=e,this.value=t,this.color=null!=r?r:ee.RED,this.left=null!=n?n:ee.EMPTY,this.right=null!=s?s:ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,s){return new ee(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,s=r(e,n.key);return(n=s<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===s?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return ee.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}}ee.EMPTY=null,ee.RED=!0,ee.BLACK=!1,ee.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,r,n,s){return this}insert(e,t,r){return new ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class et{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new er(this.data.getIterator())}getIteratorFrom(e){return new er(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let n=t.getNext().key,s=r.getNext().key;if(0!==this.comparator(n,s))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new et(this.comparator);return t.data=e,t}}class er{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class en{constructor(e){this.fields=e,e.sort(q.comparator)}static empty(){return new en([])}unionWith(e){let t=new et(q.comparator);for(let r of this.fields)t=t.add(r);for(let n of e)t=t.add(n);return new en(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return V(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class es{constructor(e){this.binaryString=e}static fromBase64String(e){let t=atob(e);return new es(t)}static fromUint8Array(e){let t=function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e);return new es(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}es.EMPTY_BYTE_STRING=new es("");let ei=RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ea(e){if(!e&&w(),"string"==typeof e){let t=0,r=ei.exec(e);if(!r&&w(),r[1]){let n=r[1];t=Number(n=(n+"000000000").substr(0,9))}let s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:eo(e.seconds),nanos:eo(e.nanos)}}function eo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function el(e){return"string"==typeof e?es.fromBase64String(e):es.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eu(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function eh(e){let t=ea(e.mapValue.fields.__local_write_time__.timestampValue);return new M(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ec{constructor(e,t,r,n,s,i,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class ed{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ed("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ed&&e.projectId===this.projectId&&e.database===this.database}}function ef(e){return null==e}function em(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let eg={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ep(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eu(e)?4:ek(e)?9007199254740991:10:w()}function ey(e,t){var r,n,s,i;if(e===t)return!0;let a=ep(e);if(a!==ep(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return eh(e).isEqual(eh(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=ea(e.timestampValue),n=ea(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return el(e.bytesValue).isEqual(el(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return eo(e.geoPointValue.latitude)===eo(t.geoPointValue.latitude)&&eo(e.geoPointValue.longitude)===eo(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return eo(e.integerValue)===eo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=eo(e.doubleValue),n=eo(t.doubleValue);return r===n?em(r)===em(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return V(e.arrayValue.values||[],t.arrayValue.values||[],ey);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(Y(r)!==Y(n))return!1;for(let s in r)if(r.hasOwnProperty(s)&&(void 0===n[s]||!ey(r[s],n[s])))return!1;return!0}(e,t);default:return w()}}function ev(e,t){return void 0!==(e.values||[]).find(e=>ey(e,t))}function ew(e,t){if(e===t)return 0;let r=ep(e),n=ep(t);if(r!==n)return x(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=eo(e.integerValue||e.doubleValue),n=eo(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return eE(e.timestampValue,t.timestampValue);case 4:return eE(eh(e),eh(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let r=el(e),n=el(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let s=0;s<r.length&&s<n.length;s++){let i=x(r[s],n[s]);if(0!==i)return i}return x(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=x(eo(e.latitude),eo(t.latitude));return 0!==r?r:x(eo(e.longitude),eo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let s=0;s<r.length&&s<n.length;++s){let i=ew(r[s],n[s]);if(i)return i}return x(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eg.mapValue&&t===eg.mapValue)return 0;if(e===eg.mapValue)return 1;if(t===eg.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),s=t.fields||{},i=Object.keys(s);n.sort(),i.sort();for(let a=0;a<n.length&&a<i.length;++a){let o=x(n[a],i[a]);if(0!==o)return o;let l=ew(r[n[a]],s[i[a]]);if(0!==l)return l}return x(n.length,i.length)}(e.mapValue,t.mapValue);default:throw w()}}function eE(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let r=ea(e),n=ea(t),s=x(r.seconds,n.seconds);return 0!==s?s:x(r.nanos,n.nanos)}function eT(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=ea(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?el(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,B.fromName(r).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=eT(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let s of t)n?n=!1:r+=",",r+=`${s}:${eT(e.fields[s])}`;return r+"}"}(e.mapValue):w()}function eC(e){return!!e&&"integerValue"in e}function eI(e){return!!e&&"arrayValue"in e}function eS(e){return!!e&&"nullValue"in e}function eA(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eN(e){return!!e&&"mapValue"in e}function e_(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return X(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=e_(r)),t}if(e.arrayValue){let r={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)r.arrayValue.values[n]=e_(e.arrayValue.values[n]);return r}return Object.assign({},e)}function ek(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eD{constructor(e){this.value=e}static empty(){return new eD({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!eN(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=e_(t)}setAll(e){let t=q.emptyPath(),r={},n=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){let i=this.getFieldsMap(t);this.applyChanges(i,r,n),r={},n=[],t=s.popLast()}e?r[s.lastSegment()]=e_(e):n.push(s.lastSegment())});let s=this.getFieldsMap(t);this.applyChanges(s,r,n)}delete(e){let t=this.field(e.popLast());eN(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ey(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];eN(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(X(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new eD(e_(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eb{constructor(e,t,r,n,s,i){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.data=s,this.documentState=i}static newInvalidDocument(e){return new eb(e,0,O.min(),O.min(),eD.empty(),0)}static newFoundDocument(e,t,r){return new eb(e,1,t,O.min(),r,0)}static newNoDocument(e,t){return new eb(e,2,t,O.min(),eD.empty(),0)}static newUnknownDocument(e,t){return new eb(e,3,t,O.min(),eD.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eD.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eD.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eb&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eb(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eL{constructor(e,t=null,r=[],n=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=s,this.startAt=i,this.endAt=a,this.ht=null}}function eR(e,t=null,r=[],n=[],s=null,i=null,a=null){return new eL(e,t,r,n,s,i,a)}function ex(e){var t;let r=e;if(null===r.ht){let n=r.path.canonicalString();null!==r.collectionGroup&&(n+="|cg:"+r.collectionGroup),n+="|f:",n+=r.filters.map(e=>{var t;return e.field.canonicalString()+e.op.toString()+eT(t=e.value)}).join(","),n+="|ob:",n+=r.orderBy.map(e=>{var t;return e.field.canonicalString()+e.dir}).join(","),ef(r.limit)||(n+="|l:",n+=r.limit),r.startAt&&(n+="|lb:",n+=r.startAt.inclusive?"b:":"a:",n+=r.startAt.position.map(e=>{var t;return eT(e)}).join(",")),r.endAt&&(n+="|ub:",n+=r.endAt.inclusive?"a:":"b:",n+=r.endAt.position.map(e=>{var t;return eT(e)}).join(",")),r.ht=n}return r.ht}function eV(e,t){var r,n;if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!ej(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(r=e.filters[i],n=t.filters[i],r.op!==n.op||!r.field.isEqual(n.field)||!ey(r.value,n.value))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eW(e.startAt,t.startAt)&&eW(e.endAt,t.endAt)}function eM(e){return B.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class eO extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,r):new eU(e,t,r):"array-contains"===t?new eB(e,r):"in"===t?new eK(e,r):"not-in"===t?new eQ(e,r):"array-contains-any"===t?new ez(e,r):new eO(e,t,r)}static lt(e,t,r){return"in"===t?new eF(e,r):new eP(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(ew(t,this.value)):null!==t&&ep(this.value)===ep(t)&&this.ft(ew(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eU extends eO{constructor(e,t,r){super(e,t,r),this.key=B.fromName(r.referenceValue)}matches(e){let t=B.comparator(e.key,this.key);return this.ft(t)}}class eF extends eO{constructor(e,t){super(e,"in",t),this.keys=eq("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class eP extends eO{constructor(e,t){super(e,"not-in",t),this.keys=eq("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eq(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>B.fromName(e.referenceValue))}class eB extends eO{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eI(t)&&ev(t.arrayValue,this.value)}}class eK extends eO{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ev(this.value.arrayValue,t)}}class eQ extends eO{constructor(e,t){super(e,"not-in",t)}matches(e){if(ev(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ev(this.value.arrayValue,t)}}class ez extends eO{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eI(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ev(this.value.arrayValue,e))}}class eG{constructor(e,t){this.position=e,this.inclusive=t}}class e${constructor(e,t="asc"){this.field=e,this.dir=t}}function ej(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function eH(e,t,r){let n=0;for(let s=0;s<e.position.length;s++){let i=t[s],a=e.position[s];if(n=i.field.isKeyField()?B.comparator(B.fromName(a.referenceValue),r.key):ew(a,r.data.field(i.field)),"desc"===i.dir&&(n*=-1),0!==n)break}return n}function eW(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!ey(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eY{constructor(e,t=null,r=[],n=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this._t=null,this.wt=null,this.startAt,this.endAt}}function eX(e){return new eY(e)}function eJ(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function eZ(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function e0(e){for(let t of e.filters)if(t.dt())return t.field;return null}function e1(e){var t;let r=e;if(null===r._t){r._t=[];let n=e0(r),s=eZ(r);if(null!==n&&null===s)n.isKeyField()||r._t.push(new e$(n)),r._t.push(new e$(q.keyField(),"asc"));else{let i=!1;for(let a of r.explicitOrderBy)r._t.push(a),a.field.isKeyField()&&(i=!0);if(!i){let o=r.explicitOrderBy.length>0?r.explicitOrderBy[r.explicitOrderBy.length-1].dir:"asc";r._t.push(new e$(q.keyField(),o))}}}return r._t}function e2(e){var t;let r=e;if(!r.wt){if("F"===r.limitType)r.wt=eR(r.path,r.collectionGroup,e1(r),r.filters,r.limit,r.startAt,r.endAt);else{let n=[];for(let s of e1(r)){let i="desc"===s.dir?"asc":"desc";n.push(new e$(s.field,i))}let a=r.endAt?new eG(r.endAt.position,r.endAt.inclusive):null,o=r.startAt?new eG(r.startAt.position,r.startAt.inclusive):null;r.wt=eR(r.path,r.collectionGroup,n,r.filters,r.limit,a,o)}}return r.wt}function e4(e,t,r){return new eY(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function e3(e,t){return eV(e2(e),e2(t))&&e.limitType===t.limitType}function e9(e){return`${ex(e2(e))}|lt:${e.limitType}`}function e5(e){var t;let r;return`Query(target=${r=(t=e2(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>{var t;return`${e.field.canonicalString()} ${e.op} ${eT(t=e.value)}`}).join(", ")}]`),ef(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>{var t;return`${e.field.canonicalString()} (${e.dir})`}).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>{var t;return eT(e)}).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>{var t;return eT(e)}).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function e6(e,t){var r,n;return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):B.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e.explicitOrderBy)if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=eH(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,e1(e),t))&&(!e.endAt||!!function(e,t,r){let n=eH(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,e1(e),t))}function e8(e){return(t,r)=>{let n=!1;for(let s of e1(e)){let i=e7(s,t,r);if(0!==i)return i;n=n||s.field.isKeyField()}return 0}}function e7(e,t,r){let n=e.field.isKeyField()?B.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),s=r.data.field(e);return null!==n&&null!==s?ew(n,s):w()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return w()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class te{constructor(){this._=void 0}}function tt(e,t,r){return e instanceof tn?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(r.fields.__previous_value__=t),{mapValue:r}}(r,t):e instanceof ts?ti(e,t):e instanceof ta?to(e,t):function(e,t){var r;let n=function(e,t){var r;return e instanceof tl?eC(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}(e,t),s=tu(n)+tu(e.yt);return eC(n)&&eC(e.yt)?{integerValue:""+s}:/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:em(t)?"-0":t}}(e.It,s)}(e,t)}function tr(e,t,r){return e instanceof ts?ti(e,t):e instanceof ta?to(e,t):r}class tn extends te{}class ts extends te{constructor(e){super(),this.elements=e}}function ti(e,t){let r=th(t);for(let n of e.elements)r.some(e=>ey(e,n))||r.push(n);return{arrayValue:{values:r}}}class ta extends te{constructor(e){super(),this.elements=e}}function to(e,t){let r=th(t);for(let n of e.elements)r=r.filter(e=>!ey(e,n));return{arrayValue:{values:r}}}class tl extends te{constructor(e,t){super(),this.It=e,this.yt=t}}function tu(e){return eo(e.integerValue||e.doubleValue)}function th(e){return eI(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tc}static exists(e){return new tc(void 0,e)}static updateTime(e){return new tc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function td(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tf{}function tm(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tI(e.key,tc.none()):new tv(e.key,e.data,tc.none());{let r=e.data,n=eD.empty(),s=new et(q.comparator);for(let i of t.fields)if(!s.has(i)){let a=r.field(i);null===a&&i.length>1&&(i=i.popLast(),a=r.field(i)),null===a?n.delete(i):n.set(i,a),s=s.add(i)}return new tw(e.key,n,new en(s.toArray()),tc.none())}}function tg(e,t,r){e instanceof tv?function(e,t,r){let n=e.value.clone(),s=tT(e.fieldTransforms,t,r.transformResults);n.setAll(s),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(e,t,r):e instanceof tw?function(e,t,r){if(!td(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=tT(e.fieldTransforms,t,r.transformResults),s=t.data;s.setAll(tE(e)),s.setAll(n),t.convertToFoundDocument(r.version,s).setHasCommittedMutations()}(e,t,r):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,r)}function tp(e,t,r,n){var s,i,a;return e instanceof tv?function(e,t,r,n){if(!td(e.precondition,t))return r;let s=e.value.clone(),i=tC(e.fieldTransforms,n,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,r,n):e instanceof tw?function(e,t,r,n){if(!td(e.precondition,t))return r;let s=tC(e.fieldTransforms,n,t),i=t.data;return(i.setAll(tE(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):td(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function ty(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&V(r,n,(e,t)=>{var r,n,s,i;return e.field.isEqual(t.field)&&(s=e.transform,i=t.transform,s instanceof ts&&i instanceof ts||s instanceof ta&&i instanceof ta?V(s.elements,i.elements,ey):s instanceof tl&&i instanceof tl?ey(s.yt,i.yt):s instanceof tn&&i instanceof tn)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tv extends tf{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class tw extends tf{constructor(e,t,r,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tE(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function tT(e,t,r){var n;let s=new Map;(n=e.length===r.length)||w();for(let i=0;i<r.length;i++){let a=e[i],o=a.transform,l=t.data.field(a.field);s.set(a.field,tr(o,l,r[i]))}return s}function tC(e,t,r){let n=new Map;for(let s of e){let i=s.transform,a=r.data.field(s.field);n.set(s.field,tt(i,a,t))}return n}class tI extends tf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tS{constructor(e){this.count=e}}function tA(e){if(void 0===e)return p("GRPC error has no .code"),E.UNKNOWN;switch(e){case n.OK:return E.OK;case n.CANCELLED:return E.CANCELLED;case n.UNKNOWN:return E.UNKNOWN;case n.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case n.INTERNAL:return E.INTERNAL;case n.UNAVAILABLE:return E.UNAVAILABLE;case n.UNAUTHENTICATED:return E.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case n.NOT_FOUND:return E.NOT_FOUND;case n.ALREADY_EXISTS:return E.ALREADY_EXISTS;case n.PERMISSION_DENIED:return E.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case n.ABORTED:return E.ABORTED;case n.OUT_OF_RANGE:return E.OUT_OF_RANGE;case n.UNIMPLEMENTED:return E.UNIMPLEMENTED;case n.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(s=n||(n={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tN{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[n,s]of r)if(this.equalsFn(n,e))return s}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return void(n[s]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){X(this.inner,(t,r)=>{for(let[n,s]of r)e(n,s)})}isEmpty(){return function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let t_=new J(B.comparator),tk=new J(B.comparator);function tD(...e){let t=tk;for(let r of e)t=t.insert(r.key,r);return t}function tb(){return tR()}function tL(){return tR()}function tR(){return new tN(e=>e.toString(),(e,t)=>e.isEqual(t))}new J(B.comparator);let tx=new et(B.comparator);function tV(...e){let t=tx;for(let r of e)t=t.add(r);return t}let tM=new et(x);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tO{constructor(e,t,r,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,tU.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new tO(O.min(),n,tM,t_,tV())}}class tU{constructor(e,t,r,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tU(r,t,tV(),tV(),tV())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tF{constructor(e,t,r,n){this.Tt=e,this.removedTargetIds=t,this.key=r,this.Et=n}}class tP{constructor(e,t){this.targetId=e,this.At=t}}class tq{constructor(e,t,r=es.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class tB{constructor(){this.Rt=0,this.bt=tz(),this.Pt=es.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=tV(),t=tV(),r=tV();return this.bt.forEach((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:w()}}),new tU(this.Pt,this.vt,e,t,r)}Nt(){this.Vt=!1,this.bt=tz()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class tK{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=t_,this.qt=tQ(),this.Kt=new et(x)}Gt(e){for(let t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(let r of e.removedTargetIds)this.jt(r,e.key,e.Et)}Wt(e){this.forEachTarget(e,t=>{let r=this.zt(t);switch(e.state){case 0:this.Ht(t)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),r.Ct(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach((e,r)=>{this.Ht(r)&&t(r)})}Yt(e){let t=e.targetId,r=e.At.count,n=this.Xt(t);if(n){let s=n.target;if(eM(s)){if(0===r){let i=new B(s.path);this.jt(t,i,eb.newNoDocument(i,O.min()))}else{var a;(a=1===r)||w()}}else this.Zt(t)!==r&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){let t=new Map;this.Lt.forEach((r,n)=>{let s=this.Xt(n);if(s){if(r.current&&eM(s.target)){let i=new B(s.target.path);null!==this.Ut.get(i)||this.ee(n,i)||this.jt(n,i,eb.newNoDocument(i,e))}r.Dt&&(t.set(n,r.xt()),r.Nt())}});let r=tV();this.qt.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Xt(e);return!t||2===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.Ut.forEach((t,r)=>r.setReadTime(e));let n=new tO(e,t,this.Kt,this.Ut,r);return this.Ut=t_,this.qt=tQ(),this.Kt=new et(x),n}Qt(e,t){if(!this.Ht(e))return;let r=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,r),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,r){if(!this.Ht(e))return;let n=this.zt(e);this.ee(e,t)?n.kt(t,1):n.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),r&&(this.Ut=this.Ut.insert(t,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){let t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new tB,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new et(x),this.qt=this.qt.insert(e,t)),t}Ht(e){let t=null!==this.Xt(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){let t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new tB),this.Bt.getRemoteKeysForTarget(e).forEach(t=>{this.jt(e,t,null)})}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function tQ(){return new J(B.comparator)}function tz(){return new J(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let tG={asc:"ASCENDING",desc:"DESCENDING"},t$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class tj{constructor(e,t){this.databaseId=e,this.gt=t}}function tH(e){return!e&&w(),O.fromTimestamp(function(e){let t=ea(e);return new M(t.seconds,t.nanos)}(e))}function tW(e){var t;let r=F.fromString(e);return t2(r)||w(),r}function tY(e,t){let r=tW(t);if(r.get(1)!==e.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new B(tZ(r))}function tX(e,t){var r,n,s;return r=e.databaseId,new F(["projects",r.projectId,"databases",r.database]).child("documents").child(t).canonicalString()}function tJ(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tZ(e){var t;return e.length>4&&"documents"===e.get(4)||w(),e.popFirst(5)}function t0(e){return{fieldPath:e.canonicalString()}}function t1(e){return q.fromServerFormat(e.fieldPath)}function t2(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t4{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let n=0;n<this.mutations.length;n++){let s=this.mutations[n];s.key.isEqual(e.key)&&tg(s,e,r[n])}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tp(r,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tp(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=tL();return this.mutations.forEach(n=>{let s=e.get(n.key),i=s.overlayedDocument,a=this.applyToLocalView(i,s.mutatedFields);a=t.has(n.key)?null:a;let o=tm(i,a);null!==o&&r.set(n.key,o),i.isValidDocument()||i.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tV())}isEqual(e){return this.batchId===e.batchId&&V(this.mutations,e.mutations,(e,t)=>ty(e,t))&&V(this.baseMutations,e.baseMutations,(e,t)=>ty(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t3{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t9{constructor(e,t,r,n,s=O.min(),i=O.min(),a=es.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a}withSequenceNumber(e){return new t9(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new t9(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new t9(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t5{constructor(e){this.re=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t6{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(eo(e.integerValue));else if("doubleValue"in e){let r=eo(e.doubleValue);isNaN(r)?this.le(t,13):(this.le(t,15),em(r)?t.fe(0):t.fe(r))}else if("timestampValue"in e){let n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(el(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){let s=e.geoPointValue;this.le(t,45),t.fe(s.latitude||0),t.fe(s.longitude||0)}else"mapValue"in e?ek(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):w()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){let r=e.fields||{};for(let n of(this.le(t,55),Object.keys(r)))this._e(n,t),this.ae(r[n],t)}pe(e,t){let r=e.values||[];for(let n of(this.le(t,50),r))this.ae(n,t)}ge(e,t){this.le(t,37),B.fromName(e).path.forEach(e=>{this.le(t,60),this.Ie(e,t)})}le(e,t){e.fe(t)}we(e){e.fe(2)}}t6.Te=new t6;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class t8{constructor(){this.Ye=new t7}addToCollectionParentIndex(e,t){return this.Ye.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(Q.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(Q.min())}updateCollectionGroup(e,t,r){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class t7{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new et(F.comparator),s=!n.has(r);return this.index[t]=n.add(r),s}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new et(F.comparator)).toArray()}}new Uint8Array(0);class re{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new re(e,re.DEFAULT_COLLECTION_PERCENTILE,re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ re.DEFAULT_COLLECTION_PERCENTILE=10,re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,re.DEFAULT=new re(41943040,re.DEFAULT_COLLECTION_PERCENTILE,re.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),re.DISABLED=new re(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rt{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new rt(0)}static vn(){return new rt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rr{constructor(){this.changes=new tN(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eb.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?j.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rn{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rs{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.getBaseDocument(e,t,r))).next(e=>(null!==r&&tp(r.mutation,e,en.empty(),M.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tV()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tV()){let n=tb();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=tD();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=tb();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tV()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let s=t_,i=tR(),a=tR();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof tw)?s=s.insert(t.key,t):void 0!==a&&(i.set(t.key,a.mutation.getFieldMask()),tp(a.mutation,t,a.mutation.getFieldMask(),M.now()))}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new rn(t,null!==(r=i.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=tR(),n=new J((e,t)=>e-t),s=tV();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let s of e)s.keys().forEach(e=>{let i=t.get(e);if(null===i)return;let a=r.get(e)||en.empty();a=s.applyToLocalView(i,a),r.set(e,a);let o=(n.get(s.batchId)||tV()).add(e);n=n.insert(s.batchId,o)})}).next(()=>{let i=[],a=n.getReverseIterator();for(;a.hasNext();){let o=a.getNext(),l=o.key,u=o.value,h=tL();u.forEach(e=>{if(!s.has(e)){let n=tm(t.get(e),r.get(e));null!==n&&h.set(e,n),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,l,h))}return j.waitFor(i)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r){var n,s;return B.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(s=>{let i=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-s.size):j.resolve(tb()),a=-1,o=s;return i.next(t=>j.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),s.get(t)?j.resolve():this.getBaseDocument(e,t,r).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,o,t,tV())).next(e=>{var t;let r;return{batchId:a,changes:(r=tk,e.forEach((e,t)=>r=r.insert(e,t.overlayedDocument)),r)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next(e=>{let t=tD();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r){let n=t.collectionGroup,s=tD();return this.indexManager.getCollectionParents(e,n).next(i=>j.forEach(i,i=>{var a,o;let l=(o=i.child(n),new eY(o,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r){let n;return this.remoteDocumentCache.getAllFromCollection(e,t.path,r).next(s=>(n=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId))).next(e=>{e.forEach((e,t)=>{let r=t.getKey();null===n.get(r)&&(n=n.insert(r,eb.newInvalidDocument(r)))});let r=tD();return n.forEach((n,s)=>{let i=e.get(n);void 0!==i&&tp(i.mutation,s,en.empty(),M.now()),e6(t,s)&&(r=r.insert(n,s))}),r})}getBaseDocument(e,t,r){return null===r||1===r.mutation.type?this.remoteDocumentCache.getEntry(e,t):j.resolve(eb.newInvalidDocument(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ri{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return j.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){return this.Zn.set(t.id,{id:t.id,version:t.version,createTime:tH(t.createTime)}),j.resolve()}getNamedQuery(e,t){return j.resolve(this.ts.get(t))}saveNamedQuery(e,t){var r;return this.ts.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,r,n,s,i,a,o,l,u;let h=function(e){let t=tW(e);return 4===t.length?F.emptyPath():tZ(t)}(e.parent),c=e.structuredQuery,d=c.from?c.from.length:0,f=null;if(d>0){(t=1===d)||w();let m=c.from[0];m.allDescendants?f=m.collectionId:h=h.child(m.collectionId)}let g=[];c.where&&(g=function e(t){var r;return t?void 0!==t.unaryFilter?[function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=t1(e.unaryFilter.field);return eO.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=t1(e.unaryFilter.field);return eO.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=t1(e.unaryFilter.field);return eO.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let s=t1(e.unaryFilter.field);return eO.create(s,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t)]:void 0!==t.fieldFilter?[(r=t,eO.create(t1(r.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(r.fieldFilter.op),r.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>e(t)).reduce((e,t)=>e.concat(t)):w():[]}(c.where));let p=[];c.orderBy&&(p=c.orderBy.map(e=>{var t;return new e$(t1(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}));let y=null,v;c.limit&&(y=ef(v="object"==typeof(r=c.limit)?r.value:r)?null:v);let E=null;c.startAt&&(E=function(e){let t=!!e.before,r=e.values||[];return new eG(r,t)}(c.startAt));let T=null;return c.endAt&&(T=function(e){let t=!e.before,r=e.values||[];return new eG(r,t)}(c.endAt)),n=h,s=f,i=p,a=g,o=y,l=E,u=T,new eY(n,s,i,a,o,"F",l,u)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e4(t,t.limit,"L"):t}(t.bundledQuery),readTime:tH(t.readTime)}),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ra{constructor(){this.overlays=new J(B.comparator),this.es=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){let r=tb();return j.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.ue(e,t,n)}),j.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.es.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.es.delete(r)),j.resolve()}getOverlaysForCollection(e,t,r){let n=tb(),s=t.length+1,i=new B(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){let o=a.getNext().value,l=o.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&o.largestBatchId>r&&n.set(o.getKey(),o)}return j.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let s=new J((e,t)=>e-t),i=this.overlays.getIterator();for(;i.hasNext();){let a=i.getNext().value;if(a.getKey().getCollectionGroup()===t&&a.largestBatchId>r){let o=s.get(a.largestBatchId);null===o&&(o=tb(),s=s.insert(a.largestBatchId,o)),o.set(a.getKey(),a)}}let l=tb(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((e,t)=>l.set(e,t)),!(l.size()>=n)););return j.resolve(l)}ue(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let s=this.es.get(n.largestBatchId).delete(r.key);this.es.set(n.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new t3(t,r));let i=this.es.get(t);void 0===i&&(i=tV(),this.es.set(t,i)),this.es.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro{constructor(){this.ns=new et(rl.ss),this.rs=new et(rl.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){let r=new rl(e,t);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.cs(new rl(e,t))}hs(e,t){e.forEach(e=>this.removeReference(e,t))}ls(e){let t=new B(new F([])),r=new rl(t,e),n=new rl(t,e+1),s=[];return this.rs.forEachInRange([r,n],e=>{this.cs(e),s.push(e.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){let t=new B(new F([])),r=new rl(t,e),n=new rl(t,e+1),s=tV();return this.rs.forEachInRange([r,n],e=>{s=s.add(e.key)}),s}containsKey(e){let t=new rl(e,0),r=this.ns.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class rl{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return B.comparator(e.key,t.key)||x(e._s,t._s)}static os(e,t){return x(e._s,t._s)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ru{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new et(rl.ss)}checkEmpty(e){return j.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let i=new t4(s,t,r,n);for(let a of(this.mutationQueue.push(i),n))this.gs=this.gs.add(new rl(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(i)}lookupMutationBatch(e,t){return j.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.ps(t+1),n=r<0?0:r;return j.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new rl(t,0),n=new rl(t,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,n],e=>{let t=this.ys(e._s);s.push(t)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new et(x);return t.forEach(e=>{let t=new rl(e,0),n=new rl(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,n],e=>{r=r.add(e._s)})}),j.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,s=r;B.isDocumentKey(s)||(s=s.child(""));let i=new rl(new B(s),0),a=new et(x);return this.gs.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e._s)),!0)},i),j.resolve(this.Is(a))}Is(e){let t=[];return e.forEach(e=>{let r=this.ys(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){var r;0===this.Ts(t.batchId,"removed")||w(),this.mutationQueue.shift();let n=this.gs;return j.forEach(t.mutations,r=>{let s=new rl(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=n})}An(e){}containsKey(e,t){let r=new rl(t,0),n=this.gs.firstAfterOrEqual(r);return j.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){let t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rh{constructor(e){this.Es=e,this.docs=new J(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),s=n?n.size:0,i=this.Es(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return j.resolve(r?r.document.mutableCopy():eb.newInvalidDocument(t))}getEntries(e,t){let r=t_;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eb.newInvalidDocument(e))}),j.resolve(r)}getAllFromCollection(e,t,r){let n=t_,s=new B(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){let{key:a,value:{document:o}}=i.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||0>=z(K(o),r)||(n=n.insert(o.key,o.mutableCopy()))}return j.resolve(n)}getAllFromCollectionGroup(e,t,r,n){w()}As(e,t){return j.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new rc(this)}getSize(e){return j.resolve(this.size)}}class rc extends rr{constructor(e){super(),this.Yn=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Yn.addEntry(e,n)):this.Yn.removeEntry(r)}),j.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rd{constructor(e){this.persistence=e,this.Rs=new tN(e=>ex(e),eV),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ro,this.targetCount=0,this.vs=rt.Pn()}forEachTarget(e,t){return this.Rs.forEach((e,r)=>t(r)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.bs&&(this.bs=t),j.resolve()}Dn(e){this.Rs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.vs=new rt(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Dn(t),j.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,r){let n=0,s=[];return this.Rs.forEach((i,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Rs.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),j.waitFor(s).next(()=>n)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){let r=this.Rs.get(t)||null;return j.resolve(r)}addMatchingKeys(e,t,r){return this.Ps.us(t,r),j.resolve()}removeMatchingKeys(e,t,r){this.Ps.hs(t,r);let n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(t=>{s.push(n.markPotentiallyOrphaned(e,t))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),j.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Ps.ds(t);return j.resolve(r)}containsKey(e,t){return j.resolve(this.Ps.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rf{constructor(e,t){var r;this.Vs={},this.overlays={},this.Ss=new W(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new rd(this),this.indexManager=new t8,this.remoteDocumentCache=(r=e=>this.referenceDelegate.xs(e),new rh(r)),this.It=new t5(t),this.Ns=new ri(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ra,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Vs[e.toKey()];return r||(r=new ru(t,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);let n=new rm(this.Ss.next());return this.referenceDelegate.ks(),r(n).next(e=>this.referenceDelegate.Os(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ms(e,t){return j.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,t)))}}class rm extends G{constructor(e){super(),this.currentSequenceNumber=e}}class rg{constructor(e){this.persistence=e,this.Fs=new ro,this.$s=null}static Bs(e){return new rg(e)}get Ls(){if(this.$s)return this.$s;throw w()}addReference(e,t,r){return this.Fs.addReference(r,t),this.Ls.delete(r.toString()),j.resolve()}removeReference(e,t,r){return this.Fs.removeReference(r,t),this.Ls.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),j.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach(e=>this.Ls.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ls.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}ks(){this.$s=new Set}Os(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Ls,r=>{let n=B.fromPath(r);return this.Us(e,n).next(e=>{e||t.removeEntry(n,O.min())})}).next(()=>(this.$s=null,t.apply(e)))}updateLimboDocument(e,t){return this.Us(e,t).next(e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())})}xs(e){return 0}Us(e,t){return j.or([()=>j.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rp{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Si=r,this.Di=n}static Ci(e,t){let r=tV(),n=tV();for(let s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:n=n.add(s.doc.key)}return new rp(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ry{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,r,n){return this.ki(e,t).next(s=>s||this.Oi(e,t,n,r)).next(r=>r||this.Mi(e,t))}ki(e,t){if(eJ(t))return j.resolve(null);let r=e2(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(t=e4(t,null,"F"),r=e2(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let s=tV(...n);return this.Ni.getDocuments(e,s).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let i=this.Fi(t,n);return this.$i(t,i,s,r.readTime)?this.ki(e,e4(t,null,"F")):this.Bi(e,i,t,r)}))})))}Oi(e,t,r,n){return eJ(t)||n.isEqual(O.min())?this.Mi(e,t):this.Ni.getDocuments(e,r).next(s=>{let i=this.Fi(t,s);return this.$i(t,i,r,n)?this.Mi(e,t):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),e5(t)),this.Bi(e,i,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,s=O.fromTimestamp(1e9===n?new M(r+1,0):new M(r,n));return new Q(s,B.empty(),-1)}(n,-1)))})}Fi(e,t){let r=new et(e8(e));return t.forEach((t,n)=>{e6(e,n)&&(r=r.add(n))}),r}$i(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Mi(e,t){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e5(t)),this.Ni.getDocumentsMatchingQuery(e,t,Q.min())}Bi(e,t,r,n){return this.Ni.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rv{constructor(e,t,r,n){this.persistence=e,this.Li=t,this.It=n,this.Ui=new J(x),this.qi=new tN(e=>ex(e),eV),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rs(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ui))}}async function rw(e,t){var r;return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(s=>(n=s,e.Qi(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let s=[],i=[],a=tV();for(let o of n)for(let l of(s.push(o.batchId),o.mutations))a=a.add(l.key);for(let u of t)for(let h of(i.push(u.batchId),u.mutations))a=a.add(h.key);return e.localDocuments.getDocuments(r,a).next(e=>({ji:e,removedBatchIds:s,addedBatchIds:i}))})})}function rE(e){var t;return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Cs.getLastRemoteSnapshotVersion(t))}async function rT(e,t,r){var n;let s=e,i=s.Ui.get(t);try{r||await s.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",e=>s.persistence.referenceDelegate.removeTarget(e,i))}catch(a){if(!H(a))throw a;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}s.Ui=s.Ui.remove(t),s.qi.delete(i.target)}function rC(e,t,r){var n;let s=O.min(),i=tV();return e.persistence.runTransaction("Execute query","readonly",n=>(function(e,t,r){var n;let s=e.qi.get(r);return void 0!==s?j.resolve(e.Ui.get(s)):e.Cs.getTargetData(t,r)})(e,n,e2(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,e.Cs.getMatchingKeysForTargetId(n,t.targetId).next(e=>{i=e})}).next(()=>e.Li.getDocumentsMatchingQuery(n,t,r?s:O.min(),r?i:tV())).next(r=>{var n,s,a,o;let l;return s=e,a=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),o=r,l=s.Ki.get(a)||O.min(),o.forEach((e,t)=>{t.readTime.compareTo(l)>0&&(l=t.readTime)}),s.Ki.set(a,l),{documents:r,Hi:i}}))}class rI{constructor(){this.activeTargetIds=tM}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rS{constructor(){this.Lr=new rI,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,r){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new rI,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rA{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rN{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.Wr))e(0)}jr(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.Wr))e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let r_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rk{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,r,n,s){let i=this.ho(e,t);g("RestConnection","Sending: ",i,r);let a={};return this.lo(a,n,s),this.fo(e,i,a,r).then(e=>(g("RestConnection","Received: ",e),e),t=>{throw y("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",r),t})}_o(e,t,r,n,s,i){return this.ao(e,t,r,n,s)}lo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+d,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}ho(e,t){let r=r_[e];return`${this.oo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,r,n){return new Promise((s,i)=>{let a=new u.JJ;a.setWithCredentials(!0),a.listenOnce(u.tw.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case u.jK.NO_ERROR:let t=a.getResponseJson();g("Connection","XHR received:",JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:g("Connection",'RPC "'+e+'" timed out'),i(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let r=a.getStatus();if(g("Connection",'RPC "'+e+'" failed with status:',r,"response text:",a.getResponseText()),r>0){let n=a.getResponseJson().error;if(n&&n.status&&n.message){let o=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(t)>=0?t:E.UNKNOWN}(n.status);i(new T(o,n.message))}else i(new T(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else i(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g("Connection",'RPC "'+e+'" completed.')}});let o=JSON.stringify(n);a.send(t,"POST",o,r,15)})}wo(e,t,r){let s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=(0,u.UE)(),a=(0,u.FJ)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new u.zI({})),this.lo(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;let l=s.join("");g("Connection","Creating WebChannel: "+l,o);let h=i.createWebChannel(l,o),c=!1,d=!1,f=new rk({Hr(e){d?g("Connection","Not sending because WebChannel is closed:",e):(c||(g("Connection","Opening WebChannel transport."),h.open(),c=!0),g("Connection","WebChannel sending:",e),h.send(e))},Jr:()=>h.close()}),m=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,u.ii.EventType.OPEN,()=>{d||g("Connection","WebChannel transport opened.")}),m(h,u.ii.EventType.CLOSE,()=>{d||(d=!0,g("Connection","WebChannel transport closed"),f.io())}),m(h,u.ii.EventType.ERROR,e=>{d||(d=!0,y("Connection","WebChannel transport errored:",e),f.io(new T(E.UNAVAILABLE,"The operation could not be completed")))}),m(h,u.ii.EventType.MESSAGE,e=>{var t,r;if(!d){let s=e.data[0];(r=!!s)||w();let i=s.error||(null===(t=s[0])||void 0===t?void 0:t.error);if(i){g("Connection","WebChannel received error:",i);let a=i.status,o=function(e){let t=n[e];if(void 0!==t)return tA(t)}(a),l=i.message;void 0===o&&(o=E.INTERNAL,l="Unknown error status: "+a+" with message "+i.message),d=!0,f.io(new T(o,l)),h.close()}else g("Connection","WebChannel received:",s),f.ro(s)}}),m(a,u.ju.STAT_EVENT,e=>{e.stat===u.kN.PROXY?g("Connection","Detected buffering proxy"):e.stat===u.kN.NOPROXY&&g("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function rb(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rL(e){return new tj(e,!0)}class rR{constructor(e,t,r=1e3,n=1.5,s=6e4){this.Hs=e,this.timerId=t,this.mo=r,this.yo=n,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();let t=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),n=Math.max(0,t-r);n>0&&g("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,n,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rx{constructor(e,t,r,n,s,i,a,o){this.Hs=e,this.vo=r,this.Vo=n,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new rR(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===E.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;let e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.So===t&&this.Go(e,r)},t=>{e(()=>{let e=new T(E.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)})})}Go(e,t){let r=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(e=>{r(()=>this.Qo(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget(()=>this.So===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rV extends rx{constructor(e,t,r,n,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,i),this.It=s}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();let t=function(e,t){let r;if("targetChange"in t){var n,s,i,a;t.targetChange;let o="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:w(),l=t.targetChange.targetIds||[],u=(i=t.targetChange.resumeToken,e.gt?(void 0===i||"string"==typeof i||w(),es.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||w(),es.fromUint8Array(i||new Uint8Array))),h=t.targetChange.cause,c=h&&function(e){let t=void 0===e.code?E.UNKNOWN:tA(e.code);return new T(t,e.message||"")}(h);r=new tq(o,l,u,c||null)}else if("documentChange"in t){t.documentChange;let d=t.documentChange;d.document,d.document.name,d.document.updateTime;let f=tY(e,d.document.name),m=tH(d.document.updateTime),g=new eD({mapValue:{fields:d.document.fields}}),p=eb.newFoundDocument(f,m,g),y=d.targetIds||[],v=d.removedTargetIds||[];r=new tF(y,v,p.key,p)}else if("documentDelete"in t){t.documentDelete;let C=t.documentDelete;C.document;let I=tY(e,C.document),S=C.readTime?tH(C.readTime):O.min(),A=eb.newNoDocument(I,S),N=C.removedTargetIds||[];r=new tF([],N,A.key,A)}else if("documentRemove"in t){t.documentRemove;let _=t.documentRemove;_.document;let k=tY(e,_.document),D=_.removedTargetIds||[];r=new tF([],D,k,null)}else{if(!("filter"in t))return w();{t.filter;let b=t.filter;b.targetId;let L=b.count||0,R=new tS(L),x=b.targetId;r=new tP(x,R)}}return r}(this.It,e),r=function(e){if(!("targetChange"in e))return O.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?O.min():t.readTime?tH(t.readTime):O.min()}(e);return this.listener.Wo(t,r)}zo(e){let t={};t.database=tJ(this.It),t.addTarget=function(e,t){var r,n,s,i,a,o;let l,u=t.target;return(l=eM(u)?{documents:{documents:[tX(e,u.path)]}}:{query:function(e,t){var r,n,s,i;let a={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(a.parent=tX(e,o),a.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(a.parent=tX(e,o.popLast()),a.structuredQuery.from=[{collectionId:o.lastSegment()}]);let l=function(e){if(0===e.length)return;let t=e.map(e=>(function(e){var t;if("=="===e.op){if(eA(e.value))return{unaryFilter:{field:t0(e.field),op:"IS_NAN"}};if(eS(e.value))return{unaryFilter:{field:t0(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eA(e.value))return{unaryFilter:{field:t0(e.field),op:"IS_NOT_NAN"}};if(eS(e.value))return{unaryFilter:{field:t0(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:t0(e.field),op:(t=e.op,t$[t]),value:e.value}}})(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);l&&(a.structuredQuery.where=l);let u=function(e){if(0!==e.length)return e.map(e=>{var t,r;return{field:t0(e.field),direction:(r=e.dir,tG[r])}})}(t.orderBy);u&&(a.structuredQuery.orderBy=u);let h=(s=t.limit,e.gt||ef(s)?s:{value:s});return null!==h&&(a.structuredQuery.limit=h),t.startAt&&(a.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(a.structuredQuery.endAt={before:!(i=t.endAt).inclusive,values:i.position}),a}(e,u)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0?l.resumeToken=(i=t.resumeToken,e.gt?i.toBase64():i.toUint8Array()):t.snapshotVersion.compareTo(O.min())>0&&(l.readTime=(o=t.snapshotVersion.toTimestamp(),e.gt?`${new Date(1e3*o.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+o.nanoseconds).slice(-9)}Z`:{seconds:""+o.seconds,nanos:o.nanoseconds})),l}(this.It,e);let r=function(e,t){let r=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return w()}}(0,t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.It,e);r&&(t.labels=r),this.Bo(t)}Ho(e){let t={};t.database=tJ(this.It),t.removeTarget=e,this.Bo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rM extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.It=n,this.nu=!1}su(){if(this.nu)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,s])=>this.connection.ao(e,t,r,n,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}_o(e,t,r,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection._o(e,t,r,s,i,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new T(E.UNKNOWN,e.toString())})}terminate(){this.nu=!0}}class rO{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(p(t),this.ou=!1):g("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rU{constructor(e,t,r,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(e=>{r.enqueueAndForget(async()=>{r$(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){var t;e._u.add(4),await rP(e),e.gu.set("Unknown"),e._u.delete(4),await rF(e)}(this))})}),this.gu=new rO(r,n)}}async function rF(e){if(r$(e))for(let t of e.wu)await t(!0)}async function rP(e){for(let t of e.wu)await t(!1)}function rq(e,t){var r;e.du.has(t.targetId)||(e.du.set(t.targetId,t),rG(e)?rz(e):r0(e).ko()&&rK(e,t))}function rB(e,t){var r;let n=r0(e);e.du.delete(t),n.ko()&&rQ(e,t),0===e.du.size&&(n.ko()?n.Fo():r$(e)&&e.gu.set("Unknown"))}function rK(e,t){e.yu.Mt(t.targetId),r0(e).zo(t)}function rQ(e,t){e.yu.Mt(t),r0(e).Ho(t)}function rz(e){e.yu=new tK({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),r0(e).start(),e.gu.uu()}function rG(e){return r$(e)&&!r0(e).No()&&e.du.size>0}function r$(e){var t;return 0===e._u.size}function rj(e){e.yu=void 0}async function rH(e){e.du.forEach((t,r)=>{rK(e,t)})}async function rW(e,t){rj(e),rG(e)?(e.gu.hu(t),rz(e)):e.gu.set("Unknown")}async function rY(e,t,r){if(e.gu.set("Online"),t instanceof tq&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.du.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.du.delete(n),e.yu.removeTarget(n))}(e,t)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rX(e,n)}else if(t instanceof tF?e.yu.Gt(t):t instanceof tP?e.yu.Yt(t):e.yu.Wt(t),!r.isEqual(O.min()))try{let s=await rE(e.localStore);r.compareTo(s)>=0&&await function(e,t){let r=e.yu.te(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let s=e.du.get(n);s&&e.du.set(n,s.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach(t=>{let r=e.du.get(t);if(!r)return;e.du.set(t,r.withResumeToken(es.EMPTY_BYTE_STRING,r.snapshotVersion)),rQ(e,t);let n=new t9(r.target,t,1,r.sequenceNumber);rK(e,n)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(i){g("RemoteStore","Failed to raise snapshot:",i),await rX(e,i)}}async function rX(e,t,r){if(!H(t))throw t;e._u.add(1),await rP(e),e.gu.set("Offline"),r||(r=()=>rE(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await r(),e._u.delete(1),await rF(e)})}async function rJ(e,t){var r;e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let n=r$(e);e._u.add(3),await rP(e),n&&e.gu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e._u.delete(3),await rF(e)}async function rZ(e,t){var r;t?(e._u.delete(2),await rF(e)):t||(e._u.add(2),await rP(e),e.gu.set("Unknown"))}function r0(e){return e.pu||(e.pu=function(e,t,r){var n;return e.su(),new rV(t,e.connection,e.authCredentials,e.appCheckCredentials,e.It,r)}(e.datastore,e.asyncQueue,{Yr:rH.bind(null,e),Zr:rW.bind(null,e),Wo:rY.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Mo(),rG(e)?rz(e):e.gu.set("Unknown")):(await e.pu.stop(),rj(e))})),e.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r1{constructor(e,t,r,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=s,this.deferred=new C,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,r,n,s){let i=Date.now()+r,a=new r1(e,t,i,n,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function r2(e,t){if(p("AsyncQueue",`${t}: ${e}`),H(e))return new T(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r4{constructor(e){this.comparator=e?(t,r)=>e(t,r)||B.comparator(t.key,r.key):(e,t)=>B.comparator(e.key,t.key),this.keyedMap=tD(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new r4(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof r4)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let n=t.getNext().key,s=r.getNext().key;if(!n.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new r4;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r3{constructor(){this.Tu=new J(B.comparator)}track(e){let t=e.doc.key,r=this.Tu.get(t);r?0!==e.type&&3===r.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==r.type?this.Tu=this.Tu.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Tu=this.Tu.remove(t):1===e.type&&2===r.type?this.Tu=this.Tu.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):w():this.Tu=this.Tu.insert(t,e)}Eu(){let e=[];return this.Tu.inorderTraversal((t,r)=>{e.push(r)}),e}}class r9{constructor(e,t,r,n,s,i,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,s){let i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new r9(e,t,r4.emptySet(t),i,r,n,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e3(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==r[n].type||!t[n].doc.isEqual(r[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r5{constructor(){this.Au=void 0,this.listeners=[]}}class r6{constructor(){this.queries=new tN(e=>e9(e),e3),this.onlineState="Unknown",this.Ru=new Set}}async function r8(e,t){var r;let n=t.query,s=!1,i=e.queries.get(n);if(i||(s=!0,i=new r5),s)try{i.Au=await e.onListen(n)}catch(o){let a=r2(o,`Initialization of query '${e5(t.query)}' failed`);return void t.onError(a)}e.queries.set(n,i),i.listeners.push(t),t.bu(e.onlineState),i.Au&&t.Pu(i.Au)&&nr(e)}async function r7(e,t){var r;let n=t.query,s=!1,i=e.queries.get(n);if(i){let a=i.listeners.indexOf(t);a>=0&&(i.listeners.splice(a,1),s=0===i.listeners.length)}if(s)return e.queries.delete(n),e.onUnlisten(n)}function ne(e,t){var r;let n=!1;for(let s of t){let i=s.query,a=e.queries.get(i);if(a){for(let o of a.listeners)o.Pu(s)&&(n=!0);a.Au=s}}n&&nr(e)}function nt(e,t,r){var n;let s=e.queries.get(t);if(s)for(let i of s.listeners)i.onError(r);e.queries.delete(t)}function nr(e){e.Ru.forEach(e=>{e.next()})}class nn{constructor(e,t,r){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new r9(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){return!e.fromCache||(!this.options.Nu||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;let t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=r9.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ns{constructor(e){this.key=e}}class ni{constructor(e){this.key=e}}class na{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=tV(),this.mutatedKeys=tV(),this.Gu=e8(e),this.Qu=new r4(this.Gu)}get ju(){return this.Uu}Wu(e,t){let r=t?t.zu:new r3,n=t?t.Qu:this.Qu,s=t?t.mutatedKeys:this.mutatedKeys,i=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=e6(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this.Gu(h,o)>0||l&&0>this.Gu(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){let u="F"===this.query.limitType?i.last():i.first();i=i.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Qu:i,zu:r,$i:a,mutatedKeys:s}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){let n=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;let s=e.zu.Eu();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return r(e)-r(t)})(e.type,t.type)||this.Gu(e.doc,t.doc)),this.Ju(r);let i=t?this.Yu():[],a=0===this.Ku.size&&this.current?1:0,o=a!==this.qu;return(this.qu=a,0!==s.length||o)?{snapshot:new r9(this.query,e.Qu,n,s,e.mutatedKeys,0===a,o,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new r3,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(e=>this.Uu=this.Uu.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Uu=this.Uu.delete(e)),this.current=e.current)}Yu(){if(!this.current)return[];let e=this.Ku;this.Ku=tV(),this.Qu.forEach(e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))});let t=[];return e.forEach(e=>{this.Ku.has(e)||t.push(new ni(e))}),this.Ku.forEach(r=>{e.has(r)||t.push(new ns(r))}),t}tc(e){this.Uu=e.Hi,this.Ku=tV();let t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return r9.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class no{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class nl{constructor(e){this.key=e,this.nc=!1}}class nu{constructor(e,t,r,n,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new tN(e=>e9(e),e3),this.rc=new Map,this.oc=new Set,this.uc=new J(B.comparator),this.cc=new Map,this.ac=new ro,this.hc={},this.lc=new Map,this.fc=rt.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function nh(e,t){let r=function(e){var t;let r=e;return r.remoteStore.remoteSyncer.applyRemoteEvent=nf.bind(null,r),r.remoteStore.remoteSyncer.getRemoteKeysForTarget=nI.bind(null,r),r.remoteStore.remoteSyncer.rejectListen=ng.bind(null,r),r.sc.Wo=ne.bind(null,r.eventManager),r.sc.wc=nt.bind(null,r.eventManager),r}(e),n,s,i=r.ic.get(t);if(i)n=i.targetId,r.sharedClientState.addLocalQueryTarget(n),s=i.view.ec();else{let a=await function(e,t){var r;let n=e;return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.Cs.getTargetData(e,t).next(s=>s?(r=s,j.resolve(r)):n.Cs.allocateTargetId(e).next(s=>(r=new t9(t,s,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next(()=>r))))}).then(e=>{let r=n.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e})}(r.localStore,e2(t));r.isPrimaryClient&&rq(r.remoteStore,a);let o=r.sharedClientState.addLocalQueryTarget(a.targetId);s=await nc(r,t,n=a.targetId,"current"===o,a.resumeToken)}return s}async function nc(e,t,r,n,s){e._c=(t,r,n)=>(async function(e,t,r,n){let s=t.view.Wu(r);s.$i&&(s=await rC(e.localStore,t.query,!1).then(({documents:e})=>t.view.Wu(e,s)));let i=n&&n.targetChanges.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i);return nv(e,t.targetId,a.Xu),a.snapshot})(e,t,r,n);let i=await rC(e.localStore,t,!0),a=new na(t,i.Hi),o=a.Wu(i.documents),l=tU.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,s),u=a.applyChanges(o,e.isPrimaryClient,l);nv(e,r,u.Xu);let h=new no(t,r,a);return e.ic.set(t,h),e.rc.has(r)?e.rc.get(r).push(t):e.rc.set(r,[t]),u.snapshot}async function nd(e,t){var r;let n=e.ic.get(t),s=e.rc.get(n.targetId);if(s.length>1)return e.rc.set(n.targetId,s.filter(e=>!e3(e,t))),void e.ic.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await rT(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),rB(e.remoteStore,n.targetId),np(e,n.targetId)}).catch($)):(np(e,n.targetId),await rT(e.localStore,n.targetId,!0))}async function nf(e,t){var r;try{let n=await function(e,t){var r;let n=e,s=t.snapshotVersion,i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{var r,a,o;let l=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;let u=[];t.targetChanges.forEach((r,a)=>{var o,l,h;let c=i.get(a);if(!c)return;u.push(n.Cs.removeMatchingKeys(e,r.removedDocuments,a).next(()=>n.Cs.addMatchingKeys(e,r.addedDocuments,a)));let d=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?d=d.withResumeToken(es.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):r.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(r.resumeToken,s)),i=i.insert(a,d),l=d,(0===c.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size>0)&&u.push(n.Cs.updateTargetData(e,d))});let h=t_,c=tV(),d,f;if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),u.push((r=e,a=l,o=t.documentUpdates,d=tV(),f=tV(),o.forEach(e=>d=d.add(e)),a.getEntries(r,d).next(e=>{let t=t_;return o.forEach((r,n)=>{let s=e.get(r);n.isFoundDocument()!==s.isFoundDocument()&&(f=f.add(r)),n.isNoDocument()&&n.version.isEqual(O.min())?(a.removeEntry(r,n.readTime),t=t.insert(r,n)):!s.isValidDocument()||n.version.compareTo(s.version)>0||0===n.version.compareTo(s.version)&&s.hasPendingWrites?(a.addEntry(n),t=t.insert(r,n)):g("LocalStore","Ignoring outdated watch update for ",r,". Current version:",s.version," Watch version:",n.version)}),{Wi:t,zi:f}})).next(e=>{h=e.Wi,c=e.zi})),!s.isEqual(O.min())){let m=n.Cs.getLastRemoteSnapshotVersion(e).next(t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,s));u.push(m)}return j.waitFor(u).next(()=>l.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,h,c)).next(()=>h)}).then(e=>(n.Ui=i,e))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{var n,s,i;let a=e.cc.get(r);a&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||w(),t.addedDocuments.size>0?a.nc=!0:t.modifiedDocuments.size>0?(s=a.nc)||w():t.removedDocuments.size>0&&(a.nc||w(),a.nc=!1))}),await nT(e,n,t)}catch(s){await $(s)}}function nm(e,t,r){var n;let s=e;if(s.isPrimaryClient&&0===r||!s.isPrimaryClient&&1===r){let i=[];s.ic.forEach((e,r)=>{let n=r.view.bu(t);n.snapshot&&i.push(n.snapshot)}),function(e,t){var r;let n=e;n.onlineState=t;let s=!1;n.queries.forEach((e,r)=>{for(let n of r.listeners)n.bu(t)&&(s=!0)}),s&&nr(n)}(s.eventManager,t),i.length&&s.sc.Wo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ng(e,t,r){var n;let s=e;s.sharedClientState.updateQueryState(t,"rejected",r);let i=s.cc.get(t),a=i&&i.key;if(a){let o=new J(B.comparator);o=o.insert(a,eb.newNoDocument(a,O.min()));let l=tV().add(a),u=new tO(O.min(),new Map,new et(x),o,l);await nf(s,u),s.uc=s.uc.remove(a),s.cc.delete(t),nE(s)}else await rT(s.localStore,t,!1).then(()=>np(s,t,r)).catch($)}function np(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.rc.get(t)))e.ic.delete(n),r&&e.sc.wc(n,r);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach(t=>{e.ac.containsKey(t)||ny(e,t)})}function ny(e,t){e.oc.delete(t.path.canonicalString());let r=e.uc.get(t);null!==r&&(rB(e.remoteStore,r),e.uc=e.uc.remove(t),e.cc.delete(r),nE(e))}function nv(e,t,r){for(let n of r)n instanceof ns?(e.ac.addReference(n.key,t),nw(e,n)):n instanceof ni?(g("SyncEngine","Document no longer in limbo: "+n.key),e.ac.removeReference(n.key,t),e.ac.containsKey(n.key)||ny(e,n.key)):w()}function nw(e,t){let r=t.key,n=r.path.canonicalString();e.uc.get(r)||e.oc.has(n)||(g("SyncEngine","New document in limbo: "+r),e.oc.add(n),nE(e))}function nE(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){let t=e.oc.values().next().value;e.oc.delete(t);let r=new B(F.fromString(t)),n=e.fc.next();e.cc.set(n,new nl(r)),e.uc=e.uc.insert(r,n),rq(e.remoteStore,new t9(e2(eX(r.path)),n,2,W.at))}}async function nT(e,t,r){var n;let s=[],i=[],a=[];e.ic.isEmpty()||(e.ic.forEach((n,o)=>{a.push(e._c(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);let n=rp.Ci(o.targetId,t);i.push(n)}}))}),await Promise.all(a),e.sc.Wo(s),await async function(e,t){var r;let n=e;try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>j.forEach(t,t=>j.forEach(t.Si,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>j.forEach(t.Di,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(s){if(!H(s))throw s;g("LocalStore","Failed to update sequence numbers: "+s)}for(let i of t){let a=i.targetId;if(!i.fromCache){let o=n.Ui.get(a),l=o.snapshotVersion,u=o.withLastLimboFreeSnapshotVersion(l);n.Ui=n.Ui.insert(a,u)}}}(e.localStore,i))}async function nC(e,t){var r,n,s;let i=e;if(!i.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let a=await rw(i.localStore,t);i.currentUser=t,s="'waitForPendingWrites' promise is rejected due to a user change.",(n=i).lc.forEach(e=>{e.forEach(e=>{e.reject(new T(E.CANCELLED,s))})}),n.lc.clear(),i.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await nT(i,a.ji)}}function nI(e,t){var r;let n=e.cc.get(t);if(n&&n.nc)return tV().add(n.key);{let s=tV(),i=e.rc.get(t);if(!i)return s;for(let a of i){let o=e.ic.get(a);s=s.unionWith(o.view.ju)}return s}}class nS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=rL(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){var t,r,n,s;return t=this.persistence,r=new ry,n=e.initialUser,s=this.It,new rv(t,r,n,s)}yc(e){return new rf(rg.Bs,this.It)}gc(e){return new rS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nA{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nm(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nC.bind(null,this.syncEngine),await rZ(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new r6}createDatastore(e){var t,r,n,s,i;let a=rL(e.databaseInfo.databaseId),o=(t=e.databaseInfo,new rD(t));return r=e.authCredentials,n=e.appCheckCredentials,new rM(r,n,o,a)}createRemoteStore(e){var t,r,n,s,i;return t=this.localStore,r=this.datastore,n=e.asyncQueue,s=e=>nm(this.syncEngine,e,0),i=rN.C()?new rN:new rA,new rU(t,r,n,s,i)}createSyncEngine(e,t){return function(e,t,r,n,s,i,a){let o=new nu(e,t,r,n,s,i);return a&&(o.dc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){var t;g("RemoteStore","RemoteStore shutting down."),e._u.add(5),await rP(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}function nN(e){if(B.isDocumentKey(e))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function n_(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=function(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":w()}(e);throw new T(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let nk=new Map;class nD{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,r,n){if(!0===t&&!0===n)throw new T(E.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nb{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nD({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nD(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new S;switch(e.type){case"gapi":let t=e.client;return new k(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nk.get(e);t&&(g("ComponentProvider","Removing Datastore"),nk.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nL{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nx(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nL(this.firestore,e,this._key)}}class nR{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nR(this.firestore,e,this._query)}}class nx extends nR{constructor(e,t,r){super(e,t,eX(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new nL(this.firestore,null,new B(e))}withConverter(e){return new nx(this.firestore,e,this._path)}}function nV(e,t,...r){if(e=(0,l.m9)(e),/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e,t,r){if(!r)throw new T(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}("collection","path",t),e instanceof nb){let n=F.fromString(t,...r);return nN(n),new nx(e,null,n)}{if(!(e instanceof nL||e instanceof nx))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let s=e._path.child(F.fromString(t,...r));return nN(s),new nx(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):p("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nO{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=R.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new C;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=r2(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function nU(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await rw(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function nF(e,t){e.asyncQueue.verifyOperationInProgress();let r=await nP(e);g("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>rJ(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>rJ(t.remoteStore,r)),e.onlineComponents=t}async function nP(e){return e.offlineComponents||(g("FirestoreClient","Using default OfflineComponentProvider"),await nU(e,new nS)),e.offlineComponents}async function nq(e){return e.onlineComponents||(g("FirestoreClient","Using default OnlineComponentProvider"),await nF(e,new nA)),e.onlineComponents}async function nB(e){let t=await nq(e),r=t.eventManager;return r.onListen=nh.bind(null,t.syncEngine),r.onUnlisten=nd.bind(null,t.syncEngine),r}class nK{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new rR(this,"async_queue_retry"),this.Wc=()=>{let e=rb();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};let e=rb();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;let t=rb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});let t=new C;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!H(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){let t=this.Bc.then(()=>(this.Gc=!0,e().catch(e=>{var t;this.Kc=e,this.Gc=!1;let r,n=(r=e.message||"",e.stack&&(r=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),r);throw p("INTERNAL UNHANDLED ERROR: ",n),e}).then(e=>(this.Gc=!1,e))));return this.Bc=t,t}enqueueAfterDelay(e,t,r){this.zc(),this.jc.indexOf(e)>-1&&(t=0);let n=r1.createAndSchedule(this,e,t,r,e=>this.Yc(e));return this.qc.push(n),n}zc(){this.Kc&&w()}verifyOperationInProgress(){}async Xc(){let e;do await (e=this.Bc);while(e!==this.Bc)}Zc(e){for(let t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{for(let t of(this.qc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.qc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){let t=this.qc.indexOf(e);this.qc.splice(t,1)}}class nQ extends nb{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new nK,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nG(this),this._firestoreClient.terminate()}}function nz(e,t){let r="object"==typeof e?e:(0,i.Mq)(),n=(0,i.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let s=(0,l.P0)("firestore");s&&function(e,t,r,n={}){var s;let i=(e=n_(e,nb))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&y("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${r}`,ssl:!1})),n.mockUserToken){let a,o;if("string"==typeof n.mockUserToken)a=n.mockUserToken,o=c.MOCK_USER;else{a=(0,l.Sg)(n.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);let u=n.mockUserToken.sub||n.mockUserToken.user_id;if(!u)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new c(u)}e._authCredentials=new A(new I(a,o))}}(n,...s)}return n}function nG(e){var t,r,n,s,i;let a=e._freezeSettings(),o=(r=e._databaseId,n=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",s=e._persistenceKey,new ec(r,n,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new nO(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n${constructor(e){this._byteString=e}static fromBase64String(e){try{return new n$(es.fromBase64String(e))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new n$(es.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nj{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nH{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}let nW=RegExp("[~\\*/\\[\\]]");function nY(e,t,r,n,s){let i=n&&!n.isEmpty(),a=void 0!==s,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new T(E.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nX{constructor(e,t,r,n,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nL(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new nJ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(nZ("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class nJ extends nX{data(){return super.data()}}function nZ(e,t){return"string"==typeof t?function(e,t,r){if(t.search(nW)>=0)throw nY(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new nj(...t.split("."))._internalPath}catch(n){throw nY(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}(e,t):t instanceof nj?t._internalPath:t._delegate._internalPath}class n0{}function n1(e,...t){for(let r of t)e=r._apply(e);return e}class n2 extends n0{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");let n=new e$(t,r);return function(e,t){if(null===eZ(e)){let r=e0(e);null!==r&&function(e,t,r){if(!r.isEqual(t))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${r.toString()}' instead.`)}(e,r,t.field)}}(e,n),n}(e._query,this.ma,this.pa);return new nR(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new eY(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function n4(e,t="asc"){let r=nZ("orderBy",e);return new n2(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n3{convertValue(e,t="none"){switch(ep(e)){case 0:return null;case 1:return e.booleanValue;case 2:return eo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(el(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){let r={};return X(e.fields,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new nH(eo(e.latitude),eo(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=function e(t){let r=t.mapValue.fields.__previous_value__;return eu(r)?e(r):r}(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(eh(e));default:return null}}convertTimestamp(e){let t=ea(e);return new M(t.seconds,t.nanos)}convertDocumentKey(e,t){var r;let n=F.fromString(e);(r=t2(n))||w();let s=new ed(n.get(1),n.get(3)),i=new B(n.popFirst(5));return s.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class n9{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class n5 extends nX{constructor(e,t,r,n,s,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new n6(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(nZ("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class n6 extends n5{data(e={}){return super.data(e)}}class n8{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new n9(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new n6(this._firestore,this._userDataWriter,r.key,r,new n9(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let r=0;return e._snapshot.docChanges.map(t=>{let n=new n6(e._firestore,e._userDataWriter,t.doc.key,t.doc,new n9(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);return t.doc,{type:"added",doc:n,oldIndex:-1,newIndex:r++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new n6(e._firestore,e._userDataWriter,t.doc.key,t.doc,new n9(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(i=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class n7 extends n3{constructor(e){super(),this.firestore=e}convertBytes(e){return new n$(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new nL(this.firestore,null,t)}}function se(e){var t;e=n_(e,nR);let r=n_(e.firestore,nQ),n=(r._firestoreClient||nG(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient),s=new n7(r);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new C;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,s){let i=new nM({next(r){t.enqueueAndForget(()=>r7(e,a)),r.fromCache&&"server"===n.source?s.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(r)},error:e=>s.reject(e)}),a=new nn(r,i,{includeMetadataChanges:!0,Nu:!0});return r8(e,a)})(await nB(e),e.asyncQueue,t,r,n)),n.promise})(n,e._query).then(t=>new n8(r,s,e,t)))}!function(e,t=!0){var r;d=i.Jn,(0,i.Xd)(new a.wA("firestore",(e,{instanceIdentifier:r,options:n})=>{let s=e.getProvider("app").getImmediate(),i=new nQ(new N(e.getProvider("auth-internal")),new b(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ed(e.options.projectId,t)}(s,r),s);return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(h,"3.7.2",void 0),(0,i.KN)(h,"3.7.2","esm2017")}()}}]);