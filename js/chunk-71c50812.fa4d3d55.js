(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c50812"],{"73a3":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("AdminNav"),n("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/restaurants/new"}},[t._v("\n    New Restaurant\n  ")]),n("AdminRestaurantsTable")],1)},r=[],s=n("e04c"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoading?n("Spinner"):n("table",{staticClass:"table"},[n("thead",{staticClass:"thead-dark"},[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),n("th",{attrs:{scope:"col"}},[t._v("Category")]),n("th",{attrs:{scope:"col"}},[t._v("Name")]),n("th",{attrs:{scope:"col",width:"300"}},[t._v("操作")])])]),n("tbody",t._l(t.restaurants,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v("\n        "+t._s(e.id)+"\n      ")]),n("td",[t._v(t._s(e.Category?e.Category.name:"未分類"))]),n("td",[t._v(t._s(e.name))]),n("td",{staticClass:"d-flex justify-content-between"},[n("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant",params:{id:e.id}}}},[t._v("\n          Show\n        ")]),n("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant-edit",params:{id:e.id}}}},[t._v("Edit")]),n("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.deleteRestaurant(e.id)}}},[t._v("\n          Delete\n        ")])],1)])})),0)])},u=[],c=n("1da1"),o=(n("4de4"),n("96cf"),n("be6c")),d=n("2375"),l=n("2fa3"),m={components:{Spinner:d["a"]},data:function(){return{restaurants:[],isLoading:!0}},created:function(){this.fetchRestaurants()},methods:{fetchRestaurants:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,o["a"].restaurants.get();case 4:n=e.sent,a=n.data,t.restaurants=a.restaurants,t.isLoading=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),l["a"].fire({icon:"error",title:"無法載入後台餐廳資料，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},deleteRestaurant:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o["a"].restaurants.delete({restaurantId:t});case 3:if(a=n.sent,r=a.data,"success"===r.status){n.next=7;break}throw new Error(r.message);case 7:e.restaurants=e.restaurants.filter((function(e){return e.id!==t})),l["a"].fire({icon:"success",title:"刪除餐廳(ID:".concat(t,")成功")}),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](0),l["a"].fire({icon:"error",title:"無法刪除餐廳，請稍後再試"});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()}}},f=m,v=n("2877"),b=Object(v["a"])(f,i,u,!1,null,null,null),p=b.exports,g={name:"AdminRestaurants",components:{AdminNav:s["a"],AdminRestaurantsTable:p}},h=g,_=Object(v["a"])(h,a,r,!1,null,null,null);e["default"]=_.exports},be6c:function(t,e,n){"use strict";n("b0c0");var a=n("2fa3");e["a"]={categories:{get:function(){return a["b"].get("/admin/categories")},create:function(t){var e=t.name;return a["b"].post("/admin/categories",{name:e})},update:function(t){var e=t.categoryId,n=t.name;return a["b"].put("/admin/categories/".concat(e),{name:n})},delete:function(t){var e=t.categoryId;return a["b"].delete("/admin/categories/".concat(e))}},restaurants:{create:function(t){var e=t.formData;return a["b"].post("/admin/restaurants",e)},get:function(){return a["b"].get("/admin/restaurants")},getDetail:function(t){var e=t.restaurantId;return a["b"].get("/admin/restaurants/".concat(e))},delete:function(t){var e=t.restaurantId;return a["b"].delete("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,n=t.formData;return a["b"].put("/admin/restaurants/".concat(e),n)}},users:{get:function(){return a["b"].get("/admin/users")},toggleAdmin:function(t){var e=t.userId,n=t.isAdmin;return a["b"].put("/admin/users/".concat(e),{isAdmin:n})}}}},e04c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("h1",[t._v("餐廳後台")]),n("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" |\n  "),n("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},r=[],s=n("2877"),i={},u=Object(s["a"])(i,a,r,!1,null,null,null);e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-71c50812.fa4d3d55.js.map