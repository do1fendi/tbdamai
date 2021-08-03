webpackHotUpdate_N_E("pages/detail/[prod]",{

/***/ "./pages/detail/[prod].js":
/*!********************************!*\
  !*** ./pages/detail/[prod].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\detail\\[prod].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
function prod(_ref) {
  var data = _ref.data;
  // const router = useRouter();
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   // if (!router.isReady) return;
  //   const { prod } = router.query;
  //   (async function fetchApi() {
  //     let response = await fetch(
  //       `https://api.tbdamai.net/frontend/detail/${prod}`
  //     );
  //     response = await response.json();
  //     setData(response[0]);
  //   })();
  // }, [router.isReady]);
  return __jsx("div", {
    className: "container p-5 grid grid-cols-1 md:grid-cols-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "p-5 md:float-right flex md:justify-end",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: data.url,
    height: "400",
    width: "400",
    layout: "responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Nama Produk: ", data.prod_name), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Category Produk: ", data.prod_category), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Hash Tag: #", data.prod_label1), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Deskripsi: ", data.prod_desc)));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (prod);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwiZGF0YSIsInVybCIsInByb2RfbmFtZSIsInByb2RfY2F0ZWdvcnkiLCJwcm9kX2xhYmVsMSIsInByb2RfZGVzYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQTRCQSxTQUFTQSxJQUFULE9BQXdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3RCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQywrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsd0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFQSxJQUFJLENBQUNDLEdBQWY7QUFBb0IsVUFBTSxFQUFDLEtBQTNCO0FBQWlDLFNBQUssRUFBQyxLQUF2QztBQUE2QyxVQUFNLEVBQUMsWUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFrQkQsSUFBSSxDQUFDRSxTQUF2QixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBc0JGLElBQUksQ0FBQ0csYUFBM0IsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCSCxJQUFJLENBQUNJLFdBQXJCLENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFnQkosSUFBSSxDQUFDSyxTQUFyQixDQUpGLENBSkYsQ0FERjtBQWNEOzs7QUFFY04sbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1twcm9kXS5kODBhNWRiNWViNzk3OWY3NTY1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2FsbHByb2R1Y3RcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgocGF0aCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7IHByb2Q6IHBhdGgucHJvZF9uYW1lLnRvU3RyaW5nKCkgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHByb2QgPSBjb250ZXh0LnBhcmFtcy5wcm9kO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke3Byb2R9YFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgZGF0YSB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwcm9kKHsgZGF0YSB9KSB7XHJcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgLy8gaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG4gIC8vICAgY29uc3QgeyBwcm9kIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgLy8gICAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcGkoKSB7XHJcbiAgLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gIC8vICAgICAgIGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtwcm9kfWBcclxuICAvLyAgICAgKTtcclxuICAvLyAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICAgIHNldERhdGEocmVzcG9uc2VbMF0pO1xyXG4gIC8vICAgfSkoKTtcclxuICAvLyB9LCBbcm91dGVyLmlzUmVhZHldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNSBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IG1kOmZsb2F0LXJpZ2h0IGZsZXggbWQ6anVzdGlmeS1lbmRcIj5cclxuICAgICAgICA8aW1nIHNyYz17ZGF0YS51cmx9IGhlaWdodD1cIjQwMFwiIHdpZHRoPVwiNDAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiPjwvaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cclxuICAgICAgICA8aDE+TmFtYSBQcm9kdWs6IHtkYXRhLnByb2RfbmFtZX08L2gxPlxyXG4gICAgICAgIDxoMT5DYXRlZ29yeSBQcm9kdWs6IHtkYXRhLnByb2RfY2F0ZWdvcnl9PC9oMT5cclxuICAgICAgICA8aDE+SGFzaCBUYWc6ICN7ZGF0YS5wcm9kX2xhYmVsMX08L2gxPlxyXG4gICAgICAgIDxoMT5EZXNrcmlwc2k6IHtkYXRhLnByb2RfZGVzY308L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShkYXRhKX0gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9