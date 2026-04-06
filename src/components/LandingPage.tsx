import { useState, useEffect } from 'react';
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
    const [footerMouse, setFooterMouse] = useState({ x: 0, y: 0 });
    const [showScrollDesc, setShowScrollDesc] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Disappear as soon as scroll starts
            if (window.scrollY > 0) {
                setShowScrollDesc(false);
            } else {
                setShowScrollDesc(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="landing-root">
            {/* ── Interactive Grid Distortion Background ── */}
            <div className="landing-grid-bg">
                <GridDistortion
                    imageSrc="/grid-distortion-1775395913439.png"
                    grid={20}
                    mouse={0.2}
                    strength={0.15}
                    relaxation={0.92}
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

                    {/* ── Scroll Indicator (Integrated for Perfect Center) ── */}
                    <div className={`scroll-indicator animate-fade-in ${!showScrollDesc ? 'scroll-hidden' : ''}`}>
                        <span className="scroll-text">SCROLL TO CONTINUE</span>
                        <div className="scroll-line">
                            <div className="scroll-line-fill"></div>
                        </div>
                    </div>
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
                                            <div className="bill-icon n">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M7 3h4.5l5.5 12.5V3H21v18h-4.5L11 8.5V21H7V3z" fill="#E50914" />
                                                </svg>
                                            </div>
                                            <div className="bill-detail">
                                                <span className="bill-name">Netflix</span>
                                                <span className="bill-price">Rs 199</span>
                                            </div>
                                            <div className="landing-bill-action">
                                                <span className="bill-due red">Tomorrow</span>
                                                <button className="bill-pay-btn">Pay Now</button>
                                            </div>
                                        </div>
                                        <div className="bill-item">
                                            <div className="bill-icon g">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M6 7.5a2.5 2.5 0 0 1 0 5H4a2.5 2.5 0 0 1 0-5h2Z"></path>
                                                    <path d="M18 7.5a2.5 2.5 0 0 1 0 5h2a2.5 2.5 0 0 1 0-5h-2Z"></path>
                                                    <path d="M6 10h12"></path>
                                                    <path d="M9 10h6"></path>
                                                </svg>
                                            </div>
                                            <div className="bill-detail">
                                                <span className="bill-name">Gym Membership</span>
                                                <span className="bill-price">Rs 1200</span>
                                            </div>
                                            <div className="landing-bill-action">
                                                <span className="bill-due amber">In 3 Days</span>
                                                <button className="bill-pay-btn">Pay Now</button>
                                            </div>
                                        </div>
                                        <div className="bill-item">
                                            <div className="bill-icon i">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                                                    <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                                                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                                                    <line x1="12" y1="20" x2="12.01" y2="20"></line>
                                                </svg>
                                            </div>
                                            <div className="bill-detail">
                                                <span className="bill-name">Internet Bill</span>
                                                <span className="bill-price">Rs 800</span>
                                            </div>
                                            <div className="landing-bill-action">
                                                <span className="bill-due green">In 7 Days</span>
                                                <button className="bill-pay-btn">Pay Now</button>
                                            </div>
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
                                            <div className="goal-row-top">
                                                <span className="goal-name">Emergency Fund</span>
                                                <span className="goal-pcent blue">77%</span>
                                            </div>
                                            <div className="goal-row-mid">
                                                <span className="goal-price-line">Rs 15,400 / Rs 20,000</span>
                                            </div>
                                            <div className="progress-bar-wrap"><div className="progress-fill blue" style={{ width: '77%' }} /></div>
                                        </div>
                                        <div className="goal-item">
                                            <div className="goal-row-top">
                                                <span className="goal-name">Summer Vacation</span>
                                                <span className="goal-pcent amber">53%</span>
                                            </div>
                                            <div className="goal-row-mid">
                                                <span className="goal-price-line">Rs 4,200 / Rs 8,000</span>
                                            </div>
                                            <div className="progress-bar-wrap"><div className="progress-fill amber" style={{ width: '53%' }} /></div>
                                        </div>
                                        <div className="goal-item">
                                            <div className="goal-row-top">
                                                <span className="goal-name">New Laptop</span>
                                                <span className="goal-pcent green">54%</span>
                                            </div>
                                            <div className="goal-row-mid">
                                                <span className="goal-price-line">Rs 650 / Rs 1,200</span>
                                            </div>
                                            <div className="progress-bar-wrap"><div className="progress-fill green" style={{ width: '54%' }} /></div>
                                        </div>
                                        <div className="goal-item">
                                            <div className="goal-row-top">
                                                <span className="goal-name">House Downpayment</span>
                                                <span className="goal-pcent purple">23%</span>
                                            </div>
                                            <div className="goal-row-mid">
                                                <span className="goal-price-line">Rs 34,500 / Rs 150,000</span>
                                            </div>
                                            <div className="progress-bar-wrap"><div className="progress-fill purple" style={{ width: '23%' }} /></div>
                                        </div>
                                        <div className="goal-item">
                                            <div className="goal-row-top">
                                                <span className="goal-name">Car Insurance</span>
                                                <span className="goal-pcent cyan">25%</span>
                                            </div>
                                            <div className="goal-row-mid">
                                                <span className="goal-price-line">Rs 150 / Rs 600</span>
                                            </div>
                                            <div className="progress-bar-wrap"><div className="progress-fill cyan" style={{ width: '25%' }} /></div>
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
                            </div>
                            <div className="feature-visual">
                                <div className="showcase-card visual-insights-card shadow-lux">
                                    <h3 className="visual-card-title">Spending Insights</h3>
                                    <div className="insights-content-wrap">
                                        <div className="score-summary-card">
                                            <span className="score-label">SCORE</span>
                                            <div className="score-value">81<span className="score-total">/100</span></div>
                                            <p className="score-desc">Your spending habits are balanced but you can improve the overall spending by managing your rental and investment spending.</p>
                                        </div>
                                        <div className="bubbles-visualization">
                                            <div className="bubble-group-main">
                                                <div className="insight-bubble rent">
                                                    <span className="bubble-label">RENT & LIVING</span>
                                                    <span className="bubble-extra top">VACATIONS</span>
                                                    <span className="bubble-extra bottom">HEALTHCARE</span>
                                                </div>
                                                <div className="insight-bubble invest">
                                                    <span className="bubble-label">INVESTMENT</span>
                                                    <span className="bubble-extra top-left">GIFTS</span>
                                                    <span className="bubble-extra top-center">STUDIES</span>
                                                </div>
                                                <div className="insight-bubble food">
                                                    <span className="bubble-label">FOOD</span>
                                                </div>
                                                <div className="insight-bubble movies">
                                                    <span className="bubble-label">MOVIES</span>
                                                </div>
                                            </div>
                                        </div>
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

                <div 
                    className="footer-branded-visual"
                    onMouseMove={(e) => {
                        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                        const x = (e.clientX - left) / width - 0.5;
                        const y = (e.clientY - top) / height - 0.5;
                        setFooterMouse({ x: x * 30, y: y * 15 });
                    }}
                    onMouseLeave={() => setFooterMouse({ x: 0, y: 0 })}
                >
                    <h1 className="footer-big-text">Finexis<span className="footer-tm">TM</span></h1>
                    <img 
                        src="/footer-fg.png" 
                        alt="Finexis Legacy" 
                        className="footer-people-img"
                        style={{
                            transform: `translate(${footerMouse.x}px, ${footerMouse.y}px) scale(1.02)`
                        }}
                    />
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
