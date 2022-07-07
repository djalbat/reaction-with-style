"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = /*#__PURE__*/ _interopRequireDefault(require("../../index"));
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
var SizeableDiv = /*#__PURE__*/ function(Component) {
    _inherits(SizeableDiv, Component);
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
var _default = (0, _index.default)(SizeableDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBXSURUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBTaXplYWJsZURpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKSxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IGZpcnN0Q2hpbGQuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50T2Zmc2V0V2lkdGggPSBmaXJzdENoaWxkRE9NRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICB3aWR0aCA9IGZpcnN0Q2hpbGRET01FbGVtZW50T2Zmc2V0V2lkdGg7IC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnNldFN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc2l6ZWFibGVgfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG5cbiAgd2lkdGg6IDQ4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDI0cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiU2l6ZWFibGVEaXYiLCJnZXRXaWR0aCIsImZpcnN0Q2hpbGQiLCJnZXRGaXJzdENoaWxkIiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnRPZmZzZXRXaWR0aCIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsInNldFN0eWxlIiwiV0lEVEgiLCJyZW5kZXIiLCJ1cGRhdGUiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiZGl2Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7MERBRVMsYUFBYTt3QkFFYixVQUFVO3lCQUVWLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLElBQU0sQUFBRUEsU0FBUyxHQUFLQyxTQUFLLE1BQUEsQ0FBbkJELFNBQVMsQUFBVSxBQUFDO0FBRTVCLElBQUEsQUFBTUUsV0FBVyxpQkE2QmQsQUE3Qkg7OzthQUFNQSxXQUFXOzs7Ozs7WUFDZkMsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLEdBQUc7Z0JBQ1QsSUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ0MsYUFBYSxFQUFFLEVBQ2pDQyxvQkFBb0IsR0FBR0YsVUFBVSxDQUFDRyxhQUFhLEVBQUUsRUFDakRDLCtCQUErQixHQUFHRixvQkFBb0IsQ0FBQ0csV0FBVyxFQUNsRUMsS0FBSyxHQUFHRiwrQkFBK0IsQUFBQyxFQUFDLEdBQUc7Z0JBRWxELE9BQU9FLEtBQUssQ0FBQzthQUNkOzs7WUFFREMsR0FBUSxFQUFSQSxVQUFRO21CQUFSQSxTQUFBQSxRQUFRLENBQUNELEtBQUssRUFBRTtnQkFDZEEsS0FBSyxHQUFHLEFBQUMsRUFBQSxDQUFRLE1BQUUsQ0FBUkEsS0FBSyxFQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRztnQkFFekIsSUFBSSxDQUFDRSxRQUFRLENBQUNDLFVBQUssTUFBQSxFQUFFSCxLQUFLLENBQUMsQ0FBQzthQUM3Qjs7O1lBRURJLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxDQUFDQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBZ0MsTUFBVSxHQUFWLElBQUksQ0FBQ0MsS0FBSyxFQUFsQ0MsU0FBUyxHQUFlLE1BQVUsQ0FBbENBLFNBQVMsRUFBRUMsUUFBUSxHQUFLLE1BQVUsQ0FBdkJBLFFBQVEsQUFBZ0I7Z0JBRTNDLHFCQUVFLDhCQUFDQyxLQUFHO29CQUFDRixTQUFTLEVBQUUsQUFBQyxFQUFBLENBQVksTUFBUyxDQUFuQkEsU0FBUyxFQUFDLFdBQVMsQ0FBQzttQkFDcENDLFFBQVEsQ0FDTCxDQUVOO2FBQ0g7Ozs7Q0FDRixDQTNCeUJsQixTQUFTLENBMkJsQztlQUVjb0IsSUFBQUEsTUFBUyxRQUFBLEVBQUNsQixXQUFXLENBQUMifQ==