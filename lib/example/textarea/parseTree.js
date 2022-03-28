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
var ParseTreeTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ParseTreeTextarea, Textarea);
    var _super = _createSuper(ParseTreeTextarea);
    function ParseTreeTextarea() {
        _classCallCheck(this, ParseTreeTextarea);
        return _super.apply(this, arguments);
    }
    _createClass(ParseTreeTextarea, [
        {
            key: "setParseTree",
            value: function setParseTree(parseTree) {
                if (parseTree !== null) {
                    parseTree.shiftLine(); //
                    var parseTreeString = parseTree.asString(), value = parseTreeString; ///
                    this.setValue(value);
                } else {
                    this.clearParseTree();
                }
            }
        },
        {
            key: "clearParseTree",
            value: function clearParseTree() {
                var value = _constants.EMPTY_STRING;
                this.setValue(value);
            }
        },
        {
            key: "render",
            value: function render(update) {
                var className = _textarea.default.className, children = this.props.children;
                return /*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " parse-tree"),
                    spellCheck: "false",
                    readOnly: true
                }, children);
            }
        }
    ]);
    return ParseTreeTextarea;
}(_textarea.default);
exports.default = ParseTreeTextarea;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gICAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlLnNoaWZ0TGluZSgpOyAgLy9cblxuICAgICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyUGFyc2VUcmVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHBhcnNlLXRyZWVgfSBzcGVsbENoZWNrPVwiZmFsc2VcIiByZWFkT25seT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQYXJzZVRyZWVUZXh0YXJlYSIsInNldFBhcnNlVHJlZSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWUiLCJzZXRWYWx1ZSIsImNsZWFyUGFyc2VUcmVlIiwiRU1QVFlfU1RSSU5HIiwicmVuZGVyIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwiVGV4dGFyZWEiLCJjaGlsZHJlbiIsInByb3BzIiwidGV4dGFyZWEiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVxQixHQUFhLENBQWIsU0FBYTtBQUVMLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7OERBSjNDO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQU1lLEdBQUssQ0FBQ0EsaUJBQWlCLGlCQUF2QixRQUFROzBDQU52Qjs7YUFNcUJBLGlCQUFpQjtnREFOdEM7Ozs7O1lBT0VDLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLENBQUNDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QixFQUFFLEVBQUVBLFNBQVMsS0FBSyxJQUFJLEVBQUUsQ0FBQztvQkFDdkJBLFNBQVMsQ0FBQ0MsU0FBUyxFQUFFLENBQUMsQ0FBRSxFQUFFO29CQUUxQixHQUFLLENBQUNDLGVBQWUsR0FBR0YsU0FBUyxDQUFDRyxRQUFRLElBQ3BDQyxLQUFLLEdBQUdGLGVBQWUsRUFBRyxFQUFHLEFBQUgsQ0FBRztvQkFFbkMsSUFBSSxDQUFDRyxRQUFRLENBQUNELEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDLE1BQU0sQ0FBQztvQkFDTixJQUFJLENBQUNFLGNBQWMsRUFBRSxDQUFDO2dCQUN4QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRURBLEdBQWMsRUFBZEEsQ0FBYzttQkFBZEEsUUFBUSxDQUFSQSxjQUFjLEdBQUcsQ0FBQztnQkFDaEIsR0FBSyxDQUFDRixLQUFLLEdBQUdHLFVBQVk7Z0JBRTFCLElBQUksQ0FBQ0YsUUFBUSxDQUFDRCxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDOzs7WUFFREksR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsR0FBSyxDQUFHQyxTQUFTLEdBQUtDLFNBQVEsU0FBdEJELFNBQVMsRUFDVEUsUUFBUSxHQUFLLElBQUksQ0FBQ0MsS0FBSyxDQUF2QkQsUUFBUTtnQkFFaEIsTUFBTSxtQ0FFSEUsQ0FBUTtvQkFBQ0osU0FBUyxFQUFHLENBQUEsRUFBWSxNQUFXLENBQXJCQSxTQUFTLEVBQUMsQ0FBVztvQkFBR0ssVUFBVSxFQUFDLENBQU87b0JBQUNDLFFBQVEsRUFBUkEsSUFBUTttQkFDeEVKLFFBQVE7WUFJZixDQUFDOztNQXJDSDs7RUFNK0NELFNBQVE7a0JBQWxDYixpQkFBaUIsQUFOdEMifQ==