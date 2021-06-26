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




function NavLoginForm(props) {
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
                props.closeModal();
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
                  props.closeModal();
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
      lineNumber: 85,
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
      lineNumber: 86,
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
      lineNumber: 94,
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
      lineNumber: 102,
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
      lineNumber: 108,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: checkToken,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2TG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIk5hdkxvZ2luRm9ybSIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZXJOIiwidXNlUmVmIiwicGFzcyIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwiZmFjZWJvb2tMb2dpbiIsInJlc3BvbnNlIiwiZmJEYXRhIiwiZmJJZCIsImlkIiwiZmJOYW1lIiwibmFtZSIsImZiRW1haWwiLCJlbWFpbCIsImZiVG9rZW4iLCJhY2Nlc3NUb2tlbiIsImZiVG9rZW5FeHBpcmF0aW9uIiwiZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lIiwiZmJQaWNVcmwiLCJwaWN0dXJlIiwiZGF0YSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyYXdSZXNwb25zZSIsImpzb24iLCJyZXMiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJzZXRMb2dnZWQiLCJjbG9zZU1vZGFsIiwid2ViTG9naW4iLCJjdXJyZW50IiwiZm9jdXMiLCJjaGVja1Rva2VuIiwiQXV0aG9yaXphdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUMxQyxNQUFNQyxHQUFHLEdBQUdDLHdEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdELG9EQUFNLENBQUMsSUFBRCxD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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBaUJFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTVAsUUFBUSxFQUFkO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBQyxpSEFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGLEVBdUJFLE1BQUMsMkRBQUQ7QUFDRSxTQUFLLEVBQUVoQixpQkFEVDtBQUVFLFlBQVEsRUFBRSxJQUZaO0FBR0UsVUFBTSxFQUFDLG9CQUhUO0FBSUUsWUFBUSxFQUFFcEIsYUFKWjtBQUtFLFFBQUksRUFBQyxhQUxQO0FBTUUsUUFBSSxFQUFDLE9BTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixFQStCRTtBQUFRLFdBQU8sRUFBRXVDLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0JGLENBREY7QUFtQ0Q7O0dBbEh1QnBELFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mMmYyNTRhMDBmODE1OTU3NWZjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMb2dpbkZvcm0ocHJvcHMpIHtcclxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7XHJcbiAgY29uc3QgdXNlck4gPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgcGFzcyA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZmFjZWJvb2tMb2dpbiA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgbGV0IGZiRGF0YSA9IHtcclxuICAgICAgZmJJZDogcmVzcG9uc2UuaWQsXHJcbiAgICAgIGZiTmFtZTogcmVzcG9uc2UubmFtZSxcclxuICAgICAgZmJFbWFpbDogcmVzcG9uc2UuZW1haWwsXHJcbiAgICAgIGZiVG9rZW46IHJlc3BvbnNlLmFjY2Vzc1Rva2VuLFxyXG4gICAgICBmYlRva2VuRXhwaXJhdGlvbjogcmVzcG9uc2UuZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lLFxyXG4gICAgICBmYlBpY1VybDogcmVzcG9uc2UucGljdHVyZS5kYXRhLnVybCxcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFTRVVSTH0vZmJMb2dpbmAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZiRGF0YSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy50b2tlbilcclxuICAgICAgICBjdHguc2V0TG9nZ2VkKHRydWUpXHJcbiAgICAgICAgcHJvcHMuY2xvc2VNb2RhbCgpXHJcbiAgICAgIH1cclxuICAgIH0pKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2ViTG9naW4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWZvcm0udXNlcm5hbWUpIHtcclxuICAgICAgdXNlck4uY3VycmVudC5mb2N1cygpO1xyXG4gICAgfSBlbHNlIGlmICghZm9ybS5wYXNzd29yZCkge1xyXG4gICAgICBwYXNzLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5CQVNFVVJMfS9sb2dpbmAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8vIGlmIGxvZ2luIHN1Y2Nlc3NcclxuICAgICAgICBpZiAocmVzLnRva2VuKSB7XHJcbiAgICAgICAgICBjdHguc2V0TG9nZ2VkKHRydWUpO1xyXG4gICAgICAgICAgcHJvcHMuY2xvc2VNb2RhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSAoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkJBU0VVUkx9L3ZlcmlmeVRva2VuYCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5Sm1Za2xrSWpvaU5UTTBOVFF6TlRRek5pSXNJbVppVG1GdFpTSTZJbXB2YUc0aUxDSm1Za1Z0WVdsc0lqb2lZVUJpWVM1amIyMGlMQ0ptWWxSdmEyVnVJam9pYzJSaGN6UTFNMnRzTld0c05HMDFORzAxTkRNaUxDSm1ZbFJ2YTJWdVJYaHdhWEpoZEdsdmJpSTZORE16TWpRek1qUXNJbVppVUdsalZYSnNJam9pYUhSMGNITTZkWEpzTG1OdmJTSXNJbWxoZENJNk1UWXlORFk0T0RRME5Dd2laWGh3SWpveE5qSTBOamc0TlRZMGZRLkdRTzZEak53aGtmQ1lvQ2VNR1pRS1dfZS1wdFlwMFZ1d0wwdWdLQmRnSzRcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuXHJcbiAgICB9KSgpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgcmVmPXt1c2VyTn1cclxuICAgICAgICB2YWx1ZT17Zm9ybS51c2VybmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLXNpbmJhZC01MDAgcHgtMyBweS0xIHJvdW5kZWQtbGcgc2hhZG93LXNtIG1iLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1zaW5iYWQtNTAwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXNpbmJhZC01MDBcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUgb3IgRW1haWxcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICByZWY9e3Bhc3N9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm0ucGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItc2luYmFkLTUwMCBweC0zIHB5LTEgcm91bmRlZC1sZyBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1zaW5iYWQtNTAwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXNpbmJhZC01MDBcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2ViTG9naW4oKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtYi0yIGJnLXNpbmJhZC03MDAgaG92ZXI6Ymctc2luYmFkLTkwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZC1sZyBtdC0yIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgTG9naW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxGYWNlYm9va0xvZ2luXHJcbiAgICAgICAgYXBwSWQ9e3Byb2Nlc3MuZW52LkZBQ0VCT09LX0FQUF9JRH1cclxuICAgICAgICBhdXRvTG9hZD17dHJ1ZX1cclxuICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxyXG4gICAgICAgIGNhbGxiYWNrPXtmYWNlYm9va0xvZ2lufVxyXG4gICAgICAgIGljb249XCJmYS1mYWNlYm9va1wiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjaGVja1Rva2VufT5DaGVjayBUb2tlbjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9