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
  renderStyles: renderStyles
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
  className = props.className ? "".concat(props.className, " ").concat(className) : className;
  props = _objectSpread({}, props, {
    className: className
  });
  return props;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJpc0NsYXNzIiwiY2xhc3NVdGlsaXRpZXMiLCJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlcyIsInN0eWxlc1V0aWxpdGllcyIsImdlbmVyYXRlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlIiwid2l0aFN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsImNsYXNzTmFtZSIsInN1cGVyU3R5bGUiLCJDbGFzc09yRnVuY3Rpb25DbGFzcyIsIkNsYXNzIiwidXBkYXRlIiwicHJvcHMiLCJhcHBlbmRDbGFzc05hbWVUb1Byb3BzIiwiRnVuY3Rpb24iLCJjb250ZXh0IiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWVzIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImNoaWxkcmVuIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUVBLE9BQUYsR0FBY0MseUJBQWQsQ0FBRUQsT0FBRjtBQUFBLElBQ0VFLGlCQURGLEdBQ3dCQyw2QkFEeEIsQ0FDRUQsaUJBREY7QUFBQSxJQUVFRSxZQUZGLEdBRWlEQywwQkFGakQsQ0FFRUQsWUFGRjtBQUFBLElBRWdCRSxhQUZoQixHQUVpREQsMEJBRmpELENBRWdCQyxhQUZoQjtBQUFBLElBRStCQyxhQUYvQixHQUVpREYsMEJBRmpELENBRStCRSxhQUYvQjs7QUFJTixTQUFTQyxTQUFULENBQW1CQyxlQUFuQixFQUFvQztBQUNsQyxTQUFPLFlBQVc7QUFDaEIsUUFBTUMsSUFBSSw4QkFBT0MsU0FBUCxDQUFWLENBRGdCLENBQ2M7O0FBRGQsMkJBR0lGLGVBSEo7QUFBQSxRQUdWRyxTQUhVLG9CQUdWQSxTQUhVO0FBS2hC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bnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gJ3JlYWN0aW9uJztcbmltcG9ydCB7IHRhZ05hbWVzLCBjbGFzc1V0aWxpdGllcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tICd3aXRoLXN0eWxlJztcblxuY29uc3QgeyBpc0NsYXNzIH0gPSBjbGFzc1V0aWxpdGllcyxcbiAgICAgIHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGVzLCBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDbGFzc09yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgIC8vL1xuXG4gICAgbGV0IHsgY2xhc3NOYW1lIH0gPSBDbGFzc09yRnVuY3Rpb247XG5cbiAgICBjb25zdCBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIGNvbnN0IENsYXNzT3JGdW5jdGlvbkNsYXNzID0gaXNDbGFzcyhDbGFzc09yRnVuY3Rpb24pO1xuXG4gICAgaWYgKENsYXNzT3JGdW5jdGlvbkNsYXNzKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IENsYXNzT3JGdW5jdGlvbjsgIC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSBjbGFzcyBleHRlbmRzIENsYXNzIHtcbiAgICAgICAgcmVuZGVyKHVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXIucmVuZGVyKHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gQ2xhc3NPckZ1bmN0aW9uOyAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIHByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKTtcblxuICAgICAgICByZXR1cm4gRnVuY3Rpb24ocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZXNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGU7XG5cbnRhZ05hbWVzLmZvckVhY2goZnVuY3Rpb24odGFnTmFtZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICAgICAgICBwcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKSB7XG4gIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSA/IGAke3Byb3BzLmNsYXNzTmFtZX0gJHtjbGFzc05hbWV9YCA6IGNsYXNzTmFtZTtcblxuICBwcm9wcyA9IHsuLi5wcm9wcywgY2xhc3NOYW1lfTtcblxuICByZXR1cm4gcHJvcHM7XG59XG4iXX0=