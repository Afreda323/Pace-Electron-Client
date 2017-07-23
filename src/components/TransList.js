import React from "react";

const TransList = props => {
  const { budget, transactions } = props;
  return (
    <div>
      <h1>
        Budget: {budget}
      </h1>
      {transactions.length > 0
        ? transactions.map(tr =>
            <p key={tr._id}>
              {tr.amount}
              <br />
              {tr.description}
            </p>
          )
        : ""}
    </div>
  );
};

export default TransList;
