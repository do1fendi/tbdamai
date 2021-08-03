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
var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\detail\\[prod].js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
var prod = function prod(_ref) {
  var data = _ref.data;
  console.log(data); // const router = useRouter();
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "p-5 md:float-right flex md:justify-end",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Nama Produk: ", data.prod_name), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Category Produk: ", data.prod_category), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Hash Tag: #", data.prod_label1), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Deskripsi: ", data.prod_desc)));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJwcm9kX25hbWUiLCJwcm9kX2NhdGVnb3J5IiwicHJvZF9sYWJlbDEiLCJwcm9kX2Rlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQTJCQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUR5QixDQUV6QjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVBLElBQUksQ0FBQ0csR0FBZjtBQUFvQixVQUFNLEVBQUMsS0FBM0I7QUFBaUMsU0FBSyxFQUFDLEtBQXZDO0FBQTZDLFVBQU0sRUFBQyxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWtCSCxJQUFJLENBQUNJLFNBQXZCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFzQkosSUFBSSxDQUFDSyxhQUEzQixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBZ0JMLElBQUksQ0FBQ00sV0FBckIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCTixJQUFJLENBQUNPLFNBQXJCLENBSkYsQ0FKRixDQURGO0FBY0QsQ0EvQkQ7OztBQWlDZVIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1twcm9kXS5jZDNjMDA0OTg5MDdhMzBjZDlmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2FsbHByb2R1Y3RcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7ICBcclxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChwYXRoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgcHJvZDogcGF0aC5wcm9kX25hbWUudG9TdHJpbmcoKSB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgcHJvZCA9IGNvbnRleHQucGFyYW1zLnByb2Q7IFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke3Byb2R9YFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcHJvZCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgLy8gY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgLy8gaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG4gIC8vICAgY29uc3QgeyBwcm9kIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgLy8gICAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcGkoKSB7XHJcbiAgLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gIC8vICAgICAgIGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtwcm9kfWBcclxuICAvLyAgICAgKTtcclxuICAvLyAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgLy8gICAgIHNldERhdGEocmVzcG9uc2VbMF0pO1xyXG4gIC8vICAgfSkoKTtcclxuICAvLyB9LCBbcm91dGVyLmlzUmVhZHldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNSBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IG1kOmZsb2F0LXJpZ2h0IGZsZXggbWQ6anVzdGlmeS1lbmRcIj5cclxuICAgICAgICA8aW1nIHNyYz17ZGF0YS51cmx9IGhlaWdodD1cIjQwMFwiIHdpZHRoPVwiNDAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiPjwvaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cclxuICAgICAgICA8aDE+TmFtYSBQcm9kdWs6IHtkYXRhLnByb2RfbmFtZX08L2gxPlxyXG4gICAgICAgIDxoMT5DYXRlZ29yeSBQcm9kdWs6IHtkYXRhLnByb2RfY2F0ZWdvcnl9PC9oMT5cclxuICAgICAgICA8aDE+SGFzaCBUYWc6ICN7ZGF0YS5wcm9kX2xhYmVsMX08L2gxPlxyXG4gICAgICAgIDxoMT5EZXNrcmlwc2k6IHtkYXRhLnByb2RfZGVzY308L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIHtKU09OLnN0cmluZ2lmeShkYXRhKX0gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9