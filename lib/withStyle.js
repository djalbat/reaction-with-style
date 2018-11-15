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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwidGFnTmFtZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImdlbmVyYXRlQ2xhc3NOYW1lIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlc0NTUyIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJpc0NsYXNzIiwiYmluZCIsInN1cGVyU3R5bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJyZW5kZXJTdHlsZXMiLCJzdHlsZXNDU1MiLCJpbm5lckhUTUwiLCJoZWFkRE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlRE9NRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInJldHJpZXZlQ2xhc3NOYW1lIiwiZWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdENvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIkZ1bmN0aW9uIiwicHJvcHMiLCJjb250ZXh0IiwiY2hpbGRyZW4iLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJndW1lbnQiLCJpc1N1YmNsYXNzT2YiLCJDb21wb25lbnQiLCJDbGFzcyIsInN1YmNsYXNzIiwibmFtZSIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVdDLFFBQVEsVUFBUixDQUFqQjs7QUFFQSxJQUFNQyxXQUFXRCxRQUFRLFlBQVIsQ0FBakI7QUFBQSxJQUNNRSxrQkFBa0JGLFFBQVEsb0JBQVIsQ0FEeEI7QUFBQSxJQUVNRyxxQkFBcUJILFFBQVEsdUJBQVIsQ0FGM0I7O0FBSU0sSUFBRUksS0FBRixHQUFZTCxRQUFa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QkFJLE9BQU9DLE9BQVAsR0FBaUJqQyxTQUFqQjs7QUFFQSxTQUFTSyxPQUFULENBQWlCNkIsUUFBakIsRUFBMkI7QUFBRSxTQUFPQyxhQUFhRCxRQUFiLEVBQXVCdkMsTUFBTXlDLFNBQTdCLENBQVA7QUFBaUQsQyxDQUFFOztBQUVoRixTQUFTRCxZQUFULENBQXNCRCxRQUF0QixFQUFnQ0csS0FBaEMsRUFBdUM7QUFDckMsTUFBSUMsV0FBVyxLQUFmOztBQUVBLE1BQUlKLFNBQVNLLElBQVQsS0FBa0JGLE1BQU1FLElBQTVCLEVBQWtDO0FBQUk7QUFDcENELGVBQVcsSUFBWDtBQUNELEdBRkQsTUFFTztBQUNMSixlQUFXMUIsT0FBT2dDLGNBQVAsQ0FBc0JOLFFBQXRCLENBQVgsQ0FESyxDQUN1Qzs7QUFFNUMsUUFBSUEsYUFBYSxJQUFqQixFQUF1QjtBQUNyQkksaUJBQVdILGFBQWFELFFBQWIsRUFBdUJHLEtBQXZCLENBQVg7QUFDRDtBQUNGOztBQUVELFNBQU9DLFFBQVA7QUFDRCIsImZpbGUiOiJ3aXRoU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgdGFnTmFtZXMgPSByZXF1aXJlKCcuL3RhZ05hbWVzJyksXG4gICAgICBzdHlsZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9zdHlsZXMnKSxcbiAgICAgIGNsYXNzTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2NsYXNzTmFtZScpO1xuXG5jb25zdCB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSwgcmV0cmlldmVTdHlsZXNDU1MgfSA9IHN0eWxlc1V0aWxpdGllcztcblxuZnVuY3Rpb24gd2l0aFN0eWxlKENsYXNzT3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAgLy8vXG5cbiAgICBsZXQgc3VwZXJTdHlsZSA9IG51bGwsXG4gICAgICAgIHsgY2xhc3NOYW1lIH0gPSBDbGFzc09yRnVuY3Rpb247XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSBpc0NsYXNzKENsYXNzT3JGdW5jdGlvbikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyBleHRlbmRzIENsYXNzT3JGdW5jdGlvbiB7fSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsYXNzT3JGdW5jdGlvbi5iaW5kKHt9KTsgLy8vXG5cbiAgICAgIHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0eWxlcygpIHtcbiAgY29uc3Qgc3R5bGVzQ1NTID0gcmV0cmlldmVTdHlsZXNDU1MoKSxcbiAgICAgICAgaW5uZXJIVE1MID0gYFxuICAgICAgICBcbiR7c3R5bGVzQ1NTfWAsXG4gICAgICAgIGhlYWRET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLFxuICAgICAgICBzdHlsZURPTUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIE9iamVjdC5hc3NpZ24oc3R5bGVET01FbGVtZW50LCB7XG4gICAgaW5uZXJIVE1MXG4gIH0pO1xuXG4gIGhlYWRET01FbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlRE9NRWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlQ2xhc3NOYW1lKGVsZW1lbnQpIHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IGVsZW1lbnQucmVhY3RGdW5jdGlvbiB8fCBlbGVtZW50LnJlYWN0Q29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlcyxcbiAgcmV0cmlldmVDbGFzc05hbWVcbn0pO1xuXG50YWdOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHRhZ05hbWUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpdGhTdHlsZSwgdGFnTmFtZSwge1xuICAgIGdldDogKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c10sICAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmV0cmlldmVDbGFzc05hbWUoZWxlbWVudCksXG4gICAgICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y2xhc3NOYW1lfSAke3Byb3BzLmNsYXNzTmFtZX1gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoU3R5bGU7XG5cbmZ1bmN0aW9uIGlzQ2xhc3MoYXJndW1lbnQpIHsgcmV0dXJuIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgUmVhY3QuQ29tcG9uZW50KTsgfSAgLy8vXG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgICAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iXX0=