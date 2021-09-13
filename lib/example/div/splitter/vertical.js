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
var Component = _reaction.React.Component;
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
                var _props = this.props, className = _props.className;
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
}(Component);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJSZWFjdCIsImN1cnNvciIsImdldFByZXZpb3VzU2libGluZyIsIk1PVVNFVVBfRVZFTlQiLCJNT1VTRU1PVkVfRVZFTlQiLCJDb21wb25lbnQiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwibWl4aW5zIiwibW91c2VVcEhhbmRsZXIiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJtb3VzZU91dEhhbmRsZXIiLCJzdGFydERyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwiaXNEcmFnZ2luZyIsImNvbXBvbmVudERpZE1vdW50IiwicHJldmlvdXNTaWJsaW5nIiwic2l6ZWFibGVEaXYiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJkaXYiLCJvbk1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsImRyYWdnaW5nIiwicmVzZXQiLCJldmVudCIsIm1vdXNlTGVmdCIsInBhZ2VYIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJwcmV2aW91c01vdXNlTGVmdCIsInNpemVhYmxlRGl2V2lkdGgiLCJwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJ3aWR0aCIsInNldFdpZHRoIiwiZ2V0V2lkdGgiLCJjb2x1bW5SZXNpemUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBZ0IsQ0FBaEIsTUFBZ0I7QUFFaEIsR0FBVSxDQUFWLFNBQVU7QUFFYixHQUFjLENBQWQsT0FBYztBQUVFLEdBQTRCLENBQTVCLFFBQTRCO0FBQ2hCLEdBQWMsQ0FB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akMsQ0FBQztBQUNILENBQUM7U0FFUSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNoQyxHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVO0lBRWhDLEVBQUUsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUNkLEdBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFDdkIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQzVDLGlCQUFpQixHQUFHLFNBQVMsRUFDN0Isd0JBQXdCLEdBQUcsZ0JBQWdCLENBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRXhELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUI7UUFFMUMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QjtRQUV4RCxJQUFJLENBQUMsYUFBYTtJQUNwQixDQUFDO0lBbkdnQixPQUFjLFNBcUd4QixZQUFZO0FBQ3JCLENBQUM7U0FFUSxnQkFBZ0IsR0FBRyxDQUFDO0lBeEdWLE9BQWMsU0F5R3hCLFlBQVk7QUFDckIsQ0FBQztTQUVRLGVBQWUsR0FBRyxDQUFDO0lBNUdULE9BQWMsU0E2R3hCLEtBQUs7QUFDZCxDQUFDO1NBRVEsYUFBYSxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBQyxRQUFVO0FBQzFCLENBQUM7U0FFUSxZQUFZLEdBQUcsQ0FBQztJQUN2QixJQUFJLENBQUMsV0FBVyxFQUFDLFFBQVU7QUFDN0IsQ0FBQztTQUVRLFVBQVUsR0FBRyxDQUFDO0lBQ3JCLEdBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQyxRQUFVO0lBRXpDLE1BQU0sQ0FBQyxRQUFRO0FBQ2pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuaW1wb3J0IHsgZ2V0UHJldmlvdXNTaWJsaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zaWJsaW5nXCI7XG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5ULCBNT1VTRU1PVkVfRVZFTlQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgbW91c2VVcEhhbmRsZXIsXG4gICAgbW91c2VNb3ZlSGFuZGxlcixcbiAgICBtb3VzZURvd25IYW5kbGVyLFxuICAgIG1vdXNlT3ZlckhhbmRsZXIsXG4gICAgbW91c2VPdXRIYW5kbGVyLFxuICAgIHN0YXJ0RHJhZ2dpbmcsXG4gICAgc3RvcERyYWdnaW5nLFxuICAgIGlzRHJhZ2dpbmdcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBnZXRQcmV2aW91c1NpYmxpbmcodGhpcyksXG4gICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIHRoaXMuc2l6ZWFibGVEaXYgPSBzaXplYWJsZURpdjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlQsIHRoaXMubW91c2VVcEhhbmRsZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVCwgdGhpcy5tb3VzZVVwSGFuZGxlcik7XG5cbiAgICBkZWxldGUgdGhpcy5zaXplYWJsZURpdjtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHZlcnRpY2FsLXNwbGl0dGVyYH1cbiAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMubW91c2VEb3duSGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMubW91c2VPdmVySGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5tb3VzZU91dEhhbmRsZXJ9XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlckRpdilgXG5cbiAgd2lkdGg6IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuXG5gO1xuXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcigpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICBpZiAoZHJhZ2dpbmcpIHtcbiAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICB9XG5cbiAgY3Vyc29yLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICBpZiAoZHJhZ2dpbmcpIHtcbiAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5wcmV2aW91c01vdXNlTGVmdCxcbiAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggKyByZWxhdGl2ZU1vdXNlTGVmdCxcbiAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgdGhpcy5zaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gIGlmICghZHJhZ2dpbmcpIHtcbiAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnNpemVhYmxlRGl2LmdldFdpZHRoKCksXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgIC8vL1xuXG4gICAgdGhpcy5wcmV2aW91c01vdXNlTGVmdCA9IHByZXZpb3VzTW91c2VMZWZ0O1xuXG4gICAgdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgfVxuXG4gIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbn1cblxuZnVuY3Rpb24gbW91c2VPdmVySGFuZGxlcigpIHtcbiAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xufVxuXG5mdW5jdGlvbiBtb3VzZU91dEhhbmRsZXIoKSB7XG4gIGN1cnNvci5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBzdGFydERyYWdnaW5nKCkge1xuICB0aGlzLmFkZENsYXNzKFwiZHJhZ2dpbmdcIik7XG59XG5cbmZ1bmN0aW9uIHN0b3BEcmFnZ2luZygpIHtcbiAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xufVxuXG5mdW5jdGlvbiBpc0RyYWdnaW5nKCkge1xuICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICByZXR1cm4gZHJhZ2dpbmc7XG59XG4iXX0=