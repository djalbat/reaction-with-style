"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = /*#__PURE__*/ _interop_require_default(require("../../index"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  display: flex;\n  flex-grow: 1;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ColumnDiv = function(props) {
    var className = props.className, children = props.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " column")
    }, children);
};
var _default = (0, _index.default)(ColumnDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9jb2x1bW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgQ29sdW1uRGl2ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGNvbHVtbmB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29sdW1uRGl2KWBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG5cbmA7XG4iXSwibmFtZXMiOlsiQ29sdW1uRGl2IiwicHJvcHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImRpdiIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7OzREQWRzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFNQSxZQUFZLFNBQUNDO0lBQ2pCLElBQVFDLFlBQXdCRCxNQUF4QkMsV0FBV0MsV0FBYUYsTUFBYkU7SUFFbkIscUJBRUUsb0JBQUNDO1FBQUlGLFdBQVcsQUFBQyxHQUFZLE9BQVZBLFdBQVU7T0FDMUJDO0FBSVA7SUFFQSxXQUFlRSxJQUFBQSxjQUFTLEVBQUNMIn0=