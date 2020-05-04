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

var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));

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
      })), /*#__PURE__*/_reaction.React.createElement(_vertical["default"], null), /*#__PURE__*/_reaction.React.createElement(_column["default"], null, /*#__PURE__*/_reaction.React.createElement(_subHeading["default"], null, "Content"), /*#__PURE__*/_reaction.React.createElement(_content["default"], {
        onKeyUp: this.keyUpHandler
      }), /*#__PURE__*/_reaction.React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/_reaction.React.createElement(_parseTree["default"], null)))];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiUmVhY3QiLCJWaWV3IiwiYm5mVGV4dGFyZWEiLCJCTkZUZXh0YXJlYSIsImNvbnRlbnRUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsInBhcnNlVHJlZVRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJsZXhpY2FsRW50cmllc1RleHRhcmVhIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJ1cGRhdGUiLCJrZXlVcEhhbmRsZXIiLCJnZXRQYXJzZVRyZWUiLCJlbnRyaWVzIiwiQ1NTTGV4ZXIiLCJibmYiLCJDU1NQYXJzZXIiLCJjb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJwYXJzZVRyZWUiLCJnZXRCTkYiLCJnZXRDb250ZW50IiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJjc3NMZXhlciIsImZyb21FbnRyaWVzIiwiY3NzUGFyc2VyIiwiZnJvbUJORiIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWJRQSxTLEdBQWNDLGUsQ0FBZEQsUzs7SUFlYUUsSTs7Ozs7Ozs7Ozs7Ozt3Q0FPQztBQUNsQixXQUFLQyxXQUFMLEdBQW1CLGtDQUFzQixJQUF0QixFQUE0QkMsZUFBNUIsQ0FBbkI7QUFDQSxXQUFLQyxlQUFMLEdBQXVCLGtDQUFzQixJQUF0QixFQUE0QkMsbUJBQTVCLENBQXZCO0FBQ0EsV0FBS0MsaUJBQUwsR0FB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QUVBLFNBQUsvQixpQkFBTCxDQUF1QmtDLGNBQXZCO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5pbXBvcnQgeyBDU1NMZXhlciwgQ1NTUGFyc2VyIH0gZnJvbSBcIndpdGgtc3R5bGVcIjtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5pbXBvcnQgSGVhZGluZyBmcm9tIFwiLi9oZWFkaW5nXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuaW1wb3J0IHsgcXVlcnlCeVJlYWN0Q29tcG9uZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIG1peGlucyA9IFtcbiAgICBpbml0aWFsaXNlLFxuICAgIGtleVVwSGFuZGxlcixcbiAgICBnZXRQYXJzZVRyZWVcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmJuZlRleHRhcmVhID0gcXVlcnlCeVJlYWN0Q29tcG9uZW50KHRoaXMsIEJORlRleHRhcmVhKTtcbiAgICB0aGlzLmNvbnRlbnRUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBDb250ZW50VGV4dGFyZWEpO1xuICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEgPSBxdWVyeUJ5UmVhY3RDb21wb25lbnQodGhpcywgUGFyc2VUcmVlVGV4dGFyZWEpO1xuICAgIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHF1ZXJ5QnlSZWFjdENvbXBvbmVudCh0aGlzLCBMZXhpY2FsRW50cmllc1RleHRhcmVhKTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZGVsZXRlIHRoaXMuYm5mVGV4dGFyZWE7XG4gICAgZGVsZXRlIHRoaXMuY29udGVudFRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLnBhcnNlVHJlZVRleHRhcmVhO1xuICAgIGRlbGV0ZSB0aGlzLmxleGljYWxFbnRyaWVzVGV4dGFyZWE7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICBSZWFjdGlvbiB3aXRoIFN0eWxlIGV4YW1wbGVcbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGlzZSgpIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBDU1NMZXhlcixcbiAgICAgICAgeyBibmYgfSA9IENTU1BhcnNlcixcbiAgICAgICAgY29udGVudCA9IFwiXCIsIC8vL1xuICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gIHRoaXMuYm5mVGV4dGFyZWEuc2V0Qk5GKGJuZik7XG4gIHRoaXMuY29udGVudFRleHRhcmVhLnNldENvbnRlbnQoY29udGVudCk7XG4gIHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYS5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2VUcmVlKCkge1xuICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICBjb25zdCBibmYgPSB0aGlzLmJuZlRleHRhcmVhLmdldEJORigpLFxuICAgICAgICBjb250ZW50ID0gdGhpcy5jb250ZW50VGV4dGFyZWEuZ2V0Q29udGVudCgpLFxuICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMubGV4aWNhbEVudHJpZXNUZXh0YXJlYS5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICBjc3NMZXhlciA9IENTU0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgbm9kZSA9IGNzc1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlVHJlZTtcbn1cblxuZnVuY3Rpb24ga2V5VXBIYW5kbGVyKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICB0aGlzLnBhcnNlVHJlZVRleHRhcmVhLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgIHRoaXMucGFyc2VUcmVlVGV4dGFyZWEuY2xlYXJQYXJzZVRyZWUoKTtcbiAgfVxufVxuIl19