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
        if (Object.hasOwnProperty(_ClassOrFunction2, 'className')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwidGFnTmFtZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlc0NTUyIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJpc0NsYXNzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJiaW5kIiwic3VwZXJTdHlsZSIsImFzc2lnbiIsInJlbmRlclN0eWxlcyIsInN0eWxlc0NTUyIsImlubmVySFRNTCIsImhlYWRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGVET01FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmV0cmlldmVDbGFzc05hbWUiLCJlbGVtZW50IiwicmVhY3RGdW5jdGlvbiIsInJlYWN0Q29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiRnVuY3Rpb24iLCJwcm9wcyIsImNvbnRleHQiLCJjaGlsZHJlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcmd1bWVudCIsImlzU3ViY2xhc3NPZiIsIkNvbXBvbmVudCIsIkNsYXNzIiwic3ViY2xhc3MiLCJuYW1lIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQU1DLFdBQVdELFFBQVEsWUFBUixDQUFqQjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSxvQkFBUixDQUR4QjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx1QkFBUixDQUYzQjs7QUFJTSxJQUFF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QyxHQUFQO0FBQ0QsU0FURDs7QUFXQTFCLGVBQU9JLE1BQVAsQ0FBY21CLFFBQWQsRUFBd0I7QUFDdEJ6QjtBQURzQixTQUF4Qjs7QUFJQSxlQUFPeUIsUUFBUDtBQUNELE9BdEJJO0FBQUE7QUFEbUMsR0FBMUM7QUF5QkQsQ0ExQkQ7O0FBNEJBSSxPQUFPQyxPQUFQLEdBQWlCbEMsU0FBakI7O0FBRUEsU0FBU0ssT0FBVCxDQUFpQjhCLFFBQWpCLEVBQTJCO0FBQUUsU0FBT0MsYUFBYUQsUUFBYixFQUF1QnhDLE1BQU0wQyxTQUE3QixDQUFQO0FBQWlELEMsQ0FBRTs7QUFFaEYsU0FBU0QsWUFBVCxDQUFzQkQsUUFBdEIsRUFBZ0NHLEtBQWhDLEVBQXVDO0FBQ3JDLE1BQUlDLFdBQVcsS0FBZjs7QUFFQSxNQUFJSixTQUFTSyxJQUFULEtBQWtCRixNQUFNRSxJQUE1QixFQUFrQztBQUFJO0FBQ3BDRCxlQUFXLElBQVg7QUFDRCxHQUZELE1BRU87QUFDTEosZUFBVzdCLE9BQU9tQyxjQUFQLENBQXNCTixRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLGFBQWEsSUFBakIsRUFBdUI7QUFDckJJLGlCQUFXSCxhQUFhRCxRQUFiLEVBQXVCRyxLQUF2QixDQUFYO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPQyxRQUFQO0FBQ0QiLCJmaWxlIjoid2l0aFN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyk7XG5cbmNvbnN0IHRhZ05hbWVzID0gcmVxdWlyZSgnLi90YWdOYW1lcycpLFxuICAgICAgc3R5bGVzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvc3R5bGVzJyksXG4gICAgICBjbGFzc05hbWVVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9jbGFzc05hbWUnKTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IGdlbmVyYXRlQ2xhc3NOYW1lIH0gPSBjbGFzc05hbWVVdGlsaXRpZXMsXG4gICAgICB7IGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUsIHJldHJpZXZlU3R5bGVzQ1NTIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDbGFzc09yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgIC8vL1xuXG4gICAgbGV0IHN1cGVyU3R5bGUgPSBudWxsLFxuICAgICAgICB7IGNsYXNzTmFtZSB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgaWYgKGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKSkge1xuICAgICAgICBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5KENsYXNzT3JGdW5jdGlvbiwgJ2NsYXNzTmFtZScpKSB7XG4gICAgICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzc09yRnVuY3Rpb24ge307IC8vL1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBDbGFzc09yRnVuY3Rpb24gPSBDbGFzc09yRnVuY3Rpb24uYmluZCh7fSk7IC8vL1xuICAgICAgfVxuXG4gICAgICBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdHlsZXMoKSB7XG4gIGNvbnN0IHN0eWxlc0NTUyA9IHJldHJpZXZlU3R5bGVzQ1NTKCksXG4gICAgICAgIGlubmVySFRNTCA9IGBcbiAgICAgICAgXG4ke3N0eWxlc0NTU31gLFxuICAgICAgICBoZWFkRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKSxcbiAgICAgICAgc3R5bGVET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBPYmplY3QuYXNzaWduKHN0eWxlRE9NRWxlbWVudCwge1xuICAgIGlubmVySFRNTFxuICB9KTtcblxuICBoZWFkRE9NRWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZURPTUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUNsYXNzTmFtZShlbGVtZW50KSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBlbGVtZW50LnJlYWN0RnVuY3Rpb24gfHwgZWxlbWVudC5yZWFjdENvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZXMsXG4gIHJldHJpZXZlQ2xhc3NOYW1lXG59KTtcblxudGFnTmFtZXMuZm9yRWFjaChmdW5jdGlvbih0YWdOYW1lKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJldHJpZXZlQ2xhc3NOYW1lKGVsZW1lbnQpLFxuICAgICAgICAgICAgICB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFN0eWxlO1xuXG5mdW5jdGlvbiBpc0NsYXNzKGFyZ3VtZW50KSB7IHJldHVybiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIFJlYWN0LkNvbXBvbmVudCk7IH0gIC8vL1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7ICAgLy8vXG4gICAgc3ViY2xhc3MgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YmNsYXNzID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YmNsYXNzO1xufVxuIl19