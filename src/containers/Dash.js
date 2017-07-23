import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import TransList from "../components/TransList";
import Chart from "../components/Chart";
import AddTrans from "../components/AddTrans";
import BudgetEdit from "../components/BudgetEdit";

class Dash extends Component {
  componentDidMount() {
    console.log(this.props);
    const { auth: { token, userId }, getData } = this.props;
    getData(token, userId);
  }
  render() {
    const { budget, transactions } = this.props.transactions;
    return (
      <div className="wrap--alt">
        <br />
        <br />
        <TransList budget={budget} transactions={transactions} />
        <BudgetEdit
          value={budget}
          handleEdit={b =>
            this.props.editBudget(this.props.auth.userId, b, this.props.auth.token)}
        />
        <Chart />
        <AddTrans />
      </div>
    );
  }
}

function mapStateToProps({ auth, transactions }) {
  return {
    auth,
    transactions
  };
}
export default connect(mapStateToProps, actions)(Dash);
