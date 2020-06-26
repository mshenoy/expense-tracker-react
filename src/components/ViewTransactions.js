import React from 'react';

const ViewTransactions = () => {
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
          <tr>
            <td>Eclair</td>
            <td>$0.87</td>
          </tr>
          <tr>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewTransactions;
