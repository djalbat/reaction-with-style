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
        _ClassOrFunction$clas = _ClassOrFunction.className,
        className = _ClassOrFunction$clas === void 0 ? null : _ClassOrFunction$clas;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlcyIsInN0eWxlc1V0aWxpdGllcyIsImdlbmVyYXRlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlIiwid2l0aFN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsImNsYXNzTmFtZSIsInN1cGVyU3R5bGUiLCJDbGFzc09yRnVuY3Rpb25DbGFzcyIsIkNsYXNzIiwidXBkYXRlIiwicHJvcHMiLCJhcHBlbmRDbGFzc05hbWVUb1Byb3BzIiwiRnVuY3Rpb24iLCJjb250ZXh0IiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWVzIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImNoaWxkcmVuIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFFQSxpQkFBRixHQUF3QkMsNkJBQXhCLENBQUVELGlCQUFGO0FBQUEsSUFDRUUsWUFERixHQUNpREMsMEJBRGpELENBQ0VELFlBREY7QUFBQSxJQUNnQkUsYUFEaEIsR0FDaURELDBCQURqRCxDQUNnQkMsYUFEaEI7QUFBQSxJQUMrQkMsYUFEL0IsR0FDaURGLDBCQURqRCxDQUMrQkUsYUFEL0I7O0FBR04sU0FBU0MsU0FBVCxDQUFtQkMsZUFBbkIsRUFBb0M7QUFDbEMsU0FBTyxZQUFXO0FBQ2hCLFFBQU1DLElBQUksOEJBQU9DLFNBQVAsQ0FBVixDQURnQixDQUNjOztBQURkLDJCQUdXRixlQUhYO0FBQUEsaURBR1ZHLFNBSFU7QUFBQSxRQUdWQSxTQUhVLHNDQUdFLElBSEY7QUFLaEIsUUFBTUMsVUFBVSxHQUFHTixh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fSBmcm9tIFwicmVhY3Rpb25cIjtcbmltcG9ydCB7IHRhZ05hbWVzLCBzdHlsZXNVdGlsaXRpZXMsIGNsYXNzTmFtZVV0aWxpdGllcyB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IGlzQ2xhc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvY2xhc3NcIjtcblxuY29uc3QgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyByZW5kZXJTdHlsZXMsIGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUgfSA9IHN0eWxlc1V0aWxpdGllcztcblxuZnVuY3Rpb24gd2l0aFN0eWxlKENsYXNzT3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAgLy8vXG5cbiAgICBsZXQgeyBjbGFzc05hbWUgPSBudWxsIH0gPSBDbGFzc09yRnVuY3Rpb247XG5cbiAgICBjb25zdCBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIGNvbnN0IENsYXNzT3JGdW5jdGlvbkNsYXNzID0gaXNDbGFzcyhDbGFzc09yRnVuY3Rpb24pO1xuXG4gICAgaWYgKENsYXNzT3JGdW5jdGlvbkNsYXNzKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IENsYXNzT3JGdW5jdGlvbjsgIC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSBjbGFzcyBleHRlbmRzIENsYXNzIHtcbiAgICAgICAgcmVuZGVyKHVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXIucmVuZGVyKHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gQ2xhc3NPckZ1bmN0aW9uOyAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIHByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKTtcblxuICAgICAgICByZXR1cm4gRnVuY3Rpb24ocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZXNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGU7XG5cbnRhZ05hbWVzLmZvckVhY2goKHRhZ05hbWUpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpdGhTdHlsZSwgdGFnTmFtZSwge1xuICAgIGdldDogKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c10sICAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICAgICAgcHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpID8gcHJvcHMgOiB7Li4ucHJvcHMsIGNsYXNzTmFtZX07IC8vL1xuXG4gIHJldHVybiBwcm9wcztcbn1cbiJdfQ==