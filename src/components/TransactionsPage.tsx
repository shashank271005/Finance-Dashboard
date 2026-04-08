import React, { useState } from 'react';
import './TransactionsPage.css';

/* ─── Icons ─────────────────────────────── */
const CalendarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronLeft = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const TrendUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const EyeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
/* ─── Tx icon avatars ────────────────────── */
const AWSIcon = () => (
  <div className="tx-icon tx-icon-blue">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M7 15l-4-4 4-4M17 15l4-4-4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M3 11h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  </div>
);
const ClientIcon = () => (
  <div className="tx-icon tx-icon-green">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  </div>
);
const CateringIcon = () => (
  <div className="tx-icon tx-icon-gray">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M3 11l19-9-9 19-2-8-8-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);
const MarketingIcon = () => (
  <div className="tx-icon tx-icon-purple">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  </div>
);
const SalaryIcon = () => (
  <div className="tx-icon tx-icon-emerald">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  </div>
);
const OfficeIcon = () => (
  <div className="tx-icon tx-icon-orange">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.8" />
      <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  </div>
);
const InsuranceIcon = () => (
  <div className="tx-icon tx-icon-red">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);
const ConsultingIcon = () => (
  <div className="tx-icon tx-icon-indigo">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  </div>
);
const AdCampaignIcon = () => (
  <div className="tx-icon tx-icon-pink">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
  // Page 1
  { id: 't1', date: 'Oct 24, 2023', description: 'AWS Cloud Infrastructure', category: 'Technology', amount: '₹1,45,200', isPositive: false, status: 'Completed', Icon: AWSIcon },
  { id: 't2', date: 'Oct 22, 2023', description: 'Client Retainer - Alpha Corp', category: 'Income', amount: '₹3,50,000', isPositive: true, status: 'Completed', Icon: ClientIcon },
  { id: 't3', date: 'Oct 21, 2023', description: 'Catering - Quarterly Review', category: 'Food', amount: '₹19,900', isPositive: false, status: 'Pending', Icon: CateringIcon },
  { id: 't4', date: 'Oct 20, 2023', description: 'Social Media Campaign', category: 'Marketing', amount: '₹45,000', isPositive: false, status: 'Completed', Icon: MarketingIcon },
  { id: 't5', date: 'Oct 18, 2023', description: 'Employee Salary - October', category: 'Payroll', amount: '₹8,75,000', isPositive: false, status: 'Completed', Icon: SalaryIcon },
  { id: 't6', date: 'Oct 17, 2023', description: 'Office Rent - Q4', category: 'Operations', amount: '₹1,20,000', isPositive: false, status: 'Completed', Icon: OfficeIcon },
  { id: 't7', date: 'Oct 15, 2023', description: 'Business Insurance Premium', category: 'Insurance', amount: '₹42,500', isPositive: false, status: 'Pending', Icon: InsuranceIcon },
  { id: 't8', date: 'Oct 14, 2023', description: 'Consulting - Beta Ltd', category: 'Income', amount: '₹2,10,000', isPositive: true, status: 'Completed', Icon: ConsultingIcon },
  { id: 't9', date: 'Oct 12, 2023', description: 'Ad Campaign - Google Ads', category: 'Marketing', amount: '₹28,000', isPositive: false, status: 'Failed', Icon: AdCampaignIcon },
  // Page 2
  { id: 't11', date: 'Oct 10, 2023', description: 'GitHub Enterprise Subscription', category: 'Technology', amount: '₹15,000', isPositive: false, status: 'Completed', Icon: AWSIcon },
  { id: 't12', date: 'Oct 09, 2023', description: 'Apple Developer Program', category: 'Technology', amount: '₹7,900', isPositive: false, status: 'Completed', Icon: AWSIcon },
  { id: 't13', date: 'Oct 08, 2023', description: 'Starbucks Coffee', category: 'Food', amount: '₹450', isPositive: false, status: 'Completed', Icon: CateringIcon },
  { id: 't14', date: 'Oct 07, 2023', description: 'Monthly Dividends', category: 'Income', amount: '₹1,25,000', isPositive: true, status: 'Completed', Icon: ClientIcon },
  { id: 't15', date: 'Oct 06, 2023', description: 'LinkedIn Premium', category: 'Marketing', amount: '₹2,500', isPositive: false, status: 'Completed', Icon: MarketingIcon },
  { id: 't16', date: 'Oct 05, 2023', description: 'Internet Bill', category: 'Operations', amount: '₹3,500', isPositive: false, status: 'Completed', Icon: OfficeIcon },
  { id: 't17', date: 'Oct 04, 2023', description: 'Zomato Lunch', category: 'Food', amount: '₹1,200', isPositive: false, status: 'Completed', Icon: CateringIcon },
  { id: 't18', date: 'Oct 03, 2023', description: 'Freelance Design Work', category: 'Income', amount: '₹85,000', isPositive: true, status: 'Completed', Icon: ClientIcon },
  { id: 't19', date: 'Oct 02, 2023', description: 'Uber Ride', category: 'Operations', amount: '₹650', isPositive: false, status: 'Completed', Icon: OfficeIcon },
  // Page 3
  { id: 't21', date: 'Sep 30, 2023', description: 'Microsoft Azure Services', category: 'Technology', amount: '₹65,800', isPositive: false, status: 'Completed', Icon: AWSIcon },
  { id: 't22', date: 'Sep 29, 2023', description: 'Team Dinner', category: 'Food', amount: '₹12,500', isPositive: false, status: 'Completed', Icon: CateringIcon },
  { id: 't23', date: 'Sep 28, 2023', description: 'Stock Market Gains', category: 'Income', amount: '₹2,45,000', isPositive: true, status: 'Completed', Icon: ClientIcon },
  { id: 't24', date: 'Sep 27, 2023', description: 'Canva Pro Subscription', category: 'Marketing', amount: '₹1,100', isPositive: false, status: 'Completed', Icon: MarketingIcon },
  { id: 't25', date: 'Sep 26, 2023', description: 'Gas Bill', category: 'Operations', amount: '₹2,800', isPositive: false, status: 'Completed', Icon: OfficeIcon },
  { id: 't26', date: 'Sep 25, 2023', description: 'Health Insurance', category: 'Insurance', amount: '₹18,500', isPositive: false, status: 'Completed', Icon: InsuranceIcon },
  { id: 't27', date: 'Sep 24, 2023', description: 'App Store Revenue', category: 'Income', amount: '₹3,20,000', isPositive: true, status: 'Completed', Icon: ClientIcon },
  { id: 't28', date: 'Sep 23, 2023', description: 'Amazon Web Services', category: 'Technology', amount: '₹12,400', isPositive: false, status: 'Completed', Icon: AWSIcon },
  { id: 't29', date: 'Sep 22, 2023', description: 'Co-working Space Fee', category: 'Operations', amount: '₹25,000', isPositive: false, status: 'Completed', Icon: OfficeIcon },
];

