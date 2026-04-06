import React from 'react';
import './RightColumn.css';

interface MyFinancesProps {
  userRole?: 'admin' | 'viewer';
}

const MyFinances: React.FC<MyFinancesProps> = ({ userRole = 'admin' }) => {
  return (
    <div className="card my-finances-card">
      <div className="card-header">
        <span className="card-title">My Finances</span>
        {userRole === 'admin' && (
          <button className="add-card-btn">+ Add Card</button>
        )}
      </div>

      <div className="credit-card">
        <div className="cc-top">
          <span className="cc-logo">VISA</span>
        </div>

        <div className="cc-middle">
          <span className="cc-num">****</span>
          <span className="cc-num">****</span>
          <span className="cc-num">****</span>
          <span className="cc-num cc-visible">4559</span>
        </div>

        <div className="cc-bottom">
          <div className="cc-details">
            <span className="cc-label">Expiring Date</span>
            <span className="cc-val">10/09/2029</span>
          </div>
          <div className="cc-name-wrap">
            <span className="cc-name">Shashank Singh</span>
            <div className="mastercard-rings">
              <div className="ring"></div>
              <div className="ring"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFinances;
