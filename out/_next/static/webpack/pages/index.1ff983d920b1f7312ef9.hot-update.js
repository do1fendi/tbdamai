webpackHotUpdate_N_E("pages/index",{

/***/ "./components/conversionApi/conversionApi.js":
/*!***************************************************!*\
  !*** ./components/conversionApi/conversionApi.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\components\\conversionApi\\conversionApi.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var conversionApi = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(_s(function (props, ref) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(ref, function () {
    return {
      runApi: function runApi(dt) {
        getIp(dt);
      }
    };
  });

  var getIp = /*#__PURE__*/function () {
    var _ref = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(dt) {
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
              conversionApi(res.ip, dt);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getIp(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  function conversionApi(ip, dt) {
    Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var data, rawResponse, res;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(router);
              data = JSON.stringify({
                data: [_objectSpread({
                  action_source: "website",
                  user_data: {
                    client_ip_address: ip,
                    client_user_agent: navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g, '$1')
                  }
                }, dt)],
                test_event_code: "TEST78447"
              });
              _context2.next = 4;
              return fetch("https://api.tbdamai.net/conversionApi/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: data
              });

            case 4:
              rawResponse = _context2.sent;
              _context2.next = 7;
              return rawResponse;

            case 7:
              res = _context2.sent;

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  });
}, "hS2V9pqGr5wn9gPqY9ONEQWpmm0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"]];
}));
/* harmony default export */ __webpack_exports__["default"] = (conversionApi);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb252ZXJzaW9uQXBpL2NvbnZlcnNpb25BcGkuanMiXSwibmFtZXMiOlsiY29udmVyc2lvbkFwaSIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJydW5BcGkiLCJkdCIsImdldElwIiwiZmV0Y2giLCJtZXRob2QiLCJyYXdSZXNwb25zZSIsImpzb24iLCJyZXMiLCJpcCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImFjdGlvbl9zb3VyY2UiLCJ1c2VyX2RhdGEiLCJjbGllbnRfaXBfYWRkcmVzcyIsImNsaWVudF91c2VyX2FnZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9TdHJpbmciLCJyZXBsYWNlIiwidGVzdF9ldmVudF9jb2RlIiwiaGVhZGVycyIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxnQkFBR0Msd0RBQVUsSUFBQyxVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQTs7QUFDN0MsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxtRUFBbUIsQ0FBQ0gsR0FBRCxFQUFNO0FBQUEsV0FBTztBQUM1QkksWUFENEIsa0JBQ3JCQyxFQURxQixFQUNqQjtBQUNQQyxhQUFLLENBQUNELEVBQUQsQ0FBTDtBQUNIO0FBSDJCLEtBQVA7QUFBQSxHQUFOLENBQW5COztBQU1BLE1BQU1DLEtBQUs7QUFBQSxzUUFBRyxpQkFBT0QsRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNnQkUsS0FBSyxDQUMzQixvQ0FEMkIsRUFFM0I7QUFDSUMsc0JBQU0sRUFBRTtBQURaLGVBRjJCLENBRHJCOztBQUFBO0FBQ0pDLHlCQURJO0FBQUE7QUFBQSxxQkFPUUEsV0FBVyxDQUFDQyxJQUFaLEVBUFI7O0FBQUE7QUFPSkMsaUJBUEk7QUFRVmQsMkJBQWEsQ0FBQ2MsR0FBRyxDQUFDQyxFQUFMLEVBQVNQLEVBQVQsQ0FBYjs7QUFSVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFMQyxLQUFLO0FBQUE7QUFBQTtBQUFBLEtBQVg7O0FBV0EsV0FBU1QsYUFBVCxDQUF1QmUsRUFBdkIsRUFBMkJQLEVBQTNCLEVBQStCO0FBRTNCLDJQQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHUSxxQkFBTyxDQUFDQyxHQUFSLENBQVliLE1BQVo7QUFDTWMsa0JBRlQsR0FFZ0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3hCRixvQkFBSSxFQUFFO0FBRUVHLCtCQUFhLEVBQUUsU0FGakI7QUFHRUMsMkJBQVMsRUFBRTtBQUNQQyxxQ0FBaUIsRUFBRVIsRUFEWjtBQUVQUyxxQ0FBaUIsRUFBRUMsU0FBUyxDQUFDQyxTQUFWLENBQW9CQyxRQUFwQixHQUErQkMsT0FBL0IsQ0FBdUMseUJBQXZDLEVBQWtFLElBQWxFO0FBRlo7QUFIYixtQkFPS3BCLEVBUEwsRUFEa0I7QUFXeEJxQiwrQkFBZSxFQUFFO0FBWE8sZUFBZixDQUZoQjtBQUFBO0FBQUEscUJBZTZCbkIsS0FBSyxDQUMzQix3Q0FEMkIsRUFFM0I7QUFDSUMsc0JBQU0sRUFBRSxNQURaO0FBRUltQix1QkFBTyxFQUFFO0FBQ0wsa0NBQWdCO0FBRFgsaUJBRmI7QUFLSUMsb0JBQUksRUFBRWI7QUFMVixlQUYyQixDQWZsQzs7QUFBQTtBQWVTTix5QkFmVDtBQUFBO0FBQUEscUJBeUJxQkEsV0F6QnJCOztBQUFBO0FBeUJTRSxpQkF6QlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQTRCSDs7QUFFRCxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESjtBQUtILENBeEQrQjtBQUFBLFVBQ2JULHFEQURhLEVBRTVCQyx5REFGNEI7QUFBQSxHQUFoQztBQTBEZU4sNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWZmOTgzZDkyMGIxZjczMTJlZjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5jb25zdCBjb252ZXJzaW9uQXBpID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xyXG4gICAgICAgIHJ1bkFwaShkdCkge1xyXG4gICAgICAgICAgICBnZXRJcChkdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IGdldElwID0gYXN5bmMgKGR0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgXCJodHRwczovL2FwaS5pcGlmeS5vcmcvP2Zvcm1hdD1qc29uXCIsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnZlcnNpb25BcGkocmVzLmlwLCBkdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnNpb25BcGkoaXAsIGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocm91dGVyKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uX3NvdXJjZTogXCJ3ZWJzaXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lwX2FkZHJlc3M6IGlwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X3VzZXJfYWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQudG9TdHJpbmcoKS5yZXBsYWNlKC8oWzEtOV1bMS05XXxbMS05XSlfXFx3Ky9nLCAnJDEnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZHRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHRlc3RfZXZlbnRfY29kZTogXCJURVNUNzg0NDdcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2NvbnZlcnNpb25BcGkvXCIsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnNpb25BcGlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==