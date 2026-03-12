import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Bell, Info, AlertTriangle } from 'lucide-react';

const MaintenanceAlerts = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Engineering Alerts">
        <div className="max-w-4xl animate-in fade-in duration-700">
           <div className="space-y-6">
              {[
                { title: 'AOG Operational Lock', desc: 'N104BK grounded at Station LHR due to hydraulic subsystem failure.', level: 'Critical' },
                { title: 'Neural Sync Warning', desc: 'Technician S. Jenkins license expires in 12 SOLAR CYCLES.', level: 'Warning' },
                { title: 'Resource Delivery', desc: 'B787 landing gear assembly arrived at Hangar Unit 4.', level: 'Info' },
              ].map((a, i) => (
                 <div key={i} className={`p-8 rounded-[2rem] border flex items-center gap-8 transition-all hover:bg-shiv-card-hover group relative overflow-hidden ${
                   a.level === 'Critical' ? 'bg-error/5 border-error/20' : 'bg-shiv-bg-secondary/50 border-shiv-border'
                 }`}>
                    <div className={`p-5 rounded-2xl border shadow-lg shadow-black/20 ${
                      a.level === 'Critical' ? 'bg-error/10 text-error border-error/20' : 'bg-shiv-card text-shiv-muted border-shiv-border group-hover:text-shiv-primary transition-colors'
                    }`}>
                      {a.level === 'Critical' ? <AlertTriangle size={28} /> : <Bell size={28} />}
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-sm font-black text-shiv-text-primary uppercase tracking-[0.15em] mb-2 italic font-sans">{a.title}</h4>
                      <p className="text-xs text-shiv-text-secondary leading-loose font-bold tracking-wide">{a.desc}</p>
                    </div>
                    <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12 transition-transform group-hover:scale-110">
                      {a.level === 'Critical' ? <AlertTriangle size={150} /> : <Bell size={150} />}
                    </div>
                 </div>
              ))}
           </div>
        </div>
    </DashboardLayout>
  );
};

export default MaintenanceAlerts;
