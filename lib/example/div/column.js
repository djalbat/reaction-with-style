"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../index"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _taggedTemplateLiteral(strings, raw) {
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
    var data = _taggedTemplateLiteral([
        "\n\n  display: flex;\n  flex-grow: 1;\n\n  padding-left: 1rem;\n  padding-right: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ColumnDiv = function(props) {
    var className = props.className, children = props.children;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " column")
    }, children));
};
var _default = (0, _index).default(ColumnDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9jb2x1bW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgQ29sdW1uRGl2ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGNvbHVtbmB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29sdW1uRGl2KWBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkNvbHVtbkRpdiIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJkaXYiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBYSxDQUFiLE1BQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWNDLENBUXBDOzs7Ozs7O0FBcEJBLEdBQUssQ0FBQ0EsU0FBUyxHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7SUFDNUIsR0FBSyxDQUFHQyxTQUFTLEdBQWVELEtBQUssQ0FBN0JDLFNBQVMsRUFBRUMsUUFBUSxHQUFLRixLQUFLLENBQWxCRSxRQUFRO0lBRTNCLE1BQU0sbUNBRUhDLENBQUc7UUFBQ0YsU0FBUyxFQUFHLENBQUEsRUFBWSxNQUFPLENBQWpCQSxTQUFTLEVBQUMsQ0FBTztPQUNqQ0MsUUFBUTtBQUlmLENBQUM7bUJBWnFCLE1BQWEsVUFjVkgsU0FBUyJ9