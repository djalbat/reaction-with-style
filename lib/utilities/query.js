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
    return query(element, depth, (element)=>element instanceof Class);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUJ5Q2xhc3MoZWxlbWVudCwgQ2xhc3MsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoOyAvLy9cblxuICByZXR1cm4gcXVlcnkoZWxlbWVudCwgZGVwdGgsIChlbGVtZW50KSA9PiAoZWxlbWVudCBpbnN0YW5jZW9mIENsYXNzKSk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5KGVsZW1lbnQsIGRlcHRoLCB0ZXN0KSB7XG4gIGxldCBmb3VuZEVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChkZXB0aCA+IDApIHtcbiAgICBkZXB0aC0tO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5zb21lKChjaGlsZCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGNoaWxkLCAgLy8vXG4gICAgICAgICAgICBmb3VuZCA9IHRlc3QoZWxlbWVudClcblxuICAgICAgZm91bmRFbGVtZW50ID0gZm91bmQgP1xuICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50IDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkoZWxlbWVudCwgZGVwdGgsIHRlc3QpO1xuXG4gICAgICBpZiAoZm91bmRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZvdW5kRWxlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJxdWVyeUJ5Q2xhc3MiLCJlbGVtZW50IiwiQ2xhc3MiLCJtYXhpbXVtRGVwdGgiLCJJbmZpbml0eSIsImRlcHRoIiwicXVlcnkiLCJ0ZXN0IiwiZm91bmRFbGVtZW50IiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsInNvbWUiLCJjaGlsZCIsImZvdW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFZ0JBOzs7ZUFBQUE7OztBQUFULFNBQVNBLGFBQWFDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxlQUFlQyxRQUFRO0lBQ2xFLE1BQU1DLFFBQVFGLGNBQWMsR0FBRztJQUUvQixPQUFPRyxNQUFNTCxTQUFTSSxPQUFPLENBQUNKLFVBQWFBLG1CQUFtQkM7QUFDaEU7QUFFQSxTQUFTSSxNQUFNTCxPQUFPLEVBQUVJLEtBQUssRUFBRUUsSUFBSTtJQUNqQyxJQUFJQyxlQUFlO0lBRW5CLElBQUlILFFBQVEsR0FBRztRQUNiQTtRQUVBLE1BQU1JLFdBQVdSLFFBQVFTLFdBQVc7UUFFcENELFNBQVNFLElBQUksQ0FBQyxDQUFDQztZQUNiLE1BQU1YLFVBQVVXLE9BQ1ZDLFFBQVFOLEtBQUtOO1lBRW5CTyxlQUFlSyxRQUNFWixVQUNFSyxNQUFNTCxTQUFTSSxPQUFPRTtZQUV6QyxJQUFJQyxpQkFBaUIsTUFBTTtnQkFDekIsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==