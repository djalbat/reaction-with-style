"use strict";
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
export function queryByClass(element, Class) {
    var maximumDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
    var depth = maximumDepth; ///
    return query(element, depth, function(element) {
        return _instanceof(element, Class);
    });
}
function query(element, depth, test) {
    var foundElement = null;
    if (depth > 0) {
        depth--;
        var children = element.getChildren();
        children.some(function(child) {
            var _$element = child, found = test(_$element);
            foundElement = found ? _$element : query(_$element, depth, test);
            if (foundElement !== null) {
                return true;
            }
        });
    }
    return foundElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3MoZWxlbWVudCwgQ2xhc3MsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoOyAvLy9cblxuICByZXR1cm4gcXVlcnkoZWxlbWVudCwgZGVwdGgsIChlbGVtZW50KSA9PiAoZWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5KGVsZW1lbnQsIGRlcHRoLCB0ZXN0KSB7XG4gIGxldCBmb3VuZEVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChkZXB0aCA+IDApIHtcbiAgICBkZXB0aC0tO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5zb21lKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkLCAgLy8vXG4gICAgICAgICAgICBmb3VuZCA9IHRlc3QoZWxlbWVudClcblxuICAgICAgZm91bmRFbGVtZW50ID0gZm91bmQgP1xuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50IDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkoZWxlbWVudCwgZGVwdGgsIHRlc3QpO1xuXG4gICAgICBpZiAoZm91bmRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kRWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJxdWVyeUJ5Q2xhc3MiLCJlbGVtZW50IiwiQ2xhc3MiLCJtYXhpbXVtRGVwdGgiLCJJbmZpbml0eSIsImRlcHRoIiwicXVlcnkiLCJ0ZXN0IiwiZm91bmRFbGVtZW50IiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsInNvbWUiLCJjaGlsZCIsImZvdW5kIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxPQUFPLFNBQVNBLGFBQWFDLE9BQU8sRUFBRUMsS0FBSztRQUFFQyxlQUFBQSxpRUFBZUM7SUFDMUQsSUFBTUMsUUFBUUYsY0FBYyxHQUFHO0lBRS9CLE9BQU9HLE1BQU1MLFNBQVNJLE9BQU8sU0FBQ0o7ZUFBYUEsQUFBTyxZQUFQQSxTQUFtQkM7O0FBQ2hFO0FBRUEsU0FBU0ksTUFBTUwsT0FBTyxFQUFFSSxLQUFLLEVBQUVFLElBQUk7SUFDakMsSUFBSUMsZUFBZTtJQUVuQixJQUFJSCxRQUFRLEdBQUc7UUFDYkE7UUFFQSxJQUFNSSxXQUFXUixRQUFRUyxXQUFXO1FBRXBDRCxTQUFTRSxJQUFJLENBQUMsU0FBQ0M7WUFDYixJQUFNWCxZQUFVVyxPQUNWQyxRQUFRTixLQUFLTjtZQUVuQk8sZUFBZUssUUFDRVosWUFDRUssTUFBTUwsV0FBU0ksT0FBT0U7WUFFekMsSUFBSUMsaUJBQWlCLE1BQU07Z0JBQ3pCLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=