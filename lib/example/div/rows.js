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
        "\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RowsDiv = function(props) {
    var className = props.className, children = props.children;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " rows")
    }, children));
};
var _default = (0, _index).default(RowsDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9yb3dzLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlJvd3NEaXYiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FjRCxvRUFNbEM7Ozs7Ozs7QUFsQkEsR0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQVAsS0FBSyxFQUFLLENBQUM7SUFDMUIsR0FBSyxDQUFHLFNBQVMsR0FBZSxLQUFLLENBQTdCLFNBQVMsRUFBRSxRQUFRLEdBQUssS0FBSyxDQUFsQixRQUFRO0lBRTNCLE1BQU0sb0NBRUgsR0FBRztRQUFDLFNBQVMsS0FBZSxNQUFLLENBQWYsU0FBUyxHQUFDLEtBQUs7T0FDL0IsUUFBUTtBQUlmLENBQUM7bUJBWnFCLE1BQWEsVUFjVixPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgUm93c0RpdiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByb3dzYH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSb3dzRGl2KWBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbmA7XG4iXX0=