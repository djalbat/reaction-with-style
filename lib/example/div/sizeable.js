"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../index"));
var _reaction = require("reaction");
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
var SizeableDiv = /*#__PURE__*/ function(Component) {
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
                return(/*#__PURE__*/ _reaction.React.createElement("div", {
                    className: "".concat(className, " sizeable"),
                    ref: (function(domElement) {
                        this.domElement = domElement;
                    }).bind(this)
                }, children));
            }
        }
    ]);
    return SizeableDiv;
}(Component);
_defineProperty(SizeableDiv, "mixins", [
    getWidth,
    setWidth
]);
var _default = (0, _index).default(SizeableDiv)(_templateObject());
exports.default = _default;
function getWidth() {
    var domElementOffsetWidth = this.domElement.offsetWidth, width = domElementOffsetWidth; ///
    return width;
}
function setWidth(width) {
    width = "".concat(width, "px"); ///
    this.setStyle(_constants.WIDTH, width);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJSZWFjdCIsIldJRFRIIiwiQ29tcG9uZW50IiwiU2l6ZWFibGVEaXYiLCJtaXhpbnMiLCJnZXRXaWR0aCIsInNldFdpZHRoIiwicmVuZGVyIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJwcm9wcyIsImRpdiIsInJlZiIsImRvbUVsZW1lbnQiLCJkb21FbGVtZW50T2Zmc2V0V2lkdGgiLCJvZmZzZXRXaWR0aCIsIndpZHRoIiwic2V0U3R5bGUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBYSxDQUFiLE1BQWE7QUFFYixHQUFVLENBQVYsU0FBVTtBQUVWLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBNkJFLDRJQVV0Qzs7Ozs7OztBQXJDQSxHQUFLLENBQUcsU0FBUyxHQUpLLFNBQVUsT0FJeEIsU0FBUztJQUVYLFdBQVcsaUJBQWpCLFFBQVE7Y0FBRixXQUFXO2FBQVgsV0FBVzs4QkFBWCxXQUFXO2dFQUFYLFdBQVc7O2lCQUFYLFdBQVc7O1lBTWYsR0FBTSxHQUFOLE1BQU07bUJBQU4sUUFBUSxDQUFSLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxHQUFLLENBQTJCLE1BQVUsR0FBVixJQUFJLENBQUMsS0FBSyxFQUFsQyxTQUFTLEdBQWUsTUFBVSxDQUFsQyxTQUFTLEVBQUUsUUFBUSxHQUFLLE1BQVUsQ0FBdkIsUUFBUTtnQkFFM0IsTUFBTSxlQWZZLFNBQVUsc0JBaUJ6QixHQUFHO29CQUFDLFNBQVMsS0FBZSxNQUFTLENBQW5CLFNBQVMsR0FBQyxTQUFTO29CQUNqQyxHQUFHLEdBQUUsUUFBUSxDQUFQLFVBQVUsRUFBSyxDQUFDO3dCQUVwQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7b0JBRTlCLENBQUM7bUJBRUgsUUFBUTtZQUlmLENBQUM7OztXQXRCRyxXQUFXO0VBQVMsU0FBUztnQkFBN0IsV0FBVyxHQUNSLE1BQU0sR0FBRyxDQUFDO0lBQ2YsUUFBUTtJQUNSLFFBQVE7QUFDVixDQUFDO21CQVptQixNQUFhLFVBaUNWLFdBQVc7O1NBWTNCLFFBQVEsR0FBRyxDQUFDO0lBQ25CLEdBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFDbkQsS0FBSyxHQUFHLHFCQUFxQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUV4QyxNQUFNLENBQUMsS0FBSztBQUNkLENBQUM7U0FFUSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsS0FBSyxNQUFZLE1BQUUsQ0FBUixLQUFLLEdBQUMsRUFBRSxHQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUV6QixJQUFJLENBQUMsUUFBUSxDQW5ETyxVQUFjLFFBbURiLEtBQUs7QUFDNUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IFdJRFRIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmNsYXNzIFNpemVhYmxlRGl2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBnZXRXaWR0aCxcbiAgICBzZXRXaWR0aFxuICBdO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzaXplYWJsZWB9XG4gICAgICAgICAgIHJlZj17KGRvbUVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgXG4gIHdpZHRoOiA0OHJlbTtcbiAgbWluLXdpZHRoOiAyNHJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuXG5mdW5jdGlvbiBnZXRXaWR0aCgpIHtcbiAgY29uc3QgZG9tRWxlbWVudE9mZnNldFdpZHRoID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICB3aWR0aCA9IGRvbUVsZW1lbnRPZmZzZXRXaWR0aDsgLy8vXG5cbiAgcmV0dXJuIHdpZHRoO1xufVxuXG5mdW5jdGlvbiBzZXRXaWR0aCh3aWR0aCkge1xuICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgdGhpcy5zZXRTdHlsZShXSURUSCwgd2lkdGgpO1xufVxuIl19