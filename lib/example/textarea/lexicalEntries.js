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
var LexicalEntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(LexicalEntriesTextarea, Textarea);
    var _super = _createSuper(LexicalEntriesTextarea);
    function LexicalEntriesTextarea() {
        _classCallCheck(this, LexicalEntriesTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(LexicalEntriesTextarea, [
        {
            key: "getLexicalEntries",
            value: function getLexicalEntries() {
                var value = this.getValue(), lexicalEntries = JSON.parse(value);
                return lexicalEntries;
            }
        },
        {
            key: "setLexicalEntries",
            value: function setLexicalEntries(lexicalEntries) {
                var value = JSON.stringify(lexicalEntries, null, _constants.DOUBLE_SPACE);
                this.setValue(value);
            }
        },
        {
            key: "render",
            value: function render(update) {
                var className = _textarea.default.className, children = this.props.children;
                return(/*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " lexical-entries"),
                    spellCheck: "false"
                }, children));
            }
        }
    ]);
    return LexicalEntriesTextarea;
}(_textarea.default);
exports.default = LexicalEntriesTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgRE9VQkxFX1NQQUNFKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBUZXh0YXJlYSxcbiAgICAgICAgICB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBsZXhpY2FsLWVudHJpZXNgfSBzcGVsbENoZWNrPVwiZmFsc2VcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJ2YWx1ZSIsImdldFZhbHVlIiwibGV4aWNhbEVudHJpZXMiLCJKU09OIiwicGFyc2UiLCJzZXRMZXhpY2FsRW50cmllcyIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwicmVuZGVyIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsInRleHRhcmVhIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFUyxHQUFhLENBQWIsU0FBYTtBQUVMLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRCQSxzQkFBc0IsaUJBQTVCLFFBQVE7Y0FBRkEsc0JBQXNCOzhCQUF0QkEsc0JBQXNCO2FBQXRCQSxzQkFBc0I7OEJBQXRCQSxzQkFBc0I7OztpQkFBdEJBLHNCQUFzQjs7WUFDekNDLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBakJBLFFBQVEsQ0FBUkEsaUJBQWlCLEdBQUcsQ0FBQztnQkFDbkIsR0FBSyxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDSixLQUFLO2dCQUV2QyxNQUFNLENBQUNFLGNBQWM7WUFDdkIsQ0FBQzs7O1lBRURHLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBakJBLFFBQVEsQ0FBUkEsaUJBQWlCLENBQUNILGNBQWMsRUFBRSxDQUFDO2dCQUNqQyxHQUFLLENBQUNGLEtBQUssR0FBR0csSUFBSSxDQUFDRyxTQUFTLENBQUNKLGNBQWMsRUFBRSxJQUFJLEVBWHhCLFVBQWM7Z0JBYXZDLElBQUksQ0FBQ0ssUUFBUSxDQUFDUCxLQUFLO1lBQ3JCLENBQUM7OztZQUVEUSxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxHQUFLLENBQUdDLFNBQVMsR0FuQkEsU0FBYSxTQW1CdEJBLFNBQVMsRUFDVEMsUUFBUSxHQUFLLElBQUksQ0FBQ0MsS0FBSyxDQUF2QkQsUUFBUTtnQkFFaEIsTUFBTSxtQ0FFSEUsQ0FBUTtvQkFBQ0gsU0FBUyxFQUFHLENBQUEsRUFBWSxNQUFnQixDQUExQkEsU0FBUyxFQUFDLENBQWdCO29CQUFHSSxVQUFVLEVBQUMsQ0FBTzttQkFDcEVILFFBQVE7WUFJZixDQUFDOzs7V0F6QmtCYixzQkFBc0I7RUFKdEIsU0FBYTtrQkFJYkEsc0JBQXNCIn0=