import react, { useEffect, useState } from "react";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
const HomeComponent = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const addTransaction = (data) => {
    const transactionArray = [...transactions];
    transactionArray.push(data);
    setTransactions(transactionArray);
  };
  const calBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) =>
      payload.type === "Expense"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    );
    setIncome(inc);
    setExpense(exp);
  };
  useEffect(() => calBalance(), [transactions]);

  return (
    <div>
      <h1 className="text-center">Expense Tracker</h1>
      <OverviewComponent
        addTransaction={addTransaction}
        income={income}
        expense={expense}
      ></OverviewComponent>
      <TransactionComponent transactions={transactions} />
    </div>
  );
};
export default HomeComponent;
