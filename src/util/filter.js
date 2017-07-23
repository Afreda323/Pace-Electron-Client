import moment from "moment";
export const filtered = (transactions, time) =>
  transactions.length > 1
    ? transactions
        .filter(tr => moment(tr.timestamp).isSame(Date.now(), time))
        .reduce((a, b) => ({ amount: a.amount + b.amount })).amount
    : transactions.length === 1 ? transactions[0].amount : "0";