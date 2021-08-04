import react, { Component, useEffect, useState } from "react";
import "./TransactionComponent.scss";
const TransactionComponent = (props) => {
  const [newList, setnewList] = useState(props.transactions);
  const [searchText, setSearchText] = useState();
  useEffect(() => searchTextHandler(searchText), [props.transactions]);

  const searchTextHandler = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      setnewList(props.transactions);
      return;
    }
    let txn = props.transactions.filter((transaction) =>
      transaction.desc.includes(searchText.toLowerCase())
    );
    setnewList(txn);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <label className="transactionName mt-5">Transactions List</label>
      <input
        className="col-sm-6 col-form-label mt-3"
        placeholder="Search By Description"
        onChange={(e) => {
          setSearchText(e.target.value);
          searchTextHandler(e.target.value);
        }}
        value={searchText}
      ></input>

      {newList?.map((transaction) => (
        <ul className="list-group mt-2" key={Math.random()}>
          <li className="list-group-item d-flex justify-content-around listItem">
            <div className="descItem">{transaction.desc}</div>
            <div className="amountItem">{transaction.amount}</div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TransactionComponent;
