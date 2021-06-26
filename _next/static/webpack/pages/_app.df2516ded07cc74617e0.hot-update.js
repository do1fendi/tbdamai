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
      columnNumber: 25
    }
  }, __jsx(Dialog.Overlay, {
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
  }, __jsx(Dialog.Title, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvUmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJwcm9wcyIsInJlZiIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInNob3dNb2RhbCIsIkZyYWdtZW50IiwiY2xvc2VNb2RhbCIsImZvcndhcmRSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRzFCQyxtRUFBbUIsQ0FBQ0osR0FBRCxFQUFNO0FBQUEsV0FBTztBQUM1QkssZUFENEIsdUJBQ2hCO0FBQ1JGLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0g7QUFIMkIsS0FBUDtBQUFBLEdBQU4sRUFJZixFQUplLENBQW5CO0FBS0EsU0FDSSxtRUFDSSxNQUFDLFVBQUQ7QUFBWSxVQUFNLE1BQWxCO0FBQW1CLFFBQUksRUFBRUQsTUFBekI7QUFBaUMsTUFBRSxFQUFFSSxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxNQUFEO0FBQ0ksTUFBRSxFQUFDLEtBRFA7QUFFSSxhQUFTLEVBQUMsb0NBRmQ7QUFHSSxXQUFPLEVBQUVDLFVBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFVBQUQsQ0FBWSxLQUFaO0FBQ0ksTUFBRSxFQUFFRCxRQURSO0FBRUksU0FBSyxFQUFDLHVCQUZWO0FBR0ksYUFBUyxFQUFDLFdBSGQ7QUFJSSxXQUFPLEVBQUMsYUFKWjtBQUtJLFNBQUssRUFBQyxzQkFMVjtBQU1JLGFBQVMsRUFBQyxhQU5kO0FBT0ksV0FBTyxFQUFDLFdBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNJLE1BQUMsTUFBRCxDQUFRLE9BQVI7QUFBZ0IsYUFBUyxFQUFDLGVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQURKLEVBY0k7QUFDSSxhQUFTLEVBQUMsb0NBRGQ7QUFFSSxtQkFBWSxNQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosRUFvQkksTUFBQyxVQUFELENBQVksS0FBWjtBQUNJLE1BQUUsRUFBRUEsUUFEUjtBQUVJLFNBQUssRUFBQyx1QkFGVjtBQUdJLGFBQVMsRUFBQyxvQkFIZDtBQUlJLFdBQU8sRUFBQyx1QkFKWjtBQUtJLFNBQUssRUFBQyxzQkFMVjtBQU1JLGFBQVMsRUFBQyx1QkFOZDtBQU9JLFdBQU8sRUFBQyxvQkFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUk7QUFBSyxhQUFTLEVBQUMsc0lBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsTUFBRCxDQUFRLEtBQVI7QUFDSSxNQUFFLEVBQUMsSUFEUDtBQUVJLGFBQVMsRUFBQyxrREFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRUFPSSxNQUFDLFlBQUQ7QUFBYyxjQUFVLEVBQUVDLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQVZKLENBcEJKLENBTEosQ0FESixDQURKLENBREo7QUFxREg7O0dBN0RRVCxRO1VBR0xNLHlEOzs7S0FIS04sUTtBQStETSxrRkFBQVUsd0RBQVUsQ0FBQ1YsUUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRmMjUxNmRlZDA3Y2M3NDYxN2UwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIocHJvcHMsIHJlZikge1xyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xyXG4gICAgICAgIHNob3dNb2RhbCgpIHtcclxuICAgICAgICAgICAgc2V0SXNPcGVuKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSksIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8VHJhbnNpdGlvbiBhcHBlYXIgc2hvdz17aXNPcGVufSBhcz17RnJhZ21lbnR9PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgIGFzPVwiZGl2XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotMTAgb3ZlcmZsb3cteS1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHB4LTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogVGhpcyBlbGVtZW50IGlzIHRvIHRyaWNrIHRoZSBicm93c2VyIGludG8gY2VudGVyaW5nIHRoZSBtb2RhbCBjb250ZW50cy4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC1zY3JlZW4gYWxpZ24tbWlkZGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYjODIwMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LWZ1bGwgbWF4LXctbWQgcC02IG15LTggb3ZlcmZsb3ctaGlkZGVuIHRleHQtbGVmdCBhbGlnbi1taWRkbGUgdHJhbnNpdGlvbi1hbGwgdHJhbnNmb3JtIGJnLXdoaXRlIHNoYWRvdy14bCByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDAgbWItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMb2dpbkZvcm0gY2xvc2VNb2RhbD17Y2xvc2VNb2RhbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3J3YXJkUmVmKFJlZ2lzdGVyKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9