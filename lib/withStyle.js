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
var _reaction = require("reaction");
var _withstyle = require("with-style");
var _class = require("./utilities/class");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var generateClassName = _withstyle.classNameUtilities.generateClassName, renderStyle = _withstyle.stylesUtilities.renderStyle, renderStyles = _withstyle.stylesUtilities.renderStyles, generateStyle = _withstyle.stylesUtilities.generateStyle, retrieveStyle = _withstyle.stylesUtilities.retrieveStyle;
function withStyle(ClassOrFunction) {
    return function() {
        var args = Array.prototype.slice.call(arguments); ///
        var _ClassOrFunction_className = ClassOrFunction.className, className = _ClassOrFunction_className === void 0 ? null : _ClassOrFunction_className;
        var superStyle = retrieveStyle(className);
        className = generateClassName();
        generateStyle(args, className, superStyle);
        var ClassOrFunctionClass = (0, _class.isClass)(ClassOrFunction);
        if (ClassOrFunctionClass) {
            var Class = ClassOrFunction; ///
            ClassOrFunction = /*#__PURE__*/ function(Class) {
                _inherits(ClassOrFunction, Class);
                var _super = _create_super(ClassOrFunction);
                function ClassOrFunction() {
                    _class_call_check(this, ClassOrFunction);
                    return _super.apply(this, arguments);
                }
                _create_class(ClassOrFunction, [
                    {
                        key: "render",
                        value: function render(update) {
                            this.props = appendClassNameToProps(className, this.props);
                            return _get(_get_prototype_of(ClassOrFunction.prototype), "render", this).call(this, update);
                        }
                    }
                ]);
                return ClassOrFunction;
            }(Class);
        } else {
            var Function = ClassOrFunction; ///
            ClassOrFunction = function(props, context, element) {
                props = appendClassNameToProps(className, props);
                return Function(props, context, element);
            };
        }
        Object.assign(ClassOrFunction, {
            className: className
        });
        return ClassOrFunction;
    };
}
Object.assign(withStyle, {
    renderStyle: renderStyle,
    renderStyles: renderStyles
});
var _default = withStyle;
_withstyle.tagNames.forEach(function(tagName) {
    Object.defineProperty(withStyle, tagName, {
        get: function() {
            return function() {
                var args = Array.prototype.slice.call(arguments), className = generateClassName();
                generateStyle(args, className);
                var Function = function(props, context, element) {
                    var _React;
                    var children = props.children;
                    props = appendClassNameToProps(className, props);
                    return (_React = _reaction.React).createElement.apply(_React, [
                        tagName,
                        props
                    ].concat(_to_consumable_array(children)));
                };
                Object.assign(Function, {
                    className: className
                });
                return Function;
            };
        }
    });
});
function appendClassNameToProps(className, props) {
    props = props.hasOwnProperty("className") ? props : _object_spread_props(_object_spread({}, props), {
        className: className
    }); ///
    return props;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWyAuLi5hcmd1bWVudHMgXTsgIC8vL1xuXG4gICAgbGV0IHsgY2xhc3NOYW1lID0gbnVsbCB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBDbGFzc09yRnVuY3Rpb25DbGFzcyA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKTtcblxuICAgIGlmIChDbGFzc09yRnVuY3Rpb25DbGFzcykge1xuICAgICAgY29uc3QgQ2xhc3MgPSBDbGFzc09yRnVuY3Rpb247ICAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzcyB7XG4gICAgICAgIHJlbmRlcih1cGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHRoaXMucHJvcHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcih1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbjsgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBwcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGUsXG4gIHJlbmRlclN0eWxlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZTtcblxudGFnTmFtZXMuZm9yRWFjaCgodGFnTmFtZSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICBwcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKSB7XG4gIHByb3BzID0gcHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikgPyBwcm9wcyA6IHsuLi5wcm9wcywgY2xhc3NOYW1lfTsgLy8vXG5cbiAgcmV0dXJuIHByb3BzO1xufVxuIl0sIm5hbWVzIjpbImdlbmVyYXRlQ2xhc3NOYW1lIiwiY2xhc3NOYW1lVXRpbGl0aWVzIiwicmVuZGVyU3R5bGUiLCJzdHlsZXNVdGlsaXRpZXMiLCJyZW5kZXJTdHlsZXMiLCJnZW5lcmF0ZVN0eWxlIiwicmV0cmlldmVTdHlsZSIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJzdXBlclN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uQ2xhc3MiLCJpc0NsYXNzIiwiQ2xhc3MiLCJyZW5kZXIiLCJ1cGRhdGUiLCJwcm9wcyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcHMiLCJGdW5jdGlvbiIsImNvbnRleHQiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiUmVhY3QiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7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