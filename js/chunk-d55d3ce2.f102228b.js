(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55d3ce2"],{"22ab":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),e.isLoading?r("Spinner"):[r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(e){return r("UserCard",{key:e.id,attrs:{initialUser:e}})})),1)]],2)},a=[],s=r("1da1"),o=(r("96cf"),r("d81d"),r("b0c0"),r("8bb1")),i=r("2375"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("img",{attrs:{src:e._f("emptyImage")(e.user.image),width:"140px",height:"140px"}})]),r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary bg-secondary text-white"},[e._v("追蹤人數："+e._s(e.user.followerCount?e.user.followerCount:"0"))]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowing(e.user.id)}}},[e._v("\n      取消追蹤\n    ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(e.user.id)}}},[e._v("\n      追蹤\n    ")])])],1)},c=[],l=r("5530"),d=r("2708"),p=r("4cce"),f=r("2fa3"),w={mixins:[d["a"]],props:{initialUser:{type:Object,required:!0}},data:function(){return{user:this.initialUser}},methods:{addFollowing:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p["a"].addFollowing({userId:e});case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.user=Object(l["a"])(Object(l["a"])({},t.user),{},{followerCount:t.user.followerCount+1,isFollowed:!0}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),f["a"].fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteFollowing:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,p["a"].deleteFollowing({userId:e});case 3:if(n=r.sent,a=n.data,"success"===a.status){r.next=7;break}throw new Error(a.message);case 7:t.user=Object(l["a"])(Object(l["a"])({},t.user),{},{followerCount:t.user.followerCount-1,isFollowed:!1}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),f["a"].fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},m=w,b=r("2877"),g=Object(b["a"])(m,u,c,!1,null,null,null),h=g.exports,v={name:"UsersTop",components:{NavTabs:o["a"],UserCard:h,Spinner:i["a"]},data:function(){return{users:[],isLoading:!0}},methods:{fetchUsers:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p["a"].getTopUsers();case 3:r=t.sent,n=r.data,e.users=n.users.map((function(e){return{id:e.id,name:e.name,image:e.image,followerCount:e.FollowerCount,isFollowed:e.isFollowed}})),e.isLoading=!1,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),e.isLoading=!1,f["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},created:function(){this.fetchUsers()}},x=v,C=Object(b["a"])(x,n,a,!1,null,null,null);t["default"]=C.exports},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),o=s("map");n({target:"Array",proto:!0,forced:!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-d55d3ce2.f102228b.js.map