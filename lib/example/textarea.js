"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

function showError() {
  this.addClass("error");
}

function hideError() {
  this.removeClass("error");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiVGV4dGFyZWEiLCJvbktleVVwIiwicHJvcHMiLCJrZXlVcEhhbmRsZXIiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwic2hvd0Vycm9yIiwiaGlkZUVycm9yIiwiZG9tRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInZhbHVlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxTLEdBQWNDLGUsQ0FBZEQsUzs7SUFFRkUsUTs7Ozs7Ozs7Ozs7Ozt3Q0FTZ0I7QUFBQSxVQUNWQyxPQURVLEdBQ0UsS0FBS0MsS0FEUCxDQUNWRCxPQURVOztBQUdsQixVQUFJQSxPQUFKLEVBQWE7QUFDWCxZQUFNRSxZQUFZLEdBQUdGLE9BQXJCLENBRFcsQ0FDbUI7O0FBRTlCLGFBQUtBLE9BQUwsQ0FBYUUsWUFBYjtBQUNEO0FBQ0Y7Ozs7RUFqQm9CTCxTOztnQkFBakJFLFEsWUFDWSxDQUNkQyxPQURjLEVBRWRHLFFBRmMsRUFHZEMsUUFIYyxFQUlkQyxTQUpjLEVBS2RDLFNBTGMsQzs7ZUFtQkgsdUJBQVVQLFFBQVYsQzs7OztBQWtCZixTQUFTQyxPQUFULENBQWlCRSxZQUFqQixFQUErQjtBQUM3QixPQUFLSyxVQUFMLENBQWdCQyxnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ25EUCxJQUFBQSxZQUFZLENBQUNPLEtBQUQsQ0FBWjtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTTixRQUFULENBQWtCTyxLQUFsQixFQUF5QjtBQUN2QixPQUFLSCxVQUFMLENBQWdCRyxLQUFoQixHQUF3QkEsS0FBeEI7QUFDRDs7QUFFRCxTQUFTTixRQUFULEdBQW9CO0FBQ2xCLE1BQU1NLEtBQUssR0FBRyxLQUFLSCxVQUFMLENBQWdCRyxLQUE5QjtBQUVBLFNBQU9BLEtBQVA7QUFDRDs7QUFFRCxTQUFTTCxTQUFULEdBQXFCO0FBQ25CLE9BQUtNLFFBQUwsQ0FBYyxPQUFkO0FBQ0Q7O0FBRUQsU0FBU0wsU0FBVCxHQUFxQjtBQUNuQixPQUFLTSxXQUFMLENBQWlCLE9BQWpCO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBvbktleVVwLFxuICAgIHNldFZhbHVlLFxuICAgIGdldFZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBoaWRlRXJyb3JcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uS2V5VXAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob25LZXlVcCkge1xuICAgICAgY29uc3Qga2V5VXBIYW5kbGVyID0gb25LZXlVcDsgLy8vXG5cbiAgICAgIHRoaXMub25LZXlVcChrZXlVcEhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVGV4dGFyZWEpYFxuXG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xuICBoZWlnaHQ6IDE2cmVtO1xuICByZXNpemU6IHZlcnRpY2FsO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIFxuICAuZXJyb3Ige1xuICAgIGJvcmRlci1jb2xvcjogcmVkO1xuICB9XG5cbmA7XG5cbmZ1bmN0aW9uIG9uS2V5VXAoa2V5VXBIYW5kbGVyKSB7XG4gIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG4gICAga2V5VXBIYW5kbGVyKGV2ZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQudmFsdWU7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzaG93RXJyb3IoKSB7XG4gIHRoaXMuYWRkQ2xhc3MoXCJlcnJvclwiKTtcbn1cblxuZnVuY3Rpb24gaGlkZUVycm9yKCkge1xuICB0aGlzLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG59XG4iXX0=