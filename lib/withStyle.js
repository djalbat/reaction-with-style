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


function withStyle(ClassOrFunction) {
  return function () {
    var args = [].concat(Array.prototype.slice.call(arguments)); ///

    var superStyle = null,
        _ClassOrFunction = ClassOrFunction,
        className = _ClassOrFunction.className;


    if (className) {
      ClassOrFunction = isClass(ClassOrFunction) ? function (_ClassOrFunction2) {
        _inherits(_class, _ClassOrFunction2);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        return _class;
      }(ClassOrFunction) : ///
      ClassOrFunction.bind({}); ///

      superStyle = retrieveStyle(className);
    }

    className = generateClassName();

    generateStyle(args, className, superStyle);

    Object.assign(ClassOrFunction, {
      className: className
    });

    return ClassOrFunction;
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

        var Function = function Function(props, context, element) {
          var className = retrieveClassName(element),
              children = props.children;


          props.className = className + ' ' + (props.className || ''); ///

          return React.createElement.apply(React, [tagName, props].concat(_toConsumableArray(children)));
        };

        Object.assign(Function, {
          className: className
        });

        return Function;
      };
    }
  });
});

module.exports = withStyle;

function isClass(argument) {
  return isSubclassOf(argument, React.Component);
} ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwidGFnTmFtZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlc0NTUyIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJpc0NsYXNzIiwiYmluZCIsInN1cGVyU3R5bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJyZW5kZXJTdHlsZXMiLCJzdHlsZXNDU1MiLCJpbm5lckhUTUwiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlRE9NRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJldHJpZXZlQ2xhc3NOYW1lIiwiZWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdENvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIkZ1bmN0aW9uIiwicHJvcHMiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJndW1lbnQiLCJpc1N1YmNsYXNzT2YiLCJDb21wb25lbnQiLCJDbGFzcyIsInN1YmNsYXNzIiwibmFtZSIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFQSxJQUFNQyxXQUFXRCxRQUFRLFlBQVIsQ0FBakI7QUFBQSxJQUNNRSxrQkFBa0JGLFFBQVEsb0JBQVIsQ0FEeEI7QUFBQSxJQUVNRyxxQkFBcUJILFFBQVEsdUJBQVIsQ0FGM0I7O0FBSU0sSUFBRUksS0FBRixHQUFZTCxRQUFa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T0MsT0FBUCxHQUFpQmpDLFNBQWpCOztBQUVBLFNBQVNLLE9BQVQsQ0FBaUI2QixRQUFqQixFQUEyQjtBQUFFLFNBQU9DLGFBQWFELFFBQWIsRUFBdUJ2QyxNQUFNeUMsU0FBN0IsQ0FBUDtBQUFpRCxDLENBQUU7O0FBRWhGLFNBQVNELFlBQVQsQ0FBc0JELFFBQXRCLEVBQWdDRyxLQUFoQyxFQUF1QztBQUNyQyxNQUFJQyxXQUFXLEtBQWY7O0FBRUEsTUFBSUosU0FBU0ssSUFBVCxLQUFrQkYsTUFBTUUsSUFBNUIsRUFBa0M7QUFBSTtBQUNwQ0QsZUFBVyxJQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0xKLGVBQVcxQixPQUFPZ0MsY0FBUCxDQUFzQk4sUUFBdEIsQ0FBWCxDQURLLENBQ3VDOztBQUU1QyxRQUFJQSxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCSSxpQkFBV0gsYUFBYUQsUUFBYixFQUF1QkcsS0FBdkIsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0MsUUFBUDtBQUNEIiwiZmlsZSI6IndpdGhTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCB0YWdOYW1lcyA9IHJlcXVpcmUoJy4vdGFnTmFtZXMnKSxcbiAgICAgIHN0eWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3N0eWxlcycpLFxuICAgICAgY2xhc3NOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvY2xhc3NOYW1lJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlLCByZXRyaWV2ZVN0eWxlc0NTUyB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCBzdXBlclN0eWxlID0gbnVsbCxcbiAgICAgICAgeyBjbGFzc05hbWUgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzIGV4dGVuZHMgQ2xhc3NPckZ1bmN0aW9uIHt9IDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xhc3NPckZ1bmN0aW9uLmJpbmQoe30pOyAvLy9cblxuICAgICAgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3R5bGVzKCkge1xuICBjb25zdCBzdHlsZXNDU1MgPSByZXRyaWV2ZVN0eWxlc0NTUygpLFxuICAgICAgICBpbm5lckhUTUwgPSBgXG4gICAgICAgIFxuJHtzdHlsZXNDU1N9YCxcbiAgICAgICAgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyksXG4gICAgICAgIHN0eWxlRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdHlsZURPTUVsZW1lbnQsIHtcbiAgICBpbm5lckhUTUxcbiAgfSk7XG5cbiAgaGVhZERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGVET01FbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVDbGFzc05hbWUoZWxlbWVudCkge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gZWxlbWVudC5yZWFjdEZ1bmN0aW9uIHx8IGVsZW1lbnQucmVhY3RDb21wb25lbnQuY29uc3RydWN0b3I7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGVzLFxuICByZXRyaWV2ZUNsYXNzTmFtZVxufSk7XG5cbnRhZ05hbWVzLmZvckVhY2goZnVuY3Rpb24odGFnTmFtZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSByZXRyaWV2ZUNsYXNzTmFtZShlbGVtZW50KSxcbiAgICAgICAgICAgICAgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICAgICAgcHJvcHMuY2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZSB8fCAnJ31gO1x0Ly8vXG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoU3R5bGU7XG5cbmZ1bmN0aW9uIGlzQ2xhc3MoYXJndW1lbnQpIHsgcmV0dXJuIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgUmVhY3QuQ29tcG9uZW50KTsgfSAgLy8vXG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgICAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iXX0=