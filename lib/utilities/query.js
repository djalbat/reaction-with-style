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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeShlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGZvdW5kRGVzY2VuZGFudCA9IHF1ZXJ5RGVzY2VuZGFudChlbGVtZW50LCB0ZXN0KSxcbiAgICAgICAgZGVzY2VuZGFudCA9IGZvdW5kRGVzY2VuZGFudDsgLy8vXG5cbiAgcmV0dXJuIGRlc2NlbmRhbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5VGFnTmFtZShlbGVtZW50LCAuLi50YWdOYW1lcykge1xuICByZXR1cm4gcXVlcnkoZWxlbWVudCwgKGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gdGFnTmFtZXMuc29tZSgodGFnTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIChlbGVtZW50LmdldFRhZ05hbWUgJiYgdG9Mb3dlckNhc2UoZWxlbWVudC5nZXRUYWdOYW1lKCkpID09PSB0YWdOYW1lKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3NOYW1lKGVsZW1lbnQsIC4uLmNsYXNzTmFtZXMpIHtcbiAgcmV0dXJuIHF1ZXJ5KGVsZW1lbnQsIChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMuc29tZSgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICByZXR1cm4gKGVsZW1lbnQuaGFzQ2xhc3MgJiYgZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWUpKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5UmVhY3RDbGFzcyhlbGVtZW50LCAuLi5yZWFjdENsYXNzZXMpIHtcbiAgcmV0dXJuIHF1ZXJ5KGVsZW1lbnQsIChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIHJlYWN0Q2xhc3Nlcy5zb21lKChyZWFjdENsYXNzKSA9PiB7XG4gICAgICByZXR1cm4gKGVsZW1lbnQucmVhY3RDbGFzcyA9PT0gcmVhY3RDbGFzcyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlCeVJlYWN0RnVuY3Rpb24oZWxlbWVudCwgLi4ucmVhY3RGdW5jdGlvbnMpIHtcbiAgcmV0dXJuIHF1ZXJ5KGVsZW1lbnQsIChlbGVtZW50KSA9PiB7XG4gICAgcmV0dXJuIHJlYWN0RnVuY3Rpb25zLnNvbWUoKHJlYWN0RnVuY3Rpb24pID0+IHtcbiAgICAgIHJldHVybiAoZWxlbWVudC5yZWFjdEZ1bmN0aW9uID09PSByZWFjdEZ1bmN0aW9uKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5UmVhY3RDb21wb25lbnQoZWxlbWVudCwgLi4uUmVhY3RDb21wb25lbnRzKSB7XG4gIHJldHVybiBxdWVyeShlbGVtZW50LCAoZWxlbWVudCkgPT4ge1xuICAgIHJldHVybiBSZWFjdENvbXBvbmVudHMuc29tZSgoUmVhY3RDb21wb25lbnQpID0+IHtcbiAgICAgIHJldHVybiAoZWxlbWVudC5yZWFjdENvbXBvbmVudCBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RGVzY2VuZGFudChlbGVtZW50LCB0ZXN0KSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gZWxlbWVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICBmb3VuZERlc2NlbmRhbnQgPSBjaGlsZHJlbi5yZWR1Y2UoKGZvdW5kRGVzY2VuZGFudCwgY2hpbGQpID0+IHtcbiAgICAgICAgICBpZiAoZm91bmREZXNjZW5kYW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBmb3VuZCA9IHRlc3QoY2hpbGQpO1xuXG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgZm91bmREZXNjZW5kYW50ID0gY2hpbGQ7IC8vL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm91bmREZXNjZW5kYW50ID0gcXVlcnlEZXNjZW5kYW50KGNoaWxkLCB0ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZm91bmREZXNjZW5kYW50O1xuICAgICAgICB9LCBudWxsKTtcblxuICByZXR1cm4gZm91bmREZXNjZW5kYW50O1xufVxuXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZSh0YWdOYW1lKSB7XG4gIHJldHVybiAodGFnTmFtZSA9PT0gbnVsbCkgPyBudWxsIDogdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFFSSxLQUFLLEdBQUwsS0FBSztRQU9MLGNBQWMsR0FBZCxjQUFjO1FBUWQsZ0JBQWdCLEdBQWhCLGdCQUFnQjtRQVFoQixpQkFBaUIsR0FBakIsaUJBQWlCO1FBUWpCLG9CQUFvQixHQUFwQixvQkFBb0I7UUFRcEIscUJBQXFCLEdBQXJCLHFCQUFxQjs7Ozs7Ozs7U0F2Q3JCLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDcEMsR0FBSyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksR0FDL0MsVUFBVSxHQUFHLGVBQWUsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7V0FFaEMsVUFBVTtBQUNuQixDQUFDO1NBRWUsY0FBYyxDQUFDLE9BQU8sRUFBZSxDQUFDO1FBQWQsR0FBVyxDQUFYLElBQVcsR0FBWCxTQUFXLENBQVgsTUFBVyxFQUFSLFFBQVEsR0FBWCxHQUFXLE9BQVgsSUFBVyxHQUFYLENBQVcsR0FBWCxJQUFXLEdBQVgsQ0FBVyxHQUFYLENBQVcsR0FBWCxJQUFXLEdBQVgsQ0FBVyxFQUFYLElBQVcsR0FBWCxJQUFXLEVBQVgsSUFBVyxHQUFYLENBQUM7UUFBRSxRQUFRLENBQVgsSUFBVyxHQUFYLENBQVcsSUFBWCxTQUFXLENBQVgsSUFBVztJQUFELENBQUM7V0FDMUMsS0FBSyxDQUFDLE9B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