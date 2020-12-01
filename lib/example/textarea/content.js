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

var ContentTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(ContentTextarea, _Textarea);

  var _super = _createSuper(ContentTextarea);

  function ContentTextarea() {
    _classCallCheck(this, ContentTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(ContentTextarea, [{
    key: "render",
    value: function render(update) {
      var _this = this;

      var className = _textarea["default"].className,
          children = this.props.children;
      return React.createElement("textarea", {
        className: "".concat(className, " content"),
        spellCheck: "false",
        ref: function ref(domElement) {
          _this.domElement = domElement;
        }
      }, children);
    }
  }]);

  return ContentTextarea;
}(_textarea["default"]);

_defineProperty(ContentTextarea, "mixins", [getContent, setContent]);

var _default = ContentTextarea;
exports["default"] = _default;

function getContent() {
  var value = this.getValue(),
      content = value; ///

  return content;
}

function setContent(content) {
  var value = content; ///

  this.setValue(value);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOlsiQ29udGVudFRleHRhcmVhIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwiVGV4dGFyZWEiLCJjaGlsZHJlbiIsInByb3BzIiwiZG9tRWxlbWVudCIsImdldENvbnRlbnQiLCJzZXRDb250ZW50IiwidmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7Ozs7Ozs7Ozs7Ozs7MkJBTUdDLE0sRUFBUTtBQUFBOztBQUNQLFVBQUVDLFNBQUYsR0FBZ0JDLG9CQUFoQixDQUFFRCxTQUFGO0FBQUEsVUFDRUUsUUFERixHQUNlLEtBQUtDLEtBRHBCLENBQ0VELFFBREY7QUFHTixhQUVFO0FBQVUsUUFBQSxTQUFTLFlBQUtGLFNBQUwsYUFBbkI7QUFDVSxRQUFBLFVBQVUsRUFBQyxPQURyQjtBQUVVLFFBQUEsR0FBRyxFQUFFLGFBQUNJLFVBQUQsRUFBZ0I7QUFFbkIsVUFBQSxLQUFJLENBQUNBLFVBQUwsR0FBa0JBLFVBQWxCO0FBRUQ7QUFOWCxTQVFHRixRQVJILENBRkY7QUFjRDs7OztFQXhCMkJELG9COztnQkFBeEJILGUsWUFDWSxDQUNkTyxVQURjLEVBRWRDLFVBRmMsQzs7ZUEwQkhSLGU7OztBQUVmLFNBQVNPLFVBQVQsR0FBc0I7QUFDcEIsTUFBTUUsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLE1BQ01DLE9BQU8sR0FBR0YsS0FEaEIsQ0FEb0IsQ0FFSTs7QUFFeEIsU0FBT0UsT0FBUDtBQUNEOztBQUVELFNBQVNILFVBQVQsQ0FBb0JHLE9BQXBCLEVBQTZCO0FBQzNCLE1BQU1GLEtBQUssR0FBR0UsT0FBZCxDQUQyQixDQUNIOztBQUV4QixPQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmNsYXNzIENvbnRlbnRUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBnZXRDb250ZW50LFxuICAgIHNldENvbnRlbnRcbiAgXTtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGNvbnRlbnRgfVxuICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFRleHRhcmVhO1xuXG5mdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgY29udGVudCA9IHZhbHVlOyAgLy8vXG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudCkge1xuICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQ7ICAvLy9cblxuICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbn1cbiJdfQ==