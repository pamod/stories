"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[87188],{87188:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(81816),o=n(52983),i=n(9202),l=n(39990),a=n(54221),c=n(75917),s=n(63793);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],c=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(e){var t,n=e["data-testid"],d=(0,i.$)().t,p=(0,r.fQ)().getLink,f=(0,a.v9)((function(e){return e.config})),m=u((0,o.useState)(void 0),2),v=m[0],h=m[1];return(0,o.useEffect)((function(){void 0===v&&h(s.identityProviderConfig.useNewConnectionsView)}),[s.identityProviderConfig]),o.createElement("div",{"data-testid":n},o.createElement(r.v0,{type:"info",header:d("console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.preRequisites.heading"),content:o.createElement(o.Fragment,null,o.createElement("p",null,o.createElement(l.c,{i18nKey:"console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.preRequisites.getCredentials"},"Before you begin, create an ",o.createElement("strong",null,"OAuth credential")," on the ",o.createElement(r.eb,{link:p("develop.connections.newConnection.microsoft.help.developerConsole"),showEmptyLinkText:!0},"on Microsoft"),", and obtain a ",o.createElement("strong",null,"Client ID & secret"),".")),o.createElement("p",null,o.createElement(l.c,{i18nKey:"console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.preRequisites.configureRedirectURL"},"Use the following URL as the ",o.createElement("strong",null,"Authorized Redirect URI"),"."),o.createElement(r.OR,{className:"copy-input-dark spaced",value:(null==f||null===(t=f.deployment)||void 0===t?void 0:t.customServerHost)+"/commonauth"}),o.createElement(r.eb,{link:p("develop.connections.newConnection.microsoft.help.configureOAuth"),showEmptyLinkText:!0},d("console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.preRequisites.configureOAuthApps"))))}),o.createElement(r.X6,{as:"h5"},d("console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.name.heading")),o.createElement("p",null,d(v?"console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.name.connectionDescription":"console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.name.idpDescription")),o.createElement(c.Z,null),o.createElement(r.X6,{as:"h5"},d("console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.clientId.heading")),o.createElement("p",null,o.createElement(l.c,{i18nKey:"console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.clientId.description"},"Provide the ",o.createElement(r.EK,null,"Client ID")," obtained from Microsoft.")),o.createElement(c.Z,null),o.createElement(r.X6,{as:"h5"},d("console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.clientSecret.heading")),o.createElement("p",null,o.createElement(l.c,{i18nKey:"console:develop.features.authenticationProvider.templates.microsoft.wizardHelp.clientSecret.description"},"Provide the ",o.createElement(r.EK,null,"Client Secret")," obtained from Microsoft.")))};p.defaultProps={"data-testid":"microsoft-idp-create-wizard-help"};const f=p}}]);