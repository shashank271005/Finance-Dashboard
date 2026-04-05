import React, { useState, useEffect } from 'react';
import './PrivacyPolicyModal.css';

/* ─── Logo ───────────────────────────────────── */
const FinexisLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="0" y="0" width="14" height="14" rx="3.5" fill="#2D3FE0"/>
    <rect x="18" y="0" width="14" height="14" rx="3.5" fill="#2D3FE0" opacity="0.6"/>
    <rect x="0" y="18" width="14" height="14" rx="3.5" fill="#2D3FE0" opacity="0.6"/>
    <rect x="18" y="18" width="14" height="14" rx="3.5" fill="#2D3FE0" opacity="0.35"/>
  </svg>
);

/* ─── Policy Sections Data ───────────────────── */
interface Section {
  id: number;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: 1,
    title: 'Information We Collect',
    content: (
      <>
        <p>
          Expanded Policy Text: To provide you with the most accurate financial insights, we collect two types of
          data: information you give us directly, and data we receive from your linked accounts.
        </p>
        <ul>
          <li>
            <strong>Account &amp; Profile Data:</strong> This includes your name, email address, phone number (for two-factor
            authentication), and your profile picture.
          </li>
          <li>
            <strong>Financial Data:</strong> When you securely link your bank, we retrieve read-only data. This includes your
            transaction history (amounts, dates, merchant names), account balances, and categorized income
            (like your salary deposits).
          </li>
          <li>
            <strong>Device &amp; Usage Data:</strong> We collect basic analytics on how you use the app—such as which graphs you
            view most often, what time of day you check your dashboard, and your device type. This helps us
            optimize the app's performance and fix bugs.
          </li>
        </ul>
        <p className="pp-rationale">
          UX/Product Rationale: Young professionals are highly aware of data harvesting. By explicitly breaking
          down the data into "what you give us" versus "what we pull from your bank," you remove the mystery.
          Mentioning device data explains why the app might track their clicks—framing it around improving Their
          experience, not spying.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'How We Use Your Information',
    content: (
      <>
        <p>
          Expanded Policy Text: We only use your data to make this app a better financial tool for you. Here is
          exactly how your information is put to work:
        </p>
        <ul>
          <li>
            <strong>Powering the Spend vs. Earn Analyzer:</strong> We process your transaction history to categorize your
            spending and plot it against your incoming salary. This is what generates your weekly and monthly
            cash-flow graphs.
          </li>
          <li>
            <strong>Generating Smart Insights:</strong> We use algorithms to look for patterns in your spending (e.g., noticing you
            spend 40% of your dining budget on weekends) to push timely, actionable tips to your dashboard.
          </li>
          <li>
            <strong>Personalizing the Interface:</strong> Your usage data helps us understand what matters to you. If you check
            your "Emergency Fund" goal every day, we use that data to prioritize that widget on your home
            screen.
          </li>
        </ul>
        <p className="pp-rationale">
          UX/Product Rationale: This connects the "boring" legal text directly to the app's Unique Feature (the
          Analyzer). It reassures the user that their data is actively working for them to create those cool features,
          turning data collection into a value exchange.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'How We Protect Your Data',
    content: (
      <>
        <p>
          Expanded Policy Text: Your financial security is non-negotiable. We employ bank-level security measures
          so you can use the app with zero anxiety.
        </p>
        <ul>
          <li>
            <strong>Read-Only Access:</strong> We use tokenized access. This means we never see, store, or hold your actual bank
            login credentials. We only receive a secure "token" that allows us to view your balances and
            transactions. We cannot move your money.
          </li>
          <li>
            <strong>Encryption Everywhere:</strong> All data flowing between your phone, our servers, and your bank is protected
            by 256-bit AES encryption—the same standard used by major global banks.
          </li>
          <li>
            <strong>Biometric App Lock:</strong> We support and encourage FaceID or fingerprint login to ensure that even if you
            lose your phone, your financial overview remains locked and private.
          </li>
        </ul>
        <p className="pp-rationale">
          UX/Product Rationale: In a case study, emphasizing "Read-Only" is a massive trust signal. Highlighting the
          "Biometric App Lock" shows you are thinking about the physical UX of security, not just the backend code.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'What We Do NOT Do',
    content: (
      <>
        <p>
          Expanded Policy Text: We believe in a transparent business model. You have a right to know what we don't
          do with your information.
        </p>
        <ul>
          <li>
            <strong>We do NOT sell your data:</strong> We will never sell your personal information, transaction history, or contact
            details to third parties, marketing agencies, or data brokers.
          </li>
          <li>
            <strong>We do NOT use your data for targeted ads:</strong> You will never see third-party advertisements in our app
            based on your spending habits.
          </li>
          <li>
            <strong>How we make money:</strong> Instead of selling data, our business model relies on our Premium subscription
            tier, which offers advanced long-term forecasting tools.
          </li>
        </ul>
        <p className="pp-rationale">
          UX/Product Rationale: Users often wonder, "If the app is free, am I the product?" By explicitly stating how
          the app makes money (a premium tier), you build immense credibility. It proves you understand the
          business side of product design, which recruiters love to see.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: 'Third-Party Integrations',
    content: (
      <>
        <p>
          Expanded Policy Text: To securely connect to thousands of different banks, we partner with industry-
          leading financial infrastructure providers (such as Plaid or Finicity).
        </p>
        <ul>
          <li>
            <strong>Secure Handoff:</strong> When you link your bank, you are temporarily handed off to our partner's highly secure
            portal. You log in directly with your bank, and our partner acts as the secure bridge.
          </li>
          <li>
            <strong>Strict Auditing:</strong> We only partner with services that undergo continuous, independent security audits
            and comply with strict data protection regulations (like SOC 2 and GDPR).
          </li>
        </ul>
        <p className="pp-rationale">
          UX/Product Rationale: Acknowledging the use of a tool like Plaid shows you understand modern fintech
          architecture. From a UX perspective, explaining the "Secure Handoff" prepares the user for the visual shift
          that happens when the app redirects them to a bank login screen.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: 'Your Controls and Rights',
    content: (
      <>
        <p>
          Expanded Policy Text: You are in control of your data at all times. We provide clear, easy-to-use tools
          within the app to exercise your rights.
        </p>
        <ul>
          <li>
            <strong>Right to Access:</strong> You can download a full export of all data we hold about you directly from your
            account settings at any time.
          </li>
          <li>
            <strong>Right to Delete:</strong> You can permanently delete your account and all associated data with a single tap.
            We will process this within 30 days and send you a confirmation email.
          </li>
          <li>
            <strong>Right to Correct:</strong> If any of your profile information is incorrect, you can update it directly in the app's
            settings without contacting support.
          </li>
          <li>
            <strong>Right to Opt Out:</strong> You can opt out of non-essential data collection (like usage analytics) in Privacy
            Settings without losing access to core features.
          </li>
        </ul>
        <p className="pp-rationale">
          UX/Product Rationale: Framing user rights as "Controls" instead of just listing legal rights makes this feel
          empowering rather than bureaucratic. Linking rights to specific in-app features shows you have thought
          carefully about how legal requirements translate into actual product decisions.
        </p>
      </>
    ),
  },
];

/* ─── Component ──────────────────────────────── */
interface PrivacyPolicyModalProps {
  onClose: () => void;
  onAgree: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ onClose, onAgree }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 280);
  };

