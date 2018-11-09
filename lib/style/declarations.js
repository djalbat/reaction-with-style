'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('../_occam-dom'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwibmFtZXMiOlsiZG9tIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImFycmF5VXRpbGl0aWVzIiwiUXVlcnkiLCJhc0NvbnRlbnQiLCJ1bnNoaWZ0IiwiZGVjbGFyYXRpb25RdWVyeSIsImZyb21FeHByZXNzaW9uIiwiRGVjbGFyYXRpb25zIiwiYXJyYXkiLCJkZWNsYXJhdGlvbnMiLCJnZXRBcnJheSIsImluZGVudCIsImNzcyIsImxlbmd0aCIsImxhc3RJbmRleCIsImZvckVhY2giLCJkZWNsYXJhdGlvbiIsImluZGV4IiwiZGVjbGFyYXRpb25DU1MiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGVDb250ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsZUFBUixDQUFaO0FBQUEsSUFBdUM7QUFDakNDLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHTSxJQUFFRSxjQUFGLEdBQXFCRCxTQUFyQixDQUFFQyxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUN1QkosR0FEdkIsQ0FDRUksS0FERjtBQUFBLElBQ1NDLFNBRFQsR0FDdUJMLEdBRHZCLENBQ1NLLFNBRFQ7QUFBQSxJQUVFQyxRQUZGLEdBRWNILGNBRmQsQ0FFRUcsT0FGRjs7O0FBSU4sSUFBTUMsbUJBQW1CSCxNQUFNSSxjQUFOLENBQXFCLGdCQUFyQixDQUF6Qjs7SUFFTUMsWTtBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs0QkFFT0MsWSxFQUFjO0FBQ3BCLFVBQU1ELFFBQVFDLGFBQWFDLFFBQWIsRUFBZDs7QUFFQU4sZUFBUSxLQUFLSSxLQUFiLEVBQW9CQSxLQUFwQjtBQUNEOzs7MEJBRUtHLE0sRUFBUTtBQUNaLFVBQUlDLE1BQU0sRUFBVjs7QUFFQSxVQUFNQyxTQUFTLEtBQUtMLEtBQUwsQ0FBV0ssTUFBMUI7QUFBQSxVQUNNQyxZQUFZRCxTQUFTLENBRDNCOztBQUdBLFdBQUtMLEtBQUwsQ0FBV08sT0FBWCxDQUFtQixVQUFTQyxXQUFULEVBQXNCQyxLQUF0QixFQUE2QjtBQUM5QyxZQUFNQyxpQkFBa0JELFVBQVVILFNBQVgsUUFDSUgsTUFESixHQUNhSyxXQURiLFFBRU1MLE1BRk4sR0FFZUssV0FGZixPQUF2Qjs7QUFJQUosZUFBT00sY0FBUDtBQUNELE9BTkQ7O0FBUUEsYUFBT04sR0FBUDtBQUNEOzs7c0NBRXdCTyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxtQkFBbUJoQixpQkFBaUJpQixPQUFqQixDQUF5QkgsSUFBekIsQ0FBekI7QUFBQSxVQUNNWCxRQUFRYSxpQkFBaUJFLEdBQWpCLENBQXFCLFVBQVNDLGVBQVQsRUFBMEI7QUFDckQsWUFBTUMseUJBQXlCdEIsVUFBVXFCLGVBQVYsRUFBMkJKLE1BQTNCLENBQS9CO0FBQUEsWUFDTUosY0FBY1Msc0JBRHBCLENBRHFELENBRVQ7O0FBRTVDLGVBQU9ULFdBQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NUCxlQUFlLElBQUlGLFlBQUosQ0FBaUJDLEtBQWpCLENBUHJCOztBQVNBLGFBQU9DLFlBQVA7QUFDRDs7Ozs7O0FBR0hpQixPQUFPQyxPQUFQLEdBQWlCcEIsWUFBakIiLCJmaWxlIjoiZGVjbGFyYXRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCcuLi9fb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IFF1ZXJ5LCBhc0NvbnRlbnQgfSA9IGRvbSxcbiAgICAgIHsgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGRlY2xhcmF0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignLyovZGVjbGFyYXRpb24nKTtcblxuY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQoZGVjbGFyYXRpb25zKSB7XG4gICAgY29uc3QgYXJyYXkgPSBkZWNsYXJhdGlvbnMuZ2V0QXJyYXkoKTtcblxuICAgIHVuc2hpZnQodGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgbGV0IGNzcyA9ICcnO1xuXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGgsXG4gICAgICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChmdW5jdGlvbihkZWNsYXJhdGlvbiwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uQ1NTID0gKGluZGV4ID09PSBsYXN0SW5kZXgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke2RlY2xhcmF0aW9ufWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHtkZWNsYXJhdGlvbn1cXG5gO1xuXG4gICAgICBjc3MgKz0gZGVjbGFyYXRpb25DU1M7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcChmdW5jdGlvbihkZWNsYXJhdGlvbk5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQoZGVjbGFyYXRpb25Ob2RlLCB0b2tlbnMpLFxuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBkZWNsYXJhdGlvbk5vZGVDb250ZW50OyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlY2xhcmF0aW9ucztcbiJdfQ==