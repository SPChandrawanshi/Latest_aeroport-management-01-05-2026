import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import NotificationPanel from '../../components/NotificationPanel';
import { Bell, ShieldAlert, Info, CheckCircle2, Navigation } from 'lucide-react';

const AdminNotifications = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="System Alerts">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="lg:col-span-8">
          <div className="shiv-perfect-card p-6 sm:p-8 h-full">
            <div className="flex items-center justify-between mb-8 border-b-2 border-slate-50 pb-6">
              <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest flex items-center gap-4">
                <div className="p-2 bg-[#0a3d62] rounded-lg text-white shadow-lg">
                  <Bell size={18} />
                </div>
                Strategic Broadcast Matrix
              </h3>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">6 Operational Messages</span>
            </div>

            <div className="space-y-4">
              {[
                { type: 'critical', msg: 'Core maintenance protocol scheduled for 02:00 UTC. Expect slight operational latency.', time: '2m ago', icon: <ShieldAlert size={18} className="text-red-600" />, color: 'border-red-100 bg-red-50/50' },
                { type: 'success', msg: 'Strategic payroll cycle completed for Q1. Financial nodes updated.', time: '1h ago', icon: <CheckCircle2 size={18} className="text-emerald-600" />, color: 'border-emerald-100 bg-emerald-50/50' },
                { type: 'info', msg: 'Tactical hub expansion successful: SIN (Singapore Terminal 4).', time: '3h ago', icon: <Info size={18} className="text-blue-600" />, color: 'border-blue-100 bg-blue-50/50' },
                { type: 'info', msg: 'METAR Alert: North Atlantic vectors. Pilots advised to sync weather data.', time: '5h ago', icon: <Navigation size={18} className="text-amber-600" />, color: 'border-amber-100 bg-amber-50/50' },
              ].map((n, i) => (
                <div key={i} className={`p-5 rounded-2xl border-2 flex items-start gap-5 transition-all hover:border-[#0a3d62] hover:bg-white group cursor-default ${n.color}`}>
                  <div className="p-3 bg-white rounded-xl border-2 border-[#0a3d62]/5 shadow-sm group-hover:border-[#0a3d62]/10 transition-colors">{n.icon}</div>
                  <div className="flex-1">
                    <p className={`text-[12px] font-black leading-relaxed text-[#0a3d62] uppercase tracking-tight`}>{n.msg}</p>
                    <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-[0.2em]">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-6">
            <NotificationPanel />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminNotifications;
