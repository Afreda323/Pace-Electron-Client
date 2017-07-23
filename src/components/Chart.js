import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { filtered } from "../util/filter";

const Chart = ({ transactions, budget }) => {
  const remaining = budget - filtered(transactions, "week");
  return (
    <Paper zDepth={2}>
      <div>
        <h1>Chart</h1>
        <h1>Weekly Remaining</h1>
        ${remaining}
      </div>
    </Paper>
  );
};

export default Chart;
