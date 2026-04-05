import React from 'react';
import './MidColumn.css';

interface Transaction {
  id: number | string;
  name: string;
  cat: string;
  date: string;
  time: string;
  amount: string;
}

interface RecentTransactionsCardProps {
  transactions: Transaction[];
  timeFilter: string;
  onTimeFilterChange: (value: string) => void;
}

const SortIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px', opacity: 0.5}}>
    <path d="M7 15l5 5 5-5"></path>
    <path d="M7 9l5-5 5 5"></path>
  </svg>
);

export const RecentTransactionsCard: React.FC<RecentTransactionsCardProps> = ({ 
  transactions,
  timeFilter,
  onTimeFilterChange
}) => {
  return (
    <div className="rt-clean-card">
      <div className="rt-header-clean">
        <h3>Recent Transactions</h3>
        <select 
          className="tx-time-filter" 
          value={timeFilter} 
          onChange={(e) => onTimeFilterChange(e.target.value)}
        >
          <option value="7">Last 7 days</option>
          <option value="15">Last 15 days</option>
          <option value="30">Last 30 days</option>
          <option value="All Transactions">All Transactions</option>
        </select>
      </div>

      {transactions.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)', fontSize: '14px' }}>
          No transactions for this date.
        </div>
      ) : (
        <div className="rt-table-container">
          <table className="clean-table">
            <thead>
              <tr>
                <th>Name <SortIcon /></th>
                <th>Date & Time <SortIcon /></th>
                <th>Amount <SortIcon /></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id}>
                  <td>
                    <div className="tx-name-cell">
                      <span className="tx-name">{tx.name}</span>
                      <span className="tx-category">{tx.cat}</span>
                    </div>
                  </td>
                  <td>
                    <div className="tx-date-cell">
                      <span className="tx-date">{tx.date}</span>
                      <span className="tx-time">{tx.time}</span>
                    </div>
                  </td>
                  <td className="tx-amount">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecentTransactionsCard;
