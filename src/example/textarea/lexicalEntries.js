"use strict";

import Textarea from "../textarea";

import { DOUBLE_SPACE } from "../constants";

export default class LexicalEntriesTextarea extends Textarea {
  static mixins = [
    getLexicalEntries,
    setLexicalEntries
  ];

  render(update) {
    const { className } = Textarea,
          { children } = this.props;

    return (

      <textarea className={`${className} lexical-entries`}
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

function getLexicalEntries() {
  const value = this.getValue(),
        lexicalEntries = JSON.parse(value);

  return lexicalEntries;
}

function setLexicalEntries(lexicalEntries) {
  const value = JSON.stringify(lexicalEntries, null, DOUBLE_SPACE);

  this.setValue(value);
}
