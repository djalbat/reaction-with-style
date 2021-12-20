"use strict";

import withStyle from "../../../index";  ///

import { React } from "reaction";

import cursor from "../../cursor";

import { getPreviousSibling } from "../../../utilities/sibling";
import { MOUSEUP_EVENT, MOUSEMOVE_EVENT } from "../../events";

const { Component } = React;

class VerticalSplitterDiv extends Component {
  mouseUpHandler = (event) => {
    const dragging = this.isDragging();

    if (dragging) {
      this.stopDragging();
    }

    cursor.reset();
  }

  mouseMoveHandler = (event) => {
    const dragging = this.isDragging();

    if (dragging) {
      const mouseLeft = event.pageX,  ///
            relativeMouseLeft = mouseLeft - this.previousMouseLeft,
            sizeableDivWidth = this.previousSizeableDivWidth + relativeMouseLeft,
            width = sizeableDivWidth; ///

      this.sizeableDiv.setWidth(width);
    }
  }

  mouseDownHandler = (event) => {
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

  mouseOverHandler = (event) => {
    cursor.columnResize();
  }

  mouseOutHandler = (event) => {
    cursor.reset();
  }

  startDragging() {
    this.addClass("dragging");
  }

  stopDragging() {
    this.removeClass("dragging");
  }

  isDragging() {
    const dragging = this.hasClass("dragging");

    return dragging;
  }

  componentDidMount() {
    const previousSibling = getPreviousSibling(this),
          sizeableDiv = previousSibling;  ///

    this.sizeableDiv = sizeableDiv;

    window.addEventListener(MOUSEUP_EVENT, this.mouseUpHandler);

    window.addEventListener(MOUSEMOVE_EVENT, this.mouseMoveHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(MOUSEMOVE_EVENT, this.mouseMoveHandler);

    window.removeEventListener(MOUSEUP_EVENT, this.mouseUpHandler);

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

export default withStyle(VerticalSplitterDiv)`

  width: 1rem;
  flex-shrink: 0;  
  background-color: lightgrey;

`;
