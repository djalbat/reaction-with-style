"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _index = /*#__PURE__*/ _interop_require_default(require("./index"));
const _reaction = require("reaction");
const _view = /*#__PURE__*/ _interop_require_default(require("./example/view"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { renderStyles } = _index.default;
window.React = _reaction.React; ///
renderStyles();
const bodyDOMElement = document.querySelector("body");
_reaction.ReactDOM.render(/*#__PURE__*/ _reaction.React.createElement(_view.default, null), bodyDOMElement);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlld1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG53aW5kb3cuUmVhY3QgPSBSZWFjdDsgLy8vXG5cbnJlbmRlclN0eWxlcygpO1xuXG5jb25zdCBib2R5RE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5SZWFjdERPTS5yZW5kZXIoXG5cbiAgICA8Vmlldy8+XG5cbiAgLFxuICBib2R5RE9NRWxlbWVudFxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJ3aW5kb3ciLCJSZWFjdCIsImJvZHlET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUmVhY3RET00iLCJyZW5kZXIiLCJWaWV3Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs4REFFc0I7MEJBRVU7NkRBRWY7Ozs7OztBQUVqQixNQUFNLEVBQUVBLFlBQVksRUFBRSxHQUFHQyxjQUFTO0FBRWxDQyxPQUFPQyxLQUFLLEdBQUdBLGVBQUssRUFBRSxHQUFHO0FBRXpCSDtBQUVBLE1BQU1JLGlCQUFpQkMsU0FBU0MsYUFBYSxDQUFDO0FBRTlDQyxrQkFBUSxDQUFDQyxNQUFNLGVBRVgsOEJBQUNDLGFBQUksU0FHUEwifQ==