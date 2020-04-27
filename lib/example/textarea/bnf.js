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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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
      return /*#__PURE__*/React.createElement("textarea", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJCTkZUZXh0YXJlYSIsInVwZGF0ZSIsImNsYXNzTmFtZSIsIlRleHRhcmVhIiwiY2hpbGRyZW4iLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJnZXRCTkYiLCJzZXRCTkYiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYm5mIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7Ozs7Ozs7OzsyQkFNR0MsTSxFQUFRO0FBQUE7O0FBQ1AsVUFBRUMsU0FBRixHQUFnQkMsb0JBQWhCLENBQUVELFNBQUY7QUFBQSxVQUNFRSxRQURGLEdBQ2UsS0FBS0MsS0FEcEIsQ0FDRUQsUUFERjtBQUdOLDBCQUVFO0FBQVUsUUFBQSxTQUFTLFlBQUtGLFNBQUwsU0FBbkI7QUFDVSxRQUFBLFVBQVUsRUFBQyxPQURyQjtBQUVVLFFBQUEsR0FBRyxFQUFFLGFBQUNJLFVBQUQsRUFBZ0I7QUFFbkIsVUFBQSxLQUFJLENBQUNBLFVBQUwsR0FBa0JBLFVBQWxCO0FBRUQ7QUFOWCxTQVFHRixRQVJILENBRkY7QUFjRDs7OztFQXhCdUJELG9COztnQkFBcEJILFcsWUFDWSxDQUNkTyxNQURjLEVBRWRDLE1BRmMsQzs7ZUEwQkhSLFc7OztBQUVmLFNBQVNPLE1BQVQsR0FBa0I7QUFDaEIsTUFBTUUsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLE1BQ01DLEdBQUcsR0FBR0YsS0FEWixDQURnQixDQUVJOztBQUVwQixTQUFPRSxHQUFQO0FBQ0Q7O0FBRUQsU0FBU0gsTUFBVCxDQUFnQkcsR0FBaEIsRUFBcUI7QUFDbkIsTUFBTUYsS0FBSyxHQUFHRSxHQUFkLENBRG1CLENBQ0M7O0FBRXBCLE9BQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgZ2V0Qk5GLFxuICAgIHNldEJORlxuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gVGV4dGFyZWEsXG4gICAgICAgICAgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gYm5mYH1cbiAgICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJORlRleHRhcmVhO1xuXG5mdW5jdGlvbiBnZXRCTkYoKSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICBibmYgPSB2YWx1ZTsgIC8vL1xuXG4gIHJldHVybiBibmY7XG59XG5cbmZ1bmN0aW9uIHNldEJORihibmYpIHtcbiAgY29uc3QgdmFsdWUgPSBibmY7ICAvLy9cblxuICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbn1cbiJdfQ==