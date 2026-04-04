import React from 'react';
import './SmartInsights.css';

const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" fill="white" opacity="0.9"/>
    <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" fill="white" opacity="0.7"/>
    <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5L5 17z" fill="white" opacity="0.5"/>
  </svg>
);

const SmartInsights: React.FC = () => (
  <div className="smart-insights-card">
    <div className="insights-icon-wrap"><SparkleIcon /></div>
    <h3 className="insights-title">Smart Insights</h3>
    <p className="insights-body">
      You've saved 15% more than last month. Based on your habits, we recommend moving ₹5,000 to your savings vault.
    </p>
    <button className="insights-btn">Apply Advice</button>
  </div>
);

export default SmartInsights;
