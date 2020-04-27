"use strict";

import withStyle from "../index";  ///

import { React } from "reaction";

import cursor from "./cursor";

import { getPreviousSibling } from "../utilities/sibling";

const { Component } = React;

class VerticalSplitter extends Component {
  static mixins = [
    mouseUpHandler,
    mouseMoveHandler,
    mouseDownHandler,
    mouseOverHandler,
    mouseOutHandler,
    startDragging,
    stopDragging,
    isDragging
  ];

  componentDidMount() {
    const previousSibling = getPreviousSibling(this),
          sizeableDiv = previousSibling;  ///

    this.sizeableDiv = sizeableDiv;

    window.addEventListener("mouseup", this.mouseUpHandler);

    window.addEventListener("mousemove", this.mouseMoveHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.mouseMoveHandler);

    window.removeEventListener("mouseup", this.mouseUpHandler);

    delete this.sizeableDiv;
  }

  render(update) {
    const { className } = this.props;

    return (

      <div className={`${className} vertical-splitter`}
           onMouseDown={this.mouseDownHandler}
           onMouseOver={this.mouseOverHandler}
           onMouseOut={this.mouseOutHandler}
      />

    );
  }
}

export default withStyle(VerticalSplitter)`

  width: 0.5rem;
  flex-shrink: 0;
  background-color: lightgrey;

`;

function mouseUpHandler() {
  const dragging = this.isDragging();

  if (dragging) {
    this.stopDragging();
  }

  cursor.reset();
}

function mouseMoveHandler(event) {
  const dragging = this.isDragging();

  if (dragging) {
    const mouseLeft = event.pageX,  ///
          relativeMouseLeft = mouseLeft - this.previousMouseLeft,
          sizeableDivWidth = this.previousSizeableDivWidth + relativeMouseLeft,
          width = sizeableDivWidth; ///

    this.sizeableDiv.setWidth(width);
  }
}

function mouseDownHandler(event) {
  const dragging = this.isDragging();

  if (!dragging) {
    const mouseLeft = event.pageX,  ///
          sizeableDivWidth = this.sizeableDiv.getWidth(),
          previousMouseLeft = mouseLeft,  ///
          previousSizeableDivWidth = sizeableDivWidth;   ///

    this.previousMouseLeft = previousMouseLeft;

    this.previousSizeableDivWidth = previousSizeableDivWidth;

    this.startDragging();
  }

  cursor.columnResize();
}

function mouseOverHandler() {
  cursor.columnResize();
}

function mouseOutHandler() {
  cursor.reset();
}

function startDragging() {
  this.addClass("dragging");
}

function stopDragging() {
  this.removeClass("dragging");
}

function isDragging() {
  const dragging = this.hasClass("dragging");

  return dragging;
}
