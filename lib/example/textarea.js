"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../index"));

var _reaction = require("reaction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  font-size: 1rem;\n  padding: 0.25rem;\n  font-family: monospace;\n  border: 1px solid darkgray;\n  height: 16rem;\n  resize: vertical;\n  white-space: pre;\n  margin-top: 0.5rem;\n\n"]);

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

var Textarea = /*#__PURE__*/function (_Component) {
  _inherits(Textarea, _Component);

  var _super = _createSuper(Textarea);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _super.apply(this, arguments);
  }

  _createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onKeyUp = this.props.onKeyUp;

      if (onKeyUp) {
        var keyUpHandler = onKeyUp; ///

        this.onKeyUp(keyUpHandler);
      }
    }
  }]);

  return Textarea;
}(Component);

_defineProperty(Textarea, "mixins", [onKeyUp, setValue, getValue]);

var _default = (0, _index["default"])(Textarea)(_templateObject());

exports["default"] = _default;

function onKeyUp(keyUpHandler) {
  this.domElement.addEventListener("keyup", function (event) {
    keyUpHandler(event);
  });
}

function setValue(value) {
  this.domElement.value = value;
}

function getValue() {
  var value = this.domElement.value;
  return value;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiVGV4dGFyZWEiLCJvbktleVVwIiwicHJvcHMiLCJrZXlVcEhhbmRsZXIiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwiZG9tRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFMsR0FBY0MsZSxDQUFkRCxTOztJQUVGRSxROzs7Ozs7Ozs7Ozs7O3dDQU9nQjtBQUFBLFVBQ1ZDLE9BRFUsR0FDRSxLQUFLQyxLQURQLENBQ1ZELE9BRFU7O0FBR2xCLFVBQUlBLE9BQUosRUFBYTtBQUNYLFlBQU1FLFlBQVksR0FBR0YsT0FBckIsQ0FEVyxDQUNtQjs7QUFFOUIsYUFBS0EsT0FBTCxDQUFhRSxZQUFiO0FBQ0Q7QUFDRjs7OztFQWZvQkwsUzs7Z0JBQWpCRSxRLFlBQ1ksQ0FDZEMsT0FEYyxFQUVkRyxRQUZjLEVBR2RDLFFBSGMsQzs7ZUFpQkgsdUJBQVVMLFFBQVYsQzs7OztBQWNmLFNBQVNDLE9BQVQsQ0FBaUJFLFlBQWpCLEVBQStCO0FBQzdCLE9BQUtHLFVBQUwsQ0FBZ0JDLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxVQUFDQyxLQUFELEVBQVc7QUFDbkRMLElBQUFBLFlBQVksQ0FBQ0ssS0FBRCxDQUFaO0FBQ0QsR0FGRDtBQUdEOztBQUVELFNBQVNKLFFBQVQsQ0FBa0JLLEtBQWxCLEVBQXlCO0FBQ3ZCLE9BQUtILFVBQUwsQ0FBZ0JHLEtBQWhCLEdBQXdCQSxLQUF4QjtBQUNEOztBQUVELFNBQVNKLFFBQVQsR0FBb0I7QUFDbEIsTUFBTUksS0FBSyxHQUFHLEtBQUtILFVBQUwsQ0FBZ0JHLEtBQTlCO0FBRUEsU0FBT0EsS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgb25LZXlVcCxcbiAgICBzZXRWYWx1ZSxcbiAgICBnZXRWYWx1ZVxuICBdO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25LZXlVcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvbktleVVwKSB7XG4gICAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSBvbktleVVwOyAvLy9cblxuICAgICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShUZXh0YXJlYSlgXG5cbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XG4gIGhlaWdodDogMTZyZW07XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcblxuYDtcblxuZnVuY3Rpb24gb25LZXlVcChrZXlVcEhhbmRsZXIpIHtcbiAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICBrZXlVcEhhbmRsZXIoZXZlbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHtcbiAgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZG9tRWxlbWVudC52YWx1ZTtcblxuICByZXR1cm4gdmFsdWU7XG59XG4iXX0=