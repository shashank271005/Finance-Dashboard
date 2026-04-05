import './LandingPage.css';
import GridDistortion from './GridDistortion';

interface LandingPageProps {
    onStart: () => void;
}

const FinexisLogo = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="0" y="0" width="14" height="14" rx="3.5" fill="#3B4CF0" />
        <rect x="0" y="18" width="14" height="14" rx="3.5" fill="#3B4CF0" />
        <rect x="18" y="0" width="14" height="14" rx="3.5" fill="#a4abfa" />
        <rect x="18" y="18" width="14" height="14" rx="3.5" fill="#a4abfa" />
    </svg>
);

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="landing-root">
            {/* ── Interactive Grid Distortion Background ── */}
            <div className="landing-grid-bg">
                <GridDistortion
                    imageSrc="/grid-distortion-1775395913439.png"
                    grid={20}
                    mouse={0.1}
                    strength={0.12}
                    relaxation={0.9}
                />
            </div>

            {/* ── Header ── */}
            <header className="landing-header">
                <div className="header-container">
                    <div className="landing-logo-wrap">
                        <FinexisLogo />
                        <span className="landing-logo-text">Finexis</span>
                    </div>

                    <div className="header-actions">
                        <button className="btn-free-trial" onClick={onStart}>Free Trial</button>
                    </div>
                </div>
            </header>

            {/* ── Hero Section ── */}
            <section className="landing-hero">
                <div className="hero-content">
                    <h1 className="hero-title animate-slide-up">
                        Improve Your Money <br /> Management with <span className="highlight">Finexis</span>
                    </h1>
                    <p className="hero-subtitle animate-slide-up-delayed">
                        Simplify your business's financial management with our easy-to-use, scalable SaaS platform. <br />
                        Built for modern teams, our tools make complex processes simple.
                    </p>
                    <button className="btn-get-started animate-slide-up-delayed-2" onClick={onStart}>
                        Get Started
                    </button>
                </div>
            </section>

            {/* ── Features Walkthrough ── */}
            <div className="features-container">

                {/* Section 01: Analytics */}
                <section className="feature-section alt-bg">
                    <div className="section-content">
                        <div className="feature-block animate-slide-right">
                            <div className="feature-info">
                                <div className="feature-index">01</div>
                                <div className="feature-tag">ANALYTICS</div>
                                <h2 className="feature-title">Real-Time Income Analytics</h2>
                                <p className="feature-text">Stay on top of your earnings with dynamic daily trend analysis. Track your growth patterns and see how your current performance compares to your daily averages instantly.</p>
                                <ul className="feature-points">
                                    <li>Daily Rs 2,500 tracking capability</li>
                                    <li>Average Rs 1,393 income benchmarking</li>
                                    <li>+9.75% growth visualization</li>
                                </ul>
                            </div>
                            <div className="feature-visual">
                                <div className="showcase-card visual-income-card shadow-lux">
                                    <div className="card-header-row">
                                        <span className="card-label-alt">Income</span>
                                        <span className="card-dots-v">⋮</span>
                                    </div>
                                    <div className="income-stat-row">
                                        <div className="income-main">
                                            <span className="income-val">Rs 2,500</span>
                                            <span className="income-avg">Avg. Rs 1,393</span>
                                        </div>
                                        <div className="income-badge">
                                            <span className="arrow-up">↗</span> 9.75%
                                        </div>
                                    </div>
                                    <div className="income-chart">
                                        <svg viewBox="0 0 400 100" className="income-svg">
                                            <defs>
                                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#3B4CF0" stopOpacity="0.15" />
                                                    <stop offset="100%" stopColor="#3B4CF0" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            <path d="M0,70 C50,65 80,68 120,75 C160,82 180,60 220,55 C260,50 280,65 320,58 C360,51 380,40 400,30 L400,100 L0,100 Z" fill="url(#chartGradient)" />
                                            <path d="M0,70 C50,65 80,68 120,75 C160,82 180,60 220,55 C320,58 400,30" fill="none" stroke="#3B4CF0" strokeWidth="3" strokeLinecap="round" />
                                        </svg>
                                        <div className="chart-days">
                                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 02: Management */}
                <section className="feature-section">
                    <div className="section-content">
                        <div className="feature-block reverse animate-slide-left">
                            <div className="feature-info">
                                <div className="feature-index">02</div>
                                <div className="feature-tag secondary">MANAGEMENT</div>
                                <h2 className="feature-title">Automated Bill Tracking</h2>
                                <p className="feature-text">Never miss a subscription or recurring bill again. Finexis reminds you before the payments are due, ensuring your cash flow stays predictable and stable.</p>
                                <ul className="feature-points">
                                    <li>Automated Netflix, Gym, and Internet alerts</li>
                                    <li>Strategic "In 3 Days" early warnings</li>
                                    <li>Comprehensive bill status overview</li>
                                </ul>
                            </div>
                            <div className="feature-visual">
                                <div className="showcase-card visual-bills-card shadow-lux">
                                    <h3 className="visual-card-title">Upcoming Bills</h3>
                                    <div className="bills-list">
                                        <div className="bill-item">
                                            <div className="bill-icon n">N</div>
                                            <div className="bill-detail">
                                                <span className="bill-name">Netflix</span>
                                                <span className="bill-price">Rs 199</span>
                                            </div>
                                            <span className="bill-due red">Tomorrow</span>
                                        </div>
                                        <div className="bill-item">
                                            <div className="bill-icon g">G</div>
                                            <div className="bill-detail">
                                                <span className="bill-name">Gym Membership</span>
                                                <span className="bill-price">Rs 1200</span>
                                            </div>
                                            <span className="bill-due amber">In 3 Days</span>
                                        </div>
                                        <div className="bill-item">
                                            <div className="bill-icon i">I</div>
                                            <div className="bill-detail">
                                                <span className="bill-name">Internet Bill</span>
                                                <span className="bill-price">Rs 800</span>
                                            </div>
                                            <span className="bill-due green">In 7 Days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 03: Goals */}
                <section className="feature-section alt-bg">
                    <div className="section-content">
                        <div className="feature-block animate-slide-right">
                            <div className="feature-info">
                                <div className="feature-index">03</div>
                                <div className="feature-tag highlight">GOALS</div>
                                <h2 className="feature-title">Dynamic Growth Trackers</h2>
                                <p className="feature-text">Set, track, and achieve your financial goals with ease. From emergency funds to house downpayments, Finexis provides visual progress that keeps you motivated.</p>
                                <ul className="feature-points">
                                    <li>Emergency Fund: 77% achieved</li>
                                    <li>Summer Vacation & New Laptop tracking</li>
                                    <li>Visual progress bars with percentage mapping</li>
                                </ul>
                            </div>
                            <div className="feature-visual">
                                <div className="showcase-card visual-goals-card shadow-lux">
                                    <div className="card-header-row">
                                        <h3 className="visual-card-title no-border">Savings Goals</h3>
                                        <span className="card-dots-v">⋮</span>
                                    </div>
                                    <div className="goals-stack">
                                        <div className="goal-item">
                                            <div className="goal-header">
                                                <span className="goal-name">Emergency Fund</span>
                                                <span className="goal-pcent">77%</span>
                                            </div>
                                            <div className="goal-price-line">Rs 15,400 / Rs 20,000</div>
                                            <div className="progress-bar-wrap"><div className="progress-fill blue" style={{ width: '77%' }} /></div>
                                        </div>
                                        <div className="goal-item">
                                            <div className="goal-header">
                                                <span className="goal-name">Summer Vacation</span>
                                                <span className="goal-pcent">53%</span>
                                            </div>
                                            <div className="goal-price-line">Rs 4,200 / Rs 8,000</div>
                                            <div className="progress-bar-wrap"><div className="progress-fill amber" style={{ width: '53%' }} /></div>
                                        </div>
                                        <div className="goal-item">
                                            <div className="goal-header">
                                                <span className="goal-name">New Laptop</span>
                                                <span className="goal-pcent">54%</span>
                                            </div>
                                            <div className="goal-price-line">Rs 650 / Rs 1,200</div>
                                            <div className="progress-bar-wrap"><div className="progress-fill green" style={{ width: '54%' }} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 04: The Ledger (Spotlight) */}
                <section className="feature-section-spotlight">
                    <div className="section-content-wide">
                        <div className="spotlight-header">
                            <div className="feature-index-center">04</div>
                            <div className="feature-tag accent">POWERFUL LEDGER</div>
                            <h2 className="feature-title-center">Enterprise-Grade Transaction History</h2>
                            <p className="feature-text-center">Review every detail with our clear, categorized ledger view. Filter by technology, income, or operations to understand exactly where your money moves.</p>
                        </div>
                        <div className="transaction-table-visual shadow-lux-wide">
                            <div className="table-header">
                                <span>DATE</span>
                                <span>DESCRIPTION</span>
                                <span>CATEGORY</span>
                                <span>AMOUNT</span>
                                <span>STATUS</span>
                            </div>
                            <div className="table-rows">
                                <div className="t-row">
                                    <span className="t-date">Oct 24, 2023</span>
                                    <div className="t-desc-cell">
                                        <div className="t-icon aws">⟷</div>
                                        <span className="t-desc-text">AWS Cloud Infrastructure</span>
                                    </div>
                                    <div className="t-cat-cell"><span className="cat-badge tech">Technology</span></div>
                                    <span className="t-amt neg">- ₹1,45,200</span>
                                    <div className="t-status-cell"><span className="status-dot done"></span> Completed</div>
                                </div>
                                <div className="t-row">
                                    <span className="t-date">Oct 22, 2023</span>
                                    <div className="t-desc-cell">
                                        <div className="t-icon corp">💼</div>
                                        <span className="t-desc-text">Client Retainer - Alpha Corp</span>
                                    </div>
                                    <div className="t-cat-cell"><span className="cat-badge income">Income</span></div>
                                    <span className="t-amt pos">+ ₹3,50,000</span>
                                    <div className="t-status-cell"><span className="status-dot done"></span> Completed</div>
                                </div>
                                <div className="t-row">
                                    <span className="t-date">Oct 21, 2023</span>
                                    <div className="t-desc-cell">
                                        <div className="t-icon food">↗</div>
                                        <span className="t-desc-text">Catering - Quarterly Review</span>
                                    </div>
                                    <div className="t-cat-cell"><span className="cat-badge food">Food</span></div>
                                    <span className="t-amt neg">- ₹19,900</span>
                                    <div className="t-status-cell"><span className="status-dot wait"></span> Pending</div>
                                </div>
                                <div className="t-row">
                                    <span className="t-date">Oct 20, 2023</span>
                                    <div className="t-desc-cell">
                                        <div className="t-icon social">🌐</div>
                                        <span className="t-desc-text">Social Media Campaign</span>
                                    </div>
                                    <div className="t-cat-cell"><span className="cat-badge marketing">Marketing</span></div>
                                    <span className="t-amt neg">- ₹45,000</span>
                                    <div className="t-status-cell"><span className="status-dot done"></span> Completed</div>
                                </div>
                                <div className="t-row">
                                    <span className="t-date">Oct 18, 2023</span>
                                    <div className="t-desc-cell">
                                        <div className="t-icon payroll">₹</div>
                                        <span className="t-desc-text">Employee Salary - October</span>
                                    </div>
                                    <div className="t-cat-cell"><span className="cat-badge payroll">Payroll</span></div>
                                    <span className="t-amt neg">- ₹8,75,000</span>
                                    <div className="t-status-cell"><span className="status-dot done"></span> Completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 05: Insights */}
                <section className="feature-section">
                    <div className="section-content">
                        <div className="feature-block reverse animate-slide-left">
                            <div className="feature-info">
                                <div className="feature-index">05</div>
                                <div className="feature-tag highlight">INSIGHTS</div>
                                <h2 className="feature-title">Intelligent Behavioral Scoring</h2>
                                <p className="feature-text">Understand your spending habits with a personalized score. Our intelligent clustering identifies exactly where you can optimize your lifestyle.</p>
                                <div className="score-brief shadow-subtle">
                                    <span>PLATFORM SCORE</span>
                                    <strong>81/100</strong>
                                    <p>Your habits are balanced but can be improved further.</p>
                                </div>
                            </div>
                            <div className="feature-visual">
                                <div className="showcase-card visual-insights-card shadow-lux">
                                    <h3 className="visual-card-title">Spending Insights</h3>
                                    <div className="bubbles-container">
                                        <div className="bubble-spot b1">RENT & LIVING</div>
                                        <div className="bubble-spot b2">INVESTMENT</div>
                                        <div className="bubble-spot b3">FOOD</div>
                                        <div className="bubble-spot b4">Gifts</div>
                                        <div className="bubble-spot b5">Movies</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <footer className="landing-footer">
                <div className="footer-nav-top">
                    <div className="footer-copyright">
                        © Finexis 2026. All Rights Reserved
                    </div>
                    <div className="footer-links">
                        <span>Privacy Preferences</span>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>

                <div className="footer-branded-visual">
                    <h1 className="footer-big-text">Finexis<span className="footer-tm">TM</span></h1>
                    <img 
                        src="/footer-fg.png" 
                        alt="Finexis Legacy" 
                        className="footer-people-img"
                    />
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
