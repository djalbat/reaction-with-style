"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNextSibling = getNextSibling;
exports.getPreviousSibling = getPreviousSibling;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2libGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRTaWJsaW5nKGVsZW1lbnQpIHtcbiAgbGV0IG5leHRTaWJsaW5nID0gbnVsbDtcblxuICBjb25zdCBzaWJsaW5ncyA9IGVsZW1lbnQucGFyZW50LmNoaWxkcmVuOyAvLy9cblxuICBiYWNrd2FyZHNTb21lKHNpYmxpbmdzLCAoc2libGluZykgPT4ge1xuICAgIGlmIChzaWJsaW5nID09PSBlbGVtZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZXh0U2libGluZyA9IHNpYmxpbmc7XG4gIH0pO1xuXG4gIHJldHVybiBuZXh0U2libGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZyhlbGVtZW50KSB7XG4gIGxldCBwcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuXG4gIGNvbnN0IHNpYmxpbmdzID0gZWxlbWVudC5wYXJlbnQuY2hpbGRyZW47IC8vL1xuXG4gIGZvcndhcmRzU29tZShzaWJsaW5ncywgKHNpYmxpbmcpID0+IHtcbiAgICBpZiAoc2libGluZyA9PT0gZWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHJldmlvdXNTaWJsaW5nID0gc2libGluZztcbiAgfSk7XG5cbiAgcmV0dXJuIHByZXZpb3VzU2libGluZztcbn1cblxuZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBhcnJheUxlbmd0aCAtIDE7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8PSBsYXN0SW5kZXg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgICBsYXN0SW5kZXggPSBhcnJheUxlbmd0aCAtIDE7XG5cbiAgZm9yIChsZXQgaW5kZXggPSBsYXN0SW5kZXg7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7UUFFQSxjQUFBLEdBQUEsY0FBQTtRQWdCQSxrQkFBQSxHQUFBLGtCQUFBO1NBaEJBLGNBQUEsQ0FBQSxPQUFBO1FBQ0EsV0FBQSxHQUFBLElBQUE7UUFFQSxRQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSxpQkFBQSxDQUFBLFFBQUEsV0FBQSxPQUFBO1lBQ0EsT0FBQSxLQUFBLE9BQUE7bUJBQ0EsSUFBQTs7QUFHQSxtQkFBQSxHQUFBLE9BQUE7O1dBR0EsV0FBQTs7U0FHQSxrQkFBQSxDQUFBLE9BQUE7UUFDQSxlQUFBLEdBQUEsSUFBQTtRQUVBLFFBQUEsR0FBQSxPQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLGdCQUFBLENBQUEsUUFBQSxXQUFBLE9BQUE7WUFDQSxPQUFBLEtBQUEsT0FBQTttQkFDQSxJQUFBOztBQUdBLHVCQUFBLEdBQUEsT0FBQTs7V0FHQSxlQUFBOztTQUdBLFlBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQTtRQUNBLFdBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxFQUNBLFNBQUEsR0FBQSxXQUFBLEdBQUEsQ0FBQTtZQUVBLEtBQUEsR0FBQSxDQUFBLEVBQUEsS0FBQSxJQUFBLFNBQUEsRUFBQSxLQUFBO1lBQ0EsT0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLEdBQ0EsTUFBQSxHQUFBLElBQUEsQ0FBQSxPQUFBLEVBQUEsS0FBQTtZQUVBLE1BQUE7bUJBQ0EsSUFBQTs7O1dBSUEsS0FBQTs7U0FHQSxhQUFBLENBQUEsS0FBQSxFQUFBLElBQUE7UUFDQSxXQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFDQSxTQUFBLEdBQUEsV0FBQSxHQUFBLENBQUE7WUFFQSxLQUFBLEdBQUEsU0FBQSxFQUFBLEtBQUEsSUFBQSxDQUFBLEVBQUEsS0FBQTtZQUNBLE9BQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxHQUNBLE1BQUEsR0FBQSxJQUFBLENBQUEsT0FBQSxFQUFBLEtBQUE7WUFFQSxNQUFBO21CQUNBLElBQUE7OztXQUlBLEtBQUEifQ==