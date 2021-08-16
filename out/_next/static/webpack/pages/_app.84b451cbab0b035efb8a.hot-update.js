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
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\store\\store.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var StoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var StoreContextProvider = function StoreContextProvider(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      logged = _useState[0],
      setLogged = _useState[1];

  var getIp = /*#__PURE__*/function () {
    var _ref = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var rawResponse, res;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
              return _context.abrupt("return", res.ip);

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

  var conversionApi = /*#__PURE__*/function () {
    var _ref2 = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dt) {
      var json, rawResponse, res;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              json = JSON.stringify({
                data: [dt],
                test_event_code: "TEST14958"
              });
              _context2.next = 3;
              return fetch("https://api.tbdamai.net/conversionApi/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: json
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

    return function conversionApi(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var hash = function hash(dt) {
    return js_sha256__WEBPACK_IMPORTED_MODULE_3___default()(dt);
  };

  return __jsx(StoreContext.Provider, {
    value: {
      logged: logged,
      setLogged: setLogged,
      getIp: getIp,
      conversionApi: conversionApi,
      hash: hash
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlN0b3JlQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvZ2dlZCIsInNldExvZ2dlZCIsImdldElwIiwiZmV0Y2giLCJtZXRob2QiLCJyYXdSZXNwb25zZSIsImpzb24iLCJyZXMiLCJpcCIsImNvbnZlcnNpb25BcGkiLCJkdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwidGVzdF9ldmVudF9jb2RlIiwiaGVhZGVycyIsImJvZHkiLCJoYXNoIiwic2hhMjU2IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsRUFBbEM7O0FBRVAsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxLQUFELENBREU7QUFBQSxNQUMvQkMsTUFEK0I7QUFBQSxNQUN2QkMsU0FEdUI7O0FBR3RDLE1BQU1DLEtBQUs7QUFBQSxzUUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNjQyxLQUFLLENBQUMsb0NBQUQsRUFBdUM7QUFDcEVDLHNCQUFNLEVBQUU7QUFENEQsZUFBdkMsQ0FEbkI7O0FBQUE7QUFDTkMseUJBRE07QUFBQTtBQUFBLHFCQUlNQSxXQUFXLENBQUNDLElBQVosRUFKTjs7QUFBQTtBQUlOQyxpQkFKTTtBQUFBLCtDQUtMQSxHQUFHLENBQUNDLEVBTEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTE4sS0FBSztBQUFBO0FBQUE7QUFBQSxLQUFYOztBQVFBLE1BQU1PLGFBQWE7QUFBQSx1UUFBRyxrQkFBT0MsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEosa0JBRGMsR0FDUEssSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDMUJDLG9CQUFJLEVBQUUsQ0FBQ0gsRUFBRCxDQURvQjtBQUUxQkksK0JBQWUsRUFBRTtBQUZTLGVBQWYsQ0FETztBQUFBO0FBQUEscUJBS01YLEtBQUssQ0FBQyx3Q0FBRCxFQUEyQztBQUN4RUMsc0JBQU0sRUFBRSxNQURnRTtBQUV4RVcsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURULGlCQUYrRDtBQUt4RUMsb0JBQUksRUFBRVY7QUFMa0UsZUFBM0MsQ0FMWDs7QUFBQTtBQUtkRCx5QkFMYztBQUFBO0FBQUEscUJBYUZBLFdBYkU7O0FBQUE7QUFhZEUsaUJBYmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBYkUsYUFBYTtBQUFBO0FBQUE7QUFBQSxLQUFuQjs7QUFpQkEsTUFBTVEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ1AsRUFBRCxFQUFRO0FBQ25CLFdBQU9RLGdEQUFNLENBQUNSLEVBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsU0FDRSxNQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRTtBQUFFVixZQUFNLEVBQU5BLE1BQUY7QUFBVUMsZUFBUyxFQUFUQSxTQUFWO0FBQXFCQyxXQUFLLEVBQUxBLEtBQXJCO0FBQTRCTyxtQkFBYSxFQUFiQSxhQUE1QjtBQUEyQ1EsVUFBSSxFQUFKQTtBQUEzQyxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0duQixLQUFLLENBQUNxQixRQURULENBREY7QUFLRCxDQXJDRDs7R0FBTXRCLG9COztLQUFBQSxvQjtBQXVDU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44NGI0NTFjYmFiMGIwMzVlZmI4YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICBzaGEyNTYgIGZyb20gXCJqcy1zaGEyNTZcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBTdG9yZUNvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldElwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmlwaWZ5Lm9yZy8/Zm9ybWF0PWpzb25cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXMuaXA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udmVyc2lvbkFwaSA9IGFzeW5jIChkdCkgPT4ge1xyXG4gICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgZGF0YTogW2R0XSxcclxuICAgICAgdGVzdF9ldmVudF9jb2RlOiBcIlRFU1QxNDk1OFwiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvY29udmVyc2lvbkFwaS9cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IGpzb24sXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2U7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFzaCA9IChkdCkgPT4geyAgICBcclxuICAgIHJldHVybiBzaGEyNTYoZHQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBsb2dnZWQsIHNldExvZ2dlZCwgZ2V0SXAsIGNvbnZlcnNpb25BcGksIGhhc2ggfX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvU3RvcmVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZUNvbnRleHRQcm92aWRlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==