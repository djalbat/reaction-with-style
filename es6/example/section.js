'use strict';

import withStyle from '../../index';

const Section = (props) => {
  const { className, children } = props;

  return (

    <section className={className}>
      {children}
    </section>

  );
};

export default withStyle(Section)`

  color: red;
  background-color: lightblue;

`;
