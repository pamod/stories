"use strict";(self.webpackChunk_wso2is_console=self.webpackChunk_wso2is_console||[]).push([[90955],{90955:(e,t,s)=>{s.r(t),s.d(t,{GeneralUserStoreDetails:()=>c});var a=s(83374),r=s(13318),n=s(67127),o=s(52983),i=s(9202),l=s(94635),u=s(2540),c=function(e){var t=e.triggerSubmit,s=e.featureConfig,c=e.handleBasicDetailsSubmit,g=e.userStoreType,d=e.handleUserStoreAccessTypeChange,m=e.handleUserStoreTypeChange,p=e.setUserStoreNameValid,S=e["data-testid"],f=(0,i.$)().t,y=[{"data-testid":"".concat(S,"-create-user-store-form-user-store-ldap-option-radio-button"),label:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.userStoreType.types.ldap.label"),value:u.RemoteUserStoreTypes.LDAP},{"data-testid":"".concat(S,"-create-user-store-form-user-store-ad-option-radio-button"),label:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.userStoreType.types.ad.label"),value:u.RemoteUserStoreTypes.ActiveDirectory}],E=[{"data-componentid":"".concat(S,"-create-user-store-form-access-type-read-only-option-radio-button"),hint:{content:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.accessType.types.readOnly.hint")},label:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.accessType.types.readOnly.label"),value:u.RemoteUserStoreAccessTypes.ReadOnly},{"data-componentid":"".concat(S,"-create-user-store-form-access-type-read-write-option-radio-button"),hint:{content:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.accessType.types.readWrite.hint")},label:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.accessType.types.readWrite.label"),value:u.RemoteUserStoreAccessTypes.ReadWrite}];return o.createElement(l.Z,null,o.createElement(l.Z.Row,null,o.createElement(l.Z.Column,null,o.createElement(r.Es,{submitState:t,onSubmit:function(e){c(e)}},o.createElement(r.gN,{className:"uppercase",type:"text",name:"name",label:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.name.label"),requiredErrorMessage:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.name.requiredErrorMessage"),required:!0,placeholder:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.name.placeholder"),minLength:3,maxLength:50,width:14,"data-testid":"".concat(S,"-user-store-name-input"),hint:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.name.hint"),listen:function(e){p(e.get("name").length>0),e.set("name",e.get("name").toString().toUpperCase())},validation:function(e,t){if(!(0,n.Z)(e)){var s,a=new RegExp("^[^_/]+$"),r=new RegExp("^([^a-zA-Z0-9]+$)"),o=[u.RemoteUserStoreConstants.PRIMARY_USER_STORE_NAME,u.RemoteUserStoreConstants.FEDERATION_USER_STORE_NAME,u.RemoteUserStoreConstants.DEFAULT_USER_STORE_NAME],i=[u.RemoteUserStoreConstants.INTERNAL_USER_STORE_NAME,u.RemoteUserStoreConstants.APPLICATION_USER_STORE_NAME],l=!0;a.test(e)?o.includes(e.trim().toUpperCase())?(l=!1,s=f("extensions:manage.features.userStores.edit.general.form.validations.restrictedNamesErrorMessage",{name:e})):i.includes(e.trim().toUpperCase())?(l=!1,s=f("extensions:manage.features.userStores.edit.general.form.validations.reservedNamesErrorMessage",{name:e})):r.test(e)?(l=!1,s=f("extensions:manage.features.userStores.edit.general.form.validations.allSymbolsErrorMessage")):l=!0:(l=!1,s=f("extensions:manage.features.userStores.edit.general.form.validations.invalidSymbolsErrorMessage")),l||(p(!1),t.isValid=!1,t.errorMessages.push(s))}}}),o.createElement(r.gN,{requiredErrorMessage:null,type:"text",name:"description",label:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.description.label"),required:!1,placeholder:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.description.placeholder"),maxLength:300,minLength:3,width:14,"data-testid":"".concat(S,"-user-store-description-textarea")}),o.createElement(r.gN,{type:"radio",label:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.userStoreType.label"),name:"userStoreType",default:"createPw",listen:function(e){m(e.get("userStoreType"))},children:y,value:null!=g?g:"LDAP"}),o.createElement(r.gN,{type:"radio",label:f("extensions:manage.features.userStores.create.pageLayout.steps.generalSettings.form.fields.accessType.label"),name:"accessType",default:"createPw",listen:function(e){d(e.get("accessType"))},children:E,value:null!=g?g:"true",tabIndex:3,hidden:!(0,a.cr)(null==s?void 0:s.userStores,u.RemoteUserStoreConstants.FEATURE_DICTIONARY.get("USERSTORES_READ_WRITE_USERSTORES"))})))))};c.defaultProps={"data-testid":"asgardeo-customer-userstore-general-details"}}}]);