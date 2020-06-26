import React from 'react';
import ViewTransactions from './ViewTransactions';
import ViewAccounts from './ViewAccounts';
import AddTransaction from './AddTransaction';

const ExpensePage = () => {
  return (
    <div>
      <h3>Track your expenses</h3>
      <AddTransaction />
      <ViewAccounts />
      <ViewTransactions />
    </div>
  );
};

export default ExpensePage;
