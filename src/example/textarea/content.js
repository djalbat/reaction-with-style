"use strict";

import Textarea from "../textarea";

export default class ContentTextarea extends Textarea {
  getContent() {
    const value = this.getValue(),
          content = value;  ///

    return content;
  }

  setContent(content) {
    const value = content;  ///

    this.setValue(value);
  }

  render(update) {
    const { className } = Textarea,
          { children } = this.props;

    return (

      <textarea className={`${className} content`} spellCheck="false">
        {children}
      </textarea>

    );
  }
}
