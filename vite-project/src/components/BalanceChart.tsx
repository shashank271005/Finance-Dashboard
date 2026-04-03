import React, { useState } from 'react';
import './BalanceChart.css';

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
const monthlyData = [18, 25, 32, 55, 80, 72];
const weeklyData  = [40, 60, 35, 75, 55, 90];

const SVG_W = 600;
const SVG_H = 180;
const PAD_X = 20;
const PAD_Y = 20;

function buildPath(data: number[]) {
  const n = data.length;
  const xStep = (SVG_W - 2 * PAD_X) / (n - 1);
  const yRange = SVG_H - 2 * PAD_Y;

  const pts = data.map((v, i) => ({
    x: PAD_X + i * xStep,
    y: SVG_H - PAD_Y - (v / 100) * yRange,
  }));

  let d = `M ${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const cpx = (pts[i - 1].x + pts[i].x) / 2;
    d += ` C ${cpx},${pts[i - 1].y} ${cpx},${pts[i].y} ${pts[i].x},${pts[i].y}`;
  }

  const area = d + ` L ${pts[pts.length - 1].x},${SVG_H - PAD_Y} L ${pts[0].x},${SVG_H - PAD_Y} Z`;
  return { line: d, area, pts };
}

const CHART_HEIGHT = 170; // rendered px height of the SVG

const BalanceChart: React.FC = () => {
  const [tab, setTab] = useState<'weekly' | 'monthly'>('monthly');
  const data = tab === 'monthly' ? monthlyData : weeklyData;
  const { line, area, pts } = buildPath(data);
  const maxIdx = data.indexOf(Math.max(...data));
  const peak = pts[maxIdx];

  // Convert viewBox coords → % of rendered SVG (preserveAspectRatio="none")
  const dotLeftPct = (peak.x / SVG_W) * 100;
  const dotTopPct  = (peak.y / SVG_H) * 100;

  // Tooltip value
  const peakLabel = tab === 'monthly' ? '₹75,300' : '₹68,200';

  return (
    <div className="balance-chart-card">
      <div className="chart-header">
        <div>
          <h2 className="chart-title">Balance Overview</h2>
          <p className="chart-sub">Growth metrics for the first half of 2024</p>
        </div>
        <div className="chart-tabs">
          <button className={`chart-tab ${tab === 'weekly' ? 'active' : ''}`} onClick={() => setTab('weekly')}>Weekly</button>
          <button className={`chart-tab ${tab === 'monthly' ? 'active' : ''}`} onClick={() => setTab('monthly')}>Monthly</button>
        </div>
      </div>

      <div className="chart-area">
        {/* SVG — paths only, no circle here */}
        <div className="chart-svg-wrap">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            preserveAspectRatio="none"
            width="100%"
            height={CHART_HEIGHT}
          >
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#2D3FE0" stopOpacity="0.22"/>
                <stop offset="70%"  stopColor="#2D3FE0" stopOpacity="0.06"/>
                <stop offset="100%" stopColor="#2D3FE0" stopOpacity="0.0"/>
              </linearGradient>
            </defs>

            {/* Horizontal grid lines */}
            {[0.2, 0.4, 0.6, 0.8].map((f) => (
              <line
                key={f}
                x1={PAD_X} y1={PAD_Y + f * (SVG_H - 2 * PAD_Y)}
                x2={SVG_W - PAD_X} y2={PAD_Y + f * (SVG_H - 2 * PAD_Y)}
                stroke="#e8edf5" strokeWidth="1"
              />
            ))}

            {/* Vertical drop line at peak */}
            <line
              x1={peak.x} y1={peak.y + 6}
              x2={peak.x} y2={SVG_H - PAD_Y}
              stroke="#2D3FE0" strokeWidth="1.2"
              strokeDasharray="3 3" strokeOpacity="0.4"
            />

            {/* Area fill */}
            <path d={area} fill="url(#areaGrad)"/>

            {/* Main line */}
            <path d={line} fill="none" stroke="#2D3FE0" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Dot — rendered as a real CSS circle, positioned by % so it's never oval */}
          <div
            className="chart-dot"
            style={{
              left:  `calc(${dotLeftPct}% - 6px)`,
              top:   `calc(${dotTopPct * CHART_HEIGHT / 100}px - 6px)`,
            }}
          />

          {/* Tooltip bubble at peak */}
          <div
            className="chart-tooltip"
            style={{
              left: `calc(${dotLeftPct}%)`,
              top:  `calc(${dotTopPct * CHART_HEIGHT / 100}px - 34px)`,
            }}
          >
            {peakLabel}
          </div>
        </div>

        <div className="chart-x-labels">
          {months.map((m) => <span key={m} className="x-label">{m}</span>)}
        </div>
      </div>
    </div>
  );
};

export default BalanceChart;
