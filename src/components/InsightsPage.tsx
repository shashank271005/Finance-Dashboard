import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie
} from 'recharts';
import './InsightsPage.css';

/* ─── Icons ───────────────────────────── */
const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const TransferIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    <path d="M11 17h2"></path>
    <path d="M12 13v8"></path>
  </svg>
);

const HistoryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);



const ChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const MoreIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>
    </svg>
  );

/* ─── Mock Data ────────────────────────── */
const cashflowData = [
  { name: 'Jan', income: 15000, expense: -9000 },
  { name: 'Feb', income: 12000, expense: -14000 },
  { name: 'Mar', income: 18000, expense: -19000 },
  { name: 'Apr', income: 11000, expense: -9000 },
  { name: 'May', income: 15000, expense: -13000 },
  { name: 'Jun', income: 7000, expense: -11000 },
  { name: 'Jul', income: 15000, expense: -7000 },
  { name: 'Aug', income: 9000, expense: -5000 },
  { name: 'Sep', income: 17000, expense: -14000 },
  { name: 'Oct', income: 15000, expense: -9000 },
  { name: 'Nov', income: 9000, expense: -13000 },
  { name: 'Dec', income: 19000, expense: -7000 },
];

const statsBreakdown = [
  { name: 'Rent & Living', value: 4815, color: '#3B4CF0', percentage: 52 },
  { name: 'Investment', value: 1852, color: '#4F70F5', percentage: 20 },
  { name: 'Studies', value: 1203, color: '#CED5FE', percentage: 13 },
  { name: 'Entertainment', value: 833, color: '#E2E6FF', percentage: 9 },
  { name: 'Food & Drinks', value: 555, color: '#1A237E', percentage: 6 },
];

