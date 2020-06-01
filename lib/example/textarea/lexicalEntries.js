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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LexicalEntriesTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(LexicalEntriesTextarea, _Textarea);

  var _super = _createSuper(LexicalEntriesTextarea);

  function LexicalEntriesTextarea() {
    _classCallCheck(this, LexicalEntriesTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(LexicalEntriesTextarea, [{
    key: "render",
    value: function render(update) {
      var _this = this;

      var className = _textarea["default"].className,
          children = this.props.children;
      return /*#__PURE__*/React.createElement("textarea", {
        className: "".concat(className, " lexical-entries"),
        spellCheck: "false",
        ref: function ref(domElement) {
          _this.domElement = domElement;
        }
      }, children);
    }
  }]);

  return LexicalEntriesTextarea;
}(_textarea["default"]);

exports["default"] = LexicalEntriesTextarea;

_defineProperty(LexicalEntriesTextarea, "mixins", [getLexicalEntries, setLexicalEntries]);

function getLexicalEntries() {
  var value = this.getValue(),
      lexicalEntries = JSON.parse(value);
  return lexicalEntries;
}

function setLexicalEntries(lexicalEntries) {
  var value = JSON.stringify(lexicalEntries, null, "  ");
  this.setValue(value);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGljYWxFbnRyaWVzLmpzIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJUZXh0YXJlYSIsImNoaWxkcmVuIiwicHJvcHMiLCJkb21FbGVtZW50IiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJzZXRMZXhpY2FsRW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7Ozs7Ozs7OzsyQkFNWkMsTSxFQUFRO0FBQUE7O0FBQ1AsVUFBRUMsU0FBRixHQUFnQkMsb0JBQWhCLENBQUVELFNBQUY7QUFBQSxVQUNFRSxRQURGLEdBQ2UsS0FBS0MsS0FEcEIsQ0FDRUQsUUFERjtBQUdOLDBCQUVFO0FBQVUsUUFBQSxTQUFTLFlBQUtGLFNBQUwscUJBQW5CO0FBQ1UsUUFBQSxVQUFVLEVBQUMsT0FEckI7QUFFVSxRQUFBLEdBQUcsRUFBRSxhQUFDSSxVQUFELEVBQWdCO0FBRW5CLFVBQUEsS0FBSSxDQUFDQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUVEO0FBTlgsU0FRR0YsUUFSSCxDQUZGO0FBY0Q7Ozs7RUF4QmlERCxvQjs7OztnQkFBL0JILHNCLFlBQ0gsQ0FDZE8saUJBRGMsRUFFZEMsaUJBRmMsQzs7QUEwQmxCLFNBQVNELGlCQUFULEdBQTZCO0FBQzNCLE1BQU1FLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxNQUNNQyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFYLENBRHZCO0FBR0EsU0FBT0UsY0FBUDtBQUNEOztBQUVELFNBQVNILGlCQUFULENBQTJCRyxjQUEzQixFQUEyQztBQUN6QyxNQUFNRixLQUFLLEdBQUdHLElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxjQUFmLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBQWQ7QUFFQSxPQUFLSSxRQUFMLENBQWNOLEtBQWQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExleGljYWxFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgZ2V0TGV4aWNhbEVudHJpZXMsXG4gICAgc2V0TGV4aWNhbEVudHJpZXNcbiAgXTtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGxleGljYWwtZW50cmllc2B9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RleHRhcmVhPlxuXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMZXhpY2FsRW50cmllcygpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG5cbiAgcmV0dXJuIGxleGljYWxFbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxFbnRyaWVzLCBudWxsLCBcIiAgXCIpO1xuXG4gIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xufVxuIl19