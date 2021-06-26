webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav/Register.js":
/*!************************************!*\
  !*** ./components/Nav/Register.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\components\\Nav\\Register.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Register(props, ref) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {
      showModal: function showModal() {
        setIsOpen(true);
      }
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
    appear: true,
    show: isOpen,
    as: react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    onClose: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "min-h-screen px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"].Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"].Overlay, {
    className: "fixed inset-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "inline-block h-screen align-middle",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, "\u200B"), __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Transition"].Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"].Title, {
    as: "h3",
    className: "text-lg font-medium leading-6 text-gray-900 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, "Login"), __jsx(NavLoginForm, {
    closeModal: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  })))))));
}

_s(Register, "Lm0MJRzNQblZEy/bsUCOlVYMAns=", false, function () {
  return [react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(Register));

var _c, _c2;

$RefreshReg$(_c, "Register");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvUmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJwcm9wcyIsInJlZiIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInNob3dNb2RhbCIsIkZyYWdtZW50IiwiY2xvc2VNb2RhbCIsImZvcndhcmRSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRzFCQyxtRUFBbUIsQ0FBQ0osR0FBRCxFQUFNO0FBQUEsV0FBTztBQUM1QkssZUFENEIsdUJBQ2hCO0FBQ1JGLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0g7QUFIMkIsS0FBUDtBQUFBLEdBQU4sRUFJZixFQUplLENBQW5CO0FBS0EsU0FDSSxtRUFDSSxNQUFDLDREQUFEO0FBQVksVUFBTSxNQUFsQjtBQUFtQixRQUFJLEVBQUVELE1BQXpCO0FBQWlDLE1BQUUsRUFBRUksOENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQ0ksTUFBRSxFQUFDLEtBRFA7QUFFSSxhQUFTLEVBQUMsb0NBRmQ7QUFHSSxXQUFPLEVBQUVDLFVBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFELENBQVksS0FBWjtBQUNJLE1BQUUsRUFBRUQsOENBRFI7QUFFSSxTQUFLLEVBQUMsdUJBRlY7QUFHSSxhQUFTLEVBQUMsV0FIZDtBQUlJLFdBQU8sRUFBQyxhQUpaO0FBS0ksU0FBSyxFQUFDLHNCQUxWO0FBTUksYUFBUyxFQUFDLGFBTmQ7QUFPSSxXQUFPLEVBQUMsV0FQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0ksTUFBQyx3REFBRCxDQUFRLE9BQVI7QUFBZ0IsYUFBUyxFQUFDLGVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQURKLEVBY0k7QUFDSSxhQUFTLEVBQUMsb0NBRGQ7QUFFSSxtQkFBWSxNQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosRUFvQkksTUFBQyw0REFBRCxDQUFZLEtBQVo7QUFDSSxNQUFFLEVBQUVBLDhDQURSO0FBRUksU0FBSyxFQUFDLHVCQUZWO0FBR0ksYUFBUyxFQUFDLG9CQUhkO0FBSUksV0FBTyxFQUFDLHVCQUpaO0FBS0ksU0FBSyxFQUFDLHNCQUxWO0FBTUksYUFBUyxFQUFDLHVCQU5kO0FBT0ksV0FBTyxFQUFDLG9CQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSTtBQUFLLGFBQVMsRUFBQyxzSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRCxDQUFRLEtBQVI7QUFDSSxNQUFFLEVBQUMsSUFEUDtBQUVJLGFBQVMsRUFBQyxrREFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFPSSxNQUFDLFlBQUQ7QUFBYyxjQUFVLEVBQUVDLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQVZKLENBcEJKLENBTEosQ0FESixDQURKLENBREo7QUFxREg7O0dBN0RRVCxRO1VBR0xNLHlEOzs7S0FIS04sUTtBQStETSxrRkFBQVUsd0RBQVUsQ0FBQ1YsUUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc4ZDc4MDY2YmMyNGIwNmZmZTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgZm9yd2FyZFJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgIERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5mdW5jdGlvbiBSZWdpc3Rlcihwcm9wcywgcmVmKSB7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XHJcbiAgICAgICAgc2hvd01vZGFsKCkge1xyXG4gICAgICAgICAgICBzZXRJc09wZW4odHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9KSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uIGFwcGVhciBzaG93PXtpc09wZW59IGFzPXtGcmFnbWVudH0+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9XCJkaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei0xMCBvdmVyZmxvdy15LWF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcHgtNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBUaGlzIGVsZW1lbnQgaXMgdG8gdHJpY2sgdGhlIGJyb3dzZXIgaW50byBjZW50ZXJpbmcgdGhlIG1vZGFsIGNvbnRlbnRzLiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBoLXNjcmVlbiBhbGlnbi1taWRkbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiM4MjAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctZnVsbCBtYXgtdy1tZCBwLTYgbXktOCBvdmVyZmxvdy1oaWRkZW4gdGV4dC1sZWZ0IGFsaWduLW1pZGRsZSB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gYmctd2hpdGUgc2hhZG93LXhsIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZy5UaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMCBtYi0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2cuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxvZ2luRm9ybSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoUmVnaXN0ZXIpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=