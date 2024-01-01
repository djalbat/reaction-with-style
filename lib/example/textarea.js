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
var _index = /*#__PURE__*/ _interop_require_default(require("../index"));
var _reaction = require("reaction");
var _events = require("./events");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  border: 1px solid darkgrey;\n  height: 24rem;\n  resize: vertical;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  white-space: pre;\n  font-family: monospace;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Component = _reaction.React.Component;
var Textarea = /*#__PURE__*/ function(Component) {
    _inherits(Textarea, Component);
    var _super = _create_super(Textarea);
    function Textarea() {
        _class_call_check(this, Textarea);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "onKeyUp", function(keyUpHandler) {
            var firstChild = _this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement();
            firstChildDOMElement.addEventListener(_events.KEYUP_EVENT, function(event) {
                keyUpHandler(event);
            });
        });
        return _this;
    }
    _create_class(Textarea, [
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
var _default = (0, _index.default)(Textarea)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UIH0gZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbktleVVwID0gKGtleVVwSGFuZGxlcikgPT4ge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKSxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IGZpcnN0Q2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZmlyc3RDaGlsZERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlVUF9FVkVOVCwgKGV2ZW50KSA9PiB7XG4gICAgICBrZXlVcEhhbmRsZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCksXG4gICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gZmlyc3RDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICBmaXJzdENoaWxkRE9NRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpLFxuICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IGZpcnN0Q2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmaXJzdENoaWxkRE9NRWxlbWVudC52YWx1ZTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25LZXlVcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvbktleVVwKSB7XG4gICAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSBvbktleVVwOyAvLy9cblxuICAgICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRleHRhcmVhKWBcblxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cbmA7XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJUZXh0YXJlYSIsIm9uS2V5VXAiLCJrZXlVcEhhbmRsZXIiLCJmaXJzdENoaWxkIiwiZ2V0Rmlyc3RDaGlsZCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJLRVlVUF9FVkVOVCIsImV2ZW50Iiwic2V0VmFsdWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtREE7OztlQUFBOzs7NERBakRzQjt3QkFFQTtzQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU0sQUFBRUEsWUFBY0MsZUFBSyxDQUFuQkQ7QUFFUixJQUFBLEFBQU1FLHlCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtEQUFBQSxXQUFVLFNBQUNDO1lBQ1QsSUFBTUMsYUFBYSxNQUFLQyxhQUFhLElBQy9CQyx1QkFBdUJGLFdBQVdHLGFBQWE7WUFFckRELHFCQUFxQkUsZ0JBQWdCLENBQUNDLG1CQUFXLEVBQUUsU0FBQ0M7Z0JBQ2xEUCxhQUFhTztZQUNmO1FBQ0Y7OztrQkFSSVQ7O1lBVUpVLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxLQUFLO2dCQUNaLElBQU1SLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQ2pDQyx1QkFBdUJGLFdBQVdHLGFBQWE7Z0JBRW5ERCxxQkFBcUJNLEtBQUssR0FBR0E7WUFDL0I7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDakNDLHVCQUF1QkYsV0FBV0csYUFBYTtnQkFFbkQsSUFBTUssUUFBUU4scUJBQXFCTSxLQUFLO2dCQUV4QyxPQUFPQTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRVosVUFBWSxJQUFJLENBQUNhLEtBQUssQ0FBdEJiO2dCQUVSLElBQUlBLFNBQVM7b0JBQ1gsSUFBTUMsZUFBZUQsU0FBUyxHQUFHO29CQUVqQyxJQUFJLENBQUNBLE9BQU8sQ0FBQ0M7Z0JBQ2Y7WUFDRjs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtZQUNFLEdBQUc7WUFDTDs7O1dBdENJZjtFQUFpQkY7SUF5Q3ZCLFdBQWVrQixJQUFBQSxjQUFTLEVBQUNoQiJ9