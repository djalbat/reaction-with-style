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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zdHlsZS5qcyJdLCJuYW1lcyI6WyJNZWRpYXMiLCJyZXF1aXJlIiwiUnVsZVNldHMiLCJEZWNsYXJhdGlvbnMiLCJTdHlsZSIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXRzIiwibWVkaWFzIiwib2xkU3R5bGUiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRSdWxlU2V0cyIsImdldE1lZGlhcyIsInVuc2hpZnQiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJkZWNsYXJhdGlvbnNDU1MiLCJhc0NTUyIsInJ1bGVTZXRzQ1NTIiwibWVkaWFzQ1NTIiwiaHRtbCIsIm5vZGUiLCJ0b2tlbnMiLCJmcm9tTm9kZUFuZFRva2VucyIsInN0eWxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBZjtBQUFBLElBQ01DLFdBQVdELFFBQVEsa0JBQVIsQ0FEakI7QUFBQSxJQUVNRSxlQUFlRixRQUFRLHNCQUFSLENBRnJCOztJQUlNRyxLO0FBQ0osaUJBQVlDLFlBQVosRUFBMEJDLFFBQTFCLEVBQW9DQyxNQUFwQyxFQUE0QztBQUFBOztBQUMxQyxTQUFLRixZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7c0NBRWlCO0FBQ2hCLGFBQU8sS0FBS0YsWUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtDLFFBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs2QkFFUUMsUSxFQUFVO0FBQ2pCLFVBQU1ILGVBQWVHLFNBQVNDLGVBQVQsRUFBckI7QUFBQSxVQUNNSCxXQUFXRSxTQUFTRSxXQUFULEVBRGpCO0FBQUEsVUFFTUgsU0FBU0MsU0FBU0csU0FBVCxFQUZmOztBQUlBLFdBQUtDLE9BQUwsQ0FBYVAsWUFBYixFQUEyQkMsUUFBM0IsRUFBcUNDLE1BQXJDO0FBQ0Q7Ozs0QkFFT0YsWSxFQUFjQyxRLEVBQVVDLE0sRUFBUTtBQUN0QyxXQUFLRixZQUFMLENBQWtCTyxPQUFsQixDQUEwQlAsWUFBMUI7QUFDQSxXQUFLQyxRQUFMLENBQWNNLE9BQWQsQ0FBc0JOLFFBQXRCO0FBQ0EsV0FBS0MsTUFBTCxDQUFZSyxPQUFaLENBQW9CTCxNQUFwQjtBQUNEOzs7MEJBRUtNLFMsRUFBVztBQUNmLFVBQU1DLFNBQVMsSUFBZjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLVixZQUFMLENBQWtCVyxLQUFsQixDQUF3QkYsTUFBeEIsQ0FEeEI7QUFBQSxVQUVNRyxjQUFjLEtBQUtYLFFBQUwsQ0FBY1UsS0FBZCxDQUFvQkgsU0FBcEIsQ0FGcEI7QUFBQSxVQUdNSyxZQUFZLEtBQUtYLE1BQUwsQ0FBWVMsS0FBWixDQUFrQkgsU0FBbEIsQ0FIbEI7QUFBQSxVQUlNTSxhQUFXTixTQUFYLFlBQ1JFLGVBRFEsZUFJUkUsV0FKUSxHQUlNQyxTQVJaOztBQVVBLGFBQU9DLElBQVA7QUFDRDs7O3NDQUV3QkMsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTWhCLGVBQWVGLGFBQWFtQixpQkFBYixDQUErQkYsSUFBL0IsRUFBcUNDLE1BQXJDLENBQXJCO0FBQUEsVUFDTWYsV0FBV0osU0FBU29CLGlCQUFULENBQTJCRixJQUEzQixFQUFpQ0MsTUFBakMsQ0FEakI7QUFBQSxVQUVNZCxTQUFTUCxPQUFPc0IsaUJBQVAsQ0FBeUJGLElBQXpCLEVBQStCQyxNQUEvQixDQUZmO0FBQUEsVUFHTUUsUUFBUSxJQUFJbkIsS0FBSixDQUFVQyxZQUFWLEVBQXdCQyxRQUF4QixFQUFrQ0MsTUFBbEMsQ0FIZDs7QUFLQSxhQUFPZ0IsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQnJCLEtBQWpCIiwiZmlsZSI6InN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBNZWRpYXMgPSByZXF1aXJlKCcuL3N0eWxlL21lZGlhcycpLFxuICAgICAgUnVsZVNldHMgPSByZXF1aXJlKCcuL3N0eWxlL3J1bGVTZXRzJyksXG4gICAgICBEZWNsYXJhdGlvbnMgPSByZXF1aXJlKCcuL3N0eWxlL2RlY2xhcmF0aW9ucycpO1xuXG5jbGFzcyBTdHlsZSB7XG4gIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLm1lZGlhcyA9IG1lZGlhcztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGdldE1lZGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYXM7XG4gIH1cblxuICBvdmVycmlkZShvbGRTdHlsZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IG9sZFN0eWxlLmdldERlY2xhcmF0aW9ucygpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gb2xkU3R5bGUuZ2V0UnVsZVNldHMoKSxcbiAgICAgICAgICBtZWRpYXMgPSBvbGRTdHlsZS5nZXRNZWRpYXMoKTtcblxuICAgIHRoaXMudW5zaGlmdChkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucy51bnNoaWZ0KGRlY2xhcmF0aW9ucyk7XG4gICAgdGhpcy5ydWxlU2V0cy51bnNoaWZ0KHJ1bGVTZXRzKTtcbiAgICB0aGlzLm1lZGlhcy51bnNoaWZ0KG1lZGlhcyk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpbmRlbnQgPSAnICAnLFxuICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGluZGVudCksXG4gICAgICAgICAgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKGNsYXNzTmFtZSksXG4gICAgICAgICAgbWVkaWFzQ1NTID0gdGhpcy5tZWRpYXMuYXNDU1MoY2xhc3NOYW1lKSxcbiAgICAgICAgICBodG1sID0gYC4ke2NsYXNzTmFtZX0ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG59XG5cbiR7cnVsZVNldHNDU1N9JHttZWRpYXNDU1N9YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYXMgPSBNZWRpYXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHlsZSA9IG5ldyBTdHlsZShkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3R5bGU7XG4iXX0=