const recentActivity = [
  { id: 1, user: 'Shashank Singh', action: 'updated profile settings', time: '13:04', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shash' },
  { id: 2, user: 'Shashank Singh', action: 'added a new transaction', time: '11:30', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shash' },
  { id: 3, user: 'Shashank Singh', action: 'logged in', time: '11:27', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shash' },
  { id: 4, user: 'Shashank Singh', action: 'set a new goal', time: 'Yesterday 13:04', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=shash' },
];

/* ─── Sub-Components ───────────────────── */

const SpendingBubbleChart: React.FC = () => {
    return (
      <div className="bubble-chart-container">
        <svg viewBox="0 0 500 300" className="bubble-svg" preserveAspectRatio="xMidYMid meet">
          {/* Main Overlapping Circles */}
          <circle cx="350" cy="160" r="110" fill="url(#blueGrad)" className="bubble-main" />
          <circle cx="230" cy="130" r="80" fill="url(#pinkGrad)" className="bubble-pink" />
          <circle cx="145" cy="185" r="55" fill="url(#orangeGrad)" className="bubble-orange" />
          <circle cx="95" cy="225" r="35" fill="url(#yellowGrad)" className="bubble-yellow" />
          
          {/* Labels */}
          <text x="350" y="165" textAnchor="middle" className="bubble-label-main">RENT & LIVING</text>
          <text x="230" y="135" textAnchor="middle" className="bubble-label">INVESTMENT</text>
          <text x="145" y="190" textAnchor="middle" className="bubble-label-small">FOOD</text>
          <text x="95" y="232" textAnchor="middle" className="bubble-label-tiny">MOVIES</text>
          <text x="180" y="80" textAnchor="middle" className="bubble-label-tiny">GIFTS</text>
          <text x="220" y="100" textAnchor="middle" className="bubble-label-tiny">STUDIES</text>
          <text x="320" y="50" textAnchor="middle" className="bubble-label-tiny">VACATIONS</text>
          <text x="380" y="270" textAnchor="middle" className="bubble-label-tiny">HEALTHCARE</text>
  
          {/* Gradients */}
          <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B4CF0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B4CF0" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF66C4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FF66C4" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8F66" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FF8F66" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFD966" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#FFD966" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

interface InsightsPageProps {
  isSidebarExpanded?: boolean;
  userRole?: 'admin' | 'viewer';
}

const InsightsPage: React.FC<InsightsPageProps> = ({ isSidebarExpanded, userRole = 'admin' }) => {
  const currencyPrefix = isSidebarExpanded ? '' : 'Rs ';
  const isViewer = userRole === 'viewer';

  return (
    <div className="insights-view app-fade-in">
      <div className="insights-role-header">
        <div className={`role-indicator-badge-mini ${userRole}`}>
           <span className="ri-dot"></span>
           {userRole}
        </div>
      </div>
      
      <div className="insights-view-content">
        {/* ── Left Column ── */}
        <section className="insights-left">
          <div className="visa-container">
            <img src="/basicCreditCard.svg" alt="Credit Card" className="visa-card-img" />
          </div>

          <div className="quick-actions">
            <button className="action-pill" disabled={isViewer}><PlusIcon /> Top Up</button>
            <button className="action-pill active-pill" disabled={isViewer}><TransferIcon /> Transfer</button>
            <button className="action-pill"><HistoryIcon /> History</button>
          </div>

          <div className="insight-card glassy-card daily-limit">
            <div className="card-header">
              <span className="card-title">Daily Limit</span>
              {!isViewer && <div className="more-options"><MoreIcon /></div>}
            </div>
            <div className="limit-info">
              <p>{currencyPrefix}12,000 spent of {currencyPrefix}36,000</p>
              <span className="limit-percent">33.3%</span>
            </div>
            <div className="progress-bar-bg">
              <div className="progress-fill" style={{ width: '33.3%' }}></div>
            </div>
          </div>

          <div className="insight-card glassy-card saving-plans">
            <div className="card-header">
              <span className="card-title">Saving Plans</span>
              {!isViewer && <div className="more-options"><MoreIcon /></div>}
            </div>
            <p className="total-savings-label">Total savings</p>
            <h2 className="total-savings-amount">{currencyPrefix}45,500</h2>

            <div className="saving-items">
              {[
                { label: 'Emergency Fund', icon: '🛡️', amount: `${currencyPrefix}5,000`, target: `${currencyPrefix}10,000`, p: 50 },
                { label: 'Vacation Fund', icon: '✈️', amount: `${currencyPrefix}5,000`, target: `${currencyPrefix}10,000`, p: 50 },
                { label: 'Car Loan Payments', icon: '🚗', amount: `${currencyPrefix}5,000`, target: `${currencyPrefix}10,000`, p: 50 }
              ].map((plan, i) => (
                <div key={i} className="saving-item">
                  <div className="item-main">
                    <div className="item-icon-wrap">{plan.icon}</div>
                    <div className="item-content">
                      <div className="item-header">
                          <span className="item-label">{plan.label}</span>
                          <div className="more-options"><MoreIcon /></div>
                      </div>
                      <div className="item-stats">
                          <span>{plan.amount} <small>{plan.p}%</small></span>
                          <span className="item-target">Target: {plan.target}</span>
                      </div>
                      <div className="item-progress">
                          <div className="item-fill" style={{ width: `${plan.p}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mid Column ── */}
        <section className="insights-mid">
          <div className="summary-cards">
            <div className="summary-card glassy-card">
              <div className="summary-icon icon-blue">₹</div>
              <div className="summary-content">
                <span className="summary-trend pos">+6.75%</span>
                <h3 className="summary-val">{currencyPrefix}20,230</h3>
                <p className="summary-label">Total Income</p>
              </div>
              <div className="more-options"><MoreIcon /></div>
            </div>
            <div className="summary-card glassy-card">
              <div className="summary-icon icon-red">₹</div>
              <div className="summary-content">
                <span className="summary-trend neg">−5.15%</span>
                <h3 className="summary-val">{currencyPrefix}9,260</h3>
                <p className="summary-label">Total Spending</p>
              </div>
              <div className="more-options"><MoreIcon /></div>
            </div>
            <div className="summary-card glassy-card">
              <div className="summary-icon icon-green">₹</div>
              <div className="summary-content">
                <span className="summary-trend pos">+2.25%</span>
                <h3 className="summary-val">{currencyPrefix}10,970</h3>
                <p className="summary-label">Total Savings</p>
              </div>
              <div className="more-options"><MoreIcon /></div>
            </div>
          </div>

          <div className="insight-card glassy-card spending-insights">
            <div className="card-header">
              <span className="card-title">Spending Insights</span>
              <div className="more-options"><MoreIcon /></div>
            </div>
            <div className="spending-insights-body">
               <div className="score-panel">
                  <span className="score-label">SCORE</span>
                  <h2 className="score-val">81/100</h2>
                  <p className="score-desc">
                    Your spending is balanced. High efficiency in rental and investment management.
                  </p>
               </div>
              <SpendingBubbleChart />
            </div>
          </div>

          <div className="insight-card glassy-card cashflow-section">
            <div className="card-header">
              <span className="card-title">Cashflow</span>
              <div className="header-actions">
                  <button className="period-toggle">This Year <ChevronDown /></button>
              </div>
            </div>
            <div className="cashflow-summary">
              <div className="cashflow-balance">
                  <p>Total Balance</p>
                  <h3>{currencyPrefix}20,230</h3>
              </div>
               <div className="cashflow-legend">
                   <div className="legend-item"><span className="rect rect-income"></span> Income</div>
                   <div className="legend-item"><span className="rect rect-expense"></span> Expense</div>
               </div>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={260}>
                <BarChart 
                   data={cashflowData} 
                   margin={{ top: 20, right: 0, left: 0, bottom: 0 }} 
                   barGap={0} 
                   stackOffset="sign"
                 >
                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                   <XAxis 
                     dataKey="name" 
                     axisLine={false} 
                     tickLine={false} 
                     tick={{ fill: '#94A3B8', fontSize: 12 }} 
                   />
                   <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94A3B8', fontSize: 12 }}
                      tickFormatter={(v) => `${Math.abs(v/1000)}k`}
                   />
                   <Tooltip 
                     cursor={{ fill: 'transparent' }}
                     content={({ active, payload }) => {
                       if (active && payload && payload.length) {
                         return (
                            <div className="custom-tooltip">
                               <p className="tooltip-date">July 2025</p>
                               <div className="tooltip-row">
                                   <span>Income</span>
                                   <span>Rs 4,500</span>
                               </div>
                               <div className="tooltip-row">
                                   <span>Expense</span>
                                   <span>Rs 2,450</span>
                               </div>
                            </div>
                         );
                       }
                       return null;
                     }}
                   />
                   <Bar dataKey="income" fill="#1E3A8A" radius={[6, 6, 0, 0]} barSize={24} stackId="a" />
                   <Bar dataKey="expense" fill="#3B82F6" radius={[6, 6, 0, 0]} barSize={24} stackId="a" />
                 </BarChart>
               </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* ── Right Column ── */}
        <section className="insights-right">
          <div className="insight-card glassy-card statistics-card">
            <div className="card-header">
              <span className="card-title">Statistic</span>
              <button className="period-toggle-simple">This Month <ChevronDown /></button>
            </div>
            <div className="stat-tabs">
              <button className="stat-tab">Income</button>
              <button className="stat-tab active">Expense</button>
            </div>
            
            <div className="donut-container">
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={statsBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statsBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="donut-center">
                <span className="donut-label">Total Expense</span>
                <span className="donut-val">Rs 9,260</span>
              </div>
            </div>

            <div className="stat-breakdown-list">
              {statsBreakdown.map((item, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-item-left">
                    <span className="stat-badge" style={{ backgroundColor: item.color }}>{item.percentage}%</span>
                    <span className="stat-name">{item.name}</span>
                  </div>
                  <span className="stat-value">Rs {item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="insight-card glassy-card activity-card">
             <div className="card-header">
               <span className="card-title">Recent Activity</span>
               <div className="more-options"><MoreIcon /></div>
             </div>
             <p className="activity-date">Today</p>
             <div className="activity-list">
                {recentActivity.map((act) => (
                  <div key={act.id} className="activity-item">
                    <img src={act.avatar} alt="avatar" className="activity-avatar" />
                    <div className="activity-content">
                      <p className="activity-text">
                        <strong>{act.user}</strong> {act.action}
                      </p>
                      <span className="activity-time">{act.time}</span>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default InsightsPage;
