"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BNFTextarea;
    }
});
var _textarea = /*#__PURE__*/ _interopRequireDefault(require("../textarea"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var BNFTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(BNFTextarea, Textarea);
    var _super = _createSuper(BNFTextarea);
    function BNFTextarea() {
        _classCallCheck(this, BNFTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(BNFTextarea, [
        {
            key: "getBNF",
            value: function getBNF() {
                var value = this.getValue(), bnf = value; ///
                return bnf;
            }
        },
        {
            key: "setBNF",
            value: function setBNF(bnf) {
                var value = bnf; ///
                this.setValue(value);
            }
        },
        {
            key: "render",
            value: function render(update) {
                var className = _textarea.default.className, children = this.props.children;
                return /*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " bnf"),
                    spellCheck: "false"
                }, children);
            }
        }
    ]);
    return BNFTextarea;
}(_textarea.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0Qk5GKGJuZikge1xuICAgIGNvbnN0IHZhbHVlID0gYm5mOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gVGV4dGFyZWEsXG4gICAgICAgICAgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gYm5mYH0gc3BlbGxDaGVjaz1cImZhbHNlXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICApO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkJORlRleHRhcmVhIiwiZ2V0Qk5GIiwidmFsdWUiLCJnZXRWYWx1ZSIsImJuZiIsInNldEJORiIsInNldFZhbHVlIiwicmVuZGVyIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwiVGV4dGFyZWEiLCJjaGlsZHJlbiIsInByb3BzIiwidGV4dGFyZWEiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFJUUEsV0FBVzs7OzZEQUZYLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSxXQUFXLGlCQUFqQjtjQUFNQSxXQUFXOzhCQUFYQSxXQUFXO2FBQVhBLFdBQVc7OEJBQVhBLFdBQVc7OztpQkFBWEEsV0FBVzs7WUFDOUJDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNQLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsRUFBRSxFQUN2QkMsR0FBRyxHQUFHRixLQUFLLEFBQUMsRUFBRSxHQUFHO2dCQUV2QixPQUFPRSxHQUFHLENBQUM7WUFDYixDQUFDOzs7WUFFREMsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNELEdBQUcsRUFBRTtnQkFDVixJQUFNRixLQUFLLEdBQUdFLEdBQUcsQUFBQyxFQUFFLEdBQUc7Z0JBRXZCLElBQUksQ0FBQ0UsUUFBUSxDQUFDSixLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDOzs7WUFFREssR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtnQkFDYixJQUFNLEFBQUVDLFNBQVMsR0FBS0MsU0FBUSxRQUFBLENBQXRCRCxTQUFTLEFBQWEsRUFDeEIsQUFBRUUsUUFBUSxHQUFLLElBQUksQ0FBQ0MsS0FBSyxDQUF2QkQsUUFBUSxBQUFlLEFBQUM7Z0JBRWhDLHFCQUVFLG9CQUFDRSxVQUFRO29CQUFDSixTQUFTLEVBQUUsQUFBQyxFQUFBLENBQVksTUFBSSxDQUFkQSxTQUFTLEVBQUMsTUFBSSxDQUFDO29CQUFFSyxVQUFVLEVBQUMsT0FBTzttQkFDeERILFFBQVEsQ0FDQSxDQUVYO1lBQ0osQ0FBQzs7O1dBekJrQlgsV0FBVztDQTBCL0IsQ0ExQndDVSxTQUFRLFFBQUEsQ0EwQmhEIn0=