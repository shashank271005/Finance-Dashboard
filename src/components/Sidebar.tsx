import React from 'react';
import './Sidebar.css';
import profileImg from '../assets/profile_shashank.png';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
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

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isExpanded, setIsExpanded }) => {

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
          <button 
            className={`sidebar-action-btn ${isExpanded ? 'expanded' : ''}`}
            onClick={() => setActiveTab('add-transaction')}
            title="New Transaction"
          >
            <span className="action-icon"><PlusIcon /></span>
            {isExpanded && <span className="action-label">New Transaction</span>}
          </button>

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
          <div 
            className={`sidebar-profile-item ${isExpanded ? 'expanded' : ''} ${activeTab === 'profile' ? 'active-profile' : ''}`}
            onClick={() => setActiveTab('profile')}
            style={{ cursor: 'pointer' }}
          >
             <div className="sidebar-avatar-wrap">
                <img 
                   src={profileImg ? profileImg : "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"} 
                   alt="Avatar" 
                   className="sidebar-avatar-img"
                />
             </div>
             {isExpanded && (
               <>
                <div className="sidebar-user-info">
                    <span className="sidebar-user-name">Shashank Singh</span>
                    <span className="sidebar-user-role">Student</span>
                </div>
                <button 
                  className="view-profile-cta" 
                  title="View Profile"
                  onClick={(e) => { e.stopPropagation(); setActiveTab('profile'); }}
                >
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
