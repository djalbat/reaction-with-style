"use strict";

import withStyle from "../index";  ///

import { React } from "reaction";

const { Component } = React;

class VerticalSplitter extends Component {
  static mixins = [
    isDragging,
    startDragging,
    stopDragging,
    onKeyDown,
    onMouseUp,
    onMouseDown,
    onMouseMove,
    onMouseOver,
    onMouseOut
  ];
}

export default withStyle(VerticalSplitter)`

  width: 0.8rem;
  flex-shrink: 0;

`;

function isDragging() {
  const dragging = this.hasClass('dragging');

  return dragging;
}

function startDragging() {
  this.onKeyDown(this.keyDownHandler, this);

  this.addClass('dragging');

  this.startDraggingHandler();
}

function stopDragging() {
  this.offKeyDown(this.keyDownHandler, this);

  this.removeClass('dragging');

  this.stopDraggingHandler();
}

function onKeyDown(keyDownHandler) {
  window.addEventListener("keydown", keyDownHandler);
}

function onMouseUp(mouseUpHandler) {
  window.addEventListener('mouseup blur', mouseUpHandler);
}

function onMouseDown(mouseDownHandler) {
  window.addEventListener("mousedown", mouseDownHandler);
}

function onMouseMove(mouseMoveHandler) {
  window.addEventListener("mousemove", mouseMoveHandler);
}

function onMouseOver(mouseOverHandler) {
  this.domElement.addEventListener("mouseover", mouseOverHandler);
}

function onMouseOut(mouseOutHandler) {
  this.domElement.addEventListener("mouseout", mouseOutHandler);
}
