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
    var test = function(element) {
        return _instanceof(element, Class);
    }, depth = maximumDepth; ///
    return query(element1, depth, test);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3MoZWxlbWVudCwgQ2xhc3MsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IHRlc3QgPSAoZWxlbWVudCkgPT4gKGVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcyksXG4gICAgICAgIGRlcHRoID0gbWF4aW11bURlcHRoOyAvLy9cblxuICByZXR1cm4gcXVlcnkoZWxlbWVudCwgZGVwdGgsIHRlc3QpO1xufVxuXG5mdW5jdGlvbiBxdWVyeShlbGVtZW50LCBkZXB0aCwgdGVzdCkge1xuICBsZXQgZm91bmRFbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZGVwdGggPiAwKSB7XG4gICAgZGVwdGgtLTtcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxlbWVudC5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uc29tZSgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZCwgIC8vL1xuICAgICAgICAgICAgZm91bmQgPSB0ZXN0KGVsZW1lbnQpXG5cbiAgICAgIGZvdW5kRWxlbWVudCA9IGZvdW5kID9cbiAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5KGVsZW1lbnQsIGRlcHRoLCB0ZXN0KTtcblxuICAgICAgaWYgKGZvdW5kRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZEVsZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsicXVlcnlCeUNsYXNzIiwiZWxlbWVudCIsIkNsYXNzIiwibWF4aW11bURlcHRoIiwiSW5maW5pdHkiLCJ0ZXN0IiwiZGVwdGgiLCJxdWVyeSIsImZvdW5kRWxlbWVudCIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJzb21lIiwiY2hpbGQiLCJmb3VuZCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQUVJQSxZQUFZLEdBQVpBLFlBQVk7Ozs7Ozs7O1NBQVpBLFlBQVksQ0FBQ0MsUUFBTyxFQUFFQyxLQUFLLEVBQTJCLENBQUM7UUFBMUJDLFlBQVksb0VBQUdDLFFBQVE7SUFDbEUsR0FBSyxDQUFDQyxJQUFJLEdBQUcsUUFBUSxDQUFQSixPQUFPO1FBQUssTUFBTSxDQUFMQSxXQUF3QixDQUF4QkEsT0FBTyxFQUFZQyxLQUFLO09BQzdDSSxLQUFLLEdBQUdILFlBQVksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFL0IsTUFBTSxDQUFDSSxLQUFLLENBQUNOLFFBQU8sRUFBRUssS0FBSyxFQUFFRCxJQUFJO0FBQ25DLENBQUM7U0FFUUUsS0FBSyxDQUFDTixRQUFPLEVBQUVLLEtBQUssRUFBRUQsSUFBSSxFQUFFLENBQUM7SUFDcEMsR0FBRyxDQUFDRyxZQUFZLEdBQUcsSUFBSTtJQUV2QixFQUFFLEVBQUVGLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNkQSxLQUFLO1FBRUwsR0FBSyxDQUFDRyxRQUFRLEdBQUdSLFFBQU8sQ0FBQ1MsV0FBVztRQUVwQ0QsUUFBUSxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztZQUN4QixHQUFLLENBQUNYLE9BQU8sR0FBR1csS0FBSyxFQUNmQyxLQUFLLEdBQUdSLElBQUksQ0FBQ0osT0FBTztZQUUxQk8sWUFBWSxHQUFHSyxLQUFLLEdBQ0haLE9BQU8sR0FDTE0sS0FBSyxDQUFDTixPQUFPLEVBQUVLLEtBQUssRUFBRUQsSUFBSTtZQUU3QyxFQUFFLEVBQUVHLFlBQVksS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDMUIsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUNBLFlBQVk7QUFDckIsQ0FBQyJ9