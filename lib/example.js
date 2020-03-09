'use strict';

var _index = _interopRequireDefault(require("../index"));

var _reaction = require("reaction");

var _paragraph = _interopRequireDefault(require("./example/paragraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  color: red;\n  \n"]);

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

window.React = _reaction.React; ///

var ExampleParagraph = /*#__PURE__*/function (_Paragraph) {
  _inherits(ExampleParagraph, _Paragraph);

  function ExampleParagraph() {
    _classCallCheck(this, ExampleParagraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleParagraph).apply(this, arguments));
  }

  _createClass(ExampleParagraph, [{
    key: "render",
    value: function render(update) {
      var className = this.props.className;
      var children = this.props.children;
      return _reaction.React.createElement("p", {
        className: className
      }, children);
    }
  }]);

  return ExampleParagraph;
}(_paragraph["default"]);

var StyledExampleParagraph = (0, _index["default"])(ExampleParagraph)(_templateObject());
var renderStyles = _index["default"].renderStyles;
renderStyles();
var bodyDOMElement = document.querySelector('body');

_reaction.ReactDOM.render(_reaction.React.createElement("div", null, _reaction.React.createElement(_paragraph["default"], null, "Now also working!"), _reaction.React.createElement(ExampleParagraph, null, "What about this?"), _reaction.React.createElement(StyledExampleParagraph, null, "This is working?")), bodyDOMElement);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsid2luZG93IiwiUmVhY3QiLCJFeGFtcGxlUGFyYWdyYXBoIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJjaGlsZHJlbiIsIlBhcmFncmFwaCIsIlN0eWxlZEV4YW1wbGVQYXJhZ3JhcGgiLCJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJib2R5RE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUZBQSxNQUFNLENBQUNDLEtBQVAsR0FBZUEsZUFBZixDLENBQXNCOztJQUloQkMsZ0I7Ozs7Ozs7Ozs7OzJCQUNHQyxNLEVBQVE7QUFBQSxVQUNMQyxTQURLLEdBQ1MsS0FBS0MsS0FEZCxDQUNMRCxTQURLO0FBQUEsVUFHTEUsUUFISyxHQUdRLEtBQUtELEtBSGIsQ0FHTEMsUUFISztBQUtiLGFBRUU7QUFBRyxRQUFBLFNBQVMsRUFBRUY7QUFBZCxTQUNHRSxRQURILENBRkY7QUFPRDs7OztFQWI0QkMscUI7O0FBZ0IvQixJQUFNQyxzQkFBc0IsR0FBRyx1QkFBVU4sZ0JBQVYsQ0FBSCxtQkFBNUI7SUFNUU8sWSxHQUFpQkMsaUIsQ0FBakJELFk7QUFFUkEsWUFBWTtBQUVaLElBQU1FLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQXZCOztBQUVBQyxtQkFBU0MsTUFBVCxDQUVJLDJDQUNFLDhCQUFDLHFCQUFELDRCQURGLEVBSUUsOEJBQUMsZ0JBQUQsMkJBSkYsRUFPRSw4QkFBQyxzQkFBRCwyQkFQRixDQUZKLEVBZUVKLGNBZkYiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSAnLi4vaW5kZXgnO1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tICdyZWFjdGlvbic7XG5cbndpbmRvdy5SZWFjdCA9IFJlYWN0OyAvLy9cblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuL2V4YW1wbGUvcGFyYWdyYXBoJztcblxuY2xhc3MgRXhhbXBsZVBhcmFncmFwaCBleHRlbmRzIFBhcmFncmFwaCB7XG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU3R5bGVkRXhhbXBsZVBhcmFncmFwaCA9IHdpdGhTdHlsZShFeGFtcGxlUGFyYWdyYXBoKWBcblxuICBjb2xvcjogcmVkO1xuICBcbmA7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5jb25zdCBib2R5RE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuUmVhY3RET00ucmVuZGVyKFxuXG4gICAgPGRpdj5cbiAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgIE5vdyBhbHNvIHdvcmtpbmchXG4gICAgICA8L1BhcmFncmFwaD5cbiAgICAgIDxFeGFtcGxlUGFyYWdyYXBoPlxuICAgICAgICBXaGF0IGFib3V0IHRoaXM/XG4gICAgICA8L0V4YW1wbGVQYXJhZ3JhcGg+XG4gICAgICA8U3R5bGVkRXhhbXBsZVBhcmFncmFwaD5cbiAgICAgICAgVGhpcyBpcyB3b3JraW5nP1xuICAgICAgPC9TdHlsZWRFeGFtcGxlUGFyYWdyYXBoPlxuICAgIDwvZGl2PlxuXG4gICxcbiAgYm9keURPTUVsZW1lbnRcbik7XG4iXX0=