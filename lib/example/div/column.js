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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9jb2x1bW4uanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiQ29sdW1uRGl2IiwicHJvcHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsImRpdiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBY0MsMEZBUXBDOzs7Ozs7O0FBcEJBLEdBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFQLEtBQUssRUFBSyxDQUFDO0lBQzVCLEdBQUssQ0FBRyxTQUFTLEdBQWUsS0FBSyxDQUE3QixTQUFTLEVBQUUsUUFBUSxHQUFLLEtBQUssQ0FBbEIsUUFBUTtJQUUzQixNQUFNLG9DQUVILEdBQUc7UUFBQyxTQUFTLEtBQWUsTUFBTyxDQUFqQixTQUFTLEdBQUMsT0FBTztPQUNqQyxRQUFRO0FBSWYsQ0FBQzttQkFacUIsTUFBYSxVQWNWLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCBDb2x1bW5EaXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY29sdW1uYH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDb2x1bW5EaXYpYFxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcblxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG5cbmA7XG4iXX0=