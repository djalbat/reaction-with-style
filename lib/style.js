'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Medias = require('./style/medias'),
    RuleSets = require('./style/ruleSets'),
    Declarations = require('./style/declarations');

var Style = function () {
  function Style(declarations, ruleSets, medias) {
    _classCallCheck(this, Style);

    this.declarations = declarations;
    this.ruleSets = ruleSets;
    this.medias = medias;
  }

  _createClass(Style, [{
    key: 'getDeclarations',
    value: function getDeclarations() {
      return this.declarations;
    }
  }, {
    key: 'getRuleSets',
    value: function getRuleSets() {
      return this.ruleSets;
    }
  }, {
    key: 'getMedias',
    value: function getMedias() {
      return this.medias;
    }
  }, {
    key: 'extends',
    value: function _extends(superStyle) {
      var declarations = superStyle.getDeclarations(),
          ruleSets = superStyle.getRuleSets(),
          medias = superStyle.getMedias();

      this.unshift(declarations, ruleSets, medias);
    }
  }, {
    key: 'unshift',
    value: function unshift(declarations, ruleSets, medias) {
      this.declarations.unshift(declarations);
      this.ruleSets.unshift(ruleSets);
      this.medias.unshift(medias);
    }
  }, {
    key: 'asCSS',
    value: function asCSS(className) {
      var declarationsCSS = this.declarations.asCSS('  '),
          ruleSetsCSS = this.ruleSets.asCSS(className, ''),
          mediasCSS = this.medias.asCSS(className),
          html = '.' + className + ' {\n' + declarationsCSS + '\n}\n\n' + ruleSetsCSS + mediasCSS;

      return html;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          medias = Medias.fromNodeAndTokens(node, tokens),
          style = new Style(declarations, ruleSets, medias);

      return style;
    }
  }]);

  return Style;
}();

