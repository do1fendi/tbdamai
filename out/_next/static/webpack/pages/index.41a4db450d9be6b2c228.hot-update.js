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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Home() {
  _s();

  // const ctx = useContext(StoreContext);  
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var data = JSON.stringify({
      data: [{
        event_name: "ViewContent",
        action_source: "website",
        user_data: {
          client_ip_address: "61.220.179.30",
          client_user_agent: navigator.userAgent
        }
      }],
      test_event_code: "TEST33861"
    });

    Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var rawResponse, res;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.tbdamai.net/conversionApi/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: data
              });

            case 2:
              rawResponse = _context.sent;
              _context.next = 5;
              return rawResponse;

            case 5:
              res = _context.sent;
              console.log(res);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return __jsx("div", {
    className: "lg:container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "TBDamai | Home"), __jsx("link", {
    rel: "icon",
    href: "/tbdamai/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mt-5 mb-2 bg-red-500 text-white lg:text-xl text-lg w-auto inline-block ml-5 p-1 px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Produk Spesial"), __jsx("div", {
    className: "flex overflow-x-scroll pb-10 hide-scroll-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex flex-nowrap lg:flex-warp pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "inline-block px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-tombak-pattern bg-contain bg-center bg-no-repeat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/coran/tombak",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "Tombak"))))), __jsx("div", {
    className: "inline-block px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-hewan-pattern bg-contain bg-center bg-no-repeat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/coran/hewan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, "Hewan"))))), __jsx("div", {
    className: "inline-block px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-lainnya-pattern bg-contain bg-center bg-no-repeat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/coran/lainnya",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl size-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, "Lainnya"))))))));
}

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUVmZmVjdCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZXZlbnRfbmFtZSIsImFjdGlvbl9zb3VyY2UiLCJ1c2VyX2RhdGEiLCJjbGllbnRfaXBfYWRkcmVzcyIsImNsaWVudF91c2VyX2FnZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidGVzdF9ldmVudF9jb2RlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJhd1Jlc3BvbnNlIiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQzFCRixVQUFJLEVBQUUsQ0FDSjtBQUNFRyxrQkFBVSxFQUFFLGFBRGQ7QUFFRUMscUJBQWEsRUFBRSxTQUZqQjtBQUdFQyxpQkFBUyxFQUFFO0FBQ1RDLDJCQUFpQixFQUFFLGVBRFY7QUFFVEMsMkJBQWlCLEVBQUVDLFNBQVMsQ0FBQ0M7QUFGcEI7QUFIYixPQURJLENBRG9CO0FBVzFCQyxxQkFBZSxFQUFFO0FBWFMsS0FBZixDQUFiOztBQWFBLDJQQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQzJCQyxLQUFLLENBQzdCLHdDQUQ2QixFQUU3QjtBQUNFQyxzQkFBTSxFQUFFLE1BRFY7QUFFRUMsdUJBQU8sRUFBRTtBQUNQLGtDQUFnQjtBQURULGlCQUZYO0FBS0VDLG9CQUFJLEVBQUVkO0FBTFIsZUFGNkIsQ0FEaEM7O0FBQUE7QUFDT2UseUJBRFA7QUFBQTtBQUFBLHFCQVdtQkEsV0FYbkI7O0FBQUE7QUFXT0MsaUJBWFA7QUFZQ0MscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaOztBQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFjRCxHQTVCUSxFQTRCTixFQTVCTSxDQUFUO0FBOEJBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLHNCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQU1FO0FBQUssYUFBUyxFQUFDLHNGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsRUFvQkU7QUFBSyxhQUFTLEVBQUMsOENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa05BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLHVFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixDQURGLENBREYsQ0FERixFQVlFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpTkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxjQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsdUVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQURGLENBREYsQ0FERixDQVpGLEVBdUJFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxtTkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLCtFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FERixDQURGLENBREYsQ0F2QkYsQ0FERixDQXBCRixDQURGO0FBNEREOztHQTdGdUJsQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxYTRkYjQ1MGQ5YmU2YjJjMjI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgU3RvcmVDb250ZXh0IH0gZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIC8vIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KTsgIFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgZGF0YTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGV2ZW50X25hbWU6IFwiVmlld0NvbnRlbnRcIixcclxuICAgICAgICAgIGFjdGlvbl9zb3VyY2U6IFwid2Vic2l0ZVwiLFxyXG4gICAgICAgICAgdXNlcl9kYXRhOiB7XHJcbiAgICAgICAgICAgIGNsaWVudF9pcF9hZGRyZXNzOiBcIjYxLjIyMC4xNzkuMzBcIixcclxuICAgICAgICAgICAgY2xpZW50X3VzZXJfYWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHRlc3RfZXZlbnRfY29kZTogXCJURVNUMzM4NjFcIixcclxuICAgIH0pO1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2NvbnZlcnNpb25BcGkvXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgfSkoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VEJEYW1haSB8IEhvbWU8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3RiZGFtYWkvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImgtNDggdy1mdWxsIGZyb20tYmx1ZS02MDAgdG8tcHVycGxlLTUwMCBiZy1ncmFkaWVudC10by1iIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC0yeGwgbGc6dGV4dC02eGxcIj5TZWxhbWF0IERhdGFuZyBkaSBUYiBEYW1haTwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IG1iLTIgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGxnOnRleHQteGwgdGV4dC1sZyB3LWF1dG8gaW5saW5lLWJsb2NrIG1sLTUgcC0xIHB4LTJcIj5cclxuICAgICAgICBQcm9kdWsgU3Blc2lhbFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy14LWF1dG8gd2hpdGVzcGFjZS1ub3dyYXAgcC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ4IG1kOmgtNTYgaC00OCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy10b21iYWstcGF0dGVybiBiZy1jb250YWluIGJnLWNlbnRlciBiZy1uby1yZXBlYXQgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvcmFuL3RvbWJha1wiPjxhPjxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiByb3VuZGVkLXhsXCI+VG9tYmFrPC9idXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNDggbWQ6aC01NiBoLTQ4IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWhld2FuLXBhdHRlcm4gYmctY29udGFpbiBiZy1jZW50ZXIgYmctbm8tcmVwZWF0IHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3Jhbi9oZXdhblwiPjxhPjxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiByb3VuZGVkLXhsXCI+SGV3YW48L2J1dHRvbj48L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00OCBtZDpoLTU2IGgtNDggZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctbGFpbm55YS1wYXR0ZXJuIGJnLWNvbnRhaW4gYmctY2VudGVyIGJnLW5vLXJlcGVhdCBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29yYW4vbGFpbm55YVwiPjxhPjxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiByb3VuZGVkLXhsIHNpemUtc21cIj5MYWlubnlhPC9idXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3cteC1zY3JvbGwgcGItMTAgaGlkZS1zY3JvbGwtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtbm93cmFwIGxnOmZsZXgtd2FycCBwbC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBweC0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy02NCBoLTY0IG1heC13LXhzIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1tZCBiZy13aGl0ZSBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLXRvbWJhay1wYXR0ZXJuIGJnLWNvbnRhaW4gYmctY2VudGVyIGJnLW5vLXJlcGVhdFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29yYW4vdG9tYmFrXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0yIHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICBUb21iYWtcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcHgtM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNjQgaC02NCBtYXgtdy14cyBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBzaGFkb3ctbWQgYmctd2hpdGUgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1oZXdhbi1wYXR0ZXJuIGJnLWNvbnRhaW4gYmctY2VudGVyIGJnLW5vLXJlcGVhdFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29yYW4vaGV3YW5cIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZC14bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEhld2FuXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHB4LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IGgtNjQgbWF4LXcteHMgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc2hhZG93LW1kIGJnLXdoaXRlIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctbGFpbm55YS1wYXR0ZXJuIGJnLWNvbnRhaW4gYmctY2VudGVyIGJnLW5vLXJlcGVhdFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29yYW4vbGFpbm55YVwiPlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTEgcHgtMiByb3VuZGVkLXhsIHNpemUtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICBMYWlubnlhXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=