import React, { useState, useMemo } from 'react';
import './SmallCalendar.css';

interface SmallCalendarProps {
  selectedDate: string | null;
  onSelectDate: (date: string | null) => void;
  markedDates: string[]; // e.g. '01/10/2025'
}

export const SmallCalendar: React.FC<SmallCalendarProps> = ({ selectedDate, onSelectDate, markedDates }) => {
  // Hardcode to October 2025 for this demo to match transaction data
  const year = 2025;
  const month = 9; // 0-indexed, 9 = October

  const chevronLeft = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  );

  const chevronRight = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  );

  const daysInMonth = 31; // Oct has 31
  const firstDayOfWeek = 3; // Oct 1, 2025 is Wednesday (0=Sun, 1=Mon, 2=Tue, 3=Wed)

  const calendarDays = useMemo(() => {
    const days = [];
    
    // Previous month filler (Sept has 30 days)
    // We want Monday as start of week. So Mon, Tue are fillers.
    // 0=Sun, 1=Mon, 2=Tue, 3=Wed. Since Wed is 1st, Mon is 29th, Tue is 30th.
    days.push({ day: 29, month: 8, isCurrentMonth: false, dateStr: `29/09/${year}` });
    days.push({ day: 30, month: 8, isCurrentMonth: false, dateStr: `30/09/${year}` });

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const dd = i.toString().padStart(2, '0');
      const mm = (month + 1).toString().padStart(2, '0');
      days.push({ day: i, month: month, isCurrentMonth: true, dateStr: `${dd}/${mm}/${year}` });
    }

    // Next month fillers to reach 35 days (5 rows)
    let nextMonthDay = 1;
    while (days.length < 35) {
      const dd = nextMonthDay.toString().padStart(2, '0');
      const mm = (month + 2).toString().padStart(2, '0');
      days.push({ day: nextMonthDay, month: month + 1, isCurrentMonth: false, dateStr: `${dd}/${mm}/${year}` });
      nextMonthDay++;
    }

    return days;
  }, [month, year]);

  const handleDayClick = (dateStr: string) => {
    if (selectedDate === dateStr) {
      onSelectDate(null); // toggle off
    } else {
      onSelectDate(dateStr);
    }
  };

  return (
    <div className="card small-calendar">
      <div className="cal-header">
        <button className="cal-nav-btn">{chevronLeft}</button>
        <span className="cal-month-title">October 2025</span>
        <button className="cal-nav-btn">{chevronRight}</button>
      </div>

      <div className="cal-grid">
        <div className="cal-day-name">Mo</div>
        <div className="cal-day-name">Tu</div>
        <div className="cal-day-name">We</div>
        <div className="cal-day-name">Th</div>
        <div className="cal-day-name">Fr</div>
        <div className="cal-day-name">Sa</div>
        <div className="cal-day-name">Su</div>

        {calendarDays.map((calDay, idx) => {
          const isSelected = selectedDate === calDay.dateStr;
          const hasTx = markedDates.includes(calDay.dateStr);

          let classNames = "cal-day";
          if (!calDay.isCurrentMonth) classNames += " cal-day-dim";
          if (isSelected) classNames += " cal-day-selected";
          
          return (
            <button 
              key={idx} 
              className={classNames} 
              onClick={() => handleDayClick(calDay.dateStr)}
            >
              <span className="cal-day-num">{calDay.day}</span>
              {hasTx && <span className={`cal-day-dot ${isSelected ? 'dot-white' : ''}`}></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SmallCalendar;
