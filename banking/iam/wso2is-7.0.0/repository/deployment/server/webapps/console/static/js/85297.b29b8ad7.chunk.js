"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[85297],{85297:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(81816),a=n(52983),r=n(9202),i=n(39990),o=n(54221),p=n(75917),c=n(63793);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r,i,o=[],p=!0,c=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;p=!1}else for(;!(p=(l=r.call(n)).done)&&(o.push(l.value),o.length!==t);p=!0);}catch(e){c=!0,a=e}finally{try{if(!p&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var d=function(e){var t,n,u,d=e["data-componentid"],m=(0,r.$)().t,v=(0,l.fQ)().getLink,f=(0,o.v9)((function(e){return e.config})),h=s((0,a.useState)(void 0),2),E=h[0],y=h[1];return(0,a.useEffect)((function(){void 0===E&&y(c.identityProviderConfig.useNewConnectionsView)}),[c.identityProviderConfig]),a.createElement("div",{"data-componentid":d},a.createElement(l.v0,{type:"info",header:m("console:develop.features.authenticationProvider.templates.apple.wizardHelp.preRequisites.heading"),content:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.apple.wizardHelp.preRequisites.getCredentials"},"Before you begin, create a ",a.createElement("strong",null,"Sign in With Apple")," enabled application on ",a.createElement(l.eb,{link:v("develop.connections.newConnection.apple.help.developerConsole"),showEmptyLinkText:!0},"Apple Developer Portal")," with a ",a.createElement("strong",null,"Services ID")," and a ",a.createElement("strong",null,"Private Key"),".")),a.createElement("p",null,a.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.apple.wizardHelp.preRequisites.configureWebDomain"},"Use the following as a ",a.createElement("strong",null,"Web Domain"),"."),a.createElement(l.OR,{className:"copy-input-dark spaced",value:null===(t=new URL(null==f||null===(n=f.deployment)||void 0===n?void 0:n.serverOrigin))||void 0===t?void 0:t.hostname})),a.createElement("p",null,a.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.apple.wizardHelp.preRequisites.configureReturnURL"},"Add the following URL as a ",a.createElement("strong",null,"Return URL"),"."),a.createElement(l.OR,{className:"copy-input-dark spaced",value:(null==f||null===(u=f.deployment)||void 0===u?void 0:u.customServerHost)+"/commonauth"}),a.createElement(l.eb,{link:v("develop.connections.newConnection.apple.help.configureSignIn"),showEmptyLinkText:!0},m("console:develop.features.authenticationProvider.templates.apple.wizardHelp.preRequisites.configureAppleSignIn"))))}),a.createElement(l.X6,{as:"h5"},m("console:develop.features.authenticationProvider.templates.apple.wizardHelp.name.heading")),a.createElement("p",null,m(E?"console:develop.features.authenticationProvider.templates.apple.wizardHelp.name.connectionDescription":"console:develop.features.authenticationProvider.templates.apple.wizardHelp.name.idpDescription")),a.createElement(p.Z,null),a.createElement(l.X6,{as:"h5"},m("console:develop.features.authenticationProvider.templates.apple.wizardHelp.clientId.heading")),a.createElement("p",null,a.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.apple.wizardHelp.clientId.description"},"Provide the ",a.createElement(l.EK,null,"Services ID")," created at Apple.")),a.createElement(p.Z,null),a.createElement(l.X6,{as:"h5"},m("console:develop.features.authenticationProvider.templates.apple.wizardHelp.teamId.heading")),a.createElement("p",null,a.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.apple.wizardHelp.teamId.description"},"Provide the Apple developer ",a.createElement(l.EK,null,"Team ID"),".")),a.createElement(p.Z,null),a.createElement(l.X6,{as:"h5"},m("console:develop.features.authenticationProvider.templates.apple.wizardHelp.keyId.heading")),a.createElement("p",null,a.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.apple.wizardHelp.keyId.description"},"Provide the ",a.createElement(l.EK,null,"Key Identifier")," of the private key generated.")),a.createElement(p.Z,null),a.createElement(l.X6,{as:"h5"},m("console:develop.features.authenticationProvider.templates.apple.wizardHelp.privateKey.heading")),a.createElement("p",null,a.createElement(i.c,{i18nKey:"console:develop.features.authenticationProvider.templates.apple.wizardHelp.privateKey.description"},"Provide the ",a.createElement(l.EK,null,"Private Key")," generated for the application.")))};d.defaultProps={"data-componentid":"apple-idp-create-wizard-help"};const m=d}}]);