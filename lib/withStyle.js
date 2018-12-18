'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reaction = require('reaction'),
    stylesSupport = require('with-style'); ///

var tagNames = stylesSupport.tagNames,
    classUtilities = stylesSupport.classUtilities,
    stylesUtilities = stylesSupport.stylesUtilities,
    classNameUtilities = stylesSupport.classNameUtilities;
var React = reaction.React,
    isClass = classUtilities.isClass,
    generateClassName = classNameUtilities.generateClassName,
    retrieveClassName = classNameUtilities.retrieveClassName,
    renderStyles = stylesUtilities.renderStyles,
    generateStyle = stylesUtilities.generateStyle,
    retrieveStyle = stylesUtilities.retrieveStyle;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsicmVhY3Rpb24iLCJyZXF1aXJlIiwic3R5bGVzU3VwcG9ydCIsInRhZ05hbWVzIiwiY2xhc3NVdGlsaXRpZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImlzQ2xhc3MiLCJnZW5lcmF0ZUNsYXNzTmFtZSIsInJldHJpZXZlQ2xhc3NOYW1lIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwiYmluZCIsInN1cGVyU3R5bGUiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiRnVuY3Rpb24iLCJwcm9wcyIsImNvbnRleHQiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLFVBQVIsQ0FBakI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsWUFBUixDQUR0QixDLENBQzhDOztJQUV0Q0UsUSxHQUFrRUQsYSxDQUFsRUMsUTtJQUFVQyxjLEdBQXdERixhLENBQXhERSxjO0lBQWdCQyxlLEdBQXdDSCxhLENBQXhDRyxlO0lBQWlCQyxrQixHQUF1QkosYSxDQUF2Qkksa0I7QUFFN0MsSUFBRUMsS0FBRixHQUFZUCxRQUFaLENBQUVPLEtBQUY7QUFBQSxJQUNFQyxPQURGLEdBQ2NKLGNBRGQsQ0FDRUksT0FERjtBQUFBLElBRUVDLGlCQUZGLEdBRTJDSCxrQkFGM0MsQ0FFRUcsaUJBRkY7QUFBQSxJQUVxQkMsaUJBRnJCLEdBRTJDSixrQkFGM0MsQ0FFcUJJLGlCQUZyQjtBQUFBLElBR0VDLFlBSEYsR0FHaUROLGVBSGpELENBR0VNLFlBSEY7QUFBQSxJQUdnQkMsYUFIaEIsR0FHaURQLGVBSGpELENBR2dCTyxhQUhoQjtBQUFBLElBRytCQyxhQUgvQixHQUdpRFIsZUFIakQsQ0FHK0JRLGFBSC9COzs7QUFLTixTQUFTQyxTQUFULENBQW1CQyxlQUFuQixFQUFvQztBQUNsQyxTQUFPLFlBQVc7QUFDaEIsUUFBTUMsNENBQVdDLFNBQVgsRUFBTixDQURnQixDQUNjOztBQUUxQixxQkFBYSxJQUFiO0FBQUEsMkJBQ2dCRixlQURoQjtBQUFBLFFBQ0VHLFNBREYsb0JBQ0VBLFNBREY7OztBQUdKLFFBQUlBLFNBQUosRUFBZTtBQUNiSCx3QkFBa0JQLFFBQVFPLGVBQVI7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxRQUNnQkEsZUFEaEIsSUFDcUM7QUFDakNBLHNCQUFnQkksSUFBaEIsQ0FBcUIsRUFBckIsQ0FGdEIsQ0FEYSxDQUdtQzs7QUFFaERDLG1CQUFhUCxjQUFjSyxTQUFkLENBQWI7QUFDRDs7QUFFREEsZ0JBQVlULG1CQUFaOztBQUVBRyxrQkFBY0ksSUFBZCxFQUFvQkUsU0FBcEIsRUFBK0JFLFVBQS9COztBQUVBQyxXQUFPQyxNQUFQLENBQWNQLGVBQWQsRUFBK0I7QUFDN0JHO0FBRDZCLEtBQS9COztBQUlBLFdBQU9ILGVBQVA7QUFDRCxHQXZCRDtBQXdCRDs7QUFFRE0sT0FBT0MsTUFBUCxDQUFjUixTQUFkLEVBQXlCO0FBQ3ZCSCw0QkFEdUI7QUFFdkJEO0FBRnVCLENBQXpCOztBQUtBUCxTQUFTb0IsT0FBVCxDQUFpQixVQUFTQyxPQUFULEVBQWtCO0FBQ2pDSCxTQUFPSSxjQUFQLENBQXNCWCxTQUF0QixFQUFpQ1UsT0FBakMsRUFBMEM7QUFDeENFLFNBQUs7QUFBQSxhQUFNLFlBQVc7QUFDcEIsWUFBTVYsNENBQVdDLFNBQVgsRUFBTjtBQUFBLFlBQThCO0FBQ3hCQyxvQkFBWVQsbUJBRGxCOztBQUdBRyxzQkFBY0ksSUFBZCxFQUFvQkUsU0FBcEI7O0FBRUEsWUFBTVMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsT0FBakIsRUFBNkI7QUFDdEMsMEJBQVlwQixrQkFBa0JvQixPQUFsQixDQUFaO0FBQUEsY0FDRUMsUUFERixHQUNlSCxLQURmLENBQ0VHLFFBREY7OztBQUdOSCxnQkFBTVYsU0FBTixHQUFxQkEsU0FBckIsVUFBa0NVLE1BQU1WLFNBQU4sSUFBbUIsRUFBckQsRUFKNEMsQ0FJZTs7QUFFM0QsaUJBQU9YLE1BQU15QixhQUFOLGVBQW9CUixPQUFwQixFQUE2QkksS0FBN0IsNEJBQXVDRyxRQUF2QyxHQUFQO0FBQ0QsU0FQRDs7QUFTQVYsZUFBT0MsTUFBUCxDQUFjSyxRQUFkLEVBQXdCO0FBQ3RCVDtBQURzQixTQUF4Qjs7QUFJQSxlQUFPUyxRQUFQO0FBQ0QsT0FwQkk7QUFBQTtBQURtQyxHQUExQztBQXVCRCxDQXhCRDs7QUEwQkFNLE9BQU9DLE9BQVAsR0FBaUJwQixTQUFqQiIsImZpbGUiOiJ3aXRoU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICAgIHN0eWxlc1N1cHBvcnQgPSByZXF1aXJlKCd3aXRoLXN0eWxlJyk7ICAvLy9cblxuY29uc3QgeyB0YWdOYW1lcywgY2xhc3NVdGlsaXRpZXMsIHN0eWxlc1V0aWxpdGllcywgY2xhc3NOYW1lVXRpbGl0aWVzIH0gPSBzdHlsZXNTdXBwb3J0O1xuXG5jb25zdCB7IFJlYWN0IH0gPSByZWFjdGlvbixcbiAgICAgIHsgaXNDbGFzcyB9ID0gY2xhc3NVdGlsaXRpZXMsXG4gICAgICB7IGdlbmVyYXRlQ2xhc3NOYW1lLCByZXRyaWV2ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyByZW5kZXJTdHlsZXMsIGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUgfSA9IHN0eWxlc1V0aWxpdGllcztcblxuZnVuY3Rpb24gd2l0aFN0eWxlKENsYXNzT3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAgLy8vXG5cbiAgICBsZXQgc3VwZXJTdHlsZSA9IG51bGwsXG4gICAgICAgIHsgY2xhc3NOYW1lIH0gPSBDbGFzc09yRnVuY3Rpb247XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSBpc0NsYXNzKENsYXNzT3JGdW5jdGlvbikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcyBleHRlbmRzIENsYXNzT3JGdW5jdGlvbiB7fSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsYXNzT3JGdW5jdGlvbi5iaW5kKHt9KTsgLy8vXG5cbiAgICAgIHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlcyxcbiAgcmV0cmlldmVDbGFzc05hbWVcbn0pO1xuXG50YWdOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKHRhZ05hbWUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpdGhTdHlsZSwgdGFnTmFtZSwge1xuICAgIGdldDogKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c10sICAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gcmV0cmlldmVDbGFzc05hbWUoZWxlbWVudCksXG4gICAgICAgICAgICAgIHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0gJHtwcm9wcy5jbGFzc05hbWUgfHwgJyd9YDtcdC8vL1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFN0eWxlO1xuIl19