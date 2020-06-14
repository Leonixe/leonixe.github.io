webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Swipper.jsx":
/*!********************************!*\
  !*** ./components/Swipper.jsx ***!
  \********************************/
/*! exports provided: Swipper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swipper", function() { return Swipper; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nuka-carousel */ "./node_modules/nuka-carousel/es/index.js");





var _jsxFileName = "C:\\Users\\romai\\Documents\\GitHub\\test-feelity\\components\\Swipper.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // function next (state, props) {
//     if (state.index >= React.Children.count(props.children)-1) {
//         return state
//     }
//     return {
//         index: state.index + 1
//     }
// }
// function previous (state, props) {
//     if (state.index > 0) {
//         return {
//             index: state.index - 1
//         }
//     }
//     return state
// }

var Swipper = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Swipper, _Component);

  var _super = _createSuper(Swipper);

  function Swipper(properties, context) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Swipper);

    return _super.call(this, properties, context); // this.state = {
    //     index: 0
    // }
    // this.handleSwipe = this.handleSwipe.bind(this)
    // this.handleNext = this.handleNext.bind(this)
    // this.handlePrevious = this.handlePrevious.bind(this)
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Swipper, [{
    key: "render",
    value: function render() {
      return __jsx(nuka_carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        cellSpacing: 23,
        cellAlign: "center",
        slideToShow: 2,
        slideWidth: "299px",
        defaultControlsConfig: {
          containerClassName: 'controls-container'
        },
        edgeEasing: "easeCircleOut",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.map(this.props.children, this.renderItem));
    }
  }, {
    key: "renderItem",
    value: function renderItem(item) {
      return item;
    } // handleSwipe (event) {
    //     if (event.deltaX < 0) {
    //         this.handleNext()
    //     } else {
    //         this.handlePrevious()
    //     }
    // }
    // handleNext () {
    //     this.setState(next)
    // }
    // handlePrevious () {
    //     this.setState(previous)
    // }

  }]);

  return Swipper;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N3aXBwZXIuanN4Il0sIm5hbWVzIjpbIlN3aXBwZXIiLCJwcm9wZXJ0aWVzIiwiY29udGV4dCIsImNvbnRhaW5lckNsYXNzTmFtZSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJwcm9wcyIsImNoaWxkcmVuIiwicmVuZGVySXRlbSIsIml0ZW0iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxJQUFNQSxPQUFiO0FBQUE7O0FBQUE7O0FBQ0ksbUJBQWFDLFVBQWIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQUE7O0FBQUEsNkJBQ3hCRCxVQUR3QixFQUNaQyxPQURZLEdBRTlCO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNIOztBQVZMO0FBQUE7QUFBQSw2QkFZYztBQUNOLGFBQ0ksTUFBQyxxREFBRDtBQUNJLG1CQUFXLEVBQUUsRUFEakI7QUFFSSxpQkFBUyxFQUFDLFFBRmQ7QUFHSSxtQkFBVyxFQUFFLENBSGpCO0FBSUksa0JBQVUsRUFBQyxPQUpmO0FBS0ksNkJBQXFCLEVBQUU7QUFDbkJDLDRCQUFrQixFQUFDO0FBREEsU0FMM0I7QUFRSSxrQkFBVSxFQUFDLGVBUmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVLQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsS0FBS0MsS0FBTCxDQUFXQyxRQUE5QixFQUF3QyxLQUFLQyxVQUE3QyxDQVZMLENBREo7QUFjSDtBQTNCTDtBQUFBO0FBQUEsK0JBNkJnQkMsSUE3QmhCLEVBNkJzQjtBQUNkLGFBQ0lBLElBREo7QUFHSCxLQWpDTCxDQW1DSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFqREo7O0FBQUE7QUFBQSxFQUE2QkMsK0NBQTdCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kOGFiODcwYjAwNzY0OWI5Zjg5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCc7XHJcblxyXG4vLyBmdW5jdGlvbiBuZXh0IChzdGF0ZSwgcHJvcHMpIHtcclxuLy8gICAgIGlmIChzdGF0ZS5pbmRleCA+PSBSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbiktMSkge1xyXG4vLyAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBpbmRleDogc3RhdGUuaW5kZXggKyAxXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIHByZXZpb3VzIChzdGF0ZSwgcHJvcHMpIHtcclxuLy8gICAgIGlmIChzdGF0ZS5pbmRleCA+IDApIHtcclxuLy8gICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICBpbmRleDogc3RhdGUuaW5kZXggLSAxXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHN0YXRlXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBTd2lwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yIChwcm9wZXJ0aWVzLCBjb250ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcGVydGllcywgY29udGV4dClcclxuICAgICAgICAvLyB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIC8vICAgICBpbmRleDogMFxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVTd2lwZSA9IHRoaXMuaGFuZGxlU3dpcGUuYmluZCh0aGlzKVxyXG4gICAgICAgIC8vIHRoaXMuaGFuZGxlTmV4dCA9IHRoaXMuaGFuZGxlTmV4dC5iaW5kKHRoaXMpXHJcbiAgICAgICAgLy8gdGhpcy5oYW5kbGVQcmV2aW91cyA9IHRoaXMuaGFuZGxlUHJldmlvdXMuYmluZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPENhcm91c2VsIFxyXG4gICAgICAgICAgICAgICAgY2VsbFNwYWNpbmc9ezIzfVxyXG4gICAgICAgICAgICAgICAgY2VsbEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICBzbGlkZVRvU2hvdz17Mn1cclxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg9JzI5OXB4J1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdENvbnRyb2xzQ29uZmlnPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lOidjb250cm9scy1jb250YWluZXInXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgZWRnZUVhc2luZz0nZWFzZUNpcmNsZU91dCdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCB0aGlzLnJlbmRlckl0ZW0pfVxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJdGVtIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgaXRlbVxyXG4gICAgICAgICkgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGFuZGxlU3dpcGUgKGV2ZW50KSB7XHJcbiAgICAvLyAgICAgaWYgKGV2ZW50LmRlbHRhWCA8IDApIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5oYW5kbGVOZXh0KClcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmhhbmRsZVByZXZpb3VzKClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaGFuZGxlTmV4dCAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZShuZXh0KVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGhhbmRsZVByZXZpb3VzICgpIHtcclxuICAgIC8vICAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzKVxyXG4gICAgLy8gfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9