webpackHotUpdate_N_E("pages/detail/[prod]",{

/***/ "./pages/detail/[prod].js":
/*!********************************!*\
  !*** ./pages/detail/[prod].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\detail\\[prod].js",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function prod() {
  _s2();

  var _s = $RefreshSig$();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var useQuery = function useQuery() {
    _s();

    var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
    var hasQueryParams = /\[.+\]/.test(router.route) || /\?./.test(router.asPath);
    var ready = !hasQueryParams || Object.keys(router.query).length > 0;
    if (!ready) return null;
    return router.query;
  };

  _s(useQuery, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
    return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
  });

  var query = useQuery();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!query) {
      return;
    }

    console.log('my query exists!!', query); // const { prod } = router.query;
    // (async function fetchApi() {
    //   let response = await fetch(`https://api.tbdamai.net/frontend/detail/${prod}`)
    //   response = await response.json()
    //   setData(response);
    //   console.log(response)
    // })()
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }
  }, prod, " ", JSON.stringify(data));
}

_s2(prod, "RSX+8xmV1bHFohLqVNlU48foGrE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], useQuery];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZVF1ZXJ5IiwiaGFzUXVlcnlQYXJhbXMiLCJ0ZXN0Iiwicm91dGUiLCJhc1BhdGgiLCJyZWFkeSIsIk9iamVjdCIsImtleXMiLCJxdWVyeSIsImxlbmd0aCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUNkLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGMsa0JBRVVDLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRVBDLElBRk87QUFBQSxNQUVEQyxPQUZDOztBQUlkLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDckIsUUFBTUwsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1LLGNBQWMsR0FDbEIsU0FBU0MsSUFBVCxDQUFjUCxNQUFNLENBQUNRLEtBQXJCLEtBQStCLE1BQU1ELElBQU4sQ0FBV1AsTUFBTSxDQUFDUyxNQUFsQixDQURqQztBQUVBLFFBQU1DLEtBQUssR0FBRyxDQUFDSixjQUFELElBQW1CSyxNQUFNLENBQUNDLElBQVAsQ0FBWVosTUFBTSxDQUFDYSxLQUFuQixFQUEwQkMsTUFBMUIsR0FBbUMsQ0FBcEU7QUFDQSxRQUFJLENBQUNKLEtBQUwsRUFBWSxPQUFPLElBQVA7QUFDWixXQUFPVixNQUFNLENBQUNhLEtBQWQ7QUFDRCxHQVBEOztBQUpjLEtBSVJSLFFBSlE7QUFBQSxZQUtHSixxREFMSDtBQUFBOztBQWFkLE1BQU1ZLEtBQUssR0FBR1IsUUFBUSxFQUF0QjtBQUVBVSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNGLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7O0FBQ0RHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDSixLQUFqQyxFQUpjLENBS2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRCxHQWJRLEVBYU4sRUFiTSxDQUFUO0FBZUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1kLElBQU4sT0FBYW1CLElBQUksQ0FBQ0MsU0FBTCxDQUFlaEIsSUFBZixDQUFiLENBQVA7QUFDRDs7SUEvQlFKLEk7VUFDUUUscUQsRUFZREksUTs7O0FBb0JETixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvW3Byb2RdLjhkOGI0OTAxZmZmOWMwYmQ0MzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gcHJvZCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHVzZVF1ZXJ5ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBoYXNRdWVyeVBhcmFtcyA9XHJcbiAgICAgIC9cXFsuK1xcXS8udGVzdChyb3V0ZXIucm91dGUpIHx8IC9cXD8uLy50ZXN0KHJvdXRlci5hc1BhdGgpO1xyXG4gICAgY29uc3QgcmVhZHkgPSAhaGFzUXVlcnlQYXJhbXMgfHwgT2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGggPiAwO1xyXG4gICAgaWYgKCFyZWFkeSkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gcm91dGVyLnF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcXVlcnkgPSB1c2VRdWVyeSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4geyAgICBcclxuICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ215IHF1ZXJ5IGV4aXN0cyEhJywgcXVlcnkpO1xyXG4gICAgLy8gY29uc3QgeyBwcm9kIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAvLyAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcGkoKSB7XHJcbiAgICAvLyAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtwcm9kfWApXHJcbiAgICAvLyAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAvLyAgIHNldERhdGEocmVzcG9uc2UpO1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgIC8vIH0pKClcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gPGRpdj57cHJvZH0ge0pTT04uc3RyaW5naWZ5KGRhdGEpfTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==