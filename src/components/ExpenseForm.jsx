import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: Date.now(),
      amount: parseFloat(formData.amount)
    };
    onAddExpense(newExpense);
    setFormData({ description: "", amount: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
