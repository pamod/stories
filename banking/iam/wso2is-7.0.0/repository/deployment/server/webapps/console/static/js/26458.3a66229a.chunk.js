"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[26458],{26458:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(81816),o=n(52983),a=n(9202),i=n(39990),l=n(75917),c=n(63793);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,p=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){p=!0,o=e}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(p)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){var t=e["data-componentid"],n=(0,a.$)().t,s=(0,r.fQ)().getLink,u=p((0,o.useState)(void 0),2),d=u[0],h=u[1];return(0,o.useEffect)((function(){void 0===d&&h(c.identityProviderConfig.useNewConnectionsView)}),[c.identityProviderConfig]),o.createElement("div",{"data-testid":t},o.createElement(r.v0,{type:"info",header:n("console:develop.features.authenticationProvider.templates.hypr.wizardHelp.preRequisites.heading"),content:o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.hypr.wizardHelp.preRequisites.rpDescription"},"Before you begin, create a RP application in ",o.createElement(r.eb,{link:s("develop.connections.newConnection.hypr.help.developerConsole"),showEmptyLinkText:!0},"HYPR control centre"),", and obtain the application ID.")),o.createElement("p",null,o.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.hypr.wizardHelp.preRequisites.tokenDescription"},"You also have to obtain an ",o.createElement(r.eb,{link:s("develop.connections.newConnection.hypr.help.token"),showEmptyLinkText:!0},"API Token")," for the application you have created.")))}),o.createElement(r.X6,{as:"h5"},n("console:develop.features.authenticationProvider.templates.hypr.wizardHelp.name.heading")),o.createElement("p",null,n(d?"console:develop.features.authenticationProvider.templates.hypr.wizardHelp.name.connectionDescription":"console:develop.features.authenticationProvider.templates.hypr.wizardHelp.name.idpDescription")),o.createElement(l.Z,null),o.createElement(r.X6,{as:"h5"},n("console:develop.features.authenticationProvider.templates.hypr.wizardHelp.appId.heading")),o.createElement("p",null,o.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.hypr.wizardHelp.appId.description"},"Provide the ",o.createElement(r.EK,null,"Application ID")," of the application registerd in HYPR control center.")),o.createElement(l.Z,null),o.createElement(r.X6,{as:"h5"},n("console:develop.features.authenticationProvider.templates.hypr.wizardHelp.baseUrl.heading")),o.createElement("p",null,o.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.hypr.wizardHelp.baseUrl.description"},"Provide the ",o.createElement(r.EK,null,"base URL")," of your HYPR server deployment.")),o.createElement(l.Z,null),o.createElement(r.X6,{as:"h5"},n("console:develop.features.authenticationProvider.templates.hypr.wizardHelp.apiToken.heading")),o.createElement("p",null,o.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.hypr.wizardHelp.apiToken.description"},"Provide the ",o.createElement(r.EK,null,"API Token")," obtained from HYPR. This will be used to access HYPR's APIs.")))};u.defaultProps={"data-componentid":"hypr-idp-create-wizard-help"};const d=u}}]);