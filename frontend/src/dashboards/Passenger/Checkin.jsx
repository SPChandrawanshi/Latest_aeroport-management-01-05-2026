import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { ShieldCheck, User, Plane, MapPin, ChevronRight } from 'lucide-react';

const Checkin = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Online Check-In Hub">
      <div className="max-w-2xl animate-in fade-in duration-700">
         <div className="bg-shiv-card rounded-[3rem] border border-shiv-border shadow-2xl p-12 relative overflow-hidden group">
            <div className="flex items-center gap-8 mb-12 border-b border-shiv-border/50 pb-12 relative z-10">
               <div className="w-24 h-24 bg-shiv-sidebar border border-shiv-border rounded-3xl flex items-center justify-center text-shiv-primary shadow-xl group-hover:scale-110 transition-transform duration-500">
                 <ShieldCheck size={48} />
               </div>
               <div>
                 <h3 className="text-3xl font-black text-shiv-text-primary tracking-tighter italic uppercase">Security Protocol</h3>
                 <p className="text-[10px] text-shiv-muted font-black uppercase tracking-[0.3em]">Neural Verification Ready</p>
               </div>
            </div>

            <div className="space-y-6 relative z-10">
              {[
                { label: 'Passenger Identity', status: 'Verified', icon: <User size={20} /> },
                { label: 'Baggage Declaration', status: 'Pending', icon: <ChevronRight size={20} /> },
                { label: 'Seat Vector', status: '12A', icon: <Plane size={20} /> },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-8 bg-shiv-bg-secondary rounded-[1.5rem] border border-shiv-border hover:border-shiv-primary/40 hover:bg-shiv-card-hover transition-all cursor-pointer group/item">
                  <div className="flex items-center gap-6">
                    <div className="p-3 bg-shiv-card rounded-xl border border-shiv-border text-shiv-muted group-hover/item:text-shiv-primary group-hover/item:border-shiv-primary/30 transition-all">{s.icon}</div>
                    <span className="font-black italic uppercase tracking-tight text-shiv-text-primary">{s.label}</span>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${s.status === 'Verified' ? 'text-success' : 'text-shiv-muted'}`}>{s.status}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-12 py-6 bg-shiv-sidebar border border-shiv-border text-shiv-text-primary rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-shiv-card-hover hover:border-shiv-primary/50 shadow-2xl transition-all relative z-10">
              EXECUTE DIGITAL CHECK-IN
            </button>

            <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none">
                <ShieldCheck size={300} />
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
};

export default Checkin;
