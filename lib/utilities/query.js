"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "queryByClass", {
    enumerable: true,
    get: function() {
        return queryByClass;
    }
});
function queryByClass(element, Class, maximumDepth = Infinity) {
    const depth = maximumDepth; ///
    return query(element, depth, (element)=>Class.prototype.isPrototypeOf(element));
}
function query(element, depth, test) {
    let foundElement = null;
    if (depth > 0) {
        depth--;
        const children = element.getChildren();
        children.some((child)=>{
            const element = child, found = test(element);
            foundElement = found ? element : query(element, depth, test);
            if (foundElement !== null) {
                return true;
            }
        });
    }
    return foundElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3MoZWxlbWVudCwgQ2xhc3MsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoOyAvLy9cblxuICByZXR1cm4gcXVlcnkoZWxlbWVudCwgZGVwdGgsIChlbGVtZW50KSA9PiAoQ2xhc3MucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoZWxlbWVudCkpKTtcbn1cblxuZnVuY3Rpb24gcXVlcnkoZWxlbWVudCwgZGVwdGgsIHRlc3QpIHtcbiAgbGV0IGZvdW5kRWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGRlcHRoID4gMCkge1xuICAgIGRlcHRoLS07XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLnNvbWUoKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gY2hpbGQsICAvLy9cbiAgICAgICAgICAgIGZvdW5kID0gdGVzdChlbGVtZW50KVxuXG4gICAgICBmb3VuZEVsZW1lbnQgPSBmb3VuZCA/XG4gICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeShlbGVtZW50LCBkZXB0aCwgdGVzdCk7XG5cbiAgICAgIGlmIChmb3VuZEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZm91bmRFbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbInF1ZXJ5QnlDbGFzcyIsImVsZW1lbnQiLCJDbGFzcyIsIm1heGltdW1EZXB0aCIsIkluZmluaXR5IiwiZGVwdGgiLCJxdWVyeSIsInByb3RvdHlwZSIsImlzUHJvdG90eXBlT2YiLCJ0ZXN0IiwiZm91bmRFbGVtZW50IiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsInNvbWUiLCJjaGlsZCIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLGFBQWFDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxlQUFlQyxRQUFRO0lBQ2xFLE1BQU1DLFFBQVFGLGNBQWMsR0FBRztJQUUvQixPQUFPRyxNQUFNTCxTQUFTSSxPQUFPLENBQUNKLFVBQWFDLE1BQU1LLFNBQVMsQ0FBQ0MsYUFBYSxDQUFDUDtBQUMzRTtBQUVBLFNBQVNLLE1BQU1MLE9BQU8sRUFBRUksS0FBSyxFQUFFSSxJQUFJO0lBQ2pDLElBQUlDLGVBQWU7SUFFbkIsSUFBSUwsUUFBUSxHQUFHO1FBQ2JBO1FBRUEsTUFBTU0sV0FBV1YsUUFBUVcsV0FBVztRQUVwQ0QsU0FBU0UsSUFBSSxDQUFDLENBQUNDO1lBQ2IsTUFBTWIsVUFBVWEsT0FDVkMsUUFBUU4sS0FBS1I7WUFFbkJTLGVBQWVLLFFBQ0VkLFVBQ0VLLE1BQU1MLFNBQVNJLE9BQU9JO1lBRXpDLElBQUlDLGlCQUFpQixNQUFNO2dCQUN6QixPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9