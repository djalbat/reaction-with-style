'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _withStyle = require("with-style");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var isClass = _withStyle.classUtilities.isClass,
    generateClassName = _withStyle.classNameUtilities.generateClassName,
    retrieveClassName = _withStyle.classNameUtilities.retrieveClassName,
    renderStyles = _withStyle.stylesUtilities.renderStyles,
    generateStyle = _withStyle.stylesUtilities.generateStyle,
    retrieveStyle = _withStyle.stylesUtilities.retrieveStyle;

function withStyle(ClassOrFunction) {
  return function () {
    var args = Array.prototype.slice.call(arguments); ///

    var _ClassOrFunction = ClassOrFunction,
        className = _ClassOrFunction.className;
    var superStyle = retrieveStyle(className);
    className = generateClassName();
    generateStyle(args, className, superStyle);
    var ClassOrFunctionClass = isClass(ClassOrFunction);

    if (ClassOrFunctionClass) {
      var Class = ClassOrFunction; ///

      ClassOrFunction = /*#__PURE__*/function (_Class) {
        _inherits(ClassOrFunction, _Class);

        function ClassOrFunction() {
          _classCallCheck(this, ClassOrFunction);

          return _possibleConstructorReturn(this, _getPrototypeOf(ClassOrFunction).apply(this, arguments));
        }

        _createClass(ClassOrFunction, [{
          key: "render",
          value: function render(update) {
            this.props = appendClassNameToProps(className, this.props);
            return _get(_getPrototypeOf(ClassOrFunction.prototype), "render", this).call(this, update);
          }
        }]);

        return ClassOrFunction;
      }(Class);
    } else {
      var _Function = ClassOrFunction; ///

      ClassOrFunction = function ClassOrFunction(props, context, element) {
        props = appendClassNameToProps(className, props);
        return _Function(props, context, element);
      };
    }

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
var _default = withStyle;
exports["default"] = _default;

_withStyle.tagNames.forEach(function (tagName) {
  Object.defineProperty(withStyle, tagName, {
    get: function get() {
      return function () {
        var args = Array.prototype.slice.call(arguments),
            ///
        className = generateClassName();
        generateStyle(args, className);

        var Function = function Function(props, context, element) {
          var _props = props,
              children = _props.children;
          props = appendClassNameToProps(className, props);
          return _reaction.React.createElement.apply(_reaction.React, [tagName, props].concat(_toConsumableArray(children)));
        };

        Object.assign(Function, {
          className: className
        });
        return Function;
      };
    }
  });
});

function appendClassNameToProps(className, props) {
  props = props.hasOwnProperty('className') ? props : _objectSpread({}, props, {
    className: className
  }); ///

  return props;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJpc0NsYXNzIiwiY2xhc3NVdGlsaXRpZXMiLCJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJldHJpZXZlQ2xhc3NOYW1lIiwicmVuZGVyU3R5bGVzIiwic3R5bGVzVXRpbGl0aWVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiQ2xhc3MiLCJ1cGRhdGUiLCJwcm9wcyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcHMiLCJGdW5jdGlvbiIsImNvbnRleHQiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiY2hpbGRyZW4iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFFQSxPQUFGLEdBQWNDLHlCQUFkLENBQUVELE9BQUY7QUFBQSxJQUNFRSxpQkFERixHQUMyQ0MsNkJBRDNDLENBQ0VELGlCQURGO0FBQUEsSUFDcUJFLGlCQURyQixHQUMyQ0QsNkJBRDNDLENBQ3FCQyxpQkFEckI7QUFBQSxJQUVFQyxZQUZGLEdBRWlEQywwQkFGakQsQ0FFRUQsWUFGRjtBQUFBLElBRWdCRSxhQUZoQixHQUVpREQsMEJBRmpELENBRWdCQyxhQUZoQjtBQUFBLElBRStCQyxhQUYvQixHQUVpREYsMEJBRmpELENBRStCRSxhQUYvQjs7QUFJTixTQUFTQyxTQUFULENBQW1CQyxlQUFuQixFQUFvQztBQUNsQyxTQUFPLFlBQVc7QUFDaEIsUUFBTUMs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QUFnREEsS0FBaEQ7QUFBdURMLElBQUFBLFNBQVMsRUFBVEE7QUFBdkQsSUFBUixDQURnRCxDQUMyQjs7QUFFM0UsU0FBT0ssS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gJ3JlYWN0aW9uJztcbmltcG9ydCB7IHRhZ05hbWVzLCBjbGFzc1V0aWxpdGllcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tICd3aXRoLXN0eWxlJztcblxuY29uc3QgeyBpc0NsYXNzIH0gPSBjbGFzc1V0aWxpdGllcyxcbiAgICAgIHsgZ2VuZXJhdGVDbGFzc05hbWUsIHJldHJpZXZlQ2xhc3NOYW1lIH0gPSBjbGFzc05hbWVVdGlsaXRpZXMsXG4gICAgICB7IHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCB7IGNsYXNzTmFtZSB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBDbGFzc09yRnVuY3Rpb25DbGFzcyA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKTtcblxuICAgIGlmIChDbGFzc09yRnVuY3Rpb25DbGFzcykge1xuICAgICAgY29uc3QgQ2xhc3MgPSBDbGFzc09yRnVuY3Rpb247ICAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzcyB7XG4gICAgICAgIHJlbmRlcih1cGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHRoaXMucHJvcHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcih1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbjsgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBwcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGVzLFxuICByZXRyaWV2ZUNsYXNzTmFtZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZTtcblxudGFnTmFtZXMuZm9yRWFjaChmdW5jdGlvbih0YWdOYW1lKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wcywgLi4uY2hpbGRyZW4pO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykgPyBwcm9wcyA6IHsuLi5wcm9wcywgY2xhc3NOYW1lfTsgLy8vXG5cbiAgcmV0dXJuIHByb3BzO1xufVxuIl19