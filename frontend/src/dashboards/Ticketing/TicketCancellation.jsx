import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { X, Calendar, AlertCircle } from 'lucide-react';

const TicketCancellation = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Refund & Void Operations">
      <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl animate-in fade-in duration-700 max-w-5xl relative overflow-hidden group">
         <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-12 border-b border-shiv-border/50 pb-10 flex items-center gap-4 italic font-sans relative z-10">
           <X size={28} className="text-error group-hover:rotate-180 transition-transform duration-500" />
           Tactical Void Operations
         </h3>
         <Table 
           headers={['Reference ID', 'Passenger', 'Flight', 'Amount', 'Reason', 'Status']}
           data={[
             { id: 'REF-001', name: 'J. Doe', flight: 'QA-501', amt: '$840.00', reason: 'Schedule Change', status: <span className="text-success font-black uppercase text-[10px] tracking-widest">Processed</span> },
             { id: 'REF-002', name: 'M. Smith', flight: 'QA-221', amt: '$120.00', reason: 'No-show', status: <span className="text-warning font-black uppercase text-[10px] tracking-widest">Reviewing</span> },
           ].map(row => ({
             ...row,
             id: <span className="font-black text-shiv-text-primary italic">{row.id}</span>,
             amt: <span className="font-bold text-shiv-text-secondary">{row.amt}</span>
           }))}
         />
         <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12">
            <X size={250} />
         </div>
      </div>
    </DashboardLayout>
  );
};

export default TicketCancellation;
