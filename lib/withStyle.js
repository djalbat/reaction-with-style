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


function withStyle(_ClassOrFunction2) {
  return function () {
    var args = [].concat(Array.prototype.slice.call(arguments)); ///

    var superStyle = null,
        _ClassOrFunction = _ClassOrFunction2,
        className = _ClassOrFunction.className;


    if (className) {
      if (isClass(_ClassOrFunction2)) {
        if (_ClassOrFunction2.hasOwnProperty('className')) {
          _ClassOrFunction2 = function (_ClassOrFunction3) {
            _inherits(ClassOrFunction, _ClassOrFunction3);

            function ClassOrFunction() {
              _classCallCheck(this, ClassOrFunction);

              return _possibleConstructorReturn(this, (ClassOrFunction.__proto__ || Object.getPrototypeOf(ClassOrFunction)).apply(this, arguments));
            }

            return ClassOrFunction;
          }(_ClassOrFunction2); ///
        }
      } else {
        _ClassOrFunction2 = _ClassOrFunction2.bind({}); ///
      }

      superStyle = retrieveStyle(className);
    }

    className = generateClassName();

    generateStyle(args, className, superStyle);

    Object.assign(_ClassOrFunction2, {
      className: className
    });

    return _ClassOrFunction2;
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


          props.className = props.className ? className + ' ' + props.className : className;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwidGFnTmFtZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlc0NTUyIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJpc0NsYXNzIiwiaGFzT3duUHJvcGVydHkiLCJiaW5kIiwic3VwZXJTdHlsZSIsIk9iamVjdCIsImFzc2lnbiIsInJlbmRlclN0eWxlcyIsInN0eWxlc0NTUyIsImlubmVySFRNTCIsImhlYWRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGVET01FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmV0cmlldmVDbGFzc05hbWUiLCJlbGVtZW50IiwicmVhY3RGdW5jdGlvbiIsInJlYWN0Q29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiRnVuY3Rpb24iLCJwcm9wcyIsImNvbnRleHQiLCJjaGlsZHJlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcmd1bWVudCIsImlzU3ViY2xhc3NPZiIsIkNvbXBvbmVudCIsIkNsYXNzIiwic3ViY2xhc3MiLCJuYW1lIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQU1DLFdBQVdELFFBQVEsWUFBUixDQUFqQjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSxvQkFBUixDQUR4QjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx1QkFBUixDQUYzQjs7QUFJTSxJQUFF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LFNBVEQ7O0FBV0F2QixlQUFPQyxNQUFQLENBQWNtQixRQUFkLEVBQXdCO0FBQ3RCekI7QUFEc0IsU0FBeEI7O0FBSUEsZUFBT3lCLFFBQVA7QUFDRCxPQXRCSTtBQUFBO0FBRG1DLEdBQTFDO0FBeUJELENBMUJEOztBQTRCQUksT0FBT0MsT0FBUCxHQUFpQmxDLFNBQWpCOztBQUVBLFNBQVNLLE9BQVQsQ0FBaUI4QixRQUFqQixFQUEyQjtBQUFFLFNBQU9DLGFBQWFELFFBQWIsRUFBdUJ4QyxNQUFNMEMsU0FBN0IsQ0FBUDtBQUFpRCxDLENBQUU7O0FBRWhGLFNBQVNELFlBQVQsQ0FBc0JELFFBQXRCLEVBQWdDRyxLQUFoQyxFQUF1QztBQUNyQyxNQUFJQyxXQUFXLEtBQWY7O0FBRUEsTUFBSUosU0FBU0ssSUFBVCxLQUFrQkYsTUFBTUUsSUFBNUIsRUFBa0M7QUFBSTtBQUNwQ0QsZUFBVyxJQUFYO0FBQ0QsR0FGRCxNQUVPO0FBQ0xKLGVBQVcxQixPQUFPZ0MsY0FBUCxDQUFzQk4sUUFBdEIsQ0FBWCxDQURLLENBQ3VDOztBQUU1QyxRQUFJQSxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCSSxpQkFBV0gsYUFBYUQsUUFBYixFQUF1QkcsS0FBdkIsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0MsUUFBUDtBQUNEIiwiZmlsZSI6IndpdGhTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCB0YWdOYW1lcyA9IHJlcXVpcmUoJy4vdGFnTmFtZXMnKSxcbiAgICAgIHN0eWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3N0eWxlcycpLFxuICAgICAgY2xhc3NOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvY2xhc3NOYW1lJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlLCByZXRyaWV2ZVN0eWxlc0NTUyB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCBzdXBlclN0eWxlID0gbnVsbCxcbiAgICAgICAgeyBjbGFzc05hbWUgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGlmIChpc0NsYXNzKENsYXNzT3JGdW5jdGlvbikpIHtcbiAgICAgICAgaWYgKENsYXNzT3JGdW5jdGlvbi5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykpIHtcbiAgICAgICAgICBDbGFzc09yRnVuY3Rpb24gPSBjbGFzcyBleHRlbmRzIENsYXNzT3JGdW5jdGlvbiB7fTsgLy8vXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIENsYXNzT3JGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbi5iaW5kKHt9KTsgLy8vXG4gICAgICB9XG5cbiAgICAgIHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0eWxlcygpIHtcbiAgY29uc3Qgc3R5bGVzQ1NTID0gcmV0cmlldmVTdHlsZXNDU1MoKSxcbiAgICAgICAgaW5uZXJIVE1MID0gYFxuICAgICAgICBcbiR7c3R5bGVzQ1NTfWAsXG4gICAgICAgIGhlYWRET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLFxuICAgICAgICBzdHlsZURPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3R5bGVET01FbGVtZW50LCB7XG4gICAgaW5uZXJIVE1MXG4gIH0pO1xuXG4gIGhlYWRET01FbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlRE9NRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlQ2xhc3NOYW1lKGVsZW1lbnQpIHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IGVsZW1lbnQucmVhY3RGdW5jdGlvbiB8fCBlbGVtZW50LnJlYWN0Q29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlcyxcbiAgcmV0cmlldmVDbGFzc05hbWVcbn0pO1xuXG50YWdOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHRhZ05hbWUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpdGhTdHlsZSwgdGFnTmFtZSwge1xuICAgIGdldDogKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c10sICAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmV0cmlldmVDbGFzc05hbWUoZWxlbWVudCksXG4gICAgICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoU3R5bGU7XG5cbmZ1bmN0aW9uIGlzQ2xhc3MoYXJndW1lbnQpIHsgcmV0dXJuIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgUmVhY3QuQ29tcG9uZW50KTsgfSAgLy8vXG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgICAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iXX0=