import React, { useState } from 'react';
import './TransactionsPage.css';

/* ─── Icons ─────────────────────────────── */
const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronLeft = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const TrendUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const EyeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const EditIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const TrashIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* ─── Tx icon avatars ────────────────────── */
const AWSIcon = () => (
  <div className="tx-icon tx-icon-blue">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M7 15l-4-4 4-4M17 15l4-4-4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M3 11h18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  </div>
);
const ClientIcon = () => (
  <div className="tx-icon tx-icon-green">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="white" strokeWidth="1.8"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="white" strokeWidth="1.8"/>
    </svg>
  </div>
);
const CateringIcon = () => (
  <div className="tx-icon tx-icon-gray">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M3 11l19-9-9 19-2-8-8-2z" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);
const MarketingIcon = () => (
  <div className="tx-icon tx-icon-purple">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8"/>
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  </div>
);
const SalaryIcon = () => (
  <div className="tx-icon tx-icon-emerald">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <line x1="12" y1="1" x2="12" y2="23" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  </div>
);
const OfficeIcon = () => (
  <div className="tx-icon tx-icon-orange">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="white" strokeWidth="1.8"/>
      <polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="1.8"/>
    </svg>
  </div>
);
const InsuranceIcon = () => (
  <div className="tx-icon tx-icon-red">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);
const ConsultingIcon = () => (
  <div className="tx-icon tx-icon-indigo">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.8"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  </div>
);
const AdCampaignIcon = () => (
  <div className="tx-icon tx-icon-pink">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  </div>
);
const DevIcon = () => (
  <div className="tx-icon tx-icon-teal">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <polyline points="16 18 22 12 16 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      <polyline points="8 6 2 12 8 18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  </div>
);

/* ─── Transaction Data ───────────────────── */
interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: string;
  isPositive: boolean;
  status: 'Completed' | 'Pending' | 'Failed';
  Icon: React.FC;
}

const transactions: Transaction[] = [
  { id: 't1', date: 'Oct 24, 2023', description: 'AWS Cloud Infrastructure', category: 'Technology', amount: '₹1,45,200', isPositive: false, status: 'Completed', Icon: AWSIcon },
  { id: 't2', date: 'Oct 22, 2023', description: 'Client Retainer - Alpha Corp', category: 'Income', amount: '₹3,50,000', isPositive: true, status: 'Completed', Icon: ClientIcon },
  { id: 't3', date: 'Oct 21, 2023', description: 'Catering - Quarterly Review', category: 'Food', amount: '₹19,900', isPositive: false, status: 'Pending', Icon: CateringIcon },
  { id: 't4', date: 'Oct 20, 2023', description: 'Social Media Campaign', category: 'Marketing', amount: '₹45,000', isPositive: false, status: 'Completed', Icon: MarketingIcon },
  { id: 't5', date: 'Oct 18, 2023', description: 'Employee Salary - October', category: 'Payroll', amount: '₹8,75,000', isPositive: false, status: 'Completed', Icon: SalaryIcon },
  { id: 't6', date: 'Oct 17, 2023', description: 'Office Rent - Q4', category: 'Operations', amount: '₹1,20,000', isPositive: false, status: 'Completed', Icon: OfficeIcon },
  { id: 't7', date: 'Oct 15, 2023', description: 'Business Insurance Premium', category: 'Insurance', amount: '₹42,500', isPositive: false, status: 'Pending', Icon: InsuranceIcon },
  { id: 't8', date: 'Oct 14, 2023', description: 'Consulting - Beta Ltd', category: 'Income', amount: '₹2,10,000', isPositive: true, status: 'Completed', Icon: ConsultingIcon },
  { id: 't9', date: 'Oct 12, 2023', description: 'Ad Campaign - Google Ads', category: 'Marketing', amount: '₹28,000', isPositive: false, status: 'Failed', Icon: AdCampaignIcon },
  { id: 't10', date: 'Oct 10, 2023', description: 'Development Tools License', category: 'Technology', amount: '₹18,750', isPositive: false, status: 'Completed', Icon: DevIcon },
];

