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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\detail\\[prod].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Image from 'next/image'

 // const fetcher = (url) => fetch(url).then((res) => res.json())

function prod() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      data = _useState[0],
      setData = _useState[1]; // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { id } = router.query;
  //   (async function fetchApi() {
  //     let response = await fetch(`https://api.tbdamai.net/frontend/detail/${id}`)
  //     response = await response.json()
  //     setData(response[0]);
  //   })()
  // }, [router.isReady]);
  // const fetcher = async () => {
  //   const res = await fetch(`https://api.tbdamai.net/frontend/detail/85`)
  //   const result = await res.json()
  //   console.log(result)
  //   return result
  // }


  var fetcher = function fetcher(url) {
    return fetch(url).then(function (res) {
      return res.json();
    });
  };

  var id = router.query.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])(!id ? "https://api.tbdamai.net/frontend/detail/".concat(id) : null, fetcher("https://api.tbdamai.net/frontend/detail/".concat(id))),
      dt = _useSWR.dt,
      error = _useSWR.error;

  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "failed to load");
  if (!dt) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, "loading...");
  if (dt) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 18
    }
  }, "ok"); // return <div className="container p-5">{url}
  //   <Image
  //     src="{`${url}`}"
  //     height="400"
  //     width="400"
  //     layout="responsive"
  //   ></Image>
  // </div>;
}

_s(prod, "m41gLItt5pKrM6DupVr77lnqr08=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_2__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaWQiLCJxdWVyeSIsInVzZVNXUiIsImR0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBR0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNkLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGMsa0JBRVVDLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRVBDLElBRk87QUFBQSxNQUVEQyxPQUZDLGlCQUlkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFdBQVNDLEtBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQVdFLElBQVgsQ0FBZ0IsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FBaEIsQ0FBVDtBQUFBLEdBQWhCOztBQXBCYyxNQXFCTkMsRUFyQk0sR0FxQkNYLE1BQU0sQ0FBQ1ksS0FyQlIsQ0FxQk5ELEVBckJNOztBQUFBLGdCQXNCUUUsbURBQU0sQ0FBQyxDQUFDRixFQUFELHFEQUFpREEsRUFBakQsSUFBd0QsSUFBekQsRUFBK0ROLE9BQU8sbURBQTRDTSxFQUE1QyxFQUF0RSxDQXRCZDtBQUFBLE1Bc0JORyxFQXRCTSxXQXNCTkEsRUF0Qk07QUFBQSxNQXNCRkMsS0F0QkUsV0FzQkZBLEtBdEJFOztBQXdCZCxNQUFJQSxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFQO0FBQ1gsTUFBSSxDQUFDRCxFQUFMLEVBQVMsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ1QsTUFBSUEsRUFBSixFQUFRLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQLENBMUJNLENBNEJkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7R0FwQ1FmLEk7VUFDUUUscUQsRUFxQk9ZLDJDOzs7QUFnQlRkLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9bcHJvZF0uZmFiMDBhOWFhNTBiNzBiMmM0MTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG4vLyBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcblxyXG5mdW5jdGlvbiBwcm9kKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcclxuICAvLyAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAvLyAgIChhc3luYyBmdW5jdGlvbiBmZXRjaEFwaSgpIHtcclxuICAvLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke2lkfWApXHJcbiAgLy8gICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgLy8gICAgIHNldERhdGEocmVzcG9uc2VbMF0pO1xyXG4gIC8vICAgfSkoKVxyXG4gIC8vIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xyXG5cclxuICAvLyBjb25zdCBmZXRjaGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC84NWApXHJcbiAgLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgLy8gICByZXR1cm4gcmVzdWx0XHJcbiAgLy8gfVxyXG4gIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7IGR0LCBlcnJvciB9ID0gdXNlU1dSKCFpZCA/IGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtpZH1gIDogbnVsbCwgZmV0Y2hlcihgaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvZGV0YWlsLyR7aWR9YCkpXHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cclxuICBpZiAoIWR0KSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XHJcbiAgaWYgKGR0KSByZXR1cm4gPGRpdj5vazwvZGl2PlxyXG5cclxuICAvLyByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01XCI+e3VybH1cclxuICAvLyAgIDxJbWFnZVxyXG4gIC8vICAgICBzcmM9XCJ7YCR7dXJsfWB9XCJcclxuICAvLyAgICAgaGVpZ2h0PVwiNDAwXCJcclxuICAvLyAgICAgd2lkdGg9XCI0MDBcIlxyXG4gIC8vICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAvLyAgID48L0ltYWdlPlxyXG4gIC8vIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==