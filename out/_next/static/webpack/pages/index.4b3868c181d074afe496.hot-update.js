webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card/Card */ "./components/Card/Card.js");



var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function Home() {
  _s();

  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_store__WEBPACK_IMPORTED_MODULE_6__["StoreContext"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    (function () {
      var _getRand = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var dt, res;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.tbdamai.net/frontend/random");

              case 2:
                dt = _context.sent;
                _context.next = 5;
                return dt.json();

              case 5:
                res = _context.sent;
                setData(res);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getRand() {
        return _getRand.apply(this, arguments);
      }

      return getRand;
    })()(); // conversion api

    (function () {
      var _fetchIp = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var ip, data;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return ctx.getIp();

              case 2:
                ip = _context2.sent;
                console.log(ip);
                data = {
                  event_name: "PageView",
                  action_source: "website",
                  event_source_url: "https://tbdamai.net/",
                  user_data: {
                    client_ip_address: ip,
                    client_user_agent: navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g, "$1")
                  }
                };
                localStorage.getItem("tbEmail") ? data.user_data.em = ctx.hash(localStorage.getItem("tbEmail")) : '';
                router.query.fbclid ? data.user_data.fbc = "fb.1.".concat(Date.now(), ".").concat(router.query.fbclid) : '';
                ctx.conversionApi(data);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fetchIp() {
        return _fetchIp.apply(this, arguments);
      }

      return fetchIp;
    })()();
  }, [router.query]);
  return __jsx("div", {
    className: "lg:container p-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "TBDamai | Home"), __jsx("meta", {
    name: "description",
    content: "Menjual alat dan bahan untuk bangunan dan pagar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "coran, tempa, pipa, behel, unp, besi, asesoris",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/tbdamai/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mt-5 mb-2 bg-red-500 text-white lg:text-xl text-lg w-auto inline-block p-1 px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "Produk Spesial"), __jsx("div", {
    className: "flex overflow-x-scroll pb-10 hide-scroll-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-nowrap lg:flex-warp gap-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-tombak-pattern bg-contain bg-center bg-no-repeat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/coran/tombak",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }, "Tombak"))))), __jsx("div", {
    className: "inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-hewan-pattern bg-contain bg-center bg-no-repeat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/coran/hewan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, "Hewan"))))), __jsx("div", {
    className: "inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-lainnya-pattern bg-contain bg-center bg-no-repeat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/coran/lainnya",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl size-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, "Lainnya"))))))), __jsx("div", {
    className: "grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  })));
}

_s(Home, "GIvyViwF335nC5KLqTsC6JgR+Ls=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImN0eCIsInVzZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJkdCIsImpzb24iLCJyZXMiLCJnZXRSYW5kIiwiZ2V0SXAiLCJpcCIsImNvbnNvbGUiLCJsb2ciLCJldmVudF9uYW1lIiwiYWN0aW9uX3NvdXJjZSIsImV2ZW50X3NvdXJjZV91cmwiLCJ1c2VyX2RhdGEiLCJjbGllbnRfaXBfYWRkcmVzcyIsImNsaWVudF91c2VyX2FnZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9TdHJpbmciLCJyZXBsYWNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVtIiwiaGFzaCIsInF1ZXJ5IiwiZmJjbGlkIiwiZmJjIiwiRGF0ZSIsIm5vdyIsImNvbnZlcnNpb25BcGkiLCJmZXRjaElwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ0MseURBQUQsQ0FBdEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUY2QixrQkFHTEMsc0RBQVEsQ0FBQyxFQUFELENBSEg7QUFBQSxNQUd0QkMsSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBSzdCQyx5REFBUyxDQUFDLFlBQU07QUFFZDtBQUFBLDRRQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2tCQyxLQUFLLENBQUMseUNBQUQsQ0FEdkI7O0FBQUE7QUFDT0Msa0JBRFA7QUFBQTtBQUFBLHVCQUVtQkEsRUFBRSxDQUFDQyxJQUFILEVBRm5COztB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FqREYsQ0FERjtBQXVERDs7R0F6RnVCUCxJO1VBRVBLLHFEOzs7S0FGT0wsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YjM4NjhjMTgxZDA3NGFmZTQ5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFN0b3JlQ29udGV4dCB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkL0NhcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAoYXN5bmMgZnVuY3Rpb24gZ2V0UmFuZCgpIHtcclxuICAgICAgY29uc3QgZHQgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL3JhbmRvbVwiKTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZHQuanNvbigpO1xyXG4gICAgICBzZXREYXRhKHJlcyk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIGNvbnZlcnNpb24gYXBpXHJcbiAgICAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hJcCgpIHsgICAgICBcclxuICAgICAgY29uc3QgaXAgPSBhd2FpdCBjdHguZ2V0SXAoKTtcclxuICAgICAgY29uc29sZS5sb2coaXApXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgZXZlbnRfbmFtZTogXCJQYWdlVmlld1wiLFxyXG4gICAgICAgIGFjdGlvbl9zb3VyY2U6IFwid2Vic2l0ZVwiLFxyXG4gICAgICAgIGV2ZW50X3NvdXJjZV91cmw6IFwiaHR0cHM6Ly90YmRhbWFpLm5ldC9cIixcclxuICAgICAgICB1c2VyX2RhdGE6IHtcclxuICAgICAgICAgIGNsaWVudF9pcF9hZGRyZXNzOiBpcCxcclxuICAgICAgICAgIGNsaWVudF91c2VyX2FnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oWzEtOV1bMS05XXxbMS05XSlfXFx3Ky9nLCBcIiQxXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YkVtYWlsXCIpID8gZGF0YS51c2VyX2RhdGEuZW0gPSBjdHguaGFzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRiRW1haWxcIikpOicnO1xyXG4gICAgICByb3V0ZXIucXVlcnkuZmJjbGlkID8gZGF0YS51c2VyX2RhdGEuZmJjID0gYGZiLjEuJHtEYXRlLm5vdygpfS4ke3JvdXRlci5xdWVyeS5mYmNsaWR9YDonJztcclxuICAgICAgY3R4LmNvbnZlcnNpb25BcGkoZGF0YSk7XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29udGFpbmVyIHAtMlwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VEJEYW1haSB8IEhvbWU8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNZW5qdWFsIGFsYXQgZGFuIGJhaGFuIHVudHVrIGJhbmd1bmFuIGRhbiBwYWdhclwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cImNvcmFuLCB0ZW1wYSwgcGlwYSwgYmVoZWwsIHVucCwgYmVzaSwgYXNlc29yaXNcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3RiZGFtYWkvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImgtNDggdy1mdWxsIGZyb20tYmx1ZS02MDAgdG8tcHVycGxlLTUwMCBiZy1ncmFkaWVudC10by1iIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC0yeGwgbGc6dGV4dC02eGxcIj5TZWxhbWF0IERhdGFuZyBkaSBUYiBEYW1haTwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IG1iLTIgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGxnOnRleHQteGwgdGV4dC1sZyB3LWF1dG8gaW5saW5lLWJsb2NrIHAtMSBweC0yXCI+XHJcbiAgICAgICAgUHJvZHVrIFNwZXNpYWxcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy14LXNjcm9sbCBwYi0xMCBoaWRlLXNjcm9sbC1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1ub3dyYXAgbGc6ZmxleC13YXJwIGdhcC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC02NCBtYXgtdy14cyBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBzaGFkb3ctbWQgYmctd2hpdGUgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy10b21iYWstcGF0dGVybiBiZy1jb250YWluIGJnLWNlbnRlciBiZy1uby1yZXBlYXRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvcmFuL3RvbWJha1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiByb3VuZGVkLXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVG9tYmFrXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02NCBoLTY0IG1heC13LXhzIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1tZCBiZy13aGl0ZSBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWhld2FuLXBhdHRlcm4gYmctY29udGFpbiBiZy1jZW50ZXIgYmctbm8tcmVwZWF0XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3Jhbi9oZXdhblwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiByb3VuZGVkLXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSGV3YW5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtNjQgbWF4LXcteHMgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc2hhZG93LW1kIGJnLXdoaXRlIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctbGFpbm55YS1wYXR0ZXJuIGJnLWNvbnRhaW4gYmctY2VudGVyIGJnLW5vLXJlcGVhdFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29yYW4vbGFpbm55YVwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiByb3VuZGVkLXhsIHNpemUtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMYWlubnlhXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgMnhsOmdyaWQtY29scy02IHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC0zIHNtOm0tYXV0b1wiPlxyXG4gICAgICAgIDxDYXJkIGRhdGE9e2RhdGF9PjwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=