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

      var className = _textarea["default"].className,
          children = this.props.children;
      return /*#__PURE__*/React.createElement("textarea", {
        className: "".concat(className, " parse-tree"),
        spellCheck: "false",
        readOnly: true,
        ref: function ref(domElement) {
          _this.domElement = domElement;
        }
      }, children);
    }
  }]);

  return ParseTreeTextarea;
}(_textarea["default"]);

exports["default"] = ParseTreeTextarea;

_defineProperty(ParseTreeTextarea, "mixins", [setParseTree, clearParseTree]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZSIsImNsYXNzTmFtZSIsIlRleHRhcmVhIiwiY2hpbGRyZW4iLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWUiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsaUI7Ozs7Ozs7Ozs7Ozs7MkJBTVpDLE0sRUFBUTtBQUFBOztBQUNQLFVBQUVDLFNBQUYsR0FBZ0JDLG9CQUFoQixDQUFFRCxTQUFGO0FBQUEsVUFDRUUsUUFERixHQUNlLEtBQUtDLEtBRHBCLENBQ0VELFFBREY7QUFHTiwwQkFFRTtBQUFVLFFBQUEsU0FBUyxZQUFLRixTQUFMLGdCQUFuQjtBQUNVLFFBQUEsVUFBVSxFQUFDLE9BRHJCO0FBRVUsUUFBQSxRQUFRLE1BRmxCO0FBR1UsUUFBQSxHQUFHLEVBQUUsYUFBQ0ksVUFBRCxFQUFnQjtBQUVuQixVQUFBLEtBQUksQ0FBQ0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFFRDtBQVBYLFNBU0dGLFFBVEgsQ0FGRjtBQWVEOzs7O0VBekI0Q0Qsb0I7Ozs7Z0JBQTFCSCxpQixZQUNILENBQ2RPLFlBRGMsRUFFZEMsY0FGYyxDOztBQTJCbEIsU0FBU0QsWUFBVCxDQUFzQkUsU0FBdEIsRUFBaUM7QUFDL0IsTUFBSUEsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3RCQSxJQUFBQSxTQUFTLENBQUNDLFNBQVYsR0FEc0IsQ0FDRTs7QUFFeEIsUUFBTUMsZUFBZSxHQUFHRixTQUFTLENBQUNHLFFBQVYsRUFBeEI7QUFBQSxRQUNNQyxLQUFLLEdBQUdGLGVBRGQsQ0FIc0IsQ0FJVTs7QUFFaEMsU0FBS0csUUFBTCxDQUFjRCxLQUFkO0FBQ0QsR0FQRCxNQU9PO0FBQ0wsU0FBS0wsY0FBTDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0EsY0FBVCxHQUEwQjtBQUN4QixNQUFNSyxLQUFLLEdBQUcsRUFBZDtBQUVBLE9BQUtDLFFBQUwsQ0FBY0QsS0FBZDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgc2V0UGFyc2VUcmVlLFxuICAgIGNsZWFyUGFyc2VUcmVlXG4gIF07XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBUZXh0YXJlYSxcbiAgICAgICAgICB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBwYXJzZS10cmVlYH1cbiAgICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSkge1xuICBpZiAocGFyc2VUcmVlICE9PSBudWxsKSB7XG4gICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS5hc1N0cmluZygpLFxuICAgICAgICAgIHZhbHVlID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJQYXJzZVRyZWUoKSB7XG4gIGNvbnN0IHZhbHVlID0gXCJcIjtcblxuICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbn1cbiJdfQ==