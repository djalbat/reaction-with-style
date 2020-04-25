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

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _main = _interopRequireDefault(require("./verticalSplitter/main"));

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
      })), /*#__PURE__*/_reaction.React.createElement(_main["default"], null), /*#__PURE__*/_reaction.React.createElement(_column["default"], null, /*#__PURE__*/_reaction.React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/_reaction.React.createElement(_parseTree["default"], null), /*#__PURE__*/_reaction.React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/_reaction.React.createElement(_content["default"], {
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
    this.contentTextarea.hideError();
    this.parseTreeTextarea.setParseTree(parseTree);
  } catch (error) {
    this.contentTextarea.showError();
    this.parseTreeTextarea.clearParseTree();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJWaWV3IiwiYm5mVGV4dGFyZWEiLCJCTkZUZXh0YXJlYSIsImNvbnRlbnRUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJ1cGRhdGUiLCJrZXlVcEhhbmRsZXIiLCJnZXRQYXJzZVRyZWUiLCJlbnRyaWVzIiwiQ1NTTGV4ZXIiLCJibmYiLCJDU1NQYXJzZXIiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJwYXJzZVRyZWUiLCJnZXRCTkYiLCJnZXRDb250ZW50IiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJjc3NMZXhlciIsImZyb21FbnRyaWVzIiwiY3NzUGFyc2VyIiwiZnJvbUJORiIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJoaWRlRXJyb3IiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsInNob3dFcnJvciIsImNsZWFyUGFyc2VUcmVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBYlFBLFMsR0FBY0MsZSxDQUFkRCxTOztJQWVhRSxJOzs7Ozs7Ozs7Ozs7O3dDQU9DO0FBQ2xCLFdBQUtDLFdBQUwsR0FBbUIsa0NBQXNCLElBQXRCLEVBQTRCQyxlQUE1QixDQUFuQjtBQUNBLFdBQUtDLGVBQUwsR0FBdUIsa0NBQXNCLElBQXRCLEVBQTRCQyxtQkFBNUIsQ0FBdkI7QUFDQSxXQUFLQyxp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QUNkLFNBQUtsQyxlQUFMLENBQXFCbUMsU0FBckI7QUFFQSxTQUFLakMsaUJBQUwsQ0FBdUJrQyxjQUF2QjtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuaW1wb3J0IEhlYWRpbmcgZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IENvbHVtbkRpdiBmcm9tIFwiLi9kaXYvY29sdW1uXCI7XG5pbXBvcnQgQ29sdW1uc0RpdiBmcm9tIFwiLi9kaXYvY29sdW1uc1wiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTWFpblZlcnRpY2FsU3BsaXR0ZXIgZnJvbSBcIi4vdmVydGljYWxTcGxpdHRlci9tYWluXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuXG5pbXBvcnQgeyBxdWVyeUJ5UmVhY3RDb21wb25lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgbWl4aW5zID0gW1xuICAgIGluaXRpYWxpc2UsXG4gICAga2V5VXBIYW5kbGVyLFxuICAgIGdldFBhcnNlVHJlZVxuICBdO1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYm5mVGV4dGFyZWEgPSBxdWVyeUJ5UmVhY3RDb21wb25lbnQodGhpcywgQk5GVGV4dGFyZWEpO1xuICAgIHRoaXMuY29udGVudFRleHRhcmVhID0gcXVlcnlCeVJlYWN0Q29tcG9uZW50KHRoaXMsIENvbnRlbnRUZXh0YXJlYSk7XG4gICAgdGhpcy5wYXJzZVRyZWVUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBQYXJzZVRyZWVUZXh0YXJlYSk7XG4gICAgdGhpcy5sZXhpY2FsRW50cmllc1RleHRhcmVhID0gcXVlcnlCeVJlYWN0Q29tcG9uZW50KHRoaXMsIExleGljYWxFbnRyaWVzVGV4dGFyZWEpO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkZWxldGUgdGhpcy5ibmZUZXh0YXJlYTtcbiAgICBkZWxldGUgdGhpcy5jb250ZW50VGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMucGFyc2VUcmVlVGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIFJlYWN0aW9uIHdpdGggU3R5bGUgZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBDU1NMZXhlcixcbiAgICAgICAgeyBibmYgfSA9IENTU1BhcnNlcixcbiAgICAgICAgY29udGVudCA9IFwiXCIsIC8vL1xuICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gIHRoaXMuYm5mVGV4dGFyZWEuc2V0Qk5GKGJuZik7XG4gIHRoaXMuY29udGVudFRleHRhcmVhLnNldENvbnRlbnQoY29udGVudCk7XG4gIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2VUcmVlKCkge1xuICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICBjb25zdCBibmYgPSB0aGlzLmJuZlRleHRhcmVhLmdldEJORigpLFxuICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50VGV4dGFyZWEuZ2V0Q29udGVudCgpLFxuICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYS5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICBjc3NMZXhlciA9IENTU0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgbm9kZSA9IGNzc1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlVHJlZTtcbn1cblxuZnVuY3Rpb24ga2V5VXBIYW5kbGVyKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICB0aGlzLmNvbnRlbnRUZXh0YXJlYS5oaWRlRXJyb3IoKTtcblxuICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhpcy5jb250ZW50VGV4dGFyZWEuc2hvd0Vycm9yKCk7XG5cbiAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhLmNsZWFyUGFyc2VUcmVlKCk7XG4gIH1cbn1cbiJdfQ==