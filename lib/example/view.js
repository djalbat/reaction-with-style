"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _withStyle = require("with-style");

var _heading = _interopRequireDefault(require("./heading"));

var _column = _interopRequireDefault(require("./div/column"));

var _columns = _interopRequireDefault(require("./div/columns"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _sizeable = _interopRequireDefault(require("./div/sizeable"));

var _bnf = _interopRequireDefault(require("./textarea/bnf"));

var _content = _interopRequireDefault(require("./textarea/content"));

var _verticalSplitter = _interopRequireDefault(require("./verticalSplitter"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));

var _query = require("../utilities/query");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Component = _reaction.React.Component;

var View = /*#__PURE__*/function (_Component) {
  _inherits(View, _Component);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.bnfTextarea = (0, _query.queryByReactComponent)(this, _bnf["default"]);
      this.contentTextarea = (0, _query.queryByReactComponent)(this, _content["default"]);
      this.parseTreeTextarea = (0, _query.queryByReactComponent)(this, _parseTree["default"]);
      this.lexicalEntriesTextarea = (0, _query.queryByReactComponent)(this, _lexicalEntries["default"]);
      this.initialise();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete this.bnfTextarea;
      delete this.contentTextarea;
      delete this.parseTreeTextarea;
      delete this.lexicalEntriesTextarea;
    }
  }, {
    key: "render",
    value: function render(update) {
      return [/*#__PURE__*/_reaction.React.createElement(_heading["default"], null, "Reaction with Style example"), /*#__PURE__*/_reaction.React.createElement(_columns["default"], null, /*#__PURE__*/_reaction.React.createElement(_sizeable["default"], null, /*#__PURE__*/_reaction.React.createElement(_subHeading["default"], null, "Lexical entries"), /*#__PURE__*/_reaction.React.createElement(_lexicalEntries["default"], {
        onKeyUp: this.keyUpHandler
      }), /*#__PURE__*/_reaction.React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/_reaction.React.createElement(_bnf["default"], {
        onKeyUp: this.keyUpHandler
      })), /*#__PURE__*/_reaction.React.createElement(_verticalSplitter["default"], null), /*#__PURE__*/_reaction.React.createElement(_column["default"], null, /*#__PURE__*/_reaction.React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/_reaction.React.createElement(_parseTree["default"], null), /*#__PURE__*/_reaction.React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/_reaction.React.createElement(_content["default"], {
        onKeyUp: this.keyUpHandler
      })))];
    }
  }]);

  return View;
}(Component);

exports["default"] = View;

_defineProperty(View, "mixins", [initialise, keyUpHandler, getParseTree]);

function initialise() {
  var entries = _withStyle.CSSLexer.entries,
      bnf = _withStyle.CSSParser.bnf,
      content = "",
      lexicalEntries = entries; ///

  this.bnfTextarea.setBNF(bnf);
  this.contentTextarea.setContent(content);
  this.lexicalEntriesTextarea.setLexicalEntries(lexicalEntries);
  this.keyUpHandler();
}

function getParseTree() {
  var parseTree = null;

  var bnf = this.bnfTextarea.getBNF(),
      content = this.contentTextarea.getContent(),
      lexicalEntries = this.lexicalEntriesTextarea.getLexicalEntries(),
      entries = lexicalEntries,
      ///
  cssLexer = _withStyle.CSSLexer.fromEntries(entries),
      cssParser = _withStyle.CSSParser.fromBNF(bnf),
      tokens = cssLexer.tokenise(content),
      node = cssParser.parse(tokens);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJWaWV3IiwiYm5mVGV4dGFyZWEiLCJCTkZUZXh0YXJlYSIsImNvbnRlbnRUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJ1cGRhdGUiLCJrZXlVcEhhbmRsZXIiLCJnZXRQYXJzZVRyZWUiLCJlbnRyaWVzIiwiQ1NTTGV4ZXIiLCJibmYiLCJDU1NQYXJzZXIiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJwYXJzZVRyZWUiLCJnZXRCTkYiLCJnZXRDb250ZW50IiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJjc3NMZXhlciIsImZyb21FbnRyaWVzIiwiY3NzUGFyc2VyIiwiZnJvbUJORiIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWJRQSxTLEdBQWNDLGUsQ0FBZEQsUzs7SUFlYUUsSTs7Ozs7Ozs7Ozs7Ozt3Q0FPQztBQUNsQixXQUFLQyxXQUFMLEdBQW1CLGtDQUFzQixJQUF0QixFQUE0QkMsZUFBNUIsQ0FBbkI7QUFDQSxXQUFLQyxlQUFMLEdBQXVCLGtDQUFzQixJQUF0QixFQUE0QkMsbUJBQTVCLENBQXZCO0FBQ0EsV0FBS0MsaUJBQUwsR0FB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QUVBLFNBQUsvQixpQkFBTCxDQUF1QmtDLGNBQXZCO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBDU1NMZXhlciwgQ1NTUGFyc2VyIH0gZnJvbSBcIndpdGgtc3R5bGVcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi9oZWFkaW5nXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyIGZyb20gXCIuL3ZlcnRpY2FsU3BsaXR0ZXJcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmltcG9ydCB7IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBtaXhpbnMgPSBbXG4gICAgaW5pdGlhbGlzZSxcbiAgICBrZXlVcEhhbmRsZXIsXG4gICAgZ2V0UGFyc2VUcmVlXG4gIF07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5ibmZUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBCTkZUZXh0YXJlYSk7XG4gICAgdGhpcy5jb250ZW50VGV4dGFyZWEgPSBxdWVyeUJ5UmVhY3RDb21wb25lbnQodGhpcywgQ29udGVudFRleHRhcmVhKTtcbiAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhID0gcXVlcnlCeVJlYWN0Q29tcG9uZW50KHRoaXMsIFBhcnNlVHJlZVRleHRhcmVhKTtcbiAgICB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEgPSBxdWVyeUJ5UmVhY3RDb21wb25lbnQodGhpcywgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2UoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRlbGV0ZSB0aGlzLmJuZlRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLmNvbnRlbnRUZXh0YXJlYTtcbiAgICBkZWxldGUgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYTtcbiAgICBkZWxldGUgdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgUmVhY3Rpb24gd2l0aCBTdHlsZSBleGFtcGxlXG4gICAgICA8L0hlYWRpbmc+LFxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIEJORlxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2UoKSB7XG4gIGNvbnN0IHsgZW50cmllcyB9ID0gQ1NTTGV4ZXIsXG4gICAgICAgIHsgYm5mIH0gPSBDU1NQYXJzZXIsXG4gICAgICAgIGNvbnRlbnQgPSBcIlwiLCAvLy9cbiAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICB0aGlzLmJuZlRleHRhcmVhLnNldEJORihibmYpO1xuICB0aGlzLmNvbnRlbnRUZXh0YXJlYS5zZXRDb250ZW50KGNvbnRlbnQpO1xuICB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gIHRoaXMua2V5VXBIYW5kbGVyKCk7XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlVHJlZSgpIHtcbiAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgY29uc3QgYm5mID0gdGhpcy5ibmZUZXh0YXJlYS5nZXRCTkYoKSxcbiAgICAgICAgY29udGVudCA9IHRoaXMuY29udGVudFRleHRhcmVhLmdldENvbnRlbnQoKSxcbiAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWEuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBjc3NQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiBwYXJzZVRyZWU7XG59XG5cbmZ1bmN0aW9uIGtleVVwSGFuZGxlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYS5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhLmNsZWFyUGFyc2VUcmVlKCk7XG4gIH1cbn1cbiJdfQ==