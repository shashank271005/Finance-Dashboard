import React from 'react';
import './MidColumn.css';

const DotsMenu = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1.5"></circle>
    <circle cx="12" cy="5" r="1.5"></circle>
    <circle cx="12" cy="19" r="1.5"></circle>
  </svg>
);

const OverviewGauge: React.FC = () => {
  return (
    <div className="card overview-card">
      <div className="card-header">
        <span className="card-title">Overview</span>
        <button className="dots-btn"><DotsMenu /></button>
      </div>
      
      <div className="gauge-container">
        <div className="gauge-svg-wrapper">
          <svg viewBox="0 0 200 120" style={{ width: '100%', maxWidth: '260px' }}>
            {/* Dark Blue Arc (Available) - span 180 to 100 degrees */}
            <path d="M 20 100 A 80 80 0 0 1 86.1 21.2" fill="none" stroke="var(--primary)" strokeWidth="14" strokeLinecap="round" />
            
            {/* Primary Blue Arc (Planned) - span 85 to 35 degrees */}
            <path d="M 107.0 20.3 A 80 80 0 0 1 165.5 54.2" fill="none" stroke="var(--info)" strokeWidth="14" strokeLinecap="round" />
            
            {/* Light Grey Arc (Other) - span 20 to 0 degrees */}
            <path d="M 175.1 72.6 A 80 80 0 0 1 180 100" fill="none" stroke="var(--border-strong)" strokeWidth="14" strokeLinecap="round" />
          </svg>
          
          <div className="gauge-center-text">
            <h2>Rs 9,560</h2>
            <span>Available Balance</span>
          </div>
        </div>

        <div className="gauge-legend">
          <div className="legend-item">
            <span className="dot dot-dark"></span> Available
          </div>
          <div className="legend-item">
            <span className="dot dot-primary"></span> Planned
          </div>
          <div className="legend-item">
            <span className="dot dot-grey"></span> Other
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewGauge;
