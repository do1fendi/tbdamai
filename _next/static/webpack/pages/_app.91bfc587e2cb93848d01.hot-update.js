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

  var closeModal = function closeModal() {
    setIsOpen(false);
  };

  var openModal = function openModal() {
    setIsOpen(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return {
      showModal: function showModal() {
        openModal();
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
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    onClose: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "min-h-screen px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"].Overlay, {
    className: "fixed inset-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  })), __jsx("span", {
    className: "inline-block h-screen align-middle",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__["Dialog"].Title, {
    as: "h3",
    className: "text-lg font-medium leading-6 text-gray-900 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, "Login")))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvUmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJwcm9wcyIsInJlZiIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsInVzZUltcGVyYXRpdmVIYW5kbGUiLCJzaG93TW9kYWwiLCJGcmFnbWVudCIsImZvcndhcmRSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ25CQyxNQURtQjtBQUFBLE1BQ1hDLFNBRFc7O0FBRTFCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJELGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDSCxHQUZEOztBQUlBLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJGLGFBQVMsQ0FBQyxJQUFELENBQVQ7QUFDSCxHQUZEOztBQUlBRyxtRUFBbUIsQ0FBQ04sR0FBRCxFQUFNO0FBQUEsV0FBTztBQUM1Qk8sZUFENEIsdUJBQ2hCO0FBQ1JGLGlCQUFTO0FBQ1o7QUFIMkIsS0FBUDtBQUFBLEdBQU4sRUFJZixFQUplLENBQW5CO0FBS0EsU0FDSSxtRUFDSSxNQUFDLDREQUFEO0FBQVksVUFBTSxNQUFsQjtBQUFtQixRQUFJLEVBQUVILE1BQXpCO0FBQWlDLE1BQUUsRUFBRU0sOENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQ0ksTUFBRSxFQUFDLEtBRFA7QUFFSSxhQUFTLEVBQUMsb0NBRmQ7QUFHSSxXQUFPLEVBQUVKLFVBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFELENBQVksS0FBWjtBQUNJLE1BQUUsRUFBRUksOENBRFI7QUFFSSxTQUFLLEVBQUMsdUJBRlY7QUFHSSxhQUFTLEVBQUMsV0FIZDtBQUlJLFdBQU8sRUFBQyxhQUpaO0FBS0ksU0FBSyxFQUFDLHNCQUxWO0FBTUksYUFBUyxFQUFDLGFBTmQ7QUFPSSxXQUFPLEVBQUMsV0FQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0ksTUFBQyx3REFBRCxDQUFRLE9BQVI7QUFBZ0IsYUFBUyxFQUFDLGVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixDQURKLEVBY0k7QUFDSSxhQUFTLEVBQUMsb0NBRGQ7QUFFSSxtQkFBWSxNQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZEosRUFvQkksTUFBQyw0REFBRCxDQUFZLEtBQVo7QUFDSSxNQUFFLEVBQUVBLDhDQURSO0FBRUksU0FBSyxFQUFDLHVCQUZWO0FBR0ksYUFBUyxFQUFDLG9CQUhkO0FBSUksV0FBTyxFQUFDLHVCQUpaO0FBS0ksU0FBSyxFQUFDLHNCQUxWO0FBTUksYUFBUyxFQUFDLHVCQU5kO0FBT0ksV0FBTyxFQUFDLG9CQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSTtBQUFLLGFBQVMsRUFBQyxzSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRCxDQUFRLEtBQVI7QUFDSSxNQUFFLEVBQUMsSUFEUDtBQUVJLGFBQVMsRUFBQyxrREFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosQ0FWSixDQXBCSixDQUxKLENBREosQ0FESixDQURKO0FBb0RIOztHQW5FUVYsUTtVQVVMUSx5RDs7O0tBVktSLFE7QUFxRU0sa0ZBQUFXLHdEQUFVLENBQUNYLFFBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MWJmYzU4N2UyY2I5Mzg0OGQwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5mdW5jdGlvbiBSZWdpc3Rlcihwcm9wcywgcmVmKSB7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzT3BlbihmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNPcGVuKHRydWUpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XHJcbiAgICAgICAgc2hvd01vZGFsKCkge1xyXG4gICAgICAgICAgICBvcGVuTW9kYWwoKVxyXG4gICAgICAgIH1cclxuICAgIH0pLCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFRyYW5zaXRpb24gYXBwZWFyIHNob3c9e2lzT3Blbn0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICBhcz1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTEwIG92ZXJmbG93LXktYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBweC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuT3ZlcmxheSBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIFRoaXMgZWxlbWVudCBpcyB0byB0cmljayB0aGUgYnJvd3NlciBpbnRvIGNlbnRlcmluZyB0aGUgbW9kYWwgY29udGVudHMuICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGgtc2NyZWVuIGFsaWduLW1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmIzgyMDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIG1heC13LW1kIHAtNiBteS04IG92ZXJmbG93LWhpZGRlbiB0ZXh0LWxlZnQgYWxpZ24tbWlkZGxlIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBiZy13aGl0ZSBzaGFkb3cteGwgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RpYWxvZy5UaXRsZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoUmVnaXN0ZXIpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=