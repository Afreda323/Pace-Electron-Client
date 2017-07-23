import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import TransList from "../components/TransList";
import Chart from "../components/Chart";
import AddTrans from "../components/AddTrans";
import BudgetEdit from "../components/BudgetEdit";
import Week from '../components/Week'
import Today from '../components/Todays'

class Dash extends Component {
  componentDidMount() {
    console.log(this.props);
    const { auth: { token, userId }, getData } = this.props;
    getData(token, userId);
  }
  render() {
    const {
      transactions: { budget, transactions },
      auth: { userId, token },
      editBudget,
      addTrans
    } = this.props;
    return (
      <div className="wrap--alt">
        <br />
        <Today transactions={transactions}/>
        <br />
        <Week transactions={transactions}/>
        <br />
        <TransList
          budget={budget}
          transactions={transactions}
          handleEdit={(transId, amt, desc) =>
            this.props.editTrans(token, userId, transId, amt, desc)}
          handleDelete={transId => this.props.removeTrans(token, userId, transId)}
        />
        <br />
        <BudgetEdit
          value={budget}
          handleEdit={b => this.props.editBudget(userId, b, token)}
        />
        <br />
        <Chart />
        <br />
        <AddTrans
          handleEdit={(amt, desc) => addTrans(userId, token, amt, desc)}
        />
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
