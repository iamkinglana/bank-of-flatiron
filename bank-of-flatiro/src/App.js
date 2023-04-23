import "./App.css";
import transactions from "./db.json";
import SearchTransactions from "./Search";
import TransactionForm from "./TransactionForm";

function App() {
  

  
  return (
    <div className="App">
      <SearchTransactions transactions={transactions.transactions} />;
      <TransactionForm/>
    </div>
  );
}

export default App;
