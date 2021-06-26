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
    var token = localStorage.getItem('token')( /*#__PURE__*/Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })))();
    ctx.setLogged(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYvTmF2VXNlci5qcyJdLCJuYW1lcyI6WyJOYXZVU2VyIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImxvZ291dCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyYXdSZXNwb25zZSIsImpzb24iLCJyZXMiLCJzZXRMb2dnZWQiLCJGcmFnbWVudCIsImxvZ2dlZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBOztBQUNoQyxNQUFNQyxHQUFHLEdBQUdDLHdEQUFVLENBQUNDLHlEQUFELENBQXRCLENBRGdDLENBRWhDOztBQUZnQyxrQkFHTkMsc0RBQVEsQ0FBQyxLQUFELENBSEY7QUFBQSxNQUczQkMsTUFIMkI7QUFBQSxNQUduQkMsU0FIbUI7O0FBS2hDLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEJELGFBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTRSxTQUFULEdBQXFCO0FBQ25CRixhQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0Q7O0FBRUQsTUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBSztBQUNsQixRQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQix1UUFDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUMyQkMsS0FBSyxXQUFJQyxnQ0FBSixjQUFrQztBQUMvREMsc0JBQU0sRUFBRSxN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ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lbnUsIERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTG9nb3V0SWNvbiwgVXNlckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xyXG5pbXBvcnQge1N0b3JlQ29udGV4dH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCBOYXZMb2dpbkZvcm0gZnJvbSAnLi9OYXZMb2dpbkZvcm0nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZVU2VyKCkge1xyXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KVxyXG4gIC8vIGNvbnNvbGUubG9nKGN0eC5sb2dnZWQpXHJcbiAgbGV0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgIHNldElzT3BlbihmYWxzZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIHNldElzT3Blbih0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT57XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgICAoYXN5bmMgKCk9PntcclxuICAgICAgY29uc3QgcmF3UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5CQVNFVVJMfS9sb2dvdXRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe30pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmF3UmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSkoKVxyXG4gICAgY3R4LnNldExvZ2dlZChmYWxzZSlcclxuICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuXHJcbiAgICAgIDxNZW51IGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtbGVmdCBtci0yXCI+ICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxNZW51LkJ1dHRvbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcHgtMiBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1ibGFjayByb3VuZGVkLWZ1bGwgYmctb3BhY2l0eS0yMCBob3ZlcjpiZy1vcGFjaXR5LTMwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctd2hpdGUgZm9jdXMtdmlzaWJsZTpyaW5nLW9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgPFVzZXJJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+ICAgICAgICAgICBcclxuICAgICAgICAgIDwvTWVudS5CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0xMDBcIlxyXG4gICAgICAgICAgZW50ZXJGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICBlbnRlclRvPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi03NVwiXHJcbiAgICAgICAgICBsZWF2ZUZyb209XCJ0cmFuc2Zvcm0gb3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgIGxlYXZlVG89XCJ0cmFuc2Zvcm0gb3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudS5JdGVtcyBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHctNTYgbXQtMiBvcmlnaW4tdG9wLXJpZ2h0IGJnLXdoaXRlIGRpdmlkZS15IGRpdmlkZS1ncmF5LTEwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0xIHB5LTEgXCI+XHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBhcz1cImRpdlwiPiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7Y3R4LmxvZ2dlZCA/ICh7IGFjdGl2ZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YWN0aXZlID8gJ2JnLXNpbmJhZC01MDAgdGV4dC1ncmF5LTkwMCBmb250LXNlbWlib2xkJyA6ICd0ZXh0LWdyYXktOTAwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBncm91cCBmbGV4IHJvdW5kZWQtbWQgaXRlbXMtY2VudGVyIHctZnVsbCBweC0yIHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKHsgYWN0aXZlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcGVuTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHthY3RpdmUgPyAnYmctc2luYmFkLTUwMCB0ZXh0LWdyYXktOTAwIGZvbnQtc2VtaWJvbGQnIDogJ3RleHQtZ3JheS05MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IGdyb3VwIGZsZXggcm91bmRlZC1tZCBpdGVtcy1jZW50ZXIgdy1mdWxsIHB4LTIgcHktMiB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbXM+XHJcbiAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1yLTJcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e29wZW5Nb2RhbH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctYmxhY2sgcm91bmRlZC1tZCBiZy1vcGFjaXR5LTIwIGhvdmVyOmJnLW9wYWNpdHktMzAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy13aGl0ZSBmb2N1cy12aXNpYmxlOnJpbmctb3BhY2l0eS03NVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgVXNlclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICA8VHJhbnNpdGlvbiBhcHBlYXIgc2hvdz17aXNPcGVufSBhcz17RnJhZ21lbnR9PiAgICAgICAgXHJcbiAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgYXM9XCJkaXZcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTEwIG92ZXJmbG93LXktYXV0b1wiXHJcbiAgICAgICAgICBvbkNsb3NlPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHB4LTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICBsZWF2ZT1cImVhc2UtaW4gZHVyYXRpb24tMjAwXCJcclxuICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RGlhbG9nLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMFwiIC8+XHJcbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUaGlzIGVsZW1lbnQgaXMgdG8gdHJpY2sgdGhlIGJyb3dzZXIgaW50byBjZW50ZXJpbmcgdGhlIG1vZGFsIGNvbnRlbnRzLiAqL31cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgaC1zY3JlZW4gYWxpZ24tbWlkZGxlXCJcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICA+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAmIzgyMDM7XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctZnVsbCBtYXgtdy1tZCBwLTYgbXktOCBvdmVyZmxvdy1oaWRkZW4gdGV4dC1sZWZ0IGFsaWduLW1pZGRsZSB0cmFuc2l0aW9uLWFsbCB0cmFuc2Zvcm0gYmctd2hpdGUgc2hhZG93LXhsIHJvdW5kZWQtMnhsXCI+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlXHJcbiAgICAgICAgICAgICAgICAgIGFzPVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwIG1iLTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2cuVGl0bGU+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPE5hdkxvZ2luRm9ybSAgLz4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==