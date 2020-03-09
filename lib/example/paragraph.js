'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../index"));

var _reaction = require("reaction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  color: blue;\n  background-color: lightgreen;\n\n"]);

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Component = _reaction.React.Component;

var Paragraph = /*#__PURE__*/function (_Component) {
  _inherits(Paragraph, _Component);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(Paragraph).apply(this, arguments));
  }

  _createClass(Paragraph, [{
    key: "render",
    value: function render(update) {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return _reaction.React.createElement("p", {
        className: className
      }, children);
    }
  }]);

  return Paragraph;
}(Component);

var _default = (0, _index["default"])(Paragraph)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmFncmFwaC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJSZWFjdCIsIlBhcmFncmFwaCIsInVwZGF0ZSIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsUyxHQUFjQyxlLENBQWRELFM7O0lBRUZFLFM7Ozs7Ozs7Ozs7OzJCQUNHQyxNLEVBQVE7QUFBQSx3QkFDbUIsS0FBS0MsS0FEeEI7QUFBQSxVQUNMQyxTQURLLGVBQ0xBLFNBREs7QUFBQSxVQUNNQyxRQUROLGVBQ01BLFFBRE47QUFHYixhQUVFO0FBQUcsUUFBQSxTQUFTLEVBQUVEO0FBQWQsU0FDR0MsUUFESCxDQUZGO0FBT0Q7Ozs7RUFYcUJOLFM7O2VBY1QsdUJBQVVFLFNBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tICcuLi8uLi9pbmRleCc7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSAncmVhY3Rpb24nO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFBhcmFncmFwaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShQYXJhZ3JhcGgpYFxuXG4gIGNvbG9yOiBibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuXG5gO1xuIl19