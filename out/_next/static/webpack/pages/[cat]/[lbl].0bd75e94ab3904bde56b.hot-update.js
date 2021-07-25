webpackHotUpdate_N_E("pages/[cat]/[lbl]",{

/***/ "./components/Card/Card.js":
/*!*********************************!*\
  !*** ./components/Card/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\components\\Card\\Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Card(_ref) {
  var _this = this;

  var data = _ref.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data.map(function (dt) {
    return __jsx("div", {
      key: dt.id,
      className: "grid grid-cols-3 gap-2 shadow-lg p-2 rounded-lg border-2 border-blue-100 border-opacity-25",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-span-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }, __jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
      src: dt.url,
      height: "400",
      width: "400",
      layout: "responsive",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: "col-span-2 bg-blue-400 text-white rounded-2xl text-center px-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }
    }, dt.prod_name), __jsx("div", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), dt.prod_weight > 0 ? __jsx("div", {
      className: "col-span-3 text-gray-900 rounded-2xl px-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 39
      }
    }, "Berat: ", dt.prod_weight, " ", dt.prod_unit_weight) : '', dt.prod_height > 0 ? __jsx("div", {
      className: "col-span-3 textgray-900 rounded-2xl px-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 39
      }
    }, "Ukuran: ", dt.prod_height, " x ", dt.prod_width, " ", dt.prod_unit_size) : '', dt.prod_available_size != '' ? __jsx("div", {
      className: "col-span-3 textgray-900 rounded-2xl px-2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 49
      }
    }, "Tersedia Ukuran: ", dt.prod_available_size, " ", dt.prod_unit_size) : '');
  }));
}

_c = Card;
/* harmony default export */ __webpack_exports__["default"] = (Card);

var _c;

$RefreshReg$(_c, "Card");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkL0NhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsImRhdGEiLCJtYXAiLCJkdCIsImlkIiwidXJsIiwicHJvZF9uYW1lIiwicHJvZF93ZWlnaHQiLCJwcm9kX3VuaXRfd2VpZ2h0IiwicHJvZF9oZWlnaHQiLCJwcm9kX3dpZHRoIiwicHJvZF91bml0X3NpemUiLCJwcm9kX2F2YWlsYWJsZV9zaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxJQUFULE9BQXdCO0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3BCLFNBQ0ksbUVBQ0tBLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUFDLEVBQUU7QUFBQSxXQUFJO0FBQUssU0FBRyxFQUFFQSxFQUFFLENBQUNDLEVBQWI7QUFBaUIsZUFBUyxFQUFDLDRGQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ1o7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRCLE1BQUMsaURBQUQ7QUFBTyxTQUFHLEVBQUVELEVBQUUsQ0FBQ0UsR0FBZjtBQUFvQixZQUFNLEVBQUMsS0FBM0I7QUFBaUMsV0FBSyxFQUFDLEtBQXZDO0FBQTZDLFlBQU0sRUFBQyxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTVCLENBRFksRUFFWjtBQUFLLGVBQVMsRUFBQyxnRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlGRixFQUFFLENBQUNHLFNBQXBGLENBRlksRUFHWjtBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIWSxFQU1YSCxFQUFFLENBQUNJLFdBQUgsR0FBaUIsQ0FBakIsR0FBcUI7QUFBSyxlQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBbUVKLEVBQUUsQ0FBQ0ksV0FBdEUsT0FBb0ZKLEVBQUUsQ0FBQ0ssZ0JBQXZGLENBQXJCLEdBQXNJLEVBTjNILEVBT1hMLEVBQUUsQ0FBQ00sV0FBSCxHQUFpQixDQUFqQixHQUFxQjtBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFtRU4sRUFBRSxDQUFDTSxXQUF0RSxTQUFzRk4sRUFBRSxDQUFDTyxVQUF6RixPQUFzR1AsRUFBRSxDQUFDUSxjQUF6RyxDQUFyQixHQUFxSixFQVAxSSxFQVFYUixFQUFFLENBQUNTLG1CQUFILElBQTBCLEVBQTFCLEdBQStCO0FBQUssZUFBUyxFQUFDLDBDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQTRFVCxFQUFFLENBQUNTLG1CQUEvRSxPQUFxR1QsRUFBRSxDQUFDUSxjQUF4RyxDQUEvQixHQUE4SixFQVJuSixDQUFKO0FBQUEsR0FBWCxDQURMLENBREo7QUFrQkg7O0tBbkJRWCxJO0FBcUJNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bY2F0XS9bbGJsXS4wYmQ3NWU5NGFiMzkwNGJkZTU2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5mdW5jdGlvbiBDYXJkKHsgZGF0YSB9KSB7XHJcbiAgICByZXR1cm4gKCAgICAgICAgXHJcbiAgICAgICAgPD4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2RhdGEubWFwKGR0ID0+IDxkaXYga2V5PXtkdC5pZH0gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtMiBzaGFkb3ctbGcgcC0yIHJvdW5kZWQtbGcgYm9yZGVyLTIgYm9yZGVyLWJsdWUtMTAwIGJvcmRlci1vcGFjaXR5LTI1XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTNcIj48SW1hZ2Ugc3JjPXtkdC51cmx9IGhlaWdodD1cIjQwMFwiIHdpZHRoPVwiNDAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiPjwvSW1hZ2U+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgYmctYmx1ZS00MDAgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCB0ZXh0LWNlbnRlciBweC0yXCI+e2R0LnByb2RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHRleHQtZ3JheS05MDAgcm91bmRlZC0yeGwgcHgtMlwiPkJlcmF0OiB7ZHQucHJvZF93ZWlnaHR9IHtkdC5wcm9kX3VuaXRfd2VpZ2h0fTwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIlwiPjwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIHtkdC5wcm9kX3dlaWdodCA+IDAgPyA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgdGV4dC1ncmF5LTkwMCByb3VuZGVkLTJ4bCBweC0yXCI+QmVyYXQ6IHtkdC5wcm9kX3dlaWdodH0ge2R0LnByb2RfdW5pdF93ZWlnaHR9PC9kaXY+IDogJyd9XHJcbiAgICAgICAgICAgICAgICB7ZHQucHJvZF9oZWlnaHQgPiAwID8gPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHRleHRncmF5LTkwMCByb3VuZGVkLTJ4bCBweC0yXCI+VWt1cmFuOiB7ZHQucHJvZF9oZWlnaHR9IHgge2R0LnByb2Rfd2lkdGh9IHtkdC5wcm9kX3VuaXRfc2l6ZX08L2Rpdj46ICcnfVxyXG4gICAgICAgICAgICAgICAge2R0LnByb2RfYXZhaWxhYmxlX3NpemUgIT0gJycgPyA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgdGV4dGdyYXktOTAwIHJvdW5kZWQtMnhsIHB4LTJcIj5UZXJzZWRpYSBVa3VyYW46IHtkdC5wcm9kX2F2YWlsYWJsZV9zaXplfSB7ZHQucHJvZF91bml0X3NpemV9PC9kaXY+OiAnJ31cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBiZy1uZXB0dW5lIHRleHQtd2hpdGUgcm91bmRlZC0yeGwgcHgtMlwiPntkdC5wcm9kX2Rlc2N9PC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgPC9kaXY+KX1cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==