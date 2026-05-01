import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Bell, Info, AlertTriangle, ShieldCheck } from 'lucide-react';

const MaintenanceAlerts = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Engineering Alerts">
        <div className="max-w-4xl animate-in fade-in duration-700 mx-auto">
           <div className="space-y-4">
              {[
                { title: 'AOG Operational Lock', desc: 'N104BK grounded at Station LHR due to hydraulic subsystem failure.', level: 'Critical' },
                { title: 'Neural Sync Warning', desc: 'Technician S. Jenkins license expires in 12 SOLAR CYCLES.', level: 'Warning' },
                { title: 'Resource Delivery', desc: 'B787 landing gear assembly arrived at Hangar Unit 4.', level: 'Info' },
              ].map((a, i) => (
              <div key={i} 
                style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                className={`p-6 rounded-xl border-2 flex items-center gap-6 transition-all hover:border-[#0a3d62] group relative overflow-hidden ${
               a.level === 'Critical' ? 'bg-red-50/50 border-red-100' : 'bg-white border-[#0a3d62]/10'
             }`}>
                <div className={`p-3 rounded-lg border-2 shadow-sm transition-all duration-500 group-hover:scale-110 ${
                  a.level === 'Critical' ? 'bg-white text-red-500 border-red-200' : 'bg-slate-50 text-slate-400 border-slate-100 group-hover:text-[#0a3d62] group-hover:bg-white'
                }`}>
                  {a.level === 'Critical' ? <AlertTriangle size={24} /> : <Bell size={24} />}
                </div>
                <div className="relative z-10 flex-1">
                  <h4 className="text-[12px] font-black text-[#0a3d62] uppercase tracking-widest mb-1 leading-none">{a.title}</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-wide">{a.desc}</p>
                </div>
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
                  {a.level === 'Critical' ? <AlertTriangle size={120} /> : <Bell size={120} />}
                </div>
              </div>
              ))}
           </div>

           <div 
                style={{ backgroundColor: 'rgba(248, 194, 145, 0.18)', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
                className="mt-6 p-6 rounded-xl border-2 border-[#0a3d62]/10 hover:border-[#0a3d62] transition-all flex items-center gap-6 group"
            >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0a3d62] border-2 border-[#0a3d62]/10 shadow-lg group-hover:rotate-6 transition-all">
                    <ShieldCheck size={20} />
                </div>
                <div>
                    <h4 className="text-[12px] font-black text-[#0a3d62] uppercase tracking-wider mb-1 leading-none">Alert Sync Protocol Active</h4>
                    <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wide">All engineering nodes are synchronized with the central ATC alert system.</p>
                </div>
            </div>
        </div>
    </DashboardLayout>
  );
};

export default MaintenanceAlerts;
