"use strict";

let previousCursor;  ///

const bodyDOMElement = document.querySelector("body");

function columnResize() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== "col-resize") {
    previousCursor = currentCursor;

    setCursor("col-resize");
  }
}

function rowResize() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== "row-resize") {
    previousCursor = currentCursor;

    setCursor("row-resize");
  }
}

function reset() {
  setCursor(previousCursor); ///
}

export default {
  columnResize,
  rowResize,
  reset
}

function setCursor(cursor) {
  bodyDOMElement.style.cursor = cursor;
}

function getCurrentCursor() {
  const currentCursor = bodyDOMElement.style.cursor;  ///

  return currentCursor || "auto"; ///
}
