"use strict";

import withStyle from "../../index";  ///

import cursor from "../cursor";
import VerticalSplitter from "../verticalSplitter";

import { ESCAPE_KEY_CODE } from "../../constants";

class MainVerticalSplitter extends VerticalSplitter {
  static mixins = [
    startDraggingHandler,
    stopDraggingHandler,
    keyDownHandler,
    mouseUpHandler,
    mouseMoveHandler,
    mouseDownHandler,
    mouseOverHandler,
    mouseOutHandler,
  ];

  componentDidMount() {
    this.onMouseUp(this.mouseUpHandler);
    this.onMouseMove(this.mouseMoveHandler);
    this.onMouseDown(this.mouseDownHandler);
    this.onMouseOver(this.mouseOverHandler);
    this.onMouseOut(this.mouseOutHandler);
  }

  componentWillUnmount() {

  }

  render(update) {
    const { className } = this.props;

    return (

      <div className={`${className} main vertical-splitter`}
           ref={(domElement) => {

             this.domElement = domElement;

           }}
      />

    );
  }
}

export default withStyle(MainVerticalSplitter)`

  width: 8px;
  min-width: 8px;
  background-color: lightgray;

`;

function startDraggingHandler() {

}

function stopDraggingHandler() {

}

function keyDownHandler(event) {
  const { keyCode } = event;

  if (keyCode === ESCAPE_KEY_CODE) {
    const dragging = this.isDragging();

    if (dragging) {
      this.stopDragging();
    }
  }
}

function mouseUpHandler() {
  const dragging = this.isDragging();

  if (dragging) {
    this.stopDragging();
  }

  cursor.reset();
}

function mouseMoveHandler(mouseTop, mouseLeft) {
  const dragging = this.isDragging();

  if (dragging) {
    const direction = this.getDirection(),
          dragHandler = this.getDragHandler(),
          sizeableElement = this.getSizeableElement(),
          previousMouseLeft = this.getPreviousMouseLeft(),
          previousSizeableElementWidth = this.getPreviousSizeableElementWidth(),
          relativeMouseLeft = mouseLeft - previousMouseLeft;

    let sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft;

    const width = sizeableElementWidth; ///

    sizeableElement.setWidth(width);

    sizeableElementWidth = sizeableElement.getWidth();  ///

    dragHandler(sizeableElementWidth);
  }
}

function mouseDownHandler(mouseTop, mouseLeft) {
  const previousMouseLeft = mouseLeft,  ///
        dragging = this.isDragging(),
        sizeableElement = this.getSizeableElement(),
        sizeableElementWidth = sizeableElement.getWidth(),
        previousSizeableElementWidth = sizeableElementWidth;  ///

  this.setPreviousMouseLeft(previousMouseLeft);

  this.setPreviousSizeableElementWidth(previousSizeableElementWidth);

  if (!dragging) {
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
