import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { MessageSquare, Phone, HelpCircle, ChevronRight } from 'lucide-react';

const PassengerSupport = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Concierge & Support">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in duration-700">
        <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl flex flex-col items-center text-center group hover:bg-shiv-card-hover hover:border-shiv-primary/30 transition-all relative overflow-hidden">
           <div className="w-20 h-20 bg-info/10 border border-info/20 rounded-2xl flex items-center justify-center text-info mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10"><MessageSquare size={36} /></div>
           <h4 className="text-2xl font-black italic mb-2 uppercase tracking-tight text-shiv-text-primary relative z-10">Neural Chat</h4>
           <p className="text-[10px] font-black text-shiv-muted mb-10 uppercase tracking-[0.2em] relative z-10">Temporal Delta: 2m Delta</p>
           <button className="w-full py-5 bg-shiv-sidebar border border-shiv-border text-shiv-text-primary rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-shiv-card shadow-xl transition-all relative z-10">INITIATE SESSION</button>
           <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none">
                <MessageSquare size={200} />
           </div>
        </div>

        <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl flex flex-col items-center text-center group hover:bg-shiv-card-hover hover:border-shiv-primary/30 transition-all relative overflow-hidden">
           <div className="w-20 h-20 bg-success/10 border border-success/20 rounded-2xl flex items-center justify-center text-success mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10"><Phone size={36} /></div>
           <h4 className="text-2xl font-black italic mb-2 uppercase tracking-tight text-shiv-text-primary relative z-10">Global Hotline</h4>
           <p className="text-[10px] font-black text-shiv-text-primary mb-10 bg-shiv-sidebar border border-shiv-border px-6 py-2 rounded-full relative z-10 tracking-[0.2em]">+1 (800) AERO-SYS</p>
           <button className="w-full py-5 border border-shiv-border text-shiv-muted rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-shiv-sidebar hover:text-shiv-text-primary transition-all relative z-10">REQUEST CALLBACK</button>
           <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none">
                <Phone size={200} />
           </div>
        </div>

        <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-12 rounded-[2.5rem] flex flex-col justify-center shadow-2xl relative overflow-hidden group">
           <HelpCircle className="text-shiv-primary mb-6 group-hover:rotate-12 transition-transform duration-500" size={48} />
           <h4 className="text-3xl font-black italic tracking-tighter mb-6 uppercase">FAQ Intelligence</h4>
           <p className="text-shiv-muted text-xs leading-loose font-bold mb-8">Access our neural database for mission parameters, refund protocols, and elite identity status updates.</p>
           <div className="space-y-4">
             {['Baggage Protocol', 'Refund Directive', 'Lounge Access Index'].map((f, i) => (
               <div key={i} className="text-[10px] font-black text-shiv-primary uppercase tracking-[0.3em] flex items-center gap-4 cursor-pointer hover:translate-x-4 transition-all group/item">
                  <ChevronRight size={14} className="group-hover/item:translate-x-1 transition-transform" /> {f}
               </div>
             ))}
           </div>
           <div className="absolute -bottom-10 -right-10 opacity-[0.05]">
                <HelpCircle size={250} />
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PassengerSupport;
