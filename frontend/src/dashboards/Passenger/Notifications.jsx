import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import NotificationPanel from '../../components/NotificationPanel';
import { Bell, MapPin, Ticket } from 'lucide-react';

const PassengerNotifications = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Journey Updates">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-500">
        <div className="lg:col-span-8">
          <div className="space-y-6">
            {[
              { title: 'Gate Vector: QA-501', desc: 'Departure gate changed from B04 to B12.', time: '10m ago', icon: <MapPin size={24} className="text-shiv-primary" /> },
              { title: 'Credit Clearance', desc: 'Booking BK-7701 has been fully processed by central bank.', time: '2h ago', icon: <Ticket size={24} className="text-success" /> },
              { title: 'Identity Elevation', desc: 'You have earned Gold Elite Status. Access granted.', time: 'Yesterday', icon: <Bell size={24} className="text-shiv-primary" /> },
            ].map((n, i) => (
              <div key={i} className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl flex gap-8 hover:bg-shiv-card-hover hover:border-shiv-primary/30 transition-all group animate-in slide-in-from-left duration-700">
                <div className="p-4 bg-shiv-bg-secondary border border-shiv-border rounded-2xl group-hover:scale-110 transition-transform duration-500">{n.icon}</div>
                <div className="flex-1">
                   <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-black text-shiv-text-primary uppercase tracking-[0.2em] italic font-sans">{n.title}</h4>
                      <span className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em]">{n.time}</span>
                   </div>
                   <p className="text-xs leading-loose font-bold text-shiv-text-secondary tracking-wide">{n.desc}</p>
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

export default PassengerNotifications;
