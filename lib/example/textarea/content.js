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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var ContentTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ContentTextarea, Textarea);
    var _super = _createSuper(ContentTextarea);
    function ContentTextarea() {
        _classCallCheck(this, ContentTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(ContentTextarea, [
        {
            key: "render",
            value: function render(update) {
                var _this = this;
                var className = _textarea.default.className, children = this.props.children;
                return(/*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " content"),
                    spellCheck: "false",
                    ref: function(domElement) {
                        _this.domElement = domElement;
                    }
                }, children));
            }
        }
    ]);
    return ContentTextarea;
}(_textarea.default);
_defineProperty(ContentTextarea, "mixins", [
    getContent,
    setContent
]);
var _default = ContentTextarea;
exports.default = _default;
function getContent() {
    var value = this.getValue(), content = value; ///
    return content;
}
function setContent(content) {
    var value = content; ///
    this.setValue(value);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgQ29udGVudFRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIGdldENvbnRlbnQsXG4gICAgc2V0Q29udGVudFxuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gVGV4dGFyZWEsXG4gICAgICAgICAgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY29udGVudGB9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RleHRhcmVhPlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50VGV4dGFyZWE7XG5cbmZ1bmN0aW9uIGdldENvbnRlbnQoKSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICBjb250ZW50ID0gdmFsdWU7ICAvLy9cblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gc2V0Q29udGVudChjb250ZW50KSB7XG4gIGNvbnN0IHZhbHVlID0gY29udGVudDsgIC8vL1xuXG4gIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xufVxuIl0sIm5hbWVzIjpbIkNvbnRlbnRUZXh0YXJlYSIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ0ZXh0YXJlYSIsInNwZWxsQ2hlY2siLCJyZWYiLCJkb21FbGVtZW50IiwibWl4aW5zIiwiZ2V0Q29udGVudCIsInNldENvbnRlbnQiLCJ2YWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QkEsZUFBZSxpQkFBckIsUUFBUTtjQUFGQSxlQUFlOzhCQUFmQSxlQUFlO2FBQWZBLGVBQWU7OEJBQWZBLGVBQWU7OztpQkFBZkEsZUFBZTs7WUFNbkJDLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLE1BQU0sRUFBRSxDQUFDOztnQkFDZCxHQUFLLENBQUdDLFNBQVMsR0FUQSxTQUFhLFNBU3RCQSxTQUFTLEVBQ1RDLFFBQVEsR0FBSyxJQUFJLENBQUNDLEtBQUssQ0FBdkJELFFBQVE7Z0JBRWhCLE1BQU0sbUNBRUhFLENBQVE7b0JBQUNILFNBQVMsRUFBRyxDQUFBLEVBQVksTUFBUSxDQUFsQkEsU0FBUyxFQUFDLENBQVE7b0JBQ2hDSSxVQUFVLEVBQUMsQ0FBTztvQkFDbEJDLEdBQUcsRUFBRSxRQUFRLENBQVBDLFVBQVUsRUFBSyxDQUFDOzhCQUVmQSxVQUFVLEdBQUdBLFVBQVU7b0JBRTlCLENBQUM7bUJBRVJMLFFBQVE7WUFJZixDQUFDOzs7V0F4QkdKLGVBQWU7RUFGQSxTQUFhO2dCQUU1QkEsZUFBZSxFQUNaVSxDQUFNLFNBQUcsQ0FBQztJQUNmQyxVQUFVO0lBQ1ZDLFVBQVU7QUFDWixDQUFDO2VBdUJZWixlQUFlOztTQUVyQlcsVUFBVSxHQUFHLENBQUM7SUFDckIsR0FBSyxDQUFDRSxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxPQUFPLEdBQUdGLEtBQUssQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFM0IsTUFBTSxDQUFDRSxPQUFPO0FBQ2hCLENBQUM7U0FFUUgsVUFBVSxDQUFDRyxPQUFPLEVBQUUsQ0FBQztJQUM1QixHQUFLLENBQUNGLEtBQUssR0FBR0UsT0FBTyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUUzQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0gsS0FBSztBQUNyQixDQUFDIn0=