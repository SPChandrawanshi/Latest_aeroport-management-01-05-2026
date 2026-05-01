import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Form from '../../components/Form';
import { AlertCircle, Wrench, Send, ShieldCheck } from 'lucide-react';

const RepairRequests = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Technical Request Portal">
      <div className="max-w-4xl animate-in fade-in duration-700 mx-auto">
         <div className="shiv-perfect-card p-8 sm:p-10 relative overflow-hidden group">
            <div className="flex items-center gap-8 mb-10 border-b-2 border-slate-50 pb-10 relative z-10">
               <div className="w-16 h-16 bg-[#0a3d62] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-[#FF8A00] transition-colors">
                  <Wrench size={32} />
               </div>
               <div>
                 <h3 className="text-[28px] font-bold text-[#0a3d62] tracking-tighter uppercase leading-none mb-1">INITIATE REPAIR</h3>
                 <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Asset Maintenance Directive • NODE 771</p>
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

            <button className="w-full mt-10 py-4 bg-[#0a3d62] text-white rounded-xl font-bold uppercase tracking-widest text-[12px] shadow-xl hover:bg-[#0c4a75] transition-all flex items-center justify-center gap-4 relative z-10 overflow-hidden group/btn">
               <span className="relative z-10">AUTHORIZE REPAIR PROTOCOL</span>
               <Send size={18} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
            </button>

            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#0a3d62] translate-x-12 -translate-y-12">
              <Wrench size={250} />
            </div>
         </div>

         {/* Warning Panel */}
         <div className="shiv-tinted-panel mt-6 p-6 flex items-center gap-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 border-2 border-amber-100 shadow-sm">
                <AlertCircle size={24} />
            </div>
            <div>
                <h4 className="text-[13px] font-bold text-[#0a3d62] uppercase tracking-wider mb-1">Safety Clearance Required</h4>
                <p className="text-[11px] text-slate-600 font-medium">All repair protocols must be verified by a Level-3 engineer before asset deployment.</p>
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
};

export default RepairRequests;
