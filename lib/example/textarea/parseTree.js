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
      return React.createElement("textarea", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWVUZXh0YXJlYSIsInVwZGF0ZSIsImNsYXNzTmFtZSIsIlRleHRhcmVhIiwiY2hpbGRyZW4iLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWUiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7OzsyQkFNWkMsTSxFQUFRO0FBQUE7O0FBQ1AsVUFBRUMsU0FBRixHQUFnQkMsb0JBQWhCLENBQUVELFNBQUY7QUFBQSxVQUNFRSxRQURGLEdBQ2UsS0FBS0MsS0FEcEIsQ0FDRUQsUUFERjtBQUdOLGFBRUU7QUFBVSxRQUFBLFNBQVMsWUFBS0YsU0FBTCxnQkFBbkI7QUFDVSxRQUFBLFVBQVUsRUFBQyxPQURyQjtBQUVVLFFBQUEsUUFBUSxNQUZsQjtBQUdVLFFBQUEsR0FBRyxFQUFFLGFBQUNJLFVBQUQsRUFBZ0I7QUFFbkIsVUFBQSxLQUFJLENBQUNBLFVBQUwsR0FBa0JBLFVBQWxCO0FBRUQ7QUFQWCxTQVNHRixRQVRILENBRkY7QUFlRDs7OztFQXpCNENELG9COzs7O2dCQUExQkgsaUIsWUFDSCxDQUNkTyxZQURjLEVBRWRDLGNBRmMsQzs7QUEyQmxCLFNBQVNELFlBQVQsQ0FBc0JFLFNBQXRCLEVBQWlDO0FBQy9CLE1BQUlBLFNBQVMsS0FBSyxJQUFsQixFQUF3QjtBQUN0QkEsSUFBQUEsU0FBUyxDQUFDQyxTQUFWLEdBRHNCLENBQ0U7O0FBRXhCLFFBQU1DLGVBQWUsR0FBR0YsU0FBUyxDQUFDRyxRQUFWLEVBQXhCO0FBQUEsUUFDTUMsS0FBSyxHQUFHRixlQURkLENBSHNCLENBSVU7O0FBRWhDLFNBQUtHLFFBQUwsQ0FBY0QsS0FBZDtBQUNELEdBUEQsTUFPTztBQUNMLFNBQUtMLGNBQUw7QUFDRDtBQUNGOztBQUVELFNBQVNBLGNBQVQsR0FBMEI7QUFDeEIsTUFBTUssS0FBSyxHQUFHLEVBQWQ7QUFFQSxPQUFLQyxRQUFMLENBQWNELEtBQWQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIHNldFBhcnNlVHJlZSxcbiAgICBjbGVhclBhcnNlVHJlZVxuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gVGV4dGFyZWEsXG4gICAgICAgICAgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcGFyc2UtdHJlZWB9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgIHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUGFyc2VUcmVlKCkge1xuICBjb25zdCB2YWx1ZSA9IFwiXCI7XG5cbiAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG59XG4iXX0=