import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { X, Calendar, AlertCircle, Play } from 'lucide-react';

const TicketCancellation = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Refund & Void Operations">
      <div className="shiv-perfect-card p-10 animate-in fade-in duration-700 max-w-6xl mx-auto relative overflow-hidden group">
         <h3 className="text-[24px] font-black text-[#0a3d62] uppercase tracking-tighter mb-12 border-b-2 border-slate-50 pb-10 flex items-center gap-6 relative z-10">
           <X size={32} className="text-red-500 group-hover:rotate-90 transition-transform duration-500" />
           Tactical Void Operations
         </h3>
         <Table 
           headers={['Reference ID', 'Passenger', 'Flight', 'Amount', 'Reason', 'Status', 'Operation']}
           data={[
             { id: 'REF-001', name: 'J. Doe', flight: 'QA-501', amt: '$840.00', reason: 'Schedule Change', status: <span className="text-emerald-600 font-black uppercase text-[10px] tracking-widest">Processed</span> },
             { id: 'REF-002', name: 'M. Smith', flight: 'QA-221', amt: '$120.00', reason: 'No-show', status: <span className="text-amber-600 font-black uppercase text-[10px] tracking-widest">Reviewing</span> },
           ].map(row => ({
             ...row,
             id: <span className="font-black text-[#0a3d62] italic">{row.id}</span>,
             amt: <span className="font-bold text-slate-500">{row.amt}</span>,
             operation: (
               <button className="bg-[#0a3d62] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-red-600 transition-all border-2 border-transparent hover:border-[#0a3d62] shadow-md">
                 Execute <Play size={10} fill="currentColor" />
               </button>
             )
           }))}
         />
         <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <X size={300} />
         </div>
      </div>
    </DashboardLayout>
  );
};

export default TicketCancellation;
