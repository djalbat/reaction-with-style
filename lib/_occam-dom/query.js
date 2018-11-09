'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Spread = require('./spread');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth,
    fifth = arrayUtilities.fifth;

var Query = function () {
  function Query(infiniteDescent, ruleNames, subQuery, spread, maximumDepth) {
    _classCallCheck(this, Query);

    this.infiniteDescent = infiniteDescent;
    this.ruleNames = ruleNames;
    this.subQuery = subQuery;
    this.spread = spread;
    this.maximumDepth = maximumDepth;
  }

  _createClass(Query, [{
    key: 'execute',
    value: function execute(node) {
      var _this = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var nodes = [];

      if (depth > this.maximumDepth) {} else {
        depth++;

        var nodeTerminalNode = node.isTerminalNode(),
            firstRuleName = first(this.ruleNames),
            wildcard = firstRuleName === '*'; ///

        if (false) {
          ///
        } else if (nodeTerminalNode) {
          if (wildcard) {
            if (this.spread.isBetween()) {
              if (this.subQuery === null) {
                nodes = [node];
              }
            }

            this.spread.incrementIndex();
          }
        } else {
          var childNodes = node.getChildNodes(),
              ruleName = node.getRuleName(),
              found = this.ruleNames.includes(ruleName);

          if (wildcard || found) {
            if (this.spread.isBetween()) {
              if (this.subQuery === null) {
                nodes = [node];
              } else {
                nodes = childNodes.reduce(function (nodes, childNode) {
                  var childNodeNodes = _this.subQuery.execute(childNode, depth);

                  nodes = nodes.concat(childNodeNodes);

                  return nodes;
                }, nodes);
              }
            }

            this.spread.incrementIndex();
          }

          if (this.infiniteDescent) {
            nodes = childNodes.reduce(function (nodes, childNode) {
              var childNodeNodes = _this.execute(childNode, depth);

              nodes = nodes.concat(childNodeNodes);

              return nodes;
            }, nodes);
          }
        }
      }

      return nodes;
    }
  }], [{
    key: 'fromExpression',
    value: function fromExpression(expression) {
      var maximumDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

      if (expression === undefined) {
        ///
        return null;
      }

      var regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+])?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          infiniteDescent = secondMatch === '/',
          ///
      ruleNames = thirdMatch.split('|'),
          ///
      subExpression = fifthMatch,
          ///
      spreadExpression = fourthMatch,
          ///
      subQuery = Query.fromExpression(subExpression),
          spread = Spread.fromExpression(spreadExpression),
          query = new Query(infiniteDescent, ruleNames, subQuery, spread, maximumDepth);

      return query;
    }
  }]);

  return Query;
}();

