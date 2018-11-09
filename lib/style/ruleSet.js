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


var selectorsQuery = Query.fromExpression('//selectors');

var RuleSet = function () {
  function RuleSet(selectors, declarations) {
    _classCallCheck(this, RuleSet);

    this.selectors = selectors;
    this.declarations = declarations;
  }

  _createClass(RuleSet, [{
    key: 'asCSS',
    value: function asCSS(className) {
      var indent = '  ',
          declarationsCSS = this.declarations.asCSS(indent),
          css = '.' + className + this.selectors + ' {\n' + declarationsCSS + '\n}\n\n';

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var selectors = selectorsFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          media = new RuleSet(selectors, declarations);

      return media;
    }
  }]);

  return RuleSet;
}();

module.exports = RuleSet;

function selectorsFromNodeAndTokens(node, tokens) {
  var selectorsNodes = selectorsQuery.execute(node),
      firstSelectorsNode = first(selectorsNodes),
      selectorsNode = firstSelectorsNode,
      ///
  selectorsNodeContent = asContent(selectorsNode, tokens),
      selectors = '' + selectorsNodeContent;

  return selectors;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9ydWxlU2V0LmpzIl0sIm5hbWVzIjpbImRvbSIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJEZWNsYXJhdGlvbnMiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5IiwiYXNDb250ZW50IiwiZmlyc3QiLCJzZWxlY3RvcnNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldCIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsImNsYXNzTmFtZSIsImluZGVudCIsImRlY2xhcmF0aW9uc0NTUyIsImFzQ1NTIiwiY3NzIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtZWRpYSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvcnNOb2RlcyIsImV4ZWN1dGUiLCJmaXJzdFNlbGVjdG9yc05vZGUiLCJzZWxlY3RvcnNOb2RlIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNQyxRQUFRLGtCQUFSLENBQVo7QUFBQSxJQUEwQztBQUNwQ0MsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLGVBQWVGLFFBQVEsZ0JBQVIsQ0FBckI7O0FBRU0sSUFBRUcsY0FBRixHQUFxQkYsU0FBckIsQ0FBRUUsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDdUJMLEdBRHZCLENBQ0VLLEtBREY7QUFBQSxJQUNTQyxTQURULEdBQ3VCTixHQUR2QixDQUNTTSxTQURUO0FBQUEsSUFFRUMsS0FGRixHQUVZSCxjQUZaLENBRUVHLEtBRkY7OztBQUlOLElBQU1DLGlCQUFpQkgsTUFBTUksY0FBTixDQUFxQixhQUFyQixDQUF2Qjs7SUFFTUMsTztBQUNKLG1CQUFZQyxTQUFaLEVBQXVCQyxZQUF2QixFQUFxQztBQUFBOztBQUNuQyxTQUFLRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7MEJBRUtDLFMsRUFBVztBQUNmLFVBQU1DLFNBQVMsSUFBZjtBQUFBLFVBQ01DLGtCQUFrQixLQUFLSCxZQUFMLENBQWtCSSxLQUFsQixDQUF3QkYsTUFBeEIsQ0FEeEI7QUFBQSxVQUVNRyxZQUFVSixTQUFWLEdBQXNCLEtBQUtGLFNBQTNCLFlBQ1JJLGVBRFEsWUFGTjs7QUFRQSxhQUFPRSxHQUFQO0FBQ0Q7OztzQ0FFd0JDLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1SLFlBQVlTLDJCQUEyQkYsSUFBM0IsRUFBaUNDLE1BQWpDLENBQWxCO0FBQUEsVUFDTVAsZUFBZVQsYUFBYWtCLGlCQUFiLENBQStCSCxJQUEvQixFQUFxQ0MsTUFBckMsQ0FEckI7QUFBQSxVQUVNRyxRQUFRLElBQUlaLE9BQUosQ0FBWUMsU0FBWixFQUF1QkMsWUFBdkIsQ0FGZDs7QUFJQSxhQUFPVSxLQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCZCxPQUFqQjs7QUFFQSxTQUFTVSwwQkFBVCxDQUFvQ0YsSUFBcEMsRUFBMENDLE1BQTFDLEVBQWtEO0FBQ2hELE1BQU1NLGlCQUFpQmpCLGVBQWVrQixPQUFmLENBQXVCUixJQUF2QixDQUF2QjtBQUFBLE1BQ01TLHFCQUFxQnBCLE1BQU1rQixjQUFOLENBRDNCO0FBQUEsTUFFTUcsZ0JBQWdCRCxrQkFGdEI7QUFBQSxNQUUwQztBQUNwQ0UseUJBQXVCdkIsVUFBVXNCLGFBQVYsRUFBeUJULE1BQXpCLENBSDdCO0FBQUEsTUFJTVIsaUJBQWVrQixvQkFKckI7O0FBTUEsU0FBT2xCLFNBQVA7QUFDRCIsImZpbGUiOiJydWxlU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCcuLi8uLi9fb2NjYW0tZG9tJyksICAvLy9cbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBEZWNsYXJhdGlvbnMgPSByZXF1aXJlKCcuL2RlY2xhcmF0aW9ucycpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IFF1ZXJ5LCBhc0NvbnRlbnQgfSA9IGRvbSxcbiAgICAgIHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBzZWxlY3RvcnNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvL3NlbGVjdG9ycycpO1xuXG5jbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGluZGVudCA9ICcgICcsXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoaW5kZW50KSxcbiAgICAgICAgICBjc3MgPSBgLiR7Y2xhc3NOYW1lfSR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUnVsZVNldDtcblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vZGVzID0gc2VsZWN0b3JzUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgZmlyc3RTZWxlY3RvcnNOb2RlID0gZmlyc3Qoc2VsZWN0b3JzTm9kZXMpLFxuICAgICAgICBzZWxlY3RvcnNOb2RlID0gZmlyc3RTZWxlY3RvcnNOb2RlLCAvLy9cbiAgICAgICAgc2VsZWN0b3JzTm9kZUNvbnRlbnQgPSBhc0NvbnRlbnQoc2VsZWN0b3JzTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc2VsZWN0b3JzID0gYCR7c2VsZWN0b3JzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gc2VsZWN0b3JzO1xufVxuIl19