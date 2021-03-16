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
var LexicalEntriesTextarea = function(Textarea) {
    _inherits(LexicalEntriesTextarea, _textarea.default);
    function LexicalEntriesTextarea() {
        _classCallCheck(this, LexicalEntriesTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(LexicalEntriesTextarea).apply(this, arguments));
    }
    _createClass(LexicalEntriesTextarea, [
        {
            key: "render",
            value: function render(update) {
                var className = _textarea.default.className, _props = this.props, children = _props.children;
                return React.createElement("textarea", {
                    className: "".concat(className, " lexical-entries"),
                    spellCheck: "false",
                    ref: (function(domElement) {
                        this.domElement = domElement;
                    }).bind(this)
                }, children);
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
    var value = JSON.stringify(lexicalEntries, null, "  ");
    this.setValue(value);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExleGljYWxFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgZ2V0TGV4aWNhbEVudHJpZXMsXG4gICAgc2V0TGV4aWNhbEVudHJpZXNcbiAgXTtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGxleGljYWwtZW50cmllc2B9XG4gICAgICAgICAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3RleHRhcmVhPlxuXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMZXhpY2FsRW50cmllcygpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgIGxleGljYWxFbnRyaWVzID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG5cbiAgcmV0dXJuIGxleGljYWxFbnRyaWVzO1xufVxuXG5mdW5jdGlvbiBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGxleGljYWxFbnRyaWVzLCBudWxsLCBcIiAgXCIpO1xuXG4gIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLHNCQUFBLFlBQUEsUUFBQTtjQUFBLHNCQUFBLEVBRkEsU0FBQTthQUVBLHNCQUFBOzhCQUFBLHNCQUFBO2dFQUFBLHNCQUFBOztpQkFBQSxzQkFBQTs7QUFNQSxlQUFBLEdBQUEsTUFBQTs0QkFBQSxNQUFBLENBQUEsTUFBQTtvQkFDQSxTQUFBLEdBVEEsU0FBQSxTQVNBLFNBQUEsRUFDQSxNQUFBLFFBQUEsS0FBQSxFQUFBLFFBQUEsR0FBQSxNQUFBLENBQUEsUUFBQTs0Q0FJQSxRQUFBO0FBQUEsNkJBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxHQUFBLGdCQUFBO0FBQ0EsOEJBQUEsR0FBQSxLQUFBO0FBQ0EsdUJBQUEsWUFBQSxVQUFBOzZCQUVBLFVBQUEsR0FBQSxVQUFBOzttQkFJQSxRQUFBOzs7O1dBcEJBLHNCQUFBO0VBRkEsU0FBQTtnQkFFQSxzQkFBQSxHQUNBLE1BQUE7QUFDQSxxQkFBQTtBQUNBLHFCQUFBOztrQkFIQSxzQkFBQTtTQTJCQSxpQkFBQTtRQUNBLEtBQUEsUUFBQSxRQUFBLElBQ0EsY0FBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQTtXQUVBLGNBQUE7O1NBR0EsaUJBQUEsQ0FBQSxjQUFBO1FBQ0EsS0FBQSxHQUFBLElBQUEsQ0FBQSxTQUFBLENBQUEsY0FBQSxFQUFBLElBQUEsR0FBQSxFQUFBO1NBRUEsUUFBQSxDQUFBLEtBQUEifQ==