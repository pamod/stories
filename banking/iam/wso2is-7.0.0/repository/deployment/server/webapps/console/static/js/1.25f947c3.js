(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[18334],{94435:(t,e,n)=>{"use strict";var i=n(96433),r=n(65667),o=n.n(r),a=n(52056);function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p,f,g,E,h,m,T,S,y,_,R=(p={},f={},g={},E="https://localhost:9443",h="${serverOrigin}",m="${tenantPrefix}",T="${userTenantDomain}",S="${superTenantDomain}",{constructAppBaseNameForHistoryAPI:function(){return g.legacyAuthzRuntime?void 0!==g.appBaseNameForHistoryAPI?g.appBaseNameForHistoryAPI:this.isSaas()?"/":this.getAppBaseWithTenantAndOrganization():"/"},constructAppPaths:function(t){return g.legacyAuthzRuntime?this.isSaas()?this.getAppBaseWithTenantAndOrganization()+t:this.getAppBaseWithOrganization()+t:"".concat(this.getAppBaseWithTenantAndOrganization()).concat(t)},constructRedirectURLs:function(t){if(g.legacyAuthzRuntime)return this.isSaas()?g.clientOrigin+this.getOrganizationPath()+(g.appBaseName?"/"+g.appBaseName:"")+t:g.clientOrigin+(g.appBaseName?"/"+g.appBaseName:"")+t;var e="".concat(g.clientOrigin).concat(this.getTenantPath(!0));return e.includes(this.getSuperTenant())&&(e=g.clientOrigin),"".concat(e).concat(g.appBaseName?"/"+g.appBaseName:"").concat(t)},getAppBase:function(){var t=this.getLocationPathWithoutTenant(),e=t.split("/");return e.length<=1?"/":2===e.length?t:"/"+this.getLocationPathWithoutTenant().split("/")[1]},getAppBaseWithOrganization:function(){return g.legacyAuthzRuntime?"".concat(this.getTenantPath(!0)).concat(this.getOrganizationPath()).concat(g.appBaseName?"/"+g.appBaseName:""):"".concat(this.getOrganizationPath())},getAppBaseWithTenant:function(){return"".concat(this.getTenantPath(!0)).concat(g.appBaseName?"/"+g.appBaseName:"")},getAppBaseWithTenantAndOrganization:function(){if(g.legacyAuthzRuntime)return"".concat(this.getTenantPath(!0)).concat(this.getOrganizationPath()).concat(g.appBaseName?"/"+g.appBaseName:"");var t=this.getTenantPath(!0)||"/".concat(this.getTenantPrefix(),"/").concat(this.getSuperTenant()),e=g.appBaseName?"/".concat(g.appBaseName):"";return"".concat(t).concat(this.getOrganizationPath()).concat(e)},getClientId:function(){return g.legacyAuthzRuntime?this.isSaas()||this.isSuperTenant()?g.clientID:g.clientID+"_"+this.getTenantName():g.clientID},getClientOriginWithTenant:function(){return g.legacyAuthzRuntime?g.clientOrigin+this.getAppBaseWithTenant():"".concat(g.clientOrigin).concat(this.getAppBaseWithTenantAndOrganization())},getConfig:function(){if(0===Object.entries(g).length)return null;g.accountApp&&g.accountApp.origin&&(g.accountAppOrigin=g.accountApp.origin);var t=!1;g.accountApp.skipTenant&&(t=!0);var e=!1;g.accountApp.useCommonPostLogoutUrl&&(e=!0);var n=!1;return g.allowMultipleAppProtocols&&(n=!0),{accountApp:{commonPostLogoutUrl:e,path:t?g.accountAppOrigin+g.accountApp.path:g.accountAppOrigin+this.getTenantPath(!0)+g.accountApp.path,tenantQualifiedPath:this.getTenantQualifiedAccountAppPath(t?"":g.accountApp.path)},adminApp:{basePath:this.constructAppPaths(""),displayName:g.adminApp.displayName,path:this.constructAppPaths("")},allowMultipleAppProtocols:n,appBase:g.appBaseName,appBaseNameForHistoryAPI:this.constructAppBaseNameForHistoryAPI(),appBaseWithTenant:this.getAppBaseWithTenantAndOrganization(),clientID:this.getClientId(),clientOrigin:g.clientOrigin,clientOriginWithTenant:this.getClientOriginWithTenant(),customServerHost:g.customServerHost,debug:g.debug,developerApp:{basePath:this.constructAppPaths(""),displayName:g.developerApp.displayName,path:this.constructAppPaths("")},docSiteUrl:g.docSiteUrl,documentation:g.documentation,extensions:g.extensions,getProfileInfoFromIDToken:g.getProfileInfoFromIDToken,idpConfigs:this.resolveIdpConfigs(),isSaas:this.isSaas(),legacyAuthzRuntime:g.legacyAuthzRuntime,loginCallbackURL:this.constructRedirectURLs(g.loginCallbackPath),logoutCallbackURL:this.constructRedirectURLs(g.logoutCallbackPath),organizationName:this.getOrganizationName(),organizationPrefix:this.getOrganizationPrefix(),organizationType:this.getOrganizationType(),productVersionConfig:g.ui.productVersionConfig,requireSuperTenantInUrls:g.requireSuperTenantInUrls,routes:{home:this.constructAppPaths(g.routePaths.home),login:this.constructAppPaths(g.routePaths.login),logout:this.constructAppPaths(g.routePaths.logout)},serverOrigin:g.serverOrigin,serverOriginWithTenant:this.getServerOriginWithTenant(),session:g.session,superTenant:this.getSuperTenant(),tenant:this.isSuperTenant()?this.getSuperTenant():this.getTenantName(),tenantPath:this.getTenantPath(),tenantPathWithoutSuperTenant:this.getTenantPath(!0),tenantPrefix:this.getTenantPrefix(),ui:g.ui}},getLocationPathWithoutTenant:function(){var t=window.location.pathname.split("/");return t[1]===this.getTenantPrefix()&&t[2]===this.getTenantName(!0)&&t.splice(1,2),t[1]===this.getOrganizationPrefix()&&t[2]===this.getOrganizationName(!0)&&t.splice(1,2),t.join("/")},getOrganizationName:function(){if(g.legacyAuthzRuntime){var t=window.location.pathname.split("/"),e=t.indexOf(this.getOrganizationPrefix());return-1!==e?t[e+1]:""}return g.organizationName?g.organizationName:""},getOrganizationPath:function(){return""!==this.getOrganizationName()?"/".concat(this.getOrganizationPrefix(),"/").concat(this.getOrganizationName()):""},getOrganizationPrefix:function(){return p.organizationPrefix||"o"},getOrganizationType:function(){return g.organizationType},getServerOriginWithTenant:function(){if(g.legacyAuthzRuntime)return g.serverOrigin+this.getTenantPath(!0);var t=this.getTenantPath(!0);return this.getOrganizationName()&&!t&&(t="/".concat(this.getTenantPrefix(),"/").concat(this.getSuperTenant())),"".concat(g.serverOrigin).concat(t).concat(this.getOrganizationName()?"/o":"")},getSuperTenant:function(){return p.superTenant||"carbon.super"},getSuperTenantProxy:function(){return g.superTenantProxy||this.getSuperTenant()},getTenantName:function(){if(!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"location"===this.getTenantResolutionStrategy())&&"id_token"===this.getTenantResolutionStrategy()&&g.tenant)return g.tenant;var t=window.location.pathname.split("/"),e=t.indexOf(this.getTenantPrefix());if(e>0){var n=t[e+1];return n||""}return g.requireSuperTenantInUrls?this.getSuperTenant():""},getTenantPath:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return g.legacyAuthzRuntime?this.getOrganizationName()?"":!t||this.getTenantName()!==this.getSuperTenant()&&""!==this.getTenantName()?this.isSaas()?""!==this.getTenantName()?"/"+this.getTenantPrefix()+"/"+this.getTenantName():"":"/":"":""!==this.getTenantName()?"/".concat(this.getTenantPrefix(),"/").concat(this.getTenantName()):""},getTenantPrefix:function(){return p.tenantPrefix||"t"},getTenantQualifiedAccountAppPath:function(t){var e="";if(g.legacyAuthzRuntime)return""!==this.getTenantPrefix()&&""!==this.getTenantName()&&(e="".concat(g.accountAppOrigin,"/").concat(this.getTenantPrefix(),"/").concat(this.getTenantName())),e+=t;if(""!==this.getTenantPrefix()&&""!==this.getTenantName()){var n=this.getTenantPath(!0)||"/".concat(this.getTenantPrefix(),"/").concat(this.getSuperTenant());e="".concat(g.accountAppOrigin).concat(n).concat(this.getOrganizationPath())}return e+=t},getTenantResolutionStrategy:function(){return void 0!==g.tenantResolutionStrategy?g.tenantResolutionStrategy:"id_token"},init:function(t){f={accountAppOrigin:(p=t).accountAppOrigin||p.serverOrigin||E,clientOrigin:window.location.origin,contextPath:p.contextPath,legacyAuthzRuntime:p.legacyAuthzRuntime||!1,requireSuperTenantInUrls:p.requireSuperTenantInUrls||!1,serverOrigin:p.serverOrigin||E};var e,n,i,r=(g=f).contextPath+"deployment.config.json";e=r,n=function(t){var e=JSON.parse(t);if(!{}.hasOwnProperty.call(e,"accountApp"))throw"'accountApp' config is missing in "+p.deploymentConfigFile;if(!{}.hasOwnProperty.call(e,"appBaseName"))throw"'appBaseName' config is missing in "+p.deploymentConfigFile;if(!{}.hasOwnProperty.call(e,"clientID"))throw"'clientID' config is missing in "+p.deploymentConfigFile;if(!{}.hasOwnProperty.call(e,"loginCallbackPath"))throw"'loginCallbackPath' config is missing in "+p.deploymentConfigFile;if(!{}.hasOwnProperty.call(e,"logoutCallbackPath"))throw"'logoutCallbackPath' config is missing in "+p.deploymentConfigFile;if(!{}.hasOwnProperty.call(e,"routePaths"))throw"'routePaths' config is missing in "+p.deploymentConfigFile;if(!{}.hasOwnProperty.call(e,"ui"))throw"'ui' config is missing in "+p.deploymentConfigFile;g=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e=e||[];for(var i=1;i<e.length;i++)if(e[i])for(var r in e[i])({}).hasOwnProperty.call(e[i],r)&&(e[r]=e[i][r]);return e}({},f,JSON.parse(t))},(i=new XMLHttpRequest).overrideMimeType("application/json"),i.open("GET",e,!1),i.send(null),404===i.status&&n(null),200===i.status&&(0===i.responseText.trim().length||""===i.responseText.trim()||"{}"===i.responseText.trim()?n(null):n(i.responseText))},isSaas:function(){return void 0!==g.isSaas&&JSON.parse(g.isSaas)},isSuperTenant:function(){return!(!g.tenant||g.tenant!==this.getSuperTenant())||""===this.getTenantName()},resolveIdpConfigs:function(){return u(u({serverOrigin:this.isSaas()?g.serverOrigin:g.serverOrigin+this.getTenantPath(!0)},g.idpConfigs),this.resolveURLs())},resolveURLs:function(){var t=this,e=function(){return g.legacyAuthzRuntime?g.serverOrigin:g.serverOrigin+t.getTenantPath(!0)};return{authorizeEndpointURL:g.idpConfigs&&g.idpConfigs.authorizeEndpointURL&&g.idpConfigs.authorizeEndpointURL.replace(h,e()).replace(m,this.getTenantPrefix()).replace(S,this.getSuperTenantProxy()).replace(T,this.getTenantName()?this.getTenantName():this.getOrganizationName()?this.getOrganizationName():""),jwksEndpointURL:g.idpConfigs&&g.idpConfigs.jwksEndpointURL&&g.idpConfigs.jwksEndpointURL.replace(h,e()).replace(m,this.getTenantPrefix()).replace(S,this.getSuperTenantProxy()).replace(T,this.getTenantName()?this.getTenantName():""),logoutEndpointURL:g.idpConfigs&&g.idpConfigs.logoutEndpointURL&&g.idpConfigs.logoutEndpointURL.replace(h,e()).replace(m,this.getTenantPrefix()).replace(S,this.getSuperTenantProxy()).replace(T,this.getTenantName()?this.getTenantName():""),oidcSessionIFrameEndpointURL:g.idpConfigs&&g.idpConfigs.oidcSessionIFrameEndpointURL&&g.idpConfigs.oidcSessionIFrameEndpointURL.replace(h,e()).replace(m,this.getTenantPrefix()).replace(S,this.getSuperTenantProxy()).replace(T,this.getTenantName()?this.getTenantName():""),tokenEndpointURL:g.idpConfigs&&g.idpConfigs.tokenEndpointURL&&g.idpConfigs.tokenEndpointURL.replace(h,e()).replace(m,this.getTenantPrefix()).replace(S,this.getSuperTenantProxy()).replace(T,this.getTenantName()?this.getTenantName():""),tokenRevocationEndpointURL:g.idpConfigs&&g.idpConfigs.tokenRevocationEndpointURL&&g.idpConfigs.tokenRevocationEndpointURL.replace(h,e()).replace(m,this.getTenantPrefix()).replace(S,this.getSuperTenantProxy()).replace(T,this.getTenantName()?this.getTenantName():""),wellKnownEndpointURL:g.idpConfigs&&g.idpConfigs.wellKnownEndpointURL&&g.idpConfigs.wellKnownEndpointURL.replace(h,e()).replace(m,this.getTenantPrefix()).replace(S,this.getSuperTenantProxy()).replace(T,this.getTenantName()?this.getTenantName():"")}},updateCustomServerHost:function(t){g.customServerHost=t},updateOrganizationName:function(t){g.organizationName=t},updateOrganizationType:function(t){g.organizationType=t},updateTenantQualifiedBaseName:function(t){g.tenant=t,g.tenantPath=this.getTenantPath(),t!==this.getSuperTenant()?g.appBaseWithTenant="/"+this.getTenantPrefix()+"/"+t+"/"+g.appBaseName:g.appBaseWithTenant="/"+g.appBaseName}});function O(t,e,n,r,o){if(t===o||t>=r){var a="session_timeout_warning",s=new URL(window.location.href);s&&s.searchParams&&null!==s.searchParams.get(a)&&s.searchParams.delete(a);var c=s.search,u=c+(c?"&":"?")+a+"=true";s.searchParams.append(a,"true");var l={idleTimeout:r,idleWarningTimeout:o,url:s.href};window.history.pushState(l,null,u),dispatchEvent(new MessageEvent("session-timeout",{data:l}))}return e%n==0&&t<n&&dispatchEvent(new MessageEvent(i.F$.SESSION_REFRESH_EVENT)),e}window.AppUtils&&null!==(y=window.AppUtils)&&void 0!==y&&y.getConfig()||(R.init({accountAppOrigin:void 0,contextPath:contextPathGlobal,isAdaptiveAuthenticationAvailable,isOrganizationManagementEnabled,serverOrigin:serverOriginGlobal,superTenant:superTenantGlobal,tenantPrefix:tenantPrefixGlobal}),window.AppUtils=R);var d=null===(_=window.AppUtils)||void 0===_?void 0:_.getConfig(),A=600;null!=(null==d?void 0:d.session)&&null!=d.session.userIdleTimeOut&&d.session.userIdleTimeOut>1&&(A=d.session.userIdleTimeOut);var v=580;null!=(null==d?void 0:d.session)&&null!=d.session.userIdleWarningTimeOut&&d.session.userIdleWarningTimeOut>1&&(v=d.session.userIdleWarningTimeOut);var b=300;null!=(null==d?void 0:d.session)&&null!=d.session.sessionRefreshTimeOut&&d.session.sessionRefreshTimeOut>1&&(b=d.session.sessionRefreshTimeOut);var P=0,N=0,C=function(){P>=b&&dispatchEvent(new MessageEvent(i.F$.SESSION_REFRESH_EVENT)),P=0};(document.onclick=function(){C()},document.onmousemove=function(){C()},document.onkeypress=function(){C()},"IE"===(new a.UAParser).getBrowser().name)?window.setInterval((function(){P++,N++,N=O(P,N,b,A,v)}),1e3):(new(o())).onmessage=function(){P++,N++,N=O(P,N,b,A,v)}},96433:(t,e,n)=>{"use strict";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(o=r.key,a=void 0,a=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(o,"string"),"symbol"===i(a)?a:String(a)),r)}var o,a}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{$x:()=>a,lu:()=>l,iV:()=>E,F$:()=>S,lQ:()=>O,KN:()=>b,Cb:()=>w,nL:()=>D,c$:()=>H,ru:()=>k,ss:()=>Q});var a=o((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===s(o)?o:String(o)),i)}var r,o}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}a.DEFAULT_APP_CONFIG_FILE_NAME="app.config.json",a.APP_CONFIG_FETCH_ERROR_MESSAGE="An error occurred while fetching the application config.",a.CONSOLE_APP="console",a.MY_ACCOUNT_APP="my_account",a.NETWORK_ERROR_EVENT="network_error_event",a.CHUNK_LOAD_ERROR_EVENT="chunk_load_error_event",a.FULL_UI_SCOPE="console:full",a.WEB_WORKER_UNSUPPORTED_AGENTS=["IE","Safari","[Mobile] Safari","Mobile Safari"];var l=u((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==p(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===p(o)?o:String(o)),i)}var r,o}function g(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}l.CERTIFICATE_END="-----END CERTIFICATE-----",l.CERTIFICATE_BEGIN="-----BEGIN CERTIFICATE-----",l.END_LINE="",l.NOT_AVAILABLE="N/A",l.EMPTY_STRING="",l.QUESTION_MARK="?",l.SPACE_CHARACTER=" ",l.NO_OPERATIONS=function(){},l.DUMMY_DISPLAY_CERTIFICATE={alias:l.NOT_AVAILABLE,infoUnavailable:!0,issuerDN:[],serialNumber:l.NOT_AVAILABLE,subjectDN:[],validFrom:new Date,validTill:new Date,version:0},l.SUPPORTED_KEY_ALGORITHMS=["ED25519","RSA","RSA-KEM","X.509","PKCS#5","PKCS#7","PKCS#8","PKCS#10","PKCS#12","ASN.1"];var E=g((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==h(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===h(o)?o:String(o)),i)}var r,o}function T(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}E.ALL_LOCAL_CLAIMS_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR="Received an invalid status code while retrieving all the local claims.",E.ALL_LOCAL_CLAIMS_FETCH_REQUEST_ERROR="An error occurred while fetching the local claims.",E.DIALECTS_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR="Received an invalid status code while retrieving claim dialects.",E.DIALECTS_FETCH_REQUEST_ERROR="An error occurred while fetching the claim dialects.",E.ALL_EXTERNAL_CLAIMS_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR="Received an invalid status code while retrieving all the external claims.",E.ALL_EXTERNAL_CLAIMS_FETCH_REQUEST_ERROR="An error occurred while fetching the external claims.",E.ALL_SCIM_RESOURCE_TYPES_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR="Received an invalid status code while retrieving SCIM resource types.",E.ALL_SCIM_RESOURCE_TYPES_FETCH_REQUEST_ERROR="An error occurred while fetching the SCIM resource types.";var S=T((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function _(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==y(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===y(o)?o:String(o)),i)}var r,o}function R(t,e,n){return e&&_(t.prototype,e),n&&_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}S.AXIOS_FETCH_REQUEST_ERROR_MESSAGE="An error occurred while executing the request",S.SESSION_TIMEOUT_WARNING_URL_SEARCH_PARAM_KEY="session_timeout_warning",S.AUTHENTICATION_SUCCESSFUL_EVENT="authentication-successful",S.SESSION_REFRESH_EVENT="session-refresh";var O=R((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function A(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===d(o)?o:String(o)),i)}var r,o}function v(t,e,n){return e&&A(t.prototype,e),n&&A(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}O.STRUCTURE_FILE_NAME="mkdocs.yml",O.GITHUB_API_BASE_URL="https://api.github.com",O.DEFAULT_BRANCH="master",O.DEFAULT_REPO_OWNER="wso2",O.DEFAULT_REPO="docs-is",O.DEFAULT_CONTENT_BASE_PATH="docs",O.DEFAULT_LOCALE="en",O.GITHUB_CONTENTS_API_ENDPOINT="".concat(O.GITHUB_API_BASE_URL,"/repos/").concat(O.DEFAULT_REPO_OWNER,"/").concat(O.DEFAULT_REPO,"/contents"),O.DEFAULT_CONTENT_BASE_URL="".concat(O.GITHUB_CONTENTS_API_ENDPOINT,"/").concat(O.DEFAULT_LOCALE,"/").concat(O.DEFAULT_CONTENT_BASE_PATH),O.DEFAULT_STRUCTURE_FILE_URL="".concat(O.GITHUB_CONTENTS_API_ENDPOINT,"/").concat(O.DEFAULT_LOCALE,"/").concat(O.STRUCTURE_FILE_NAME),O.DEFAULT_IMAGE_PREFIX_URL="".concat(O.GITHUB_CONTENTS_API_ENDPOINT,"/").concat(O.DEFAULT_REPO_OWNER,"/").concat(O.DEFAULT_REPO,"/tree/").concat(O.DEFAULT_BRANCH,"/").concat(O.DEFAULT_LOCALE,"/").concat(O.DEFAULT_CONTENT_BASE_PATH),O.STRUCTURE_FETCH_ERROR="Failed to fetch the documentation structure.",O.RAW_CONTENT_FETCH_ERROR="Failed to fetch the documentation raw content.";var b=v((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function N(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==P(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===P(o)?o:String(o)),i)}var r,o}function C(t,e,n){return e&&N(t.prototype,e),n&&N(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}b.HTTP_URL_REGEX_PATTERN=new RegExp("^(http:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i"),b.HTTPS_URL_REGEX_PATTERN=new RegExp("^(https:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i"),b.HTTPS_OR_HTTP_REGEX_PATTERN=new RegExp("https?:\\/\\/"),b.DATA_URL_REGEX_PATTERN=/^data:.+\/(.+);base64,(.*)$/,b.MOBILE_DEEP_LINK_URL_REGEX_PATTERN=/^.+:\/\/.+$/,b.LOOP_BACK_CALL_REGEX_PATTERN=/(^(?:http|https):\/\/(localhost|127.0.0.1))/g;var w=C((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function L(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==I(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===I(o)?o:String(o)),i)}var r,o}function U(t,e,n){return e&&L(t.prototype,e),n&&L(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}w.SCIM2_CORE_USER_SCHEMA="urn:ietf:params:scim:schemas:core:2.0:User",w.SCIM2_ENT_USER_SCHEMA="urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",w.SCIM2_WSO2_USER_SCHEMA="urn:scim:wso2:schema",w.SCIM2_WSO2_CUSTOM_SCHEMA="urn:scim:wso2:schema",w.SCHEMA_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR="Received an invalid status code while retrieving the profile schemas.",w.SCHEMA_FETCH_REQUEST_ERROR="An error occurred while fetching the profile schemas.",w.PROFILE_INFO_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR="Received an invalid status code while retrieving profile info.",w.PROFILE_INFO_FETCH_REQUEST_ERROR="An error occurred while fetching the profile info.",w.PROFILE_INFO_UPDATE_REQUEST_INVALID_RESPONSE_CODE_ERROR="Received an invalid status code while updating profile info.",w.PROFILE_INFO_UPDATE_REQUEST_ERROR="An error occurred while updating the profile info.",w.ACCOUNT_SWITCH_REQUEST_ERROR="An error occurred while switching the account.",w.GRAVATAR_IMAGE_FETCH_REQUEST_ERROR="An error occurred while fetching the gravatar.",w.SCIM2_SCHEMA_DICTIONARY=(new Map).set("ACTIVE","active").set("EMAILS","emails").set("USERNAME","userName").set("NAME","name").set("ADDRESSES","addresses").set("PHONE_NUMBERS","phoneNumbers").set("GROUPS","groups").set("ROLES","roles").set("ROLES_DEFAULT","roles.default").set("PROFILE_URL","profileUrl").set("ACCOUNT_LOCKED","accountLocked").set("ACCOUNT_DISABLED","accountDisabled").set("ONETIME_PASSWORD","oneTimePassword").set("DOB","dateOfBirth").set("LOCAL_CREDENTIAL_EXISTS","localCredentialExists").set("USER_SOURCE_ID","userSourceId").set("ACTIVE","active").set("RESROUCE_TYPE","ResourceType").set("EXTERNAL_ID","ExternalID").set("META_DATA","MetaData").set("IDP_TYPE","idpType").set("IMS","ims").set("PHOTOS","photos").set("META_VERSION","meta.version"),w.READONLY_SCHEMA="READ_ONLY",w.CLAIM_VALUE_MAX_LENGTH=255;var D=U((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function z(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==F(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==F(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===F(o)?o:String(o)),i)}var r,o}function M(t,e,n){return e&&z(t.prototype,e),n&&z(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}D.ROLES_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR="Received an invalid status code while retrieving user roles.",D.ROLES_FETCH_REQUEST_ERROR="An error occurred while fetching the user roles.",D.ADMIN_ROLE="admin",D.ADMIN_GROUP="Internal/admin",D.EVERYONE_ROLE="everyone",D.EVERYONE_GROUP="Internal/everyone",D.CONSOLE_ADMIN_ROLE="Console/Administrator";var H=M((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function B(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==j(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===j(o)?o:String(o)),i)}var r,o}function x(t,e,n){return e&&B(t.prototype,e),n&&B(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}H.LOGIN_SCOPE="internal_login",H.HUMAN_TASK_SCOPE="internal_humantask_view",H.SYSTEM_SCOPE="SYSTEM";var k=x((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function W(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,o=void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==G(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===G(o)?o:String(o)),i)}var r,o}function V(t,e,n){return e&&W(t.prototype,e),n&&W(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}k.GRAVATAR_URL="https://www.gravatar.com",k.DEFAULT_DASHBOARD_LAYOUT_DESKTOP_CONTENT_TOP_SPACING=0,k.DEFAULT_SIDE_PANEL_ITEM_HEIGHT=75,k.API_RETRIEVAL_ERROR_ALERT_MESSAGE="Retrieval Error",k.DEFAULT_RESOURCE_LIST_LOADING_ITEM_LIMIT=4;var Q=V((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}));Q.USERSTORES_FETCH_REQUEST_INVALID_RESPONSE_CODE_ERROR="Received an invalid status code while retrieving userstores.",Q.USERSTORES_FETCH_REQUEST_ERROR="An error occurred while fetching the userstores.",Q.PRIMARY_USER_STORE="PRIMARY",Q.CUSTOMER_USER_STORE_MAPPING="Customer"},65667:(t,e,n)=>{t.exports=function(){return n(57521)('(()=>{"use strict";var e=self;setInterval((function(){e.postMessage("")}),1e3)})();',n.p+"b7a49e61bd8cd21b.worker.js")}}},t=>{t.O(0,[54736],(()=>{return e=94435,t(t.s=e);var e}));t.O()}]);