module.exports = Style;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zdHlsZS5qcyJdLCJuYW1lcyI6WyJNZWRpYXMiLCJyZXF1aXJlIiwiUnVsZVNldHMiLCJEZWNsYXJhdGlvbnMiLCJTdHlsZSIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXRzIiwibWVkaWFzIiwic3VwZXJTdHlsZSIsImdldERlY2xhcmF0aW9ucyIsImdldFJ1bGVTZXRzIiwiZ2V0TWVkaWFzIiwidW5zaGlmdCIsImNsYXNzTmFtZSIsImRlY2xhcmF0aW9uc0NTUyIsImFzQ1NTIiwicnVsZVNldHNDU1MiLCJtZWRpYXNDU1MiLCJodG1sIiwibm9kZSIsInRva2VucyIsImZyb21Ob2RlQW5kVG9rZW5zIiwic3R5bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxnQkFBUixDQUFmO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxrQkFBUixDQURqQjtBQUFBLElBRU1FLGVBQWVGLFFBQVEsc0JBQVIsQ0FGckI7O0lBSU1HLEs7QUFDSixpQkFBWUMsWUFBWixFQUEwQkMsUUFBMUIsRUFBb0NDLE1BQXBDLEVBQTRDO0FBQUE7O0FBQzFDLFNBQUtGLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztzQ0FFaUI7QUFDaEIsYUFBTyxLQUFLRixZQUFaO0FBQ0Q7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0MsUUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzZCQUVPQyxVLEVBQVk7QUFDbEIsVUFBTUgsZUFBZUcsV0FBV0MsZUFBWCxFQUFyQjtBQUFBLFVBQ01ILFdBQVdFLFdBQVdFLFdBQVgsRUFEakI7QUFBQSxVQUVNSCxTQUFTQyxXQUFXRyxTQUFYLEVBRmY7O0FBSUEsV0FBS0MsT0FBTCxDQUFhUCxZQUFiLEVBQTJCQyxRQUEzQixFQUFxQ0MsTUFBckM7QUFDRDs7OzRCQUVPRixZLEVBQWNDLFEsRUFBVUMsTSxFQUFRO0FBQ3RDLFdBQUtGLFlBQUwsQ0FBa0JPLE9BQWxCLENBQTBCUCxZQUExQjtBQUNBLFdBQUtDLFFBQUwsQ0FBY00sT0FBZCxDQUFzQk4sUUFBdEI7QUFDQSxXQUFLQyxNQUFMLENBQVlLLE9BQVosQ0FBb0JMLE1BQXBCO0FBQ0Q7OzswQkFFS00sUyxFQUFXO0FBQ2YsVUFBTUMsa0JBQWtCLEtBQUtULFlBQUwsQ0FBa0JVLEtBQWxCLENBQXdCLElBQXhCLENBQXhCO0FBQUEsVUFDTUMsY0FBYyxLQUFLVixRQUFMLENBQWNTLEtBQWQsQ0FBb0JGLFNBQXBCLEVBQStCLEVBQS9CLENBRHBCO0FBQUEsVUFFTUksWUFBWSxLQUFLVixNQUFMLENBQVlRLEtBQVosQ0FBa0JGLFNBQWxCLENBRmxCO0FBQUEsVUFHTUssYUFBV0wsU0FBWCxZQUNSQyxlQURRLGVBSVJFLFdBSlEsR0FJTUMsU0FQWjs7QUFTQSxhQUFPQyxJQUFQO0FBQ0Q7OztzQ0FFd0JDLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1mLGVBQWVGLGFBQWFrQixpQkFBYixDQUErQkYsSUFBL0IsRUFBcUNDLE1BQXJDLENBQXJCO0FBQUEsVUFDTWQsV0FBV0osU0FBU21CLGlCQUFULENBQTJCRixJQUEzQixFQUFpQ0MsTUFBakMsQ0FEakI7QUFBQSxVQUVNYixTQUFTUCxPQUFPcUIsaUJBQVAsQ0FBeUJGLElBQXpCLEVBQStCQyxNQUEvQixDQUZmO0FBQUEsVUFHTUUsUUFBUSxJQUFJbEIsS0FBSixDQUFVQyxZQUFWLEVBQXdCQyxRQUF4QixFQUFrQ0MsTUFBbEMsQ0FIZDs7QUFLQSxhQUFPZSxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCcEIsS0FBakIiLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1lZGlhcyA9IHJlcXVpcmUoJy4vc3R5bGUvbWVkaWFzJyksXG4gICAgICBSdWxlU2V0cyA9IHJlcXVpcmUoJy4vc3R5bGUvcnVsZVNldHMnKSxcbiAgICAgIERlY2xhcmF0aW9ucyA9IHJlcXVpcmUoJy4vc3R5bGUvZGVjbGFyYXRpb25zJyk7XG5cbmNsYXNzIFN0eWxlIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgbWVkaWFzKSB7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICAgIHRoaXMubWVkaWFzID0gbWVkaWFzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0TWVkaWFzKCkge1xuICAgIHJldHVybiB0aGlzLm1lZGlhcztcbiAgfVxuXG4gIGV4dGVuZHMoc3VwZXJTdHlsZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IHN1cGVyU3R5bGUuZ2V0RGVjbGFyYXRpb25zKCksXG4gICAgICAgICAgcnVsZVNldHMgPSBzdXBlclN0eWxlLmdldFJ1bGVTZXRzKCksXG4gICAgICAgICAgbWVkaWFzID0gc3VwZXJTdHlsZS5nZXRNZWRpYXMoKTtcblxuICAgIHRoaXMudW5zaGlmdChkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucy51bnNoaWZ0KGRlY2xhcmF0aW9ucyk7XG4gICAgdGhpcy5ydWxlU2V0cy51bnNoaWZ0KHJ1bGVTZXRzKTtcbiAgICB0aGlzLm1lZGlhcy51bnNoaWZ0KG1lZGlhcyk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUygnICAnKSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoY2xhc3NOYW1lLCAnJyksXG4gICAgICAgICAgbWVkaWFzQ1NTID0gdGhpcy5tZWRpYXMuYXNDU1MoY2xhc3NOYW1lKSxcbiAgICAgICAgICBodG1sID0gYC4ke2NsYXNzTmFtZX0ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG59XG5cbiR7cnVsZVNldHNDU1N9JHttZWRpYXNDU1N9YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYXMgPSBNZWRpYXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHlsZSA9IG5ldyBTdHlsZShkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3R5bGU7XG4iXX0=