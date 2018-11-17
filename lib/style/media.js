'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('../_occam-dom'),
    ///
necessary = require('necessary');

var RuleSets = require('./ruleSets'),
    Declarations = require('./declarations');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    asContent = dom.asContent,
    first = arrayUtilities.first;


var mediaQueriesQuery = Query.fromExpression('/media/mediaQueries');

var Media = function () {
  function Media(mediaQueries, declarations, ruleSets) {
    _classCallCheck(this, Media);

    this.mediaQueries = mediaQueries;
    this.declarations = declarations;
    this.ruleSets = ruleSets;
  }

  _createClass(Media, [{
    key: 'asCSS',
    value: function asCSS(className) {
      var declarationsCSS = this.declarations.asCSS('    '),
          ruleSetsCSS = this.ruleSets.asCSS('  '),
          css = '@media ' + this.mediaQueries + ' {\n  .' + className + ' {\n' + declarationsCSS + '\n\n' + ruleSetsCSS + '\n  }\n}\n\n';

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          media = new Media(mediaQueries, declarations, ruleSets);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9tZWRpYS5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiUnVsZVNldHMiLCJEZWNsYXJhdGlvbnMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5IiwiYXNDb250ZW50IiwiZmlyc3QiLCJtZWRpYVF1ZXJpZXNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiTWVkaWEiLCJtZWRpYVF1ZXJpZXMiLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsImNsYXNzTmFtZSIsImRlY2xhcmF0aW9uc0NTUyIsImFzQ1NTIiwicnVsZVNldHNDU1MiLCJjc3MiLCJub2RlIiwidG9rZW5zIiwibWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lZGlhUXVlcmllc05vZGVzIiwiZXhlY3V0ZSIsImZpcnN0U2VsZWN0b3JzTm9kZSIsIm1lZGlhUXVlcmllc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsZUFBUixDQUFaO0FBQUEsSUFBdUM7QUFDakNDLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxXQUFXRixRQUFRLFlBQVIsQ0FBakI7QUFBQSxJQUNNRyxlQUFlSCxRQUFRLGdCQUFSLENBRHJCOztBQUdNLElBQUVJLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ3VCTixHQUR2QixDQUNFTSxLQURGO0FBQUEsSUFDU0MsU0FEVCxHQUN1QlAsR0FEdkIsQ0FDU08sU0FEVDtBQUFBLElBRUVDLEtBRkYsR0FFWUgsY0FGWixDQUVFRyxLQUZGOzs7QUFJTixJQUFNQyxvQkFBb0JILE1BQU1JLGNBQU4sQ0FBcUIscUJBQXJCLENBQTFCOztJQUVNQyxLO0FBQ0osaUJBQVlDLFlBQVosRUFBMEJDLFlBQTFCLEVBQXdDQyxRQUF4QyxFQUFrRDtBQUFBOztBQUNoRCxTQUFLRixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OzswQkFFS0MsUyxFQUFXO0FBQ2YsVUFBTUMsa0JBQWtCLEtBQUtILFlBQUwsQ0FBa0JJLEtBQWxCLENBQXdCLE1BQXhCLENBQXhCO0FBQUEsVUFDTUMsY0FBYyxLQUFLSixRQUFMLENBQWNHLEtBQWQsQ0FBb0IsSUFBcEIsQ0FEcEI7QUFBQSxVQUVNRSxrQkFBZ0IsS0FBS1AsWUFBckIsZUFDTEcsU0FESyxZQUVSQyxlQUZRLFlBSVJFLFdBSlEsaUJBRk47O0FBWUEsYUFBT0MsR0FBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNVCxlQUFlVSw4QkFBOEJGLElBQTlCLEVBQW9DQyxNQUFwQyxDQUFyQjtBQUFBLFVBQ01SLGVBQWVULGFBQWFtQixpQkFBYixDQUErQkgsSUFBL0IsRUFBcUNDLE1BQXJDLENBRHJCO0FBQUEsVUFFTVAsV0FBV1gsU0FBU29CLGlCQUFULENBQTJCSCxJQUEzQixFQUFpQ0MsTUFBakMsQ0FGakI7QUFBQSxVQUdNRyxRQUFRLElBQUliLEtBQUosQ0FBVUMsWUFBVixFQUF3QkMsWUFBeEIsRUFBc0NDLFFBQXRDLENBSGQ7O0FBS0EsYUFBT1UsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQmYsS0FBakI7O0FBRUEsU0FBU1csNkJBQVQsQ0FBdUNGLElBQXZDLEVBQTZDQyxNQUE3QyxFQUFxRDtBQUNuRCxNQUFNTSxvQkFBb0JsQixrQkFBa0JtQixPQUFsQixDQUEwQlIsSUFBMUIsQ0FBMUI7QUFBQSxNQUNNUyxxQkFBcUJyQixNQUFNbUIsaUJBQU4sQ0FEM0I7QUFBQSxNQUVNRyxtQkFBbUJELGtCQUZ6QjtBQUFBLE1BRTZDO0FBQ3ZDRSw0QkFBMEJ4QixVQUFVdUIsZ0JBQVYsRUFBNEJULE1BQTVCLENBSGhDO0FBQUEsTUFJTVQsb0JBQWtCbUIsdUJBSnhCOztBQU1BLFNBQU9uQixZQUFQO0FBQ0QiLCJmaWxlIjoibWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGRvbSA9IHJlcXVpcmUoJy4uL19vY2NhbS1kb20nKSwgIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJ1bGVTZXRzID0gcmVxdWlyZSgnLi9ydWxlU2V0cycpLFxuICAgICAgRGVjbGFyYXRpb25zID0gcmVxdWlyZSgnLi9kZWNsYXJhdGlvbnMnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBRdWVyeSwgYXNDb250ZW50IH0gPSBkb20sXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbWVkaWFRdWVyaWVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignL21lZGlhL21lZGlhUXVlcmllcycpO1xuXG5jbGFzcyBNZWRpYSB7XG4gIGNvbnN0cnVjdG9yKG1lZGlhUXVlcmllcywgZGVjbGFyYXRpb25zLCBydWxlU2V0cykge1xuICAgIHRoaXMubWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKCcgICAgJyksXG4gICAgICAgICAgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKCcgICcpLFxuICAgICAgICAgIGNzcyA9IGBAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc30ge1xuICAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxuXG4ke3J1bGVTZXRzQ1NTfVxuICB9XG59XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IE1lZGlhKG1lZGlhUXVlcmllcywgZGVjbGFyYXRpb25zLCBydWxlU2V0cyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYTtcblxuZnVuY3Rpb24gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG1lZGlhUXVlcmllc05vZGVzID0gbWVkaWFRdWVyaWVzUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgZmlyc3RTZWxlY3RvcnNOb2RlID0gZmlyc3QobWVkaWFRdWVyaWVzTm9kZXMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXNOb2RlID0gZmlyc3RTZWxlY3RvcnNOb2RlLCAvLy9cbiAgICAgICAgbWVkaWFRdWVyaWVzTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQobWVkaWFRdWVyaWVzTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgbWVkaWFRdWVyaWVzID0gYCR7bWVkaWFRdWVyaWVzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gbWVkaWFRdWVyaWVzO1xufVxuIl19