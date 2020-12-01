"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var BNFTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(BNFTextarea, _Textarea);

  var _super = _createSuper(BNFTextarea);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(BNFTextarea, [{
    key: "render",
    value: function render(update) {
      var _this = this;

      var className = _textarea["default"].className,
          children = this.props.children;
      return React.createElement("textarea", {
        className: "".concat(className, " bnf"),
        spellCheck: "false",
        ref: function ref(domElement) {
          _this.domElement = domElement;
        }
      }, children);
    }
  }]);

  return BNFTextarea;
}(_textarea["default"]);

_defineProperty(BNFTextarea, "mixins", [getBNF, setBNF]);

var _default = BNFTextarea;
exports["default"] = _default;

function getBNF() {
  var value = this.getValue(),
      bnf = value; ///

  return bnf;
}

function setBNF(bnf) {
  var value = bnf; ///

  this.setValue(value);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJCTkZUZXh0YXJlYSIsInVwZGF0ZSIsImNsYXNzTmFtZSIsIlRleHRhcmVhIiwiY2hpbGRyZW4iLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJnZXRCTkYiLCJzZXRCTkYiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYm5mIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7Ozs7Ozs7Ozs7OzJCQU1HQyxNLEVBQVE7QUFBQTs7QUFDUCxVQUFFQyxTQUFGLEdBQWdCQyxvQkFBaEIsQ0FBRUQsU0FBRjtBQUFBLFVBQ0VFLFFBREYsR0FDZSxLQUFLQyxLQURwQixDQUNFRCxRQURGO0FBR04sYUFFRTtBQUFVLFFBQUEsU0FBUyxZQUFLRixTQUFMLFNBQW5CO0FBQ1UsUUFBQSxVQUFVLEVBQUMsT0FEckI7QUFFVSxRQUFBLEdBQUcsRUFBRSxhQUFDSSxVQUFELEVBQWdCO0FBRW5CLFVBQUEsS0FBSSxDQUFDQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUVEO0FBTlgsU0FRR0YsUUFSSCxDQUZGO0FBY0Q7Ozs7RUF4QnVCRCxvQjs7Z0JBQXBCSCxXLFlBQ1ksQ0FDZE8sTUFEYyxFQUVkQyxNQUZjLEM7O2VBMEJIUixXOzs7QUFFZixTQUFTTyxNQUFULEdBQWtCO0FBQ2hCLE1BQU1FLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxNQUNNQyxHQUFHLEdBQUdGLEtBRFosQ0FEZ0IsQ0FFSTs7QUFFcEIsU0FBT0UsR0FBUDtBQUNEOztBQUVELFNBQVNILE1BQVQsQ0FBZ0JHLEdBQWhCLEVBQXFCO0FBQ25CLE1BQU1GLEtBQUssR0FBR0UsR0FBZCxDQURtQixDQUNDOztBQUVwQixPQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmNsYXNzIEJORlRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIGdldEJORixcbiAgICBzZXRCTkZcbiAgXTtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGJuZmB9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RleHRhcmVhPlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCTkZUZXh0YXJlYTtcblxuZnVuY3Rpb24gZ2V0Qk5GKCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgYm5mID0gdmFsdWU7ICAvLy9cblxuICByZXR1cm4gYm5mO1xufVxuXG5mdW5jdGlvbiBzZXRCTkYoYm5mKSB7XG4gIGNvbnN0IHZhbHVlID0gYm5mOyAgLy8vXG5cbiAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG59XG4iXX0=