import React from 'react';
import './ProfilePage.css';
import profileImg from '../assets/profile_shashank.png';

const EditIcon = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
   </svg>
);

const LogoutIcon = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
   </svg>
);

const ArrowUpRight = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
   </svg>
);

interface ProfilePageProps {
   onLogout: () => void;
   userRole: 'admin' | 'viewer';
   setUserRole: (role: 'admin' | 'viewer') => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onLogout, userRole, setUserRole }) => {
   return (
      <div className="profile-root app-fade-in">
         <header className="profile-header-strip">
            <h1>Setup your profile here</h1>
            <div className="profile-header-actions">
               <button className="icon-btn-circle"><EditIcon /></button>
               <button className="icon-btn-circle icon-btn-filled" onClick={onLogout} title="Logout"><LogoutIcon /></button>
            </div>
         </header>

         <main className="profile-main-grid">
            {/* Left Column */}
            <section className="profile-side-card">
               <div className="profile-avatar-large">
                  <img src={profileImg} alt="Shashank Singh" />
               </div>
               <h2 className="profile-side-name">Shashank Singh</h2>
               <button className="balance-pill">Balance: Rs 36k</button>

               <div className="profile-side-divider" />

               <div className="profile-contact-info">
                  <div className="contact-row">
                     <span className="contact-label">Country:</span>
                     <span className="contact-value">India</span>
                  </div>
                  <div className="contact-row">
                     <span className="contact-label">Email:</span>
                     <span className="contact-value">singshashank7@gmail.com</span>
                  </div>
                  <div className="contact-row">
                     <span className="contact-label">Phone:</span>
                     <span className="contact-value">6387879284</span>
                  </div>
               </div>
            </section>

            {/* Mid Column - Account Details & Statistics */}
            <div className="profile-mid-column">
               <section className="section-card">
                  <div className="header-with-edit">
                     <h2>Account Details</h2>
                     {userRole === 'admin' && <div className="edit-icon-box"><EditIcon /></div>}
                  </div>
                  <table className="details-table">
                     <tbody>
                        <tr><td className="label">First Name</td><td className="value">Shashank</td></tr>
                        <tr><td className="label">Last Name</td><td className="value">Singh</td></tr>
                        <tr><td className="label">Date of birth</td><td className="value">27/10/2005</td></tr>
                        <tr><td className="label">Occupation</td><td className="value">Student</td></tr>
                        <tr><td className="label">Preferred Currency</td><td className="value">INR</td></tr>
                     </tbody>
                  </table>
               </section>

               <section className="section-card">
                  <div className="header-with-edit">
                     <h2>Statistics</h2>
                     {userRole === 'admin' && <div className="edit-icon-box"><EditIcon /></div>}
                  </div>
                  <table className="details-table">
                     <tbody>
                        <tr><td className="label">Monthly Income</td><td className="value">Rs. 20,000</td></tr>
                        <tr><td className="label">Side Income</td><td className="value">Rs. 11,000</td></tr>
                        <tr><td className="label">Monthly Expense Average</td><td className="value">Rs. 18,000</td></tr>
                        <tr><td className="label">Daily Spending Average</td><td className="value">Rs. 1600</td></tr>
                        <tr><td className="label">Preferred Currency</td><td className="value">INR</td></tr>
                     </tbody>
                  </table>
               </section>
            </div>

            {/* Right Column - Card Details */}
            <section className="section-card">
               <div className="card-section-header">
                  <h2>Card Details</h2>
                  {userRole === 'admin' && <button className="add-card-btn"><span>+</span> Add Card</button>}
               </div>

               <div className="visa-card-visual">
                  <div className="card-top">
                     <span className="visa-logo">VISA</span>
                     {/* Chip Placeholder */}
                     <div className="visa-chip" />
                  </div>

                  <div className="card-number-display">
                     <span className="number-group">****</span>
                     <span className="number-group">****</span>
                     <span className="number-group">****</span>
                     <span className="number-last-four">4559</span>
                  </div>

                  <div className="card-bottom">
                     <div className="card-expiry-wrap">
                        <span className="expiry-label">Expiring Date</span>
                        <span className="expiry-date">10/09/2029</span>
                     </div>
                     <div className="mastercard-circles">
                        <div className="circle-yellow" />
                        <div className="circle-red" />
                     </div>
                  </div>
                  <div className="card-holder-name">Shashank Singh</div>
               </div>

               <table className="details-table">
                  <tbody>
                     <tr><td className="label">Card Holder</td><td className="value">Shashank Singh</td></tr>
                     <tr><td className="label">Card Number</td><td className="value">4333 7483 4873 4559</td></tr>
                     <tr><td className="label">Expiry Date</td><td className="value">10/09/2029</td></tr>
                  </tbody>
               </table>
            </section>
         </main>

         <div className="profile-bottom-row">
            <section className="section-card security-privacy-card">
               <div className="header-with-edit">
                  <h2>Security & Privacy</h2>
                  {userRole === 'admin' && <div className="edit-icon-box"><EditIcon /></div>}
               </div>
               <table className="details-table security-table">
                  <tbody>
                     <tr><td className="label">Security Method</td><td className="value">Facial Recognition</td></tr>
                     <tr><td className="label">Change Password</td><td className="value">Use Email</td></tr>
                     <tr>
                        <td className="label">User Role</td>
                        <td className="value">
                           <div className="role-toggle-inline">
                              <button
                                 className={`toggle-btn ${userRole === 'admin' ? 'active' : ''}`}
                                 onClick={() => setUserRole('admin')}
                              >
                                 Admin
                              </button>
                              <button
                                 className={`toggle-btn ${userRole === 'viewer' ? 'active' : ''}`}
                                 onClick={() => setUserRole('viewer')}
                              >
                                 Viewer
                              </button>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </section>

            <section className="section-card">
               <div className="manual-item-header">
                  <h2>Technical User Manual & Guidelines</h2>
                  <div className="external-arrow-box"><ArrowUpRight /></div>
               </div>

               <div className="manual-links">
                  <div className="manual-item">
                     <span className="manual-label">User Manual</span>
                     <a href="#" className="manual-url">support.finflow.app/hc/articles/36001-connecting-your-bank</a>
                  </div>
                  <div className="manual-item">
                     <span className="manual-label">Guidelines & Policy</span>
                     <a href="#" className="manual-url">support.finflow.app/hc/articles/55021-policy-read-only</a>
                  </div>
                  <div className="manual-item">
                     <span className="manual-label">Support & Helpline</span>
                     <a href="#" className="manual-url">support.finflow.app/hc/articles/66031-delayed-issues-support</a>
                  </div>
               </div>
            </section>
         </div>
      </div>
   );
};

export default ProfilePage;
