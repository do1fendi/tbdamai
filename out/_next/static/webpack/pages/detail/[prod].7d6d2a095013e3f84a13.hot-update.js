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
    src: data[0].url,
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
  }, "Nama Produk: ", data[0].prod_name), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Category Produk: ", data[0].prod_category), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Hash Tag: #", data[0].prod_label1), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Deskripsi: ", data[0].prod_desc)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJwcm9kX25hbWUiLCJwcm9kX2NhdGVnb3J5IiwicHJvZF9sYWJlbDEiLCJwcm9kX2Rlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQTJCQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3pCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQUR5QixDQUV6QjtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUcsR0FBbEI7QUFBdUIsVUFBTSxFQUFDLEtBQTlCO0FBQW9DLFNBQUssRUFBQyxLQUExQztBQUFnRCxVQUFNLEVBQUMsWUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFrQkgsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRSSxTQUExQixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBc0JKLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUssYUFBOUIsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCTCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFNLFdBQXhCLENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFnQk4sSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRTyxTQUF4QixDQUpGLENBSkYsQ0FERjtBQWNELENBL0JEOzs7QUFpQ2VSLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9bcHJvZF0uN2Q2ZDJhMDk1MDEzZTNmODRhMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9hbGxwcm9kdWN0XCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpOyAgXHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgocGF0aCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7IHByb2Q6IHBhdGgucHJvZF9uYW1lLnRvU3RyaW5nKCkgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHByb2QgPSBjb250ZXh0LnBhcmFtcy5wcm9kOyBcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtwcm9kfWBcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHByb2QgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIC8vIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcclxuICAvLyAgIGNvbnN0IHsgcHJvZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIC8vICAgKGFzeW5jIGZ1bmN0aW9uIGZldGNoQXBpKCkge1xyXG4gIC8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAvLyAgICAgICBgaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvZGV0YWlsLyR7cHJvZH1gXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgICBzZXREYXRhKHJlc3BvbnNlWzBdKTtcclxuICAvLyAgIH0pKCk7XHJcbiAgLy8gfSwgW3JvdXRlci5pc1JlYWR5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTUgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBtZDpmbG9hdC1yaWdodCBmbGV4IG1kOmp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2RhdGFbMF0udXJsfSBoZWlnaHQ9XCI0MDBcIiB3aWR0aD1cIjQwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIj48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XHJcbiAgICAgICAgPGgxPk5hbWEgUHJvZHVrOiB7ZGF0YVswXS5wcm9kX25hbWV9PC9oMT5cclxuICAgICAgICA8aDE+Q2F0ZWdvcnkgUHJvZHVrOiB7ZGF0YVswXS5wcm9kX2NhdGVnb3J5fTwvaDE+XHJcbiAgICAgICAgPGgxPkhhc2ggVGFnOiAje2RhdGFbMF0ucHJvZF9sYWJlbDF9PC9oMT5cclxuICAgICAgICA8aDE+RGVza3JpcHNpOiB7ZGF0YVswXS5wcm9kX2Rlc2N9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkoZGF0YSl9ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==