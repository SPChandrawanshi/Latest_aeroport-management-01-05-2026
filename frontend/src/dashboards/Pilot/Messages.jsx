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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 h-[700px] animate-in fade-in duration-700">
        <div className="lg:col-span-4 bg-shiv-card rounded-[2.5rem] border border-shiv-border shadow-2xl overflow-hidden flex flex-col">
          <div className="p-8 border-b border-shiv-border bg-shiv-sidebar/50">
            <h3 className="font-black text-shiv-text-primary uppercase tracking-[0.2em] text-xs italic">Neural Comms Inbox</h3>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {threads.map((t, i) => (
              <div key={i} className={`p-8 border-b border-shiv-border cursor-pointer hover:bg-shiv-card-hover transition-all group ${t.unread ? 'bg-shiv-primary/5' : ''}`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-black text-shiv-text-primary uppercase tracking-tight text-sm">{t.from}</span>
                  <span className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em]">{t.time}</span>
                </div>
                <p className="text-xs text-shiv-text-secondary truncate font-bold group-hover:text-shiv-text-primary transition-colors">{t.subject}</p>
                {t.unread && <div className="mt-2 w-1.5 h-1.5 bg-shiv-primary rounded-full shadow-[0_0_10px_#FF8A00]"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 bg-shiv-card rounded-[2.5rem] border border-shiv-border shadow-2xl overflow-hidden flex flex-col">
          <div className="p-8 border-b border-shiv-border flex items-center justify-between bg-shiv-sidebar/30">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-shiv-primary/10 border border-shiv-primary/20 rounded-2xl flex items-center justify-center text-shiv-primary shadow-lg shadow-black/20">
                <User size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-shiv-text-primary uppercase tracking-wider italic">Strategic Ops Command</span>
                <span className="text-[10px] font-black text-success uppercase tracking-[0.2em]">Link Secure</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-10 bg-shiv-bg-secondary/20 space-y-8 overflow-y-auto">
            <div className="flex justify-end">
              <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-6 rounded-[2rem] rounded-tr-none max-w-[75%] shadow-2xl">
                <p className="text-xs font-bold leading-loose tracking-wide">Initializing request for updated <span className="text-shiv-primary">METAR data</span> for arrival vector at JFK. Confirming window sync.</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-shiv-card border border-shiv-border p-6 rounded-[2rem] rounded-tl-none max-w-[75%] shadow-2xl relative">
                <p className="text-xs font-bold leading-loose tracking-wide text-shiv-text-secondary">Request acknowledged. Syncing tactical weather array now. High visibility confirmed for destination vector.</p>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-shiv-border bg-shiv-sidebar/20">
            <div className="flex gap-5">
              <input 
                type="text" 
                placeholder="Transmit encrypted signal..." 
                className="flex-1 bg-shiv-bg-secondary border border-shiv-border rounded-2xl px-8 py-4 text-xs font-bold text-shiv-text-primary focus:outline-none focus:border-shiv-primary focus:ring-1 focus:ring-shiv-primary/30 transition-all placeholder:text-shiv-muted/50"
              />
              <button className="bg-shiv-primary text-shiv-bg p-4 rounded-2xl hover:bg-shiv-primary-hover hover:scale-105 active:scale-95 transition-all shadow-lg shadow-shiv-primary/20">
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
