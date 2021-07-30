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
      var res, result;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.tbdamai.net/frontend/detail/85");

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              result = _context.sent;
              console.log(result);
              return _context.abrupt("return", result);

            case 8:
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
      lineNumber: 31,
      columnNumber: 21
    }
  }, "failed to load");
  if (!dt) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoZXIiLCJmZXRjaCIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJxdWVyeSIsInVzZVNXUiIsImR0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBR0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNkLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGMsa0JBRVVDLHNEQUFRLENBQUMsRUFBRCxDQUZsQjtBQUFBLE1BRVBDLElBRk87QUFBQSxNQUVEQyxPQUZDLGlCQUlkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUMsT0FBTztBQUFBLHNRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0lDLEtBQUssOENBRFQ7O0FBQUE7QUFDUkMsaUJBRFE7QUFBQTtBQUFBLHFCQUVPQSxHQUFHLENBQUNDLElBQUosRUFGUDs7QUFBQTtBQUVSQyxvQkFGUTtBQUdkQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFIYywrQ0FJUEEsTUFKTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFQSixPQUFPO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBZGMsTUFvQk5PLEVBcEJNLEdBb0JDWixNQUFNLENBQUNhLEtBcEJSLENBb0JORCxFQXBCTTs7QUFBQSxnQkFxQlFFLG1EQUFNLENBQUNGLEVBQUUscURBQThDQSxFQUE5QyxJQUFxRCxJQUF4RCxFQUE4RFAsT0FBOUQsQ0FyQmQ7QUFBQSxNQXFCTlUsRUFyQk0sV0FxQk5BLEVBckJNO0FBQUEsTUFxQkZDLEtBckJFLFdBcUJGQSxLQXJCRTs7QUF1QmQsTUFBSUEsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBUDtBQUNYLE1BQUksQ0FBQ0QsRUFBTCxFQUFTLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUCxDQXhCSyxDQTBCZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0dBbENRaEIsSTtVQUNRRSxxRCxFQW9CT2EsMkM7OztBQWVUZixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZXRhaWwvW3Byb2RdLjU5YTM1MDczZjBiN2MzMTQzMzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5cclxuLy8gY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG5cclxuZnVuY3Rpb24gcHJvZCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoIXJvdXRlci5pc1JlYWR5KSByZXR1cm47XHJcbiAgLy8gICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgLy8gICAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcGkoKSB7XHJcbiAgLy8gICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvJHtpZH1gKVxyXG4gIC8vICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gIC8vICAgICBzZXREYXRhKHJlc3BvbnNlWzBdKTtcclxuICAvLyAgIH0pKClcclxuICAvLyB9LCBbcm91dGVyLmlzUmVhZHldKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50YmRhbWFpLm5ldC9mcm9udGVuZC9kZXRhaWwvODVgKVxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB7IGR0LCBlcnJvciB9ID0gdXNlU1dSKGlkID8gYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke2lkfWAgOiBudWxsLCBmZXRjaGVyKVxyXG5cclxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PmZhaWxlZCB0byBsb2FkPC9kaXY+XHJcbiAgaWYgKCFkdCkgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxyXG5cclxuICAvLyByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01XCI+e3VybH1cclxuICAvLyAgIDxJbWFnZVxyXG4gIC8vICAgICBzcmM9XCJ7YCR7dXJsfWB9XCJcclxuICAvLyAgICAgaGVpZ2h0PVwiNDAwXCJcclxuICAvLyAgICAgd2lkdGg9XCI0MDBcIlxyXG4gIC8vICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAvLyAgID48L0ltYWdlPlxyXG4gIC8vIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==