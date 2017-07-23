import React from "react";
import Paper from "material-ui/Paper";
import { filtered } from "../util/filter";

const Todays = ({ transactions }) => {
  let total = filtered(transactions, "day");

  return (
    <Paper zDepth={2}>
      <div>
        <h1>Today's' Total</h1>
        <hr />
        <h2>
          ${total}
        </h2>
      </div>
    </Paper>
  );
};

export default Todays;
