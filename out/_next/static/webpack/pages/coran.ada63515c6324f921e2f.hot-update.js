webpackHotUpdate_N_E("pages/coran",{

/***/ "./pages/coran.js":
/*!************************!*\
  !*** ./pages/coran.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return coran; });
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card/Card */ "./components/Card/Card.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "./store/store.js");



var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\coran.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function coran() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_store__WEBPACK_IMPORTED_MODULE_5__["StoreContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    (function () {
      var _fetchApi = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.tbdamai.net/frontend/product/coran");

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                response = _context.sent;
                setData(response);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchApi() {
        return _fetchApi.apply(this, arguments);
      }

      return fetchApi;
    })()(); // conversion api
    // const ip = ctx.getIp();

    (function () {
      var _fetchIp = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return ctx.getIp();

              case 2:
                res = _context2.sent;
                console.log(res);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fetchIp() {
        return _fetchIp.apply(this, arguments);
      }

      return fetchIp;
    })()(); // console.log(ip)
    // ctx.conversionApi({
    //   event_name: "PageView",
    //   action_source: "website",
    //   event_source_url: "http://localhost:3000/coran/",
    //   user_data: {
    //     client_ip_address: ip,
    //     client_user_agent: navigator.userAgent
    //       .toString()
    //       .replace(/([1-9][1-9]|[1-9])_\w+/g, "$1"),
    //   },
    // });
  }, []);
  return __jsx("div", {
    className: "container mx-auto p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, "Coran")), __jsx("div", {
    className: "text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Tombak"), __jsx("div", {
    className: "grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.filter(function (dt) {
      return dt.prod_label1 == "tombak";
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-10 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "Hewan"), __jsx("div", {
    className: "grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.filter(function (dt) {
      return dt.prod_label1 == "hewan";
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-10 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "Lain-lain"), __jsx("div", {
    className: "grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.filter(function (dt) {
      return dt.prod_label1 != "hewan" && dt.prod_label1 != "tombak";
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })));
}

