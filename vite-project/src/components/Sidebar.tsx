import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor"/>
    <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5"/>
    <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5"/>
    <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.3"/>
  </svg>
);

const TransactionsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="6" width="20" height="3" rx="1.5" fill="currentColor"/>
    <rect x="2" y="11" width="14" height="3" rx="1.5" fill="currentColor" opacity="0.5"/>
    <rect x="2" y="16" width="9" height="3" rx="1.5" fill="currentColor" opacity="0.3"/>
  </svg>
);

const InsightsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', Icon: DashboardIcon },
    { id: 'transactions', label: 'Transactions', Icon: TransactionsIcon },
    { id: 'insights', label: 'Insights', Icon: InsightsIcon },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-text">Fluid Architect</span>
        <span className="logo-sub">INSTITUTIONAL GRADE</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`nav-item ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            <span className="nav-icon"><Icon /></span>
            <span className="nav-label">{label}</span>
            {activeTab === id && <span className="nav-indicator" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="new-transaction-btn">+ New Transaction</button>
        <div className="profile-switcher">
          <div className="profile-avatar-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" fill="#64748b"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#64748b"/>
            </svg>
          </div>
          <div className="profile-info-sm">
            <span className="profile-name-sm">Profile Switcher</span>
            <span className="profile-role-sm">Admin Account</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
