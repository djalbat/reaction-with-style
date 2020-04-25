"use strict";

import withStyle from "../../index";  ///

import VerticalSplitter from "../verticalSplitter";

class MainVerticalSplitter extends VerticalSplitter {
  render(update) {
    const { className } = this.props;

    return (

      <div className={`${className} main vertical-splitter`} />

    );
  }
}

export default withStyle(MainVerticalSplitter)`

  width: 8px;
  min-width: 8px;
  background-color: lightgray;

`;
