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
var _index = /*#__PURE__*/ _interop_require_default(require("../../../index"));
var _reaction = require("reaction");
var _cursor = /*#__PURE__*/ _interop_require_default(require("../../cursor"));
var _sibling = require("../../../utilities/sibling");
var _events = require("../../events");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
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
    var _super = _create_super(VerticalSplitterDiv);
    function VerticalSplitterDiv() {
        _class_call_check(this, VerticalSplitterDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "mouseUpHandler", function(event) {
            var dragging = _this.isDragging();
            if (dragging) {
                _this.stopDragging();
            }
            _cursor.default.reset();
        });
        _define_property(_assert_this_initialized(_this), "mouseMoveHandler", function(event) {
            var dragging = _this.isDragging();
            if (dragging) {
                var mouseLeft = event.pageX, relativeMouseLeft = mouseLeft - _this.previousMouseLeft, sizeableDivWidth = _this.previousSizeableDivWidth + relativeMouseLeft, width = sizeableDivWidth; ///
                _this.sizeableDiv.setWidth(width);
            }
        });
        _define_property(_assert_this_initialized(_this), "mouseDownHandler", function(event) {
            var dragging = _this.isDragging();
            if (!dragging) {
                var mouseLeft = event.pageX, sizeableDivWidth = _this.sizeableDiv.getWidth(), previousMouseLeft = mouseLeft, previousSizeableDivWidth = sizeableDivWidth; ///
                _this.previousMouseLeft = previousMouseLeft;
                _this.previousSizeableDivWidth = previousSizeableDivWidth;
                _this.startDragging();
            }
            _cursor.default.columnResize();
        });
        _define_property(_assert_this_initialized(_this), "mouseOverHandler", function(event) {
            _cursor.default.columnResize();
        });
        _define_property(_assert_this_initialized(_this), "mouseOutHandler", function(event) {
            _cursor.default.reset();
        });
        return _this;
    }
    _create_class(VerticalSplitterDiv, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuaW1wb3J0IHsgZ2V0UHJldmlvdXNTaWJsaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9zaWJsaW5nXCI7XG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5ULCBNT1VTRU1PVkVfRVZFTlQgfSBmcm9tIFwiLi4vLi4vZXZlbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIENvbXBvbmVudCB7XG4gIG1vdXNlVXBIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLnByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoICsgcmVsYXRpdmVNb3VzZUxlZnQsXG4gICAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgICB0aGlzLnNpemVhYmxlRGl2LnNldFdpZHRoKHdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5zaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7ICAgLy8vXG5cbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUxlZnQgPSBwcmV2aW91c01vdXNlTGVmdDtcblxuICAgICAgdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG5cbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cblxuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgfVxuXG4gIG1vdXNlT3ZlckhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmcgPSBnZXRQcmV2aW91c1NpYmxpbmcodGhpcyksXG4gICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICAgIHRoaXMuc2l6ZWFibGVEaXYgPSBzaXplYWJsZURpdjtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlQsIHRoaXMubW91c2VVcEhhbmRsZXIpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VNT1ZFX0VWRU5ULCB0aGlzLm1vdXNlTW92ZUhhbmRsZXIpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoTU9VU0VVUF9FVkVOVCwgdGhpcy5tb3VzZVVwSGFuZGxlcik7XG5cbiAgICBkZWxldGUgdGhpcy5zaXplYWJsZURpdjtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IHZlcnRpY2FsLXNwbGl0dGVyYH1cbiAgICAgICAgICAgb25Nb3VzZURvd249e3RoaXMubW91c2VEb3duSGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMubW91c2VPdmVySGFuZGxlcn1cbiAgICAgICAgICAgb25Nb3VzZU91dD17dGhpcy5tb3VzZU91dEhhbmRsZXJ9XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlckRpdilgXG5cbiAgd2lkdGg6IDFyZW07XG4gIGZsZXgtc2hyaW5rOiAwOyAgXG5cbmA7XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwibW91c2VVcEhhbmRsZXIiLCJldmVudCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImN1cnNvciIsInJlc2V0IiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTGVmdCIsInBhZ2VYIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJwcmV2aW91c01vdXNlTGVmdCIsInNpemVhYmxlRGl2V2lkdGgiLCJwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJ3aWR0aCIsInNpemVhYmxlRGl2Iiwic2V0V2lkdGgiLCJtb3VzZURvd25IYW5kbGVyIiwiZ2V0V2lkdGgiLCJzdGFydERyYWdnaW5nIiwiY29sdW1uUmVzaXplIiwibW91c2VPdmVySGFuZGxlciIsIm1vdXNlT3V0SGFuZGxlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImNvbXBvbmVudERpZE1vdW50IiwicHJldmlvdXNTaWJsaW5nIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk1PVVNFVVBfRVZFTlQiLCJNT1VTRU1PVkVfRVZFTlQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJwcm9wcyIsImRpdiIsIm9uTW91c2VEb3duIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnSEE7OztlQUFBOzs7NERBOUdzQjt3QkFFQTs2REFFSDt1QkFFZ0I7c0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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