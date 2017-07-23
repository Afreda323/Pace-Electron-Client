import React from "react";
import moment from "moment";
import Paper from "material-ui/Paper";

const Todays = ({ transactions }) => {
  let total;
  transactions.length > 1
    ? (total = transactions
        .filter(tr => moment(tr.timestamp).isSame(Date.now(), "week"))
        .reduce((a, b) => ({ amount: a.amount + b.amount })).amount)
    : transactions.length === 1
      ? (total = transactions[0].amount)
      : (total = "0");

  return (
    <Paper zDepth={2}>
      <div>
        <h1>This Week's Total</h1>
        <hr />
        <h2>
          ${total}
        </h2>
      </div>
    </Paper>
  );
};

export default Todays;
