"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getNextSibling: function() {
        return getNextSibling;
    },
    getPreviousSibling: function() {
        return getPreviousSibling;
    }
});
function getNextSibling(element) {
    var nextSibling = null;
    var siblings = element.parent.children; ///
    backwardsSome(siblings, function(sibling) {
        if (sibling === element) {
            return true;
        }
        nextSibling = sibling;
    });
    return nextSibling;
}
function getPreviousSibling(element) {
    var previousSibling = null;
    var siblings = element.parent.children; ///
    forwardsSome(siblings, function(sibling) {
        if (sibling === element) {
            return true;
        }
        previousSibling = sibling;
    });
    return previousSibling;
}
function forwardsSome(array, test) {
    var arrayLength = array.length, lastIndex = arrayLength - 1;
    for(var index = 0; index <= lastIndex; index++){
        var element = array[index], result = test(element, index);
        if (result) {
            return true;
        }
    }
    return false;
}
function backwardsSome(array, test) {
    var arrayLength = array.length, lastIndex = arrayLength - 1;
    for(var index = lastIndex; index >= 0; index--){
        var element = array[index], result = test(element, index);
        if (result) {
            return true;
        }
    }
    return false;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2libGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKGVsZW1lbnQpIHtcbiAgbGV0IG5leHRTaWJsaW5nID0gbnVsbDtcblxuICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnQucGFyZW50LmNoaWxkcmVuOyAvLy9cblxuICBiYWNrd2FyZHNTb21lKHNpYmxpbmdzLCAoc2libGluZykgPT4ge1xuICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZXh0U2libGluZyA9IHNpYmxpbmc7XG4gIH0pO1xuXG4gIHJldHVybiBuZXh0U2libGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZyhlbGVtZW50KSB7XG4gIGxldCBwcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuXG4gIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudC5wYXJlbnQuY2hpbGRyZW47IC8vL1xuXG4gIGZvcndhcmRzU29tZShzaWJsaW5ncywgKHNpYmxpbmcpID0+IHtcbiAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJldmlvdXNTaWJsaW5nID0gc2libGluZztcbiAgfSk7XG5cbiAgcmV0dXJuIHByZXZpb3VzU2libGluZztcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBhcnJheUxlbmd0aCAtIDE7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSBsYXN0SW5kZXg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBhcnJheUxlbmd0aCAtIDE7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBsYXN0SW5kZXg7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl0sIm5hbWVzIjpbImdldE5leHRTaWJsaW5nIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwiZWxlbWVudCIsIm5leHRTaWJsaW5nIiwic2libGluZ3MiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImJhY2t3YXJkc1NvbWUiLCJzaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiZm9yd2FyZHNTb21lIiwiYXJyYXkiLCJ0ZXN0IiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJpbmRleCIsInJlc3VsdCJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSxjQUFjO2VBQWRBOztJQWdCQUMsa0JBQWtCO2VBQWxCQTs7O0FBaEJULFNBQVNELGVBQWVFLE9BQU87SUFDcEMsSUFBSUMsY0FBYztJQUVsQixJQUFNQyxXQUFXRixRQUFRRyxNQUFNLENBQUNDLFFBQVEsRUFBRSxHQUFHO0lBRTdDQyxjQUFjSCxVQUFVLFNBQUNJO1FBQ3ZCLElBQUlBLFlBQVlOLFNBQVM7WUFDdkIsT0FBTztRQUNUO1FBRUFDLGNBQWNLO0lBQ2hCO0lBRUEsT0FBT0w7QUFDVDtBQUVPLFNBQVNGLG1CQUFtQkMsT0FBTztJQUN4QyxJQUFJTyxrQkFBa0I7SUFFdEIsSUFBTUwsV0FBV0YsUUFBUUcsTUFBTSxDQUFDQyxRQUFRLEVBQUUsR0FBRztJQUU3Q0ksYUFBYU4sVUFBVSxTQUFDSTtRQUN0QixJQUFJQSxZQUFZTixTQUFTO1lBQ3ZCLE9BQU87UUFDVDtRQUVBTyxrQkFBa0JEO0lBQ3BCO0lBRUEsT0FBT0M7QUFDVDtBQUVBLFNBQVNDLGFBQWFDLEtBQUssRUFBRUMsSUFBSTtJQUMvQixJQUFNQyxjQUFjRixNQUFNRyxNQUFNLEVBQzFCQyxZQUFZRixjQUFjO0lBRWhDLElBQUssSUFBSUcsUUFBUSxHQUFHQSxTQUFTRCxXQUFXQyxRQUFTO1FBQy9DLElBQU1kLFVBQVVTLEtBQUssQ0FBQ0ssTUFBTSxFQUN0QkMsU0FBU0wsS0FBS1YsU0FBU2M7UUFFN0IsSUFBSUMsUUFBUTtZQUNWLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsU0FBU1YsY0FBY0ksS0FBSyxFQUFFQyxJQUFJO0lBQ2hDLElBQU1DLGNBQWNGLE1BQU1HLE1BQU0sRUFDMUJDLFlBQVlGLGNBQWM7SUFFaEMsSUFBSyxJQUFJRyxRQUFRRCxXQUFXQyxTQUFTLEdBQUdBLFFBQVM7UUFDL0MsSUFBTWQsVUFBVVMsS0FBSyxDQUFDSyxNQUFNLEVBQ3RCQyxTQUFTTCxLQUFLVixTQUFTYztRQUU3QixJQUFJQyxRQUFRO1lBQ1YsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1QifQ==