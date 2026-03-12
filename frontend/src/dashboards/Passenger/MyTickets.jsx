import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Ticket, QrCode, Download, Share2, Plane } from 'lucide-react';

const MyTickets = ({ menus }) => {
  const tickets = [
    { id: 'TKT-990-21', flight: 'QA-501', from: 'LHR', to: 'JFK', date: 'Mar 12', seat: '12A', class: 'Business' },
  ];

  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="My Digital Tickets">
      <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-10 animate-in fade-in duration-700">
        {tickets.map((t, i) => (
          <div key={i} className="max-w-4xl bg-shiv-card rounded-[3rem] border border-shiv-border shadow-2xl overflow-hidden flex flex-col md:flex-row group transition-all hover:bg-shiv-card-hover hover:border-shiv-primary/40">
            <div className="p-10 flex-1 border-r border-shiv-border/50 border-dashed relative">
              <div className="flex justify-between items-center mb-12">
                <Ticket className="text-shiv-primary group-hover:rotate-12 transition-transform duration-500" size={40} />
                <span className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">{t.class}</span>
              </div>
              
              <div className="flex justify-between items-center mb-12">
                <div>
                   <h4 className="text-5xl font-black text-shiv-text-primary italic tracking-tighter uppercase">{t.from}</h4>
                   <p className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em] mt-2">Departure Vector</p>
                </div>
                <div className="flex flex-col items-center flex-1 px-10">
                   <div className="w-full h-[2px] bg-shiv-border/50 relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-shiv-bg-secondary p-3 rounded-full border border-shiv-border group-hover:border-shiv-primary/40 transition-colors">
                       <Plane size={20} className="text-shiv-muted group-hover:text-shiv-primary transition-colors" />
                     </div>
                   </div>
                   <span className="mt-4 text-[10px] font-black text-shiv-muted uppercase tracking-[0.4em] italic leading-none">{t.flight}</span>
                </div>
                <div>
                   <h4 className="text-5xl font-black text-shiv-text-primary italic tracking-tighter text-right uppercase">{t.to}</h4>
                   <p className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em] mt-2 text-right">Mission Vector</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="p-4 bg-shiv-bg-secondary rounded-[1.5rem] border border-shiv-border/50">
                   <p className="text-[10px] font-black text-shiv-muted uppercase tracking-widest mb-2">Temporal</p>
                   <p className="font-black text-shiv-text-primary italic text-lg">{t.date}</p>
                </div>
                <div className="p-4 bg-shiv-bg-secondary rounded-[1.5rem] border border-shiv-border/50">
                   <p className="text-[10px] font-black text-shiv-muted uppercase tracking-widest mb-2">Assigned Sector</p>
                   <p className="font-black text-shiv-text-primary italic text-lg">{t.seat}</p>
                </div>
                <div className="p-4 bg-shiv-bg-secondary rounded-[1.5rem] border border-shiv-border/50">
                   <p className="text-[10px] font-black text-shiv-muted uppercase tracking-widest mb-2">Gate Vector</p>
                   <p className="font-black text-shiv-text-primary italic text-lg uppercase">B12</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none translate-x-12 -translate-y-12">
                   <Ticket size={250} />
              </div>
            </div>

            <div className="bg-shiv-sidebar p-12 flex flex-col items-center justify-center gap-10 w-full md:w-64 border-t md:border-t-0 md:border-l border-shiv-border/50 border-dashed">
               <div className="p-6 bg-white rounded-[2rem] shadow-2xl group-hover:scale-105 transition-transform duration-500 border-4 border-shiv-primary/20">
                 <QrCode size={120} className="text-black" />
               </div>
               <div className="flex gap-6">
                 <button className="p-4 bg-shiv-card border border-shiv-border rounded-2xl text-shiv-muted hover:text-shiv-primary hover:border-shiv-primary/30 shadow-xl transition-all group/btn">
                    <Download size={24} className="group-hover/btn:-translate-y-1 transition-transform" />
                 </button>
                 <button className="p-4 bg-shiv-card border border-shiv-border rounded-2xl text-shiv-muted hover:text-shiv-primary hover:border-shiv-primary/30 shadow-xl transition-all group/btn">
                    <Share2 size={24} className="group-hover/btn:scale-110 transition-transform" />
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </DashboardLayout>
  );
};

export default MyTickets;
