"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../index"));

var _reaction = require("reaction");

var _cursor = _interopRequireDefault(require("./cursor"));

var _sibling = require("../utilities/sibling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 0.5rem;\n  flex-shrink: 0;\n  background-color: lightgrey;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = _reaction.React.Component;

var VerticalSplitter = /*#__PURE__*/function (_Component) {
  _inherits(VerticalSplitter, _Component);

  var _super = _createSuper(VerticalSplitter);

  function VerticalSplitter() {
    _classCallCheck(this, VerticalSplitter);

    return _super.apply(this, arguments);
  }

  _createClass(VerticalSplitter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var previousSibling = (0, _sibling.getPreviousSibling)(this),
          sizeableDiv = previousSibling; ///

      this.sizeableDiv = sizeableDiv;
      window.addEventListener("mouseup", this.mouseUpHandler);
      window.addEventListener("mousemove", this.mouseMoveHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("mousemove", this.mouseMoveHandler);
      window.removeEventListener("mouseup", this.mouseUpHandler);
      delete this.sizeableDiv;
    }
  }, {
    key: "render",
    value: function render(update) {
      var className = this.props.className;
      return /*#__PURE__*/_reaction.React.createElement("div", {
        className: "".concat(className, " vertical-splitter"),
        onMouseDown: this.mouseDownHandler,
        onMouseOver: this.mouseOverHandler,
        onMouseOut: this.mouseOutHandler
      });
    }
  }]);

  return VerticalSplitter;
}(Component);

_defineProperty(VerticalSplitter, "mixins", [mouseUpHandler, mouseMoveHandler, mouseDownHandler, mouseOverHandler, mouseOutHandler, startDragging, stopDragging, isDragging]);

var _default = (0, _index["default"])(VerticalSplitter)(_templateObject());

exports["default"] = _default;

function mouseUpHandler() {
  var dragging = this.isDragging();

  if (dragging) {
    this.stopDragging();
  }

  _cursor["default"].reset();
}

function mouseMoveHandler(event) {
  var dragging = this.isDragging();

  if (dragging) {
    var mouseLeft = event.pageX,
        ///
    relativeMouseLeft = mouseLeft - this.previousMouseLeft,
        sizeableDivWidth = this.previousSizeableDivWidth + relativeMouseLeft,
        width = sizeableDivWidth; ///

    this.sizeableDiv.setWidth(width);
  }
}

function mouseDownHandler(event) {
  var dragging = this.isDragging();

  if (!dragging) {
    var mouseLeft = event.pageX,
        ///
    sizeableDivWidth = this.sizeableDiv.getWidth(),
        previousMouseLeft = mouseLeft,
        ///
    previousSizeableDivWidth = sizeableDivWidth; ///

    this.previousMouseLeft = previousMouseLeft;
    this.previousSizeableDivWidth = previousSizeableDivWidth;
    this.startDragging();
  }

  _cursor["default"].columnResize();
}

function mouseOverHandler() {
  _cursor["default"].columnResize();
}

function mouseOutHandler() {
  _cursor["default"].reset();
}

function startDragging() {
  this.addClass("dragging");
}

function stopDragging() {
  this.removeClass("dragging");
}

function isDragging() {
  var dragging = this.hasClass("dragging");
  return dragging;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsU3BsaXR0ZXIuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJWZXJ0aWNhbFNwbGl0dGVyIiwicHJldmlvdXNTaWJsaW5nIiwic2l6ZWFibGVEaXYiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsInByb3BzIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJtb3VzZU91dEhhbmRsZXIiLCJzdGFydERyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwiaXNEcmFnZ2luZyIsImRyYWdnaW5nIiwiY3Vyc29yIiwicmVzZXQiLCJldmVudCIsIm1vdXNlTGVmdCIsInBhZ2VYIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJwcmV2aW91c01vdXNlTGVmdCIsInNpemVhYmxlRGl2V2lkdGgiLCJwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJ3aWR0aCIsInNldFdpZHRoIiwiZ2V0V2lkdGgiLCJjb2x1bW5SZXNpemUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUyxHQUFjQyxlLENBQWRELFM7O0lBRUZFLGdCOzs7Ozs7Ozs7Ozs7O3dDQVlnQjtBQUNsQixVQUFNQyxlQUFlLEdBQUcsaUNBQW1CLElBQW5CLENBQXhCO0FBQUEsVUFDTUMsV0FBVyxHQUFHRCxlQURwQixDQURrQixDQUVvQjs7QUFFdEMsV0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFFQUMsTUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLQyxjQUF4QztBQUVBRixNQUFBQSxNQUFNLENBQUNDLGdC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Li9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBjdXJzb3IgZnJvbSBcIi4vY3Vyc29yXCI7XG5cbmltcG9ydCB7IGdldFByZXZpb3VzU2libGluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc2libGluZ1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIG1vdXNlVXBIYW5kbGVyLFxuICAgIG1vdXNlTW92ZUhhbmRsZXIsXG4gICAgbW91c2VEb3duSGFuZGxlcixcbiAgICBtb3VzZU92ZXJIYW5kbGVyLFxuICAgIG1vdXNlT3V0SGFuZGxlcixcbiAgICBzdGFydERyYWdnaW5nLFxuICAgIHN0b3BEcmFnZ2luZyxcbiAgICBpc0RyYWdnaW5nXG4gIF07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcHJldmlvdXNTaWJsaW5nID0gZ2V0UHJldmlvdXNTaWJsaW5nKHRoaXMpLFxuICAgICAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNpemVhYmxlRGl2ID0gc2l6ZWFibGVEaXY7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZVVwSGFuZGxlcik7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGRlbGV0ZSB0aGlzLnNpemVhYmxlRGl2O1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmVydGljYWwtc3BsaXR0ZXJgfVxuICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5tb3VzZURvd25IYW5kbGVyfVxuICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5tb3VzZU92ZXJIYW5kbGVyfVxuICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLm1vdXNlT3V0SGFuZGxlcn1cbiAgICAgIC8+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyKWBcblxuICB3aWR0aDogMC41cmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuXG5gO1xuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcigpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICBpZiAoZHJhZ2dpbmcpIHtcbiAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICB9XG5cbiAgY3Vyc29yLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICBpZiAoZHJhZ2dpbmcpIHtcbiAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5wcmV2aW91c01vdXNlTGVmdCxcbiAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggKyByZWxhdGl2ZU1vdXNlTGVmdCxcbiAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgdGhpcy5zaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gIGlmICghZHJhZ2dpbmcpIHtcbiAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnNpemVhYmxlRGl2LmdldFdpZHRoKCksXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgIC8vL1xuXG4gICAgdGhpcy5wcmV2aW91c01vdXNlTGVmdCA9IHByZXZpb3VzTW91c2VMZWZ0O1xuXG4gICAgdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgfVxuXG4gIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbn1cblxuZnVuY3Rpb24gbW91c2VPdmVySGFuZGxlcigpIHtcbiAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xufVxuXG5mdW5jdGlvbiBtb3VzZU91dEhhbmRsZXIoKSB7XG4gIGN1cnNvci5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzdGFydERyYWdnaW5nKCkge1xuICB0aGlzLmFkZENsYXNzKFwiZHJhZ2dpbmdcIik7XG59XG5cbmZ1bmN0aW9uIHN0b3BEcmFnZ2luZygpIHtcbiAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xufVxuXG5mdW5jdGlvbiBpc0RyYWdnaW5nKCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICByZXR1cm4gZHJhZ2dpbmc7XG59XG4iXX0=