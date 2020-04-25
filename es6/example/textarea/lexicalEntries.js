"use strict";

import withStyle from "../../index";  ///

import Textarea from "../textarea";

class LexicalEntriesTextarea extends Textarea {
  static mixins = [
    getLexicalEntries,
    setLexicalEntries
  ];

  render(update) {
    const { className, children } = this.props;

    return (

      <textarea className={`${className} lexical-entries`}
                ref={(domElement) => {

                  this.domElement = domElement;

                }}
      >
        {children}
      </textarea>

    );
  }
}

export default withStyle(LexicalEntriesTextarea)`

  overflow-wrap: normal;
  margin-bottom: 1rem;

`;

function getLexicalEntries() {
  const value = this.getValue(),
        lexicalEntries = JSON.parse(value);

  return lexicalEntries;
}

function setLexicalEntries(lexicalEntries) {
  const value = JSON.stringify(lexicalEntries, null, "  ");

  this.setValue(value);
}
