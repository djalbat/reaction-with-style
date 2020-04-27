"use strict";

import withStyle from "../../index";  ///

import { React } from "reaction";

const { Component } = React;

class SizeableDiv extends Component {
  static mixins = [
    getWidth,
    setWidth
  ];

  render(update) {
    const { className, children } = this.props;

    return (

        <div className={`${className} sizeable`}
             ref={(domElement) => {

               this.domElement = domElement;

             }}
        >
          {children}
        </div>

    );
  }
}

export default withStyle(SizeableDiv)`

  width: 50%;
  padding-right: 1rem;

`;

function getWidth() {
  const domElementOffsetWidth = this.domElement.offsetWidth,
        width = domElementOffsetWidth; ///

  return width;
}

function setWidth(width) {
  width = `${width}px`; ///

  this.setStyle("width", width);
}