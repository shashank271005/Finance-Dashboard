import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHome from './components/DashboardHome';
import TransactionsPage from './components/TransactionsPage';
import InsightsPage from './components/InsightsPage';
import LoginPage from './components/LoginPage';
import OnboardingPage from './components/OnboardingPage';
import LandingPage from './components/LandingPage';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsOnboarding(false);
  };

  const handleStartOnboarding = () => {
    setIsLoggedIn(true);
    setIsOnboarding(true);
  };

  if (!isLoggedIn) {
    if (showLanding) {
      return <LandingPage onStart={() => setShowLanding(false)} />;
    }
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
    <div className="app-layout">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />
      <div className="main-content app-fade-in">
        {activeTab === 'dashboard' && <DashboardHome />}
        {activeTab === 'transactions' && <TransactionsPage />}
        {activeTab === 'insights' && <InsightsPage isSidebarExpanded={isSidebarExpanded} />}
      </div>

      {/* ── Mobile Bottom Navigation ── */}
      <nav className="mobile-bottom-nav">
        <button 
          className={`mob-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <span className="mob-nav-icon">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                <rect x="3" y="14" width="7" height="7" rx="1"></rect>
             </svg>
          </span>
          <span className="mob-nav-label">Home</span>
        </button>
        <button 
          className={`mob-nav-item ${activeTab === 'transactions' ? 'active' : ''}`}
          onClick={() => setActiveTab('transactions')}
        >
          <span className="mob-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
          </span>
          <span className="mob-nav-label">Txns</span>
        </button>
        <button 
          className={`mob-nav-item ${activeTab === 'insights' ? 'active' : ''}`}
          onClick={() => setActiveTab('insights')}
        >
          <span className="mob-nav-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
          </span>
          <span className="mob-nav-label">Insights</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
