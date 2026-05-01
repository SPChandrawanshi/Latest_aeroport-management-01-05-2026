import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Settings, Package, Search, PlusCircle } from 'lucide-react';

const SpareParts = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Inventory Control">
      <div className="space-y-6 animate-in fade-in duration-700">
        <div 
          style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
          className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#0a3d62]/10"
        >
           <div className="flex flex-wrap justify-between items-center gap-6 mb-10">
              <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest flex items-center gap-3">
                <Package size={20} className="text-[#FF8A00]" />
                Strategic Material Reserves
              </h3>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative group flex-1 md:flex-none">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0a3d62] transition-colors" size={16} />
                    <input 
                        type="text" 
                        placeholder="Scan SKU Code..." 
                        className="pl-12 pr-6 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-[11px] font-bold uppercase tracking-widest focus:border-[#0a3d62] outline-none transition-all placeholder:text-slate-400 w-full md:w-64" 
                    />
                </div>
                <button className="p-3 bg-[#0a3d62] text-white rounded-xl shadow-lg hover:bg-[#0c4a75] transition-all">
                    <PlusCircle size={20} />
                </button>
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
               id: <span className="font-bold text-[#0a3d62]">{p.id}</span>,
               qty: <span className="font-bold text-[#0a3d62]">{p.qty}</span>,
               status: (
                 <span className={`px-4 py-1.5 rounded-lg border-2 text-[10px] font-bold uppercase tracking-widest ${
                   p.status === 'Critical' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                 }`}>
                   {p.status}
                 </span>
               )
             }))}
           />
        </div>

        <div 
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: 'rgba(248, 194, 145, 0.18)' }}
            className="p-6 rounded-2xl border-2 border-[#0a3d62]/10 flex flex-wrap items-center justify-between gap-6"
        >
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#FF8A00] border-2 border-[#0a3d62]/10 shadow-sm">
                    <Settings size={24} className="animate-spin-slow" />
                </div>
                <div>
                    <h4 className="text-[13px] font-bold text-[#0a3d62] uppercase tracking-wider mb-1">Global Stock Efficiency: 94.2%</h4>
                    <p className="text-[11px] text-slate-600 font-medium uppercase leading-tight">Automated reordering protocol active for 12 strategic components.</p>
                </div>
            </div>
            <button className="px-6 py-3 bg-white border-2 border-[#0a3d62]/10 text-[#0a3d62] rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all">
                Inventory Audit
            </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SpareParts;
