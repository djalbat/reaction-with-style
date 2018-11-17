'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('../_occam-dom'),
    ///
necessary = require('necessary');

var RuleSet = require('./ruleSet');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    _unshift = arrayUtilities.unshift;


var ruleSetQuery = Query.fromExpression('/stylesheet/ruleSet');

var RuleSets = function () {
  function RuleSets(array) {
    _classCallCheck(this, RuleSets);

    this.array = array;
  }

  _createClass(RuleSets, [{
    key: 'getArray',
    value: function getArray() {
      return this.array;
    }
  }, {
    key: 'unshift',
    value: function unshift(ruleSets) {
      var array = ruleSets.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: 'asCSS',
    value: function asCSS(className, indent) {
      var css = this.array.reduce(function (css, ruleSet) {
        var ruleSetCSS = ruleSet.asCSS(className, indent);

        css += ruleSetCSS;

        return css;
      }, '');

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var ruleSetNodes = ruleSetQuery.execute(node),
          array = ruleSetNodes.map(function (ruleSetNode) {
        var node = ruleSetNode,
            ///
        ruleSet = RuleSet.fromNodeAndTokens(node, tokens);

        return ruleSet;
      }),
          ruleSets = new RuleSets(array);

      return ruleSets;
    }
  }]);

  return RuleSets;
}();

module.exports = RuleSets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9ydWxlU2V0cy5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiUnVsZVNldCIsImFycmF5VXRpbGl0aWVzIiwiUXVlcnkiLCJ1bnNoaWZ0IiwicnVsZVNldFF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwicnVsZVNldHMiLCJnZXRBcnJheSIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsInJ1bGVTZXQiLCJydWxlU2V0Q1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsInJ1bGVTZXROb2RlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxlQUFSLENBQVo7QUFBQSxJQUF1QztBQUNqQ0MsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjs7QUFFTSxJQUFFRyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZTCxHQURaLENBQ0VLLEtBREY7QUFBQSxJQUVFQyxRQUZGLEdBRWNGLGNBRmQsQ0FFRUUsT0FGRjs7O0FBSU4sSUFBTUMsZUFBZUYsTUFBTUcsY0FBTixDQUFxQixxQkFBckIsQ0FBckI7O0lBRU1DLFE7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NEJBRU9DLFEsRUFBVTtBQUNoQixVQUFNRCxRQUFRQyxTQUFTQyxRQUFULEVBQWQ7O0FBRUFOLGVBQVEsS0FBS0ksS0FBYixFQUFvQkEsS0FBcEI7QUFDRDs7OzBCQUVLRyxTLEVBQVdDLE0sRUFBUTtBQUN2QixVQUFNQyxNQUFNLEtBQUtMLEtBQUwsQ0FBV00sTUFBWCxDQUFrQixVQUFTRCxHQUFULEVBQWNFLE9BQWQsRUFBdUI7QUFDbkQsWUFBTUMsYUFBYUQsUUFBUUUsS0FBUixDQUFjTixTQUFkLEVBQXlCQyxNQUF6QixDQUFuQjs7QUFFQUMsZUFBT0csVUFBUDs7QUFFQSxlQUFPSCxHQUFQO0FBQ0QsT0FOVyxFQU1ULEVBTlMsQ0FBWjs7QUFRQSxhQUFPQSxHQUFQO0FBQ0Q7OztzQ0FFd0JLLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1DLGVBQWVmLGFBQWFnQixPQUFiLENBQXFCSCxJQUFyQixDQUFyQjtBQUFBLFVBQ01WLFFBQVFZLGFBQWFFLEdBQWIsQ0FBaUIsVUFBU0MsV0FBVCxFQUFzQjtBQUM3QyxZQUFNTCxPQUFPSyxXQUFiO0FBQUEsWUFBMEI7QUFDcEJSLGtCQUFVZCxRQUFRdUIsaUJBQVIsQ0FBMEJOLElBQTFCLEVBQWdDQyxNQUFoQyxDQURoQjs7QUFHQSxlQUFPSixPQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTU4sV0FBVyxJQUFJRixRQUFKLENBQWFDLEtBQWIsQ0FQakI7O0FBU0EsYUFBT0MsUUFBUDtBQUNEOzs7Ozs7QUFHSGdCLE9BQU9DLE9BQVAsR0FBaUJuQixRQUFqQiIsImZpbGUiOiJydWxlU2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tID0gcmVxdWlyZSgnLi4vX29jY2FtLWRvbScpLCAgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUnVsZVNldCA9IHJlcXVpcmUoJy4vcnVsZVNldCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IFF1ZXJ5IH0gPSBkb20sXG4gICAgICB7IHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBydWxlU2V0UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignL3N0eWxlc2hlZXQvcnVsZVNldCcpO1xuXG5jbGFzcyBSdWxlU2V0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXRzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBydWxlU2V0cy5nZXRBcnJheSgpO1xuXG4gICAgdW5zaGlmdCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKGZ1bmN0aW9uKGNzcywgcnVsZVNldCkge1xuICAgICAgY29uc3QgcnVsZVNldENTUyA9IHJ1bGVTZXQuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpO1xuXG4gICAgICBjc3MgKz0gcnVsZVNldENTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVTZXROb2RlcyA9IHJ1bGVTZXRRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcnVsZVNldE5vZGVzLm1hcChmdW5jdGlvbihydWxlU2V0Tm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJ1bGVTZXROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXQgPSBSdWxlU2V0LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlU2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVTZXRzID0gbmV3IFJ1bGVTZXRzKGFycmF5KTtcblxuICAgIHJldHVybiBydWxlU2V0cztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bGVTZXRzO1xuIl19