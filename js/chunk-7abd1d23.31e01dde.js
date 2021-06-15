(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7abd1d23"],{"129c":function(t,e,r){},"3ee7":function(t,e,r){},"4ae8":function(t,e,r){"use strict";r("3ee7")},"5a8d":function(t,e,r){"use strict";r("129c")},ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[t.isLoading?r("Spinner"):[r("RestaurantDetail",{attrs:{initialRest:t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{restaurantComments:t.restaurantComments,currentUser:t.currentUser},on:{"after-delete-comment":t.afterDeleteComment}}),r("CreateComment",{attrs:{restaurantId:t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})]],2)},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),r("4de4"),r("2f62")),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v("\n      "+t._s(t.restaurant.categoryName)+"\n    ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImage")(t.restaurant.image)}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v("\n          "+t._s(t.restaurant.openingHours)+"\n        ")]),r("li",[r("strong",[t._v("Tel:")]),t._v("\n          "+t._s(t.restaurant.tel)+"\n        ")]),r("li",[r("strong",[t._v("Address:")]),t._v("\n          "+t._s(t.restaurant.address)+"\n        ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFavorite(t.restaurant.id)}}},[t._v("\n      移除最愛\n    ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorite(t.restaurant.id)}}},[t._v("\n      加到最愛\n    ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike(t.restaurant.id)}}},[t._v("\n      Unlike\n    ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike(t.restaurant.id)}}},[t._v("\n      Like\n    ")])],1)])},u=[],d=r("2708"),l=r("4cce"),m=r("2fa3"),p={mixins:[d["a"]],props:{initialRest:{type:Object,require:!0}},data:function(){return{restaurant:this.initialRest}},watch:{initialRest:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}},methods:{addFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!0}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後在試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"}),console.log("error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},addLike:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].addLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!0}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法將餐廳推送喜歡，請稍後在試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteLike:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].deleteLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!1}),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法把Like從餐廳收回，請稍後再試"}),console.log("error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},f=p,b=(r("4ae8"),r("2877")),v=Object(b["a"])(f,c,u,!1,null,"7e5bcb20",null),g=v.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"d-flex btn btn-danger float-right",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.handleDeleteBtnClick(e.id)}}},[t._v("\n        Delete\n      ")]):t._e(),r("h3",[r("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v("\n          "+t._s(e.User.name)+"\n        ")])],1),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v("\n        "+t._s(t._f("fromNow")(e.createdAt))+"\n      ")])]),r("hr")])}))],2)},k=[],x={create:function(t){var e=t.restaurantId,r=t.text;return m["b"].post("/comments",{restaurantId:e,text:r})},delete:function(t){var e=t.commentId;return m["b"].delete("/comments/".concat(e))}},w={mixins:[d["b"]],props:{restaurantComments:{type:Array,require:!0},currentUser:{type:Object,require:!0}},methods:{handleDeleteBtnClick:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,x.delete({commentId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),m["a"].fire({icon:"error",title:"無法刪除評論，請稍號再試"});case 12:e.$emit("after-delete-comment",t);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()}}},C=w,_=(r("5a8d"),Object(b["a"])(C,h,k,!1,null,"7a55eba6",null)),y=_.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("\n      回上一頁\n    ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{disabled:t.isProcessing,type:"submit"}},[t._v("\n      "+t._s(t.isProcessing?"處理中":"Submit")+"\n    ")])])])},O=[],j=(r("a9e3"),{name:"CreateComment",props:{restaurantId:{type:Number,require:!0}},data:function(){return{text:"",isProcessing:!1}},methods:{handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.text){e.next=4;break}return m["a"].fire({icon:"warning",title:"請填入評論"}),e.abrupt("return");case 4:return t.isProcessing=!0,e.next=7,x.create({restaurantId:t.restaurantId,text:t.text});case 7:if(r=e.sent,a=r.data,"error"!==a.status){e.next=11;break}throw new Error(a.messga);case 11:t.$emit("after-create-comment",{commentId:a.commentId,restaurantId:t.restaurantId,text:t.text}),t.isProcessing=!1,t.text="",e.next=21;break;case 16:e.prev=16,e.t0=e["catch"](0),console.error(e.t0.message),t.isProcessing=!1,m["a"].fire({icon:"error",title:"無法新增評論，請稍後再試"});case 21:case"end":return e.stop()}}),e,null,[[0,16]])})))()}}}),I=j,L=(r("b181"),Object(b["a"])(I,R,O,!1,null,"fe6409b8",null)),D=L.exports,P=r("c4c3"),S=r("2375"),F={name:"Restaurant",components:{RestaurantDetail:g,RestaurantComments:y,CreateComment:D,Spinner:S["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},computed:Object(i["a"])({},Object(o["b"])(["currentUser"])),beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,c,u,d,l,p,f,b,v,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,P["a"].getRestaurant({restaurantId:t});case 4:a=r.sent,n=a.data,s=n.restaurant,i=n.isFavorited,o=n.isLiked,c=s.id,u=s.name,d=s.Category,l=s.image,p=s.opening_hours,f=s.tel,b=s.address,v=s.description,g=s.Comments,e.restaurant={id:c,name:u,categoryName:d?d.name:"未分類",image:l,openingHours:p,tel:f,address:b,description:v,isFavorited:i,isLiked:o},e.restaurantComments=g,e.isLoading=!1,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),e.isLoading=!1,m["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()},afterDeleteComment:function(t){this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},afterCreateComment:function(t){var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:a,createdAt:new Date})}}},U=F,E=Object(b["a"])(U,a,n,!1,null,null,null);e["default"]=E.exports},b181:function(t,e,r){"use strict";r("d6c3")},d6c3:function(t,e,r){},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("5135"),o=r("861d"),c=r("9bf2").f,u=r("e893"),d=s.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof m?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(m,d);var p=m.prototype=d.prototype;p.constructor=m;var f=p.toString,b="Symbol(test)"==String(d("test")),v=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=f.call(t);if(i(l,t))return"";var r=b?e.slice(7,-1):e.replace(v,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:m})}}}]);
//# sourceMappingURL=chunk-7abd1d23.31e01dde.js.map