'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var style = require('with-style'),
    ///
reaction = require('reaction');

var tagNames = style.tagNames,
    classUtilities = style.classUtilities,
    stylesUtilities = style.stylesUtilities,
    classNameUtilities = style.classNameUtilities;
var React = reaction.React,
    isClass = classUtilities.isClass,
    generateClassName = classNameUtilities.generateClassName,
    retrieveClassName = classNameUtilities.retrieveClassName,
    renderStyles = stylesUtilities.renderStyles,
    generateStyle = stylesUtilities.generateStyle,
    retrieveStyle = stylesUtilities.retrieveStyle;

function withStyle(ClassOrFunction) {
  return function () {
    var args = Array.prototype.slice.call(arguments); ///

    var superStyle = null,
        _ClassOrFunction = ClassOrFunction,
        className = _ClassOrFunction.className;

    if (className) {
      ClassOrFunction = isClass(ClassOrFunction) ? /*#__PURE__*/function (_ClassOrFunction2) {
        _inherits(_class, _ClassOrFunction2);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
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
        var args = Array.prototype.slice.call(arguments),
            ///
        className = generateClassName();
        generateStyle(args, className);

        var Function = function Function(props, context, element) {
          var className = retrieveClassName(element),
              children = props.children;
          props.className = "".concat(className, " ").concat(props.className || ''); ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJzdHlsZSIsInJlcXVpcmUiLCJyZWFjdGlvbiIsInRhZ05hbWVzIiwiY2xhc3NVdGlsaXRpZXMiLCJzdHlsZXNVdGlsaXRpZXMiLCJjbGFzc05hbWVVdGlsaXRpZXMiLCJSZWFjdCIsImlzQ2xhc3MiLCJnZW5lcmF0ZUNsYXNzTmFtZSIsInJldHJpZXZlQ2xhc3NOYW1lIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwic3VwZXJTdHlsZSIsImNsYXNzTmFtZSIsImJpbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiRnVuY3Rpb24iLCJwcm9wcyIsImNvbnRleHQiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBckI7QUFBQSxJQUFzQztBQUNoQ0MsUUFBUSxHQUFHRCxPQUFPLENBQUMsVUFBRCxDQUR4Qjs7SUFHUUUsUSxHQUFrRUgsSyxDQUFsRUcsUTtJQUFVQyxjLEdBQXdESixLLENBQXhESSxjO0lBQWdCQyxlLEdBQXdDTCxLLENBQXhDSyxlO0lBQWlCQyxrQixHQUF1Qk4sSyxDQUF2Qk0sa0I7QUFFN0MsSUFBRUMsS0FBRixHQUFZTCxRQUFaLENBQUVLLEtBQUY7QUFBQSxJQUNFQyxPQURGLEdBQ2NKLGNBRGQsQ0FDRUksT0FERjtBQUFBLElBRUVDLGlCQUZGLEdBRTJDSCxrQkFGM0MsQ0FFRUcsaUJBRkY7QUFBQSxJQUVxQkMsaUJBRnJCLEdBRTJDSixrQkFGM0MsQ0FFcUJJLGlCQUZyQjtBQUFBLElBR0VDLFlBSEYsR0FHaUROLGVBSGpELENBR0VNLFlBSEY7QUFBQSxJQUdnQkMsYUFIaEIsR0FHaURQLGVBSGpELENBR2dCTyxhQUhoQjtBQUFBLElBRytCQyxhQUgvQixHQUdpRFIsZUFIakQsQ0FHK0JRLGFBSC9COztBQUtOLFNBQVNDLFNBQVQsQ0FBbUJDLGVBQW5CLEVBQW9DO0FBQ2xDLFNBQU8sWUFBVztBQUNoQixRQUFNQyxJQUFJLDhCQUFPQyxTQUFQLENBQVYsQ0FEZ0IsQ0FDYzs7QUFFMUIsUUFBQUMsVUFBVSxHQUFHLElBQWI7QUFBQSwyQkFDZ0JILGVBRGhCO0FBQUEsUUFDRUksU0FERixvQkFDRUEsU0FERjs7QUFHSixRQUFJQSxTQUFKLEVBQWU7QUFDYkosTUFBQUEsZUFBZSxHQUFHUCxPQUFPLENBQUNPLGVBQUQsQ0FBUDtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBLFFBQ2dCQSxlQURoQixJQUNxQztBQUNqQ0EsTUFBQUEsZUFBZSxDQUFDSyxJQUFoQixDQUFxQixFQUFyQixDQUZ0QixDQURhLENBR21DOztBQUVoREYsTUFBQUEsVUFBVSxHQUFHTCxhQUFhLENBQUNNLFNBQUQsQ0FBMUI7QUFDRDs7QUFFREEsSUFBQUEsU0FBUyxHQUFHVixpQkFBaUIsRUFBN0I7QUFFQUcsSUFBQUEsYUFBYSxDQUFDSSxJQUFELEVBQU9HLFNBQVAsRUFBa0JELFVBQWxCLENBQWI7QUFFQUcsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNQLGVBQWQsRUFBK0I7QUFDN0JJLE1BQUFBLFNBQVMsRUFBVEE7QUFENkIsS0FBL0I7QUFJQSxXQUFPSixlQUFQO0FBQ0QsR0F2QkQ7QUF3QkQ7O0FBRURNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixTQUFkLEVBQXlCO0FBQ3ZCSCxFQUFBQSxZQUFZLEVBQVpBLFlBRHVCO0FBRXZCRCxFQUFBQSxpQkFBaUIsRUFBakJBO0FBRnVCLENBQXpCO0FBS0FQLFFBQVEsQ0FBQ29CLE9BQVQsQ0FBaUIsVUFBU0MsT0FBVCxFQUFrQjtBQUNqQ0gsRUFBQUEsTUFBTSxDQUFDSSxjQUFQLENBQXNCWCxTQUF0QixFQUFpQ1UsT0FBakMsRUFBMEM7QUFDeENFLElBQUFBLEdBQUcsRUFBRTtBQUFBLGFBQU0sWUFBVztBQUNwQixZQUFNVixJQUFJLDhCQUFPQyxTQUFQLENBQVY7QUFBQSxZQUE4QjtBQUN4QkUsUUFBQUEsU0FBUyxHQUFHVixpQkFBaUIsRUFEbkM7QUFHQUcsUUFBQUEsYUFBYSxDQUFDSSxJQUFELEVBQU9HLFNBQVAsQ0FBYjs7QUFFQSxZQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLE9BQWpCLEVBQTZCO0FBQ3RDLGNBQUFYLFNBQVMsR0FBR1QsaUJBQWlCLENBQUNvQixPQUFELENBQTdCO0FBQUEsY0FDRUMsUUFERixHQUNlSCxLQURmLENBQ0VHLFFBREY7QUFHTkgsVUFBQUEsS0FBSyxDQUFDVCxTQUFOLGFBQXFCQSxTQUFyQixjQUFrQ1MsS0FBSyxDQUFDVCxTQUFOLElBQW1CLEVBQXJELEVBSjRDLENBSWU7O0FBRTNELGlCQUFPWixLQUFLLENBQUN5QixhQUFOLE9BQUF6QixLQUFLLEdBQWVpQixPQUFmLEVBQXdCSSxLQUF4Qiw0QkFBa0NHLFFBQWxDLEdBQVo7QUFDRCxTQVBEOztBQVNBVixRQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0ssUUFBZCxFQUF3QjtBQUN0QlIsVUFBQUEsU0FBUyxFQUFUQTtBQURzQixTQUF4QjtBQUlBLGVBQU9RLFFBQVA7QUFDRCxPQXBCSTtBQUFBO0FBRG1DLEdBQTFDO0FBdUJELENBeEJEO0FBMEJBTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJwQixTQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc3R5bGUgPSByZXF1aXJlKCd3aXRoLXN0eWxlJyksICAvLy9cbiAgICAgIHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKTtcblxuY29uc3QgeyB0YWdOYW1lcywgY2xhc3NVdGlsaXRpZXMsIHN0eWxlc1V0aWxpdGllcywgY2xhc3NOYW1lVXRpbGl0aWVzIH0gPSBzdHlsZTtcblxuY29uc3QgeyBSZWFjdCB9ID0gcmVhY3Rpb24sXG4gICAgICB7IGlzQ2xhc3MgfSA9IGNsYXNzVXRpbGl0aWVzLFxuICAgICAgeyBnZW5lcmF0ZUNsYXNzTmFtZSwgcmV0cmlldmVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGVzLCBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDbGFzc09yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgIC8vL1xuXG4gICAgbGV0IHN1cGVyU3R5bGUgPSBudWxsLFxuICAgICAgICB7IGNsYXNzTmFtZSB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gaXNDbGFzcyhDbGFzc09yRnVuY3Rpb24pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3MgZXh0ZW5kcyBDbGFzc09yRnVuY3Rpb24ge30gOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGFzc09yRnVuY3Rpb24uYmluZCh7fSk7IC8vL1xuXG4gICAgICBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZXMsXG4gIHJldHJpZXZlQ2xhc3NOYW1lXG59KTtcblxudGFnTmFtZXMuZm9yRWFjaChmdW5jdGlvbih0YWdOYW1lKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHJldHJpZXZlQ2xhc3NOYW1lKGVsZW1lbnQpLFxuICAgICAgICAgICAgICB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICBwcm9wcy5jbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9ICR7cHJvcHMuY2xhc3NOYW1lIHx8ICcnfWA7XHQvLy9cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wcywgLi4uY2hpbGRyZW4pO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhTdHlsZTtcbiJdfQ==