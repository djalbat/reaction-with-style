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
        "\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: row;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ColumnsDiv = function(props) {
    var className = props.className, children = props.children;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " columns")
    }, children));
};
var _default = (0, _index).default(ColumnsDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9jb2x1bW5zLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkNvbHVtbnNEaXYiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FjRSxpRUFNckM7Ozs7Ozs7QUFsQkEsR0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQVAsS0FBSyxFQUFLLENBQUM7SUFDN0IsR0FBSyxDQUFHLFNBQVMsR0FBZSxLQUFLLENBQTdCLFNBQVMsRUFBRSxRQUFRLEdBQUssS0FBSyxDQUFsQixRQUFRO0lBRTNCLE1BQU0sb0NBRUgsR0FBRztRQUFDLFNBQVMsS0FBZSxNQUFRLENBQWxCLFNBQVMsR0FBQyxRQUFRO09BQ2xDLFFBQVE7QUFJZixDQUFDO21CQVpxQixNQUFhLFVBY1YsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IENvbHVtbnNEaXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY29sdW1uc2B9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29sdW1uc0RpdilgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5gO1xuIl19