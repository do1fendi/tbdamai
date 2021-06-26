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
    Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
                  Authorization: "Bearer ".concat(localStorage.getItem('token'))
                },
                body: JSON.stringify({
                  token: "".concat(localStorage.getItem('token'))
                })
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
    }))();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    as: "div",
    className: "relative inline-block text-left mr-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Button, {
    className: "inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-white bg-black rounded-full bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_4__["UserIcon"], {
    className: "w-5 h-5",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Items, {
    className: "absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "px-1 py-1 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, {
    as: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
        lineNumber: 60,
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
        lineNumber: 67,
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
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
    as: "div",
    className: "fixed inset-0 z-10 overflow-y-auto",
    onClose: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "min-h-screen px-4 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Dialog"].Overlay, {
    className: "fixed inset-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 15
    }
  })), __jsx("span", {
    className: "inline-block h-screen align-middle",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
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
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__["Dialog"].Title, {
    as: "h3",
    className: "text-lg font-medium leading-6 text-gray-900 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "Login"), __jsx(_NavLoginForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    closeModal: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2VXNlci5qcyJdLCJuYW1lcyI6WyJOYXZVU2VyIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImxvZ291dCIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJyYXdSZXNwb25zZSIsImpzb24iLCJyZXMiLCJzdGF0dXMiLCJzZXRMb2dnZWQiLCJGcmFnbWVudCIsImxvZ2dlZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUNoQyxNQUFNQyxHQUFHLEdBQUdDLHdEQUFVLENBQUNDLHlEQUFELENBQXRCLENBRGdDLENBRWhDOztBQUZnQyxrQkFHTkMsc0RBQVEsQ0FBQyxLQUFELENBSEY7QUFBQSxNQUczQkMsTUFIMkI7QUFBQSxNQUduQkMsU0FIbUI7O0FBS2hDLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEJELGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTRSxTQUFULEdBQXFCO0FBQ25CRixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0Q7O0FBRUQsTUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBSztBQUNsQiwyUEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUMyQkMsS0FBSyxXQUFJQyxnQ0FBSixjQUFrQztBQUMvREMsc0JBQU0sRUFBRSxNQUR1RDtBQUUvREMsdUJBQU8sRUFBRTtBQUNQQyx3QkFBTSxF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Q0FMRixDQURGLENBbERGLENBREY7QUFzR0Q7O0dBckl1QjNCLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZDJiNWRiNDljMzJkZDdhY2RiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVudSwgRGlhbG9nLCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMb2dvdXRJY29uLCBVc2VySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnXHJcbmltcG9ydCB7U3RvcmVDb250ZXh0fSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IE5hdkxvZ2luRm9ybSBmcm9tICcuL05hdkxvZ2luRm9ybSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdlVTZXIoKSB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpXHJcbiAgLy8gY29uc29sZS5sb2coY3R4LmxvZ2dlZClcclxuICBsZXQgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gICAgc2V0SXNPcGVuKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PntcclxuICAgIChhc3luYyAoKT0+e1xyXG4gICAgICBjb25zdCByYXdSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52LkJBU0VVUkx9L2xvZ291dGAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7dG9rZW46IGAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpfWB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJhd1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gXCJTdWNjZXNzXCIpe1xyXG4gICAgICAgIGN0eC5zZXRMb2dnZWQoZmFsc2UpXHJcbiAgICAgIH1cclxuICAgIH0pKCkgICBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cclxuICAgICAgPE1lbnUgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2sgdGV4dC1sZWZ0IG1yLTJcIj4gICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPE1lbnUuQnV0dG9uIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBweC0yIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWJsYWNrIHJvdW5kZWQtZnVsbCBiZy1vcGFjaXR5LTIwIGhvdmVyOmJnLW9wYWNpdHktMzAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy13aGl0ZSBmb2N1cy12aXNpYmxlOnJpbmctb3BhY2l0eS03NVwiPlxyXG4gICAgICAgICAgICA8VXNlckljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiLz4gICAgICAgICAgIFxyXG4gICAgICAgICAgPC9NZW51LkJ1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgZW50ZXI9XCJ0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTEwMFwiXHJcbiAgICAgICAgICBlbnRlckZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgIGVudGVyVG89XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTc1XCJcclxuICAgICAgICAgIGxlYXZlRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgbGVhdmVUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZW51Lkl0ZW1zIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdy01NiBtdC0yIG9yaWdpbi10b3AtcmlnaHQgYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMTAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIHJpbmctMSByaW5nLWJsYWNrIHJpbmctb3BhY2l0eS01IGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEgcHktMSBcIj5cclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGFzPVwiZGl2XCI+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHtjdHgubG9nZ2VkID8gKHsgYWN0aXZlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmUgPyAnYmctc2luYmFkLTUwMCB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGQnIDogJ3RleHQtZ3JheS05MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGdyb3VwIGZsZXggcm91bmRlZC1tZCBpdGVtcy1jZW50ZXIgdy1mdWxsIHB4LTIgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoeyBhY3RpdmUgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2FjdGl2ZSA/ICdiZy1zaW5iYWQtNTAwIHRleHQtZ3JheS05MDAgZm9udC1zZW1pYm9sZCcgOiAndGV4dC1ncmF5LTkwMCdcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZ3JvdXAgZmxleCByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHgtMiBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTWVudS5JdGVtcz5cclxuICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibXItMlwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgb25DbGljaz17b3Blbk1vZGFsfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1ibGFjayByb3VuZGVkLW1kIGJnLW9wYWNpdHktMjAgaG92ZXI6Ymctb3BhY2l0eS0zMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXdoaXRlIGZvY3VzLXZpc2libGU6cmluZy1vcGFjaXR5LTc1XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBVc2VyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgIDxUcmFuc2l0aW9uIGFwcGVhciBzaG93PXtpc09wZW59IGFzPXtGcmFnbWVudH0+ICAgICAgICBcclxuICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICBhcz1cImRpdlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotMTAgb3ZlcmZsb3cteS1hdXRvXCJcclxuICAgICAgICAgIG9uQ2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcHgtNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxEaWFsb2cuT3ZlcmxheSBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wXCIgLz5cclxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG5cclxuICAgICAgICAgICAgey8qIFRoaXMgZWxlbWVudCBpcyB0byB0cmljayB0aGUgYnJvd3NlciBpbnRvIGNlbnRlcmluZyB0aGUgbW9kYWwgY29udGVudHMuICovfVxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBoLXNjcmVlbiBhbGlnbi1taWRkbGVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgID4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICYjODIwMztcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIG1heC13LW1kIHAtNiBteS04IG92ZXJmbG93LWhpZGRlbiB0ZXh0LWxlZnQgYWxpZ24tbWlkZGxlIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBiZy13aGl0ZSBzaGFkb3cteGwgcm91bmRlZC0yeGxcIj5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cuVGl0bGVcclxuICAgICAgICAgICAgICAgICAgYXM9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDAgbWItMlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZy5UaXRsZT4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TmF2TG9naW5Gb3JtIGNsb3NlTW9kYWwgLz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==