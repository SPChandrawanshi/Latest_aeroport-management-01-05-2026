import React from 'react';

const Chart = ({ type = 'line', data = [], height = 200, color = '#0a3d62' }) => {
  // Simple SVG Chart implementation for a premium look without heavy dependencies
  const max = Math.max(...data, 1);
  const points = data.map((val, i) => `${(i / (data.length - 1)) * 100},${100 - (val / max) * 100}`).join(' ');

  // Professional bar width calculation
  const barWidth = (100 / data.length) * 0.4; // 40% of the available slot width for a slender look
  const barGap = (100 / data.length) * 0.3;  // Spacing on both sides

  return (
    <div className="w-full" style={{ height }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        {/* Gradients */}
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map(y => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#0a3d62" strokeOpacity="0.1" strokeWidth="0.3" strokeDasharray="1" />
        ))}

        {type === 'line' && (
          <>
            <path
              d={`M 0,100 L ${points} L 100,100 Z`}
              fill="url(#chartGradient)"
              className="transition-all duration-700 ease-out"
            />
            <polyline
              points={points}
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-700 ease-out drop-shadow-md"
            />
            {data.map((val, i) => (
              <circle
                key={i}
                cx={(i / (data.length - 1)) * 100}
                cy={100 - (val / max) * 100}
                r="1.5"
                fill="white"
                stroke={color}
                strokeWidth="1"
                className="drop-shadow-sm transition-transform duration-300 hover:scale-150 cursor-pointer"
              />
            ))}
          </>
        )}

        {type === 'bar' && (
          data.map((val, i) => (
            <rect
              key={i}
              x={(i / data.length) * 100 + barGap}
              y={100 - (val / max) * 100}
              width={barWidth}
              height={(val / max) * 100}
              fill="url(#barGradient)"
              rx="1.5"
              className="transition-all duration-500 hover:opacity-80 cursor-pointer drop-shadow-sm"
            />
          ))
        )}
      </svg>
    </div>
  );
};

export default Chart;
