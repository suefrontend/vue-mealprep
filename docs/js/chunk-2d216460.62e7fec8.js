(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216460"],{c283:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-container",{attrs:{"fill-height":""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[t("v-card",{staticClass:"elevation-12"},[t("v-toolbar",{attrs:{dark:"",color:"primary"}},[t("v-toolbar-title",[a._v("Join Form")])],1),t("v-card-text",[t("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:a.valid,callback:function(e){a.valid=e},expression:"valid"}},[t("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:a.emailRules,"data-cy":"joinEmailField",required:""},model:{value:a.email,callback:function(e){a.email=e},expression:"email"}}),t("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",required:"",rules:a.passwordRules,"data-cy":"joinPasswordField"},model:{value:a.password,callback:function(e){a.password=e},expression:"password"}})],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"primary",disabled:!a.valid,"data-cy":"joinSubmitBtn"},on:{click:a.submit}},[a._v("Join")])],1)],1)],1)],1)],1)},i=[],s={name:"Join",data:function(){return{valid:!1,email:"",password:"",emailRules:[function(a){return!!a||"E-mail is required"},function(a){return/.+@.+/.test(a)||"E-mail must be valid"}],passwordRules:[function(a){return!!a||"Password is required"},function(a){return a.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("userJoin",{email:this.email,password:this.password})}}},l=s,o=t("2877"),n=t("6544"),d=t.n(n),c=t("8336"),u=t("b0af"),m=t("99d9"),p=t("a523"),v=t("0e8f"),f=t("4bd4"),b=t("a722"),w=t("2fa4"),h=t("8654"),x=t("71d9"),V=t("2a7f"),y=Object(o["a"])(l,r,i,!1,null,"51c0e560",null);e["default"]=y.exports;d()(y,{VBtn:c["a"],VCard:u["a"],VCardActions:m["a"],VCardText:m["b"],VContainer:p["a"],VFlex:v["a"],VForm:f["a"],VLayout:b["a"],VSpacer:w["a"],VTextField:h["a"],VToolbar:x["a"],VToolbarTitle:V["a"]})}}]);
//# sourceMappingURL=chunk-2d216460.62e7fec8.js.map