"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../index"));

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  overflow-wrap: normal;\n  margin-bottom: 1rem;\n\n"]);

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

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
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

_defineProperty(LexicalEntriesTextarea, "mixins", [getLexicalEntries, setLexicalEntries]);

var _default = (0, _index["default"])(LexicalEntriesTextarea)(_templateObject());

exports["default"] = _default;

function getLexicalEntries() {
  var value = this.getValue(),
      lexicalEntries = JSON.parse(value);
  return lexicalEntries;
}

function setLexicalEntries(lexicalEntries) {
  var value = JSON.stringify(lexicalEntries, null, "  ");
  this.setValue(value);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGljYWxFbnRyaWVzLmpzIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJ1cGRhdGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZG9tRWxlbWVudCIsIlRleHRhcmVhIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJzZXRMZXhpY2FsRW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLHNCOzs7Ozs7Ozs7Ozs7OzJCQU1HQyxNLEVBQVE7QUFBQTs7QUFBQSx3QkFDbUIsS0FBS0MsS0FEeEI7QUFBQSxVQUNMQyxTQURLLGVBQ0xBLFNBREs7QUFBQSxVQUNNQyxRQUROLGVBQ01BLFFBRE47QUFHYiwwQkFFRTtBQUFVLFFBQUEsU0FBUyxZQUFLRCxTQUFMLHFCQUFuQjtBQUNVLFFBQUEsVUFBVSxFQUFDLE9BRHJCO0FBRVUsUUFBQSxHQUFHLEVBQUUsYUFBQ0UsVUFBRCxFQUFnQjtBQUVuQixVQUFBLEtBQUksQ0FBQ0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFFRDtBQU5YLFNBUUdELFFBUkgsQ0FGRjtBQWNEOzs7O0VBdkJrQ0Usb0I7O2dCQUEvQk4sc0IsWUFDWSxDQUNkTyxpQkFEYyxFQUVkQyxpQkFGYyxDOztlQXlCSCx1QkFBVVIsc0JBQVYsQzs7OztBQU9mLFNBQVNPLGlCQUFULEdBQTZCO0FBQzNCLE1BQU1FLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxNQUNNQyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFYLENBRHZCO0FBR0EsU0FBT0UsY0FBUDtBQUNEOztBQUVELFNBQVNILGlCQUFULENBQTJCRyxjQUEzQixFQUEyQztBQUN6QyxNQUFNRixLQUFLLEdBQUdHLElBQUksQ0FBQ0UsU0FBTCxDQUFlSCxjQUFmLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLENBQWQ7QUFFQSxPQUFLSSxRQUFMLENBQWNOLEtBQWQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBnZXRMZXhpY2FsRW50cmllcyxcbiAgICBzZXRMZXhpY2FsRW50cmllc1xuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGxleGljYWwtZW50cmllc2B9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RleHRhcmVhPlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGV4aWNhbEVudHJpZXNUZXh0YXJlYSlgXG5cbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG5gO1xuXG5mdW5jdGlvbiBnZXRMZXhpY2FsRW50cmllcygpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG5cbiAgcmV0dXJuIGxleGljYWxFbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxFbnRyaWVzLCBudWxsLCBcIiAgXCIpO1xuXG4gIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xufVxuIl19