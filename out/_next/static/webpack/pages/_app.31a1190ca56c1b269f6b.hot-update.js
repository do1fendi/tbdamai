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
      lineNumber: 83,
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
      lineNumber: 84,
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
      lineNumber: 92,
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
      lineNumber: 100,
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
      lineNumber: 106,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: checkToken,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2TG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIk5hdkxvZ2luRm9ybSIsImN0eCIsInVzZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJ1c2VyTiIsInVzZVJlZiIsInBhc3MiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJmb3JtIiwic2V0Rm9ybSIsImZhY2Vib29rTG9naW4iLCJyZXNwb25zZSIsImZiRGF0YSIsImZiSWQiLCJpZCIsImZiTmFtZSIsIm5hbWUiLCJmYkVtYWlsIiwiZW1haWwiLCJmYlRva2VuIiwiYWNjZXNzVG9rZW4iLCJmYlRva2VuRXhwaXJhdGlvbiIsImRhdGFfYWNjZXNzX2V4cGlyYXRpb25fdGltZSIsImZiUGljVXJsIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJwcm9jZXNzIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmF3UmVzcG9uc2UiLCJqc29uIiwicmVzIiwic3RhdHVzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRva2VuIiwic2V0TG9nZ2VkIiwid2ViTG9naW4iLCJjdXJyZW50IiwiZm9jdXMiLCJjaGVja1Rva2VuIiwiQXV0aG9yaXphdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQ3JDLE1BQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ0MseURBQUQsQ0FBdEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFwQjtBQUNBLE1BQU1DLElBQUksR0FBR0Qsb0RBQU0sQ0FBQyxJQUFELENBQW5COztBQUhxQyxrQkFLYkUsc0RBQVEsQ0FBQztBQUMvQkMsWUFBUSxFQUFFLEVBRHFCO0FBRS9CQyxZQUFRLEVBQUU7QUFGcUIsR0FBRCxDQUxLO0FBQUEsTUFLOUJDLElBTDhCO0FBQUEsTUFLeEJDLE9BTHdCOztBQVVyQyxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYztBQUNsQyxRQUFJQyxNQUFNLEdBQUc7QUFDWEMsVUFBSSxFQUFFRixRQUFRLENBQUNHLEVBREo7QUFFWEMsWUFBTSxFQUFFSixRQUFRLENBQUNLLElBRk47QUFHWEMsYUFBTyxFQUFFTixRQUFRLENBQUNPLEtBSFA7QUFJWEMsYUFBTyxFQUFFUixRQUFRLENBQUNTLFdBSlA7QUFLWEMsdUJBQWlCLEVBQUVWLFFBQVEsQ0FBQ1csMkJBTGpCO0FBTVhDLGNBQVEsRUFBRVosUUFBUSxDQUFDYSxPQUFULENBQWlCQyxJQUFqQixDQUFzQkM7QUFOckIsS0FBYjtBQVFBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWpCLFFBQVo7O0FBQ0EsMlBBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMkJrQixLQUFLLFdBQUlDLGdDQUFKLGVBQW1DO0FBQ2hFQyxzQkFBTSxFQUFFLE1BRHdEO0FBRWhFQyx1QkFBTyxFQUFFO0FBQ1BDLHdCQUFNLEVBQUUsa0JBREQ7QUFFUCxrQ0FBZ0I7QUFGVCxpQkFGdUQ7QUFNaEVDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFleEIsTUFBZjtBQU4wRCxlQUFuQyxDQURoQzs7QUFBQTtBQUNPeUIseUJBRFA7QUFBQTtBQUFBLHFCQVNtQkEsV0FBVyxDQUFDQyxJQUFaLEVBVG5COztBQUFBO0FBU09DLGlCQVRQOztBQVVDLGtCQUFHQSxHQUFHLENBQUNDLE1BQUosSUFBYyxTQUFqQixFQUEyQjtBQUN6QkMsNEJBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QkgsR0FBRyxDQUFDSSxLQUFsQztBQUNBNUMsbUJBQUcsQ0FBQzZDLFNBQUosQ0FBYyxJQUFkO0FBQ0Q7O0FBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQWVELEdBekJEOztBQTJCQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQUksQ0FBQ3JDLElBQUksQ0FBQ0YsUUFBVixFQUFvQjtBQUNsQkosV0FBSyxDQUFDNEMsT0FBTixDQUFjQyxLQUFkO0FBQ0QsS0FGRCxNQUVPLElBQUksQ0FBQ3ZDLElBQUksQ0FBQ0QsUUFBVixFQUFvQjtBQUN6QkgsVUFBSSxDQUFDMEMsT0FBTCxDQUFhQyxLQUFiO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsNlBBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDMkJsQixLQUFLLFdBQUlDLGdDQUFKLGFBQWlDO0FBQzlEQyx3QkFBTSxFQUFFLE1BRHNEO0FBRTlEQyx5QkFBTyxFQUFFO0FBQ1BDLDBCQUFNLEVBQUUsa0JBREQ7QUFFUCxvQ0FBZ0I7QUFGVCxtQkFGcUQ7QUFNOURDLHNCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlNUIsSUFBZjtBQU53RCxpQkFBakMsQ0FEaEM7O0FBQUE7QUFDTzZCLDJCQURQO0FBQUE7QUFBQSx1QkFTbUJBLFdBQVcsQ0FBQ0MsSUFBWixFQVRuQjs7QUFBQTtBQVNPQyxtQkFUUDtBQVVDWix1QkFBTyxDQUFDQyxHQUFSLENBQVlXLEdBQVosRUFWRCxDQVdDOztBQUNBLG9CQUFJQSxHQUFHLENBQUNJLEtBQVIsRUFBZTtBQUNiNUMscUJBQUcsQ0FBQzZDLFNBQUosQ0FBYyxJQUFkO0FBQ0Q7O0FBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRDtBQWdCRDtBQUNGLEdBdkJEOztBQXlCQSxNQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLDJQQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzJCbkIsS0FBSyxXQUFJQyxnQ0FBSixtQkFBdUM7QUFDcEVDLHNCQUFNLEVBQUUsTUFENEQ7QUFFcEVDLHVCQUFPLEVBQUU7QUFDUEMsd0JBQU0sRUFBRSxrQkFERDtBQUVQLGtDQUFnQixrQkFGVDtBQUdQZ0IsK0JBQWEsRUFBRTtBQUhSO0FBRjJELGVBQXZDLENBRGhDOztBQUFBO0FBQ09aLHlCQURQO0FBQUE7QUFBQSxxQkFTbUJBLFdBQVcsQ0FBQ0MsSUFBWixFQVRuQjs7QUFBQTtBQVNPQyxpQkFUUDtBQVVDWixxQkFBTyxDQUFDQyxHQUFSLENBQVlXLEdBQVo7O0FBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQWFELEdBZEQ7O0FBZUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxPQUFHLEVBQUVyQyxLQURQO0FBRUUsU0FBSyxFQUFFTSxJQUFJLENBQUNGLFFBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUM0QyxDQUFEO0FBQUEsYUFBT3pDLE9BQU8saUNBQU1ELElBQU47QUFBWUYsZ0JBQVEsRUFBRTRDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUEvQixTQUFkO0FBQUEsS0FIWjtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsYUFBUyxFQUFDLG1KQUxaO0FBTUUsZUFBVyxFQUFDLG1CQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVNFO0FBQ0UsT0FBRyxFQUFFaEQsSUFEUDtBQUVFLFNBQUssRUFBRUksSUFBSSxDQUFDRCxRQUZkO0FBR0UsWUFBUSxFQUFFLGtCQUFDMkMsQ0FBRDtBQUFBLGFBQU96QyxPQUFPLGlDQUFNRCxJQUFOO0FBQVlELGdCQUFRLEVBQUUyQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFBL0IsU0FBZDtBQUFBLEtBSFo7QUFJRSxRQUFJLEVBQUMsVUFKUDtBQUtFLGFBQVMsRUFBQyw4SUFMWjtBQU1FLGVBQVcsRUFBQyxVQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQWlCRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1QLFFBQVEsRUFBZDtBQUFBLEtBRFg7QUFFRSxhQUFTLEVBQUMsaUhBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRixFQXVCRSxNQUFDLDJEQUFEO0FBQ0UsU0FBSyxFQUFFZixpQkFEVDtBQUVFLFlBQVEsRUFBRSxJQUZaO0FBR0UsVUFBTSxFQUFDLG9CQUhUO0FBSUUsWUFBUSxFQUFFcEIsYUFKWjtBQUtFLFFBQUksRUFBQyxhQUxQO0FBTUUsUUFBSSxFQUFDLE9BTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixFQStCRTtBQUFRLFdBQU8sRUFBRXNDLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBL0JGLENBREY7QUFtQ0Q7O0dBaEh1QmxELFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMWExMTkwY2E1NmMxYjI2OWY2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpO1xyXG4gIGNvbnN0IHVzZXJOID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHBhc3MgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZhY2Vib29rTG9naW4gPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGxldCBmYkRhdGEgPSB7XHJcbiAgICAgIGZiSWQ6IHJlc3BvbnNlLmlkLFxyXG4gICAgICBmYk5hbWU6IHJlc3BvbnNlLm5hbWUsXHJcbiAgICAgIGZiRW1haWw6IHJlc3BvbnNlLmVtYWlsLFxyXG4gICAgICBmYlRva2VuOiByZXNwb25zZS5hY2Nlc3NUb2tlbixcclxuICAgICAgZmJUb2tlbkV4cGlyYXRpb246IHJlc3BvbnNlLmRhdGFfYWNjZXNzX2V4cGlyYXRpb25fdGltZSxcclxuICAgICAgZmJQaWNVcmw6IHJlc3BvbnNlLnBpY3R1cmUuZGF0YS51cmwsXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkJBU0VVUkx9L2ZiTG9naW5gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmYkRhdGEpLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZihyZXMuc3RhdHVzID09ICdTdWNjZXNzJyl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLnRva2VuKVxyXG4gICAgICAgIGN0eC5zZXRMb2dnZWQodHJ1ZSlcclxuICAgICAgfSAgICAgIFxyXG4gICAgfSkoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB3ZWJMb2dpbiA9ICgpID0+IHtcclxuICAgIGlmICghZm9ybS51c2VybmFtZSkge1xyXG4gICAgICB1c2VyTi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9IGVsc2UgaWYgKCFmb3JtLnBhc3N3b3JkKSB7XHJcbiAgICAgIHBhc3MuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkJBU0VVUkx9L2xvZ2luYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgLy8gaWYgbG9naW4gc3VjY2Vzc1xyXG4gICAgICAgIGlmIChyZXMudG9rZW4pIHtcclxuICAgICAgICAgIGN0eC5zZXRMb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrVG9rZW4gPSAoKSA9PiB7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkJBU0VVUkx9L3ZlcmlmeVRva2VuYCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5Sm1Za2xrSWpvaU5UTTBOVFF6TlRRek5pSXNJbVppVG1GdFpTSTZJbXB2YUc0aUxDSm1Za1Z0WVdsc0lqb2lZVUJpWVM1amIyMGlMQ0ptWWxSdmEyVnVJam9pYzJSaGN6UTFNMnRzTld0c05HMDFORzAxTkRNaUxDSm1ZbFJ2YTJWdVJYaHdhWEpoZEdsdmJpSTZORE16TWpRek1qUXNJbVppVUdsalZYSnNJam9pYUhSMGNITTZkWEpzTG1OdmJTSXNJbWxoZENJNk1UWXlORFk0T0RRME5Dd2laWGh3SWpveE5qSTBOamc0TlRZMGZRLkdRTzZEak53aGtmQ1lvQ2VNR1pRS1dfZS1wdFlwMFZ1d0wwdWdLQmRnSzRcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuXHJcbiAgICB9KSgpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgcmVmPXt1c2VyTn1cclxuICAgICAgICB2YWx1ZT17Zm9ybS51c2VybmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB1c2VybmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLXNpbmJhZC01MDAgcHgtMyBweS0xIHJvdW5kZWQtbGcgc2hhZG93LXNtIG1iLTIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1zaW5iYWQtNTAwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXNpbmJhZC01MDBcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWUgb3IgRW1haWxcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICByZWY9e3Bhc3N9XHJcbiAgICAgICAgdmFsdWU9e2Zvcm0ucGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItc2luYmFkLTUwMCBweC0zIHB5LTEgcm91bmRlZC1sZyBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1zaW5iYWQtNTAwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXNpbmJhZC01MDBcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gd2ViTG9naW4oKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtYi0yIGJnLXNpbmJhZC03MDAgaG92ZXI6Ymctc2luYmFkLTkwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTQgcm91bmRlZC1sZyBtdC0yIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgTG9naW5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxGYWNlYm9va0xvZ2luXHJcbiAgICAgICAgYXBwSWQ9e3Byb2Nlc3MuZW52LkZBQ0VCT09LX0FQUF9JRH1cclxuICAgICAgICBhdXRvTG9hZD17dHJ1ZX1cclxuICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxyXG4gICAgICAgIGNhbGxiYWNrPXtmYWNlYm9va0xvZ2lufVxyXG4gICAgICAgIGljb249XCJmYS1mYWNlYm9va1wiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjaGVja1Rva2VufT5DaGVjayBUb2tlbjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9