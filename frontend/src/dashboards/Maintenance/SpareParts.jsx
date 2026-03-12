import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Settings, Package, Search } from 'lucide-react';

const SpareParts = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Inventory Control">
      <div className="space-y-10 animate-in fade-in duration-700">
        <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
           <div className="flex justify-between items-center mb-12">
              <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] flex items-center gap-4 italic font-sans">
                <Package size={24} className="text-shiv-primary" />
                Strategic Material Reserves
              </h3>
              <div className="relative group">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-shiv-muted group-focus-within:text-shiv-primary transition-colors" size={20} />
                 <input 
                   type="text" 
                   placeholder="Scan SKU Code..." 
                   className="pl-14 pr-8 py-4 bg-shiv-bg-secondary border border-shiv-border rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] focus:border-shiv-primary focus:ring-1 focus:ring-shiv-primary/30 outline-none transition-all placeholder:text-shiv-muted/50 w-full md:w-72" 
                 />
              </div>
           </div>
           <Table 
             headers={['Part ID', 'Description', 'Warehouse', 'Stock Level', 'Reorder Status']}
             data={[
               { id: 'PN-8821', desc: 'B787 Brake Assembly', loc: 'Global Hub A', qty: '12', status: 'Optimal' },
               { id: 'PN-4040', desc: 'A350 Fan Blade', loc: 'Global Hub B', qty: '2', status: 'Critical' },
               { id: 'PN-1122', desc: 'Hydraulic Seal Kit', loc: 'LHR Hangar', qty: '84', status: 'Optimal' },
             ].map(p => ({
               ...p,
               id: <span className="font-black text-shiv-text-primary italic">{p.id}</span>,
               qty: <span className="font-bold text-shiv-text-primary">{p.qty}</span>,
               status: (
                 <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                   p.status === 'Critical' ? 'bg-error/10 text-error border-error/20' : 'bg-success/10 text-success border-success/20'
                 }`}>
                   {p.status}
                 </span>
               )
             }))}
           />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SpareParts;
