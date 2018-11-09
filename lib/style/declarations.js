'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('../../_occam-dom'),
    ///
necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    asContent = dom.asContent,
    _unshift = arrayUtilities.unshift;


var declarationQuery = Query.fromExpression('/*/declaration');

var Declarations = function () {
  function Declarations(array) {
    _classCallCheck(this, Declarations);

    this.array = array;
  }

  _createClass(Declarations, [{
    key: 'getArray',
    value: function getArray() {
      return this.array;
    }
  }, {
    key: 'unshift',
    value: function unshift(declarations) {
      var array = declarations.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: 'asCSS',
    value: function asCSS(indent) {
      var css = '';

      var length = this.array.length,
          lastIndex = length - 1;

      this.array.forEach(function (declaration, index) {
        var declarationCSS = index === lastIndex ? '' + indent + declaration : '' + indent + declaration + '\n';

        css += declarationCSS;
      });

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var declarationNodes = declarationQuery.execute(node),
          array = declarationNodes.map(function (declarationNode) {
        var declarationNodeContent = asContent(declarationNode, tokens),
            declaration = declarationNodeContent; ///

        return declaration;
      }),
          declarations = new Declarations(array);

      return declarations;
    }
  }]);

  return Declarations;
}();

module.exports = Declarations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwibmFtZXMiOlsiZG9tIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImFycmF5VXRpbGl0aWVzIiwiUXVlcnkiLCJhc0NvbnRlbnQiLCJ1bnNoaWZ0IiwiZGVjbGFyYXRpb25RdWVyeSIsImZyb21FeHByZXNzaW9uIiwiRGVjbGFyYXRpb25zIiwiYXJyYXkiLCJkZWNsYXJhdGlvbnMiLCJnZXRBcnJheSIsImluZGVudCIsImNzcyIsImxlbmd0aCIsImxhc3RJbmRleCIsImZvckVhY2giLCJkZWNsYXJhdGlvbiIsImluZGV4IiwiZGVjbGFyYXRpb25DU1MiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGVDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsa0JBQVIsQ0FBWjtBQUFBLElBQTBDO0FBQ3BDQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR00sSUFBRUUsY0FBRixHQUFxQkQsU0FBckIsQ0FBRUMsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDdUJKLEdBRHZCLENBQ0VJLEtBREY7QUFBQSxJQUNTQyxTQURULEdBQ3VCTCxHQUR2QixDQUNTSyxTQURUO0FBQUEsSUFFRUMsUUFGRixHQUVjSCxjQUZkLENBRUVHLE9BRkY7OztBQUlOLElBQU1DLG1CQUFtQkgsTUFBTUksY0FBTixDQUFxQixnQkFBckIsQ0FBekI7O0lBRU1DLFk7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NEJBRU9DLFksRUFBYztBQUNwQixVQUFNRCxRQUFRQyxhQUFhQyxRQUFiLEVBQWQ7O0FBRUFOLGVBQVEsS0FBS0ksS0FBYixFQUFvQkEsS0FBcEI7QUFDRDs7OzBCQUVLRyxNLEVBQVE7QUFDWixVQUFJQyxNQUFNLEVBQVY7O0FBRUEsVUFBTUMsU0FBUyxLQUFLTCxLQUFMLENBQVdLLE1BQTFCO0FBQUEsVUFDTUMsWUFBWUQsU0FBUyxDQUQzQjs7QUFHQSxXQUFLTCxLQUFMLENBQVdPLE9BQVgsQ0FBbUIsVUFBU0MsV0FBVCxFQUFzQkMsS0FBdEIsRUFBNkI7QUFDOUMsWUFBTUMsaUJBQWtCRCxVQUFVSCxTQUFYLFFBQ0lILE1BREosR0FDYUssV0FEYixRQUVNTCxNQUZOLEdBRWVLLFdBRmYsT0FBdkI7O0FBSUFKLGVBQU9NLGNBQVA7QUFDRCxPQU5EOztBQVFBLGFBQU9OLEdBQVA7QUFDRDs7O3NDQUV3Qk8sSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsbUJBQW1CaEIsaUJBQWlCaUIsT0FBakIsQ0FBeUJILElBQXpCLENBQXpCO0FBQUEsVUFDTVgsUUFBUWEsaUJBQWlCRSxHQUFqQixDQUFxQixVQUFTQyxlQUFULEVBQTBCO0FBQ3JELFlBQU1DLHlCQUF5QnRCLFVBQVVxQixlQUFWLEVBQTJCSixNQUEzQixDQUEvQjtBQUFBLFlBQ01KLGNBQWNTLHNCQURwQixDQURxRCxDQUVUOztBQUU1QyxlQUFPVCxXQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTVAsZUFBZSxJQUFJRixZQUFKLENBQWlCQyxLQUFqQixDQVByQjs7QUFTQSxhQUFPQyxZQUFQO0FBQ0Q7Ozs7OztBQUdIaUIsT0FBT0MsT0FBUCxHQUFpQnBCLFlBQWpCIiwiZmlsZSI6ImRlY2xhcmF0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tID0gcmVxdWlyZSgnLi4vLi4vX29jY2FtLWRvbScpLCAgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBRdWVyeSwgYXNDb250ZW50IH0gPSBkb20sXG4gICAgICB7IHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy8qL2RlY2xhcmF0aW9uJyk7XG5cbmNsYXNzIERlY2xhcmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IGFycmF5ID0gZGVjbGFyYXRpb25zLmdldEFycmF5KCk7XG5cbiAgICB1bnNoaWZ0KHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIGFzQ1NTKGluZGVudCkge1xuICAgIGxldCBjc3MgPSAnJztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgICB0aGlzLmFycmF5LmZvckVhY2goZnVuY3Rpb24oZGVjbGFyYXRpb24sIGluZGV4KSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbkNTUyA9IChpbmRleCA9PT0gbGFzdEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtkZWNsYXJhdGlvbn1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7ZGVjbGFyYXRpb259XFxuYDtcblxuICAgICAgY3NzICs9IGRlY2xhcmF0aW9uQ1NTO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25RdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoZnVuY3Rpb24oZGVjbGFyYXRpb25Ob2RlKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVDb250ZW50ID0gYXNDb250ZW50KGRlY2xhcmF0aW9uTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25Ob2RlQ29udGVudDsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBuZXcgRGVjbGFyYXRpb25zKGFycmF5KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZWNsYXJhdGlvbnM7XG4iXX0=