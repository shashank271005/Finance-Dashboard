import React from 'react';
import './UpcomingBills.css';

const bills = [
  { id: 1, name: 'Netflix', date: 'Tomorrow', icon: 'N', amount: 199, status: 'urgent' },
  { id: 2, name: 'Gym Membership', date: 'In 3 Days', icon: 'G', amount: 1200, status: 'soon' },
  { id: 3, name: 'Internet Bill', date: 'In 7 Days', icon: 'I', amount: 800, status: 'future' }
];

const UpcomingBills: React.FC = () => {
  return (
    <div className="card upcoming-bills-card">
      <div className="card-header border-bottom">
        <span className="card-title">Upcoming Bills</span>
      </div>
      <div className="bills-list">
        {bills.map(bill => (
          <div key={bill.id} className="bill-row">
            <div className="bill-icon">
              <span>{bill.icon}</span>
            </div>
            <div className="bill-details">
              <span className="bill-name">{bill.name}</span>
              <span className="bill-amount">Rs {bill.amount}</span>
            </div>
            <div className={`bill-tag status-${bill.status}`}>
              {bill.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingBills;
