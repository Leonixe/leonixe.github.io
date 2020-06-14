webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Loading.jsx":
/*!********************************!*\
  !*** ./components/Loading.jsx ***!
  \********************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vivus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vivus */ "./node_modules/vivus/dist/vivus.js");
/* harmony import */ var vivus__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vivus__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "C:\\Users\\romai\\Documents\\GitHub\\test-feelity\\components\\Loading.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Loading = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Loading, _Component);

  var _super = _createSuper(Loading);

  function Loading(props, context) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Loading);

    _this = _super.call(this, props, context);
    _this.svg = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.svgFill = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.background = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.container = react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.animationLogo = null;
    _this.animationEnd = null;
    _this.handleVivusEnd = _this.handleVivusEnd.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.handleAnimationComplete = _this.handleAnimationComplete.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Loading, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        ref: this.container,
        className: "loading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }, __jsx("div", {
        ref: this.background,
        className: "loading-background",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }), __jsx("object", {
        ref: this.svg,
        className: "svg-logo",
        type: "image/svg+xml",
        data: "./feelity.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }), __jsx("object", {
        ref: this.svgFill,
        className: "svg-logo-fill",
        type: "image/svg+xml",
        data: "./feelity-fill.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.animationLogo = new vivus__WEBPACK_IMPORTED_MODULE_7___default.a(this.svg.current, {
        duration: 500
      }, this.handleVivusEnd);
    }
  }, {
    key: "handleVivusEnd",
    value: function handleVivusEnd() {
      this.animationEnd = new animejs__WEBPACK_IMPORTED_MODULE_8__["default"].timeline({
        duration: 300,
        easing: 'easeOutExpo'
      }).add({
        targets: this.svgFill.current,
        opacity: '1'
      }).add({
        targets: this.svg.current,
        opacity: '0'
      }).add({
        targets: this.container.current,
        height: '108px'
      }).add({
        targets: this.background.current,
        height: '233px',
        complete: this.handleAnimationComplete
      });
    }
  }, {
    key: "handleAnimationComplete",
    value: function handleAnimationComplete() {
      this.props.onEnd();
    }
  }]);

  return Loading;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcuanN4Il0sIm5hbWVzIjpbIkxvYWRpbmciLCJwcm9wcyIsImNvbnRleHQiLCJzdmciLCJSZWFjdCIsImNyZWF0ZVJlZiIsInN2Z0ZpbGwiLCJiYWNrZ3JvdW5kIiwiY29udGFpbmVyIiwiYW5pbWF0aW9uTG9nbyIsImFuaW1hdGlvbkVuZCIsImhhbmRsZVZpdnVzRW5kIiwiYmluZCIsImhhbmRsZUFuaW1hdGlvbkNvbXBsZXRlIiwiVml2dXMiLCJjdXJyZW50IiwiZHVyYXRpb24iLCJhbmltZSIsInRpbWVsaW5lIiwiZWFzaW5nIiwiYWRkIiwidGFyZ2V0cyIsIm9wYWNpdHkiLCJoZWlnaHQiLCJjb21wbGV0ZSIsIm9uRW5kIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxPQUFiO0FBQUE7O0FBQUE7O0FBRUksbUJBQWFDLEtBQWIsRUFBb0JDLE9BQXBCLEVBQTZCO0FBQUE7O0FBQUE7O0FBQ3pCLDhCQUFNRCxLQUFOLEVBQWFDLE9BQWI7QUFDQSxVQUFLQyxHQUFMLEdBQVdDLDRDQUFLLENBQUNDLFNBQU4sRUFBWDtBQUNBLFVBQUtDLE9BQUwsR0FBZUYsNENBQUssQ0FBQ0MsU0FBTixFQUFmO0FBQ0EsVUFBS0UsVUFBTCxHQUFrQkgsNENBQUssQ0FBQ0MsU0FBTixFQUFsQjtBQUNBLFVBQUtHLFNBQUwsR0FBaUJKLDRDQUFLLENBQUNDLFNBQU4sRUFBakI7QUFDQSxVQUFLSSxhQUFMLEdBQXFCLElBQXJCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNBLFVBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIseUdBQXRCO0FBQ0EsVUFBS0MsdUJBQUwsR0FBK0IsTUFBS0EsdUJBQUwsQ0FBNkJELElBQTdCLHlHQUEvQjtBQVR5QjtBQVc1Qjs7QUFiTDtBQUFBO0FBQUEsNkJBZWM7QUFDTixhQUNJO0FBQUssV0FBRyxFQUFFLEtBQUtKLFNBQWY7QUFBMEIsaUJBQVMsRUFBQyxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxXQUFHLEVBQUUsS0FBS0QsVUFBZjtBQUEyQixpQkFBUyxFQUFDLG9CQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFFSTtBQUFRLFdBQUcsRUFBRSxLQUFLSixHQUFsQjtBQUF1QixpQkFBUyxFQUFDLFVBQWpDO0FBQTRDLFlBQUksRUFBQyxlQUFqRDtBQUFpRSxZQUFJLEVBQUMsZUFBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLEVBR0k7QUFBUSxXQUFHLEVBQUUsS0FBS0csT0FBbEI7QUFBMkIsaUJBQVMsRUFBQyxlQUFyQztBQUFxRCxZQUFJLEVBQUMsZUFBMUQ7QUFBMEUsWUFBSSxFQUFDLG9CQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEosQ0FESjtBQU9IO0FBdkJMO0FBQUE7QUFBQSx3Q0F5QnlCO0FBQ2pCLFdBQUtHLGFBQUwsR0FBcUIsSUFBSUssNENBQUosQ0FBVSxLQUFLWCxHQUFMLENBQVNZLE9BQW5CLEVBQTJCO0FBQUNDLGdCQUFRLEVBQUU7QUFBWCxPQUEzQixFQUE0QyxLQUFLTCxjQUFqRCxDQUFyQjtBQUNIO0FBM0JMO0FBQUE7QUFBQSxxQ0E2QnNCO0FBQ2QsV0FBS0QsWUFBTCxHQUFvQixJQUFJTywrQ0FBSyxDQUFDQyxRQUFWLENBQW9CO0FBQ3BDRixnQkFBUSxFQUFFLEdBRDBCO0FBRXBDRyxjQUFNLEVBQUU7QUFGNEIsT0FBcEIsRUFHakJDLEdBSGlCLENBR2I7QUFDSEMsZUFBTyxFQUFFLEtBQUtmLE9BQUwsQ0FBYVMsT0FEbkI7QUFFSE8sZUFBTyxFQUFFO0FBRk4sT0FIYSxFQU1qQkYsR0FOaUIsQ0FNYjtBQUNIQyxlQUFPLEVBQUUsS0FBS2xCLEdBQUwsQ0FBU1ksT0FEZjtBQUVITyxlQUFPLEVBQUU7QUFGTixPQU5hLEVBU2pCRixHQVRpQixDQVNiO0FBQ0hDLGVBQU8sRUFBRSxLQUFLYixTQUFMLENBQWVPLE9BRHJCO0FBRUhRLGNBQU0sRUFBRTtBQUZMLE9BVGEsRUFZakJILEdBWmlCLENBWWI7QUFDSEMsZUFBTyxFQUFHLEtBQUtkLFVBQUwsQ0FBZ0JRLE9BRHZCO0FBRUhRLGNBQU0sRUFBRSxPQUZMO0FBR0hDLGdCQUFRLEVBQUUsS0FBS1g7QUFIWixPQVphLENBQXBCO0FBa0JIO0FBaERMO0FBQUE7QUFBQSw4Q0FrRCtCO0FBQ3ZCLFdBQUtaLEtBQUwsQ0FBV3dCLEtBQVg7QUFDSDtBQXBETDs7QUFBQTtBQUFBLEVBQTZCQywrQ0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjRmYmIxNThmOWY5MzkwYzFiZDQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgVml2dXMgZnJvbSAndml2dXMnXHJcbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMsIGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dClcclxuICAgICAgICB0aGlzLnN2ZyA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgICAgICAgdGhpcy5zdmdGaWxsID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkxvZ28gPSBudWxsXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25FbmQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5oYW5kbGVWaXZ1c0VuZCA9IHRoaXMuaGFuZGxlVml2dXNFbmQuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uQ29tcGxldGUgPSB0aGlzLmhhbmRsZUFuaW1hdGlvbkNvbXBsZXRlLmJpbmQodGhpcylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLmNvbnRhaW5lcn0gY2xhc3NOYW1lPSdsb2FkaW5nJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXt0aGlzLmJhY2tncm91bmR9IGNsYXNzTmFtZT0nbG9hZGluZy1iYWNrZ3JvdW5kJz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxvYmplY3QgcmVmPXt0aGlzLnN2Z30gY2xhc3NOYW1lPSdzdmctbG9nbycgdHlwZT0naW1hZ2Uvc3ZnK3htbCcgZGF0YT0nLi9mZWVsaXR5LnN2Zyc+PC9vYmplY3Q+XHJcbiAgICAgICAgICAgICAgICA8b2JqZWN0IHJlZj17dGhpcy5zdmdGaWxsfSBjbGFzc05hbWU9J3N2Zy1sb2dvLWZpbGwnIHR5cGU9J2ltYWdlL3N2Zyt4bWwnIGRhdGE9Jy4vZmVlbGl0eS1maWxsLnN2Zyc+PC9vYmplY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25Mb2dvID0gbmV3IFZpdnVzKHRoaXMuc3ZnLmN1cnJlbnQse2R1cmF0aW9uIDo1MDB9LCB0aGlzLmhhbmRsZVZpdnVzRW5kKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVZpdnVzRW5kICgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkVuZCA9IG5ldyBhbmltZS50aW1lbGluZSAoe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxyXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbydcclxuICAgICAgICB9KS5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnN2Z0ZpbGwuY3VycmVudCxcclxuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxyXG4gICAgICAgIH0pLmFkZCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuc3ZnLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICcwJyxcclxuICAgICAgICB9KS5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmNvbnRhaW5lci5jdXJyZW50LFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDhweCcsXHJcbiAgICAgICAgfSkuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogIHRoaXMuYmFja2dyb3VuZC5jdXJyZW50LFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcyMzNweCcsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlIDp0aGlzLmhhbmRsZUFuaW1hdGlvbkNvbXBsZXRlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQW5pbWF0aW9uQ29tcGxldGUgKCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25FbmQoKVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=