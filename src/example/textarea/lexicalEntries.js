"use strict";

import Textarea from "../textarea";

export default class LexicalEntriesTextarea extends Textarea {
  getLexicalEntries() {
    const value = this.getValue(),
          lexicalEntries = JSON.parse(value);

    return lexicalEntries;
  }

  setLexicalEntries(lexicalEntries) {
    const value = JSON.stringify(lexicalEntries, null, 2);

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
