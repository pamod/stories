"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[16622],{16622:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(81816),o=n(52983),a=n(9202),i=n(54221),l=n(25743),u=n(23159),c=n(8802);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var t=e["data-componentid"],n=s((0,o.useState)(c.TabIndex.DIAGNOSTIC_LOGS),2),d=n[0],f=n[1],g=(0,i.v9)((function(e){return e.config.ui.features})),p=(0,a.$)().t,m=function(e,t){f(t.activeIndex)},v=function(){var e,t,n=[];return(null===(e=g.diagnosticLogs)||void 0===e?void 0:e.enabled)&&n.push({componentId:"diagnostic-logs",menuItem:{content:"Diagnostic"},render:b}),(null===(t=g.auditLogs)||void 0===t?void 0:t.enabled)&&n.push({componentId:"audit-logs",menuItem:{content:"Audit"},render:y}),n},b=function(){return o.createElement(u.DiagnosticLogsPage,{"data-componentid":t})},y=function(){return o.createElement(l.AuditLogsPage,null)};return o.createElement("div",{className:"diagnostic-logs"},o.createElement(r.Xg,{title:p("extensions:develop.monitor.pageHeader.title"),pageTitle:"Logs",description:p("extensions:develop.monitor.pageHeader.description"),"data-componentid":"".concat(t,"-layout")},o.createElement(r.M$,{activeIndex:d,"data-testid":"".concat(t,"-log-tabs"),defaultActiveIndex:0,onTabChange:m,panes:v()})))};f.defaultProps={"data-componentid":"logs-page"};const g=f}}]);