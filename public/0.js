webpackJsonp([0],{"0FZY":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("1TNb");e.default={name:"AdminHeader",props:["total_earnings"],data:function(){return{routes:s.a}}}},"3tUR":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"td h1{text-align:center}",""])},"3zII":function(t,e,a){var s=a("VU/8")(a("FiCr"),a("MbtS"),!1,function(t){a("dytl")},"data-v-f0303f0e",null);t.exports=s.exports},"4gmD":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("master-layout",[a("template",{slot:"content-section"},[a("agent-menu"),t._v(" "),a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-100"},[a("div",{staticClass:"ui red segment"},[t.loading?t._e():a("div",{staticClass:"grid-100"},[a("div",{staticClass:"grid-40"},[a("div",{staticClass:"ui segment compact left floated"},[a("div",{staticClass:"ui horizontal statistic"},[a("div",{staticClass:"value"},[t._v(t._s(t.num_of_agent_fundingss))]),t._v(" "),a("div",{staticClass:"label"},[t._v("Fundings")])])])]),t._v(" "),a("div",{staticClass:"grid-60"},[a("div",{staticClass:"ui search flex-center",staticStyle:{"justify-content":"flex-end"}},[a("div",{staticClass:"ui icon input"},[a("input",{staticClass:"prompt",attrs:{type:"text",placeholder:"Search..."}}),t._v(" "),a("i",{staticClass:"search icon"})])])]),t._v(" "),a("br")]),t._v(" "),a("transition",{attrs:{name:"slide-in",mode:"out-in"}},[t.loading?a("page-loading",{attrs:{size:60}}):a("table",{staticClass:"ui striped single line table",attrs:{id:"transactions-table"}},[a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Amount")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Transaction Type")]),t._v(" "),a("th",[t._v("Date")])])]),t._v(" "),t.num_of_agent_fundingss>0?a("tbody",t._l(t.all_agent_fundings,function(e){return a("tr",[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(t._f("currency")(e.amount,"₦")))]),t._v(" "),a("td",[t._v(t._s(e.status))]),t._v(" "),a("td",[t._v(t._s(e.trans_type))]),t._v(" "),a("td",[t._v(t._s(e.created_at))])])})):a("tbody",[a("tr",[a("td",{attrs:{colspan:"5"}},[a("h1",[t._v("No available Fundings")])])])])])],1)],1)])])],1)],2)},staticRenderFns:[]}},"73C+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("KwFx"),n=a.n(s),i=a("MMe1"),r=a.n(i),o=a("oJEP"),l=a.n(o),d=a("1TNb");e.default={name:"MasterLayout",created:function(){this.getAdminDetails(),this.getTotalEarnings()},data:function(){return{admin_details:{},total_earnings:0}},components:{AdminHeader:n.a,AdminFooter:l.a,AdminNav:r.a},methods:{logoutAdmin:function(){d.a.logoutAdmin()},getAdminDetails:function(){var t=this;axios.post(d.a.getAdminDetails).then(function(e){t.admin_details=e.data.userdetails},function(t){d.a.logoutAdmin("Could not retrieve user details. Logging you out.")})},getTotalEarnings:function(){var t=this;axios.post(d.a.getTotalEarnings).then(function(e){t.total_earnings=e.data.total_earnings},function(t){d.a.logoutAdmin("Could not retrieve user details. Logging you out.")})}}}},"7m/U":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".item i[data-v-51a14ec6]{padding-right:2px}#u_details[data-v-51a14ec6]{margin-bottom:80px!important;background-color:transparent!important;border-bottom:none!important}",""])},"9Ok8":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},DcqD:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:"u_details"}},[e("div",{staticClass:"grid-container"},[e("div",{staticClass:"grid-80  push-10 flex-center"},[e("div",{staticClass:"ui compact menu inverted"},[e("router-link",{staticClass:"item red",attrs:{to:{name:"admin.view-agents"},"active-class":"active"}},[e("i",{staticClass:"users icon"}),this._v("\n          View Agents\n        ")]),this._v(" "),e("router-link",{staticClass:"item red",attrs:{to:{name:"admin.create-agent"},"active-class":"active"}},[e("i",{staticClass:"user plus icon"}),this._v("\n          Create Agent\n        ")])],1)])])])},staticRenderFns:[]}},DnNC:function(t,e,a){var s=a("VU/8")(a("73C+"),a("N4lu"),!1,function(t){a("NuNU")},"data-v-73243da6",null);t.exports=s.exports},FDyA:function(t,e,a){var s=a("3tUR");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("146aacd9",s,!0,{})},FiCr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("DnNC"),n=a.n(s),i=a("ya8x"),r=a.n(i),o=a("rGOl"),l=a.n(o),d=a("1TNb");e.default={name:"CreateAgent",components:{pageLoading:l.a,MasterLayout:n.a,AgentMenu:r.a},created:function(){this.$validator.localize("en",{custom:{user_email:{email:"The user email must be a valid email"}}})},data:function(){return{user_details:null,user_email:null,loading:!1}},computed:{},methods:{checkFields:function(){return this.$validator.validate()},findUser:function(){var t=this;this.checkFields().then(function(e){e&&(t.loading=!0,axios.get(d.a.adminFindUser+"/"+t.user_email).then(function(e){204==e.status?swal("Error","User not found. Check email and try again","error"):t.user_details=e.data,t.loading=!1},function(e){swal("Error",""+e,"error"),t.loading=!1}))})},createAgent:function(){var t=this;this.loading=!0,this.checkFields().then(function(e){e&&swal({title:"Are you sure?",text:t.user_details.firstname+" will be made an agent account. Make sure this account is a new account? ",icon:"warning",buttons:{cancel:!0,confirm:{text:"Proceed",value:!0,visible:!0,className:"",closeModal:!1}},dangerMode:!0}).then(function(e){if(e)return axios.put(d.a.adminCreateAgent,{user_id:t.user_details.id});throw swal("Cancelled.",{icon:"info"}),null}).then(function(e){if(!e.data.status)return e.data.message?(t.loading=!1,swal(e.data.message,"","error")):(t.loading=!1,swal("Error","Something went wrong at the server.","error"));swal({title:"Success",text:e.data.message,icon:"success"}),t.$router.push({name:"admin.view-agents"}),t.loading=!1}).catch(function(e){t.loading=!1,console.log(e),e?swal("Oh noes!","The AJAX request failed!","error"):(swal.stopLoading(),swal.close())})})}}}},G6sa:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"td h1{text-align:center}",""])},HKZ6:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"div#main-controller #dashboard[data-v-73243da6]{padding:0 0 100px}",""])},I7Ko:function(t,e,a){var s=a("yQe9");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("19eb5026",s,!0,{})},IDcE:function(t,e,a){var s=a("9Ok8");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("2be7ac19",s,!0,{})},IcXn:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".item i[data-v-01590882]{padding-right:2px}.header[data-v-01590882]{color:#fff}",""])},IjtI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("1TNb");e.default={name:"AdminAgentsNav",props:["admin_details"],data:function(){return{routes:s.a}},methods:{setActive:function(t,e){this.isActive=t,this.$emit("go-to",{comp:e})}}}},IsIN:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{},[a("div",{staticClass:"grid-container "},[a("div",{staticClass:"grid-100"},[a("div",{staticClass:"ui right floated celled horizontal list"},[a("a",{staticClass:"item",attrs:{target:"_self",href:"#"}},[t._v("© 2018 FastPlay24 & Tcom ")]),t._v(" "),a("span",{staticClass:"deg"},[t._v("·")]),t._v(" "),a("a",{staticClass:"item",attrs:{target:"_blank",href:"/terms-and-conditions"}},[t._v("Terms")]),t._v(" "),a("span",{staticClass:"deg"},[t._v("·")]),t._v(" "),a("a",{staticClass:"item",attrs:{target:"_blank",href:"/privacy"}},[t._v("Privacy")]),t._v(" "),a("span",{staticClass:"deg"},[t._v("·")]),t._v(" "),a("a",{staticClass:"item",attrs:{target:"_self",href:"/frequently-asked-questions"}},[t._v("Help & FAQs")]),t._v(" "),a("span",{staticClass:"deg"},[t._v("·")]),t._v(" "),a("a",{staticClass:"item",attrs:{target:"_self",href:"support-center"}},[t._v("Support")]),t._v(" "),a("span",{staticClass:"deg"},[t._v("·")]),t._v(" "),a("a",{staticClass:"item",attrs:{target:"_self",href:"/calculator"}},[t._v("Calculator")])]),t._v(" "),a("div",{staticClass:"ui celled horizontal list"},[a("a",{staticClass:"item",attrs:{href:"https://www.facebook.com/fastplay24/",target:"_blank"}},[t._v("Facebook")]),t._v(" "),a("span",{staticClass:"deg"},[t._v("·")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:"https://www.twitter.com/fastplay24/",target:"_blank"}},[t._v("Twitter")]),t._v(" "),a("span",{staticClass:"deg"},[t._v("·")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:"https://www.instagram.com/fastplay24/",target:"_blank"}},[t._v("Instagram")])])])])])}]}},JWvo:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".ui.squared[data-v-f0303f0e]{border-radius:4px}.ui.form[data-v-f0303f0e]{text-align:center}.ui .message[data-v-f0303f0e]{max-width:35%;margin:10px auto}@media (max-width:767px){.ui .message[data-v-f0303f0e]{max-width:none}}h1[data-v-f0303f0e]{font-family:alegreya sans;font-weight:100;margin-bottom:0}",""])},KwFx:function(t,e,a){var s=a("VU/8")(a("0FZY"),a("WJjv"),!1,function(t){a("yggB")},null,null);t.exports=s.exports},MMe1:function(t,e,a){var s=a("VU/8")(a("pLHO"),a("YAMc"),!1,function(t){a("R+sx")},"data-v-01590882",null);t.exports=s.exports},MNYl:function(t,e,a){var s=a("VU/8")(a("rTP9"),a("NsaQ"),!1,function(t){a("RR+9")},null,null);t.exports=s.exports},MbtS:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("master-layout",[a("template",{slot:"content-section"},[a("agent-menu"),t._v(" "),a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-100"},[a("div",{staticClass:"ui red segment"},[a("transition",{attrs:{name:"slide-in",mode:"out-in"}},[t.loading?a("page-loading",{attrs:{size:60}}):t.user_details?a("div",{key:1,staticClass:"ui purple segment"},[a("form",{staticClass:"ui form",on:{submit:function(e){return e.preventDefault(),t.createAgent(e)}}},[a("h1",{staticClass:"ui header"},[t._v("Make "+t._s(t.user_details.firstname)+" an Agent")]),t._v(" "),a("div",{staticClass:"ui divider"}),t._v(" "),a("div",{staticClass:"user-details ui positive message"},[a("h4",[t._v("User's Name: "+t._s(t.user_details.firstname)+" "+t._s(t.user_details.lastname))]),t._v(" "),a("h4",[t._v("User's Email: "+t._s(t.user_details.email))])]),t._v(" "),a("button",{class:["ui","blue","button",{loading:t.loading}],attrs:{disabled:t.loading,type:"submit"}},[t._v("Create Agent")])])]):a("div",{staticClass:"ui red segment"},[a("form",{key:2,staticClass:"ui form",on:{submit:function(e){return e.preventDefault(),t.findUser(e)}}},[a("h1",{staticClass:"ui header"},[t._v("Fund a User")]),t._v(" "),a("div",{staticClass:"ui divider"}),t._v(" "),a("div",{staticClass:"ui search",class:{loading:t.loading}},[a("div",{staticClass:"ui icon input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.user_email,expression:"user_email"},{name:"validate",rawName:"v-validate",value:"email",expression:"'email'"}],staticClass:"prompt",attrs:{type:"text",placeholder:"enter email address",name:"user_email",autofocus:""},domProps:{value:t.user_email},on:{input:function(e){e.target.composing||(t.user_email=e.target.value)}}}),t._v(" "),a("i",{staticClass:"search icon"})]),t._v(" "),t.errors.has("user_email")?a("div",{staticClass:"ui negative message"},[a("i",{staticClass:"close icon"}),t._v(" "),a("div",{staticClass:"header"},[t._v(t._s(t.errors.first("user_email")))])]):t._e()]),t._v(" "),a("button",{class:["ui","blue","button",{loading:t.loading}],attrs:{disabled:t.loading||!t.user_email,type:"submit"}},[t._v("Search")])])])],1)],1)])])],1)],2)},staticRenderFns:[]}},N4lu:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("admin-header",t._b({on:{"logout-admin":function(e){t.logoutAdmin()}}},"admin-header",{total_earnings:t.total_earnings},!1)),t._v(" "),a("admin-nav",t._b({},"admin-nav",{admin_details:t.admin_details},!1)),t._v(" "),a("div",{attrs:{id:"dashboard"}},[t._t("content-section")],2),t._v(" "),a("admin-footer")],1)},staticRenderFns:[]}},NWAC:function(t,e,a){var s=a("7m/U");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("5acd5cc5",s,!0,{})},NsaQ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("master-layout",[a("template",{slot:"content-section"},[a("agent-menu"),t._v(" "),a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-100"},[a("div",{staticClass:"ui red segment"},[t.loading?t._e():a("div",{staticClass:"grid-100"},[a("div",{staticClass:"grid-40"},[a("div",{staticClass:"ui segment compact left floated"},[a("div",{staticClass:"ui horizontal statistic"},[a("div",{staticClass:"value"},[t._v("\n                    "+t._s(t.num_of_agents)+"\n                  ")]),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                    Agents\n                  ")])])])]),t._v(" "),a("div",{staticClass:"grid-15"}),t._v(" "),a("div",{staticClass:"grid-45"},[a("div",{staticClass:"ui search flex-center",staticStyle:{"justify-content":"flex-end"}},[a("div",{staticClass:"ui icon input"},[a("input",{staticClass:"prompt",attrs:{type:"text",placeholder:"Search..."}}),t._v(" "),a("i",{staticClass:"search icon"})]),t._v(" "),a("div",{staticClass:"results"})])]),t._v(" "),a("br")]),t._v(" "),a("transition",{attrs:{name:"slide-in",mode:"out-in"}},[t.loading?a("page-loading",{attrs:{size:60}}):a("table",{staticClass:"ui  striped celled table"},[a("thead",[a("tr",[a("th",[t._v("S/N")]),t._v(" "),a("th",[t._v("E-Mail")]),t._v(" "),a("th",[t._v("Full Name")]),t._v(" "),a("th",[t._v("Available Units")]),t._v(" "),a("th",[t._v("Profits")]),t._v(" "),a("th",[t._v("Account Status")]),t._v(" "),a("th",[t._v("Actions")])])]),t._v(" "),a("tbody",t._l(t.all_agents,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.email))]),t._v(" "),a("td",[t._v("\n                    "+t._s(e.firstname)+" "+t._s(e.lastname)+"\n                    "),a("div",{staticClass:"ui mini buttons right floated"},[a("router-link",{staticClass:"ui purple button",attrs:{to:{name:"admin.view-agent-transactions",params:{id:e.id}}}},[t._v("\n                        Transactions ")]),t._v(" "),a("router-link",{staticClass:"ui orange button",attrs:{to:{name:"admin.view-agent-fundings",params:{id:e.id}}}},[t._v("\n                        Fundings ")])],1)]),t._v(" "),a("td",[t._v(t._s(t._f("currency")(e.available_units,"₦")))]),t._v(" "),a("td",[t._v(t._s(t._f("currency")(e.total_untransferred_earnings,"₦")))]),t._v(" "),a("td",[t._v(t._s(e.deleted_at?"Deleted":e.useraccstatus))]),t._v(" "),a("td",[a("div",{staticClass:"ui mini buttons"},[a("router-link",{staticClass:"ui orange button",attrs:{to:{name:"admin.edit-agent",params:{id:e.id}},"active-class":"active"}},[t._v("\n                        Edit\n                      ")]),t._v(" "),a("div",{staticClass:"or"}),t._v(" "),e.deleted_at?a("button",{staticClass:"ui green button",on:{click:function(a){t.restoreAgent(e)}}},[t._v("Restore")]):a("button",{staticClass:"ui red button",on:{click:function(a){t.deleteAgent(e)}}},[t._v("Delete")])],1)])])}))])],1)],1)])])],1)],2)},staticRenderFns:[]}},NuNU:function(t,e,a){var s=a("HKZ6");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("e8598908",s,!0,{})},O9Dr:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"ui.square{border-radius:4px}",""])},Qbay:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loader",style:{width:this.size+"px",height:this.size+"px"}})},staticRenderFns:[]}},"R+sx":function(t,e,a){var s=a("IcXn");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("79087d08",s,!0,{})},"RR+9":function(t,e,a){var s=a("ZhK0");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("42849166",s,!0,{})},RXkB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("DnNC"),n=a.n(s),i=a("ya8x"),r=a.n(i),o=a("rGOl"),l=a.n(o),d=a("1TNb");e.default={name:"EditAgents",components:{pageLoading:l.a,MasterLayout:n.a,AgentMenu:r.a},created:function(){this.getAgentDetails(this.$route.params.id)},data:function(){return{agent_details:{},loading:!0}},computed:{},methods:{getAgentDetails:function(t){var e=this;axios.get(d.a.getAgentDetails(t)).then(function(t){console.log(t),e.agent_details=t.data,e.loading=!1})},editAgent:function(){var t=this;this.loading=!0,axios.post(d.a.editAgentsDetails,{details:this.agent_details}).then(function(e){t.loading=!1,t.$router.push({name:"admin.view-agents"})})}}}},WJjv:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{attrs:{id:"alpha"}},[a("div",{staticClass:"grid-container"},[t._m(0),t._v(" "),a("div",{staticClass:"grid-45"},[a("nav",[a("div",{staticClass:"ui labeled  button",attrs:{tabindex:"-1"}},[a("div",{staticClass:"ui purple button right pointing label"},[t._v("Total Earnings")]),t._v(" "),a("a",{staticClass:"ui basic purple label "},[t._v(t._s(t._f("currency")(t.total_earnings,"₦")))])]),t._v(" "),t._m(1)])]),t._v(" "),a("div",{staticClass:"grid-20"},[a("nav",[a("div",{staticClass:"ui right floated horizontal list",staticStyle:{"line-height":"40px"}},[a("a",{staticClass:"item",attrs:{href:t.routes.adminDashboard,target:""}},[t._v("Dashboard")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:"/tcom01/settings"}},[t._v("Profile")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:"#"},on:{click:function(e){t.$emit("logout-admin")}}},[t._v("Logout "),a("i",{staticClass:"sign out icon",staticStyle:{color:"white"}})])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid-35"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:"/img/logo.png",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mini-game"}},[e("div",{staticClass:"ui labeled button",attrs:{tabindex:"-1"}},[e("div",{staticClass:"ui button"},[e("i",{staticClass:"gamepad icon"}),this._v("DISABLED\n            ")]),this._v(" "),e("a",{staticClass:"ui basic left pointing label"},[e("div",[e("h1",{staticClass:"time"},[this._v("0:03")])])])])])}]}},WyaI:function(t,e,a){var s=a("VU/8")(a("j2vL"),a("4gmD"),!1,function(t){a("XxXL")},null,null);t.exports=s.exports},X6Hc:function(t,e,a){var s=a("O9Dr");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("3a9fffaa",s,!0,{})},XxXL:function(t,e,a){var s=a("G6sa");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("040d16e5",s,!0,{})},XyGP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("DnNC"),n=a.n(s),i=a("ya8x"),r=a.n(i),o=a("rGOl"),l=a.n(o),d=a("1TNb"),c=a("M4fF");a.n(c);e.default={name:"ViewAgentTransactions",components:{pageLoading:l.a,MasterLayout:n.a,AgentMenu:r.a},created:function(){this.getAllAgentTransactions(this.$route.params.id)},data:function(){return{all_agent_transactions:!1,loading:!0}},computed:{num_of_agent_transactions:function(){return _.size(this.all_agent_transactions)}},methods:{getAllAgentTransactions:function(t){var e=this;axios.get(d.a.getAllAgentTransactions(t)).then(function(t){e.all_agent_transactions=t.data,e.loading=!1},function(t){swal("Error",""+t,"error"),e.$router.push({name:"admin.view-agents"})})}}}},YAMc:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"u_details"}},[a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-80  push-10 flex-center"},[a("div",{staticClass:"ui compact menu"},[a("a",{staticClass:"item",attrs:{href:t.routes.adminViewQuestions}},[a("i",{staticClass:"tasks icon"}),t._v("\n          Questions\n        ")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:t.routes.adminViewAdmins}},[a("i",{staticClass:"user mdicon"}),t._v("\n          Admins\n        ")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:t.routes.adminViewUsers}},[a("i",{staticClass:"venus mars icon"}),t._v("\n          Users\n        ")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:t.routes.adminViewEarnings}},[a("i",{staticClass:"money bill alternate outline icon"}),t._v("\n          Earnings\n        ")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:t.routes.adminViewGames}},[a("i",{staticClass:"gamepad icon"}),t._v("\n          Games\n        ")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:t.routes.adminViewTransactions}},[a("i",{staticClass:"file alternate outline icon"}),t._v("\n          Transactions\n        ")]),t._v(" "),a("a",{staticClass:"item",attrs:{href:t.routes.adminViewMessages}},[a("i",{staticClass:"folder open outline icon"}),t._v("\n          Messages\n        ")]),t._v(" "),a("router-link",{staticClass:"item",attrs:{to:{name:"admin.view-agents"},"active-class":"active"}},[a("i",{staticClass:"users icon"}),t._v("\n          Agents\n        ")])],1)])])])},staticRenderFns:[]}},ZhK0:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},d5ee:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("master-layout",[a("template",{slot:"content-section"},[a("agent-menu"),t._v(" "),a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-100"},[a("div",{staticClass:"ui red segment"},[t.loading?t._e():a("div",{staticClass:"grid-100"},[a("div",{staticClass:"grid-40"},[a("div",{staticClass:"ui segment compact left floated"},[a("div",{staticClass:"ui horizontal statistic"},[a("div",{staticClass:"value"},[t._v(t._s(t.num_of_agent_transactions))]),t._v(" "),a("div",{staticClass:"label"},[t._v("Transactions")])])])]),t._v(" "),a("div",{staticClass:"grid-60"},[a("div",{staticClass:"ui search flex-center",staticStyle:{"justify-content":"flex-end"}},[a("div",{staticClass:"ui icon input"},[a("input",{staticClass:"prompt",attrs:{type:"text",placeholder:"Search..."}}),t._v(" "),a("i",{staticClass:"search icon"})])])]),t._v(" "),a("br")]),t._v(" "),a("transition",{attrs:{name:"slide-in",mode:"out-in"}},[t.loading?a("page-loading",{attrs:{size:60}}):a("table",{staticClass:"ui striped single line table",attrs:{id:"transactions-table"}},[a("thead",[a("tr",[a("th",[t._v("User Name")]),t._v(" "),a("th",[t._v("User E-mail")]),t._v(" "),a("th",[t._v("Amount")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Date")])])]),t._v(" "),t.num_of_agent_transactions>0?a("tbody",t._l(t.all_agent_transactions,function(e){return a("tr",[a("td",[t._v(t._s(e.credited_user.firstname)+" "+t._s(e.credited_user.lastname))]),t._v(" "),a("td",[t._v(t._s(e.credited_user.email))]),t._v(" "),a("td",[t._v(t._s(t._f("currency")(e.amount,"₦")))]),t._v(" "),a("td",[t._v(t._s(e.status))]),t._v(" "),a("td",[t._v(t._s(e.created_at))])])})):a("tbody",[a("tr",[a("td",{attrs:{colspan:"5"}},[a("h1",[t._v("No available Transactions")])])])])])],1)],1)])])],1)],2)},staticRenderFns:[]}},dytl:function(t,e,a){var s=a("JWvo");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("76f53295",s,!0,{})},ga2l:function(t,e,a){var s={"./AdminCreateAgentComponent":"3zII","./AdminCreateAgentComponent.vue":"3zII","./AdminEditAgentsComponent":"oNrG","./AdminEditAgentsComponent.vue":"oNrG","./AdminViewAgentFundingsComponent":"WyaI","./AdminViewAgentFundingsComponent.vue":"WyaI","./AdminViewAgentTransactionsComponent":"lUYD","./AdminViewAgentTransactionsComponent.vue":"lUYD","./AdminViewAgentsComponent":"MNYl","./AdminViewAgentsComponent.vue":"MNYl","./AppComponent":"gm9X","./AppComponent.vue":"gm9X","./layouts/MasterLayoutComponent":"DnNC","./layouts/MasterLayoutComponent.vue":"DnNC","./misc/LoaderComponent":"rGOl","./misc/LoaderComponent.vue":"rGOl","./misc/PaginationComponent":"v4gd","./misc/PaginationComponent.vue":"v4gd","./partials/AdminAgentsNavComponent":"ya8x","./partials/AdminAgentsNavComponent.vue":"ya8x","./partials/AdminFooterComponent":"oJEP","./partials/AdminFooterComponent.vue":"oJEP","./partials/AdminHeaderComponent":"KwFx","./partials/AdminHeaderComponent.vue":"KwFx","./partials/AdminNavComponent":"MMe1","./partials/AdminNavComponent.vue":"MMe1"};function n(t){return a(i(t))}function i(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="ga2l"},i7Tm:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},j2vL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("DnNC"),n=a.n(s),i=a("ya8x"),r=a.n(i),o=a("rGOl"),l=a.n(o),d=a("1TNb"),c=a("M4fF");a.n(c);e.default={name:"ViewAgentFundings",components:{pageLoading:l.a,MasterLayout:n.a,AgentMenu:r.a},created:function(){this.getAllAgentFundings(this.$route.params.id)},data:function(){return{all_agent_fundings:!1,loading:!0}},computed:{num_of_agent_fundingss:function(){return _.size(this.all_agent_fundings)}},methods:{getAllAgentFundings:function(t){var e=this;axios.get(d.a.getAllAgentFundings(t)).then(function(t){e.all_agent_fundings=t.data,e.loading=!1},function(t){swal("Error",""+t,"error"),e.$router.push({name:"admin.view-agents"})})}}}},lUYD:function(t,e,a){var s=a("VU/8")(a("XyGP"),a("d5ee"),!1,function(t){a("FDyA")},null,null);t.exports=s.exports},oJEP:function(t,e,a){var s=a("VU/8")(a("riEv"),a("IsIN"),!1,function(t){a("IDcE")},null,null);t.exports=s.exports},oNrG:function(t,e,a){var s=a("VU/8")(a("RXkB"),a("u23K"),!1,function(t){a("X6Hc")},null,null);t.exports=s.exports},pLHO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("1TNb");e.default={name:"AdminNav",props:["admin_details"],data:function(){return{routes:s.a}},methods:{setActive:function(t,e){this.isActive=t,this.$emit("go-to",{comp:e})}}}},qe32:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Loader",props:{size:{type:Number,default:30}}}},rGOl:function(t,e,a){var s=a("VU/8")(a("qe32"),a("Qbay"),!1,function(t){a("I7Ko")},null,null);t.exports=s.exports},rTP9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("DnNC"),n=a.n(s),i=a("ya8x"),r=a.n(i),o=a("rGOl"),l=a.n(o),d=a("1TNb"),c=a("M4fF");a.n(c);e.default={name:"ViewAgents",components:{pageLoading:l.a,MasterLayout:n.a,AgentMenu:r.a},created:function(){this.getAllAgents()},data:function(){return{all_agents:!1,loading:!0}},computed:{num_of_agents:function(){return _.size(this.all_agents)}},methods:{getAllAgents:function(){var t=this;axios.get(d.a.getAllAgents).then(function(e){t.all_agents=e.data,t.loading=!1})},deleteAgent:function(t){var e=this;this.loading=!0,axios.delete(d.a.deleteAgent+"/"+t.id).then(function(a){e.loading=!1,t.deleted_at=!0})},restoreAgent:function(t){var e=this;this.loading=!0,axios.delete(d.a.restoreAgent+"/"+t.id).then(function(a){e.loading=!1,t.deleted_at=!1})}}}},riEv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},u23K:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("master-layout",[a("template",{slot:"content-section"},[a("agent-menu"),t._v(" "),a("div",{staticClass:"grid-container"},[a("div",{staticClass:"grid-100"},[a("div",{staticClass:"ui red segment"},[a("transition",{attrs:{name:"slide-in",mode:"out-in"}},[t.loading?a("page-loading",{attrs:{size:60}}):a("form",{staticClass:"ui form",attrs:{name:"edit"},on:{submit:function(e){return e.preventDefault(),t.editAgent(e)}}},[a("h2",{staticClass:"ui dividing header"},[t._v("Edit Agent's Information")]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Name")]),t._v(" "),a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.firstname,expression:"agent_details.firstname"}],attrs:{type:"text",name:"firstname",placeholder:"First Name"},domProps:{value:t.agent_details.firstname},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"firstname",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.lastname,expression:"agent_details.lastname"}],attrs:{type:"text",name:"lastname",placeholder:"Last Name"},domProps:{value:t.agent_details.lastname},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"lastname",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.password,expression:"agent_details.password"}],attrs:{type:"password",name:"password",placeholder:"Enter Password"},domProps:{value:t.agent_details.password},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"password",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"three fields"},[a("div",{staticClass:"field"},[a("label",[t._v("Total Units Purchsased")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.units_purchased,expression:"agent_details.units_purchased"}],attrs:{type:"number",name:"num_of_referrals",placeholder:"Units Purchased",readonly:"readonly"},domProps:{value:t.agent_details.units_purchased},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"units_purchased",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Wallet Balance")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.available_units,expression:"agent_details.available_units"}],attrs:{type:"number",name:"available_units",placeholder:"Wallet Balance",readonly:"readonly"},domProps:{value:t.agent_details.available_units},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"available_units",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Profit")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.total_untransferred_earnings,expression:"agent_details.total_untransferred_earnings"}],attrs:{type:"number",name:"untransferred_earnings",placeholder:"Untransferred Earnings",readonly:"readonly"},domProps:{value:t.agent_details.total_untransferred_earnings},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"total_untransferred_earnings",e.target.value)}}})])])])])]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"two fields"},[a("div",{staticClass:"field"},[a("label",[t._v("Account Number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.acct_no,expression:"agent_details.acct_no"}],attrs:{type:"text",name:"phone1",placeholder:"Account Number"},domProps:{value:t.agent_details.acct_no},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"acct_no",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Bank Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.bank,expression:"agent_details.bank"}],attrs:{type:"text",name:"available_units",placeholder:"Bank Name"},domProps:{value:t.agent_details.bank},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"bank",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"three fields"},[a("div",{staticClass:"field"},[a("label",[t._v("Account Type")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.acct_type,expression:"agent_details.acct_type"}],attrs:{type:"text",name:"earnings",placeholder:"Account Type"},domProps:{value:t.agent_details.acct_type},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"acct_type",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Phone Number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.phone1,expression:"agent_details.phone1"}],attrs:{type:"text",name:"phone1",placeholder:"Phone Number"},domProps:{value:t.agent_details.phone1},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"phone1",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"field"},[a("label",[t._v("Phone Network")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.network,expression:"agent_details.network"}],attrs:{type:"text",name:"network",placeholder:"Phone Number"},domProps:{value:t.agent_details.network},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"network",e.target.value)}}})])])]),t._v(" "),a("div",{staticClass:"field"},[a("div",{staticClass:"fields"},[a("div",{staticClass:"eight wide field"},[a("label",[t._v("Email Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.email,expression:"agent_details.email"}],attrs:{type:"text",name:"email",placeholder:"Email Address"},domProps:{value:t.agent_details.email},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"email",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"eight wide field"},[a("label",[t._v("Address")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.agent_details.address,expression:"agent_details.address"}],attrs:{rows:"2",name:"address",placeholder:"Address"},domProps:{value:t.agent_details.address},on:{input:function(e){e.target.composing||t.$set(t.agent_details,"address",e.target.value)}}})])])]),t._v(" "),a("button",{staticClass:"ui button green",attrs:{type:"submit",tabindex:"0"}},[t._v("Submit")])])],1)],1)])])],1)],2)},staticRenderFns:[]}},v4gd:function(t,e,a){var s=a("VU/8")(a("wvpU"),a("vpDQ"),!1,null,null,null);t.exports=s.exports},vpDQ:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("nav",[a("ul",{staticClass:"pagination"},[a("li",[a("a",{attrs:{disabled:t.pagination.current_page,"aria-label":"Previous"},on:{click:function(e){e.preventDefault(),t.changePage(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("Previous")])])]),t._v(" "),t._l(t.pages,function(e){return a("li",{key:e},[a("a",{class:t.isCurrentPage(e)?"active":"",on:{click:function(a){a.preventDefault(),t.changePage(e)}}},[t._v(t._s(e))])])}),t._v(" "),a("li",[a("a",{attrs:{disabled:t.pagination.current_page>=t.pagination.last_page,"aria-label":"Next"},on:{click:function(e){e.preventDefault(),t.changePage(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("Next")])])])],2)])])},staticRenderFns:[]}},wvpU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"pagination",props:["pagination","offset"],methods:{isCurrentPage:function(t){return this.pagination.current_page==t},changePage:function(){page>this.pagination.last_page&&(page=this.pagination.last_page),this.pagination.current_page=page,this.$emit("paginate")}},computed:{pages:function(){var t=[],e=this.pagination.current_page-Math.floor(this.offset/2);e<1&&(e=1);var a=e+this.offset-1;for(a>this.pagination.last_page&&(a=this.pagination.last_page);e<=a;)t.push(e),e++;return t}}}},yQe9:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".loader{display:block;border:5px solid hsla(0,0%,74%,.25);border-left-color:#03a9f4;border-top-color:#03a9f4;border-radius:50%;-webkit-animation:rotate .6s infinite linear;animation:rotate .6s infinite linear;margin:0 auto}@-webkit-keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},ya8x:function(t,e,a){var s=a("VU/8")(a("IjtI"),a("DcqD"),!1,function(t){a("NWAC")},"data-v-51a14ec6",null);t.exports=s.exports},yggB:function(t,e,a){var s=a("i7Tm");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("60c325a5",s,!0,{})}});
//# sourceMappingURL=0.js.map