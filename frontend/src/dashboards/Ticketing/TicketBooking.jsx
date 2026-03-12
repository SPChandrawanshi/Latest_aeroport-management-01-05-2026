import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Form from '../../components/Form';
import { Ticket, Plus, Tag } from 'lucide-react';

const TicketBooking = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Passenger Manifest Control">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-in fade-in duration-700">
        <div className="lg:col-span-2">
           <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl relative overflow-hidden group">
              <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-12 flex items-center gap-4 italic font-sans relative z-10">
                <Plus size={28} className="text-shiv-primary group-hover:rotate-90 transition-transform duration-500" />
                Strategic Manifest Input
              </h3>
              <div className="relative z-10">
                <Form 
                  fields={[
                    { label: 'Neural Identity', type: 'text', placeholder: 'Enter full name' },
                    { label: 'Origin Vector', type: 'text', placeholder: 'e.g. LHR' },
                    { label: 'Mission Vector', type: 'text', placeholder: 'e.g. SIN' },
                    { label: 'Tactical Tier', type: 'select', options: ['Economy', 'Premium', 'Business', 'First'] },
                  ]}
                  onSubmit={() => {}}
                />
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12">
                <Ticket size={250} />
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden group">
              <Tag size={40} className="text-shiv-primary mb-8 group-hover:-rotate-12 transition-transform" />
              <h4 className="text-3xl font-black italic tracking-tighter mb-2 uppercase">DIRECTIVE: GLOBAL26</h4>
              <p className="text-shiv-muted text-[10px] font-black uppercase tracking-[0.2em]">Active Neural Channel Promo</p>
              <div className="mt-10 pt-10 border-t border-shiv-border/50 space-y-6">
                 <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <span className="text-shiv-muted">Economy Base</span>
                    <span className="text-success italic font-black text-lg">$442.00</span>
                 </div>
                 <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                    <span className="text-shiv-muted">Premium Delta</span>
                    <span className="text-success italic font-black text-lg">$890.00</span>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-[0.02]">
                <Tag size={200} />
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TicketBooking;
