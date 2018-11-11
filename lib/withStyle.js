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
      ClassOrFunction = isSubclassOf(ClassOrFunction, React.Component) ? function (_ClassOrFunction2) {
        _inherits(_class, _ClassOrFunction2);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        return _class;
      }(ClassOrFunction) : ClassOrFunction.bind({});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwidGFnTmFtZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlc0NTUyIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJpc1N1YmNsYXNzT2YiLCJDb21wb25lbnQiLCJiaW5kIiwic3VwZXJTdHlsZSIsIk9iamVjdCIsImFzc2lnbiIsInJlbmRlclN0eWxlcyIsInN0eWxlc0NTUyIsImlubmVySFRNTCIsImhlYWRET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGVET01FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicmV0cmlldmVDbGFzc05hbWUiLCJlbGVtZW50IiwicmVhY3RGdW5jdGlvbiIsInJlYWN0Q29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiRnVuY3Rpb24iLCJwcm9wcyIsImNvbnRleHQiLCJjaGlsZHJlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcmd1bWVudCIsIkNsYXNzIiwic3ViY2xhc3MiLCJuYW1lIiwiZ2V0UHJvdG90eXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxVQUFSLENBQWpCOztBQUVBLElBQU1DLFdBQVdELFFBQVEsWUFBUixDQUFqQjtBQUFBLElBQ01FLGtCQUFrQkYsUUFBUSxvQkFBUixDQUR4QjtBQUFBLElBRU1HLHFCQUFxQkgsUUFBUSx1QkFBUixDQUYzQjs7QUFJTSxJQUFFSSxLQUFGLEdBQVlMLFFBQVosQ0FBRUssS0FB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T0FBUCxHQUFpQmxDLFNBQWpCOztBQUVBLFNBQVNLLFlBQVQsQ0FBc0I4QixRQUF0QixFQUFnQ0MsS0FBaEMsRUFBdUM7QUFDckMsTUFBSUMsV0FBVyxLQUFmOztBQUVBLE1BQUlGLFNBQVNHLElBQVQsS0FBa0JGLE1BQU1FLElBQTVCLEVBQWtDO0FBQUk7QUFDcENELGVBQVcsSUFBWDtBQUNELEdBRkQsTUFFTztBQUNMRixlQUFXMUIsT0FBTzhCLGNBQVAsQ0FBc0JKLFFBQXRCLENBQVgsQ0FESyxDQUN1Qzs7QUFFNUMsUUFBSUEsYUFBYSxJQUFqQixFQUF1QjtBQUNyQkUsaUJBQVdoQyxhQUFhOEIsUUFBYixFQUF1QkMsS0FBdkIsQ0FBWDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0MsUUFBUDtBQUNEIiwiZmlsZSI6IndpdGhTdHlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpO1xuXG5jb25zdCB0YWdOYW1lcyA9IHJlcXVpcmUoJy4vdGFnTmFtZXMnKSxcbiAgICAgIHN0eWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3N0eWxlcycpLFxuICAgICAgY2xhc3NOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvY2xhc3NOYW1lJyk7XG5cbmNvbnN0IHsgUmVhY3QgfSA9IHJlYWN0aW9uLFxuICAgICAgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlLCByZXRyaWV2ZVN0eWxlc0NTUyB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCBzdXBlclN0eWxlID0gbnVsbCxcbiAgICAgICAgeyBjbGFzc05hbWUgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGlzU3ViY2xhc3NPZihDbGFzc09yRnVuY3Rpb24sIFJlYWN0LkNvbXBvbmVudCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyBleHRlbmRzIENsYXNzT3JGdW5jdGlvbiB7fSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xhc3NPckZ1bmN0aW9uLmJpbmQoe30pO1xuXG4gICAgICBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW5kZXJTdHlsZXMoKSB7XG4gIGNvbnN0IHN0eWxlc0NTUyA9IHJldHJpZXZlU3R5bGVzQ1NTKCksXG4gICAgICAgIGlubmVySFRNTCA9IGBcbiAgICAgICAgXG4ke3N0eWxlc0NTU31gLFxuICAgICAgICBoZWFkRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKSxcbiAgICAgICAgc3R5bGVET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBPYmplY3QuYXNzaWduKHN0eWxlRE9NRWxlbWVudCwge1xuICAgIGlubmVySFRNTFxuICB9KTtcblxuICBoZWFkRE9NRWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZURPTUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZXRyaWV2ZUNsYXNzTmFtZShlbGVtZW50KSB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBlbGVtZW50LnJlYWN0RnVuY3Rpb24gfHwgZWxlbWVudC5yZWFjdENvbXBvbmVudC5jb25zdHJ1Y3RvcjtcblxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZXMsXG4gIHJldHJpZXZlQ2xhc3NOYW1lXG59KTtcblxudGFnTmFtZXMuZm9yRWFjaChmdW5jdGlvbih0YWdOYW1lKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJldHJpZXZlQ2xhc3NOYW1lKGVsZW1lbnQpLFxuICAgICAgICAgICAgICB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2NsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWV9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFN0eWxlO1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7ICAgLy8vXG4gICAgc3ViY2xhc3MgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YmNsYXNzID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YmNsYXNzO1xufVxuIl19