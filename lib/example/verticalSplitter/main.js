"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../index"));

var _cursor = _interopRequireDefault(require("../cursor"));

var _verticalSplitter = _interopRequireDefault(require("../verticalSplitter"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 8px;\n  min-width: 8px;\n  background-color: lightgray;\n\n"]);

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

var MainVerticalSplitter = /*#__PURE__*/function (_VerticalSplitter) {
  _inherits(MainVerticalSplitter, _VerticalSplitter);

  var _super = _createSuper(MainVerticalSplitter);

  function MainVerticalSplitter() {
    _classCallCheck(this, MainVerticalSplitter);

    return _super.apply(this, arguments);
  }

  _createClass(MainVerticalSplitter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onMouseUp(this.mouseUpHandler);
      this.onMouseMove(this.mouseMoveHandler);
      this.onMouseDown(this.mouseDownHandler);
      this.onMouseOver(this.mouseOverHandler);
      this.onMouseOut(this.mouseOutHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "render",
    value: function render(update) {
      var _this = this;

      var className = this.props.className;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(className, " main vertical-splitter"),
        ref: function ref(domElement) {
          _this.domElement = domElement;
        }
      });
    }
  }]);

  return MainVerticalSplitter;
}(_verticalSplitter["default"]);

_defineProperty(MainVerticalSplitter, "mixins", [startDraggingHandler, stopDraggingHandler, keyDownHandler, mouseUpHandler, mouseMoveHandler, mouseDownHandler, mouseOverHandler, mouseOutHandler]);

var _default = (0, _index["default"])(MainVerticalSplitter)(_templateObject());

exports["default"] = _default;

function startDraggingHandler() {}

function stopDraggingHandler() {}

function keyDownHandler(event) {
  var keyCode = event.keyCode;

  if (keyCode === _constants.ESCAPE_KEY_CODE) {
    var dragging = this.isDragging();

    if (dragging) {
      this.stopDragging();
    }
  }
}

function mouseUpHandler() {
  var dragging = this.isDragging();

  if (dragging) {
    this.stopDragging();
  }

  _cursor["default"].reset();
}

function mouseMoveHandler(mouseTop, mouseLeft) {
  var dragging = this.isDragging();

  if (dragging) {
    var direction = this.getDirection(),
        dragHandler = this.getDragHandler(),
        sizeableElement = this.getSizeableElement(),
        previousMouseLeft = this.getPreviousMouseLeft(),
        previousSizeableElementWidth = this.getPreviousSizeableElementWidth(),
        relativeMouseLeft = mouseLeft - previousMouseLeft;
    var sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft;
    var width = sizeableElementWidth; ///

    sizeableElement.setWidth(width);
    sizeableElementWidth = sizeableElement.getWidth(); ///

    dragHandler(sizeableElementWidth);
  }
}

