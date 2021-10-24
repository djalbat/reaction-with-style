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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9yb3dzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IFJvd3NEaXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcm93c2B9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUm93c0RpdilgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuIl0sIm5hbWVzIjpbIlJvd3NEaXYiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFjRCxDQU1sQzs7Ozs7OztBQWxCQSxHQUFLLENBQUNBLE9BQU8sR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO0lBQzFCLEdBQUssQ0FBR0MsU0FBUyxHQUFlRCxLQUFLLENBQTdCQyxTQUFTLEVBQUVDLFFBQVEsR0FBS0YsS0FBSyxDQUFsQkUsUUFBUTtJQUUzQixNQUFNLG1DQUVIQyxDQUFHO1FBQUNGLFNBQVMsRUFBRyxDQUFBLEVBQVksTUFBSyxDQUFmQSxTQUFTLEVBQUMsQ0FBSztPQUMvQkMsUUFBUTtBQUlmLENBQUM7bUJBWnFCLE1BQWEsVUFjVkgsT0FBTyJ9