module.exports = Query;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9fb2NjYW0tZG9tL3F1ZXJ5LmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJTcHJlYWQiLCJhcnJheVV0aWxpdGllcyIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsIlF1ZXJ5IiwiaW5maW5pdGVEZXNjZW50IiwicnVsZU5hbWVzIiwic3ViUXVlcnkiLCJzcHJlYWQiLCJtYXhpbXVtRGVwdGgiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsImZpcnN0UnVsZU5hbWUiLCJ3aWxkY2FyZCIsImlzQmV0d2VlbiIsImluY3JlbWVudEluZGV4IiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZm91bmQiLCJpbmNsdWRlcyIsInJlZHVjZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZU5vZGVzIiwiZXhlY3V0ZSIsImNvbmNhdCIsImV4cHJlc3Npb24iLCJJbmZpbml0eSIsInVuZGVmaW5lZCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwiZmlmdGhNYXRjaCIsInNwbGl0Iiwic3ViRXhwcmVzc2lvbiIsInNwcmVhZEV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbiIsInF1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFVBQVIsQ0FBZjs7QUFFTSxJQUFFRSxjQUFGLEdBQXFCSCxTQUFyQixDQUFFRyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUMwQ0QsY0FEMUMsQ0FDRUMsS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDMENGLGNBRDFDLENBQ1NFLE1BRFQ7QUFBQSxJQUNpQkMs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LFVBQU1DLFNBQVMsdUNBQWY7QUFBQSxVQUNNQyxVQUFVSixXQUFXSyxLQUFYLENBQWlCRixNQUFqQixDQURoQjtBQUFBLFVBRU1HLGNBQWNwQyxPQUFPa0MsT0FBUCxDQUZwQjtBQUFBLFVBR01HLGFBQWFwQyxNQUFNaUMsT0FBTixDQUhuQjtBQUFBLFVBSU1JLGNBQWNwQyxPQUFPZ0MsT0FBUCxDQUpwQjtBQUFBLFVBS01LLGFBQWFwQyxNQUFNK0IsT0FBTixDQUxuQjtBQUFBLFVBTU03QixrQkFBbUIrQixnQkFBZ0IsR0FOekM7QUFBQSxVQU1nRDtBQUMxQzlCLGtCQUFZK0IsV0FBV0csS0FBWCxDQUFpQixHQUFqQixDQVBsQjtBQUFBLFVBTzBDO0FBQ3BDQyxzQkFBZ0JGLFVBUnRCO0FBQUEsVUFRbUM7QUFDN0JHLHlCQUFtQkosV0FUekI7QUFBQSxVQVN1QztBQUNqQy9CLGlCQUFXSCxNQUFNdUMsY0FBTixDQUFxQkYsYUFBckIsQ0FWakI7QUFBQSxVQVdNakMsU0FBU1gsT0FBTzhDLGNBQVAsQ0FBc0JELGdCQUF0QixDQVhmO0FBQUEsVUFZTUUsUUFBUSxJQUFJeEMsS0FBSixDQUFVQyxlQUFWLEVBQTJCQyxTQUEzQixFQUFzQ0MsUUFBdEMsRUFBZ0RDLE1BQWhELEVBQXdEQyxZQUF4RCxDQVpkOztBQWNBLGFBQU9tQyxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCMUMsS0FBakIiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBTcHJlYWQgPSByZXF1aXJlKCcuL3NwcmVhZCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUXVlcnkge1xuICBjb25zdHJ1Y3RvcihpbmZpbml0ZURlc2NlbnQsIHJ1bGVOYW1lcywgc3ViUXVlcnksIHNwcmVhZCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICB9XG4gIFxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgaWYgKGRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpIHtcblxuICAgIH0gZWxzZSB7XG4gICAgICBkZXB0aCsrO1xuXG4gICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgICAgZmlyc3RSdWxlTmFtZSA9IGZpcnN0KHRoaXMucnVsZU5hbWVzKSxcbiAgICAgICAgICAgIHdpbGRjYXJkID0gKGZpcnN0UnVsZU5hbWUgPT09ICcqJyk7IC8vL1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblx0XHRcdFx0Ly8vXG4gICAgICB9IGVsc2UgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgaWYgKHdpbGRjYXJkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBmb3VuZCA9IHRoaXMucnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAod2lsZGNhcmQgfHwgZm91bmQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gW25vZGVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLnJlZHVjZSgobm9kZXMsIGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vZGVzID0gdGhpcy5zdWJRdWVyeS5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGVzO1xuICAgICAgICAgICAgICB9LCBub2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoKG5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vZGVzID0gdGhpcy5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICB9LCBub2Rlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7IC8vL1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXSk/KFxcLy4qKT8kLyxcbiAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gKHNlY29uZE1hdGNoID09PSAnLycpLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWVzID0gdGhpcmRNYXRjaC5zcGxpdCgnfCcpLCAgLy8vXG4gICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICBzdWJRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pLFxuICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShpbmZpbml0ZURlc2NlbnQsIHJ1bGVOYW1lcywgc3ViUXVlcnksIHNwcmVhZCwgbWF4aW11bURlcHRoKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcbiJdfQ==