'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('../../_occam-dom'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9tZWRpYXMuanMiXSwibmFtZXMiOlsiZG9tIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsIk1lZGlhIiwiYXJyYXlVdGlsaXRpZXMiLCJRdWVyeSIsInVuc2hpZnQiLCJtZWRpYVF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJNZWRpYXMiLCJhcnJheSIsIm1lZGlhcyIsImdldEFycmF5IiwiY2xhc3NOYW1lIiwiY3NzIiwicmVkdWNlIiwibWVkaWEiLCJtZWRpYUNTUyIsImFzQ1NTIiwibm9kZSIsInRva2VucyIsIm1lZGlhTm9kZXMiLCJleGVjdXRlIiwibWFwIiwibWVkaWFOb2RlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxrQkFBUixDQUFaO0FBQUEsSUFBMEM7QUFDcENDLFlBQVlELFFBQVEsV0FBUixDQURsQjs7QUFHQSxJQUFNRSxRQUFRRixRQUFRLFNBQVIsQ0FBZDs7QUFFTSxJQUFFRyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZTCxHQURaLENBQ0VLLEtBREY7QUFBQSxJQUVFQyxRQUZGLEdBRWNGLGNBRmQsQ0FFRUUsT0FGRjs7O0FBSU4sSUFBTUMsYUFBYUYsTUFBTUcsY0FBTixDQUFxQixtQkFBckIsQ0FBbkI7O0lBRU1DLE07QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NEJBRU9DLE0sRUFBUTtBQUNkLFVBQU1ELFFBQVFDLE9BQU9DLFFBQVAsRUFBZDs7QUFFQU4sZUFBUSxLQUFLSSxLQUFiLEVBQW9CQSxLQUFwQjtBQUNEOzs7MEJBRUtHLFMsRUFBVztBQUNmLFVBQU1DLE1BQU0sS0FBS0osS0FBTCxDQUFXSyxNQUFYLENBQWtCLFVBQVNELEdBQVQsRUFBY0UsS0FBZCxFQUFxQjtBQUNqRCxZQUFNQyxXQUFXRCxNQUFNRSxLQUFOLENBQVlMLFNBQVosQ0FBakI7O0FBRUFDLGVBQU9HLFFBQVA7O0FBRUEsZUFBT0gsR0FBUDtBQUNELE9BTlcsRUFNVCxFQU5TLENBQVo7O0FBUUEsYUFBT0EsR0FBUDtBQUNEOzs7c0NBRXdCSyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxhQUFhZCxXQUFXZSxPQUFYLENBQW1CSCxJQUFuQixDQUFuQjtBQUFBLFVBQ01ULFFBQVFXLFdBQVdFLEdBQVgsQ0FBZSxVQUFTQyxTQUFULEVBQW9CO0FBQ3pDLFlBQU1MLE9BQU9LLFNBQWI7QUFBQSxZQUF3QjtBQUNsQlIsZ0JBQVFiLE1BQU1zQixpQkFBTixDQUF3Qk4sSUFBeEIsRUFBOEJDLE1BQTlCLENBRGQ7O0FBR0EsZUFBT0osS0FBUDtBQUNELE9BTE8sQ0FEZDtBQUFBLFVBT01MLFNBQVMsSUFBSUYsTUFBSixDQUFXQyxLQUFYLENBUGY7O0FBU0EsYUFBT0MsTUFBUDtBQUNEOzs7Ozs7QUFHSGUsT0FBT0MsT0FBUCxHQUFpQmxCLE1BQWpCIiwiZmlsZSI6Im1lZGlhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZG9tID0gcmVxdWlyZSgnLi4vLi4vX29jY2FtLWRvbScpLCAgLy8vXG4gICAgICBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgTWVkaWEgPSByZXF1aXJlKCcuL21lZGlhJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgUXVlcnkgfSA9IGRvbSxcbiAgICAgIHsgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbignL3N0eWxlc2hlZXQvbWVkaWEnKTtcblxuY2xhc3MgTWVkaWFzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQobWVkaWFzKSB7XG4gICAgY29uc3QgYXJyYXkgPSBtZWRpYXMuZ2V0QXJyYXkoKTtcblxuICAgIHVuc2hpZnQodGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoZnVuY3Rpb24oY3NzLCBtZWRpYSkge1xuICAgICAgY29uc3QgbWVkaWFDU1MgPSBtZWRpYS5hc0NTUyhjbGFzc05hbWUpO1xuXG4gICAgICBjc3MgKz0gbWVkaWFDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBtZWRpYU5vZGVzID0gbWVkaWFRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gbWVkaWFOb2Rlcy5tYXAoZnVuY3Rpb24obWVkaWFOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbWVkaWFOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1lZGlhID0gTWVkaWEuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lZGlhcyA9IG5ldyBNZWRpYXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIG1lZGlhcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhcztcbiJdfQ==