webpackHotUpdate_N_E("pages/coran/[lbl]",{

/***/ "./pages/coran/[lbl].js":
/*!******************************!*\
  !*** ./pages/coran/[lbl].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Card/Card */ "./components/Card/Card.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/store */ "./store/store.js");



var _jsxFileName = "C:\\xampp\\htdocs\\tbdamai\\pages\\coran\\[lbl].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function cat(_ref) {
  _s();

  var data = _ref.data,
      lbl = _ref.lbl;
  var ctx = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_store_store__WEBPACK_IMPORTED_MODULE_6__["StoreContext"]);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // conversion api
    (function () {
      var _fetchIp = Object(C_xampp_htdocs_tbdamai_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var ip, data;
        return C_xampp_htdocs_tbdamai_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ctx.getIp();

              case 2:
                ip = _context.sent;
                data = {
                  event_name: "PageView",
                  action_source: "website",
                  event_source_url: "https://tbdamai.net/coran/".concat(lbl),
                  user_data: {
                    client_ip_address: ip,
                    client_user_agent: navigator.userAgent.toString().replace(/([1-9][1-9]|[1-9])_\w+/g, "$1")
                  }
                };
                localStorage.getItem("tbEmail") ? data.user_data.em = ctx.hash(localStorage.getItem("tbEmail")) : '';
                router.query.fbclid ? data.user_data.fbc = "fb.1.".concat(Date.now(), ".").concat(router.query.fbclid) : '';
                ctx.conversionApi(data);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function fetchIp() {
        return _fetchIp.apply(this, arguments);
      }

      return fetchIp;
    })()();
  }, [router.query]);
  return __jsx("div", {
    className: "container mx-auto p-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "description",
    content: "Menjual berbagai macam model coran untuk bahan pagar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "keywords",
    content: "coran, asesoris, hewan, ancuran, tombak",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "TBdamai | Coran")), __jsx("div", {
    className: "uppercase text-white font-semibold text-lg bg-blue-500 text-white rounded-2xl w-32 text-center mt-5 mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, data[0].prod_label1), __jsx("div", {
    className: "grid 2xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 grid-cols-2 gap-3 sm:m-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })));
}

_s(cat, "NOpl0krgOKKJ6lEHRfQnYjcJtYA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (cat);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29yYW4vW2xibF0uanMiXSwibmFtZXMiOlsiY2F0IiwiZGF0YSIsImxibCIsImN0eCIsInVzZUNvbnRleHQiLCJTdG9yZUNvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJnZXRJcCIsImlwIiwiZXZlbnRfbmFtZSIsImFjdGlvbl9zb3VyY2UiLCJldmVudF9zb3VyY2VfdXJsIiwidXNlcl9kYXRhIiwiY2xpZW50X2lwX2FkZHJlc3MiLCJjbGllbnRfdXNlcl9hZ2VudCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvU3RyaW5nIiwicmVwbGFjZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlbSIsImhhc2giLCJxdWVyeSIsImZiY2xpZCIsImZiYyIsIkRhdGUiLCJub3ciLCJjb252ZXJzaW9uQXBpIiwiZmV0Y2hJcCIsInByb2RfbGFiZWwxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMEJBLFNBQVNBLEdBQVQsT0FBNEI7QUFBQTs7QUFBQSxNQUFiQyxJQUFhLFFBQWJBLElBQWE7QUFBQSxNQUFQQyxHQUFPLFFBQVBBLEdBQU87QUFDMUIsTUFBTUMsR0FBRyxHQUFHQyx3REFBVSxDQUFDQyx5REFBRCxDQUF0QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2Q7QUFDQTtBQUFBLDRRQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2tCTCxHQUFHLENBQUNNLEtBQUosRUFEbEI7O0FBQUE7QUFDT0Msa0JBRFA7QUFFT1Qsb0JBRlAsR0FFYztBQUNYVSw0QkFBVSxFQUFFLFVBREQ7QUFFWEMsK0JBQWEsRUFBRSxTQUZKO0FBR1hDLGtDQUFnQixzQ0FBK0JYLEdBQS9CLENBSEw7QUFJWFksMkJBQVMsRUFBRTtBQUNUQyxxQ0FBaUIsRUFBRUwsRUFEVjtBQUVUTSxxQ0FBaUIsRUFBRUMsU0FBUyxDQUFDQyxTQUFWLENBQ2hCQyxRQURnQixHQUVoQkMsT0FGZ0IsQ0FFUix5QkFGUSxFQUVtQixJQUZuQjtBQUZWO0FBSkEsaUJBRmQ7QUFhQ0MsNEJBQVksQ0FBQ0MsT0FBYixDQUFxQixTQUFyQixJQUFrQ3JCLElBQUksQ0FBQ2EsU0FBTCxDQUFlUyxFQUFmLEdBQW9CcEIsR0FBRyxDQUFDcUIsSUFBSixDQUFTSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBVCxDQUF0RCxHQUFnRyxFQUFoRztBQUNBaEIsc0JBQU0sQ0FBQ21CLEtBQVAsQ0FBYUMsTUFBYixHQUFzQnpCLElBQUksQ0FBQ2EsU0FBTCxDQUFlYSxHQUFmLGtCQUE2QkMsSUFBSSxDQUFDQyxHQUFMLEVBQTdCLGNBQTJDdkIsTUFBTSxDQUFDbUIsS0FBUCxDQUFhQyxNQUF4RCxDQUF0QixHQUF1RixFQUF2RjtBQUNBdkIsbUJBQUcsQ0FBQzJCLGFBQUosQ0FBa0I3QixJQUFsQjs7QUFmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFEOztBQUFBLGVBQWdCOEIsT0FBaEI7QUFBQTtBQUFBOztBQUFBLGFBQWdCQSxPQUFoQjtBQUFBO0FBaUJELEdBbkJRLEVBbUJOLENBQUN6QixNQUFNLENBQUNtQixLQUFSLENBbkJNLENBQVQ7QUFxQkEsU0FDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsYUFEUDtBQUVFLFdBQU8sRUFBQyxzREFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUNFLFFBQUksRUFBQyxVQURQO0FBRUUsV0FBTyxFQUFDLHlDQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEYsQ0FERixFQVlFO0FBQUssYUFBUyxFQUFDLDBHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3hCLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUStCLFdBRFgsQ0FaRixFQWVFO0FBQUssYUFBUyxFQUFDLGdGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxFQUFFL0IsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FmRixDQURGO0FBcUJEOztHQTlDUUQsRztVQUVRTyxxRDs7OztBQThDRlAsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29yYW4vW2xibF0uNjUyMmMwYjFiYjMxMDAxNzk3ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmQvQ2FyZFwiO1xyXG5pbXBvcnQgeyBTdG9yZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc3RvcmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9ICgpID0+IHtcclxuICBjb25zdCBwYXRocyA9IFtcclxuICAgIHsgcGFyYW1zOiB7IGxibDogXCJ0b21iYWtcIiB9IH0sXHJcbiAgICB7IHBhcmFtczogeyBsYmw6IFwiaGV3YW5cIiB9IH0sXHJcbiAgICB7IHBhcmFtczogeyBsYmw6IFwibGFpbm55YVwiIH0gfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHMsXHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgbGJsID0gY29udGV4dC5wYXJhbXMubGJsO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLnRiZGFtYWkubmV0L2Zyb250ZW5kL3Byb2R1Y3QvY29yYW4vJHtsYmx9YFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGRhdGEsIGxibCB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjYXQoeyBkYXRhLCBsYmwgfSkge1xyXG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGNvbnZlcnNpb24gYXBpXHJcbiAgICAoYXN5bmMgZnVuY3Rpb24gZmV0Y2hJcCgpIHsgICAgICBcclxuICAgICAgY29uc3QgaXAgPSBhd2FpdCBjdHguZ2V0SXAoKTtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBldmVudF9uYW1lOiBcIlBhZ2VWaWV3XCIsXHJcbiAgICAgICAgYWN0aW9uX3NvdXJjZTogXCJ3ZWJzaXRlXCIsXHJcbiAgICAgICAgZXZlbnRfc291cmNlX3VybDogYGh0dHBzOi8vdGJkYW1haS5uZXQvY29yYW4vJHtsYmx9YCxcclxuICAgICAgICB1c2VyX2RhdGE6IHtcclxuICAgICAgICAgIGNsaWVudF9pcF9hZGRyZXNzOiBpcCxcclxuICAgICAgICAgIGNsaWVudF91c2VyX2FnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICAgICAgICAgIC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oWzEtOV1bMS05XXxbMS05XSlfXFx3Ky9nLCBcIiQxXCIpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YkVtYWlsXCIpID8gZGF0YS51c2VyX2RhdGEuZW0gPSBjdHguaGFzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRiRW1haWxcIikpOicnO1xyXG4gICAgICByb3V0ZXIucXVlcnkuZmJjbGlkID8gZGF0YS51c2VyX2RhdGEuZmJjID0gYGZiLjEuJHtEYXRlLm5vdygpfS4ke3JvdXRlci5xdWVyeS5mYmNsaWR9YDonJztcclxuICAgICAgY3R4LmNvbnZlcnNpb25BcGkoZGF0YSk7XHJcbiAgICB9KSgpO1xyXG4gIH0sIFtyb3V0ZXIucXVlcnldKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC01XCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIk1lbmp1YWwgYmVyYmFnYWkgbWFjYW0gbW9kZWwgY29yYW4gdW50dWsgYmFoYW4gcGFnYXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXHJcbiAgICAgICAgICBjb250ZW50PVwiY29yYW4sIGFzZXNvcmlzLCBoZXdhbiwgYW5jdXJhbiwgdG9tYmFrXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0aXRsZT5UQmRhbWFpIHwgQ29yYW48L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC0yeGwgdy0zMiB0ZXh0LWNlbnRlciBtdC01IG1iLTVcIj5cclxuICAgICAgICB7ZGF0YVswXS5wcm9kX2xhYmVsMX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCAyeGw6Z3JpZC1jb2xzLTYgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ3JpZC1jb2xzLTIgZ2FwLTMgc206bS1hdXRvXCI+XHJcbiAgICAgICAgPENhcmQgZGF0YT17ZGF0YX0+PC9DYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==