"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var LexicalEntriesTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(LexicalEntriesTextarea, _Textarea);

  var _super = _createSuper(LexicalEntriesTextarea);

  function LexicalEntriesTextarea() {
    _classCallCheck(this, LexicalEntriesTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(LexicalEntriesTextarea, [{
    key: "render",
    value: function render(update) {
      var _this = this;

      var className = _textarea["default"].className,
          children = this.props.children;
      return React.createElement("textarea", {
        className: "".concat(className, " lexical-entries"),
        spellCheck: "false",
        ref: function ref(domElement) {
          _this.domElement = domElement;
        }
      }, children);
    }
  }]);

  return LexicalEntriesTextarea;
}(_textarea["default"]);

exports["default"] = LexicalEntriesTextarea;

_defineProperty(LexicalEntriesTextarea, "mixins", [getLexicalEntries, setLexicalEntries]);

function getLexicalEntries() {
  var value = this.getValue(),
      lexicalEntries = JSON.parse(value);
  return lexicalEntries;
}

function setLexicalEntries(lexicalEntries) {
  var value = JSON.stringify(lexicalEntries, null, "  ");
  this.setValue(value);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGljYWxFbnRyaWVzLmpzIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJUZXh0YXJlYSIsImNoaWxkcmVuIiwicHJvcHMiLCJkb21FbGVtZW50IiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJzZXRMZXhpY2FsRW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHNCOzs7Ozs7Ozs7Ozs7OzJCQU1aQyxNLEVBQVE7QUFBQTs7QUFDUCxVQUFFQyxTQUFGLEdBQWdCQyxvQkFBaEIsQ0FBRUQsU0FBRjtBQUFBLFVBQ0VFLFFBREYsR0FDZSxLQUFLQyxLQURwQixDQUNFRCxRQURGO0FBR04sYUFFRTtBQUFVLFFBQUEsU0FBUyxZQUFLRixTQUFMLHFCQUFuQjtBQUNVLFFBQUEsVUFBVSxFQUFDLE9BRHJCO0FBRVUsUUFBQSxHQUFHLEVBQUUsYUFBQ0ksVUFBRCxFQUFnQjtBQUVuQixVQUFBLEtBQUksQ0FBQ0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFFRDtBQU5YLFNBUUdGLFFBUkgsQ0FGRjtBQWNEOzs7O0VBeEJpREQsb0I7Ozs7Z0JBQS9CSCxzQixZQUNILENBQ2RPLGlCQURjLEVBRWRDLGlCQUZjLEM7O0FBMEJsQixTQUFTRCxpQkFBVCxHQUE2QjtBQUMzQixNQUFNRSxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsTUFDTUMsY0FBYyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osS0FBWCxDQUR2QjtBQUdBLFNBQU9FLGNBQVA7QUFDRDs7QUFFRCxTQUFTSCxpQkFBVCxDQUEyQkcsY0FBM0IsRUFBMkM7QUFDekMsTUFBTUYsS0FBSyxHQUFHRyxJQUFJLENBQUNFLFNBQUwsQ0FBZUgsY0FBZixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxDQUFkO0FBRUEsT0FBS0ksUUFBTCxDQUFjTixLQUFkO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXhpY2FsRW50cmllc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIGdldExleGljYWxFbnRyaWVzLFxuICAgIHNldExleGljYWxFbnRyaWVzXG4gIF07XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBUZXh0YXJlYSxcbiAgICAgICAgICB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBsZXhpY2FsLWVudHJpZXNgfVxuICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICBsZXhpY2FsRW50cmllcyA9IEpTT04ucGFyc2UodmFsdWUpO1xuXG4gIHJldHVybiBsZXhpY2FsRW50cmllcztcbn1cblxuZnVuY3Rpb24gc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpIHtcbiAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgXCIgIFwiKTtcblxuICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbn1cbiJdfQ==