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
var Textarea = /*#__PURE__*/ function(Component) {
    _inherits(Textarea, Component);
    function Textarea() {
        _classCallCheck(this, Textarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
    }
    _createClass(Textarea, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _props = this.props, onKeyUp = _props.onKeyUp;
                if (onKeyUp) {
                    var keyUpHandler = onKeyUp; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiVGV4dGFyZWEiLCJtaXhpbnMiLCJvbktleVVwIiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsImNvbXBvbmVudERpZE1vdW50IiwicHJvcHMiLCJrZXlVcEhhbmRsZXIiLCJkb21FbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidmFsdWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLE1BQVU7QUFFVixHQUFVLENBQVYsU0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXNCRyx1S0FVbkM7Ozs7Ozs7QUE5QkEsR0FBSyxDQUFHLFNBQVMsR0FGSyxTQUFVLE9BRXhCLFNBQVM7SUFFWCxRQUFRLGlCQUFkLFFBQVE7Y0FBRixRQUFRO2FBQVIsUUFBUTs4QkFBUixRQUFRO2dFQUFSLFFBQVE7O2lCQUFSLFFBQVE7O1lBT1osR0FBaUIsR0FBakIsaUJBQWlCO21CQUFqQixRQUFRLENBQVIsaUJBQWlCLEdBQUcsQ0FBQztnQkFDbkIsR0FBSyxDQUFlLE1BQVUsR0FBVixJQUFJLENBQUMsS0FBSyxFQUF0QixPQUFPLEdBQUssTUFBVSxDQUF0QixPQUFPO2dCQUVmLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQztvQkFDWixHQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRWpDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWTtnQkFDM0IsQ0FBQztZQUNILENBQUM7OztXQWZHLFFBQVE7RUFBUyxTQUFTO2dCQUExQixRQUFRLEdBQ0wsTUFBTSxHQUFHLENBQUM7SUFDZixPQUFPO0lBQ1AsUUFBUTtJQUNSLFFBQVE7QUFDVixDQUFDO21CQVhtQixNQUFVLFVBd0JQLFFBQVE7O1NBWXhCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFDLEtBQU8sR0FBRSxRQUFRLENBQVAsS0FBSyxFQUFLLENBQUM7UUFDcEQsWUFBWSxDQUFDLEtBQUs7SUFDcEIsQ0FBQztBQUNILENBQUM7U0FFUSxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsS0FBSztBQUMvQixDQUFDO1NBRVEsUUFBUSxHQUFHLENBQUM7SUFDbkIsR0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7SUFFbkMsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgb25LZXlVcCxcbiAgICBzZXRWYWx1ZSxcbiAgICBnZXRWYWx1ZVxuICBdO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25LZXlVcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvbktleVVwKSB7XG4gICAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSBvbktleVVwOyAvLy9cblxuICAgICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShUZXh0YXJlYSlgXG5cbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XG4gIGhlaWdodDogMjRyZW07XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuXG5gO1xuXG5mdW5jdGlvbiBvbktleVVwKGtleVVwSGFuZGxlcikge1xuICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgIGtleVVwSGFuZGxlcihldmVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkge1xuICB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5kb21FbGVtZW50LnZhbHVlO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cbiJdfQ==