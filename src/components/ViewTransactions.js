import React from 'react';

const ViewTransactions = ({ transactions }) => {
  if (!transactions) return <p> No transactions found</p>;
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
            <tr key={transction.item}>
              <td>{transction.item}</td>
              <td className={transction.amount < 0 ? 'red-text' : 'green-text'}>
                Rs. {transction.amount}/-
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTransactions;
