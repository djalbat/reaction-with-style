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
  props = props.hasOwnProperty('className') ? props : _objectSpread({}, props, {
    className: className
  }); ///

  return props;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJpc0NsYXNzIiwiY2xhc3NVdGlsaXRpZXMiLCJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlcyIsInN0eWxlc1V0aWxpdGllcyIsImdlbmVyYXRlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlIiwid2l0aFN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsImNsYXNzTmFtZSIsInN1cGVyU3R5bGUiLCJDbGFzc09yRnVuY3Rpb25DbGFzcyIsIkNsYXNzIiwidXBkYXRlIiwicHJvcHMiLCJhcHBlbmRDbGFzc05hbWVUb1Byb3BzIiwiRnVuY3Rpb24iLCJjb250ZXh0IiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWVzIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImNoaWxkcmVuIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBRUEsT0FBRixHQUFjQyx5QkFBZCxDQUFFRCxPQUFGO0FBQUEsSUFDRUUsaUJBREYsR0FDd0JDLDZCQUR4QixDQUNFRCxpQkFERjtBQUFBLElBRUVFLFlBRkYsR0FFaURDLDBCQUZqRCxDQUVFRCxZQUZGO0FBQUEsSUFFZ0JFLGFBRmhCLEdBRWlERCwwQkFGakQsQ0FFZ0JDLGFBRmhCO0FBQUEsSUFFK0JDLGFBRi9CLEdBRWlERiwwQkFGakQsQ0FFK0JFLGFBRi9COztBQUlOLFNBQVNDLFNBQVQsQ0FBbUJDLGVBQW5CLEVBQW9DO0FBQ2xDLFNBQU8sWUFBVztBQUNoQixRQUFNQyxJQUFJLDhCQUFPQyxTQUFQLENBQVYsQ0FEZ0IsQ0FDYzs7QUFEZCwyQkFHSUYsZUFISjtBQUFBLFFBR1ZHLFNBSFUsb0JBR1ZBLFNBSFU7QUFLaEIsUUFBTUMsVUFBVSxHQUFHTixhQUFhLENBQUNLLFNBQUQsQ0FBaEM7QUFFQUEsSUFBQUEsU0FBUyxHQUFHVixpQkFBaUIsRUFBN0I7QUFFQUksSUFBQUEsYUFBYSxDQUFDSSxJQUFELEVBQU9FLFNBQVAsRUFBa0JDLFVBQWxCLENBQWI7QUFFQSxRQUFNQyxvQkFBb0IsR0FBR2QsT0FBTyxDQUFDUyxlQUFELENBQXBDOztBQUVBLFFBQUlLLG9CQUFKLEVBQTBCO0FBQ3hCLFVBQU1DLEtBQUssR0FBR04sZUFBZCxDQUR3QixDQUNROztBQUVoQ0EsTUFBQUEsZUFBZTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsaUNBQ05PLE1BRE0sRUFDRTtBQUNiLGlCQUFLQyxLQUFMLEdBQWFDLHNCQUFzQixDQUFDTixTQUFELEVBQVksS0FBS0ssS0FBakIsQ0FBbkM7QUFFQSwrRkFBb0JELE1BQXBCO0FBQ0Q7QUFMWTs7QUFBQTtBQUFBLFFBQWlCRCxLQUFqQixDQUFmO0FBT0QsS0FWRCxNQVVPO0FBQ0wsVUFBTUksU0FBUSxHQUFHVixlQUFqQixDQURLLENBQzZCOztBQUVsQ0EsTUFBQUEsZUFBZSxHQUFHLHlCQUFDUSxLQUFELEVBQVFHLE9BQVIsRUFBaUJDLE9BQWpCLEVBQTZCO0FBQzdDSixRQUFBQSxLQUFLLEdBQUdDLHNCQUFzQixDQUFDTixTQUFELEVBQVlLLEtBQVosQ0FBOUI7QUFFQSxlQUFPRSxTQUFRLENBQUNGLEtBQUQsRUFBUUcsT0FBUixFQUFpQkMsT0FBakIsQ0FBZjtBQUNELE9BSkQ7QUFLRDs7QUFFREMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNkLGVBQWQsRUFBK0I7QUFDN0JHLE1BQUFBLFNBQVMsRUFBVEE7QUFENkIsS0FBL0I7QUFJQSxXQUFPSCxlQUFQO0FBQ0QsR0F0Q0Q7QUF1Q0Q7O0FBRURhLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZixTQUFkLEVBQXlCO0FBQ3ZCSixFQUFBQSxZQUFZLEVBQVpBO0FBRHVCLENBQXpCO2VBSWVJLFM7OztBQUVmZ0Isb0JBQVNDLE9BQVQsQ0FBaUIsVUFBU0MsT0FBVCxFQUFrQjtBQUNqQ0osRUFBQUEsTUFBTSxDQUFDSyxjQUFQLENBQXNCbkIsU0FBdEIsRUFBaUNrQixPQUFqQyxFQUEwQztBQUN4Q0UsSUFBQUEsR0FBRyxFQUFFO0FBQUEsYUFBTSxZQUFXO0FBQ3BCLFlBQU1sQixJQUFJLDhCQUFPQyxTQUFQLENBQVY7QUFBQSxZQUE4QjtBQUN4QkMsUUFBQUEsU0FBUyxHQUFHVixpQkFBaUIsRUFEbkM7QUFHQUksUUFBQUEsYUFBYSxDQUFDSSxJQUFELEVBQU9FLFNBQVAsQ0FBYjs7QUFFQSxZQUFNTyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRixLQUFELEVBQVFHLE9BQVIsRUFBaUJDLE9BQWpCLEVBQTZCO0FBQUEsdUJBQ3ZCSixLQUR1QjtBQUFBLGNBQ3BDWSxRQURvQyxVQUNwQ0EsUUFEb0M7QUFHNUNaLFVBQUFBLEtBQUssR0FBR0Msc0JBQXNCLENBQUNOLFNBQUQsRUFBWUssS0FBWixDQUE5QjtBQUVBLGlCQUFPYSxnQkFBTUMsYUFBTix5QkFBb0JMLE9BQXBCLEVBQTZCVCxLQUE3Qiw0QkFBdUNZLFFBQXZDLEdBQVA7QUFDRCxTQU5EOztBQVFBUCxRQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0osUUFBZCxFQUF3QjtBQUN0QlAsVUFBQUEsU0FBUyxFQUFUQTtBQURzQixTQUF4QjtBQUlBLGVBQU9PLFFBQVA7QUFDRCxPQW5CSTtBQUFBO0FBRG1DLEdBQTFDO0FBc0JELENBdkJEOztBQXlCQSxTQUFTRCxzQkFBVCxDQUFnQ04sU0FBaEMsRUFBMkNLLEtBQTNDLEVBQWtEO0FBQ2hEQSxFQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ2UsY0FBTixDQUFxQixXQUFyQixJQUFvQ2YsS0FBcEMscUJBQWdEQSxLQUFoRDtBQUF1REwsSUFBQUEsU0FBUyxFQUFUQTtBQUF2RCxJQUFSLENBRGdELENBQzJCOztBQUUzRSxTQUFPSyxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSAncmVhY3Rpb24nO1xuaW1wb3J0IHsgdGFnTmFtZXMsIGNsYXNzVXRpbGl0aWVzLCBzdHlsZXNVdGlsaXRpZXMsIGNsYXNzTmFtZVV0aWxpdGllcyB9IGZyb20gJ3dpdGgtc3R5bGUnO1xuXG5jb25zdCB7IGlzQ2xhc3MgfSA9IGNsYXNzVXRpbGl0aWVzLFxuICAgICAgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyByZW5kZXJTdHlsZXMsIGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUgfSA9IHN0eWxlc1V0aWxpdGllcztcblxuZnVuY3Rpb24gd2l0aFN0eWxlKENsYXNzT3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAgLy8vXG5cbiAgICBsZXQgeyBjbGFzc05hbWUgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgY29uc3QgQ2xhc3NPckZ1bmN0aW9uQ2xhc3MgPSBpc0NsYXNzKENsYXNzT3JGdW5jdGlvbik7XG5cbiAgICBpZiAoQ2xhc3NPckZ1bmN0aW9uQ2xhc3MpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gQ2xhc3NPckZ1bmN0aW9uOyAgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGNsYXNzIGV4dGVuZHMgQ2xhc3Mge1xuICAgICAgICByZW5kZXIodXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcHMoY2xhc3NOYW1lLCB0aGlzLnByb3BzKTtcblxuICAgICAgICAgIHJldHVybiBzdXBlci5yZW5kZXIodXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRnVuY3Rpb24gPSBDbGFzc09yRnVuY3Rpb247IC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSAocHJvcHMsIGNvbnRleHQsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgcHJvcHMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBGdW5jdGlvbihwcm9wcywgY29udGV4dCwgZWxlbWVudCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZTtcblxudGFnTmFtZXMuZm9yRWFjaChmdW5jdGlvbih0YWdOYW1lKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BzLCBjb250ZXh0LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gICAgICAgIHByb3BzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wcyhjbGFzc05hbWUsIHByb3BzKTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wcywgLi4uY2hpbGRyZW4pO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BzKGNsYXNzTmFtZSwgcHJvcHMpIHtcbiAgcHJvcHMgPSBwcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NOYW1lJykgPyBwcm9wcyA6IHsuLi5wcm9wcywgY2xhc3NOYW1lfTsgLy8vXG5cbiAgcmV0dXJuIHByb3BzO1xufVxuIl19