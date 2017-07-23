import React from "react";
import Trans from "../components/Trans";
import Paper from "material-ui/Paper";
const TransList = props => {
  const { budget, transactions, handleEdit, handleDelete } = props;
  return (
    <Paper zDepth={2}>
      <div>
        <h1>
          Budget: {budget}
        </h1>
        <ul>
          {transactions.length > 0
            ? transactions.map(trans =>
                <Trans
                  key={trans._id}
                  id={trans._id}
                  trans={trans}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              )
            : ""}
        </ul>
      </div>
    </Paper>
  );
};

export default TransList;
