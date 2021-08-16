"use strict";

import Textarea from "../textarea";

import { EMPTY_STRING } from "../constants";

export default class ParseTreeTextarea extends Textarea {
  static mixins = [
    setParseTree,
    clearParseTree
  ];

  render(update) {
    const { className } = Textarea,
          { children } = this.props;

    return (

      <textarea className={`${className} parse-tree`}
                spellCheck="false"
                readOnly
                ref={(domElement) => {

                  this.domElement = domElement;

                }}
      >
        {children}
      </textarea>

    );
  }
}

function setParseTree(parseTree) {
  if (parseTree !== null) {
    parseTree.shiftLine();  //

    const parseTreeString = parseTree.asString(),
          value = parseTreeString;  ///

    this.setValue(value);
  } else {
    this.clearParseTree();
  }
}

function clearParseTree() {
  const value = EMPTY_STRING;

  this.setValue(value);
}
