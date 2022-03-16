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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 48rem;\n  display: flex;\n  min-width: 24rem;\n  flex-direction: column;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Component = _reaction.React.Component;
var SizeableDiv = /*#__PURE__*/ function(Component1) {
    _inherits(SizeableDiv, Component1);
    var _super = _createSuper(SizeableDiv);
    function SizeableDiv() {
        _classCallCheck(this, SizeableDiv);
        return _super.apply(this, arguments);
    }
    _createClass(SizeableDiv, [
        {
            key: "getWidth",
            value: function getWidth() {
                var firstChild = this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement(), firstChildDOMElementOffsetWidth = firstChildDOMElement.offsetWidth, width = firstChildDOMElementOffsetWidth; ///
                return width;
            }
        },
        {
            key: "setWidth",
            value: function setWidth(width) {
                width = "".concat(width, "px"); ///
                this.setStyle(_constants.WIDTH, width);
            }
        },
        {
            key: "render",
            value: function render(update) {
                var _props = this.props, className = _props.className, children = _props.children;
                return /*#__PURE__*/ _reaction.React.createElement("div", {
                    className: "".concat(className, " sizeable")
                }, children);
            }
        }
    ]);
    return SizeableDiv;
}(Component);
var _default = (0, _index).default(SizeableDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBXSURUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBTaXplYWJsZURpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKSxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IGZpcnN0Q2hpbGQuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50T2Zmc2V0V2lkdGggPSBmaXJzdENoaWxkRE9NRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICB3aWR0aCA9IGZpcnN0Q2hpbGRET01FbGVtZW50T2Zmc2V0V2lkdGg7IC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnNldFN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc2l6ZWFibGVgfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG5cbiAgd2lkdGg6IDQ4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDI0cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiU2l6ZWFibGVEaXYiLCJnZXRXaWR0aCIsImZpcnN0Q2hpbGQiLCJnZXRGaXJzdENoaWxkIiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnRPZmZzZXRXaWR0aCIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsInNldFN0eWxlIiwiV0lEVEgiLCJyZW5kZXIiLCJ1cGRhdGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0IsR0FBYSxDQUFiLE1BQWE7QUFFYixHQUFVLENBQVYsU0FBVTtBQUVWLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7OERBTnBDO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7OzhCQUFBOzs7Ozs7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7Ozs7O1FBdUNzQyxDQU90Qzs7OztLQTlDQTs7O0FBUUEsR0FBSyxDQUFHQSxTQUFTLEdBQUtDLFNBQUssT0FBbkJELFNBQVM7QUFFakIsR0FBSyxDQUFDRSxXQUFXLGlCQUFqQixRQUFRO3NDQVZSOzthQVVNQSxXQUFXOzBDQVZqQjs7Ozs7WUFXRUMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxJQUMvQkMsb0JBQW9CLEdBQUdGLFVBQVUsQ0FBQ0csYUFBYSxJQUMvQ0MsK0JBQStCLEdBQUdGLG9CQUFvQixDQUFDRyxXQUFXLEVBQ2xFQyxLQUFLLEdBQUdGLCtCQUErQixFQUFFLEVBQUcsQUFBSCxDQUFHO2dCQUVsRCxNQUFNLENBQUNFLEtBQUs7WUFDZCxDQUFDOzs7WUFFREMsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsQ0FBQ0QsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZBLEtBQUssR0FBSSxDQUFBLEVBQVEsTUFBRSxDQUFSQSxLQUFLLEVBQUMsQ0FBRSxJQUFDLENBQUMsQ0FBQyxFQUFHLEFBQUgsQ0FBRztnQkFFekIsSUFBSSxDQUFDRSxRQUFRLENBQUNDLFVBQUssUUFBRUgsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQzs7O1lBRURJLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLEdBQUssQ0FBMkIsTUFBVSxHQUFWLElBQUksQ0FBQ0MsS0FBSyxFQUFsQ0MsU0FBUyxHQUFlLE1BQVUsQ0FBbENBLFNBQVMsRUFBRUMsUUFBUSxHQUFLLE1BQVUsQ0FBdkJBLFFBQVE7Z0JBRTNCLE1BQU0sNkNBRUhDLENBQUc7b0JBQUNGLFNBQVMsRUFBRyxDQUFBLEVBQVksTUFBUyxDQUFuQkEsU0FBUyxFQUFDLENBQVM7bUJBQ25DQyxRQUFRO1lBSWYsQ0FBQzs7TUFwQ0g7O0VBVTBCbEIsU0FBUzttQkE2QnBCb0IsTUFBUyxVQUFDbEIsV0FBVzswQkF2Q3BDIn0=