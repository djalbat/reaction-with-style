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


var ruleSetQuery = Query.fromExpression('/*/ruleSet');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9ydWxlU2V0cy5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiUnVsZVNldCIsImFycmF5VXRpbGl0aWVzIiwiUXVlcnkiLCJ1bnNoaWZ0IiwicnVsZVNldFF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwicnVsZVNldHMiLCJnZXRBcnJheSIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsInJ1bGVTZXQiLCJydWxlU2V0Q1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsInJ1bGVTZXROb2RlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxlQUFSLENBQVo7QUFBQSxJQUF1QztBQUNqQ0MsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjs7QUFFTSxJQUFFRyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZTCxHQURaLENBQ0VLLEtBREY7QUFBQSxJQUVFQyxRQUZGLEdBRWNGLGNBRmQsQ0FFRUUsT0FGRjs7O0FBSU4sSUFBTUMsZUFBZUYsTUFBTUcsY0FBTixDQUFxQixZQUFyQixDQUFyQjs7SUFFTUMsUTtBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs0QkFFT0MsUSxFQUFVO0FBQ2hCLFVBQU1ELFFBQVFDLFNBQVNDLFFBQVQsRUFBZDs7QUFFQU4sZUFBUSxLQUFLSSxLQUFiLEVBQW9CQSxLQUFwQjtBQUNEOzs7MEJBRUtHLFMsRUFBV0MsTSxFQUFRO0FBQ3ZCLFVBQU1DLE1BQU0sS0FBS0wsS0FBTCxDQUFXTSxNQUFYLENBQWtCLFVBQVNELEdBQVQsRUFBY0UsT0FBZCxFQUF1QjtBQUNuRCxZQUFNQyxhQUFhRCxRQUFRRSxLQUFSLENBQWNOLFNBQWQsRUFBeUJDLE1BQXpCLENBQW5COztBQUVBQyxlQUFPRyxVQUFQOztBQUVBLGVBQU9ILEdBQVA7QUFDRCxPQU5XLEVBTVQsRUFOUyxDQUFaOztBQVFBLGFBQU9BLEdBQVA7QUFDRDs7O3NDQUV3QkssSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsZUFBZWYsYUFBYWdCLE9BQWIsQ0FBcUJILElBQXJCLENBQXJCO0FBQUEsVUFDTVYsUUFBUVksYUFBYUUsR0FBYixDQUFpQixVQUFTQyxXQUFULEVBQXNCO0FBQzdDLFlBQU1MLE9BQU9LLFdBQWI7QUFBQSxZQUEwQjtBQUNwQlIsa0JBQVVkLFFBQVF1QixpQkFBUixDQUEwQk4sSUFBMUIsRUFBZ0NDLE1BQWhDLENBRGhCOztBQUdBLGVBQU9KLE9BQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NTixXQUFXLElBQUlGLFFBQUosQ0FBYUMsS0FBYixDQVBqQjs7QUFTQSxhQUFPQyxRQUFQO0FBQ0Q7Ozs7OztBQUdIZ0IsT0FBT0MsT0FBUCxHQUFpQm5CLFFBQWpCIiwiZmlsZSI6InJ1bGVTZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCcuLi9fb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBSdWxlU2V0ID0gcmVxdWlyZSgnLi9ydWxlU2V0Jyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgUXVlcnkgfSA9IGRvbSxcbiAgICAgIHsgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHJ1bGVTZXRRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvKi9ydWxlU2V0Jyk7XG5cbmNsYXNzIFJ1bGVTZXRzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQocnVsZVNldHMpIHtcbiAgICBjb25zdCBhcnJheSA9IHJ1bGVTZXRzLmdldEFycmF5KCk7XG5cbiAgICB1bnNoaWZ0KHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoZnVuY3Rpb24oY3NzLCBydWxlU2V0KSB7XG4gICAgICBjb25zdCBydWxlU2V0Q1NTID0gcnVsZVNldC5hc0NTUyhjbGFzc05hbWUsIGluZGVudCk7XG5cbiAgICAgIGNzcyArPSBydWxlU2V0Q1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vZGVzID0gcnVsZVNldFF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBydWxlU2V0Tm9kZXMubWFwKGZ1bmN0aW9uKHJ1bGVTZXROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZVNldCA9IFJ1bGVTZXQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVTZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZVNldHMgPSBuZXcgUnVsZVNldHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVNldHM7XG4iXX0=