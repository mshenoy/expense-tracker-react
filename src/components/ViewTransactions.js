import React from 'react';

const ViewTransactions = ({ transactions }) => {
  return (
    <div>
      <table className="striped centered my-2">
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transction) => (
            <tr>
              <td>{transction.item}</td>
              <td>Rs. {transction.amount}/-</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTransactions;
