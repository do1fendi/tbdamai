webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
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
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\register.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function register() {
  _s();

  var name = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var email = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var pass = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_store_store__WEBPACK_IMPORTED_MODULE_4__["StoreContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: "",
    email: "",
    password: ""
  }),
      form = _useState[0],
      setForm = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    console.log(ctx.logged);

    if (ctx.logged) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    }
  });

  var webRegister = function webRegister() {
    // validate form 
    if (!form.name) {
      name.current.focus();
    } else if (!form.email) {
      email.current.focus();
    } else if (!validateEmail(form.email)) email.current.focus();else if (!form.password) {
      pass.current.focus();
    } // otherwise store to database
    else {
        Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
          var rawResponse, res;
          return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch("".concat("http://localhost:3005/frontend", "/register"), {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form)
                  });

                case 2:
                  rawResponse = _context.sent;
                  _context.next = 5;
                  return rawResponse.json();

                case 5:
                  res = _context.sent;
                  console.log(res);

                  if (res.status == 'Success') {
                    localStorage.setItem('token', res.token);
                    ctx.setLogged(true);
                  }

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }))();
      }
  };

  var validateEmail = function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return __jsx("div", {
    className: "flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "TBDamai | Register")), __jsx("div", {
    className: "m-auto mt-80",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("input", {
    ref: name,
    value: form.name,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        name: e.target.value
      }));
    },
    type: "text",
    className: "w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500",
    placeholder: "Name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("input", {
    ref: email,
    value: form.email,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        email: e.target.value
      }));
    },
    type: "email",
    className: "w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500",
    placeholder: "Email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }), __jsx("input", {
    ref: pass,
    value: form.password,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        password: e.target.value
      }));
    },
    type: "password",
    className: "w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500",
    placeholder: "Password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return webRegister();
    },
    className: "mb-2 bg-sinbad-700 hover:bg-sinbad-900 text-white font-bold py-1 px-4 rounded-lg mt-2 w-full focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, "Register")));
}

_s(register, "+pxWm8TbyJvjvIZQ2OMVKo5qfOw=");

