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

function appendStyles() {
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
  appendStyles: appendStyles,
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

  if (argument === Class) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWFjdGlvbiIsInJlcXVpcmUiLCJ0YWdOYW1lcyIsInN0eWxlc1V0aWxpdGllcyIsImNsYXNzTmFtZVV0aWxpdGllcyIsIlJlYWN0IiwiZ2VuZXJhdGVDbGFzc05hbWUiLCJnZW5lcmF0ZVN0eWxlIiwicmV0cmlldmVTdHlsZSIsInJldHJpZXZlU3R5bGVzQ1NTIiwid2l0aFN0eWxlIiwiQ29tcG9uZW50T3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJpc1N1YmNsYXNzT2YiLCJDb21wb25lbnQiLCJiaW5kIiwib2xkU3R5bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJhcHBlbmRTdHlsZXMiLCJzdHlsZXNDU1MiLCJpbm5lckhUTUwiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlRE9NRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJldHJpZXZlQ2xhc3NOYW1lIiwiZWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdENvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInByb3BzIiwiY2hpbGRyZW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJndW1lbnQiLCJDbGFzcyIsInN1YmNsYXNzIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQU1DLFdBQVdELFFBQVEsWUFBUixDQUFqQjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSxvQkFBUixDQUR4QjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx1QkFBUixDQUYzQjs7QUFJTSxJQUFFSSxLQUFGLEdBQVlMLFFBQVosQ0FBRUssS0FBRjtBQUFBLElBQ0VDLGlCQURGLEdBQ3dCRixrQkFE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QU8yQixjQUFQLENBQXNCSCxRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLGFBQWEsSUFBakIsRUFBdUI7QUFDckJFLGlCQUFXOUIsYUFBYTRCLFFBQWIsRUFBdUJDLEtBQXZCLENBQVg7QUFDRDtBQUNGOztBQUVELFNBQU9DLFFBQVA7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCB0YWdOYW1lcyA9IHJlcXVpcmUoJy4vdGFnTmFtZXMnKSxcbiAgICAgIHN0eWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3N0eWxlcycpLFxuICAgICAgY2xhc3NOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvY2xhc3NOYW1lJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlLCByZXRyaWV2ZVN0eWxlc0NTUyB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ29tcG9uZW50T3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAgLy8vXG5cbiAgICBsZXQgb2xkU3R5bGUgPSBudWxsLFxuICAgICAgICB7IGNsYXNzTmFtZSB9ID0gQ29tcG9uZW50T3JGdW5jdGlvbjtcblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIENvbXBvbmVudE9yRnVuY3Rpb24gPSBpc1N1YmNsYXNzT2YoQ29tcG9uZW50T3JGdW5jdGlvbiwgUmVhY3QuQ29tcG9uZW50KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyBleHRlbmRzIENvbXBvbmVudE9yRnVuY3Rpb24ge30gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnRPckZ1bmN0aW9uLmJpbmQoe30pO1xuXG4gICAgICBvbGRTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIG9sZFN0eWxlKTtcblxuICAgIE9iamVjdC5hc3NpZ24oQ29tcG9uZW50T3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ29tcG9uZW50T3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kU3R5bGVzKCkge1xuICBjb25zdCBzdHlsZXNDU1MgPSByZXRyaWV2ZVN0eWxlc0NTUygpLFxuICAgICAgICBpbm5lckhUTUwgPSBgXG4gICAgICAgIFxuJHtzdHlsZXNDU1N9YCxcbiAgICAgICAgaGVhZERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyksXG4gICAgICAgIHN0eWxlRE9NRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgT2JqZWN0LmFzc2lnbihzdHlsZURPTUVsZW1lbnQsIHtcbiAgICBpbm5lckhUTUxcbiAgfSk7XG5cbiAgaGVhZERPTUVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGVET01FbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVDbGFzc05hbWUoZWxlbWVudCkge1xuICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gZWxlbWVudC5yZWFjdEZ1bmN0aW9uIHx8IGVsZW1lbnQucmVhY3RDb21wb25lbnQuY29uc3RydWN0b3I7XG5cbiAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgYXBwZW5kU3R5bGVzLFxuICByZXRyaWV2ZUNsYXNzTmFtZVxufSk7XG5cbnRhZ05hbWVzLmZvckVhY2goZnVuY3Rpb24odGFnTmFtZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICByZXR1cm4gKHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoU3R5bGU7XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBDbGFzcykgeyAgIC8vL1xuICAgIHN1YmNsYXNzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdWJjbGFzcyA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzcztcbn1cbiJdfQ==