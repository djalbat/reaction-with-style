"use strict";

import withStyle from "../../index";  ///

const ColumnDiv = (props) => {
  const { className, children } = props;

  return (

    <div className={`${className} column`}>
      {children}
    </div>

  );
};

export default withStyle(ColumnDiv)`

  display: flex;
  flex-grow: 1;

`;
