"use strict";

import withStyle from "../../index";  ///

import Textarea from "../textarea";

class ParseTreeTextarea extends Textarea {
  static mixins = [
    setParseTree,
    clearParseTree
  ];

  render(update) {
    const { className, children } = this.props;

    return (

      <textarea className={`${className} parse-tree`}
                ref={(domElement) => {

                  this.domElement = domElement;

                }}
      >
        {children}
      </textarea>

    );
  }
}

export default withStyle(ParseTreeTextarea)`

  margin-bottom: 1rem;

`;

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
  const value = "";

  this.setValue(value);
}
