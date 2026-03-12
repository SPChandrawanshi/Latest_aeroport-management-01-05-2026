import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import NotificationPanel from '../../components/NotificationPanel';
import { Bell, ShieldAlert, Tag } from 'lucide-react';

const TicketingNotifications = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Broadcast Command">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-in fade-in duration-700">
           <div className="lg:col-span-8">
              <div className="space-y-6">
                 {[
                   { title: 'Global Flash Sale Active', desc: 'Marketing campaign GLOBAL26 is now live on all mission channels.', type: 'promo' },
                   { title: 'Neural Gateway Maintenance', desc: 'Expect latency in processed transactions between 02:00-04:00 AM.', type: 'alert' },
                 ].map((n, i) => (
                    <div key={i} className={`p-8 rounded-[2.5rem] border flex items-center gap-8 transition-all hover:bg-shiv-card-hover group relative overflow-hidden ${
                      n.type === 'alert' ? 'bg-error/5 border-error/20' : 'bg-shiv-sidebar border-shiv-border shadow-2xl'
                    }`}>
                       <div className={`p-5 rounded-2xl border shadow-lg shadow-black/20 group-hover:scale-110 transition-transform ${
                         n.type === 'alert' ? 'bg-error/10 text-error border-error/20' : 'bg-shiv-card text-shiv-primary border-shiv-border'
                       }`}>
                         {n.type === 'alert' ? <ShieldAlert size={28} /> : <Tag size={28} />}
                       </div>
                       <div className="relative z-10">
                         <h4 className={`text-sm font-black uppercase tracking-[0.2em] mb-2 italic font-sans ${n.type === 'alert' ? 'text-shiv-text-primary' : 'text-shiv-text-primary'}`}>{n.title}</h4>
                         <p className={`text-xs leading-loose font-bold tracking-wide ${n.type === 'alert' ? 'text-shiv-text-secondary' : 'text-shiv-muted'}`}>{n.desc}</p>
                       </div>
                       <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12">
                         {n.type === 'alert' ? <ShieldAlert size={200} /> : <Tag size={200} />}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
           <div className="lg:col-span-4 translate-y-2">
              <NotificationPanel />
           </div>
        </div>
    </DashboardLayout>
  );
};

export default TicketingNotifications;
