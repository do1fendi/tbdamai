webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: StoreContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreContext", function() { return StoreContext; });
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\store\\store.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

var StoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])();

var StoreContextProvider = function StoreContextProvider(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      logged = _useState[0],
      setLogged = _useState[1];

  var getIp = /*#__PURE__*/function () {
    var _ref = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var rawResponse, res;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.ipify.org/?format=json", {
                method: "GET"
              });

            case 2:
              rawResponse = _context.sent;
              _context.next = 5;
              return rawResponse.json();

            case 5:
              res = _context.sent;
              console.log(res.ip);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getIp() {
      return _ref.apply(this, arguments);
    };
  }();

  function conversionApi(dt) {
    (function () {
      var _ref2 = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(dt) {
        var data, rawResponse, res;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = JSON.stringify({
                  data: [{}].concat(Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(dt)),
                  test_event_code: "TEST78447"
                });
                _context2.next = 3;
                return fetch("https://api.tbdamai.net/conversionApi/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: data
                });

              case 3:
                rawResponse = _context2.sent;
                _context2.next = 6;
                return rawResponse;

              case 6:
                res = _context2.sent;

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    })()();
  }

  return __jsx(StoreContext.Provider, {
    value: {
      logged: logged,
      setLogged: setLogged,
      getIp: getIp,
      conversionApi: conversionApi
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, props.children);
};

_s(StoreContextProvider, "65h5yPFHX7llNF/8z9vDbAXASqw=");

_c = StoreContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (StoreContextProvider);

var _c;

$RefreshReg$(_c, "StoreContextProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlN0b3JlQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvZ2dlZCIsInNldExvZ2dlZCIsImdldElwIiwiZmV0Y2giLCJtZXRob2QiLCJyYXdSZXNwb25zZSIsImpzb24iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaXAiLCJjb252ZXJzaW9uQXBpIiwiZHQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlc3RfZXZlbnRfY29kZSIsImhlYWRlcnMiLCJib2R5IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksZ0JBQUdDLDJEQUFhLEVBQWxDOztBQUVQLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQUMsS0FBRCxDQURFO0FBQUEsTUFDL0JDLE1BRCtCO0FBQUEsTUFDdkJDLFNBRHVCOztBQUd0QyxNQUFNQyxLQUFLO0FBQUEsc1FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDY0MsS0FBSyxDQUFDLG9DQUFELEVBQXVDO0FBQ3BFQyxzQkFBTSxFQUFFO0FBRDRELGVBQXZDLENBRG5COztBQUFBO0FBQ05DLHlCQURNO0FBQUE7QUFBQSxxQkFJTUEsV0FBVyxDQUFDQyxJQUFaLEVBSk47O0FBQUE7QUFJTkMsaUJBSk07QUFLWkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLEVBQWhCOztBQUxZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxSLEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFRQSxXQUFTUyxhQUFULENBQXVCQyxFQUF2QixFQUEyQjtBQUN6QjtBQUFBLHlRQUFDLGtCQUFPQSxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQyxvQkFEUCxHQUNjQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUMxQkYsc0JBQUksR0FBRyxFQUFILHlJQUNHRCxFQURILEVBRHNCO0FBSTFCSSxpQ0FBZSxFQUFFO0FBSlMsaUJBQWYsQ0FEZDtBQUFBO0FBQUEsdUJBTzJCYixLQUFLLENBQzdCLHdDQUQ2QixFQUU3QjtBQUNFQyx3QkFBTSxFQUFFLE1BRFY7QUFFRWEseUJBQU8sRUFBRTtBQUNQLG9DQUFnQjtBQURULG1CQUZYO0FBS0VDLHNCQUFJLEVBQUVMO0FBTFIsaUJBRjZCLENBUGhDOztBQUFBO0FBT09SLDJCQVBQO0FBQUE7QUFBQSx1QkFpQm1CQSxXQWpCbkI7O0FBQUE7QUFpQk9FLG1CQWpCUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJEOztBQUVELFNBQ0UsTUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUU7QUFBRVAsWUFBTSxFQUFOQSxNQUFGO0FBQVVDLGVBQVMsRUFBVEEsU0FBVjtBQUFxQkMsV0FBSyxFQUFMQSxLQUFyQjtBQUE0QlMsbUJBQWEsRUFBYkE7QUFBNUIsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHYixLQUFLLENBQUNxQixRQURULENBREY7QUFLRCxDQXRDRDs7R0FBTXRCLG9COztLQUFBQSxvQjtBQXdDU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43YzJhZDRlZjllZDAxNGY2OWY2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IFN0b3JlQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBnZXRJcCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS5pcGlmeS5vcmcvP2Zvcm1hdD1qc29uXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuaXApO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGNvbnZlcnNpb25BcGkoZHQpIHtcclxuICAgIChhc3luYyAoZHQpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBkYXRhOiBbe30sICAgICAgICAgIFxyXG4gICAgICAgICAgICAuLi5kdCwgICAgICAgICAgXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXN0X2V2ZW50X2NvZGU6IFwiVEVTVDc4NDQ3XCIsXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvY29udmVyc2lvbkFwaS9cIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2U7XHJcbiAgICB9KSgpO1xyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPFN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2dnZWQsIHNldExvZ2dlZCwgZ2V0SXAsIGNvbnZlcnNpb25BcGkgfX0gPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1N0b3JlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlQ29udGV4dFByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==