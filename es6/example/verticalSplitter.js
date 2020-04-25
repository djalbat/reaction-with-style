"use strict";

import withStyle from "../index";  ///

import { React } from "reaction";

const { Component } = React;

class VerticalSplitter extends Component {}

export default withStyle(VerticalSplitter)`

  width: 0.8rem;
  flex-shrink: 0;

`;
