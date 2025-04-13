import React, { useState } from "react";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseForm from "./components/ExpenseForm";
import SearchBar from "./components/SearchBar.jsx";
import initialExpenses from "./data/initialExpenses";
import DarkModeToggle from './components/DarkModeToggle';


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
      <header className="app-header">
      <div>
      <h1>Expense Tracker</h1>
      <p>Taking control of my finances by Recording, Categorizing and Analysing my spending</p>
      </div>
      <div><DarkModeToggle /></div>
      </header>
    
      <div className="container">
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
