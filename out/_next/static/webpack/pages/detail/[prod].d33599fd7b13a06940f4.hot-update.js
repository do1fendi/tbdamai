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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "p-5 md:float-right flex md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Nama Produk: ", data.prod_name), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Category Produk: ", data.prod_category), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, "Hash Tag: #", data.prod_label1), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwiZGF0YSIsInVybCIsInByb2RfbmFtZSIsInByb2RfY2F0ZWdvcnkiLCJwcm9kX2xhYmVsMSIsInByb2RfZGVzYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBOEJBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekI7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVBLElBQUksQ0FBQ0MsR0FBZjtBQUFvQixVQUFNLEVBQUMsS0FBM0I7QUFBaUMsU0FBSyxFQUFDLEtBQXZDO0FBQTZDLFVBQU0sRUFBQyxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWtCRCxJQUFJLENBQUNFLFNBQXZCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFzQkYsSUFBSSxDQUFDRyxhQUEzQixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBZ0JILElBQUksQ0FBQ0ksV0FBckIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCSixJQUFJLENBQUNLLFNBQXJCLENBSkYsQ0FKRixDQURGO0FBY0QsQ0E5QkQ7OztBQWdDZU4sbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1twcm9kXS5kMzM1OTlmZDdiMTNhMDY5NDBmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2FsbHByb2R1Y3RcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc29sZS5sb2coZGF0YSlcclxuICBjb25zdCBwYXRocyA9IGRhdGEubWFwKChwYXRoKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYXJhbXM6IHsgcHJvZDogcGF0aC5wcm9kX25hbWUudG9TdHJpbmcoKSB9LFxyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgcHJvZCA9IGNvbnRleHQucGFyYW1zLnByb2Q7XHJcbiAgY29uc29sZS5sb2cocHJvZClcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtwcm9kfWBcclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEgfSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgcHJvZCA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIC8vIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIC8vIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcclxuICAvLyAgIGNvbnN0IHsgcHJvZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIC8vICAgKGFzeW5jIGZ1bmN0aW9uIGZldGNoQXBpKCkge1xyXG4gIC8vICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAvLyAgICAgICBgaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvZGV0YWlsLyR7cHJvZH1gXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIC8vICAgICBzZXREYXRhKHJlc3BvbnNlWzBdKTtcclxuICAvLyAgIH0pKCk7XHJcbiAgLy8gfSwgW3JvdXRlci5pc1JlYWR5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTUgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBtZDpmbG9hdC1yaWdodCBmbGV4IG1kOmp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2RhdGEudXJsfSBoZWlnaHQ9XCI0MDBcIiB3aWR0aD1cIjQwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIj48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01XCI+XHJcbiAgICAgICAgPGgxPk5hbWEgUHJvZHVrOiB7ZGF0YS5wcm9kX25hbWV9PC9oMT5cclxuICAgICAgICA8aDE+Q2F0ZWdvcnkgUHJvZHVrOiB7ZGF0YS5wcm9kX2NhdGVnb3J5fTwvaDE+XHJcbiAgICAgICAgPGgxPkhhc2ggVGFnOiAje2RhdGEucHJvZF9sYWJlbDF9PC9oMT5cclxuICAgICAgICA8aDE+RGVza3JpcHNpOiB7ZGF0YS5wcm9kX2Rlc2N9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiB7SlNPTi5zdHJpbmdpZnkoZGF0YSl9ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==