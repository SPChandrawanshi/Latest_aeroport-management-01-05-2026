import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

const MaintenanceSchedule = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Hangar Deployment Schedule">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-700">
        <div className="lg:col-span-8 shiv-perfect-card p-6 sm:p-8">
           <div className="flex items-center justify-between mb-8 border-b-2 border-slate-50 pb-6">
             <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest flex items-center gap-3">
               <Calendar size={20} className="text-[#FF8A00]" />
               Planned Overhauls
             </h3>
           </div>
           
           <div className="space-y-4">
              {[
                { tail: 'N882AF', task: 'Structural Fatigue Audit', date: 'Mar 15, 2026', hangar: 'H1', status: 'Confirmed' },
                { tail: 'N445DX', task: 'Avionics Suite Upgrade', date: 'Mar 18, 2026', hangar: 'H4', status: 'Pending' },
                { tail: 'QA-501', task: 'Engine Borescope', date: 'Mar 20, 2026', hangar: 'LHR-Line', status: 'Scheduled' },
              ].map((s, i) => (
                <div key={i} className="shiv-perfect-card p-5 flex items-center justify-between group overflow-hidden relative border-slate-100/50">
                   <div className="relative z-10">
                     <p className="font-bold text-[#0a3d62] mb-1 tracking-tighter text-[16px] uppercase">{s.tail}</p>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.task}</p>
                   </div>
                   <div className="text-right relative z-10">
                     <p className="font-bold text-[#0a3d62] text-[12px] mb-1">{s.date}</p>
                     <p className="text-[10px] font-bold text-[#FF8A00] uppercase tracking-widest">{s.hangar}</p>
                   </div>
                   <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-[#0a3d62] translate-x-8 -translate-y-8 transition-transform group-hover:scale-110">
                     <Calendar size={100} />
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
            <div className="shiv-tinted-panel p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Clock size={18} className="text-[#0a3d62]" />
                    <h4 className="text-[13px] font-bold text-[#0a3d62] uppercase tracking-widest">Temporal Analysis</h4>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium uppercase">
                    3 Major overhauls scheduled in the next 14 cycles. Resource optimization required for Hangar H4.
                </p>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MaintenanceSchedule;
