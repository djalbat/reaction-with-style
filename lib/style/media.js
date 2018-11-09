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


var mediaQueriesQuery = Query.fromExpression('/media/mediaQueries');

var Media = function () {
  function Media(mediaQueries, declarations) {
    _classCallCheck(this, Media);

    this.mediaQueries = mediaQueries;
    this.declarations = declarations;
  }

  _createClass(Media, [{
    key: 'asCSS',
    value: function asCSS(className) {
      var indent = '    ',
          declarationsCSS = this.declarations.asCSS(indent),
          css = '@media ' + this.mediaQueries + ' {\n  .' + className + ' {\n' + declarationsCSS + '\n  }\n}\n\n';

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          media = new Media(mediaQueries, declarations);

      return media;
    }
  }]);

  return Media;
}();

module.exports = Media;

function mediaQueriesFromNodeAndTokens(node, tokens) {
  var mediaQueriesNodes = mediaQueriesQuery.execute(node),
      firstSelectorsNode = first(mediaQueriesNodes),
      mediaQueriesNode = firstSelectorsNode,
      ///
  mediaQueriesNodeContent = asContent(mediaQueriesNode, tokens),
      mediaQueries = '' + mediaQueriesNodeContent;

  return mediaQueries;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9tZWRpYS5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiRGVjbGFyYXRpb25zIiwiYXJyYXlVdGlsaXRpZXMiLCJRdWVyeSIsImFzQ29udGVudCIsImZpcnN0IiwibWVkaWFRdWVyaWVzUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhIiwibWVkaWFRdWVyaWVzIiwiZGVjbGFyYXRpb25zIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiZGVjbGFyYXRpb25zQ1NTIiwiYXNDU1MiLCJjc3MiLCJub2RlIiwidG9rZW5zIiwibWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lZGlhUXVlcmllc05vZGVzIiwiZXhlY3V0ZSIsImZpcnN0U2VsZWN0b3JzTm9kZSIsIm1lZGlhUXVlcmllc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsZUFBUixDQUFaO0FBQUEsSUFBdUM7QUFDakNDLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxlQUFlRixRQUFRLGdCQUFSLENBQXJCOztBQUVNLElBQUVHLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ3VCTCxHQUR2QixDQUNFSyxLQURGO0FBQUEsSUFDU0MsU0FEVCxHQUN1Qk4sR0FEdkIsQ0FDU00sU0FEVDtBQUFBLElBRUVDLEtBRkYsR0FFWUgsY0FGWixDQUVFRyxLQUZGOzs7QUFJTixJQUFNQyxvQkFBb0JILE1BQU1JLGNBQU4sQ0FBcUIscUJBQXJCLENBQTFCOztJQUVNQyxLO0FBQ0osaUJBQVlDLFlBQVosRUFBMEJDLFlBQTFCLEVBQXdDO0FBQUE7O0FBQ3RDLFNBQUtELFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDRDs7OzswQkFFS0MsUyxFQUFXO0FBQ2YsVUFBTUMsU0FBUyxNQUFmO0FBQUEsVUFDTUMsa0JBQWtCLEtBQUtILFlBQUwsQ0FBa0JJLEtBQWxCLENBQXdCRixNQUF4QixDQUR4QjtBQUFBLFVBRU1HLGtCQUFnQixLQUFLTixZQUFyQixlQUNMRSxTQURLLFlBRVJFLGVBRlEsaUJBRk47O0FBVUEsYUFBT0UsR0FBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNUixlQUFlUyw4QkFBOEJGLElBQTlCLEVBQW9DQyxNQUFwQyxDQUFyQjtBQUFBLFVBQ01QLGVBQWVULGFBQWFrQixpQkFBYixDQUErQkgsSUFBL0IsRUFBcUNDLE1BQXJDLENBRHJCO0FBQUEsVUFFTUcsUUFBUSxJQUFJWixLQUFKLENBQVVDLFlBQVYsRUFBd0JDLFlBQXhCLENBRmQ7O0FBSUEsYUFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmQsS0FBakI7O0FBRUEsU0FBU1UsNkJBQVQsQ0FBdUNGLElBQXZDLEVBQTZDQyxNQUE3QyxFQUFxRDtBQUNuRCxNQUFNTSxvQkFBb0JqQixrQkFBa0JrQixPQUFsQixDQUEwQlIsSUFBMUIsQ0FBMUI7QUFBQSxNQUNNUyxxQkFBcUJwQixNQUFNa0IsaUJBQU4sQ0FEM0I7QUFBQSxNQUVNRyxtQkFBbUJELGtCQUZ6QjtBQUFBLE1BRTZDO0FBQ3ZDRSw0QkFBMEJ2QixVQUFVc0IsZ0JBQVYsRUFBNEJULE1BQTVCLENBSGhDO0FBQUEsTUFJTVIsb0JBQWtCa0IsdUJBSnhCOztBQU1BLFNBQU9sQixZQUFQO0FBQ0QiLCJmaWxlIjoibWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbSA9IHJlcXVpcmUoJy4uL19vY2NhbS1kb20nKSwgIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IERlY2xhcmF0aW9ucyA9IHJlcXVpcmUoJy4vZGVjbGFyYXRpb25zJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgUXVlcnksIGFzQ29udGVudCB9ID0gZG9tLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IG1lZGlhUXVlcmllc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy9tZWRpYS9tZWRpYVF1ZXJpZXMnKTtcblxuY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3RvcihtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMubWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgaW5kZW50ID0gJyAgICAnLFxuICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGluZGVudCksXG4gICAgICAgICAgY3NzID0gYEBtZWRpYSAke3RoaXMubWVkaWFRdWVyaWVzfSB7XG4gIC4ke2NsYXNzTmFtZX0ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4gIH1cbn1cblxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBNZWRpYShtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYTtcblxuZnVuY3Rpb24gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG1lZGlhUXVlcmllc05vZGVzID0gbWVkaWFRdWVyaWVzUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgZmlyc3RTZWxlY3RvcnNOb2RlID0gZmlyc3QobWVkaWFRdWVyaWVzTm9kZXMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXNOb2RlID0gZmlyc3RTZWxlY3RvcnNOb2RlLCAvLy9cbiAgICAgICAgbWVkaWFRdWVyaWVzTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQobWVkaWFRdWVyaWVzTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgbWVkaWFRdWVyaWVzID0gYCR7bWVkaWFRdWVyaWVzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gbWVkaWFRdWVyaWVzO1xufVxuIl19