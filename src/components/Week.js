import React from "react";
import moment from "moment";
import Paper from "material-ui/Paper";
import { filtered } from "../util/filter";

const Todays = ({ transactions }) => {
  let total = filtered(transactions, "week");

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
