import React, { useState } from 'react';
import './CoolDownWishlist.css';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
);

interface WishlistItem {
  id: number;
  name: string;
  image: string;
  nudge: string;
  timer: string;
  progress: number;
  isReady?: boolean;
}

const MOCK_WISHLIST: WishlistItem[] = [
  {
    id: 1,
    name: 'Nike Zoom Fly 5',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    nudge: '"If you buy these $120 shoes in 48 hours, your \'Bali Trip\' goal will be delayed by one week. Still worth it?"',
    timer: '48h 00m 00s',
    progress: 0
  },
  {
    id: 2,
    name: 'Smartwatch',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    nudge: '"This $350 smartwatch pushes your \'Emergency Fund\' goal back by 3 weeks. Ready to delay that peace of mind?"',
    timer: '24h 10m 05s',
    progress: 50
  },
  {
    id: 3,
    name: 'Gaming Console',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80',
    nudge: '"This $500 gaming console consumes your entire \'Index Fund\' budget for the month. Play or invest?"',
    timer: '10h 34m 50s',
    progress: 80
  },
  {
    id: 4,
    name: 'Varsity Jacket',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80',
    nudge: '"This $60 jacket equals a whole week\'s \'Grocery Budget\'. Let it cool down—you might not even want them by Friday."',
    timer: '00h 00m 00s',
    progress: 100,
    isReady: true
  }
];

const CoolDownWishlist: React.FC = () => {
  const [items, setItems] = useState(MOCK_WISHLIST);

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-page">
      <header className="wishlist-header">
        <div className="wishlist-title-area">
          <h1 className="wishlist-title">Pause before you purchase.</h1>
          <p className="wishlist-subtitle">
            Found something you want but don't strictly need? Park it here. We'll start a 48-hour cool-down
            timer to help you decide if it's a true priority or just a passing craving.
          </p>
        </div>
        <div className="wishlist-header-actions">
          <div className="wishlist-search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
          <button className="icon-btn-wish"><MoreIcon /></button>
          <div className="wishlist-avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" />
          </div>
        </div>
      </header>

      <section className="wishlist-form-container">
        <div className="form-card">
          <div className="form-header">
            <button className="purchase-link-btn">+ Purchase Link</button>
          </div>
          <div className="form-grid">
            <div className="input-group">
              <label>Purchase Details</label>
              <input type="text" placeholder="e.g. Nike Zoom Fly 5" />
            </div>
            <div className="input-group">
              <label>Payment Type</label>
              <input type="text" placeholder="One-time" />
            </div>
            <div className="input-group">
              <label>Payment Method</label>
              <input type="text" placeholder="Credit Card" />
            </div>
            <div className="input-group">
              <label>Set Cool Down Timer</label>
              <input type="text" placeholder="48 Hours" />
            </div>
            <div className="input-group">
              <label>Transaction Amount</label>
              <input type="text" placeholder="Rs 0.00" />
            </div>
            <div className="input-group">
              <label>Note</label>
              <input type="text" placeholder="Optional" />
            </div>
          </div>
          <div className="form-footer">
            <div className="checkbox-wrap">
              <input type="checkbox" id="default-timer" defaultChecked />
              <label htmlFor="default-timer">Default 48-Hour Timer</label>
            </div>
            <button className="add-to-list-btn">Add to List</button>
          </div>
        </div>
      </section>

      <div className="wishlist-divider">
        <div className="divider-line"></div>
        <span className="divider-badge">WishList</span>
        <div className="divider-line"></div>
      </div>

      <section className="wishlist-grid">
        {items.map(item => (
          <div key={item.id} className="wishlist-card">
            <div className="card-image-wrap">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card-content">
              <p className="card-nudge">{item.nudge}</p>
              <div className="card-timer-wrap">
                <div className="timer-text">{item.timer}</div>
                <div className="timer-bar-bg">
                  <div 
                    className="timer-bar-fill" 
                    style={{ 
                      width: `${item.progress}%`,
                      background: item.isReady ? '#10B981' : (item.progress > 70 ? '#F59E0B' : '#E5E7EB')
                    }}
                  ></div>
                </div>
              </div>
              <div className="card-actions">
                {item.isReady && <button className="buy-now-btn">Buy Now</button>}
                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CoolDownWishlist;
