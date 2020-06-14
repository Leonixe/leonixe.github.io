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
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "application-background",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "application-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
        className: "navbar-application",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: "navbar-btn-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 29
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarBrand"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }
      }, __jsx("object", {
        className: "svg-logo",
        type: "image/svg+xml",
        data: "./feelity-fill.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 29
        }
      })))), __jsx("div", {
        ref: this.sectionContainer,
        className: "application-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
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
        targets: this.sectionContainer.current.children,
        opacity: '1'
      }).add({
        targets: this.sectionContainer.current.querySelectorAll('.section-title'),
        paddingTop: '0px'
      }).add({
        targets: this.sectionContainer.current.querySelectorAll('.article > .article-btn'),
        width: '337px',
        complete: function complete() {
          _this2.sectionContainer.current.querySelectorAll('.article > .article-btn').style.justifyContent = "space-between";
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcGxpY2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvbiIsInByb3BzIiwiY29udGV4dCIsInNlY3Rpb25Db250YWluZXIiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImFuaW1hdGlvbkVudGVyIiwiYmluZCIsImNoaWxkcmVuIiwiYW5pbWUiLCJ0aW1lbGluZSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiYWRkIiwidGFyZ2V0cyIsImN1cnJlbnQiLCJvcGFjaXR5IiwicXVlcnlTZWxlY3RvckFsbCIsInBhZGRpbmdUb3AiLCJ3aWR0aCIsImNvbXBsZXRlIiwic3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtPLElBQU1BLFdBQWI7QUFBQTs7QUFBQTs7QUFFSSx1QkFBYUMsS0FBYixFQUFvQkMsT0FBcEIsRUFBNkI7QUFBQTs7QUFBQTs7QUFDekIsOEJBQU1ELEtBQU4sRUFBYUMsT0FBYjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQXhCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQix5R0FBdEI7QUFIeUI7QUFJNUI7O0FBTkw7QUFBQTtBQUFBLDZCQVFjO0FBQ04sYUFDSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ2dCLE1BQUMsZ0RBQUQ7QUFBUyxhQUFLLEVBQ1YsS0FBS0QsY0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRGhCLEVBSUk7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKSixFQUtJO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxpREFBRDtBQUFRLGlCQUFTLEVBQUMsb0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGlCQUFTLEVBQUMsVUFBbEI7QUFBNkIsWUFBSSxFQUFDLGVBQWxDO0FBQWtELFlBQUksRUFBQyxvQkFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBSkosQ0FESixDQUxKLEVBZUk7QUFBSyxXQUFHLEVBQUUsS0FBS0gsZ0JBQWY7QUFBaUMsaUJBQVMsRUFBQyxrQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtGLEtBQUwsQ0FBV08sUUFEaEIsQ0FmSixDQURKO0FBcUJIO0FBOUJMO0FBQUE7QUFBQSxxQ0FnQ3NCO0FBQUE7O0FBQ2QsVUFBSUMsK0NBQUssQ0FBQ0MsUUFBVixDQUFtQjtBQUNmQyxnQkFBUSxFQUFFLElBREs7QUFFZkMsY0FBTSxFQUFFO0FBRk8sT0FBbkIsRUFHR0MsR0FISCxDQUdPO0FBQ0hDLGVBQU8sRUFBRSxLQUFLWCxnQkFBTCxDQUFzQlksT0FBdEIsQ0FBOEJQLFFBRHBDO0FBRUhRLGVBQU8sRUFBRTtBQUZOLE9BSFAsRUFNR0gsR0FOSCxDQU1PO0FBQ0hDLGVBQU8sRUFBRSxLQUFLWCxnQkFBTCxDQUFzQlksT0FBdEIsQ0FBOEJFLGdCQUE5QixDQUErQyxnQkFBL0MsQ0FETjtBQUVIQyxrQkFBVSxFQUFFO0FBRlQsT0FOUCxFQVNHTCxHQVRILENBU087QUFDSEMsZUFBTyxFQUFFLEtBQUtYLGdCQUFMLENBQXNCWSxPQUF0QixDQUE4QkUsZ0JBQTlCLENBQStDLHlCQUEvQyxDQUROO0FBRUhFLGFBQUssRUFBRSxPQUZKO0FBR0hDLGdCQUFRLEVBQUcsb0JBQUs7QUFDWixnQkFBSSxDQUFDakIsZ0JBQUwsQ0FBc0JZLE9BQXRCLENBQThCRSxnQkFBOUIsQ0FBK0MseUJBQS9DLEVBQTBFSSxLQUExRSxDQUFnRkMsY0FBaEYsR0FBaUcsZUFBakc7QUFDSDtBQUxFLE9BVFA7QUFnQkg7QUFqREw7O0FBQUE7QUFBQSxFQUFpQ0MsK0NBQWpDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yZDUwYjg5ZDI4MGRmZjhiNjk3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXZiYXJCcmFuZH0gZnJvbSAncmVhY3RzdHJhcCdcclxuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnXHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL0xvYWRpbmcnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcywgY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxyXG4gICAgICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbnRlciA9IHRoaXMuYW5pbWF0aW9uRW50ZXIuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwbGljYXRpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRpbmcgb25FbmQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uRW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBsaWNhdGlvbi1iYWNrZ3JvdW5kJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBsaWNhdGlvbi1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSduYXZiYXItYXBwbGljYXRpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItYnRuLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhckJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9iamVjdCBjbGFzc05hbWU9J3N2Zy1sb2dvJyB0eXBlPSdpbWFnZS9zdmcreG1sJyBkYXRhPScuL2ZlZWxpdHktZmlsbC5zdmcnPjwvb2JqZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5zZWN0aW9uQ29udGFpbmVyfSBjbGFzc05hbWU9XCJhcHBsaWNhdGlvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGlvbkVudGVyICgpIHtcclxuICAgICAgICBuZXcgYW5pbWUudGltZWxpbmUoe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTIwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nXHJcbiAgICAgICAgfSkuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5zZWN0aW9uQ29udGFpbmVyLmN1cnJlbnQuY2hpbGRyZW4sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICB9KS5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnNlY3Rpb25Db250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VjdGlvbi10aXRsZScpLFxyXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAnMHB4JyxcclxuICAgICAgICB9KS5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnNlY3Rpb25Db250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZSA+IC5hcnRpY2xlLWJ0bicpLFxyXG4gICAgICAgICAgICB3aWR0aDogJzMzN3B4JyxcclxuICAgICAgICAgICAgY29tcGxldGUgOiAoKT0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lci5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlID4gLmFydGljbGUtYnRuJykuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==