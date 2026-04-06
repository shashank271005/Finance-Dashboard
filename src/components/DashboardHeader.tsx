import React from 'react';
import './DashboardHeader.css';

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const SettingsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

interface DashboardHeaderProps {
  onNewTransaction?: () => void;
  userRole: 'admin' | 'viewer';
  setUserRole: (role: 'admin' | 'viewer') => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onNewTransaction, userRole, setUserRole }) => {
  return (
    <div className="dashboard-header">
      <div className="dh-top">
        <div className="dh-greeting-group">
          <h1 className="dh-greeting">Good Morning, Shashank</h1>
          <div className="role-badge">
            <span className={`role-dot ${userRole}`}></span>
            {userRole.charAt(0).toUpperCase() + userRole.slice(1)} Mode
          </div>
        </div>

        <div className="dh-top-actions">
          <div className="role-switcher">
            <button
              className={`role-btn ${userRole === 'admin' ? 'active' : ''}`}
              onClick={() => setUserRole('admin')}
            >
              Admin
            </button>
            <button
              className={`role-btn ${userRole === 'viewer' ? 'active' : ''}`}
              onClick={() => setUserRole('viewer')}
            >
              Viewer
            </button>
          </div>
          <div className="header-icon-actions">
            <button className="icon-btn-dh"><SettingsIcon /></button>
            <button className="icon-btn-dh"><BellIcon /></button>
          </div>
        </div>
      </div>

      <div className="dh-bottom">
        <div className="dh-filters">
          <button className="dh-pill-btn">
            Filter <FilterIcon />
          </button>
          <button className="dh-pill-btn">
            This month <ChevronDownIcon />
          </button>
          <button className="dh-pill-btn">
            Download CSV <DownloadIcon />
          </button>
        </div>
        <div className="dh-search-group" style={{ display: 'flex', gap: '12px' }}>
          {userRole === 'admin' && (
            <button className="new-tx-btn" onClick={onNewTransaction}>+ New Transaction</button>
          )}
          <div className="dh-search-wrap">
            <SearchIcon />
            <input type="text" placeholder="Search" className="dh-search-input" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
