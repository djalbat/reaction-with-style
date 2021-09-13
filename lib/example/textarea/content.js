"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ContentTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ContentTextarea, Textarea);
    function ContentTextarea() {
        _classCallCheck(this, ContentTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(ContentTextarea).apply(this, arguments));
    }
    _createClass(ContentTextarea, [
        {
            key: "render",
            value: function render(update) {
                var className = _textarea.default.className, _props = this.props, children = _props.children;
                return(/*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " content"),
                    spellCheck: "false",
                    ref: (function(domElement) {
                        this.domElement = domElement;
                    }).bind(this)
                }, children));
            }
        }
    ]);
    return ContentTextarea;
}(_textarea.default);
_defineProperty(ContentTextarea, "mixins", [
    getContent,
    setContent
]);
var _default = ContentTextarea;
exports.default = _default;
function getContent() {
    var value = this.getValue(), content = value; ///
    return content;
}
function setContent(content) {
    var value = content; ///
    this.setValue(value);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2NvbnRlbnQuanMiXSwibmFtZXMiOlsiVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJtaXhpbnMiLCJnZXRDb250ZW50Iiwic2V0Q29udGVudCIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ0ZXh0YXJlYSIsInNwZWxsQ2hlY2siLCJyZWYiLCJkb21FbGVtZW50IiwidmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJzZXRWYWx1ZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUyxHQUFhLENBQWIsU0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixlQUFlLGlCQUFyQixRQUFRO2NBQUYsZUFBZTthQUFmLGVBQWU7OEJBQWYsZUFBZTtnRUFBZixlQUFlOztpQkFBZixlQUFlOztZQU1uQixHQUFNLEdBQU4sTUFBTTttQkFBTixRQUFRLENBQVIsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNkLEdBQUssQ0FBRyxTQUFTLEdBVEEsU0FBYSxTQVN0QixTQUFTLEVBQ0ksTUFBVSxHQUFWLElBQUksQ0FBQyxLQUFLLEVBQXZCLFFBQVEsR0FBSyxNQUFVLENBQXZCLFFBQVE7Z0JBRWhCLE1BQU0sb0NBRUgsUUFBUTtvQkFBQyxTQUFTLEtBQWUsTUFBUSxDQUFsQixTQUFTLEdBQUMsUUFBUTtvQkFDaEMsVUFBVSxHQUFDLEtBQU87b0JBQ2xCLEdBQUcsR0FBRSxRQUFRLENBQVAsVUFBVSxFQUFLLENBQUM7d0JBRXBCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtvQkFFOUIsQ0FBQzttQkFFUixRQUFRO1lBSWYsQ0FBQzs7O1dBeEJHLGVBQWU7RUFGQSxTQUFhO2dCQUU1QixlQUFlLEdBQ1osTUFBTSxHQUFHLENBQUM7SUFDZixVQUFVO0lBQ1YsVUFBVTtBQUNaLENBQUM7ZUF1QlksZUFBZTs7U0FFckIsVUFBVSxHQUFHLENBQUM7SUFDckIsR0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxJQUNyQixPQUFPLEdBQUcsS0FBSyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUUzQixNQUFNLENBQUMsT0FBTztBQUNoQixDQUFDO1NBRVEsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLEdBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUUzQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmNsYXNzIENvbnRlbnRUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBnZXRDb250ZW50LFxuICAgIHNldENvbnRlbnRcbiAgXTtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IFRleHRhcmVhLFxuICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGNvbnRlbnRgfVxuICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFRleHRhcmVhO1xuXG5mdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgY29udGVudCA9IHZhbHVlOyAgLy8vXG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIHNldENvbnRlbnQoY29udGVudCkge1xuICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQ7ICAvLy9cblxuICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbn1cbiJdfQ==