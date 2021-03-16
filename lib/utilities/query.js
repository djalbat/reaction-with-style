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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function query(element, test) {
    var foundDescendant = queryDescendant(element, test), descendant = foundDescendant; ///
    return descendant;
}
function queryByTagName(element) {
    for(var _len = arguments.length, tagNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        tagNames[_key - 1] = arguments[_key];
    }
    return query(element, function(element1) {
        return tagNames.some(function(tagName) {
            return element1.getTagName && toLowerCase(element1.getTagName()) === tagName;
        });
    });
}
function queryByClassName(element) {
    for(var _len = arguments.length, classNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        classNames[_key - 1] = arguments[_key];
    }
    return query(element, function(element1) {
        return classNames.some(function(className) {
            return element1.hasClass && element1.hasClass(className);
        });
    });
}
function queryByReactClass(element) {
    for(var _len = arguments.length, reactClasses = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        reactClasses[_key - 1] = arguments[_key];
    }
    return query(element, function(element1) {
        return reactClasses.some(function(reactClass) {
            return element1.reactClass === reactClass;
        });
    });
}
function queryByReactFunction(element) {
    for(var _len = arguments.length, reactFunctions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        reactFunctions[_key - 1] = arguments[_key];
    }
    return query(element, function(element1) {
        return reactFunctions.some(function(reactFunction) {
            return element1.reactFunction === reactFunction;
        });
    });
}
function queryByReactComponent(element) {
    for(var _len = arguments.length, ReactComponents = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        ReactComponents[_key - 1] = arguments[_key];
    }
    return query(element, function(element1) {
        return ReactComponents.some(function(ReactComponent) {
            return _instanceof(element1.reactComponent, ReactComponent);
        });
    });
}
function queryDescendant(element, test) {
    var children = element.getChildren(), foundDescendant = children.reduce(function(foundDescendant1, child) {
        if (foundDescendant1 === null) {
            var found = test(child);
            if (found) {
                foundDescendant1 = child; ///
            } else {
                foundDescendant1 = queryDescendant(child, test);
            }
        }
        return foundDescendant1;
    }, null);
    return foundDescendant;
}
function toLowerCase(tagName) {
    return tagName === null ? null : tagName.toLowerCase();
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeShlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kRGVzY2VuZGFudCA9IHF1ZXJ5RGVzY2VuZGFudChlbGVtZW50LCB0ZXN0KSxcbiAgICAgICAgZGVzY2VuZGFudCA9IGZvdW5kRGVzY2VuZGFudDsgLy8vXG5cbiAgcmV0dXJuIGRlc2NlbmRhbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5VGFnTmFtZShlbGVtZW50LCAuLi50YWdOYW1lcykge1xuICByZXR1cm4gcXVlcnkoZWxlbWVudCwgKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gdGFnTmFtZXMuc29tZSgodGFnTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIChlbGVtZW50LmdldFRhZ05hbWUgJiYgdG9Mb3dlckNhc2UoZWxlbWVudC5nZXRUYWdOYW1lKCkpID09PSB0YWdOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3NOYW1lKGVsZW1lbnQsIC4uLmNsYXNzTmFtZXMpIHtcbiAgcmV0dXJuIHF1ZXJ5KGVsZW1lbnQsIChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuc29tZSgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gKGVsZW1lbnQuaGFzQ2xhc3MgJiYgZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5UmVhY3RDbGFzcyhlbGVtZW50LCAuLi5yZWFjdENsYXNzZXMpIHtcbiAgcmV0dXJuIHF1ZXJ5KGVsZW1lbnQsIChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIHJlYWN0Q2xhc3Nlcy5zb21lKChyZWFjdENsYXNzKSA9PiB7XG4gICAgICByZXR1cm4gKGVsZW1lbnQucmVhY3RDbGFzcyA9PT0gcmVhY3RDbGFzcyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlCeVJlYWN0RnVuY3Rpb24oZWxlbWVudCwgLi4ucmVhY3RGdW5jdGlvbnMpIHtcbiAgcmV0dXJuIHF1ZXJ5KGVsZW1lbnQsIChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIHJlYWN0RnVuY3Rpb25zLnNvbWUoKHJlYWN0RnVuY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiAoZWxlbWVudC5yZWFjdEZ1bmN0aW9uID09PSByZWFjdEZ1bmN0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5UmVhY3RDb21wb25lbnQoZWxlbWVudCwgLi4uUmVhY3RDb21wb25lbnRzKSB7XG4gIHJldHVybiBxdWVyeShlbGVtZW50LCAoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBSZWFjdENvbXBvbmVudHMuc29tZSgoUmVhY3RDb21wb25lbnQpID0+IHtcbiAgICAgIHJldHVybiAoZWxlbWVudC5yZWFjdENvbXBvbmVudCBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RGVzY2VuZGFudChlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gZWxlbWVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICBmb3VuZERlc2NlbmRhbnQgPSBjaGlsZHJlbi5yZWR1Y2UoKGZvdW5kRGVzY2VuZGFudCwgY2hpbGQpID0+IHtcbiAgICAgICAgICBpZiAoZm91bmREZXNjZW5kYW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBmb3VuZCA9IHRlc3QoY2hpbGQpO1xuXG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgZm91bmREZXNjZW5kYW50ID0gY2hpbGQ7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm91bmREZXNjZW5kYW50ID0gcXVlcnlEZXNjZW5kYW50KGNoaWxkLCB0ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm91bmREZXNjZW5kYW50O1xuICAgICAgICB9LCBudWxsKTtcblxuICByZXR1cm4gZm91bmREZXNjZW5kYW50O1xufVxuXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZSh0YWdOYW1lKSB7XG4gIHJldHVybiAodGFnTmFtZSA9PT0gbnVsbCkgPyBudWxsIDogdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7UUFFQSxLQUFBLEdBQUEsS0FBQTtRQU9BLGNBQUEsR0FBQSxjQUFBO1FBUUEsZ0JBQUEsR0FBQSxnQkFBQTtRQVFBLGlCQUFBLEdBQUEsaUJBQUE7UUFRQSxvQkFBQSxHQUFBLG9CQUFBO1FBUUEscUJBQUEsR0FBQSxxQkFBQTs7Ozs7Ozs7U0F2Q0EsS0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBO1FBQ0EsZUFBQSxHQUFBLGVBQUEsQ0FBQSxPQUFBLEVBQUEsSUFBQSxHQUNBLFVBQUEsR0FBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7V0FFQSxVQUFBOztTQUdBLGNBQUEsQ0FBQSxPQUFBO1lBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsUUFBQSxhQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxJQUFBLEdBQUEsSUFBQSxFQUFBLElBQUE7QUFBQSxnQkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLElBQUE7O1dBQ0EsS0FBQSxDQUFBLE9BQUEsV0FBQSxRQUFBO2VBQ0EsUUFBQSxDQUFBLElBQUEsVUFBQSxPQUFBO21CQUNBLFFBQUEsQ0FBQSxVQUFBLElBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxVQUFBLFFBQUEsT0FBQTs7OztTQUtBLGdCQUFBLENBQUEsT0FBQTtZQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLFVBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxHQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsa0JBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxJQUFBOztXQUNBLEtBQUEsQ0FBQSxPQUFBLFdBQUEsUUFBQTtlQUNBLFVBQUEsQ0FBQSxJQUFBLFVBQUEsU0FBQTttQkFDQSxRQUFBLENBQUEsUUFBQSxJQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsU0FBQTs7OztTQUtBLGlCQUFBLENBQUEsT0FBQTtZQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLFlBQUEsYUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLEVBQUEsSUFBQSxHQUFBLElBQUEsRUFBQSxJQUFBO0FBQUEsb0JBQUEsQ0FBQSxJQUFBLEdBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxJQUFBOztXQUNBLEtBQUEsQ0FBQSxPQUFBLFdBQUEsUUFBQTtlQUNBLFlBQUEsQ0FBQSxJQUFBLFVBQUEsVUFBQTttQkFDQSxRQUFBLENBQUEsVUFBQSxLQUFBLFVBQUE7Ozs7U0FLQSxvQkFBQSxDQUFBLE9BQUE7WUFBQSxJQUFBLEdBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxjQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsR0FBQSxJQUFBLEVBQUEsSUFBQTtBQUFBLHNCQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsSUFBQTs7V0FDQSxLQUFBLENBQUEsT0FBQSxXQUFBLFFBQUE7ZUFDQSxjQUFBLENBQUEsSUFBQSxVQUFBLGFBQUE7bUJBQ0EsUUFBQSxDQUFBLGFBQUEsS0FBQSxhQUFBOzs7O1NBS0EscUJBQUEsQ0FBQSxPQUFBO1lBQUEsSUFBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsZUFBQSxhQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxJQUFBLEdBQUEsSUFBQSxFQUFBLElBQUE7QUFBQSx1QkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLElBQUE7O1dBQ0EsS0FBQSxDQUFBLE9BQUEsV0FBQSxRQUFBO2VBQ0EsZUFBQSxDQUFBLElBQUEsVUFBQSxjQUFBO21CQUNBLFdBQUEsQ0FBQSxRQUFBLENBQUEsY0FBQSxFQUFBLGNBQUE7Ozs7U0FLQSxlQUFBLENBQUEsT0FBQSxFQUFBLElBQUE7UUFDQSxRQUFBLEdBQUEsT0FBQSxDQUFBLFdBQUEsSUFDQSxlQUFBLEdBQUEsUUFBQSxDQUFBLE1BQUEsVUFBQSxnQkFBQSxFQUFBLEtBQUE7WUFDQSxnQkFBQSxLQUFBLElBQUE7Z0JBQ0EsS0FBQSxHQUFBLElBQUEsQ0FBQSxLQUFBO2dCQUVBLEtBQUE7QUFDQSxnQ0FBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTs7QUFFQSxnQ0FBQSxHQUFBLGVBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQTs7O2VBSUEsZ0JBQUE7T0FDQSxJQUFBO1dBRUEsZUFBQTs7U0FHQSxXQUFBLENBQUEsT0FBQTtXQUNBLE9BQUEsS0FBQSxJQUFBLEdBQUEsSUFBQSxHQUFBLE9BQUEsQ0FBQSxXQUFBIn0=