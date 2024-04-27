"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isClass", {
    enumerable: true,
    get: function() {
        return isClass;
    }
});
var _reaction = require("reaction");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function isClass(argument) {
    return isSubclassOf(argument, _reaction.React.Component);
} ///
function isSubclassOf(argument, Class) {
    var subclassOf = _instanceof(argument.prototype, Class);
    return subclassOf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcInJlYWN0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NsYXNzKGFyZ3VtZW50KSB7IHJldHVybiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIFJlYWN0LkNvbXBvbmVudCk7IH0gIC8vL1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIl0sIm5hbWVzIjpbImlzQ2xhc3MiLCJhcmd1bWVudCIsImlzU3ViY2xhc3NPZiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2xhc3MiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSWdCQTs7O2VBQUFBOzs7d0JBRk07Ozs7Ozs7O0FBRWYsU0FBU0EsUUFBUUMsUUFBUTtJQUFJLE9BQU9DLGFBQWFELFVBQVVFLGVBQUssQ0FBQ0MsU0FBUztBQUFHLEVBQUcsR0FBRztBQUUxRixTQUFTRixhQUFhRCxRQUFRLEVBQUVJLEtBQUs7SUFDbkMsSUFBTUMsYUFBY0wsQUFBa0IsWUFBbEJBLFNBQVNNLFNBQVMsRUFBWUY7SUFFbEQsT0FBT0M7QUFDVCJ9