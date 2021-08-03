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
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "p-5 md:float-right flex md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 50,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "p-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "Nama Produk: ", data.prod_name), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, "Category Produk: ", data.prod_category), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, "Hash Tag: #", data.prod_label1), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwiZGF0YSIsInVybCIsInByb2RfbmFtZSIsInByb2RfY2F0ZWdvcnkiLCJwcm9kX2xhYmVsMSIsInByb2RfZGVzYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBNkJBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDekI7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVBLElBQUksQ0FBQ0MsR0FBZjtBQUFvQixVQUFNLEVBQUMsS0FBM0I7QUFBaUMsU0FBSyxFQUFDLEtBQXZDO0FBQTZDLFVBQU0sRUFBQyxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWtCRCxJQUFJLENBQUNFLFNBQXZCLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFzQkYsSUFBSSxDQUFDRyxhQUEzQixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBZ0JILElBQUksQ0FBQ0ksV0FBckIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCSixJQUFJLENBQUNLLFNBQXJCLENBSkYsQ0FKRixDQURGO0FBY0QsQ0E5QkQ7OztBQWdDZU4sbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1twcm9kXS42NjUzOWExOTgxZTk1MTFlMjJlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2FsbHByb2R1Y3RcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgocGF0aCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFyYW1zOiB7IHByb2Q6IHBhdGgucHJvZF9uYW1lLnRvU3RyaW5nKCkgfSxcclxuICAgIH07XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGhzLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHByb2QgPSBjb250ZXh0LnBhcmFtcy5wcm9kO1xyXG4gIGNvbnNvbGUubG9nKHByb2QpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvZGV0YWlsLyR7cHJvZH1gXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBkYXRhIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHByb2QgPSAoeyBkYXRhIH0pID0+IHtcclxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAvLyBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAvLyBpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XHJcbiAgLy8gICBjb25zdCB7IHByb2QgfSA9IHJvdXRlci5xdWVyeTtcclxuICAvLyAgIChhc3luYyBmdW5jdGlvbiBmZXRjaEFwaSgpIHtcclxuICAvLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgLy8gICAgICAgYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke3Byb2R9YFxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgICAgc2V0RGF0YShyZXNwb25zZVswXSk7XHJcbiAgLy8gICB9KSgpO1xyXG4gIC8vIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01IGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgbWQ6ZmxvYXQtcmlnaHQgZmxleCBtZDpqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXtkYXRhLnVybH0gaGVpZ2h0PVwiNDAwXCIgd2lkdGg9XCI0MDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCI+PC9pbWc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNVwiPlxyXG4gICAgICAgIDxoMT5OYW1hIFByb2R1azoge2RhdGEucHJvZF9uYW1lfTwvaDE+XHJcbiAgICAgICAgPGgxPkNhdGVnb3J5IFByb2R1azoge2RhdGEucHJvZF9jYXRlZ29yeX08L2gxPlxyXG4gICAgICAgIDxoMT5IYXNoIFRhZzogI3tkYXRhLnByb2RfbGFiZWwxfTwvaDE+XHJcbiAgICAgICAgPGgxPkRlc2tyaXBzaToge2RhdGEucHJvZF9kZXNjfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7Lyoge0pTT04uc3RyaW5naWZ5KGRhdGEpfSAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=