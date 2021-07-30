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
      setData = _useState[1]; // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { id } = router.query;
  //   (async function fetchApi() {
  //     let response = await fetch(`https://api.tbdamai.net/frontend/detail/${id}`)
  //     response = await response.json()
  //     setData(response[0]);
  //   })()
  // }, [router.isReady]);


  var fetcher = /*#__PURE__*/function () {
    var _ref = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.tbdamai.net/frontend/detail/85");

            case 2:
              res = _context.sent;
              console.log(res);
              return _context.abrupt("return", res);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetcher() {
      return _ref.apply(this, arguments);
    };
  }();

  var id = router.query.id;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_4__["default"])(id ? "https://api.tbdamai.net/frontend/detail/".concat(id) : null, fetcher),
      dt = _useSWR.dt,
      error = _useSWR.error;

  if (error) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "failed to load");
  if (!dt) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, "loading..."); // return <div className="container p-5">{url}
  //   <Image
  //     src="{`${url}`}"
  //     height="400"
  //     width="400"
  //     layout="responsive"
  //   ></Image>
  // </div>;
}

_s(prod, "m41gLItt5pKrM6DupVr77lnqr08=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], swr__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoZXIiLCJmZXRjaCIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInF1ZXJ5IiwidXNlU1dSIiwiZHQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FHQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEYyxrQkFFVUMsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFUEMsSUFGTztBQUFBLE1BRURDLE9BRkMsaUJBSWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxPQUFPO0FBQUEsc1FBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSUMsS0FBSyw4Q0FEVDs7QUFBQTtBQUNSQyxpQkFEUTtBQUVkQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFGYywrQ0FHUEEsR0FITzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQRixPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBZGMsTUFtQk5LLEVBbkJNLEdBbUJDVixNQUFNLENBQUNXLEtBbkJSLENBbUJORCxFQW5CTTs7QUFBQSxnQkFvQlFFLG1EQUFNLENBQUNGLEVBQUUscURBQThDQSxFQUE5QyxJQUFxRCxJQUF4RCxFQUE4REwsT0FBOUQsQ0FwQmQ7QUFBQSxNQW9CTlEsRUFwQk0sV0FvQk5BLEVBcEJNO0FBQUEsTUFvQkZDLEtBcEJFLFdBb0JGQSxLQXBCRTs7QUFzQmQsTUFBSUEsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBUDtBQUNYLE1BQUksQ0FBQ0QsRUFBTCxFQUFTLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUCxDQXZCSyxDQXlCZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0dBakNRZCxJO1VBQ1FFLHFELEVBbUJPVywyQzs7O0FBZVRiLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RldGFpbC9bcHJvZF0uZTEzMTFhMzFjMzQ3MmY5ZjQwMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG4vLyBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcblxyXG5mdW5jdGlvbiBwcm9kKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmICghcm91dGVyLmlzUmVhZHkpIHJldHVybjtcclxuICAvLyAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAvLyAgIChhc3luYyBmdW5jdGlvbiBmZXRjaEFwaSgpIHtcclxuICAvLyAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke2lkfWApXHJcbiAgLy8gICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgLy8gICAgIHNldERhdGEocmVzcG9uc2VbMF0pO1xyXG4gIC8vICAgfSkoKVxyXG4gIC8vIH0sIFtyb3V0ZXIuaXNSZWFkeV0pO1xyXG5cclxuICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC84NWApXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICByZXR1cm4gcmVzXHJcbiAgfVxyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHsgZHQsIGVycm9yIH0gPSB1c2VTV1IoaWQgPyBgaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvZGV0YWlsLyR7aWR9YCA6IG51bGwsIGZldGNoZXIpXHJcblxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cclxuICBpZiAoIWR0KSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gIC8vIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTVcIj57dXJsfVxyXG4gIC8vICAgPEltYWdlXHJcbiAgLy8gICAgIHNyYz1cIntgJHt1cmx9YH1cIlxyXG4gIC8vICAgICBoZWlnaHQ9XCI0MDBcIlxyXG4gIC8vICAgICB3aWR0aD1cIjQwMFwiXHJcbiAgLy8gICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gIC8vICAgPjwvSW1hZ2U+XHJcbiAgLy8gPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9kO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9