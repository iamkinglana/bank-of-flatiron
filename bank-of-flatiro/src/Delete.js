import React from "react";
import TransactionTable from "./TransactionTable";

function TransactionList({ transactions }) {
  const handleDelete = (id) => {
    fetch(`http://localhost:3000`, {
      method: 'DELETE',
    })
      .then(() => {
        // Refresh the transaction list
      })
      .catch((error) => {
        console.error('Error deleting transaction:', error);
      });
  };

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <div>{transaction.description}</div>
          <div>{transaction.amount}</div>
          <button onClick={() => handleDelete(transaction.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
export default TransactionList;
