webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav/NavUser.js":
/*!***********************************!*\
  !*** ./components/Nav/NavUser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavUSer; });
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/solid */ "./node_modules/@heroicons/react/solid/esm/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/store */ "./store/store.js");
/* harmony import */ var _NavLoginForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavLoginForm */ "./components/Nav/NavLoginForm.js");



var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\components\\Nav\\NavUser.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function NavUSer() {
  _s();

  var _this = this;

  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_store__WEBPACK_IMPORTED_MODULE_5__["StoreContext"]); // console.log(ctx.logged)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  var logout = function logout() {
    var token = localStorage.getItem('token');
    console.log(token)( /*#__PURE__*/Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var rawResponse, res;
      return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat("http://localhost:3005/frontend", "/logout"), {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({})
              });

            case 2:
              rawResponse = _context.sent;
              _context.next = 5;
              return rawResponse.json();

            case 5:
              res = _context.sent;

              if (res.status == "Success") {
                ctx.setLogged(false);
              }

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })))();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    as: "div",
    className: "relative inline-block text-left mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Button, {
    className: "inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__["UserIcon"], {
    className: "w-5 h-5",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }))), __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Transition"], {
    as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Items, {
    className: "absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "px-1 py-1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    as: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, ctx.logged ? function (_ref2) {
    var active = _ref2.active;
    return __jsx("button", {
      onClick: logout,
      className: "".concat(active ? 'bg-sinbad-500 text-gray-900 font-semibold' : 'text-gray-900', " group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, "Logout");
  } : function (_ref3) {
    var active = _ref3.active;
    return __jsx("button", {
      onClick: openModal,
      className: "".concat(active ? 'bg-sinbad-500 text-gray-900 font-semibold' : 'text-gray-900', " group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, "Login");
  }))))), __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Transition"], {
    appear: true,
    show: isOpen,
    as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    onClose: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "min-h-screen px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Transition"].Child, {
    as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Dialog"].Overlay, {
    className: "fixed inset-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  })), __jsx("span", {
    className: "inline-block h-screen align-middle",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "\u200B"), __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Transition"].Child, {
    as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Dialog"].Title, {
    as: "h3",
    className: "text-lg font-medium leading-6 text-gray-900 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "Login"), __jsx(_NavLoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  })))))));
}

_s(NavUSer, "hzGIM1hoAu7ySbAn42JS+6Uoq/Q=");

_c = NavUSer;

var _c;

