"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[23462],{34448:(e,t,n)=>{n.r(t),n.d(t,{PrivateKeyJWTConfigEditPage:()=>E,default:()=>b});var a=n(14603),o=n(90268),r=n(81816),i=n(52983),c=n(9202),s=n(54221),l=n(21228),u=n(94635),g=n(82722),f=n(74691),d=n(30640),m=n(93967),p=n(43991),v=n(85850),y=m.AsgardeoSPAClient.getInstance().httpRequest.bind(m.AsgardeoSPAClient.getInstance());function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,o,r,i,c=[],s=!0,l=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(a=r.call(n)).done)&&(c.push(a.value),c.length!==t);s=!0);}catch(e){l=!0,o=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var E=function(e){var t,n,m,C,E=e["data-componentid"],b=(0,s.I0)(),w=(0,c.$)().t,j=(0,r.fQ)().getLink,A=h((0,i.useState)(!0),2),P=A[0],k=A[1],R=(t={headers:{Accept:"application/json","Content-Type":"application/json"},method:a.f2.GET,params:{},url:v.De.getServiceResourceEndpoints().jwtAuthenticationServiceMgt},n=(0,p.Z)(t,{shouldRetryOnError:!1}),m=n.data,C=n.error,{data:m,error:C,isLoading:!m&&!C,isValidating:n.isValidating,mutate:n.mutate}),S=R.data,T=R.isLoading;(0,i.useEffect)((function(){S&&k(null==S?void 0:S.enableTokenReuse)}),[S]);var K=function(e){return w("console:manage.features.jwtPrivateKeyConfiguration.notifications.error.description",{description:e.response.data.description})},O=function(e,t){k(t.checked),function(e){var t={data:[e],headers:{Accept:"application/json","Access-Control-Allow-Origin":d.h.getState().config.deployment.clientHost,"Content-Type":"application/json"},method:a.f2.PATCH,url:v.De.getServiceResourceEndpoints().jwtAuthenticationServiceMgt};return y(t).then((function(e){return Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))}({operation:"ADD",path:"/enableTokenReuse",value:t.checked}).then((function(){b((0,o.V_)({description:w("console:manage.features.jwtPrivateKeyConfiguration.notifications.success.description"),level:a.QU.SUCCESS,message:w("console:manage.features.jwtPrivateKeyConfiguration.notifications.success.message")}))})).catch((function(e){!function(e){e.response&&e.response.data&&e.response.data.detail?b((0,o.V_)({description:K(e),level:a.QU.ERROR,message:w("console:manage.features.jwtPrivateKeyConfiguration.notifications.error.message")})):b((0,o.V_)({description:w("console:manage.features.jwtPrivateKeyConfiguration.notifications.genericError.description"),level:a.QU.ERROR,message:w("console:manage.features.jwtPrivateKeyConfiguration.notifications..genericError.message")}))}(e)}))};return T?i.createElement(r.Me,{isLoading:T,className:"pt-5"}):i.createElement(r.Xg,{pageTitle:"Private Key JWT Client Authentication for OIDC",title:w("console:manage.features.jwtPrivateKeyConfiguration.pageTitle"),description:i.createElement(i.Fragment,null,w("console:manage.features.jwtPrivateKeyConfiguration.description"),i.createElement(r.eb,{link:j("manage.privateKeyJWT.learnMore")},w("common:learnMore"))),"data-componentid":"".concat(E,"-page-layout"),backButton:{"data-componentid":"".concat(E,"-page-back-button"),onClick:function(){d.m8.push(d.$x.getPaths().get("LOGIN_AND_REGISTRATION"))},text:w("console:manage.features.governanceConnectors.goBackLoginAndRegistration")},bottomMargin:!1,contentTopMargin:!0,pageHeaderMaxWidth:!0},i.createElement(i.Fragment,null,i.createElement(l.Z,{label:w(P?"console:manage.features.jwtPrivateKeyConfiguration.tokenReuseEnabled":"console:manage.features.jwtPrivateKeyConfiguration.tokenReuseDisabled"),toggle:!0,onChange:O,checked:P,readOnly:!1,"data-componentid":"".concat(E,"-enable-toggle")})),i.createElement(u.Z,{className:"mt-2"},i.createElement(u.Z.Row,{columns:1},i.createElement(u.Z.Column,{width:10},i.createElement(g.Z,{info:!0,content:i.createElement(i.Fragment,null,i.createElement(f.Z,{name:"info circle"}),w("console:manage.features.jwtPrivateKeyConfiguration.messageInfo"))})))))};E.defaultProps={"data-componentid":"private-key-jwt-config-edit-page"};const b=E}}]);