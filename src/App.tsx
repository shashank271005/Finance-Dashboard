import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHome from './components/DashboardHome';
import TransactionsPage from './components/TransactionsPage';
import LoginPage from './components/LoginPage';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app-layout app-fade-in">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        {activeTab === 'dashboard' && <DashboardHome />}
        {activeTab === 'transactions' && <TransactionsPage />}
        {/* Other tabs can be added here */}
      </div>
    </div>
  );
};

export default App;