$RefreshReg$(_c, "NavUSer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2VXNlci5qcyJdLCJuYW1lcyI6WyJOYXZVU2VyIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImxvZ291dCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmF3UmVzcG9uc2UiLCJqc29uIiwicmVzIiwic3RhdHVzIiwic2V0TG9nZ2VkIiwiRnJhZ21lbnQiLCJsb2dnZWQiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsR0FBRyxHQUFHQyx3REFBVSxDQUFDQyx5REFBRCxDQUF0QixDQURnQyxDQUVoQzs7QUFGZ0Msa0JBR05DLHNEQUFRLENBQUMsS0FBRCxDQUhGO0FBQUEsTUFHM0JDLE1BSDJCO0FBQUEsTUFHbkJDLFNBSG1COztBQUtoQyxXQUFTQyxVQUFULEdBQXNCO0FBQ3BCRCxhQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBU0UsU0FBVCxHQUFxQjtBQUNuQkYsYUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEOztBQUVELE1BQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQUs7QUFDbEIsUUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWix1UUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUxGLENBREYsQ0FsREYsQ0FERjtBQXNHRDs7R0F2SXVCN0IsTzs7S0FBQUEsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBkODg2ZmQ0YTRlYjNmYjU2NTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51LCBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExvZ291dEljb24sIFVzZXJJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9zb2xpZCdcclxuaW1wb3J0IHtTdG9yZUNvbnRleHR9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgTmF2TG9naW5Gb3JtIGZyb20gJy4vTmF2TG9naW5Gb3JtJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2VVNlcigpIHtcclxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dClcclxuICAvLyBjb25zb2xlLmxvZyhjdHgubG9nZ2VkKVxyXG4gIGxldCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4odHJ1ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+e1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxyXG4gICAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgICAoYXN5bmMgKCk9PntcclxuICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5CQVNFVVJMfS9sb2dvdXRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe30pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PSBcIlN1Y2Nlc3NcIil7XHJcbiAgICAgICAgY3R4LnNldExvZ2dlZChmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfSkoKSAgIFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG4gICAgICA8TWVudSBhcz1cImRpdlwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LWxlZnQgbXItMlwiPiAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8TWVudS5CdXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHB4LTIgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctYmxhY2sgcm91bmRlZC1mdWxsIGJnLW9wYWNpdHktMjAgaG92ZXI6Ymctb3BhY2l0eS0zMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXdoaXRlIGZvY3VzLXZpc2libGU6cmluZy1vcGFjaXR5LTc1XCI+XHJcbiAgICAgICAgICAgIDxVc2VySWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIvPiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L01lbnUuQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxUcmFuc2l0aW9uXHJcbiAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwXCJcclxuICAgICAgICAgIGVudGVyRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxyXG4gICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbXMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB3LTU2IG10LTIgb3JpZ2luLXRvcC1yaWdodCBiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0xMDAgcm91bmRlZC1tZCBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTUgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMSBweS0xIFwiPlxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0gYXM9XCJkaXZcIj4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2N0eC5sb2dnZWQgPyAoeyBhY3RpdmUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/ICdiZy1zaW5iYWQtNTAwIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCcgOiAndGV4dC1ncmF5LTkwMCdcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZ3JvdXAgZmxleCByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHgtMiBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6ICh7IGFjdGl2ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3Blbk1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWN0aXZlID8gJ2JnLXNpbmJhZC01MDAgdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkJyA6ICd0ZXh0LWdyYXktOTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBncm91cCBmbGV4IHJvdW5kZWQtbWQgaXRlbXMtY2VudGVyIHctZnVsbCBweC0yIHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW1zPlxyXG4gICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgICAgPC9NZW51PlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtci0yXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtvcGVuTW9kYWx9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWJsYWNrIHJvdW5kZWQtbWQgYmctb3BhY2l0eS0yMCBob3ZlcjpiZy1vcGFjaXR5LTMwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctd2hpdGUgZm9jdXMtdmlzaWJsZTpyaW5nLW9wYWNpdHktNzVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFVzZXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgPFRyYW5zaXRpb24gYXBwZWFyIHNob3c9e2lzT3Blbn0gYXM9e0ZyYWdtZW50fT4gICAgICAgIFxyXG4gICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgIGFzPVwiZGl2XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei0xMCBvdmVyZmxvdy15LWF1dG9cIlxyXG4gICAgICAgICAgb25DbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBweC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPERpYWxvZy5PdmVybGF5IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTBcIiAvPlxyXG4gICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcblxyXG4gICAgICAgICAgICB7LyogVGhpcyBlbGVtZW50IGlzIHRvIHRyaWNrIHRoZSBicm93c2VyIGludG8gY2VudGVyaW5nIHRoZSBtb2RhbCBjb250ZW50cy4gKi99XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGgtc2NyZWVuIGFsaWduLW1pZGRsZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgPiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgJiM4MjAzO1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LWZ1bGwgbWF4LXctbWQgcC02IG15LTggb3ZlcmZsb3ctaGlkZGVuIHRleHQtbGVmdCBhbGlnbi1taWRkbGUgdHJhbnNpdGlvbi1hbGwgdHJhbnNmb3JtIGJnLXdoaXRlIHNoYWRvdy14bCByb3VuZGVkLTJ4bFwiPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZy5UaXRsZVxyXG4gICAgICAgICAgICAgICAgICBhcz1cImgzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMCBtYi0yXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nLlRpdGxlPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxOYXZMb2dpbkZvcm0gIC8+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=