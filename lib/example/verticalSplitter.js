"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../index"));

var _reaction = require("reaction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 0.8rem;\n  flex-shrink: 0;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

  return VerticalSplitter;
}(Component);

_defineProperty(VerticalSplitter, "mixins", [isDragging, startDragging, stopDragging, onKeyDown, onMouseUp, onMouseDown, onMouseMove, onMouseOver, onMouseOut]);

var _default = (0, _index["default"])(VerticalSplitter)(_templateObject());

exports["default"] = _default;

function isDragging() {
  var dragging = this.hasClass('dragging');
  return dragging;
}

function startDragging() {
  this.onKeyDown(this.keyDownHandler, this);
  this.addClass('dragging');
  this.startDraggingHandler();
}

function stopDragging() {
  this.offKeyDown(this.keyDownHandler, this);
  this.removeClass('dragging');
  this.stopDraggingHandler();
}

function onKeyDown(keyDownHandler) {
  window.addEventListener("keydown", keyDownHandler);
}

function onMouseUp(mouseUpHandler) {
  window.addEventListener('mouseup blur', mouseUpHandler);
}

function onMouseDown(mouseDownHandler) {
  window.addEventListener("mousedown", mouseDownHandler);
}

function onMouseMove(mouseMoveHandler) {
  window.addEventListener("mousemove", mouseMoveHandler);
}

function onMouseOver(mouseOverHandler) {
  this.domElement.addEventListener("mouseover", mouseOverHandler);
}

function onMouseOut(mouseOutHandler) {
  this.domElement.addEventListener("mouseout", mouseOutHandler);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsU3BsaXR0ZXIuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJWZXJ0aWNhbFNwbGl0dGVyIiwiaXNEcmFnZ2luZyIsInN0YXJ0RHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJvbktleURvd24iLCJvbk1vdXNlVXAiLCJvbk1vdXNlRG93biIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0IiwiZHJhZ2dpbmciLCJoYXNDbGFzcyIsImtleURvd25IYW5kbGVyIiwiYWRkQ2xhc3MiLCJzdGFydERyYWdnaW5nSGFuZGxlciIsIm9mZktleURvd24iLCJyZW1vdmVDbGFzcyIsInN0b3BEcmFnZ2luZ0hhbmRsZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJkb21FbGVtZW50IiwibW91c2VPdXRIYW5kbGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUyxHQUFjQyxlLENBQWRELFM7O0lBRUZFLGdCOzs7Ozs7Ozs7Ozs7RUFBeUJGLFM7O2dCQUF6QkUsZ0IsWUFDWSxDQUNkQyxVQURjLEVBRWRDLGFBRmMsRUFHZEMsWUFIYyxFQUlkQyxTQUpjLEVBS2RDLFNBTGMsRUFNZEMsV0FOYyxFQU9kQyxXQVBjLEVBUWRDLFdBUmMsRUFTZEMsVUFUYyxDOztlQWFILHVCQUFVVCxnQkFBVixDOzs7O0FBT2YsU0FBU0MsVUFBVCxHQUFzQjtBQUNwQixNQUFNUyxRQUFRLEdBQUcsS0FBS0MsUUFBTCxDQUFjLFVBQWQsQ0FBakI7QUFFQSxTQUFPRCxRQUFQO0FBQ0Q7O0FBRUQsU0FBU1IsYUFBVCxHQUF5QjtBQUN2QixPQUFLRSxTQUFMLENBQWUsS0FBS1EsY0FBcEIsRUFBb0MsSUFBcEM7QUFFQSxPQUFLQyxRQUFMLENBQWMsVUFBZDtBQUVBLE9BQUtDLG9CQUFMO0FBQ0Q7O0FBRUQsU0FBU1gsWUFBVCxHQUF3QjtBQUN0QixPQUFLWSxVQUFMLENBQWdCLEtBQUtILGNBQXJCLEVBQXFDLElBQXJDO0FBRUEsT0FBS0ksV0FBTCxDQUFpQixVQUFqQjtBQUVBLE9BQUtDLG1CQUFMO0FBQ0Q7O0FBRUQsU0FBU2IsU0FBVCxDQUFtQlEsY0FBbkIsRUFBbUM7QUFDakNNLEVBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUNQLGNBQW5DO0FBQ0Q7O0FBRUQsU0FBU1AsU0FBVCxDQUFtQmUsY0FBbkIsRUFBbUM7QUFDakNGLEVBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsY0FBeEIsRUFBd0NDLGNBQXhDO0FBQ0Q7O0FBRUQsU0FBU2QsV0FBVCxDQUFxQmUsZ0JBQXJCLEVBQXVDO0FBQ3JDSCxFQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDRSxnQkFBckM7QUFDRDs7QUFFRCxTQUFTZCxXQUFULENBQXFCZSxnQkFBckIsRUFBdUM7QUFDckNKLEVBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNHLGdCQUFyQztBQUNEOztBQUVELFNBQVNkLFdBQVQsQ0FBcUJlLGdCQUFyQixFQUF1QztBQUNyQyxPQUFLQyxVQUFMLENBQWdCTCxnQkFBaEIsQ0FBaUMsV0FBakMsRUFBOENJLGdCQUE5QztBQUNEOztBQUVELFNBQVNkLFVBQVQsQ0FBb0JnQixlQUFwQixFQUFxQztBQUNuQyxPQUFLRCxVQUFMLENBQWdCTCxnQkFBaEIsQ0FBaUMsVUFBakMsRUFBNkNNLGVBQTdDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIGlzRHJhZ2dpbmcsXG4gICAgc3RhcnREcmFnZ2luZyxcbiAgICBzdG9wRHJhZ2dpbmcsXG4gICAgb25LZXlEb3duLFxuICAgIG9uTW91c2VVcCxcbiAgICBvbk1vdXNlRG93bixcbiAgICBvbk1vdXNlTW92ZSxcbiAgICBvbk1vdXNlT3ZlcixcbiAgICBvbk1vdXNlT3V0XG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyKWBcblxuICB3aWR0aDogMC44cmVtO1xuICBmbGV4LXNocmluazogMDtcblxuYDtcblxuZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKCdkcmFnZ2luZycpO1xuXG4gIHJldHVybiBkcmFnZ2luZztcbn1cblxuZnVuY3Rpb24gc3RhcnREcmFnZ2luZygpIHtcbiAgdGhpcy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG5cbiAgdGhpcy5hZGRDbGFzcygnZHJhZ2dpbmcnKTtcblxuICB0aGlzLnN0YXJ0RHJhZ2dpbmdIYW5kbGVyKCk7XG59XG5cbmZ1bmN0aW9uIHN0b3BEcmFnZ2luZygpIHtcbiAgdGhpcy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuXG4gIHRoaXMucmVtb3ZlQ2xhc3MoJ2RyYWdnaW5nJyk7XG5cbiAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyKCk7XG59XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihrZXlEb3duSGFuZGxlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvbk1vdXNlVXAobW91c2VVcEhhbmRsZXIpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAgYmx1cicsIG1vdXNlVXBIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBtb3VzZURvd25IYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlcikge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3VzZU1vdmVIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlcikge1xuICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBtb3VzZU92ZXJIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIpIHtcbiAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBtb3VzZU91dEhhbmRsZXIpO1xufVxuIl19