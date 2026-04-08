import React, { useState } from 'react';
import './RightColumn.css';

interface CardData {
  id: string;
  type: string;
  number: string;
  expiry: string;
  name: string;
  gradient: string;
}

interface MyFinancesProps {
  userRole?: 'admin' | 'viewer';
}

const MyFinances: React.FC<MyFinancesProps> = ({ userRole = 'admin' }) => {
  const [cards, setCards] = useState<CardData[]>([
    {
      id: '1',
      type: 'VISA',
      number: '4559',
      expiry: '10/2029',
      name: 'Shashank Singh',
      gradient: 'linear-gradient(135deg, #1e3a8a 0%, #2D3FE0 100%)'
    }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [formError, setFormError] = useState('');
  
  // Form State
  const [newCard, setNewCard] = useState({
    type: 'VISA',
    number: '',
    expiry: '',
    name: ''
  });

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCard.number || !newCard.expiry || !newCard.name) {
      setFormError('Please fill all fields');
      return;
    }

    const gradients = [
      'linear-gradient(135deg, #1e3a8a 0%, #2D3FE0 100%)',
      'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
      'linear-gradient(135deg, #4338ca 0%, #6366f1 100%)',
      'linear-gradient(135deg, #065f46 0%, #059669 100%)',
      'linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)'
    ];

    const cardToAdd: CardData = {
      id: Date.now().toString(),
      type: newCard.type,
      number: newCard.number.slice(-4),
      expiry: newCard.expiry,
      name: newCard.name,
      gradient: gradients[Math.floor(Math.random() * gradients.length)]
    };

    setCards([...cards, cardToAdd]);
    setCurrentIndex(cards.length); // Switch to the new card
    setIsAdding(false);
    setNewCard({ type: 'VISA', number: '', expiry: '', name: '' });
    setFormError('');
  };

  const activeCard = cards[currentIndex];

  return (
    <div className="card my-finances-card">
      <div className="card-header">
        <span className="card-title">My Finances</span>
        {userRole === 'admin' && !isAdding && (
          <button className="add-card-btn" onClick={() => setIsAdding(true)}>+ Add Card</button>
        )}
        {isAdding && (
          <button className="add-card-btn cancel-btn" onClick={() => setIsAdding(false)}>Cancel</button>
        )}
      </div>

      <div className={`finances-content-wrapper ${isAdding ? 'show-form' : 'show-card'}`}>
        {/* Card View */}
        <div className="card-display-view">
          <div className="credit-card" style={{ background: activeCard.gradient }}>
            <div className="cc-top">
              <span className="cc-logo">{activeCard.type}</span>
            </div>

            <div className="cc-middle">
              <span className="cc-num">****</span>
              <span className="cc-num">****</span>
              <span className="cc-num">****</span>
              <span className="cc-num cc-visible">{activeCard.number}</span>
            </div>

            <div className="cc-bottom">
              <div className="cc-details">
                <span className="cc-label">Expiring Date</span>
                <span className="cc-val">{activeCard.expiry}</span>
              </div>
              <div className="cc-name-wrap">
                <span className="cc-name">{activeCard.name}</span>
                <div className="mastercard-rings">
                  <div className="ring"></div>
                  <div className="ring"></div>
                </div>
              </div>
            </div>
          </div>

          {cards.length > 1 && (
            <div className="card-nav-dots">
              {cards.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`nav-dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Add Card Form View */}
        <div className="add-card-form-view">
          <form className="add-card-form" onSubmit={handleAddCard}>
            <div className="form-group-inline">
              <div className="field">
                <label>Card Type</label>
                <select 
                  value={newCard.type}
                  onChange={e => setNewCard({...newCard, type: e.target.value})}
                >
                  <option value="VISA">Visa</option>
                  <option value="MASTERCARD">Mastercard</option>
                  <option value="AMEX">Amex</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label>Card Number</label>
              <input 
                type="text" 
                placeholder="**** **** **** 1234"
                maxLength={16}
                value={newCard.number}
                onChange={e => setNewCard({...newCard, number: e.target.value.replace(/\D/g, '')})}
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label>Expiry Date</label>
                <input 
                  type="text" 
                  placeholder="MM/YY"
                  maxLength={5}
                  value={newCard.expiry}
                  onChange={e => setNewCard({...newCard, expiry: e.target.value})}
                />
              </div>
              <div className="field">
                <label>Cardholder Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  value={newCard.name}
                  onChange={e => setNewCard({...newCard, name: e.target.value})}
                />
              </div>
            </div>

            {formError && <span className="form-error-msg">{formError}</span>}
            
            <button type="submit" className="save-card-btn">Link Card</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyFinances;
