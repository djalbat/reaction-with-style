"use strict";
export function getNextSibling(element) {
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
export function getPreviousSibling(element) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2libGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKGVsZW1lbnQpIHtcbiAgbGV0IG5leHRTaWJsaW5nID0gbnVsbDtcblxuICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnQucGFyZW50LmNoaWxkcmVuOyAvLy9cblxuICBiYWNrd2FyZHNTb21lKHNpYmxpbmdzLCAoc2libGluZykgPT4ge1xuICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZXh0U2libGluZyA9IHNpYmxpbmc7XG4gIH0pO1xuXG4gIHJldHVybiBuZXh0U2libGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZyhlbGVtZW50KSB7XG4gIGxldCBwcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuXG4gIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudC5wYXJlbnQuY2hpbGRyZW47IC8vL1xuXG4gIGZvcndhcmRzU29tZShzaWJsaW5ncywgKHNpYmxpbmcpID0+IHtcbiAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJldmlvdXNTaWJsaW5nID0gc2libGluZztcbiAgfSk7XG5cbiAgcmV0dXJuIHByZXZpb3VzU2libGluZztcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBhcnJheUxlbmd0aCAtIDE7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSBsYXN0SW5kZXg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBhcnJheUxlbmd0aCAtIDE7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBsYXN0SW5kZXg7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl0sIm5hbWVzIjpbImdldE5leHRTaWJsaW5nIiwiZWxlbWVudCIsIm5leHRTaWJsaW5nIiwic2libGluZ3MiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImJhY2t3YXJkc1NvbWUiLCJzaWJsaW5nIiwiZ2V0UHJldmlvdXNTaWJsaW5nIiwicHJldmlvdXNTaWJsaW5nIiwiZm9yd2FyZHNTb21lIiwiYXJyYXkiLCJ0ZXN0IiwiYXJyYXlMZW5ndGgiLCJsZW5ndGgiLCJsYXN0SW5kZXgiLCJpbmRleCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxPQUFPLFNBQVNBLGVBQWVDLE9BQU87SUFDcEMsSUFBSUMsY0FBYztJQUVsQixJQUFNQyxXQUFXRixRQUFRRyxNQUFNLENBQUNDLFFBQVEsRUFBRSxHQUFHO0lBRTdDQyxjQUFjSCxVQUFVLFNBQUNJO1FBQ3ZCLElBQUlBLFlBQVlOLFNBQVM7WUFDdkIsT0FBTztRQUNUO1FBRUFDLGNBQWNLO0lBQ2hCO0lBRUEsT0FBT0w7QUFDVDtBQUVBLE9BQU8sU0FBU00sbUJBQW1CUCxPQUFPO0lBQ3hDLElBQUlRLGtCQUFrQjtJQUV0QixJQUFNTixXQUFXRixRQUFRRyxNQUFNLENBQUNDLFFBQVEsRUFBRSxHQUFHO0lBRTdDSyxhQUFhUCxVQUFVLFNBQUNJO1FBQ3RCLElBQUlBLFlBQVlOLFNBQVM7WUFDdkIsT0FBTztRQUNUO1FBRUFRLGtCQUFrQkY7SUFDcEI7SUFFQSxPQUFPRTtBQUNUO0FBRUEsU0FBU0MsYUFBYUMsS0FBSyxFQUFFQyxJQUFJO0lBQy9CLElBQU1DLGNBQWNGLE1BQU1HLE1BQU0sRUFDMUJDLFlBQVlGLGNBQWM7SUFFaEMsSUFBSyxJQUFJRyxRQUFRLEdBQUdBLFNBQVNELFdBQVdDLFFBQVM7UUFDL0MsSUFBTWYsVUFBVVUsS0FBSyxDQUFDSyxNQUFNLEVBQ3RCQyxTQUFTTCxLQUFLWCxTQUFTZTtRQUU3QixJQUFJQyxRQUFRO1lBQ1YsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxTQUFTWCxjQUFjSyxLQUFLLEVBQUVDLElBQUk7SUFDaEMsSUFBTUMsY0FBY0YsTUFBTUcsTUFBTSxFQUMxQkMsWUFBWUYsY0FBYztJQUVoQyxJQUFLLElBQUlHLFFBQVFELFdBQVdDLFNBQVMsR0FBR0EsUUFBUztRQUMvQyxJQUFNZixVQUFVVSxLQUFLLENBQUNLLE1BQU0sRUFDdEJDLFNBQVNMLEtBQUtYLFNBQVNlO1FBRTdCLElBQUlDLFFBQVE7WUFDVixPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU87QUFDVCJ9