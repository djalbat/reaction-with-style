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
var _index = /*#__PURE__*/ _interop_require_default(require("../../index"));
var _reaction = require("reaction");
var _constants = require("../constants");
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
        "\n\n  width: 48rem;\n  display: flex;\n  min-width: 24rem;\n  flex-direction: column;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Component = _reaction.React.Component;
var SizeableDiv = /*#__PURE__*/ function(Component) {
    _inherits(SizeableDiv, Component);
    var _super = _create_super(SizeableDiv);
    function SizeableDiv() {
        _class_call_check(this, SizeableDiv);
        return _super.apply(this, arguments);
    }
    _create_class(SizeableDiv, [
        {
            key: "getWidth",
            value: function getWidth() {
                var firstChild = this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement(), firstChildDOMElementOffsetWidth = firstChildDOMElement.offsetWidth, width = firstChildDOMElementOffsetWidth; ///
                return width;
            }
        },
        {
            key: "setWidth",
            value: function setWidth(width) {
                width = "".concat(width, "px"); ///
                this.setStyle(_constants.WIDTH, width);
            }
        },
        {
            key: "render",
            value: function render(update) {
                var _this_props = this.props, className = _this_props.className, children = _this_props.children;
                return /*#__PURE__*/ _reaction.React.createElement("div", {
                    className: "".concat(className, " sizeable")
                }, children);
            }
        }
    ]);
    return SizeableDiv;
}(Component);
var _default = (0, _index.default)(SizeableDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBXSURUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBTaXplYWJsZURpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKSxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IGZpcnN0Q2hpbGQuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50T2Zmc2V0V2lkdGggPSBmaXJzdENoaWxkRE9NRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICB3aWR0aCA9IGZpcnN0Q2hpbGRET01FbGVtZW50T2Zmc2V0V2lkdGg7IC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnNldFN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc2l6ZWFibGVgfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG5cbiAgd2lkdGg6IDQ4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDI0cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiU2l6ZWFibGVEaXYiLCJnZXRXaWR0aCIsImZpcnN0Q2hpbGQiLCJnZXRGaXJzdENoaWxkIiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnRPZmZzZXRXaWR0aCIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsInNldFN0eWxlIiwiV0lEVEgiLCJyZW5kZXIiLCJ1cGRhdGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1Q0E7OztlQUFBOzs7NERBckNzQjt3QkFFQTt5QkFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBTSxBQUFFQSxZQUFjQyxlQUFLLENBQW5CRDtBQUVSLElBQUEsQUFBTUUsNEJBNkJILEFBN0JIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyx1QkFBdUJGLFdBQVdHLGFBQWEsSUFDL0NDLGtDQUFrQ0YscUJBQXFCRyxXQUFXLEVBQ2xFQyxRQUFRRixpQ0FBaUMsR0FBRztnQkFFbEQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTRCxLQUFLLEVBQUU7Z0JBQ2RBLFFBQVEsQUFBQyxHQUFRLE9BQU5BLE9BQU0sT0FBSyxHQUFHO2dCQUV6QixJQUFJLENBQUNFLFFBQVEsQ0FBQ0MsZ0JBQUssRUFBRUg7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFO2dCQUNiLElBQWdDLGNBQUEsSUFBSSxDQUFDQyxLQUFLLEVBQWxDQyxZQUF3QixZQUF4QkEsV0FBV0MsV0FBYSxZQUFiQTtnQkFFbkIscUJBRUUsOEJBQUNDO29CQUFJRixXQUFXLEFBQUMsR0FBWSxPQUFWQSxXQUFVO21CQUMxQkM7WUFJUDs7O1dBMUJJaEI7RUFBb0JGO0lBNkIxQixXQUFlb0IsSUFBQUEsY0FBUyxFQUFDbEIifQ==