import React from 'react';
import './SpendingBreakdown.css';

const categories = [
  { label: 'Shopping', amount: '₹18,368', color: '#2D3FE0', pct: 64 },
  { label: 'Food',     amount: '₹6,314',  color: '#22c55e', pct: 22 },
  { label: 'Travel',   amount: '₹2,870',  color: '#f97316', pct: 10 },
  { label: 'Others',   amount: '₹1,148',  color: '#cbd5e1', pct: 4  },
];

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startAngle - 90));
  const y1 = cy + r * Math.sin(toRad(startAngle - 90));
  const x2 = cx + r * Math.cos(toRad(endAngle - 90));
  const y2 = cy + r * Math.sin(toRad(endAngle - 90));
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
}

const SpendingBreakdown: React.FC = () => {
  const size = 150;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 60;
  const innerR = 44;
  const gap = 3;
  let currentAngle = 0;

  const segments = categories.map((cat) => {
    const sweep = (cat.pct / 100) * 360;
    const start = currentAngle + gap / 2;
    const end = currentAngle + sweep - gap / 2;
    currentAngle += sweep;

    const outerArc = describeArc(cx, cy, outerR, start, end);
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const ix1 = cx + innerR * Math.cos(toRad(end - 90));
    const iy1 = cy + innerR * Math.sin(toRad(end - 90));
    const ix2 = cx + innerR * Math.cos(toRad(start - 90));
    const iy2 = cy + innerR * Math.sin(toRad(start - 90));
    const laf  = end - start > 180 ? 1 : 0;
    const innerArcRev = `L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${laf} 0 ${ix2} ${iy2} Z`;

    return { ...cat, path: outerArc + ' ' + innerArcRev };
  });

  return (
    <div className="spending-card">
      <div className="spending-header">
        <h2 className="spending-title">Spending Breakdown</h2>
        <p className="spending-sub">Allocation by category</p>
      </div>

      <div className="donut-container">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {segments.map((seg) => (
            <path key={seg.label} d={seg.path} fill={seg.color} className="donut-seg"/>
          ))}
        </svg>
        <div className="donut-center">
          <span className="donut-pct">64%</span>
          <span className="donut-label">SHOPPING</span>
        </div>
      </div>

      <div className="spending-legend">
        {categories.map((cat) => (
          <div key={cat.label} className="legend-row">
            <span className="legend-dot" style={{ background: cat.color }}/>
            <span className="legend-name">{cat.label}</span>
            <span className="legend-amount">{cat.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpendingBreakdown;
