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
              console.log(router.route);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb252ZXJzaW9uQXBpL2NvbnZlcnNpb25BcGkuanMiXSwibmFtZXMiOlsiY29udmVyc2lvbkFwaSIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJydW5BcGkiLCJkdCIsImdldElwIiwiZmV0Y2giLCJtZXRob2QiLCJyYXdSZXNwb25zZSIsImpzb24iLCJyZXMiLCJpcCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiYWN0aW9uX3NvdXJjZSIsInVzZXJfZGF0YSIsImNsaWVudF9pcF9hZGRyZXNzIiwiY2xpZW50X3VzZXJfYWdlbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJ0ZXN0X2V2ZW50X2NvZGUiLCJoZWFkZXJzIiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLGdCQUFHQyx3REFBVSxJQUFDLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBOztBQUM3QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0FDLG1FQUFtQixDQUFDSCxHQUFELEVBQU07QUFBQSxXQUFPO0FBQzVCSSxZQUQ0QixrQkFDckJDLEVBRHFCLEVBQ2pCO0FBQ1BDLGFBQUssQ0FBQ0QsRUFBRCxDQUFMO0FBQ0g7QUFIMkIsS0FBUDtBQUFBLEdBQU4sQ0FBbkI7O0FBTUEsTUFBTUMsS0FBSztBQUFBLHNRQUFHLGlCQUFPRCxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2dCRSxLQUFLLENBQzNCLG9DQUQyQixFQUUzQjtBQUNJQyxzQkFBTSxFQUFFO0FBRFosZUFGMkIsQ0FEckI7O0FBQUE7QUFDSkMseUJBREk7QUFBQTtBQUFBLHFCQU9RQSxXQUFXLENBQUNDLElBQVosRUFQUjs7QUFBQTtBQU9KQyxpQkFQSTtBQVFWZCwyQkFBYSxDQUFDYyxHQUFHLENBQUNDLEVBQUwsRUFBU1AsRUFBVCxDQUFiOztBQVJVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxDLEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFXQSxXQUFTVCxhQUFULENBQXVCZSxFQUF2QixFQUEyQlAsRUFBM0IsRUFBK0I7QUFFM0IsMlBBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0dRLHFCQUFPLENBQUNDLEdBQVIsQ0FBWWIsTUFBTSxDQUFDYyxLQUFuQjtBQUNNQyxrQkFGVCxHQUVnQkMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDeEJGLG9CQUFJLEVBQUU7QUFFRUcsK0JBQWEsRUFBRSxTQUZqQjtBQUdFQywyQkFBUyxFQUFFO0FBQ1BDLHFDQUFpQixFQUFFVCxFQURaO0FBRVBVLHFDQUFpQixFQUFFQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFFBQXBCLEdBQStCQyxPQUEvQixDQUF1Qyx5QkFBdkMsRUFBa0UsSUFBbEU7QUFGWjtBQUhiLG1CQU9LckIsRUFQTCxFQURrQjtBQVd4QnNCLCtCQUFlLEVBQUU7QUFYTyxlQUFmLENBRmhCO0FBQUE7QUFBQSxxQkFlNkJwQixLQUFLLENBQzNCLHdDQUQyQixFQUUzQjtBQUNJQyxzQkFBTSxFQUFFLE1BRFo7QUFFSW9CLHVCQUFPLEVBQUU7QUFDTCxrQ0FBZ0I7QUFEWCxpQkFGYjtBQUtJQyxvQkFBSSxFQUFFYjtBQUxWLGVBRjJCLENBZmxDOztBQUFBO0FBZVNQLHlCQWZUO0FBQUE7QUFBQSxxQkF5QnFCQSxXQXpCckI7O0FBQUE7QUF5QlNFLGlCQXpCVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFEO0FBNEJIOztBQUVELFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBS0gsQ0F4RCtCO0FBQUEsVUFDYlQscURBRGEsRUFFNUJDLHlEQUY0QjtBQUFBLEdBQWhDO0FBMERlTiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NjFiYjFmMWY4ZGIyMTQ3YzA1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmNvbnN0IGNvbnZlcnNpb25BcGkgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XHJcbiAgICAgICAgcnVuQXBpKGR0KSB7XHJcbiAgICAgICAgICAgIGdldElwKGR0KTtcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgZ2V0SXAgPSBhc3luYyAoZHQpID0+IHtcclxuICAgICAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vYXBpLmlwaWZ5Lm9yZy8/Zm9ybWF0PWpzb25cIixcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29udmVyc2lvbkFwaShyZXMuaXAsIGR0KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY29udmVyc2lvbkFwaShpcCwgZHQpIHtcclxuICAgICAgICBcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucm91dGUpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25fc291cmNlOiBcIndlYnNpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9kYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfaXBfYWRkcmVzczogaXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfdXNlcl9hZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudC50b1N0cmluZygpLnJlcGxhY2UoLyhbMS05XVsxLTldfFsxLTldKV9cXHcrL2csICckMScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5kdFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdGVzdF9ldmVudF9jb2RlOiBcIlRFU1Q3ODQ0N1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvY29udmVyc2lvbkFwaS9cIixcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByYXdSZXNwb25zZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udmVyc2lvbkFwaVxyXG4iXSwic291cmNlUm9vdCI6IiJ9