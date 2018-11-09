'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('../../_occam-dom'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9tZWRpYS5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiRGVjbGFyYXRpb25zIiwiYXJyYXlVdGlsaXRpZXMiLCJRdWVyeSIsImFzQ29udGVudCIsImZpcnN0IiwibWVkaWFRdWVyaWVzUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhIiwibWVkaWFRdWVyaWVzIiwiZGVjbGFyYXRpb25zIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiZGVjbGFyYXRpb25zQ1NTIiwiYXNDU1MiLCJjc3MiLCJub2RlIiwidG9rZW5zIiwibWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1lZGlhUXVlcmllc05vZGVzIiwiZXhlY3V0ZSIsImZpcnN0U2VsZWN0b3JzTm9kZSIsIm1lZGlhUXVlcmllc05vZGUiLCJtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE1BQU1DLFFBQVEsa0JBQVIsQ0FBWjtBQUFBLElBQTBDO0FBQ3BDQyxZQUFZRCxRQUFRLFdBQVIsQ0FEbEI7O0FBR0EsSUFBTUUsZUFBZUYsUUFBUSxnQkFBUixDQUFyQjs7QUFFTSxJQUFFRyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUN1QkwsR0FEdkIsQ0FDRUssS0FERjtBQUFBLElBQ1NDLFNBRFQsR0FDdUJOLEdBRHZCLENBQ1NNLFNBRFQ7QUFBQSxJQUVFQyxLQUZGLEdBRVlILGNBRlosQ0FFRUcsS0FGRjs7O0FBSU4sSUFBTUMsb0JBQW9CSCxNQUFNSSxjQUFOLENBQXFCLHFCQUFyQixDQUExQjs7SUFFTUMsSztBQUNKLGlCQUFZQyxZQUFaLEVBQTBCQyxZQUExQixFQUF3QztBQUFBOztBQUN0QyxTQUFLRCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLFMsRUFBVztBQUNmLFVBQU1DLFNBQVMsTUFBZjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLSCxZQUFMLENBQWtCSSxLQUFsQixDQUF3QkYsTUFBeEIsQ0FEeEI7QUFBQSxVQUVNRyxrQkFBZ0IsS0FBS04sWUFBckIsZUFDTEUsU0FESyxZQUVSRSxlQUZRLGlCQUZOOztBQVVBLGFBQU9FLEdBQVA7QUFDRDs7O3NDQUV3QkMsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTVIsZUFBZVMsOEJBQThCRixJQUE5QixFQUFvQ0MsTUFBcEMsQ0FBckI7QUFBQSxVQUNNUCxlQUFlVCxhQUFha0IsaUJBQWIsQ0FBK0JILElBQS9CLEVBQXFDQyxNQUFyQyxDQURyQjtBQUFBLFVBRU1HLFFBQVEsSUFBSVosS0FBSixDQUFVQyxZQUFWLEVBQXdCQyxZQUF4QixDQUZkOztBQUlBLGFBQU9VLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJkLEtBQWpCOztBQUVBLFNBQVNVLDZCQUFULENBQXVDRixJQUF2QyxFQUE2Q0MsTUFBN0MsRUFBcUQ7QUFDbkQsTUFBTU0sb0JBQW9CakIsa0JBQWtCa0IsT0FBbEIsQ0FBMEJSLElBQTFCLENBQTFCO0FBQUEsTUFDTVMscUJBQXFCcEIsTUFBTWtCLGlCQUFOLENBRDNCO0FBQUEsTUFFTUcsbUJBQW1CRCxrQkFGekI7QUFBQSxNQUU2QztBQUN2Q0UsNEJBQTBCdkIsVUFBVXNCLGdCQUFWLEVBQTRCVCxNQUE1QixDQUhoQztBQUFBLE1BSU1SLG9CQUFrQmtCLHVCQUp4Qjs7QUFNQSxTQUFPbEIsWUFBUDtBQUNEIiwiZmlsZSI6Im1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCcuLi8uLi9fb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBEZWNsYXJhdGlvbnMgPSByZXF1aXJlKCcuL2RlY2xhcmF0aW9ucycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IFF1ZXJ5LCBhc0NvbnRlbnQgfSA9IGRvbSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBtZWRpYVF1ZXJpZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvbWVkaWEvbWVkaWFRdWVyaWVzJyk7XG5cbmNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLm1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllcztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGluZGVudCA9ICcgICAgJyxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhpbmRlbnQpLFxuICAgICAgICAgIGNzcyA9IGBAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc30ge1xuICAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxuICB9XG59XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgTWVkaWEobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWE7XG5cbmZ1bmN0aW9uIG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBtZWRpYVF1ZXJpZXNOb2RlcyA9IG1lZGlhUXVlcmllc1F1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIGZpcnN0U2VsZWN0b3JzTm9kZSA9IGZpcnN0KG1lZGlhUXVlcmllc05vZGVzKSxcbiAgICAgICAgbWVkaWFRdWVyaWVzTm9kZSA9IGZpcnN0U2VsZWN0b3JzTm9kZSwgLy8vXG4gICAgICAgIG1lZGlhUXVlcmllc05vZGVDb250ZW50ID0gYXNDb250ZW50KG1lZGlhUXVlcmllc05vZGUsIHRva2VucyksXG4gICAgICAgIG1lZGlhUXVlcmllcyA9IGAke21lZGlhUXVlcmllc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIG1lZGlhUXVlcmllcztcbn1cbiJdfQ==