_s(coran, "QN36bPBIoZPUUktaqHTazaDatOs=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29yYW4uanMiXSwibmFtZXMiOlsiY29yYW4iLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZUVmZmVjdCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZmV0Y2hBcGkiLCJnZXRJcCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaElwIiwiZmlsdGVyIiwiZHQiLCJwcm9kX2xhYmVsMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxFQUFELENBREY7QUFBQSxNQUN2QkMsSUFEdUI7QUFBQSxNQUNqQkMsT0FEaUI7O0FBRTlCLE1BQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ0MseURBQUQsQ0FBdEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFBQSw2UUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNzQkMsS0FBSyxDQUN4QixnREFEd0IsQ0FEM0I7O0FBQUE7QUFDS0Msd0JBREw7QUFBQTtBQUFBLHVCQUlrQkEsUUFBUSxDQUFDQyxJQUFULEVBSmxCOztBQUFBO0FBSUNELHdCQUpEO0FBS0NOLHVCQUFPLENBQUNNLFFBQUQsQ0FBUDs7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFEOztBQUFBLGVBQWdCRSxRQUFoQjtBQUFBO0FBQUE7O0FBQUEsYUFBZ0JBLFFBQWhCO0FBQUEsV0FEYyxDQVNkO0FBQ0E7O0FBQ0E7QUFBQSw0UUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNtQlAsR0FBRyxDQUFDUSxLQUFKLEVBRG5COztBQUFBO0FBQ09DLG1CQURQO0FBRUdDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjs7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFEOztBQUFBLGVBQWdCRyxPQUFoQjtBQUFBO0FBQUE7O0FBQUEsYUFBZ0JBLE9BQWhCO0FBQUEsV0FYYyxDQWVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBM0JRLEVBMkJOLEVBM0JNLENBQVQ7QUE0QkEsU0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxnR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsRUFPRTtBQUFLLGFBQVMsRUFBQyxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFNLFFBQUksRUFBRWQsSUFBSSxDQUFDZSxNQUFMLENBQVksVUFBQ0MsRUFBRDtBQUFBLGFBQVFBLEVBQUUsQ0FBQ0MsV0FBSCxJQUFrQixRQUExQjtBQUFBLEtBQVosQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixFQVVFO0FBQUssYUFBUyxFQUFDLGlHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixFQWFFO0FBQUssYUFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxFQUFFakIsSUFBSSxDQUFDZSxNQUFMLENBQVksVUFBQ0MsRUFBRDtBQUFBLGFBQVFBLEVBQUUsQ0FBQ0MsV0FBSCxJQUFrQixPQUExQjtBQUFBLEtBQVosQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FiRixFQWdCRTtBQUFLLGFBQVMsRUFBQyxpR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixFQW1CRTtBQUFLLGFBQVMsRUFBQyxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLFFBQUksRUFBRWpCLElBQUksQ0FBQ2UsTUFBTCxDQUNKLFVBQUNDLEVBQUQ7QUFBQSxhQUFRQSxFQUFFLENBQUNDLFdBQUgsSUFBa0IsT0FBbEIsSUFBNkJELEVBQUUsQ0FBQ0MsV0FBSCxJQUFrQixRQUF2RDtBQUFBLEtBREksQ0FEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FuQkYsQ0FERjtBQTZCRDs7R0E3RHVCbkIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb3Jhbi5hZGE2MzUxNWM2MzI0ZjkyMWUyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkL0NhcmRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRleHQgfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvcmFuKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcGkoKSB7XHJcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvcHJvZHVjdC9jb3JhblwiXHJcbiAgICAgICk7XHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXREYXRhKHJlc3BvbnNlKTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gY29udmVyc2lvbiBhcGlcclxuICAgIC8vIGNvbnN0IGlwID0gY3R4LmdldElwKCk7XHJcbiAgICAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hJcCgpe1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBjdHguZ2V0SXAoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIH0pKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpcClcclxuICAgIC8vIGN0eC5jb252ZXJzaW9uQXBpKHtcclxuICAgIC8vICAgZXZlbnRfbmFtZTogXCJQYWdlVmlld1wiLFxyXG4gICAgLy8gICBhY3Rpb25fc291cmNlOiBcIndlYnNpdGVcIixcclxuICAgIC8vICAgZXZlbnRfc291cmNlX3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY29yYW4vXCIsXHJcbiAgICAvLyAgIHVzZXJfZGF0YToge1xyXG4gICAgLy8gICAgIGNsaWVudF9pcF9hZGRyZXNzOiBpcCxcclxuICAgIC8vICAgICBjbGllbnRfdXNlcl9hZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgLy8gICAgICAgLnRvU3RyaW5nKClcclxuICAgIC8vICAgICAgIC5yZXBsYWNlKC8oWzEtOV1bMS05XXxbMS05XSlfXFx3Ky9nLCBcIiQxXCIpLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNVwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q29yYW48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtbGcgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCB3LTMyIHRleHQtY2VudGVyIG10LTUgbWItNVwiPlxyXG4gICAgICAgIFRvbWJha1xyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIDJ4bDpncmlkLWNvbHMtNiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBncmlkLWNvbHMtMiBnYXAtMyBzbTptLWF1dG9cIj5cclxuICAgICAgICA8Q2FyZCBkYXRhPXtkYXRhLmZpbHRlcigoZHQpID0+IGR0LnByb2RfbGFiZWwxID09IFwidG9tYmFrXCIpfT48L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC0yeGwgdy0zMiB0ZXh0LWNlbnRlciBtdC0xMCBtYi01XCI+XHJcbiAgICAgICAgSGV3YW5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCAyeGw6Z3JpZC1jb2xzLTYgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ3JpZC1jb2xzLTIgZ2FwLTMgc206bS1hdXRvXCI+XHJcbiAgICAgICAgPENhcmQgZGF0YT17ZGF0YS5maWx0ZXIoKGR0KSA9PiBkdC5wcm9kX2xhYmVsMSA9PSBcImhld2FuXCIpfT48L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC0yeGwgdy0zMiB0ZXh0LWNlbnRlciBtdC0xMCBtYi01XCI+XHJcbiAgICAgICAgTGFpbi1sYWluXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgMnhsOmdyaWQtY29scy02IHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC0zIHNtOm0tYXV0b1wiPlxyXG4gICAgICAgIDxDYXJkXHJcbiAgICAgICAgICBkYXRhPXtkYXRhLmZpbHRlcihcclxuICAgICAgICAgICAgKGR0KSA9PiBkdC5wcm9kX2xhYmVsMSAhPSBcImhld2FuXCIgJiYgZHQucHJvZF9sYWJlbDEgIT0gXCJ0b21iYWtcIlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+PC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==