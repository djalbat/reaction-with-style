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
        "\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: row;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ColumnsDiv = function(props) {
    var className = props.className, children = props.children;
    return /*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " columns")
    }, children);
};
var _default = (0, _index.default)(ColumnsDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9jb2x1bW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IENvbHVtbnNEaXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY29sdW1uc2B9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29sdW1uc0RpdilgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5gO1xuIl0sIm5hbWVzIjpbIkNvbHVtbnNEaXYiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2Iiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7NERBZHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQU1BLGFBQWEsU0FBQ0M7SUFDbEIsSUFBUUMsWUFBd0JELE1BQXhCQyxXQUFXQyxXQUFhRixNQUFiRTtJQUVuQixxQkFFRSxvQkFBQ0M7UUFBSUYsV0FBVyxBQUFDLEdBQVksT0FBVkEsV0FBVTtPQUMxQkM7QUFJUDtJQUVBLFdBQWVFLElBQUFBLGNBQVMsRUFBQ0wifQ==