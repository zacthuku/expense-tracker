import React, { useState } from "react";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import SearchBar from "./components/SearchBar.jsx";
import initialExpenses from "./data/initialExpenses";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div class="container">
      <div className="left-panel">
          <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
      <div className="right-panel">
          <ExpenseTable expenses={filteredExpenses} />
        </div>
      
      </div>
    </div>
  );
}

export default App;
