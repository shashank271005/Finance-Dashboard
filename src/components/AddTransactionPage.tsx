import React from 'react';
import './AddTransactionPage.css';

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1.5"></circle>
    <circle cx="12" cy="5" r="1.5"></circle>
    <circle cx="12" cy="19" r="1.5"></circle>
  </svg>
);

const RefreshIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 4v6h-6"></path>
    <path d="M1 20v-6h6"></path>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
  </svg>
);

const SortIcon = () => (
  <span className="at-sort-icon">
    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-8 8h16l-8-8z" /></svg>
    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20l8-8H4l8 8z" /></svg>
  </span>
);

interface AddTransactionPageProps {
  onBack: () => void;
  userRole?: 'admin' | 'viewer';
}

const AddTransactionPage: React.FC<AddTransactionPageProps> = ({ onBack, userRole = 'admin' }) => {
  const isViewer = userRole === 'viewer';
  const mockTableData = [
    { name: 'Electricity Bill', type: 'Payment', date: '30/09/2025', time: '10:20:29', amount: 'Rs 1,200', note: 'Payment for the monthly electricity bill', status: 'Completed' },
    { name: 'Electricity Bill', type: 'Payment', date: '30/09/2025', time: '10:20:29', amount: 'Rs 1,200', note: 'Payment for the monthly electricity bill', status: 'Failed' },
    { name: 'Electricity Bill', type: 'Payment', date: '30/09/2025', time: '10:20:29', amount: 'Rs 1,200', note: 'Payment for the monthly electricity bill', status: 'Completed' },
    { name: 'Electricity Bill', type: 'Payment', date: '30/09/2025', time: '10:20:29', amount: 'Rs 1,200', note: 'Payment for the monthly electricity bill', status: 'Completed' },
    { name: 'Electricity Bill', type: 'Payment', date: '30/09/2025', time: '10:20:29', amount: 'Rs 1,200', note: 'Payment for the monthly electricity bill', status: 'Failed' },
  ];

  return (
    <div className="at-page">
      <header className="at-header">
        <h1 className="at-title">Add a new transaction/payment</h1>
        <div className="at-header-right">
          <div className="at-search-wrap">
            <span className="at-search-icon"><SearchIcon /></span>
            <input type="text" className="at-search-input" placeholder="Search" />
          </div>
          <button className="at-menu-btn"><MoreIcon /></button>
        </div>
      </header>

      <div className="at-form-card">
        <button className="at-recurring-toggle" disabled={isViewer}>
          <RefreshIcon /> Recurring Payment
        </button>
        {isViewer && (
          <div className="viewer-warning">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            View-only mode: You cannot execute new transactions.
          </div>
        )}

        <div className="at-form-grid">
          <div className="at-input-group">
            <label className="at-label">Transaction Name</label>
            <input type="text" className="at-input" disabled={isViewer} placeholder={isViewer ? "Action disabled" : ""} />
          </div>
          <div className="at-input-group">
            <label className="at-label">Payment Type</label>
            <input type="text" className="at-input" disabled={isViewer} placeholder={isViewer ? "Action disabled" : ""} />
          </div>
          <div className="at-input-group">
            <label className="at-label">Payment Method</label>
            <input type="text" className="at-input" disabled={isViewer} placeholder={isViewer ? "Action disabled" : ""} />
          </div>
          <div className="at-input-group">
            <label className="at-label">Receiver Details</label>
            <input type="text" className="at-input" disabled={isViewer} placeholder={isViewer ? "Action disabled" : ""} />
          </div>
          <div className="at-input-group">
            <label className="at-label">Transaction Amount</label>
            <input type="text" className="at-input" disabled={isViewer} placeholder={isViewer ? "Action disabled" : ""} />
          </div>
          <div className="at-input-group">
            <label className="at-label">Note</label>
            <input type="text" className="at-input" />
          </div>
        </div>

        <div className="at-fav-check">
          <div className="at-checkbox" />
          <span>Make this a favorite transaction</span>
        </div>

        {userRole === 'admin' ? (
          <button className="at-execute-btn">Execute Transaction</button>
        ) : (
          <button className="at-execute-btn disabled" disabled>Execute Transaction (Disabled)</button>
        )}
      </div>

      <div className="at-table-card">
        <table className="at-table">
          <thead className="at-thead">
            <tr>
              <th>Transaction Name <SortIcon /></th>
              <th>Date and Time <SortIcon /></th>
              <th>Amount <SortIcon /></th>
              <th>Note <SortIcon /></th>
              <th>Status <SortIcon /></th>
            </tr>
          </thead>
          <tbody className="at-tbody">
            {mockTableData.map((row, i) => (
              <tr key={i}>
                <td>
                  <div className="at-cell-main">
                    <span className="at-tx-name">{row.name}</span>
                    <span className="at-tx-cat">{row.type}</span>
                  </div>
                </td>
                <td>
                  <div className="at-cell-main">
                    <span className="at-tx-date">{row.date}</span>
                    <span className="at-tx-time">{row.time}</span>
                  </div>
                </td>
                <td className="at-tx-amt">{row.amount}</td>
                <td className="at-tx-note">{row.note}</td>
                <td>
                  <span className={`at-status ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="at-back-btn" onClick={onBack}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Dashboard
      </button>
    </div>
  );
};

export default AddTransactionPage;
