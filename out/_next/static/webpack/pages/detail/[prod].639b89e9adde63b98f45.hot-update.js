webpackHotUpdate_N_E("pages/detail/[prod]",{

/***/ "./pages/detail/[prod].js":
/*!********************************!*\
  !*** ./pages/detail/[prod].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");



var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\detail\\[prod].js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // import Image from 'next/image'

 // const fetcher = (url) => fetch(url).then((res) => res.json())

function prod() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!router.isReady) return;
    var id = router.query.id;
    (function () {
      var _fetchApi = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.tbdamai.net/frontend/detail/".concat(id));

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                response = _context.sent;
                setData(response[0]);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchApi() {
        return _fetchApi.apply(this, arguments);
      }

      return fetchApi;
    })()();
  }, [router.isReady]); // const fetcher = async () => {
  //   const res = await fetch(`https://api.tbdamai.net/frontend/detail/85`)
  //   const result = await res.json()
  //   console.log(result)
  //   return result
  // }
  // const fetcher = (url) => fetch(url).then((res) => res.json())
  // const { id } = router.query
  // const { dt, error } = useSWR(id ? `https://api.tbdamai.net/frontend/detail/${id}` : null, fetcher(`https://api.tbdamai.net/frontend/detail/${id}`))
  // const { dt, error } = useSWR(`https://api.tbdamai.net/frontend/detail/${id}`, fetcher(`https://api.tbdamai.net/frontend/detail/${id}`))
  // if (error) return <div>failed to load</div>
  // if (!dt) return <div>loading...</div>
  // if (dt) return <div>ok</div>
  // return <div className="container p-5">{url}
  //   <Image
  //     src="{`${url}`}"
  //     height="400"
  //     width="400"
  //     layout="responsive"
  //   ></Image>
  // </div>;

  if (data) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, "hwllo");
}

_s(prod, "LRVCm0MyF6mUS6v6gclOrtiG+1c=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImlzUmVhZHkiLCJpZCIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaEFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FHQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEYyxrQkFFVUMsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFUEMsSUFGTztBQUFBLE1BRURDLE9BRkM7O0FBSWRDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0wsTUFBTSxDQUFDTSxPQUFaLEVBQXFCO0FBRFAsUUFFTkMsRUFGTSxHQUVDUCxNQUFNLENBQUNRLEtBRlIsQ0FFTkQsRUFGTTtBQUdkO0FBQUEsNlFBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDc0JFLEtBQUssbURBQTRDRixFQUE1QyxFQUQzQjs7QUFBQTtBQUNLRyx3QkFETDtBQUFBO0FBQUEsdUJBRWtCQSxRQUFRLENBQUNDLElBQVQsRUFGbEI7O0FBQUE7QUFFQ0Qsd0JBRkQ7QUFHQ04sdUJBQU8sQ0FBQ00sUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFQOztBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7O0FBQUEsZUFBZ0JFLFFBQWhCO0FBQUE7QUFBQTs7QUFBQSxhQUFnQkEsUUFBaEI7QUFBQTtBQUtELEdBUlEsRUFRTixDQUFDWixNQUFNLENBQUNNLE9BQVIsQ0FSTSxDQUFULENBSmMsQ0FjZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBR0gsSUFBSCxFQUFTLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ1Y7O0dBdENRSixJO1VBQ1FFLHFEOzs7QUF1Q0ZGLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9bcHJvZF0uNjM5Yjg5ZTlhZGRlNjNiOThmNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG4vLyBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcblxyXG5mdW5jdGlvbiBwcm9kKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIChhc3luYyBmdW5jdGlvbiBmZXRjaEFwaSgpIHtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke2lkfWApXHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIHNldERhdGEocmVzcG9uc2VbMF0pO1xyXG4gICAgfSkoKVxyXG4gIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xyXG5cclxuICAvLyBjb25zdCBmZXRjaGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC84NWApXHJcbiAgLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgLy8gICByZXR1cm4gcmVzdWx0XHJcbiAgLy8gfVxyXG4gIC8vIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAvLyBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICAvLyBjb25zdCB7IGR0LCBlcnJvciB9ID0gdXNlU1dSKGlkID8gYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke2lkfWAgOiBudWxsLCBmZXRjaGVyKGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtpZH1gKSlcclxuICAvLyBjb25zdCB7IGR0LCBlcnJvciB9ID0gdXNlU1dSKGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtpZH1gLCBmZXRjaGVyKGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtpZH1gKSlcclxuICAvLyBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+XHJcbiAgLy8gaWYgKCFkdCkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxyXG4gIC8vIGlmIChkdCkgcmV0dXJuIDxkaXY+b2s8L2Rpdj5cclxuXHJcbiAgLy8gcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNVwiPnt1cmx9XHJcbiAgLy8gICA8SW1hZ2VcclxuICAvLyAgICAgc3JjPVwie2Ake3VybH1gfVwiXHJcbiAgLy8gICAgIGhlaWdodD1cIjQwMFwiXHJcbiAgLy8gICAgIHdpZHRoPVwiNDAwXCJcclxuICAvLyAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgLy8gICA+PC9JbWFnZT5cclxuICAvLyA8L2Rpdj47XHJcblxyXG4gIGlmKGRhdGEpIHJldHVybiA8ZGl2Pmh3bGxvPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=