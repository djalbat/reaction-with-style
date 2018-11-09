'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction');

var tagNames = require('./tagNames'),
    stylesUtilities = require('./utilities/styles'),
    classNameUtilities = require('./utilities/className');

var React = reaction.React,
    generateClassName = classNameUtilities.generateClassName,
    generateStyle = stylesUtilities.generateStyle,
    retrieveStyle = stylesUtilities.retrieveStyle,
    retrieveStylesCSS = stylesUtilities.retrieveStylesCSS;


function withStyle(ComponentOrFunction) {
  return function () {
    var args = [].concat(Array.prototype.slice.call(arguments)); ///

    var superStyle = null,
        _ComponentOrFunction = ComponentOrFunction,
        className = _ComponentOrFunction.className;


    if (className) {
      ComponentOrFunction = isSubclassOf(ComponentOrFunction, React.Component) ? function (_ComponentOrFunction2) {
        _inherits(_class, _ComponentOrFunction2);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        return _class;
      }(ComponentOrFunction) : ComponentOrFunction.bind({});

      superStyle = retrieveStyle(className);
    }

    className = generateClassName();

    generateStyle(args, className, superStyle);

    Object.assign(ComponentOrFunction, {
      className: className
    });

    return ComponentOrFunction;
  };
}

function renderStyles() {
  var stylesCSS = retrieveStylesCSS(),
      innerHTML = '\n        \n' + stylesCSS,
      headDOMElement = document.querySelector('head'),
      styleDOMElement = document.createElement('style');

  Object.assign(styleDOMElement, {
    innerHTML: innerHTML
  });

  headDOMElement.appendChild(styleDOMElement);
}

function retrieveClassName(element) {
  var _ref = element.reactFunction || element.reactComponent.constructor,
      className = _ref.className;

  return className;
}

Object.assign(withStyle, {
  renderStyles: renderStyles,
  retrieveClassName: retrieveClassName
});

tagNames.forEach(function (tagName) {
  Object.defineProperty(withStyle, tagName, {
    get: function get() {
      return function () {
        var args = [].concat(Array.prototype.slice.call(arguments)),
            ///
        className = generateClassName();

        generateStyle(args, className);

        return function (props) {
          var children = props.children;


          props.className = props.className ? className + ' ' + props.className : className;

          return React.createElement.apply(React, [tagName, props].concat(_toConsumableArray(children)));
        };
      };
    }
  });
});

module.exports = withStyle;

function isSubclassOf(argument, Class) {
  var subclass = false;

  if (argument.name === Class.name) {
    ///
    subclass = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      subclass = isSubclassOf(argument, Class);
    }
  }

  return subclass;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwidGFnTmFtZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlc0NTUyIsIndpdGhTdHlsZSIsIkNvbXBvbmVudE9yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwiaXNTdWJjbGFzc09mIiwiQ29tcG9uZW50IiwiYmluZCIsInN1cGVyU3R5bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJyZW5kZXJTdHlsZXMiLCJzdHlsZXNDU1MiLCJpbm5lckhUTUwiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlRE9NRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJldHJpZXZlQ2xhc3NOYW1lIiwiZWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdENvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInByb3BzIiwiY2hpbGRyZW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJndW1lbnQiLCJDbGFzcyIsInN1YmNsYXNzIiwibmFtZSIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFQSxJQUFNQyxXQUFXRCxRQUFRLFlBQVIsQ0FBakI7QUFBQSxJQUNNRSxrQkFBa0JGLFFBQVEsb0JBQVIsQ0FEeEI7QUFBQSxJQUVNRyxxQkFBcUJILFFBQVEsdUJBQVIsQ0FGM0I7O0FBSU0sSUFBRUksS0FBRixHQUFZTCxRQUFaLENBQUVLLEtBQUY7QUFBQSxJQUNFQyxpQkFE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O0FBQ0QsR0FGRCxNQUVPO0FBQ0xGLGVBQVd4QixPQUFPNEIsY0FBUCxDQUFzQkosUUFBdEIsQ0FBWCxDQURLLENBQ3VDOztBQUU1QyxRQUFJQSxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCRSxpQkFBVzlCLGFBQWE0QixRQUFiLEVBQXVCQyxLQUF2QixDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPQyxRQUFQO0FBQ0QiLCJmaWxlIjoid2l0aFN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IHRhZ05hbWVzID0gcmVxdWlyZSgnLi90YWdOYW1lcycpLFxuICAgICAgc3R5bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvc3R5bGVzJyksXG4gICAgICBjbGFzc05hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9jbGFzc05hbWUnKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IGdlbmVyYXRlQ2xhc3NOYW1lIH0gPSBjbGFzc05hbWVVdGlsaXRpZXMsXG4gICAgICB7IGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUsIHJldHJpZXZlU3R5bGVzQ1NTIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDb21wb25lbnRPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCBzdXBlclN0eWxlID0gbnVsbCxcbiAgICAgICAgeyBjbGFzc05hbWUgfSA9IENvbXBvbmVudE9yRnVuY3Rpb247XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBDb21wb25lbnRPckZ1bmN0aW9uID0gaXNTdWJjbGFzc09mKENvbXBvbmVudE9yRnVuY3Rpb24sIFJlYWN0LkNvbXBvbmVudCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnRPckZ1bmN0aW9uIHt9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50T3JGdW5jdGlvbi5iaW5kKHt9KTtcblxuICAgICAgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihDb21wb25lbnRPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDb21wb25lbnRPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdHlsZXMoKSB7XG4gIGNvbnN0IHN0eWxlc0NTUyA9IHJldHJpZXZlU3R5bGVzQ1NTKCksXG4gICAgICAgIGlubmVySFRNTCA9IGBcbiAgICAgICAgXG4ke3N0eWxlc0NTU31gLFxuICAgICAgICBoZWFkRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKSxcbiAgICAgICAgc3R5bGVET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBPYmplY3QuYXNzaWduKHN0eWxlRE9NRWxlbWVudCwge1xuICAgIGlubmVySFRNTFxuICB9KTtcblxuICBoZWFkRE9NRWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZURPTUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUNsYXNzTmFtZShlbGVtZW50KSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBlbGVtZW50LnJlYWN0RnVuY3Rpb24gfHwgZWxlbWVudC5yZWFjdENvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZXMsXG4gIHJldHJpZXZlQ2xhc3NOYW1lXG59KTtcblxudGFnTmFtZXMuZm9yRWFjaChmdW5jdGlvbih0YWdOYW1lKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhTdHlsZTtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgc3ViY2xhc3MgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAgIC8vL1xuICAgIHN1YmNsYXNzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdWJjbGFzcyA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzcztcbn1cbiJdfQ==