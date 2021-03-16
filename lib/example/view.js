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
var Component = _reaction.React.Component;
var View = function(Component) {
    _inherits(View, Component);
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
    }
    _createClass(View, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.bnfTextarea = _query.queryByReactComponent(this, _bnf.default);
                this.contentTextarea = _query.queryByReactComponent(this, _content.default);
                this.parseTreeTextarea = _query.queryByReactComponent(this, _parseTree.default);
                this.lexicalEntriesTextarea = _query.queryByReactComponent(this, _lexicalEntries.default);
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
            key: "render",
            value: function render(update) {
                return [
                    _reaction.React.createElement(_heading.default, null, "Reaction with Style example"),
                    _reaction.React.createElement(_columns.default, null, _reaction.React.createElement(_sizeable.default, null, _reaction.React.createElement(_rows.default, null, _reaction.React.createElement(_subHeading.default, null, "Lexical entries"), _reaction.React.createElement(_lexicalEntries.default, {
                        onKeyUp: this.keyUpHandler
                    }), _reaction.React.createElement(_subHeading.default, null, "BNF"), _reaction.React.createElement(_bnf.default, {
                        onKeyUp: this.keyUpHandler
                    }))), _reaction.React.createElement(_vertical.default, null), _reaction.React.createElement(_column.default, null, _reaction.React.createElement(_rows.default, null, _reaction.React.createElement(_subHeading.default, null, "Content"), _reaction.React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), _reaction.React.createElement(_subHeading.default, null, "Parse tree"), _reaction.React.createElement(_parseTree.default, null))))
                ];
            }
        }
    ]);
    return View;
}(Component);
_defineProperty(View, "mixins", [
    initialise,
    keyUpHandler,
    getParseTree
]);
exports.default = View;
function initialise() {
    var entries = _withStyle.CSSLexer.entries, bnf = _withStyle.CSSParser.bnf, content = "", lexicalEntries = entries; ///
    this.bnfTextarea.setBNF(bnf);
    this.contentTextarea.setContent(content);
    this.lexicalEntriesTextarea.setLexicalEntries(lexicalEntries);
    this.keyUpHandler();
}
function getParseTree() {
    var parseTree = null;
    var bnf = this.bnfTextarea.getBNF(), content = this.contentTextarea.getContent(), lexicalEntries = this.lexicalEntriesTextarea.getLexicalEntries(), entries = lexicalEntries, cssLexer = _withStyle.CSSLexer.fromEntries(entries), cssParser = _withStyle.CSSParser.fromBNF(bnf), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
    if (node !== null) {
        parseTree = node.asParseTree(tokens);
    }
    return parseTree;
}
function keyUpHandler() {
    try {
        var parseTree = this.getParseTree();
        this.parseTreeTextarea.setParseTree(parseTree);
    } catch (error) {
        console.log(error);
        this.parseTreeTextarea.clearParseTree();
    }
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IENTU0xleGVyLCBDU1NQYXJzZXIgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBSb3dzRGl2IGZyb20gXCIuL2Rpdi9yb3dzXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuaW1wb3J0IHsgcXVlcnlCeVJlYWN0Q29tcG9uZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBpbml0aWFsaXNlLFxuICAgIGtleVVwSGFuZGxlcixcbiAgICBnZXRQYXJzZVRyZWVcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmJuZlRleHRhcmVhID0gcXVlcnlCeVJlYWN0Q29tcG9uZW50KHRoaXMsIEJORlRleHRhcmVhKTtcbiAgICB0aGlzLmNvbnRlbnRUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBDb250ZW50VGV4dGFyZWEpO1xuICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEgPSBxdWVyeUJ5UmVhY3RDb21wb25lbnQodGhpcywgUGFyc2VUcmVlVGV4dGFyZWEpO1xuICAgIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBMZXhpY2FsRW50cmllc1RleHRhcmVhKTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZGVsZXRlIHRoaXMuYm5mVGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMuY29udGVudFRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLnBhcnNlVHJlZVRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWE7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICBSZWFjdGlvbiB3aXRoIFN0eWxlIGV4YW1wbGVcbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gIGNvbnN0IHsgZW50cmllcyB9ID0gQ1NTTGV4ZXIsXG4gICAgICAgIHsgYm5mIH0gPSBDU1NQYXJzZXIsXG4gICAgICAgIGNvbnRlbnQgPSBcIlwiLCAvLy9cbiAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICB0aGlzLmJuZlRleHRhcmVhLnNldEJORihibmYpO1xuICB0aGlzLmNvbnRlbnRUZXh0YXJlYS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gIHRoaXMua2V5VXBIYW5kbGVyKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlVHJlZSgpIHtcbiAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgY29uc3QgYm5mID0gdGhpcy5ibmZUZXh0YXJlYS5nZXRCTkYoKSxcbiAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudFRleHRhcmVhLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBjc3NQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZVRyZWU7XG59XG5cbmZ1bmN0aW9uIGtleVVwSGFuZGxlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYS5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhLmNsZWFyUGFyc2VUcmVlKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFNBQUE7SUFFQSxVQUFBO0lBSUEsUUFBQTtJQUNBLEtBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EsSUFBQTtJQUNBLFFBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLGVBQUE7SUFFQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZEEsU0FBQSxHQUpBLFNBQUEsT0FJQSxTQUFBO0lBZ0JBLElBQUEsWUFBQSxTQUFBO2NBQUEsSUFBQSxFQUFBLFNBQUE7YUFBQSxJQUFBOzhCQUFBLElBQUE7Z0VBQUEsSUFBQTs7aUJBQUEsSUFBQTs7QUFPQSxlQUFBLEdBQUEsaUJBQUE7NEJBQUEsaUJBQUE7cUJBQ0EsV0FBQSxHQVZBLE1BQUEsNkJBTkEsSUFBQTtxQkFpQkEsZUFBQSxHQVhBLE1BQUEsNkJBTEEsUUFBQTtxQkFpQkEsaUJBQUEsR0FaQSxNQUFBLDZCQUpBLFVBQUE7cUJBaUJBLHNCQUFBLEdBYkEsTUFBQSw2QkFGQSxlQUFBO3FCQWlCQSxVQUFBOzs7O0FBR0EsZUFBQSxHQUFBLG9CQUFBOzRCQUFBLG9CQUFBOzRCQUNBLFdBQUE7NEJBQ0EsZUFBQTs0QkFDQSxpQkFBQTs0QkFDQSxzQkFBQTs7OztBQUdBLGVBQUEsR0FBQSxNQUFBOzRCQUFBLE1BQUEsQ0FBQSxNQUFBOztBQTNDQSw2QkFBQSxxQkFNQSxRQUFBLGlCQXdDQSwyQkFFQTtBQWhEQSw2QkFBQSxxQkFTQSxRQUFBLGdCQVRBLFNBQUEscUJBV0EsU0FBQSxnQkFYQSxTQUFBLHFCQU9BLEtBQUEsZ0JBUEEsU0FBQSxxQkFVQSxXQUFBLGlCQTBDQSxlQUVBLElBdERBLFNBQUEscUJBZ0JBLGVBQUE7QUF1Q0EsK0JBQUEsT0FBQSxZQUFBO3dCQXZEQSxTQUFBLHFCQVVBLFdBQUEsaUJBOENBLEdBRUEsSUExREEsU0FBQSxxQkFZQSxJQUFBO0FBK0NBLCtCQUFBLE9BQUEsWUFBQTswQkEzREEsU0FBQSxxQkFlQSxTQUFBLGlCQWZBLFNBQUEscUJBUUEsT0FBQSxnQkFSQSxTQUFBLHFCQU9BLEtBQUEsZ0JBUEEsU0FBQSxxQkFVQSxXQUFBLGlCQXVEQSxPQUVBLElBbkVBLFNBQUEscUJBYUEsUUFBQTtBQXVEQSwrQkFBQSxPQUFBLFlBQUE7d0JBcEVBLFNBQUEscUJBVUEsV0FBQSxpQkEyREEsVUFFQSxJQXZFQSxTQUFBLHFCQWNBLFVBQUE7Ozs7O1dBTUEsSUFBQTtFQUFBLFNBQUE7Z0JBQUEsSUFBQSxHQUNBLE1BQUE7QUFDQSxjQUFBO0FBQ0EsZ0JBQUE7QUFDQSxnQkFBQTs7a0JBSkEsSUFBQTtTQTZEQSxVQUFBO1FBQ0EsT0FBQSxHQWhGQSxVQUFBLFVBZ0ZBLE9BQUEsRUFDQSxHQUFBLEdBakZBLFVBQUEsV0FpRkEsR0FBQSxFQUNBLE9BQUEsT0FDQSxjQUFBLEdBQUEsT0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO1NBRUEsV0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBO1NBQ0EsZUFBQSxDQUFBLFVBQUEsQ0FBQSxPQUFBO1NBQ0Esc0JBQUEsQ0FBQSxpQkFBQSxDQUFBLGNBQUE7U0FFQSxZQUFBOztTQUdBLFlBQUE7UUFDQSxTQUFBLEdBQUEsSUFBQTtRQUVBLEdBQUEsUUFBQSxXQUFBLENBQUEsTUFBQSxJQUNBLE9BQUEsUUFBQSxlQUFBLENBQUEsVUFBQSxJQUNBLGNBQUEsUUFBQSxzQkFBQSxDQUFBLGlCQUFBLElBQ0EsT0FBQSxHQUFBLGNBQUEsRUFDQSxRQUFBLEdBbkdBLFVBQUEsVUFtR0EsV0FBQSxDQUFBLE9BQUEsR0FDQSxTQUFBLEdBcEdBLFVBQUEsV0FvR0EsT0FBQSxDQUFBLEdBQUEsR0FDQSxNQUFBLEdBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLEdBQ0EsSUFBQSxHQUFBLFNBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQTtRQUVBLElBQUEsS0FBQSxJQUFBO0FBQ0EsaUJBQUEsR0FBQSxJQUFBLENBQUEsV0FBQSxDQUFBLE1BQUE7O1dBR0EsU0FBQTs7U0FHQSxZQUFBOztZQUVBLFNBQUEsUUFBQSxZQUFBO2FBRUEsaUJBQUEsQ0FBQSxZQUFBLENBQUEsU0FBQTthQUNBLEtBQUE7QUFDQSxlQUFBLENBQUEsR0FBQSxDQUFBLEtBQUE7YUFFQSxpQkFBQSxDQUFBLGNBQUEifQ==