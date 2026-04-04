import React from 'react';
import './StatCards.css';

const BankIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IncomeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="#2D3FE0" strokeWidth="1.8"/>
    <path d="M2 10h20" stroke="#2D3FE0" strokeWidth="1.8"/>
  </svg>
);

const ExpenseIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="3" y1="6" x2="21" y2="6" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 10a4 4 0 01-8 0" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="17 18 23 18 23 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const cards = [
  { label: 'TOTAL BALANCE', value: '₹75,300', change: '+12.4% from last month', positive: true, icon: BankIcon, iconBg: 'rgba(34,197,94,0.1)' },
  { label: 'TOTAL INCOME', value: '₹42,000', change: '+8.1% vs avg', positive: true, icon: IncomeIcon, iconBg: 'rgba(45,63,224,0.1)' },
  { label: 'TOTAL EXPENSES', value: '₹28,700', change: '-4.2% optimized', positive: false, icon: ExpenseIcon, iconBg: 'rgba(239,68,68,0.1)' },
];

const StatCards: React.FC = () => (
  <div className="stat-cards">
    {cards.map((card) => (
      <div key={card.label} className="stat-card">
        <div className="stat-card-header">
          <span className="stat-label">{card.label}</span>
          <div className="stat-icon" style={{ background: card.iconBg }}>
            <card.icon />
          </div>
        </div>
        <div className="stat-value">{card.value}</div>
        <div className={`stat-change ${card.positive ? 'positive' : 'negative'}`}>
          {card.positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
          <span>{card.change}</span>
        </div>
      </div>
    ))}
  </div>
);

export default StatCards;
