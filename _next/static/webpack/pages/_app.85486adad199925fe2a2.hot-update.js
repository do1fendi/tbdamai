webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav/NavLoginForm.js":
/*!****************************************!*\
  !*** ./components/Nav/NavLoginForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavLoginForm; });
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/store */ "./store/store.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\components\\Nav\\NavLoginForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function NavLoginForm() {
  _s();

  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_store_store__WEBPACK_IMPORTED_MODULE_4__["StoreContext"]);
  var userN = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var pass = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    username: "",
    password: ""
  }),
      form = _useState[0],
      setForm = _useState[1];

  var facebookLogin = function facebookLogin(response) {
    var fbData = {
      fbId: response.id,
      fbName: response.name,
      fbEmail: response.email,
      fbToken: response.accessToken,
      fbTokenExpiration: response.data_access_expiration_time,
      fbPicUrl: response.picture.data.url
    };
    console.log(response);

    Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var rawResponse, res;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat("http://localhost:3005/frontend", "/fbLogin"), {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(fbData)
              });

            case 2:
              rawResponse = _context.sent;
              _context.next = 5;
              return rawResponse.json();

            case 5:
              res = _context.sent;

              if (res.status == 'Success') {
                localStorage.setItem('token', res.token);
                ctx.setLogged(true);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  };

  var webLogin = function webLogin() {
    if (!form.username) {
      userN.current.focus();
    } else if (!form.password) {
      pass.current.focus();
    } else {
      Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var rawResponse, res;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("".concat("http://localhost:3005/frontend", "/login"), {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(form)
                });

              case 2:
                rawResponse = _context2.sent;
                _context2.next = 5;
                return rawResponse.json();

              case 5:
                res = _context2.sent;
                console.log(res); // if login success

                if (res.token) {
                  ctx.setLogged(true);
                }

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  };

  var checkToken = function checkToken() {
    Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var rawResponse, res;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch("".concat("http://localhost:3005/frontend", "/verifyToken"), {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmYklkIjoiNTM0NTQzNTQzNiIsImZiTmFtZSI6ImpvaG4iLCJmYkVtYWlsIjoiYUBiYS5jb20iLCJmYlRva2VuIjoic2RhczQ1M2tsNWtsNG01NG01NDMiLCJmYlRva2VuRXhwaXJhdGlvbiI6NDMzMjQzMjQsImZiUGljVXJsIjoiaHR0cHM6dXJsLmNvbSIsImlhdCI6MTYyNDY4ODQ0NCwiZXhwIjoxNjI0Njg4NTY0fQ.GQO6DjNwhkfCYoCeMGZQKW_e-ptYp0VuwL0ugKBdgK4"
                }
              });

            case 2:
              rawResponse = _context3.sent;
              _context3.next = 5;
              return rawResponse.json();

            case 5:
              res = _context3.sent;
              console.log(res);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx("input", {
    ref: userN,
    value: form.username,
    onChange: function onChange(e) {
      return setForm(_objectSpread(_objectSpread({}, form), {}, {
        username: e.target.value
      }));
    },
    type: "text",
    className: "w-full border border-sinbad-500 px-3 py-1 rounded-lg shadow-sm mb-2 focus:outline-none focus:border-sinbad-500 focus:ring-1 focus:ring-sinbad-500",
    placeholder: "Username or Email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
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
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return webLogin();
    },
    className: "mb-2 bg-sinbad-700 hover:bg-sinbad-900 text-white font-bold py-1 px-4 rounded-lg mt-2 w-full focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "Login"), __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_5___default.a, {
    appId: "329917598722443",
    autoLoad: true,
    fields: "name,email,picture",
    callback: facebookLogin,
    icon: "fa-facebook",
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: checkToken,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, "Check Token"));
}

_s(NavLoginForm, "O9vypwGcmwWNAWmmhb93Wplwuv0=");

_c = NavLoginForm;

var _c;

