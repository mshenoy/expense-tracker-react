import React, { useState, useEffect } from 'react';
import ViewTransactions from './ViewTransactions';
import ViewAccounts from './ViewAccounts';

const ExpensePage = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [balance, setBalance] = useState(0);

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
    loadExpense();
    loadIncome();
  }, []);

  // Load expense
  const loadExpense = async () => {
    try {
      const trans = JSON.parse(await localStorage.getItem('transactions'));

      let sumTrans = 0;
      for (let i = 0; i < trans.length; i++) {
        if (trans[i].amount < 0) {
          //console.log(trans[i]);
          sumTrans = sumTrans + parseInt(trans[i].amount);
        }
      }

      console.log(`Total expense is ${sumTrans}`);

      setExpense(sumTrans);

      console.log(expense);
    } catch (error) {
      console.log(error);
    }
  };

  // Load income
  const loadIncome = async () => {
    try {
      const trans = JSON.parse(await localStorage.getItem('transactions'));

      let sumTrans = 0;
      for (let i = 0; i < trans.length; i++) {
        if (trans[i].amount > 0) {
          //console.log(trans[i]);
          sumTrans = sumTrans + parseInt(trans[i].amount);
        }
      }

      console.log(`Total income is ${sumTrans}`);

      setIncome(sumTrans);
      //setAccounts({ ...accounts, income: sumTrans });
    } catch (error) {
      console.log(error);
    }
  };

  const onInputChange = (e) =>
    setTransaction({ ...transaction, [e.target.name]: e.target.value });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (item !== '') {
      console.log(transaction);
      saveItem();
    }

    loadExpense();
    loadIncome();

    setTransaction({ item: '', amount: 0 });
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

      <ViewAccounts expense={expense} income={income} />
      <ViewTransactions transactions={transactions} />
    </div>
  );
};

export default ExpensePage;
