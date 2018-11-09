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

    var oldStyle = null,
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

      oldStyle = retrieveStyle(className);
    }

    className = generateClassName();

    generateStyle(args, className, oldStyle);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwidGFnTmFtZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlc0NTUyIsIndpdGhTdHlsZSIsIkNvbXBvbmVudE9yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwiaXNTdWJjbGFzc09mIiwiQ29tcG9uZW50IiwiYmluZCIsIm9sZFN0eWxlIiwiT2JqZWN0IiwiYXNzaWduIiwicmVuZGVyU3R5bGVzIiwic3R5bGVzQ1NTIiwiaW5uZXJIVE1MIiwiaGVhZERPTUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZURPTUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJyZXRyaWV2ZUNsYXNzTmFtZSIsImVsZW1lbnQiLCJyZWFjdEZ1bmN0aW9uIiwicmVhY3RDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImZvckVhY2giLCJ0YWdOYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJwcm9wcyIsImNoaWxkcmVuIiwibW9kdWxlIiwiZXhwb3J0cyIsImFyZ3VtZW50IiwiQ2xhc3MiLCJzdWJjbGFzcyIsIm5hbWUiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7O0FBRUEsSUFBTUMsV0FBV0QsUUFBUSxZQUFSLENBQWpCO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLG9CQUFSLENBRHhCO0FBQUEsSUFFTUcscUJBQXFCSCxRQUFRLHVCQUFSLENBRjNCOztBQUlNLElBQUVJLEtBQUYsR0FBWUwsUUFBWixDQUFFSyxLQUFGO0FBQUEsSUFDRUMsaUJBREYs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QUNELEdBRkQsTUFFTztBQUNMRixlQUFXeEIsT0FBTzRCLGNBQVAsQ0FBc0JKLFFBQXRCLENBQVgsQ0FESyxDQUN1Qzs7QUFFNUMsUUFBSUEsYUFBYSxJQUFqQixFQUF1QjtBQUNyQkUsaUJBQVc5QixhQUFhNEIsUUFBYixFQUF1QkMsS0FBdkIsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0MsUUFBUDtBQUNEIiwiZmlsZSI6IndpdGhTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCB0YWdOYW1lcyA9IHJlcXVpcmUoJy4vdGFnTmFtZXMnKSxcbiAgICAgIHN0eWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3N0eWxlcycpLFxuICAgICAgY2xhc3NOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvY2xhc3NOYW1lJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlLCByZXRyaWV2ZVN0eWxlc0NTUyB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ29tcG9uZW50T3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAgLy8vXG5cbiAgICBsZXQgb2xkU3R5bGUgPSBudWxsLFxuICAgICAgICB7IGNsYXNzTmFtZSB9ID0gQ29tcG9uZW50T3JGdW5jdGlvbjtcblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIENvbXBvbmVudE9yRnVuY3Rpb24gPSBpc1N1YmNsYXNzT2YoQ29tcG9uZW50T3JGdW5jdGlvbiwgUmVhY3QuQ29tcG9uZW50KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyBleHRlbmRzIENvbXBvbmVudE9yRnVuY3Rpb24ge30gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnRPckZ1bmN0aW9uLmJpbmQoe30pO1xuXG4gICAgICBvbGRTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIG9sZFN0eWxlKTtcblxuICAgIE9iamVjdC5hc3NpZ24oQ29tcG9uZW50T3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50T3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3R5bGVzKCkge1xuICBjb25zdCBzdHlsZXNDU1MgPSByZXRyaWV2ZVN0eWxlc0NTUygpLFxuICAgICAgICBpbm5lckhUTUwgPSBgXG4gICAgICAgIFxuJHtzdHlsZXNDU1N9YCxcbiAgICAgICAgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyksXG4gICAgICAgIHN0eWxlRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdHlsZURPTUVsZW1lbnQsIHtcbiAgICBpbm5lckhUTUxcbiAgfSk7XG5cbiAgaGVhZERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGVET01FbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVDbGFzc05hbWUoZWxlbWVudCkge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gZWxlbWVudC5yZWFjdEZ1bmN0aW9uIHx8IGVsZW1lbnQucmVhY3RDb21wb25lbnQuY29uc3RydWN0b3I7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGVzLFxuICByZXRyaWV2ZUNsYXNzTmFtZVxufSk7XG5cbnRhZ05hbWVzLmZvckVhY2goZnVuY3Rpb24odGFnTmFtZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoU3R5bGU7XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgICAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iXX0=