import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import NotificationPanel from '../../components/NotificationPanel';
import { Bell, ShieldAlert, Info, CheckCircle2 } from 'lucide-react';

const AdminNotifications = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="System Alerts">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
        <div className="lg:col-span-8">
          <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl h-full">
            <div className="flex items-center justify-between mb-10 border-b border-shiv-border pb-8">
              <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] flex items-center gap-4 italic">
                <Bell size={24} className="text-shiv-primary" />
                Strategic Broadcast Matrix
              </h3>
              <span className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em]">6 Operational Messages</span>
            </div>

            <div className="space-y-6">
              {[
                { type: 'critical', msg: 'Core maintenance protocol scheduled for 02:00 UTC. Expect slight operational latency.', time: '2m ago', icon: <ShieldAlert className="text-error" /> },
                { type: 'success', msg: 'Strategic payroll cycle completed for Q1. Financial nodes updated.', time: '1h ago', icon: <CheckCircle2 className="text-success" /> },
                { type: 'info', msg: 'Tactical hub expansion successful: SIN (Singapore Terminal 4).', time: '3h ago', icon: <Info className="text-info" /> },
                { type: 'info', msg: 'METAR Alert: North Atlantic vectors. Pilots advised to sync weather data.', time: '5h ago', icon: <Info className="text-info" /> },
              ].map((n, i) => (
                <div key={i} className={`p-6 rounded-2xl border flex items-start gap-5 transition-all hover:bg-shiv-card-hover ${
                  n.type === 'critical' ? 'bg-error/5 border-error/20' : 
                  n.type === 'success' ? 'bg-success/5 border-success/20' : 'bg-shiv-bg-secondary/50 border-shiv-border'
                }`}>
                  <div className="p-3 bg-shiv-card rounded-xl border border-shiv-border shadow-lg shadow-black/20">{n.icon}</div>
                  <div className="flex-1">
                    <p className={`text-sm font-bold leading-relaxed ${n.type === 'critical' ? 'text-error' : 'text-shiv-text-primary'}`}>{n.msg}</p>
                    <p className="text-[10px] text-shiv-muted mt-3 font-black uppercase tracking-[0.2em]">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-8">
            <NotificationPanel />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminNotifications;