$RefreshReg$(_c, "NavLoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2TG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIk5hdkxvZ2luRm9ybSIsImN0eCIsInVzZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJ1c2VyTiIsInVzZVJlZiIsInBhc3MiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJmb3JtIiwic2V0Rm9ybSIsImZhY2Vib29rTG9naW4iLCJyZXNwb25zZSIsImZiRGF0YSIsImZiSWQiLCJpZCIsImZiTmFtZSIsIm5hbWUiLCJmYkVtYWlsIiwiZW1haWwiLCJmYlRva2VuIiwiYWNjZXNzVG9rZW4iLCJmYlRva2VuRXhwaXJhdGlvbiIsImRhdGFfYWNjZXNzX2V4cGlyYXRpb25fdGltZSIsImZiUGljVXJsIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJwcm9jZXNzIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmF3UmVzcG9uc2UiLCJqc29uIiwicmVzIiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwic2V0TG9nZ2VkIiwid2ViTG9naW4iLCJjdXJyZW50IiwiZm9jdXMiLCJjaGVja1Rva2VuIiwiQXV0aG9yaXphdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQ3JDLE1BQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ0MseURBQUQsQ0FBdEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBLE1BQU1DLElBQUksR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQW5COztBQUhxQyxrQkFLYkUsc0RBQVEsQ0FBQztBQUMv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RUUsYUFBUyxFQUFDLGlIQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkYsRUF1QkUsTUFBQywyREFBRDtBQUNFLFNBQUssRUFBRWYsaUJBRFQ7QUFFRSxZQUFRLEVBQUUsSUFGWjtBQUdFLFVBQU0sRUFBQyxvQkFIVDtBQUlFLFlBQVEsRUFBRXBCLGFBSlo7QUFLRSxRQUFJLEVBQUMsYUFMUDtBQU1FLFFBQUksRUFBQyxPQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsRUErQkU7QUFBUSxXQUFPLEVBQUVzQyxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQS9CRixDQURGO0FBbUNEOztHQWpIdUJsRCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODU0ODZhZGFkMTk5OTI1ZmUyYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3RvcmVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TG9naW5Gb3JtKCkge1xyXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KTtcclxuICBjb25zdCB1c2VyTiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBwYXNzID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmYWNlYm9va0xvZ2luID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBsZXQgZmJEYXRhID0ge1xyXG4gICAgICBmYklkOiByZXNwb25zZS5pZCxcclxuICAgICAgZmJOYW1lOiByZXNwb25zZS5uYW1lLFxyXG4gICAgICBmYkVtYWlsOiByZXNwb25zZS5lbWFpbCxcclxuICAgICAgZmJUb2tlbjogcmVzcG9uc2UuYWNjZXNzVG9rZW4sXHJcbiAgICAgIGZiVG9rZW5FeHBpcmF0aW9uOiByZXNwb25zZS5kYXRhX2FjY2Vzc19leHBpcmF0aW9uX3RpbWUsXHJcbiAgICAgIGZiUGljVXJsOiByZXNwb25zZS5waWN0dXJlLmRhdGEudXJsLFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5CQVNFVVJMfS9mYkxvZ2luYCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZmJEYXRhKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYocmVzLnN0YXR1cyA9PSAnU3VjY2Vzcycpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy50b2tlbilcclxuICAgICAgICBjdHguc2V0TG9nZ2VkKHRydWUpXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHdlYkxvZ2luID0gKCkgPT4ge1xyXG4gICAgaWYgKCFmb3JtLnVzZXJuYW1lKSB7XHJcbiAgICAgIHVzZXJOLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSBpZiAoIWZvcm0ucGFzc3dvcmQpIHtcclxuICAgICAgcGFzcy5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFTRVVSTH0vbG9naW5gLCB7XHJcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAvLyBpZiBsb2dpbiBzdWNjZXNzXHJcbiAgICAgICAgaWYgKHJlcy50b2tlbikge1xyXG4gICAgICAgICAgY3R4LnNldExvZ2dlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tUb2tlbiA9ICgpID0+IHtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFTRVVSTH0vdmVyaWZ5VG9rZW5gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKbVlrbGtJam9pTlRNME5UUXpOVFF6TmlJc0ltWmlUbUZ0WlNJNkltcHZhRzRpTENKbVlrVnRZV2xzSWpvaVlVQmlZUzVqYjIwaUxDSm1ZbFJ2YTJWdUlqb2ljMlJoY3pRMU0ydHNOV3RzTkcwMU5HMDFORE1pTENKbVlsUnZhMlZ1Ulhod2FYSmhkR2x2YmlJNk5ETXpNalF6TWpRc0ltWmlVR2xqVlhKc0lqb2lhSFIwY0hNNmRYSnNMbU52YlNJc0ltbGhkQ0k2TVRZeU5EWTRPRFEwTkN3aVpYaHdJam94TmpJME5qZzROVFkwZlEuR1FPNkRqTndoa2ZDWW9DZU1HWlFLV19lLXB0WXAwVnV3TDB1Z0tCZGdLNFwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG5cclxuICAgIH0pKCk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICByZWY9e3VzZXJOfVxyXG4gICAgICAgIHZhbHVlPXtmb3JtLnVzZXJuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItc2luYmFkLTUwMCBweC0zIHB5LTEgcm91bmRlZC1sZyBzaGFkb3ctc20gbWItMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNpbmJhZC01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2luYmFkLTUwMFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZSBvciBFbWFpbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHJlZj17cGFzc31cclxuICAgICAgICB2YWx1ZT17Zm9ybS5wYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1zaW5iYWQtNTAwIHB4LTMgcHktMSByb3VuZGVkLWxnIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNpbmJhZC01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2luYmFkLTUwMFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3ZWJMb2dpbigpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTIgYmctc2luYmFkLTcwMCBob3ZlcjpiZy1zaW5iYWQtOTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtNCByb3VuZGVkLWxnIG10LTIgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgID5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPEZhY2Vib29rTG9naW5cclxuICAgICAgICBhcHBJZD17cHJvY2Vzcy5lbnYuRkFDRUJPT0tfQVBQX0lEfVxyXG4gICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxyXG4gICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICAgICAgY2FsbGJhY2s9e2ZhY2Vib29rTG9naW59XHJcbiAgICAgICAgaWNvbj1cImZhLWZhY2Vib29rXCJcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NoZWNrVG9rZW59PkNoZWNrIFRva2VuPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=