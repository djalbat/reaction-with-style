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
var View = /*#__PURE__*/ function(Component) {
    _inherits(View, Component);
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
    }
    _createClass(View, [
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDU1NMZXhlciIsIkNTU1BhcnNlciIsIkNvbXBvbmVudCIsIkhlYWRpbmciLCJSb3dzRGl2IiwiQ29sdW1uRGl2IiwiQ29sdW1uc0RpdiIsIlN1YkhlYWRpbmciLCJTaXplYWJsZURpdiIsIkJORlRleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsInF1ZXJ5QnlSZWFjdENvbXBvbmVudCIsIlZpZXciLCJtaXhpbnMiLCJpbml0aWFsaXNlIiwia2V5VXBIYW5kbGVyIiwiZ2V0UGFyc2VUcmVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJibmZUZXh0YXJlYSIsImNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwidXBkYXRlIiwib25LZXlVcCIsImVudHJpZXMiLCJibmYiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJwYXJzZVRyZWUiLCJnZXRCTkYiLCJnZXRDb250ZW50IiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJjc3NMZXhlciIsImZyb21FbnRyaWVzIiwiY3NzUGFyc2VyIiwiZnJvbUJORiIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFVLENBQVYsU0FBVTtBQUVJLEdBQVksQ0FBWixVQUFZO0FBSTVCLEdBQVcsQ0FBWCxRQUFXO0FBQ1gsR0FBWSxDQUFa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QUFDLEtBQUs7UUFFakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWM7SUFDdkMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IFJvd3NEaXYgZnJvbSBcIi4vZGl2L3Jvd3NcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IENvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnNcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5pbXBvcnQgeyBxdWVyeUJ5UmVhY3RDb21wb25lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIGluaXRpYWxpc2UsXG4gICAga2V5VXBIYW5kbGVyLFxuICAgIGdldFBhcnNlVHJlZVxuICBdO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYm5mVGV4dGFyZWEgPSBxdWVyeUJ5UmVhY3RDb21wb25lbnQodGhpcywgQk5GVGV4dGFyZWEpO1xuICAgIHRoaXMuY29udGVudFRleHRhcmVhID0gcXVlcnlCeVJlYWN0Q29tcG9uZW50KHRoaXMsIENvbnRlbnRUZXh0YXJlYSk7XG4gICAgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBQYXJzZVRyZWVUZXh0YXJlYSk7XG4gICAgdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhID0gcXVlcnlCeVJlYWN0Q29tcG9uZW50KHRoaXMsIExleGljYWxFbnRyaWVzVGV4dGFyZWEpO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkZWxldGUgdGhpcy5ibmZUZXh0YXJlYTtcbiAgICBkZWxldGUgdGhpcy5jb250ZW50VGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMucGFyc2VUcmVlVGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIFJlYWN0aW9uIHdpdGggU3R5bGUgZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gIGNvbnN0IHsgZW50cmllcyB9ID0gQ1NTTGV4ZXIsXG4gICAgICAgIHsgYm5mIH0gPSBDU1NQYXJzZXIsXG4gICAgICAgIGNvbnRlbnQgPSBcIlwiLCAvLy9cbiAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICB0aGlzLmJuZlRleHRhcmVhLnNldEJORihibmYpO1xuICB0aGlzLmNvbnRlbnRUZXh0YXJlYS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gIHRoaXMua2V5VXBIYW5kbGVyKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlVHJlZSgpIHtcbiAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgY29uc3QgYm5mID0gdGhpcy5ibmZUZXh0YXJlYS5nZXRCTkYoKSxcbiAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudFRleHRhcmVhLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBjc3NQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZVRyZWU7XG59XG5cbmZ1bmN0aW9uIGtleVVwSGFuZGxlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYS5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhLmNsZWFyUGFyc2VUcmVlKCk7XG4gIH1cbn1cbiJdfQ==