import React, { useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([
    // your JSON data goes here
  ]);

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((transaction) => {
      return transaction.id !== id;
    });
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>{transaction.description}</p>
            <p>{transaction.category}</p>
            <p>{transaction.amount}</p>
            <button onClick={() => handleDelete(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
