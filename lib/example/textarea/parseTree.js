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
var ParseTreeTextarea = function(Textarea) {
    _inherits(ParseTreeTextarea, _textarea.default);
    function ParseTreeTextarea() {
        _classCallCheck(this, ParseTreeTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(ParseTreeTextarea).apply(this, arguments));
    }
    _createClass(ParseTreeTextarea, [
        {
            key: "render",
            value: function render(update) {
                var className = _textarea.default.className, _props = this.props, children = _props.children;
                return React.createElement("textarea", {
                    className: "".concat(className, " parse-tree"),
                    spellCheck: "false",
                    readOnly: true,
                    ref: (function(domElement) {
                        this.domElement = domElement;
                    }).bind(this)
                }, children);
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
    var value = "";
    this.setValue(value);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBzZXRQYXJzZVRyZWUsXG4gICAgY2xlYXJQYXJzZVRyZWVcbiAgXTtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHBhcnNlLXRyZWVgfVxuICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RleHRhcmVhPlxuXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRQYXJzZVRyZWUocGFyc2VUcmVlKSB7XG4gIGlmIChwYXJzZVRyZWUgIT09IG51bGwpIHtcbiAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgY29uc3QgcGFyc2VUcmVlU3RyaW5nID0gcGFyc2VUcmVlLmFzU3RyaW5nKCksXG4gICAgICAgICAgdmFsdWUgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclBhcnNlVHJlZSgpIHtcbiAgY29uc3QgdmFsdWUgPSBcIlwiO1xuXG4gIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLGlCQUFBLFlBQUEsUUFBQTtjQUFBLGlCQUFBLEVBRkEsU0FBQTthQUVBLGlCQUFBOzhCQUFBLGlCQUFBO2dFQUFBLGlCQUFBOztpQkFBQSxpQkFBQTs7QUFNQSxlQUFBLEdBQUEsTUFBQTs0QkFBQSxNQUFBLENBQUEsTUFBQTtvQkFDQSxTQUFBLEdBVEEsU0FBQSxTQVNBLFNBQUEsRUFDQSxNQUFBLFFBQUEsS0FBQSxFQUFBLFFBQUEsR0FBQSxNQUFBLENBQUEsUUFBQTs0Q0FJQSxRQUFBO0FBQUEsNkJBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxHQUFBLFdBQUE7QUFDQSw4QkFBQSxHQUFBLEtBQUE7QUFDQSw0QkFBQSxFQUFBLElBQUE7QUFDQSx1QkFBQSxZQUFBLFVBQUE7NkJBRUEsVUFBQSxHQUFBLFVBQUE7O21CQUlBLFFBQUE7Ozs7V0FyQkEsaUJBQUE7RUFGQSxTQUFBO2dCQUVBLGlCQUFBLEdBQ0EsTUFBQTtBQUNBLGdCQUFBO0FBQ0Esa0JBQUE7O2tCQUhBLGlCQUFBO1NBNEJBLFlBQUEsQ0FBQSxTQUFBO1FBQ0EsU0FBQSxLQUFBLElBQUE7QUFDQSxpQkFBQSxDQUFBLFNBQUEsR0FBQSxDQUFBLEVBQUE7WUFFQSxlQUFBLEdBQUEsU0FBQSxDQUFBLFFBQUEsSUFDQSxLQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO2FBRUEsUUFBQSxDQUFBLEtBQUE7O2FBRUEsY0FBQTs7O1NBSUEsY0FBQTtRQUNBLEtBQUE7U0FFQSxRQUFBLENBQUEsS0FBQSJ9