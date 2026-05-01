import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Chart from '../../components/Chart';
import { CreditCard, DollarSign, TrendingUp } from 'lucide-react';

const PaymentRecords = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Financial Audit">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in duration-700 max-w-7xl mx-auto">
         <div className="shiv-perfect-card p-12 flex flex-col justify-center relative overflow-hidden group">
            <div className="w-16 h-16 bg-[#0a3d62] rounded-2xl flex items-center justify-center text-white shadow-xl mb-8 group-hover:bg-[#FF8A00] transition-colors duration-500">
              <DollarSign size={32} />
            </div>
            <h4 className="text-[48px] font-black italic tracking-tighter mb-2 text-[#0a3d62] leading-none">$1.24M</h4>
            <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em]">Total Volume Δ Q1</p>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
               <DollarSign size={200} />
            </div>
         </div>
         <div className="md:col-span-2 shiv-perfect-card p-10 relative overflow-hidden group">
            <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest mb-12 border-b-2 border-slate-50 pb-6 flex items-center justify-between">
              Revenue Momentum Matrix
              <TrendingUp size={20} className="text-[#FF8A00]" />
            </h3>
            <div className="relative z-10">
              <Chart data={[80, 120, 95, 140, 180, 160, 210]} height={220} color="#FF8A00" />
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-[0.02] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
               <TrendingUp size={250} />
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentRecords;
