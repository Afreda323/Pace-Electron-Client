import React from "react";
import Trans from "../components/Trans";

const TransList = props => {
  const { budget, transactions } = props;
  return (
    <div>
      <h1>
        Budget: {budget}
      </h1>
      <ul>
        {transactions.length > 0
          ? transactions.map(trans => <Trans key={trans._id} trans={trans} />)
          : ""}
      </ul>
    </div>
  );
};

export default TransList;
