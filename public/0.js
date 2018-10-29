webpackJsonp([0],{

/***/ "./app/Modules/PaymentAgent/Resources/js/components recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AgentDashboardComponent": "./app/Modules/PaymentAgent/Resources/js/components/AgentDashboardComponent.vue",
	"./AgentDashboardComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/AgentDashboardComponent.vue",
	"./AgentFundUser": "./app/Modules/PaymentAgent/Resources/js/components/AgentFundUser.vue",
	"./AgentFundUser.vue": "./app/Modules/PaymentAgent/Resources/js/components/AgentFundUser.vue",
	"./AgentViewTransactions": "./app/Modules/PaymentAgent/Resources/js/components/AgentViewTransactions.vue",
	"./AgentViewTransactions.vue": "./app/Modules/PaymentAgent/Resources/js/components/AgentViewTransactions.vue",
	"./AgentWalletFundingLogsComponent": "./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue",
	"./AgentWalletFundingLogsComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue",
	"./AppComponent": "./app/Modules/PaymentAgent/Resources/js/components/AppComponent.vue",
	"./AppComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/AppComponent.vue",
	"./DataTableComponent": "./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue",
	"./DataTableComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue",
	"./SubComponents/SubCreateTransaction": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue",
	"./SubComponents/SubCreateTransaction.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue",
	"./SubComponents/SubCreateUser": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue",
	"./SubComponents/SubCreateUser.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue",
	"./SubComponents/SubEditUser": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue",
	"./SubComponents/SubEditUser.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue",
	"./SubComponents/SubViewAllMessages": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue",
	"./SubComponents/SubViewAllMessages.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue",
	"./SubComponents/SubViewAllTransactions": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue",
	"./SubComponents/SubViewAllTransactions.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue",
	"./SubComponents/SubViewAllTransferRequests": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue",
	"./SubComponents/SubViewAllTransferRequests.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue",
	"./SubComponents/SubViewDetails": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue",
	"./SubComponents/SubViewDetails.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue",
	"./SubComponents/SubViewTransactions": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue",
	"./SubComponents/SubViewTransactions.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue",
	"./SubComponents/SubViewTransferRequests": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue",
	"./SubComponents/SubViewTransferRequests.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue",
	"./SubComponents/SubViewUsers": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue",
	"./SubComponents/SubViewUsers.vue": "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue",
	"./layouts/MasterLayoutComponent": "./app/Modules/PaymentAgent/Resources/js/components/layouts/MasterLayoutComponent.vue",
	"./layouts/MasterLayoutComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/layouts/MasterLayoutComponent.vue",
	"./misc/LoaderComponent": "./app/Modules/PaymentAgent/Resources/js/components/misc/LoaderComponent.vue",
	"./misc/LoaderComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/misc/LoaderComponent.vue",
	"./misc/PaginationComponent": "./app/Modules/PaymentAgent/Resources/js/components/misc/PaginationComponent.vue",
	"./misc/PaginationComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/misc/PaginationComponent.vue",
	"./partials/AgentHeaderComponent": "./app/Modules/PaymentAgent/Resources/js/components/partials/AgentHeaderComponent.vue",
	"./partials/AgentHeaderComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/partials/AgentHeaderComponent.vue",
	"./partials/AgentNavComponent": "./app/Modules/PaymentAgent/Resources/js/components/partials/AgentNavComponent.vue",
	"./partials/AgentNavComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/partials/AgentNavComponent.vue",
	"./partials/AgentStatisticsComponent": "./app/Modules/PaymentAgent/Resources/js/components/partials/AgentStatisticsComponent.vue",
	"./partials/AgentStatisticsComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/partials/AgentStatisticsComponent.vue",
	"./partials/FooterComponent": "./app/Modules/PaymentAgent/Resources/js/components/partials/FooterComponent.vue",
	"./partials/FooterComponent.vue": "./app/Modules/PaymentAgent/Resources/js/components/partials/FooterComponent.vue"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app/Modules/PaymentAgent/Resources/js/components recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f93bef4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5f93bef4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f93bef4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f93bef4", Component.options)
  } else {
    hotAPI.reload("data-v-5f93bef4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-620c741c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-620c741c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-620c741c", Component.options)
  } else {
    hotAPI.reload("data-v-620c741c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fc550658\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fc550658\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc550658", Component.options)
  } else {
    hotAPI.reload("data-v-fc550658", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07b57845\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07b57845\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07b57845", Component.options)
  } else {
    hotAPI.reload("data-v-07b57845", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92d99e5a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92d99e5a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-92d99e5a", Component.options)
  } else {
    hotAPI.reload("data-v-92d99e5a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-decd438c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-decd438c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-decd438c", Component.options)
  } else {
    hotAPI.reload("data-v-decd438c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-293c9ec3\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-293c9ec3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-293c9ec3", Component.options)
  } else {
    hotAPI.reload("data-v-293c9ec3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7464e386\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7464e386\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7464e386", Component.options)
  } else {
    hotAPI.reload("data-v-7464e386", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49565b22\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49565b22\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49565b22"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49565b22", Component.options)
  } else {
    hotAPI.reload("data-v-49565b22", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c2b8010\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1c2b8010\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c2b8010", Component.options)
  } else {
    hotAPI.reload("data-v-1c2b8010", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fad8cf2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4fad8cf2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fad8cf2", Component.options)
  } else {
    hotAPI.reload("data-v-4fad8cf2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b4188716\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b4188716\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b4188716", Component.options)
  } else {
    hotAPI.reload("data-v-b4188716", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/PaymentAgent/Resources/js/components/misc/PaginationComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/misc/PaginationComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1627698e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/misc/PaginationComponent.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "app/Modules/PaymentAgent/Resources/js/components/misc/PaginationComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1627698e", Component.options)
  } else {
    hotAPI.reload("data-v-1627698e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_endpoints__ = __webpack_require__("./app/Modules/PaymentAgent/Resources/js/config/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_LoaderComponent__ = __webpack_require__("./app/Modules/PaymentAgent/Resources/js/components/misc/LoaderComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc_LoaderComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__misc_LoaderComponent__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FundUser',
  props: ['agent_details'],
  components: { pageLoading: __WEBPACK_IMPORTED_MODULE_1__misc_LoaderComponent___default.a },
  created: function created() {
    document.title = "View Transactions | Agent Dashboard";
    this.getTransactions();
  },
  data: function data() {
    return {
      loading: true,
      agent_transactions: null
    };
  },

  methods: {
    getTransactions: function getTransactions() {
      var _this = this;

      this.agent_transactions = JSON.parse(localStorage.getItem('agent_transactions'));
      if (!this.agent_transactions) {
        axios.get('' + __WEBPACK_IMPORTED_MODULE_0__config_endpoints__["a" /* default */].agentGetTransactions).then(function (rsp) {
          _this.agent_transactions = rsp.data;
          localStorage.setItem("agent_transactions", JSON.stringify(_this.agent_transactions));
          _this.loading = false;
        }, function (err) {
          swal('Error', '' + err, 'error');
        });
      } else {
        this.loading = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var list = [{
    id: 1,
    name: 'a',
    old: 18,
    email: 'ttquoccuong@gmail.com',
    status: 'deactived'
}, {
    id: 2,
    name: 'b',
    old: 20,
    email: 'ttquoccuong@gmail.com',
    status: 'actived'
}, {
    id: 3,
    name: 'c',
    old: 16,
    email: 'ttquoccuong@gmail.com',
    status: 'actived'
}, {
    id: 4,
    name: 'e',
    old: 18,
    email: 'ttquoccuong@gmail.com',
    status: 'created'
}, {
    id: 5,
    name: 'b',
    old: 18,
    email: 'ttquoccuong@gmail.com',
    status: 'deactived'
}, {
    id: 6,
    name: 'a',
    old: 18,
    email: 'ttquoccuong@gmail.com',
    status: 'actived'
}, {
    id: 7,
    name: 'g',
    old: 18,
    email: 'ttquoccuong@gmail.com',
    status: 'created'
}, {
    id: 8,
    name: 'd',
    old: 18,
    email: 'ttquoccuong@gmail.com',
    status: 'deactived'
}, {
    id: 9,
    name: 'p',
    old: 18,
    email: 'ttquoccuong@gmail.com',
    status: 'deactived'
}];



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('modal', {
    template: '#modal-template'
});
// import NewComponent from './NewComponent';


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            list: list,
            item: {},
            checkedList: [],
            filterToggle: false,
            filterByName: '',
            filterByStatus: [],
            sortById: false,
            sortByName: false,
            sortByOld: false,
            sortByStatus: false,
            sortByEmail: false,
            notification: false,
            showModal: false,
            modalType: 0,
            isFormValid: false
        };
    },

    computed: {
        listView: function listView() {
            var self = this;
            console.log(self.filterByName.length);
            if (self.filterByName.length > 0 || self.filterByStatus.length > 0) {
                return self.list.filter(function (item) {
                    return self.filterByName.indexOf(item.name) > -1 || self.filterByStatus.indexOf(item.status) > -1;
                });
            } else {
                return self.list;
            }
        },
        checkedAll: {
            get: function get() {
                var self = this;
                if (self.checkedList.length > 0) {
                    console.log(self.checkedList);
                    return self.listView.length == self.checkedList.length;
                } else {
                    return false;
                }
            },
            set: function set(val) {
                var self = this;
                self.checkedList = [];
                console.log(val);
                if (val) {
                    for (var i = 0; i < self.listView.length; i++) {
                        self.checkedList.push(self.listView[i].id);
                    }
                } else {
                    self.checkedList = [];
                }
            }
        }
    },
    watch: {
        sortById: function sortById(val) {
            var self = this;
            self.listView = self.sortBy(self.listView, 'id', val);
        },
        sortByName: function sortByName(val) {
            var self = this;
            self.listView = self.sortBy(self.listView, 'name', val);
        },
        sortByOld: function sortByOld(val) {
            var self = this;
            self.listView = self.sortBy(self.listView, 'old', val);
        },
        sortByEmail: function sortByEmail(val) {
            var self = this;
            self.listView = self.sortBy(self.listView, 'email', val);
        },
        sortByStatus: function sortByStatus(val) {
            var self = this;
            self.listView = self.sortBy(self.listView, 'status', val);
        }
    },
    methods: {
        sortBy: function sortBy(array, param, reverse) {
            var filterA, filterB;
            return array.sort(function (a, b) {
                switch (param) {
                    case 'id':
                        filterA = a.id;
                        filterB = b.id;
                        break;
                    case 'name':
                        filterA = a.name;
                        filterB = b.name;
                        break;
                    case 'old':
                        filterA = a.old;
                        filterB = b.old;
                        break;
                    case 'status':
                        filterA = a.status;
                        filterB = b.status;
                        break;
                }
                if (reverse) {
                    return filterA > filterB ? 1 : -1;
                } else {
                    return filterA < filterB ? 1 : -1;
                }
            });
        },
        checkEmailValid: function checkEmailValid(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        openModal: function openModal(item) {
            var self = this;
            if (item) {
                self.item = item;
                self.modalType = 2;
            } else {
                self.item = {
                    id: self.list[self.list.length - 1].id + 1,
                    name: null,
                    old: null,
                    email: null,
                    status: 'created'
                };
                self.modalType = 1;
            }
            self.showModal = true;
        },
        submit: function submit(item) {
            var self = this;
            if (item.id == null || item.name == null || item.old == null || item.email == null || !self.checkEmailValid(item.email)) {
                self.isFormValid = true;
            } else {
                if (self.modalType == 1) {
                    self.list.push(item);
                } else if (self.modalType == 2) {
                    self.list.find(function (value, index) {
                        if (value.id == item.id) {
                            self.list[index] = item;
                        }
                    });
                } else {
                    return;
                }
                self.item = {};
                self.showModal = false;
            }
        },
        deleting: function deleting(index) {
            var self = this;
            var confirmDelete = confirm("Are you sure to delete this?");
            if (confirmDelete) {
                self.list.splice(index, 1);
            }
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['details'],
	data: function data() {
		return {
			trans_details: {}
		};
	},
	created: function created() {},

	methods: {
		checkFields: function checkFields() {
			var _this = this;

			this.$validator.validate().then(function (result) {
				if (result) {
					_this.createTransaction();
				}
			});
		},
		createTransaction: function createTransaction() {
			var _this2 = this;

			swal({
				title: "Are you sure?",
				text: "Confirm transaction creation.",
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: {
						text: "Yes! Create transaction",
						value: true,
						visible: true,
						className: "",
						closeModal: false
					}
				}
				// dangerMode: true,
			}).then(function (willCreate) {
				if (willCreate) {
					_this2.trans_details.user_id = _this2.details.id;
					return axios.post('api/create-transaction', {
						details: _this2.trans_details
					});
				} else {
					swal("Transaction creation cancelled.", {
						icon: "info"
					});
					throw null;
				}
			}).then(function (results) {
				var status = results.data.status;

				if (!status) {
					return swal('Error', 'Something went wrong at the server. Transaction not created', 'error');
				} else {

					swal({
						title: "Success",
						text: 'Transaction created for user',
						icon: 'success'
					});
				}
				_this2.trans_details = {};
			}).catch(function (err) {
				console.log(err);
				if (err) {
					swal("Oh noes!", "The AJAX request failed!", "error");
				} else {
					swal.stopLoading();
					swal.close();
				}
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			details: {}
		};
	},
	created: function created() {},

	methods: {
		checkFields: function checkFields() {
			var _this = this;

			this.$validator.validate().then(function (result) {
				if (result) {
					_this.createUserAccount();
				}
			});
		},
		createUserAccount: function createUserAccount() {
			var _this2 = this;

			swal({
				title: "Are you sure?",
				text: "Details will be saved as you have entered them.",
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: {
						text: "Yes! Save details",
						value: true,
						visible: true,
						className: "",
						closeModal: false
					}
				}
			}).then(function (willEdit) {
				console.log(_this2.details);
				if (willEdit) {
					// delete this.details.acc_balance;
					_this2.details.name = _this2.details.acc_name;
					return axios.post('api/create-user', {
						details: _this2.details
					});
				} else {
					swal("Cancelled.", {
						icon: "info"
					});
					throw null;
				}
			}).then(function (results) {
				console.log(results.data);
				var status = results.data.status;

				if (!status) {
					return swal('Error', 'Something went wrong at the server. Details not saved', 'error');
				} else {
					_this2.details = {};
					swal({
						title: "Success",
						text: 'User details saved',
						icon: 'success'
					});
				}
			}).catch(function (err) {
				console.log(err);
				if (err) {
					swal("Oh noes!", "The AJAX request failed!", "error");
				} else {
					swal.stopLoading();
					swal.close();
				}
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	props: ['details'],
	data: function data() {
		return {
			// trans_details: {},
		};
	},
	created: function created() {},

	methods: {
		checkFields: function checkFields() {
			var _this = this;

			this.$validator.validate().then(function (result) {
				if (result) {
					_this.editUserAccount();
				}
			});
		},
		editUserAccount: function editUserAccount() {
			var _this2 = this;

			swal({
				title: "Are you sure?",
				text: "Details will be saved as you have entered them.",
				icon: "warning",
				buttons: {
					cancel: true,
					confirm: {
						text: "Yes! Save details",
						value: true,
						visible: true,
						className: "",
						closeModal: false
					}
				}
			}).then(function (willEdit) {
				console.log(_this2.details);
				if (willEdit) {
					delete _this2.details.acc_balance;
					return axios.post('api/edit-user', {
						details: _this2.details
					});
				} else {
					swal("Cancelled.", {
						icon: "info"
					});
					throw null;
				}
			}).then(function (results) {
				console.log(results.data);
				var status = results.data.status;

				if (!status) {
					return swal('Error', 'Something went wrong at the server. Details not saved', 'error');
				} else {
					swal({
						title: "Success",
						text: 'User details saved',
						icon: 'success'
					});
				}
			}).catch(function (err) {
				console.log(err);
				if (err) {
					swal("Oh noes!", "The AJAX request failed!", "error");
				} else {
					swal.stopLoading();
					swal.close();
				}
			});
		}
	}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    swal("Retrieving all messages....", {
      buttons: false
    });
    this.loading = true;
    axios.get('api/get-all-messages').then(function (rsp) {
      _this.messages = rsp.data;
      _this.loading = false;
      swal.stopLoading();
      swal.close();
    }, function (err) {
      _this.serverError(err);
    });
  },
  data: function data() {
    return {
      searchText: '',
      error: '',
      messages: {},
      loading: false
    };
  },

  computed: {},
  methods: {
    serverError: function serverError(msg) {
      swal("Error!", '' + msg, "error");
    },
    deleteMessge: function deleteMessge(message) {
      var _this2 = this;

      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this message!",
        icon: "warning",
        buttons: {
          cancel: true,
          confirm: {
            text: "Proceed",
            value: true,
            visible: true,
            className: "",
            closeModal: false
          }
        },
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          return axios.post('api/delete-message', { id: message.id });
        } else {
          swal("Cancelled.", {
            icon: "info"
          });
          throw null;
        }
      }).then(function (results) {
        var status = results.data.status;

        if (!status) {
          return swal('Error', 'Something went wrong at the server. Message not deleted', 'error');
        } else {

          var index = _this2.messages.indexOf(message);
          _this2.messages.splice(index, 1);

          swal({
            title: "Success",
            text: 'Messge deleted',
            icon: 'success'
          });
        }
      }).catch(function (err) {
        console.log(err);
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    swal("Retrieving all transactions....", {
      buttons: false
    });
    this.loading = true;
    axios.get('api/get-all-transactions').then(function (rsp) {
      _this.transactions = rsp.data;
      _this.loading = false;
      swal.stopLoading();
      swal.close();
    }, function (err) {
      _this.serverError(err);
    });
  },
  data: function data() {
    return {
      searchText: '',
      error: '',
      transactions: {},
      loading: false
    };
  },

  computed: {
    filteredTransactions: function filteredTransactions() {
      var self = this;
      if (this.searchText.length > 0) {
        return this.transactions.filter(function (item) {
          return self.searchText.indexOf(item.trans_type) > -1;
        });
      } else {
        return self.transactions;
      }
    }
  },
  methods: {
    serverError: function serverError(msg) {
      swal("Error!", '' + msg, "error");
    },
    deleteTransaction: function deleteTransaction(transaction) {
      var _this2 = this;

      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this transaction! <br> If you delete a CREDIT transaction, the amount WILL BE SUBTRACTED from the user's account balance. If you delete a DEBIT transaction, the amount WILL BE ADDED to the user's account balance.",
        icon: "warning",
        buttons: {
          cancel: true,
          confirm: {
            text: "Proceed",
            value: true,
            visible: true,
            className: "",
            closeModal: false
          }
        },
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          return axios.post('api/delete-transaction', { id: transaction.id });
        } else {
          swal("Cancelled.", {
            icon: "info"
          });
          throw null;
        }
      }).then(function (results) {
        var status = results.data.status;

        if (!status) {
          return swal('Error', 'Something went wrong at the server. Account not deleted', 'error');
        } else {

          var index = _this2.transactions.indexOf(transaction);
          _this2.transactions.splice(index, 1);

          swal({
            title: "Success",
            text: 'Transaction deleted',
            icon: 'success'
          });
        }
      }).catch(function (err) {
        console.log(err);
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    swal("Retrieving all transfer requests....", {
      buttons: false
    });
    this.loading = true;
    axios.get('api/get-all-transfer-requests').then(function (rsp) {
      _this.transfer_requests = rsp.data;
      _this.loading = false;
      swal.stopLoading();
      swal.close();
    }, function (err) {
      _this.serverError(err);
    });
  },
  data: function data() {
    return {
      searchText: '',
      error: '',
      transfer_requests: {},
      loading: false
    };
  },

  computed: {},
  methods: {
    serverError: function serverError(msg) {
      swal("Error!", '' + msg, "error");
    },
    deleteTransferRequest: function deleteTransferRequest(transfer_request) {
      var _this2 = this;

      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this transfer request!",
        icon: "warning",
        buttons: {
          cancel: true,
          confirm: {
            text: "Proceed",
            value: true,
            visible: true,
            className: "",
            closeModal: false
          }
        },
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          return axios.post('api/delete-transfer-request', { id: transfer_request.id });
        } else {
          swal("Cancelled.", {
            icon: "info"
          });
          throw null;
        }
      }).then(function (results) {
        var status = results.data.status;

        if (!status) {
          return swal('Error', 'Something went wrong at the server. Account not deleted', 'error');
        } else {

          var index = _this2.transfer_requests.indexOf(transfer_request);
          _this2.transfer_requests.splice(index, 1);

          swal({
            title: "Success",
            text: 'Transfer Request deleted',
            icon: 'success'
          });
        }
      }).catch(function (err) {
        console.log(err);
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getUserTransactions: function getUserTransactions() {
      var _this = this;

      swal("Retrieving transactions", {
        buttons: false
      });
      axios.get('api/get-user-transactions/' + this.details.id).then(function (results) {
        swal.stopLoading();
        swal.close();
        var dataToPass = {
          user_transactions: results.data,
          prev_details: _this.details
        };

        _this.$emit('switch-component', { data: dataToPass, comp: 'ViewTransactions' });
      }).catch(function (err) {
        console.log(err);
        if (err) {
          swal("Oh noes!", "The request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
    },
    getUserTransferRequests: function getUserTransferRequests() {
      var _this2 = this;

      swal("Retrieving transfer requests", {
        buttons: false
      });
      axios.get('api/get-user-transfer-requests/' + this.details.id).then(function (results) {
        console.log(results.data);
        swal.stopLoading();
        swal.close();
        var dataToPass = {
          user_transfer_requests: results.data,
          prev_details: _this2.details
        };

        _this2.$emit('switch-component', { data: dataToPass, comp: 'ViewTransferRequests' });
      }).catch(function (err) {
        console.log(err);
        if (err) {
          swal("Oh noes!", "The request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
    }
  },
  created: function created() {},

  props: ['details']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['details'],
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['details'],
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    var _this = this;

    swal("Retrieving all users....", {
      buttons: false
    });
    this.loading = true;
    axios.get('api/get-all-users').then(function (rsp) {
      _this.users = rsp.data;
      _this.loading = false;
      swal.stopLoading();
      swal.close();
    }, function (err) {
      _this.serverError(err);
    });
  },
  data: function data() {
    return {
      searchText: '',
      error: '',
      users: {},
      loading: false
    };
  },

  computed: {
    filteredTransactions: function filteredTransactions() {
      var self = this;
      if (this.searchText.length > 0) {
        return this.transactions.filter(function (item) {
          return self.searchText.indexOf(item.trans_type) > -1;
        });
      } else {
        return self.transactions;
      }
    }
  },
  methods: {
    serverError: function serverError(msg) {
      swal("Error!", '' + msg, "error");
    },
    deleteUser: function deleteUser(user) {
      var _this2 = this;

      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this user account!",
        icon: "warning",
        buttons: {
          cancel: true,
          confirm: {
            text: "Proceed",
            value: true,
            visible: true,
            className: "",
            closeModal: false
          }
        },
        dangerMode: true
      }).then(function (willDelete) {
        if (willDelete) {
          return axios.post('api/delete-user', { id: user.id });
        } else {
          swal("User account NOT deleted.", {
            icon: "success"
          });
          throw null;
        }
      }).then(function (results) {
        var status = results.data.status;

        if (!status) {
          return swal('Error', 'Something went wrong at the server. Account not deleted', 'error');
        } else {

          var index = _this2.users.indexOf(user);
          _this2.users.splice(index, 1);

          swal({
            title: "Success",
            text: 'User deleted',
            icon: 'success'
          });
        }
      }).catch(function (err) {
        console.log(err);
        if (err) {
          swal("Oh noes!", "The AJAX request failed!", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/PaymentAgent/Resources/js/components/misc/PaginationComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'pagination',
    props: ['pagination', 'offset'],
    methods: {
        isCurrentPage: function isCurrentPage(page) {
            return this.pagination.current_page == page;
        },
        changePage: function changePage() {
            if (page > this.pagination.last_page) {
                page = this.pagination.last_page;
            }
            this.pagination.current_page = page;
            this.$emit('paginate');
        }
    },
    computed: {
        pages: function pages() {
            var pages = [];

            var from = this.pagination.current_page - Math.floor(this.offset / 2);

            if (from < 1) {
                from = 1;
            }
            var to = from + this.offset - 1;

            if (to > this.pagination.last_page) {
                to = this.pagination.last_page;
            }

            while (from <= to) {
                pages.push(from);
                from++;
            }

            return pages;
        }
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07b57845\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd:last-child {\n\twhite-space: nowrap;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue"],"names":[],"mappings":";AA8PA;CACA,oBAAA;CACA","file":"SubCreateUser.vue","sourcesContent":["<template lang=\"html\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row \">\n\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\tCreate New User Account\n\t\t\t\t\t\t<a href=\"#\" @click=\"$emit('switch-component', {data:null, comp:'Users'})\" role=\"button\" class=\"btn btn-xs btn-danger pull-right\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<form @submit.prevent=\"checkFields()\">\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"acc_name\" class=\"col-md-3 control-label\">Name </label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter User's full name\" class=\"form-control\" id=\"acc_name\" name=\"acc_name\" v-model=\"details.acc_name\" v-validate=\"'required|max:30'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('acc_name')\">{{ errors.first('acc_name') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.acc_name && fields.acc_name.touched && !fields.acc_name.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"email\" class=\"col-md-3 control-label\">Email</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Email Address for the user\" class=\"form-control\" id=\"email\" name=\"email\" v-model=\"details.email\" v-validate=\"'required|email'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('email')\">{{ errors.first('email') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.email && fields.email.touched && !fields.email.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"password\" class=\"col-md-3 control-label\">Password</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Leave empty to maintain the old password\" class=\"form-control\" id=\"password\" name=\"password\" v-model=\"details.password\" v-validate=\"'max:15'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('password')\">{{ errors.first('password') }}</small>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"acc_num\" class=\"col-md-3 control-label\">Contract Number</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Account number for the user to login with\" class=\"form-control\" id=\"acc_num\" name=\"acc_num\" v-model=\"details.acc_num\" v-validate=\"'required'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('acc_num')\">{{ errors.first('acc_num') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.acc_num && fields.acc_num.touched && !fields.acc_num.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"acc_type\" class=\"col-md-3 control-label\">Account Type</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<select id=\"acc_type\" name=\"acc_type\" class=\"form-control\" v-model=\"details.acc_type\" v-validate=\"'required'\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Account Type</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"business\">Business</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"private\">Private</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div class=\"up\">\n\t\t\t\t\t\t\t\t\t\t<small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('acc_type')\">{{ errors.first('acc_type') }}</small>\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.acc_type && fields.acc_type.touched && !fields.acc_type.dirty\">Required Field</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"acc_status\" class=\"col-md-3 control-label\">Account Status</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<select id=\"acc_status\" name=\"acc_status\" class=\"form-control\" v-model=\"details.acc_status\" v-validate=\"'required'\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Account Status</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"dormant\">Dormant</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"active\">Active</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div class=\"up\">\n\t\t\t\t\t\t\t\t\t\t<small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('acc_status')\">{{ errors.first('acc_status') }}</small>\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.acc_status && fields.acc_status.touched && !fields.acc_status.dirty\">Required Field</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"cot_code_name\" class=\"col-md-3 control-label\">COT Code Name</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"The name of the code to show the user that he needs to provide\" class=\"form-control\" id=\"cot_code_name\" name=\"cot_code_name\" v-model=\"details.cot_code_name\" v-validate=\"'alpha_spaces'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('cot_code_name')\">{{ errors.first('cot_code_name') }}</small>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"cot_code\" class=\"col-md-3 control-label\">COT Code</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"The Code he has to enter to validate it\" class=\"form-control\" id=\"cot_code\" name=\"cot_code\" v-model=\"details.cot_code\" v-validate=\"'alpha_spaces'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('cot_code')\">{{ errors.first('cot_code') }}</small>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"cot_code_error_msg\" class=\"col-md-3 control-label\">Error Message</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"The error message to display after he has entered the correct cot code\" class=\"form-control\" id=\"cot_code_error_msg\" name=\"cot_code_error_msg\" v-model=\"details.cot_code_error_msg\" v-validate=\"'alpha_spaces|max:30'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('cot_code_error_msg')\">{{ errors.first('cot_code_error_msg') }}</small>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"transfer_permitted\" class=\"col-md-3 control-label\">Transfer Permitted</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<select id=\"transfer_permitted\" name=\"transfer_permitted\" class=\"form-control\" v-model=\"details.transfer_permitted\" v-validate=\"'required'\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Choose One</option>\n\t\t\t\t\t\t\t\t\t\t<option :value=\"true\">Permitted</option>\n\t\t\t\t\t\t\t\t\t\t<option :value=\"false\">Denied</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div class=\"up\">\n\t\t\t\t\t\t\t\t\t\t<small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('transfer_permitted')\">{{ errors.first('transfer_permitted') }}</small>\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.transfer_permitted && fields.transfer_permitted.touched && !fields.transfer_permitted.dirty\">Required Field</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"address\" class=\"col-md-3 control-label\">Address</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Address of the user\" class=\"form-control\" id=\"address\" name=\"address\" v-model=\"details.address\" v-validate=\"'required|max:50'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('address')\">{{ errors.first('address') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.address && fields.address.touched && !fields.address.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"nationality\" class=\"col-md-3 control-label\">Nationality</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Nationality\" class=\"form-control\" id=\"nationality\" name=\"nationality\" v-model=\"details.nationality\" v-validate=\"'required'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('nationality')\">{{ errors.first('nationality') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.nationality && fields.nationality.touched && !fields.nationality.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<fieldset><button type=\"submit\" class=\"btn btn-primary col-md-offset-5\">Save</button></fieldset>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-footer\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</template>\n\n<script>\n\texport default {\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\tdetails: {},\n\t\t\t}\n\t\t},\n\t\tcreated() {},\n\t\tmethods: {\n\t\t\tcheckFields() {\n\t\t\t\tthis.$validator.validate().then(result => {\n\t\t\t\t\tif (result) {\n\t\t\t\t\t\tthis.createUserAccount();\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t},\n\t\t\tcreateUserAccount() {\n\t\t\t\tswal({\n\t\t\t\t\t\ttitle: \"Are you sure?\",\n\t\t\t\t\t\ttext: \"Details will be saved as you have entered them.\",\n\t\t\t\t\t\ticon: \"warning\",\n\t\t\t\t\t\tbuttons: {\n\t\t\t\t\t\t\tcancel: true,\n\t\t\t\t\t\t\tconfirm: {\n\t\t\t\t\t\t\t\ttext: \"Yes! Save details\",\n\t\t\t\t\t\t\t\tvalue: true,\n\t\t\t\t\t\t\t\tvisible: true,\n\t\t\t\t\t\t\t\tclassName: \"\",\n\t\t\t\t\t\t\t\tcloseModal: false\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t})\n\t\t\t\t\t.then((willEdit) => {\n\t\t\t\t\t\tconsole.log(this.details);\n\t\t\t\t\t\tif (willEdit) {\n\t\t\t\t\t\t\t// delete this.details.acc_balance;\n\t\t\t\t\t\t\tthis.details.name = this.details.acc_name;\n\t\t\t\t\t\t\treturn axios.post('api/create-user', {\n\t\t\t\t\t\t\t\tdetails: this.details\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tswal(\"Cancelled.\", {\n\t\t\t\t\t\t\t\ticon: \"info\",\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tthrow null;\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t\t.then(results => {\n\t\t\t\t\t\tconsole.log(results.data);\n\t\t\t\t\t\tconst status = results.data.status;\n\n\t\t\t\t\t\tif (!status) {\n\t\t\t\t\t\t\treturn swal('Error', 'Something went wrong at the server. Details not saved', 'error');\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tthis.details={};\n\t\t\t\t\t\t\tswal({\n\t\t\t\t\t\t\t\ttitle: \"Success\",\n\t\t\t\t\t\t\t\ttext: 'User details saved',\n\t\t\t\t\t\t\t\ticon: 'success',\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t\t.catch(err => {\n\t\t\t\t\t\tconsole.log(err);\n\t\t\t\t\t\tif (err) {\n\t\t\t\t\t\t\tswal(\"Oh noes!\", \"The AJAX request failed!\", \"error\");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tswal.stopLoading();\n\t\t\t\t\t\t\tswal.close();\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t},\n\t\t}\n\t}\n</script>\n\n<style lang=\"css\">\n\ttd:last-child {\n\t\twhite-space: nowrap;\n\t}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c2b8010\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd:last-child{\n  white-space: nowrap;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue"],"names":[],"mappings":";AAiDA;EACA,oBAAA;CACA","file":"SubViewTransactions.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n           <!--    Hover Rows  -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                {{ details.prev_details.acc_name }}'s Transcations\n                <a href=\"#\" @click=\"$emit('switch-component', {data:details.prev_details, comp:'ViewDetails'})\" role=\"button\" class=\"btn btn-xs btn-danger pull-right\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-striped\">\n                  <thead>\n                    <tr class=\"default\">\n                      <th>Transaction Type</th>\n                      <th>Description</th>\n                      <th>Amount</th>\n                      <th>Date</th>\n                      <!-- <th>Status</th> -->\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr v-for=\"trans in details.user_transactions\" :class=\"{'text-danger text-uppercase': trans.trans_type == 'debit'}\" >\n                      <td>{{ trans.trans_type }}</td>\n                      <td>{{ trans.description |truncate(80) }}</td>\n                      <td> {{ trans.amount | currency }}</td>\n                      <td> {{ trans.trans_date }}</td>\n                      <!-- <td> {{ trans.status }}</td> -->\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</template>\n\n<script>\nexport default {\n  props: ['details'],\n  created(){}\n}\n</script>\n\n<style lang=\"css\">\n  td:last-child{\n    white-space: nowrap;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-293c9ec3\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd:nth-child(5){\n  white-space: nowrap;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue"],"names":[],"mappings":";AA8JA;EACA,oBAAA;CACA","file":"SubViewAllTransactions.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n           <!--    Hover Rows  -->\n\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Transaction Records\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-striped\">\n                  <thead>\n                    <tr class=\"default\">\n                      <th>User</th>\n                      <th>Transaction Type</th>\n                      <th>Description</th>\n                      <th>Amount</th>\n                      <th>Date</th>\n                      <th>Actions</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr colspan=\"6\" class=\"loading text-center text-danger\" v-if=\"loading\">\n                        Loading...\n                    </tr>\n                    <tr v-if=\"error\" class=\"error\">\n                        <td colspan=\"6\">{{ error }}</td>\n                    </tr>\n                    <tr v-if=\"transactions\" v-for=\"trans in transactions\" :key=\"trans.id\">\n                      <td>{{ trans.user.acc_name }}</td>\n                      <td>{{ trans.trans_type }}</td>\n                      <td>{{ trans.description |truncate(80) }}</td>\n                      <td> {{ trans.amount | currency }}</td>\n                      <td> {{ trans.trans_date }}</td>\n                      <td>\n                        <!-- <button class=\"btn btn-xs btn-info\" @click=\"$emit('switch-component', {data:trans, comp:'ViewDetails'})\">Details</button> -->\n                        <!-- <button class=\"btn btn-xs btn-primary\" @click=\"$emit('switch-component', {data:trans, comp:'NewTransaction'})\">Create Transaction</button> -->\n                        <button class=\"btn btn-xs btn-danger\" @click=\"deleteTransaction(trans)\">Delete</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</template>\n\n<script>\nexport default {\n  created() {\n    swal(\"Retrieving all transactions....\", {\n      buttons: false,\n    });\n    this.loading=true;\n      axios.get('api/get-all-transactions').then( rsp => {\n        this.transactions = rsp.data;\n        this.loading=false;\n        swal.stopLoading();\n        swal.close();\n      }, err => {\n        this.serverError(err);\n      });\n  },\n  data () {\n    return {\n      searchText: '',\n      error: '',\n      transactions: {},\n      loading: false\n    };\n  },\n  computed: {\n    filteredTransactions: function() {\n     var self = this;\n     if (this.searchText.length > 0) {\n       return this.transactions.filter(function(item) {\n         return self.searchText.indexOf(item.trans_type) > -1;\n       });\n     }\n     else {\n         return self.transactions;\n     }\n    },\n  },\n  methods: {\n   serverError(msg){\n     swal(\"Error!\", `${msg}`, \"error\");\n   },\n   deleteTransaction(transaction){\n     swal({\n       title: \"Are you sure?\",\n       text: \"Once deleted, you will not be able to recover this transaction! <br> If you delete a CREDIT transaction, the amount WILL BE SUBTRACTED from the user's account balance. If you delete a DEBIT transaction, the amount WILL BE ADDED to the user's account balance.\",\n       icon: \"warning\",\n       buttons: {\n          cancel: true,\n          confirm: {\n            text: \"Proceed\",\n            value: true,\n            visible: true,\n            className: \"\",\n            closeModal: false\n          }\n        },\n       dangerMode: true,\n     })\n     .then((willDelete) => {\n       if (willDelete) {\n         return axios.post('api/delete-transaction', {id: transaction.id});\n\n       } else {\n         swal(\"Cancelled.\", {\n           icon: \"info\",\n         });\n         throw null;\n       }\n     })\n     .then(results => {\n       const status = results.data.status;\n\n       if (!status) {\n         return swal('Error', 'Something went wrong at the server. Account not deleted', 'error');\n       }\n       else {\n\n         let index = this.transactions.indexOf(transaction);\n         this.transactions.splice(index, 1);\n\n\n         swal({\n           title: \"Success\",\n           text: 'Transaction deleted',\n           icon: 'success',\n         });\n       }\n\n\n     })\n     .catch(err => {\n       console.log(err);\n       if (err) {\n         swal(\"Oh noes!\", \"The AJAX request failed!\", \"error\");\n       } else {\n         swal.stopLoading();\n         swal.close();\n       }\n     });\n   },\n  }\n}\n</script>\n\n<style lang=\"css\">\n  td:nth-child(5){\n    white-space: nowrap;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49565b22\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd[data-v-49565b22]:first-child {\n  font-weight: bold;\n}\nh3 a[data-v-49565b22] {\n  color: white;\n  margin-right: 10px;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue"],"names":[],"mappings":";AAAA;EACE,kBAAkB;CAAE;AAEtB;EACE,aAAa;EACb,mBAAmB;CAAE","file":"SubViewDetails.vue","sourcesContent":["td:first-child {\n  font-weight: bold; }\n\nh3 a {\n  color: white;\n  margin-right: 10px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fad8cf2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd:last-child{\n  white-space: nowrap;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue"],"names":[],"mappings":";AAqDA;EACA,oBAAA;CACA","file":"SubViewTransferRequests.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n           <!--    Hover Rows  -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                {{ details.prev_details.acc_name }}'s Transfer Requests\n                <a href=\"#\" @click=\"$emit('switch-component', {data:details.prev_details, comp:'ViewDetails'})\" role=\"button\" class=\"btn btn-xs btn-danger pull-right\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-striped\">\n                  <thead>\n                    <tr class=\"default\">\n                      <tr class=\"default\">\n                        <th>Recipient</th>\n                        <th>Bank Name</th>\n                        <th>Amount</th>\n                        <th>Payment Type</th>\n                        <th>Country</th>\n                        <th>Status</th>\n                      </tr>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr v-for=\"trans in details.user_transfer_requests\" :class=\"{'text-danger text-uppercase': trans.status == 'error'}\" >\n                      <td> {{ trans.acc_name }}</td>\n                      <td> {{ trans.bank_name }}</td>\n                      <td> {{ trans.amount | currency }}</td>\n                      <td> {{ trans.payment_type }}</td>\n                      <td> {{ trans.country }}</td>\n                      <td> {{ trans.status }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</template>\n\n<script>\nexport default {\n  props: ['details'],\n  created(){}\n}\n</script>\n\n<style lang=\"css\">\n  td:last-child{\n    white-space: nowrap;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f93bef4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.ui.input[data-v-5f93bef4] {\n  width: 30%;\n  margin-bottom: 25px;\n}\n.ui.form[data-v-5f93bef4] {\n  text-align: center;\n}\n.ui .message[data-v-5f93bef4] {\n  max-width: 35%;\n  margin: 0 auto;\n}\nh1[data-v-5f93bef4] {\n  font-family: alegreya sans;\n  font-weight: 100;\n  margin-bottom: 0px;\n}\n.fade-enter-active[data-v-5f93bef4], .fade-leave-active[data-v-5f93bef4] {\n  -webkit-transition: opacity .5s;\n  transition: opacity .5s;\n}\n.fade-enter[data-v-5f93bef4], .fade-leave-to[data-v-5f93bef4] {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  opacity: 0;\n}\n.user-details[data-v-5f93bef4] {\n  text-align: left;\n  margin: 0 auto 25px !important;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue"],"names":[],"mappings":";AAAA;EACE,WAAW;EACX,oBAAoB;CAAE;AAExB;EACE,mBAAmB;CAAE;AAEvB;EACE,eAAe;EACf,eAAe;CAAE;AAEnB;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,mBAAmB;CAAE;AAEvB;EACE,gCAAwB;EAAxB,wBAAwB;CAAE;AAE5B;EACE,iEAAW;EAAX,WAAW;CAAE;AAEf;EACE,iBAAiB;EACjB,+BAA+B;CAAE","file":"AgentWalletFundingLogsComponent.vue","sourcesContent":[".ui.input {\n  width: 30%;\n  margin-bottom: 25px; }\n\n.ui.form {\n  text-align: center; }\n\n.ui .message {\n  max-width: 35%;\n  margin: 0 auto; }\n\nh1 {\n  font-family: alegreya sans;\n  font-weight: 100;\n  margin-bottom: 0px; }\n\n.fade-enter-active, .fade-leave-active {\n  transition: opacity .5s; }\n\n.fade-enter, .fade-leave-to {\n  opacity: 0; }\n\n.user-details {\n  text-align: left;\n  margin: 0 auto 25px !important; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-620c741c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* global */\n*,\n    *:before,\n    *:after {\n    \t-webkit-box-sizing: border-box;\n    \t        box-sizing: border-box;\n}\nbody {\n    \tfont: 400 14px/1.5 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    \tcolor: #333;\n}\nh1, h3, h4, h5, h6, figure, p {\n    \tmargin: 0;\n}\na,\n    a:hover,\n    a:focus {\n    \ttext-decoration: none;\n    \tcolor: #fff;\n}\nfigure img {\n    \twidth: 100%;\n    \tmax-width: 100%;\n}\niframe,\n    img {\n    \tvertical-align: top;\n}\n    /*overwrite bootstrap*/\n.btn:focus {\n    \toutline: none;\n}\n.has-success .input-group-addon {\n        color: #3c763d;\n        background-color: #dff0d8;\n        border-color: #3c763d;\n}\n.has-success .form-control {\n        border-color: #3c763d;\n        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n}\n\n    /*modal component style*/\n.modal-mask {\n      position: fixed;\n      z-index: 9998;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, .5);\n      display: table;\n      -webkit-transition: opacity .3s ease;\n      transition: opacity .3s ease;\n}\n.modal-enter {\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      opacity: 0;\n}\n.modal-leave-active {\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      opacity: 0;\n}\n#header {\n}\n#main {\n}\n#footer {\n}\n.filterbox {\n    \tdisplay: inline-block;\n    \tvertical-align: top;\n    \tzoom: 1; /* Fix for IE7 */\n    \t*display: inline; /* Fix for IE7 */\n}\n.filterbox .dropdown-menu {\n    \tpadding: 0;\n    \tleft: auto;\n    \tright: 0;\n}\n.search {\n    \tdisplay: inline-block;\n    \tvertical-align: top;\n    \tzoom: 1; /* Fix for IE7 */\n    \t*display: inline; /* Fix for IE7 */\n    \tmax-width: 260px;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue","/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0ZA,YAAA;AACA;;;KAGA,+BAAA;aAEA,uBAAA;CACA;AACA;KACA,0EAAA;KACA,YAAA;CACA;AACA;KACA,UAAA;CACA;AACA;;;KAGA,sBAAA;KACA,YAAA;CACA;AACA;KACA,YAAA;KACA,gBAAA;CACA;AACA;;KAEA,oBAAA;CACA;IACA,uBAAA;AACA;KACA,cAAA;CACA;AACA;QACA,eAAA;QACA,0BAAA;QACA,sBAAA;CACA;AACA;QACA,sBAAA;QACA,qDAAA;QACA,6CAAA;CACA;;IAEA,yBAAA;AACA;MACA,gBAAA;MACA,cAAA;MACA,OAAA;MACA,QAAA;MACA,YAAA;MACA,aAAA;MACA,oCAAA;MACA,eAAA;MACA,qCAAA;MAAA,6BAAA;CACA;AACA;MACA,iEAAA;MAAA,WAAA;CACA;AACA;MACA,iEAAA;MAAA,WAAA;CACA;AAEA;CAAA;AACA;CAAA;AACA;CAAA;AACA;KACA,sBAAA;KACA,oBAAA;KACA,QAAA,CAAA,iBAAA;MCKK,gBDJL,CAAA,iBAAA;CACA;AACA;KACA,WAAA;KACA,WAAA;KACA,SAAA;CACA;AACA;KACA,sBAAA;KACA,oBAAA;KACA,QAAA,CAAA,iBAAA;MCKK,gBDJL,CAAA,iBAAA;KACA,iBAAA;CACA","file":"DataTableComponent.vue","sourcesContent":["<template lang=\"html\">\n  <section>\n    <header id=\"header\">\n      <div class=\"container\">\n        <h2>Vuejs SSFCRUD - Search Sort Filter Create Read Update Delete</h2>\n      </div>\n    </header>\n    <main id=\"main\">\n      <div class=\"container\">\n        <div id=\"\">\n          <table class=\"table table-bordered table-hover table-striped\">\n            <caption>\n              <div class=\"text-right multiple-action\">\n                <button type=\"button\" class=\"btn btn-danger pull-left\" v-if=\"checkedList.length > 0\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n                <div class=\"search\">\n                  <div class=\"input-group\">\n                    <input type=\"search\" class=\"form-control\" placeholder=\"Search by Name\" v-model=\"filterByName\">\n                    <span class=\"input-group-addon\">\n                      <i class=\"glyphicon glyphicon-search\"></i>\n                    </span>\n                  </div>\n                </div>\n                <div class=\"dropdown filterbox\" :class=\"{ 'open': filterToggle }\">\n                  <button type=\"button\" class=\"btn btn-success\" v-on:click=\"filterToggle = !filterToggle\"><i class=\"glyphicon glyphicon-filter\"></i></button>\n                  <ul class=\"dropdown-menu list-group\">\n                    <li class=\"list-group-item\">\n                      <label>Filter by Status</label>\n                    </li>\n                    <li class=\"list-group-item\">\n                      <input type=\"checkbox\" value=\"actived\" v-model=\"filterByStatus\"> Actived\n                    </li>\n                    <li class=\"list-group-item\">\n                      <input type=\"checkbox\" value=\"deactived\" v-model=\"filterByStatus\"> Deactived\n                    </li>\n                    <li class=\"list-group-item\">\n                      <input type=\"checkbox\" value=\"created\" v-model=\"filterByStatus\"> Created\n                    </li>\n                  </ul>\n                </div>\n                <button type=\"button\" class=\"btn btn-primary\" v-on:click=\"openModal()\"><i class=\"glyphicon glyphicon-plus\"></i></button>\n              </div>\n              <div class=\"notifications\">\n                <p class=\"alert bg-success\" v-if=\"notification\"></p>\n                <p class=\"alert bg-warning\" v-if=\"checkedAll\">\n                  All <strong v-text=\"checkedList.length\"></strong> items checked\n                  <button type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                </p>\n              </div>\n            </caption>\n            <thead>\n              <tr class=\"bg-primary\">\n                <th width=\"30\" class=\"text-center\"><input type=\"checkbox\" v-model=\"checkedAll\"></th>\n                <th width=\"50\" v-on:click=\"sortById = !sortById\">ID <i class=\"pull-right glyphicon\" :class=\"[sortById?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']\"></i></th>\n                <th v-on:click=\"sortByName = !sortByName\">Name <i class=\"pull-right glyphicon\" :class=\"[sortByName?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']\"></i></th>\n                <th v-on:click=\"sortByOld = !sortByOld\">Old <i class=\"pull-right glyphicon\" :class=\"[sortByOld?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']\"></i></th>\n                <th v-on:click=\"sortByEmail = !sortByEmail\">Email <i class=\"pull-right glyphicon\" :class=\"[sortByEmail?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']\"></i></th>\n                <th v-on:click=\"sortByStatus = !sortByStatus\">Status <i class=\"pull-right glyphicon\" :class=\"[sortByStatus?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']\"></i></th>\n                <th width=\"100\" class=\"text-center\">Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr v-for=\"(item, index) in listView\" :class=\"{'warning':checkedList.includes(item.id)}\">\n                <td align=\"center\">\n                  <input type=\"checkbox\" :value=\"item.id\" v-model=\"checkedList\">\n                </td>\n                <td align=\"center\"><b>{{ item.id }}</b></td>\n                <td v-text=\"item.name\"></td>\n                <td v-text=\"item.old\"></td>\n                <td v-text=\"item.email\"></td>\n                <td v-text=\"item.status\"></td>\n                <td>\n                  <button type=\"button\" class=\"btn btn-warning\" v-on:click=\"openModal(item)\"><i class=\"glyphicon glyphicon-edit\"></i></button>\n                  <button type=\"button\" class=\"btn btn-danger\" v-on:click=\"deleting(index)\"><i class=\"glyphicon glyphicon-trash\"></i></button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <modal v-if=\"showModal\" v-on:close=\"showModal = false\">\n            <h3 slot=\"title\">{{ modalType==1?'Add':'Edit' }} Item</h3>\n            <div slot=\"body\" :class=\"{ 'has-error':isFormValid }\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\" :class=\"{ 'has-success':item.id!=null && isFormValid }\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"glyphicon glyphicon-ban-circle\"></i>\n                      </span>\n                      <input type=\"text\" class=\"form-control\" readonly disabled v-model=\"item.id\">\n                    </div>\n                    <span class=\"help-block\" v-if=\"item.id == null && isFormValid\">Id is invalid!</span>\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\" :class=\"{ 'has-success':item.status && isFormValid }\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\">\n                        <i class=\"glyphicon glyphicon-ban-circle\"></i>\n                      </span>\n                      <select class=\"form-control\" v-model=\"item.status\">\n                        <option value=\"created\">Created</option>\n                        <option value=\"actived\">Actived</option>\n                        <option value=\"deactived\">Deactived</option>\n                      </select>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\" :class=\"{ 'has-success':item.name!=null && isFormValid }\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-user\"></i>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Fullname\" v-model=\"item.name\">\n                </div>\n                <span class=\"help-block\" v-if=\"item.name == null && isFormValid\">Name is empty!</span>\n              </div>\n              <div class=\"form-group\" :class=\"{ 'has-success':item.old!=null && isFormValid }\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-time\"></i>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Old\" v-model=\"item.old\">\n                </div>\n                <span class=\"help-block\" v-if=\"item.old == null && isFormValid\">Old is empty!</span>\n              </div>\n              <div class=\"form-group\" :class=\"{ 'has-success':item.old!=null && isFormValid && checkEmailValid(item.email) }\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">\n                    <i class=\"glyphicon glyphicon-envelope\"></i>\n                  </span>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email Address\" v-model=\"item.email\">\n                </div>\n                <span class=\"help-block\" v-if=\"item.email == null && isFormValid\">Email is empty!</span>\n                <span class=\"help-block\" v-else-if=\"!checkEmailValid(item.email) && isFormValid\">Email is invalid!</span>\n              </div>\n              <button type=\"button\" class=\"btn btn-primary\" v-on:click=\"submit(item)\">Submit</button>\n            </div>\n            <!-- <div slot=\"footer\" class=\"text-center\"></div> -->\n          </modal>\n        </div>\n      </div>\n    </main>\n    <footer id=\"footer\">\n      <div class=\"container\">\n        <p class=\"text-right\">ttquoccuong@gmail.com</p>\n      </div>\n    </footer>\n\n    <!-- template for the modal component -->\n    <script type=\"text/x-template\" id=\"modal-template\">\n      <transition name=\"modal\">\n        <div class=\"modal-mask\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header bg-primary\">\n                <button type=\"button\" class=\"close\" v-on:click=\"$emit('close')\"><span aria-hidden=\"true\">&times;</span></button>\n                <slot name=\"title\">Modal Title</slot>\n              </div>\n              <div class=\"modal-body\">\n                <slot name=\"body\"></slot>\n              </div>\n              <div class=\"modal-footer\">\n                <slot name=\"footer\"></slot>\n              </div>\n            </div>\n          </div>\n        </div>\n      </transition>\n    </script>\n  </section>\n</template>\n\n<script>\nvar list = [{\n        id: 1,\n        name: 'a',\n        old: 18,\n        email: 'ttquoccuong@gmail.com',\n        status: 'deactived'\n    },\n    {\n        id: 2,\n        name: 'b',\n        old: 20,\n        email: 'ttquoccuong@gmail.com',\n        status: 'actived'\n    },\n    {\n        id: 3,\n        name: 'c',\n        old: 16,\n        email: 'ttquoccuong@gmail.com',\n        status: 'actived'\n    },\n    {\n        id: 4,\n        name: 'e',\n        old: 18,\n        email: 'ttquoccuong@gmail.com',\n        status: 'created'\n    },\n    {\n        id: 5,\n        name: 'b',\n        old: 18,\n        email: 'ttquoccuong@gmail.com',\n        status: 'deactived'\n    },\n    {\n        id: 6,\n        name: 'a',\n        old: 18,\n        email: 'ttquoccuong@gmail.com',\n        status: 'actived'\n    },\n    {\n        id: 7,\n        name: 'g',\n        old: 18,\n        email: 'ttquoccuong@gmail.com',\n        status: 'created'\n    },\n    {\n        id: 8,\n        name: 'd',\n        old: 18,\n        email: 'ttquoccuong@gmail.com',\n        status: 'deactived'\n    },\n    {\n        id: 9,\n        name: 'p',\n        old: 18,\n        email: 'ttquoccuong@gmail.com',\n        status: 'deactived'\n    }\n];\n\nimport Vue from 'vue';\n\nVue.component('modal', {\n    template: '#modal-template'\n});\n// import NewComponent from './NewComponent';\n\n\nexport default {\n    data() {\n        return {\n            list: list,\n            item: {},\n            checkedList: [],\n            filterToggle: false,\n            filterByName: '',\n            filterByStatus: [],\n            sortById: false,\n            sortByName: false,\n            sortByOld: false,\n            sortByStatus: false,\n            sortByEmail: false,\n            notification: false,\n            showModal: false,\n            modalType: 0,\n            isFormValid: false\n        }\n    },\n    computed: {\n        listView: function() {\n            var self = this;\n            console.log(self.filterByName.length);\n            if (self.filterByName.length > 0 || self.filterByStatus.length > 0) {\n                return self.list.filter(function(item) {\n                    return self.filterByName.indexOf(item.name) > -1 || self.filterByStatus.indexOf(item.status) > -1;\n                });\n            } else {\n                return self.list;\n            }\n        },\n        checkedAll: {\n            get: function() {\n                var self = this;\n                if (self.checkedList.length > 0) {\n                  console.log(self.checkedList);\n                    return self.listView.length == self.checkedList.length;\n                } else {\n                    return false;\n                }\n            },\n            set: function(val) {\n                var self = this;\n                self.checkedList = [];\n                console.log(val);\n                if (val) {\n                    for (var i = 0; i < self.listView.length; i++) {\n                        self.checkedList.push(self.listView[i].id);\n                    }\n                } else {\n                    self.checkedList = [];\n                }\n            }\n        }\n    },\n    watch: {\n        sortById: function(val) {\n            var self = this;\n            self.listView = self.sortBy(self.listView, 'id', val);\n        },\n        sortByName: function(val) {\n            var self = this;\n            self.listView = self.sortBy(self.listView, 'name', val);\n        },\n        sortByOld: function(val) {\n            var self = this;\n            self.listView = self.sortBy(self.listView, 'old', val);\n        },\n        sortByEmail: function(val) {\n            var self = this;\n            self.listView = self.sortBy(self.listView, 'email', val);\n        },\n        sortByStatus: function(val) {\n            var self = this;\n            self.listView = self.sortBy(self.listView, 'status', val);\n        }\n    },\n    methods: {\n        sortBy: function(array, param, reverse) {\n            var filterA, filterB;\n            return array.sort(function(a, b) {\n                switch (param) {\n                    case 'id':\n                        filterA = a.id;\n                        filterB = b.id;\n                        break;\n                    case 'name':\n                        filterA = a.name;\n                        filterB = b.name;\n                        break;\n                    case 'old':\n                        filterA = a.old;\n                        filterB = b.old;\n                        break;\n                    case 'status':\n                        filterA = a.status;\n                        filterB = b.status;\n                        break;\n                }\n                if (reverse) {\n                    return (filterA > filterB) ? 1 : -1;\n                } else {\n                    return (filterA < filterB) ? 1 : -1;\n                }\n            });\n        },\n        checkEmailValid: function(email) {\n            var re = /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n            return re.test(email);\n        },\n        openModal: function(item) {\n            var self = this;\n            if (item) {\n                self.item = item;\n                self.modalType = 2;\n            } else {\n                self.item = {\n                    id: self.list[self.list.length - 1].id + 1,\n                    name: null,\n                    old: null,\n                    email: null,\n                    status: 'created'\n                };\n                self.modalType = 1;\n            }\n            self.showModal = true;\n        },\n        submit: function(item) {\n            var self = this;\n            if (item.id == null ||\n                item.name == null ||\n                item.old == null ||\n                item.email == null ||\n                !self.checkEmailValid(item.email)) {\n                self.isFormValid = true;\n            } else {\n                if (self.modalType == 1) {\n                    self.list.push(item);\n                } else if (self.modalType == 2) {\n                    self.list.find(function(value, index) {\n                        if (value.id == item.id) {\n                            self.list[index] = item;\n                        }\n                    });\n                } else {\n                    return;\n                }\n                self.item = {};\n                self.showModal = false;\n            }\n        },\n        deleting: function(index) {\n            var self = this;\n            var confirmDelete = confirm(\"Are you sure to delete this?\");\n            if (confirmDelete) {\n                self.list.splice(index, 1);\n            }\n        }\n    }\n}\n</script>\n\n<style lang=\"css\">\n  /* global */\n      *,\n      *:before,\n      *:after {\n      \t-webkit-box-sizing: border-box;\n      \t   -moz-box-sizing: border-box;\n      \t        box-sizing: border-box;\n      }\n      body {\n      \tfont: 400 14px/1.5 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n      \tcolor: #333;\n      }\n      h1, h3, h4, h5, h6, figure, p {\n      \tmargin: 0;\n      }\n      a,\n      a:hover,\n      a:focus {\n      \ttext-decoration: none;\n      \tcolor: #fff;\n      }\n      figure img {\n      \twidth: 100%;\n      \tmax-width: 100%;\n      }\n      iframe,\n      img {\n      \tvertical-align: top;\n      }\n      /*overwrite bootstrap*/\n      .btn:focus {\n      \toutline: none;\n      }\n      .has-success .input-group-addon {\n          color: #3c763d;\n          background-color: #dff0d8;\n          border-color: #3c763d;\n      }\n      .has-success .form-control {\n          border-color: #3c763d;\n          -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n      }\n\n      /*modal component style*/\n      .modal-mask {\n        position: fixed;\n        z-index: 9998;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, .5);\n        display: table;\n        transition: opacity .3s ease;\n      }\n      .modal-enter {\n        opacity: 0;\n      }\n      .modal-leave-active {\n        opacity: 0;\n      }\n\n      #header {}\n      #main {}\n      #footer {}\n      .filterbox {\n      \tdisplay: inline-block;\n      \tvertical-align: top;\n      \tzoom: 1; /* Fix for IE7 */\n      \t*display: inline; /* Fix for IE7 */\n      }\n      .filterbox .dropdown-menu {\n      \tpadding: 0;\n      \tleft: auto;\n      \tright: 0;\n      }\n      .search {\n      \tdisplay: inline-block;\n      \tvertical-align: top;\n      \tzoom: 1; /* Fix for IE7 */\n      \t*display: inline; /* Fix for IE7 */\n      \tmax-width: 260px;\n      }\n</style>\n","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* global */\n*,\n    *:before,\n    *:after {\n    \t-webkit-box-sizing: border-box;\n    \t        box-sizing: border-box;\n}\nbody {\n    \tfont: 400 14px/1.5 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    \tcolor: #333;\n}\nh1, h3, h4, h5, h6, figure, p {\n    \tmargin: 0;\n}\na,\n    a:hover,\n    a:focus {\n    \ttext-decoration: none;\n    \tcolor: #fff;\n}\nfigure img {\n    \twidth: 100%;\n    \tmax-width: 100%;\n}\niframe,\n    img {\n    \tvertical-align: top;\n}\n    /*overwrite bootstrap*/\n.btn:focus {\n    \toutline: none;\n}\n.has-success .input-group-addon {\n        color: #3c763d;\n        background-color: #dff0d8;\n        border-color: #3c763d;\n}\n.has-success .form-control {\n        border-color: #3c763d;\n        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n}\n\n    /*modal component style*/\n.modal-mask {\n      position: fixed;\n      z-index: 9998;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: rgba(0, 0, 0, .5);\n      display: table;\n      -webkit-transition: opacity .3s ease;\n      transition: opacity .3s ease;\n}\n.modal-enter {\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      opacity: 0;\n}\n.modal-leave-active {\n      -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n      opacity: 0;\n}\n#header {\n}\n#main {\n}\n#footer {\n}\n.filterbox {\n    \tdisplay: inline-block;\n    \tvertical-align: top;\n    \tzoom: 1; /* Fix for IE7 */\n    \t*display: inline; /* Fix for IE7 */\n}\n.filterbox .dropdown-menu {\n    \tpadding: 0;\n    \tleft: auto;\n    \tright: 0;\n}\n.search {\n    \tdisplay: inline-block;\n    \tvertical-align: top;\n    \tzoom: 1; /* Fix for IE7 */\n    \t*display: inline; /* Fix for IE7 */\n    \tmax-width: 260px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7464e386\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd:nth-child(5){\n  white-space: nowrap;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue"],"names":[],"mappings":";AAkJA;EACA,oBAAA;CACA","file":"SubViewAllTransferRequests.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Transaction Records\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-striped\">\n                  <thead>\n                    <tr class=\"default\">\n                      <th>User</th>\n                      <th>Recipient</th>\n                      <th>Bank Name</th>\n                      <th>Amount</th>\n                      <th>Payment Type</th>\n                      <th>Country</th>\n                      <th>Status</th>\n                      <th>Actions</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr colspan=\"6\" class=\"loading text-center text-danger\" v-if=\"loading\">\n                        Loading...\n                    </tr>\n                    <tr v-if=\"error\" class=\"error\">\n                        <td colspan=\"6\">{{ error }}</td>\n                    </tr>\n                    <tr v-if=\"transfer_requests\" v-for=\"trans in transfer_requests\" :key=\"trans.id\">\n                      <td>{{ trans.user.acc_name }}</td>\n                      <td> {{ trans.acc_name }}</td>\n                      <td> {{ trans.bank_name }}</td>\n                      <td> {{ trans.amount | currency }}</td>\n                      <td> {{ trans.payment_type }}</td>\n                      <td> {{ trans.country }}</td>\n                      <td> {{ trans.status }}</td>\n                      <td>\n                        <button class=\"btn btn-xs btn-danger\" @click=\"deleteTransferRequest(trans)\">Delete</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</template>\n\n<script>\nexport default {\n  created() {\n    swal(\"Retrieving all transfer requests....\", {\n      buttons: false,\n    });\n    this.loading=true;\n      axios.get('api/get-all-transfer-requests').then( rsp => {\n        this.transfer_requests = rsp.data;\n        this.loading=false;\n        swal.stopLoading();\n        swal.close();\n      }, err => {\n        this.serverError(err);\n      });\n  },\n  data () {\n    return {\n      searchText: '',\n      error: '',\n      transfer_requests: {},\n      loading: false\n    };\n  },\n  computed: {},\n  methods: {\n   serverError(msg){\n     swal(\"Error!\", `${msg}`, \"error\");\n   },\n   deleteTransferRequest(transfer_request){\n     swal({\n       title: \"Are you sure?\",\n       text: \"Once deleted, you will not be able to recover this transfer request!\",\n       icon: \"warning\",\n       buttons: {\n          cancel: true,\n          confirm: {\n            text: \"Proceed\",\n            value: true,\n            visible: true,\n            className: \"\",\n            closeModal: false\n          }\n        },\n       dangerMode: true,\n     })\n     .then((willDelete) => {\n       if (willDelete) {\n         return axios.post('api/delete-transfer-request', {id: transfer_request.id});\n\n       } else {\n         swal(\"Cancelled.\", {\n           icon: \"info\",\n         });\n         throw null;\n       }\n     })\n     .then(results => {\n       const status = results.data.status;\n\n       if (!status) {\n         return swal('Error', 'Something went wrong at the server. Account not deleted', 'error');\n       }\n       else {\n\n         let index = this.transfer_requests.indexOf(transfer_request);\n         this.transfer_requests.splice(index, 1);\n\n\n         swal({\n           title: \"Success\",\n           text: 'Transfer Request deleted',\n           icon: 'success',\n         });\n       }\n\n\n     })\n     .catch(err => {\n       console.log(err);\n       if (err) {\n         swal(\"Oh noes!\", \"The AJAX request failed!\", \"error\");\n       } else {\n         swal.stopLoading();\n         swal.close();\n       }\n     });\n   },\n  }\n}\n</script>\n\n<style lang=\"css\">\n  td:nth-child(5){\n    white-space: nowrap;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92d99e5a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd:last-child {\n\twhite-space: nowrap;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue"],"names":[],"mappings":";AA6PA;CACA,oBAAA;CACA","file":"SubEditUser.vue","sourcesContent":["<template lang=\"html\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row \">\n\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading enter-1\">\n\t\t\t\t\t\tEdit User Details\n\t\t\t\t\t\t<a href=\"#\" @click=\"$emit('switch-component', {data:details, comp:'ViewDetails'})\" role=\"button\" class=\"btn btn-xs btn-danger pull-right\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body enter-2\">\n\t\t\t\t\t\t<form @submit.prevent=\"checkFields()\">\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"acc_name\" class=\"col-md-3 control-label\">Name </label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter User's full name\" class=\"form-control\" id=\"acc_name\" name=\"acc_name\" v-model=\"details.acc_name\" v-validate=\"'required|max:30'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('acc_name')\">{{ errors.first('acc_name') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.acc_name && fields.acc_name.touched && !fields.acc_name.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"email\" class=\"col-md-3 control-label\">Email</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Email Address for the user\" class=\"form-control\" id=\"email\" name=\"email\" v-model=\"details.email\" v-validate=\"'required|email'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('email')\">{{ errors.first('email') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.email && fields.email.touched && !fields.email.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"password\" class=\"col-md-3 control-label\">Password</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Leave empty to maintain the old password\" class=\"form-control\" id=\"password\" name=\"password\" v-model=\"details.password\" v-validate=\"'alpha_dash'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('password')\">{{ errors.first('password') }}</small>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"acc_num\" class=\"col-md-3 control-label\">Contract Number</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Account number for the user to login with\" class=\"form-control\" id=\"acc_num\" name=\"acc_num\" v-model=\"details.acc_num\" v-validate=\"'required'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('acc_num')\">{{ errors.first('acc_num') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.acc_num && fields.acc_num.touched && !fields.acc_num.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"acc_type\" class=\"col-md-3 control-label\">Account Type</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<select id=\"acc_type\" name=\"acc_type\" class=\"form-control\" v-model=\"details.acc_type\" v-validate=\"'required'\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Account Type</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"business\">Business</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"private\">Private</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div class=\"up\">\n\t\t\t\t\t\t\t\t\t\t<small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('acc_type')\">{{ errors.first('acc_type') }}</small>\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.acc_type && fields.acc_type.touched && !fields.acc_type.dirty\">Required Field</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"acc_status\" class=\"col-md-3 control-label\">Account Status</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<select id=\"acc_status\" name=\"acc_status\" class=\"form-control\" v-model=\"details.acc_status\" v-validate=\"'required'\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Account Status</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"dormant\">Dormant</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"active\">Active</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div class=\"up\">\n\t\t\t\t\t\t\t\t\t\t<small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('acc_status')\">{{ errors.first('acc_status') }}</small>\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.acc_status && fields.acc_status.touched && !fields.acc_status.dirty\">Required Field</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"cot_code_name\" class=\"col-md-3 control-label\">COT Code Name</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"The name of the code to show the user that he needs to provide\" class=\"form-control\" id=\"cot_code_name\" name=\"cot_code_name\" v-model=\"details.cot_code_name\" v-validate=\"'alpha_spaces'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('cot_code_name')\">{{ errors.first('cot_code_name') }}</small>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"cot_code\" class=\"col-md-3 control-label\">COT Code</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"The Code he has to enter to validate it\" class=\"form-control\" id=\"cot_code\" name=\"cot_code\" v-model=\"details.cot_code\" v-validate=\"'alpha_spaces'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('cot_code')\">{{ errors.first('cot_code') }}</small>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"cot_code_error_msg\" class=\"col-md-3 control-label\">Error Message</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"The error message to display after he has entered the correct cot code\" class=\"form-control\" id=\"cot_code_error_msg\" name=\"cot_code_error_msg\" v-model=\"details.cot_code_error_msg\" v-validate=\"'alpha_spaces|max:30'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('cot_code_error_msg')\">{{ errors.first('cot_code_error_msg') }}</small>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"transfer_permitted\" class=\"col-md-3 control-label\">Transfer Permitted</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<select id=\"transfer_permitted\" name=\"transfer_permitted\" class=\"form-control\" v-model=\"details.transfer_permitted\" v-validate=\"'required'\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Choose One</option>\n\t\t\t\t\t\t\t\t\t\t<option :value=\"true\">Permitted</option>\n\t\t\t\t\t\t\t\t\t\t<option :value=\"false\">Denied</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t<div class=\"up\">\n\t\t\t\t\t\t\t\t\t\t<small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('transfer_permitted')\">{{ errors.first('transfer_permitted') }}</small>\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.transfer_permitted && fields.transfer_permitted.touched && !fields.transfer_permitted.dirty\">Required Field</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"address\" class=\"col-md-3 control-label\">Address</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Address of the user\" class=\"form-control\" id=\"address\" name=\"address\" v-model=\"details.address\" v-validate=\"'required|max:50'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('address')\">{{ errors.first('address') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.address && fields.address.touched && !fields.address.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"nationality\" class=\"col-md-3 control-label\">Nationality</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Nationality\" class=\"form-control\" id=\"nationality\" name=\"nationality\" v-model=\"details.nationality\" v-validate=\"'required'\">\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('nationality')\">{{ errors.first('nationality') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.nationality && fields.nationality.touched && !fields.nationality.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<fieldset><button type=\"submit\" class=\"btn btn-primary col-md-offset-5\">Save</button></fieldset>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-footer\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</template>\n\n<script>\n\texport default {\n\t\tprops: ['details'],\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\t// trans_details: {},\n\t\t\t}\n\t\t},\n\t\tcreated() {},\n\t\tmethods: {\n\t\t\tcheckFields() {\n\t\t\t\tthis.$validator.validate().then(result => {\n\t\t\t\t\tif (result) {\n\t\t\t\t\t\tthis.editUserAccount();\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t},\n\t\t\teditUserAccount() {\n\t\t\t\tswal({\n\t\t\t\t\t\ttitle: \"Are you sure?\",\n\t\t\t\t\t\ttext: \"Details will be saved as you have entered them.\",\n\t\t\t\t\t\ticon: \"warning\",\n\t\t\t\t\t\tbuttons: {\n\t\t\t\t\t\t\tcancel: true,\n\t\t\t\t\t\t\tconfirm: {\n\t\t\t\t\t\t\t\ttext: \"Yes! Save details\",\n\t\t\t\t\t\t\t\tvalue: true,\n\t\t\t\t\t\t\t\tvisible: true,\n\t\t\t\t\t\t\t\tclassName: \"\",\n\t\t\t\t\t\t\t\tcloseModal: false\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t})\n\t\t\t\t\t.then((willEdit) => {\n\t\t\t\t\t\tconsole.log(this.details);\n\t\t\t\t\t\tif (willEdit) {\n\t\t\t\t\t\t\tdelete this.details.acc_balance;\n\t\t\t\t\t\t\treturn axios.post('api/edit-user', {\n\t\t\t\t\t\t\t\tdetails: this.details\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tswal(\"Cancelled.\", {\n\t\t\t\t\t\t\t\ticon: \"info\",\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tthrow null;\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t\t.then(results => {\n\t\t\t\t\t\tconsole.log(results.data);\n\t\t\t\t\t\tconst status = results.data.status;\n\n\t\t\t\t\t\tif (!status) {\n\t\t\t\t\t\t\treturn swal('Error', 'Something went wrong at the server. Details not saved', 'error');\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tswal({\n\t\t\t\t\t\t\t\ttitle: \"Success\",\n\t\t\t\t\t\t\t\ttext: 'User details saved',\n\t\t\t\t\t\t\t\ticon: 'success',\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t\t.catch(err => {\n\t\t\t\t\t\tconsole.log(err);\n\t\t\t\t\t\tif (err) {\n\t\t\t\t\t\t\tswal(\"Oh noes!\", \"The AJAX request failed!\", \"error\");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tswal.stopLoading();\n\t\t\t\t\t\t\tswal.close();\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t},\n\t\t}\n\t}\n</script>\n\n<style lang=\"css\">\n\ttd:last-child {\n\t\twhite-space: nowrap;\n\t}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b4188716\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd:last-child{\n  white-space: nowrap;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue"],"names":[],"mappings":";AAiKA;EACA,oBAAA;CACA","file":"SubViewUsers.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n           <!--    Hover Rows  -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                User Records\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                <button type=\"button\" class=\"btn btn-success\" @click=\"$emit('switch-component', {data:null, comp:'CreateUser'})\">Create New User Account</button>\n                <input type=\"text\"class=\"pull-right col-md-4\" placeholder=\"Enter a search parameter\" v-model=\"searchText\">\n                <table class=\"table table-hover table-striped\">\n                  <thead>\n                    <tr class=\"default\">\n                      <th>Name</th>\n                      <th>Email</th>\n                      <th>Acc Balance</th>\n                      <th>Acc Status</th>\n                      <th>COT Code</th>\n                      <th>Transfer Permitted</th>\n                      <th>Actions</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr colspan=\"6\" class=\"loading text-center text-danger\" v-if=\"loading\">\n                        Loading...\n                    </tr>\n                    <tr v-if=\"error\" class=\"error\">\n                        <td colspan=\"6\">{{ error }}</td>\n                    </tr>\n                    <tr v-if=\"users\" v-for=\"user in users\" :key=\"user.id\">\n                      <td>{{ user.acc_name }}</td>\n                      <td>{{ user.email }}</td>\n                      <td>{{ user.acc_balance | currency }}</td>\n                      <td> {{ user.acc_status }}</td>\n                      <td> {{ user.cot_code }}</td>\n                      <td> {{ user.transder_permitted ? 'Yes' : 'No' }}</td>\n                      <td>\n                        <button class=\"btn btn-xs btn-info\" @click=\"$emit('switch-component', {data:user, comp:'ViewDetails'})\">Details</button>\n                        <!-- <button class=\"btn btn-xs btn-primary\" @click=\"$emit('switch-component', {data:user, comp:'NewTransaction'})\">Create Transaction</button> -->\n                        <button class=\"btn btn-xs btn-danger\" @click=\"deleteUser(user)\">Delete</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</template>\n\n<script>\nexport default {\n  created() {\n    swal(\"Retrieving all users....\", {\n      buttons: false,\n    });\n    this.loading=true;\n      axios.get('api/get-all-users').then( rsp => {\n        this.users = rsp.data;\n        this.loading=false;\n        swal.stopLoading();\n        swal.close();\n      }, err => {\n        this.serverError(err);\n      });\n  },\n  data () {\n    return {\n      searchText: '',\n      error: '',\n      users: {},\n      loading: false\n    };\n  },\n  computed: {\n    filteredTransactions: function() {\n     var self = this;\n     if (this.searchText.length > 0) {\n       return this.transactions.filter(function(item) {\n         return self.searchText.indexOf(item.trans_type) > -1;\n       });\n     }\n     else {\n         return self.transactions;\n     }\n    },\n  },\n  methods: {\n   serverError(msg){\n     swal(\"Error!\", `${msg}`, \"error\");\n   },\n   deleteUser(user){\n     swal({\n       title: \"Are you sure?\",\n       text: \"Once deleted, you will not be able to recover this user account!\",\n       icon: \"warning\",\n       buttons: {\n          cancel: true,\n          confirm: {\n            text: \"Proceed\",\n            value: true,\n            visible: true,\n            className: \"\",\n            closeModal: false\n          }\n        },\n       dangerMode: true,\n     })\n     .then((willDelete) => {\n       if (willDelete) {\n         return axios.post('api/delete-user', {id: user.id});\n\n       } else {\n         swal(\"User account NOT deleted.\", {\n           icon: \"success\",\n         });\n         throw null;\n       }\n     })\n     .then(results => {\n       const status = results.data.status;\n\n       if (!status) {\n         return swal('Error', 'Something went wrong at the server. Account not deleted', 'error');\n       }\n       else {\n\n         let index = this.users.indexOf(user);\n         this.users.splice(index, 1);\n\n\n         swal({\n           title: \"Success\",\n           text: 'User deleted',\n           icon: 'success',\n         });\n       }\n\n\n     })\n     .catch(err => {\n       console.log(err);\n       if (err) {\n         swal(\"Oh noes!\", \"The AJAX request failed!\", \"error\");\n       } else {\n         swal.stopLoading();\n         swal.close();\n       }\n     });\n   },\n  }\n}\n</script>\n\n<style lang=\"css\">\n  td:last-child{\n    white-space: nowrap;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-decd438c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd:nth-child(6){\n  white-space: nowrap;\n}\ntd:nth-child(5){\n  white-space: normal !important;\n}\n\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue"],"names":[],"mappings":";AAiJA;EACA,oBAAA;CACA;AACA;EACA,+BAAA;CACA","file":"SubViewAllMessages.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n           <!--    Hover Rows  -->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Messge Records\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"table-responsive\">\n                <table class=\"table table-hover table-striped\">\n                  <thead>\n                    <tr class=\"default\">\n                      <th>Sender Name</th>\n                      <th>Sender Email</th>\n                      <th>Sender Phone</th>\n                      <th>Subject</th>\n                      <th>Message</th>\n                      <th>Date</th>\n                      <th>Actions</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr colspan=\"6\" class=\"loading text-center text-danger\" v-if=\"loading\">\n                        Loading...\n                    </tr>\n                    <tr v-if=\"error\" class=\"error\">\n                        <td colspan=\"6\">{{ error }}</td>\n                    </tr>\n                    <tr v-if=\"messages\" v-for=\"msg in messages\" :key=\"msg.id\">\n                      <td>{{ msg.sender_name }}</td>\n                      <td>{{ msg.sender_email }}</td>\n                      <td>{{ msg.sender_phone |truncate(80) }}</td>\n                      <td> {{ msg.subject }}</td>\n                      <td> {{ msg.message }}</td>\n                      <td> {{ msg.created_at }}</td>\n                      <td>\n                        <button class=\"btn btn-xs btn-danger\" @click=\"deleteMessge(msg)\">Delete</button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</template>\n\n<script>\nexport default {\n  created() {\n    swal(\"Retrieving all messages....\", {\n      buttons: false,\n    });\n    this.loading=true;\n      axios.get('api/get-all-messages').then( rsp => {\n        this.messages = rsp.data;\n        this.loading=false;\n        swal.stopLoading();\n        swal.close();\n      }, err => {\n        this.serverError(err);\n      });\n  },\n  data () {\n    return {\n      searchText: '',\n      error: '',\n      messages: {},\n      loading: false\n    };\n  },\n  computed: {},\n  methods: {\n   serverError(msg){\n     swal(\"Error!\", `${msg}`, \"error\");\n   },\n   deleteMessge(message){\n     swal({\n       title: \"Are you sure?\",\n       text: \"Once deleted, you will not be able to recover this message!\",\n       icon: \"warning\",\n       buttons: {\n          cancel: true,\n          confirm: {\n            text: \"Proceed\",\n            value: true,\n            visible: true,\n            className: \"\",\n            closeModal: false\n          }\n        },\n       dangerMode: true,\n     })\n     .then((willDelete) => {\n       if (willDelete) {\n         return axios.post('api/delete-message', {id: message.id});\n\n       } else {\n         swal(\"Cancelled.\", {\n           icon: \"info\",\n         });\n         throw null;\n       }\n     })\n     .then(results => {\n       const status = results.data.status;\n\n       if (!status) {\n         return swal('Error', 'Something went wrong at the server. Message not deleted', 'error');\n       }\n       else {\n\n         let index = this.messages.indexOf(message);\n         this.messages.splice(index, 1);\n\n\n         swal({\n           title: \"Success\",\n           text: 'Messge deleted',\n           icon: 'success',\n         });\n       }\n\n\n     })\n     .catch(err => {\n       console.log(err);\n       if (err) {\n         swal(\"Oh noes!\", \"The AJAX request failed!\", \"error\");\n       } else {\n         swal.stopLoading();\n         swal.close();\n       }\n     });\n   },\n  }\n}\n</script>\n\n<style lang=\"css\">\n  td:nth-child(6){\n    white-space: nowrap;\n  }\n  td:nth-child(5){\n    white-space: normal !important;\n  }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fc550658\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd:last-child {\n\twhite-space: nowrap;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/PaymentAgent/Resources/js/components/SubComponents/app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue"],"names":[],"mappings":";AA6JA;CACA,oBAAA;CACA","file":"SubCreateTransaction.vue","sourcesContent":["<template lang=\"html\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"row \">\n\t\t\t<div class=\"col-md-8 col-md-offset-2\">\n\t\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\tTransfer to self\n\t\t\t\t\t\t<a href=\"#\" @click=\"$emit('switch-component', {data:details, comp:'ViewDetails'})\" role=\"button\" class=\"btn btn-xs btn-danger pull-right\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<form @submit.prevent=\"checkFields()\">\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"trans_type\" class=\"col-md-3 control-label\">To</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n                  <select id=\"trans_type\" name=\"trans_type\" class=\"form-control\" v-model=\"trans_details.trans_type\" v-validate=\"'required'\">\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">Transaction Type</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"debit\">Debit</option>\n\t\t\t\t\t\t\t\t\t\t<option value=\"credit\">Credit</option>\n\t\t\t\t\t\t\t\t\t</select>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('trans_type')\">{{ errors.first('trans_type') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.trans_type && fields.trans_type.touched && !fields.trans_type.dirty\">Required Field</span>\n                  </div>\n                </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"amount\" class=\"col-md-3 control-label\">Amount</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">$</span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Credit will add to account balance and vice versa\" class=\"form-control\" id=\"amount\" name=\"amount\" v-model=\"trans_details.amount\" v-validate=\"'required|decimal:2'\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">.00</span>\n                  </div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('amount')\">{{ errors.first('amount') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.amount && fields.amount.touched && !fields.amount.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"description\" class=\"col-md-3 control-label\">Description</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-edit\"></i></span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Transfer Narration\" class=\"form-control\" id=\"description\" name=\"description\" v-model=\"trans_details.description\" v-validate=\"'required|max:80'\">\n\t\t\t\t\t\t\t\t\t</div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('description')\">{{ errors.first('description') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.description && fields.description.touched && !fields.description.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"trans_date\" class=\"col-md-3 control-label\">Transaction Date</label>\n\t\t\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group input-group\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-edit\"></i></span>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Supposed date of the transaction\" class=\"form-control\" id=\"trans_date\" name=\"trans_date\" v-model=\"trans_details.trans_date\" v-validate=\"'required|date_format:YYYY-MM-DD'\">\n\t\t\t\t\t\t\t\t\t</div>\n                  <div class=\"up\">\n                    <small style=\"color:red; display:block; text-align:center;\" v-show=\"errors.has('trans_date')\">{{ errors.first('trans_date') }}</small>\n                    <span style=\"color:red; display:block; text-align:center;\" v-show=\"fields.trans_date && fields.trans_date.touched && !fields.trans_date.dirty\">Required Field</span>\n                  </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div> <br>\n\t\t\t\t\t\t\t<fieldset><button type=\"submit\" class=\"btn btn-primary col-md-offset-5\">Create</button></fieldset>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-footer\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</template>\n\n<script>\n\texport default {\n\t\tprops: ['details'],\n\t\tdata() {\n\t\t\treturn {\n\t\t\t\ttrans_details: {},\n\t\t\t}\n\t\t},\n\t\tcreated() {},\n\t\tmethods: {\n\t\t\tcheckFields() {\n\t\t\t\tthis.$validator.validate().then(result => {\n\t\t\t\t\tif (result) {\n\t\t\t\t\t\tthis.createTransaction();\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t},\n\t\t\tcreateTransaction() {\n\t\t\t\tswal({\n\t\t\t\t\t\ttitle: \"Are you sure?\",\n\t\t\t\t\t\ttext: \"Confirm transaction creation.\",\n\t\t\t\t\t\ticon: \"warning\",\n\t\t\t\t\t\tbuttons: {\n\t\t\t\t\t\t\tcancel: true,\n\t\t\t\t\t\t\tconfirm: {\n\t\t\t\t\t\t\t\ttext: \"Yes! Create transaction\",\n\t\t\t\t\t\t\t\tvalue: true,\n\t\t\t\t\t\t\t\tvisible: true,\n\t\t\t\t\t\t\t\tclassName: \"\",\n\t\t\t\t\t\t\t\tcloseModal: false\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t// dangerMode: true,\n\t\t\t\t\t})\n\t\t\t\t\t.then((willCreate) => {\n\t\t\t\t\t\tif (willCreate) {\n              this.trans_details.user_id = this.details.id;\n\t\t\t\t\t\t\treturn axios.post('api/create-transaction', {\n\t\t\t\t\t\t\t\tdetails: this.trans_details\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tswal(\"Transaction creation cancelled.\", {\n\t\t\t\t\t\t\t\ticon: \"info\",\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tthrow null;\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t\t.then(results => {\n\t\t\t\t\t\tconst status = results.data.status;\n\n\t\t\t\t\t\tif (!status) {\n\t\t\t\t\t\t\treturn swal('Error', 'Something went wrong at the server. Transaction not created', 'error');\n\t\t\t\t\t\t} else {\n\n\t\t\t\t\t\t\tswal({\n\t\t\t\t\t\t\t\ttitle: \"Success\",\n\t\t\t\t\t\t\t\ttext: 'Transaction created for user',\n\t\t\t\t\t\t\t\ticon: 'success',\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n            this.trans_details = {};\n\t\t\t\t\t})\n\t\t\t\t\t.catch(err => {\n\t\t\t\t\t\tconsole.log(err);\n\t\t\t\t\t\tif (err) {\n\t\t\t\t\t\t\tswal(\"Oh noes!\", \"The AJAX request failed!\", \"error\");\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tswal.stopLoading();\n\t\t\t\t\t\t\tswal.close();\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t},\n\t\t}\n\t}\n</script>\n\n<style lang=\"css\">\n\ttd:last-child {\n\t\twhite-space: nowrap;\n\t}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07b57845\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v("\n\t\t\t\t\t\tCreate New User Account\n\t\t\t\t\t\t"),
            _c(
              "a",
              {
                staticClass: "btn btn-xs btn-danger pull-right",
                attrs: { href: "#", role: "button" },
                on: {
                  click: function($event) {
                    _vm.$emit("switch-component", { data: null, comp: "Users" })
                  }
                }
              },
              [_c("i", { staticClass: "glyphicon glyphicon-remove" })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    _vm.checkFields()
                  }
                }
              },
              [
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "acc_name" }
                    },
                    [_vm._v("Name ")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.acc_name,
                            expression: "details.acc_name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:30",
                            expression: "'required|max:30'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Enter User's full name",
                          id: "acc_name",
                          name: "acc_name"
                        },
                        domProps: { value: _vm.details.acc_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "acc_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("acc_name"),
                              expression: "errors.has('acc_name')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("acc_name")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.acc_name &&
                                _vm.fields.acc_name.touched &&
                                !_vm.fields.acc_name.dirty,
                              expression:
                                "fields.acc_name && fields.acc_name.touched && !fields.acc_name.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "email" }
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.email,
                            expression: "details.email"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email",
                            expression: "'required|email'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Email Address for the user",
                          id: "email",
                          name: "email"
                        },
                        domProps: { value: _vm.details.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.details, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("email"),
                              expression: "errors.has('email')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("email")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.email &&
                                _vm.fields.email.touched &&
                                !_vm.fields.email.dirty,
                              expression:
                                "fields.email && fields.email.touched && !fields.email.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.password,
                            expression: "details.password"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "max:15",
                            expression: "'max:15'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "Leave empty to maintain the old password",
                          id: "password",
                          name: "password"
                        },
                        domProps: { value: _vm.details.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("password"),
                              expression: "errors.has('password')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("password")))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "acc_num" }
                    },
                    [_vm._v("Contract Number")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.acc_num,
                            expression: "details.acc_num"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "Account number for the user to login with",
                          id: "acc_num",
                          name: "acc_num"
                        },
                        domProps: { value: _vm.details.acc_num },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "acc_num",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("acc_num"),
                              expression: "errors.has('acc_num')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("acc_num")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.acc_num &&
                                _vm.fields.acc_num.touched &&
                                !_vm.fields.acc_num.dirty,
                              expression:
                                "fields.acc_num && fields.acc_num.touched && !fields.acc_num.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "acc_type" }
                    },
                    [_vm._v("Account Type")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.acc_type,
                            expression: "details.acc_type"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "acc_type", name: "acc_type" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.details,
                              "acc_type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Account Type")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "business" } }, [
                          _vm._v("Business")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "private" } }, [
                          _vm._v("Private")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("acc_type"),
                              expression: "errors.has('acc_type')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("acc_type")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.acc_type &&
                                _vm.fields.acc_type.touched &&
                                !_vm.fields.acc_type.dirty,
                              expression:
                                "fields.acc_type && fields.acc_type.touched && !fields.acc_type.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "acc_status" }
                    },
                    [_vm._v("Account Status")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.acc_status,
                            expression: "details.acc_status"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "acc_status", name: "acc_status" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.details,
                              "acc_status",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Account Status")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "dormant" } }, [
                          _vm._v("Dormant")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "active" } }, [
                          _vm._v("Active")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("acc_status"),
                              expression: "errors.has('acc_status')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("acc_status")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.acc_status &&
                                _vm.fields.acc_status.touched &&
                                !_vm.fields.acc_status.dirty,
                              expression:
                                "fields.acc_status && fields.acc_status.touched && !fields.acc_status.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "cot_code_name" }
                    },
                    [_vm._v("COT Code Name")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.cot_code_name,
                            expression: "details.cot_code_name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "alpha_spaces",
                            expression: "'alpha_spaces'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "The name of the code to show the user that he needs to provide",
                          id: "cot_code_name",
                          name: "cot_code_name"
                        },
                        domProps: { value: _vm.details.cot_code_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "cot_code_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("cot_code_name"),
                              expression: "errors.has('cot_code_name')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("cot_code_name")))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "cot_code" }
                    },
                    [_vm._v("COT Code")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.cot_code,
                            expression: "details.cot_code"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "alpha_spaces",
                            expression: "'alpha_spaces'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "The Code he has to enter to validate it",
                          id: "cot_code",
                          name: "cot_code"
                        },
                        domProps: { value: _vm.details.cot_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "cot_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("cot_code"),
                              expression: "errors.has('cot_code')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("cot_code")))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "cot_code_error_msg" }
                    },
                    [_vm._v("Error Message")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.cot_code_error_msg,
                            expression: "details.cot_code_error_msg"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "alpha_spaces|max:30",
                            expression: "'alpha_spaces|max:30'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "The error message to display after he has entered the correct cot code",
                          id: "cot_code_error_msg",
                          name: "cot_code_error_msg"
                        },
                        domProps: { value: _vm.details.cot_code_error_msg },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "cot_code_error_msg",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("cot_code_error_msg"),
                              expression: "errors.has('cot_code_error_msg')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("cot_code_error_msg")))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "transfer_permitted" }
                    },
                    [_vm._v("Transfer Permitted")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.transfer_permitted,
                            expression: "details.transfer_permitted"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "transfer_permitted",
                          name: "transfer_permitted"
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.details,
                              "transfer_permitted",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Choose One")
                        ]),
                        _vm._v(" "),
                        _c("option", { domProps: { value: true } }, [
                          _vm._v("Permitted")
                        ]),
                        _vm._v(" "),
                        _c("option", { domProps: { value: false } }, [
                          _vm._v("Denied")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("transfer_permitted"),
                              expression: "errors.has('transfer_permitted')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("transfer_permitted")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.transfer_permitted &&
                                _vm.fields.transfer_permitted.touched &&
                                !_vm.fields.transfer_permitted.dirty,
                              expression:
                                "fields.transfer_permitted && fields.transfer_permitted.touched && !fields.transfer_permitted.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "address" }
                    },
                    [_vm._v("Address")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.address,
                            expression: "details.address"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50",
                            expression: "'required|max:50'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Address of the user",
                          id: "address",
                          name: "address"
                        },
                        domProps: { value: _vm.details.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "address",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("address"),
                              expression: "errors.has('address')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("address")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.address &&
                                _vm.fields.address.touched &&
                                !_vm.fields.address.dirty,
                              expression:
                                "fields.address && fields.address.touched && !fields.address.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "nationality" }
                    },
                    [_vm._v("Nationality")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.nationality,
                            expression: "details.nationality"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nationality",
                          id: "nationality",
                          name: "nationality"
                        },
                        domProps: { value: _vm.details.nationality },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "nationality",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("nationality"),
                              expression: "errors.has('nationality')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("nationality")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.nationality &&
                                _vm.fields.nationality.touched &&
                                !_vm.fields.nationality.dirty,
                              expression:
                                "fields.nationality && fields.nationality.touched && !fields.nationality.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm._m(0)
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-footer" })
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("fieldset", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary col-md-offset-5",
          attrs: { type: "submit" }
        },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-07b57845", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1627698e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/misc/PaginationComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("nav", [
      _c(
        "ul",
        { staticClass: "pagination" },
        [
          _c("li", [
            _c(
              "a",
              {
                attrs: {
                  disabled: _vm.pagination.current_page,
                  "aria-label": "Previous"
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.changePage(_vm.pagination.current_page - 1)
                  }
                }
              },
              [
                _c("span", { attrs: { "aria-hidden": "true" } }, [
                  _vm._v("Previous")
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.pages, function(page) {
            return _c("li", { key: page }, [
              _c(
                "a",
                {
                  class: _vm.isCurrentPage(page) ? "active" : "",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.changePage(page)
                    }
                  }
                },
                [_vm._v(_vm._s(page))]
              )
            ])
          }),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                attrs: {
                  disabled:
                    _vm.pagination.current_page >= _vm.pagination.last_page,
                  "aria-label": "Next"
                },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.changePage(_vm.pagination.current_page + 1)
                  }
                }
              },
              [
                _c("span", { attrs: { "aria-hidden": "true" } }, [
                  _vm._v("Next")
                ])
              ]
            )
          ])
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1627698e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1c2b8010\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v(
              "\n              " +
                _vm._s(_vm.details.prev_details.acc_name) +
                "'s Transcations\n              "
            ),
            _c(
              "a",
              {
                staticClass: "btn btn-xs btn-danger pull-right",
                attrs: { href: "#", role: "button" },
                on: {
                  click: function($event) {
                    _vm.$emit("switch-component", {
                      data: _vm.details.prev_details,
                      comp: "ViewDetails"
                    })
                  }
                }
              },
              [_c("i", { staticClass: "glyphicon glyphicon-remove" })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.details.user_transactions, function(trans) {
                    return _c(
                      "tr",
                      {
                        class: {
                          "text-danger text-uppercase":
                            trans.trans_type == "debit"
                        }
                      },
                      [
                        _c("td", [_vm._v(_vm._s(trans.trans_type))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm._f("truncate")(trans.description, 80))
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(" " + _vm._s(_vm._f("currency")(trans.amount)))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" " + _vm._s(trans.trans_date))])
                      ]
                    )
                  })
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "default" }, [
        _c("th", [_vm._v("Transaction Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1c2b8010", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-293c9ec3\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v("\n              Transaction Records\n          ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.loading
                      ? _c(
                          "tr",
                          {
                            staticClass: "loading text-center text-danger",
                            attrs: { colspan: "6" }
                          },
                          [
                            _vm._v(
                              "\n                      Loading...\n                  "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.error
                      ? _c("tr", { staticClass: "error" }, [
                          _c("td", { attrs: { colspan: "6" } }, [
                            _vm._v(_vm._s(_vm.error))
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.transactions, function(trans) {
                      return _vm.transactions
                        ? _c("tr", { key: trans.id }, [
                            _c("td", [_vm._v(_vm._s(trans.user.acc_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(trans.trans_type))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm._f("truncate")(trans.description, 80)
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                " " + _vm._s(_vm._f("currency")(trans.amount))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(trans.trans_date))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-xs btn-danger",
                                  on: {
                                    click: function($event) {
                                      _vm.deleteTransaction(trans)
                                    }
                                  }
                                },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "default" }, [
        _c("th", [_vm._v("User")]),
        _vm._v(" "),
        _c("th", [_vm._v("Transaction Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-293c9ec3", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-49565b22\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass:
            "col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-2 col-lg-offset-2 toppad"
        },
        [
          _c("div", { staticClass: "panel panel-info" }, [
            _c("div", { staticClass: "panel-heading" }, [
              _c("h3", { staticClass: "panel-title" }, [
                _vm._v(
                  "\n              " +
                    _vm._s(_vm.details.acc_name) +
                    "\n\t\t\t\t\t\t\t"
                ),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-xs btn-danger pull-right",
                    attrs: { href: "#", role: "button" },
                    on: {
                      click: function($event) {
                        _vm.$emit("switch-component", {
                          data: null,
                          comp: "Users"
                        })
                      }
                    }
                  },
                  [_c("i", { staticClass: "glyphicon glyphicon-remove" })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-xs btn-warning pull-right",
                    attrs: { href: "#", role: "button" },
                    on: {
                      click: function($event) {
                        _vm.$emit("switch-component", {
                          data: _vm.details,
                          comp: "EditUser"
                        })
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "glyphicon glyphicon-remove" }),
                    _vm._v("Edit User")
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: " col-md-12 col-lg-12 " }, [
                  _c("table", { staticClass: "table table-user-information" }, [
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Email:")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.acc_name))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Created Date:")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.created_at))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Date of Birth")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.dob))])
                      ]),
                      _vm._v(" "),
                      _c("tr"),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Acc Balance")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm._f("currency")(_vm.details.acc_balance))
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Acc Number")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.acc_num))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Acc status")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.acc_status))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Transfer Permitted")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              _vm.details.transder_permitted ? "Yes" : "No"
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr"),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Home Address")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.address))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("City")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.city))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Pronvince")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.pronvince))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Nationality")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.nationality))])
                      ]),
                      _vm._v(" "),
                      _c("tr"),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("COT Code")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.cot_code))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("COT Code Name")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.details.cot_code_name))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("COT Code Error Message")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.details.cot_code_error_msg))
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "flex-center" })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "panel-footer flex-center" }, [
              _c(
                "a",
                {
                  staticClass: "btn btn-primary",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      _vm.getUserTransactions()
                    }
                  }
                },
                [_vm._v("View Transactions")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-warning",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      _vm.getUserTransferRequests()
                    }
                  }
                },
                [_vm._v("View Transfer Requests")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-success",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      _vm.$emit("switch-component", {
                        data: _vm.details,
                        comp: "CreateTransaction"
                      })
                    }
                  }
                },
                [_vm._v("Create Transaction")]
              )
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-49565b22", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4fad8cf2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v(
              "\n              " +
                _vm._s(_vm.details.prev_details.acc_name) +
                "'s Transfer Requests\n              "
            ),
            _c(
              "a",
              {
                staticClass: "btn btn-xs btn-danger pull-right",
                attrs: { href: "#", role: "button" },
                on: {
                  click: function($event) {
                    _vm.$emit("switch-component", {
                      data: _vm.details.prev_details,
                      comp: "ViewDetails"
                    })
                  }
                }
              },
              [_c("i", { staticClass: "glyphicon glyphicon-remove" })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.details.user_transfer_requests, function(trans) {
                    return _c(
                      "tr",
                      {
                        class: {
                          "text-danger text-uppercase": trans.status == "error"
                        }
                      },
                      [
                        _c("td", [_vm._v(" " + _vm._s(trans.acc_name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" " + _vm._s(trans.bank_name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(" " + _vm._s(_vm._f("currency")(trans.amount)))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" " + _vm._s(trans.payment_type))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" " + _vm._s(trans.country))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(" " + _vm._s(trans.status))])
                      ]
                    )
                  })
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "default" }),
      _c("tr", { staticClass: "default" }, [
        _c("th", [_vm._v("Recipient")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bank Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payment Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Country")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4fad8cf2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5f93bef4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "grid-container", attrs: { id: "details-section" } },
    [
      _c(
        "transition",
        { attrs: { name: "fade" } },
        [
          _vm.loading
            ? _c("page-loading")
            : !_vm.loading && !_vm.agent_transactions
              ? _c("div", { staticClass: "ui purple segment" }, [
                  _c(
                    "form",
                    {
                      staticClass: "ui form",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.creditUser($event)
                        }
                      }
                    },
                    [
                      _c("h1", { staticClass: "ui header" }, [
                        _vm._v(
                          "Credit " +
                            _vm._s(_vm.user_details.firstname) +
                            "'s account"
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ui divider" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "user-details ui positive message" },
                        [
                          _c("h4", [
                            _vm._v(
                              "User's Name: " +
                                _vm._s(_vm.user_details.firstname) +
                                " " +
                                _vm._s(_vm.user_details.lastname)
                            )
                          ]),
                          _vm._v(" "),
                          _c("h4", [
                            _vm._v(
                              "User's Email: " + _vm._s(_vm.user_details.email)
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "ui download",
                          class: { loading: _vm.loading }
                        },
                        [
                          _c("div", { staticClass: "ui icon input" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.credit_amount,
                                  expression: "credit_amount"
                                },
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "min_value:200",
                                  expression: "'min_value:200'"
                                }
                              ],
                              staticClass: "prompt",
                              attrs: {
                                type: "text",
                                placeholder:
                                  "enter amount to credit " +
                                  _vm.user_details.firstname,
                                name: "credit_amount",
                                autofocus: "",
                                min: "200"
                              },
                              domProps: { value: _vm.credit_amount },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.credit_amount = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("i", { staticClass: "download icon" })
                          ]),
                          _vm._v(" "),
                          _vm.errors.has("credit_amount")
                            ? _c(
                                "div",
                                { staticClass: "ui negative message" },
                                [
                                  _c("i", { staticClass: "close icon" }),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "header" }, [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("credit_amount"))
                                    )
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", { staticClass: "results" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          class: [
                            "ui",
                            "blue",
                            "button",
                            { loading: _vm.loading }
                          ],
                          attrs: {
                            disabled:
                              _vm.loading ||
                              !_vm.credit_amount ||
                              _vm.errors.has("credit_amount") ||
                              _vm.credit_amount >
                                _vm.agent_details.available_units,
                            type: "submit"
                          }
                        },
                        [_vm._v("Credit Amount")]
                      )
                    ]
                  )
                ])
              : _c("div", { staticClass: "ui red segment" }, [
                  _c(
                    "table",
                    {
                      staticClass: "ui striped single line table",
                      attrs: { id: "transactions-table" }
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("User Name")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("User E-mail")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Amount")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Status")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.agent_transactions, function(trans) {
                          return _c("tr", [
                            _c("td", [
                              _vm._v(
                                _vm._s(trans.credited_user.firstname) +
                                  " " +
                                  _vm._s(trans.credited_user.lastname)
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(trans.credited_user.email))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm._f("currency")(trans.amount)))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(trans.status))])
                          ])
                        })
                      )
                    ]
                  )
                ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f93bef4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-620c741c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", [
    _vm._m(0),
    _vm._v(" "),
    _c("main", { attrs: { id: "main" } }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          { attrs: { id: "" } },
          [
            _c(
              "table",
              { staticClass: "table table-bordered table-hover table-striped" },
              [
                _c("caption", [
                  _c("div", { staticClass: "text-right multiple-action" }, [
                    _vm.checkedList.length > 0
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-danger pull-left",
                            attrs: { type: "button" }
                          },
                          [
                            _c("i", {
                              staticClass: "glyphicon glyphicon-trash"
                            })
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "search" }, [
                      _c("div", { staticClass: "input-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.filterByName,
                              expression: "filterByName"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "search",
                            placeholder: "Search by Name"
                          },
                          domProps: { value: _vm.filterByName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.filterByName = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(1)
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "dropdown filterbox",
                        class: { open: _vm.filterToggle }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                _vm.filterToggle = !_vm.filterToggle
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "glyphicon glyphicon-filter"
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("ul", { staticClass: "dropdown-menu list-group" }, [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("li", { staticClass: "list-group-item" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.filterByStatus,
                                  expression: "filterByStatus"
                                }
                              ],
                              attrs: { type: "checkbox", value: "actived" },
                              domProps: {
                                checked: Array.isArray(_vm.filterByStatus)
                                  ? _vm._i(_vm.filterByStatus, "actived") > -1
                                  : _vm.filterByStatus
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.filterByStatus,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "actived",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.filterByStatus = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.filterByStatus = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.filterByStatus = $$c
                                  }
                                }
                              }
                            }),
                            _vm._v(" Actived\n                  ")
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "list-group-item" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.filterByStatus,
                                  expression: "filterByStatus"
                                }
                              ],
                              attrs: { type: "checkbox", value: "deactived" },
                              domProps: {
                                checked: Array.isArray(_vm.filterByStatus)
                                  ? _vm._i(_vm.filterByStatus, "deactived") > -1
                                  : _vm.filterByStatus
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.filterByStatus,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "deactived",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.filterByStatus = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.filterByStatus = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.filterByStatus = $$c
                                  }
                                }
                              }
                            }),
                            _vm._v(" Deactived\n                  ")
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "list-group-item" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.filterByStatus,
                                  expression: "filterByStatus"
                                }
                              ],
                              attrs: { type: "checkbox", value: "created" },
                              domProps: {
                                checked: Array.isArray(_vm.filterByStatus)
                                  ? _vm._i(_vm.filterByStatus, "created") > -1
                                  : _vm.filterByStatus
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.filterByStatus,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = "created",
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.filterByStatus = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.filterByStatus = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.filterByStatus = $$c
                                  }
                                }
                              }
                            }),
                            _vm._v(" Created\n                  ")
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.openModal()
                          }
                        }
                      },
                      [_c("i", { staticClass: "glyphicon glyphicon-plus" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "notifications" }, [
                    _vm.notification
                      ? _c("p", { staticClass: "alert bg-success" })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.checkedAll
                      ? _c("p", { staticClass: "alert bg-warning" }, [
                          _vm._v("\n                All "),
                          _c("strong", {
                            domProps: {
                              textContent: _vm._s(_vm.checkedList.length)
                            }
                          }),
                          _vm._v(" items checked\n                "),
                          _vm._m(3)
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("thead", [
                  _c("tr", { staticClass: "bg-primary" }, [
                    _c(
                      "th",
                      { staticClass: "text-center", attrs: { width: "30" } },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.checkedAll,
                              expression: "checkedAll"
                            }
                          ],
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: Array.isArray(_vm.checkedAll)
                              ? _vm._i(_vm.checkedAll, null) > -1
                              : _vm.checkedAll
                          },
                          on: {
                            change: function($event) {
                              var $$a = _vm.checkedAll,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.checkedAll = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.checkedAll = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.checkedAll = $$c
                              }
                            }
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        attrs: { width: "50" },
                        on: {
                          click: function($event) {
                            _vm.sortById = !_vm.sortById
                          }
                        }
                      },
                      [
                        _vm._v("ID "),
                        _c("i", {
                          staticClass: "pull-right glyphicon",
                          class: [
                            _vm.sortById
                              ? "glyphicon-sort-by-alphabet-alt"
                              : "glyphicon-sort-by-alphabet"
                          ]
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        on: {
                          click: function($event) {
                            _vm.sortByName = !_vm.sortByName
                          }
                        }
                      },
                      [
                        _vm._v("Name "),
                        _c("i", {
                          staticClass: "pull-right glyphicon",
                          class: [
                            _vm.sortByName
                              ? "glyphicon-sort-by-alphabet-alt"
                              : "glyphicon-sort-by-alphabet"
                          ]
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        on: {
                          click: function($event) {
                            _vm.sortByOld = !_vm.sortByOld
                          }
                        }
                      },
                      [
                        _vm._v("Old "),
                        _c("i", {
                          staticClass: "pull-right glyphicon",
                          class: [
                            _vm.sortByOld
                              ? "glyphicon-sort-by-alphabet-alt"
                              : "glyphicon-sort-by-alphabet"
                          ]
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        on: {
                          click: function($event) {
                            _vm.sortByEmail = !_vm.sortByEmail
                          }
                        }
                      },
                      [
                        _vm._v("Email "),
                        _c("i", {
                          staticClass: "pull-right glyphicon",
                          class: [
                            _vm.sortByEmail
                              ? "glyphicon-sort-by-alphabet-alt"
                              : "glyphicon-sort-by-alphabet"
                          ]
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      {
                        on: {
                          click: function($event) {
                            _vm.sortByStatus = !_vm.sortByStatus
                          }
                        }
                      },
                      [
                        _vm._v("Status "),
                        _c("i", {
                          staticClass: "pull-right glyphicon",
                          class: [
                            _vm.sortByStatus
                              ? "glyphicon-sort-by-alphabet-alt"
                              : "glyphicon-sort-by-alphabet"
                          ]
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "th",
                      { staticClass: "text-center", attrs: { width: "100" } },
                      [_vm._v("Action")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.listView, function(item, index) {
                    return _c(
                      "tr",
                      { class: { warning: _vm.checkedList.includes(item.id) } },
                      [
                        _c("td", { attrs: { align: "center" } }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.checkedList,
                                expression: "checkedList"
                              }
                            ],
                            attrs: { type: "checkbox" },
                            domProps: {
                              value: item.id,
                              checked: Array.isArray(_vm.checkedList)
                                ? _vm._i(_vm.checkedList, item.id) > -1
                                : _vm.checkedList
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.checkedList,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = item.id,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.checkedList = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.checkedList = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.checkedList = $$c
                                }
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("td", { attrs: { align: "center" } }, [
                          _c("b", [_vm._v(_vm._s(item.id))])
                        ]),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(item.name) }
                        }),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(item.old) }
                        }),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(item.email) }
                        }),
                        _vm._v(" "),
                        _c("td", {
                          domProps: { textContent: _vm._s(item.status) }
                        }),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-warning",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.openModal(item)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "glyphicon glyphicon-edit"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  _vm.deleting(index)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "glyphicon glyphicon-trash"
                              })
                            ]
                          )
                        ])
                      ]
                    )
                  })
                )
              ]
            ),
            _vm._v(" "),
            _vm.showModal
              ? _c(
                  "modal",
                  {
                    on: {
                      close: function($event) {
                        _vm.showModal = false
                      }
                    }
                  },
                  [
                    _c("h3", { attrs: { slot: "title" }, slot: "title" }, [
                      _vm._v(
                        _vm._s(_vm.modalType == 1 ? "Add" : "Edit") + " Item"
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        class: { "has-error": _vm.isFormValid },
                        attrs: { slot: "body" },
                        slot: "body"
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              {
                                staticClass: "form-group",
                                class: {
                                  "has-success":
                                    _vm.item.id != null && _vm.isFormValid
                                }
                              },
                              [
                                _c("div", { staticClass: "input-group" }, [
                                  _c(
                                    "span",
                                    { staticClass: "input-group-addon" },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "glyphicon glyphicon-ban-circle"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.item.id,
                                        expression: "item.id"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      readonly: "",
                                      disabled: ""
                                    },
                                    domProps: { value: _vm.item.id },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.item,
                                          "id",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _vm.item.id == null && _vm.isFormValid
                                  ? _c("span", { staticClass: "help-block" }, [
                                      _vm._v("Id is invalid!")
                                    ])
                                  : _vm._e()
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-sm-6" }, [
                            _c(
                              "div",
                              {
                                staticClass: "form-group",
                                class: {
                                  "has-success":
                                    _vm.item.status && _vm.isFormValid
                                }
                              },
                              [
                                _c("div", { staticClass: "input-group" }, [
                                  _c(
                                    "span",
                                    { staticClass: "input-group-addon" },
                                    [
                                      _c("i", {
                                        staticClass:
                                          "glyphicon glyphicon-ban-circle"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.item.status,
                                          expression: "item.status"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.item,
                                            "status",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { value: "created" } },
                                        [_vm._v("Created")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "actived" } },
                                        [_vm._v("Actived")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "option",
                                        { attrs: { value: "deactived" } },
                                        [_vm._v("Deactived")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "has-success":
                                _vm.item.name != null && _vm.isFormValid
                            }
                          },
                          [
                            _c("div", { staticClass: "input-group" }, [
                              _c("span", { staticClass: "input-group-addon" }, [
                                _c("i", {
                                  staticClass: "glyphicon glyphicon-user"
                                })
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.item.name,
                                    expression: "item.name"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Fullname"
                                },
                                domProps: { value: _vm.item.name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.item,
                                      "name",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _vm.item.name == null && _vm.isFormValid
                              ? _c("span", { staticClass: "help-block" }, [
                                  _vm._v("Name is empty!")
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "has-success":
                                _vm.item.old != null && _vm.isFormValid
                            }
                          },
                          [
                            _c("div", { staticClass: "input-group" }, [
                              _c("span", { staticClass: "input-group-addon" }, [
                                _c("i", {
                                  staticClass: "glyphicon glyphicon-time"
                                })
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.item.old,
                                    expression: "item.old"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { type: "text", placeholder: "Old" },
                                domProps: { value: _vm.item.old },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.item,
                                      "old",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _vm.item.old == null && _vm.isFormValid
                              ? _c("span", { staticClass: "help-block" }, [
                                  _vm._v("Old is empty!")
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "form-group",
                            class: {
                              "has-success":
                                _vm.item.old != null &&
                                _vm.isFormValid &&
                                _vm.checkEmailValid(_vm.item.email)
                            }
                          },
                          [
                            _c("div", { staticClass: "input-group" }, [
                              _c("span", { staticClass: "input-group-addon" }, [
                                _c("i", {
                                  staticClass: "glyphicon glyphicon-envelope"
                                })
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.item.email,
                                    expression: "item.email"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Email Address"
                                },
                                domProps: { value: _vm.item.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.item,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _vm.item.email == null && _vm.isFormValid
                              ? _c("span", { staticClass: "help-block" }, [
                                  _vm._v("Email is empty!")
                                ])
                              : !_vm.checkEmailValid(_vm.item.email) &&
                                _vm.isFormValid
                                ? _c("span", { staticClass: "help-block" }, [
                                    _vm._v("Email is invalid!")
                                  ])
                                : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                _vm.submit(_vm.item)
                              }
                            }
                          },
                          [_vm._v("Submit")]
                        )
                      ]
                    )
                  ]
                )
              : _vm._e()
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c("script", { attrs: { type: "text/x-template", id: "modal-template" } }, [
      _vm._v(
        '\n    <transition name="modal">\n      <div class="modal-mask">\n        <div class="modal-dialog">\n          <div class="modal-content">\n            <div class="modal-header bg-primary">\n              <button type="button" class="close" v-on:click="$emit(\'close\')"><span aria-hidden="true">&times;</span></button>\n              <slot name="title">Modal Title</slot>\n            </div>\n            <div class="modal-body">\n              <slot name="body"></slot>\n            </div>\n            <div class="modal-footer">\n              <slot name="footer"></slot>\n            </div>\n          </div>\n        </div>\n      </div>\n    </transition>\n  '
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { attrs: { id: "header" } }, [
      _c("div", { staticClass: "container" }, [
        _c("h2", [
          _vm._v("Vuejs SSFCRUD - Search Sort Filter Create Read Update Delete")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "glyphicon glyphicon-search" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "list-group-item" }, [
      _c("label", [_vm._v("Filter by Status")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: { type: "button", "aria-label": "Close" }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { attrs: { id: "footer" } }, [
      _c("div", { staticClass: "container" }, [
        _c("p", { staticClass: "text-right" }, [
          _vm._v("ttquoccuong@gmail.com")
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-620c741c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7464e386\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v("\n              Transaction Records\n          ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.loading
                      ? _c(
                          "tr",
                          {
                            staticClass: "loading text-center text-danger",
                            attrs: { colspan: "6" }
                          },
                          [
                            _vm._v(
                              "\n                      Loading...\n                  "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.error
                      ? _c("tr", { staticClass: "error" }, [
                          _c("td", { attrs: { colspan: "6" } }, [
                            _vm._v(_vm._s(_vm.error))
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.transfer_requests, function(trans) {
                      return _vm.transfer_requests
                        ? _c("tr", { key: trans.id }, [
                            _c("td", [_vm._v(_vm._s(trans.user.acc_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(trans.acc_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(trans.bank_name))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                " " + _vm._s(_vm._f("currency")(trans.amount))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(" " + _vm._s(trans.payment_type))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(trans.country))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(trans.status))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-xs btn-danger",
                                  on: {
                                    click: function($event) {
                                      _vm.deleteTransferRequest(trans)
                                    }
                                  }
                                },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "default" }, [
        _c("th", [_vm._v("User")]),
        _vm._v(" "),
        _c("th", [_vm._v("Recipient")]),
        _vm._v(" "),
        _c("th", [_vm._v("Bank Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Payment Type")]),
        _vm._v(" "),
        _c("th", [_vm._v("Country")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7464e386", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-92d99e5a\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading enter-1" }, [
            _vm._v("\n\t\t\t\t\t\tEdit User Details\n\t\t\t\t\t\t"),
            _c(
              "a",
              {
                staticClass: "btn btn-xs btn-danger pull-right",
                attrs: { href: "#", role: "button" },
                on: {
                  click: function($event) {
                    _vm.$emit("switch-component", {
                      data: _vm.details,
                      comp: "ViewDetails"
                    })
                  }
                }
              },
              [_c("i", { staticClass: "glyphicon glyphicon-remove" })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body enter-2" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    _vm.checkFields()
                  }
                }
              },
              [
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "acc_name" }
                    },
                    [_vm._v("Name ")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.acc_name,
                            expression: "details.acc_name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:30",
                            expression: "'required|max:30'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Enter User's full name",
                          id: "acc_name",
                          name: "acc_name"
                        },
                        domProps: { value: _vm.details.acc_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "acc_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("acc_name"),
                              expression: "errors.has('acc_name')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("acc_name")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.acc_name &&
                                _vm.fields.acc_name.touched &&
                                !_vm.fields.acc_name.dirty,
                              expression:
                                "fields.acc_name && fields.acc_name.touched && !fields.acc_name.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "email" }
                    },
                    [_vm._v("Email")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.email,
                            expression: "details.email"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|email",
                            expression: "'required|email'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Email Address for the user",
                          id: "email",
                          name: "email"
                        },
                        domProps: { value: _vm.details.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.details, "email", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("email"),
                              expression: "errors.has('email')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("email")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.email &&
                                _vm.fields.email.touched &&
                                !_vm.fields.email.dirty,
                              expression:
                                "fields.email && fields.email.touched && !fields.email.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "password" }
                    },
                    [_vm._v("Password")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.password,
                            expression: "details.password"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "alpha_dash",
                            expression: "'alpha_dash'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "Leave empty to maintain the old password",
                          id: "password",
                          name: "password"
                        },
                        domProps: { value: _vm.details.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "password",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("password"),
                              expression: "errors.has('password')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("password")))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "acc_num" }
                    },
                    [_vm._v("Contract Number")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.acc_num,
                            expression: "details.acc_num"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "Account number for the user to login with",
                          id: "acc_num",
                          name: "acc_num"
                        },
                        domProps: { value: _vm.details.acc_num },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "acc_num",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("acc_num"),
                              expression: "errors.has('acc_num')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("acc_num")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.acc_num &&
                                _vm.fields.acc_num.touched &&
                                !_vm.fields.acc_num.dirty,
                              expression:
                                "fields.acc_num && fields.acc_num.touched && !fields.acc_num.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "acc_type" }
                    },
                    [_vm._v("Account Type")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.acc_type,
                            expression: "details.acc_type"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "acc_type", name: "acc_type" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.details,
                              "acc_type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Account Type")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "business" } }, [
                          _vm._v("Business")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "private" } }, [
                          _vm._v("Private")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("acc_type"),
                              expression: "errors.has('acc_type')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("acc_type")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.acc_type &&
                                _vm.fields.acc_type.touched &&
                                !_vm.fields.acc_type.dirty,
                              expression:
                                "fields.acc_type && fields.acc_type.touched && !fields.acc_type.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "acc_status" }
                    },
                    [_vm._v("Account Status")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.acc_status,
                            expression: "details.acc_status"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "acc_status", name: "acc_status" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.details,
                              "acc_status",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Account Status")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "dormant" } }, [
                          _vm._v("Dormant")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "active" } }, [
                          _vm._v("Active")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("acc_status"),
                              expression: "errors.has('acc_status')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("acc_status")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.acc_status &&
                                _vm.fields.acc_status.touched &&
                                !_vm.fields.acc_status.dirty,
                              expression:
                                "fields.acc_status && fields.acc_status.touched && !fields.acc_status.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "cot_code_name" }
                    },
                    [_vm._v("COT Code Name")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.cot_code_name,
                            expression: "details.cot_code_name"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "alpha_spaces",
                            expression: "'alpha_spaces'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "The name of the code to show the user that he needs to provide",
                          id: "cot_code_name",
                          name: "cot_code_name"
                        },
                        domProps: { value: _vm.details.cot_code_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "cot_code_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("cot_code_name"),
                              expression: "errors.has('cot_code_name')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("cot_code_name")))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "cot_code" }
                    },
                    [_vm._v("COT Code")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.cot_code,
                            expression: "details.cot_code"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "alpha_spaces",
                            expression: "'alpha_spaces'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "The Code he has to enter to validate it",
                          id: "cot_code",
                          name: "cot_code"
                        },
                        domProps: { value: _vm.details.cot_code },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "cot_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("cot_code"),
                              expression: "errors.has('cot_code')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("cot_code")))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "cot_code_error_msg" }
                    },
                    [_vm._v("Error Message")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.cot_code_error_msg,
                            expression: "details.cot_code_error_msg"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "alpha_spaces|max:30",
                            expression: "'alpha_spaces|max:30'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "The error message to display after he has entered the correct cot code",
                          id: "cot_code_error_msg",
                          name: "cot_code_error_msg"
                        },
                        domProps: { value: _vm.details.cot_code_error_msg },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "cot_code_error_msg",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("cot_code_error_msg"),
                              expression: "errors.has('cot_code_error_msg')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("cot_code_error_msg")))]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "transfer_permitted" }
                    },
                    [_vm._v("Transfer Permitted")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.transfer_permitted,
                            expression: "details.transfer_permitted"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "transfer_permitted",
                          name: "transfer_permitted"
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.details,
                              "transfer_permitted",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Choose One")
                        ]),
                        _vm._v(" "),
                        _c("option", { domProps: { value: true } }, [
                          _vm._v("Permitted")
                        ]),
                        _vm._v(" "),
                        _c("option", { domProps: { value: false } }, [
                          _vm._v("Denied")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("transfer_permitted"),
                              expression: "errors.has('transfer_permitted')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("transfer_permitted")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.transfer_permitted &&
                                _vm.fields.transfer_permitted.touched &&
                                !_vm.fields.transfer_permitted.dirty,
                              expression:
                                "fields.transfer_permitted && fields.transfer_permitted.touched && !fields.transfer_permitted.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "address" }
                    },
                    [_vm._v("Address")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.address,
                            expression: "details.address"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:50",
                            expression: "'required|max:50'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Address of the user",
                          id: "address",
                          name: "address"
                        },
                        domProps: { value: _vm.details.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "address",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("address"),
                              expression: "errors.has('address')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("address")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.address &&
                                _vm.fields.address.touched &&
                                !_vm.fields.address.dirty,
                              expression:
                                "fields.address && fields.address.touched && !fields.address.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "nationality" }
                    },
                    [_vm._v("Nationality")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.details.nationality,
                            expression: "details.nationality"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nationality",
                          id: "nationality",
                          name: "nationality"
                        },
                        domProps: { value: _vm.details.nationality },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.details,
                              "nationality",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("nationality"),
                              expression: "errors.has('nationality')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("nationality")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.nationality &&
                                _vm.fields.nationality.touched &&
                                !_vm.fields.nationality.dirty,
                              expression:
                                "fields.nationality && fields.nationality.touched && !fields.nationality.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm._m(0)
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-footer" })
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("fieldset", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary col-md-offset-5",
          attrs: { type: "submit" }
        },
        [_vm._v("Save")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-92d99e5a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b4188716\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v("\n              User Records\n          ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.$emit("switch-component", {
                        data: null,
                        comp: "CreateUser"
                      })
                    }
                  }
                },
                [_vm._v("Create New User Account")]
              ),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.searchText,
                    expression: "searchText"
                  }
                ],
                staticClass: "pull-right col-md-4",
                attrs: {
                  type: "text",
                  placeholder: "Enter a search parameter"
                },
                domProps: { value: _vm.searchText },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.searchText = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.loading
                      ? _c(
                          "tr",
                          {
                            staticClass: "loading text-center text-danger",
                            attrs: { colspan: "6" }
                          },
                          [
                            _vm._v(
                              "\n                      Loading...\n                  "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.error
                      ? _c("tr", { staticClass: "error" }, [
                          _c("td", { attrs: { colspan: "6" } }, [
                            _vm._v(_vm._s(_vm.error))
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.users, function(user) {
                      return _vm.users
                        ? _c("tr", { key: user.id }, [
                            _c("td", [_vm._v(_vm._s(user.acc_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(user.email))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("currency")(user.acc_balance))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(user.acc_status))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(user.cot_code))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                " " +
                                  _vm._s(user.transder_permitted ? "Yes" : "No")
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-xs btn-info",
                                  on: {
                                    click: function($event) {
                                      _vm.$emit("switch-component", {
                                        data: user,
                                        comp: "ViewDetails"
                                      })
                                    }
                                  }
                                },
                                [_vm._v("Details")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-xs btn-danger",
                                  on: {
                                    click: function($event) {
                                      _vm.deleteUser(user)
                                    }
                                  }
                                },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "default" }, [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acc Balance")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acc Status")]),
        _vm._v(" "),
        _c("th", [_vm._v("COT Code")]),
        _vm._v(" "),
        _c("th", [_vm._v("Transfer Permitted")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b4188716", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-decd438c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v("\n              Messge Records\n          ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-hover table-striped" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    _vm.loading
                      ? _c(
                          "tr",
                          {
                            staticClass: "loading text-center text-danger",
                            attrs: { colspan: "6" }
                          },
                          [
                            _vm._v(
                              "\n                      Loading...\n                  "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.error
                      ? _c("tr", { staticClass: "error" }, [
                          _c("td", { attrs: { colspan: "6" } }, [
                            _vm._v(_vm._s(_vm.error))
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.messages, function(msg) {
                      return _vm.messages
                        ? _c("tr", { key: msg.id }, [
                            _c("td", [_vm._v(_vm._s(msg.sender_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(msg.sender_email))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(_vm._f("truncate")(msg.sender_phone, 80))
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(msg.subject))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(msg.message))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(" " + _vm._s(msg.created_at))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-xs btn-danger",
                                  on: {
                                    click: function($event) {
                                      _vm.deleteMessge(msg)
                                    }
                                  }
                                },
                                [_vm._v("Delete")]
                              )
                            ])
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "default" }, [
        _c("th", [_vm._v("Sender Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sender Email")]),
        _vm._v(" "),
        _c("th", [_vm._v("Sender Phone")]),
        _vm._v(" "),
        _c("th", [_vm._v("Subject")]),
        _vm._v(" "),
        _c("th", [_vm._v("Message")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-decd438c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fc550658\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-md-8 col-md-offset-2" }, [
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-heading" }, [
            _vm._v("\n\t\t\t\t\t\tTransfer to self\n\t\t\t\t\t\t"),
            _c(
              "a",
              {
                staticClass: "btn btn-xs btn-danger pull-right",
                attrs: { href: "#", role: "button" },
                on: {
                  click: function($event) {
                    _vm.$emit("switch-component", {
                      data: _vm.details,
                      comp: "ViewDetails"
                    })
                  }
                }
              },
              [_c("i", { staticClass: "glyphicon glyphicon-remove" })]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    _vm.checkFields()
                  }
                }
              },
              [
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "trans_type" }
                    },
                    [_vm._v("To")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.trans_details.trans_type,
                            expression: "trans_details.trans_type"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { id: "trans_type", name: "trans_type" },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.trans_details,
                              "trans_type",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("Transaction Type")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "debit" } }, [
                          _vm._v("Debit")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "credit" } }, [
                          _vm._v("Credit")
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("trans_type"),
                              expression: "errors.has('trans_type')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("trans_type")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.trans_type &&
                                _vm.fields.trans_type.touched &&
                                !_vm.fields.trans_type.dirty,
                              expression:
                                "fields.trans_type && fields.trans_type.touched && !fields.trans_type.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "amount" }
                    },
                    [_vm._v("Amount")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group input-group" }, [
                      _c("span", { staticClass: "input-group-addon" }, [
                        _vm._v("$")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.trans_details.amount,
                            expression: "trans_details.amount"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|decimal:2",
                            expression: "'required|decimal:2'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder:
                            "Credit will add to account balance and vice versa",
                          id: "amount",
                          name: "amount"
                        },
                        domProps: { value: _vm.trans_details.amount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.trans_details,
                              "amount",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "input-group-addon" }, [
                        _vm._v(".00")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("amount"),
                              expression: "errors.has('amount')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("amount")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.amount &&
                                _vm.fields.amount.touched &&
                                !_vm.fields.amount.dirty,
                              expression:
                                "fields.amount && fields.amount.touched && !fields.amount.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "description" }
                    },
                    [_vm._v("Description")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group input-group" }, [
                      _vm._m(0),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.trans_details.description,
                            expression: "trans_details.description"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|max:80",
                            expression: "'required|max:80'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Transfer Narration",
                          id: "description",
                          name: "description"
                        },
                        domProps: { value: _vm.trans_details.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.trans_details,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("description"),
                              expression: "errors.has('description')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("description")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.description &&
                                _vm.fields.description.touched &&
                                !_vm.fields.description.dirty,
                              expression:
                                "fields.description && fields.description.touched && !fields.description.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-3 control-label",
                      attrs: { for: "trans_date" }
                    },
                    [_vm._v("Transaction Date")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group input-group" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.trans_details.trans_date,
                            expression: "trans_details.trans_date"
                          },
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required|date_format:YYYY-MM-DD",
                            expression: "'required|date_format:YYYY-MM-DD'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Supposed date of the transaction",
                          id: "trans_date",
                          name: "trans_date"
                        },
                        domProps: { value: _vm.trans_details.trans_date },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.trans_details,
                              "trans_date",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "up" }, [
                      _c(
                        "small",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.errors.has("trans_date"),
                              expression: "errors.has('trans_date')"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v(_vm._s(_vm.errors.first("trans_date")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                _vm.fields.trans_date &&
                                _vm.fields.trans_date.touched &&
                                !_vm.fields.trans_date.dirty,
                              expression:
                                "fields.trans_date && fields.trans_date.touched && !fields.trans_date.dirty"
                            }
                          ],
                          staticStyle: {
                            color: "red",
                            display: "block",
                            "text-align": "center"
                          }
                        },
                        [_vm._v("Required Field")]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "clearfix" }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _vm._m(2)
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel-footer" })
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "fa fa-edit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "fa fa-edit" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("fieldset", [
      _c(
        "button",
        {
          staticClass: "btn btn-primary col-md-offset-5",
          attrs: { type: "submit" }
        },
        [_vm._v("Create")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fc550658", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07b57845\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07b57845\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateUser.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("b48ac292", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07b57845\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubCreateUser.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-07b57845\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubCreateUser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c2b8010\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c2b8010\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransactions.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("78a7281a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c2b8010\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewTransactions.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1c2b8010\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewTransactions.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-293c9ec3\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-293c9ec3\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransactions.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("4867d80e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-293c9ec3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewAllTransactions.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-293c9ec3\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewAllTransactions.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49565b22\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49565b22\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewDetails.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("63af8812", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49565b22\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewDetails.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-49565b22\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewDetails.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fad8cf2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fad8cf2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewTransferRequests.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("536cc1c7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fad8cf2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewTransferRequests.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4fad8cf2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewTransferRequests.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f93bef4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f93bef4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/AgentWalletFundingLogsComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("cc02f3fa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f93bef4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AgentWalletFundingLogsComponent.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5f93bef4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AgentWalletFundingLogsComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-620c741c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-620c741c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/DataTableComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3c015b3d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-620c741c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTableComponent.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-620c741c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTableComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7464e386\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7464e386\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllTransferRequests.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("d8362564", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7464e386\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewAllTransferRequests.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7464e386\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewAllTransferRequests.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92d99e5a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92d99e5a\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubEditUser.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7c91b82d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92d99e5a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubEditUser.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-92d99e5a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubEditUser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b4188716\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b4188716\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewUsers.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6893e230", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b4188716\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewUsers.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b4188716\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewUsers.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-decd438c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-decd438c\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubViewAllMessages.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e7cee83a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-decd438c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewAllMessages.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-decd438c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubViewAllMessages.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fc550658\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fc550658\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/PaymentAgent/Resources/js/components/SubComponents/SubCreateTransaction.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2f1d6e1d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fc550658\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubCreateTransaction.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fc550658\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SubCreateTransaction.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=0.js.map