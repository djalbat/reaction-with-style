"use strict";

import withStyle from "../../index";

const SizeableDiv = (props) => {
  const { className, children } = props;

  return (

    <div className={`${className} sizeable`}>
      {children}
    </div>

  );
};

export default withStyle(SizeableDiv)`

  width: 40rem;
  min-width: 20rem;
  max-width: 120rem;
  padding-left: 1rem;
  padding-right: 1rem;

`;
