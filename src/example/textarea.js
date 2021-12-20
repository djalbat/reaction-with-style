"use strict";

import withStyle from "../index";  ///

import { React } from "reaction";

import { KEYUP_EVENT } from "./events";

const { Component } = React;

class Textarea extends Component {
  onKeyUp = (keyUpHandler) => {
    const firstChild = this.getFirstChild(),
          firstChildDOMElement = firstChild.getDOMElement();

    firstChildDOMElement.addEventListener(KEYUP_EVENT, (event) => {
      keyUpHandler(event);
    });
  }

  setValue(value) {
    const firstChild = this.getFirstChild(),
        firstChildDOMElement = firstChild.getDOMElement();

    firstChildDOMElement.value = value;
  }

  getValue() {
    const firstChild = this.getFirstChild(),
        firstChildDOMElement = firstChild.getDOMElement();

    const value = firstChildDOMElement.value;

    return value;
  }

  componentDidMount() {
    const { onKeyUp } = this.props;

    if (onKeyUp) {
      const keyUpHandler = onKeyUp; ///

      this.onKeyUp(keyUpHandler);
    }
  }

  componentWillUnmount() {
    ///
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
