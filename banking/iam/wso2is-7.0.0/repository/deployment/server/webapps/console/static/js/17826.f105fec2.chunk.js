"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[17826],{17826:(e,t,n)=>{n.r(t),n.d(t,{sendFeedback:()=>a});var s=n(93967),o=n(14603),i=n(30640),r=s.AsgardeoSPAClient.getInstance().httpRequest.bind(s.AsgardeoSPAClient.getInstance()).bind(s.AsgardeoSPAClient.getInstance()),a=function(e){var t={data:e,headers:{"Access-Control-Allow-Origin":i.h.getState().config.deployment.clientHost,"Content-Type":"application/json"},method:o.f2.POST,url:window.AppUtils.getConfig().extensions.feedbackEndPoint};return r(t).then((function(e){return 201!==e.status?Promise.reject(new Error("Failed to add feedback")):Promise.resolve(e)})).catch((function(e){return Promise.reject(e)}))}}}]);