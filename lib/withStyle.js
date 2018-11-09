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

        return function (props, context, element) {
          var className = retrieveClassName(element),
              children = props.children;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwidGFnTmFtZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlc0NTUyIsIndpdGhTdHlsZSIsIkNvbXBvbmVudE9yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwiaXNTdWJjbGFzc09mIiwiQ29tcG9uZW50IiwiYmluZCIsInN1cGVyU3R5bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJyZW5kZXJTdHlsZXMiLCJzdHlsZXNDU1MiLCJpbm5lckhUTUwiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlRE9NRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJldHJpZXZlQ2xhc3NOYW1lIiwiZWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdENvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInByb3BzIiwiY29udGV4dCIsImNoaWxkcmVuIiwibW9kdWxlIiwiZXhwb3J0cyIsImFyZ3VtZW50IiwiQ2xhc3MiLCJzdWJjbGFzcyIsIm5hbWUiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7O0FBRUEsSUFBTUMsV0FBV0QsUUFBUSxZQUFSLENBQWpCO0FBQUEsSUFDTUUsa0JBQWtCRixRQUFRLG9CQUFSLENBRHhCO0FBQUEsSUFFTUcscUJBQXFCSCxRQUFRLHVCQUFSLENBRjNCOztBQUlNLElBQUVJLEtBQUYsR0FBWUwsUUFBWixDQUFFSyxLQUFGO0FBQUEs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QUVBLE1BQUlGLFNBQVNHLElBQVQsS0FBa0JGLE1BQU1FLElBQTVCLEVBQWtDO0FBQUk7QUFDcENELGVBQVcsSUFBWDtBQUNELEdBRkQsTUFFTztBQUNMRixlQUFXekIsT0FBTzZCLGNBQVAsQ0FBc0JKLFFBQXRCLENBQVgsQ0FESyxDQUN1Qzs7QUFFNUMsUUFBSUEsYUFBYSxJQUFqQixFQUF1QjtBQUNyQkUsaUJBQVcvQixhQUFhNkIsUUFBYixFQUF1QkMsS0FBdkIsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0MsUUFBUDtBQUNEIiwiZmlsZSI6IndpdGhTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCB0YWdOYW1lcyA9IHJlcXVpcmUoJy4vdGFnTmFtZXMnKSxcbiAgICAgIHN0eWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3N0eWxlcycpLFxuICAgICAgY2xhc3NOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvY2xhc3NOYW1lJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlLCByZXRyaWV2ZVN0eWxlc0NTUyB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ29tcG9uZW50T3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAgLy8vXG5cbiAgICBsZXQgc3VwZXJTdHlsZSA9IG51bGwsXG4gICAgICAgIHsgY2xhc3NOYW1lIH0gPSBDb21wb25lbnRPckZ1bmN0aW9uO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgQ29tcG9uZW50T3JGdW5jdGlvbiA9IGlzU3ViY2xhc3NPZihDb21wb25lbnRPckZ1bmN0aW9uLCBSZWFjdC5Db21wb25lbnQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50T3JGdW5jdGlvbiB7fSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBvbmVudE9yRnVuY3Rpb24uYmluZCh7fSk7XG5cbiAgICAgIHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIE9iamVjdC5hc3NpZ24oQ29tcG9uZW50T3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50T3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3R5bGVzKCkge1xuICBjb25zdCBzdHlsZXNDU1MgPSByZXRyaWV2ZVN0eWxlc0NTUygpLFxuICAgICAgICBpbm5lckhUTUwgPSBgXG4gICAgICAgIFxuJHtzdHlsZXNDU1N9YCxcbiAgICAgICAgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyksXG4gICAgICAgIHN0eWxlRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdHlsZURPTUVsZW1lbnQsIHtcbiAgICBpbm5lckhUTUxcbiAgfSk7XG5cbiAgaGVhZERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGVET01FbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVDbGFzc05hbWUoZWxlbWVudCkge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gZWxlbWVudC5yZWFjdEZ1bmN0aW9uIHx8IGVsZW1lbnQucmVhY3RDb21wb25lbnQuY29uc3RydWN0b3I7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGVzLFxuICByZXRyaWV2ZUNsYXNzTmFtZVxufSk7XG5cbnRhZ05hbWVzLmZvckVhY2goZnVuY3Rpb24odGFnTmFtZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICByZXR1cm4gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJldHJpZXZlQ2xhc3NOYW1lKGVsZW1lbnQpLFxuICAgICAgICAgICAgICB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wcywgLi4uY2hpbGRyZW4pO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFN0eWxlO1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7ICAgLy8vXG4gICAgc3ViY2xhc3MgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YmNsYXNzID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YmNsYXNzO1xufVxuIl19