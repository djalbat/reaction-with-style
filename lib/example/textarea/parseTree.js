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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsIkVNUFRZX1NUUklORyIsIlBhcnNlVHJlZVRleHRhcmVhIiwibWl4aW5zIiwic2V0UGFyc2VUcmVlIiwiY2xlYXJQYXJzZVRyZWUiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwidGV4dGFyZWEiLCJzcGVsbENoZWNrIiwicmVhZE9ubHkiLCJyZWYiLCJkb21FbGVtZW50IiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJ2YWx1ZSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhO0FBRUwsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEIsaUJBQWlCLGlCQUF2QixRQUFRO2NBQUYsaUJBQWlCO2FBQWpCLGlCQUFpQjs4QkFBakIsaUJBQWlCO2dFQUFqQixpQkFBaUI7O2lCQUFqQixpQkFBaUI7O1lBTXBDLEdBQU0sR0FBTixNQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsR0FBSyxDQUFHLFNBQVMsR0FYQSxTQUFhLFNBV3RCLFNBQVMsRUFDSSxNQUFVLEdBQVYsSUFBSSxDQUFDLEtBQUssRUFBdkIsUUFBUSxHQUFLLE1BQVUsQ0FBdkIsUUFBUTtnQkFFaEIsTUFBTSxvQ0FFSCxRQUFRO29CQUFDLFNBQVMsS0FBZSxNQUFXLENBQXJCLFNBQVMsR0FBQyxXQUFXO29CQUNuQyxVQUFVLEdBQUMsS0FBTztvQkFDbEIsUUFBUSxFQUFSLElBQVE7b0JBQ1IsR0FBRyxHQUFFLFFBQVEsQ0FBUCxVQUFVLEVBQUssQ0FBQzt3QkFFcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO29CQUU5QixDQUFDO21CQUVSLFFBQVE7WUFJZixDQUFDOzs7V0F6QmtCLGlCQUFpQjtFQUpqQixTQUFhO2dCQUliLGlCQUFpQixHQUM3QixNQUFNLEdBQUcsQ0FBQztJQUNmLFlBQVk7SUFDWixjQUFjO0FBQ2hCLENBQUM7a0JBSmtCLGlCQUFpQjtTQTRCN0IsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hDLEVBQUUsRUFBRSxTQUFTLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdkIsU0FBUyxDQUFDLFNBQVMsR0FBSyxDQUFFLEFBQUYsRUFBRTtRQUUxQixHQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxRQUFRLElBQ3BDLEtBQUssR0FBRyxlQUFlLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRW5DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztJQUNyQixDQUFDLE1BQU0sQ0FBQztRQUNOLElBQUksQ0FBQyxjQUFjO0lBQ3JCLENBQUM7QUFDSCxDQUFDO1NBRVEsY0FBYyxHQUFHLENBQUM7SUFDekIsR0FBSyxDQUFDLEtBQUssR0E1Q2dCLFVBQWM7SUE4Q3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBzZXRQYXJzZVRyZWUsXG4gICAgY2xlYXJQYXJzZVRyZWVcbiAgXTtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHBhcnNlLXRyZWVgfVxuICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RleHRhcmVhPlxuXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gIGlmIChwYXJzZVRyZWUgIT09IG51bGwpIHtcbiAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWUgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclBhcnNlVHJlZSgpIHtcbiAgY29uc3QgdmFsdWUgPSBFTVBUWV9TVFJJTkc7XG5cbiAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG59XG4iXX0=