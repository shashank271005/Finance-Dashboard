import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCards from './components/StatCards';
import BalanceChart from './components/BalanceChart';
import SpendingBreakdown from './components/SpendingBreakdown';
import RecentTransactions from './components/RecentTransactions';
import SmartInsights from './components/SmartInsights';
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
        <Topbar activeTab={activeTab} />
        <div className="dashboard-body">

          {activeTab === 'dashboard' && (
            <>
              {/* Stat Cards */}
              <StatCards />

              {/* Middle Row: Chart + Spending */}
              <div className="middle-row">
                <BalanceChart />
                <SpendingBreakdown />
              </div>

              {/* Bottom Row: Transactions + Insights */}
              <div className="bottom-row">
                <RecentTransactions />
                <SmartInsights />
              </div>
            </>
          )}

          {activeTab === 'transactions' && (
            <TransactionsPage />
          )}

        </div>
      </div>
    </div>
  );
};

export default App;
