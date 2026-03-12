import React from 'react';

const DashboardCard = ({ title, value, change, icon, trend }) => {
  return (
    <div className="card-stat flex flex-col justify-between group overflow-hidden relative">
      <div className="flex justify-between items-start mb-6">
        <div className="bg-[#c7ecee] p-3.5 rounded-2xl text-[#0a3d62] border-2 border-transparent group-hover:border-[#0a3d62] transition-all duration-200">
          {icon}
        </div>
        <div className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${trend === 'up' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
          {change}
        </div>
      </div>
      <div className="relative z-10 flex-1 min-w-0">
        <h3 className="text-shiv-muted text-[10px] font-black uppercase tracking-[0.2em] mb-2 truncate">{title}</h3>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-shiv-text-primary tracking-tighter italic break-words leading-none">
          {value}
        </p>
      </div>
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-shiv-primary/5 rounded-full blur-2xl group-hover:bg-shiv-primary/10 transition-all duration-500"></div>
    </div>
  );
};

export default DashboardCard;
