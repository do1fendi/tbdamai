webpackHotUpdate_N_E("pages/coran",{

/***/ "./pages/coran.js":
/*!************************!*\
  !*** ./pages/coran.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return coran; });
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card/Card */ "./components/Card/Card.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "./store/store.js");



var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\coran.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function coran() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_store__WEBPACK_IMPORTED_MODULE_5__["StoreContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    (function () {
      var _fetchApi = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://api.tbdamai.net/frontend/product/coran");

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
    })()(); // conversion api

    var ip = ctx.getIp();
    ctx.conversionApi({
      event_name: "PageView",
      action_source: "website",
      event_source_url: "http://localhost:3000/coran/",
      user_data: {
        client_ip_address: ip,
        client_user_agent: navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g, "$1")
      }
    });
  }, []);
  return __jsx("div", {
    className: "container mx-auto p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Coran")), __jsx("div", {
    className: "text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Tombak"), __jsx("div", {
    className: "grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.filter(function (dt) {
      return dt.prod_label1 == "tombak";
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-10 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Hewan"), __jsx("div", {
    className: "grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.filter(function (dt) {
      return dt.prod_label1 == "hewan";
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-10 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, "Lain-lain"), __jsx("div", {
    className: "grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.filter(function (dt) {
      return dt.prod_label1 != "hewan" && dt.prod_label1 != "tombak";
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })));
}

