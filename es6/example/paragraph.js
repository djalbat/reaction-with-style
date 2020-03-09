'use strict';

import withStyle from '../../index';

import { React } from 'reaction';

const { Component } = React;

class Paragraph extends Component {
  render(update) {
    const { className, children } = this.props;

    return (

      <p className={className}>
        {children}
      </p>

    );
  };
}

export default withStyle(Paragraph)`

  color: blue;
  background-color: lightgreen;

`;
