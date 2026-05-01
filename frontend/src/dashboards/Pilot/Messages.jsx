import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { MessageSquare, Send, User } from 'lucide-react';

const PilotMessages = ({ menus }) => {
  const threads = [
    { from: 'Flight Ops', subject: 'Route Correction: QA-202', time: '10:15', unread: true },
    { from: 'Ground Crew', subject: 'Pre-flight Check Finished', time: '09:40', unread: false },
    { from: 'Admin HQ', subject: 'License Renewal Update', time: 'Yesterday', unread: false },
  ];

  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Crew Messaging">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[700px] animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="lg:col-span-4 shiv-perfect-card overflow-hidden flex flex-col p-0">
          <div className="p-8 border-b-2 border-slate-50 bg-slate-50/30">
            <h3 className="font-black text-[#0a3d62] uppercase tracking-widest text-[12px]">Neural Comms Inbox</h3>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {threads.map((t, i) => (
              <div key={i} className={`p-8 border-b-2 border-slate-50 cursor-pointer hover:bg-slate-50/50 transition-all group border-l-4 ${t.unread ? 'border-l-[#FF8A00] bg-blue-50/30' : 'border-l-transparent'}`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-black text-[#0a3d62] uppercase tracking-tight text-sm">{t.from}</span>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.time}</span>
                </div>
                <p className="text-[11px] text-slate-500 truncate font-bold uppercase tracking-wide">{t.subject}</p>
                {t.unread && <div className="mt-3 w-2 h-2 bg-[#FF8A00] rounded-full shadow-[0_0_10px_rgba(255,138,0,0.5)]"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 shiv-perfect-card overflow-hidden flex flex-col p-0 group">
          <div className="p-8 border-b-2 border-slate-50 flex items-center justify-between bg-slate-50/20">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-[#0a3d62] rounded-xl flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-all duration-500">
                <User size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-[#0a3d62] uppercase tracking-wider italic leading-none mb-1">Strategic Ops Command</span>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest leading-none">Link Secure</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-10 bg-slate-50/10 space-y-8 overflow-y-auto custom-scrollbar">
            <div className="flex justify-end">
              <div className="bg-[#0a3d62] text-white p-6 rounded-[2rem] rounded-tr-none max-w-[75%] shadow-xl border-2 border-transparent">
                <p className="text-[12px] font-bold leading-relaxed tracking-wide uppercase">Initializing request for updated <span className="text-[#FF8A00] font-black">METAR data</span> for arrival vector at JFK. Confirming window sync.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white border-2 border-[#0a3d62]/10 p-6 rounded-[2rem] rounded-tl-none max-w-[75%] shadow-xl relative group/msg hover:border-[#0a3d62] transition-all">
                <p className="text-[12px] font-bold leading-relaxed tracking-wide text-slate-600 uppercase">Request acknowledged. Syncing tactical weather array now. High visibility confirmed for destination vector.</p>
              </div>
            </div>
          </div>

          <div className="p-8 border-t-2 border-slate-50 bg-slate-50/10">
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Transmit encrypted signal..." 
                className="shiv-input-field flex-1 px-8 py-4" 
              />
              <button className="bg-[#0a3d62] text-white p-4 rounded-2xl hover:bg-[#0c4a75] hover:scale-105 transition-all shadow-xl border-2 border-transparent hover:border-[#0a3d62]">
                <Send size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PilotMessages;
