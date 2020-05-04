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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      return /*#__PURE__*/_reaction.React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsInByZXZpb3VzU2libGluZyIsInNpemVhYmxlRGl2Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlVXBIYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJwcm9wcyIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwic3RhcnREcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJkcmFnZ2luZyIsImN1cnNvciIsInJlc2V0IiwiZXZlbnQiLCJtb3VzZUxlZnQiLCJwYWdlWCIsInJlbGF0aXZlTW91c2VMZWZ0IiwicHJldmlvdXNNb3VzZUxlZnQiLCJzaXplYWJsZURpdldpZHRoIiwicHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsImdldFdpZHRoIiwiY29sdW1uUmVzaXplIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFMsR0FBY0MsZSxDQUFkRCxTOztJQUVGRSxtQjs7Ozs7Ozs7Ozs7Ozt3Q0FZZ0I7QUFDbEIsVUFBTUMsZUFBZSxHQUFHLGlDQUFtQixJQUFuQixDQUF4QjtBQUFBLFVBQ01DLFdBQVcsR0FBR0QsZUFEcEIsQ0FEa0IsQ0FFb0I7O0FBRXRDLFdBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBRUFDLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsS0FBS0MsY0FBeEM7QUFFQUYsTUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxD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Li4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuaW1wb3J0IHsgZ2V0UHJldmlvdXNTaWJsaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zaWJsaW5nXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgbW91c2VVcEhhbmRsZXIsXG4gICAgbW91c2VNb3ZlSGFuZGxlcixcbiAgICBtb3VzZURvd25IYW5kbGVyLFxuICAgIG1vdXNlT3ZlckhhbmRsZXIsXG4gICAgbW91c2VPdXRIYW5kbGVyLFxuICAgIHN0YXJ0RHJhZ2dpbmcsXG4gICAgc3RvcERyYWdnaW5nLFxuICAgIGlzRHJhZ2dpbmdcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBnZXRQcmV2aW91c1NpYmxpbmcodGhpcyksXG4gICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIHRoaXMuc2l6ZWFibGVEaXYgPSBzaXplYWJsZURpdjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXBIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2VVcEhhbmRsZXIpO1xuXG4gICAgZGVsZXRlIHRoaXMuc2l6ZWFibGVEaXY7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2ZXJ0aWNhbC1zcGxpdHRlcmB9XG4gICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRG93bkhhbmRsZXJ9XG4gICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLm1vdXNlT3ZlckhhbmRsZXJ9XG4gICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMubW91c2VPdXRIYW5kbGVyfVxuICAgICAgLz5cblxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZlcnRpY2FsU3BsaXR0ZXJEaXYpYFxuXG4gIHdpZHRoOiAxcmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcblxuYDtcblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoKSB7XG4gIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgaWYgKGRyYWdnaW5nKSB7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgfVxuXG4gIGN1cnNvci5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgaWYgKGRyYWdnaW5nKSB7XG4gICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMucHJldmlvdXNNb3VzZUxlZnQsXG4gICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoICsgcmVsYXRpdmVNb3VzZUxlZnQsXG4gICAgICAgICAgd2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAvLy9cblxuICAgIHRoaXMuc2l6ZWFibGVEaXYuc2V0V2lkdGgod2lkdGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5zaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgICAvLy9cblxuICAgIHRoaXMucHJldmlvdXNNb3VzZUxlZnQgPSBwcmV2aW91c01vdXNlTGVmdDtcblxuICAgIHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuXG4gICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gIH1cblxuICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlT3ZlckhhbmRsZXIoKSB7XG4gIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbn1cblxuZnVuY3Rpb24gbW91c2VPdXRIYW5kbGVyKCkge1xuICBjdXJzb3IucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gc3RhcnREcmFnZ2luZygpIHtcbiAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xufVxuXG5mdW5jdGlvbiBzdG9wRHJhZ2dpbmcoKSB7XG4gIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbn1cblxuZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgcmV0dXJuIGRyYWdnaW5nO1xufVxuIl19