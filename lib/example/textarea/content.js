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
var ContentTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ContentTextarea, Textarea);
    var _super = _createSuper(ContentTextarea);
    function ContentTextarea() {
        _classCallCheck(this, ContentTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(ContentTextarea, [
        {
            key: "getContent",
            value: function getContent() {
                var value = this.getValue(), content = value; ///
                return content;
            }
        },
        {
            key: "setContent",
            value: function setContent(content) {
                var value = content; ///
                this.setValue(value);
            }
        },
        {
            key: "render",
            value: function render(update) {
                var className = _textarea.default.className, children = this.props.children;
                return /*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " content"),
                    spellCheck: "false"
                }, children);
            }
        }
    ]);
    return ContentTextarea;
}(_textarea.default);
exports.default = ContentTextarea;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2NvbnRlbnQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRDb250ZW50KCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGNvbnRlbnQgPSB2YWx1ZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBUZXh0YXJlYSxcbiAgICAgICAgICB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjb250ZW50YH0gc3BlbGxDaGVjaz1cImZhbHNlXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICApO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbnRlbnRUZXh0YXJlYSIsImdldENvbnRlbnQiLCJ2YWx1ZSIsImdldFZhbHVlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZXRWYWx1ZSIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsIlRleHRhcmVhIiwiY2hpbGRyZW4iLCJwcm9wcyIsInRleHRhcmVhIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVRLElBQUEsU0FBYSxrQ0FBYixhQUFhLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSxlQUFlLGlCQUFyQjs7O2FBQU1BLGVBQWU7Ozs7OztZQUNsQ0MsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxFQUFFLEVBQ3ZCQyxPQUFPLEdBQUdGLEtBQUssQUFBQyxFQUFFLEdBQUc7Z0JBRTNCLE9BQU9FLE9BQU8sQ0FBQzthQUNoQjs7O1lBRURDLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxDQUFDRCxPQUFPLEVBQUU7Z0JBQ2xCLElBQU1GLEtBQUssR0FBR0UsT0FBTyxBQUFDLEVBQUUsR0FBRztnQkFFM0IsSUFBSSxDQUFDRSxRQUFRLENBQUNKLEtBQUssQ0FBQyxDQUFDO2FBQ3RCOzs7WUFFREssR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtnQkFDYixJQUFNLEFBQUVDLFNBQVMsR0FBS0MsU0FBUSxRQUFBLENBQXRCRCxTQUFTLEFBQWEsRUFDeEIsQUFBRUUsUUFBUSxHQUFLLElBQUksQ0FBQ0MsS0FBSyxDQUF2QkQsUUFBUSxBQUFlLEFBQUM7Z0JBRWhDLHFCQUVFLG9CQUFDRSxVQUFRO29CQUFDSixTQUFTLEVBQUUsQUFBQyxFQUFBLENBQVksTUFBUSxDQUFsQkEsU0FBUyxFQUFDLFVBQVEsQ0FBQztvQkFBRUssVUFBVSxFQUFDLE9BQU87bUJBQzVESCxRQUFRLENBQ0EsQ0FFWDthQUNIOzs7O0NBQ0YsQ0ExQjRDRCxTQUFRLFFBQUEsQ0EwQnBEO2tCQTFCb0JWLGVBQWUifQ==