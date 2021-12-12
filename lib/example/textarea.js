"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../index"));
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
        "\n\n  border: 1px solid darkgrey;\n  height: 24rem;\n  resize: vertical;\n  padding: 0.25rem;\n  font-size: 1.2rem;\n  white-space: pre;\n  font-family: monospace;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Component = _reaction.React.Component;
var Textarea = /*#__PURE__*/ function(Component1) {
    _inherits(Textarea, Component1);
    var _super = _createSuper(Textarea);
    function Textarea() {
        _classCallCheck(this, Textarea);
        return _super.apply(this, arguments);
    }
    _createClass(Textarea, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var onKeyUp1 = this.props.onKeyUp;
                if (onKeyUp1) {
                    var keyUpHandler = onKeyUp1; ///
                    this.onKeyUp(keyUpHandler);
                }
            }
        }
    ]);
    return Textarea;
}(Component);
_defineProperty(Textarea, "mixins", [
    onKeyUp,
    setValue,
    getValue
]);
var _default = (0, _index).default(Textarea)(_templateObject());
exports.default = _default;
function onKeyUp(keyUpHandler) {
    this.domElement.addEventListener("keyup", function(event) {
        keyUpHandler(event);
    });
}
function setValue(value) {
    this.domElement.value = value;
}
function getValue() {
    var value = this.domElement.value;
    return value;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIG9uS2V5VXAsXG4gICAgc2V0VmFsdWUsXG4gICAgZ2V0VmFsdWVcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uS2V5VXAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAob25LZXlVcCkge1xuICAgICAgY29uc3Qga2V5VXBIYW5kbGVyID0gb25LZXlVcDsgLy8vXG5cbiAgICAgIHRoaXMub25LZXlVcChrZXlVcEhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVGV4dGFyZWEpYFxuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBoZWlnaHQ6IDI0cmVtO1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblxuYDtcblxuZnVuY3Rpb24gb25LZXlVcChrZXlVcEhhbmRsZXIpIHtcbiAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgICBrZXlVcEhhbmRsZXIoZXZlbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHtcbiAgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZG9tRWxlbWVudC52YWx1ZTtcblxuICByZXR1cm4gdmFsdWU7XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiVGV4dGFyZWEiLCJjb21wb25lbnREaWRNb3VudCIsIm9uS2V5VXAiLCJwcm9wcyIsImtleVVwSGFuZGxlciIsIm1peGlucyIsInNldFZhbHVlIiwiZ2V0VmFsdWUiLCJkb21FbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLE1BQVU7QUFFVixHQUFVLENBQVYsU0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFzQkcsQ0FVbkM7Ozs7Ozs7QUE5QkEsR0FBSyxDQUFHQSxTQUFTLEdBRkssU0FBVSxPQUV4QkEsU0FBUztJQUVYQyxRQUFRLGlCQUFkLFFBQVE7Y0FBRkEsUUFBUTs4QkFBUkEsUUFBUTthQUFSQSxRQUFROzhCQUFSQSxRQUFROzs7aUJBQVJBLFFBQVE7O1lBT1pDLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBakJBLFFBQVEsQ0FBUkEsaUJBQWlCLEdBQUcsQ0FBQztnQkFDbkIsR0FBSyxDQUFHQyxRQUFPLEdBQUssSUFBSSxDQUFDQyxLQUFLLENBQXRCRCxPQUFPO2dCQUVmLEVBQUUsRUFBRUEsUUFBTyxFQUFFLENBQUM7b0JBQ1osR0FBSyxDQUFDRSxZQUFZLEdBQUdGLFFBQU8sQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRWpDLElBQUksQ0FBQ0EsT0FBTyxDQUFDRSxZQUFZO2dCQUMzQixDQUFDO1lBQ0gsQ0FBQzs7O1dBZkdKLFFBQVE7RUFBU0QsU0FBUztnQkFBMUJDLFFBQVEsRUFDTEssQ0FBTSxTQUFHLENBQUM7SUFDZkgsT0FBTztJQUNQSSxRQUFRO0lBQ1JDLFFBQVE7QUFDVixDQUFDO21CQVhtQixNQUFVLFVBd0JQUCxRQUFROztTQVl4QkUsT0FBTyxDQUFDRSxZQUFZLEVBQUUsQ0FBQztJQUM5QixJQUFJLENBQUNJLFVBQVUsQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBTyxRQUFFLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFDcEROLFlBQVksQ0FBQ00sS0FBSztJQUNwQixDQUFDO0FBQ0gsQ0FBQztTQUVRSixRQUFRLENBQUNLLEtBQUssRUFBRSxDQUFDO0lBQ3hCLElBQUksQ0FBQ0gsVUFBVSxDQUFDRyxLQUFLLEdBQUdBLEtBQUs7QUFDL0IsQ0FBQztTQUVRSixRQUFRLEdBQUcsQ0FBQztJQUNuQixHQUFLLENBQUNJLEtBQUssR0FBRyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csS0FBSztJQUVuQyxNQUFNLENBQUNBLEtBQUs7QUFDZCxDQUFDIn0=