import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import './LeftColumn.css';

const data = [
  { name: 'Mon', value: 1200 },
  { name: 'Tue', value: 900 },
  { name: 'Wed', value: 1050 },
  { name: 'Thu', value: 850 },
  { name: 'Fri', value: 1700 },
  { name: 'Sat', value: 1550 },
  { name: 'Sun', value: 2500 }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-income-tooltip">
        <div className="tooltip-date">{payload[0].payload.name}</div>
        <div className="tooltip-amount">Rs {payload[0].value.toLocaleString()}</div>
      </div>
    );
  }
  return null;
};

const DotsMenu = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1.5"></circle>
    <circle cx="12" cy="5" r="1.5"></circle>
    <circle cx="12" cy="19" r="1.5"></circle>
  </svg>
);

const IncomeChart: React.FC = () => {
  return (
    <div className="card income-card">
      <div className="card-header">
        <span className="card-title">Income</span>
        <button className="dots-btn"><DotsMenu /></button>
      </div>
      
      <div className="income-amount-row">
        <h2>Rs 2,500</h2>
        <div className="income-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
          9.75%
        </div>
      </div>

      <div className="income-chart-wrap" style={{ width: '100%', height: '100px', marginTop: 'auto' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B4CF0" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#3B4CF0" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ stroke: '#A4ABFA', strokeWidth: 1, strokeDasharray: '4 4' }} 
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3B4CF0" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorValue)" 
              activeDot={{ r: 6, fill: '#3B4CF0', stroke: 'white', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeChart;
