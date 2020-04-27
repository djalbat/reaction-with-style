"use strict";

import withStyle from "./index";  ///

import { React, ReactDOM } from "reaction";

import View from "./example/view";

const { renderStyles } = withStyle;

window.React = React; ///

const Paragraph = withStyle.p`

  color: red;
  
`;

renderStyles();

const bodyDOMElement = document.querySelector("body");

const { className } = Paragraph;

ReactDOM.render(

    <Paragraph className={`${className} blah`}>
      Just testing...
    </Paragraph>

  ,
  bodyDOMElement
);
