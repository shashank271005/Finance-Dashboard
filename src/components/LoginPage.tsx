import React, { useState } from 'react';
import './LoginPage.css';
import PrivacyPolicyModal from './PrivacyPolicyModal';

/* ─── Icons ─────────────────────────────────── */
const FinexisLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="0" y="0" width="14" height="14" rx="3.5" fill="#3b4cf0"/>
    <rect x="0" y="18" width="14" height="14" rx="3.5" fill="#3b4cf0"/>
    <rect x="18" y="0" width="14" height="14" rx="3.5" fill="#a4abfa"/>
    <rect x="18" y="18" width="14" height="14" rx="3.5" fill="#a4abfa"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#94a3b8" strokeWidth="1.6"/>
    <path d="M2 7l10 7 10-7" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#94a3b8" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="3" stroke="#94a3b8" strokeWidth="1.6"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M1 1l22 22" stroke="#94a3b8" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

/* ─── Component ──────────────────────────────── */
interface LoginPageProps {
  onLogin: () => void;
  onSignup: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSignup }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot' | 'reset'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', password: '', confirm: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'forgot') {
      setMode('reset');
      return;
    }
    if (mode === 'reset') {
      setMode('signin');
      return;
    }
    
    if (mode === 'signup') {
      onSignup();
    } else {
      onLogin();
    }
  };

  return (
    <div className="login-root">
      {/* ── Full-page background video ── */}
      <video
        className="login-bg-video"
        src="/form-bgvid.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* ── Left Panel ── */}
      <div className="login-left">
        <div className="login-form-container">

          {/* Logo */}
          <div className="login-logo">
            <FinexisLogo />
            <span className="login-logo-text">Finexis</span>
          </div>

          {/* Welcome Screens (Sign In / Sign Up) */}
          {(mode === 'signin' || mode === 'signup') && (
            <>
              <h1 className="login-heading">Welcome Back. Let's start!</h1>
              <p className="login-sub">Where Your Money Makes Sense.</p>
            </>
          )}

          {/* Forgot Password Heading */}
          {mode === 'forgot' && (
            <>
              <h1 className="login-heading">Forgot Password?</h1>
              <p className="login-sub">Do not worry, we will send you the reset instructions.</p>
            </>
          )}

          {/* Reset Password Heading */}
          {mode === 'reset' && (
            <>
              <h1 className="login-heading">Set new password</h1>
              <p className="login-sub">Set a new password for your account.</p>
            </>
          )}

          {/* Mode Toggle (Only for Sign In / Sign Up) */}
          {(mode === 'signin' || mode === 'signup') && (
            <div className="login-toggle">
              <button
                className={`toggle-btn ${mode === 'signin' ? 'toggle-btn-active' : ''}`}
                onClick={() => setMode('signin')}
              >
                Sign In
              </button>
              <button
                className={`toggle-btn ${mode === 'signup' ? 'toggle-btn-active' : ''}`}
                onClick={() => setMode('signup')}
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>

            {/* Sign Up extra fields */}
            {mode === 'signup' && (
              <div className="form-row-two">
                <div className="input-wrap">
                  <input name="firstName" value={form.firstName} onChange={handleChange}
                    placeholder="First Name" className="form-input" />
                </div>
                <div className="input-wrap">
                  <input name="lastName" value={form.lastName} onChange={handleChange}
                    placeholder="Last Name" className="form-input" />
                </div>
              </div>
            )}

            {/* Email & Password (Sign In / Sign Up only) */}
            {(mode === 'signin' || mode === 'signup') && (
              <>
                <div className="input-wrap input-wrap-icon">
                  <input name="email" type="email" value={form.email} onChange={handleChange}
                    placeholder="Enter your email" className="form-input" />
                  <span className="input-icon"><MailIcon /></span>
                </div>

                <div className="input-wrap input-wrap-icon">
                  <input name="password" type={showPassword ? 'text' : 'password'}
                    value={form.password} onChange={handleChange}
                    placeholder="Enter your password" className="form-input" />
                  <button type="button" className="input-icon-btn"
                    onClick={() => setShowPassword(v => !v)}>
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </>
            )}

            {/* Sign Up: Confirm + Policy */}
            {mode === 'signup' && (
              <>
                <div className="input-wrap input-wrap-icon">
                  <input name="confirm" type={showConfirm ? 'text' : 'password'}
                    value={form.confirm} onChange={handleChange}
                    placeholder="Confirm your password" className="form-input" />
                  <button type="button" className="input-icon-btn"
                    onClick={() => setShowConfirm(v => !v)}>
                    {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>

                <label className="checkbox-row">
                  <span className={`custom-checkbox ${agreed ? 'checked' : ''}`}
                    onClick={() => setAgreed(v => !v)} />
                  <span className="checkbox-label">
                    I agree with{' '}
                    <button type="button" className="policy-link"
                      onClick={() => setShowPolicy(true)}>
                      privacy and policy
                    </button>.
                  </span>
                </label>
              </>
            )}

            {/* Sign In: Remember me + Forgot */}
            {mode === 'signin' && (
              <div className="remember-row">
                <label className="checkbox-row remember-label">
                  <span className={`custom-checkbox ${rememberMe ? 'checked' : ''}`}
                    onClick={() => setRememberMe(v => !v)} />
                  <span className="checkbox-label">Remember me</span>
                </label>
                <button type="button" className="forgot-btn" onClick={() => setMode('forgot')}>Forgot password?</button>
              </div>
            )}

            {/* Forgot Password Input */}
            {mode === 'forgot' && (
              <div className="input-wrap input-wrap-icon">
                <input name="email" type="email" value={form.email} onChange={handleChange}
                  placeholder="Enter your email" className="form-input" />
                <span className="input-icon"><MailIcon /></span>
              </div>
            )}

            {/* Reset Password Inputs */}
            {mode === 'reset' && (
              <>
                <div className="input-wrap input-wrap-icon">
                  <input name="password" type={showPassword ? 'text' : 'password'}
                    value={form.password} onChange={handleChange}
                    placeholder="Enter password" className="form-input" />
                  <button type="button" className="input-icon-btn"
                    onClick={() => setShowPassword(v => !v)}>
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
                <div className="input-wrap input-wrap-icon">
                  <input name="confirm" type={showConfirm ? 'text' : 'password'}
                    value={form.confirm} onChange={handleChange}
                    placeholder="Confirm password" className="form-input" />
                  <button type="button" className="input-icon-btn"
                    onClick={() => setShowConfirm(v => !v)}>
                    {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </>
            )}

            {/* Submit Button */}
            <button type="submit" className="submit-btn" style={{ marginTop: (mode === 'forgot' || mode === 'reset') ? '24px' : '0' }}>
              {mode === 'signup' && 'Sign Up'}
              {mode === 'signin' && 'Login'}
              {mode === 'forgot' && 'Send reset link'}
              {mode === 'reset' && 'Reset Password'}
            </button>

            {/* Back to Login Link */}
            {(mode === 'forgot' || mode === 'reset') && (
              <button type="button" className="back-link" onClick={() => setMode('signin')}>
                Back to Login
              </button>
            )}
          </form>

          {/* Divider (Only for Sign In / Sign Up) */}
          {(mode === 'signin' || mode === 'signup') && (
            <div className="or-divider">
              <span className="or-line" />
              <span className="or-text">OR</span>
              <span className="or-line" />
            </div>
          )}

          {/* Social — stacked full width (Only for Sign In / Sign Up) */}
          {(mode === 'signin' || mode === 'signup') && (
            <div className="social-stack">
              <button className="social-full social-apple" onClick={onLogin}>
                <AppleIcon />
                <span>Log in with Apple</span>
              </button>
              <button className="social-full social-google" onClick={onLogin}>
                <GoogleIcon />
                <span>Log in with Google</span>
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPolicy && (
        <PrivacyPolicyModal
          onClose={() => setShowPolicy(false)}
          onAgree={() => {
            setAgreed(true);
            setShowPolicy(false);
          }}
        />
      )}
    </div>
  );
};

export default LoginPage;
