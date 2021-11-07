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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 1rem;\n  flex-shrink: 0;\n  \n  background-color: lightgrey;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var Component1 = _reaction.React.Component;
var VerticalSplitterDiv = /*#__PURE__*/ function(Component) {
    _inherits(VerticalSplitterDiv, Component);
    function VerticalSplitterDiv() {
        _classCallCheck(this, VerticalSplitterDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(VerticalSplitterDiv).apply(this, arguments));
    }
    _createClass(VerticalSplitterDiv, [
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
                return(/*#__PURE__*/ _reaction.React.createElement("div", {
                    className: "".concat(className, " vertical-splitter"),
                    onMouseDown: this.mouseDownHandler,
                    onMouseOver: this.mouseOverHandler,
                    onMouseOut: this.mouseOutHandler
                }));
            }
        }
    ]);
    return VerticalSplitterDiv;
}(Component1);
_defineProperty(VerticalSplitterDiv, "mixins", [
    mouseUpHandler,
    mouseMoveHandler,
    mouseDownHandler,
    mouseOverHandler,
    mouseOutHandler,
    startDragging,
    stopDragging,
    isDragging
]);
var _default = (0, _index).default(VerticalSplitterDiv)(_templateObject());
exports.default = _default;
function mouseUpHandler() {
    var dragging = this.isDragging();
    if (dragging) {
        this.stopDragging();
    }
    _cursor.default.reset();
}
function mouseMoveHandler(event) {
    var dragging = this.isDragging();
    if (dragging) {
        var mouseLeft = event.pageX, relativeMouseLeft = mouseLeft - this.previousMouseLeft, sizeableDivWidth = this.previousSizeableDivWidth + relativeMouseLeft, width = sizeableDivWidth; ///
        this.sizeableDiv.setWidth(width);
    }
}
function mouseDownHandler(event) {
    var dragging = this.isDragging();
    if (!dragging) {
        var mouseLeft = event.pageX, sizeableDivWidth = this.sizeableDiv.getWidth(), previousMouseLeft = mouseLeft, previousSizeableDivWidth = sizeableDivWidth; ///
        this.previousMouseLeft = previousMouseLeft;
        this.previousSizeableDivWidth = previousSizeableDivWidth;
        this.startDragging();
    }
    _cursor.default.columnResize();
}
function mouseOverHandler() {
    _cursor.default.columnResize();
}
function mouseOutHandler() {
    _cursor.default.reset();
}
function startDragging() {
    this.addClass("dragging");
}
function stopDragging() {
    this.removeClass("dragging");
}
function isDragging() {
    var dragging = this.hasClass("dragging");
    return dragging;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuaW1wb3J0IHsgZ2V0UHJldmlvdXNTaWJsaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zaWJsaW5nXCI7XG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5ULCBNT1VTRU1PVkVfRVZFTlQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgbW91c2VVcEhhbmRsZXIsXG4gICAgbW91c2VNb3ZlSGFuZGxlcixcbiAgICBtb3VzZURvd25IYW5kbGVyLFxuICAgIG1vdXNlT3ZlckhhbmRsZXIsXG4gICAgbW91c2VPdXRIYW5kbGVyLFxuICAgIHN0YXJ0RHJhZ2dpbmcsXG4gICAgc3RvcERyYWdnaW5nLFxuICAgIGlzRHJhZ2dpbmdcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBnZXRQcmV2aW91c1NpYmxpbmcodGhpcyksXG4gICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIHRoaXMuc2l6ZWFibGVEaXYgPSBzaXplYWJsZURpdjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlQsIHRoaXMubW91c2VVcEhhbmRsZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVCwgdGhpcy5tb3VzZVVwSGFuZGxlcik7XG5cbiAgICBkZWxldGUgdGhpcy5zaXplYWJsZURpdjtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHZlcnRpY2FsLXNwbGl0dGVyYH1cbiAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMubW91c2VEb3duSGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMubW91c2VPdmVySGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5tb3VzZU91dEhhbmRsZXJ9XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlckRpdilgXG5cbiAgd2lkdGg6IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuXG5gO1xuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcigpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICBpZiAoZHJhZ2dpbmcpIHtcbiAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICB9XG5cbiAgY3Vyc29yLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICBpZiAoZHJhZ2dpbmcpIHtcbiAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5wcmV2aW91c01vdXNlTGVmdCxcbiAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggKyByZWxhdGl2ZU1vdXNlTGVmdCxcbiAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgdGhpcy5zaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gIGlmICghZHJhZ2dpbmcpIHtcbiAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnNpemVhYmxlRGl2LmdldFdpZHRoKCksXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgIC8vL1xuXG4gICAgdGhpcy5wcmV2aW91c01vdXNlTGVmdCA9IHByZXZpb3VzTW91c2VMZWZ0O1xuXG4gICAgdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgfVxuXG4gIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbn1cblxuZnVuY3Rpb24gbW91c2VPdmVySGFuZGxlcigpIHtcbiAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xufVxuXG5mdW5jdGlvbiBtb3VzZU91dEhhbmRsZXIoKSB7XG4gIGN1cnNvci5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzdGFydERyYWdnaW5nKCkge1xuICB0aGlzLmFkZENsYXNzKFwiZHJhZ2dpbmdcIik7XG59XG5cbmZ1bmN0aW9uIHN0b3BEcmFnZ2luZygpIHtcbiAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xufVxuXG5mdW5jdGlvbiBpc0RyYWdnaW5nKCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICByZXR1cm4gZHJhZ2dpbmc7XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiVmVydGljYWxTcGxpdHRlckRpdiIsImNvbXBvbmVudERpZE1vdW50IiwicHJldmlvdXNTaWJsaW5nIiwic2l6ZWFibGVEaXYiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJkaXYiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXRIYW5kbGVyIiwibWl4aW5zIiwic3RhcnREcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJkcmFnZ2luZyIsInJlc2V0IiwiZXZlbnQiLCJtb3VzZUxlZnQiLCJwYWdlWCIsInJlbGF0aXZlTW91c2VMZWZ0IiwicHJldmlvdXNNb3VzZUxlZnQiLCJzaXplYWJsZURpdldpZHRoIiwicHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsImdldFdpZHRoIiwiY29sdW1uUmVzaXplIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWdCLENBQWhCLE1BQWdCO0FBRWhCLEdBQVUsQ0FBVixTQUFVO0FBRWIsR0FBYyxDQUFkLE9BQWM7QUFFRSxHQUE0QixDQUE1QixRQUE0QjtBQUNoQixHQUFjLENBQWQsT0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWtEZixDQU85Qzs7Ozs7OztBQXZEQSxHQUFLLENBQUdBLFVBQVMsR0FQSyxTQUFVLE9BT3hCQSxTQUFTO0lBRVhDLG1CQUFtQixpQkFBekIsUUFBUTtjQUFGQSxtQkFBbUI7YUFBbkJBLG1CQUFtQjs4QkFBbkJBLG1CQUFtQjtnRUFBbkJBLG1CQUFtQjs7aUJBQW5CQSxtQkFBbUI7O1lBWXZCQyxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQWpCQSxRQUFRLENBQVJBLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLEdBQUssQ0FBQ0MsZUFBZSxPQWxCVSxRQUE0QixxQkFrQmhCLElBQUksR0FDekNDLFdBQVcsR0FBR0QsZUFBZSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFekMsSUFBSSxDQUFDQyxXQUFXLEdBQUdBLFdBQVc7Z0JBRTlCQyxNQUFNLENBQUNDLGdCQUFnQixDQXRCb0IsT0FBYyxnQkFzQmxCLElBQUksQ0FBQ0MsY0FBYztnQkFFMURGLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBeEJvQixPQUFjLGtCQXdCaEIsSUFBSSxDQUFDRSxnQkFBZ0I7WUFDaEUsQ0FBQzs7O1lBRURDLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFBQVEsQ0FBUkEsb0JBQW9CLEdBQUcsQ0FBQztnQkFDdEJKLE1BQU0sQ0FBQ0ssbUJBQW1CLENBNUJpQixPQUFjLGtCQTRCYixJQUFJLENBQUNGLGdCQUFnQjtnQkFFakVILE1BQU0sQ0FBQ0ssbUJBQW1CLENBOUJpQixPQUFjLGdCQThCZixJQUFJLENBQUNILGNBQWM7Z0JBRTdELE1BQU0sQ0FBQyxJQUFJLENBQUNILFdBQVc7WUFDekIsQ0FBQzs7O1lBRURPLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLEdBQUssQ0FBR0MsU0FBUyxHQUFLLElBQUksQ0FBQ0MsS0FBSyxDQUF4QkQsU0FBUztnQkFFakIsTUFBTSxlQTNDWSxTQUFVLHFCQTZDekJFLENBQUc7b0JBQUNGLFNBQVMsRUFBRyxDQUFBLEVBQVksTUFBa0IsQ0FBNUJBLFNBQVMsRUFBQyxDQUFrQjtvQkFDMUNHLFdBQVcsRUFBRSxJQUFJLENBQUNDLGdCQUFnQjtvQkFDbENDLFdBQVcsRUFBRSxJQUFJLENBQUNDLGdCQUFnQjtvQkFDbENDLFVBQVUsRUFBRSxJQUFJLENBQUNDLGVBQWU7O1lBSXpDLENBQUM7OztXQTNDR3BCLG1CQUFtQjtFQUFTRCxVQUFTO2dCQUFyQ0MsbUJBQW1CLEVBQ2hCcUIsQ0FBTSxTQUFHLENBQUM7SUFDZmYsY0FBYztJQUNkQyxnQkFBZ0I7SUFDaEJTLGdCQUFnQjtJQUNoQkUsZ0JBQWdCO0lBQ2hCRSxlQUFlO0lBQ2ZFLGFBQWE7SUFDYkMsWUFBWTtJQUNaQyxVQUFVO0FBQ1osQ0FBQzttQkFyQm1CLE1BQWdCLFVBeURieEIsbUJBQW1COztTQVNuQ00sY0FBYyxHQUFHLENBQUM7SUFDekIsR0FBSyxDQUFDbUIsUUFBUSxHQUFHLElBQUksQ0FBQ0QsVUFBVTtJQUVoQyxFQUFFLEVBQUVDLFFBQVEsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDRixZQUFZO0lBQ25CLENBQUM7SUFuRWdCLE9BQWMsU0FxRXhCRyxLQUFLO0FBQ2QsQ0FBQztTQUVRbkIsZ0JBQWdCLENBQUNvQixLQUFLLEVBQUUsQ0FBQztJQUNoQyxHQUFLLENBQUNGLFFBQVEsR0FBRyxJQUFJLENBQUNELFVBQVU7SUFFaEMsRUFBRSxFQUFFQyxRQUFRLEVBQUUsQ0FBQztRQUNiLEdBQUssQ0FBQ0csU0FBUyxHQUFHRCxLQUFLLENBQUNFLEtBQUssRUFDdkJDLGlCQUFpQixHQUFHRixTQUFTLEdBQUcsSUFBSSxDQUFDRyxpQkFBaUIsRUFDdERDLGdCQUFnQixHQUFHLElBQUksQ0FBQ0Msd0JBQXdCLEdBQUdILGlCQUFpQixFQUNwRUksS0FBSyxHQUFHRixnQkFBZ0IsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFbkMsSUFBSSxDQUFDN0IsV0FBVyxDQUFDZ0MsUUFBUSxDQUFDRCxLQUFLO0lBQ2pDLENBQUM7QUFDSCxDQUFDO1NBRVFsQixnQkFBZ0IsQ0FBQ1csS0FBSyxFQUFFLENBQUM7SUFDaEMsR0FBSyxDQUFDRixRQUFRLEdBQUcsSUFBSSxDQUFDRCxVQUFVO0lBRWhDLEVBQUUsR0FBR0MsUUFBUSxFQUFFLENBQUM7UUFDZCxHQUFLLENBQUNHLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxLQUFLLEVBQ3ZCRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM3QixXQUFXLENBQUNpQyxRQUFRLElBQzVDTCxpQkFBaUIsR0FBR0gsU0FBUyxFQUM3Qkssd0JBQXdCLEdBQUdELGdCQUFnQixDQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztRQUV4RCxJQUFJLENBQUNELGlCQUFpQixHQUFHQSxpQkFBaUI7UUFFMUMsSUFBSSxDQUFDRSx3QkFBd0IsR0FBR0Esd0JBQXdCO1FBRXhELElBQUksQ0FBQ1gsYUFBYTtJQUNwQixDQUFDO0lBbkdnQixPQUFjLFNBcUd4QmUsWUFBWTtBQUNyQixDQUFDO1NBRVFuQixnQkFBZ0IsR0FBRyxDQUFDO0lBeEdWLE9BQWMsU0F5R3hCbUIsWUFBWTtBQUNyQixDQUFDO1NBRVFqQixlQUFlLEdBQUcsQ0FBQztJQTVHVCxPQUFjLFNBNkd4Qk0sS0FBSztBQUNkLENBQUM7U0FFUUosYUFBYSxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDZ0IsUUFBUSxDQUFDLENBQVU7QUFDMUIsQ0FBQztTQUVRZixZQUFZLEdBQUcsQ0FBQztJQUN2QixJQUFJLENBQUNnQixXQUFXLENBQUMsQ0FBVTtBQUM3QixDQUFDO1NBRVFmLFVBQVUsR0FBRyxDQUFDO0lBQ3JCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQ2UsUUFBUSxDQUFDLENBQVU7SUFFekMsTUFBTSxDQUFDZixRQUFRO0FBQ2pCLENBQUMifQ==