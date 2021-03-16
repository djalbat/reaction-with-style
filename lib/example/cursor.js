"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var previousCursor; ///
var bodyDOMElement = document.querySelector("body");
function columnResize() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== "col-resize") {
        previousCursor = currentCursor;
        setCursor("col-resize");
    }
}
function rowResize() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== "row-resize") {
        previousCursor = currentCursor;
        setCursor("row-resize");
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
exports.default = _default;
function setCursor(cursor) {
    bodyDOMElement.style.cursor = cursor;
}
function getCurrentCursor() {
    var currentCursor = bodyDOMElement.style.cursor; ///
    return currentCursor || "auto"; ///
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1cnNvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmNvbnN0IGJvZHlET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmZ1bmN0aW9uIGNvbHVtblJlc2l6ZSgpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gXCJjb2wtcmVzaXplXCIpIHtcbiAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICBzZXRDdXJzb3IoXCJjb2wtcmVzaXplXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvd1Jlc2l6ZSgpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gXCJyb3ctcmVzaXplXCIpIHtcbiAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICBzZXRDdXJzb3IoXCJyb3ctcmVzaXplXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICBzZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb2x1bW5SZXNpemUsXG4gIHJvd1Jlc2l6ZSxcbiAgcmVzZXRcbn1cblxuZnVuY3Rpb24gc2V0Q3Vyc29yKGN1cnNvcikge1xuICBib2R5RE9NRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBjdXJzb3I7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDdXJzb3IoKSB7XG4gIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBib2R5RE9NRWxlbWVudC5zdHlsZS5jdXJzb3I7ICAvLy9cblxuICByZXR1cm4gY3VycmVudEN1cnNvciB8fCBcImF1dG9cIjsgLy8vXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7SUFFQSxjQUFBLEdBQUEsUUFBQSxDQUFBLGFBQUEsRUFBQSxJQUFBO1NBRUEsWUFBQTtRQUNBLGFBQUEsR0FBQSxnQkFBQTtRQUVBLGFBQUEsTUFBQSxVQUFBO0FBQ0Esc0JBQUEsR0FBQSxhQUFBO0FBRUEsaUJBQUEsRUFBQSxVQUFBOzs7U0FJQSxTQUFBO1FBQ0EsYUFBQSxHQUFBLGdCQUFBO1FBRUEsYUFBQSxNQUFBLFVBQUE7QUFDQSxzQkFBQSxHQUFBLGFBQUE7QUFFQSxpQkFBQSxFQUFBLFVBQUE7OztTQUlBLEtBQUE7QUFDQSxhQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBOzs7QUFJQSxnQkFBQSxFQUFBLFlBQUE7QUFDQSxhQUFBLEVBQUEsU0FBQTtBQUNBLFNBQUEsRUFBQSxLQUFBOzs7U0FHQSxTQUFBLENBQUEsTUFBQTtBQUNBLGtCQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsR0FBQSxNQUFBOztTQUdBLGdCQUFBO1FBQ0EsYUFBQSxHQUFBLGNBQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO1dBRUEsYUFBQSxLQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSJ9