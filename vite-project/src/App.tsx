import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCards from './components/StatCards';
import BalanceChart from './components/BalanceChart';
import SpendingBreakdown from './components/SpendingBreakdown';
import RecentTransactions from './components/RecentTransactions';
import SmartInsights from './components/SmartInsights';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content">
        <Topbar />
        <div className="dashboard-body">

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

        </div>
      </div>
    </div>
  );
};

export default App;
