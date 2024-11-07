// src/components/BudgetTracking/BudgetTracking.jsx
import React, { useState } from 'react';
import './BudgetTracking.css';

const BudgetTracking = () => {
  const [monthlyBudget, setMonthlyBudget] = useState(0);
  const [expense, setExpense] = useState({ name: '', amount: '' });
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleBudgetChange = (e) => {
    setMonthlyBudget(Number(e.target.value));
  };

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (expense.name && expense.amount) {
      setExpenses((prevExpenses) => [...prevExpenses, expense]);
      setTotalExpenses((prevTotal) => prevTotal + Number(expense.amount));
      setExpense({ name: '', amount: '' });
    }
  };

  const remainingBudget = monthlyBudget - totalExpenses;

  return (
    <div className="budget-tracking">
      <h2>Budget Tracking</h2>
      <div className="budget-input">
        <label>Set Monthly Budget: </label>
        <input
          type="number"
          value={monthlyBudget}
          onChange={handleBudgetChange}
          placeholder="Enter your budget"
        />
      </div>

      <form className="expense-form" onSubmit={addExpense}>
        <h3>Add Expense</h3>
        <input
          type="text"
          name="name"
          value={expense.name}
          onChange={handleExpenseChange}
          placeholder="Expense Name"
          required
        />
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleExpenseChange}
          placeholder="Amount"
          required
        />
        <button type="submit">Add Expense</button>
      </form>

      <div className="budget-summary">
        <h3>Budget Summary</h3>
        <p>Total Budget: ${monthlyBudget}</p>
        <p>Total Expenses: ${totalExpenses}</p>
        <p>Remaining Budget: ${remainingBudget}</p>
      </div>

      <div className="expense-list">
        <h3>Expenses</h3>
        <ul>
          {expenses.map((exp, index) => (
            <li key={index}>
              {exp.name}: ${exp.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetTracking;
