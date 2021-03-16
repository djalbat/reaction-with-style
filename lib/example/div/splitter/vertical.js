"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../index"));
var _reaction = require("reaction");
var _cursor = _interopRequireDefault(require("../../cursor"));
var _sibling = require("../../../utilities/sibling");
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
var VerticalSplitterDiv = function(Component) {
    _inherits(VerticalSplitterDiv, Component);
    function VerticalSplitterDiv() {
        _classCallCheck(this, VerticalSplitterDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(VerticalSplitterDiv).apply(this, arguments));
    }
    _createClass(VerticalSplitterDiv, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var previousSibling = _sibling.getPreviousSibling(this), sizeableDiv = previousSibling; ///
                this.sizeableDiv = sizeableDiv;
                window.addEventListener("mouseup", this.mouseUpHandler);
                window.addEventListener("mousemove", this.mouseMoveHandler);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                window.removeEventListener("mousemove", this.mouseMoveHandler);
                window.removeEventListener("mouseup", this.mouseUpHandler);
                delete this.sizeableDiv;
            }
        },
        {
            key: "render",
            value: function render(update) {
                var _props = this.props, className = _props.className;
                return _reaction.React.createElement("div", {
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
var _default = _index.default(VerticalSplitterDiv)(_templateObject());
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuaW1wb3J0IHsgZ2V0UHJldmlvdXNTaWJsaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zaWJsaW5nXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgbW91c2VVcEhhbmRsZXIsXG4gICAgbW91c2VNb3ZlSGFuZGxlcixcbiAgICBtb3VzZURvd25IYW5kbGVyLFxuICAgIG1vdXNlT3ZlckhhbmRsZXIsXG4gICAgbW91c2VPdXRIYW5kbGVyLFxuICAgIHN0YXJ0RHJhZ2dpbmcsXG4gICAgc3RvcERyYWdnaW5nLFxuICAgIGlzRHJhZ2dpbmdcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBnZXRQcmV2aW91c1NpYmxpbmcodGhpcyksXG4gICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIHRoaXMuc2l6ZWFibGVEaXYgPSBzaXplYWJsZURpdjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNlVXBIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2VVcEhhbmRsZXIpO1xuXG4gICAgZGVsZXRlIHRoaXMuc2l6ZWFibGVEaXY7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2ZXJ0aWNhbC1zcGxpdHRlcmB9XG4gICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRG93bkhhbmRsZXJ9XG4gICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLm1vdXNlT3ZlckhhbmRsZXJ9XG4gICAgICAgICAgIG9uTW91c2VPdXQ9e3RoaXMubW91c2VPdXRIYW5kbGVyfVxuICAgICAgLz5cblxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZlcnRpY2FsU3BsaXR0ZXJEaXYpYFxuXG4gIHdpZHRoOiAxcmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcblxuYDtcblxuZnVuY3Rpb24gbW91c2VVcEhhbmRsZXIoKSB7XG4gIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgaWYgKGRyYWdnaW5nKSB7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgfVxuXG4gIGN1cnNvci5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgaWYgKGRyYWdnaW5nKSB7XG4gICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMucHJldmlvdXNNb3VzZUxlZnQsXG4gICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoICsgcmVsYXRpdmVNb3VzZUxlZnQsXG4gICAgICAgICAgd2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAvLy9cblxuICAgIHRoaXMuc2l6ZWFibGVEaXYuc2V0V2lkdGgod2lkdGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5zaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgICAvLy9cblxuICAgIHRoaXMucHJldmlvdXNNb3VzZUxlZnQgPSBwcmV2aW91c01vdXNlTGVmdDtcblxuICAgIHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuXG4gICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gIH1cblxuICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG59XG5cbmZ1bmN0aW9uIG1vdXNlT3ZlckhhbmRsZXIoKSB7XG4gIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbn1cblxuZnVuY3Rpb24gbW91c2VPdXRIYW5kbGVyKCkge1xuICBjdXJzb3IucmVzZXQoKTtcbn1cblxuZnVuY3Rpb24gc3RhcnREcmFnZ2luZygpIHtcbiAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xufVxuXG5mdW5jdGlvbiBzdG9wRHJhZ2dpbmcoKSB7XG4gIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbn1cblxuZnVuY3Rpb24gaXNEcmFnZ2luZygpIHtcbiAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgcmV0dXJuIGRyYWdnaW5nO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsTUFBQTtJQUVBLFNBQUE7SUFFQSxPQUFBO0lBRUEsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWtEQSw2RUFPQTs7Ozs7OztJQXZEQSxTQUFBLEdBTkEsU0FBQSxPQU1BLFNBQUE7SUFFQSxtQkFBQSxZQUFBLFNBQUE7Y0FBQSxtQkFBQSxFQUFBLFNBQUE7YUFBQSxtQkFBQTs4QkFBQSxtQkFBQTtnRUFBQSxtQkFBQTs7aUJBQUEsbUJBQUE7O0FBWUEsZUFBQSxHQUFBLGlCQUFBOzRCQUFBLGlCQUFBO29CQUNBLGVBQUEsR0FqQkEsUUFBQSwyQkFrQkEsV0FBQSxHQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtxQkFFQSxXQUFBLEdBQUEsV0FBQTtBQUVBLHNCQUFBLENBQUEsZ0JBQUEsRUFBQSxPQUFBLFFBQUEsY0FBQTtBQUVBLHNCQUFBLENBQUEsZ0JBQUEsRUFBQSxTQUFBLFFBQUEsZ0JBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsb0JBQUE7NEJBQUEsb0JBQUE7QUFDQSxzQkFBQSxDQUFBLG1CQUFBLEVBQUEsU0FBQSxRQUFBLGdCQUFBO0FBRUEsc0JBQUEsQ0FBQSxtQkFBQSxFQUFBLE9BQUEsUUFBQSxjQUFBOzRCQUVBLFdBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsTUFBQTs0QkFBQSxNQUFBLENBQUEsTUFBQTtvQkFDQSxNQUFBLFFBQUEsS0FBQSxFQUFBLFNBQUEsR0FBQSxNQUFBLENBQUEsU0FBQTt1QkF4Q0EsU0FBQSxzQkE0Q0EsR0FBQTtBQUFBLDZCQUFBLEtBQUEsTUFBQSxDQUFBLFNBQUEsR0FBQSxrQkFBQTtBQUNBLCtCQUFBLE9BQUEsZ0JBQUE7QUFDQSwrQkFBQSxPQUFBLGdCQUFBO0FBQ0EsOEJBQUEsT0FBQSxlQUFBOzs7OztXQXZDQSxtQkFBQTtFQUFBLFNBQUE7Z0JBQUEsbUJBQUEsR0FDQSxNQUFBO0FBQ0Esa0JBQUE7QUFDQSxvQkFBQTtBQUNBLG9CQUFBO0FBQ0Esb0JBQUE7QUFDQSxtQkFBQTtBQUNBLGlCQUFBO0FBQ0EsZ0JBQUE7QUFDQSxjQUFBOztlQW5CQSxNQUFBLFNBd0RBLG1CQUFBOztTQVNBLGNBQUE7UUFDQSxRQUFBLFFBQUEsVUFBQTtRQUVBLFFBQUE7YUFDQSxZQUFBOztBQWpFQSxXQUFBLFNBb0VBLEtBQUE7O1NBR0EsZ0JBQUEsQ0FBQSxLQUFBO1FBQ0EsUUFBQSxRQUFBLFVBQUE7UUFFQSxRQUFBO1lBQ0EsU0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLEVBQ0EsaUJBQUEsR0FBQSxTQUFBLFFBQUEsaUJBQUEsRUFDQSxnQkFBQSxRQUFBLHdCQUFBLEdBQUEsaUJBQUEsRUFDQSxLQUFBLEdBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTthQUVBLFdBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQTs7O1NBSUEsZ0JBQUEsQ0FBQSxLQUFBO1FBQ0EsUUFBQSxRQUFBLFVBQUE7U0FFQSxRQUFBO1lBQ0EsU0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLEVBQ0EsZ0JBQUEsUUFBQSxXQUFBLENBQUEsUUFBQSxJQUNBLGlCQUFBLEdBQUEsU0FBQSxFQUNBLHdCQUFBLEdBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTthQUVBLGlCQUFBLEdBQUEsaUJBQUE7YUFFQSx3QkFBQSxHQUFBLHdCQUFBO2FBRUEsYUFBQTs7QUFqR0EsV0FBQSxTQW9HQSxZQUFBOztTQUdBLGdCQUFBO0FBdkdBLFdBQUEsU0F3R0EsWUFBQTs7U0FHQSxlQUFBO0FBM0dBLFdBQUEsU0E0R0EsS0FBQTs7U0FHQSxhQUFBO1NBQ0EsUUFBQSxFQUFBLFFBQUE7O1NBR0EsWUFBQTtTQUNBLFdBQUEsRUFBQSxRQUFBOztTQUdBLFVBQUE7UUFDQSxRQUFBLFFBQUEsUUFBQSxFQUFBLFFBQUE7V0FFQSxRQUFBIn0=