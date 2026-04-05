import React from 'react';
import './SavingsGoals.css';

const goals = [
  { id: 1, title: 'Emergency Fund', current: 15400, target: 20000, color: '#3B4CF0' },
  { id: 2, title: 'Summer Vacation', current: 4200, target: 8000, color: '#F59E0B' },
  { id: 3, title: 'New Laptop', current: 650, target: 1200, color: '#10B981' },
  { id: 4, title: 'House Downpayment', current: 34500, target: 150000, color: '#8B5CF6' },
  { id: 5, title: 'Car Insurance', current: 150, target: 600, color: '#06B6D4' }
];

const SavingsGoals: React.FC = () => {
  return (
    <div className="card savings-goals-card">
      <div className="card-header">
        <span className="card-title">Savings Goals</span>
        <button className="dots-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
      </div>

      <div className="goals-list">
        {goals.map(goal => {
          const percentage = Math.round((goal.current / goal.target) * 100);
          return (
            <div key={goal.id} className="goal-item">
              <div className="goal-info">
                <span className="goal-title">{goal.title}</span>
                <span className="goal-amounts">Rs {goal.current.toLocaleString()} / Rs {goal.target.toLocaleString()}</span>
              </div>
              <div className="goal-progress-bg">
                <div 
                  className="goal-progress-fill" 
                  style={{ width: `${percentage}%`, backgroundColor: goal.color }}
                ></div>
              </div>
              <div className="goal-percentage" style={{ color: goal.color }}>{percentage}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavingsGoals;
