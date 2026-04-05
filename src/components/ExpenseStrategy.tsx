import React from 'react';
import './LeftColumn.css';

const DotsMenu = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1.5"></circle>
    <circle cx="12" cy="5" r="1.5"></circle>
    <circle cx="12" cy="19" r="1.5"></circle>
  </svg>
);

const ExpenseStrategy: React.FC = () => {
  return (
    <div className="card expense-card">
      <div className="card-header">
        <span className="card-title">Expense Strategy</span>
        <button className="dots-btn"><DotsMenu /></button>
      </div>
      
      <div className="expense-content">
        <div className="expense-total">
          <h2>Rs 35k</h2>
          <div className="expense-subtitle">
            <span>Monthly</span>
            <span>Expense Analysis</span>
          </div>
        </div>

        <div className="expense-bars">
          {/* Bar 1 */}
          <div className="bar-wrapper">
            <span className="bar-label">Rs 34,540</span>
            <div className="bar bar-bg-dark" style={{ height: '110px' }}></div>
          </div>
          
          {/* Bar 2 (Active) */}
          <div className="bar-wrapper bar-active">
            <span className="bar-label">Rs 22,440</span>
            <div className="bar bar-bg-primary" style={{ height: '70px' }}>
              <div className="bar-badge">+10%</div>
            </div>
          </div>

          {/* Bar 3 */}
          <div className="bar-wrapper">
            <span className="bar-label">Rs 20,198</span>
            <div className="bar bar-bg-light" style={{ height: '55px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseStrategy;
