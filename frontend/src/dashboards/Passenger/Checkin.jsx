import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { ShieldCheck, User, Plane, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';

const Checkin = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Online Check-In Hub">
      <div className="max-w-2xl animate-in fade-in duration-700 mx-auto">
         <div className="shiv-perfect-card p-8 sm:p-10 relative overflow-hidden group">
            <div className="flex items-center gap-8 mb-10 border-b-2 border-slate-50 pb-8 relative z-10">
               <div className="w-16 h-16 bg-[#0a3d62] rounded-xl flex items-center justify-center text-white shadow-xl group-hover:bg-[#FF8A00] transition-colors duration-500">
                 <ShieldCheck size={32} />
               </div>
               <div>
                 <h3 className="text-[24px] font-black text-[#0a3d62] tracking-tighter uppercase leading-none mb-1">Security Protocol</h3>
                 <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.3em] leading-none">Neural Verification Ready</p>
               </div>
            </div>

            <div className="space-y-4 relative z-10">
              {[
                { label: 'Passenger Identity', status: 'Verified', active: true, icon: <User size={18} /> },
                { label: 'Baggage Declaration', status: 'Pending', active: false, icon: <ChevronRight size={18} /> },
                { label: 'Seat Vector', status: '12A', active: true, icon: <Plane size={18} /> },
              ].map((s, i) => (
                <div key={i} className="shiv-tinted-panel p-5 group/item flex items-center justify-between border-2 hover:border-[#0a3d62] !bg-slate-50/50">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white rounded-lg border-2 border-[#0a3d62]/5 text-[#0a3d62] shadow-sm group-hover/item:border-[#0a3d62]/10 transition-colors">{s.icon}</div>
                    <span className="font-black uppercase tracking-widest text-[12px] text-[#0a3d62]">{s.label}</span>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${s.active ? 'text-emerald-600' : 'text-slate-400'}`}>{s.status}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-10 py-5 bg-[#0a3d62] text-white rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#0c4a75] shadow-xl transition-all relative z-10 flex items-center justify-center gap-3 border-2 border-transparent hover:border-[#0a3d62]">
              EXECUTE DIGITAL CHECK-IN <CheckCircle2 size={16} />
            </button>

            <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <ShieldCheck size={280} />
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
};

export default Checkin;
