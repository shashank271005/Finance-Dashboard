import React, { useState } from 'react';
import './SettingsPage.css';

interface SettingsPageProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  userRole: 'admin' | 'viewer';
  setUserRole: (role: 'admin' | 'viewer') => void;
}

const GeneralIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SecurityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const PaletteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.39 2.3-1 .6-.6 1-1.45 1-2.4 0-1.5 1.5-3 3-3 2.25 0 3.75 1.5 3.75 1.5S22 15 22 12c0-5.5-4.5-10-10-10z" />
  </svg>
);

const SettingsPage: React.FC<SettingsPageProps> = ({ theme, toggleTheme, userRole, setUserRole }) => {
  const [activeSection, setActiveSection] = useState('general');
  const [privacyMode, setPrivacyMode] = useState(false);

  const navItems = [
    { id: 'general', label: 'General', Icon: GeneralIcon },
    { id: 'account', label: 'Account', Icon: UserIcon },
    { id: 'security', label: 'Security', Icon: SecurityIcon },
    { id: 'notifications', label: 'Notifications', Icon: BellIcon },
    { id: 'appearance', label: 'Appearance', Icon: PaletteIcon },
  ];

  return (
    <div className="settings-page app-fade-in">
      <div className="settings-container">
        {/* Sidebar Mini */}
        <div className="settings-nav">
          {navItems.map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`settings-nav-item ${activeSection === id ? 'active' : ''}`}
              onClick={() => setActiveSection(id)}
            >
              <Icon />
              <span className="section-label">{label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="settings-content">

          {activeSection === 'general' && (
            <div className="settings-section">
              <div className="section-header-row">
                <h2 className="section-title">General Preferences</h2>
              </div>
              
              <div className="setting-card">
                <div className="setting-group">
                  <label className="setting-label">Local Currency</label>
                  <select className="setting-select">
                    <option value="INR">Indian Rupee (₹)</option>
                    <option value="USD">US Dollar ($)</option>
                    <option value="EUR">Euro (€)</option>
                    <option value="GBP">British Pound (£)</option>
                  </select>
                  <p className="setting-hint">This will serve as the default currency for all financial analytics and goals.</p>
                </div>

                <div className="setting-divider"></div>
                <div className="setting-group">
                  <label className="setting-label">Interface Language</label>
                  <select className="setting-select">
                    <option value="EN">English (US)</option>
                    <option value="HI">Hindi (India)</option>
                    <option value="FR">French</option>
                    <option value="DE">German</option>
                  </select>
                </div>

                <div className="setting-divider"></div>
                <div className="setting-group">
                  <label className="setting-label">System Timezone</label>
                  <select className="setting-select">
                    <option value="IST">India Standard Time (GMT+5:30)</option>
                    <option value="EST">Eastern Standard Time (GMT-5:00)</option>
                    <option value="GMT">Greenwich Mean Time (GMT+0:00)</option>
                  </select>
                </div>

                <div className="setting-divider"></div>
                <div className="setting-group">
                  <label className="setting-label">Budget Cycle Start</label>
                  <select className="setting-select">
                    <option value="1">1st of the month</option>
                    <option value="5">5th of the month</option>
                    <option value="15">15th of the month</option>
                    <option value="custom">Custom (Salary Date)</option>
                  </select>
                  <p className="setting-hint">Defines when your monthly spending and income benchmarks reset.</p>
                </div>

                <div className="setting-divider"></div>
                <div className="setting-group">
                  <label className="setting-label">Default Reporting Period</label>
                  <div className="setting-pills">
                    <button className="pill-btn active">Monthly</button>
                    <button className="pill-btn">Rolling 30 Days</button>
                    <button className="pill-btn">Quarterly</button>
                  </div>
                </div>

                <div className="setting-divider"></div>

                <div className="setting-group">
                  <label className="setting-label">Fiscal Year Start</label>
                  <select className="setting-select">
                    <option value="apr">April (India Standard)</option>
                    <option value="jan">January (Calendar Year)</option>
                  </select>
                </div>

                <div className="setting-divider"></div>

                <div className="setting-group">
                  <div className="setting-flex-row">
                    <div className="setting-info">
                      <label className="setting-label">Dashboard Privacy Mode</label>
                      <p className="setting-hint">Automatically mask specific balances and sensitive numbers on the home screen.</p>
                    </div>
                    <label className="modern-switch">
                      <input 
                        type="checkbox" 
                        checked={privacyMode} 
                        onChange={() => setPrivacyMode(!privacyMode)}
                      />
                      <span className="switch-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'account' && (
            <div className="settings-section">
              <h2 className="section-title">Account Profile</h2>
              
              <div className="setting-card">
                <div className="profile-edit-grid">
                  <div className="profile-avatar-section">
                    <div className="settings-avatar">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" />
                      <button className="change-avatar-btn">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </button>
                    </div>
                    <div className="avatar-info">
                      <span className="info-title">Profile Photo</span>
                      <span className="info-desc">PNG, JPG up to 5MB</span>
                    </div>
                  </div>
                  
                  <div className="profile-fields">
                    <div className="setting-group">
                      <label className="setting-label">Full Name</label>
                      <input type="text" className="setting-input" defaultValue="Shashank Singh" />
                    </div>
                    <div className="setting-group">
                      <label className="setting-label">Email Address</label>
                      <input type="email" className="setting-input" defaultValue="shashank@example.com" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="setting-card role-card">
                <div className="setting-group">
                  <label className="setting-label">Access Permissions</label>
                  <div className="role-selector-pill">
                    <button 
                      className={`role-tab ${userRole === 'admin' ? 'active' : ''}`}
                      onClick={() => setUserRole('admin')}
                    >
                      <div className="role-dot admin"></div>
                      Administrator
                    </button>
                    <button 
                      className={`role-tab ${userRole === 'viewer' ? 'active' : ''}`}
                      onClick={() => setUserRole('viewer')}
                    >
                      <div className="role-dot viewer"></div>
                      Viewer
                    </button>
                  </div>
                  <p className="setting-hint">Administrators have full access to add transactions and modify financial goals.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'appearance' && (
            <div className="settings-section">
              <h2 className="section-title">Visual Appearance</h2>
              
              <div className="setting-card">
                <div className="setting-group">
                  <div className="setting-flex-row">
                    <div className="setting-info">
                      <label className="setting-label">Display Theme</label>
                      <p className="setting-hint">Optimize the interface for your environment.</p>
                    </div>
                    <div className="theme-switcher">
                      <button 
                        className={`theme-tab ${theme === 'light' ? 'active' : ''}`}
                        onClick={() => theme === 'dark' && toggleTheme()}
                      >
                        ☀️ Light
                      </button>
                      <button 
                        className={`theme-tab ${theme === 'dark' ? 'active' : ''}`}
                        onClick={() => theme === 'light' && toggleTheme()}
                      >
                        🌙 Dark
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="setting-card">
                <div className="setting-group">
                  <label className="setting-label">Layout Density</label>
                  <div className="density-options">
                    <div className="density-card active">
                      <div className="density-preview relaxed"></div>
                      <span>Relaxed</span>
                    </div>
                    <div className="density-card disabled">
                      <div className="density-preview compact"></div>
                      <span>Compact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'security' && (
            <div className="settings-section">
              <h2 className="section-title">Security & Privacy</h2>
              
              <div className="setting-card">
                <div className="setting-group">
                  <div className="setting-flex-row">
                    <div className="setting-info">
                      <label className="setting-label">Password Management</label>
                      <p className="setting-hint">Last changed: 3 months ago</p>
                    </div>
                    <button className="settings-btn secondary">Update Password</button>
                  </div>
                </div>

                <div className="setting-divider"></div>

                <div className="setting-group">
                  <div className="setting-flex-row">
                    <div className="setting-info">
                      <label className="setting-label">Two-Factor Authentication</label>
                      <p className="setting-hint">Heighten account safety with 2FA protocols.</p>
                    </div>
                    <button className="status-toggle off">Disabled</button>
                  </div>
                </div>
              </div>

              <div className="setting-card danger-card">
                <div className="danger-content">
                  <div className="danger-info">
                    <h3 className="danger-heading">Permanent Account Deletion</h3>
                    <p className="danger-subtext">This action is irreversible and will purge all financial history.</p>
                  </div>
                  <button className="settings-btn danger">Delete Account</button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="settings-section">
              <h2 className="section-title">Communication Preferences</h2>
              
              <div className="setting-card">
                <div className="notification-list">
                  <div className="notif-item">
                    <div className="notif-info">
                      <span className="notif-title">Bill Payment Reminders</span>
                      <span className="notif-desc">Receive alerts 3 days before upcoming bills.</span>
                    </div>
                    <label className="modern-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="switch-slider"></span>
                    </label>
                  </div>

                  <div className="notif-item">
                    <div className="notif-info">
                      <span className="notif-title">Goal Milestone Alerts</span>
                      <span className="notif-desc">Get notified when you reach 50%, 75%, and 100% of a goal.</span>
                    </div>
                    <label className="modern-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="switch-slider"></span>
                    </label>
                  </div>

                  <div className="notif-item">
                    <div className="notif-info">
                      <span className="notif-title">Weekly Performance Reports</span>
                      <span className="notif-desc">A deep dive into your weekly spending habits.</span>
                    </div>
                    <label className="modern-switch">
                      <input type="checkbox" />
                      <span className="switch-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
