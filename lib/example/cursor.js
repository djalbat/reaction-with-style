"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _constants = require("./constants");
var previousCursor; ///
var bodyDOMElement = document.querySelector("body");
function columnResize() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== _constants.COL_RESIZE) {
        previousCursor = currentCursor;
        setCursor(_constants.COL_RESIZE);
    }
}
function rowResize() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== _constants.ROW_RESIZE) {
        previousCursor = currentCursor;
        setCursor(_constants.ROW_RESIZE);
    }
}
function reset() {
    setCursor(previousCursor); ///
}
var _default = {
    columnResize: columnResize,
    rowResize: rowResize,
    reset: reset
};
function setCursor(cursor) {
    bodyDOMElement.style.cursor = cursor;
}
function getCurrentCursor() {
    var currentCursor = bodyDOMElement.style.cursor; ///
    return currentCursor || _constants.AUTO; ///
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1cnNvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQVVUTywgQ09MX1JFU0laRSwgUk9XX1JFU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5sZXQgcHJldmlvdXNDdXJzb3I7ICAvLy9cblxuY29uc3QgYm9keURPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuZnVuY3Rpb24gY29sdW1uUmVzaXplKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gIGlmIChjdXJyZW50Q3Vyc29yICE9PSBDT0xfUkVTSVpFKSB7XG4gICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgc2V0Q3Vyc29yKENPTF9SRVNJWkUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvd1Jlc2l6ZSgpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gUk9XX1JFU0laRSkge1xuICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgIHNldEN1cnNvcihST1dfUkVTSVpFKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29sdW1uUmVzaXplLFxuICByb3dSZXNpemUsXG4gIHJlc2V0XG59XG5cbmZ1bmN0aW9uIHNldEN1cnNvcihjdXJzb3IpIHtcbiAgYm9keURPTUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gY3Vyc29yO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gYm9keURPTUVsZW1lbnQuc3R5bGUuY3Vyc29yOyAgLy8vXG5cbiAgcmV0dXJuIGN1cnJlbnRDdXJzb3IgfHwgQVVUTzsgLy8vXG59XG4iXSwibmFtZXMiOlsicHJldmlvdXNDdXJzb3IiLCJib2R5RE9NRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbHVtblJlc2l6ZSIsImN1cnJlbnRDdXJzb3IiLCJnZXRDdXJyZW50Q3Vyc29yIiwiQ09MX1JFU0laRSIsInNldEN1cnNvciIsInJvd1Jlc2l6ZSIsIlJPV19SRVNJWkUiLCJyZXNldCIsImN1cnNvciIsInN0eWxlIiwiQVVUTyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0NBOzs7ZUFBQTs7O3lCQTlCNkM7QUFFN0MsSUFBSUEsZ0JBQWlCLEdBQUc7QUFFeEIsSUFBTUMsaUJBQWlCQyxTQUFTQyxhQUFhLENBQUM7QUFFOUMsU0FBU0M7SUFDUCxJQUFNQyxnQkFBZ0JDO0lBRXRCLElBQUlELGtCQUFrQkUscUJBQVUsRUFBRTtRQUNoQ1AsaUJBQWlCSztRQUVqQkcsVUFBVUQscUJBQVU7SUFDdEI7QUFDRjtBQUVBLFNBQVNFO0lBQ1AsSUFBTUosZ0JBQWdCQztJQUV0QixJQUFJRCxrQkFBa0JLLHFCQUFVLEVBQUU7UUFDaENWLGlCQUFpQks7UUFFakJHLFVBQVVFLHFCQUFVO0lBQ3RCO0FBQ0Y7QUFFQSxTQUFTQztJQUNQSCxVQUFVUixpQkFBaUIsR0FBRztBQUNoQztJQUVBLFdBQWU7SUFDYkksY0FBQUE7SUFDQUssV0FBQUE7SUFDQUUsT0FBQUE7QUFDRjtBQUVBLFNBQVNILFVBQVVJLE1BQU07SUFDdkJYLGVBQWVZLEtBQUssQ0FBQ0QsTUFBTSxHQUFHQTtBQUNoQztBQUVBLFNBQVNOO0lBQ1AsSUFBTUQsZ0JBQWdCSixlQUFlWSxLQUFLLENBQUNELE1BQU0sRUFBRyxHQUFHO0lBRXZELE9BQU9QLGlCQUFpQlMsZUFBSSxFQUFFLEdBQUc7QUFDbkMifQ==