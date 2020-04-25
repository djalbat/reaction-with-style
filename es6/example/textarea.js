"use strict";

import withStyle from "../index";  ///

import { React } from "reaction";

const { Component } = React;

class Textarea extends Component {
  static mixins = [
    onKeyUp,
    setValue,
    getValue,
    showError,
    hideError,
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

  width: 100%;
  font-size: 1rem;
  padding: 0.25rem;
  font-family: monospace;
  border: 1px solid darkgray;
  height: 16rem;
  resize: vertical;
  white-space: pre;
  margin-top: 0.5rem;
  
  .error {
    border-color: red;
  }

`;

function onKeyUp(keyUpHandler) {
  this.domElement.addEventListener("keyup", () => {
    const value = this.getValue();

    keyUpHandler(value);
  });
}

export function onChange(changeHandler) {
  this.domElement.addEventListener("input", () => {
    const value = this.getValue();

    changeHandler(value);
  });

}


function setValue(value) {
  this.domElement.value = value;
}

function getValue() {
  const value = this.domElement.value;

  return value;
}

function showError() {
  this.addClass("error");
}

function hideError() {
  this.removeClass("error");
}