function mouseDownHandler(mouseTop, mouseLeft) {
  var previousMouseLeft = mouseLeft,
      ///
  dragging = this.isDragging(),
      sizeableElement = this.getSizeableElement(),
      sizeableElementWidth = sizeableElement.getWidth(),
      previousSizeableElementWidth = sizeableElementWidth; ///

  this.setPreviousMouseLeft(previousMouseLeft);
  this.setPreviousSizeableElementWidth(previousSizeableElementWidth);

  if (!dragging) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJvbk1vdXNlVXAiLCJtb3VzZVVwSGFuZGxlciIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVySGFuZGxlciIsIm9uTW91c2VPdXQiLCJtb3VzZU91dEhhbmRsZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJWZXJ0aWNhbFNwbGl0dGVyIiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJldmVudCIsImtleUNvZGUiLCJFU0NBUEVfS0VZX0NPREUiLCJkcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJjdXJzb3IiLCJyZXNldCIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZHJhZ0hhbmRsZXIiLCJnZXREcmFnSGFuZGxlciIsInNpemVhYmxlRWxlbWVudCIsImdldFNpemVhYmxlRWxlbWVudCIsInByZXZpb3VzTW91c2VMZWZ0IiwiZ2V0UHJldmlvdXNNb3VzZUxlZnQiLCJwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIiwiZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCIsInJlbGF0aXZlTW91c2VMZWZ0Iiwic2l6ZWFibGVFbGVtZW50V2lkdGgiLCJ3aWR0aCIsInNldFdpZHRoIiwiZ2V0V2lkdGgiLCJzZXRQcmV2aW91c01vdXNlTGVmdCIsInNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgiLCJzdGFydERyYWdnaW5nIiwiY29sdW1uUmVzaXplIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QixFQUg3QjtBQUFBLE1BSU1OLDRCQUE0QixHQUFHRyxvQkFKckMsQ0FENkMsQ0FLZTs7QUFFNUQsT0FBS0ksb0JBQUwsQ0FBMEJULGlCQUExQjtBQUVBLE9BQUtVLCtCQUFMLENBQXFDUiw0QkFBckM7O0FBRUEsTUFBSSxDQUFDZixRQUFMLEVBQWU7QUFDYixTQUFLd0IsYUFBTDtBQUNEOztBQUVEckIscUJBQU9zQixZQUFQO0FBQ0Q7O0FBRUQsU0FBU3ZDLGdCQUFULEdBQTRCO0FBQzFCaUIscUJBQU9zQixZQUFQO0FBQ0Q7O0FBRUQsU0FBU3JDLGVBQVQsR0FBMkI7QUFDekJlLHFCQUFPQyxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi9jdXJzb3JcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyIGZyb20gXCIuLi92ZXJ0aWNhbFNwbGl0dGVyXCI7XG5cbmltcG9ydCB7IEVTQ0FQRV9LRVlfQ09ERSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgTWFpblZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBWZXJ0aWNhbFNwbGl0dGVyIHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBzdGFydERyYWdnaW5nSGFuZGxlcixcbiAgICBzdG9wRHJhZ2dpbmdIYW5kbGVyLFxuICAgIGtleURvd25IYW5kbGVyLFxuICAgIG1vdXNlVXBIYW5kbGVyLFxuICAgIG1vdXNlTW92ZUhhbmRsZXIsXG4gICAgbW91c2VEb3duSGFuZGxlcixcbiAgICBtb3VzZU92ZXJIYW5kbGVyLFxuICAgIG1vdXNlT3V0SGFuZGxlcixcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IG1haW4gdmVydGljYWwtc3BsaXR0ZXJgfVxuICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFpblZlcnRpY2FsU3BsaXR0ZXIpYFxuXG4gIHdpZHRoOiA4cHg7XG4gIG1pbi13aWR0aDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG5cbmA7XG5cbmZ1bmN0aW9uIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyKCkge1xuXG59XG5cbmZ1bmN0aW9uIHN0b3BEcmFnZ2luZ0hhbmRsZXIoKSB7XG5cbn1cblxuZnVuY3Rpb24ga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoKSB7XG4gIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgaWYgKGRyYWdnaW5nKSB7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgfVxuXG4gIGN1cnNvci5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICBpZiAoZHJhZ2dpbmcpIHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpLFxuICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSB0aGlzLmdldFByZXZpb3VzTW91c2VMZWZ0KCksXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gcHJldmlvdXNNb3VzZUxlZnQ7XG5cbiAgICBsZXQgc2l6ZWFibGVFbGVtZW50V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZUxlZnQ7XG5cbiAgICBjb25zdCB3aWR0aCA9IHNpemVhYmxlRWxlbWVudFdpZHRoOyAvLy9cblxuICAgIHNpemVhYmxlRWxlbWVudC5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpOyAgLy8vXG5cbiAgICBkcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRXaWR0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCksXG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgIHNpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnRXaWR0aDsgIC8vL1xuXG4gIHRoaXMuc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpO1xuXG4gIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aChwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKTtcblxuICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gIH1cblxuICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlT3ZlckhhbmRsZXIoKSB7XG4gIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbn1cblxuZnVuY3Rpb24gbW91c2VPdXRIYW5kbGVyKCkge1xuICBjdXJzb3IucmVzZXQoKTtcbn1cbiJdfQ==