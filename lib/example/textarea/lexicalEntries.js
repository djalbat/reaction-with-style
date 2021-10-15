"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
var _constants = require("../constants");
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
var LexicalEntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(LexicalEntriesTextarea, Textarea);
    function LexicalEntriesTextarea() {
        _classCallCheck(this, LexicalEntriesTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(LexicalEntriesTextarea).apply(this, arguments));
    }
    _createClass(LexicalEntriesTextarea, [
        {
            key: "render",
            value: function render(update) {
                var _this = this;
                var className = _textarea.default.className, _props = this.props, children = _props.children;
                return(/*#__PURE__*/ React.createElement("textarea", {
                    className: "".concat(className, " lexical-entries"),
                    spellCheck: "false",
                    ref: function(domElement) {
                        _this.domElement = domElement;
                    }
                }, children));
            }
        }
    ]);
    return LexicalEntriesTextarea;
}(_textarea.default);
_defineProperty(LexicalEntriesTextarea, "mixins", [
    getLexicalEntries,
    setLexicalEntries
]);
exports.default = LexicalEntriesTextarea;
function getLexicalEntries() {
    var value = this.getValue(), lexicalEntries = JSON.parse(value);
    return lexicalEntries;
}
function setLexicalEntries(lexicalEntries) {
    var value = JSON.stringify(lexicalEntries, null, _constants.DOUBLE_SPACE);
    this.setValue(value);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sIm5hbWVzIjpbIlRleHRhcmVhIiwiRE9VQkxFX1NQQUNFIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm1peGlucyIsImdldExleGljYWxFbnRyaWVzIiwic2V0TGV4aWNhbEVudHJpZXMiLCJyZW5kZXIiLCJ1cGRhdGUiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInByb3BzIiwidGV4dGFyZWEiLCJzcGVsbENoZWNrIiwicmVmIiwiZG9tRWxlbWVudCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNldFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVTLEdBQWEsQ0FBYixTQUFhO0FBRUwsR0FBYyxDQUFkLFVBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEIsc0JBQXNCLGlCQUE1QixRQUFRO2NBQUYsc0JBQXNCO2FBQXRCLHNCQUFzQjs4QkFBdEIsc0JBQXNCO2dFQUF0QixzQkFBc0I7O2lCQUF0QixzQkFBc0I7O1lBTXpDLEdBQU0sRUFBTixDQUFNO21CQUFOLFFBQVEsQ0FBUixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7O2dCQUNkLEdBQUssQ0FBRyxTQUFTLEdBWEEsU0FBYSxTQVd0QixTQUFTLEVBQ0ksTUFBVSxHQUFWLElBQUksQ0FBQyxLQUFLLEVBQXZCLFFBQVEsR0FBSyxNQUFVLENBQXZCLFFBQVE7Z0JBRWhCLE1BQU0sbUNBRUgsQ0FBUTtvQkFBQyxTQUFTLEVBQUcsQ0FBQSxFQUFZLE1BQWdCLENBQTFCLFNBQVMsRUFBQyxDQUFnQjtvQkFDeEMsVUFBVSxFQUFDLENBQU87b0JBQ2xCLEdBQUcsRUFBRSxRQUFRLENBQVAsVUFBVSxFQUFLLENBQUM7OEJBRWYsVUFBVSxHQUFHLFVBQVU7b0JBRTlCLENBQUM7bUJBRVIsUUFBUTtZQUlmLENBQUM7OztXQXhCa0Isc0JBQXNCO0VBSnRCLFNBQWE7Z0JBSWIsc0JBQXNCLEVBQ2xDLENBQU0sU0FBRyxDQUFDO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNuQixDQUFDO2tCQUprQixzQkFBc0I7U0EyQmxDLGlCQUFpQixHQUFHLENBQUM7SUFDNUIsR0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxJQUNyQixjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO0lBRXZDLE1BQU0sQ0FBQyxjQUFjO0FBQ3ZCLENBQUM7U0FFUSxpQkFBaUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQyxHQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksRUFyQ3RCLFVBQWM7SUF1Q3pDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuaW1wb3J0IHsgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXhpY2FsRW50cmllc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIGdldExleGljYWxFbnRyaWVzLFxuICAgIHNldExleGljYWxFbnRyaWVzXG4gIF07XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBUZXh0YXJlYSxcbiAgICAgICAgICB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBsZXhpY2FsLWVudHJpZXNgfVxuICAgICAgICAgICAgICAgIHNwZWxsQ2hlY2s9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgcmVmPXsoZG9tRWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC90ZXh0YXJlYT5cblxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICBsZXhpY2FsRW50cmllcyA9IEpTT04ucGFyc2UodmFsdWUpO1xuXG4gIHJldHVybiBsZXhpY2FsRW50cmllcztcbn1cblxuZnVuY3Rpb24gc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpIHtcbiAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgRE9VQkxFX1NQQUNFKTtcblxuICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbn1cbiJdfQ==