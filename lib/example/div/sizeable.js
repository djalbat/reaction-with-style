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
const _index = /*#__PURE__*/ _interop_require_default(require("../../index"));
const _reaction = require("reaction");
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { Component } = _reaction.React;
class SizeableDiv extends Component {
    getWidth() {
        const firstChild = this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement(), firstChildDOMElementOffsetWidth = firstChildDOMElement.offsetWidth, width = firstChildDOMElementOffsetWidth; ///
        return width;
    }
    setWidth(width) {
        width = `${width}px`; ///
        this.setStyle(_constants.WIDTH, width);
    }
    render(update) {
        const { className, children } = this.props;
        return /*#__PURE__*/ _reaction.React.createElement("div", {
            className: `${className} sizeable`
        }, children);
    }
}
const _default = (0, _index.default)(SizeableDiv)`

  width: 48rem;
  display: flex;
  min-width: 24rem;
  flex-direction: column;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBXSURUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5jbGFzcyBTaXplYWJsZURpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKSxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IGZpcnN0Q2hpbGQuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50T2Zmc2V0V2lkdGggPSBmaXJzdENoaWxkRE9NRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICB3aWR0aCA9IGZpcnN0Q2hpbGRET01FbGVtZW50T2Zmc2V0V2lkdGg7IC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnNldFN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc2l6ZWFibGVgfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG5cbiAgd2lkdGg6IDQ4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDI0cmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiU2l6ZWFibGVEaXYiLCJnZXRXaWR0aCIsImZpcnN0Q2hpbGQiLCJnZXRGaXJzdENoaWxkIiwiZmlyc3RDaGlsZERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwiZmlyc3RDaGlsZERPTUVsZW1lbnRPZmZzZXRXaWR0aCIsIm9mZnNldFdpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsInNldFN0eWxlIiwiV0lEVEgiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwiZGl2Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1Q0E7OztlQUFBOzs7OERBckNzQjswQkFFQTsyQkFFQTs7Ozs7O0FBRXRCLE1BQU0sRUFBRUEsU0FBUyxFQUFFLEdBQUdDLGVBQUs7QUFFM0IsTUFBTUMsb0JBQW9CRjtJQUN4QkcsV0FBVztRQUNULE1BQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyx1QkFBdUJGLFdBQVdHLGFBQWEsSUFDL0NDLGtDQUFrQ0YscUJBQXFCRyxXQUFXLEVBQ2xFQyxRQUFRRixpQ0FBaUMsR0FBRztRQUVsRCxPQUFPRTtJQUNUO0lBRUFDLFNBQVNELEtBQUssRUFBRTtRQUNkQSxRQUFRLEdBQUdBLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRztRQUV6QixJQUFJLENBQUNFLFFBQVEsQ0FBQ0MsZ0JBQUssRUFBRUg7SUFDdkI7SUFFQUksT0FBT0MsTUFBTSxFQUFFO1FBQ2IsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQ0MsS0FBSztRQUUxQyxxQkFFRSw4QkFBQ0M7WUFBSUgsV0FBVyxHQUFHQSxVQUFVLFNBQVMsQ0FBQztXQUNwQ0M7SUFJUDtBQUNGO01BRUEsV0FBZUcsSUFBQUEsY0FBUyxFQUFDbEIsWUFBWSxDQUFDOzs7Ozs7O0FBT3RDLENBQUMifQ==