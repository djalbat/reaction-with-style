"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reaction = require("reaction");
var _withStyle = require("with-style");
var _heading = _interopRequireDefault(require("./heading"));
var _rows = _interopRequireDefault(require("./div/rows"));
var _column = _interopRequireDefault(require("./div/column"));
var _columns = _interopRequireDefault(require("./div/columns"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));
var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));
var _constants = require("./constants");
var _query = require("../utilities/query");
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
var Component = _reaction.React.Component;
var View = /*#__PURE__*/ function(Component1) {
    _inherits(View, Component1);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "keyUpHandler", function() {
            try {
                var parseTree = _this.getParseTree();
                _this.parseTreeTextarea.setParseTree(parseTree);
            } catch (error) {
                console.log(error);
                _this.parseTreeTextarea.clearParseTree();
            }
        });
        return _this;
    }
    _createClass(View, [
        {
            key: "getParseTree",
            value: function getParseTree() {
                var parseTree = null;
                var bnf = this.bnfTextarea.getBNF(), content = this.contentTextarea.getContent(), lexicalEntries = this.lexicalEntriesTextarea.getLexicalEntries(), entries = lexicalEntries, cssLexer = _withStyle.CSSLexer.fromEntries(entries), cssParser = _withStyle.CSSParser.fromBNF(bnf), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.bnfTextarea = (0, _query).queryByReactComponent(this, _bnf.default);
                this.contentTextarea = (0, _query).queryByReactComponent(this, _content.default);
                this.parseTreeTextarea = (0, _query).queryByReactComponent(this, _parseTree.default);
                this.lexicalEntriesTextarea = (0, _query).queryByReactComponent(this, _lexicalEntries.default);
                this.initialise();
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                delete this.bnfTextarea;
                delete this.contentTextarea;
                delete this.parseTreeTextarea;
                delete this.lexicalEntriesTextarea;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                var entries = _withStyle.CSSLexer.entries, bnf = _withStyle.CSSParser.bnf, content = _constants.EMPTY_STRING, lexicalEntries = entries; ///
                this.bnfTextarea.setBNF(bnf);
                this.contentTextarea.setContent(content);
                this.lexicalEntriesTextarea.setLexicalEntries(lexicalEntries);
                this.keyUpHandler();
            }
        },
        {
            key: "render",
            value: function render(update) {
                return [
                    /*#__PURE__*/ _reaction.React.createElement(_heading.default, null, "Reaction with Style example"),
                    /*#__PURE__*/ _reaction.React.createElement(_columns.default, null, /*#__PURE__*/ _reaction.React.createElement(_sizeable.default, null, /*#__PURE__*/ _reaction.React.createElement(_rows.default, null, /*#__PURE__*/ _reaction.React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ _reaction.React.createElement(_lexicalEntries.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ _reaction.React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ _reaction.React.createElement(_bnf.default, {
                        onKeyUp: this.keyUpHandler
                    }))), /*#__PURE__*/ _reaction.React.createElement(_vertical.default, null), /*#__PURE__*/ _reaction.React.createElement(_column.default, null, /*#__PURE__*/ _reaction.React.createElement(_rows.default, null, /*#__PURE__*/ _reaction.React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ _reaction.React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ _reaction.React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ _reaction.React.createElement(_parseTree.default, null))))
                ];
            }
        }
    ]);
    return View;
}(Component);
exports.default = View;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IENTU0xleGVyLCBDU1NQYXJzZXIgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBSb3dzRGl2IGZyb20gXCIuL2Rpdi9yb3dzXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBxdWVyeUJ5UmVhY3RDb21wb25lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYS5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuYm5mVGV4dGFyZWEuZ2V0Qk5GKCksXG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnRUZXh0YXJlYS5nZXRDb250ZW50KCksXG4gICAgICAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgIGNzc0xleGVyID0gQ1NTTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgIGNzc1BhcnNlciA9IENTU1BhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgIHRva2VucyA9IGNzc0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmJuZlRleHRhcmVhID0gcXVlcnlCeVJlYWN0Q29tcG9uZW50KHRoaXMsIEJORlRleHRhcmVhKTtcbiAgICB0aGlzLmNvbnRlbnRUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBDb250ZW50VGV4dGFyZWEpO1xuICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEgPSBxdWVyeUJ5UmVhY3RDb21wb25lbnQodGhpcywgUGFyc2VUcmVlVGV4dGFyZWEpO1xuICAgIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBMZXhpY2FsRW50cmllc1RleHRhcmVhKTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZGVsZXRlIHRoaXMuYm5mVGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMuY29udGVudFRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLnBhcnNlVHJlZVRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWE7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ1NTTGV4ZXIsXG4gICAgICAgICAgeyBibmYgfSA9IENTU1BhcnNlcixcbiAgICAgICAgICBjb250ZW50ID0gRU1QVFlfU1RSSU5HLCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5ibmZUZXh0YXJlYS5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLmNvbnRlbnRUZXh0YXJlYS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgUmVhY3Rpb24gd2l0aCBTdHlsZSBleGFtcGxlXG4gICAgICA8L0hlYWRpbmc+LFxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwicGFyc2VUcmVlIiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlVGV4dGFyZWEiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSIsImJuZiIsImJuZlRleHRhcmVhIiwiZ2V0Qk5GIiwiY29udGVudCIsImNvbnRlbnRUZXh0YXJlYSIsImdldENvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJjc3NMZXhlciIsImZyb21FbnRyaWVzIiwiY3NzUGFyc2VyIiwiZnJvbUJORiIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJjb21wb25lbnREaWRNb3VudCIsImluaXRpYWxpc2UiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInJlbmRlciIsInVwZGF0ZSIsIm9uS2V5VXAiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVSxDQUFWLFNBQVU7QUFFSSxHQUFZLENBQVosVUFBWTtBQUk1QixHQUFXLENBQVgsUUFBVztBQUNYLEdBQVksQ0FBWixLQUFZO0FBQ1YsR0FBYyxDQUFkLE9BQWM7QUFDYixHQUFlLENBQWYsUUFBZTtBQUNmLEdBQWMsQ0FBZCxXQUFjO0FBQ2IsR0FBZ0IsQ0FBaEIsU0FBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsSUFBZ0I7QUFDWixHQUFvQixDQUFwQixRQUFvQjtBQUNsQixHQUFzQixDQUF0QixVQUFzQjtBQUNwQixHQUF5QixDQUF6QixTQUF5QjtBQUN0QixHQUEyQixDQUEzQixlQUEyQjtBQUVqQyxHQUFhLENBQWIsVUFBYTtBQUNKLEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWYxRCxHQUFLLENB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