"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../index"));

var _reaction = require("reaction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  display: flex;\n  \n  width: 48rem;\n  min-width: 24rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  flex-direction: column;\n\n"]);

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

var SizeableDiv = /*#__PURE__*/function (_Component) {
  _inherits(SizeableDiv, _Component);

  var _super = _createSuper(SizeableDiv);

  function SizeableDiv() {
    _classCallCheck(this, SizeableDiv);

    return _super.apply(this, arguments);
  }

  _createClass(SizeableDiv, [{
    key: "render",
    value: function render(update) {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return /*#__PURE__*/_reaction.React.createElement("div", {
        className: "".concat(className, " sizeable"),
        ref: function ref(domElement) {
          _this.domElement = domElement;
        }
      }, children);
    }
  }]);

  return SizeableDiv;
}(Component);

_defineProperty(SizeableDiv, "mixins", [getWidth, setWidth]);

var _default = (0, _index["default"])(SizeableDiv)(_templateObject());

exports["default"] = _default;

function getWidth() {
  var domElementOffsetWidth = this.domElement.offsetWidth,
      width = domElementOffsetWidth; ///

  return width;
}

function setWidth(width) {
  width = "".concat(width, "px"); ///

  this.setStyle("width", width);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVhYmxlLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiU2l6ZWFibGVEaXYiLCJ1cGRhdGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZG9tRWxlbWVudCIsImdldFdpZHRoIiwic2V0V2lkdGgiLCJkb21FbGVtZW50T2Zmc2V0V2lkdGgiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwic2V0U3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUyxHQUFjQyxlLENBQWRELFM7O0lBRUZFLFc7Ozs7Ozs7Ozs7Ozs7MkJBTUdDLE0sRUFBUTtBQUFBOztBQUFBLHdCQUNtQixLQUFLQyxLQUR4QjtBQUFBLFVBQ0xDLFNBREssZUFDTEEsU0FESztBQUFBLFVBQ01DLFFBRE4sZUFDTUEsUUFETjtBQUdiLDBCQUVFO0FBQUssUUFBQSxTQUFTLFlBQUtELFNBQUwsY0FBZDtBQUNLLFFBQUEsR0FBRyxFQUFFLGFBQUNFLFVBQUQsRUFBZ0I7QUFFbkIsVUFBQSxLQUFJLENBQUNBLFVBQUwsR0FBa0JBLFVBQWxCO0FBRUQ7QUFMTixTQU9HRCxRQVBILENBRkY7QUFhRDs7OztFQXRCdUJOLFM7O2dCQUFwQkUsVyxZQUNZLENBQ2RNLFFBRGMsRUFFZEMsUUFGYyxDOztlQXdCSCx1QkFBVVAsV0FBVixDOzs7O0FBWWYsU0FBU00sUUFBVCxHQUFvQjtBQUNsQixNQUFNRSxxQkFBcUIsR0FBRyxLQUFLSCxVQUFMLENBQWdCSSxXQUE5QztBQUFBLE1BQ01DLEtBQUssR0FBR0YscUJBRGQsQ0FEa0IsQ0FFbUI7O0FBRXJDLFNBQU9FLEtBQVA7QUFDRDs7QUFFRCxTQUFTSCxRQUFULENBQWtCRyxLQUFsQixFQUF5QjtBQUN2QkEsRUFBQUEsS0FBSyxhQUFNQSxLQUFOLE9BQUwsQ0FEdUIsQ0FDRDs7QUFFdEIsT0FBS0MsUUFBTCxDQUFjLE9BQWQsRUFBdUJELEtBQXZCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFNpemVhYmxlRGl2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBnZXRXaWR0aCxcbiAgICBzZXRXaWR0aFxuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzaXplYWJsZWB9XG4gICAgICAgICAgIHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgXG4gIHdpZHRoOiA0OHJlbTtcbiAgbWluLXdpZHRoOiAyNHJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuXG5mdW5jdGlvbiBnZXRXaWR0aCgpIHtcbiAgY29uc3QgZG9tRWxlbWVudE9mZnNldFdpZHRoID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICB3aWR0aCA9IGRvbUVsZW1lbnRPZmZzZXRXaWR0aDsgLy8vXG5cbiAgcmV0dXJuIHdpZHRoO1xufVxuXG5mdW5jdGlvbiBzZXRXaWR0aCh3aWR0aCkge1xuICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgdGhpcy5zZXRTdHlsZShcIndpZHRoXCIsIHdpZHRoKTtcbn1cbiJdfQ==