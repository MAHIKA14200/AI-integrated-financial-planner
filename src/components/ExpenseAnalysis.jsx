import React, { useState } from "react";
import './ExpenseAnalysis.css';

const ExpenseAnalysis = () => {
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseDate, setExpenseDate] = useState("");
  const [expensesList, setExpensesList] = useState({});

  const handleCategoryChange = (e) => {
    setExpenseCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    setExpenseAmount(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setExpenseDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setExpenseDate(e.target.value);
  };

  const handleExpenseSubmit = () => {
    if (expenseCategory && expenseAmount && expenseDate) {
      const newExpense = {
        category: expenseCategory,
        amount: parseFloat(expenseAmount),
        description: expenseDescription,
        date: expenseDate,
        id: Date.now(),
      };

      setExpensesList((prevExpenses) => {
        const updatedExpenses = { ...prevExpenses };
        if (!updatedExpenses[expenseCategory]) {
          updatedExpenses[expenseCategory] = [];
        }
        updatedExpenses[expenseCategory].push(newExpense);
        return updatedExpenses;
      });

      // Reset input fields
      setExpenseCategory("");
      setExpenseAmount("");
      setExpenseDescription("");
      setExpenseDate("");
    }
  };

  const calculateTotal = (category) => {
    if (expensesList[category]) {
      return expensesList[category].reduce(
        (total, expense) => total + expense.amount,
        0
      );
    }
    return 0;
  };

  return (
    <div className="expense-analysis-container">
      <h2 className="heading">Expense Analysis</h2>
      <div className="expense-input">
        <input
          type="text"
          value={expenseCategory}
          onChange={handleCategoryChange}
          placeholder="Category (e.g., Food)"
        />
        <input
          type="number"
          value={expenseAmount}
          onChange={handleAmountChange}
          placeholder="Amount ($)"
        />
        <input
          type="text"
          value={expenseDescription}
          onChange={handleDescriptionChange}
          placeholder="Description (optional)"
        />
        <input
          type="date"
          value={expenseDate}
          onChange={handleDateChange}
        />
        <button className="submit-button" onClick={handleExpenseSubmit}>
          Add Expense
        </button>
      </div>

      <div className="expense-summary">
        <h3>Expense Breakdown</h3>
        {Object.keys(expensesList).map((category) => {
          const total = calculateTotal(category);
          return (
            <div key={category} className="category-summary">
              <h4 className="category-title">{category}</h4>
              <p className="category-total">
                Total: <span className="amount">${total.toFixed(2)}</span>
              </p>
              <ul className="category-expenses">
                {expensesList[category].map((expense) => (
                  <li key={expense.id} className="expense-item">
                    <div className="expense-details">
                      <h5 className="expense-description">{expense.description || 'No description'}</h5>
                      <p>Amount: <span className="amount">${expense.amount}</span></p>
                      <p>Date: <span className="date">{expense.date}</span></p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseAnalysis;
