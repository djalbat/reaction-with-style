"use strict";

var _index = _interopRequireDefault(require("./index"));

var _reaction = require("reaction");

var _view = _interopRequireDefault(require("./example/view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  color: red;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var renderStyles = _index["default"].renderStyles;
window.React = _reaction.React; ///

var Paragraph = _index["default"].p(_templateObject());

renderStyles();
var bodyDOMElement = document.querySelector("body");
var className = Paragraph.className;

_reaction.ReactDOM.render( /*#__PURE__*/_reaction.React.createElement(Paragraph, {
  className: "".concat(className, " blah")
}, "Just testing..."), bodyDOMElement);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwid2luZG93IiwiUmVhY3QiLCJQYXJhZ3JhcGgiLCJwIiwiYm9keURPTUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc05hbWUiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUUEsWSxHQUFpQkMsaUIsQ0FBakJELFk7QUFFUkUsTUFBTSxDQUFDQyxLQUFQLEdBQWVBLGVBQWYsQyxDQUFzQjs7QUFFdEIsSUFBTUMsU0FBUyxHQUFHSCxrQkFBVUksQ0FBYixtQkFBZjs7QUFNQUwsWUFBWTtBQUVaLElBQU1NLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQXZCO0lBRVFDLFMsR0FBY0wsUyxDQUFkSyxTOztBQUVSQyxtQkFBU0MsTUFBVCxlQUVJLDhCQUFDLFNBQUQ7QUFBVyxFQUFBLFNBQVMsWUFBS0YsU0FBTDtBQUFwQixxQkFGSixFQU9FSCxjQVBGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbndpbmRvdy5SZWFjdCA9IFJlYWN0OyAvLy9cblxuY29uc3QgUGFyYWdyYXBoID0gd2l0aFN0eWxlLnBgXG5cbiAgY29sb3I6IHJlZDtcbiAgXG5gO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxuY29uc3QgYm9keURPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuY29uc3QgeyBjbGFzc05hbWUgfSA9IFBhcmFncmFwaDtcblxuUmVhY3RET00ucmVuZGVyKFxuXG4gICAgPFBhcmFncmFwaCBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gYmxhaGB9PlxuICAgICAgSnVzdCB0ZXN0aW5nLi4uXG4gICAgPC9QYXJhZ3JhcGg+XG5cbiAgLFxuICBib2R5RE9NRWxlbWVudFxuKTtcbiJdfQ==