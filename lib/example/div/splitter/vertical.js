"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../../index"));

var _reaction = require("reaction");

var _cursor = _interopRequireDefault(require("../../cursor"));

var _sibling = require("../../../utilities/sibling");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 1rem;\n  flex-shrink: 0;\n  \n  background-color: lightgrey;\n\n"]);

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

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = _reaction.React.Component;

var VerticalSplitterDiv = /*#__PURE__*/function (_Component) {
  _inherits(VerticalSplitterDiv, _Component);

  var _super = _createSuper(VerticalSplitterDiv);

  function VerticalSplitterDiv() {
    _classCallCheck(this, VerticalSplitterDiv);

    return _super.apply(this, arguments);
  }

  _createClass(VerticalSplitterDiv, [{
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
      return _reaction.React.createElement("div", {
        className: "".concat(className, " vertical-splitter"),
        onMouseDown: this.mouseDownHandler,
        onMouseOver: this.mouseOverHandler,
        onMouseOut: this.mouseOutHandler
      });
    }
  }]);

  return VerticalSplitterDiv;
}(Component);

_defineProperty(VerticalSplitterDiv, "mixins", [mouseUpHandler, mouseMoveHandler, mouseDownHandler, mouseOverHandler, mouseOutHandler, startDragging, stopDragging, isDragging]);

var _default = (0, _index["default"])(VerticalSplitterDiv)(_templateObject());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsInByZXZpb3VzU2libGluZyIsInNpemVhYmxlRGl2Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJwcm9wcyIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwic3RhcnREcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJkcmFnZ2luZyIsImN1cnNvciIsInJlc2V0IiwiZXZlbnQiLCJtb3VzZUxlZnQiLCJwYWdlWCIsInJlbGF0aXZlTW91c2VMZWZ0IiwicHJldmlvdXNNb3VzZUxlZnQiLCJzaXplYWJsZURpdldpZHRoIiwicHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsImdldFdpZHRoIiwiY29sdW1uUmVzaXplIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUyxHQUFjQyxlLENBQWRELFM7O0lBRUZFLG1COzs7Ozs7Ozs7Ozs7O3dDQVlnQjtBQUNsQixVQUFNQyxlQUFlLEdBQUcsaUNBQW1CLElBQW5CLENBQXhCO0FBQUEsVUFDTUMsV0FBVyxHQUFHRCxlQURwQixDQURrQixDQUVvQjs7QUFFdEMsV0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFFQUMsTUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxLQUFLQyxjQUF4QztBQUVB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dCB3aXRoU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IGN1cnNvciBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmltcG9ydCB7IGdldFByZXZpb3VzU2libGluZyB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvc2libGluZ1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXJEaXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIG1vdXNlVXBIYW5kbGVyLFxuICAgIG1vdXNlTW92ZUhhbmRsZXIsXG4gICAgbW91c2VEb3duSGFuZGxlcixcbiAgICBtb3VzZU92ZXJIYW5kbGVyLFxuICAgIG1vdXNlT3V0SGFuZGxlcixcbiAgICBzdGFydERyYWdnaW5nLFxuICAgIHN0b3BEcmFnZ2luZyxcbiAgICBpc0RyYWdnaW5nXG4gIF07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcHJldmlvdXNTaWJsaW5nID0gZ2V0UHJldmlvdXNTaWJsaW5nKHRoaXMpLFxuICAgICAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNpemVhYmxlRGl2ID0gc2l6ZWFibGVEaXY7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZVVwSGFuZGxlcik7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZU1vdmVIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGRlbGV0ZSB0aGlzLnNpemVhYmxlRGl2O1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmVydGljYWwtc3BsaXR0ZXJgfVxuICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5tb3VzZURvd25IYW5kbGVyfVxuICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5tb3VzZU92ZXJIYW5kbGVyfVxuICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLm1vdXNlT3V0SGFuZGxlcn1cbiAgICAgIC8+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyRGl2KWBcblxuICB3aWR0aDogMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG5cbmA7XG5cbmZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gIGlmIChkcmFnZ2luZykge1xuICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gIH1cblxuICBjdXJzb3IucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihldmVudCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gIGlmIChkcmFnZ2luZykge1xuICAgIGNvbnN0IG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAgLy8vXG4gICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLnByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCArIHJlbGF0aXZlTW91c2VMZWZ0LFxuICAgICAgICAgIHdpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgLy8vXG5cbiAgICB0aGlzLnNpemVhYmxlRGl2LnNldFdpZHRoKHdpZHRoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtb3VzZURvd25IYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgaWYgKCFkcmFnZ2luZykge1xuICAgIGNvbnN0IG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAgLy8vXG4gICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMuc2l6ZWFibGVEaXYuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IG1vdXNlTGVmdCwgIC8vL1xuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7ICAgLy8vXG5cbiAgICB0aGlzLnByZXZpb3VzTW91c2VMZWZ0ID0gcHJldmlvdXNNb3VzZUxlZnQ7XG5cbiAgICB0aGlzLnByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aDtcblxuICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICB9XG5cbiAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xufVxuXG5mdW5jdGlvbiBtb3VzZU92ZXJIYW5kbGVyKCkge1xuICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlT3V0SGFuZGxlcigpIHtcbiAgY3Vyc29yLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbn1cblxuZnVuY3Rpb24gc3RvcERyYWdnaW5nKCkge1xuICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG59XG5cbmZ1bmN0aW9uIGlzRHJhZ2dpbmcoKSB7XG4gIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gIHJldHVybiBkcmFnZ2luZztcbn1cbiJdfQ==