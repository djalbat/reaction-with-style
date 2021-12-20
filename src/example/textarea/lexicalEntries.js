"use strict";

import Textarea from "../textarea";

import { DOUBLE_SPACE } from "../constants";

export default class LexicalEntriesTextarea extends Textarea {
  getLexicalEntries() {
    const value = this.getValue(),
          lexicalEntries = JSON.parse(value);

    return lexicalEntries;
  }

  setLexicalEntries(lexicalEntries) {
    const value = JSON.stringify(lexicalEntries, null, DOUBLE_SPACE);

    this.setValue(value);
  }

  render(update) {
    const { className } = Textarea,
          { children } = this.props;

    return (

      <textarea className={`${className} lexical-entries`} spellCheck="false">
        {children}
      </textarea>

    );
  }
}
