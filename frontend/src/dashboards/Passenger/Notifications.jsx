import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import NotificationPanel from '../../components/NotificationPanel';
import { Bell, MapPin, Ticket } from 'lucide-react';

const PassengerNotifications = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Journey Updates">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500 max-w-7xl mx-auto">
        <div className="lg:col-span-8">
          <div className="space-y-6">
            {[
              { title: 'Gate Vector: QA-501', desc: 'Departure gate changed from B04 to B12.', time: '10m ago', icon: <MapPin size={24} className="text-[#0a3d62]" /> },
              { title: 'Credit Clearance', desc: 'Booking BK-7701 has been fully processed by central bank.', time: '2h ago', icon: <Ticket size={24} className="text-emerald-500" /> },
              { title: 'Identity Elevation', desc: 'You have earned Gold Elite Status. Access granted.', time: 'Yesterday', icon: <Bell size={24} className="text-[#0a3d62]" /> },
            ].map((n, i) => (
              <div key={i} className="shiv-perfect-card p-6 flex gap-6 group animate-in slide-in-from-left duration-700">
                <div className="p-3 bg-slate-50 border-2 border-slate-100 rounded-xl group-hover:scale-110 transition-transform duration-500">{n.icon}</div>
                <div className="flex-1">
                   <div className="flex justify-between items-center mb-2">
                      <h4 className="text-[12px] font-black text-[#0a3d62] uppercase tracking-widest leading-none">{n.title}</h4>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{n.time}</span>
                   </div>
                   <p className="text-[10px] leading-relaxed font-bold text-slate-500 tracking-wide uppercase">{n.desc}</p>
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

export default PassengerNotifications;
