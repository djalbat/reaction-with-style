"use strict";

import Textarea from "../textarea";

export default class BNFTextarea extends Textarea {
  getBNF() {
    const value = this.getValue(),
          bnf = value;  ///

    return bnf;
  }

  setBNF(bnf) {
    const value = bnf;  ///

    this.setValue(value);
  }

  render(update) {
    const { className } = Textarea,
          { children } = this.props;

    return (

      <textarea className={`${className} bnf`} spellCheck="false">
        {children}
      </textarea>

    );
  }
}
