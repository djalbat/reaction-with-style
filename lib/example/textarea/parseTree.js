"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../index"));

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  margin-bottom: 1rem;\n\n"]);

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

var ParseTreeTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(ParseTreeTextarea, _Textarea);

  var _super = _createSuper(ParseTreeTextarea);

  function ParseTreeTextarea() {
    _classCallCheck(this, ParseTreeTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(ParseTreeTextarea, [{
    key: "render",
    value: function render(update) {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement("textarea", {
        className: "".concat(className, " parse-tree"),
        ref: function ref(domElement) {
          _this.domElement = domElement;
        }
      }, children);
    }
  }]);

  return ParseTreeTextarea;
}(_textarea["default"]);

_defineProperty(ParseTreeTextarea, "mixins", [setParseTree, clearParseTree]);

var _default = (0, _index["default"])(ParseTreeTextarea)(_templateObject());

exports["default"] = _default;

function setParseTree(parseTree) {
  if (parseTree !== null) {
    parseTree.shiftLine(); //

    var parseTreeString = parseTree.asString(),
        value = parseTreeString; ///

    this.setValue(value);
  } else {
    this.clearParseTree();
  }
}

function clearParseTree() {
  var value = "";
  this.setValue(value);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkb21FbGVtZW50IiwiVGV4dGFyZWEiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWUiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxpQjs7Ozs7Ozs7Ozs7OzsyQkFNR0MsTSxFQUFRO0FBQUE7O0FBQUEsd0JBQ21CLEtBQUtDLEtBRHhCO0FBQUEsVUFDTEMsU0FESyxlQUNMQSxTQURLO0FBQUEsVUFDTUMsUUFETixlQUNNQSxRQUROO0FBR2IsMEJBRUU7QUFBVSxRQUFBLFNBQVMsWUFBS0QsU0FBTCxnQkFBbkI7QUFDVSxRQUFBLEdBQUcsRUFBRSxhQUFDRSxVQUFELEVBQWdCO0FBRW5CLFVBQUEsS0FBSSxDQUFDQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUVEO0FBTFgsU0FPR0QsUUFQSCxDQUZGO0FBYUQ7Ozs7RUF0QjZCRSxvQjs7Z0JBQTFCTixpQixZQUNZLENBQ2RPLFlBRGMsRUFFZEMsY0FGYyxDOztlQXdCSCx1QkFBVVIsaUJBQVYsQzs7OztBQU1mLFNBQVNPLFlBQVQsQ0FBc0JFLFNBQXRCLEVBQWlDO0FBQy9CLE1BQUlBLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QkEsSUFBQUEsU0FBUyxDQUFDQyxTQUFWLEdBRHNCLENBQ0U7O0FBRXhCLFFBQU1DLGVBQWUsR0FBR0YsU0FBUyxDQUFDRyxRQUFWLEVBQXhCO0FBQUEsUUFDTUMsS0FBSyxHQUFHRixlQURkLENBSHNCLENBSVU7O0FBRWhDLFNBQUtHLFFBQUwsQ0FBY0QsS0FBZDtBQUNELEdBUEQsTUFPTztBQUNMLFNBQUtMLGNBQUw7QUFDRDtBQUNGOztBQUVELFNBQVNBLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUssS0FBSyxHQUFHLEVBQWQ7QUFFQSxPQUFLQyxRQUFMLENBQWNELEtBQWQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgc2V0UGFyc2VUcmVlLFxuICAgIGNsZWFyUGFyc2VUcmVlXG4gIF07XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcGFyc2UtdHJlZWB9XG4gICAgICAgICAgICAgICAgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFBhcnNlVHJlZVRleHRhcmVhKWBcblxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG5gO1xuXG5mdW5jdGlvbiBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gIGlmIChwYXJzZVRyZWUgIT09IG51bGwpIHtcbiAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWUgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclBhcnNlVHJlZSgpIHtcbiAgY29uc3QgdmFsdWUgPSBcIlwiO1xuXG4gIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xufVxuIl19