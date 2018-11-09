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
    value: function asCSS(className) {
      var css = this.array.reduce(function (css, ruleSet) {
        var ruleSetCSS = ruleSet.asCSS(className);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9ydWxlU2V0cy5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiUnVsZVNldCIsImFycmF5VXRpbGl0aWVzIiwiUXVlcnkiLCJ1bnNoaWZ0IiwicnVsZVNldFF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwicnVsZVNldHMiLCJnZXRBcnJheSIsImNsYXNzTmFtZSIsImNzcyIsInJlZHVjZSIsInJ1bGVTZXQiLCJydWxlU2V0Q1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsInJ1bGVTZXROb2RlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxlQUFSLENBQVo7QUFBQSxJQUF1QztBQUNqQ0MsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjs7QUFFTSxJQUFFRyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZTCxHQURaLENBQ0VLLEtBREY7QUFBQSxJQUVFQyxRQUZGLEdBRWNGLGNBRmQsQ0FFRUUsT0FGRjs7O0FBSU4sSUFBTUMsZUFBZUYsTUFBTUcsY0FBTixDQUFxQixxQkFBckIsQ0FBckI7O0lBRU1DLFE7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NEJBRU9DLFEsRUFBVTtBQUNoQixVQUFNRCxRQUFRQyxTQUFTQyxRQUFULEVBQWQ7O0FBRUFOLGVBQVEsS0FBS0ksS0FBYixFQUFvQkEsS0FBcEI7QUFDRDs7OzBCQUVLRyxTLEVBQVc7QUFDZixVQUFNQyxNQUFNLEtBQUtKLEtBQUwsQ0FBV0ssTUFBWCxDQUFrQixVQUFTRCxHQUFULEVBQWNFLE9BQWQsRUFBdUI7QUFDbkQsWUFBTUMsYUFBYUQsUUFBUUUsS0FBUixDQUFjTCxTQUFkLENBQW5COztBQUVBQyxlQUFPRyxVQUFQOztBQUVBLGVBQU9ILEdBQVA7QUFDRCxPQU5XLEVBTVQsRUFOUyxDQUFaOztBQVFBLGFBQU9BLEdBQVA7QUFDRDs7O3NDQUV3QkssSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsZUFBZWQsYUFBYWUsT0FBYixDQUFxQkgsSUFBckIsQ0FBckI7QUFBQSxVQUNNVCxRQUFRVyxhQUFhRSxHQUFiLENBQWlCLFVBQVNDLFdBQVQsRUFBc0I7QUFDN0MsWUFBTUwsT0FBT0ssV0FBYjtBQUFBLFlBQTBCO0FBQ3BCUixrQkFBVWIsUUFBUXNCLGlCQUFSLENBQTBCTixJQUExQixFQUFnQ0MsTUFBaEMsQ0FEaEI7O0FBR0EsZUFBT0osT0FBUDtBQUNELE9BTE8sQ0FEZDtBQUFBLFVBT01MLFdBQVcsSUFBSUYsUUFBSixDQUFhQyxLQUFiLENBUGpCOztBQVNBLGFBQU9DLFFBQVA7QUFDRDs7Ozs7O0FBR0hlLE9BQU9DLE9BQVAsR0FBaUJsQixRQUFqQiIsImZpbGUiOiJydWxlU2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tID0gcmVxdWlyZSgnLi4vX29jY2FtLWRvbScpLCAgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgUnVsZVNldCA9IHJlcXVpcmUoJy4vcnVsZVNldCcpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IFF1ZXJ5IH0gPSBkb20sXG4gICAgICB7IHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBydWxlU2V0UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignL3N0eWxlc2hlZXQvcnVsZVNldCcpO1xuXG5jbGFzcyBSdWxlU2V0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXRzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBydWxlU2V0cy5nZXRBcnJheSgpO1xuXG4gICAgdW5zaGlmdCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZShmdW5jdGlvbihjc3MsIHJ1bGVTZXQpIHtcbiAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKGNsYXNzTmFtZSk7XG5cbiAgICAgIGNzcyArPSBydWxlU2V0Q1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vZGVzID0gcnVsZVNldFF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBydWxlU2V0Tm9kZXMubWFwKGZ1bmN0aW9uKHJ1bGVTZXROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZVNldCA9IFJ1bGVTZXQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVTZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZVNldHMgPSBuZXcgUnVsZVNldHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVNldHM7XG4iXX0=