'use strict';

import withStyle from '../index';

import { React, ReactDOM } from 'reaction';

window.React = React; ///

import Paragraph from './example/paragraph';

class ExampleParagraph extends Paragraph {
  render(update) {
    const { className } = this.props;

    const { children } = this.props;

    return (

      <p className={className}>
        {children}
      </p>

    );
  }
}

const StyledExampleParagraph = withStyle(ExampleParagraph)`

  color: red;
  
`;

const { renderStyles } = withStyle;

renderStyles();

const bodyDOMElement = document.querySelector('body');

ReactDOM.render(

    <div>
      <ExampleParagraph>
        What about this?
      </ExampleParagraph>
      <StyledExampleParagraph>
        This is working?
      </StyledExampleParagraph>
    </div>

  ,
  bodyDOMElement
);
