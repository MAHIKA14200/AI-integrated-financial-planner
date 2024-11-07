import React from 'react';
import './About.css';
import budgetImage from '../assets/images/budget.jpeg';
import goalImage from '../assets/images/goal.jpeg';
import analysisImage from '../assets/images/saving.jpeg';
import investmentImage from '../assets/images/robot.jpeg';

function About() {
  const features = [
    {
      title: "Budget Tracking",
      description: "Easily monitor your monthly budget and track expenses in real-time.",
      image: budgetImage, // Budget image
    },
    {
      title: "Goal Setting",
      description: "Set personalized financial goals and track your progress towards them.",
      image: goalImage, // Goal image
    },
    {
      title: "Expense Analysis",
      description: "Analyze your spending patterns with insightful reports.",
      image: analysisImage, // Analysis image
    },
    {
      title: "AI Advice and Analysis",
      description: "Get tailored advice and analysis from AI.",
      image: investmentImage, // Investment image
    },
  ];

  return (
    <div className="about">
      <h2>About Our Financial Planner</h2>
      <p>
        Our financial planner is designed to help you take control of your finances with ease and simplicity. We combine powerful tools with a user-friendly interface to make budgeting, tracking expenses, and setting financial goals an enjoyable experience.
      </p>

      <div className="feature-section">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.image} alt={feature.title} className="feature-image" /> {/* Display image */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
