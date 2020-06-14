webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Application.jsx":
/*!************************************!*\
  !*** ./components/Application.jsx ***!
  \************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Loading */ "./components/Loading.jsx");






var _jsxFileName = "C:\\Users\\romai\\Documents\\GitHub\\test-feelity\\components\\Application.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Application = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Application, _Component);

  var _super = _createSuper(Application);

  function Application(props, context) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Application);

    _this = _super.call(this, props, context);
    _this.sectionContainer = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.animationEnter = _this.animationEnter.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Application, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "application",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }
      }, __jsx(_Loading__WEBPACK_IMPORTED_MODULE_9__["Loading"], {
        onEnd: this.animationEnter,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "application-background",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "application-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
        className: "navbar-application",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: "navbar-btn-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 29
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarBrand"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }
      }, __jsx("object", {
        className: "svg-logo",
        type: "image/svg+xml",
        data: "./feelity-fill.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 29
        }
      })))), __jsx("div", {
        ref: this.sectionContainer,
        className: "application-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, this.props.children));
    }
  }, {
    key: "animationEnter",
    value: function animationEnter() {
      var _this2 = this;

      new animejs__WEBPACK_IMPORTED_MODULE_8__["default"].timeline({
        duration: 1200,
        easing: 'easeOutExpo'
      }).add({
        targets: this.sectionContainer.current.querySelectorAll('.section-title'),
        opacity: '1'
      }).add({
        targets: this.sectionContainer.current.querySelectorAll('.section-title'),
        paddingTop: '0px'
      }).add({
        targets: this.sectionContainer.current.querySelectorAll('.article, .service'),
        opacity: '1'
      }).add({
        targets: this.sectionContainer.current.querySelectorAll('.article > .article-btn'),
        width: '337px',
        complete: function complete() {
          _this2.sectionContainer.current.querySelectorAll('.article > .article-btn > p')[0].style.display = "initial";
          _this2.sectionContainer.current.querySelectorAll('.article > .article-btn')[0].style.justifyContent = "space-between";
        }
      }).add({
        targets: this.sectionContainer.current.querySelectorAll('.article > .article-btn > p'),
        paddingTop: '0px'
      });
    }
  }]);

  return Application;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcGxpY2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvbiIsInByb3BzIiwiY29udGV4dCIsInNlY3Rpb25Db250YWluZXIiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImFuaW1hdGlvbkVudGVyIiwiYmluZCIsImNoaWxkcmVuIiwiYW5pbWUiLCJ0aW1lbGluZSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiYWRkIiwidGFyZ2V0cyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3BhY2l0eSIsInBhZGRpbmdUb3AiLCJ3aWR0aCIsImNvbXBsZXRlIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLTyxJQUFNQSxXQUFiO0FBQUE7O0FBQUE7O0FBRUksdUJBQWFDLEtBQWIsRUFBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQ3pCLDhCQUFNRCxLQUFOLEVBQWFDLE9BQWI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QkMsNENBQUssQ0FBQ0MsU0FBTixFQUF4QjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIseUdBQXRCO0FBSHlCO0FBSTVCOztBQU5MO0FBQUE7QUFBQSw2QkFRYztBQUNOLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBUyxhQUFLLEVBQUUsS0FBS0QsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdJO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxpREFBRDtBQUFRLGlCQUFTLEVBQUMsb0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGlCQUFTLEVBQUMsVUFBbEI7QUFBNkIsWUFBSSxFQUFDLGVBQWxDO0FBQWtELFlBQUksRUFBQyxvQkFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBSkosQ0FESixDQUhKLEVBYUk7QUFBSyxXQUFHLEVBQUUsS0FBS0gsZ0JBQWY7QUFBaUMsaUJBQVMsRUFBQyxrQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtGLEtBQUwsQ0FBV08sUUFEaEIsQ0FiSixDQURKO0FBbUJIO0FBNUJMO0FBQUE7QUFBQSxxQ0E4QnNCO0FBQUE7O0FBQ2QsVUFBSUMsK0NBQUssQ0FBQ0MsUUFBVixDQUFtQjtBQUNmQyxnQkFBUSxFQUFFLElBREs7QUFFZkMsY0FBTSxFQUFFO0FBRk8sT0FBbkIsRUFHR0MsR0FISCxDQUdPO0FBQ0hDLGVBQU8sRUFBRSxLQUFLWCxnQkFBTCxDQUFzQlksT0FBdEIsQ0FBOEJDLGdCQUE5QixDQUErQyxnQkFBL0MsQ0FETjtBQUVIQyxlQUFPLEVBQUU7QUFGTixPQUhQLEVBTUdKLEdBTkgsQ0FNTztBQUNIQyxlQUFPLEVBQUUsS0FBS1gsZ0JBQUwsQ0FBc0JZLE9BQXRCLENBQThCQyxnQkFBOUIsQ0FBK0MsZ0JBQS9DLENBRE47QUFFSEUsa0JBQVUsRUFBRTtBQUZULE9BTlAsRUFTR0wsR0FUSCxDQVNPO0FBQ0hDLGVBQU8sRUFBRSxLQUFLWCxnQkFBTCxDQUFzQlksT0FBdEIsQ0FBOEJDLGdCQUE5QixDQUErQyxvQkFBL0MsQ0FETjtBQUVIQyxlQUFPLEVBQUU7QUFGTixPQVRQLEVBWUdKLEdBWkgsQ0FZTztBQUNIQyxlQUFPLEVBQUUsS0FBS1gsZ0JBQUwsQ0FBc0JZLE9BQXRCLENBQThCQyxnQkFBOUIsQ0FBK0MseUJBQS9DLENBRE47QUFFSEcsYUFBSyxFQUFFLE9BRko7QUFHSEMsZ0JBQVEsRUFBRyxvQkFBSztBQUNaLGdCQUFJLENBQUNqQixnQkFBTCxDQUFzQlksT0FBdEIsQ0FBOEJDLGdCQUE5QixDQUErQyw2QkFBL0MsRUFBOEUsQ0FBOUUsRUFBaUZLLEtBQWpGLENBQXVGQyxPQUF2RixHQUFpRyxTQUFqRztBQUNBLGdCQUFJLENBQUNuQixnQkFBTCxDQUFzQlksT0FBdEIsQ0FBOEJDLGdCQUE5QixDQUErQyx5QkFBL0MsRUFBMEUsQ0FBMUUsRUFBNkVLLEtBQTdFLENBQW1GRSxjQUFuRixHQUFvRyxlQUFwRztBQUNIO0FBTkUsT0FaUCxFQW1CR1YsR0FuQkgsQ0FtQk87QUFDSEMsZUFBTyxFQUFFLEtBQUtYLGdCQUFMLENBQXNCWSxPQUF0QixDQUE4QkMsZ0JBQTlCLENBQStDLDZCQUEvQyxDQUROO0FBRUhFLGtCQUFVLEVBQUU7QUFGVCxPQW5CUDtBQXVCSDtBQXRETDs7QUFBQTtBQUFBLEVBQWlDTSwrQ0FBakMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmMzOWRlOWI0OTA5ZmRjM2E1NTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZiYXIsIE5hdmJhckJyYW5kfSBmcm9tICdyZWFjdHN0cmFwJ1xyXG5pbXBvcnQgYW5pbWUgZnJvbSAnYW5pbWVqcydcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4vTG9hZGluZydcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByb3BzLCBjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkVudGVyID0gdGhpcy5hbmltYXRpb25FbnRlci5iaW5kKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBsaWNhdGlvbic+XHJcbiAgICAgICAgICAgICAgICA8TG9hZGluZyBvbkVuZD17dGhpcy5hbmltYXRpb25FbnRlcn0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcGxpY2F0aW9uLWJhY2tncm91bmQnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcGxpY2F0aW9uLWhlYWRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9J25hdmJhci1hcHBsaWNhdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci1idG4taWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b2JqZWN0IGNsYXNzTmFtZT0nc3ZnLWxvZ28nIHR5cGU9J2ltYWdlL3N2Zyt4bWwnIGRhdGE9Jy4vZmVlbGl0eS1maWxsLnN2Zyc+PC9vYmplY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLnNlY3Rpb25Db250YWluZXJ9IGNsYXNzTmFtZT1cImFwcGxpY2F0aW9uLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0aW9uRW50ZXIgKCkge1xyXG4gICAgICAgIG5ldyBhbmltZS50aW1lbGluZSh7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMjAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbydcclxuICAgICAgICB9KS5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnNlY3Rpb25Db250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbi10aXRsZScpLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXHJcbiAgICAgICAgfSkuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5zZWN0aW9uQ29udGFpbmVyLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY3Rpb24tdGl0bGUnKSxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogJzBweCcsXHJcbiAgICAgICAgfSkuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5zZWN0aW9uQ29udGFpbmVyLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGUsIC5zZXJ2aWNlJyksXHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICB9KS5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnNlY3Rpb25Db250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZSA+IC5hcnRpY2xlLWJ0bicpLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMzN3B4JyxcclxuICAgICAgICAgICAgY29tcGxldGUgOiAoKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lci5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlID4gLmFydGljbGUtYnRuID4gcCcpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uQ29udGFpbmVyLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGUgPiAuYXJ0aWNsZS1idG4nKVswXS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnNlY3Rpb25Db250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZSA+IC5hcnRpY2xlLWJ0biA+IHAnKSxcclxuICAgICAgICAgICAgcGFkZGluZ1RvcDogJzBweCcsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9