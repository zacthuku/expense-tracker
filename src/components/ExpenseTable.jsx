function ExpenseTable({ expenses }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;

  