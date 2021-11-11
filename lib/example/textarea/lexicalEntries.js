"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
var _constants = require("../constants");
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
var LexicalEntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(LexicalEntriesTextarea, Textarea);
    var _super = _createSuper(LexicalEntriesTextarea);
    function LexicalEntriesTextarea() {
        _classCallCheck(this, LexicalEntriesTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(LexicalEntriesTextarea, [
        {
            key: "render",
            value: function render(update) {
                var _this = this;
                var className = _textarea.default.className, children = this.props.children;
                return(/*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " lexical-entries"),
                    spellCheck: "false",
                    ref: function(domElement) {
                        _this.domElement = domElement;
                    }
                }, children));
            }
        }
    ]);
    return LexicalEntriesTextarea;
}(_textarea.default);
_defineProperty(LexicalEntriesTextarea, "mixins", [
    getLexicalEntries,
    setLexicalEntries
]);
exports.default = LexicalEntriesTextarea;
function getLexicalEntries() {
    var value = this.getValue(), lexicalEntries = JSON.parse(value);
    return lexicalEntries;
}
function setLexicalEntries(lexicalEntries) {
    var value = JSON.stringify(lexicalEntries, null, _constants.DOUBLE_SPACE);
    this.setValue(value);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBnZXRMZXhpY2FsRW50cmllcyxcbiAgICBzZXRMZXhpY2FsRW50cmllc1xuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gVGV4dGFyZWEsXG4gICAgICAgICAgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gbGV4aWNhbC1lbnRyaWVzYH1cbiAgICAgICAgICAgICAgICBzcGVsbENoZWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExleGljYWxFbnRyaWVzKCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICByZXR1cm4gbGV4aWNhbEVudHJpZXM7XG59XG5cbmZ1bmN0aW9uIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gIGNvbnN0IHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobGV4aWNhbEVudHJpZXMsIG51bGwsIERPVUJMRV9TUEFDRSk7XG5cbiAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG59XG4iXSwibmFtZXMiOlsiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ0ZXh0YXJlYSIsInNwZWxsQ2hlY2siLCJyZWYiLCJkb21FbGVtZW50IiwibWl4aW5zIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJzZXRMZXhpY2FsRW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhO0FBRUwsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRCQSxzQkFBc0IsaUJBQTVCLFFBQVE7Y0FBRkEsc0JBQXNCOzhCQUF0QkEsc0JBQXNCO2FBQXRCQSxzQkFBc0I7OEJBQXRCQSxzQkFBc0I7OztpQkFBdEJBLHNCQUFzQjs7WUFNekNDLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLE1BQU0sRUFBRSxDQUFDOztnQkFDZCxHQUFLLENBQUdDLFNBQVMsR0FYQSxTQUFhLFNBV3RCQSxTQUFTLEVBQ1RDLFFBQVEsR0FBSyxJQUFJLENBQUNDLEtBQUssQ0FBdkJELFFBQVE7Z0JBRWhCLE1BQU0sbUNBRUhFLENBQVE7b0JBQUNILFNBQVMsRUFBRyxDQUFBLEVBQVksTUFBZ0IsQ0FBMUJBLFNBQVMsRUFBQyxDQUFnQjtvQkFDeENJLFVBQVUsRUFBQyxDQUFPO29CQUNsQkMsR0FBRyxFQUFFLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7OEJBRWZBLFVBQVUsR0FBR0EsVUFBVTtvQkFFOUIsQ0FBQzttQkFFUkwsUUFBUTtZQUlmLENBQUM7OztXQXhCa0JKLHNCQUFzQjtFQUp0QixTQUFhO2dCQUliQSxzQkFBc0IsRUFDbENVLENBQU0sU0FBRyxDQUFDO0lBQ2ZDLGlCQUFpQjtJQUNqQkMsaUJBQWlCO0FBQ25CLENBQUM7a0JBSmtCWixzQkFBc0I7U0EyQmxDVyxpQkFBaUIsR0FBRyxDQUFDO0lBQzVCLEdBQUssQ0FBQ0UsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsY0FBYyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osS0FBSztJQUV2QyxNQUFNLENBQUNFLGNBQWM7QUFDdkIsQ0FBQztTQUVRSCxpQkFBaUIsQ0FBQ0csY0FBYyxFQUFFLENBQUM7SUFDMUMsR0FBSyxDQUFDRixLQUFLLEdBQUdHLElBQUksQ0FBQ0UsU0FBUyxDQUFDSCxjQUFjLEVBQUUsSUFBSSxFQXJDdEIsVUFBYztJQXVDekMsSUFBSSxDQUFDSSxRQUFRLENBQUNOLEtBQUs7QUFDckIsQ0FBQyJ9