import React, { useState } from 'react';
import './NotificationPanel.css';

interface NotificationItem {
  id: number;
  type: 'received' | 'sent' | 'alert';
  title: string;
  subtitle: string;
  amount: string;
  time: string;
  isUnread?: boolean;
  isActionable?: boolean;
}

const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 1,
    type: 'received',
    title: 'Payment Received',
    subtitle: 'Client Transfer Completed',
    amount: 'Rs 32,000 credited to main balance',
    time: '30m ago',
    isUnread: true
  },
  {
    id: 2,
    type: 'received',
    title: 'Payment Received',
    subtitle: 'Grant accepted',
    amount: 'Rs 3,000 credited to main balance',
    time: '4h ago',
    isUnread: true
  },
  {
    id: 3,
    type: 'alert',
    title: 'Transaction Alert',
    subtitle: 'Manual Authorization Required',
    amount: 'Rs 3,000.00',
    time: '5h ago',
    isActionable: true
  },
  {
    id: 4,
    type: 'sent',
    title: 'Payment Sent',
    subtitle: 'Subscription Renewed',
    amount: 'Rs 349 debited from main balance',
    time: '5h ago',
    isUnread: false
  }
];

const ReceivedIcon = () => (
  <div className="notif-icon received">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
      <circle cx="12" cy="19" r="1" fill="currentColor"></circle>
    </svg>
  </div>
);

const SentIcon = () => (
  <div className="notif-icon sent">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
      <circle cx="12" cy="5" r="1" fill="currentColor"></circle>
    </svg>
  </div>
);

const AlertIcon = () => (
  <div className="notif-icon alert">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
      <line x1="4" y1="22" x2="4" y2="15"></line>
    </svg>
  </div>
);

const NotificationPanel: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  if (!isOpen) return null;

  const filteredNotifications = filter === 'all' 
    ? MOCK_NOTIFICATIONS 
    : MOCK_NOTIFICATIONS.filter(n => n.isUnread);

  return (
    <div className="notif-panel-overlay" onClick={onClose}>
      <div className="notif-panel" onClick={(e) => e.stopPropagation()}>
        <header className="notif-panel-header">
          <h2 className="notif-title">Notifications</h2>
          <div className="notif-filters">
            <button 
              className={`notif-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`notif-pill ${filter === 'unread' ? 'active' : ''}`}
              onClick={() => setFilter('unread')}
            >
              Unread
            </button>
          </div>
        </header>

        <div className="notif-list custom-scrollbar">
          {filteredNotifications.map((notif) => (
            <div key={notif.id} className="notif-card">
              <div className="notif-card-main">
                <div className="notif-icon-wrap">
                  {notif.type === 'received' && <ReceivedIcon />}
                  {notif.type === 'sent' && <SentIcon />}
                  {notif.type === 'alert' && <AlertIcon />}
                </div>
                <div className="notif-content">
                  <div className="notif-content-top">
                    <span className="notif-card-title">{notif.title}</span>
                    <span className="notif-time">{notif.time}</span>
                    {notif.isUnread && <span className="unread-dot"></span>}
                  </div>
                  <div className="notif-subtitle">{notif.subtitle}</div>
                  <div className="notif-amount">{notif.amount}</div>
                </div>
              </div>
              
              {notif.isActionable && (
                <div className="notif-actions">
                  <button className="notif-btn-decline">Decline</button>
                  <button className="notif-btn-accept">Accept</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
