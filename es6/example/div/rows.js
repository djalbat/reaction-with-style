"use strict";

import withStyle from "../../index";  ///

const RowsDiv = (props) => {
  const { className, children } = props;

  return (

    <div className={`${className} rows`}>
      {children}
    </div>

  );
};

export default withStyle(RowsDiv)`

  display: flex;
  flex-grow: 1;
  flex-direction: column;

`;
