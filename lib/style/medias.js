'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('../_occam-dom'),
    ///
necessary = require('necessary');

var Media = require('./media');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    _unshift = arrayUtilities.unshift;


var mediaQuery = Query.fromExpression('/stylesheet/media');

var Medias = function () {
  function Medias(array) {
    _classCallCheck(this, Medias);

    this.array = array;
  }

  _createClass(Medias, [{
    key: 'getArray',
    value: function getArray() {
      return this.array;
    }
  }, {
    key: 'unshift',
    value: function unshift(medias) {
      var array = medias.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: 'asCSS',
    value: function asCSS(className) {
      var css = this.array.reduce(function (css, media) {
        var mediaCSS = media.asCSS(className);

        css += mediaCSS;

        return css;
      }, '');

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var mediaNodes = mediaQuery.execute(node),
          array = mediaNodes.map(function (mediaNode) {
        var node = mediaNode,
            ///
        media = Media.fromNodeAndTokens(node, tokens);

        return media;
      }),
          medias = new Medias(array);

      return medias;
    }
  }]);

  return Medias;
}();

module.exports = Medias;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9tZWRpYXMuanMiXSwibmFtZXMiOlsiZG9tIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsIk1lZGlhIiwiYXJyYXlVdGlsaXRpZXMiLCJRdWVyeSIsInVuc2hpZnQiLCJtZWRpYVF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJNZWRpYXMiLCJhcnJheSIsIm1lZGlhcyIsImdldEFycmF5IiwiY2xhc3NOYW1lIiwiY3NzIiwicmVkdWNlIiwibWVkaWEiLCJtZWRpYUNTUyIsImFzQ1NTIiwibm9kZSIsInRva2VucyIsIm1lZGlhTm9kZXMiLCJleGVjdXRlIiwibWFwIiwibWVkaWFOb2RlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxlQUFSLENBQVo7QUFBQSxJQUF1QztBQUNqQ0MsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLFFBQVFGLFFBQVEsU0FBUixDQUFkOztBQUVNLElBQUVHLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lMLEdBRFosQ0FDRUssS0FERjtBQUFBLElBRUVDLFFBRkYsR0FFY0YsY0FGZCxDQUVFRSxPQUZGOzs7QUFJTixJQUFNQyxhQUFhRixNQUFNRyxjQUFOLENBQXFCLG1CQUFyQixDQUFuQjs7SUFFTUMsTTtBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs0QkFFT0MsTSxFQUFRO0FBQ2QsVUFBTUQsUUFBUUMsT0FBT0MsUUFBUCxFQUFkOztBQUVBTixlQUFRLEtBQUtJLEtBQWIsRUFBb0JBLEtBQXBCO0FBQ0Q7OzswQkFFS0csUyxFQUFXO0FBQ2YsVUFBTUMsTUFBTSxLQUFLSixLQUFMLENBQVdLLE1BQVgsQ0FBa0IsVUFBU0QsR0FBVCxFQUFjRSxLQUFkLEVBQXFCO0FBQ2pELFlBQU1DLFdBQVdELE1BQU1FLEtBQU4sQ0FBWUwsU0FBWixDQUFqQjs7QUFFQUMsZUFBT0csUUFBUDs7QUFFQSxlQUFPSCxHQUFQO0FBQ0QsT0FOVyxFQU1ULEVBTlMsQ0FBWjs7QUFRQSxhQUFPQSxHQUFQO0FBQ0Q7OztzQ0FFd0JLLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1DLGFBQWFkLFdBQVdlLE9BQVgsQ0FBbUJILElBQW5CLENBQW5CO0FBQUEsVUFDTVQsUUFBUVcsV0FBV0UsR0FBWCxDQUFlLFVBQVNDLFNBQVQsRUFBb0I7QUFDekMsWUFBTUwsT0FBT0ssU0FBYjtBQUFBLFlBQXdCO0FBQ2xCUixnQkFBUWIsTUFBTXNCLGlCQUFOLENBQXdCTixJQUF4QixFQUE4QkMsTUFBOUIsQ0FEZDs7QUFHQSxlQUFPSixLQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTUwsU0FBUyxJQUFJRixNQUFKLENBQVdDLEtBQVgsQ0FQZjs7QUFTQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs7OztBQUdIZSxPQUFPQyxPQUFQLEdBQWlCbEIsTUFBakIiLCJmaWxlIjoibWVkaWFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCcuLi9fb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBNZWRpYSA9IHJlcXVpcmUoJy4vbWVkaWEnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBRdWVyeSB9ID0gZG9tLFxuICAgICAgeyB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbWVkaWFRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvc3R5bGVzaGVldC9tZWRpYScpO1xuXG5jbGFzcyBNZWRpYXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChtZWRpYXMpIHtcbiAgICBjb25zdCBhcnJheSA9IG1lZGlhcy5nZXRBcnJheSgpO1xuXG4gICAgdW5zaGlmdCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZShmdW5jdGlvbihjc3MsIG1lZGlhKSB7XG4gICAgICBjb25zdCBtZWRpYUNTUyA9IG1lZGlhLmFzQ1NTKGNsYXNzTmFtZSk7XG5cbiAgICAgIGNzcyArPSBtZWRpYUNTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhTm9kZXMgPSBtZWRpYVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBtZWRpYU5vZGVzLm1hcChmdW5jdGlvbihtZWRpYU5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBtZWRpYU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbWVkaWEgPSBNZWRpYS5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWVkaWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWVkaWFzID0gbmV3IE1lZGlhcyhhcnJheSk7XG5cbiAgICByZXR1cm4gbWVkaWFzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFzO1xuIl19