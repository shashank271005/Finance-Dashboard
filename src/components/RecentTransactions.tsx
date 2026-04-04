import React from 'react';
import './RecentTransactions.css';

const transactions = [
  { id: 1, name: 'Apple Store – MacBook Pro',       date: '24 May 2024', category: 'Tech & Gear',          amount: '-₹1,99,900', status: 'COMPLETED', positive: false },
  { id: 2, name: 'Inward Remittance – Project X',   date: '22 May 2024', category: 'Professional Services', amount: '+₹85,000',   status: 'COMPLETED', positive: true  },
  { id: 3, name: 'The Quorum Club',                 date: '21 May 2024', category: 'Food & Dining',         amount: '-₹4,200',    status: 'PENDING',   positive: false },
];

const ShoppingIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="6" x2="21" y2="6" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 10a4 4 0 0 1-8 0" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BankIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FoodIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="6" y1="1" x2="6" y2="4" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="10" y1="1" x2="10" y2="4" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="14" y1="1" x2="14" y2="4" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const icons = [ShoppingIcon, BankIcon, FoodIcon];

const RecentTransactions: React.FC = () => (
  <div className="transactions-card">
    <div className="transactions-header">
      <h2 className="transactions-title">Recent Transactions</h2>
      <button className="view-all-btn">VIEW ALL RECORDS</button>
    </div>
    <div className="transactions-list">
      {transactions.map((tx, i) => {
        const Icon = icons[i];
        return (
          <div key={tx.id} className="transaction-row">
            <div className="tx-icon-wrap"><Icon /></div>
            <div className="tx-info">
              <span className="tx-name">{tx.name}</span>
              <span className="tx-meta">{tx.date} • {tx.category}</span>
            </div>
            <div className="tx-right">
              <span className={`tx-amount ${tx.positive ? 'pos' : 'neg'}`}>{tx.amount}</span>
              <span className={`tx-status ${tx.status === 'COMPLETED' ? 'completed' : 'pending'}`}>{tx.status}</span>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default RecentTransactions;
