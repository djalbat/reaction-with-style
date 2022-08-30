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
var _index = /*#__PURE__*/ _interopRequireDefault(require("../../../index"));
var _reaction = require("reaction");
var _cursor = /*#__PURE__*/ _interopRequireDefault(require("../../cursor"));
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
var VerticalSplitterDiv = /*#__PURE__*/ function(Component) {
    _inherits(VerticalSplitterDiv, Component);
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
                var previousSibling = (0, _sibling.getPreviousSibling)(this), sizeableDiv = previousSibling; ///
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
var _default = (0, _index.default)(VerticalSplitterDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuaW1wb3J0IHsgZ2V0UHJldmlvdXNTaWJsaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zaWJsaW5nXCI7XG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5ULCBNT1VTRU1PVkVfRVZFTlQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIG1vdXNlVXBIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLnByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoICsgcmVsYXRpdmVNb3VzZUxlZnQsXG4gICAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgICB0aGlzLnNpemVhYmxlRGl2LnNldFdpZHRoKHdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5zaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7ICAgLy8vXG5cbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUxlZnQgPSBwcmV2aW91c01vdXNlTGVmdDtcblxuICAgICAgdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG5cbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cblxuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgfVxuXG4gIG1vdXNlT3ZlckhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBnZXRQcmV2aW91c1NpYmxpbmcodGhpcyksXG4gICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIHRoaXMuc2l6ZWFibGVEaXYgPSBzaXplYWJsZURpdjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlQsIHRoaXMubW91c2VVcEhhbmRsZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVCwgdGhpcy5tb3VzZVVwSGFuZGxlcik7XG5cbiAgICBkZWxldGUgdGhpcy5zaXplYWJsZURpdjtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHZlcnRpY2FsLXNwbGl0dGVyYH1cbiAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMubW91c2VEb3duSGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMubW91c2VPdmVySGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5tb3VzZU91dEhhbmRsZXJ9XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlckRpdilgXG5cbiAgd2lkdGg6IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwOyAgXG5cbmA7XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwibW91c2VVcEhhbmRsZXIiLCJldmVudCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImN1cnNvciIsInJlc2V0IiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTGVmdCIsInBhZ2VYIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJwcmV2aW91c01vdXNlTGVmdCIsInNpemVhYmxlRGl2V2lkdGgiLCJwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJ3aWR0aCIsInNpemVhYmxlRGl2Iiwic2V0V2lkdGgiLCJtb3VzZURvd25IYW5kbGVyIiwiZ2V0V2lkdGgiLCJzdGFydERyYWdnaW5nIiwiY29sdW1uUmVzaXplIiwibW91c2VPdmVySGFuZGxlciIsIm1vdXNlT3V0SGFuZGxlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImNvbXBvbmVudERpZE1vdW50IiwicHJldmlvdXNTaWJsaW5nIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1PVVNFVVBfRVZFTlQiLCJNT1VTRU1PVkVfRVZFTlQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJwcm9wcyIsImRpdiIsIm9uTW91c2VEb3duIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBZ0hiLFNBS0U7OztlQUxGLFFBS0U7OzswREFuSG9CLGdCQUFnQjt3QkFFaEIsVUFBVTsyREFFYixjQUFjO3VCQUVFLDRC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