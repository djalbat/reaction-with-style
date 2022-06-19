"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _withStyle = require("with-style");
var _class = require("./utilities/class");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
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
function _objectSpreadProps(target, source) {
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
var generateClassName = _withStyle.classNameUtilities.generateClassName, renderStyle = _withStyle.stylesUtilities.renderStyle, renderStyles = _withStyle.stylesUtilities.renderStyles, generateStyle = _withStyle.stylesUtilities.generateStyle, retrieveStyle = _withStyle.stylesUtilities.retrieveStyle;
function withStyle(ClassOrFunction) {
    return function() {
        var args = Array.prototype.slice.call(arguments); ///
        var _className = ClassOrFunction.className, className = _className === void 0 ? null : _className;
        var superStyle = retrieveStyle(className);
        className = generateClassName();
        generateStyle(args, className, superStyle);
        var ClassOrFunctionClass = (0, _class).isClass(ClassOrFunction);
        if (ClassOrFunctionClass) {
            var Class = ClassOrFunction; ///
            ClassOrFunction = /*#__PURE__*/ function(Class) {
                _inherits(_class, Class);
                var _super = _createSuper(_class);
                function _class() {
                    _classCallCheck(this, _class);
                    return _super.apply(this, arguments);
                }
                _createClass(_class, [
                    {
                        key: "render",
                        value: function render(update) {
                            this.props = appendClassNameToProps(className, this.props);
                            return _get(_getPrototypeOf(_class.prototype), "render", this).call(this, update);
                        }
                    }
                ]);
                return _class;
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
exports.default = _default;
_withStyle.tagNames.forEach(function(tagName) {
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
                    ].concat(_toConsumableArray(children)));
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
    props = props.hasOwnProperty("className") ? props : _objectSpreadProps(_objectSpread({}, props), {
        className: className
    }); ///
    return props;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWyAuLi5hcmd1bWVudHMgXTsgIC8vL1xuXG4gICAgbGV0IHsgY2xhc3NOYW1lID0gbnVsbCB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBDbGFzc09yRnVuY3Rpb25DbGFzcyA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKTtcblxuICAgIGlmIChDbGFzc09yRnVuY3Rpb25DbGFzcykge1xuICAgICAgY29uc3QgQ2xhc3MgPSBDbGFzc09yRnVuY3Rpb247ICAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzcyB7XG4gICAgICAgIHJlbmRlcih1cGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHRoaXMucHJvcHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcih1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbjsgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBwcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGUsXG4gIHJlbmRlclN0eWxlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZTtcblxudGFnTmFtZXMuZm9yRWFjaCgodGFnTmFtZSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICBwcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKSB7XG4gIHByb3BzID0gcHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikgPyBwcm9wcyA6IHsuLi5wcm9wcywgY2xhc3NOYW1lfTsgLy8vXG5cbiAgcmV0dXJuIHByb3BzO1xufVxuIl0sIm5hbWVzIjpbImdlbmVyYXRlQ2xhc3NOYW1lIiwiY2xhc3NOYW1lVXRpbGl0aWVzIiwicmVuZGVyU3R5bGUiLCJzdHlsZXNVdGlsaXRpZXMiLCJyZW5kZXJTdHlsZXMiLCJnZW5lcmF0ZVN0eWxlIiwicmV0cmlldmVTdHlsZSIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJzdXBlclN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uQ2xhc3MiLCJpc0NsYXNzIiwiQ2xhc3MiLCJyZW5kZXIiLCJ1cGRhdGUiLCJwcm9wcyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcHMiLCJGdW5jdGlvbiIsImNvbnRleHQiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiUmVhY3QiLCJjaGlsZHJlbiIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUEs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