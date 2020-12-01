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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlIiwic3R5bGVzVXRpbGl0aWVzIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiQ2xhc3MiLCJ1cGRhdGUiLCJwcm9wcyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcHMiLCJGdW5jdGlvbiIsImNvbnRleHQiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiY2hpbGRyZW4iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFFQSxpQkFBRixHQUF3QkMsNkJBQXhCLENBQUVELGlCQUFGO0FBQUEsSUFDRUUsV0FERixHQUM4REMsMEJBRDlELENBQ0VELFdBREY7QUFBQSxJQUNlRSxZQURmLEdBQzhERCwwQkFEOUQsQ0FDZUMsWUFEZjtBQUFBLElBQzZCQyxhQUQ3QixHQUM4REYsMEJBRDlELENBQzZCRSxhQUQ3QjtBQUFBLElBQzRDQyxhQUQ1QyxHQUM4REgsMEJBRDlELENBQzRDRyxhQUQ1Qzs7QUFHTixTQUFTQyxTQUFULENBQW1CQyxlQUFuQixFQUFvQztBQUNsQyxTQUFPLFlBQVc7QUFDaEIsUUFBTUMsSUFBSSw4QkFBT0MsU0FBUCxDQUFWLENBRGdCLENBQ2M7O0FBRGQsMkJB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LEVBQVRBO0FBQXZELElBQVIsQ0FEZ0QsQ0FDMkI7O0FBRTNFLFNBQU9LLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuaW1wb3J0IHsgdGFnTmFtZXMsIHN0eWxlc1V0aWxpdGllcywgY2xhc3NOYW1lVXRpbGl0aWVzIH0gZnJvbSBcIndpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgaXNDbGFzcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jbGFzc1wiO1xuXG5jb25zdCB7IGdlbmVyYXRlQ2xhc3NOYW1lIH0gPSBjbGFzc05hbWVVdGlsaXRpZXMsXG4gICAgICB7IHJlbmRlclN0eWxlLCByZW5kZXJTdHlsZXMsIGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUgfSA9IHN0eWxlc1V0aWxpdGllcztcblxuZnVuY3Rpb24gd2l0aFN0eWxlKENsYXNzT3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAgLy8vXG5cbiAgICBsZXQgeyBjbGFzc05hbWUgPSBudWxsIH0gPSBDbGFzc09yRnVuY3Rpb247XG5cbiAgICBjb25zdCBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIGNvbnN0IENsYXNzT3JGdW5jdGlvbkNsYXNzID0gaXNDbGFzcyhDbGFzc09yRnVuY3Rpb24pO1xuXG4gICAgaWYgKENsYXNzT3JGdW5jdGlvbkNsYXNzKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IENsYXNzT3JGdW5jdGlvbjsgIC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSBjbGFzcyBleHRlbmRzIENsYXNzIHtcbiAgICAgICAgcmVuZGVyKHVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwZXIucmVuZGVyKHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gQ2xhc3NPckZ1bmN0aW9uOyAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIHByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKTtcblxuICAgICAgICByZXR1cm4gRnVuY3Rpb24ocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZSxcbiAgcmVuZGVyU3R5bGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlO1xuXG50YWdOYW1lcy5mb3JFYWNoKCh0YWdOYW1lKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wcywgLi4uY2hpbGRyZW4pO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSA/IHByb3BzIDogey4uLnByb3BzLCBjbGFzc05hbWV9OyAvLy9cblxuICByZXR1cm4gcHJvcHM7XG59XG4iXX0=