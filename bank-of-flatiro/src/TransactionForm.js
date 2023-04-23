import React, { useState } from 'react';

function TransactionForm(props) {
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: parseInt(id),
      date: date,
      description: description,
      category: category,
      amount: parseFloat(amount)
    };
    props.onAdd(newTransaction);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;