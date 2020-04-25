"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onChange = onChange;
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../index"));

var _reaction = require("reaction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 100%;\n  font-size: 1rem;\n  padding: 0.25rem;\n  font-family: monospace;\n  border: 1px solid darkgray;\n  height: 16rem;\n  resize: vertical;\n  white-space: pre;\n  margin-top: 0.5rem;\n  \n  .error {\n    border-color: red;\n  }\n\n"]);

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

_defineProperty(Textarea, "mixins", [onKeyUp, setValue, getValue, showError, hideError]);

var _default = (0, _index["default"])(Textarea)(_templateObject());

exports["default"] = _default;

function onKeyUp(keyUpHandler) {
  var _this = this;

  this.domElement.addEventListener("keyup", function () {
    var value = _this.getValue();

    keyUpHandler(value);
  });
}

function onChange(changeHandler) {
  var _this2 = this;

  this.domElement.addEventListener("input", function () {
    var value = _this2.getValue();

    changeHandler(value);
  });
}

function setValue(value) {
  this.domElement.value = value;
}

function getValue() {
  var value = this.domElement.value;
  return value;
}

function showError() {
  this.addClass("error");
}

function hideError() {
  this.removeClass("error");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiVGV4dGFyZWEiLCJvbktleVVwIiwicHJvcHMiLCJrZXlVcEhhbmRsZXIiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwiZG9tRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiY2hhbmdlSGFuZGxlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLFMsR0FBY0MsZSxDQUFkRCxTOztJQUVGRSxROzs7Ozs7Ozs7Ozs7O3dDQVNnQjtBQUFBLFVBQ1ZDLE9BRFUsR0FDRSxLQUFLQyxLQURQLENBQ1ZELE9BRFU7O0FBR2xCLFVBQUlBLE9BQUosRUFBYTtBQUNYLFlBQU1FLFlBQVksR0FBR0YsT0FBckIsQ0FEVyxDQUNtQjs7QUFFOUIsYUFBS0EsT0FBTCxDQUFhRSxZQUFiO0FBQ0Q7QUFDRjs7OztFQWpCb0JMLFM7O2dCQUFqQkUsUSxZQUNZLENBQ2RDLE9BRGMsRUFFZEcsUUFGYyxFQUdkQyxRQUhjLEVBSWRDLFNBSmMsRUFLZEMsU0FMYyxDOztlQW1CSCx1QkFBVVAsUUFBVixDOzs7O0FBa0JmLFNBQVNDLE9BQVQsQ0FBaUJFLFlBQWpCLEVBQStCO0FBQUE7O0FBQzdCLE9BQUtLLFVBQUwsQ0FBZ0JDLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxZQUFNO0FBQzlDLFFBQU1DLEtBQUssR0FBRyxLQUFJLENBQUNMLFFBQUwsRUFBZDs7QUFFQUYsSUFBQUEsWUFBWSxDQUFDTyxLQUFELENBQVo7QUFDRCxHQUpEO0FBS0Q7O0FBRU0sU0FBU0MsUUFBVCxDQUFrQkMsYUFBbEIsRUFBaUM7QUFBQTs7QUFDdEMsT0FBS0osVUFBTCxDQUFnQkMsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFlBQU07QUFDOUMsUUFBTUMsS0FBSyxHQUFHLE1BQUksQ0FBQ0wsUUFBTCxFQUFkOztBQUVBTyxJQUFBQSxhQUFhLENBQUNGLEtBQUQsQ0FBYjtBQUNELEdBSkQ7QUFNRDs7QUFHRCxTQUFTTixRQUFULENBQWtCTSxLQUFsQixFQUF5QjtBQUN2QixPQUFLRixVQUFMLENBQWdCRSxLQUFoQixHQUF3QkEsS0FBeEI7QUFDRDs7QUFFRCxTQUFTTCxRQUFULEdBQW9CO0FBQ2xCLE1BQU1LLEtBQUssR0FBRyxLQUFLRixVQUFMLENBQWdCRSxLQUE5QjtBQUVBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTSixTQUFULEdBQXFCO0FBQ25CLE9BQUtPLFFBQUwsQ0FBYyxPQUFkO0FBQ0Q7O0FBRUQsU0FBU04sU0FBVCxHQUFxQjtBQUNuQixPQUFLTyxXQUFMLENBQWlCLE9BQWpCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBvbktleVVwLFxuICAgIHNldFZhbHVlLFxuICAgIGdldFZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBoaWRlRXJyb3IsXG4gIF07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbktleVVwIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9uS2V5VXApIHtcbiAgICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IG9uS2V5VXA7IC8vL1xuXG4gICAgICB0aGlzLm9uS2V5VXAoa2V5VXBIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRleHRhcmVhKWBcblxuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcbiAgaGVpZ2h0OiAxNnJlbTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBcbiAgLmVycm9yIHtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgfVxuXG5gO1xuXG5mdW5jdGlvbiBvbktleVVwKGtleVVwSGFuZGxlcikge1xuICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgIGtleVVwSGFuZGxlcih2YWx1ZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25DaGFuZ2UoY2hhbmdlSGFuZGxlcikge1xuICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgIGNoYW5nZUhhbmRsZXIodmFsdWUpO1xuICB9KTtcblxufVxuXG5cbmZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQudmFsdWU7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzaG93RXJyb3IoKSB7XG4gIHRoaXMuYWRkQ2xhc3MoXCJlcnJvclwiKTtcbn1cblxuZnVuY3Rpb24gaGlkZUVycm9yKCkge1xuICB0aGlzLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG59XG4iXX0=