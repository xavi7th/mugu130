webpackJsonp([1],{GKqT:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"container-fluid"},[e("nav",[e("ul",{staticClass:"pagination"},[e("li",[e("a",{attrs:{disabled:n.pagination.current_page,"aria-label":"Previous"},on:{click:function(t){t.preventDefault(),n.changePage(n.pagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[n._v("Previous")])])]),n._v(" "),n._l(n.pages,function(t){return e("li",{key:t},[e("a",{class:n.isCurrentPage(t)?"active":"",on:{click:function(e){e.preventDefault(),n.changePage(t)}}},[n._v(n._s(t))])])}),n._v(" "),e("li",[e("a",{attrs:{disabled:n.pagination.current_page>=n.pagination.last_page,"aria-label":"Next"},on:{click:function(t){t.preventDefault(),n.changePage(n.pagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[n._v("Next")])])])],2)])])},staticRenderFns:[]}},OuPH:function(n,t,e){var a=e("VU/8")(e("gT8o"),e("GKqT"),!1,null,null,null);n.exports=a.exports},gT8o:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"pagination",props:["pagination","offset"],methods:{isCurrentPage:function(n){return this.pagination.current_page==n},changePage:function(){page>this.pagination.last_page&&(page=this.pagination.last_page),this.pagination.current_page=page,this.$emit("paginate")}},computed:{pages:function(){var n=[],t=this.pagination.current_page-Math.floor(this.offset/2);t<1&&(t=1);var e=t+this.offset-1;for(e>this.pagination.last_page&&(e=this.pagination.last_page);t<=e;)n.push(t),t++;return n}}}},v4Md:function(n,t,e){var a={"./AgentDashboardComponent":"v7XK","./AgentDashboardComponent.vue":"v7XK","./AgentEditDetailsComponent":"WnUr","./AgentEditDetailsComponent.vue":"WnUr","./AgentFundUserComponent":"Kxhx","./AgentFundUserComponent.vue":"Kxhx","./AgentViewProfileComponent":"7M/C","./AgentViewProfileComponent.vue":"7M/C","./AgentViewTransactionsComponent":"F+8K","./AgentViewTransactionsComponent.vue":"F+8K","./AgentWalletFundingLogsComponent":"NCsm","./AgentWalletFundingLogsComponent.vue":"NCsm","./AppComponent":"U01p","./AppComponent.vue":"U01p","./layouts/MasterLayoutComponent":"7iOQ","./layouts/MasterLayoutComponent.vue":"7iOQ","./misc/LoaderComponent":"odHN","./misc/LoaderComponent.vue":"odHN","./misc/PaginationComponent":"OuPH","./misc/PaginationComponent.vue":"OuPH","./partials/AgentHeaderComponent":"iIHi","./partials/AgentHeaderComponent.vue":"iIHi","./partials/AgentNavComponent":"HLrI","./partials/AgentNavComponent.vue":"HLrI","./partials/AgentStatisticsComponent":"r5Oi","./partials/AgentStatisticsComponent.vue":"r5Oi","./partials/FooterComponent":"P12x","./partials/FooterComponent.vue":"P12x"};function o(n){return e(i(n))}function i(n){var t=a[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}o.keys=function(){return Object.keys(a)},o.resolve=i,n.exports=o,o.id="v4Md"}});
//# sourceMappingURL=1.js.map