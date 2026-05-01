import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import NotificationPanel from '../../components/NotificationPanel';
import { Bell, ShieldAlert, Tag } from 'lucide-react';

const TicketingNotifications = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Broadcast Command">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-700 max-w-7xl mx-auto">
           <div className="lg:col-span-8">
              <div className="space-y-6">
                 {[
                   { title: 'Global Flash Sale Active', desc: 'Marketing campaign GLOBAL26 is now live on all mission channels.', type: 'promo' },
                   { title: 'Neural Gateway Maintenance', desc: 'Expect latency in processed transactions between 02:00-04:00 AM.', type: 'alert' },
                 ].map((n, i) => (
                    <div key={i} className={`shiv-perfect-card p-6 flex items-center gap-6 group relative overflow-hidden ${
                      n.type === 'alert' ? '!bg-red-50/50 !border-red-100' : ''
                    }`}>
                       <div className={`p-3 rounded-lg border-2 shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10 ${
                         n.type === 'alert' ? 'bg-white text-red-600 border-red-100' : 'bg-[#0a3d62] text-white border-transparent'
                       }`}>
                         {n.type === 'alert' ? <ShieldAlert size={24} /> : <Tag size={24} />}
                       </div>
                       <div className="relative z-10">
                         <h4 className="text-[12px] font-black uppercase tracking-widest mb-1 text-[#0a3d62] leading-none">{n.title}</h4>
                         <p className="text-[10px] leading-relaxed font-bold tracking-wide text-slate-500 uppercase">{n.desc}</p>
                       </div>
                       <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                         {n.type === 'alert' ? <ShieldAlert size={150} /> : <Tag size={150} />}
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

export default TicketingNotifications;
