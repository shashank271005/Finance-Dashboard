import React from 'react';
import './RightColumn.css';

const INRBadge = () => (
  <span className="inr-badge">₹</span>
);

const WealthOverview: React.FC = () => {
  return (
    <div className="card wealth-card">
      <div className="card-header border-bottom">
        <div className="wealth-title-wrap">
          <div className="icon-circle"><INRBadge /></div>
          <span className="card-title">Wealth Overview</span>
        </div>
        <span className="b-val">Rs 12,940</span>
      </div>

      <div className="wealth-hier">
        <div className="w-row primary-row">
          <div className="w-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Banking</span>
          </div>
          <span>Rs 8,940</span>
        </div>

        <div className="w-row primary-row">
          <div className="w-left">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            <span>Checking Account</span>
          </div>
          <span>Rs 3,545</span>
        </div>

        <div className="w-row secondary-row">
          <span>Visa</span>
          <span>Rs 11,545</span>
        </div>

        <div className="w-row secondary-row divider-row">
          <span>Goal Target</span>
          <span>Rs 43,545</span>
        </div>

        <div className="w-row secondary-row bold-row">
          <span>Current Balance</span>
          <span>Rs 9,560</span>
        </div>
      </div>
    </div>
  );
};

export default WealthOverview;