/* harmony default export */ __webpack_exports__["default"] = (register);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsicmVnaXN0ZXIiLCJuYW1lIiwidXNlUmVmIiwiZW1haWwiLCJwYXNzIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJmb3JtIiwic2V0Rm9ybSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJsb2dnZWQiLCJSb3V0ZXIiLCJwdXNoIiwid2ViUmVnaXN0ZXIiLCJjdXJyZW50IiwiZm9jdXMiLCJ2YWxpZGF0ZUVtYWlsIiwiZmV0Y2giLCJwcm9jZXNzIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmF3UmVzcG9uc2UiLCJqc29uIiwicmVzIiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwic2V0TG9nZ2VkIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDaEIsTUFBTUMsSUFBSSxHQUFHQyxvREFBTSxFQUFuQjtBQUNBLE1BQU1DLEtBQUssR0FBR0Qsb0RBQU0sRUFBcEI7QUFDQSxNQUFNRSxJQUFJLEdBQUdGLG9EQUFNLEVBQW5CO0FBQ0EsTUFBTUcsR0FBRyxHQUFHQyx3REFBVSxDQUFDQyx5REFBRCxDQUF0Qjs7QUFKZ0Isa0JBTVFDLHNEQUFRLENBQUM7QUFDN0JQLFFBQUksRUFBRSxFQUR1QjtBQUU3QkUsU0FBSyxFQUFDLEVBRnVCO0FBRzdCTSxZQUFRLEVBQUU7QUFIbUIsR0FBRCxDQU5oQjtBQUFBLE1BTVRDLElBTlM7QUFBQSxNQU1IQyxPQU5HOztBQVloQkMseURBQVMsQ0FBQyxZ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LFNBQUssRUFBRU8sSUFBSSxDQUFDUCxLQUZoQjtBQUdJLFlBQVEsRUFBRSxrQkFBQ3VDLENBQUQ7QUFBQSxhQUFPL0IsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZUCxhQUFLLEVBQUV1QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFBNUIsU0FBZDtBQUFBLEtBSGQ7QUFJSSxRQUFJLEVBQUMsT0FKVDtBQUtJLGFBQVMsRUFBQyxtSkFMZDtBQU1JLGVBQVcsRUFBQyxPQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFpQkk7QUFDSSxPQUFHLEVBQUV4QyxJQURUO0FBRUksU0FBSyxFQUFFTSxJQUFJLENBQUNELFFBRmhCO0FBR0ksWUFBUSxFQUFFLGtCQUFDaUMsQ0FBRDtBQUFBLGFBQU8vQixPQUFPLGlDQUFNRCxJQUFOO0FBQVlELGdCQUFRLEVBQUVpQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFBL0IsU0FBZDtBQUFBLEtBSGQ7QUFJSSxRQUFJLEVBQUMsVUFKVDtBQUtJLGFBQVMsRUFBQyw4SUFMZDtBQU1JLGVBQVcsRUFBQyxVQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakJKLEVBeUJJO0FBQ0ksV0FBTyxFQUFFO0FBQUEsYUFBTTFCLFdBQVcsRUFBakI7QUFBQSxLQURiO0FBRUksYUFBUyxFQUFDLGlIQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJKLENBSkosQ0FESjtBQXVDSDs7R0F4RlFsQixROztBQTBGTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNTZmOTVmOTk4MTYzZWM2NDJlZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRleHQgfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XHJcbiAgICBjb25zdCBuYW1lID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlUmVmKClcclxuICAgIGNvbnN0IHBhc3MgPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpXHJcblxyXG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6XCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdHgubG9nZ2VkKVxyXG4gICAgICAgIGlmIChjdHgubG9nZ2VkKSB7IFJvdXRlci5wdXNoKCcvJykgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB3ZWJSZWdpc3RlciA9ICgpID0+e1xyXG4gICAgICAgIC8vIHZhbGlkYXRlIGZvcm0gXHJcbiAgICAgICAgaWYoIWZvcm0ubmFtZSl7bmFtZS5jdXJyZW50LmZvY3VzKCl9XHJcbiAgICAgICAgZWxzZSBpZighZm9ybS5lbWFpbCl7ZW1haWwuY3VycmVudC5mb2N1cygpfVxyXG4gICAgICAgIGVsc2UgaWYoIXZhbGlkYXRlRW1haWwoZm9ybS5lbWFpbCkpKGVtYWlsLmN1cnJlbnQuZm9jdXMoKSlcclxuICAgICAgICBlbHNlIGlmKCFmb3JtLnBhc3N3b3JkKXtwYXNzLmN1cnJlbnQuZm9jdXMoKX1cclxuICAgICAgICAvLyBvdGhlcndpc2Ugc3RvcmUgdG8gZGF0YWJhc2VcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5CQVNFVVJMfS9yZWdpc3RlcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy50b2tlbilcclxuICAgICAgICAgICAgICAgICAgICBjdHguc2V0TG9nZ2VkKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB2YWxpZGF0ZUVtYWlsID0gKGVtYWlsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5UQkRhbWFpIHwgUmVnaXN0ZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIG10LTgwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZWY9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItc2luYmFkLTUwMCBweC0zIHB5LTEgcm91bmRlZC1sZyBzaGFkb3ctc20gbWItMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNpbmJhZC01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2luYmFkLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZWY9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLXNpbmJhZC01MDAgcHgtMyBweS0xIHJvdW5kZWQtbGcgc2hhZG93LXNtIG1iLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1zaW5iYWQtNTAwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXNpbmJhZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cGFzc31cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1zaW5iYWQtNTAwIHB4LTMgcHktMSByb3VuZGVkLWxnIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNpbmJhZC01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2luYmFkLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdlYlJlZ2lzdGVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMiBiZy1zaW5iYWQtNzAwIGhvdmVyOmJnLXNpbmJhZC05MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWQtbGcgbXQtMiB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWdpc3RlclxyXG4iXSwic291cmNlUm9vdCI6IiJ9