/* ─── Mini Bar Chart ─────────────────────── */
const SpendingTrendChart: React.FC = () => {
  const bars = [55, 70, 45, 80, 60, 90, 75];
  const maxH = 48;
  return (
    <div className="trend-chart">
      {bars.map((h, i) => (
        <div key={i} className="trend-bar-wrap">
          <div
            className={`trend-bar ${i === bars.length - 1 ? 'trend-bar-active' : ''}`}
            style={{ height: `${(h / 100) * maxH}px` }}
          />
        </div>
      ))}
    </div>
  );
};

/* ─── Main Component ─────────────────────── */
const TransactionsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 42;

  return (
    <div className="tx-page">
      {/* ── Left: Table area ── */}
      <div className="tx-main">
        {/* Filter Bar */}
        <div className="tx-filters">
          <div className="filter-left">
            <button className="filter-chip filter-chip-active">All Types</button>
            <button className="filter-chip">
              <CalendarIcon /> Last 30 days
            </button>
            <button className="filter-chip">
              Category <ChevronDown />
            </button>
          </div>
          <div className="filter-right">
            <span className="sort-label">Sort by:</span>
            <button className="sort-btn">
              Date (Newest) <ChevronDown />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="tx-table-wrap">
          <table className="tx-table">
            <thead>
              <tr>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>CATEGORY</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="tx-row">
                  <td className="tx-date">{tx.date}</td>
                  <td className="tx-desc">
                    <tx.Icon />
                    <span>{tx.description}</span>
                  </td>
                  <td>
                    <span className="tx-category">{tx.category}</span>
                  </td>
                  <td>
                    <span className={`tx-amount ${tx.isPositive ? 'amount-pos' : 'amount-neg'}`}>
                      {tx.isPositive ? '+' : '−'} ₹{tx.amount.replace('₹', '')}
                    </span>
                  </td>
                  <td>
                    <span className={`tx-status status-${tx.status.toLowerCase()}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td>
                    <div className="tx-actions">
                      <button className="action-btn" title="Edit"><EditIcon /></button>
                      <button className="action-btn action-btn-danger" title="Delete"><TrashIcon /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="tx-pagination">
            <span className="pagination-info">
              Showing <strong>1–10</strong> of <strong>1,240</strong> transactions
            </span>
            <div className="pagination-controls">
              <button
                className="page-btn page-nav"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft />
              </button>
              {[1, 2, 3].map(p => (
                <button
                  key={p}
                  className={`page-btn ${currentPage === p ? 'page-btn-active' : ''}`}
                  onClick={() => setCurrentPage(p)}
                >
                  {p}
                </button>
              ))}
              <span className="page-ellipsis">…</span>
              <button
                className={`page-btn ${currentPage === totalPages ? 'page-btn-active' : ''}`}
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </button>
              <button
                className="page-btn page-nav"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right: Insights Panel ── */}
      <aside className="tx-insight-panel">
        <div className="insight-header">
          <span className="insight-title">Insights</span>
          <TrendUpIcon />
        </div>

        {/* Most Frequent Category */}
        <div className="insight-card">
          <div className="insight-card-label">MOST FREQUENT CATEGORY</div>
          <div className="insight-card-value">Food &amp; Dining</div>
          <div className="insight-card-sub">
            <span className="insight-up-badge">↑ 12%</span>
            <span className="insight-card-note"> vs last month</span>
          </div>
        </div>

        {/* Highest Expense */}
        <div className="insight-card">
          <div className="insight-card-label">HIGHEST EXPENSE</div>
          <div className="insight-card-value">₹19,900</div>
          <div className="insight-card-note-row">Catering – Quarterly Review</div>
        </div>

        {/* Spending Trend Chart */}
        <div className="insight-chart-card">
          <div className="insight-chart-label">SPENDING TREND</div>
          <SpendingTrendChart />
        </div>

        <button className="view-analytics-btn">
          View Full Analytics <ArrowRightIcon />
        </button>

        {/* Annual Tax Report Banner */}
        <div className="tax-report-banner">
          <div className="tax-report-badge">PREMIUM RESOURCE</div>
          <div className="tax-report-title">Annual Tax Report 2023</div>
          <div className="tax-report-sub">Ready for audit and submission</div>
          <div className="tax-report-actions">
            <button className="tax-download-btn">
              <DownloadIcon /> Download
            </button>
            <button className="tax-view-btn">
              <EyeIcon />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default TransactionsPage;
