import React from 'react';

const DashboardCard = ({ title, value, change, icon, trend }) => {
  return (
    <div className="shiv-tinted-panel p-6 group transition-all flex flex-col justify-between relative overflow-hidden h-full">
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#0a3d62] text-white flex items-center justify-center shadow-lg group-hover:bg-[#FF8A00] transition-colors">
          {icon}
        </div>
        <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border-2 ${trend === 'up' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
          {change}
        </div>
      </div>
      <div className="relative z-10 flex-1 min-w-0">
        <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1 truncate">{title}</h3>
        <p className="text-[28px] font-bold text-[#0a3d62] tracking-tighter leading-none">
          {value}
        </p>
      </div>
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] translate-x-12 -translate-y-12">
        {icon}
      </div>
    </div>
  );
};

export default DashboardCard;
