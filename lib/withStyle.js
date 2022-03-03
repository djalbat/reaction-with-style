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
            var Class1 = ClassOrFunction; ///
            ClassOrFunction = /*#__PURE__*/ (function(Class) {
                _inherits(_class1, Class);
                var _super = _createSuper(_class1);
                function _class1() {
                    _classCallCheck(this, _class1);
                    return _super.apply(this, arguments);
                }
                _createClass(_class1, [
                    {
                        key: "render",
                        value: function render(update) {
                            this.props = appendClassNameToProps(className, this.props);
                            return _get(_getPrototypeOf(_class1.prototype), "render", this).call(this, update);
                        }
                    }
                ]);
                return _class1;
            })(Class1);
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
    props = props.hasOwnProperty("className") ? props : _objectSpread({}, props, {
        className: className
    }); ///
    return props;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCB7IGNsYXNzTmFtZSA9IG51bGwgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgY29uc3QgQ2xhc3NPckZ1bmN0aW9uQ2xhc3MgPSBpc0NsYXNzKENsYXNzT3JGdW5jdGlvbik7XG5cbiAgICBpZiAoQ2xhc3NPckZ1bmN0aW9uQ2xhc3MpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gQ2xhc3NPckZ1bmN0aW9uOyAgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGNsYXNzIGV4dGVuZHMgQ2xhc3Mge1xuICAgICAgICByZW5kZXIodXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCB0aGlzLnByb3BzKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlci5yZW5kZXIodXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRnVuY3Rpb24gPSBDbGFzc09yRnVuY3Rpb247IC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgcHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBGdW5jdGlvbihwcm9wcywgY29udGV4dCwgZWxlbWVudCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlLFxuICByZW5kZXJTdHlsZXNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGU7XG5cbnRhZ05hbWVzLmZvckVhY2goKHRhZ05hbWUpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpdGhTdHlsZSwgdGFnTmFtZSwge1xuICAgIGdldDogKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c10sICAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICAgICAgcHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpID8gcHJvcHMgOiB7Li4ucHJvcHMsIGNsYXNzTmFtZX07IC8vL1xuXG4gIHJldHVybiBwcm9wcztcbn1cbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlIiwic3R5bGVzVXRpbGl0aWVzIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiaXNDbGFzcyIsIkNsYXNzIiwicmVuZGVyIiwidXBkYXRlIiwicHJvcHMiLCJhcHBlbmRDbGFzc05hbWVUb1Byb3BzIiwiRnVuY3Rpb24iLCJjb250ZXh0IiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWVzIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIlJlYWN0IiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBLENB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