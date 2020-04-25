"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reaction = require("reaction");

var _withStyle = require("with-style");

var _class = require("./utilities/class");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var generateClassName = _withStyle.classNameUtilities.generateClassName,
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
    var ClassOrFunctionClass = (0, _class.isClass)(ClassOrFunction);

    if (ClassOrFunctionClass) {
      var Class = ClassOrFunction; ///

      ClassOrFunction = /*#__PURE__*/function (_Class) {
        _inherits(ClassOrFunction, _Class);

        var _super = _createSuper(ClassOrFunction);

        function ClassOrFunction() {
          _classCallCheck(this, ClassOrFunction);

          return _super.apply(this, arguments);
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
  props = props.hasOwnProperty("className") ? props : _objectSpread({}, props, {
    className: className
  }); ///

  return props;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlcyIsInN0eWxlc1V0aWxpdGllcyIsImdlbmVyYXRlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlIiwid2l0aFN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsImNsYXNzTmFtZSIsInN1cGVyU3R5bGUiLCJDbGFzc09yRnVuY3Rpb25DbGFzcyIsIkNsYXNzIiwidXBkYXRlIiwicHJvcHMiLCJhcHBlbmRDbGFzc05hbWVUb1Byb3BzIiwiRnVuY3Rpb24iLCJjb250ZXh0IiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWVzIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImNoaWxkcmVuIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFFQSxpQkFBRixHQUF3QkMsNkJBQXhCLENBQUVELGlCQUFGO0FBQUEsSUFDRUUsWUFERixHQUNpREMsMEJBRGpELENBQ0VELFlBREY7QUFBQSxJQUNnQkUsYUFEaEIsR0FDaURELDBCQURqRCxDQUNnQkMsYUFEaEI7QUFBQSxJQUMrQkMsYUFEL0IsR0FDaURGLDBCQURqRCxDQUMrQkUsYUFEL0I7O0FBR04sU0FBU0MsU0FBVCxDQUFtQkMsZUFBbkIsRUFBb0M7QUFDbEMsU0FBTyxZQUFXO0FBQ2hCLFFBQU1DLElBQUksOEJBQU9DLFNBQVAsQ0FBVixDQURnQixDQUNjOztBQURkLDJCQUdJRixlQUhKO0FBQUEsUUFHVkcsU0FIVSxvQkFHVkEsU0FIVTtBQUtoQixRQUFNQyxVQUFVLEdBQUdOLGFBQWEsQ0FBQ0ssU0FBRCxD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blwiO1xuaW1wb3J0IHsgdGFnTmFtZXMsIHN0eWxlc1V0aWxpdGllcywgY2xhc3NOYW1lVXRpbGl0aWVzIH0gZnJvbSBcIndpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgaXNDbGFzcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jbGFzc1wiO1xuXG5jb25zdCB7IGdlbmVyYXRlQ2xhc3NOYW1lIH0gPSBjbGFzc05hbWVVdGlsaXRpZXMsXG4gICAgICB7IHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCB7IGNsYXNzTmFtZSB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBDbGFzc09yRnVuY3Rpb25DbGFzcyA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKTtcblxuICAgIGlmIChDbGFzc09yRnVuY3Rpb25DbGFzcykge1xuICAgICAgY29uc3QgQ2xhc3MgPSBDbGFzc09yRnVuY3Rpb247ICAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzcyB7XG4gICAgICAgIHJlbmRlcih1cGRhdGUpIHtcbiAgICAgICAgICB0aGlzLnByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHRoaXMucHJvcHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLnJlbmRlcih1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbjsgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IChwcm9wcywgY29udGV4dCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBwcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlO1xuXG50YWdOYW1lcy5mb3JFYWNoKCh0YWdOYW1lKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wcywgLi4uY2hpbGRyZW4pO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSA/IHByb3BzIDogey4uLnByb3BzLCBjbGFzc05hbWV9OyAvLy9cblxuICByZXR1cm4gcHJvcHM7XG59XG4iXX0=