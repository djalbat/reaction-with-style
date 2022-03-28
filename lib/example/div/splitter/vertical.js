"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../index"));
var _reaction = require("reaction");
var _cursor = _interopRequireDefault(require("../../cursor"));
var _sibling = require("../../../utilities/sibling");
var _events = require("../../events");
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
        "\n\n  width: 1rem;\n  flex-shrink: 0;  \n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Component = _reaction.React.Component;
var VerticalSplitterDiv = /*#__PURE__*/ function(Component1) {
    _inherits(VerticalSplitterDiv, Component1);
    var _super = _createSuper(VerticalSplitterDiv);
    function VerticalSplitterDiv() {
        _classCallCheck(this, VerticalSplitterDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "mouseUpHandler", function(event) {
            var dragging = _this.isDragging();
            if (dragging) {
                _this.stopDragging();
            }
            _cursor.default.reset();
        });
        _defineProperty(_assertThisInitialized(_this), "mouseMoveHandler", function(event) {
            var dragging = _this.isDragging();
            if (dragging) {
                var mouseLeft = event.pageX, relativeMouseLeft = mouseLeft - _this.previousMouseLeft, sizeableDivWidth = _this.previousSizeableDivWidth + relativeMouseLeft, width = sizeableDivWidth; ///
                _this.sizeableDiv.setWidth(width);
            }
        });
        _defineProperty(_assertThisInitialized(_this), "mouseDownHandler", function(event) {
            var dragging = _this.isDragging();
            if (!dragging) {
                var mouseLeft = event.pageX, sizeableDivWidth = _this.sizeableDiv.getWidth(), previousMouseLeft = mouseLeft, previousSizeableDivWidth = sizeableDivWidth; ///
                _this.previousMouseLeft = previousMouseLeft;
                _this.previousSizeableDivWidth = previousSizeableDivWidth;
                _this.startDragging();
            }
            _cursor.default.columnResize();
        });
        _defineProperty(_assertThisInitialized(_this), "mouseOverHandler", function(event) {
            _cursor.default.columnResize();
        });
        _defineProperty(_assertThisInitialized(_this), "mouseOutHandler", function(event) {
            _cursor.default.reset();
        });
        return _this;
    }
    _createClass(VerticalSplitterDiv, [
        {
            key: "startDragging",
            value: function startDragging() {
                this.addClass("dragging");
            }
        },
        {
            key: "stopDragging",
            value: function stopDragging() {
                this.removeClass("dragging");
            }
        },
        {
            key: "isDragging",
            value: function isDragging() {
                var dragging = this.hasClass("dragging");
                return dragging;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var previousSibling = (0, _sibling).getPreviousSibling(this), sizeableDiv = previousSibling; ///
                this.sizeableDiv = sizeableDiv;
                window.addEventListener(_events.MOUSEUP_EVENT, this.mouseUpHandler);
                window.addEventListener(_events.MOUSEMOVE_EVENT, this.mouseMoveHandler);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                window.removeEventListener(_events.MOUSEMOVE_EVENT, this.mouseMoveHandler);
                window.removeEventListener(_events.MOUSEUP_EVENT, this.mouseUpHandler);
                delete this.sizeableDiv;
            }
        },
        {
            key: "render",
            value: function render(update) {
                var className = this.props.className;
                return /*#__PURE__*/ _reaction.React.createElement("div", {
                    className: "".concat(className, " vertical-splitter"),
                    onMouseDown: this.mouseDownHandler,
                    onMouseOver: this.mouseOverHandler,
                    onMouseOut: this.mouseOutHandler
                });
            }
        }
    ]);
    return VerticalSplitterDiv;
}(Component);
var _default = (0, _index).default(VerticalSplitterDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyIsIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBjdXJzb3IgZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5pbXBvcnQgeyBnZXRQcmV2aW91c1NpYmxpbmcgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL3NpYmxpbmdcIjtcbmltcG9ydCB7IE1PVVNFVVBfRVZFTlQsIE1PVVNFTU9WRV9FVkVOVCB9IGZyb20gXCIuLi8uLi9ldmVudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyRGl2IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgbW91c2VVcEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgIH1cblxuICAgIGN1cnNvci5yZXNldCgpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAgLy8vXG4gICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMucHJldmlvdXNNb3VzZUxlZnQsXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggKyByZWxhdGl2ZU1vdXNlTGVmdCxcbiAgICAgICAgICAgIHdpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgLy8vXG5cbiAgICAgIHRoaXMuc2l6ZWFibGVEaXYuc2V0V2lkdGgod2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnNpemVhYmxlRGl2LmdldFdpZHRoKCksXG4gICAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IG1vdXNlTGVmdCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgICAvLy9cblxuICAgICAgdGhpcy5wcmV2aW91c01vdXNlTGVmdCA9IHByZXZpb3VzTW91c2VMZWZ0O1xuXG4gICAgICB0aGlzLnByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aDtcblxuICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgfVxuXG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICB9XG5cbiAgbW91c2VPdmVySGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGN1cnNvci5yZXNldCgpO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZHJhZ2dpbmdcIik7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHByZXZpb3VzU2libGluZyA9IGdldFByZXZpb3VzU2libGluZyh0aGlzKSxcbiAgICAgICAgICBzaXplYWJsZURpdiA9IHByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgdGhpcy5zaXplYWJsZURpdiA9IHNpemVhYmxlRGl2O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVCwgdGhpcy5tb3VzZVVwSGFuZGxlcik7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRU1PVkVfRVZFTlQsIHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihNT1VTRU1PVkVfRVZFTlQsIHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihNT1VTRVVQX0VWRU5ULCB0aGlzLm1vdXNlVXBIYW5kbGVyKTtcblxuICAgIGRlbGV0ZSB0aGlzLnNpemVhYmxlRGl2O1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmVydGljYWwtc3BsaXR0ZXJgfVxuICAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5tb3VzZURvd25IYW5kbGVyfVxuICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5tb3VzZU92ZXJIYW5kbGVyfVxuICAgICAgICAgICBvbk1vdXNlT3V0PXt0aGlzLm1vdXNlT3V0SGFuZGxlcn1cbiAgICAgIC8+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyRGl2KWBcblxuICB3aWR0aDogMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7ICBcblxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlld1wiO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG53aW5kb3cuUmVhY3QgPSBSZWFjdDsgLy8vXG5cbnJlbmRlclN0eWxlcygpO1xuXG5jb25zdCBib2R5RE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5SZWFjdERPTS5yZW5kZXIoXG5cbiAgICA8Vmlldy8+XG5cbiAgLFxuICBib2R5RE9NRWxlbWVudFxuKTtcbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJSZWFjdCIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJtb3VzZVVwSGFuZGxlciIsImV2ZW50IiwiZHJhZ2dpbmciLCJpc0RyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwiY3Vyc29yIiwicmVzZXQiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VMZWZ0IiwicGFnZVgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInByZXZpb3VzTW91c2VMZWZ0Iiwic2l6ZWFibGVEaXZXaWR0aCIsInByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsIndpZHRoIiwic2l6ZWFibGVEaXYiLCJzZXRXaWR0aCIsIm1vdXNlRG93bkhhbmRsZXIiLCJnZXRXaWR0aCIsInN0YXJ0RHJhZ2dpbmciLCJjb2x1bW5SZXNpemUiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJwcmV2aW91c1NpYmxpbmciLCJnZXRQcmV2aW91c1NpYmxpbmciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiTU9VU0VVUF9FVkVOVCIsIk1PVVNFTU9WRV9FVkVOVCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsInByb3BzIiwiZGl2Iiwib25Nb3VzZURvd24iLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQixHQUFnQixDQUFoQixNQUFnQjtBQUVoQixHQUFVLENBQVYsU0FBVTtBQUViLEdBQWMsQ0FBZCxPQUFjO0FBRUUsR0FBNEIsQ0FBNUIsUUFBNEI7QUFDaEIsR0FBYyxDQUFkLE9BQWM7Ozs7Ozs7Ozs7Ozs7Ozs4REFUN0Q7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7dUJBQUE7O0tBQUE7Ozs7OzhCQUFBOzs7Ozs7Ozs7MkJBQUE7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7Ozs7O1FBZ0g4QyxDQUs5Qzs7OztLQXJIQTs7O0FBV0EsR0FBSyxDQUFHQSxTQUFTLEdBQUtDLFNBQUssT0FBbkJELFNBQVM7QUFFakIsR0FBSyxDQUFDRSxtQkFBbUIsaUJBQXpCLFFBQVE7OENBYlI7O2FBYU1BLG1CQUFtQjtrREFiekI7OzZDQUFBO3VEQWNFQyxDQUFjLGlCQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7WUFDM0IsR0FBSyxDQUFDQyxRQUFRLFNBQVFDLFVBQVU7WUFFaEMsRUFBRSxFQUFFRCxRQUFRLEVBQUUsQ0FBQztzQkFDUkUsWUFBWSxFQUFF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