/* ─── Budget Gauge ──────────────────────── */
const BudgetGauge: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="budget-gauge-wrap">
      <div className="gauge-svg-container">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle
            className="gauge-bg"
            cx="50" cy="50" r="38"
            strokeWidth="9" fill="transparent"
          />
          <circle
            className="gauge-fill"
            cx="50" cy="50" r="38"
            strokeWidth="9" fill="transparent"
            strokeDasharray={2 * Math.PI * 38}
            strokeDashoffset={(2 * Math.PI * 38) - (percentage / 100) * (2 * Math.PI * 38)}
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="gauge-label">
          <span className="gauge-percent">{Math.round(percentage)}%</span>
        </div>
      </div>
      <div className="gauge-info">
        <div className="gauge-amounts">
          <span className="gauge-current">₹{current.toLocaleString()}</span>
          <span className="gauge-total">of ₹{total.toLocaleString()}</span>
        </div>
        <span className="gauge-status-text">Monthly Budget Spent</span>
      </div>
    </div>
  );
};

/* ─── Smart Audit Alert ──────────────────── */
const SmartAudit: React.FC<{ isViewer: boolean }> = ({ isViewer }) => {
  return (
    <div className="insight-card glassy-card smart-audit-card">
      <div className="audit-header">
        <div className="audit-notify-dot"></div>
        <span className="insight-card-label">Smart Audit</span>
      </div>
      <div className="audit-content">
        <div className="audit-item">
          <span className="audit-count">3</span>
          <span className="audit-text">Transactions need categories</span>
        </div>
        <div className="audit-action-link" style={isViewer ? { opacity: 0.5, cursor: 'not-allowed' } : {}}>
          {isViewer ? 'Restricted Access' : 'Review Now'} {!isViewer && <ArrowRightIcon />}
        </div>
      </div>
    </div>
  );
};

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
interface TransactionsPageProps {
  userRole?: 'admin' | 'viewer';
  onGoToLanding?: () => void;
}

