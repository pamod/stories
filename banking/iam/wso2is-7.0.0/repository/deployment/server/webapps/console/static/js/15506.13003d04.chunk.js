(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[15506],{15506:(e,t,n)=>{"use strict";n.d(t,{X:()=>oe,I:()=>b});var i=n(7955),r=n(81816),a=n(95614),o=n(52983),l=n(9202),c=n(54221),d=n(74691),u=n(97860),s=n(2653),m=n(30640),f=n(67847),p=n(22964);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a,o,l=[],c=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=a.call(n)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(e){d=!0,r=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var b=function(e){var t=e.defaultListItemLimit,n=e.isLoading,y=e.idvpList,b=e.idvpTemplateTypeList,h=e.onEmptyListPlaceholderActionClick,g=e.onIdentityVerificationProviderDelete,E=e.onListItemClick,S=e.selection,A=e.showListItemActions,I=e["data-componentid"],C=v((0,o.useState)(!1),2),w=C[0],P=C[1],D=v((0,o.useState)(void 0),2),T=D[0],L=D[1],V=v((0,o.useState)(!1),2),O=V[0],M=V[1],Z=(0,l.$)().t,j=(0,c.v9)((function(e){return e.config.ui.features})),R=(0,c.v9)((function(e){var t;return null==e||null===(t=e.auth)||void 0===t?void 0:t.allowedScopes})),k=function(e){m.m8.push(m.$x.getPaths().get("IDVP_EDIT").replace(":id",e))},_=function(){return 0===(null==y?void 0:y.totalResults)?o.createElement(r.$J,{className:"list-placeholder",action:h&&o.createElement(i.di,{when:s.T.IDVP_WRITE},o.createElement(r.KM,{onClick:h},o.createElement(d.Z,{name:"add"}),Z("console:develop.features.idvp.buttons.addIDVP"))),image:(0,m.jF)().newList,imageSize:"tiny",subtitle:[Z("console:develop.features.idvp.placeholders.emptyIDVPList.subtitles.0")],"data-testid":"".concat(I,"-empty-placeholder")}):null};return o.createElement(o.Fragment,null,o.createElement(r.wQ,{className:"identity-providers-table",isLoading:n,loadingStateOptions:{count:null!=t?t:m.ru.DEFAULT_RESOURCE_LIST_ITEM_LIMIT,imageType:"square"},actions:function(){if(A)return[{"data-componentid":"".concat(I,"-item-edit-button"),hidden:function(){return!1},icon:function(){var e,t;return(0,a.hasRequiredScopes)(null==j?void 0:j.identityVerificationProviders,null==j||null===(e=j.identityVerificationProviders)||void 0===e||null===(t=e.scopes)||void 0===t?void 0:t.update,R)?"pencil alternate":"eye"},onClick:function(e,t){k(t.id)},popupText:function(){var e,t,n=(0,a.hasRequiredScopes)(null==j?void 0:j.identityVerificationProviders,null==j||null===(e=j.identityVerificationProviders)||void 0===e||null===(t=e.scopes)||void 0===t?void 0:t.update,R);return Z(n?"common:edit":"common:view")},renderer:"semantic-icon"},{"data-componentid":"".concat(I,"-item-delete-button"),hidden:function(){var e,t;return!(0,a.hasRequiredScopes)(null==j?void 0:j.identityVerificationProviders,null==j||null===(e=j.identityVerificationProviders)||void 0===e||null===(t=e.scopes)||void 0===t?void 0:t.delete,R)},icon:function(){return"trash alternate"},onClick:function(e,t){var n,i;n=t.id,i=y.identityVerificationProviders.find((function(e){return e.id===n})),L(i),P(!0)},popupText:function(){return Z("common:delete")},renderer:"semantic-icon"}]}(),columns:[{allowToggleVisibility:!1,dataIndex:"name",id:"name",key:"name",render:function(e){var t=null==b?void 0:b.find((function(t){return t.id===e.Type}));return o.createElement(u.Z,{image:!0,as:"h6",className:"header-with-icon","data-testid":"".concat(I,"-item-heading")},null!=t&&t.image?o.createElement(r.JT,{size:"mini",name:e.Name,image:t.image,spaced:"right","data-testid":"".concat(I,"-item-image")}):o.createElement(r.JT,{image:o.createElement(r.Xo,{name:e.Name,size:"mini","data-testid":"".concat(I,"-item-image-inner")}),size:"mini",spaced:"right","data-testid":"".concat(I,"-item-image")}),o.createElement(u.Z.Content,null,e.Name,o.createElement(u.Z.Subheader,{"data-testid":"".concat(I,"-item-sub-heading")},e.description)))},title:Z("console:develop.features.idvp.list.name")},{allowToggleVisibility:!1,dataIndex:"action",id:"actions",key:"actions",textAlign:"right",title:Z("console:develop.features.idvp.list.actions")}],data:null==y?void 0:y.identityVerificationProviders,onRowClick:function(e,t){k(t.id),E&&E(e,t)},placeholders:_(),selectable:S,showHeader:!1,transparent:!n&&null!==_(),"data-testid":I}),T&&o.createElement(r.cV,{primaryActionLoading:O,onClose:function(){return P(!1)},type:"negative",open:w,assertion:null==T?void 0:T.Name,assertionHint:Z("console:develop.features.idvp.confirmations.deleteIDVP.assertionHint"),assertionType:"checkbox",primaryAction:Z("common:confirm"),secondaryAction:Z("common:cancel"),onSecondaryActionClick:function(){return P(!1)},onPrimaryActionClick:function(){return e=T.id,M(!0),void(0,f.cV)(e).then(p.Dj).catch((function(e){(0,p.d_)(e)})).finally((function(){M(!1),P(!1),L(void 0),g()}));var e},"data-componentid":"".concat(I,"-delete-confirmation-modal"),closeOnDimmerClick:!1},o.createElement(r.cV.Header,{"data-componentid":"".concat(I,"-delete-confirmation-modal-header")},Z("console:develop.features.idvp.confirmations.deleteIDVP.header")),o.createElement(r.cV.Message,{attached:!0,negative:!0,"data-componentid":"".concat(I,"-delete-confirmation-modal-message")},Z("console:develop.features.idvp.confirmations.deleteIDVP.message")),o.createElement(r.cV.Content,{"data-componentid":"".concat(I,"-delete-confirmation-modal-content")},Z("console:develop.features.idvp.confirmations.deleteIDVP.content"))))};b.defaultProps={"data-componentid":"idvp-list",selection:!0,showListItemActions:!0};var h=n(14603),g=n(90268),E=n(67127),S=n(94635),A=n(75917),I=n(88171),C=n(59206),w=n(48684),P=n(21921),D=n(30342),T=n(87377),L=n(32962);function V(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||M(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a,o,l=[],c=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=a.call(n)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(e){d=!0,r=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}(e,t)||M(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var j=function(e){var t=e.attributeList,n=e.alreadyMappedAttributesList,i=e.show,a=e.onClose,c=e.onSave,d=O((0,o.useState)([]),2),u=d[0],s=d[1],m=O((0,o.useState)([]),2),f=m[0],p=m[1],v=O((0,o.useState)(!1),2),y=v[0],b=v[1],h=O((0,o.useState)(),2),g=h[0],E=h[1],I=(0,l.$)().t;(0,o.useEffect)((function(){p(V(t)),E(V(n))}),[]),(0,o.useEffect)((function(){b(0===u.length)}),[u]);return o.createElement(P.Z,{open:i,onClose:a,dimmer:"blurring",size:"small",closeOnDimmerClick:!1},o.createElement(P.Z.Header,null,I("console:develop.features.idvp.forms.attributeSettings.attributeSelectionModal.header")),o.createElement(P.Z.Content,{scrolling:!0,className:"edit-attribute-mapping"},o.createElement(S.Z,{className:"ui form"},o.createElement(S.Z.Row,{columns:1},o.createElement(S.Z.Column,{width:16},o.createElement(D.f,{availableAttributeList:f,alreadyMappedAttributesList:g,onSubmit:function(e){var t=[].concat(V(u),[e]),n=t.reduce((function(e,t){return e.add(t.localClaim.id)}),new Set);s(t),p(V(f.filter((function(e){var t=e.id;return!n.has(t)})))),E([].concat(V(g),[e]))}})),o.createElement(S.Z.Column,{width:16},y?(0,L.l)():o.createElement(o.Fragment,null,o.createElement(A.Z,{hidden:!0}),o.createElement(T.Y,{key:"attribute-mapping-working-list",alreadyMappedAttributesList:g,onMappingDeleted:function(e){var t=u.filter((function(t){return t.localClaim.id!==e.localClaim.id}));s(V(t)),p([].concat(V(f),[e.localClaim])),E(V(g.filter((function(t){var n;return(null==t||null===(n=t.localClaim)||void 0===n?void 0:n.id)===(null==e?void 0:e.localClaim.id)}))))},onMappingEdited:function(e,t){s([].concat(V(u.filter((function(t){return t.localClaim.id!==e.localClaim.id}))),[t])),E([].concat(V(g.filter((function(t){var n;return(null==t||null===(n=t.localClaim)||void 0===n?void 0:n.id)===(null==e?void 0:e.localClaim.id)}))),[t]))},attributeMappingsListToShow:u,availableAttributesList:f})))))),o.createElement(P.Z.Actions,null,o.createElement(r.Qj,{onClick:a},I("common:cancel")),o.createElement(r.KM,{disabled:0===(null==u?void 0:u.length),onClick:function(){return c(V(u))}},I("common:save"))))};j.defaultProps={"data-componentid":"add-attribute-modal"};var R=n(23083);function k(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||N(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a,o,l=[],c=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=a.call(n)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(e){d=!0,r=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}(e,t)||N(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var G=function(e){var t=e.initialClaims,n=e.mappedAttributesList,i=e.setMappedAttributes,a=e.hideIdentityClaimAttributes,c=e.isReadOnly,u=e["data-componentid"],s=_((0,o.useState)([]),2),f=s[0],p=s[1],v=_((0,o.useState)(!0),2),y=v[0],b=v[1],h=_((0,o.useState)(!1),2),g=h[0],I=h[1],P=_((0,o.useState)(void 0),2),D=P[0],L=P[1],V=_((0,o.useState)([]),2),O=V[0],M=V[1],Z=(0,l.$)().t;(0,o.useEffect)((function(){(0,R.ep)(a,p,b)}),[]),(0,o.useEffect)((function(){var e,t=[],i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=N(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw a}}}}(n);try{for(i.s();!(e=i.n()).done;){var r=e.value;t.push(r.localClaim.id)}}catch(a){i.e(a)}finally{i.f()}M(t)}),[f]),(0,o.useEffect)((function(){(0,E.Z)(f)||x()}),[f]);var x=function(){t&&(t.forEach((function(e){e.localClaim=f.find((function(t){return t.uri===e.localClaim.uri}))})),i(t))},G=function(){return k(f.filter((function(e){return!O.includes(e.id)})))},U=function(e){i(k(null==n?void 0:n.filter((function(t){var n,i;return(null===(n=t.localClaim)||void 0===n?void 0:n.id)!==(null===(i=e.localClaim)||void 0===i?void 0:i.id)}))))},$=function(e,t){i([].concat(k(n.filter((function(t){var n,i;return(null==t||null===(n=t.localClaim)||void 0===n?void 0:n.id)!==(null===(i=e.localClaim)||void 0===i?void 0:i.id)}))),[t]))};return y?o.createElement(r.pO,null):o.createElement(S.Z,null,o.createElement(S.Z.Row,{columns:1},o.createElement(S.Z.Column,{computer:16,tablet:16,largeScreen:16,widescreen:16},o.createElement(r.X6,{as:"h4"},Z("console:develop.features.idvp.forms.attributeSettings.attributeMapping.heading")),o.createElement(r.kW,{compact:!0},Z("console:develop.features.idvp.forms.attributeSettings.attributeMapping.hint")),o.createElement(A.Z,{hidden:!0}),n&&n.length>0?o.createElement(w.Z,null,o.createElement(S.Z,null,o.createElement(S.Z.Row,{columns:2},o.createElement(S.Z.Column,{width:c?16:7},o.createElement(C.l0,{id:"idvp-attribute-selection-form",onSubmit:function(){return{}},uncontrolledForm:!1},o.createElement(C.gN.Input,{icon:"search",iconPosition:"left",inputType:"default",maxLength:120,minLength:1,width:16,placeholder:"Search mapped attribute",listen:function(e){return L(e)},ariaLabel:"Search Field",name:"searchQuery"}))),o.createElement(S.Z.Column,{width:9,textAlign:"right"},!c&&o.createElement(r.KM,{onClick:function(e){e.preventDefault(),I(!0)},"data-componentid":"".concat(u,"-list-layout-add-button")},o.createElement(d.Z,{name:"add"}),Z("console:develop.features.idvp.forms.attributeSettings.attributeMapping.addButton")))),o.createElement(S.Z.Row,{columns:1},o.createElement(S.Z.Column,{width:16},o.createElement(T.Y,{alreadyMappedAttributesList:k(n),attributeMappingsListToShow:n.filter((function(e){var t;return!D||e.idvpClaim.startsWith(D)||(null===(t=e.localClaim)||void 0===t?void 0:t.id.startsWith(D))})),noDataPlaceholder:o.createElement(r.$J,{action:o.createElement(r.Qj,{onClick:function(){return L(void 0)}},Z("console:manage.placeholders.emptySearchResult.action")),image:(0,m.jF)().emptySearch,imageSize:"tiny",title:Z("console:manage.placeholders.emptySearchResult.title"),subtitle:[Z("console:manage.placeholders.emptySearchResult.subtitles.0",{query:D}),Z("console:manage.placeholders.emptySearchResult.subtitles.1")],"data-componentid":"".concat(u,"-empty-search-placeholder")}),availableAttributesList:G(),onMappingDeleted:U,onMappingEdited:$,readOnly:c}))))):o.createElement(w.Z,{"data-componentid":u},o.createElement(r.$J,{title:Z("console:develop.features.idvp.forms.attributeSettings.attributeMapping.emptyPlaceholderEdit.title"),subtitle:[o.createElement("p",{key:"no-attributes-configured"},Z("console:develop.features.idvp.forms.attributeSettings.attributeMapping.emptyPlaceholderEdit.subtitle"))],action:!c&&o.createElement(r.KM,{onClick:function(e){e.preventDefault(),I(!0)}},o.createElement(d.Z,{name:"add"}),Z("console:develop.features.idvp.forms.attributeSettings.attributeMapping.addButton")),image:(0,m.jF)().emptyList,imageSize:"tiny","data-componentid":"".concat(u,"-empty-placeholder")})))),g&&o.createElement(j,{attributeList:G(),alreadyMappedAttributesList:k(n),show:g,onClose:function(){I(!1)},onSave:function(e){i([].concat(k(n),k(e))),I(!1)}}))};function U(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||F(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a,o,l=[],c=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=a.call(n)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(e){d=!0,r=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}(e,t)||F(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}G.defaultProps={"data-componentid":"idvp-attributes-selection"};var z=function(e){var t=e.idvp,n=e.initialClaims,a=e.isLoading,d=e.onUpdate,u=e.hideIdentityClaimAttributes,m=e.isReadOnly,f=e.loader,v=e["data-componentid"],y=(0,c.I0)(),b=(0,l.$)().t,C=$((0,o.useState)([]),2),w=C[0],P=C[1],D=$((0,o.useState)(!1),2),T=D[0],L=D[1];return a?o.createElement(f,null):o.createElement(r.pJ,{padded:"very"},o.createElement(S.Z,{className:"attributes-settings"},o.createElement("div",{className:"form-container with-max-width"},o.createElement(S.Z.Row,{columns:1},o.createElement(S.Z.Column,null,o.createElement(G,{initialClaims:n,setMappedAttributes:P,hideIdentityClaimAttributes:u,mappedAttributesList:U(w),isReadOnly:m}))),o.createElement(A.Z,{hidden:!0}),o.createElement(S.Z.Row,null,o.createElement(S.Z.Column,null,o.createElement(i.di,{when:s.T.IDVP_EDIT},o.createElement(I.Z,{primary:!0,size:"small",loading:T,disabled:T,onClick:function(){t.claims=w.map((function(e){return{idvpClaim:e.idvpClaim,localClaim:e.localClaim.uri}})),(0,E.Z)(null==w?void 0:w.filter((function(e){return(0,E.Z)(e.idvpClaim)})))?(0,p.i2)(t,L,d):y((0,g.V_)({description:b("console:develop.features.idvp.notifications.submitAttributeSettings.error.description"),level:h.QU.WARNING,message:b("console:develop.features.idvp.notifications.submitAttributeSettings.error.message")}))},"data-componentid":"".concat(v,"-update-button")},b("common:update"))))))))};z.defaultProps={"data-componentid":"idvp-edit-attribute-settings",hideIdentityClaimAttributes:!0};var B=n(51998),J="idvp-general-settings-form",q=function(e){var t=e.onSubmit,n=e.identityVerificationProvider,i=e.isReadOnly,a=e.isSubmitting,c=e["data-componentid"],d=(0,l.$)().t,u=(0,f.Yy)().data,s=function(e){var n,i;t({Name:null===(n=e.name)||void 0===n?void 0:n.toString(),description:null===(i=e.description)||void 0===i?void 0:i.toString()})};return o.createElement(o.Fragment,null,o.createElement(r.pJ,{padded:"very"},o.createElement(C.l0,{id:J,uncontrolledForm:!1,onSubmit:function(e){s(e)},"data-componentid":c},o.createElement(C.gN.Input,{ariaLabel:"name",inputType:"resource_name",name:"name",label:d("console:develop.features.idvp.forms.generalDetails.name.label"),required:!0,message:d("console:develop.features.idvp.forms.generalDetails.name.validations.empty"),placeholder:d("console:develop.features.idvp.forms.generalDetails.name.placeholder"),validation:function(e){return(0,p.w)(e,u.identityVerificationProviders,n)},value:n.Name,maxLength:B.G.IDVP_NAME_MAX_LENGTH,minLength:B.G.IDVP_NAME_MIN_LENGTH,"data-componentid":"".concat(c,"-idp-name"),hint:d("console:develop.features.idvp.forms.generalDetails.name.hint"),readOnly:i}),o.createElement(C.gN.Textarea,{name:"description",ariaLabel:"description",label:d("console:develop.features.idvp.forms.generalDetails.description.label"),required:!1,placeholder:d("console:develop.features.idvp.forms.generalDetails.description.placeholder"),value:n.description,"data-componentid":"".concat(c,"-idp-description"),maxLength:B.G.IDVP_DESCRIPTION_MAX_LENGTH,minLength:B.G.IDVP_DESCRIPTION_MIN_LENGTH,hint:d("console:develop.features.idvp.forms.generalDetails.description.hint"),readOnly:i}),!i&&o.createElement(C.gN.Button,{form:J,ariaLabel:"Update General Details",size:"small",buttonType:"primary_btn",label:d("common:update"),name:"submit",disabled:a,loading:a}))))};q.defaultProps={"data-componentid":"idvp-edit-general-settings-form"};var Q=n(78501),W="idvp-config-settings-form",X=function(e){var t=e.onSubmit,n=e.identityVerificationProvider,i=e.isReadOnly,a=e.isSubmitting,c=e.uiMetaData,d=e["data-componentid"],u=(0,l.$)().t;return o.createElement(o.Fragment,null,o.createElement(r.pJ,{padded:"very"},o.createElement(C.l0,{id:W,uncontrolledForm:!0,onSubmit:function(e){return t(e)},"data-componentid":d},(0,Q.A)(c,n,i,!0),!i&&o.createElement(C.gN.Button,{form:W,ariaLabel:"Update General Details",size:"small",buttonType:"primary_btn",label:u("common:update"),name:"submit",disabled:a,loading:a}))))};function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a,o,l=[],c=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=a.call(n)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(e){d=!0,r=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}X.defaultProps={"data-componentid":"idvp-edit-config-settings-form"};var ee=function(e){var t=e.idvp,n=e.isLoading,i=e.onUpdate,r=e.isReadOnly,a=e.uiMetaData,l=e.loader,c=e["data-componentid"],d=K((0,o.useState)(!1),2),u=d[0],s=d[1];return n?o.createElement(l,null):o.createElement(o.Fragment,null,o.createElement(X,{identityVerificationProvider:t,onSubmit:function(e){var n=function(n){if(void 0!==e[n]){var i=t.configProperties.find((function(e){return e.key===n}));i?i.value=e[n]:t.configProperties.push({isSecret:!1,key:n,value:e[n]})}};for(var r in e)n(r);(0,p.i2)(t,s,i)},onUpdate:i,"data-componentid":"".concat(c,"-form"),isReadOnly:r,isSubmitting:u,uiMetaData:a}),o.createElement(A.Z,{hidden:!0}))};function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a,o,l=[],c=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=a.call(n)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(e){d=!0,r=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ne(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}ee.defaultProps={"data-componentid":"idvp-edit-general-settings"};var ie=function(e){var t=e.idvp,n=e.isLoading,a=e.onDelete,c=e.onUpdate,d=e.isReadOnly,u=e.isDeletePermitted,m=e.loader,v=e["data-componentid"],y=(0,l.$)().t,b=te((0,o.useState)(!1),2),h=b[0],g=b[1],E=te((0,o.useState)(!1),2),S=E[0],I=E[1],C=te((0,o.useState)(!1),2),w=C[0],P=C[1],D=function(e){for(var n in e)void 0!==e[n]&&(t[n]=e[n]);(0,p.i2)(t,P,c)};return n?o.createElement(m,null):o.createElement(o.Fragment,null,o.createElement(q,{identityVerificationProvider:t,onSubmit:D,onUpdate:c,"data-componentid":"".concat(v,"-form"),isReadOnly:d,isSubmitting:w}),o.createElement(A.Z,{hidden:!0}),(u||!d)&&o.createElement(r.v9,{sectionHeader:y("console:develop.features.idvp.dangerZoneGroup.header")},o.createElement(i.di,{when:s.T.IDVP_EDIT},o.createElement(r.cN,{actionTitle:y("console:develop.features.idvp.dangerZoneGroup.disableIDVP.actionTitle",{state:t.isEnabled?y("common:disable"):y("common:enable")}),header:y("console:develop.features.idvp.dangerZoneGroup.disableIDVP.header",{state:t.isEnabled?y("common:disable"):y("common:enable")}),subheader:t.isEnabled?y("console:develop.features.idvp.dangerZoneGroup.disableIDVP.subheader"):y("console:develop.features.idvp.dangerZoneGroup.disableIDVP.subheader2"),onActionClick:void 0,toggle:{checked:t.isEnabled,onChange:function(e,t){D({isEnabled:t.checked})}},"data-componentid":"".concat(v,"-disable-idvp-danger-zone")})),o.createElement(i.di,{when:s.T.IDVP_DELETE},o.createElement(r.cN,{actionTitle:y("console:develop.features.idvp.dangerZoneGroup.deleteIDVP.actionTitle"),header:y("console:develop.features.idvp.dangerZoneGroup.deleteIDVP.header"),subheader:y("console:develop.features.idvp.dangerZoneGroup.deleteIDVP.subheader"),onActionClick:function(){g(!0)},"data-componentid":"".concat(v,"-delete-idvp-danger-zone")}))),h&&o.createElement(r.cV,{primaryActionLoading:S,onClose:function(){return g(!1)},type:"negative",open:h,assertionHint:y("console:develop.features.idvp.confirmations.deleteIDVP.assertionHint"),assertionType:"checkbox",primaryAction:y("common:confirm"),secondaryAction:y("common:cancel"),onSecondaryActionClick:function(){return g(!1)},onPrimaryActionClick:function(){return I(!0),void(0,f.cV)(t.id).then(p.Dj).catch((function(e){(0,p.d_)(e)})).finally((function(){I(!1),g(!1),a()}))},"data-componentid":"".concat(v,"-delete-idvp-confirmation"),closeOnDimmerClick:!1},o.createElement(r.cV.Header,{"data-componentid":"".concat(v,"-delete-idvp-confirmation")},y("console:develop.features.idvp.confirmations.deleteIDVP.header")),o.createElement(r.cV.Message,{attached:!0,negative:!0,"data-componentid":"".concat(v,"-delete-idvp-confirmation")},y("console:develop.features.idvp.confirmations.deleteIDVP.message")),o.createElement(r.cV.Content,{"data-componentid":"".concat(v,"-delete-idvp-confirmation")},y("console:develop.features.idvp.confirmations.deleteIDVP.content"))))};function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a,o,l=[],c=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(i=a.call(n)).done)&&(l.push(i.value),l.length!==t);c=!0);}catch(e){d=!0,r=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw r}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}ie.defaultProps={"data-componentid":"idvp-edit-general-settings"};var oe=function(e){var t=e.identityVerificationProvider,n=e.isLoading,i=e.onDelete,a=e.onUpdate,l=e.isReadOnly,c=e.isDeletePermitted,d=e.isAutomaticTabRedirectionEnabled,u=e.tabIdentifier,s=e.uiMetaData,m=e["data-componentid"],f=re((0,o.useState)(0),2),v=f[0],y=f[1],b=re((0,o.useState)(),2),h=b[0],g=b[1];(0,o.useEffect)((function(){var e=t.claims.map((function(e){return{idvpClaim:e.idvpClaim,localClaim:{uri:e.localClaim}}}));g(e)}),[t]);var E,S=function(){return o.createElement(r.M$.Pane,{controlledSegmentation:!0},o.createElement(ie,{idvp:t,isLoading:n,onDelete:i,onUpdate:a,"data-componentid":"".concat(m,"-general-settings"),isReadOnly:l,isDeletePermitted:c,loader:p.mh}))},A=function(){return o.createElement(r.M$.Pane,{controlledSegmentation:!0},o.createElement(ee,{idvp:t,isLoading:n,onUpdate:a,"data-componentid":"".concat(m,"-configuration-settings"),uiMetaData:s.pages.edit.settings,isReadOnly:l,loader:p.mh}))},I=function(){return o.createElement(r.M$.Pane,{controlledSegmentation:!0},o.createElement(z,{idvp:t,initialClaims:h,isLoading:n,onUpdate:a,hideIdentityClaimAttributes:!0,"data-componentid":"".concat(m,"-attribute-settings"),isReadOnly:l,loader:p.mh}))};return!t||n?(0,p.mh)():o.createElement(r.M$,{isLoading:n,"data-testid":"".concat(m,"-resource-tabs"),panes:(E=[],E.push({"data-tabid":B.G.GENERAL_TAB_ID,menuItem:"General",render:S}),E.push({"data-tabid":B.G.SETTINGS_TAB_ID,menuItem:"Settings",render:A}),E.push({"data-tabid":B.G.ATTRIBUTES_TAB_ID,menuItem:"Attributes",render:I}),E),defaultActiveIndex:v,onTabChange:function(e,t){y(t.activeIndex)},isAutomaticTabRedirectionEnabled:d,tabIdentifier:u})};oe.defaultProps={"data-componentid":"idvp-edit"}},95614:(e,t,n)=>{e.exports=n(83374)}}]);