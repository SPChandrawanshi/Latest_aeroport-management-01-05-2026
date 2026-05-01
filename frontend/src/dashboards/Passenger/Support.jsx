import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { MessageSquare, Phone, HelpCircle, ChevronRight } from 'lucide-react';

const PassengerSupport = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Concierge & Support">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="shiv-perfect-card p-8 flex flex-col items-center text-center group relative overflow-hidden">
           <div className="w-16 h-16 bg-blue-50 border-2 border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10"><MessageSquare size={28} /></div>
           <h4 className="text-[18px] font-black italic mb-1 uppercase tracking-tight text-[#0a3d62] relative z-10">Neural Chat</h4>
           <p className="text-[9px] font-black text-slate-400 mb-8 uppercase tracking-widest relative z-10">Temporal Delta: 2m Delta</p>
           <button className="w-full py-4 bg-[#0a3d62] text-white border-2 border-transparent hover:border-[#0a3d62] rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-white hover:text-[#0a3d62] shadow-lg transition-all relative z-10">INITIATE SESSION</button>
           <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <MessageSquare size={150} />
           </div>
        </div>

        <div className="shiv-perfect-card p-8 flex flex-col items-center text-center group relative overflow-hidden">
           <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10"><Phone size={28} /></div>
           <h4 className="text-[18px] font-black italic mb-1 uppercase tracking-tight text-[#0a3d62] relative z-10">Global Hotline</h4>
           <p className="text-[9px] font-black text-[#0a3d62] mb-8 bg-slate-50 border-2 border-[#0a3d62]/10 px-4 py-1.5 rounded-full relative z-10 tracking-widest font-bold">+1 (800) AERO-SYS</p>
           <button className="w-full py-4 bg-white border-2 border-slate-100 text-slate-400 rounded-xl font-black uppercase tracking-widest text-[9px] hover:bg-[#0a3d62] hover:text-white hover:border-[#0a3d62] transition-all relative z-10 shadow-md">REQUEST CALLBACK</button>
           <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <Phone size={150} />
           </div>
        </div>

        <div className="shiv-tinted-panel p-8 flex flex-col justify-center relative overflow-hidden group border-2">
           <HelpCircle className="text-[#FF8A00] mb-6 group-hover:rotate-12 transition-transform duration-500" size={40} />
           <h4 className="text-[22px] font-black italic tracking-tighter mb-4 uppercase text-[#0a3d62] leading-none">FAQ Intelligence</h4>
           <p className="text-slate-500 text-[10px] leading-relaxed font-bold mb-8 uppercase tracking-wide">Access our neural database for mission parameters, refund protocols, and elite identity status updates.</p>
           <div className="space-y-3">
             {['Baggage Protocol', 'Refund Directive', 'Lounge Access Index'].map((f, i) => (
               <div key={i} className="text-[9px] font-black text-[#0a3d62] uppercase tracking-widest flex items-center gap-3 cursor-pointer hover:translate-x-2 transition-all group/item">
                  <ChevronRight size={12} className="text-[#FF8A00] group-hover/item:translate-x-1 transition-transform" /> {f}
               </div>
             ))}
           </div>
           <div className="absolute -bottom-10 -right-10 opacity-[0.05] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
                <HelpCircle size={200} />
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PassengerSupport;
