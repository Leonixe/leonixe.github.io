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
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loading */ "./components/Loading.jsx");





var _jsxFileName = "C:\\Users\\romai\\Documents\\GitHub\\test-feelity\\components\\Application.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Application = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Application, _Component);

  var _super = _createSuper(Application);

  function Application(props, context) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Application);

    _this = _super.call(this, props, context);
    _this.sectionContainer = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
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
          lineNumber: 19,
          columnNumber: 13
        }
      }, __jsx(_Loading__WEBPACK_IMPORTED_MODULE_8__["Loading"], {
        onEnd: function onEnd() {},
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "application-background",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "application-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
        className: "navbar-application",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: "navbar-btn-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-chevron-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 29
        }
      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavbarBrand"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }
      }, __jsx("object", {
        className: "svg-logo",
        type: "image/svg+xml",
        data: "./feelity-fill.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 29
        }
      })))), __jsx("div", {
        ref: this.sectionContainer,
        className: "application-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }
      }, this.props.children));
    }
  }, {
    key: "animationEnter",
    value: function animationEnter() {
      new animejs__WEBPACK_IMPORTED_MODULE_7__["default"].timeline({
        duration: 1200,
        easing: 'easeOutExpo'
      }).add({
        targets: this.sectionContainer.current.children,
        opacity: '1'
      });
    }
  }]);

  return Application;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcGxpY2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvbiIsInByb3BzIiwiY29udGV4dCIsInNlY3Rpb25Db250YWluZXIiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImNoaWxkcmVuIiwiYW5pbWUiLCJ0aW1lbGluZSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiYWRkIiwidGFyZ2V0cyIsImN1cnJlbnQiLCJvcGFjaXR5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtPLElBQU1BLFdBQWI7QUFBQTs7QUFBQTs7QUFFSSx1QkFBYUMsS0FBYixFQUFvQkMsT0FBcEIsRUFBNkI7QUFBQTs7QUFBQTs7QUFDekIsOEJBQU1ELEtBQU4sRUFBYUMsT0FBYjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCQyw0Q0FBSyxDQUFDQyxTQUFOLEVBQXhCO0FBRnlCO0FBRzVCOztBQUxMO0FBQUE7QUFBQSw2QkFPYztBQUNOLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNnQixNQUFDLGdEQUFEO0FBQVMsYUFBSyxFQUFFLGlCQUFLLENBQUUsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURoQixFQUVJO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosRUFHSTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsaURBQUQ7QUFBUSxpQkFBUyxFQUFDLG9CQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxpQkFBUyxFQUFDLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQURKLEVBSUksTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBUSxpQkFBUyxFQUFDLFVBQWxCO0FBQTZCLFlBQUksRUFBQyxlQUFsQztBQUFrRCxZQUFJLEVBQUMsb0JBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixDQUpKLENBREosQ0FISixFQWFJO0FBQUssV0FBRyxFQUFFLEtBQUtGLGdCQUFmO0FBQWlDLGlCQUFTLEVBQUMsa0JBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSyxLQUFLRixLQUFMLENBQVdLLFFBRGhCLENBYkosQ0FESjtBQW1CSDtBQTNCTDtBQUFBO0FBQUEscUNBNkJzQjtBQUNkLFVBQUlDLCtDQUFLLENBQUNDLFFBQVYsQ0FBbUI7QUFDZkMsZ0JBQVEsRUFBRSxJQURLO0FBRWZDLGNBQU0sRUFBRTtBQUZPLE9BQW5CLEVBR0dDLEdBSEgsQ0FHTztBQUNIQyxlQUFPLEVBQUUsS0FBS1QsZ0JBQUwsQ0FBc0JVLE9BQXRCLENBQThCUCxRQURwQztBQUVIUSxlQUFPLEVBQUU7QUFGTixPQUhQO0FBT0g7QUFyQ0w7O0FBQUE7QUFBQSxFQUFpQ0MsK0NBQWpDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jYjJhZjZjYzQxNGI2ZDU2OTdjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2YmFyLCBOYXZiYXJCcmFuZH0gZnJvbSAncmVhY3RzdHJhcCdcclxuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnXHJcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tICcuL0xvYWRpbmcnXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcm9wcywgY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxyXG4gICAgICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBsaWNhdGlvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZyBvbkVuZD17KCk9PiB7fX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBsaWNhdGlvbi1iYWNrZ3JvdW5kJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHBsaWNhdGlvbi1oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgY2xhc3NOYW1lPSduYXZiYXItYXBwbGljYXRpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItYnRuLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhckJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9iamVjdCBjbGFzc05hbWU9J3N2Zy1sb2dvJyB0eXBlPSdpbWFnZS9zdmcreG1sJyBkYXRhPScuL2ZlZWxpdHktZmlsbC5zdmcnPjwvb2JqZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdmJhckJyYW5kPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5zZWN0aW9uQ29udGFpbmVyfSBjbGFzc05hbWU9XCJhcHBsaWNhdGlvbi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGlvbkVudGVyICgpIHtcclxuICAgICAgICBuZXcgYW5pbWUudGltZWxpbmUoe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTIwMCxcclxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nXHJcbiAgICAgICAgfSkuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5zZWN0aW9uQ29udGFpbmVyLmN1cnJlbnQuY2hpbGRyZW4sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=