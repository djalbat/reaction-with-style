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
    key: 'override',
    value: function override(oldStyle) {
      var declarations = oldStyle.getDeclarations(),
          ruleSets = oldStyle.getRuleSets(),
          medias = oldStyle.getMedias();

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
      var indent = '  ',
          declarationsCSS = this.declarations.asCSS(indent),
          ruleSetsCSS = this.ruleSets.asCSS(className),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsiTWVkaWFzIiwicmVxdWlyZSIsIlJ1bGVTZXRzIiwiRGVjbGFyYXRpb25zIiwiU3R5bGUiLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsIm1lZGlhcyIsIm9sZFN0eWxlIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0UnVsZVNldHMiLCJnZXRNZWRpYXMiLCJ1bnNoaWZ0IiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiZGVjbGFyYXRpb25zQ1NTIiwiYXNDU1MiLCJydWxlU2V0c0NTUyIsIm1lZGlhc0NTUyIsImh0bWwiLCJub2RlIiwidG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJzdHlsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGdCQUFSLENBQWY7QUFBQSxJQUNNQyxXQUFXRCxRQUFRLGtCQUFSLENBRGpCO0FBQUEsSUFFTUUsZUFBZUYsUUFBUSxzQkFBUixDQUZyQjs7SUFJTUcsSztBQUNKLGlCQUFZQyxZQUFaLEVBQTBCQyxRQUExQixFQUFvQ0MsTUFBcEMsRUFBNEM7QUFBQTs7QUFDMUMsU0FBS0YsWUFBTCxHQUFvQkEsWUFBcEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtGLFlBQVo7QUFDRDs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQyxRQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7NkJBRVFDLFEsRUFBVTtBQUNqQixVQUFNSCxlQUFlRyxTQUFTQyxlQUFULEVBQXJCO0FBQUEsVUFDTUgsV0FBV0UsU0FBU0UsV0FBVCxFQURqQjtBQUFBLFVBRU1ILFNBQVNDLFNBQVNHLFNBQVQsRUFGZjs7QUFJQSxXQUFLQyxPQUFMLENBQWFQLFlBQWIsRUFBMkJDLFFBQTNCLEVBQXFDQyxNQUFyQztBQUNEOzs7NEJBRU9GLFksRUFBY0MsUSxFQUFVQyxNLEVBQVE7QUFDdEMsV0FBS0YsWUFBTCxDQUFrQk8sT0FBbEIsQ0FBMEJQLFlBQTFCO0FBQ0EsV0FBS0MsUUFBTCxDQUFjTSxPQUFkLENBQXNCTixRQUF0QjtBQUNBLFdBQUtDLE1BQUwsQ0FBWUssT0FBWixDQUFvQkwsTUFBcEI7QUFDRDs7OzBCQUVLTSxTLEVBQVc7QUFDZixVQUFNQyxTQUFTLElBQWY7QUFBQSxVQUNNQyxrQkFBa0IsS0FBS1YsWUFBTCxDQUFrQlcsS0FBbEIsQ0FBd0JGLE1BQXhCLENBRHhCO0FBQUEsVUFFTUcsY0FBYyxLQUFLWCxRQUFMLENBQWNVLEtBQWQsQ0FBb0JILFNBQXBCLENBRnBCO0FBQUEsVUFHTUssWUFBWSxLQUFLWCxNQUFMLENBQVlTLEtBQVosQ0FBa0JILFNBQWxCLENBSGxCO0FBQUEsVUFJTU0sYUFBV04sU0FBWCxZQUNSRSxlQURRLGVBSVJFLFdBSlEsR0FJTUMsU0FSWjs7QUFVQSxhQUFPQyxJQUFQO0FBQ0Q7OztzQ0FFd0JDLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1oQixlQUFlRixhQUFhbUIsaUJBQWIsQ0FBK0JGLElBQS9CLEVBQXFDQyxNQUFyQyxDQUFyQjtBQUFBLFVBQ01mLFdBQVdKLFNBQVNvQixpQkFBVCxDQUEyQkYsSUFBM0IsRUFBaUNDLE1BQWpDLENBRGpCO0FBQUEsVUFFTWQsU0FBU1AsT0FBT3NCLGlCQUFQLENBQXlCRixJQUF6QixFQUErQkMsTUFBL0IsQ0FGZjtBQUFBLFVBR01FLFFBQVEsSUFBSW5CLEtBQUosQ0FBVUMsWUFBVixFQUF3QkMsUUFBeEIsRUFBa0NDLE1BQWxDLENBSGQ7O0FBS0EsYUFBT2dCLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJyQixLQUFqQiIsImZpbGUiOiJ3aXRoU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IE1lZGlhcyA9IHJlcXVpcmUoJy4vc3R5bGUvbWVkaWFzJyksXG4gICAgICBSdWxlU2V0cyA9IHJlcXVpcmUoJy4vc3R5bGUvcnVsZVNldHMnKSxcbiAgICAgIERlY2xhcmF0aW9ucyA9IHJlcXVpcmUoJy4vc3R5bGUvZGVjbGFyYXRpb25zJyk7XG5cbmNsYXNzIFN0eWxlIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgbWVkaWFzKSB7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICAgIHRoaXMubWVkaWFzID0gbWVkaWFzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0TWVkaWFzKCkge1xuICAgIHJldHVybiB0aGlzLm1lZGlhcztcbiAgfVxuXG4gIG92ZXJyaWRlKG9sZFN0eWxlKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gb2xkU3R5bGUuZ2V0RGVjbGFyYXRpb25zKCksXG4gICAgICAgICAgcnVsZVNldHMgPSBvbGRTdHlsZS5nZXRSdWxlU2V0cygpLFxuICAgICAgICAgIG1lZGlhcyA9IG9sZFN0eWxlLmdldE1lZGlhcygpO1xuXG4gICAgdGhpcy51bnNoaWZ0KGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcyk7XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zLnVuc2hpZnQoZGVjbGFyYXRpb25zKTtcbiAgICB0aGlzLnJ1bGVTZXRzLnVuc2hpZnQocnVsZVNldHMpO1xuICAgIHRoaXMubWVkaWFzLnVuc2hpZnQobWVkaWFzKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGluZGVudCA9ICcgICcsXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoaW5kZW50KSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoY2xhc3NOYW1lKSxcbiAgICAgICAgICBtZWRpYXNDU1MgPSB0aGlzLm1lZGlhcy5hc0NTUyhjbGFzc05hbWUpLFxuICAgICAgICAgIGh0bWwgPSBgLiR7Y2xhc3NOYW1lfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbn1cblxuJHtydWxlU2V0c0NTU30ke21lZGlhc0NTU31gO1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhcyA9IE1lZGlhcy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHN0eWxlID0gbmV3IFN0eWxlKGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcyk7XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZTtcbiJdfQ==