"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../index"));
var _reaction = require("reaction");
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  display: flex;\n  \n  width: 48rem;\n  min-width: 24rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  flex-direction: column;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Component = _reaction.React.Component;
var SizeableDiv = function(Component) {
    _inherits(SizeableDiv, Component);
    function SizeableDiv() {
        _classCallCheck(this, SizeableDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(SizeableDiv).apply(this, arguments));
    }
    _createClass(SizeableDiv, [
        {
            key: "render",
            value: function render(update) {
                var _props = this.props, className = _props.className, children = _props.children;
                return _reaction.React.createElement("div", {
                    className: "".concat(className, " sizeable"),
                    ref: (function(domElement) {
                        this.domElement = domElement;
                    }).bind(this)
                }, children);
            }
        }
    ]);
    return SizeableDiv;
}(Component);
_defineProperty(SizeableDiv, "mixins", [
    getWidth,
    setWidth
]);
var _default = _index.default(SizeableDiv)(_templateObject());
exports.default = _default;
function getWidth() {
    var domElementOffsetWidth = this.domElement.offsetWidth, width = domElementOffsetWidth; ///
    return width;
}
function setWidth(width) {
    width = "".concat(width, "px"); ///
    this.setStyle("width", width);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFNpemVhYmxlRGl2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBnZXRXaWR0aCxcbiAgICBzZXRXaWR0aFxuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzaXplYWJsZWB9XG4gICAgICAgICAgIHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgXG4gIHdpZHRoOiA0OHJlbTtcbiAgbWluLXdpZHRoOiAyNHJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuXG5mdW5jdGlvbiBnZXRXaWR0aCgpIHtcbiAgY29uc3QgZG9tRWxlbWVudE9mZnNldFdpZHRoID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICB3aWR0aCA9IGRvbUVsZW1lbnRPZmZzZXRXaWR0aDsgLy8vXG5cbiAgcmV0dXJuIHdpZHRoO1xufVxuXG5mdW5jdGlvbiBzZXRXaWR0aCh3aWR0aCkge1xuICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgdGhpcy5zZXRTdHlsZShcIndpZHRoXCIsIHdpZHRoKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLE1BQUE7SUFFQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNkJBLDRJQVVBOzs7Ozs7O0lBckNBLFNBQUEsR0FGQSxTQUFBLE9BRUEsU0FBQTtJQUVBLFdBQUEsWUFBQSxTQUFBO2NBQUEsV0FBQSxFQUFBLFNBQUE7YUFBQSxXQUFBOzhCQUFBLFdBQUE7Z0VBQUEsV0FBQTs7aUJBQUEsV0FBQTs7QUFNQSxlQUFBLEdBQUEsTUFBQTs0QkFBQSxNQUFBLENBQUEsTUFBQTtvQkFDQSxNQUFBLFFBQUEsS0FBQSxFQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsU0FBQSxFQUFBLFFBQUEsR0FBQSxNQUFBLENBQUEsUUFBQTt1QkFYQSxTQUFBLHNCQWVBLEdBQUE7QUFBQSw2QkFBQSxLQUFBLE1BQUEsQ0FBQSxTQUFBLEdBQUEsU0FBQTtBQUNBLHVCQUFBLFlBQUEsVUFBQTs2QkFFQSxVQUFBLEdBQUEsVUFBQTs7bUJBSUEsUUFBQTs7OztXQWxCQSxXQUFBO0VBQUEsU0FBQTtnQkFBQSxXQUFBLEdBQ0EsTUFBQTtBQUNBLFlBQUE7QUFDQSxZQUFBOztlQVRBLE1BQUEsU0ErQkEsV0FBQTs7U0FZQSxRQUFBO1FBQ0EscUJBQUEsUUFBQSxVQUFBLENBQUEsV0FBQSxFQUNBLEtBQUEsR0FBQSxxQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO1dBRUEsS0FBQTs7U0FHQSxRQUFBLENBQUEsS0FBQTtBQUNBLFNBQUEsTUFBQSxNQUFBLENBQUEsS0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQTtTQUVBLFFBQUEsRUFBQSxLQUFBLEdBQUEsS0FBQSJ9