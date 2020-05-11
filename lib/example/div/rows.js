"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

///
var RowsDiv = function RowsDiv(props) {
  var className = props.className,
      children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, " rows")
  }, children);
};

var _default = (0, _index["default"])(RowsDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvd3MuanMiXSwibmFtZXMiOlsiUm93c0RpdiIsInByb3BzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDakJDLFNBRGlCLEdBQ09ELEtBRFAsQ0FDakJDLFNBRGlCO0FBQUEsTUFDTkMsUUFETSxHQUNPRixLQURQLENBQ05FLFFBRE07QUFHekIsc0JBRUU7QUFBSyxJQUFBLFNBQVMsWUFBS0QsU0FBTDtBQUFkLEtBQ0dDLFFBREgsQ0FGRjtBQU9ELENBVkQ7O2VBWWUsdUJBQVVILE9BQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IFJvd3NEaXYgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcm93c2B9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUm93c0RpdilgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuIl19