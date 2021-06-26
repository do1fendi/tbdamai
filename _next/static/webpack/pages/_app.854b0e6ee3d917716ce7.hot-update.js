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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Transition, {
    appear: true,
    show: isOpen,
    as: Fragment,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(Dialog, {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    onClose: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "min-h-screen px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(Transition.Child, {
    as: Fragment,
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
      columnNumber: 13
    }
  }, __jsx(Dialog.Overlay, {
    className: "fixed inset-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  })), __jsx("span", {
    className: "inline-block h-screen align-middle",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "\u200B"), __jsx(Transition.Child, {
    as: Fragment,
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
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx(Dialog.Title, {
    as: "h3",
    className: "text-lg font-medium leading-6 text-gray-900 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Login"), __jsx(NavLoginForm, {
    closeModal: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvUmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJwcm9wcyIsInJlZiIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInNob3dNb2RhbCIsIkZyYWdtZW50IiwiY2xvc2VNb2RhbCIsImZvcndhcmRSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRzFCQyxtRUFBbUIsQ0FBQ0osR0FBRCxFQUFNO0FBQUEsV0FBTztBQUM1QkssZUFENEIsdUJBQ2hCO0FBQ1JGLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0g7QUFIMkIsS0FBUDtBQUFBLEdBQU4sRUFJZixFQUplLENBQW5CO0FBS0EsU0FDSSxtRUFDSSxNQUFDLFVBQUQ7QUFBWSxVQUFNLE1BQWxCO0FBQW1CLFFBQUksRUFBRUQsTUFBekI7QUFBaUMsTUFBRSxFQUFFSSxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0osTUFBQyxNQUFEO0FBQ0UsTUFBRSxFQUFDLEtBREw7QUFFRSxhQUFTLEVBQUMsb0NBRlo7QUFHRSxXQUFPLEVBQUVDLFVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFVBQUQsQ0FBWSxLQUFaO0FBQ0UsTUFBRSxFQUFFRCxRQUROO0FBRUUsU0FBSyxFQUFDLHVCQUZSO0FBR0UsYUFBUyxFQUFDLFdBSFo7QUFJRSxXQUFPLEVBQUMsYUFKVjtBQUtFLFNBQUssRUFBQyxzQkFMUjtBQU1FLGFBQVMsRUFBQyxhQU5aO0FBT0UsV0FBTyxFQUFDLFdBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsTUFBRCxDQUFRLE9BQVI7QUFBZ0IsYUFBUyxFQUFDLGVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGLEVBY0U7QUFDRSxhQUFTLEVBQUMsb0NBRFo7QUFFRSxtQkFBWSxNQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRixFQW9CRSxNQUFDLFVBQUQsQ0FBWSxLQUFaO0FBQ0UsTUFBRSxFQUFFQSxRQUROO0FBRUUsU0FBSyxFQUFDLHVCQUZSO0FBR0UsYUFBUyxFQUFDLG9CQUhaO0FBSUUsV0FBTyxFQUFDLHVCQUpWO0FBS0UsU0FBSyxFQUFDLHNCQUxSO0FBTUUsYUFBUyxFQUFDLHVCQU5aO0FBT0UsV0FBTyxFQUFDLG9CQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRTtBQUFLLGFBQVMsRUFBQyxzSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFELENBQVEsS0FBUjtBQUNFLE1BQUUsRUFBQyxJQURMO0FBRUUsYUFBUyxFQUFDLGtEQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQU9FLE1BQUMsWUFBRDtBQUFjLGNBQVUsRUFBRUMsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBVkYsQ0FwQkYsQ0FMRixDQURJLENBREosQ0FESjtBQXFESDs7R0E3RFFULFE7VUFHTE0seUQ7OztLQUhLTixRO0FBK0RNLGtGQUFBVSx3REFBVSxDQUFDVixRQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODU0YjBlNmVlM2Q5MTc3MTZjZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBSZWdpc3Rlcihwcm9wcywgcmVmKSB7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XHJcbiAgICAgICAgc2hvd01vZGFsKCkge1xyXG4gICAgICAgICAgICBzZXRJc09wZW4odHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9KSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uIGFwcGVhciBzaG93PXtpc09wZW59IGFzPXtGcmFnbWVudH0+XHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgYXM9XCJkaXZcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTEwIG92ZXJmbG93LXktYXV0b1wiXHJcbiAgICAgICAgICBvbkNsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHB4LTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMFwiIC8+XHJcbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUaGlzIGVsZW1lbnQgaXMgdG8gdHJpY2sgdGhlIGJyb3dzZXIgaW50byBjZW50ZXJpbmcgdGhlIG1vZGFsIGNvbnRlbnRzLiAqL31cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC1zY3JlZW4gYWxpZ24tbWlkZGxlXCJcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgJiM4MjAzO1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIG1heC13LW1kIHAtNiBteS04IG92ZXJmbG93LWhpZGRlbiB0ZXh0LWxlZnQgYWxpZ24tbWlkZGxlIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBiZy13aGl0ZSBzaGFkb3cteGwgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cuVGl0bGVcclxuICAgICAgICAgICAgICAgICAgYXM9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDAgbWItMlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZy5UaXRsZT5cclxuICAgICAgICAgICAgICAgIDxOYXZMb2dpbkZvcm0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihSZWdpc3RlcilcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==