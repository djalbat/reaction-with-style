"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var BNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(BNFTextarea, Textarea);
    function BNFTextarea() {
        _classCallCheck(this, BNFTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(BNFTextarea).apply(this, arguments));
    }
    _createClass(BNFTextarea, [
        {
            key: "render",
            value: function render(update) {
                var _this = this;
                var className = _textarea.default.className, _props = this.props, children = _props.children;
                return(/*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " bnf"),
                    spellCheck: "false",
                    ref: function(domElement) {
                        _this.domElement = domElement;
                    }
                }, children));
            }
        }
    ]);
    return BNFTextarea;
}(_textarea.default);
_defineProperty(BNFTextarea, "mixins", [
    getBNF,
    setBNF
]);
var _default = BNFTextarea;
exports.default = _default;
function getBNF() {
    var value = this.getValue(), bnf = value; ///
    return bnf;
}
function setBNF(bnf) {
    var value = bnf; ///
    this.setValue(value);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5jbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBnZXRCTkYsXG4gICAgc2V0Qk5GXG4gIF07XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBUZXh0YXJlYSxcbiAgICAgICAgICB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBibmZgfVxuICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQk5GVGV4dGFyZWE7XG5cbmZ1bmN0aW9uIGdldEJORigpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgcmV0dXJuIGJuZjtcbn1cblxuZnVuY3Rpb24gc2V0Qk5GKGJuZikge1xuICBjb25zdCB2YWx1ZSA9IGJuZjsgIC8vL1xuXG4gIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xufVxuIl0sIm5hbWVzIjpbIkJORlRleHRhcmVhIiwicmVuZGVyIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJjaGlsZHJlbiIsInRleHRhcmVhIiwic3BlbGxDaGVjayIsInJlZiIsImRvbUVsZW1lbnQiLCJtaXhpbnMiLCJnZXRCTkYiLCJzZXRCTkYiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYm5mIiwic2V0VmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVMsR0FBYSxDQUFiLFNBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUJBLFdBQVcsaUJBQWpCLFFBQVE7Y0FBRkEsV0FBVzthQUFYQSxXQUFXOzhCQUFYQSxXQUFXO2dFQUFYQSxXQUFXOztpQkFBWEEsV0FBVzs7WUFNZkMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7O2dCQUNkLEdBQUssQ0FBR0MsU0FBUyxHQVRBLFNBQWEsU0FTdEJBLFNBQVMsRUFDSSxNQUFVLEdBQVYsSUFBSSxDQUFDQyxLQUFLLEVBQXZCQyxRQUFRLEdBQUssTUFBVSxDQUF2QkEsUUFBUTtnQkFFaEIsTUFBTSxtQ0FFSEMsQ0FBUTtvQkFBQ0gsU0FBUyxFQUFHLENBQUEsRUFBWSxNQUFJLENBQWRBLFNBQVMsRUFBQyxDQUFJO29CQUM1QkksVUFBVSxFQUFDLENBQU87b0JBQ2xCQyxHQUFHLEVBQUUsUUFBUSxDQUFQQyxVQUFVLEVBQUssQ0FBQzs4QkFFZkEsVUFBVSxHQUFHQSxVQUFVO29CQUU5QixDQUFDO21CQUVSSixRQUFRO1lBSWYsQ0FBQzs7O1dBeEJHTCxXQUFXO0VBRkksU0FBYTtnQkFFNUJBLFdBQVcsRUFDUlUsQ0FBTSxTQUFHLENBQUM7SUFDZkMsTUFBTTtJQUNOQyxNQUFNO0FBQ1IsQ0FBQztlQXVCWVosV0FBVzs7U0FFakJXLE1BQU0sR0FBRyxDQUFDO0lBQ2pCLEdBQUssQ0FBQ0UsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsR0FBRyxHQUFHRixLQUFLLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRXZCLE1BQU0sQ0FBQ0UsR0FBRztBQUNaLENBQUM7U0FFUUgsTUFBTSxDQUFDRyxHQUFHLEVBQUUsQ0FBQztJQUNwQixHQUFLLENBQUNGLEtBQUssR0FBR0UsR0FBRyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUV2QixJQUFJLENBQUNDLFFBQVEsQ0FBQ0gsS0FBSztBQUNyQixDQUFDIn0=