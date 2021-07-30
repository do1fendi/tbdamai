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
    className: "container p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 20
    }
  }, __jsx(Image, {
    src: "{`${url}`}",
    height: "400",
    width: "400",
    layout: "responsive",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGV0YWlsL1twcm9kXS5qcyJdLCJuYW1lcyI6WyJwcm9kIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImlzUmVhZHkiLCJpZCIsInF1ZXJ5IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaEFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FHQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEYyxrQkFFVUMsc0RBQVEsQ0FBQyxFQUFELENBRmxCO0FBQUEsTUFFUEMsSUFGTztBQUFBLE1BRURDLE9BRkM7O0FBSWRDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0wsTUFBTSxDQUFDTSxPQUFaLEVBQXFCO0FBRFAsUUFFTkMsRUFGTSxHQUVDUCxNQUFNLENBQUNRLEtBRlIsQ0FFTkQsRUFGTTtBQUdkO0FBQUEsNlFBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDc0JFLEtBQUssbURBQTRDRixFQUE1QyxFQUQzQjs7QUFBQTtBQUNLRyx3QkFETDtBQUFBO0FBQUEsdUJBRWtCQSxRQUFRLENBQUNDLElBQVQsRUFGbEI7O0FBQUE7QUFFQ0Qsd0JBRkQ7QUFHQ04sdUJBQU8sQ0FBQ00sUUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFQOztBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7O0FBQUEsZUFBZ0JFLFFBQWhCO0FBQUE7QUFBQTs7QUFBQSxhQUFnQkEsUUFBaEI7QUFBQTtBQUtELEdBUlEsRUFRTixDQUFDWixNQUFNLENBQUNNLE9BQVIsQ0FSTSxDQUFULENBSmMsQ0FjZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUgsSUFBSixFQUFVLE9BQU87QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ2YsTUFBQyxLQUFEO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxVQUFNLEVBQUMsS0FGVDtBQUdFLFNBQUssRUFBQyxLQUhSO0FBSUUsVUFBTSxFQUFDLFlBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURlLENBQVA7QUFRWDs7R0E3Q1FKLEk7VUFDUUUscUQ7OztBQThDRkYsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWlsL1twcm9kXS5iMzJkZTZkNzU1OWY5MzVlYWQ3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuXHJcbi8vIGNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuXHJcbmZ1bmN0aW9uIHByb2QoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFyb3V0ZXIuaXNSZWFkeSkgcmV0dXJuO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgKGFzeW5jIGZ1bmN0aW9uIGZldGNoQXBpKCkge1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvZGV0YWlsLyR7aWR9YClcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgc2V0RGF0YShyZXNwb25zZVswXSk7XHJcbiAgICB9KSgpXHJcbiAgfSwgW3JvdXRlci5pc1JlYWR5XSk7XHJcblxyXG4gIC8vIGNvbnN0IGZldGNoZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvZGV0YWlsLzg1YClcclxuICAvLyAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKClcclxuICAvLyAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAvLyAgIHJldHVybiByZXN1bHRcclxuICAvLyB9XHJcbiAgLy8gY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIC8vIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gIC8vIGNvbnN0IHsgZHQsIGVycm9yIH0gPSB1c2VTV1IoaWQgPyBgaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvZGV0YWlsLyR7aWR9YCA6IG51bGwsIGZldGNoZXIoYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke2lkfWApKVxyXG4gIC8vIGNvbnN0IHsgZHQsIGVycm9yIH0gPSB1c2VTV1IoYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke2lkfWAsIGZldGNoZXIoYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL2RldGFpbC8ke2lkfWApKVxyXG4gIC8vIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cclxuICAvLyBpZiAoIWR0KSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XHJcbiAgLy8gaWYgKGR0KSByZXR1cm4gPGRpdj5vazwvZGl2PlxyXG5cclxuICAvLyByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01XCI+e3VybH1cclxuICAvLyAgIDxJbWFnZVxyXG4gIC8vICAgICBzcmM9XCJ7YCR7dXJsfWB9XCJcclxuICAvLyAgICAgaGVpZ2h0PVwiNDAwXCJcclxuICAvLyAgICAgd2lkdGg9XCI0MDBcIlxyXG4gIC8vICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAvLyAgID48L0ltYWdlPlxyXG4gIC8vIDwvZGl2PjtcclxuXHJcbiAgaWYgKGRhdGEpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTVcIj5cclxuICAgIDxJbWFnZVxyXG4gICAgICBzcmM9XCJ7YCR7dXJsfWB9XCJcclxuICAgICAgaGVpZ2h0PVwiNDAwXCJcclxuICAgICAgd2lkdGg9XCI0MDBcIlxyXG4gICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgID48L0ltYWdlPlxyXG4gIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==