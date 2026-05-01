import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Ticket, QrCode, Download, Share2, Plane, MapPin, Calendar, User, ShieldCheck } from 'lucide-react';

const MyTickets = ({ menus }) => {
  const tickets = [
    { id: 'TKT-990-21', flight: 'QA-501', from: 'LHR', to: 'JFK', date: 'Mar 12', seat: '12A', class: 'Business', gate: 'B12' },
  ];

  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="My Digital Tickets">
      <div className="space-y-8 animate-in fade-in duration-700 max-w-4xl">
        {tickets.map((t, i) => (
          <div 
            key={i} 
            className="shiv-perfect-card overflow-hidden flex flex-col md:flex-row group border-2"
          >
            {/* Ticket Main Section */}
            <div className="p-8 flex-1 border-r-2 border-slate-50 border-dashed relative">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0a3d62] text-white flex items-center justify-center shadow-xl group-hover:bg-[#FF8A00] transition-colors duration-500">
                        <Ticket size={24} />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none mb-1.5">Boarding Pass</p>
                        <h4 className="text-[16px] font-black text-[#0a3d62] uppercase tracking-tighter leading-none">{t.id}</h4>
                    </div>
                </div>
                <span className="px-5 py-2 rounded-xl border-2 border-[#0a3d62]/10 text-[#0a3d62] text-[11px] font-black uppercase tracking-widest bg-slate-50 group-hover:border-[#0a3d62] transition-colors">
                    {t.class}
                </span>
              </div>
              
              <div className="flex justify-between items-center mb-12 px-2">
                <div className="text-left">
                   <h4 className="text-[42px] font-black text-[#0a3d62] tracking-tighter leading-none">{t.from}</h4>
                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2">London (LHR)</p>
                </div>
                
                <div className="flex flex-col items-center flex-1 px-8 relative">
                   <div className="w-full h-0.5 bg-slate-100 relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2.5 rounded-full border-2 border-[#0a3d62]/10 group-hover:border-[#0a3d62] transition-all duration-500">
                       <Plane size={18} className="text-[#0a3d62] -rotate-45" />
                     </div>
                   </div>
                   <span className="mt-5 text-[12px] font-black text-[#FF8A00] uppercase tracking-widest leading-none bg-white px-3">{t.flight}</span>
                </div>

                <div className="text-right">
                   <h4 className="text-[42px] font-black text-[#0a3d62] tracking-tighter leading-none text-right">{t.to}</h4>
                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2 text-right">New York (JFK)</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="shiv-tinted-panel p-4 group/item hover:border-[#0a3d62]">
                   <div className="flex items-center gap-2 mb-2">
                       <Calendar size={14} className="text-[#0a3d62]/60" />
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Temporal</p>
                   </div>
                   <p className="font-black text-[#0a3d62] text-[16px]">{t.date}</p>
                </div>
                <div className="shiv-tinted-panel p-4 group/item hover:border-[#0a3d62]">
                   <div className="flex items-center gap-2 mb-2">
                       <MapPin size={14} className="text-[#0a3d62]/60" />
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sector</p>
                   </div>
                   <p className="font-black text-[#0a3d62] text-[16px]">{t.seat}</p>
                </div>
                <div className="shiv-tinted-panel p-4 group/item hover:border-[#0a3d62]">
                   <div className="flex items-center gap-2 mb-2">
                       <ShieldCheck size={14} className="text-[#0a3d62]/60" />
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gate</p>
                   </div>
                   <p className="font-black text-[#0a3d62] text-[16px] uppercase">{t.gate}</p>
                </div>
              </div>
            </div>

            {/* Ticket QR Section */}
            <div className="shiv-tinted-panel !rounded-none !border-y-0 !border-r-0 p-10 flex flex-col items-center justify-center gap-10 w-full md:w-64 border-l-2">
               <div className="p-5 bg-white rounded-2xl shadow-xl border-2 border-[#0a3d62]/10 group-hover:border-[#0a3d62] transition-all duration-500 transform group-hover:scale-105">
                 <QrCode size={110} className="text-[#0a3d62]" />
               </div>
               <div className="flex gap-4">
                 <button className="p-3.5 bg-white border-2 border-slate-100 rounded-xl text-[#0a3d62] hover:border-[#0a3d62] hover:shadow-lg transition-all group/btn">
                    <Download size={22} className="group-hover/btn:-translate-y-1 transition-transform" />
                 </button>
                 <button className="p-3.5 bg-white border-2 border-slate-100 rounded-xl text-[#0a3d62] hover:border-[#0a3d62] hover:shadow-lg transition-all group/btn">
                    <Share2 size={22} className="group-hover/btn:scale-110 transition-transform" />
                 </button>
               </div>
               <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] text-center">Secure or Encrypted</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default MyTickets;
