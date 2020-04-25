"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.queryByTagName = queryByTagName;
exports.queryByClassName = queryByClassName;
exports.queryByReactClass = queryByReactClass;
exports.queryByReactFunction = queryByReactFunction;
exports.queryByReactComponent = queryByReactComponent;

function query(element, test) {
  var foundDescendant = queryDescendant(element, test),
      descendant = foundDescendant; ///

  return descendant;
}

function queryByTagName(element) {
  for (var _len = arguments.length, tagNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    tagNames[_key - 1] = arguments[_key];
  }

  return query(element, function (element) {
    return tagNames.some(function (tagName) {
      return element.getTagName && toLowerCase(element.getTagName()) === tagName;
    });
  });
}

function queryByClassName(element) {
  for (var _len2 = arguments.length, classNames = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classNames[_key2 - 1] = arguments[_key2];
  }

  return query(element, function (element) {
    return classNames.some(function (className) {
      return element.hasClass && element.hasClass(className);
    });
  });
}

function queryByReactClass(element) {
  for (var _len3 = arguments.length, reactClasses = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    reactClasses[_key3 - 1] = arguments[_key3];
  }

  return query(element, function (element) {
    return reactClasses.some(function (reactClass) {
      return element.reactClass === reactClass;
    });
  });
}

function queryByReactFunction(element) {
  for (var _len4 = arguments.length, reactFunctions = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    reactFunctions[_key4 - 1] = arguments[_key4];
  }

  return query(element, function (element) {
    return reactFunctions.some(function (reactFunction) {
      return element.reactFunction === reactFunction;
    });
  });
}

function queryByReactComponent(element) {
  for (var _len5 = arguments.length, ReactComponents = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    ReactComponents[_key5 - 1] = arguments[_key5];
  }

  return query(element, function (element) {
    return ReactComponents.some(function (ReactComponent) {
      return element.reactComponent instanceof ReactComponent;
    });
  });
}

function queryDescendant(element, test) {
  var children = element.getChildren(),
      foundDescendant = children.reduce(function (foundDescendant, child) {
    if (foundDescendant === null) {
      var found = test(child);

      if (found) {
        foundDescendant = child; ///
      } else {
        foundDescendant = queryDescendant(child, test);
      }
    }

    return foundDescendant;
  }, null);
  return foundDescendant;
}

