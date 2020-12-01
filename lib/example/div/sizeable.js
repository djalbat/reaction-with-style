"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../index"));

var _reaction = require("reaction");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  display: flex;\n  \n  width: 48rem;\n  min-width: 24rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  flex-direction: column;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = _reaction.React.Component;

var SizeableDiv = /*#__PURE__*/function (_Component) {
  _inherits(SizeableDiv, _Component);

  var _super = _createSuper(SizeableDiv);

  function SizeableDiv() {
    _classCallCheck(this, SizeableDiv);

    return _super.apply(this, arguments);
  }

  _createClass(SizeableDiv, [{
    key: "render",
    value: function render(update) {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children;
      return _reaction.React.createElement("div", {
        className: "".concat(className, " sizeable"),
        ref: function ref(domElement) {
          _this.domElement = domElement;
        }
      }, children);
    }
  }]);

  return SizeableDiv;
}(Component);

_defineProperty(SizeableDiv, "mixins", [getWidth, setWidth]);

var _default = (0, _index["default"])(SizeableDiv)(_templateObject());

exports["default"] = _default;

function getWidth() {
  var domElementOffsetWidth = this.domElement.offsetWidth,
      width = domElementOffsetWidth; ///

  return width;
}

function setWidth(width) {
  width = "".concat(width, "px"); ///

  this.setStyle("width", width);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVhYmxlLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiU2l6ZWFibGVEaXYiLCJ1cGRhdGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZG9tRWxlbWVudCIsImdldFdpZHRoIiwic2V0V2lkdGgiLCJkb21FbGVtZW50T2Zmc2V0V2lkdGgiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwic2V0U3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxTLEdBQWNDLGUsQ0FBZEQsUzs7SUFFRkUsVzs7Ozs7Ozs7Ozs7OzsyQkFNR0MsTSxFQUFRO0FBQUE7O0FBQUEsd0JBQ21CLEtBQUtDLEtBRHhCO0FBQUEsVUFDTEMsU0FESyxlQUNMQSxTQURLO0FBQUEsVUFDTUMsUUFETixlQUNNQSxRQUROO0FBR2IsYUFFRTtBQUFLLFFBQUEsU0FBUyxZQUFLRCxTQUFMLGNBQWQ7QUFDSyxRQUFBLEdBQUcsRUFBRSxhQUFDRSxVQUFELEVBQWdCO0FBRW5CLFVBQUEsS0FBSSxDQUFDQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUVEO0FBTE4sU0FPR0QsUUFQSCxDQUZGO0FBYUQ7Ozs7RUF0QnVCTixTOztnQkFBcEJFLFcsWUFDWSxDQUNkTSxRQURjLEVBRWRDLFFBRmMsQzs7ZUF3QkgsdUJBQVVQLFdBQVYsQzs7OztBQVlmLFNBQVNNLFFBQVQsR0FBb0I7QUFDbEIsTUFBTUUscUJBQXFCLEdBQUcsS0FBS0gsVUFBTCxDQUFnQkksV0FBOUM7QUFBQSxNQUNNQyxLQUFLLEdBQUdGLHFCQURkLENBRGtCLENBRW1COztBQUVyQyxTQUFPRSxLQUFQO0FBQ0Q7O0FBRUQsU0FBU0gsUUFBVCxDQUFrQkcsS0FBbEIsRUFBeUI7QUFDdkJBLEVBQUFBLEtBQUssYUFBTUEsS0FBTixPQUFMLENBRHVCLENBQ0Q7O0FBRXRCLE9BQUtDLFFBQUwsQ0FBYyxPQUFkLEVBQXVCRCxLQUF2QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBTaXplYWJsZURpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgZ2V0V2lkdGgsXG4gICAgc2V0V2lkdGhcbiAgXTtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc2l6ZWFibGVgfVxuICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU2l6ZWFibGVEaXYpYFxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuICB3aWR0aDogNDhyZW07XG4gIG1pbi13aWR0aDogMjRyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuYDtcblxuZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRPZmZzZXRXaWR0aCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgd2lkdGggPSBkb21FbGVtZW50T2Zmc2V0V2lkdGg7IC8vL1xuXG4gIHJldHVybiB3aWR0aDtcbn1cblxuZnVuY3Rpb24gc2V0V2lkdGgod2lkdGgpIHtcbiAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gIHRoaXMuc2V0U3R5bGUoXCJ3aWR0aFwiLCB3aWR0aCk7XG59XG4iXX0=