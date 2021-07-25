webpackHotUpdate_N_E("pages/[cat]/[lbl]",{

/***/ "./pages/[cat]/[lbl].js":
/*!******************************!*\
  !*** ./pages/[cat]/[lbl].js ***!
  \******************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Card/Card */ "./components/Card/Card.js");



var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\[cat]\\[lbl].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function cat() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var _router$query = router.query,
      cat = _router$query.cat,
      lbl = _router$query.lbl;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    (function () {
      var _fetchApi = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.tbdamai.net/frontend/product/".concat(cat, "/").concat(lbl));

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                response = _context.sent;
                setData(response);

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
  });
  return __jsx("div", {
    className: "container mx-auto p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "uppercase text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, lbl), __jsx("div", {
    className: "grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })));
}

_s(cat, "CE4bb1OrJK230QipCdW5J54W3ks=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (cat);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2NhdF0vW2xibF0uanMiXSwibmFtZXMiOlsiY2F0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInF1ZXJ5IiwibGJsIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJmZXRjaEFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQ2IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEYSxrQkFFV0Msc0RBQVEsQ0FBQyxFQUFELENBRm5CO0FBQUEsTUFFTkMsSUFGTTtBQUFBLE1BRUFDLE9BRkE7O0FBQUEsc0JBR1FKLE1BQU0sQ0FBQ0ssS0FIZjtBQUFBLE1BR0xOLEdBSEssaUJBR0xBLEdBSEs7QUFBQSxNQUdBTyxHQUhBLGlCQUdBQSxHQUhBO0FBS2JDLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQUEsNlFBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDc0JDLEtBQUssb0RBQ29CVCxHQURwQixjQUMyQk8sR0FEM0IsRUFEM0I7O0FBQUE7QUFDS0csd0JBREw7QUFBQTtBQUFBLHVCQUlrQkEsUUFBUSxDQUFDQyxJQUFULEVBSmxCOztBQUFBO0FBSUNELHdCQUpEO0FBS0NMLHVCQUFPLENBQUNLLFFBQUQsQ0FBUDs7QUFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFEOztBQUFBLGVBQWdCRSxRQUFoQjtBQUFBO0FBQUE7O0FBQUEsYUFBZ0JBLFFBQWhCO0FBQUE7QUFPRCxHQVJRLENBQVQ7QUFTQSxTQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFLLGFBQVMsRUFBQywwR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLEdBREgsQ0FKRixFQU9FO0FBQUssYUFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxFQUFFSCxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBREY7QUFhRDs7R0EzQlFKLEc7VUFDUUUscUQ7OztBQTRCRkYsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2NhdF0vW2xibF0uNzU2MzFjZTY5YTYxZWVjNDU5OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhlYWQgfSBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCI7XHJcblxyXG5mdW5jdGlvbiBjYXQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IHsgY2F0LCBsYmwgfSA9IHJvdXRlci5xdWVyeTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jIGZ1bmN0aW9uIGZldGNoQXBpKCkge1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvcHJvZHVjdC8ke2NhdH0vJHtsYmx9YFxyXG4gICAgICApO1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0RGF0YShyZXNwb25zZSk7XHJcbiAgICB9KSgpO1xyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtNVwiPlxyXG4gICAgICB7LyogPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNvcmFuPC90aXRsZT5cclxuICAgICAgPC9IZWFkPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtbGcgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCB3LTMyIHRleHQtY2VudGVyIG10LTUgbWItNVwiPlxyXG4gICAgICAgIHtsYmx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgMnhsOmdyaWQtY29scy02IHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC0zIHNtOm0tYXV0b1wiPlxyXG4gICAgICAgIDxDYXJkIGRhdGE9e2RhdGF9PjwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=