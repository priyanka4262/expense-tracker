import react, { useState } from "react";
import TransactionComponent from "./TransactionComponent";
import './OverviewComponent.scss';

const OverviewComponent = (props) => {
  const [isTxnVisible, setTxnVisible] = useState(false);
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex flex-row mt-5">
        <label className="p-2 font-weight-bold text-success">
          Balance:${props.income - props.expense}
        </label>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => setTxnVisible(!isTxnVisible)}
        >
          {isTxnVisible ? "Cancel" : "Add"}
        </button>
      </div>

      {isTxnVisible && (
        <AddTxnView
          setTxnVisible={setTxnVisible}
          addTransaction={props.addTransaction}
        />
      )}
      <div className="d-flex mt-3">
        <label className="p-2 font-weight-bold card text-danger">
          Expense<span>${props.expense}</span>
        </label>
        <label className="p-2 font-weight-bold card text-success incomeLabel">
          Income<span>${props.income}</span>
        </label>
      </div>
    </div>
  );
};
const AddTxnView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("Expense");

  const addTransactionHandler = () => {
    props.addTransaction({ amount: Number(amount), desc, type });
    props.setTxnVisible();
  };
  return (
    <div className=" d-inline-flex p-2">
      <div className="card" style={{ width: 50 + "rem" }}>
        <div className="card-body">
          <input
            className="form-control 
            col-sm-8 col-form-label .mt-3"
            placeholder="Enter Amount"
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          ></input>
          <input
            className="form-control 
            col-sm-8 col-form-label mt-3"
            placeholder="Enter description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></input>
          <div className="d-flex flex-row align-items-center mt-2">
            <div className="form-check">
              <input
                className="form-check-input mt-2"
                type="radio"
                value="Income"
                onChange={(e) => setType(e.target.value)}
                checked={type === "Income"}
              ></input>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Income
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input mt-2"
                type="radio"
                value="Expense"
                onChange={(e) => setType(e.target.value)}
                checked={type === "Expense"}
              ></input>
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Expense
              </label>
            </div>
          </div>
          <button
            className="btn btn-primary mt-2"
            onClick={addTransactionHandler}
          >
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewComponent;
