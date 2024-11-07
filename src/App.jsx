// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import BudgetTracking from './components/BudgetTracking';
import GoalSetting from './components/GoalSetting';
import ExpenseAnalysis from './components/ExpenseAnalysis';
import AIAdvice from './components/AIAdvice';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/budget" element={<BudgetTracking />} />
                <Route path="/goals" element={<GoalSetting />} />
                <Route path="/analysis" element={<ExpenseAnalysis />} />
                <Route path="/ai-advice" element={<AIAdvice />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
