import React, { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import IncomeChart from './IncomeChart';
import ExpenseStrategy from './ExpenseStrategy';
import OverviewGauge from './OverviewGauge';
import RecentTransactionsCard from './RecentTransactionsCard';
import MyFinances from './MyFinances';
import WealthOverview from './WealthOverview';
import SmallCalendar from './SmallCalendar';
import SavingsGoals from './SavingsGoals';
import UpcomingBills from './UpcomingBills';
import './DashboardHome.css';

const MOCK_TRANSACTIONS = [
  { id: 1, name: 'Internet Bill', cat: 'Payment', date: '04/10/2025', time: '09:00:00', amount: 'Rs 800' },
  { id: 2, name: 'Coffee Shop', cat: 'Dining', date: '03/10/2025', time: '08:15:00', amount: 'Rs 250' },
  { id: 3, name: 'Movie Night', cat: 'Entertainment', date: '02/10/2025', time: '19:10:30', amount: 'Rs 1,600' },
  { id: 4, name: 'Weekly Grocery', cat: 'Shopping', date: '01/10/2025', time: '13:25:19', amount: 'Rs 3,200' },
  { id: 5, name: 'Electricity Bill', cat: 'Payment', date: '30/09/2025', time: '10:20:29', amount: 'Rs 1,200' },
  { id: 6, name: 'Gym Membership', cat: 'Fitness', date: '28/09/2025', time: '06:30:00', amount: 'Rs 1,500' },
  { id: 7, name: 'Book Store', cat: 'Shopping', date: '25/09/2025', time: '15:45:00', amount: 'Rs 450' },
  { id: 8, name: 'Gas Station', cat: 'Transport', date: '20/09/2025', time: '18:20:00', amount: 'Rs 2,100' },
  { id: 9, name: 'Dinner out', cat: 'Dining', date: '15/09/2025', time: '20:00:00', amount: 'Rs 1,800' },
  { id: 10, name: 'Online Course', cat: 'Education', date: '10/09/2025', time: '11:10:00', amount: 'Rs 4,000' },
  { id: 11, name: 'Supermarket', cat: 'Shopping', date: '05/09/2025', time: '14:30:00', amount: 'Rs 2,800' },
];

const parseDateString = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/');
  return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
};

const LATEST_DATE_MS = Math.max(...MOCK_TRANSACTIONS.map(tx => parseDateString(tx.date)));

const DashboardHome: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [timeFilter, setTimeFilter] = useState('7');

  const timeFilteredTransactions = (() => {
    if (timeFilter === 'All Transactions') {
      return MOCK_TRANSACTIONS;
    }
    const daysOffset = parseInt(timeFilter, 10);
    const cutoffTime = LATEST_DATE_MS - (daysOffset * 24 * 60 * 60 * 1000);
    return MOCK_TRANSACTIONS.filter(tx => parseDateString(tx.date) >= cutoffTime);
  })();

  const markedDates = timeFilteredTransactions.map(tx => tx.date);
  
  const finalFilteredTransactions = selectedDate
    ? timeFilteredTransactions.filter(tx => tx.date === selectedDate)
    : timeFilteredTransactions;

  return (
    <div className="dh-page">
      <DashboardHeader />
      
      <div className="dh-grid">
        {/* Left Column */}
        <div className="dh-col dh-col-left">
          <IncomeChart />
          <ExpenseStrategy />
          <SavingsGoals />
        </div>

        {/* Middle Column */}
        <div className="dh-col dh-col-mid">
          <OverviewGauge />
          <RecentTransactionsCard 
            transactions={finalFilteredTransactions} 
            timeFilter={timeFilter}
            onTimeFilterChange={(val) => {
              setTimeFilter(val);
              setSelectedDate(null);
            }}
          />
          <UpcomingBills />
        </div>

        {/* Right Column */}
        <div className="dh-col dh-col-right">
          <MyFinances />
          <WealthOverview />
          <SmallCalendar 
            selectedDate={selectedDate} 
            onSelectDate={setSelectedDate} 
            markedDates={markedDates} 
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
