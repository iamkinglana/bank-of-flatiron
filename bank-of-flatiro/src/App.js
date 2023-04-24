import "./App.css";
import transactions from "./db.json";
import SearchTransactions from "./Search";
import TransactionForm from "./TransactionForm";
import TransactionList from "./Delete";
import Add from "./Add";

function App() {
  

  
  return (
    <div className="App">
      <SearchTransactions transactions={transactions.transactions} />;
      <TransactionForm transactions={transactions.transactions} />
      <TransactionList transactions={transactions.transactions}/>
      <Add transactions={transactions.transactions} />
      

     
      
      
    </div>
  );
}

export default App;
