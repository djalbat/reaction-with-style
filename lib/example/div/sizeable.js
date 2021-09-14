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
var SizeableDiv = /*#__PURE__*/ function(Component1) {
    _inherits(SizeableDiv, Component1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBXSURUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBTaXplYWJsZURpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgZ2V0V2lkdGgsXG4gICAgc2V0V2lkdGhcbiAgXTtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc2l6ZWFibGVgfVxuICAgICAgICAgICByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU2l6ZWFibGVEaXYpYFxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuICB3aWR0aDogNDhyZW07XG4gIG1pbi13aWR0aDogMjRyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuYDtcblxuZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRPZmZzZXRXaWR0aCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgd2lkdGggPSBkb21FbGVtZW50T2Zmc2V0V2lkdGg7IC8vL1xuXG4gIHJldHVybiB3aWR0aDtcbn1cblxuZnVuY3Rpb24gc2V0V2lkdGgod2lkdGgpIHtcbiAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gIHRoaXMuc2V0U3R5bGUoV0lEVEgsIHdpZHRoKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWEsQ0FBYixNQUFhO0FBRWIsR0FBVSxDQUFWLFNBQVU7QUFFVixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTZCRSw0SUFVdEM7Ozs7Ozs7QUFyQ0EsR0FBSyxDQUFHLFNBQVMsR0FKSyxTQUFVLE9BSXhCLFNBQVM7SUFFWCxXQUFXO2NBQVgsV0FBVzthQUFYLFdBQVc7OEJBQVgsV0FBVztnRUFBWCxXQUFXOztpQkFBWCxXQUFXOztZQU1mLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDZCxHQUFLLENBQTJCLE1BQVUsUUFBTCxLQUFLLEVBQWxDLFNBQVMsR0FBZSxNQUFVLENBQWxDLFNBQVMsRUFBRSxRQUFRLEdBQUssTUFBVSxDQUF2QixRQUFRO3FDQWJULFNBQVUsc0JBaUJ6QixHQUFHO29CQUFDLFNBQVMsS0FBZSxNQUFTLENBQW5CLFNBQVMsR0FBQyxTQUFTO29CQUNqQyxHQUFHLFlBQUcsVUFBVSxFQUFLLENBQUM7NkJBRWYsVUFBVSxHQUFHLFVBQVU7b0JBRTlCLENBQUM7bUJBRUgsUUFBUTtZQUlmLENBQUM7OztXQXRCRyxXQUFXO0VBQVMsU0FBUztnQkFBN0IsV0FBVyxHQUNSLE1BQU07SUFDWCxRQUFRO0lBQ1IsUUFBUTs7bUJBWFUsTUFBYSxVQWlDVixXQUFXOztTQVkzQixRQUFRLEdBQUcsQ0FBQztJQUNuQixHQUFLLENBQUMscUJBQXFCLFFBQVEsVUFBVSxDQUFDLFdBQVcsRUFDbkQsS0FBSyxHQUFHLHFCQUFxQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztXQUVqQyxLQUFLO0FBQ2QsQ0FBQztTQUVRLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixLQUFLLE1BQVksTUFBRSxDQUFSLEtBQUssR0FBQyxFQUFFLEdBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1NBRXBCLFFBQVEsQ0FuRE8sVUFBYyxRQW1EYixLQUFLO0FBQzVCLENBQUMifQ==