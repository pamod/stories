/*! For license information please see 23019.e72c8d65.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[23019],{23019:(e,t,n)=>{n.r(t),n.d(t,{AddUserWizard:()=>B,WizardStepsFormTypes:()=>r});var r,i=n(14603),a=n(90268),o=n(13318),s=n(81816),u=n(46440),c=n(99285),l=n(62170),d=n(52983),f=n(9202),m=n(54221),p=n(21921),v=n(94635),h=n(74691),g=n(11759),S=n(28758),y=n(54004),E=n(18319),U=n(46498),R=n(85313),b=n(9447),A=n(7502),w=n(85585),_=n(17643),T=n(67680),I=n(99839),L=n(64322);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(){C=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,o=Object.create(a.prototype),s=new N(r||[]);return i(o,"_invoke",{value:_(e,n,s)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var f="suspendedStart",m="suspendedYield",p="executing",v="completed",h={};function g(){}function S(){}function y(){}var E={};c(E,o,(function(){return this}));var U=Object.getPrototypeOf,R=U&&U(U(x([])));R&&R!==n&&r.call(R,o)&&(E=R);var b=y.prototype=g.prototype=Object.create(E);function A(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(i,a,o,s){var u=d(e[i],e,a);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==O(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(l).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return a=a?a.then(i,i):i()}})}function _(t,n,r){var i=f;return function(a,o){if(i===p)throw new Error("Generator is already running");if(i===v){if("throw"===a)throw o;return{value:e,done:!0}}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var u=T(s,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===f)throw i=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=p;var c=d(t,n,r);if("normal"===c.type){if(i=r.done?v:m,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=v,r.method="throw",r.arg=c.arg)}}}function T(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,T(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=d(i,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,h;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function x(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(O(t)+" is not iterable")}return S.prototype=y,i(b,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:S,configurable:!0}),S.displayName=c(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===S||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,u,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},A(w.prototype),c(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new w(l(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},A(b),c(b,u,"Generator"),c(b,o,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=x,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:x(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}function N(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Y(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function x(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(r,i)}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===O(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,o,s=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return s}}(e,t)||Y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}!function(e){e.BASIC_DETAILS="BasicDetails",e.GROUP_LIST="GroupList",e.SUMMARY="summary",e.USER_SUMMARY="UserSummary",e.USER_TYPE="UserType"}(r||(r={}));var B=function(e){var t,n,O,P,Y,k=e.adminTypeSelection,B=e.defaultUserTypeSelection,z=e.closeWizard,G=e.currentStep,Q=e.emailVerificationEnabled,V=e.conditionallyShowStepper,F=e.requiredSteps,W=e.showStepper,Z=e.submitStep,q=e.requestedPasswordOption,J=e.onSuccessfulUserAddition,H=e.onInvitationSendSuccessful,K=e.onUserUpdate,X=e["data-componentid"],$=e["data-testid"],ee=(0,f.$)().t,te=(0,m.I0)(),ne=j((0,o.cC)(),2),re=ne[0],ie=ne[1],ae=j((0,o.cC)(),2),oe=ae[0],se=ae[1],ue=j((0,o.cC)(),2),ce=ue[0],le=ue[1],de=j((0,o.cC)(),2),fe=de[0],me=de[1],pe=j((0,d.useState)(void 0),2),ve=pe[0],he=pe[1],ge=j((0,d.useState)(G),2),Se=ge[0],ye=ge[1],Ee=j((0,d.useState)(void 0),2),Ue=Ee[0],Re=Ee[1],be=j((0,d.useState)([]),2),Ae=be[0],we=be[1],_e=j((0,d.useState)(!1),2),Te=_e[0],Ie=_e[1],Le=j((0,d.useState)(!1),2),Oe=Le[0],Ce=Le[1],Ne=j((0,d.useState)(void 0),2),xe=Ne[0],Pe=Ne[1],Me=j((0,d.useState)(void 0),2),De=Me[0],je=Me[1],Ye=j((0,d.useState)([]),2),ke=Ye[0],Be=Ye[1],ze=j((0,d.useState)([]),2),Ge=ze[0],Qe=ze[1],Ve=j((0,d.useState)([]),2),Fe=Ve[0],We=Ve[1],Ze=j((0,d.useState)(!1),2),qe=Ze[0],Je=Ze[1],He=j((0,d.useState)(!0),2),Ke=He[0],Xe=He[1],$e=j((0,d.useState)(!0),2),et=$e[0],tt=$e[1],nt=j((0,d.useState)(!1),2),rt=nt[0],it=nt[1],at=j((0,d.useState)(!0),2),ot=at[0],st=at[1],ut=j((0,d.useState)(!1),2),ct=ut[0],lt=ut[1],dt=j((0,d.useState)(!1),2),ft=dt[0],mt=dt[1],pt=j((0,d.useState)(!1),2),vt=pt[0],ht=pt[1],gt=j((0,d.useState)(!1),2),St=gt[0],yt=gt[1],Et=j((0,d.useState)(I.CONSUMER_USERSTORE),2),Ut=Et[0],Rt=Et[1],bt=j((0,d.useState)([]),2),At=bt[0],wt=bt[1],_t=j((0,d.useState)(""),2),Tt=_t[0],It=_t[1],Lt=j((0,d.useState)([]),2),Ot=Lt[0],Ct=Lt[1],Nt=j((0,d.useState)(!1),2),xt=Nt[0],Pt=Nt[1],Mt=(0,m.v9)((function(e){return e.profile.profileSchemas})),Dt=j((0,s.IK)(),3),jt=Dt[0],Yt=Dt[1],kt=Dt[2],Bt=(0,w.W)().data;(0,d.useEffect)((function(){Qt()}),[]),(0,d.useEffect)((function(){var e;Pt("true"===(null===(e=(0,A.t)(Bt))||void 0===e?void 0:e.enableValidator))}),[Bt]),(0,d.useEffect)((function(){B&&Re(M(M({},Ue),{},D({},r.USER_TYPE,{userType:B})))}),[B]),(0,d.useEffect)((function(){if(Ue&&Ue[r.USER_TYPE]&&De)if(Ue[r.USER_TYPE].userType===I.UserAccountTypes.USER){if(0===(null==De?void 0:De.length))return Oe?(we(tn([r.BASIC_DETAILS,r.USER_SUMMARY])),void Ie(!0)):(we(tn([r.BASIC_DETAILS])),void Ie(!0));if(Oe)return we(tn([r.BASIC_DETAILS,r.GROUP_LIST,r.USER_SUMMARY])),void Ie(!0);we(tn([r.BASIC_DETAILS,r.GROUP_LIST])),Ie(!0)}else we(tn([r.BASIC_DETAILS])),Ie(!0)}),[De,Ue&&Ue[r.USER_TYPE].userType,Oe]),(0,d.useEffect)((function(){void 0!==ve&&(ye(Se-1),he(void 0))}),[ve]),(0,d.useEffect)((function(){Ft(Mt)}),[]),(0,d.useEffect)((function(){B===I.UserAccountTypes.USER?Wt(null):(Pe([]),Qe([]),je([]))}),[Ut]);var zt,Gt,Qt=function(){mt(!0),(0,L.getUserStores)().then((function(e){var t=[];null==e||e.forEach((function(e,n){Vt(e)&&t.push({key:n,text:e.name.toUpperCase(),value:e.name.toUpperCase()})})),yt(!1),wt(t)})).catch((function(e){var t,n,r,o,s,u,c,l,d,f,m;null!=e&&null!==(t=e.response)&&void 0!==t&&null!==(n=t.data)&&void 0!==n&&n.description?te((0,a.V_)({description:null!==(r=null!==(o=null==e||null===(s=e.response)||void 0===s||null===(u=s.data)||void 0===u?void 0:u.description)&&void 0!==o?o:null==e||null===(c=e.response)||void 0===c||null===(l=c.data)||void 0===l?void 0:l.detail)&&void 0!==r?r:ee("console:manage.features.users.notifications.fetchUserStores.error.description"),level:i.QU.ERROR,message:null!==(d=null==e||null===(f=e.response)||void 0===f||null===(m=f.data)||void 0===m?void 0:m.message)&&void 0!==d?d:ee("console:manage.features.users.notifications.fetchUserStores.error.message")})):(te((0,a.V_)({description:ee("console:manage.features.users.notifications.fetchUserStores.genericError.description"),level:i.QU.ERROR,message:ee("console:manage.features.users.notifications.fetchUserStores.genericError.message")})),yt(!0))})).finally((function(){mt(!1)}))},Vt=function(e){return e.typeName===I.UsersConstants.DEFAULT_USERSTORE_TYPE_NAME||e.enabled&&"false"===e.properties.filter((function(e){return e.name===I.UsersConstants.USER_STORE_PROPERTY_READ_ONLY}))[0].value},Ft=function(e){var t,n=[],r=e.find((function(e){return"name"===e.name})),i=e.find((function(e){return"emails"===e.name}));if(i&&(n.push("email"),it(i.required)),(null==r||null===(t=r.subAttributes)||void 0===t?void 0:t.length)>0){var a=r.subAttributes.find((function(e){return"givenName"===e.name})),o=r.subAttributes.find((function(e){return"familyName"===e.name}));if(a&&o)return Xe(a.required),void tt(o.required);a&&(n.push("lastName"),Xe(a.required)),o&&(n.push("firstName"),tt(o.required))}else n.push("firstName","lastName");Ct(n)},Wt=function(e){mt(!0),(0,S.hI)(e,"members").then((function(e){0==e.data.totalResults?(Pe([]),Qe([]),je([])):(Pe(e.data.Resources),Qe(e.data.Resources),je(e.data.Resources))})).finally((function(){return mt(!1)}))},Zt=function(){var e;switch(null===(e=Ae[Se])||void 0===e?void 0:e.name){case r.USER_TYPE:le();break;case r.BASIC_DETAILS:ie();break;case r.GROUP_LIST:se(),me();break;case r.USER_SUMMARY:z(),J(Tt)}},qt=function(){var e,t=(e=C().mark((function e(t,n){var r,o,s,u,c,l;return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],o=[],t.length>0&&t.map((function(e){o.push({display:e.userName,value:e.id})})),s={Operations:[{op:"add",value:{users:o}}],schemas:["urn:ietf:params:scim:api:messages:2.0:PatchOp"]},!(n.length>0)){e.next=27;break}n.map((function(e){r.push(e.id)})),u=N(r),e.prev=7,u.s();case 9:if((c=u.n()).done){e.next=16;break}return l=c.value,Je(!0),e.next=14,(0,y.dB)(l,s).catch((function(e){e.response&&401!==e.response.status?e.response&&e.response.data&&e.response.data.detail?Yt({description:ee("extensions:manage.users.wizard.addAdmin.internal.updateRole.error.description",{description:e.response.data.detail}),level:i.QU.ERROR,message:ee("extensions:manage.users.wizard.addAdmin.internal.updateRole.error.message")}):Yt({description:ee("extensions:manage.users.wizard.addAdmin.internal.updateRole.genericError.description"),level:i.QU.ERROR,message:ee("extensions:manage.users.wizard.addAdmin.internal.updateRole.genericError.message")}):Yt({description:ee("extensions:manage.users.wizard.addAdmin.internal.updateRole.error.description"),level:i.QU.ERROR,message:ee("extensions:manage.users.wizard.addAdmin.internal.updateRole.error.message")})})).finally((function(){Je(!1)}));case 14:e.next=9;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(7),u.e(e.t0);case 21:return e.prev=21,u.f(),e.finish(21);case 24:te((0,a.V_)({description:ee("extensions:manage.users.wizard.addAdmin.internal.updateRole.success.description"),level:i.QU.SUCCESS,message:ee("extensions:manage.users.wizard.addAdmin.internal.updateRole.success.message")})),z(),K();case 27:case"end":return e.stop()}}),e,null,[[7,18,21,24]])})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){x(a,r,i,o,s,"next",e)}function s(e){x(a,r,i,o,s,"throw",e)}o(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),Jt=function(e){var t="";t=xt?e.domain+"/"+e.userName:e.domain+"/"+e.email;var n=(0,R.N0)(),r=e.newPassword;if(ot)n={emails:[{primary:!0,value:e.email}],name:{familyName:e.lastName,givenName:e.firstName},password:r,profileUrl:e.profileUrl,userName:t};else if(ct)n={emails:[{primary:!0,value:e.email}],name:{familyName:e.lastName,givenName:e.firstName},password:cn(),profileUrl:e.profileUrl,userName:t};else{var o;D(o={emails:[{primary:!0,value:e.email}],name:{familyName:e.lastName,givenName:e.firstName},profileUrl:e.profileUrl},T.SCIMConfigs.scim.enterpriseSchema,{askPassword:"true"}),D(o,"userName",t),n=o}Je(!0),(0,E.cn)(n).then((function(t){var n,r,o;te((0,a.V_)({description:ee("console:manage.features.users.notifications.addUser.success.description"),level:i.QU.SUCCESS,message:ee("console:manage.features.users.notifications.addUser.success.message")}));var s,u=null!==(n=null==Ue||null===(r=Ue.GroupList)||void 0===r?void 0:r.groups)&&void 0!==n?n:null==e?void 0:e.groups;(u&&function(e,t){var n=[],r={Operations:[{op:"add",value:{members:[{display:e.userName,value:e.id}]}}],schemas:["urn:ietf:params:scim:api:messages:2.0:PatchOp"]};if(t.length>0){t.map((function(e){n.push(e.id)}));var a,o=N(n);try{for(o.s();!(a=o.n()).done;){var s=a.value;Je(!0),(0,S.fF)(s,r).catch((function(e){e.response&&401!==e.response.status?e.response&&e.response.data&&e.response.data.detail?Yt({description:ee("console:manage.features.users.notifications.addUser.error.description",{description:e.response.data.detail}),level:i.QU.ERROR,message:ee("console:manage.features.users.notifications.addUser.error.message")}):Yt({description:ee("console:manage.features.users.notifications.addUser.genericError.description"),level:i.QU.ERROR,message:ee("console:manage.features.users.notifications.addUser.genericError.message")}):Yt({description:ee("console:manage.features.users.notifications.addUser.error.description"),level:i.QU.ERROR,message:ee("console:manage.features.users.notifications.addUser.error.message")})})).finally((function(){Je(!1)}))}}catch(u){o.e(u)}finally{o.f()}}}(t.data,u),It(null===(o=t.data)||void 0===o?void 0:o.id),Oe)?ye(Se+1):(z(),J(null===(s=t.data)||void 0===s?void 0:s.id))})).catch((function(e){e.response&&401!==e.response.status?e.response&&403===e.response.status&&e.response.data&&e.response.data.scimType===I.UsersConstants.ERROR_USER_LIMIT_REACHED?(z(),te((0,a.V_)({description:ee("extensions:manage.users.notifications.addUser.customerUser.limitReachError.description"),level:i.QU.ERROR,message:ee("extensions:manage.users.notifications.addUser.customerUser.limitReachError.message")}))):e.response&&e.response.data&&e.response.data.detail?(z(),te((0,a.V_)({description:ee("console:manage.features.users.notifications.addUser.error.description",{description:e.response.data.detail}),level:i.QU.ERROR,message:ee("console:manage.features.users.notifications.addUser.error.message")}))):(z(),te((0,a.V_)({description:ee("console:manage.features.users.notifications.addUser.genericError.description"),level:i.QU.ERROR,message:ee("console:manage.features.users.notifications.addUser.genericError.message")}))):(z(),te((0,a.V_)({description:ee("console:manage.features.users.notifications.addUser.error.description"),level:i.QU.ERROR,message:ee("console:manage.features.users.notifications.addUser.error.message")})))})).finally((function(){Je(!1)}))},Ht=function(e,t){!Oe||t!==r.GROUP_LIST&&t!==r.BASIC_DETAILS||Re(M(M({},Ue),{},D({},t,e))),(Z===r.SUMMARY||Z!==t)&&(Z===r.SUMMARY||t!==r.BASIC_DETAILS||Ae.some((function(e){return e.name===Z})))?(ye(Se+1),Re(M(M({},Ue),{},D({},t,e)))):Xt(Kt(e))},Kt=function(e){if(Ue){var t=M({},Ue),n={};e&&(n=M({},e));for(var r=0,i=Object.values(t);r<i.length;r++){var a=i[r];n=M(M({},n),a)}return(0,l.Z)((0,u.Z)(n))}},Xt=function(e){Jt(e)},$t=function(e){Re(M(M({},Ue),{},D({},r.BASIC_DETAILS,M(M({},Ue[r.BASIC_DETAILS]),{},{profileUrl:e}))))},en=function(){return Ue&&Ue[r.USER_TYPE].userType===I.UserAccountTypes.USER?an():rn()},tn=function(e){var t=function(e){var t=[];return e.forEach((function(e){e===r.USER_TYPE?t.push(nn()):e===r.BASIC_DETAILS?t.push(en()):e===r.GROUP_LIST?t.push(on()):e===r.SUMMARY?t.push(un()):e===r.USER_SUMMARY&&t.push(sn())})),t};return t(F?(0,c.Z)(e,F):e)},nn=function(){return{content:d.createElement(g.UserTypeSelection,{handleTriggerSubmit:function(){return le},triggerSubmit:ce,initialValues:Ue&&Ue[r.USER_TYPE],onSubmit:function(e){return Ht(e,r.USER_TYPE)}}),icon:(0,U.J)().user,name:r.USER_TYPE,title:"User Type"}},rn=function(){return{content:d.createElement(g.AddAdminUserBasic,{administratorType:k,triggerSubmit:re,onSubmit:function(e){return k===I.AdminAccountTypes.INTERNAL?void qt(null==(n=e)?void 0:n.checkedUsers,null==n?void 0:n.selectedRoles):void(null!=(t=e)&&(Je(!0),(0,L.sendInvite)(t).then((function(){te((0,a.V_)({description:ee("console:manage.features.invite.notifications.sendInvite.success.description"),level:i.QU.SUCCESS,message:ee("console:manage.features.invite.notifications.sendInvite.success.message")})),z(),H()})).catch((function(e){var t,n,r,o;e.response&&401!==e.response.status?403===e.response.status&&(null==e||null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code)===I.UsersConstants.ERROR_COLLABORATOR_USER_LIMIT_REACHED?(z(),te((0,a.V_)({description:ee("extensions:manage.invite.notifications.sendInvite.limitReachError.description"),level:i.QU.ERROR,message:ee("extensions:manage.invite.notifications.sendInvite.limitReachError.message")}))):null!=e&&null!==(r=e.response)&&void 0!==r&&null!==(o=r.data)&&void 0!==o&&o.description?(z(),te((0,a.V_)({description:ee("console:manage.features.invite.notifications.sendInvite.error.description",{description:e.response.data.description}),level:i.QU.ERROR,message:ee("console:manage.features.invite.notifications.sendInvite.error.message")}))):(z(),te((0,a.V_)({description:ee("console:manage.features.invite.notifications.sendInvite.genericError.description"),level:i.QU.ERROR,message:ee("console:manage.features.invite.notifications.sendInvite.genericError.message")}))):(z(),te((0,a.V_)({description:ee("console:manage.features.invite.notifications.sendInvite.error.description"),level:i.QU.ERROR,message:ee("console:manage.features.invite.notifications.sendInvite.error.message")})))})).finally((function(){Je(!1)}))));var t,n},setFinishButtonDisabled:ht}),icon:(0,U.J)().general,name:r.BASIC_DETAILS,title:ee("console:manage.features.user.modals.addUserWizard.steps.basicDetails")}},an=function(){return{content:d.createElement(g.AddConsumerUserBasic,{triggerSubmit:re,initialValues:Ue&&Ue[r.BASIC_DETAILS],emailVerificationEnabled:Q,onSubmit:function(e){return Ht(e,r.BASIC_DETAILS)},hiddenFields:Ot,requestedPasswordOption:q,isFirstNameRequired:Ke,isLastNameRequired:et,isEmailRequired:rt,setUserSummaryEnabled:Ce,setAskPasswordFromUser:st,setOfflineUser:lt,setSelectedUserStore:Rt,isBasicDetailsLoading:ft,setBasicDetailsLoading:mt,validationConfig:Bt,isUserStoreError:St,readWriteUserStoresList:At}),icon:(0,U.J)().general,name:r.BASIC_DETAILS,title:ee("console:manage.features.user.modals.addUserWizard.steps.basicDetails")}},on=function(){return{content:d.createElement(g.AddConsumerUserGroups,{triggerSubmit:oe,onSubmit:function(e){return Ht(e,r.GROUP_LIST)},initialValues:{groupList:xe,initialGroupList:Ge,initialTempGroupList:Fe,tempGroupList:ke},handleGroupListChange:function(e){return function(e){Pe(e)}(e)},handleTempListChange:function(e){Be(e)},handleInitialTempListChange:function(e){We(e)},handleInitialGroupListChange:function(e){return function(e){Qe(e)}(e)},handleSetGroupId:null}),icon:(0,U.J)().groups,name:r.GROUP_LIST,title:ee("console:manage.features.user.modals.addUserWizard.steps.groups")}},sn=function(){var e,t,n;return{content:d.createElement(g.AddUserWizardSummary,{triggerSubmit:fe,selectedUserStore:Ut,username:xt?null===(e=Ue[r.BASIC_DETAILS])||void 0===e?void 0:e.userName:null===(t=Ue[r.BASIC_DETAILS])||void 0===t?void 0:t.email,password:null===(n=Ue[r.BASIC_DETAILS])||void 0===n?void 0:n.newPassword,isPasswordBased:ot}),icon:(0,U.J)().summary,name:r.USER_SUMMARY,title:ee("console:manage.features.user.modals.addUserWizard.steps.invitation")}},un=function(){return{content:d.createElement(g.AddConsumerUserWizardSummary,{triggerSubmit:fe,onSubmit:Xt,summary:Kt(),onProfileImageChange:$t}),icon:(0,U.J)().summary,name:r.SUMMARY,title:ee("console:manage.features.user.modals.addUserWizard.steps.invitation")}},cn=function(){var e=(0,b.P_)(Bt);return void 0===e?(0,b.F2)(10,!0,!0,!0,!0,1,1,1,1):(0,b.F2)(Number(e.minLength),Number(e.minLowerCaseCharacters)>0,Number(e.minUpperCaseCharacters)>0,Number(e.minNumbers)>0,Number(e.minSpecialCharacters)>0,Number(e.minLowerCaseCharacters),Number(e.minUpperCaseCharacters),Number(e.minNumbers),Number(e.minSpecialCharacters),Number(e.minUniqueCharacters))};return Ae&&Te?d.createElement(p.Z,{"data-componentid":X,"data-testid":$,open:!0,className:"wizard application-create-wizard",dimmer:"blurring",size:"small",onClose:z,closeOnDimmerClick:!1,closeOnEscape:!0},d.createElement(p.Z.Header,{className:"wizard-header"},B===I.UserAccountTypes.USER&&ee("extensions:manage.users.wizard.addUser.title"),B===_.administratorConfig.adminRoleName&&(k===I.AdminAccountTypes.INTERNAL?ee("extensions:manage.users.wizard.addAdmin.internal.title"):ee("extensions:manage.users.wizard.addAdmin.external.title")),Ue&&null!==(t=Ue[r.BASIC_DETAILS])&&void 0!==t&&t.firstName?" - "+(null===(n=Ue[r.BASIC_DETAILS])||void 0===n?void 0:n.firstName):"",d.createElement(s.X6,{as:"h6"},B===I.UserAccountTypes.USER&&ee("extensions:manage.users.wizard.addUser.subtitle"))),(B===I.UserAccountTypes.USER||0!==(null==De?void 0:De.length)&&(V?!(null==De||!De.length)&&W&&(B!==I.UserAccountTypes.USER||0!==(null==De?void 0:De.length)):W))&&d.createElement(p.Z.Content,{className:"steps-container"},B===_.administratorConfig.adminRoleName?d.createElement(s.X6,{className:"invite-sub-heading",as:"h6"},k===I.AdminAccountTypes.INTERNAL?ee("extensions:manage.users.wizard.addAdmin.internal.subtitle"):ee("extensions:manage.users.wizard.addAdmin.external.subtitle")):d.createElement(s.Rg.Group,{current:Se},Ae.map((function(e,t){return d.createElement(s.Rg.Step,{key:t,icon:e.icon,title:e.title})})))),d.createElement(p.Z.Content,{className:"content-container",scrolling:!0},jt&&kt,function(){var e,t,n,i,a,o;switch(null===(e=Ae[Se])||void 0===e?void 0:e.name){case r.USER_TYPE:return null===(t=nn())||void 0===t?void 0:t.content;case r.BASIC_DETAILS:return null===(n=en())||void 0===n?void 0:n.content;case r.GROUP_LIST:return null===(i=on())||void 0===i?void 0:i.content;case r.SUMMARY:return null===(a=un())||void 0===a?void 0:a.content;case r.USER_SUMMARY:return null===(o=sn())||void 0===o?void 0:o.content}}()),d.createElement(p.Z.Actions,null,d.createElement(v.Z,null,d.createElement(v.Z.Row,{column:1},d.createElement(v.Z.Column,{mobile:8,tablet:8,computer:8},(null===(O=Ae[Se])||void 0===O?void 0:O.name)!==r.USER_SUMMARY&&d.createElement(s.Qj,{"data-componentid":"".concat(X,"-cancel-button"),"data-testid":"".concat($,"-cancel-button"),floated:"left",onClick:function(){return z()}},ee("common:cancel"))),d.createElement(v.Z.Column,{mobile:8,tablet:8,computer:8},Se<(null==Ae?void 0:Ae.length)-1&&(null===(P=Ae[Se])||void 0===P?void 0:P.name)!==r.USER_TYPE&&d.createElement(s.KM,{"data-componentid":"".concat(X,"-next-button"),"data-testid":"".concat($,"-next-button"),floated:"right",onClick:Zt,loading:ft},ee("console:manage.features.user.modals.addUserWizard.buttons.next"),d.createElement(h.Z,{name:"arrow right"})),Se===(null==Ae?void 0:Ae.length)-1&&d.createElement(s.KM,{"data-componentid":"".concat(X,"-finish-button"),"data-testid":"".concat($,"-finish-button"),floated:"right",loading:qe,disabled:qe||vt,onClick:Zt},Ue?(null===(zt=Ue[r.USER_TYPE])||void 0===zt?void 0:zt.userType)===_.administratorConfig.adminRoleName?k===I.AdminAccountTypes.INTERNAL?ee("extensions:manage.features.user.addUser.add"):ee("extensions:manage.features.user.addUser.invite"):(null===(Gt=Ae[Se])||void 0===Gt?void 0:Gt.name)===r.USER_SUMMARY?ee("extensions:manage.features.user.addUser.close"):ee("extensions:manage.features.user.addUser.finish"):null),(null==Ae?void 0:Ae.length)>1&&Se>0&&(null===(Y=Ae[Se])||void 0===Y?void 0:Y.name)!==r.USER_SUMMARY&&d.createElement(s.Qj,{"data-componentid":"".concat(X,"-previous-button"),"data-testid":"".concat($,"-previous-button"),floated:"right",onClick:function(){he(Se)}},d.createElement(h.Z,{name:"arrow left"}),ee("console:manage.features.user.modals.addUserWizard.buttons.previous"))))))):null};B.defaultProps={compact:!1,conditionallyShowStepper:!1,currentStep:0,emailVerificationEnabled:!1,showStepper:!0,submitStep:r.GROUP_LIST}}}]);