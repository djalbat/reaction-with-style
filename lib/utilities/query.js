"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queryByClass = queryByClass;
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function queryByClass(element1, Class) {
    var maximumDepth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
    var depth = maximumDepth; ///
    return query(element1, depth, function(element) {
        return _instanceof(element, Class);
    });
}
function query(element2, depth, test) {
    var foundElement = null;
    if (depth > 0) {
        depth--;
        var children = element2.getChildren();
        children.some(function(child) {
            var element = child, found = test(element);
            foundElement = found ? element : query(element, depth, test);
            if (foundElement !== null) {
                return true;
            }
        });
    }
    return foundElement;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3MoZWxlbWVudCwgQ2xhc3MsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoOyAvLy9cblxuICByZXR1cm4gcXVlcnkoZWxlbWVudCwgZGVwdGgsIChlbGVtZW50KSA9PiAoZWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5KGVsZW1lbnQsIGRlcHRoLCB0ZXN0KSB7XG4gIGxldCBmb3VuZEVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChkZXB0aCA+IDApIHtcbiAgICBkZXB0aC0tO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5zb21lKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkLCAgLy8vXG4gICAgICAgICAgICBmb3VuZCA9IHRlc3QoZWxlbWVudClcblxuICAgICAgZm91bmRFbGVtZW50ID0gZm91bmQgP1xuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50IDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkoZWxlbWVudCwgZGVwdGgsIHRlc3QpO1xuXG4gICAgICBpZiAoZm91bmRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kRWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJxdWVyeUJ5Q2xhc3MiLCJlbGVtZW50IiwiQ2xhc3MiLCJtYXhpbXVtRGVwdGgiLCJJbmZpbml0eSIsImRlcHRoIiwicXVlcnkiLCJ0ZXN0IiwiZm91bmRFbGVtZW50IiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsInNvbWUiLCJjaGlsZCIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7O1FBRUlBLFlBQVksR0FBWkEsWUFBWTs7Ozs7Ozs7U0FBWkEsWUFBWSxDQUFDQyxRQUFPLEVBQUVDLEtBQUssRUFBMkIsQ0FBQztRQUExQkMsWUFBWSxvRUFBR0MsUUFBUTtJQUNsRSxHQUFLLENBQUNDLEtBQUssR0FBR0YsWUFBWSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUUvQixNQUFNLENBQUNHLEtBQUssQ0FBQ0wsUUFBTyxFQUFFSSxLQUFLLEVBQUUsUUFBUSxDQUFQSixPQUFPO1FBQUssTUFBTSxDQUFMQSxXQUF3QixDQUF4QkEsT0FBTyxFQUFZQyxLQUFLOztBQUNyRSxDQUFDO1NBRVFJLEtBQUssQ0FBQ0wsUUFBTyxFQUFFSSxLQUFLLEVBQUVFLElBQUksRUFBRSxDQUFDO0lBQ3BDLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHLElBQUk7SUFFdkIsRUFBRSxFQUFFSCxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDZEEsS0FBSztRQUVMLEdBQUssQ0FBQ0ksUUFBUSxHQUFHUixRQUFPLENBQUNTLFdBQVc7UUFFcENELFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7WUFDeEIsR0FBSyxDQUFDWCxPQUFPLEdBQUdXLEtBQUssRUFDZkMsS0FBSyxHQUFHTixJQUFJLENBQUNOLE9BQU87WUFFMUJPLFlBQVksR0FBR0ssS0FBSyxHQUNIWixPQUFPLEdBQ0xLLEtBQUssQ0FBQ0wsT0FBTyxFQUFFSSxLQUFLLEVBQUVFLElBQUk7WUFFN0MsRUFBRSxFQUFFQyxZQUFZLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDQSxZQUFZO0FBQ3JCLENBQUMifQ==