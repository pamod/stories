"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[31087,29236],{31087:(e,t,n)=>{n.r(t),n.d(t,{ApplicationTile:()=>f});var r=n(81816),a=n(52983),i=n(74691),l=n(29236),o=n(30640),c=["application","data-componentid"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,l,o=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){u=!0,a=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=function(e){var t=e.application,n=e["data-componentid"],d=p(e,c),f=(0,a.useRef)(null),y=o.lD.getInstance(),m=s((0,a.useState)(!1),2),b=m[0],g=m[1],h=s((0,a.useState)(!1),2),v=h[0],O=h[1];(0,a.useEffect)((function(){if(f){var e=f.current;e&&e.offsetWidth<e.scrollWidth&&O(!0)}}),[]),(0,a.useEffect)((function(){g(!t)}),[t]);return a.createElement(l.DynamicTile,u({},d,{"data-componentid":n,onClick:b?function(){}:function(){y.publish("console-getting-started-view-application-quick-access",{accessType:t.access,id:t.id,templateId:t.templateId}),o.m8.push({pathname:o.$x.getPaths().get("APPLICATION_EDIT").replace(":id",null==t?void 0:t.id)})},outlined:b,reduceOpacity:b,header:b?null:null!=t&&t.description?a.createElement(r.GI,{disabled:!v,content:null==t?void 0:t.name,trigger:a.createElement("h1",{ref:f},null==t?void 0:t.name)}):null,bodyAlignment:b?"center":"start",body:b?a.createElement(r.dn,{transparent:!0,size:"mini",icon:(0,o.Uz)().applications,fill:"secondary"}):null!=t&&t.description?a.createElement("p",{className:"content"},null==t?void 0:t.description):a.createElement(r.GI,{content:null==t?void 0:t.name,trigger:a.createElement("h1",null,null==t?void 0:t.name)}),justifyFooter:"end",footer:b?null:a.createElement(i.Z,{name:"angle right",size:"large",className:"p-0 m-0"})}))};f.defaultProps={application:null,"data-componentid":"application-tile"}},29236:(e,t,n)=>{n.r(t),n.d(t,{DynamicTile:()=>u});var r=n(83849),a=n.n(r),i=n(52983),l=["className","clipped","outlined","disabled","reduceOpacity","grayedOut","header","body","footer","whiteBackground","justifyFooter","bodyAlignment","data-componentid"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=function(e){var t=e.className,n=e.clipped,r=e.outlined,u=e.disabled,s=e.reduceOpacity,d=e.grayedOut,p=e.header,f=e.body,y=e.footer,m=e.whiteBackground,b=e.justifyFooter,g=e.bodyAlignment,h=e["data-componentid"],v=c(e,l),O=a()("application-tile",{"auto-vh-center":!p&&!y,clipped:n,"cursor-not-allowed":u,grayscale:d,"opacity-50":s,outlined:r,"white-bg":m},t);return i.createElement("div",o({},v,{className:O,"data-componentid":h}),p&&i.createElement("div",{className:"header"},p),f&&i.createElement("div",{className:a()("body",{center:"center"===g,start:"start"===g})},f),y&&i.createElement("div",{className:a()("footer",{"justify-end":"end"===b,"justify-start":"start"===b})},y))};u.defaultProps={bodyAlignment:"center",className:null,clipped:!0,"data-componentid":"dynamic-tile",grayedOut:!1,justifyFooter:void 0,outlined:!1,reduceOpacity:!1,whiteBackground:!0}}}]);