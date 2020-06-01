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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var generateClassName = _withStyle.classNameUtilities.generateClassName,
    renderStyle = _withStyle.stylesUtilities.renderStyle,
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
  renderStyle: renderStyle,
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
  props = props.hasOwnProperty("className") ? props : _objectSpread(_objectSpread({}, props), {}, {
    className: className
  }); ///

  return props;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlIiwic3R5bGVzVXRpbGl0aWVzIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiQ2xhc3MiLCJ1cGRhdGUiLCJwcm9wcyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcHMiLCJGdW5jdGlvbiIsImNvbnRleHQiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiY2hpbGRyZW4iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUVBLGlCQUFGLEdBQXdCQyw2QkFBeEIsQ0FBRUQsaUJBQUY7QUFBQSxJQUNFRSxXQURGLEdBQzhEQywwQkFEOUQsQ0FDRUQsV0FERjtBQUFBLElBQ2VFLFlBRGYsR0FDOERELDBCQUQ5RCxDQUNlQyxZQURmO0FBQUEsSUFDNkJDLGFBRDdCLEdBQzhERiwwQkFEOUQsQ0FDNkJFLGFBRDdCO0FBQUEsSUFDNENDLGFBRDVDLEdBQzhESCwwQkFEOUQsQ0FDNENHLGFBRDVDOztBQUdOLFNBQVNDLFNBQVQsQ0FBbUJDLGVBQW5CLEVBQW9DO0FBQ2xDLFNBQU8sWUFBVztBQUNoQixRQUFNQyxJQUFJLDhCQUFPQyxTQUFQLENBQVYsQ0FEZ0IsQ0FDYzs7QUFEZCwyQkFHV0YsZUFIWDtBQUFBLGlEQUdWRyxT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RCxDQUMyQjs7QUFFM0UsU0FBT0ssS0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCB7IGNsYXNzTmFtZSA9IG51bGwgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgY29uc3QgQ2xhc3NPckZ1bmN0aW9uQ2xhc3MgPSBpc0NsYXNzKENsYXNzT3JGdW5jdGlvbik7XG5cbiAgICBpZiAoQ2xhc3NPckZ1bmN0aW9uQ2xhc3MpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gQ2xhc3NPckZ1bmN0aW9uOyAgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGNsYXNzIGV4dGVuZHMgQ2xhc3Mge1xuICAgICAgICByZW5kZXIodXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCB0aGlzLnByb3BzKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlci5yZW5kZXIodXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRnVuY3Rpb24gPSBDbGFzc09yRnVuY3Rpb247IC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgcHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBGdW5jdGlvbihwcm9wcywgY29udGV4dCwgZWxlbWVudCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlLFxuICByZW5kZXJTdHlsZXNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGU7XG5cbnRhZ05hbWVzLmZvckVhY2goKHRhZ05hbWUpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpdGhTdHlsZSwgdGFnTmFtZSwge1xuICAgIGdldDogKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c10sICAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgICAgICAgcHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbik7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCBwcm9wcykge1xuICBwcm9wcyA9IHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpID8gcHJvcHMgOiB7Li4ucHJvcHMsIGNsYXNzTmFtZX07IC8vL1xuXG4gIHJldHVybiBwcm9wcztcbn1cbiJdfQ==