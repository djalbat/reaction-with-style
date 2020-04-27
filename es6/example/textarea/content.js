"use strict";

import Textarea from "../textarea";

class ContentTextarea extends Textarea {
  static mixins = [
    getContent,
    setContent
  ];

  render(update) {
    const { className } = Textarea,
          { children } = this.props;

    return (

      <textarea className={`${className} content`}
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

export default ContentTextarea;

function getContent() {
  const value = this.getValue(),
        content = value;  ///

  return content;
}

function setContent(content) {
  const value = content;  ///

  this.setValue(value);
}
