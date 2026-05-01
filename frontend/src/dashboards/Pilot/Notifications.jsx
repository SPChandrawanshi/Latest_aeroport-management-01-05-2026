import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import NotificationPanel from '../../components/NotificationPanel';
import { Bell, Plane, AlertTriangle } from 'lucide-react';

const PilotNotifications = ({ menus }) => {
  const alerts = [
    { title: 'New Flight Assigned', desc: 'SKY-202 London to Tokyo confirmed.', type: 'info', time: '10m ago' },
    { title: 'Weather Warning', desc: 'Turbulence advisory for Route B12.', type: 'warning', time: '1h ago' },
    { title: 'Shift Confirmed', desc: 'Your leave request for April has been approved.', type: 'success', time: '4h ago' },
  ];

  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Crew Alerts">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
        <div className="lg:col-span-8">
            <div className="space-y-6">
              {alerts.map((a, i) => (
                <div key={i} className="shiv-perfect-card p-6 flex items-start gap-6 group relative overflow-hidden">
                  <div className={`p-3 rounded-lg border-2 shadow-lg group-hover:rotate-6 transition-transform duration-500 ${
                    a.type === 'warning' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-blue-50 text-[#0a3d62] border-blue-100'
                  }`}>
                    {a.type === 'warning' ? <AlertTriangle size={24} /> : <Bell size={24} />}
                  </div>
                  <div className="flex-1 relative z-10">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-[12px] font-black text-[#0a3d62] uppercase tracking-widest leading-none">{a.title}</h4>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{a.time}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-wide">{a.desc}</p>
                  </div>
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
                    {a.type === 'warning' ? <AlertTriangle size={150} /> : <Bell size={150} />}
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="lg:col-span-4">
           <div className="shiv-perfect-card p-6 h-full">
             <NotificationPanel />
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PilotNotifications;
