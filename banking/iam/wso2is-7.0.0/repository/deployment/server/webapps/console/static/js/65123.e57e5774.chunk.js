"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[65123,15522,41008,60392,16362],{41008:(e,t,n)=>{n.r(t),n.d(t,{createAPIResource:()=>A,deleteAPIResource:()=>f,getAPIResourcePermissions:()=>m,getAPIResourcesForIdenitifierValidation:()=>u,updateAPIResource:()=>h,useAPIResourceDetails:()=>p,useAPIResources:()=>d});var i=n(93967),o=n(57477),a=n(14603),s=n(43991),r=n(26187),c=n(55379),l=i.AsgardeoSPAClient.getInstance().httpRequest.bind(i.AsgardeoSPAClient.getInstance()),u=function(e){var t={headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.GET,params:{filter:e},url:"".concat(r.h.getState().config.endpoints.authzEndpoint,"/").concat(c.APIResourcesConstants.API_RESOURCE_DIR)};return l(t).then((function(e){if(200===e.status)return Promise.resolve(e.data);throw new o.u(e.data.description,null,e.status,e.request,e,e.config)})).catch((function(e){var t,n;throw new o.u(e.message,e.stack,null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))},d=function(e,t,n){var i={headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.GET,params:{after:e,before:t,filter:n},url:"".concat(r.h.getState().config.endpoints.authzEndpoint,"/").concat(c.APIResourcesConstants.API_RESOURCE_DIR)},o=(0,s.Z)(i),l=o.data,u=o.error;return{data:l,error:u,isLoading:!u&&!l,isValidating:o.isValidating,mutate:o.mutate}},p=function(e){var t={headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.GET,url:"".concat(r.h.getState().config.endpoints.authzEndpoint,"/").concat(c.APIResourcesConstants.API_RESOURCE_DIR,"/").concat(e)},n=(0,s.Z)(e?t:null),i=n.data,o=n.error;return{data:i,error:o,isLoading:!o&&!i,isValidating:n.isValidating,mutate:n.mutate}},m=function(e){var t={headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.GET,params:{filter:e},url:"".concat(r.h.getState().config.endpoints.authzEndpoint,"/permissions")};return l(t).then((function(e){if(200===e.status)return Promise.resolve(e.data);throw new o.u(e.data.description,null,e.status,e.request,e,e.config)})).catch((function(e){var t,n;throw new o.u(e.message,e.stack,null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))},f=function(e){var t={headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.DELETE,url:"".concat(r.h.getState().config.endpoints.authzEndpoint,"/").concat(c.APIResourcesConstants.API_RESOURCE_DIR,"/")+"".concat(e)};return l(t).then((function(e){if(204!==e.status)throw new o.u(e.data.description,null,e.status,e.request,e,e.config);return Promise.resolve(e.data)})).catch((function(e){var t,n;throw new o.u(e.message,e.stack,null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))},h=function(e,t){var n={data:t,method:a.f2.PATCH,url:"".concat(r.h.getState().config.endpoints.authzEndpoint,"/").concat(c.APIResourcesConstants.API_RESOURCE_DIR,"/").concat(e)};return l(n).then((function(e){return Promise.resolve(e.data)})).catch((function(e){var t,n;throw new o.u(e.message,e.stack,null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))},A=function(e){var t={data:e,method:a.f2.POST,url:"".concat(r.h.getState().config.endpoints.authzEndpoint,"/").concat(c.APIResourcesConstants.API_RESOURCE_DIR)};return l(t).then((function(e){return Promise.resolve(e.data)})).catch((function(e){var t,n;throw new o.u(e.message,e.stack,null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.code,e.request,e.response,e.config)}))}},15522:(e,t,n)=>{n.r(t),n.d(t,{createAPIResource:()=>i.createAPIResource,deleteAPIResource:()=>i.deleteAPIResource,getAPIResourcePermissions:()=>i.getAPIResourcePermissions,getAPIResourcesForIdenitifierValidation:()=>i.getAPIResourcesForIdenitifierValidation,updateAPIResource:()=>i.updateAPIResource,useAPIResourceDetails:()=>i.useAPIResourceDetails,useAPIResources:()=>i.useAPIResources});var i=n(41008)},65123:(e,t,n)=>{n.r(t),n.d(t,{AuthorizeAPIResource:()=>I});var i=n(42125),o=n(14603),a=n(90268),s=n(13318),r=n(81816),c=n(52983),l=n(9202),u=n(54221),d=n(97860),p=n(21921),m=n(94635),f=n(5873),h=n(15522),A=n(55379),v=n(43469);function E(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,o,a,s,r=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=a.call(n)).done)&&(r.push(i.value),r.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw o}}return r}}(e,t)||R(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var I=function(e){var t=e.subscribedAPIResourcesListData,n=e.closeWizard,R=e.handleCreateAPIResource,b=e["data-componentid"],I=(0,l.$)().t,P=(0,u.I0)(),z=(0,r.fQ)().getLink,S=g((0,s.cC)(),2),y=S[0],w=S[1],C=(0,u.v9)((function(e){return e.config.ui.productName})),x=g((0,c.useState)([]),2),Z=x[0],k=x[1],N=g((0,c.useState)(!1),2),O=N[0],_=N[1],j=g((0,c.useState)(!1),2),D=j[0],T=j[1],q=g((0,c.useState)(null),2),L=q[0],U=q[1],V=g((0,c.useState)(null),2),F=V[0],M=V[1],G=g((0,c.useState)(!0),2),H=G[0],Q=G[1],W=g((0,c.useState)([]),2),K=W[0],$=W[1],B=g((0,c.useState)([]),2),X=B[0],J=B[1],Y=g((0,c.useState)([]),2),ee=Y[0],te=Y[1],ne=g((0,c.useState)(!1),2),ie=ne[0],oe=ne[1],ae=g((0,c.useState)([]),2),se=ae[0],re=ae[1],ce=g((0,c.useState)(!1),2),le=ce[0],ue=ce[1],de=g((0,c.useState)(v.Policy.ROLE),2),pe=de[0],me=de[1],fe=g((0,c.useState)(!1),2),he=fe[0],Ae=fe[1],ve=g((0,c.useState)(!0),2),Ee=ve[0],ge=ve[1],Re=(0,h.useAPIResources)(L),be=Re.data,Ie=Re.isLoading,Pe=Re.error,ze=Re.mutate;(0,c.useEffect)((function(){Pe&&(P((0,a.V_)({description:I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.notifications.createAuthorizedAPIResource.initialError.description"),level:o.QU.ERROR,message:I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.notifications.createAuthorizedAPIResource.initialError.message")})),n())}),[Pe]),(0,c.useEffect)((function(){var e;if(D||T(!0),be){var n,i=null==be?void 0:be.apiResources.reduce((function(e,n){0!==(null==t?void 0:t.length)&&(null!=t&&t.some((function(e){return e.apiIdentifier===n.identifier})))||(0===X.length||!(null!=X&&X.some((function(e){return e.key===n.id}))))&&e.push({key:n.id,text:n.displayName,value:n.id});return e}),[]);J([].concat(E(X),E(i||[]))),k([].concat(E(Z),E(be.apiResources)));var o=!1;null==be||null===(n=be.links)||void 0===n||n.forEach((function(t){t.rel===A.APIResourcesConstants.AFTER_REL&&(e=t.href.split("".concat(A.APIResourcesConstants.AFTER_REL,"="))[1])!==L&&(U(e),o=!0)})),o?ze():T(!1)}}),[be]),(0,c.useEffect)((function(){oe(!0),F&&(te(null==F?void 0:F.permissions.map((function(e){return{content:c.createElement(d.Z,{as:"h6",className:"header-with-icon"},c.createElement(d.Z.Content,null,e.displayName,c.createElement(d.Z.Subheader,null,c.createElement(r.EK,{withBackground:!0},e.name)))),key:e.name,text:e.displayName,value:e.name}}))),$([])),oe(!1)}),[F]),(0,c.useEffect)((function(){ue(!0);var e=[];v.policyDetails.forEach((function(t,n){e.push({key:n,text:t.name(),value:t.policyIdentifier()})})),re(e),ue(!1)}),[]),(0,c.useEffect)((function(){F&&Q(F.requiresAuthorization)}),[F]),(0,c.useEffect)((function(){Ae((null==F?void 0:F.permissions.length)===(null==K?void 0:K.length))}),[F,K]),(0,c.useEffect)((function(){ge(0===(null==K?void 0:K.length))}),[K]);var Se=function(e){$(e?[]:null==F?void 0:F.permissions.map((function(e){return e.name})))},ye=function(){_(!1),J([])};return c.createElement(p.Z,{"data-testid":b,open:!0,className:"wizard api-resource-create-wizard",dimmer:"blurring",size:"small",onClose:n,closeOnDimmerClick:!1,closeOnEscape:!0},c.createElement(p.Z.Header,{className:"wizard-header"},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.title"),c.createElement(r.X6,{as:"h6"},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.subTitle"))),c.createElement(p.Z.Content,{className:"content-container",scrolling:!0},Ie||D?c.createElement(r.pO,{inline:"centered",active:!0}):c.createElement(s.Es,{"data-componentid":"".concat(b,"-form"),uncontrolledForm:!1,onChange:function(e,t){var n=t.get("apiResource").toString(),i=t.get("policy").toString();if(n!==(null==F?void 0:F.id)){var o=null==Z?void 0:Z.find((function(e){return e.id===n}));M(o),o.requiresAuthorization&&(t.set("policy",v.Policy.ROLE),me(v.Policy.ROLE))}i!==pe&&me(i)},onSubmit:function(){_(!0),R(F.id,K,pe.toString(),ye)},submitState:y},c.createElement(m.Z,null,c.createElement(m.Z.Row,{columns:1},c.createElement(m.Z.Column,{mobile:16,tablet:16,computer:12},c.createElement(s.gN,{"data-componentid":"".concat(b,"-api"),label:I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.fields.apiResource.label"),placeholder:I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.fields.apiResource.placeholder"),type:"dropdown",name:"apiResource",key:"apiResource",children:X,tabIndex:3,required:!0,requiredErrorMessage:I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.fields.apiResource.requiredErrorMessage"),search:!0,selection:!0,scrolling:!0}))),c.createElement(m.Z.Row,{columns:1},c.createElement(m.Z.Column,{mobile:16,tablet:16,computer:12},c.createElement(m.Z,null,c.createElement(m.Z.Row,{columns:2},c.createElement(m.Z.Column,{className:"pb-1",floated:"left",stretched:!0,verticalAlign:"bottom"},c.createElement("label",null,c.createElement(r.xv,{size:13,className:"mb-1",muted:!F},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.fields.scopes.label")))),c.createElement(m.Z.Column,{floated:"right",textAlign:"right"},c.createElement(r.xv,{className:"mb-0",muted:!0,subHeading:!0,size:12},c.createElement(i.Z,{variant:"text",size:"small",disabled:!F||he,onClick:function(){return Se(!1)}},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.scopesSection.selectAll")),"|",c.createElement(i.Z,{variant:"text",size:"small",disabled:!F||Ee,onClick:function(){return Se(!0)}},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.scopesSection.selectNone")))))),c.createElement(f.Z,{className:"mb-3","data-componentid":"".concat(b,"-scopes"),placeholder:I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.fields.scopes.placeholder"),fluid:!0,multiple:!0,search:!0,selection:!0,required:!0,value:K,onChange:function(e,t){var n=t.value;$(t.options.filter((function(e){if(n.includes(e.value.toString()))return e})).map((function(e){return e.value.toString()})))},loading:ie,options:ee,disabled:!F}),c.createElement(r.kW,{disabled:!F},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.fields.scopes.hint")))),c.createElement(m.Z.Row,{columns:1,className:"pt-2"},c.createElement(m.Z.Column,{mobile:16,tablet:16,computer:12},c.createElement(r.GI,{content:I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.rbacPolicyMessage",{productName:C}),disabled:!F||!H,inverted:!0,trigger:c.createElement("label",null,c.createElement(r.xv,{size:13,className:"mb-1",muted:!F||H},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.fields.policy.label")))}),c.createElement(s.gN,{"data-componentid":"".concat(b,"-policy"),type:"dropdown",name:"policy",key:"policy",children:se,tabIndex:4,default:v.policyDetails.get(v.Policy.ROLE).policyIdentifier(),loading:le,disabled:!F||H,search:!0,selection:!0,scrolling:!0}),c.createElement(r.kW,{className:"mb-1",disabled:!F||H},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.fields.policy.hint")))),F&&c.createElement(m.Z.Row,{columns:1,className:"pt-0"},c.createElement(m.Z.Column,{mobile:16,tablet:16,computer:12},c.createElement(r.v0,{type:"info",header:v.policyDetails.get(pe).name(),content:c.createElement(c.Fragment,null,v.policyDetails.get(pe).hint(),c.createElement(r.eb,{link:z(v.policyDetails.get(pe).documentationLink())},I("extensions:common.learnMore")))})))))),c.createElement(p.Z.Actions,null,c.createElement(m.Z,null,c.createElement(m.Z.Row,{column:1},c.createElement(m.Z.Column,{mobile:8,tablet:8,computer:8},c.createElement(r.Qj,{tabIndex:5,"data-testid":"".concat(b,"-cancel-button"),floated:"left",onClick:n,disabled:O},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.buttons.cancel"))),c.createElement(m.Z.Column,{mobile:8,tablet:8,computer:8},c.createElement(r.KM,{tabIndex:6,"data-testid":"".concat(b,"-finish-button"),floated:"right",onClick:w,loading:O},I("extensions:develop.applications.edit.sections.apiAuthorization.sections.apiSubscriptions.wizards.authorizeAPIResource.buttons.finish")))))))};I.defaultProps={"data-componentid":"authorize-api-resource"}}}]);