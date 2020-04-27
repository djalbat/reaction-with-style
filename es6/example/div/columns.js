"use strict";

import withStyle from "../../index";  ///

const ColumnsDiv = (props) => {
  const { className, children } = props;

  return (

    <div className={`${className} columns`}>
      {children}
    </div>

  );
};

export default withStyle(ColumnsDiv)`

  display: flex;
  flex-grow: 1;
  flex-direction: row;

`;
