import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { BarChart3, TrendingUp, Download, ArrowRight, Activity, DollarSign, PieChart } from 'lucide-react';

const TicketingReports = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Revenue Intelligence">
      <div className="space-y-6 animate-in fade-in duration-700 max-w-5xl mx-auto">
         {/* Main Chart Section */}
         <div className="shiv-perfect-card p-8 sm:p-10 relative overflow-hidden group">
            <div className="flex justify-between items-center mb-12 relative z-10">
               <div className="flex items-center gap-5">
                 <div className="w-14 h-14 rounded-2xl bg-[#0a3d62] text-white flex items-center justify-center shadow-xl group-hover:rotate-6 transition-all duration-500">
                    <BarChart3 size={28} />
                 </div>
                 <div>
                    <h3 className="text-[28px] font-black text-[#0a3d62] uppercase tracking-tighter italic leading-none">
                        Tactical Yield Index
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Real-Time Market Sync</p>
                    </div>
                 </div>
               </div>
               <div className="flex gap-3">
                   <button className="p-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-slate-400 hover:text-[#0a3d62] hover:border-[#0a3d62]/20 transition-all shadow-sm">
                     <Download size={20} />
                   </button>
               </div>
            </div>
            
            <div className="relative z-10 px-4">
              <Chart data={[65, 85, 75, 140, 110, 180, 130]} height={280} color="#0a3d62" type="bar" />
            </div>

            <div className="absolute top-0 right-0 p-12 opacity-[0.02] text-[#0a3d62] translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-1000">
               <BarChart3 size={350} />
            </div>
         </div>

         {/* Secondary Metrics */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="shiv-perfect-card p-6 flex flex-col justify-between group">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border-2 border-emerald-100">
                        <DollarSign size={20} />
                    </div>
                    <p className="text-[11px] font-black text-[#0a3d62] uppercase tracking-widest">Gross Yield</p>
                </div>
                <div className="flex items-end justify-between">
                    <p className="text-[24px] font-black text-[#0a3d62]">$1.2M</p>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border-2 border-emerald-100">+12%</span>
                </div>
            </div>

            <div className="shiv-perfect-card p-6 flex flex-col justify-between group">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border-2 border-blue-100">
                        <Activity size={20} />
                    </div>
                    <p className="text-[11px] font-black text-[#0a3d62] uppercase tracking-widest">Active nodes</p>
                </div>
                <div className="flex items-end justify-between">
                    <p className="text-[24px] font-black text-[#0a3d62]">42</p>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg border-2 border-blue-100">Nominal</span>
                </div>
            </div>

            <div className="shiv-tinted-panel p-6 flex flex-col justify-between group cursor-pointer hover:bg-white transition-all">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#0a3d62]/10 flex items-center justify-center text-[#0a3d62]">
                        <PieChart size={20} />
                    </div>
                    <p className="text-[11px] font-black text-[#0a3d62] uppercase tracking-widest">Sector Spread</p>
                </div>
                <div className="flex items-center justify-between text-[#0a3d62] font-black text-[10px] uppercase tracking-widest">
                    View Distribution <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
};

export default TicketingReports;
