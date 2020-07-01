import React from 'react';

const ViewAccounts = ({ expense, income }) => {
  return (
    <div className="row center my-2">
      <div className="col s4">
        <p>Balance</p>
        <h4>Rs.{income + expense}</h4>
      </div>
      <div className="col s4">
        <p>Income</p>
        <h4>Rs.{income}</h4>
      </div>
      <div className="col s4">
        <p>Expense</p>
        <h4>Rs.{expense}</h4>
      </div>
    </div>
  );
};

export default ViewAccounts;
