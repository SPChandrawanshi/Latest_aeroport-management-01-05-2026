import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Chart from '../../components/Chart';
import { AlertTriangle, Clock, TrendingUp } from 'lucide-react';

const DelayMonitoring = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Punctuality Audit">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="lg:col-span-2">
           <div 
             style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
             className="bg-white p-10 rounded-[2.5rem] border-2 border-[#0a3d62]/10 hover:border-[#0a3d62] transition-all group relative overflow-hidden"
           >
             <h3 className="text-[24px] font-black text-[#0a3d62] uppercase tracking-tighter mb-12 border-b-2 border-slate-50 pb-6 flex justify-between items-center relative z-10">
               Tactical Delay Matrix (MIN)
               <TrendingUp size={24} className="text-[#FF8A00]" />
             </h3>
             <div className="relative z-10">
               <Chart data={[12, 18, 15, 25, 22, 14, 10]} height={250} color="#FF8A00" />
             </div>
             <div className="absolute -bottom-10 -right-10 opacity-[0.02] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
               <TrendingUp size={300} />
             </div>
           </div>
        </div>
        <div>
           <div 
             style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: 'rgba(248, 194, 145, 0.08)' }}
             className="p-10 rounded-[2.5rem] border-2 border-amber-100 hover:border-[#0a3d62] shadow-2xl relative overflow-hidden group transition-all"
           >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#0a3d62] border-2 border-amber-100 mb-8 shadow-lg group-hover:bg-[#0a3d62] group-hover:text-white transition-all duration-500">
                <AlertTriangle size={32} className="group-hover:rotate-12 transition-transform" />
              </div>
              <h4 className="text-[28px] font-black italic text-[#0a3d62] mb-6 uppercase tracking-tighter leading-none">Command Advisory</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed font-bold tracking-wide uppercase italic">
                Increased ground congestion at LHR causing average <span className="text-[#0a3d62] font-black underline decoration-2 underline-offset-4">12min taxi-out delays</span>. Operational buffers should be adjusted in vector sync.
              </p>
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
                <AlertTriangle size={200} />
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DelayMonitoring;
