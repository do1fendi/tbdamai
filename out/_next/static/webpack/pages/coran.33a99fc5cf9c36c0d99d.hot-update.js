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
/* harmony import */ var _components_conversionApi_conversionApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/conversionApi/conversionApi */ "./components/conversionApi/conversionApi.js");



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
    //const ip = ctx.getIp();

    ctx.ConversionApi({
      event_name: "PageView",
      action_source: "website",
      user_data: {
        client_ip_address: ctx.getIp(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29yYW4uanMiXSwibmFtZXMiOlsiY29yYW4iLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwiY3R4IiwidXNlQ29udGV4dCIsIlN0b3JlQ29udGV4dCIsInVzZUVmZmVjdCIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZmV0Y2hBcGkiLCJDb252ZXJzaW9uQXBpIiwiZXZlbnRfbmFtZSIsImFjdGlvbl9zb3VyY2UiLCJ1c2VyX2RhdGEiLCJjbGllbnRfaXBfYWRkcmVzcyIsImdldElwIiwiY2xpZW50X3VzZXJfYWdlbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJmaWx0ZXIiLCJkdCIsInByb2RfbGFiZWwxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLEVBQUQsQ0FERjtBQUFBLE1BQ3ZCQyxJQUR1QjtBQUFBLE1BQ2pCQyxPQURpQjs7QUFFOUIsTUFBTUMsR0FBRyxHQUFHQyx3REFBVSxDQUFDQyx5REFBRCxDQUF0QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZDtBQUFBLDZRQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3NCQyxLQUFLLENBQ3hCLGdEQUR3QixDQUQzQjs7QUFBQTtBQUNLQyx3QkFETDtBQUFBO0FBQUEsdUJBSWtCQSxRQUFRLENBQUNDLElBQVQsRUFKbEI7O0FBQUE7QUFJQ0Qsd0JBSkQ7QUFLQ04sdUJBQU8sQ0FBQ00sUUFBRCxDQUFQOztBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQ7O0FBQUEsZUFBZ0JFLFFBQWhCO0FBQUE7QUFBQTs7QUFBQSxhQUFnQkEsUUFBaEI7QUFBQSxXQURjLENBU2Q7QUFDQTs7QUFDQVAsT0FBRyxDQUFDUSxhQUFKLENBQWtCO0FBQ2hCQyxnQkFBVSxFQUFFLFVBREk7QUFFaEJDLG1CQUFhLEVBQUUsU0FGQztBQUdoQkMsZUFBUyxFQUFFO0FBQ1RDLHlCQUFpQixFQUFFWixHQUFHLENBQUNhLEtBQUosRUFEVjtBQUVUQyx5QkFBaUIsRUFBRUMsU0FBUyxDQUFDQyxTQUFWLENBQ2hCQyxRQURnQixHQUVoQkMsT0FGZ0IsQ0FFUix5QkFGUSxFQUVtQixJQUZuQjtBQUZWO0FBSEssS0FBbEI7QUFVRCxHQXJCUSxFQXFCTixFQXJCTSxDQUFUO0FBc0JBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsZ0dBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLEVBT0U7QUFBSyxhQUFTLEVBQUMsZ0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBTSxRQUFJLEVBQUVwQixJQUFJLENBQUNxQixNQUFMLENBQVksVUFBQ0MsRUFBRDtBQUFBLGFBQVFBLEVBQUUsQ0FBQ0MsV0FBSCxJQUFrQixRQUExQjtBQUFBLEtBQVosQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FQRixFQVVFO0FBQUssYUFBUyxFQUFDLGlHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixFQWFFO0FBQUssYUFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxFQUFFdkIsSUFBSSxDQUFDcUIsTUFBTCxDQUFZLFVBQUNDLEVBQUQ7QUFBQSxhQUFRQSxFQUFFLENBQUNDLFdBQUgsSUFBa0IsT0FBMUI7QUFBQSxLQUFaLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBYkYsRUFnQkU7QUFBSyxhQUFTLEVBQUMsaUdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsRUFtQkU7QUFBSyxhQUFTLEVBQUMsZ0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFDRSxRQUFJLEVBQUV2QixJQUFJLENBQUNxQixNQUFMLENBQ0osVUFBQ0MsRUFBRDtBQUFBLGFBQVFBLEVBQUUsQ0FBQ0MsV0FBSCxJQUFrQixPQUFsQixJQUE2QkQsRUFBRSxDQUFDQyxXQUFILElBQWtCLFFBQXZEO0FBQUEsS0FESSxDQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQW5CRixDQURGO0FBNkJEOztHQXZEdUJ6QixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvcmFuLjMzYTk5ZmM1Y2Y5YzM2YzBkOTlkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQvQ2FyZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN0b3JlQ29udGV4dCB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xyXG5pbXBvcnQgQ29udmVyc2lvbkFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb252ZXJzaW9uQXBpL2NvbnZlcnNpb25BcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvcmFuKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcGkoKSB7XHJcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkudGJkYW1haS5uZXQvZnJvbnRlbmQvcHJvZHVjdC9jb3JhblwiXHJcbiAgICAgICk7XHJcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXREYXRhKHJlc3BvbnNlKTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gY29udmVyc2lvbiBhcGlcclxuICAgIC8vY29uc3QgaXAgPSBjdHguZ2V0SXAoKTtcclxuICAgIGN0eC5Db252ZXJzaW9uQXBpKHtcclxuICAgICAgZXZlbnRfbmFtZTogXCJQYWdlVmlld1wiLFxyXG4gICAgICBhY3Rpb25fc291cmNlOiBcIndlYnNpdGVcIixcclxuICAgICAgdXNlcl9kYXRhOiB7XHJcbiAgICAgICAgY2xpZW50X2lwX2FkZHJlc3M6IGN0eC5nZXRJcCgpLFxyXG4gICAgICAgIGNsaWVudF91c2VyX2FnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAgICAgLnJlcGxhY2UoLyhbMS05XVsxLTldfFsxLTldKV9cXHcrL2csIFwiJDFcIiksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC01XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Db3JhbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC1sZyBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtMnhsIHctMzIgdGV4dC1jZW50ZXIgbXQtNSBtYi01XCI+XHJcbiAgICAgICAgVG9tYmFrXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgMnhsOmdyaWQtY29scy02IHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdyaWQtY29scy0yIGdhcC0zIHNtOm0tYXV0b1wiPlxyXG4gICAgICAgIDxDYXJkIGRhdGE9e2RhdGEuZmlsdGVyKChkdCkgPT4gZHQucHJvZF9sYWJlbDEgPT0gXCJ0b21iYWtcIil9PjwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtbGcgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCB3LTMyIHRleHQtY2VudGVyIG10LTEwIG1iLTVcIj5cclxuICAgICAgICBIZXdhblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIDJ4bDpncmlkLWNvbHMtNiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBncmlkLWNvbHMtMiBnYXAtMyBzbTptLWF1dG9cIj5cclxuICAgICAgICA8Q2FyZCBkYXRhPXtkYXRhLmZpbHRlcigoZHQpID0+IGR0LnByb2RfbGFiZWwxID09IFwiaGV3YW5cIil9PjwvQ2FyZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtbGcgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLTJ4bCB3LTMyIHRleHQtY2VudGVyIG10LTEwIG1iLTVcIj5cclxuICAgICAgICBMYWluLWxhaW5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCAyeGw6Z3JpZC1jb2xzLTYgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ3JpZC1jb2xzLTIgZ2FwLTMgc206bS1hdXRvXCI+XHJcbiAgICAgICAgPENhcmRcclxuICAgICAgICAgIGRhdGE9e2RhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAoZHQpID0+IGR0LnByb2RfbGFiZWwxICE9IFwiaGV3YW5cIiAmJiBkdC5wcm9kX2xhYmVsMSAhPSBcInRvbWJha1wiXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID48L0NhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9