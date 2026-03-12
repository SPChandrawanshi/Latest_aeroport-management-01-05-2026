import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Bell, AlertCircle, ShieldAlert } from 'lucide-react';

const OperationsAlerts = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Force Command Center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in fade-in duration-700">
        <div className="lg:col-span-8">
           <div className="space-y-6">
              {[
                { title: 'Ground Congestion Vector', desc: 'Terminal 5 at LHR experiencing high tactical throughput.', level: 'Medium', time: 'Active' },
                { title: 'Security Protocol Alpha', desc: 'Routine biometric sensor maintenance at JFK Node.', level: 'Low', time: '08:00' },
                { title: 'EMERGENCY: QA-202 FUEL', desc: 'Requesting priority vector landing due to fuel reserve delta.', level: 'Critical', time: 'NOW' },
              ].map((a, i) => (
                <div key={i} className={`p-8 rounded-[2.5rem] border-2 flex items-start gap-8 transition-all hover:bg-shiv-card-hover group relative overflow-hidden ${
                  a.level === 'Critical' ? 'bg-error/5 border-error/20 animate-pulse' : 
                  a.level === 'Medium' ? 'bg-warning/5 border-warning/20' : 'bg-shiv-bg-secondary/50 border-shiv-border'
                }`}>
                   <div className={`p-5 rounded-2xl border shadow-lg shadow-black/20 group-hover:rotate-6 transition-transform ${
                     a.level === 'Critical' ? 'bg-error/10 text-error border-error/20' : 
                     a.level === 'Medium' ? 'bg-warning/10 text-warning border-warning/20' : 'bg-shiv-card text-shiv-muted border-shiv-border'
                   }`}>
                     {a.level === 'Critical' ? <ShieldAlert size={28} /> : <Bell size={28} />}
                   </div>
                   <div className="flex-1 relative z-10">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm font-black text-shiv-text-primary uppercase tracking-[0.2em] italic font-sans">{a.title}</h4>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-shiv-muted">{a.time}</span>
                      </div>
                      <p className="text-xs text-shiv-text-secondary leading-loose font-bold tracking-wide">{a.desc}</p>
                   </div>
                   <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12 transition-transform group-hover:scale-110">
                     {a.level === 'Critical' ? <ShieldAlert size={150} /> : <Bell size={150} />}
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OperationsAlerts;
