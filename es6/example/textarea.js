"use strict";

import withStyle from "../index";  ///

import { React } from "reaction";

const { Component } = React;

class Textarea extends Component {
  static mixins = [
    onKeyUp,
    setValue,
    getValue
  ];

  componentDidMount() {
    const { onKeyUp } = this.props;

    if (onKeyUp) {
      const keyUpHandler = onKeyUp; ///

      this.onKeyUp(keyUpHandler);
    }
  }
}

export default withStyle(Textarea)`

  border: 1px solid darkgrey;
  height: 24rem;
  resize: vertical;
  padding: 0.25rem;
  font-size: 1.2rem;
  white-space: pre;
  font-family: monospace;

`;

function onKeyUp(keyUpHandler) {
  this.domElement.addEventListener("keyup", (event) => {
    keyUpHandler(event);
  });
}

function setValue(value) {
  this.domElement.value = value;
}

function getValue() {
  const value = this.domElement.value;

  return value;
}
