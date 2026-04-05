import React, { useState } from 'react';
import './OnboardingPage.css';

interface OnboardingPageProps {
  onComplete: () => void;
  onBackToAuth: () => void;
}

type Step = 1 | 2 | 3 | 4 | 5;

const FinexisLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="0" y="0" width="13" height="13" rx="4" fill="white"/>
    <rect x="0" y="19" width="13" height="13" rx="4" fill="white"/>
    <rect x="19" y="0" width="13" height="13" rx="4" fill="white" fillOpacity="0.6"/>
    <rect x="19" y="19" width="13" height="13" rx="4" fill="white" fillOpacity="0.6"/>
  </svg>
);

const ProfileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const ConnectionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const IncomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line>
  </svg>
);

const GoalsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const OnboardingPage: React.FC<OnboardingPageProps> = ({ onComplete, onBackToAuth }) => {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', country: '', currency: '', fieldOfWork: '',
    accountNumber: '', ifsc: '', accountType: 'Savings',
    incomeSource: '', secondarySource: '', monthlyIncome: '',
    goalName: '', goalType: 'Savings', goalAmount: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(s => (s < 5 ? s + 1 : 5) as Step);
  const prevStep = () => setStep(s => (s > 1 ? s - 1 : 1) as Step);

  const steps = [
    { id: 1, title: 'Profile Setup', desc: 'Personalize your experience by establishing your basic details, name, and local currency preferences so your dashboard feels like yours.' },
    { id: 2, title: 'Secure Connection', desc: 'Securely link your primary bank accounts. This read-only connection is required to provide you with automated, real-time financial insights.' },
    { id: 3, title: 'Income Baseline', desc: 'Establish your typical earnings. We use this data to power your Spend vs. Earn analyzer and calculate your true cash-flow capacity.' },
    { id: 4, title: 'Financial Goals', desc: 'Define what you are saving for. Whether it is an emergency fund or a vacation, setting targets helps us provide tailored, actionable advice.' }
  ];

  const renderLeftPanel = () => (
    <div className="onboarding-left">
      <div className="onboarding-glass-panel">
        <div className="onboarding-logo">
          <FinexisLogo />
          <span className="onboarding-logo-text">Finexis</span>
        </div>
        
        <div className="onboarding-steps-list">
          {steps.map((s) => (
            <div key={s.id} className={`step-item ${step === s.id ? 'active' : ''} ${step > s.id ? 'completed' : ''}`}>
              <div className="step-badge-wrap">
                <div className="step-badge-circular">
                    {s.id === 1 ? <ProfileIcon /> : s.id === 2 ? <ConnectionIcon /> : s.id === 3 ? <IncomeIcon /> : <GoalsIcon />}
                </div>
                {s.id < 4 && <div className="step-line-dotted" />}
              </div>
              <div className="step-text">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="step-form-content">
            <span className="step-count">STEP 1 OF 4</span>
            <h1 className="step-title">Create your profile</h1>
            <p className="step-subtitle">Set up your basic profile. This helps us personalize your dashboard, greetings, and localized currency settings.</p>
            
            <div className="form-row">
              <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="ob-input" />
              <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="ob-input" />
            </div>
            <div className="input-group">
                <input name="country" placeholder="Enter your country" value={formData.country} onChange={handleChange} className="ob-input" />
            </div>
            <div className="input-group">
                <input name="currency" placeholder="Enter your local currency" value={formData.currency} onChange={handleChange} className="ob-input" />
            </div>
            <div className="input-group">
                <input name="fieldOfWork" placeholder="Enter field of work" value={formData.fieldOfWork} onChange={handleChange} className="ob-input" />
            </div>
            
            <div className="ob-actions">
                <button className="ob-btn-back" onClick={onBackToAuth}>Go Back</button>
                <button className="ob-btn-next" onClick={nextStep}>Proceed</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-form-content">
            <span className="step-count">STEP 2 OF 4</span>
            <h1 className="step-title">Secure Connection</h1>
            <p className="step-subtitle">To give you accurate Spend vs. Earn insights, connect your primary checking account. We use 256-bit encryption, and our system is strictly read-only. We cannot move your money.</p>
            
            <div className="input-group">
                <input name="accountNumber" placeholder="Enter Account Number" value={formData.accountNumber} onChange={handleChange} className="ob-input" />
            </div>
            <div className="input-group">
                <input name="ifsc" placeholder="Enter IFSC code" value={formData.ifsc} onChange={handleChange} className="ob-input" />
            </div>
            <div className="input-group">
                <select name="accountType" value={formData.accountType} onChange={handleChange} className="ob-input ob-select">
                    <option value="Savings">Savings Account</option>
                    <option value="Current">Current Account</option>
                    <option value="Salary">Salary Account</option>
                </select>
            </div>
            
            <div className="ob-actions">
                <button className="ob-btn-back" onClick={prevStep}>Go Back</button>
                <button className="ob-btn-next" onClick={nextStep}>Send Verification Code</button>
            </div>
            <button className="resend-code">Resend Code</button>
          </div>
        );
      case 3:
        return (
          <div className="step-form-content">
            <span className="step-count">STEP 3 OF 4</span>
            <h1 className="step-title">Define your income baseline</h1>
            <p className="step-subtitle">To power your Spend vs. Earn analyzer, we need to establish your baseline income. This helps us calculate your retention rate and predict cash-flow gaps.</p>
            
            <div className="input-group">
                <input name="incomeSource" placeholder="Primary Income Source" value={formData.incomeSource} onChange={handleChange} className="ob-input" />
            </div>
            <div className="input-group">
                <input name="secondarySource" placeholder="Secondary Income Source" value={formData.secondarySource} onChange={handleChange} className="ob-input" />
            </div>
            <div className="input-group">
                <input name="monthlyIncome" placeholder="Enter Monthly Income" value={formData.monthlyIncome} onChange={handleChange} className="ob-input" />
            </div>
            
            <div className="ob-actions">
                <button className="ob-btn-back" onClick={prevStep}>Go Back</button>
                <button className="ob-btn-next" onClick={nextStep}>Proceed</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-form-content">
            <span className="step-count">STEP 4 OF 4</span>
            <h1 className="step-title">Set your financial goals</h1>
            <p className="step-subtitle">When our analyzer finds extra cash flow, what should we recommend you do with it? We've included some starter suggestions below, which you can adjust later in your dashboard.</p>
            
            <div className="input-group">
                <input name="goalName" placeholder="Set an initial goal" value={formData.goalName} onChange={handleChange} className="ob-input" />
            </div>
            <div className="input-group">
                <input name="goalType" placeholder="Target Type" value={formData.goalType} onChange={handleChange} className="ob-input" />
            </div>
            <div className="input-group">
                <input name="goalAmount" placeholder="Target Amount" value={formData.goalAmount} onChange={handleChange} className="ob-input" />
            </div>
            
            <div className="ob-actions">
                <button className="ob-btn-back" onClick={prevStep}>Go Back</button>
                <button className="ob-btn-next" onClick={nextStep}>Finish</button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="step-form-content">
            <span className="step-count completed">SETUP COMPLETE</span>
            <h1 className="step-title uppercase">WELCOME TO FINEXIS, {formData.firstName.toUpperCase() || 'SHASH'}</h1>
            <p className="step-subtitle">The hard part is over. Your financial overview is now working for you in the background. From now on, understanding your money will be the easiest part of your day.</p>
            
            <div className="summary-list">
                <div className="summary-item">
                    <span>{formData.firstName || 'shash'} {formData.lastName}</span>
                    <span className="check-bullet">✓</span>
                </div>
                <div className="summary-item">
                    <span>Logged in as user@email.com</span>
                    <span className="check-bullet">✓</span>
                </div>
                <div className="summary-item">
                    <span>{formData.fieldOfWork || 'Student'}</span>
                    <span className="check-bullet">✓</span>
                </div>
            </div>
            
            <div className="ob-actions">
                <button className="ob-btn-next full-width" onClick={onComplete}>Redirect to Home</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-root">
        {/* Animated Background from Login */}
        <div className="onboarding-bg-gradient" />
        
        {renderLeftPanel()}
        
        <div className="onboarding-right">
            <div className="form-container-ob">
                {renderStepContent()}
            </div>
        </div>
    </div>
  );
};

export default OnboardingPage;
