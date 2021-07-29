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

  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_store__WEBPACK_IMPORTED_MODULE_5__["StoreContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var data = {
      data: [{
        event_name: "ViewContent",
        action_source: "website",
        user_data: {
          client_ip_address: "61.220.179.30",
          client_user_agent: navigator.userAgent
        }
      }],
      test_event_code: "TEST33861"
    };

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
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                data: data
              });

            case 2:
              rawResponse = _context.sent;
              _context.next = 5;
              return rawResponse.json();

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
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "TBDamai | Home"), __jsx("link", {
    rel: "icon",
    href: "/tbdamai/favicon.ico",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "mt-5 mb-2 bg-red-500 text-white lg:text-xl text-lg w-auto inline-block ml-5 p-1 px-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "Produk Spesial"), __jsx("div", {
    "class": "flex overflow-x-scroll pb-10 hide-scroll-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    "class": "flex flex-nowrap lg:flex-warp pl-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "inline-block px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-tombak-pattern bg-contain bg-center bg-no-repeat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/coran/tombak",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, "Tombak"))))), __jsx("div", {
    "class": "inline-block px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-hewan-pattern bg-contain bg-center bg-no-repeat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/coran/hewan",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, "Hewan"))))), __jsx("div", {
    "class": "inline-block px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex justify-center items-center bg-lainnya-pattern bg-contain bg-center bg-no-repeat",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/coran/lainnya",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl size-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, "Lainnya"))))))));
}

_s(Home, "tJQtUCnOfpeQOsuC4fjNnBqBIQE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImN0eCIsInVzZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiZXZlbnRfbmFtZSIsImFjdGlvbl9zb3VyY2UiLCJ1c2VyX2RhdGEiLCJjbGllbnRfaXBfYWRkcmVzcyIsImNsaWVudF91c2VyX2FnZW50IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidGVzdF9ldmVudF9jb2RlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwicmF3UmVzcG9uc2UiLCJqc29uIiwicmVzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNQyxHQUFHLEdBQUdDLHdEQUFVLENBQUNDLHlEQUFELENBQXRCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLElBQUksR0FBRztBQUNYQSxVQUFJLEVBQUUsQ0FDSjtBQUNFQyxrQkFBVSxFQUFFLGFBRGQ7QUFFRUMscUJBQWEsRUFBRSxTQUZqQjtBQUdFQyxpQkFBUyxFQUFFO0FBQ1RDLDJCQUFpQixFQUFFLGVBRFY7QUFFVEMsMkJBQWlCLEVBQUVDLFNBQVMsQ0FBQ0M7QUFGcEI7QUFIYixPQURJLENBREs7QUFXWEMscUJBQWUsRUFBRTtBQVhOLEtBQWI7O0FBYUEsMlBBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDMkJDLEtBQUssQ0FDN0Isd0NBRDZCLEVBRTdCO0FBQ0VDLHNCQUFNLEVBQUUsTUFEVjtBQUVFQyx1QkFBTyxFQUFFO0FBQ1BDLHdCQUFNLEVBQUUsa0JBREQ7QUFFUCxrQ0FBZ0I7QUFGVCxpQkFGWDtBQU1FWixvQkFBSSxFQUFFQTtBQU5SLGVBRjZCLENBRGhDOztBQUFBO0FBQ09hLHlCQURQO0FBQUE7QUFBQSxxQkFZbUJBLFdBQVcsQ0FBQ0MsSUFBWixFQVpuQjs7QUFBQTtBQVlPQyxpQkFaUDtBQWFDQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7O0FBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQWVELEdBN0JRLEVBNkJOLEVBN0JNLENBQVQ7QUErQkEsU0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsc0JBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsc0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixFQW9CRTtBQUFLLGFBQU0sOENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBTSxvQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQU0sa05BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLHVFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixDQURGLENBREYsQ0FERixFQVlFO0FBQUssYUFBTSxtQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLGlOQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyx1RUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FERixDQURGLENBWkYsRUF1QkU7QUFBSyxhQUFNLG1CQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQU0sbU5BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQywrRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsQ0FERixDQURGLENBdkJGLENBREYsQ0FwQkYsQ0FERjtBQTRERDs7R0E5RnVCcEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42N2VkN2I5N2RiNjU1NmE1NDA5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFN0b3JlQ29udGV4dCB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7ICBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBldmVudF9uYW1lOiBcIlZpZXdDb250ZW50XCIsXHJcbiAgICAgICAgICBhY3Rpb25fc291cmNlOiBcIndlYnNpdGVcIixcclxuICAgICAgICAgIHVzZXJfZGF0YToge1xyXG4gICAgICAgICAgICBjbGllbnRfaXBfYWRkcmVzczogXCI2MS4yMjAuMTc5LjMwXCIsXHJcbiAgICAgICAgICAgIGNsaWVudF91c2VyX2FnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgICB0ZXN0X2V2ZW50X2NvZGU6IFwiVEVTVDMzODYxXCIsXHJcbiAgICB9O1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2NvbnZlcnNpb25BcGkvXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIH0pKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRCRGFtYWkgfCBIb21lPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi90YmRhbWFpL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJoLTQ4IHctZnVsbCBmcm9tLWJsdWUtNjAwIHRvLXB1cnBsZS01MDAgYmctZ3JhZGllbnQtdG8tYiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtMnhsIGxnOnRleHQtNnhsXCI+U2VsYW1hdCBEYXRhbmcgZGkgVGIgRGFtYWk8L2Rpdj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBtYi0yIGJnLXJlZC01MDAgdGV4dC13aGl0ZSBsZzp0ZXh0LXhsIHRleHQtbGcgdy1hdXRvIGlubGluZS1ibG9jayBtbC01IHAtMSBweC0yXCI+XHJcbiAgICAgICAgUHJvZHVrIFNwZXNpYWxcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggb3ZlcmZsb3cteC1hdXRvIHdoaXRlc3BhY2Utbm93cmFwIHAtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00OCBtZDpoLTU2IGgtNDggZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctdG9tYmFrLXBhdHRlcm4gYmctY29udGFpbiBiZy1jZW50ZXIgYmctbm8tcmVwZWF0IHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3Jhbi90b21iYWtcIj48YT48YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZC14bFwiPlRvbWJhazwvYnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQ4IG1kOmgtNTYgaC00OCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1oZXdhbi1wYXR0ZXJuIGJnLWNvbnRhaW4gYmctY2VudGVyIGJnLW5vLXJlcGVhdCBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29yYW4vaGV3YW5cIj48YT48YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZC14bFwiPkhld2FuPC9idXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNDggbWQ6aC01NiBoLTQ4IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWxhaW5ueWEtcGF0dGVybiBiZy1jb250YWluIGJnLWNlbnRlciBiZy1uby1yZXBlYXQgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvcmFuL2xhaW5ueWFcIj48YT48YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0xIHB4LTIgcm91bmRlZC14bCBzaXplLXNtXCI+TGFpbm55YTwvYnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggb3ZlcmZsb3cteC1zY3JvbGwgcGItMTAgaGlkZS1zY3JvbGwtYmFyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1ub3dyYXAgbGc6ZmxleC13YXJwIHBsLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmxpbmUtYmxvY2sgcHgtM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy02NCBoLTY0IG1heC13LXhzIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1tZCBiZy13aGl0ZSBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLXRvbWJhay1wYXR0ZXJuIGJnLWNvbnRhaW4gYmctY2VudGVyIGJnLW5vLXJlcGVhdFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29yYW4vdG9tYmFrXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0yIHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICBUb21iYWtcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBweC0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTY0IGgtNjQgbWF4LXcteHMgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc2hhZG93LW1kIGJnLXdoaXRlIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctaGV3YW4tcGF0dGVybiBiZy1jb250YWluIGJnLWNlbnRlciBiZy1uby1yZXBlYXRcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvcmFuL2hld2FuXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0yIHJvdW5kZWQteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICBIZXdhblxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lLWJsb2NrIHB4LTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNjQgaC02NCBtYXgtdy14cyBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBzaGFkb3ctbWQgYmctd2hpdGUgaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tc2hhZG93IGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1sYWlubnlhLXBhdHRlcm4gYmctY29udGFpbiBiZy1jZW50ZXIgYmctbm8tcmVwZWF0XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb3Jhbi9sYWlubnlhXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0yIHJvdW5kZWQteGwgc2l6ZS1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIExhaW5ueWFcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==