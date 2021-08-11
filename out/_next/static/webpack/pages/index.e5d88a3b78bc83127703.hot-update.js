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
                // console.log(ip)
                data = {
                  event_name: "PageView",
                  action_source: "website",
                  event_source_url: "https://tbdamai.net/",
                  user_data: {
                    client_ip_address: ip,
                    client_user_agent: navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g, "$1")
                  }
                }; // localStorage.getItem("tbEmail") ? data.user_data.em = ctx.hash(localStorage.getItem("tbEmail")):'';
                // router.query.fbclid ? data.user_data.fbc = `fb.1.${Date.now()}.${router.query.fbclid}`:'';

                ctx.conversionApi(data);

              case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImN0eCIsInVzZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJkdCIsImpzb24iLCJyZXMiLCJnZXRSYW5kIiwiZ2V0SXAiLCJpcCIsImV2ZW50X25hbWUiLCJhY3Rpb25fc291cmNlIiwiZXZlbnRfc291cmNlX3VybCIsInVzZXJfZGF0YSIsImNsaWVudF9pcF9hZGRyZXNzIiwiY2xpZW50X3VzZXJfYWdlbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJjb252ZXJzaW9uQXBpIiwiZmV0Y2hJcCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLEdBQUcsR0FBR0Msd0RBQVUsQ0FBQ0MseURBQUQsQ0FBdEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUY2QixrQkFHTEMsc0RBQVEsQ0FBQyxFQUFELENBSEg7QUFBQSxNQUd0QkMsSUFIc0I7QUFBQSxNQUdoQkMsT0FIZ0I7O0FBSzdCQyx5REFBUyxDQUFDLFlBQU07QUFFZDtBQUFBLDRRQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2tCQyxLQUFLLENBQUMseUNBQUQsQ0FEdkI7O0FBQUE7QUFDT0Msa0JBRFA7QUFBQTtBQUFBLHVCQUVtQkEsRUFBRSxDQUFDQyxJQUFILEVBRm5COztBQUFBO0FBRU9DLG1CQUZQO0FBR0NMLHVCQUFPLENBQUNLLEdBQUQsQ0FBUDs7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxP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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FERixDQURGLENBWkYsRUF1QkU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbU5BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQywrRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsQ0FERixDQURGLENBdkJGLENBREYsQ0FYRixFQWlERTtBQUFLLGFBQVMsRUFBQyxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFNLFFBQUksRUFBRXRCLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBakRGLENBREY7QUF1REQ7O0dBekZ1QlAsSTtVQUVQSyxxRDs7O0tBRk9MLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTVkODhhM2I3OGJjODMxMjc3MDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRleHQgfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgKGFzeW5jIGZ1bmN0aW9uIGdldFJhbmQoKSB7XHJcbiAgICAgIGNvbnN0IGR0ID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9yYW5kb21cIik7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGR0Lmpzb24oKTtcclxuICAgICAgc2V0RGF0YShyZXMpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICAvLyBjb252ZXJzaW9uIGFwaVxyXG4gICAgKGFzeW5jIGZ1bmN0aW9uIGZldGNoSXAoKSB7ICAgICAgXHJcbiAgICAgIGNvbnN0IGlwID0gYXdhaXQgY3R4LmdldElwKCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGlwKVxyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIGV2ZW50X25hbWU6IFwiUGFnZVZpZXdcIixcclxuICAgICAgICBhY3Rpb25fc291cmNlOiBcIndlYnNpdGVcIixcclxuICAgICAgICBldmVudF9zb3VyY2VfdXJsOiBcImh0dHBzOi8vdGJkYW1haS5uZXQvXCIsXHJcbiAgICAgICAgdXNlcl9kYXRhOiB7XHJcbiAgICAgICAgICBjbGllbnRfaXBfYWRkcmVzczogaXAsXHJcbiAgICAgICAgICBjbGllbnRfdXNlcl9hZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudFxyXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAucmVwbGFjZSgvKFsxLTldWzEtOV18WzEtOV0pX1xcdysvZywgXCIkMVwiKSxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICAgIC8vIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGJFbWFpbFwiKSA/IGRhdGEudXNlcl9kYXRhLmVtID0gY3R4Lmhhc2gobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YkVtYWlsXCIpKTonJztcclxuICAgICAgLy8gcm91dGVyLnF1ZXJ5LmZiY2xpZCA/IGRhdGEudXNlcl9kYXRhLmZiYyA9IGBmYi4xLiR7RGF0ZS5ub3coKX0uJHtyb3V0ZXIucXVlcnkuZmJjbGlkfWA6Jyc7XHJcbiAgICAgIGN0eC5jb252ZXJzaW9uQXBpKGRhdGEpO1xyXG4gICAgfSkoKTtcclxuICB9LCBbcm91dGVyLnF1ZXJ5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbnRhaW5lciBwLTJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRCRGFtYWkgfCBIb21lPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTWVuanVhbCBhbGF0IGRhbiBiYWhhbiB1bnR1ayBiYW5ndW5hbiBkYW4gcGFnYXJcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJjb3JhbiwgdGVtcGEsIHBpcGEsIGJlaGVsLCB1bnAsIGJlc2ksIGFzZXNvcmlzXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi90YmRhbWFpL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoLTQ4IHctZnVsbCBmcm9tLWJsdWUtNjAwIHRvLXB1cnBsZS01MDAgYmctZ3JhZGllbnQtdG8tYiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtMnhsIGxnOnRleHQtNnhsXCI+U2VsYW1hdCBEYXRhbmcgZGkgVGIgRGFtYWk8L2Rpdj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBtYi0yIGJnLXJlZC01MDAgdGV4dC13aGl0ZSBsZzp0ZXh0LXhsIHRleHQtbGcgdy1hdXRvIGlubGluZS1ibG9jayBwLTEgcHgtMlwiPlxyXG4gICAgICAgIFByb2R1ayBTcGVzaWFsXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3cteC1zY3JvbGwgcGItMTAgaGlkZS1zY3JvbGwtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIGxnOmZsZXgtd2FycCBnYXAtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtNjQgbWF4LXcteHMgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc2hhZG93LW1kIGJnLXdoaXRlIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctdG9tYmFrLXBhdHRlcm4gYmctY29udGFpbiBiZy1jZW50ZXIgYmctbm8tcmVwZWF0XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3Jhbi90b21iYWtcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRvbWJha1xyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC02NCBtYXgtdy14cyBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBzaGFkb3ctbWQgYmctd2hpdGUgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1oZXdhbi1wYXR0ZXJuIGJnLWNvbnRhaW4gYmctY2VudGVyIGJnLW5vLXJlcGVhdFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29yYW4vaGV3YW5cIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEhld2FuXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02NCBoLTY0IG1heC13LXhzIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1tZCBiZy13aGl0ZSBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWxhaW5ueWEtcGF0dGVybiBiZy1jb250YWluIGJnLWNlbnRlciBiZy1uby1yZXBlYXRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvcmFuL2xhaW5ueWFcIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZC14bCBzaXplLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTGFpbm55YVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIDJ4bDpncmlkLWNvbHMtNiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBncmlkLWNvbHMtMiBnYXAtMyBzbTptLWF1dG9cIj5cclxuICAgICAgICA8Q2FyZCBkYXRhPXtkYXRhfT48L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9