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
        targets: this.sectionContainer.current.querySelectorAll('.sectio'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcGxpY2F0aW9uLmpzeCJdLCJuYW1lcyI6WyJBcHBsaWNhdGlvbiIsInByb3BzIiwiY29udGV4dCIsInNlY3Rpb25Db250YWluZXIiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImFuaW1hdGlvbkVudGVyIiwiYmluZCIsImNoaWxkcmVuIiwiYW5pbWUiLCJ0aW1lbGluZSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiYWRkIiwidGFyZ2V0cyIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3BhY2l0eSIsInBhZGRpbmdUb3AiLCJ3aWR0aCIsImNvbXBsZXRlIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLTyxJQUFNQSxXQUFiO0FBQUE7O0FBQUE7O0FBRUksdUJBQWFDLEtBQWIsRUFBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQ3pCLDhCQUFNRCxLQUFOLEVBQWFDLE9BQWI7QUFDQSxVQUFLQyxnQkFBTCxHQUF3QkMsNENBQUssQ0FBQ0MsU0FBTixFQUF4QjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIseUdBQXRCO0FBSHlCO0FBSTVCOztBQU5MO0FBQUE7QUFBQSw2QkFRYztBQUNOLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBUyxhQUFLLEVBQUUsS0FBS0QsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUk7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdJO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxpREFBRDtBQUFRLGlCQUFTLEVBQUMsb0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLGlCQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFHLGlCQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosRUFJSSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGlCQUFTLEVBQUMsVUFBbEI7QUFBNkIsWUFBSSxFQUFDLGVBQWxDO0FBQWtELFlBQUksRUFBQyxvQkFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBSkosQ0FESixDQUhKLEVBYUk7QUFBSyxXQUFHLEVBQUUsS0FBS0gsZ0JBQWY7QUFBaUMsaUJBQVMsRUFBQyxrQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtGLEtBQUwsQ0FBV08sUUFEaEIsQ0FiSixDQURKO0FBbUJIO0FBNUJMO0FBQUE7QUFBQSxxQ0E4QnNCO0FBQUE7O0FBQ2QsVUFBSUMsK0NBQUssQ0FBQ0MsUUFBVixDQUFtQjtBQUNmQyxnQkFBUSxFQUFFLElBREs7QUFFZkMsY0FBTSxFQUFFO0FBRk8sT0FBbkIsRUFHR0MsR0FISCxDQUdPO0FBQ0hDLGVBQU8sRUFBRSxLQUFLWCxnQkFBTCxDQUFzQlksT0FBdEIsQ0FBOEJDLGdCQUE5QixDQUErQyxTQUEvQyxDQUROO0FBRUhDLGVBQU8sRUFBRTtBQUZOLE9BSFAsRUFNR0osR0FOSCxDQU1PO0FBQ0hDLGVBQU8sRUFBRSxLQUFLWCxnQkFBTCxDQUFzQlksT0FBdEIsQ0FBOEJDLGdCQUE5QixDQUErQyxnQkFBL0MsQ0FETjtBQUVIRSxrQkFBVSxFQUFFO0FBRlQsT0FOUCxFQVNHTCxHQVRILENBU087QUFDSEMsZUFBTyxFQUFFLEtBQUtYLGdCQUFMLENBQXNCWSxPQUF0QixDQUE4QkMsZ0JBQTlCLENBQStDLG9CQUEvQyxDQUROO0FBRUhDLGVBQU8sRUFBRTtBQUZOLE9BVFAsRUFZR0osR0FaSCxDQVlPO0FBQ0hDLGVBQU8sRUFBRSxLQUFLWCxnQkFBTCxDQUFzQlksT0FBdEIsQ0FBOEJDLGdCQUE5QixDQUErQyx5QkFBL0MsQ0FETjtBQUVIRyxhQUFLLEVBQUUsT0FGSjtBQUdIQyxnQkFBUSxFQUFHLG9CQUFLO0FBQ1osZ0JBQUksQ0FBQ2pCLGdCQUFMLENBQXNCWSxPQUF0QixDQUE4QkMsZ0JBQTlCLENBQStDLDZCQUEvQyxFQUE4RSxDQUE5RSxFQUFpRkssS0FBakYsQ0FBdUZDLE9BQXZGLEdBQWlHLFNBQWpHO0FBQ0EsZ0JBQUksQ0FBQ25CLGdCQUFMLENBQXNCWSxPQUF0QixDQUE4QkMsZ0JBQTlCLENBQStDLHlCQUEvQyxFQUEwRSxDQUExRSxFQUE2RUssS0FBN0UsQ0FBbUZFLGNBQW5GLEdBQW9HLGVBQXBHO0FBQ0g7QUFORSxPQVpQLEVBbUJHVixHQW5CSCxDQW1CTztBQUNIQyxlQUFPLEVBQUUsS0FBS1gsZ0JBQUwsQ0FBc0JZLE9BQXRCLENBQThCQyxnQkFBOUIsQ0FBK0MsNkJBQS9DLENBRE47QUFFSEUsa0JBQVUsRUFBRTtBQUZULE9BbkJQO0FBdUJIO0FBdERMOztBQUFBO0FBQUEsRUFBaUNNLCtDQUFqQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMDc1YTRiYzk3NzM0OTdhZmVhNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE5hdmJhciwgTmF2YmFyQnJhbmR9IGZyb20gJ3JlYWN0c3RyYXAnXHJcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJ1xyXG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSAnLi9Mb2FkaW5nJ1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMsIGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dClcclxuICAgICAgICB0aGlzLnNlY3Rpb25Db250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW50ZXIgPSB0aGlzLmFuaW1hdGlvbkVudGVyLmJpbmQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FwcGxpY2F0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxMb2FkaW5nIG9uRW5kPXt0aGlzLmFuaW1hdGlvbkVudGVyfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwbGljYXRpb24tYmFja2dyb3VuZCc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYXBwbGljYXRpb24taGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyIGNsYXNzTmFtZT0nbmF2YmFyLWFwcGxpY2F0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLWJ0bi1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXJCcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvYmplY3QgY2xhc3NOYW1lPSdzdmctbG9nbycgdHlwZT0naW1hZ2Uvc3ZnK3htbCcgZGF0YT0nLi9mZWVsaXR5LWZpbGwuc3ZnJz48L29iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXJCcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3RoaXMuc2VjdGlvbkNvbnRhaW5lcn0gY2xhc3NOYW1lPVwiYXBwbGljYXRpb24tYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRpb25FbnRlciAoKSB7XHJcbiAgICAgICAgbmV3IGFuaW1lLnRpbWVsaW5lKHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDEyMDAsXHJcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJ1xyXG4gICAgICAgIH0pLmFkZCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuc2VjdGlvbkNvbnRhaW5lci5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW8nKSxcclxuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgIH0pLmFkZCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuc2VjdGlvbkNvbnRhaW5lci5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uLXRpdGxlJyksXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwcHgnLFxyXG4gICAgICAgIH0pLmFkZCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuc2VjdGlvbkNvbnRhaW5lci5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlLCAuc2VydmljZScpLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAnMScsXHJcbiAgICAgICAgfSkuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5zZWN0aW9uQ29udGFpbmVyLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGUgPiAuYXJ0aWNsZS1idG4nKSxcclxuICAgICAgICAgICAgd2lkdGg6ICczMzdweCcsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlIDogKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25Db250YWluZXIuY3VycmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYXJ0aWNsZSA+IC5hcnRpY2xlLWJ0biA+IHAnKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCJcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lci5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hcnRpY2xlID4gLmFydGljbGUtYnRuJylbMF0uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5zZWN0aW9uQ29udGFpbmVyLmN1cnJlbnQucXVlcnlTZWxlY3RvckFsbCgnLmFydGljbGUgPiAuYXJ0aWNsZS1idG4gPiBwJyksXHJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcwcHgnLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==