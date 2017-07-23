import React from "react";

const Trans = ({ trans }) => {
  return (
    <li>
      {trans.amount}
      <br />
      {trans.description}
      <br />
      {trans.timestamp}
    </li>
  );
};

export default Trans;
