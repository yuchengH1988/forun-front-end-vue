(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ec8"],{"25d3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[t.isLoading?n("Spinner"):[n("div",[n("h1",[t._v(t._s(t.restaurant.name))]),n("span",{staticClass:"badge badge-secondary bg-secondary text-white mt-1 mb-3"},[t._v("\n        "+t._s(t.restaurant.categoryName)+"\n      ")])]),n("hr"),n("ul",[n("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength))]),n("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts))])]),n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v("\n      回上一頁\n    ")])]],2)},r=[],s=n("1da1"),i=(n("96cf"),n("b0c0"),n("c4c3")),c=n("2375"),o=n("2fa3"),u={name:"RestaurantDashboard",components:{Spinner:c["a"]},data:function(){return{restaurant:{name:"",categoryName:"",commentsLength:-1,viewCounts:-1},isLoading:!0}},methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e.isLoading=!0,n.next=4,i["a"].getDashboard({restaurantId:t});case 4:a=n.sent,r=a.data,s=r.restaurant,e.restaurant={id:s.id,name:s.name,categoryName:s.Category.name,commentsLength:s.Comments.length,viewCounts:s.viewCounts},e.isLoading=!1,n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](0),e.isLoading=!1,o["a"].fire({icon:"error",title:"無法載入餐廳Dashboard，請稍後再試"});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})))()}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)}},d=u,m=n("2877"),h=Object(m["a"])(d,a,r,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0b2ec8.c332f493.js.map