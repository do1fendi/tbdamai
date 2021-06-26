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
    console.log(response);
    var fbData = {
      fbId: response.id,
      fbName: response.name,
      fbEmail: response.email,
      fbToken: response.accessToken,
      fbTokenExpiration: response.data_access_expiration_time,
      fbPicUrl: response.picture.data.url
    }; // console.log(response);
    // (async () => {
    //   const rawResponse = await fetch(`${process.env.BASEURL}/fbLogin`, {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(fbData),
    //   });
    //   const res = await rawResponse.json();
    //   if (res.status == 'Success') {
    //     localStorage.setItem('token', res.token)
    //     ctx.setLogged(true)
    //     props.closeModal()
    //   }
    // })();
  };

  var webLogin = function webLogin() {
    if (!form.username) {
      userN.current.focus();
    } else if (!form.password) {
      pass.current.focus();
    } else {
      Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var rawResponse, res;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat("http://localhost:3005/frontend", "/login"), {
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
                console.log(res); // if login success

                if (res.token) {
                  localStorage.setItem('token', res.token);
                  ctx.setLogged(true);
                  props.closeModal();
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

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
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
      lineNumber: 81,
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
      lineNumber: 89,
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
      lineNumber: 95,
      columnNumber: 7
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2TG9naW5Gb3JtLmpzIl0sIm5hbWVzIjpbIk5hdkxvZ2luRm9ybSIsInByb3BzIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZXJOIiwidXNlUmVmIiwicGFzcyIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwiZmFjZWJvb2tMb2dpbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImZiRGF0YSIsImZiSWQiLCJpZCIsImZiTmFtZSIsIm5hbWUiLCJmYkVtYWlsIiwiZW1haWwiLCJmYlRva2VuIiwiYWNjZXNzVG9rZW4iLCJmYlRva2VuRXhwaXJhdGlvbiIsImRhdGFfYWNjZXNzX2V4cGlyYXRpb25fdGltZSIsImZiUGljVXJsIiwicGljdHVyZSIsImRhdGEiLCJ1cmwiLCJ3ZWJMb2dpbiIsImN1cnJlbnQiLCJmb2N1cyIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJhd1Jlc3BvbnNlIiwianNvbiIsInJlcyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldExvZ2dlZCIsImNsb3NlTW9kYWwiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTs7QUFDMUMsTUFBTUMsR0FBRyxHQUFHQyx3REFBVSxDQUFDQyx5REFBRCxDQUF0QjtBQUNBLE1BQU1DLEtBQUssR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXBCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHRCxvREFBTSxDQUFDLElBQUQsQ0FBbkI7O0FBSDBDLGtCQUtsQkUsc0RBQVEsQ0FBQztBQUMvQkMs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L0IsU0FBZDtBQUFBLEtBSFo7QUFJRSxRQUFJLEVBQUMsVUFKUDtBQUtFLGFBQVMsRUFBQyw4SUFMWjtBQU1FLGVBQVcsRUFBQyxVQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQWlCRTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1yQixRQUFRLEVBQWQ7QUFBQSxLQURYO0FBRUUsYUFBUyxFQUFDLGlIQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkYsRUF1QkUsTUFBQywyREFBRDtBQUNFLFNBQUssRUFBRUksaUJBRFQ7QUFFRSxZQUFRLEVBQUUsSUFGWjtBQUdFLFVBQU0sRUFBQyxvQkFIVDtBQUlFLFNBQUssRUFBQyxnQkFKUjtBQUtFLFlBQVEsRUFBRXZCLGFBTFo7QUFNRSxRQUFJLEVBQUMsYUFOUDtBQU9FLFFBQUksRUFBQyxPQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2QkYsQ0FERjtBQW1DRDs7R0FyR3VCYixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjdlZWVkZmViMDc3NDQ1YWU5YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3RvcmVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TG9naW5Gb3JtKHByb3BzKSB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpO1xyXG4gIGNvbnN0IHVzZXJOID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHBhc3MgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZhY2Vib29rTG9naW4gPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgbGV0IGZiRGF0YSA9IHtcclxuICAgICAgZmJJZDogcmVzcG9uc2UuaWQsXHJcbiAgICAgIGZiTmFtZTogcmVzcG9uc2UubmFtZSxcclxuICAgICAgZmJFbWFpbDogcmVzcG9uc2UuZW1haWwsXHJcbiAgICAgIGZiVG9rZW46IHJlc3BvbnNlLmFjY2Vzc1Rva2VuLFxyXG4gICAgICBmYlRva2VuRXhwaXJhdGlvbjogcmVzcG9uc2UuZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lLFxyXG4gICAgICBmYlBpY1VybDogcmVzcG9uc2UucGljdHVyZS5kYXRhLnVybCxcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIC8vIChhc3luYyAoKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IHJhd1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuQkFTRVVSTH0vZmJMb2dpbmAsIHtcclxuICAgIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZiRGF0YSksXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gICBjb25zdCByZXMgPSBhd2FpdCByYXdSZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyAgIGlmIChyZXMuc3RhdHVzID09ICdTdWNjZXNzJykge1xyXG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHJlcy50b2tlbilcclxuICAgIC8vICAgICBjdHguc2V0TG9nZ2VkKHRydWUpXHJcbiAgICAvLyAgICAgcHJvcHMuY2xvc2VNb2RhbCgpXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd2ViTG9naW4gPSAoKSA9PiB7XHJcbiAgICBpZiAoIWZvcm0udXNlcm5hbWUpIHtcclxuICAgICAgdXNlck4uY3VycmVudC5mb2N1cygpO1xyXG4gICAgfSBlbHNlIGlmICghZm9ybS5wYXNzd29yZCkge1xyXG4gICAgICBwYXNzLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5CQVNFVVJMfS9sb2dpbmAsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8vIGlmIGxvZ2luIHN1Y2Nlc3NcclxuICAgICAgICBpZiAocmVzLnRva2VuKSB7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXMudG9rZW4pXHJcbiAgICAgICAgICBjdHguc2V0TG9nZ2VkKHRydWUpO1xyXG4gICAgICAgICAgcHJvcHMuY2xvc2VNb2RhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICByZWY9e3VzZXJOfVxyXG4gICAgICAgIHZhbHVlPXtmb3JtLnVzZXJuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItc2luYmFkLTUwMCBweC0zIHB5LTEgcm91bmRlZC1sZyBzaGFkb3ctc20gbWItMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNpbmJhZC01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2luYmFkLTUwMFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZSBvciBFbWFpbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHJlZj17cGFzc31cclxuICAgICAgICB2YWx1ZT17Zm9ybS5wYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1zaW5iYWQtNTAwIHB4LTMgcHktMSByb3VuZGVkLWxnIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNpbmJhZC01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2luYmFkLTUwMFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3ZWJMb2dpbigpfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1iLTIgYmctc2luYmFkLTcwMCBob3ZlcjpiZy1zaW5iYWQtOTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtNCByb3VuZGVkLWxnIG10LTIgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgID5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPEZhY2Vib29rTG9naW5cclxuICAgICAgICBhcHBJZD17cHJvY2Vzcy5lbnYuRkFDRUJPT0tfQVBQX0lEfVxyXG4gICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxyXG4gICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICAgICAgc2NvcGU9XCJwdWJsaWNfcHJvZmlsZVwiXHJcbiAgICAgICAgY2FsbGJhY2s9e2ZhY2Vib29rTG9naW59XHJcbiAgICAgICAgaWNvbj1cImZhLWZhY2Vib29rXCJcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9