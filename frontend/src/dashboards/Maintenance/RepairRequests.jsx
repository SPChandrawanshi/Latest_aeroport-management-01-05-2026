import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Form from '../../components/Form';
import { AlertCircle, Wrench, Send } from 'lucide-react';

const RepairRequests = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Technical Request Portal">
      <div className="max-w-4xl animate-in fade-in duration-700">
         <div className="bg-shiv-card p-12 rounded-[3rem] border border-shiv-border shadow-2xl relative overflow-hidden group">
            <div className="flex items-center gap-10 mb-12 border-b border-shiv-border/50 pb-12 relative z-10">
               <div className="w-24 h-24 bg-shiv-primary/10 rounded-3xl flex items-center justify-center text-shiv-primary border border-shiv-primary/20 shadow-lg shadow-black/20 group-hover:rotate-12 transition-transform duration-500">
                  <Wrench size={48} />
               </div>
               <div>
                 <h3 className="text-4xl font-black text-shiv-text-primary tracking-tighter italic uppercase">INITIATE REPAIR</h3>
                 <p className="text-[10px] text-shiv-muted font-black uppercase tracking-[0.4em]">Asset Maintenance Directive • NODE 771</p>
               </div>
            </div>

            <div className="relative z-10">
              <Form 
                fields={[
                  { label: 'Strategic Asset ID', type: 'text', placeholder: 'e.g. N104BK' },
                  { label: 'Subsystem Fault Vector', type: 'select', options: ['Hydraulic', 'Electrical', 'Pneumatic', 'Avionics', 'Structural'] },
                  { label: 'Tactical Priority', type: 'select', options: ['AOG - Urgent', 'Check Next Station', 'Deferred'] },
                ]}
                onSubmit={() => {}}
              />
            </div>

            <button className="w-full mt-12 py-6 bg-shiv-sidebar border border-shiv-border text-shiv-text-primary rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-shiv-card-hover hover:border-shiv-primary/50 transition-all flex items-center justify-center gap-4 group/btn relative z-10 overflow-hidden">
              <span className="relative z-10">AUTHORIZE REPAIR PROTOCOL</span>
              <Send size={18} className="relative z-10 group-hover/btn:translate-x-3 group-hover/btn:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-shiv-primary/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
            </button>

            <div className="absolute top-0 right-0 p-8 opacity-[0.02] translate-x-20 -translate-y-20">
              <Wrench size={300} />
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
};

export default RepairRequests;
