"use strict";

import Textarea from "../textarea";

import { EMPTY_STRING } from "../constants";

export default class ParseTreeTextarea extends Textarea {
  setParseTree(parseTree) {
    if (parseTree !== null) {
      parseTree.shiftLine();  //

      const parseTreeString = parseTree.asString(),
            value = parseTreeString;  ///

      this.setValue(value);
    } else {
      this.clearParseTree();
    }
  }

  clearParseTree() {
    const value = EMPTY_STRING;

    this.setValue(value);
  }

  render(update) {
    const { className } = Textarea,
          { children } = this.props;

    return (

      <textarea className={`${className} parse-tree`} spellCheck="false" readOnly>
        {children}
      </textarea>

    );
  }
}
