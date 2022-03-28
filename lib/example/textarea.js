"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../index"));
var _reaction = require("reaction");
var _events = require("./events");
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  border: 1px solid darkgrey;\n  height: 24rem;\n  resize: vertical;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  white-space: pre;\n  font-family: monospace;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Component = _reaction.React.Component;
var Textarea = /*#__PURE__*/ function(Component1) {
    _inherits(Textarea, Component1);
    var _super = _createSuper(Textarea);
    function Textarea() {
        _classCallCheck(this, Textarea);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "onKeyUp", function(keyUpHandler) {
            var firstChild = _this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement();
            firstChildDOMElement.addEventListener(_events.KEYUP_EVENT, function(event) {
                keyUpHandler(event);
            });
        });
        return _this;
    }
    _createClass(Textarea, [
        {
            key: "setValue",
            value: function setValue(value) {
                var firstChild = this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement();
                firstChildDOMElement.value = value;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                var firstChild = this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement();
                var value = firstChildDOMElement.value;
                return value;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var onKeyUp = this.props.onKeyUp;
                if (onKeyUp) {
                    var keyUpHandler = onKeyUp; ///
                    this.onKeyUp(keyUpHandler);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
            ///
            }
        }
    ]);
    return Textarea;
}(Component);
var _default = (0, _index).default(Textarea)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhLmpzIiwiLi4vc3JjL2V4YW1wbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgS0VZVVBfRVZFTlQgfSBmcm9tIFwiLi9ldmVudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gIG9uS2V5VXAgPSAoa2V5VXBIYW5kbGVyKSA9PiB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpLFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gZmlyc3RDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICBmaXJzdENoaWxkRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWVVQX0VWRU5ULCAoZXZlbnQpID0+IHtcbiAgICAgIGtleVVwSGFuZGxlcihldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKSxcbiAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSBmaXJzdENoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGZpcnN0Q2hpbGRET01FbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCksXG4gICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gZmlyc3RDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IGZpcnN0Q2hpbGRET01FbGVtZW50LnZhbHVlO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbktleVVwIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9uS2V5VXApIHtcbiAgICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IG9uS2V5VXA7IC8vL1xuXG4gICAgICB0aGlzLm9uS2V5VXAoa2V5VXBIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVGV4dGFyZWEpYFxuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBoZWlnaHQ6IDI0cmVtO1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlld1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG53aW5kb3cuUmVhY3QgPSBSZWFjdDsgLy8vXG5cbnJlbmRlclN0eWxlcygpO1xuXG5jb25zdCBib2R5RE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5SZWFjdERPTS5yZW5kZXIoXG5cbiAgICA8Vmlldy8+XG5cbiAgLFxuICBib2R5RE9NRWxlbWVudFxuKTtcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJSZWFjdCIsIlRleHRhcmVhIiwib25LZXlVcCIsImtleVVwSGFuZGxlciIsImZpcnN0Q2hpbGQiLCJnZXRGaXJzdENoaWxkIiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIktFWVVQX0VWRU5UIiwiZXZlbnQiLCJzZXRWYWx1ZSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQixHQUFVLENBQVYsTUFBVTtBQUVWLEdBQVUsQ0FBVixTQUFVO0FBRUosR0FBVSxDQUFWLE9BQVU7Ozs7Ozs7Ozs7Ozs7Ozs4REFOdEM7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7OzhCQUFBOzs7Ozs7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7Ozs7O1FBbURtQyxDQVVuQzs7OztLQTdEQTs7O0FBUUEsR0FBSyxDQUFHQSxTQUFTLEdBQUtDLFNBQUssT0FBbkJELFNBQVM7QUFFakIsR0FBSyxDQUFDRSxRQUFRLGlCQUFkLFFBQVE7bUNBVlI7O2FBVU1BLFFBQVE7dUNBVmQ7OzZDQUFBO3VEQVdFQyxDQUFPLFVBQUcsUUFBUSxDQUFQQyxZQUFZLEVBQUssQ0FBQztZQUMzQixHQUFLLENBQUNDLFVBQVUsU0FBUUMsYUFBYSxJQUMvQkMsb0JBQW9CLEdBQUdGLFVBQVUsQ0FBQ0csYUFBYTtZQUVyREQsb0JBQW9CLENBQUNFLGdCQUFnQixDQUFDQyxPQUFXLGNBQUUsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztnQkFDN0RQLFlBQVksQ0FBQ08sS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENDbEJILENEa0JHOzs7OztZQUVEQyxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFDZixHQUFLLENBQUNSLFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsSUFDakNDLG9CQUFvQixHQUFHRixVQUFVLENBQUNHLGFBQWE7Z0JBRW5ERCxvQkFBb0IsQ0FBQ00sS0FBSyxHQUFHQSxLQUFLLENBQUM7WUFDckMsQ0FBQzs7O1lBRURDLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUNULFVBQVUsR0FBRyxJQUFJLENBQUNDLGFBQWEsSUFDakNDLG9CQUFvQixHQUFHRixVQUFVLENBQUNHLGFBQWE7Z0JBRW5ELEdBQUssQ0FBQ0ssS0FBSyxHQUFHTixvQkFBb0IsQ0FBQ00sS0FBSztnQkFFeEMsTUFBTSxDQUFDQSxLQUFLO1lBQ2QsQ0FBQzs7O1lBRURFLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBakJBLFFBQVEsQ0FBUkEsaUJBQWlCLEdBQUcsQ0FBQztnQkFDbkIsR0FBSyxDQUFHWixPQUFPLEdBQUssSUFBSSxDQUFDYSxLQUFLLENBQXRCYixPQUFPO2dCQUVmLEVBQUUsRUFBRUEsT0FBTyxFQUFFLENBQUM7b0JBQ1osR0FBSyxDQUFDQyxZQUFZLEdBQUdELE9BQU8sRUFBRSxFQUFHLEFBQUgsQ0FBRztvQkFFakMsSUFBSSxDQUFDQSxPQUFPLENBQUNDLFlBQVksQ0FBQyxDQUFDO2dCQUM3QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRURhLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFBQVEsQ0FBUkEsb0JBQW9CLEdBQUcsQ0FBQztZQUN0QixFQUFHLEFBQUgsQ0FBRztZQUNMLENBQUM7O01BaERIOztFQVV1QmpCLFNBQVM7bUJBeUNqQmtCLE1BQVMsVUFBQ2hCLFFBQVE7MEJBbkRqQyJ9