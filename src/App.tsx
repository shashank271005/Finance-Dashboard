import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardHome from './components/DashboardHome';
import TransactionsPage from './components/TransactionsPage';
import InsightsPage from './components/InsightsPage';
import LoginPage from './components/LoginPage';
import OnboardingPage from './components/OnboardingPage.tsx';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';
import AddTransactionPage from './components/AddTransactionPage';
import CoolDownWishlist from './components/CoolDownWishlist';
import Goals from './components/Goals';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [userRole, setUserRole] = useState<'admin' | 'viewer'>('admin');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsOnboarding(false);
  };

  const handleStartOnboarding = () => {
    setIsLoggedIn(true);
    setIsOnboarding(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOnboarding(false);
    setShowLanding(false); // Go straight to LoginPage on logout
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
        userRole={userRole}
      />
      <div className="main-content app-fade-in">
        {activeTab === 'dashboard' && (
          <DashboardHome
            onNewTransaction={() => setActiveTab('add-transaction')}
            onViewWishlist={() => setActiveTab('wishlist')}
            userRole={userRole}
            setUserRole={setUserRole}
          />
        )}
        {activeTab === 'transactions' && <TransactionsPage userRole={userRole} />}
        {activeTab === 'insights' && <InsightsPage isSidebarExpanded={isSidebarExpanded} userRole={userRole} />}
        {activeTab === 'profile' && (
          <ProfilePage
            onLogout={handleLogout}
            userRole={userRole}
            setUserRole={setUserRole}
          />
        )}
        {activeTab === 'add-transaction' && (
          <AddTransactionPage onBack={() => setActiveTab('dashboard')} userRole={userRole} />
        )}
        {activeTab === 'wishlist' && <CoolDownWishlist />}
        {activeTab === 'goals' && <Goals setActiveTab={setActiveTab} />}
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
        <button
          className={`mob-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <span className="mob-nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </span>
          <span className="mob-nav-label">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default App;
