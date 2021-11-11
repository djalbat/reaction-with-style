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
var ParseTreeTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ParseTreeTextarea, Textarea);
    var _super = _createSuper(ParseTreeTextarea);
    function ParseTreeTextarea() {
        _classCallCheck(this, ParseTreeTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(ParseTreeTextarea, [
        {
            key: "render",
            value: function render(update) {
                var _this = this;
                var className = _textarea.default.className, children = this.props.children;
                return(/*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " parse-tree"),
                    spellCheck: "false",
                    readOnly: true,
                    ref: function(domElement) {
                        _this.domElement = domElement;
                    }
                }, children));
            }
        }
    ]);
    return ParseTreeTextarea;
}(_textarea.default);
_defineProperty(ParseTreeTextarea, "mixins", [
    setParseTree,
    clearParseTree
]);
exports.default = ParseTreeTextarea;
function setParseTree(parseTree) {
    if (parseTree !== null) {
        parseTree.shiftLine(); //
        var parseTreeString = parseTree.asString(), value = parseTreeString; ///
        this.setValue(value);
    } else {
        this.clearParseTree();
    }
}
function clearParseTree() {
    var value = _constants.EMPTY_STRING;
    this.setValue(value);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIHNldFBhcnNlVHJlZSxcbiAgICBjbGVhclBhcnNlVHJlZVxuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gVGV4dGFyZWEsXG4gICAgICAgICAgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcGFyc2UtdHJlZWB9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgIHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUGFyc2VUcmVlKCkge1xuICBjb25zdCB2YWx1ZSA9IEVNUFRZX1NUUklORztcblxuICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbn1cbiJdLCJuYW1lcyI6WyJQYXJzZVRyZWVUZXh0YXJlYSIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ0ZXh0YXJlYSIsInNwZWxsQ2hlY2siLCJyZWFkT25seSIsInJlZiIsImRvbUVsZW1lbnQiLCJtaXhpbnMiLCJzZXRQYXJzZVRyZWUiLCJjbGVhclBhcnNlVHJlZSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWUiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFUyxHQUFhLENBQWIsU0FBYTtBQUVMLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QkEsaUJBQWlCLGlCQUF2QixRQUFRO2NBQUZBLGlCQUFpQjs4QkFBakJBLGlCQUFpQjthQUFqQkEsaUJBQWlCOzhCQUFqQkEsaUJBQWlCOzs7aUJBQWpCQSxpQkFBaUI7O1lBTXBDQyxHQUFNLEVBQU5BLENBQU07bUJBQU5BLFFBQVEsQ0FBUkEsTUFBTSxDQUFDQyxNQUFNLEVBQUUsQ0FBQzs7Z0JBQ2QsR0FBSyxDQUFHQyxTQUFTLEdBWEEsU0FBYSxTQVd0QkEsU0FBUyxFQUNUQyxRQUFRLEdBQUssSUFBSSxDQUFDQyxLQUFLLENBQXZCRCxRQUFRO2dCQUVoQixNQUFNLG1DQUVIRSxDQUFRO29CQUFDSCxTQUFTLEVBQUcsQ0FBQSxFQUFZLE1BQVcsQ0FBckJBLFNBQVMsRUFBQyxDQUFXO29CQUNuQ0ksVUFBVSxFQUFDLENBQU87b0JBQ2xCQyxRQUFRLEVBQVJBLElBQVE7b0JBQ1JDLEdBQUcsRUFBRSxRQUFRLENBQVBDLFVBQVUsRUFBSyxDQUFDOzhCQUVmQSxVQUFVLEdBQUdBLFVBQVU7b0JBRTlCLENBQUM7bUJBRVJOLFFBQVE7WUFJZixDQUFDOzs7V0F6QmtCSixpQkFBaUI7RUFKakIsU0FBYTtnQkFJYkEsaUJBQWlCLEVBQzdCVyxDQUFNLFNBQUcsQ0FBQztJQUNmQyxZQUFZO0lBQ1pDLGNBQWM7QUFDaEIsQ0FBQztrQkFKa0JiLGlCQUFpQjtTQTRCN0JZLFlBQVksQ0FBQ0UsU0FBUyxFQUFFLENBQUM7SUFDaEMsRUFBRSxFQUFFQSxTQUFTLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdkJBLFNBQVMsQ0FBQ0MsU0FBUyxHQUFLLENBQUUsQUFBRixFQUFFO1FBRTFCLEdBQUssQ0FBQ0MsZUFBZSxHQUFHRixTQUFTLENBQUNHLFFBQVEsSUFDcENDLEtBQUssR0FBR0YsZUFBZSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUVuQyxJQUFJLENBQUNHLFFBQVEsQ0FBQ0QsS0FBSztJQUNyQixDQUFDLE1BQU0sQ0FBQztRQUNOLElBQUksQ0FBQ0wsY0FBYztJQUNyQixDQUFDO0FBQ0gsQ0FBQztTQUVRQSxjQUFjLEdBQUcsQ0FBQztJQUN6QixHQUFLLENBQUNLLEtBQUssR0E1Q2dCLFVBQWM7SUE4Q3pDLElBQUksQ0FBQ0MsUUFBUSxDQUFDRCxLQUFLO0FBQ3JCLENBQUMifQ==