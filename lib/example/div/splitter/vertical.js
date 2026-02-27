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
const _index = /*#__PURE__*/ _interop_require_default(require("../../../index"));
const _reaction = require("reaction");
const _cursor = /*#__PURE__*/ _interop_require_default(require("../../cursor"));
const _sibling = require("../../../utilities/sibling");
const _events = require("../../events");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { Component } = _reaction.React;
class VerticalSplitterDiv extends Component {
    mouseUpHandler = (event)=>{
        const dragging = this.isDragging();
        if (dragging) {
            this.stopDragging();
        }
        _cursor.default.reset();
    };
    mouseMoveHandler = (event)=>{
        const dragging = this.isDragging();
        if (dragging) {
            const mouseLeft = event.pageX, relativeMouseLeft = mouseLeft - this.previousMouseLeft, sizeableDivWidth = this.previousSizeableDivWidth + relativeMouseLeft, width = sizeableDivWidth; ///
            this.sizeableDiv.setWidth(width);
        }
    };
    mouseDownHandler = (event)=>{
        const dragging = this.isDragging();
        if (!dragging) {
            const mouseLeft = event.pageX, sizeableDivWidth = this.sizeableDiv.getWidth(), previousMouseLeft = mouseLeft, previousSizeableDivWidth = sizeableDivWidth; ///
            this.previousMouseLeft = previousMouseLeft;
            this.previousSizeableDivWidth = previousSizeableDivWidth;
            this.startDragging();
        }
        _cursor.default.columnResize();
    };
    mouseOverHandler = (event)=>{
        _cursor.default.columnResize();
    };
    mouseOutHandler = (event)=>{
        _cursor.default.reset();
    };
    startDragging() {
        this.addClass("dragging");
    }
    stopDragging() {
        this.removeClass("dragging");
    }
    isDragging() {
        const dragging = this.hasClass("dragging");
        return dragging;
    }
    componentDidMount() {
        const previousSibling = (0, _sibling.getPreviousSibling)(this), sizeableDiv = previousSibling; ///
        this.sizeableDiv = sizeableDiv;
        window.addEventListener(_events.MOUSEUP_EVENT, this.mouseUpHandler);
        window.addEventListener(_events.MOUSEMOVE_EVENT, this.mouseMoveHandler);
    }
    componentWillUnmount() {
        window.removeEventListener(_events.MOUSEMOVE_EVENT, this.mouseMoveHandler);
        window.removeEventListener(_events.MOUSEUP_EVENT, this.mouseUpHandler);
        delete this.sizeableDiv;
    }
    render(update) {
        const { className } = this.props;
        return /*#__PURE__*/ _reaction.React.createElement("div", {
            className: `${className} vertical-splitter`,
            onMouseDown: this.mouseDownHandler,
            onMouseOver: this.mouseOverHandler,
            onMouseOut: this.mouseOutHandler
        });
    }
}
const _default = (0, _index.default)(VerticalSplitterDiv)`

  width: 1rem;
  flex-shrink: 0;  

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuaW1wb3J0IHsgZ2V0UHJldmlvdXNTaWJsaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zaWJsaW5nXCI7XG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5ULCBNT1VTRU1PVkVfRVZFTlQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIG1vdXNlVXBIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLnByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoICsgcmVsYXRpdmVNb3VzZUxlZnQsXG4gICAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgICB0aGlzLnNpemVhYmxlRGl2LnNldFdpZHRoKHdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5zaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7ICAgLy8vXG5cbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUxlZnQgPSBwcmV2aW91c01vdXNlTGVmdDtcblxuICAgICAgdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG5cbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cblxuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgfVxuXG4gIG1vdXNlT3ZlckhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBnZXRQcmV2aW91c1NpYmxpbmcodGhpcyksXG4gICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIHRoaXMuc2l6ZWFibGVEaXYgPSBzaXplYWJsZURpdjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlQsIHRoaXMubW91c2VVcEhhbmRsZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVCwgdGhpcy5tb3VzZVVwSGFuZGxlcik7XG5cbiAgICBkZWxldGUgdGhpcy5zaXplYWJsZURpdjtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHZlcnRpY2FsLXNwbGl0dGVyYH1cbiAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMubW91c2VEb3duSGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMubW91c2VPdmVySGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5tb3VzZU91dEhhbmRsZXJ9XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlckRpdilgXG5cbiAgd2lkdGg6IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwOyAgXG5cbmA7XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwibW91c2VVcEhhbmRsZXIiLCJldmVudCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImN1cnNvciIsInJlc2V0IiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTGVmdCIsInBhZ2VYIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJwcmV2aW91c01vdXNlTGVmdCIsInNpemVhYmxlRGl2V2lkdGgiLCJwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJ3aWR0aCIsInNpemVhYmxlRGl2Iiwic2V0V2lkdGgiLCJtb3VzZURvd25IYW5kbGVyIiwiZ2V0V2lkdGgiLCJzdGFydERyYWdnaW5nIiwiY29sdW1uUmVzaXplIiwibW91c2VPdmVySGFuZGxlciIsIm1vdXNlT3V0SGFuZGxlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImNvbXBvbmVudERpZE1vdW50IiwicHJldmlvdXNTaWJsaW5nIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1PVVNFVVBfRVZFTlQiLCJNT1VTRU1PVkVfRVZFTlQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJwcm9wcyIsImRpdiIsIm9uTW91c2VEb3duIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnSEE7OztlQUFBOzs7OERBOUdzQjswQkFFQTsrREFFSDt5QkFFZ0I7d0JBQ1k7Ozs7OztBQUUvQyxNQUFNLEVBQUVBLFNBQVMsRUFBRSxH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