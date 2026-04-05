import React, { useState } from 'react';
import './Sidebar.css';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
    <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
    <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
    <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
  </svg>
);

const TransactionsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const ChevronRightIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

const InsightsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);



const ExpandIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const CollapseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', Icon: DashboardIcon },
    { id: 'transactions', label: 'Transactions', Icon: TransactionsIcon },
    { id: 'insights', label: 'Insights', Icon: InsightsIcon },
  ];

  return (
    <div className={`sidebar-wrapper ${isExpanded ? 'expanded' : ''}`}>
      <button 
        className="sidebar-toggle" 
        onClick={() => setIsExpanded(!isExpanded)}
        title="Toggle Navigation"
      >
        {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
      </button>

      <aside className={`sidebar ${isExpanded ? 'expanded' : ''}`}>

        {/* Core Navigation Pill Container */}
        <nav className="sidebar-nav">
          <div className="nav-group-title">
            {isExpanded && <span>Main Menu</span>}
          </div>
          {navItems.map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`nav-item ${activeTab === id ? 'active' : ''}`}
              onClick={() => setActiveTab(id)}
              title={label}
            >
              <span className="nav-icon"><Icon /></span>
              {isExpanded && <span className="nav-label">{label}</span>}
            </button>
          ))}
        </nav>

        {/* Sidebar Bottom Profile Section */}
        <div className="sidebar-bottom">
          <div className={`sidebar-profile-item ${isExpanded ? 'expanded' : ''}`}>
             <div className="sidebar-avatar-wrap">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                  alt="Avatar" 
                  className="sidebar-avatar-img"
                />
             </div>
             {isExpanded && (
               <>
                <div className="sidebar-user-info">
                    <span className="sidebar-user-name">Alex Architect</span>
                    <span className="sidebar-user-role">Institutional Admin</span>
                </div>
                <button className="view-profile-cta" title="View Profile">
                    <ChevronRightIcon />
                </button>
               </>
             )}
          </div>
        </div>

      </aside>
    </div>
  );
};

export default Sidebar;
