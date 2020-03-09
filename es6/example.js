'use strict';

import withStyle from '../index';

import { React, ReactDOM } from 'reaction';

window.React = React; ///

import Link from './example/link';
import Section from './example/section';
import Paragraph from './example/paragraph';

const ExampleLink = withStyle(Link)`

  color: green;
  background: lightyellow;

`;

class ExampleParagraph extends Paragraph {}

const StyledExampleParagraph = withStyle(ExampleParagraph)`

  color: black;
  
`;

// class ExampleParagraph extends Paragraph {
//   render(update) {
//     const { className } = Paragraph;
//
//     debugger
//   }
// }

// const ExampleParagraph = withStyle(Paragraph)`
//
//   color: red;
// `;

const ExampleSection = withStyle(Section)`

  color: green;
  
`;

const { renderStyles } = withStyle;

renderStyles();

const bodyDOMElement = document.querySelector('body');

ReactDOM.render(

    <div>
      <ExampleLink>
        Working!
      </ExampleLink>
      <Link>
        Yes!
      </Link>
      <Section>
        Working!
      </Section>
      <ExampleSection>
        Also working!
      </ExampleSection>
      <Paragraph>
        Now also working!
      </Paragraph>
      <StyledExampleParagraph>
        This is working?
      </StyledExampleParagraph>
    </div>

  ,
  bodyDOMElement
);
