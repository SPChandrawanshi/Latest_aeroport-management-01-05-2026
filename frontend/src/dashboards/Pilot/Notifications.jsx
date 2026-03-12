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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
        <div className="lg:col-span-8">
            <div className="space-y-6">
              {alerts.map((a, i) => (
                <div key={i} className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl flex items-start gap-6 transition-all hover:bg-shiv-card-hover group relative overflow-hidden">
                  <div className={`p-4 rounded-2xl border shadow-lg shadow-black/20 group-hover:rotate-12 transition-transform duration-500 ${
                    a.type === 'warning' ? 'bg-warning/10 text-warning border-warning/20' : 'bg-info/10 text-info border-info/20'
                  }`}>
                    {a.type === 'warning' ? <AlertTriangle size={28} /> : <Bell size={28} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-black text-shiv-text-primary uppercase tracking-[0.1em] italic">{a.title}</h4>
                      <span className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em]">{a.time}</span>
                    </div>
                    <p className="text-xs text-shiv-text-secondary leading-loose font-bold tracking-wide">{a.desc}</p>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12">
                    {a.type === 'warning' ? <AlertTriangle size={150} /> : <Bell size={150} />}
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="lg:col-span-4">
          <NotificationPanel />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PilotNotifications;
