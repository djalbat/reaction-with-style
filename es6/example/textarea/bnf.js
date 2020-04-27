"use strict";

import Textarea from "../textarea";

class BNFTextarea extends Textarea {
  static mixins = [
    getBNF,
    setBNF
  ];

  render(update) {
    const { className } = Textarea,
          { children } = this.props;

    return (

      <textarea className={`${className} bnf`}
                spellCheck="false"
                ref={(domElement) => {

                  this.domElement = domElement;

                }}
      >
        {children}
      </textarea>

    );
  }
}

export default BNFTextarea;

function getBNF() {
  const value = this.getValue(),
        bnf = value;  ///

  return bnf;
}

function setBNF(bnf) {
  const value = bnf;  ///

  this.setValue(value);
}
