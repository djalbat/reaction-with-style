"use strict";

import withStyle from "../../index";  ///

import { React } from "reaction";

import { WIDTH } from "../constants";

const { Component } = React;

class SizeableDiv extends Component {
  getWidth() {
    const firstChild = this.getFirstChild(),
          firstChildDOMElement = firstChild.getDOMElement(),
          firstChildDOMElementOffsetWidth = firstChildDOMElement.offsetWidth,
          width = firstChildDOMElementOffsetWidth; ///

    return width;
  }

  setWidth(width) {
    width = `${width}px`; ///

    this.setStyle(WIDTH, width);
  }

  render(update) {
    const { className, children } = this.props;

    return (

      <div className={`${className} sizeable`}>
        {children}
      </div>

    );
  }
}

export default withStyle(SizeableDiv)`

  width: 48rem;
  display: flex;
  min-width: 24rem;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column;

`;
