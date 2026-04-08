import React from 'react';
import './UpcomingBills.css';

const NetflixIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M7 3h4.5l5.5 12.5V3H21v18h-4.5L11 8.5V21H7V3z" fill="#E50914" />
  </svg>
);



const GymIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 7.5a2.5 2.5 0 0 1 0 5H4a2.5 2.5 0 0 1 0-5h2Z"></path>
    <path d="M18 7.5a2.5 2.5 0 0 1 0 5h2a2.5 2.5 0 0 1 0-5h-2Z"></path>
    <path d="M6 10h12"></path>
    <path d="M9 10h6"></path>
  </svg>
);

const InternetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);

const bills = [
  { id: 1, name: 'Netflix', date: 'Tomorrow', icon: <NetflixIcon />, amount: 199, status: 'urgent' },
  { id: 2, name: 'Gym Membership', date: 'In 3 Days', icon: <GymIcon />, amount: 1200, status: 'soon' },
  { id: 3, name: 'Internet Bill', date: 'In 7 Days', icon: <InternetIcon />, amount: 800, status: 'future' }
];

interface UpcomingBillsProps {
  userRole?: 'admin' | 'viewer';
}

const UpcomingBills: React.FC<UpcomingBillsProps> = ({ userRole = 'admin' }) => {
  return (
    <div className="card ub-card">
      <div className="ub-header border-bottom">
        <span className="ub-card-title">Upcoming Bills</span>
      </div>
      <div className="ub-list">
        {bills.map(bill => (
          <div key={bill.id} className="ub-row">
            <div className="ub-icon-wrap">
              {bill.icon}
            </div>
            <div className="ub-details">
              <span className="ub-name">{bill.name}</span>
              <span className="ub-amount">Rs {bill.amount}</span>
            </div>
            <div className="ub-action-area">
              <div className={`ub-tag status-${bill.status}`}>
                {bill.date}
              </div>
              {userRole === 'admin' && (
                <button className="ub-pay-btn">Pay Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBills;

