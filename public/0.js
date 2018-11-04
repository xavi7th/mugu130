webpackJsonp([0],{

/***/ "./app/Modules/Admin/Resources/js/components recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AdminCreateAgentComponent": "./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue",
	"./AdminCreateAgentComponent.vue": "./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue",
	"./AdminEditAgentsComponent": "./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue",
	"./AdminEditAgentsComponent.vue": "./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue",
	"./AdminViewAgentFundingsComponent": "./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue",
	"./AdminViewAgentFundingsComponent.vue": "./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue",
	"./AdminViewAgentTransactionsComponent": "./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue",
	"./AdminViewAgentTransactionsComponent.vue": "./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue",
	"./AdminViewAgentsComponent": "./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue",
	"./AdminViewAgentsComponent.vue": "./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue",
	"./AppComponent": "./app/Modules/Admin/Resources/js/components/AppComponent.vue",
	"./AppComponent.vue": "./app/Modules/Admin/Resources/js/components/AppComponent.vue",
	"./layouts/MasterLayoutComponent": "./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue",
	"./layouts/MasterLayoutComponent.vue": "./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue",
	"./misc/LoaderComponent": "./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue",
	"./misc/LoaderComponent.vue": "./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue",
	"./misc/PaginationComponent": "./app/Modules/Admin/Resources/js/components/misc/PaginationComponent.vue",
	"./misc/PaginationComponent.vue": "./app/Modules/Admin/Resources/js/components/misc/PaginationComponent.vue",
	"./partials/AdminAgentsNavComponent": "./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue",
	"./partials/AdminAgentsNavComponent.vue": "./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue",
	"./partials/AdminFooterComponent": "./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue",
	"./partials/AdminFooterComponent.vue": "./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue",
	"./partials/AdminHeaderComponent": "./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue",
	"./partials/AdminHeaderComponent.vue": "./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue",
	"./partials/AdminNavComponent": "./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue",
	"./partials/AdminNavComponent.vue": "./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue"
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
webpackContext.id = "./app/Modules/Admin/Resources/js/components recursive ^\\.\\/.*$";

/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f3c6712\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f3c6712\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0f3c6712"
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0f3c6712", Component.options)
  } else {
    hotAPI.reload("data-v-0f3c6712", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be648d2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5be648d2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue")
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5be648d2", Component.options)
  } else {
    hotAPI.reload("data-v-5be648d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-539e8a85\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-539e8a85\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue")
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-539e8a85", Component.options)
  } else {
    hotAPI.reload("data-v-539e8a85", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16cdd9a6\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-16cdd9a6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue")
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16cdd9a6", Component.options)
  } else {
    hotAPI.reload("data-v-16cdd9a6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-371349c8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-371349c8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue")
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-371349c8", Component.options)
  } else {
    hotAPI.reload("data-v-371349c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63b2b13a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-63b2b13a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-63b2b13a"
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63b2b13a", Component.options)
  } else {
    hotAPI.reload("data-v-63b2b13a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58aea708\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-58aea708\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue")
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58aea708", Component.options)
  } else {
    hotAPI.reload("data-v-58aea708", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/misc/PaginationComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/misc/PaginationComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f6db803e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/misc/PaginationComponent.vue")
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/misc/PaginationComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f6db803e", Component.options)
  } else {
    hotAPI.reload("data-v-f6db803e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-168bfa0a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-168bfa0a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-168bfa0a"
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-168bfa0a", Component.options)
  } else {
    hotAPI.reload("data-v-168bfa0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4685e8ff\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4685e8ff\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue")
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4685e8ff", Component.options)
  } else {
    hotAPI.reload("data-v-4685e8ff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9c805566\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9c805566\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue")
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c805566", Component.options)
  } else {
    hotAPI.reload("data-v-9c805566", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa06d0d\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0aa06d0d\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0aa06d0d"
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
Component.options.__file = "app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0aa06d0d", Component.options)
  } else {
    hotAPI.reload("data-v-0aa06d0d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_endpoints__ = __webpack_require__("./app/Modules/Admin/Resources/js/config/endpoints.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'CreateAgent',
  components: {
    pageLoading: __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default.a,
    MasterLayout: __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default.a,
    AgentMenu: __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default.a
  },
  created: function created() {
    // Customise the validator message to be displayed
    var dict = {
      custom: {
        user_email: {
          email: 'The user email must be a valid email'
        }
      }
    };
    this.$validator.localize('en', dict);
  },
  data: function data() {
    return {
      user_details: null,
      user_email: null,
      loading: false
    };
  },

  computed: {},
  methods: {
    checkFields: function checkFields() {
      return this.$validator.validate();
    },
    findUser: function findUser() {
      var _this = this;

      this.checkFields().then(function (result) {
        if (result) {
          _this.loading = true;
          axios.get(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].adminFindUser + '/' + _this.user_email).then(function (rsp) {
            if (rsp.status == 204) {
              swal('Error', 'User not found. Check email and try again', 'error');
            } else {
              _this.user_details = rsp.data;
            }
            _this.loading = false;
          }, function (err) {
            swal('Error', '' + err, 'error');
            _this.loading = false;
          });
        }
      });
    },
    createAgent: function createAgent() {
      var _this2 = this;

      this.loading = true;
      this.checkFields().then(function (result) {
        if (result) {
          swal({
            title: "Are you sure?",
            text: _this2.user_details.firstname + ' will be made an agent account. Make sure this account is a new account? ',
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
          }).then(function (willCreate) {
            if (willCreate) {
              return axios.put(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].adminCreateAgent, { user_id: _this2.user_details.id });
            } else {
              swal("Cancelled.", {
                icon: "info"
              });
              throw null;
            }
          }).then(function (rsp) {
            if (!rsp.data.status) {
              if (rsp.data.message) {
                _this2.loading = false;
                return swal(rsp.data.message, '', 'error');
              } else {
                _this2.loading = false;;
                return swal('Error', 'Something went wrong at the server.', 'error');
              }
            } else {
              swal({
                title: "Success",
                text: rsp.data.message,
                icon: 'success'
              });
              _this2.$router.push({ name: 'admin.view-agents' });
            }
            _this2.loading = false;
          }).catch(function (err) {
            _this2.loading = false;
            console.log(err);
            if (err) {
              swal("Oh noes!", "The AJAX request failed!", "error");
            } else {
              swal.stopLoading();
              swal.close();
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_endpoints__ = __webpack_require__("./app/Modules/Admin/Resources/js/config/endpoints.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EditAgents',
  components: {
    pageLoading: __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default.a,
    MasterLayout: __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default.a,
    AgentMenu: __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default.a
  },
  created: function created() {
    this.getAgentDetails(this.$route.params.id);
  },
  data: function data() {
    return {
      agent_details: {},
      loading: true
    };
  },

  computed: {},
  methods: {
    getAgentDetails: function getAgentDetails(id) {
      var _this = this;

      axios.get(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].getAgentDetails(id)).then(function (rsp) {
        console.log(rsp);
        _this.agent_details = rsp.data;
        _this.loading = false;
      });
    },
    editAgent: function editAgent() {
      var _this2 = this;

      this.loading = true;
      axios.post(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].editAgentsDetails, { details: this.agent_details }).then(function (rsp) {
        _this2.loading = false;
        _this2.$router.push({ name: 'admin.view-agents' });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_endpoints__ = __webpack_require__("./app/Modules/Admin/Resources/js/config/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ViewAgentFundings',
  components: {
    pageLoading: __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default.a,
    MasterLayout: __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default.a,
    AgentMenu: __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default.a
  },
  created: function created() {
    this.getAllAgentFundings(this.$route.params.id);
  },
  data: function data() {
    return {
      all_agent_fundings: false,
      loading: true
    };
  },

  computed: {
    num_of_agent_fundingss: function num_of_agent_fundingss() {
      return _.size(this.all_agent_fundings);
    }
  },
  methods: {
    getAllAgentFundings: function getAllAgentFundings(id) {
      var _this = this;

      axios.get(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].getAllAgentFundings(id)).then(function (rsp) {
        _this.all_agent_fundings = rsp.data;
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_endpoints__ = __webpack_require__("./app/Modules/Admin/Resources/js/config/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ViewAgentTransactions',
  components: {
    pageLoading: __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default.a,
    MasterLayout: __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default.a,
    AgentMenu: __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default.a
  },
  created: function created() {
    this.getAllAgentTransactions(this.$route.params.id);
  },
  data: function data() {
    return {
      all_agent_transactions: false,
      loading: true
    };
  },

  computed: {
    num_of_agent_transactions: function num_of_agent_transactions() {
      return _.size(this.all_agent_transactions);
    }
  },
  methods: {
    getAllAgentTransactions: function getAllAgentTransactions(id) {
      var _this = this;

      axios.get(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].getAllAgentTransactions(id)).then(function (rsp) {
        _this.all_agent_transactions = rsp.data;
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_endpoints__ = __webpack_require__("./app/Modules/Admin/Resources/js/config/endpoints.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ViewAgents',
  components: {
    pageLoading: __WEBPACK_IMPORTED_MODULE_2__misc_LoaderComponent___default.a,
    MasterLayout: __WEBPACK_IMPORTED_MODULE_0__layouts_MasterLayoutComponent___default.a,
    AgentMenu: __WEBPACK_IMPORTED_MODULE_1__partials_AdminAgentsNavComponent___default.a
  },
  created: function created() {
    this.getAllAgents();
  },
  data: function data() {
    return {
      all_agents: false,
      loading: true
    };
  },

  computed: {
    num_of_agents: function num_of_agents() {
      return _.size(this.all_agents);
    }
  },
  methods: {
    getAllAgents: function getAllAgents() {
      var _this = this;

      axios.get(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].getAllAgents).then(function (rsp) {
        _this.all_agents = rsp.data;
        _this.loading = false;
      });
    },
    deleteAgent: function deleteAgent(agent) {
      var _this2 = this;

      this.loading = true;
      axios.delete(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].deleteAgent + '/' + agent.id).then(function (rsp) {
        _this2.loading = false;
        agent.deleted_at = true;
        // var removed = this.all_agents.indexOf(agent);
        // this.all_agents.splice(removed, 1);
      });
    },
    restoreAgent: function restoreAgent(agent) {
      var _this3 = this;

      this.loading = true;
      axios.delete(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].restoreAgent + '/' + agent.id).then(function (rsp) {
        _this3.loading = false;
        agent.deleted_at = false;
        // var removed = this.all_agents.indexOf(agent);
        // this.all_agents.splice(removed, 1);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AdminHeaderComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_AdminHeaderComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_AdminHeaderComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminNavComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_AdminNavComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_AdminNavComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_AdminFooterComponent__ = __webpack_require__("./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_AdminFooterComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__partials_AdminFooterComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_endpoints__ = __webpack_require__("./app/Modules/Admin/Resources/js/config/endpoints.js");
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MasterLayout',
  created: function created() {
    this.getAdminDetails();
    this.getTotalEarnings();
  },
  data: function data() {
    return {
      admin_details: {},
      total_earnings: 0
    };
  },

  components: {
    AdminHeader: __WEBPACK_IMPORTED_MODULE_0__partials_AdminHeaderComponent___default.a, AdminFooter: __WEBPACK_IMPORTED_MODULE_2__partials_AdminFooterComponent___default.a, AdminNav: __WEBPACK_IMPORTED_MODULE_1__partials_AdminNavComponent___default.a
  },
  methods: {
    logoutAdmin: function logoutAdmin() {
      __WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].logoutAdmin();
    },
    getAdminDetails: function getAdminDetails() {
      var _this = this;

      axios.post(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].getAdminDetails).then(function (rsp) {
        _this.admin_details = rsp.data.userdetails;
      }, function (err) {
        __WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].logoutAdmin('Could not retrieve user details. Logging you out.');
      });
    },
    getTotalEarnings: function getTotalEarnings() {
      var _this2 = this;

      axios.post(__WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].getTotalEarnings).then(function (rsp) {
        _this2.total_earnings = rsp.data.total_earnings;
      }, function (err) {
        __WEBPACK_IMPORTED_MODULE_3__config_endpoints__["a" /* default */].logoutAdmin('Could not retrieve user details. Logging you out.');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Loader',
  props: {
    size: {
      type: Number,
      default: 30
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/misc/PaginationComponent.vue":
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_endpoints__ = __webpack_require__("./app/Modules/Admin/Resources/js/config/endpoints.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AdminAgentsNav',
  props: ['admin_details'],
  data: function data() {
    return {
      routes: __WEBPACK_IMPORTED_MODULE_0__config_endpoints__["a" /* default */]
    };
  },

  methods: {
    setActive: function setActive(num, comp) {
      this.isActive = num;
      this.$emit('go-to', {
        comp: comp
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_endpoints__ = __webpack_require__("./app/Modules/Admin/Resources/js/config/endpoints.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AdminHeader',
  props: ['total_earnings'],
  data: function data() {
    return {
      routes: __WEBPACK_IMPORTED_MODULE_0__config_endpoints__["a" /* default */]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_endpoints__ = __webpack_require__("./app/Modules/Admin/Resources/js/config/endpoints.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AdminNav',
  props: ['admin_details'],
  data: function data() {
    return {
      routes: __WEBPACK_IMPORTED_MODULE_0__config_endpoints__["a" /* default */]
    };
  },

  methods: {
    setActive: function setActive(num, comp) {
      this.isActive = num;
      this.$emit('go-to', {
        comp: comp
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa06d0d\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.item i[data-v-0aa06d0d] {\n  padding-right: 2px;\n}\n.header[data-v-0aa06d0d] {\n  color: white;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;CAAE;AAEvB;EACE,aAAa;CAAE","file":"AdminNavComponent.vue","sourcesContent":[".item i {\n  padding-right: 2px; }\n\n.header {\n  color: white; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f3c6712\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.ui.squared[data-v-0f3c6712] {\n  border-radius: 4px;\n}\n.ui.form[data-v-0f3c6712] {\n  text-align: center;\n}\n.ui .message[data-v-0f3c6712] {\n  max-width: 35%;\n  margin: 10px auto;\n}\n@media (max-width: 767px) {\n.ui .message[data-v-0f3c6712] {\n      max-width: none;\n}\n}\nh1[data-v-0f3c6712] {\n  font-family: alegreya sans;\n  font-weight: 100;\n  margin-bottom: 0px;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;CAAE;AAEvB;EACE,eAAe;EACf,kBAAkB;CAAE;AACpB;AACE;MACE,gBAAgB;CAAE;CAAE;AAE1B;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,mBAAmB;CAAE","file":"AdminCreateAgentComponent.vue","sourcesContent":[".ui.squared {\n  border-radius: 4px; }\n\n.ui.form {\n  text-align: center; }\n\n.ui .message {\n  max-width: 35%;\n  margin: 10px auto; }\n  @media (max-width: 767px) {\n    .ui .message {\n      max-width: none; } }\n\nh1 {\n  font-family: alegreya sans;\n  font-weight: 100;\n  margin-bottom: 0px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-168bfa0a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.item i[data-v-168bfa0a] {\n  padding-right: 2px;\n}\n#u_details[data-v-168bfa0a] {\n  margin-bottom: 80px !important;\n  background-color: transparent !important;\n  border-bottom: none !important;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;CAAE;AAEvB;EACE,+BAA+B;EAC/B,yCAAyC;EACzC,+BAA+B;CAAE","file":"AdminAgentsNavComponent.vue","sourcesContent":[".item i {\n  padding-right: 2px; }\n\n#u_details {\n  margin-bottom: 80px !important;\n  background-color: transparent !important;\n  border-bottom: none !important; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16cdd9a6\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd h1 {\n  text-align: center;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;CAAE","file":"AdminViewAgentTransactionsComponent.vue","sourcesContent":["td h1 {\n  text-align: center; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-371349c8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AdminViewAgentsComponent.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4685e8ff\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AdminFooterComponent.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-539e8a85\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ntd h1 {\n  text-align: center;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue"],"names":[],"mappings":";AAAA;EACE,mBAAmB;CAAE","file":"AdminViewAgentFundingsComponent.vue","sourcesContent":["td h1 {\n  text-align: center; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58aea708\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.loader {\n  display: block;\n  border: 5px solid rgba(189,189,189, 0.25);\n  border-left-color: rgb(3, 169, 244);\n  border-top-color: rgb(3, 169, 244);\n  border-radius: 50%;\n  -webkit-animation: rotate 600ms infinite linear;\n          animation: rotate 600ms infinite linear;\n  margin: 0 auto;\n}\n@-webkit-keyframes rotate {\nto {\n        -webkit-transform: rotate(1turn);\n                transform: rotate(1turn)\n}\n}\n@keyframes rotate {\nto {\n        -webkit-transform: rotate(1turn);\n                transform: rotate(1turn)\n}\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/Admin/Resources/js/components/misc/app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue"],"names":[],"mappings":";AAiBA;EACA,eAAA;EACA,0CAAA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,gDAAA;UAAA,wCAAA;EACA,eAAA;CACA;AAEA;AACA;QACA,iCAAA;gBAAA,wBAAA;CACA;CACA;AAJA;AACA;QACA,iCAAA;gBAAA,wBAAA;CACA;CACA","file":"LoaderComponent.vue","sourcesContent":["<template>\n  <div class=\"loader\" :style=\"{ width: size + 'px', height: size + 'px' }\"></div>\n</template>\n\n<script>\n  export default {\n      name: 'Loader',\n      props: {\n        size: {\n          type: Number,\n          default: 30\n        }\n      }\n  }\n</script>\n\n<style>\n  .loader {\n    display: block;\n    border: 5px solid rgba(189,189,189, 0.25);\n    border-left-color: rgb(3, 169, 244);\n    border-top-color: rgb(3, 169, 244);\n    border-radius: 50%;\n    animation: rotate 600ms infinite linear;\n    margin: 0 auto;\n  }\n\n  @keyframes rotate {\n      to {\n          transform: rotate(1turn)\n        }\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be648d2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\nui.square{\n  border-radius: 4px;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/Admin/Resources/js/components/app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue"],"names":[],"mappings":";AA2JA;EACA,mBAAA;CACA","file":"AdminEditAgentsComponent.vue","sourcesContent":["<template>\n\n  <master-layout>\n\n      <template slot=\"content-section\">\n\n        <agent-menu></agent-menu>\n\n          <div class=\"grid-container\">\n\n            <div class=\"grid-100\">\n\n              <div class=\"ui red segment\">\n\n                <transition name=\"slide-in\"  mode=\"out-in\">\n\n                  <page-loading :size=\"60\" v-if=\"loading\"></page-loading>\n\n                  <form class=\"ui form\" name=\"edit\" v-else @submit.prevent=\"editAgent\">\n\n                    <h2 class=\"ui dividing header\">Edit Agent's Information</h2>\n\n                    <div class=\"field\">\n                      <label>Name</label>\n                      <div class=\"two fields\">\n                        <div class=\"field\">\n                          <input type=\"text\" name=\"firstname\" placeholder=\"First Name\" v-model=\"agent_details.firstname\">\n                        </div>\n                        <div class=\"field\">\n                          <input type=\"text\" name=\"lastname\" placeholder=\"Last Name\" v-model=\"agent_details.lastname\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <div class=\"two fields\">\n                        <div class=\"field\">\n                          <label>Password</label>\n                          <input type=\"password\" name=\"password\" placeholder=\"Enter Password\" v-model=\"agent_details.password\">\n                        </div>\n                        <div class=\"field\">\n                          <div class=\"three fields\">\n                            <div class=\"field\">\n                              <label>Total Units Purchsased</label>\n                              <input type=\"number\" name=\"num_of_referrals\" placeholder=\"Units Purchased\" readonly=\"readonly\"  v-model=\"agent_details.units_purchased\">\n                            </div>\n                            <div class=\"field\">\n                              <label>Wallet Balance</label>\n                              <input type=\"number\" name=\"available_units\" placeholder=\"Wallet Balance\" readonly=\"readonly\"  v-model=\"agent_details.available_units\">\n                            </div>\n                            <div class=\"field\">\n                              <label>Profit</label>\n                              <input type=\"number\" name=\"untransferred_earnings\" placeholder=\"Untransferred Earnings\" readonly=\"readonly\"  v-model=\"agent_details.total_untransferred_earnings\">\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"field\">\n                      <div class=\"two fields\">\n                        <div class=\"field\">\n                          <label>Account Number</label>\n                          <input type=\"text\" name=\"phone1\" placeholder=\"Account Number\"  v-model=\"agent_details.acct_no\">\n                        </div>\n                        <div class=\"field\">\n                          <label>Bank Name</label>\n                          <input type=\"text\" name=\"available_units\" placeholder=\"Bank Name\"  v-model=\"agent_details.bank\">\n                        </div>\n                      </div>\n                      <div class=\"three fields\">\n                        <div class=\"field\">\n                          <label>Account Type</label>\n                          <input type=\"text\" name=\"earnings\" placeholder=\"Account Type\"  v-model=\"agent_details.acct_type\">\n                        </div>\n                        <div class=\"field\">\n                          <label>Phone Number</label>\n                          <input type=\"text\" name=\"phone1\" placeholder=\"Phone Number\"  v-model=\"agent_details.phone1\">\n                        </div>\n                        <div class=\"field\">\n                          <label>Phone Network</label>\n                          <input type=\"text\" name=\"network\" placeholder=\"Phone Number\"  v-model=\"agent_details.network\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"field\">\n                      <div class=\"fields\">\n                        <div class=\"eight wide field\">\n                          <label>Email Address</label>\n                          <input type=\"text\" name=\"email\" placeholder=\"Email Address\"  v-model=\"agent_details.email\">\n                        </div>\n                        <div class=\"eight wide field\">\n                          <label>Address</label>\n                          <textarea rows=\"2\" name=\"address\" placeholder=\"Address\"  v-model=\"agent_details.address\"></textarea>\n                        </div>\n\n                      </div>\n                    </div>\n\n                    <button type=\"submit\" class=\"ui button green\" tabindex=\"0\">Submit</button>\n                  </form>\n\n                </transition>\n\n              </div>\n            </div>\n          </div>\n\n      </template>\n\n    </master-layout>\n</template>\n<script>\n    import MasterLayout from './layouts/MasterLayoutComponent'\n    import AgentMenu from './partials/AdminAgentsNavComponent'\n    import Loader from './misc/LoaderComponent'\n    import apiRoutes, { httpAdminApiRootUrl } from '../config/endpoints';\n\n    export default {\n        name: 'EditAgents',\n        components: {\n            pageLoading: Loader,\n            MasterLayout,\n            AgentMenu\n        },\n        created(){\n          this.getAgentDetails(this.$route.params.id)\n        },\n        data() {\n          return {\n            agent_details: {},\n            loading: true\n          };\n        },\n        computed: {\n\n        },\n        methods: {\n          getAgentDetails(id){\n            axios.get( apiRoutes.getAgentDetails(id) ).then(rsp => {\n              console.log(rsp);\n              this.agent_details = rsp.data;\n              this.loading = false;\n            });\n          },\n          editAgent(){\n            this.loading = true;\n            axios.post(apiRoutes.editAgentsDetails, {details: this.agent_details} ).then(rsp => {\n              this.loading = false;\n              this.$router.push({name : 'admin.view-agents'});\n            });\n          }\n        }\n    }\n</script>\n<style>\n  ui.square{\n    border-radius: 4px;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63b2b13a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\ndiv#main-controller #dashboard[data-v-63b2b13a]{\n  padding: 0px 0px 100px 0px;\n}\n", "", {"version":3,"sources":["/Applications/XAMPP/xamppfiles/htdocs/TanshiL5/app/Modules/Admin/Resources/js/components/layouts/app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue"],"names":[],"mappings":";AAiEA;EACA,2BAAA;CACA","file":"MasterLayoutComponent.vue","sourcesContent":["<template>\n\n  <div>\n\n      <admin-header  v-on:logout-admin=\"logoutAdmin()\" v-bind=\"{total_earnings}\"></admin-header>\n\n      <admin-nav v-bind=\"{admin_details}\"></admin-nav>\n\n      <div id=\"dashboard\">\n\n        <slot name=\"content-section\"></slot>\n\n      </div>\n\n      <admin-footer></admin-footer>\n\n  </div>\n\n</template>\n\n<script>\n  import AdminHeader from '../partials/AdminHeaderComponent'\n  import AdminNav from '../partials/AdminNavComponent'\n  import AdminFooter from '../partials/AdminFooterComponent'\n  import apiRoutes from '../../config/endpoints'\n\n  export default {\n    name: 'MasterLayout',\n    created(){\n      this.getAdminDetails();\n      this.getTotalEarnings();\n    },\n    data (){\n      return {\n        admin_details: {},\n        total_earnings: 0\n      }\n    },\n    components: {\n      AdminHeader, AdminFooter, AdminNav\n    },\n    methods: {\n      logoutAdmin(){\n        apiRoutes.logoutAdmin();\n      },\n      getAdminDetails(){\n        axios.post(apiRoutes.getAdminDetails).then(rsp => {\n          this.admin_details = rsp.data.userdetails;\n        },\n        err => {\n          apiRoutes.logoutAdmin('Could not retrieve user details. Logging you out.');\n        });\n      },\n      getTotalEarnings(){\n        axios.post(apiRoutes.getTotalEarnings).then(rsp => {\n          this.total_earnings = rsp.data.total_earnings;\n        },\n        err => {\n          apiRoutes.logoutAdmin('Could not retrieve user details. Logging you out.');\n        });\n      }\n    }\n  }\n</script>\n<style scoped>\n  div#main-controller #dashboard{\n    padding: 0px 0px 100px 0px;\n  }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9c805566\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"AdminHeaderComponent.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0aa06d0d\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { attrs: { id: "u_details" } }, [
    _c("div", { staticClass: "grid-container" }, [
      _c("div", { staticClass: "grid-80  push-10 flex-center" }, [
        _c(
          "div",
          { staticClass: "ui compact menu" },
          [
            _c(
              "a",
              {
                staticClass: "item",
                attrs: { href: _vm.routes.adminViewQuestions }
              },
              [
                _c("i", { staticClass: "tasks icon" }),
                _vm._v("\n          Questions\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "item",
                attrs: { href: _vm.routes.adminViewAdmins }
              },
              [
                _c("i", { staticClass: "user mdicon" }),
                _vm._v("\n          Admins\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "item",
                attrs: { href: _vm.routes.adminViewUsers }
              },
              [
                _c("i", { staticClass: "venus mars icon" }),
                _vm._v("\n          Users\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "item",
                attrs: { href: _vm.routes.adminViewEarnings }
              },
              [
                _c("i", { staticClass: "money bill alternate outline icon" }),
                _vm._v("\n          Earnings\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "item",
                attrs: { href: _vm.routes.adminViewGames }
              },
              [
                _c("i", { staticClass: "gamepad icon" }),
                _vm._v("\n          Games\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "item",
                attrs: { href: _vm.routes.adminViewTransactions }
              },
              [
                _c("i", { staticClass: "file alternate outline icon" }),
                _vm._v("\n          Transactions\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "item",
                attrs: { href: _vm.routes.adminViewMessages }
              },
              [
                _c("i", { staticClass: "folder open outline icon" }),
                _vm._v("\n          Messages\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "item",
                attrs: {
                  to: { name: "admin.view-agents" },
                  "active-class": "active"
                }
              },
              [
                _c("i", { staticClass: "users icon" }),
                _vm._v("\n          Agents\n        ")
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0aa06d0d", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f3c6712\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "master-layout",
    [
      _c(
        "template",
        { slot: "content-section" },
        [
          _c("agent-menu"),
          _vm._v(" "),
          _c("div", { staticClass: "grid-container" }, [
            _c("div", { staticClass: "grid-100" }, [
              _c(
                "div",
                { staticClass: "ui red segment" },
                [
                  _c(
                    "transition",
                    { attrs: { name: "slide-in", mode: "out-in" } },
                    [
                      _vm.loading
                        ? _c("page-loading", { attrs: { size: 60 } })
                        : _vm.user_details
                          ? _c(
                              "div",
                              { key: 1, staticClass: "ui purple segment" },
                              [
                                _c(
                                  "form",
                                  {
                                    staticClass: "ui form",
                                    on: {
                                      submit: function($event) {
                                        $event.preventDefault()
                                        return _vm.createAgent($event)
                                      }
                                    }
                                  },
                                  [
                                    _c("h1", { staticClass: "ui header" }, [
                                      _vm._v(
                                        "Make " +
                                          _vm._s(_vm.user_details.firstname) +
                                          " an Agent"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "ui divider" }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "user-details ui positive message"
                                      },
                                      [
                                        _c("h4", [
                                          _vm._v(
                                            "User's Name: " +
                                              _vm._s(
                                                _vm.user_details.firstname
                                              ) +
                                              " " +
                                              _vm._s(_vm.user_details.lastname)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("h4", [
                                          _vm._v(
                                            "User's Email: " +
                                              _vm._s(_vm.user_details.email)
                                          )
                                        ])
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
                                          disabled: _vm.loading,
                                          type: "submit"
                                        }
                                      },
                                      [_vm._v("Create Agent")]
                                    )
                                  ]
                                )
                              ]
                            )
                          : _c("div", { staticClass: "ui red segment" }, [
                              _c(
                                "form",
                                {
                                  key: 2,
                                  staticClass: "ui form",
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.findUser($event)
                                    }
                                  }
                                },
                                [
                                  _c("h1", { staticClass: "ui header" }, [
                                    _vm._v("Fund a User")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "ui divider" }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "ui search",
                                      class: { loading: _vm.loading }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "ui icon input" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.user_email,
                                                expression: "user_email"
                                              },
                                              {
                                                name: "validate",
                                                rawName: "v-validate",
                                                value: "email",
                                                expression: "'email'"
                                              }
                                            ],
                                            staticClass: "prompt",
                                            attrs: {
                                              type: "text",
                                              placeholder:
                                                "enter email address",
                                              name: "user_email",
                                              autofocus: ""
                                            },
                                            domProps: { value: _vm.user_email },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.user_email =
                                                  $event.target.value
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            staticClass: "search icon"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm.errors.has("user_email")
                                        ? _c(
                                            "div",
                                            {
                                              staticClass: "ui negative message"
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "close icon"
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "header" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.errors.first(
                                                        "user_email"
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        : _vm._e()
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
                                          _vm.loading || !_vm.user_email,
                                        type: "submit"
                                      }
                                    },
                                    [_vm._v("Search")]
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
            ])
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0f3c6712", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-168bfa0a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { attrs: { id: "u_details" } }, [
    _c("div", { staticClass: "grid-container" }, [
      _c("div", { staticClass: "grid-80  push-10 flex-center" }, [
        _c(
          "div",
          { staticClass: "ui compact menu inverted" },
          [
            _c(
              "router-link",
              {
                staticClass: "item red",
                attrs: {
                  to: { name: "admin.view-agents" },
                  "active-class": "active"
                }
              },
              [
                _c("i", { staticClass: "users icon" }),
                _vm._v("\n          View Agents\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "item red",
                attrs: {
                  to: { name: "admin.create-agent" },
                  "active-class": "active"
                }
              },
              [
                _c("i", { staticClass: "user plus icon" }),
                _vm._v("\n          Create Agent\n        ")
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-168bfa0a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-16cdd9a6\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "master-layout",
    [
      _c(
        "template",
        { slot: "content-section" },
        [
          _c("agent-menu"),
          _vm._v(" "),
          _c("div", { staticClass: "grid-container" }, [
            _c("div", { staticClass: "grid-100" }, [
              _c(
                "div",
                { staticClass: "ui red segment" },
                [
                  !_vm.loading
                    ? _c("div", { staticClass: "grid-100" }, [
                        _c("div", { staticClass: "grid-40" }, [
                          _c(
                            "div",
                            { staticClass: "ui segment compact left floated" },
                            [
                              _c(
                                "div",
                                { staticClass: "ui horizontal statistic" },
                                [
                                  _c("div", { staticClass: "value" }, [
                                    _vm._v(
                                      _vm._s(_vm.num_of_agent_transactions)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "label" }, [
                                    _vm._v("Transactions")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "grid-60" }, [
                          _c(
                            "div",
                            {
                              staticClass: "ui search flex-center",
                              staticStyle: { "justify-content": "flex-end" }
                            },
                            [
                              _c("div", { staticClass: "ui icon input" }, [
                                _c("input", {
                                  staticClass: "prompt",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Search..."
                                  }
                                }),
                                _vm._v(" "),
                                _c("i", { staticClass: "search icon" })
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "transition",
                    { attrs: { name: "slide-in", mode: "out-in" } },
                    [
                      _vm.loading
                        ? _c("page-loading", { attrs: { size: 60 } })
                        : _c(
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
                                  _c("th", [_vm._v("Status")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Date")])
                                ])
                              ]),
                              _vm._v(" "),
                              _vm.num_of_agent_transactions > 0
                                ? _c(
                                    "tbody",
                                    _vm._l(_vm.all_agent_transactions, function(
                                      trans
                                    ) {
                                      return _c("tr", [
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              trans.credited_user.firstname
                                            ) +
                                              " " +
                                              _vm._s(
                                                trans.credited_user.lastname
                                              )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(trans.credited_user.email)
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("currency")(
                                                trans.amount,
                                                "₦"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(trans.status))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(trans.created_at))
                                        ])
                                      ])
                                    })
                                  )
                                : _c("tbody", [
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "5" } }, [
                                        _c("h1", [
                                          _vm._v("No available Transactions")
                                        ])
                                      ])
                                    ])
                                  ])
                            ]
                          )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-16cdd9a6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-371349c8\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "master-layout",
    [
      _c(
        "template",
        { slot: "content-section" },
        [
          _c("agent-menu"),
          _vm._v(" "),
          _c("div", { staticClass: "grid-container" }, [
            _c("div", { staticClass: "grid-100" }, [
              _c(
                "div",
                { staticClass: "ui red segment" },
                [
                  !_vm.loading
                    ? _c("div", { staticClass: "grid-100" }, [
                        _c("div", { staticClass: "grid-40" }, [
                          _c(
                            "div",
                            { staticClass: "ui segment compact left floated" },
                            [
                              _c(
                                "div",
                                { staticClass: "ui horizontal statistic" },
                                [
                                  _c("div", { staticClass: "value" }, [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(_vm.num_of_agents) +
                                        "\n                      "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "label" }, [
                                    _vm._v(
                                      "\n                        Agents\n                      "
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "grid-15" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "grid-45" }, [
                          _c(
                            "div",
                            {
                              staticClass: "ui search flex-center",
                              staticStyle: { "justify-content": "flex-end" }
                            },
                            [
                              _c("div", { staticClass: "ui icon input" }, [
                                _c("input", {
                                  staticClass: "prompt",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Search..."
                                  }
                                }),
                                _vm._v(" "),
                                _c("i", { staticClass: "search icon" })
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "results" })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "transition",
                    { attrs: { name: "slide-in", mode: "out-in" } },
                    [
                      _vm.loading
                        ? _c("page-loading", { attrs: { size: 60 } })
                        : _c(
                            "table",
                            { staticClass: "ui  striped celled table" },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [_vm._v("S/N")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("E-Mail")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Full Name")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Available Units")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Profits")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Account Status")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Actions")])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "tbody",
                                _vm._l(_vm.all_agents, function(agent) {
                                  return _c("tr", [
                                    _c("td", [_vm._v(_vm._s(agent.id))]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(agent.email))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        "\n                        " +
                                          _vm._s(agent.firstname) +
                                          " " +
                                          _vm._s(agent.lastname) +
                                          "\n                        "
                                      ),
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "ui mini buttons right floated"
                                        },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "ui purple button",
                                              attrs: {
                                                to: {
                                                  name:
                                                    "admin.view-agent-transactions",
                                                  params: { id: agent.id }
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                Transactions "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "ui orange button",
                                              attrs: {
                                                to: {
                                                  name:
                                                    "admin.view-agent-fundings",
                                                  params: { id: agent.id }
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                Fundings "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("currency")(
                                            agent.available_units,
                                            "₦"
                                          )
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          _vm._f("currency")(
                                            agent.total_untransferred_earnings,
                                            "₦"
                                          )
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(
                                        _vm._s(
                                          agent.deleted_at
                                            ? "Deleted"
                                            : agent.useraccstatus
                                        )
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c(
                                        "div",
                                        { staticClass: "ui mini buttons" },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass: "ui orange button",
                                              attrs: {
                                                to: {
                                                  name: "admin.edit-agent",
                                                  params: { id: agent.id }
                                                },
                                                "active-class": "active"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                              Edit\n                          "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("div", { staticClass: "or" }),
                                          _vm._v(" "),
                                          agent.deleted_at
                                            ? _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "ui green button",
                                                  on: {
                                                    click: function($event) {
                                                      _vm.restoreAgent(agent)
                                                    }
                                                  }
                                                },
                                                [_vm._v("Restore")]
                                              )
                                            : _c(
                                                "button",
                                                {
                                                  staticClass: "ui red button",
                                                  on: {
                                                    click: function($event) {
                                                      _vm.deleteAgent(agent)
                                                    }
                                                  }
                                                },
                                                [_vm._v("Delete")]
                                              )
                                        ],
                                        1
                                      )
                                    ])
                                  ])
                                })
                              )
                            ]
                          )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-371349c8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4685e8ff\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", {}, [
      _c("div", { staticClass: "grid-container " }, [
        _c("div", { staticClass: "grid-100" }, [
          _c(
            "div",
            { staticClass: "ui right floated celled horizontal list" },
            [
              _c(
                "a",
                { staticClass: "item", attrs: { target: "_self", href: "#" } },
                [_vm._v("© 2018 FastPlay24 & Tcom ")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "deg" }, [_vm._v("·")]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "item",
                  attrs: { target: "_blank", href: "/terms-and-conditions" }
                },
                [_vm._v("Terms")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "deg" }, [_vm._v("·")]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "item",
                  attrs: { target: "_blank", href: "/privacy" }
                },
                [_vm._v("Privacy")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "deg" }, [_vm._v("·")]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "item",
                  attrs: {
                    target: "_self",
                    href: "/frequently-asked-questions"
                  }
                },
                [_vm._v("Help & FAQs")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "deg" }, [_vm._v("·")]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "item",
                  attrs: { target: "_self", href: "support-center" }
                },
                [_vm._v("Support")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "deg" }, [_vm._v("·")]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "item",
                  attrs: { target: "_self", href: "/calculator" }
                },
                [_vm._v("Calculator")]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "ui celled horizontal list" }, [
            _c(
              "a",
              {
                staticClass: "item",
                attrs: {
                  href: "https://www.facebook.com/fastplay24/",
                  target: "_blank"
                }
              },
              [_vm._v("Facebook")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "deg" }, [_vm._v("·")]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "item",
                attrs: {
                  href: "https://www.twitter.com/fastplay24/",
                  target: "_blank"
                }
              },
              [_vm._v("Twitter")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "deg" }, [_vm._v("·")]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "item",
                attrs: {
                  href: "https://www.instagram.com/fastplay24/",
                  target: "_blank"
                }
              },
              [_vm._v("Instagram")]
            )
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-4685e8ff", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-539e8a85\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "master-layout",
    [
      _c(
        "template",
        { slot: "content-section" },
        [
          _c("agent-menu"),
          _vm._v(" "),
          _c("div", { staticClass: "grid-container" }, [
            _c("div", { staticClass: "grid-100" }, [
              _c(
                "div",
                { staticClass: "ui red segment" },
                [
                  !_vm.loading
                    ? _c("div", { staticClass: "grid-100" }, [
                        _c("div", { staticClass: "grid-40" }, [
                          _c(
                            "div",
                            { staticClass: "ui segment compact left floated" },
                            [
                              _c(
                                "div",
                                { staticClass: "ui horizontal statistic" },
                                [
                                  _c("div", { staticClass: "value" }, [
                                    _vm._v(_vm._s(_vm.num_of_agent_fundingss))
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "label" }, [
                                    _vm._v("Fundings")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "grid-60" }, [
                          _c(
                            "div",
                            {
                              staticClass: "ui search flex-center",
                              staticStyle: { "justify-content": "flex-end" }
                            },
                            [
                              _c("div", { staticClass: "ui icon input" }, [
                                _c("input", {
                                  staticClass: "prompt",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Search..."
                                  }
                                }),
                                _vm._v(" "),
                                _c("i", { staticClass: "search icon" })
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("br")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "transition",
                    { attrs: { name: "slide-in", mode: "out-in" } },
                    [
                      _vm.loading
                        ? _c("page-loading", { attrs: { size: 60 } })
                        : _c(
                            "table",
                            {
                              staticClass: "ui striped single line table",
                              attrs: { id: "transactions-table" }
                            },
                            [
                              _c("thead", [
                                _c("tr", [
                                  _c("th", [_vm._v("ID")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Amount")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Status")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Transaction Type")]),
                                  _vm._v(" "),
                                  _c("th", [_vm._v("Date")])
                                ])
                              ]),
                              _vm._v(" "),
                              _vm.num_of_agent_fundingss > 0
                                ? _c(
                                    "tbody",
                                    _vm._l(_vm.all_agent_fundings, function(
                                      trans
                                    ) {
                                      return _c("tr", [
                                        _c("td", [_vm._v(_vm._s(trans.id))]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("currency")(
                                                trans.amount,
                                                "₦"
                                              )
                                            )
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(trans.status))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(trans.trans_type))
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _vm._v(_vm._s(trans.created_at))
                                        ])
                                      ])
                                    })
                                  )
                                : _c("tbody", [
                                    _c("tr", [
                                      _c("td", { attrs: { colspan: "5" } }, [
                                        _c("h1", [
                                          _vm._v("No available Fundings")
                                        ])
                                      ])
                                    ])
                                  ])
                            ]
                          )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-539e8a85", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-58aea708\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    staticClass: "loader",
    style: { width: _vm.size + "px", height: _vm.size + "px" }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58aea708", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5be648d2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "master-layout",
    [
      _c(
        "template",
        { slot: "content-section" },
        [
          _c("agent-menu"),
          _vm._v(" "),
          _c("div", { staticClass: "grid-container" }, [
            _c("div", { staticClass: "grid-100" }, [
              _c(
                "div",
                { staticClass: "ui red segment" },
                [
                  _c(
                    "transition",
                    { attrs: { name: "slide-in", mode: "out-in" } },
                    [
                      _vm.loading
                        ? _c("page-loading", { attrs: { size: 60 } })
                        : _c(
                            "form",
                            {
                              staticClass: "ui form",
                              attrs: { name: "edit" },
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.editAgent($event)
                                }
                              }
                            },
                            [
                              _c("h2", { staticClass: "ui dividing header" }, [
                                _vm._v("Edit Agent's Information")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "field" }, [
                                _c("label", [_vm._v("Name")]),
                                _vm._v(" "),
                                _c("div", { staticClass: "two fields" }, [
                                  _c("div", { staticClass: "field" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.agent_details.firstname,
                                          expression: "agent_details.firstname"
                                        }
                                      ],
                                      attrs: {
                                        type: "text",
                                        name: "firstname",
                                        placeholder: "First Name"
                                      },
                                      domProps: {
                                        value: _vm.agent_details.firstname
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.agent_details,
                                            "firstname",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "field" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.agent_details.lastname,
                                          expression: "agent_details.lastname"
                                        }
                                      ],
                                      attrs: {
                                        type: "text",
                                        name: "lastname",
                                        placeholder: "Last Name"
                                      },
                                      domProps: {
                                        value: _vm.agent_details.lastname
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.agent_details,
                                            "lastname",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "field" }, [
                                _c("div", { staticClass: "two fields" }, [
                                  _c("div", { staticClass: "field" }, [
                                    _c("label", [_vm._v("Password")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.agent_details.password,
                                          expression: "agent_details.password"
                                        }
                                      ],
                                      attrs: {
                                        type: "password",
                                        name: "password",
                                        placeholder: "Enter Password"
                                      },
                                      domProps: {
                                        value: _vm.agent_details.password
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.agent_details,
                                            "password",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "field" }, [
                                    _c("div", { staticClass: "three fields" }, [
                                      _c("div", { staticClass: "field" }, [
                                        _c("label", [
                                          _vm._v("Total Units Purchsased")
                                        ]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.agent_details
                                                  .units_purchased,
                                              expression:
                                                "agent_details.units_purchased"
                                            }
                                          ],
                                          attrs: {
                                            type: "number",
                                            name: "num_of_referrals",
                                            placeholder: "Units Purchased",
                                            readonly: "readonly"
                                          },
                                          domProps: {
                                            value:
                                              _vm.agent_details.units_purchased
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.agent_details,
                                                "units_purchased",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "field" }, [
                                        _c("label", [_vm._v("Wallet Balance")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.agent_details
                                                  .available_units,
                                              expression:
                                                "agent_details.available_units"
                                            }
                                          ],
                                          attrs: {
                                            type: "number",
                                            name: "available_units",
                                            placeholder: "Wallet Balance",
                                            readonly: "readonly"
                                          },
                                          domProps: {
                                            value:
                                              _vm.agent_details.available_units
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.agent_details,
                                                "available_units",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "field" }, [
                                        _c("label", [_vm._v("Profit")]),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value:
                                                _vm.agent_details
                                                  .total_untransferred_earnings,
                                              expression:
                                                "agent_details.total_untransferred_earnings"
                                            }
                                          ],
                                          attrs: {
                                            type: "number",
                                            name: "untransferred_earnings",
                                            placeholder:
                                              "Untransferred Earnings",
                                            readonly: "readonly"
                                          },
                                          domProps: {
                                            value:
                                              _vm.agent_details
                                                .total_untransferred_earnings
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.agent_details,
                                                "total_untransferred_earnings",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "field" }, [
                                _c("div", { staticClass: "two fields" }, [
                                  _c("div", { staticClass: "field" }, [
                                    _c("label", [_vm._v("Account Number")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.agent_details.acct_no,
                                          expression: "agent_details.acct_no"
                                        }
                                      ],
                                      attrs: {
                                        type: "text",
                                        name: "phone1",
                                        placeholder: "Account Number"
                                      },
                                      domProps: {
                                        value: _vm.agent_details.acct_no
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.agent_details,
                                            "acct_no",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "field" }, [
                                    _c("label", [_vm._v("Bank Name")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.agent_details.bank,
                                          expression: "agent_details.bank"
                                        }
                                      ],
                                      attrs: {
                                        type: "text",
                                        name: "available_units",
                                        placeholder: "Bank Name"
                                      },
                                      domProps: {
                                        value: _vm.agent_details.bank
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.agent_details,
                                            "bank",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "three fields" }, [
                                  _c("div", { staticClass: "field" }, [
                                    _c("label", [_vm._v("Account Type")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.agent_details.acct_type,
                                          expression: "agent_details.acct_type"
                                        }
                                      ],
                                      attrs: {
                                        type: "text",
                                        name: "earnings",
                                        placeholder: "Account Type"
                                      },
                                      domProps: {
                                        value: _vm.agent_details.acct_type
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.agent_details,
                                            "acct_type",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "field" }, [
                                    _c("label", [_vm._v("Phone Number")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.agent_details.phone1,
                                          expression: "agent_details.phone1"
                                        }
                                      ],
                                      attrs: {
                                        type: "text",
                                        name: "phone1",
                                        placeholder: "Phone Number"
                                      },
                                      domProps: {
                                        value: _vm.agent_details.phone1
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.agent_details,
                                            "phone1",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "field" }, [
                                    _c("label", [_vm._v("Phone Network")]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.agent_details.network,
                                          expression: "agent_details.network"
                                        }
                                      ],
                                      attrs: {
                                        type: "text",
                                        name: "network",
                                        placeholder: "Phone Number"
                                      },
                                      domProps: {
                                        value: _vm.agent_details.network
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.agent_details,
                                            "network",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "field" }, [
                                _c("div", { staticClass: "fields" }, [
                                  _c(
                                    "div",
                                    { staticClass: "eight wide field" },
                                    [
                                      _c("label", [_vm._v("Email Address")]),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.agent_details.email,
                                            expression: "agent_details.email"
                                          }
                                        ],
                                        attrs: {
                                          type: "text",
                                          name: "email",
                                          placeholder: "Email Address"
                                        },
                                        domProps: {
                                          value: _vm.agent_details.email
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.agent_details,
                                              "email",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "eight wide field" },
                                    [
                                      _c("label", [_vm._v("Address")]),
                                      _vm._v(" "),
                                      _c("textarea", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.agent_details.address,
                                            expression: "agent_details.address"
                                          }
                                        ],
                                        attrs: {
                                          rows: "2",
                                          name: "address",
                                          placeholder: "Address"
                                        },
                                        domProps: {
                                          value: _vm.agent_details.address
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.agent_details,
                                              "address",
                                              $event.target.value
                                            )
                                          }
                                        }
                                      })
                                    ]
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "ui button green",
                                  attrs: { type: "submit", tabindex: "0" }
                                },
                                [_vm._v("Submit")]
                              )
                            ]
                          )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5be648d2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-63b2b13a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "admin-header",
        _vm._b(
          {
            on: {
              "logout-admin": function($event) {
                _vm.logoutAdmin()
              }
            }
          },
          "admin-header",
          { total_earnings: _vm.total_earnings },
          false
        )
      ),
      _vm._v(" "),
      _c(
        "admin-nav",
        _vm._b({}, "admin-nav", { admin_details: _vm.admin_details }, false)
      ),
      _vm._v(" "),
      _c("div", { attrs: { id: "dashboard" } }, [_vm._t("content-section")], 2),
      _vm._v(" "),
      _c("admin-footer")
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
    require("vue-hot-reload-api")      .rerender("data-v-63b2b13a", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-9c805566\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { attrs: { id: "alpha" } }, [
    _c("div", { staticClass: "grid-container" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "grid-45" }, [
        _c("nav", [
          _c(
            "div",
            { staticClass: "ui labeled  button", attrs: { tabindex: "-1" } },
            [
              _c(
                "div",
                { staticClass: "ui purple button right pointing label" },
                [_vm._v("Total Earnings")]
              ),
              _vm._v(" "),
              _c("a", { staticClass: "ui basic purple label " }, [
                _vm._v(_vm._s(_vm._f("currency")(_vm.total_earnings, "₦")))
              ])
            ]
          ),
          _vm._v(" "),
          _vm._m(1)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "grid-20" }, [
        _c("nav", [
          _c(
            "div",
            {
              staticClass: "ui right floated horizontal list",
              staticStyle: { "line-height": "40px" }
            },
            [
              _c(
                "a",
                {
                  staticClass: "item",
                  attrs: { href: _vm.routes.adminDashboard, target: "" }
                },
                [_vm._v("Dashboard")]
              ),
              _vm._v(" "),
              _c(
                "a",
                { staticClass: "item", attrs: { href: "/tcom01/settings" } },
                [_vm._v("Profile")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "item",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      _vm.$emit("logout-admin")
                    }
                  }
                },
                [
                  _vm._v("Logout "),
                  _c("i", {
                    staticClass: "sign out icon",
                    staticStyle: { color: "white" }
                  })
                ]
              )
            ]
          )
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
    return _c("div", { staticClass: "grid-35" }, [
      _c("a", { attrs: { href: "/" } }, [
        _c("img", { attrs: { src: "/img/logo.png", alt: "" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "mini-game" } }, [
      _c(
        "div",
        { staticClass: "ui labeled button", attrs: { tabindex: "-1" } },
        [
          _c("div", { staticClass: "ui button" }, [
            _c("i", { staticClass: "gamepad icon" }),
            _vm._v("DISABLED\n            ")
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "ui basic left pointing label" }, [
            _c("div", [_c("h1", { staticClass: "time" }, [_vm._v("0:03")])])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9c805566", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f6db803e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./app/Modules/Admin/Resources/js/components/misc/PaginationComponent.vue":
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
    require("vue-hot-reload-api")      .rerender("data-v-f6db803e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa06d0d\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa06d0d\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminNavComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("589a56e6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa06d0d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminNavComponent.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0aa06d0d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminNavComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f3c6712\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f3c6712\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminCreateAgentComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("3f216586", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f3c6712\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminCreateAgentComponent.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0f3c6712\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminCreateAgentComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-168bfa0a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-168bfa0a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminAgentsNavComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("923bfdc2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-168bfa0a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminAgentsNavComponent.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-168bfa0a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminAgentsNavComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16cdd9a6\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16cdd9a6\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentTransactionsComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("ab10b04c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16cdd9a6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminViewAgentTransactionsComponent.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-16cdd9a6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminViewAgentTransactionsComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-371349c8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-371349c8\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentsComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("616d3b0d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-371349c8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminViewAgentsComponent.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-371349c8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminViewAgentsComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4685e8ff\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4685e8ff\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminFooterComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7bfd7ccd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4685e8ff\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminFooterComponent.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4685e8ff\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminFooterComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-539e8a85\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-539e8a85\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminViewAgentFundingsComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("b637f9d0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-539e8a85\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminViewAgentFundingsComponent.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-539e8a85\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminViewAgentFundingsComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58aea708\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58aea708\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/misc/LoaderComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("c9389464", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58aea708\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoaderComponent.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58aea708\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LoaderComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be648d2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be648d2\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2c58181d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be648d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminEditAgentsComponent.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be648d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminEditAgentsComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63b2b13a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63b2b13a\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/layouts/MasterLayoutComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("b7aac9f2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63b2b13a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MasterLayoutComponent.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63b2b13a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MasterLayoutComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9c805566\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9c805566\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./app/Modules/Admin/Resources/js/components/partials/AdminHeaderComponent.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("c974848e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9c805566\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminHeaderComponent.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9c805566\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AdminHeaderComponent.vue");
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