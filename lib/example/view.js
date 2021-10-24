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
var Component1 = _reaction.React.Component;
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
}(Component1);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmltcG9ydCB7IENTU0xleGVyLCBDU1NQYXJzZXIgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBSb3dzRGl2IGZyb20gXCIuL2Rpdi9yb3dzXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuaW1wb3J0IHsgcXVlcnlCeVJlYWN0Q29tcG9uZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBpbml0aWFsaXNlLFxuICAgIGtleVVwSGFuZGxlcixcbiAgICBnZXRQYXJzZVRyZWVcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmJuZlRleHRhcmVhID0gcXVlcnlCeVJlYWN0Q29tcG9uZW50KHRoaXMsIEJORlRleHRhcmVhKTtcbiAgICB0aGlzLmNvbnRlbnRUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBDb250ZW50VGV4dGFyZWEpO1xuICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEgPSBxdWVyeUJ5UmVhY3RDb21wb25lbnQodGhpcywgUGFyc2VUcmVlVGV4dGFyZWEpO1xuICAgIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBMZXhpY2FsRW50cmllc1RleHRhcmVhKTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZGVsZXRlIHRoaXMuYm5mVGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMuY29udGVudFRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLnBhcnNlVHJlZVRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWE7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICBSZWFjdGlvbiB3aXRoIFN0eWxlIGV4YW1wbGVcbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdi8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlKCkge1xuICBjb25zdCB7IGVudHJpZXMgfSA9IENTU0xleGVyLFxuICAgICAgICB7IGJuZiB9ID0gQ1NTUGFyc2VyLFxuICAgICAgICBjb250ZW50ID0gXCJcIiwgLy8vXG4gICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgdGhpcy5ibmZUZXh0YXJlYS5zZXRCTkYoYm5mKTtcbiAgdGhpcy5jb250ZW50VGV4dGFyZWEuc2V0Q29udGVudChjb250ZW50KTtcbiAgdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICB0aGlzLmtleVVwSGFuZGxlcigpO1xufVxuXG5mdW5jdGlvbiBnZXRQYXJzZVRyZWUoKSB7XG4gIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gIGNvbnN0IGJuZiA9IHRoaXMuYm5mVGV4dGFyZWEuZ2V0Qk5GKCksXG4gICAgICAgIGNvbnRlbnQgPSB0aGlzLmNvbnRlbnRUZXh0YXJlYS5nZXRDb250ZW50KCksXG4gICAgICAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgIGNzc0xleGVyID0gQ1NTTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgIGNzc1BhcnNlciA9IENTU1BhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgIHRva2VucyA9IGNzc0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VUcmVlO1xufVxuXG5mdW5jdGlvbiBrZXlVcEhhbmRsZXIoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYS5jbGVhclBhcnNlVHJlZSgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiVmlldyIsImNvbXBvbmVudERpZE1vdW50IiwiYm5mVGV4dGFyZWEiLCJjb250ZW50VGV4dGFyZWEiLCJwYXJzZVRyZWVUZXh0YXJlYSIsImxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJ1cGRhdGUiLCJvbktleVVwIiwia2V5VXBIYW5kbGVyIiwibWl4aW5zIiwiZ2V0UGFyc2VUcmVlIiwiZW50cmllcyIsImJuZiIsImNvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInBhcnNlVHJlZSIsImdldEJORiIsImdldENvbnRlbnQiLCJnZXRMZXhpY2FsRW50cmllcyIsImNzc0xleGVyIiwiZnJvbUVudHJpZXMiLCJjc3NQYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQVUsQ0FBVixTQUFVO0FBRUksR0FBWSxDQUFaLFVBQVk7QUFJNUIsR0FBVyxDQUFYLFFBQVc7QUFDWCxHQUFZLENBQVosS0FBWTtBQUNWLEdBQWMsQ0FBZCxPQUFjO0FBQ2IsR0FBZSxDQUFmLFFBQWU7QUFDZixHQUFjLENBQWQsV0FBYztBQUNiLEdBQWdCLENBQWhCLFNBQWdCO0FBQ2hCLEdBQWdCLENBQWhCLElBQWdCO0FBQ1osR0FBb0IsQ0FBcEIsUUFBb0I7QUFDbEIsR0FBc0IsQ0FBdEIsVUFBc0I7QUFDcEIsR0FBeUIsQ0FBekIsU0FBeUI7QUFDdEIsR0FBMkIsQ0FBM0IsZUFBMkI7QUFFeEIsR0FBb0IsQ0FBcEIsTUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFkMUQsR0FBSyxDQUFHQSxVQUFTLEdBSkssU0FBVSxPQUl4QkEsU0FBUztJQWdCSUMsSUFBSSxpQkFBVixRQUFRO2NBQUZBLElBQUk7YUFBSkEsSUFBSTs4QkFBSkEsSUFBSTtnRUFBSkEsSUFBSTs7aUJBQUpBLElBQUk7O1lBT3ZCQyxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQWpCQSxRQUFRLENBQVJBLGlCQUFpQixHQUFHLENBQUM7Z0JBQ25CLElBQUksQ0FBQ0MsV0FBVyxPQVZrQixNQUFvQix3QkFVYixJQUFJLEVBaEJ6QixJQUFnQjtnQkFpQnBDLElBQUksQ0FBQ0MsZUFBZSxPQVhjLE1BQW9CLHdCQVdULElBQUksRUFoQnpCLFFBQW9CO2dCQWlCNUMsSUFBSSxDQUFDQyxpQkFBaUIsT0FaWSxNQUFvQix3QkFZUCxJQUFJLEVBaEJ6QixVQUFzQjtnQkFpQmhELElBQUksQ0FBQ0Msc0JBQXNCLE9BYk8sTUFBb0Isd0JBYUYsSUFBSSxFQWZ6QixlQUEyQjtnQkFpQjFELElBQUksQ0FBQ0MsVUFBVTtZQUNqQixDQUFDOzs7WUFFREMsR0FBb0IsRUFBcEJBLENBQW9CO21CQUFwQkEsUUFBUSxDQUFSQSxvQkFBb0IsR0FBRyxDQUFDO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDTCxXQUFXO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDQyxlQUFlO2dCQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDQyxpQkFBaUI7Z0JBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUNDLHNCQUFzQjtZQUNwQyxDQUFDOzs7WUFFREcsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsTUFBTSxDQUFFLENBQUM7a0NBNUNTLFNBQVUscUJBTVosUUFBVyxnQkF3Q2hCLENBRVQ7a0NBaERnQixTQUFVLHFCQVNULFFBQWUsOEJBVGhCLFNBQVUscUJBV1IsU0FBZ0IsOEJBWGxCLFNBQVUscUJBT1osS0FBWSw4QkFQVixTQUFVLHFCQVVULFdBQWMsZ0JBMENiLENBRVosaUNBdERVLFNBQVUscUJBZ0JHLGVBQTJCO3dCQXVDMUJDLE9BQU8sRUFBRSxJQUFJLENBQUNDLFlBQVk7c0NBdkR4QyxTQUFVLHFCQVVULFdBQWMsZ0JBOENiLENBRVoscUJBMURVLFNBQVUscUJBWVIsSUFBZ0I7d0JBK0NmRCxPQUFPLEVBQUUsSUFBSSxDQUFDQyxZQUFZO3dDQTNEN0IsU0FBVSxxQkFlQSxTQUF5QiwrQkFmbkMsU0FBVSxxQkFRVixPQUFjLDhCQVJkLFNBQVUscUJBT1osS0FBWSw4QkFQVixTQUFVLHFCQVVULFdBQWMsZ0JBdURiLENBRVoseUJBbkVVLFNBQVUscUJBYUosUUFBb0I7d0JBdURuQkQsT0FBTyxFQUFFLElBQUksQ0FBQ0MsWUFBWTtzQ0FwRWpDLFNBQVUscUJBVVQsV0FBYyxnQkEyRGIsQ0FFWiw0QkF2RVUsU0FBVSxxQkFjRixVQUFzQjtnQkErRGhELENBQUM7WUFDSCxDQUFDOzs7V0ExRGtCWCxJQUFJO0VBQVNELFVBQVM7Z0JBQXRCQyxJQUFJLEVBQ2hCWSxDQUFNLFNBQUcsQ0FBQztJQUNmTixVQUFVO0lBQ1ZLLFlBQVk7SUFDWkUsWUFBWTtBQUNkLENBQUM7a0JBTGtCYixJQUFJO1NBNkRoQk0sVUFBVSxHQUFHLENBQUM7SUFDckIsR0FBSyxDQUFHUSxPQUFPLEdBaEZtQixVQUFZLFVBZ0Z0Q0EsT0FBTyxFQUNQQyxHQUFHLEdBakZ1QixVQUFZLFdBaUZ0Q0EsR0FBRyxFQUNMQyxPQUFPLEdBQUcsQ0FBRSxHQUNaQyxjQUFjLEdBQUdILE9BQU8sQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFbkMsSUFBSSxDQUFDWixXQUFXLENBQUNnQixNQUFNLENBQUNILEdBQUc7SUFDM0IsSUFBSSxDQUFDWixlQUFlLENBQUNnQixVQUFVLENBQUNILE9BQU87SUFDdkMsSUFBSSxDQUFDWCxzQkFBc0IsQ0FBQ2UsaUJBQWlCLENBQUNILGNBQWM7SUFFNUQsSUFBSSxDQUFDTixZQUFZO0FBQ25CLENBQUM7U0FFUUUsWUFBWSxHQUFHLENBQUM7SUFDdkIsR0FBRyxDQUFDUSxTQUFTLEdBQUcsSUFBSTtJQUVwQixHQUFLLENBQUNOLEdBQUcsR0FBRyxJQUFJLENBQUNiLFdBQVcsQ0FBQ29CLE1BQU0sSUFDN0JOLE9BQU8sR0FBRyxJQUFJLENBQUNiLGVBQWUsQ0FBQ29CLFVBQVUsSUFDekNOLGNBQWMsR0FBRyxJQUFJLENBQUNaLHNCQUFzQixDQUFDbUIsaUJBQWlCLElBQzlEVixPQUFPLEdBQUdHLGNBQWMsRUFDeEJRLFFBQVEsR0FuR29CLFVBQVksVUFtR3BCQyxXQUFXLENBQUNaLE9BQU8sR0FDdkNhLFNBQVMsR0FwR21CLFVBQVksV0FvR2xCQyxPQUFPLENBQUNiLEdBQUcsR0FDakNjLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxRQUFRLENBQUNkLE9BQU8sR0FDbENlLElBQUksR0FBR0osU0FBUyxDQUFDSyxLQUFLLENBQUNILE1BQU07SUFFbkMsRUFBRSxFQUFFRSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDbEJWLFNBQVMsR0FBR1UsSUFBSSxDQUFDRSxXQUFXLENBQUNKLE1BQU07SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQ1IsU0FBUztBQUNsQixDQUFDO1NBRVFWLFlBQVksR0FBRyxDQUFDO0lBQ3ZCLEdBQUcsQ0FBQyxDQUFDO1FBQ0gsR0FBSyxDQUFDVSxTQUFTLEdBQUcsSUFBSSxDQUFDUixZQUFZO1FBRW5DLElBQUksQ0FBQ1QsaUJBQWlCLENBQUM4QixZQUFZLENBQUNiLFNBQVM7SUFDL0MsQ0FBQyxDQUFDLEtBQUssRUFBRWMsS0FBSyxFQUFFLENBQUM7UUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUs7UUFFakIsSUFBSSxDQUFDL0IsaUJBQWlCLENBQUNrQyxjQUFjO0lBQ3ZDLENBQUM7QUFDSCxDQUFDIn0=