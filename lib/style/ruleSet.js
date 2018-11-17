'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('../_occam-dom'),
    ///
necessary = require('necessary');

var Declarations = require('./declarations');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    asContent = dom.asContent,
    first = arrayUtilities.first;


var selectorsQuery = Query.fromExpression('//selectors');

var RuleSet = function () {
  function RuleSet(selectors, declarations) {
    _classCallCheck(this, RuleSet);

    this.selectors = selectors;
    this.declarations = declarations;
  }

  _createClass(RuleSet, [{
    key: 'asCSS',
    value: function asCSS(className, indent) {
      var declarationsCSS = this.declarations.asCSS('  ' + indent),
          css = indent + '.' + className + this.selectors + ' {\n' + declarationsCSS + '\n' + indent + '}\n\n';

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var selectors = selectorsFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          media = new RuleSet(selectors, declarations);

      return media;
    }
  }]);

  return RuleSet;
}();

module.exports = RuleSet;

function selectorsFromNodeAndTokens(node, tokens) {
  var selectorsNodes = selectorsQuery.execute(node),
      firstSelectorsNode = first(selectorsNodes),
      selectorsNode = firstSelectorsNode,
      ///
  selectorsNodeContent = asContent(selectorsNode, tokens),
      selectors = '' + selectorsNodeContent;

  return selectors;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9ydWxlU2V0LmpzIl0sIm5hbWVzIjpbImRvbSIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJEZWNsYXJhdGlvbnMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5IiwiYXNDb250ZW50IiwiZmlyc3QiLCJzZWxlY3RvcnNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldCIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsImNsYXNzTmFtZSIsImluZGVudCIsImRlY2xhcmF0aW9uc0NTUyIsImFzQ1NTIiwiY3NzIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtZWRpYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvcnNOb2RlcyIsImV4ZWN1dGUiLCJmaXJzdFNlbGVjdG9yc05vZGUiLCJzZWxlY3RvcnNOb2RlIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLGVBQVIsQ0FBWjtBQUFBLElBQXVDO0FBQ2pDQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsZUFBZUYsUUFBUSxnQkFBUixDQUFyQjs7QUFFTSxJQUFFRyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUN1QkwsR0FEdkIsQ0FDRUssS0FERjtBQUFBLElBQ1NDLFNBRFQsR0FDdUJOLEdBRHZCLENBQ1NNLFNBRFQ7QUFBQSxJQUVFQyxLQUZGLEdBRVlILGNBRlosQ0FFRUcsS0FGRjs7O0FBSU4sSUFBTUMsaUJBQWlCSCxNQUFNSSxjQUFOLENBQXFCLGFBQXJCLENBQXZCOztJQUVNQyxPO0FBQ0osbUJBQVlDLFNBQVosRUFBdUJDLFlBQXZCLEVBQXFDO0FBQUE7O0FBQ25DLFNBQUtELFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsUyxFQUFXQyxNLEVBQVE7QUFDdkIsVUFBTUMsa0JBQWtCLEtBQUtILFlBQUwsQ0FBa0JJLEtBQWxCLFFBQTZCRixNQUE3QixDQUF4QjtBQUFBLFVBQ01HLE1BQVNILE1BQVQsU0FBbUJELFNBQW5CLEdBQStCLEtBQUtGLFNBQXBDLFlBQ1JJLGVBRFEsVUFFUkQsTUFGUSxVQUROOztBQU9BLGFBQU9HLEdBQVA7QUFDRDs7O3NDQUV3QkMsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTVIsWUFBWVMsMkJBQTJCRixJQUEzQixFQUFpQ0MsTUFBakMsQ0FBbEI7QUFBQSxVQUNNUCxlQUFlVCxhQUFha0IsaUJBQWIsQ0FBK0JILElBQS9CLEVBQXFDQyxNQUFyQyxDQURyQjtBQUFBLFVBRU1HLFFBQVEsSUFBSVosT0FBSixDQUFZQyxTQUFaLEVBQXVCQyxZQUF2QixDQUZkOztBQUlBLGFBQU9VLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJkLE9BQWpCOztBQUVBLFNBQVNVLDBCQUFULENBQW9DRixJQUFwQyxFQUEwQ0MsTUFBMUMsRUFBa0Q7QUFDaEQsTUFBTU0saUJBQWlCakIsZUFBZWtCLE9BQWYsQ0FBdUJSLElBQXZCLENBQXZCO0FBQUEsTUFDTVMscUJBQXFCcEIsTUFBTWtCLGNBQU4sQ0FEM0I7QUFBQSxNQUVNRyxnQkFBZ0JELGtCQUZ0QjtBQUFBLE1BRTBDO0FBQ3BDRSx5QkFBdUJ2QixVQUFVc0IsYUFBVixFQUF5QlQsTUFBekIsQ0FIN0I7QUFBQSxNQUlNUixpQkFBZWtCLG9CQUpyQjs7QUFNQSxTQUFPbEIsU0FBUDtBQUNEIiwiZmlsZSI6InJ1bGVTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbSA9IHJlcXVpcmUoJy4uL19vY2NhbS1kb20nKSwgIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IERlY2xhcmF0aW9ucyA9IHJlcXVpcmUoJy4vZGVjbGFyYXRpb25zJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgUXVlcnksIGFzQ29udGVudCB9ID0gZG9tLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHNlbGVjdG9yc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy8vc2VsZWN0b3JzJyk7XG5cbmNsYXNzIFJ1bGVTZXQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhgICAke2luZGVudH1gKSxcbiAgICAgICAgICBjc3MgPSBgJHtpbmRlbnR9LiR7Y2xhc3NOYW1lfSR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtpbmRlbnR9fVxuXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVNldDtcblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vZGVzID0gc2VsZWN0b3JzUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgZmlyc3RTZWxlY3RvcnNOb2RlID0gZmlyc3Qoc2VsZWN0b3JzTm9kZXMpLFxuICAgICAgICBzZWxlY3RvcnNOb2RlID0gZmlyc3RTZWxlY3RvcnNOb2RlLCAvLy9cbiAgICAgICAgc2VsZWN0b3JzTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQoc2VsZWN0b3JzTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc2VsZWN0b3JzID0gYCR7c2VsZWN0b3JzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gc2VsZWN0b3JzO1xufVxuIl19