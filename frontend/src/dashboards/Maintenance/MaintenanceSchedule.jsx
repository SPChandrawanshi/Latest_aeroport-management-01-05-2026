import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

const MaintenanceSchedule = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Hangar Deployment Schedule">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
        <div className="lg:col-span-8 bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
           <div className="flex items-center justify-between mb-10 border-b border-shiv-border/50 pb-10">
             <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] flex items-center gap-4 italic font-sans">
               <Calendar size={24} className="text-shiv-primary" />
               Planned Overhauls
             </h3>
           </div>
           
           <div className="space-y-8">
              {[
                { tail: 'N882AF', task: 'Structural Fatigue Audit', date: 'Mar 15, 2026', hangar: 'H1', status: 'Confirmed' },
                { tail: 'N445DX', task: 'Avionics Suite Upgrade', date: 'Mar 18, 2026', hangar: 'H4', status: 'Pending' },
                { tail: 'QA-501', task: 'Engine Borescope', date: 'Mar 20, 2026', hangar: 'LHR-Line', status: 'Scheduled' },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-8 bg-shiv-bg-secondary/50 rounded-3xl border border-shiv-border hover:bg-shiv-card-hover transition-all group overflow-hidden relative">
                   <div className="relative z-10">
                     <p className="font-black text-shiv-text-primary italic underline decoration-shiv-primary/40 decoration-4 mb-2 tracking-tighter text-xl uppercase">{s.tail}</p>
                     <p className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em]">{s.task}</p>
                   </div>
                   <div className="text-right relative z-10">
                     <p className="font-black text-shiv-text-primary italic tracking-tight mb-1">{s.date}</p>
                     <p className="text-[10px] font-black text-shiv-primary uppercase tracking-[0.3em]">{s.hangar}</p>
                   </div>
                   <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12">
                     <Calendar size={150} />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MaintenanceSchedule;
