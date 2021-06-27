webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: StoreContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreContext", function() { return StoreContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\store\\store.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var StoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

var StoreContextProvider = function StoreContextProvider(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      logged = _useState[0],
      setLogged = _useState[1]; // useEffect(() => {
  //   console.log(localStorage.getItem('token'))
  //   if (localStorage.getItem('token')) {
  //     (async () => {
  //       const rawResponse = await fetch(`${process.env.BASEURL}/verifyToken`, {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem('token')}`
  //         }
  //       });
  //       const res = await rawResponse.json();
  //       // console.log(res)
  //       if (res.status == "Success") {
  //         ctx.setLogged(true)
  //       }
  //     })()
  //   }
  // }, []);


  return __jsx(StoreContext.Provider, {
    value: {
      logged: logged,
      setLogged: setLogged
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, props.children);
};

_s(StoreContextProvider, "65h5yPFHX7llNF/8z9vDbAXASqw=");

_c = StoreContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (StoreContextProvider);

var _c;

$RefreshReg$(_c, "StoreContextProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc3RvcmUuanMiXSwibmFtZXMiOlsiU3RvcmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlN0b3JlQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvZ2dlZCIsInNldExvZ2dlZCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsRUFBbEM7O0FBRVAsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBQyxLQUFELENBREU7QUFBQSxNQUMvQkMsTUFEK0I7QUFBQSxNQUN2QkMsU0FEdUIsaUJBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0UsTUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUU7QUFBRUQsWUFBTSxFQUFOQSxNQUFGO0FBQVVDLGVBQVMsRUFBVEE7QUFBVixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILEtBQUssQ0FBQ0ksUUFEVCxDQURGO0FBS0QsQ0E1QkQ7O0dBQU1MLG9COztLQUFBQSxvQjtBQThCU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZDA5ZGVlZWJhMWYwNTQ4NDliZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuY29uc3QgU3RvcmVDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKVxyXG4gIC8vICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB7XHJcbiAgLy8gICAgIChhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5CQVNFVVJMfS92ZXJpZnlUb2tlbmAsIHtcclxuICAvLyAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgLy8gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgLy8gICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIC8vICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyl9YFxyXG4gIC8vICAgICAgICAgfVxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXHJcbiAgLy8gICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gXCJTdWNjZXNzXCIpIHtcclxuICAvLyAgICAgICAgIGN0eC5zZXRMb2dnZWQodHJ1ZSlcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pKClcclxuICAvLyAgIH1cclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RvcmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxvZ2dlZCwgc2V0TG9nZ2VkIH19ID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9TdG9yZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZUNvbnRleHRQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=