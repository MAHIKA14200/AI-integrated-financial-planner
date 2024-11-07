import React, { useState } from "react";
import './GoalSetting.css';

const GoalSetting = () => {
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [goalDate, setGoalDate] = useState("");
  const [goalProgress, setGoalProgress] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const handleGoalNameChange = (e) => {
    setGoalName(e.target.value);
  };

  const handleGoalAmountChange = (e) => {
    setGoalAmount(e.target.value);
  };

  const handleGoalDateChange = (e) => {
    setGoalDate(e.target.value);
  };

  const handleGoalProgressChange = (e) => {
    setGoalProgress(e.target.value);
  };

  const handleGoalSubmit = () => {
    if (goalName.trim() !== "" && goalAmount.trim() !== "" && goalDate.trim() !== "") {
      setGoalsList([
        ...goalsList,
        { name: goalName, amount: goalAmount, date: goalDate, progress: goalProgress, id: Date.now() },
      ]);
      setGoalName("");
      setGoalAmount("");
      setGoalDate("");
      setGoalProgress("");
    }
  };

  return (
    <div className="financial-goal-setting-container">
      <h2 className="heading">Financial Goal Setting</h2>
      <div className="financial-goal-input">
        <input
          type="text"
          value={goalName}
          onChange={handleGoalNameChange}
          placeholder="Goal Name (e.g., Save for a trip)"
        />
        <input
          type="number"
          value={goalAmount}
          onChange={handleGoalAmountChange}
          placeholder="Target Amount ($)"
        />
        <input
          type="date"
          value={goalDate}
          onChange={handleGoalDateChange}
        />
        <input
          type="number"
          value={goalProgress}
          onChange={handleGoalProgressChange}
          placeholder="Progress Made ($)"
        />
        <button className="submit-button" onClick={handleGoalSubmit}>Add Financial Goal</button>
      </div>
      
      <div className="financial-goal-list">
        {goalsList.length === 0 ? (
          <p>No financial goals set yet!</p>
        ) : (
          <ul>
            {goalsList.map((goal) => (
              <li key={goal.id} className="goal-item">
                <div className="goal-details">
                  <h4 className="goal-name">{goal.name}</h4>
                  <p>Target Amount: <span className="amount">${goal.amount}</span></p>
                  <p>Target Date: <span className="date">{goal.date}</span></p>
                  <p>Progress: <span className="progress">${goal.progress} / ${goal.amount}</span></p>
                  <p className={goal.progress >= goal.amount ? "achieved" : "in-progress"}>
                    {goal.progress >= goal.amount ? "Goal Achieved!" : "Keep Saving!"}
                  </p>
                </div>
                <button className="remove-button" onClick={() => setGoalsList(goalsList.filter((g) => g.id !== goal.id))}>
                  Remove Goal
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default GoalSetting;
