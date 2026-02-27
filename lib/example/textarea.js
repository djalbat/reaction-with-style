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
const _index = /*#__PURE__*/ _interop_require_default(require("../index"));
const _reaction = require("reaction");
const _events = require("./events");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { Component } = _reaction.React;
class Textarea extends Component {
    onKeyUp = (keyUpHandler)=>{
        const firstChild = this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement();
        firstChildDOMElement.addEventListener(_events.KEYUP_EVENT, (event)=>{
            keyUpHandler(event);
        });
    };
    setValue(value) {
        const firstChild = this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement();
        firstChildDOMElement.value = value;
    }
    getValue() {
        const firstChild = this.getFirstChild(), firstChildDOMElement = firstChild.getDOMElement();
        const value = firstChildDOMElement.value;
        return value;
    }
    componentDidMount() {
        const { onKeyUp } = this.props;
        if (onKeyUp) {
            const keyUpHandler = onKeyUp; ///
            this.onKeyUp(keyUpHandler);
        }
    }
    componentWillUnmount() {
    ///
    }
}
const _default = (0, _index.default)(Textarea)`

  border: 1px solid darkgrey;
  height: 24rem;
  resize: vertical;
  padding: 0.25rem;
  font-size: 1.2rem;
  white-space: pre;
  font-family: monospace;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UIH0gZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbktleVVwID0gKGtleVVwSGFuZGxlcikgPT4ge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKSxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IGZpcnN0Q2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZmlyc3RDaGlsZERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlVUF9FVkVOVCwgKGV2ZW50KSA9PiB7XG4gICAgICBrZXlVcEhhbmRsZXIoZXZlbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCksXG4gICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gZmlyc3RDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICBmaXJzdENoaWxkRE9NRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpLFxuICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IGZpcnN0Q2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgY29uc3QgdmFsdWUgPSBmaXJzdENoaWxkRE9NRWxlbWVudC52YWx1ZTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25LZXlVcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvbktleVVwKSB7XG4gICAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSBvbktleVVwOyAvLy9cblxuICAgICAgdGhpcy5vbktleVVwKGtleVVwSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRleHRhcmVhKWBcblxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgaGVpZ2h0OiAyNHJlbTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cbmA7XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJUZXh0YXJlYSIsIm9uS2V5VXAiLCJrZXlVcEhhbmRsZXIiLCJmaXJzdENoaWxkIiwiZ2V0Rmlyc3RDaGlsZCIsImZpcnN0Q2hpbGRET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJLRVlVUF9FVkVOVCIsImV2ZW50Iiwic2V0VmFsdWUiLCJ2YWx1ZSIsImdldFZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtREE7OztlQUFBOzs7OERBakRzQjswQkFFQTt3QkFFTTs7Ozs7O0FBRTVCLE1BQU0sRUFBRUEsU0FBUyxFQUFFLEdBQUdDLGVBQUs7QUFFM0IsTUFBTUMsaUJBQWlCRjtJQUNyQkcsVUFBVSxDQUFDQztRQUNULE1BQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyx1QkFBdUJGLFdBQVdHLGFBQWE7UUFFckRELHFCQUFxQkUsZ0JBQWdCLENBQUNDLG1CQUFXLEVBQUUsQ0FBQ0M7WUFDbERQLGFBQWFPO1FBQ2Y7SUFDRixFQUFDO0lBRURDLFNBQVNDLEtBQUssRUFBRTtRQUNkLE1BQU1SLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQ2pDQyx1QkFBdUJGLFdBQVdHLGFBQWE7UUFFbkRELHFCQUFxQk0sS0FBSyxHQUFHQTtJQUMvQjtJQUVBQyxXQUFXO1FBQ1QsTUFBTVQsYUFBYSxJQUFJLENBQUNDLGFBQWEsSUFDakNDLHVCQUF1QkYsV0FBV0csYUFBYTtRQUVuRCxNQUFNSyxRQUFRTixxQkFBcUJNLEtBQUs7UUFFeEMsT0FBT0E7SUFDVDtJQUVBRSxvQkFBb0I7UUFDbEIsTUFBTSxFQUFFWixPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUNhLEtBQUs7UUFFOUIsSUFBSWIsU0FBUztZQUNYLE1BQU1DLGVBQWVELFNBQVMsR0FBRztZQUVqQyxJQUFJLENBQUNBLE9BQU8sQ0FBQ0M7UUFDZjtJQUNGO0lBRUFhLHVCQUF1QjtJQUNyQixHQUFHO0lBQ0w7QUFDRjtNQUVBLFdBQWVDLElBQUFBLGNBQVMsRUFBQ2hCLFNBQVMsQ0FBQzs7Ozs7Ozs7OztBQVVuQyxDQUFDIn0=