_s(coran, "QN36bPBIoZPUUktaqHTazaDatOs=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29yYW4uanMiXSwibmFtZXMiOlsiY29yYW4iLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZUVmZmVjdCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZmV0Y2hBcGkiLCJpcCIsImdldElwIiwiY29udmVyc2lvbkFwaSIsImV2ZW50X25hbWUiLCJhY3Rpb25fc291cmNlIiwiZXZlbnRfc291cmNlX3VybCIsInVzZXJfZGF0YSIsImNsaWVudF9pcF9hZGRyZXNzIiwiY2xpZW50X3VzZXJfYWdlbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJmaWx0ZXIiLCJkdCIsInByb2RfbGFiZWwxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLEVBQUQsQ0FERjtBQUFBLE1BQ3ZCQyxJQUR1QjtBQUFBLE1BQ2pCQyxPQURpQjs7QUFFOUIsTUFBTUMsR0FBRyxHQUFHQyx3REFBVSxDQUFDQyx5REFBRCxDQUF0QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUFBLDZRQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3NCQyxLQUFLLENBQ3hCLGdEQUR3QixDQUQzQjs7QUFBQTtBQUNLQyx3QkFETDtBQUFBO0FBQUEsdUJBSWtCQSxRQUFRLENBQUNDLElBQVQsRUFKbEI7O0FBQUE7QUFJQ0Qsd0JBSkQ7QUFLQ04sdUJBQU8sQ0FBQ00sUUFBRCxDQUFQOztBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7O0FBQUEsZUFBZ0JFLFFBQWhCO0FBQUE7QUFBQTs7QUFBQSxhQUFnQkEsUUFBaEI7QUFBQSxXQURjLENBU2Q7O0FBQ0EsUUFBTUMsRUFBRSxHQUFHUixHQUFHLENBQUNTLEtBQUosRUFBWDtBQUNBVCxPQUFHLENBQUNVLGFBQUosQ0FBa0I7QUFDaEJDLGdCQUFVLEVBQUUsVUFESTtBQUVoQkMsbUJBQWEsRUFBRSxTQUZDO0FBR2hCQyxzQkFBZ0IsRUFBRSw4QkFIRjtBQUloQkMsZUFBUyxFQUFFO0FBQ1RDLHlCQUFpQixFQUFFUCxFQURWO0FBRVRRLHlCQUFpQixFQUFFQyxTQUFTLENBQUNDLFNBQVYsQ0FDaEJDLFFBRGdCLEdBRWhCQyxPQUZnQixDQUVSLHlCQUZRLEVBRW1CLElBRm5CO0FBRlY7QUFKSyxLQUFsQjtBQVdELEdBdEJRLEVBc0JOLEVBdEJNLENBQVQ7QUF1QkEsU0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxnR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsRUFPRTtBQUFLLGFBQVMsRUFBQyxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFNLFFBQUksRUFBRXRCLElBQUksQ0FBQ3VCLE1BQUwsQ0FBWSxVQUFDQyxFQUFEO0FBQUEsYUFBUUEsRUFBRSxDQUFDQyxXQUFILElBQWtCLFFBQTFCO0FBQUEsS0FBWixDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLEVBVUU7QUFBSyxhQUFTLEVBQUMsaUdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLEVBYUU7QUFBSyxhQUFTLEVBQUMsZ0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBTSxRQUFJLEVBQUV6QixJQUFJLENBQUN1QixNQUFMLENBQVksVUFBQ0MsRUFBRDtBQUFBLGFBQVFBLEVBQUUsQ0FBQ0MsV0FBSCxJQUFrQixPQUExQjtBQUFBLEtBQVosQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FiRixFQWdCRTtBQUFLLGFBQVMsRUFBQyxpR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixFQW1CRTtBQUFLLGFBQVMsRUFBQyxnRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLFFBQUksRUFBRXpCLElBQUksQ0FBQ3VCLE1BQUwsQ0FDSixVQUFDQyxFQUFEO0FBQUEsYUFBUUEsRUFBRSxDQUFDQyxXQUFILElBQWtCLE9BQWxCLElBQTZCRCxFQUFFLENBQUNDLFdBQUgsSUFBa0IsUUFBdkQ7QUFBQSxLQURJLENBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbkJGLENBREY7QUE2QkQ7O0dBeER1QjNCLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29yYW4uMWEwY2JlMDZiNzZkMGMyODhkMGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3RvcmVDb250ZXh0IH0gZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb3JhbigpIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jIGZ1bmN0aW9uIGZldGNoQXBpKCkge1xyXG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL3Byb2R1Y3QvY29yYW5cIlxyXG4gICAgICApO1xyXG4gICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0RGF0YShyZXNwb25zZSk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIGNvbnZlcnNpb24gYXBpXHJcbiAgICBjb25zdCBpcCA9IGN0eC5nZXRJcCgpO1xyXG4gICAgY3R4LmNvbnZlcnNpb25BcGkoe1xyXG4gICAgICBldmVudF9uYW1lOiBcIlBhZ2VWaWV3XCIsXHJcbiAgICAgIGFjdGlvbl9zb3VyY2U6IFwid2Vic2l0ZVwiLFxyXG4gICAgICBldmVudF9zb3VyY2VfdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jb3Jhbi9cIixcclxuICAgICAgdXNlcl9kYXRhOiB7XHJcbiAgICAgICAgY2xpZW50X2lwX2FkZHJlc3M6IGlwLFxyXG4gICAgICAgIGNsaWVudF91c2VyX2FnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgLnJlcGxhY2UoLyhbMS05XVsxLTldfFsxLTldKV9cXHcrL2csIFwiJDFcIiksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC01XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db3JhbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtMnhsIHctMzIgdGV4dC1jZW50ZXIgbXQtNSBtYi01XCI+XHJcbiAgICAgICAgVG9tYmFrXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgMnhsOmdyaWQtY29scy02IHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC0zIHNtOm0tYXV0b1wiPlxyXG4gICAgICAgIDxDYXJkIGRhdGE9e2RhdGEuZmlsdGVyKChkdCkgPT4gZHQucHJvZF9sYWJlbDEgPT0gXCJ0b21iYWtcIil9PjwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtbGcgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCB3LTMyIHRleHQtY2VudGVyIG10LTEwIG1iLTVcIj5cclxuICAgICAgICBIZXdhblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIDJ4bDpncmlkLWNvbHMtNiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBncmlkLWNvbHMtMiBnYXAtMyBzbTptLWF1dG9cIj5cclxuICAgICAgICA8Q2FyZCBkYXRhPXtkYXRhLmZpbHRlcigoZHQpID0+IGR0LnByb2RfbGFiZWwxID09IFwiaGV3YW5cIil9PjwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtbGcgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCB3LTMyIHRleHQtY2VudGVyIG10LTEwIG1iLTVcIj5cclxuICAgICAgICBMYWluLWxhaW5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCAyeGw6Z3JpZC1jb2xzLTYgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ3JpZC1jb2xzLTIgZ2FwLTMgc206bS1hdXRvXCI+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGRhdGE9e2RhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAoZHQpID0+IGR0LnByb2RfbGFiZWwxICE9IFwiaGV3YW5cIiAmJiBkdC5wcm9kX2xhYmVsMSAhPSBcInRvbWJha1wiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID48L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9