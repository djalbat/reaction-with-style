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
          ruleSetsCSS = this.ruleSets.asCSS(className, '  '),
          css = '@media ' + this.mediaQueries + ' {\n  .' + className + ' {\n' + declarationsCSS + '\n  }\n  \n' + ruleSetsCSS + '\n}\n\n';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9tZWRpYS5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiUnVsZVNldHMiLCJEZWNsYXJhdGlvbnMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5IiwiYXNDb250ZW50IiwiZmlyc3QiLCJtZWRpYVF1ZXJpZXNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiTWVkaWEiLCJtZWRpYVF1ZXJpZXMiLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsImNsYXNzTmFtZSIsImRlY2xhcmF0aW9uc0NTUyIsImFzQ1NTIiwicnVsZVNldHNDU1MiLCJjc3MiLCJub2RlIiwidG9rZW5zIiwibWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lZGlhUXVlcmllc05vZGVzIiwiZXhlY3V0ZSIsImZpcnN0U2VsZWN0b3JzTm9kZSIsIm1lZGlhUXVlcmllc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsZUFBUixDQUFaO0FBQUEsSUFBdUM7QUFDakNDLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxXQUFXRixRQUFRLFlBQVIsQ0FBakI7QUFBQSxJQUNNRyxlQUFlSCxRQUFRLGdCQUFSLENBRHJCOztBQUdNLElBQUVJLGNBQUYsR0FBcUJILFNBQXJCLENBQUVHLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ3VCTixHQUR2QixDQUNFTSxLQURGO0FBQUEsSUFDU0MsU0FEVCxHQUN1QlAsR0FEdkIsQ0FDU08sU0FEVDtBQUFBLElBRUVDLEtBRkYsR0FFWUgsY0FGWixDQUVFRyxLQUZGOzs7QUFJTixJQUFNQyxvQkFBb0JILE1BQU1JLGNBQU4sQ0FBcUIscUJBQXJCLENBQTFCOztJQUVNQyxLO0FBQ0osaUJBQVlDLFlBQVosRUFBMEJDLFlBQTFCLEVBQXdDQyxRQUF4QyxFQUFrRDtBQUFBOztBQUNoRCxTQUFLRixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OzswQkFFS0MsUyxFQUFXO0FBQ2YsVUFBTUMsa0JBQWtCLEtBQUtILFlBQUwsQ0FBa0JJLEtBQWxCLENBQXdCLE1BQXhCLENBQXhCO0FBQUEsVUFDTUMsY0FBYyxLQUFLSixRQUFMLENBQWNHLEtBQWQsQ0FBb0JGLFNBQXBCLEVBQStCLElBQS9CLENBRHBCO0FBQUEsVUFFTUksa0JBQWdCLEtBQUtQLFlBQXJCLGVBQ0xHLFNBREssWUFFUkMsZUFGUSxtQkFLUkUsV0FMUSxZQUZOOztBQVlBLGFBQU9DLEdBQVA7QUFDRDs7O3NDQUV3QkMsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTVQsZUFBZVUsOEJBQThCRixJQUE5QixFQUFvQ0MsTUFBcEMsQ0FBckI7QUFBQSxVQUNNUixlQUFlVCxhQUFhbUIsaUJBQWIsQ0FBK0JILElBQS9CLEVBQXFDQyxNQUFyQyxDQURyQjtBQUFBLFVBRU1QLFdBQVdYLFNBQVNvQixpQkFBVCxDQUEyQkgsSUFBM0IsRUFBaUNDLE1BQWpDLENBRmpCO0FBQUEsVUFHTUcsUUFBUSxJQUFJYixLQUFKLENBQVVDLFlBQVYsRUFBd0JDLFlBQXhCLEVBQXNDQyxRQUF0QyxDQUhkOztBQUtBLGFBQU9VLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJmLEtBQWpCOztBQUVBLFNBQVNXLDZCQUFULENBQXVDRixJQUF2QyxFQUE2Q0MsTUFBN0MsRUFBcUQ7QUFDbkQsTUFBTU0sb0JBQW9CbEIsa0JBQWtCbUIsT0FBbEIsQ0FBMEJSLElBQTFCLENBQTFCO0FBQUEsTUFDTVMscUJBQXFCckIsTUFBTW1CLGlCQUFOLENBRDNCO0FBQUEsTUFFTUcsbUJBQW1CRCxrQkFGekI7QUFBQSxNQUU2QztBQUN2Q0UsNEJBQTBCeEIsVUFBVXVCLGdCQUFWLEVBQTRCVCxNQUE1QixDQUhoQztBQUFBLE1BSU1ULG9CQUFrQm1CLHVCQUp4Qjs7QUFNQSxTQUFPbkIsWUFBUDtBQUNEIiwiZmlsZSI6Im1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCcuLi9fb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBSdWxlU2V0cyA9IHJlcXVpcmUoJy4vcnVsZVNldHMnKSxcbiAgICAgIERlY2xhcmF0aW9ucyA9IHJlcXVpcmUoJy4vZGVjbGFyYXRpb25zJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgUXVlcnksIGFzQ29udGVudCB9ID0gZG9tLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IG1lZGlhUXVlcmllc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy9tZWRpYS9tZWRpYVF1ZXJpZXMnKTtcblxuY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3RvcihtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpIHtcbiAgICB0aGlzLm1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllcztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUygnICAgICcpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsICcgICcpLFxuICAgICAgICAgIGNzcyA9IGBAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc30ge1xuICAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxuICB9XG4gIFxuJHtydWxlU2V0c0NTU31cbn1cblxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBydWxlU2V0cyA9IFJ1bGVTZXRzLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgTWVkaWEobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzKTtcblxuICAgIHJldHVybiBtZWRpYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhO1xuXG5mdW5jdGlvbiBtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3QgbWVkaWFRdWVyaWVzTm9kZXMgPSBtZWRpYVF1ZXJpZXNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICBmaXJzdFNlbGVjdG9yc05vZGUgPSBmaXJzdChtZWRpYVF1ZXJpZXNOb2RlcyksXG4gICAgICAgIG1lZGlhUXVlcmllc05vZGUgPSBmaXJzdFNlbGVjdG9yc05vZGUsIC8vL1xuICAgICAgICBtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCA9IGFzQ29udGVudChtZWRpYVF1ZXJpZXNOb2RlLCB0b2tlbnMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXMgPSBgJHttZWRpYVF1ZXJpZXNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBtZWRpYVF1ZXJpZXM7XG59XG4iXX0=