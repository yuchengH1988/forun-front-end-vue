(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ebe622c"],{"498a":function(e,t,r){"use strict";var a=r("23e7"),n=r("58a8").trim,i=r("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},c8d2:function(e,t,r){var a=r("d039"),n=r("5899"),i="​᠎";e.exports=function(e){return a((function(){return!!n[e]()||i[e]()!=i||n[e].name!==e}))}},da5c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[e._v("Image")]),e.image?r("img",{staticClass:"d-bloc img-thumbnail",attrs:{src:e.image,width:"200",height:"200"}}):e._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v("\n      "+e._s(e.isProcessing?"處理中...":"Submit")+"\n    ")])])])},n=[],i=r("1da1"),s=r("5530"),c=(r("96cf"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0"),r("2b3d"),r("498a"),r("2f62")),o=r("2fa3"),u=r("4cce"),m={name:"UserEdit",data:function(){return{id:0,image:"",name:"",isProcessing:!1}},created:function(){if(-1!==this.currentUser.id){var e=this.$route.params.id;this.setUser(e)}},watch:{currentUser:function(e){if(-1!==e.id){var t=this.$route.params.id;this.setUser(t)}}},beforeRouteUpdate:function(e,t,r){if(-1!==this.currentUser.id){var a=e.params.id;this.setUser(a),r()}},computed:Object(s["a"])({},Object(c["b"])(["currentUser"])),methods:{setUser:function(e){var t=this.currentUser,r=t.id,a=t.image,n=t.name;r.toString()===e.toString()?(this.id=r,this.name=n,this.image=a):this.$router.push({name:"not-found"})},handleFileChange:function(e){var t=e.target.files;if(t.length){var r=window.URL.createObjectURL(t[0]);this.user.image=r}},handleSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t.name.trim()){r.next=4;break}return o["a"].fire({icon:"warning",title:"請輸入名稱"}),r.abrupt("return");case 4:return t.isProcessing=!0,a=e.target,n=new FormData(a),r.next=9,u["a"].update({userId:t.id,formData:n});case 9:if(i=r.sent,s=i.data,"success"===s.status){r.next=13;break}throw new Error(s.message);case 13:t.$router.push({name:"user",params:{id:t.id}}),r.next=20;break;case 16:r.prev=16,r.t0=r["catch"](0),t.isProcessing=!1,o["a"].fire({icon:"error",title:"無法更新使用者資料，請稍後再試"});case 20:case"end":return r.stop()}}),r,null,[[0,16]])})))()}}},d=m,l=r("2877"),f=Object(l["a"])(d,a,n,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-5ebe622c.d49c1708.js.map