import React, { useState, useEffect } from 'react';
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
import SettingsPage from './components/SettingsPage.tsx';
import './App.css';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [activeTab, setActiveTab] = useState(() => localStorage.getItem('activeTab') || 'dashboard');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(() => localStorage.getItem('isOnboarding') === 'true');
  const [showLanding, setShowLanding] = useState(() => localStorage.getItem('isLoggedIn') !== 'true');
  const [userRole, setUserRole] = useState<'admin' | 'viewer'>(() => (localStorage.getItem('userRole') as 'admin' | 'viewer') || 'admin');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('finance-dashboard-theme');
    return (savedTheme as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('finance-dashboard-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
    localStorage.setItem('activeTab', activeTab);
    localStorage.setItem('userRole', userRole);
    localStorage.setItem('isOnboarding', isOnboarding.toString());
  }, [isLoggedIn, activeTab, userRole, isOnboarding]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('activeTab');
    localStorage.removeItem('userRole');
  };

  const handleGoToLanding = () => {
    setIsLoggedIn(false);
    setShowLanding(true);
    localStorage.removeItem('isLoggedIn');
  };

  if (!isLoggedIn) {
    if (showLanding) {
      return <LandingPage onStart={() => setShowLanding(false)} />;
    }
    return <LoginPage onLogin={handleLogin} onSignup={handleStartOnboarding} onGoToLanding={handleGoToLanding} />;
  }

  if (isOnboarding) {
    return (
      <OnboardingPage
        onComplete={() => setIsOnboarding(false)}
        onBackToAuth={() => { setIsLoggedIn(false); setIsOnboarding(false); }}
        onGoToLanding={handleGoToLanding}
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
        onGoToLanding={handleGoToLanding}
      />
      <div className="main-content app-fade-in">
        {activeTab === 'dashboard' && (
          <DashboardHome
            onNewTransaction={() => setActiveTab('add-transaction')}
            onViewWishlist={() => setActiveTab('wishlist')}
            onViewSettings={() => setActiveTab('settings')}
            userRole={userRole}
            setUserRole={setUserRole}
            theme={theme}
            toggleTheme={toggleTheme}
          />
        )}
        {activeTab === 'transactions' && <TransactionsPage userRole={userRole} onGoToLanding={handleGoToLanding} />}
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
        {activeTab === 'settings' && (
          <SettingsPage
            theme={theme}
            toggleTheme={toggleTheme}
            userRole={userRole}
            setUserRole={setUserRole}
          />
        )}
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
          className={`mob-nav-item ${activeTab === 'wishlist' ? 'active' : ''}`}
          onClick={() => setActiveTab('wishlist')}
        >
          <span className="mob-nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </span>
          <span className="mob-nav-label">Wishlist</span>
        </button>
        <button
          className={`mob-nav-item ${activeTab === 'goals' ? 'active' : ''}`}
          onClick={() => setActiveTab('goals')}
        >
          <span className="mob-nav-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </span>
          <span className="mob-nav-label">Goals</span>
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
