webpackJsonp([1],{

/***/ "./app/Modules/Admin/Resources/js/components recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AdminEditAgentsComponent": "./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue",
	"./AdminEditAgentsComponent.vue": "./app/Modules/Admin/Resources/js/components/AdminEditAgentsComponent.vue",
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

/***/ })

});
//# sourceMappingURL=1.js.map