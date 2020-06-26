import React, { useState, useEffect } from 'react';
import ViewTransactions from './ViewTransactions';
import ViewAccounts from './ViewAccounts';

const ExpensePage = () => {
  const [transaction, setTransaction] = useState({
    item: '',
    amount: 0,
  });

  const [transactions, setTransactions] = useState([]);

  const { item, amount } = transaction;

  const loadTransactions = async () => {
    try {
      const trans = JSON.parse(await localStorage.getItem('transactions'));
      setTransactions(trans);
      console.log(trans);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  const onInputChange = (e) =>
    setTransaction({ ...transaction, [e.target.name]: e.target.value });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (item !== '') {
      console.log(transaction);
      saveItem();
    }
  };

  const saveItem = async () => {
    try {
      console.log(transactions + ' ' + transaction);

      if (!transactions) {
        await localStorage.setItem(
          'transactions',
          JSON.stringify([transaction])
        );
      } else {
        await localStorage.setItem(
          'transactions',
          JSON.stringify([...transactions, transaction])
        );
      }

      loadTransactions();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>Track your expenses</h3>

      <form className="my-2 center" onSubmit={(e) => onFormSubmit(e)}>
        <div className="input-field inline">
          <input
            id="item"
            name="item"
            type="text"
            className="validate"
            value={item}
            onChange={(e) => onInputChange(e)}
          />
          <label htmlFor="item">Item Name</label>
        </div>

        <div className="input-field inline">
          <input
            id="amount"
            name="amount"
            type="number"
            className="validate"
            value={amount}
            onChange={(e) => onInputChange(e)}
          />
          <label htmlFor="amount">Amount</label>
        </div>

        <div className="input-field inline">
          <button className="waves-effect waves-light teal btn">Add</button>
        </div>
      </form>

      <ViewAccounts />
      <ViewTransactions transactions={transactions} />
    </div>
  );
};

export default ExpensePage;
