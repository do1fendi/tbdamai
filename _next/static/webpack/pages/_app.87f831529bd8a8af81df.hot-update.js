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
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Register */ "./components/Nav/Register.js");




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
  var kid = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    username: "",
    password: ""
  }),
      form = _useState[0],
      setForm = _useState[1];

  var facebookLogin = function facebookLogin(response) {
    // console.log(response)
    var fbData = {
      fbId: response.id,
      fbName: response.name,
      fbEmail: response.email,
      fbToken: response.accessToken,
      fbTokenExpiration: response.data_access_expiration_time,
      fbPicUrl: response.picture.data.url
    };

    if (response) {
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
    }
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
                  localStorage.setItem('token', res.token);
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

  var callChild = function callChild(e) {
    kid.current.setFromOutside();
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 81,
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
      lineNumber: 89,
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
      lineNumber: 97,
      columnNumber: 7
    }
  }, "Login"), __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_5___default.a, {
    appId: "329917598722443",
    autoLoad: true,
    fields: "name,email,picture",
    scope: "public_profile",
    callback: facebookLogin,
    icon: "fa-facebook",
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }), __jsx("button", {
    onClick: callChild,
    className: "mb-2 bg-sinbad-700 hover:bg-sinbad-900 text-white font-bold py-1 px-4 rounded-lg mt-2 w-full focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, "Call Register"), __jsx(_Register__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: kid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }));
}

_s(NavLoginForm, "GnjhzKE3mpIhlgqQUD0czqYLGU0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2TG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIk5hdkxvZ2luRm9ybSIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZXJOIiwidXNlUmVmIiwicGFzcyIsImtpZCIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwiZmFjZWJvb2tMb2dpbiIsInJlc3BvbnNlIiwiZmJEYXRhIiwiZmJJZCIsImlkIiwiZmJOYW1lIiwibmFtZSIsImZiRW1haWwiLCJlbWFpbCIsImZiVG9rZW4iLCJhY2Nlc3NUb2tlbiIsImZiVG9rZW5FeHBpcmF0aW9uIiwiZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lIiwiZmJQaWNVcmwiLCJwaWN0dXJlIiwiZGF0YSIsInVybCIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJhd1Jlc3BvbnNlIiwianNvbiIsInJlcyIsInN0YXR1cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsInNldExvZ2dlZCIsImNsb3NlTW9kYWwiLCJ3ZWJMb2dpbiIsImN1cnJlbnQiLCJmb2N1cyIsImNvbnNvbGUiLCJsb2ciLCJjYWxsQ2hpbGQiLCJlIiwic2V0RnJvbU91dHNpZGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUFBOztBQUMxQyxNQUFNQyxHQUFHLEdBQUdDLHdEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBcEI7QUFDQSxNQUFNQyxJQUFJLEdBQUdELG9EQUFNLENBQUMsSUFBRCxDQUFuQjtBQUNBLE1BQU1FLEdBQUcsR0FBR0Ysb0RBQU0sRUFBbEI7O0FBSjBDLGtCQU1sQkcsc0RBQVEsQ0FBQztBQUMvQkMsWUFBUSxFQUFFLEVBRHFCO0FBRS9CQyxZQUFRLEVBQUU7QUFGcUIsR0FBRCxDQU5VO0FBQUEsTUFNbkNDLElBTm1DO0FBQUEsTUFNN0JDLE9BTjZCOztBQVcxQyxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLFFBQUQsRUFBYztBQUNsQztBQUNBLFFBQUlDLE1BQU0sR0FBRztBQUNYQyxVQUFJLEVBQUVGLFFBQVEsQ0FBQ0csRUFESjtBQUVYQyxZQUFNLEVBQUVKLFFBQVEsQ0FBQ0ssSUFGTjtBQUdYQyxhQUFPLEVBQUVOLFFBQVEsQ0FBQ08sS0FIUDtBQUlYQyxhQUFPLEVBQUVSLFFBQVEsQ0FBQ1MsV0FKUDtBQUtYQyx1QkFBaUIsRUFBRVYsUUFBUSxDQUFDVywyQkFMakI7QUFNWEMsY0FBUSxFQUFFWixRQUFRLENBQUNhLE9BQVQsQ0FBaUJDLElBQWpCLENBQXNCQztBQU5yQixLQUFiOztBQVFBLFFBQUlmLFFBQUosRUFBYztBQUNaLDZQQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQzJCZ0IsS0FBSyxXQUFJQyxnQ0FBSixlQUFtQztBQUNoRUMsd0JBQU0sRUFBRSxNQUR3RDtBQUVoRUMseUJBQU8sRUFBRTtBQUNQQywwQkFBTSxFQUFFLGtCQUREO0FBRVAsb0NBQWdCO0FBRlQsbUJBRnVEO0FBTWhFQyxzQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXRCLE1BQWY7QUFOMEQsaUJBQW5DLENBRGhDOztBQUFBO0FBQ091QiwyQkFEUDtBQUFBO0FBQUEsdUJBU21CQSxXQUFXLENBQUNDLElBQVosRUFUbkI7O0FBQUE7QUFTT0MsbUJBVFA7O0FBVUMsb0JBQUlBLEdBQUcsQ0FBQ0MsTUFBSixJQUFjLFNBQWxCLEVBQTZCO0FBQzNCQyw4QkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSCxHQUFHLENBQUNJLEtBQWxDO0FBQ0EzQyxxQkFBRyxDQUFDNEMsU0FBSixDQUFjLElBQWQ7QUFDQTdDLHVCQUFLLENBQUM4QyxVQUFOO0FBQ0Q7O0FBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRDtBQWdCRDtBQUVGLEdBN0JEOztBQStCQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQUksQ0FBQ3BDLElBQUksQ0FBQ0YsUUFBVixFQUFvQjtBQUNsQkwsV0FBSyxDQUFDNEMsT0FBTixDQUFjQyxLQUFkO0FBQ0QsS0FGRCxNQUVPLElBQUksQ0FBQ3RDLElBQUksQ0FBQ0QsUUFBVixFQUFvQjtBQUN6QkosVUFBSSxDQUFDMEMsT0FBTCxDQUFhQyxLQUFiO0FBQ0QsS0FGTSxNQUVBO0FBQ0wsNlBBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDMkJuQixLQUFLLFdBQUlDLGdDQUFKLGFBQWlDO0FBQzlEQyx3QkFBTSxFQUFFLE1BRHNEO0FBRTlEQyx5QkFBTyxFQUFFO0FBQ1BDLDBCQUFNLEVBQUUsa0JBREQ7QUFFUCxvQ0FBZ0I7QUFGVCxtQkFGcUQ7QUFNOURDLHNCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlMUIsSUFBZjtBQU53RCxpQkFBakMsQ0FEaEM7O0FBQUE7QUFDTzJCLDJCQURQO0FBQUE7QUFBQSx1QkFTbUJBLFdBQVcsQ0FBQ0MsSUFBWixFQVRuQjs7QUFBQTtBQVNPQyxtQkFUUDtBQVVDVSx1QkFBTyxDQUFDQyxHQUFSLENBQVlYLEdBQVosRUFWRCxDQVdDOztBQUNBLG9CQUFJQSxHQUFHLENBQUNJLEtBQVIsRUFBZTtBQUNiRiw4QkFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCSCxHQUFHLENBQUNJLEtBQWxDO0FBQ0EzQyxxQkFBRyxDQUFDNEMsU0FBSixDQUFjLElBQWQ7QUFDQTdDLHVCQUFLLENBQUM4QyxVQUFOO0FBQ0Q7O0FBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7QUFrQkQ7QUFDRixHQXpCRDs7QUEyQkEsTUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCOUMsT0FBRyxDQUFDeUMsT0FBSixDQUFZTSxjQUFaO0FBQ0QsR0FGRDs7QUFJQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBRWxELEtBRFA7QUFFRSxTQUFLLEVBQUVPLElBQUksQ0FBQ0YsUUFGZDtBQUdFLFlBQVEsRUFBRSxrQkFBQzRDLENBQUQ7QUFBQSxhQUFPekMsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZRixnQkFBUSxFQUFFNEMsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQS9CLFNBQWQ7QUFBQSxLQUhaO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxhQUFTLEVBQUMsbUpBTFo7QUFNRSxlQUFXLEVBQUMsbUJBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0U7QUFDRSxPQUFHLEVBQUVsRCxJQURQO0FBRUUsU0FBSyxFQUFFSyxJQUFJLENBQUNELFFBRmQ7QUFHRSxZQUFRLEVBQUUsa0JBQUMyQyxDQUFEO0FBQUEsYUFBT3pDLE9BQU8saUNBQU1ELElBQU47QUFBWUQsZ0JBQVEsRUFBRTJDLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUEvQixTQUFkO0FBQUEsS0FIWjtBQUlFLFFBQUksRUFBQyxVQUpQO0FBS0UsYUFBUyxFQUFDLDhJQUxaO0FBTUUsZUFBVyxFQUFDLFVBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBaUJFO0FBQ0UsV0FBTyxFQUFFO0FBQUEsYUFBTVQsUUFBUSxFQUFkO0FBQUEsS0FEWDtBQUVFLGFBQVMsRUFBQyxpSEFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGLEVBdUJFLE1BQUMsMkRBQUQ7QUFDRSxTQUFLLEVBQUVoQixpQkFEVDtBQUVFLFlBQVEsRUFBRSxJQUZaO0FBR0UsVUFBTSxFQUFDLG9CQUhUO0FBSUUsU0FBSyxFQUFDLGdCQUpSO0FBS0UsWUFBUSxFQUFFbEIsYUFMWjtBQU1FLFFBQUksRUFBQyxhQU5QO0FBT0UsUUFBSSxFQUFDLE9BUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCRixFQWdDRTtBQUFRLFdBQU8sRUFBRXVDLFNBQWpCO0FBQTRCLGFBQVMsRUFBQyxpSEFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQ0YsRUFpQ0UsTUFBQyxpREFBRDtBQUFVLE9BQUcsRUFBRTdDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDRixDQURGO0FBcUNEOztHQTlHdUJSLFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44N2Y4MzE1MjliZDhhOGFmODFkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TG9naW5Gb3JtKHByb3BzKSB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpO1xyXG4gIGNvbnN0IHVzZXJOID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHBhc3MgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qga2lkID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZhY2Vib29rTG9naW4gPSAocmVzcG9uc2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgbGV0IGZiRGF0YSA9IHtcclxuICAgICAgZmJJZDogcmVzcG9uc2UuaWQsXHJcbiAgICAgIGZiTmFtZTogcmVzcG9uc2UubmFtZSxcclxuICAgICAgZmJFbWFpbDogcmVzcG9uc2UuZW1haWwsXHJcbiAgICAgIGZiVG9rZW46IHJlc3BvbnNlLmFjY2Vzc1Rva2VuLFxyXG4gICAgICBmYlRva2VuRXhwaXJhdGlvbjogcmVzcG9uc2UuZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lLFxyXG4gICAgICBmYlBpY1VybDogcmVzcG9uc2UucGljdHVyZS5kYXRhLnVybCxcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFTRVVSTH0vZmJMb2dpbmAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZiRGF0YSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09ICdTdWNjZXNzJykge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgcmVzLnRva2VuKVxyXG4gICAgICAgICAgY3R4LnNldExvZ2dlZCh0cnVlKVxyXG4gICAgICAgICAgcHJvcHMuY2xvc2VNb2RhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBjb25zdCB3ZWJMb2dpbiA9ICgpID0+IHtcclxuICAgIGlmICghZm9ybS51c2VybmFtZSkge1xyXG4gICAgICB1c2VyTi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9IGVsc2UgaWYgKCFmb3JtLnBhc3N3b3JkKSB7XHJcbiAgICAgIHBhc3MuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkJBU0VVUkx9L2xvZ2luYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgLy8gaWYgbG9naW4gc3VjY2Vzc1xyXG4gICAgICAgIGlmIChyZXMudG9rZW4pIHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy50b2tlbilcclxuICAgICAgICAgIGN0eC5zZXRMb2dnZWQodHJ1ZSk7XHJcbiAgICAgICAgICBwcm9wcy5jbG9zZU1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FsbENoaWxkID0gKGUpID0+IHtcclxuICAgIGtpZC5jdXJyZW50LnNldEZyb21PdXRzaWRlKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICByZWY9e3VzZXJOfVxyXG4gICAgICAgIHZhbHVlPXtmb3JtLnVzZXJuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItc2luYmFkLTUwMCBweC0zIHB5LTEgcm91bmRlZC1sZyBzaGFkb3ctc20gbWItMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNpbmJhZC01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2luYmFkLTUwMFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZSBvciBFbWFpbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHJlZj17cGFzc31cclxuICAgICAgICB2YWx1ZT17Zm9ybS5wYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1zaW5iYWQtNTAwIHB4LTMgcHktMSByb3VuZGVkLWxnIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNpbmJhZC01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2luYmFkLTUwMFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3ZWJMb2dpbigpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTIgYmctc2luYmFkLTcwMCBob3ZlcjpiZy1zaW5iYWQtOTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtNCByb3VuZGVkLWxnIG10LTIgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgID5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPEZhY2Vib29rTG9naW5cclxuICAgICAgICBhcHBJZD17cHJvY2Vzcy5lbnYuRkFDRUJPT0tfQVBQX0lEfVxyXG4gICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxyXG4gICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICAgICAgc2NvcGU9XCJwdWJsaWNfcHJvZmlsZVwiXHJcbiAgICAgICAgY2FsbGJhY2s9e2ZhY2Vib29rTG9naW59XHJcbiAgICAgICAgaWNvbj1cImZhLWZhY2Vib29rXCJcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NhbGxDaGlsZH0gY2xhc3NOYW1lPVwibWItMiBiZy1zaW5iYWQtNzAwIGhvdmVyOmJnLXNpbmJhZC05MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC00IHJvdW5kZWQtbGcgbXQtMiB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lXCI+Q2FsbCBSZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgICA8UmVnaXN0ZXIgcmVmPXtraWR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=