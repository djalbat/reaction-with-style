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
const _withstyle = require("with-style");
const _rows = /*#__PURE__*/ _interop_require_default(require("./div/rows"));
const _column = /*#__PURE__*/ _interop_require_default(require("./div/column"));
const _columns = /*#__PURE__*/ _interop_require_default(require("./div/columns"));
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./div/sizeable"));
const _bnf = /*#__PURE__*/ _interop_require_default(require("./textarea/bnf"));
const _content = /*#__PURE__*/ _interop_require_default(require("./textarea/content"));
const _parseTree = /*#__PURE__*/ _interop_require_default(require("./textarea/parseTree"));
const _vertical = /*#__PURE__*/ _interop_require_default(require("./div/splitter/vertical"));
const _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./textarea/lexicalEntries"));
const _constants = require("./constants");
const _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { Component } = _reaction.React;
class View extends Component {
    keyUpHandler = ()=>{
        try {
            const parseTree = this.getParseTree();
            this.parseTreeTextarea.setParseTree(parseTree);
        } catch (error) {
            console.log(error);
            this.parseTreeTextarea.clearParseTree();
        }
    };
    getParseTree() {
        let parseTree = null;
        const bnf = this.bnfTextarea.getBNF(), content = this.contentTextarea.getContent(), lexicalEntries = this.lexicalEntriesTextarea.getLexicalEntries(), entries = lexicalEntries, cssLexer = _withstyle.CSSLexer.fromEntries(entries), cssParser = _withstyle.CSSParser.fromBNF(bnf), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
        if (node !== null) {
            parseTree = node.asParseTree(tokens);
        }
        return parseTree;
    }
    componentDidMount() {
        const maximumDepth = 9;
        this.bnfTextarea = (0, _query.queryByClass)(this, _bnf.default, maximumDepth);
        this.contentTextarea = (0, _query.queryByClass)(this, _content.default, maximumDepth);
        this.parseTreeTextarea = (0, _query.queryByClass)(this, _parseTree.default, maximumDepth);
        this.lexicalEntriesTextarea = (0, _query.queryByClass)(this, _lexicalEntries.default, maximumDepth);
        this.initialise();
    }
    componentWillUnmount() {
        delete this.bnfTextarea;
        delete this.contentTextarea;
        delete this.parseTreeTextarea;
        delete this.lexicalEntriesTextarea;
    }
    initialise() {
        const { entries } = _withstyle.CSSLexer, { bnf } = _withstyle.CSSParser, content = _constants.EMPTY_STRING, lexicalEntries = entries; ///
        this.bnfTextarea.setBNF(bnf);
        this.contentTextarea.setContent(content);
        this.lexicalEntriesTextarea.setLexicalEntries(lexicalEntries);
        this.keyUpHandler();
    }
    render(update) {
        const { className } = this.props;
        return [
            /*#__PURE__*/ _reaction.React.createElement("div", {
                className: `${className} view`
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
const _default = (0, _index.default)(View)`

  padding: 1rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuaW1wb3J0IFJvd3NEaXYgZnJvbSBcIi4vZGl2L3Jvd3NcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IENvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnNcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXJEaXYgZnJvbSBcIi4vZGl2L3NwbGl0dGVyL3ZlcnRpY2FsXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHF1ZXJ5QnlDbGFzcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGtleVVwSGFuZGxlciA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYS5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5ibmZUZXh0YXJlYS5nZXRCTkYoKSxcbiAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudFRleHRhcmVhLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBjc3NQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG1heGltdW1EZXB0aCA9IDk7XG5cbiAgICB0aGlzLmJuZlRleHRhcmVhID0gcXVlcnlCeUNsYXNzKHRoaXMsIEJORlRleHRhcmVhLCBtYXhpbXVtRGVwdGgpO1xuICAgIHRoaXMuY29udGVudFRleHRhcmVhID0gcXVlcnlCeUNsYXNzKHRoaXMsIENvbnRlbnRUZXh0YXJlYSwgbWF4aW11bURlcHRoKTtcbiAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhID0gcXVlcnlCeUNsYXNzKHRoaXMsIFBhcnNlVHJlZVRleHRhcmVhLCBtYXhpbXVtRGVwdGgpO1xuICAgIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHF1ZXJ5QnlDbGFzcyh0aGlzLCBMZXhpY2FsRW50cmllc1RleHRhcmVhLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkZWxldGUgdGhpcy5ibmZUZXh0YXJlYTtcbiAgICBkZWxldGUgdGhpcy5jb250ZW50VGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMucGFyc2VUcmVlVGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgeyBlbnRyaWVzIH0gPSBDU1NMZXhlcixcbiAgICAgICAgICB7IGJuZiB9ID0gQ1NTUGFyc2VyLFxuICAgICAgICAgIGNvbnRlbnQgPSBFTVBUWV9TVFJJTkcsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICB0aGlzLmJuZlRleHRhcmVhLnNldEJORihibmYpO1xuICAgIHRoaXMuY29udGVudFRleHRhcmVhLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gdmlld2B9PlxuICAgICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2Lz5cbiAgICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhLz5cbiAgICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgICAgPC9Db2x1bW5zRGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gOyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJSZWFjdCIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJwYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWVUZXh0YXJlYSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiYm5mIiwiYm5mVGV4dGFyZWEiLCJnZXRCTkYiLCJjb250ZW50IiwiY29udGVudFRleHRhcmVhIiwiZ2V0Q29udGVudCIsImxleGljYWxFbnRyaWVzIiwibGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImNzc0xleGVyIiwiQ1NTTGV4ZXIiLCJmcm9tRW50cmllcyIsImNzc1BhcnNlciIsIkNTU1BhcnNlciIsImZyb21CTkYiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJtYXhpbXVtRGVwdGgiLCJxdWVyeUJ5Q2xhc3MiLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIkVNUFRZX1NUUklORyIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInJlbmRlciIsInVwZGF0ZSIsImNsYXNzTmFtZSIsInByb3BzIiwiZGl2IiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJvbktleVVwIiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7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