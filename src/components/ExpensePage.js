import React from 'react';
import ViewTransactions from './ViewTransactions';
import ViewAccounts from './ViewAccounts';

const ExpensePage = () => {
  return (
    <div>
      <h3>Track your expenses</h3>

      <form>
        <div class="input-field inline">
          <input id="item" type="text" class="validate" />
          <label for="item">Item Name</label>
        </div>

        <div class="input-field inline">
          <input id="amount" type="number" class="validate" />
          <label for="amount">Amount</label>
        </div>

        <div class="input-field inline">
          <button class="waves-effect waves-light teal btn">Add</button>
        </div>
      </form>

      <ViewAccounts />
      <ViewTransactions />
    </div>
  );
};

export default ExpensePage;
