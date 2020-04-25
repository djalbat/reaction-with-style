"use strict";

import withStyle from "./index";  ///

import { React, ReactDOM } from "reaction";

import View from "./example/view";

const { renderStyles } = withStyle;

window.React = React; ///

renderStyles();

const bodyDOMElement = document.querySelector("body");

ReactDOM.render(

      <View />

    ,
    bodyDOMElement
);
