import React from 'react';
import './Goals.css';

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MoreVerticalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1.5"></circle>
    <circle cx="12" cy="5" r="1.5"></circle>
    <circle cx="12" cy="19" r="1.5"></circle>
  </svg>
);

const DiamondAlertIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="2" width="14.14" height="14.14" transform="rotate(45 12 2)" fill="#3B4CF0" />
    <path d="M12 8V13M12 16H12.01" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const GraduationCapIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
);

const Goals: React.FC = () => {
    // Generate segments for the gauge arc
    const segments = Array.from({ length: 28 }, (_, i) => i);
    const activeSegments = Math.floor(28 * 0.65); // ~65% filled for visual effect

    return (
        <div className="goals-page">
            <header className="goals-header">
                <div className="gh-left">
                    <h1 className="gh-title">Check Target Progression</h1>
                    <div className="gh-filters">
                        <div className="gh-pill">Filter <FilterIcon /></div>
                        <div className="gh-pill">This month <ChevronDownIcon /></div>
                        <div className="gh-pill">Download CSV <DownloadIcon /></div>
                    </div>
                </div>
                <div className="gh-right">
                    <div className="gh-top-row">
                        <button className="gh-btn-wish"><svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"/></svg>Cool Down Wishlist</button>
                        <button className="gh-btn-blue">+ New Payment</button>
                    </div>
                    <div className="gh-bottom-row">
                        <div className="gh-search-group">
                            <SearchIcon />
                            <input type="text" placeholder="Search" />
                        </div>
                        <button className="gh-more-btn"><MoreVerticalIcon /></button>
                    </div>
                </div>
            </header>

            <div className="goals-grid-top">
                {/* 1. Current Goals */}
                <div className="goals-card current-goals">
                    <div className="card-header-main">
                        <h2>Current Goals</h2>
                        <button className="add-pill">+ Add</button>
                    </div>
                    <div className="goals-list">
                        <div className="goal-item-ref">
                            <div className="goal-icon-box blue-diamond">
                                <DiamondAlertIcon />
                            </div>
                            <div className="goal-content-ref">
                                <div className="goal-top-ref">
                                    <span className="goal-title-ref">Emergency Fund</span>
                                    <MoreVerticalIcon />
                                </div>
                                <div className="goal-stats-ref">
                                    <span className="stat-saved">Rs 12,000 saved</span>
                                    <span className="stat-target">Target: Rs 36,000</span>
                                    <span className="stat-perc">33.3%</span>
                                </div>
                                <div className="goal-progress-wrap-ref">
                                    <div className="goal-progress-fill-ref" style={{ width: '33.3%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="goal-item-ref">
                            <div className="goal-icon-box blue-circle">
                                <GraduationCapIcon />
                            </div>
                            <div className="goal-content-ref">
                                <div className="goal-top-ref">
                                    <span className="goal-title-ref">Education Loan</span>
                                    <MoreVerticalIcon />
                                </div>
                                <div className="goal-stats-ref">
                                    <span className="stat-saved">Rs 12,000 saved</span>
                                    <span className="stat-target">Target: Rs 36,000</span>
                                    <span className="stat-perc">33.3%</span>
                                </div>
                                <div className="goal-progress-wrap-ref">
                                    <div className="goal-progress-fill-ref" style={{ width: '33.3%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-top-stack">
                    {/* 2. Analysis Banner */}
                    <div className="analysis-card-ref">
                        <div className="analysis-info-ref">
                            <h3>Check Your Final <strong>Monthly Analysis</strong> Report</h3>
                        </div>
                        <div className="analysis-actions-ref">
                            <button className="view-btn-pill">View</button>
                            <MoreVerticalIcon />
                        </div>
                    </div>

                    <div className="metrics-cards-pair">
                        {/* 3. Today Received */}
                        <div className="metric-card-ref today-received">
                            <div className="metric-head-ref">
                                <div className="metric-circle-icon"><ChevronDownIcon /></div>
                                <div className="metric-label-ref">Today Received</div>
                                <MoreVerticalIcon />
                            </div>
                            <div className="metric-value-ref">Rs 17,554</div>
                            <div className="metric-footer-ref">
                                <span>12% more than yesterday</span>
                                <button className="footer-arrow-btn"><ChevronDownIcon /></button>
                            </div>
                        </div>

                        {/* 4. Financial Report */}
                        <div className="metric-card-ref financial-report-ref">
                            <div className="report-head-ref">
                                <button className="report-close-btn">✕</button>
                                <div className="report-head-right">
                                    <div className="report-mini-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/></svg></div>
                                    <MoreVerticalIcon />
                                </div>
                            </div>
                            <div className="report-body-ref">
                                <div className="print-pill-ref">Print Report</div>
                                <h3>Financial Report</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="goals-grid-bottom">
                {/* 5. Expense Breakdown */}
                <div className="goals-card expense-breakdown-ref">
                    <div className="eb-head-ref">
                        <h2>Expense Breakdown</h2>
                        <div className="eb-actions-ref">
                            <div className="eb-pill-select">This Week <ChevronDownIcon /></div>
                            <MoreVerticalIcon />
                        </div>
                    </div>
                    <div className="eb-main-ref">
                        <div className="eb-total-ref">Rs 13.5k</div>
                        <div className="eb-legend-grid">
                            <div className="leg-item"><span className="dot g1"></span> Rs 0-100</div>
                            <div className="leg-item"><span className="dot b1"></span> Rs 1000-2500</div>
                            <div className="leg-item"><span className="dot b2"></span> Rs 100-1000</div>
                            <div className="leg-item"><span className="dot bl1"></span> Rs 2500-10000</div>
                        </div>
                    </div>
                    <div className="eb-heatmap-area">
                        <div className="heatmap-labels-ref">
                            <span>Groceries</span>
                            <span>Rent</span>
                            <span>Entertainment</span>
                        </div>
                        <div className="heatmap-grid-ref">
                            {/* 7 columns x 3 rows */}
                            {Array.from({ length: 21 }).map((_, i) => (
                                <div key={i} className={`h-dot ${['g1', 'b1', 'bl1', 'b2'][Math.floor(Math.random() * 4)]}`}></div>
                            ))}
                            <div className="heatmap-days-ref">
                                <span>S</span><span>M</span><span>T</span><span>W</span><span>Th</span><span>F</span><span>S</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. Financial Balance */}
                <div className="goals-card financial-balance-ref">
                    <div className="fb-head-ref">
                        <h2>Financial Balance</h2>
                        <MoreVerticalIcon />
                    </div>
                    <div className="fb-content-ref">
                        <div className="fb-top-labels">
                            <div className="leg-item"><span className="dot g1"></span> Total Earning</div>
                            <div className="leg-item"><span className="dot blue"></span> Spent this Week</div>
                            <div className="leg-item"><span className="dot bl1"></span> Total Profit</div>
                        </div>
                        <div className="fb-gauge-wrap">
                            <div className="segmented-gauge">
                                {segments.map(s => (
                                    <div 
                                        key={s} 
                                        className={`gauge-segment ${s < activeSegments ? 'active' : ''}`}
                                        style={{ transform: `rotate(${-90 + s * (180/28)}deg) translateY(-100px)` }}
                                    ></div>
                                ))}
                                <div className="gauge-center-text">
                                    <div className="g-perc">22% <span className="g-more">more</span></div>
                                    <div className="g-sub">from last week</div>
                                </div>
                            </div>
                        </div>
                        <div className="fb-status-pill-ref">
                            <span>Great!! 22% more profit compared to last week</span>
                            <div className="fb-perc-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg> +22%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goals;
