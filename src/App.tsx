import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHome from './components/DashboardHome';
import TransactionsPage from './components/TransactionsPage';
import InsightsPage from './components/InsightsPage';
import LoginPage from './components/LoginPage';
import OnboardingPage from './components/OnboardingPage';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsOnboarding(false);
  };

  const handleStartOnboarding = () => {
    setIsLoggedIn(true);
    setIsOnboarding(true);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} onSignup={handleStartOnboarding} />;
  }

  if (isOnboarding) {
    return (
      <OnboardingPage 
        onComplete={() => setIsOnboarding(false)} 
        onBackToAuth={() => { setIsLoggedIn(false); setIsOnboarding(false); }}
      />
    );
  }

  return (
    <div className="app-layout app-fade-in">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />
      <div className="main-content">
        {activeTab === 'dashboard' && <DashboardHome />}
        {activeTab === 'transactions' && <TransactionsPage />}
        {activeTab === 'insights' && <InsightsPage isSidebarExpanded={isSidebarExpanded} />}
      </div>
    </div>
  );
};

export default App;
