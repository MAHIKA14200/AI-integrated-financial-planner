// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Home.css';
import financialImage from '../assets/images/financial image.jpeg'; // Path to the financial image
import budgetImage from '../assets/images/budget.jpeg'; // Correctly importing the budget image
import goalImage from '../assets/images/goal.jpeg'; // Placeholder for the goal image
import analysisImage from '../assets/images/saving.jpeg'; // Placeholder for the analysis image
import investmentImage from '../assets/images/robot.jpeg'; // Placeholder for the investment image

function Home() {
  const features = [
    {
      title: "Budget Tracking",
      description: "Easily track your monthly budget and expenses.",
      image: budgetImage, // Using imported budget image
      path: "/budget" // Add path for Budget Tracking
    },
    {
      title: "Goal Setting",
      description: "Set financial goals and track your progress.",
      image: goalImage, // Using imported goal image
      path: "/goals" // Add path for Goal Setting
    },
    {
      title: "Expense Analysis",
      description: "Analyze your spending habits with insightful reports.",
      image: analysisImage, // Using imported analysis image
      path: "/analysis" // Add path for Expense Analysis
    },
    {
      title: "AI Advice and Analysis",
      description: "Get tailored advice and analysis from AI.",
      image: investmentImage, // Using imported investment image
      path: "/ai-advice" // Add path for AI Advice
    },
  ];

  return (
    <div className="home">
      <h2 className="welcome-title">WELCOME TO FINWISE</h2>
      <img src={financialImage} alt="Financial Planning" className="home-image" />
      <div className="feature-cards">
        {features.map((feature, index) => (
          <Link key={index} to={feature.path} className="feature-card"> {/* Wrap in Link */}
            <img src={feature.image} alt={feature.title} className="feature-image" /> {/* Image for the feature */}
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
