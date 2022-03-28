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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiLCIuLi9zcmMvZXhhbXBsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBDU1NMZXhlciwgQ1NTUGFyc2VyIH0gZnJvbSBcIndpdGgtc3R5bGVcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5pbXBvcnQgUm93c0RpdiBmcm9tIFwiLi9kaXYvcm93c1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgQ29sdW1uc0RpdiBmcm9tIFwiLi9kaXYvY29sdW1uc1wiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcXVlcnlCeUNsYXNzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmJuZlRleHRhcmVhLmdldEJORigpLFxuICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50VGV4dGFyZWEuZ2V0Q29udGVudCgpLFxuICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYS5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICBjc3NMZXhlciA9IENTU0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgbm9kZSA9IGNzc1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgbWF4aW11bURlcHRoID0gOTtcblxuICAgIHRoaXMuYm5mVGV4dGFyZWEgPSBxdWVyeUJ5Q2xhc3ModGhpcywgQk5GVGV4dGFyZWEsIG1heGltdW1EZXB0aCk7XG4gICAgdGhpcy5jb250ZW50VGV4dGFyZWEgPSBxdWVyeUJ5Q2xhc3ModGhpcywgQ29udGVudFRleHRhcmVhLCBtYXhpbXVtRGVwdGgpO1xuICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEgPSBxdWVyeUJ5Q2xhc3ModGhpcywgUGFyc2VUcmVlVGV4dGFyZWEsIG1heGltdW1EZXB0aCk7XG4gICAgdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhID0gcXVlcnlCeUNsYXNzKHRoaXMsIExleGljYWxFbnRyaWVzVGV4dGFyZWEsIG1heGltdW1EZXB0aCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRlbGV0ZSB0aGlzLmJuZlRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRlbnRUZXh0YXJlYTtcbiAgICBkZWxldGUgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYTtcbiAgICBkZWxldGUgdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENTU0xleGVyLFxuICAgICAgICAgIHsgYm5mIH0gPSBDU1NQYXJzZXIsXG4gICAgICAgICAgY29udGVudCA9IEVNUFRZX1NUUklORywgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuYm5mVGV4dGFyZWEuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5jb250ZW50VGV4dGFyZWEuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSB2aWV3YH0+XG4gICAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgICA8L0NvbHVtbnNEaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBSZWFjdCwgUmVhY3RET00gfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vZXhhbXBsZS92aWV3XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbndpbmRvdy5SZWFjdCA9IFJlYWN0OyAvLy9cblxucmVuZGVyU3R5bGVzKCk7XG5cbmNvbnN0IGJvZHlET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cblJlYWN0RE9NLnJlbmRlcihcblxuICAgIDxWaWV3Lz5cblxuICAsXG4gIGJvZHlET01FbGVtZW50XG4pO1xuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlJlYWN0IiwiVmlldyIsImtleVVwSGFuZGxlciIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInBhcnNlVHJlZVRleHRhcmVhIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJibmYiLCJibmZUZXh0YXJlYSIsImdldEJORiIsImNvbnRlbnQiLCJjb250ZW50VGV4dGFyZWEiLCJnZXRDb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJlbnRyaWVzIiwiY3NzTGV4ZXIiLCJDU1NMZXhlciIsImZyb21FbnRyaWVzIiwiY3NzUGFyc2VyIiwiQ1NTUGFyc2VyIiwiZnJvbUJORiIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJjb21wb25lbnREaWRNb3VudCIsIm1heGltdW1EZXB0aCIsInF1ZXJ5QnlDbGFzcyIsIkJORlRleHRhcmVhIiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiaW5pdGlhbGlzZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiRU1QVFlfU1RSSU5HIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwicmVuZGVyIiwidXBkYXRlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJkaXYiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIm9uS2V5VXAiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0IsR0FBVSxDQUFWLE1BQVU7QUFFVixHQUFVLENBQVYsU0FBVTtBQUVJLEdBQVksQ0FBWixVQUFZO0FBSTVCLEdBQVksQ0FBWixLQUFZO0FBQ1YsR0FBYyxDQUFkLE9BQWM7QUFDYixHQUFlLENBQWYsUUFBZTtBQUNmLEdBQWMsQ0FBZCxXQUFjO0FBQ2IsR0FBZ0IsQ0FBaEIsU0FBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsSUFBZ0I7QUFDWixHQUFvQixDQUFwQixRQUFvQjtBQUNsQixHQUFzQixDQUF0QixVQUFzQjtBQUNwQixHQUF5QixDQUF6QixTQUF5QjtBQUN0QixHQUEyQixDQUEzQixlQUEyQjtBQUVqQyxHQUFhLENBQWIsVUFBYTtBQUNiLEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7OERBdEJqRDtzQ0FBQTs2REFBQTtpRUFBQTs7Ozt3RUFBQTtnRUFBQTs7Ozs7Ozs7OztVQUFBOzt3QkFBQTs7Ozs7OztLQUFBOzs7Ozs7Ozs7Ozs7O01BQUE7eURBQUE7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7OEJBQUE7Ozs7Ozs7OzsyQkFBQTs7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