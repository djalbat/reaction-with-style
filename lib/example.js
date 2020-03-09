'use strict';

var _index = _interopRequireDefault(require("../index"));

var _reaction = require("reaction");

var _link = _interopRequireDefault(require("./example/link"));

var _section = _interopRequireDefault(require("./example/section"));

var _paragraph = _interopRequireDefault(require("./example/paragraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n  color: green;\n  \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n  color: black;\n  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  color: green;\n  background: lightyellow;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

window.React = _reaction.React; ///

var ExampleLink = (0, _index["default"])(_link["default"])(_templateObject());

var ExampleParagraph = /*#__PURE__*/function (_Paragraph) {
  _inherits(ExampleParagraph, _Paragraph);

  function ExampleParagraph() {
    _classCallCheck(this, ExampleParagraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExampleParagraph).apply(this, arguments));
  }

  return ExampleParagraph;
}(_paragraph["default"]);

var StyledExampleParagraph = (0, _index["default"])(ExampleParagraph)(_templateObject2()); // class ExampleParagraph extends Paragraph {
//   render(update) {
//     const { className } = Paragraph;
//
//     debugger
//   }
// }
// const ExampleParagraph = withStyle(Paragraph)`
//
//   color: red;
// `;

var ExampleSection = (0, _index["default"])(_section["default"])(_templateObject3());
var renderStyles = _index["default"].renderStyles;
renderStyles();
var bodyDOMElement = document.querySelector('body');

_reaction.ReactDOM.render(_reaction.React.createElement("div", null, _reaction.React.createElement(ExampleLink, null, "Working!"), _reaction.React.createElement(_link["default"], null, "Yes!"), _reaction.React.createElement(_section["default"], null, "Working!"), _reaction.React.createElement(ExampleSection, null, "Also working!"), _reaction.React.createElement(_paragraph["default"], null, "Now also working!"), _reaction.React.createElement(StyledExampleParagraph, null, "This is working?")), bodyDOMElement);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsid2luZG93IiwiUmVhY3QiLCJFeGFtcGxlTGluayIsIkxpbmsiLCJFeGFtcGxlUGFyYWdyYXBoIiwiUGFyYWdyYXBoIiwiU3R5bGVkRXhhbXBsZVBhcmFncmFwaCIsIkV4YW1wbGVTZWN0aW9uIiwiU2VjdGlvbiIsInJlbmRlclN0eWxlcyIsIndpdGhTdHlsZSIsImJvZHlET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUlBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpBQSxNQUFNLENBQUNDLEtBQVAsR0FBZUEsZUFBZixDLENBQXNCOztBQU10QixJQUFNQyxXQUFXLEdBQUcsdUJBQVVDLGdCQUFWLENBQUgsbUJBQWpCOztJQU9NQyxnQjs7Ozs7Ozs7OztFQUF5QkMscUI7O0FBRS9CLElBQU1DLHNCQUFzQixHQUFHLHVCQUFVRixnQkFBVixDQUFILG9CQUE1QixDLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxjQUFjLEdBQUcsdUJBQVVDLG1CQUFWLENBQUgsb0JBQXBCO0lBTVFDLFksR0FBaUJDLGlCLENBQWpCRCxZO0FBRVJBLFlBQVk7QUFFWixJQUFNRSxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUF2Qjs7QUFFQUMsbUJBQVNDLE1BQVQsQ0FFSSwyQ0FDRSw4QkFBQyxXQUFELG1CQURGLEVBSUUsOEJBQUMsZ0JBQUQsZUFKRixFQU9FLDhCQUFDLG1CQUFELG1CQVBGLEVBVUUsOEJBQUMsY0FBRCx3QkFWRixFQWFFLDhCQUFDLHFCQUFELDRCQWJGLEVBZ0JFLDhCQUFDLHNCQUFELDJCQWhCRixDQUZKLEVBd0JFSixjQXhCRiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tICcuLi9pbmRleCc7XG5cbmltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSB9IGZyb20gJ3JlYWN0aW9uJztcblxud2luZG93LlJlYWN0ID0gUmVhY3Q7IC8vL1xuXG5pbXBvcnQgTGluayBmcm9tICcuL2V4YW1wbGUvbGluayc7XG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL2V4YW1wbGUvc2VjdGlvbic7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4vZXhhbXBsZS9wYXJhZ3JhcGgnO1xuXG5jb25zdCBFeGFtcGxlTGluayA9IHdpdGhTdHlsZShMaW5rKWBcblxuICBjb2xvcjogZ3JlZW47XG4gIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xuXG5gO1xuXG5jbGFzcyBFeGFtcGxlUGFyYWdyYXBoIGV4dGVuZHMgUGFyYWdyYXBoIHt9XG5cbmNvbnN0IFN0eWxlZEV4YW1wbGVQYXJhZ3JhcGggPSB3aXRoU3R5bGUoRXhhbXBsZVBhcmFncmFwaClgXG5cbiAgY29sb3I6IGJsYWNrO1xuICBcbmA7XG5cbi8vIGNsYXNzIEV4YW1wbGVQYXJhZ3JhcGggZXh0ZW5kcyBQYXJhZ3JhcGgge1xuLy8gICByZW5kZXIodXBkYXRlKSB7XG4vLyAgICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFBhcmFncmFwaDtcbi8vXG4vLyAgICAgZGVidWdnZXJcbi8vICAgfVxuLy8gfVxuXG4vLyBjb25zdCBFeGFtcGxlUGFyYWdyYXBoID0gd2l0aFN0eWxlKFBhcmFncmFwaClgXG4vL1xuLy8gICBjb2xvcjogcmVkO1xuLy8gYDtcblxuY29uc3QgRXhhbXBsZVNlY3Rpb24gPSB3aXRoU3R5bGUoU2VjdGlvbilgXG5cbiAgY29sb3I6IGdyZWVuO1xuICBcbmA7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5jb25zdCBib2R5RE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuUmVhY3RET00ucmVuZGVyKFxuXG4gICAgPGRpdj5cbiAgICAgIDxFeGFtcGxlTGluaz5cbiAgICAgICAgV29ya2luZyFcbiAgICAgIDwvRXhhbXBsZUxpbms+XG4gICAgICA8TGluaz5cbiAgICAgICAgWWVzIVxuICAgICAgPC9MaW5rPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIFdvcmtpbmchXG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8RXhhbXBsZVNlY3Rpb24+XG4gICAgICAgIEFsc28gd29ya2luZyFcbiAgICAgIDwvRXhhbXBsZVNlY3Rpb24+XG4gICAgICA8UGFyYWdyYXBoPlxuICAgICAgICBOb3cgYWxzbyB3b3JraW5nIVxuICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICA8U3R5bGVkRXhhbXBsZVBhcmFncmFwaD5cbiAgICAgICAgVGhpcyBpcyB3b3JraW5nP1xuICAgICAgPC9TdHlsZWRFeGFtcGxlUGFyYWdyYXBoPlxuICAgIDwvZGl2PlxuXG4gICxcbiAgYm9keURPTUVsZW1lbnRcbik7XG4iXX0=