const TransactionsPage: React.FC<TransactionsPageProps> = ({ userRole = 'admin', onGoToLanding }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const itemsPerPage = 9;
  const isViewer = userRole === 'viewer';

  // 1. Get unique categories
  const categories = ['All', ...new Set(transactions.map(tx => tx.category))];

  // 2. Sorting Logic
  const sortedTransactions = [...transactions].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  // 3. Filtering Logic
  const filteredTransactions = sortedTransactions.filter(tx =>
    selectedCategory === 'All' || tx.category === selectedCategory
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  // 4. Pagination Logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="tx-page">
      {/* ── Left: Table area ── */}
      <div className="tx-main">
        {/* Filter Bar */}
        <div className="tx-filters">
          <div className="filter-left">
            <span className="tx-version-badge" onClick={onGoToLanding} style={{ cursor: 'pointer' }}>Finexis v2.0</span>
            <div className={`role-indicator-badge ${userRole}`}>
              <span className="ri-dot"></span>
              {userRole}
            </div>
            <button
              className={`filter-chip ${selectedCategory === 'All' ? 'filter-chip-active' : ''}`}
              onClick={() => { setSelectedCategory('All'); setCurrentPage(1); }}
            >
              All Types
            </button>
            <button className="filter-chip">
              <CalendarIcon /> Last 30 days
            </button>
            <div className="category-filter-wrap">
              <button
                className={`filter-chip ${selectedCategory !== 'All' ? 'filter-chip-active' : ''}`}
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                {selectedCategory === 'All' ? 'Category' : selectedCategory} <ChevronDown />
              </button>

              {isCategoryOpen && (
                <div className="category-dropdown glassy-card">
                  {categories.map(cat => (
                    <div
                      key={cat}
                      className={`dropdown-item ${selectedCategory === cat ? 'dropdown-item-active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setCurrentPage(1);
                        setIsCategoryOpen(false);
                      }}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="filter-right">
            <span className="sort-label">Sort by:</span>
            <button
              className="sort-btn"
              onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
            >
              {sortOrder === 'newest' ? 'Date (Newest)' : 'Date (Oldest)'} <ChevronDown />
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
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((tx) => (
                <tr key={tx.id} className="tx-row">
                  <td className="tx-date">{tx.date}</td>
                  <td className="tx-desc">
                    <div className="tx-icon-simple"><tx.Icon /></div>
                    <div className="tx-info">
                      <span className="tx-title">{tx.description}</span>
                    </div>
                  </td>
                  <td>
                    <span className="tx-category">{tx.category}</span>
                  </td>
                  <td>
                    <span className={`tx-amount ${tx.isPositive ? 'amount-pos' : 'amount-neg'}`}>
                      {tx.isPositive ? '+' : '−'} ₹{tx.amount.replace('₹', '')}
                    </span>
                  </td>
                  <td className="tx-status">
                    <span className={`status-dot status-dot-${tx.status.toLowerCase()}`}></span>
                    <span className="status-text">{tx.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="tx-pagination">
            <span className="pagination-info">
              Showing <strong>{startIndex + 1}–{Math.min(startIndex + itemsPerPage, transactions.length)}</strong> of <strong>{transactions.length}</strong> transactions
            </span>
            <div className="pagination-controls">
              <button
                className="page-btn page-nav"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft />
              </button>

              {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map(p => (
                <button
                  key={p}
                  className={`page-btn ${currentPage === p ? 'page-btn-active' : ''}`}
                  onClick={() => setCurrentPage(p)}
                >
                  {p}
                </button>
              ))}

              {totalPages > 3 && (
                <>
                  <span className="page-ellipsis">…</span>
                  <button
                    className={`page-btn ${currentPage === totalPages ? 'page-btn-active' : ''}`}
                    onClick={() => setCurrentPage(totalPages)}
                  >
                    {totalPages}
                  </button>
                </>
              )}

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

        {/* Budget Progress Gauge */}
        <div className="insight-card glassy-card budget-card">
          <div className="insight-card-label">Monthly Progress</div>
          <BudgetGauge current={180500} total={250000} />
        </div>

        {/* Smart Audit Card */}
        <SmartAudit isViewer={isViewer} />

        {/* Spending Trend Chart */}
        <div className="insight-card insight-chart-card glassy-card">
          <div className="insight-card-label">Spending Trend</div>
          <SpendingTrendChart />
        </div>

        <button className="view-analytics-btn">
          View Full Analytics <ArrowRightIcon />
        </button>

        {/* Annual Tax Report Banner */}
        <div className="tax-report-banner">
          <div className="tax-report-badge">FINEXIS PREMIUM</div>
          <div className="tax-report-title">Annual Tax Report 2023</div>
          <div className="tax-report-sub">Ready for audit and submission</div>
          <div className="tax-report-actions">
            <button className="tax-download-btn" disabled={isViewer}>
              <DownloadIcon /> {isViewer ? 'Disabled' : 'Download'}
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