  const handleAgreeAll = () => {
    setVisible(false);
    setTimeout(onAgree, 280);
  };

  return (
    <div className={`pp-backdrop ${visible ? 'pp-visible' : ''}`} onClick={handleClose}>
      <div
        className={`pp-modal ${visible ? 'pp-modal-visible' : ''}`}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div className="pp-header">
          <div className="pp-header-logo">
            <FinexisLogo />
            <h2 className="pp-title">Privacy Policy</h2>
          </div>
          <p className="pp-intro">
            Welcome! We know that money is personal, and so is your data. This Privacy Policy explains how we collect, use, and protect your information when
            you use our personal finance application. We believe in total transparency, so we have kept this policy free of confusing legal jargon.
          </p>
        </div>

        <div className="pp-divider" />

        {/* ── Body ── */}
        <div className="pp-body">
          {/* Scrollable Content (Single Column) */}
          <div className="pp-content">
            {sections.map(s => (
              <div key={s.id} className="pp-section-group">
                <h3 className="pp-section-title">
                  {s.id}. {s.title}
                </h3>
                <div className="pp-section-body">{s.content}</div>
              </div>
            ))}

            {/* Unified One-Button Actions */}
            <div className="pp-content-actions">
              <button className="pp-agree-all-long-btn" onClick={handleAgreeAll}>
                Agree to all terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
