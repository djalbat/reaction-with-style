"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../index"));
var _reaction = require("reaction");
var _withStyle = require("with-style");
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
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
                var maximumDepth = 9;
                this.bnfTextarea = (0, _query).queryByClass(this, _bnf.default, maximumDepth);
                this.contentTextarea = (0, _query).queryByClass(this, _content.default, maximumDepth);
                this.parseTreeTextarea = (0, _query).queryByClass(this, _parseTree.default, maximumDepth);
                this.lexicalEntriesTextarea = (0, _query).queryByClass(this, _lexicalEntries.default, maximumDepth);
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
                var className = this.props.className;
                return [
                    /*#__PURE__*/ _reaction.React.createElement("div", {
                        className: "".concat(className, " view")
                    }, /*#__PURE__*/ _reaction.React.createElement(_columns.default, null, /*#__PURE__*/ _reaction.React.createElement(_sizeable.default, null, /*#__PURE__*/ _reaction.React.createElement(_rows.default, null, /*#__PURE__*/ _reaction.React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ _reaction.React.createElement(_lexicalEntries.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ _reaction.React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ _reaction.React.createElement(_bnf.default, {
                        onKeyUp: this.keyUpHandler
                    }))), /*#__PURE__*/ _reaction.React.createElement(_vertical.default, null), /*#__PURE__*/ _reaction.React.createElement(_column.default, null, /*#__PURE__*/ _reaction.React.createElement(_rows.default, null, /*#__PURE__*/ _reaction.React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ _reaction.React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ _reaction.React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ _reaction.React.createElement(_parseTree.default, null)))))
                ];
            }
        }
    ]);
    return View;
}(Component);
var _default = (0, _index).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuaW1wb3J0IFJvd3NEaXYgZnJvbSBcIi4vZGl2L3Jvd3NcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IENvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnNcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHF1ZXJ5QnlDbGFzcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGtleVVwSGFuZGxlciA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYS5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5ibmZUZXh0YXJlYS5nZXRCTkYoKSxcbiAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudFRleHRhcmVhLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBjc3NQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG1heGltdW1EZXB0aCA9IDk7XG5cbiAgICB0aGlzLmJuZlRleHRhcmVhID0gcXVlcnlCeUNsYXNzKHRoaXMsIEJORlRleHRhcmVhLCBtYXhpbXVtRGVwdGgpO1xuICAgIHRoaXMuY29udGVudFRleHRhcmVhID0gcXVlcnlCeUNsYXNzKHRoaXMsIENvbnRlbnRUZXh0YXJlYSwgbWF4aW11bURlcHRoKTtcbiAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhID0gcXVlcnlCeUNsYXNzKHRoaXMsIFBhcnNlVHJlZVRleHRhcmVhLCBtYXhpbXVtRGVwdGgpO1xuICAgIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHF1ZXJ5QnlDbGFzcyh0aGlzLCBMZXhpY2FsRW50cmllc1RleHRhcmVhLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkZWxldGUgdGhpcy5ibmZUZXh0YXJlYTtcbiAgICBkZWxldGUgdGhpcy5jb250ZW50VGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMucGFyc2VUcmVlVGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDU1NMZXhlcixcbiAgICAgICAgICB7IGJuZiB9ID0gQ1NTUGFyc2VyLFxuICAgICAgICAgIGNvbnRlbnQgPSBFTVBUWV9TVFJJTkcsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLmJuZlRleHRhcmVhLnNldEJORihibmYpO1xuICAgIHRoaXMuY29udGVudFRleHRhcmVhLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgICAgPC9Db2x1bW5zRGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gOyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJSZWFjdCIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJwYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWVUZXh0YXJlYSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiYm5mIiwiYm5mVGV4dGFyZWEiLCJnZXRCTkYiLCJjb250ZW50IiwiY29udGVudFRleHRhcmVhIiwiZ2V0Q29udGVudCIsImxleGljYWxFbnRyaWVzIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImNzc0xleGVyIiwiQ1NTTGV4ZXIiLCJmcm9tRW50cmllcyIsImNzc1BhcnNlciIsIkNTU1BhcnNlciIsImZyb21CTkYiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYXhpbXVtRGVwdGgiLCJxdWVyeUJ5Q2xhc3MiLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIkVNUFRZX1NUUklORyIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsInByb3BzIiwiZGl2IiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJvbktleVVwIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEs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