import React from 'react';
import './Topbar.css';

const BellIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/>
    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const Topbar: React.FC = () => (
  <header className="topbar">
    <div className="topbar-left">
      <h1 className="page-title">Dashboard</h1>
      <span className="live-badge">LIVE</span>
    </div>
    <div className="topbar-right">
      <div className="search-box">
        <SearchIcon />
        <input placeholder="Search insights..." />
      </div>
      <button className="icon-btn"><BellIcon /></button>
      <button className="icon-btn"><MoonIcon /></button>
      <div className="user-profile">
        <div className="user-info">
          <span className="user-name">Alex Architect</span>
          <span className="user-role">Institutional Admin</span>
        </div>
        <div className="user-avatar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" fill="#fff"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#fff"/>
          </svg>
        </div>
      </div>
    </div>
  </header>
);

export default Topbar;
