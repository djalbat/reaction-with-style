"use strict";

import { AUTO, COL_RESIZE, ROW_RESIZE } from "./constants";

let previousCursor;  ///

const bodyDOMElement = document.querySelector("body");

function columnResize() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== COL_RESIZE) {
    previousCursor = currentCursor;

    setCursor(COL_RESIZE);
  }
}

function rowResize() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== ROW_RESIZE) {
    previousCursor = currentCursor;

    setCursor(ROW_RESIZE);
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

  return currentCursor || AUTO; ///
}