function toLowerCase(tagName) {
  return tagName === null ? null : tagName.toLowerCase();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbInF1ZXJ5IiwiZWxlbWVudCIsInRlc3QiLCJmb3VuZERlc2NlbmRhbnQiLCJxdWVyeURlc2NlbmRhbnQiLCJkZXNjZW5kYW50IiwicXVlcnlCeVRhZ05hbWUiLCJ0YWdOYW1lcyIsInNvbWUiLCJ0YWdOYW1lIiwiZ2V0VGFnTmFtZSIsInRvTG93ZXJDYXNlIiwicXVlcnlCeUNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJjbGFzc05hbWUiLCJoYXNDbGFzcyIsInF1ZXJ5QnlSZWFjdENsYXNzIiwicmVhY3RDbGFzc2VzIiwicmVhY3RDbGFzcyIsInF1ZXJ5QnlSZWFjdEZ1bmN0aW9uIiwicmVhY3RGdW5jdGlvbnMiLCJyZWFjdEZ1bmN0aW9uIiwicXVlcnlCeVJlYWN0Q29tcG9uZW50IiwiUmVhY3RDb21wb25lbnRzIiwiUmVhY3RDb21wb25lbnQiLCJyZWFjdENvbXBvbmVudCIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJyZWR1Y2UiLCJjaGlsZCIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRU8sU0FBU0EsS0FBVCxDQUFlQyxPQUFmLEVBQXdCQyxJQUF4QixFQUE4QjtBQUNuQyxNQUFNQyxlQUFlLEdBQUdDLGVBQWUsQ0FBQ0gsT0FBRCxFQUFVQyxJQUFWLENBQXZDO0FBQUEsTUFDTUcsVUFBVSxHQUFHRixlQURuQixDQURtQyxDQUVDOztBQUVwQyxTQUFPRSxVQUFQO0FBQ0Q7O0FBRU0sU0FBU0MsY0FBVCxDQUF3QkwsT0FBeEIsRUFBOEM7QUFBQSxvQ0FBVk0sUUFBVTtBQUFWQSxJQUFBQSxRQUFVO0FBQUE7O0FBQ25ELFNBQU9QLEtBQUssQ0FBQ0MsT0FBRCxFQUFVLFVBQUNBLE9BQUQsRUFBYTtBQUNqQyxXQUFPTSxRQUFRLENBQUNDLElBQVQsQ0FBYyxVQUFDQyxPQUFELEVBQWE7QUFDaEMsYUFBUVIsT0FBTyxDQUFDUyxVQUFSLElBQXNCQyxXQUFXLENBQUNWLE9BQU8sQ0FBQ1MsVUFBUixFQUFELENBQVgsS0FBc0NELE9BQXBFO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0FKVyxDQUFaO0FBS0Q7O0FBRU0sU0FBU0csZ0JBQVQsQ0FBMEJYLE9BQTFCLEVBQWtEO0FBQUEscUNBQVpZLFVBQVk7QUFBWkEsSUFBQUEsVUFBWTtBQUFBOztBQUN2RCxTQUFPYixLQUFLLENBQUNDLE9BQUQsRUFBVSxVQUFDQSxPQUFELEVBQWE7QUFDakMsV0FBT1ksVUFBVSxDQUFDTCxJQUFYLENBQWdCLFVBQUNNLFNBQUQsRUFBZTtBQUNwQyxhQUFRYixPQUFPLENBQUNjLFFBQVIsSUFBb0JkLE9BQU8sQ0FBQ2MsUUFBUixDQUFpQkQsU0FBakIsQ0FBNUI7QUFDRCxLQUZNLENBQVA7QUFHRCxHQUpXLENBQVo7QUFLRDs7QUFFTSxTQUFTRSxpQkFBVCxDQUEyQmYsT0FBM0IsRUFBcUQ7QUFBQSxxQ0FBZGdCLFlBQWM7QUFBZEEsSUFBQUEsWUFBYztBQUFBOztBQUMxRCxTQUFPakIsS0FBSyxDQUFDQyxPQUFELEVBQVUsVUFBQ0EsT0FBRCxFQUFhO0FBQ2pDLFdBQU9nQixZQUFZLENBQUNULElBQWIsQ0FBa0IsVUFBQ1UsVUFBRCxFQUFnQjtBQUN2QyxhQUFRakIsT0FBTyxDQUFDaUIsVUFBUixLQUF1QkEsVUFBL0I7QUFDRCxLQUZNLENBQVA7QUFHRCxHQUpXLENBQVo7QUFLRDs7QUFFTSxTQUFTQyxvQkFBVCxDQUE4QmxCLE9BQTlCLEVBQTBEO0FBQUEscUNBQWhCbUIsY0FBZ0I7QUFBaEJBLElBQUFBLGNBQWdCO0FBQUE7O0FBQy9ELFNBQU9wQixLQUFLLENBQUNDLE9BQUQsRUFBVSxVQUFDQSxPQUFELEVBQWE7QUFDakMsV0FBT21CLGNBQWMsQ0FBQ1osSUFBZixDQUFvQixVQUFDYSxhQUFELEVBQW1CO0FBQzVDLGFBQVFwQixPQUFPLENBQUNvQixhQUFSLEtBQTBCQSxhQUFsQztBQUNELEtBRk0sQ0FBUDtBQUdELEdBSlcsQ0FBWjtBQUtEOztBQUVNLFNBQVNDLHFCQUFULENBQStCckIsT0FBL0IsRUFBNEQ7QUFBQSxxQ0FBakJzQixlQUFpQjtBQUFqQkEsSUFBQUEsZUFBaUI7QUFBQTs7QUFDakUsU0FBT3ZCLEtBQUssQ0FBQ0MsT0FBRCxFQUFVLFVBQUNBLE9BQUQsRUFBYTtBQUNqQyxXQUFPc0IsZUFBZSxDQUFDZixJQUFoQixDQUFxQixVQUFDZ0IsY0FBRCxFQUFvQjtBQUM5QyxhQUFRdkIsT0FBTyxDQUFDd0IsY0FBUixZQUFrQ0QsY0FBMUM7QUFDRCxLQUZNLENBQVA7QUFHRCxHQUpXLENBQVo7QUFLRDs7QUFFRCxTQUFTcEIsZUFBVCxDQUF5QkgsT0FBekIsRUFBa0NDLElBQWxDLEVBQXdDO0FBQ3RDLE1BQU13QixRQUFRLEdBQUd6QixPQUFPLENBQUMwQixXQUFSLEVBQWpCO0FBQUEsTUFDTXhCLGVBQWUsR0FBR3VCLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixVQUFDekIsZUFBRCxFQUFrQjBCLEtBQWxCLEVBQTRCO0FBQzVELFFBQUkxQixlQUFlLEtBQUssSUFBeEIsRUFBOEI7QUFDNUIsVUFBTTJCLEtBQUssR0FBRzVCLElBQUksQ0FBQzJCLEtBQUQsQ0FBbEI7O0FBRUEsVUFBSUMsS0FBSixFQUFXO0FBQ1QzQixRQUFBQSxlQUFlLEdBQUcwQixLQUFsQixDQURTLENBQ2dCO0FBQzFCLE9BRkQsTUFFTztBQUNMMUIsUUFBQUEsZUFBZSxHQUFHQyxlQUFlLENBQUN5QixLQUFELEVBQVEzQixJQUFSLENBQWpDO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPQyxlQUFQO0FBQ0QsR0FaaUIsRUFZZixJQVplLENBRHhCO0FBZUEsU0FBT0EsZUFBUDtBQUNEOztBQUVELFNBQVNRLFdBQVQsQ0FBcUJGLE9BQXJCLEVBQThCO0FBQzVCLFNBQVFBLE9BQU8sS0FBSyxJQUFiLEdBQXFCLElBQXJCLEdBQTRCQSxPQUFPLENBQUNFLFdBQVIsRUFBbkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnkoZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBmb3VuZERlc2NlbmRhbnQgPSBxdWVyeURlc2NlbmRhbnQoZWxlbWVudCwgdGVzdCksXG4gICAgICAgIGRlc2NlbmRhbnQgPSBmb3VuZERlc2NlbmRhbnQ7IC8vL1xuXG4gIHJldHVybiBkZXNjZW5kYW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlCeVRhZ05hbWUoZWxlbWVudCwgLi4udGFnTmFtZXMpIHtcbiAgcmV0dXJuIHF1ZXJ5KGVsZW1lbnQsIChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIHRhZ05hbWVzLnNvbWUoKHRhZ05hbWUpID0+IHtcbiAgICAgIHJldHVybiAoZWxlbWVudC5nZXRUYWdOYW1lICYmIHRvTG93ZXJDYXNlKGVsZW1lbnQuZ2V0VGFnTmFtZSgpKSA9PT0gdGFnTmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlCeUNsYXNzTmFtZShlbGVtZW50LCAuLi5jbGFzc05hbWVzKSB7XG4gIHJldHVybiBxdWVyeShlbGVtZW50LCAoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBjbGFzc05hbWVzLnNvbWUoKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIChlbGVtZW50Lmhhc0NsYXNzICYmIGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlCeVJlYWN0Q2xhc3MoZWxlbWVudCwgLi4ucmVhY3RDbGFzc2VzKSB7XG4gIHJldHVybiBxdWVyeShlbGVtZW50LCAoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiByZWFjdENsYXNzZXMuc29tZSgocmVhY3RDbGFzcykgPT4ge1xuICAgICAgcmV0dXJuIChlbGVtZW50LnJlYWN0Q2xhc3MgPT09IHJlYWN0Q2xhc3MpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5QnlSZWFjdEZ1bmN0aW9uKGVsZW1lbnQsIC4uLnJlYWN0RnVuY3Rpb25zKSB7XG4gIHJldHVybiBxdWVyeShlbGVtZW50LCAoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiByZWFjdEZ1bmN0aW9ucy5zb21lKChyZWFjdEZ1bmN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gKGVsZW1lbnQucmVhY3RGdW5jdGlvbiA9PT0gcmVhY3RGdW5jdGlvbik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlCeVJlYWN0Q29tcG9uZW50KGVsZW1lbnQsIC4uLlJlYWN0Q29tcG9uZW50cykge1xuICByZXR1cm4gcXVlcnkoZWxlbWVudCwgKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gUmVhY3RDb21wb25lbnRzLnNvbWUoKFJlYWN0Q29tcG9uZW50KSA9PiB7XG4gICAgICByZXR1cm4gKGVsZW1lbnQucmVhY3RDb21wb25lbnQgaW5zdGFuY2VvZiBSZWFjdENvbXBvbmVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBxdWVyeURlc2NlbmRhbnQoZWxlbWVudCwgdGVzdCkge1xuICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgZm91bmREZXNjZW5kYW50ID0gY2hpbGRyZW4ucmVkdWNlKChmb3VuZERlc2NlbmRhbnQsIGNoaWxkKSA9PiB7XG4gICAgICAgICAgaWYgKGZvdW5kRGVzY2VuZGFudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZm91bmQgPSB0ZXN0KGNoaWxkKTtcblxuICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgIGZvdW5kRGVzY2VuZGFudCA9IGNoaWxkOyAvLy9cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvdW5kRGVzY2VuZGFudCA9IHF1ZXJ5RGVzY2VuZGFudChjaGlsZCwgdGVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZvdW5kRGVzY2VuZGFudDtcbiAgICAgICAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGZvdW5kRGVzY2VuZGFudDtcbn1cblxuZnVuY3Rpb24gdG9Mb3dlckNhc2UodGFnTmFtZSkge1xuICByZXR1cm4gKHRhZ05hbWUgPT09IG51bGwpID8gbnVsbCA6IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbn1cbiJdfQ==