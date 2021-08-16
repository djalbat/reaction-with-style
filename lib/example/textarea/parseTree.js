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
var ParseTreeTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ParseTreeTextarea, Textarea);
    function ParseTreeTextarea() {
        _classCallCheck(this, ParseTreeTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(ParseTreeTextarea).apply(this, arguments));
    }
    _createClass(ParseTreeTextarea, [
        {
            key: "render",
            value: function render(update) {
                var className = _textarea.default.className, _props = this.props, children = _props.children;
                return(/*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " parse-tree"),
                    spellCheck: "false",
                    readOnly: true,
                    ref: (function(domElement) {
                        this.domElement = domElement;
                    }).bind(this)
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlVHJlZVRleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIHNldFBhcnNlVHJlZSxcbiAgICBjbGVhclBhcnNlVHJlZVxuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gVGV4dGFyZWEsXG4gICAgICAgICAgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcGFyc2UtdHJlZWB9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgICAgIHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgaWYgKHBhcnNlVHJlZSAhPT0gbnVsbCkge1xuICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZSA9IHBhcnNlVHJlZVN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUGFyc2VUcmVlKCkge1xuICBjb25zdCB2YWx1ZSA9IEVNUFRZX1NUUklORztcblxuICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhO0FBRUwsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEIsaUJBQWlCO2NBQWpCLGlCQUFpQjthQUFqQixpQkFBaUI7OEJBQWpCLGlCQUFpQjtnRUFBakIsaUJBQWlCOztpQkFBakIsaUJBQWlCOztZQU1wQyxHQUFNLEdBQU4sTUFBTTs0QkFBTixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsR0FBSyxDQUFHLFNBQVMsR0FYQSxTQUFhLFNBV3RCLFNBQVMsRUFDSSxNQUFVLFFBQUwsS0FBSyxFQUF2QixRQUFRLEdBQUssTUFBVSxDQUF2QixRQUFROzBEQUliLFFBQVE7b0JBQUMsU0FBUyxLQUFlLE1BQVcsQ0FBckIsU0FBUyxHQUFDLFdBQVc7b0JBQ25DLFVBQVUsR0FBQyxLQUFPO29CQUNsQixRQUFRLEVBQVIsSUFBUTtvQkFDUixHQUFHLFlBQUcsVUFBVSxFQUFLLENBQUM7NkJBRWYsVUFBVSxHQUFHLFVBQVU7b0JBRTlCLENBQUM7bUJBRVIsUUFBUTtZQUlmLENBQUM7OztXQXpCa0IsaUJBQWlCO0VBSmpCLFNBQWE7Z0JBSWIsaUJBQWlCLEdBQzdCLE1BQU07SUFDWCxZQUFZO0lBQ1osY0FBYzs7a0JBSEcsaUJBQWlCO1NBNEI3QixZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEMsRUFBRSxFQUFFLFNBQVMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUN2QixTQUFTLENBQUMsU0FBUyxHQUFLLENBQUUsQUFBRixFQUFFO1FBRTFCLEdBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFDcEMsS0FBSyxHQUFHLGVBQWUsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7YUFFOUIsUUFBUSxDQUFDLEtBQUs7SUFDckIsQ0FBQyxNQUFNLENBQUM7YUFDRCxjQUFjO0lBQ3JCLENBQUM7QUFDSCxDQUFDO1NBRVEsY0FBYyxHQUFHLENBQUM7SUFDekIsR0FBSyxDQUFDLEtBQUssR0E1Q2dCLFVBQWM7U0E4Q3BDLFFBQVEsQ0FBQyxLQUFLO0FBQ3JCLENBQUMifQ==