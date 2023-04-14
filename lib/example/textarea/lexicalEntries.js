"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LexicalEntriesTextarea;
    }
});
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
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
var LexicalEntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(LexicalEntriesTextarea, Textarea);
    var _super = _create_super(LexicalEntriesTextarea);
    function LexicalEntriesTextarea() {
        _class_call_check(this, LexicalEntriesTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(LexicalEntriesTextarea, [
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
                return /*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " lexical-entries"),
                    spellCheck: "false"
                }, children);
            }
        }
    ]);
    return LexicalEntriesTextarea;
}(_textarea.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgRE9VQkxFX1NQQUNFKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBUZXh0YXJlYSxcbiAgICAgICAgICB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBsZXhpY2FsLWVudHJpZXNgfSBzcGVsbENoZWNrPVwiZmFsc2VcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImdldExleGljYWxFbnRyaWVzIiwidmFsdWUiLCJnZXRWYWx1ZSIsImxleGljYWxFbnRyaWVzIiwiSlNPTiIsInBhcnNlIiwic2V0TGV4aWNhbEVudHJpZXMiLCJzdHJpbmdpZnkiLCJET1VCTEVfU1BBQ0UiLCJzZXRWYWx1ZSIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsIlRleHRhcmVhIiwiY2hpbGRyZW4iLCJwcm9wcyIsInRleHRhcmVhIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7K0RBSkE7eUJBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHVDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixJQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsaUJBQWlCQyxLQUFLQyxLQUFLLENBQUNKO2dCQUVsQyxPQUFPRTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkgsY0FBYyxFQUFFO2dCQUNoQyxJQUFNRixRQUFRRyxLQUFLRyxTQUFTLENBQUNKLGdCQUFnQixJQUFJLEVBQUVLLHVCQUFZO2dCQUUvRCxJQUFJLENBQUNDLFFBQVEsQ0FBQ1I7WUFDaEI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFO2dCQUNiLElBQU0sQUFBRUMsWUFBY0MsaUJBQVEsQ0FBdEJELFdBQ0YsQUFBRUUsV0FBYSxJQUFJLENBQUNDLEtBQUssQ0FBdkJEO2dCQUVSLHFCQUVFLG9CQUFDRTtvQkFBU0osV0FBVyxBQUFDLEdBQVksT0FBVkEsV0FBVTtvQkFBbUJLLFlBQVc7bUJBQzdESDtZQUlQOzs7V0F6Qm1CZjtFQUErQmMsaUJBQVEifQ==