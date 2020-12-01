"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../index"));

var _reaction = require("reaction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  border: 1px solid darkgrey;\n  height: 24rem;\n  resize: vertical;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  white-space: pre;\n  font-family: monospace;\n\n"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHRhcmVhLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiVGV4dGFyZWEiLCJvbktleVVwIiwicHJvcHMiLCJrZXlVcEhhbmRsZXIiLCJzZXRWYWx1ZSIsImdldFZhbHVlIiwiZG9tRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUyxHQUFjQyxlLENBQWRELFM7O0lBRUZFLFE7Ozs7Ozs7Ozs7Ozs7d0NBT2dCO0FBQUEsVUFDVkMsT0FEVSxHQUNFLEtBQUtDLEtBRFAsQ0FDVkQsT0FEVTs7QUFHbEIsVUFBSUEsT0FBSixFQUFhO0FBQ1gsWUFBTUUsWUFBWSxHQUFHRixPQUFyQixDQURXLENBQ21COztBQUU5QixhQUFLQSxPQUFMLENBQWFFLFlBQWI7QUFDRDtBQUNGOzs7O0VBZm9CTCxTOztnQkFBakJFLFEsWUFDWSxDQUNkQyxPQURjLEVBRWRHLFFBRmMsRUFHZEMsUUFIYyxDOztlQWlCSCx1QkFBVUwsUUFBVixDOzs7O0FBWWYsU0FBU0MsT0FBVCxDQUFpQkUsWUFBakIsRUFBK0I7QUFDN0IsT0FBS0csVUFBTCxDQUFnQkMsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQUNDLEtBQUQsRUFBVztBQUNuREwsSUFBQUEsWUFBWSxDQUFDSyxLQUFELENBQVo7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBU0osUUFBVCxDQUFrQkssS0FBbEIsRUFBeUI7QUFDdkIsT0FBS0gsVUFBTCxDQUFnQkcsS0FBaEIsR0FBd0JBLEtBQXhCO0FBQ0Q7O0FBRUQsU0FBU0osUUFBVCxHQUFvQjtBQUNsQixNQUFNSSxLQUFLLEdBQUcsS0FBS0gsVUFBTCxDQUFnQkcsS0FBOUI7QUFFQSxTQUFPQSxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFRleHRhcmVhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBvbktleVVwLFxuICAgIHNldFZhbHVlLFxuICAgIGdldFZhbHVlXG4gIF07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbktleVVwIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9uS2V5VXApIHtcbiAgICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IG9uS2V5VXA7IC8vL1xuXG4gICAgICB0aGlzLm9uS2V5VXAoa2V5VXBIYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRleHRhcmVhKWBcblxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cbmA7XG5cbmZ1bmN0aW9uIG9uS2V5VXAoa2V5VXBIYW5kbGVyKSB7XG4gIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XG4gICAga2V5VXBIYW5kbGVyKGV2ZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7XG4gIHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQudmFsdWU7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuIl19