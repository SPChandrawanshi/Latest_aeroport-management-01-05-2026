import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Search, Plane, Clock, Filter, Activity, ArrowRight } from 'lucide-react';

const FlightAvailability = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Inventory Pulse">
      <div className="space-y-6 animate-in fade-in duration-700">
         <div className="shiv-perfect-card p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 w-full relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0a3d62] transition-colors" size={20} />
               <input 
                 type="text" 
                 placeholder="Route: e.g. LHR - JFK" 
                 className="w-full pl-12 pr-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-xl text-[14px] font-bold uppercase tracking-widest focus:border-[#0a3d62] outline-none transition-all placeholder:text-slate-300" 
               />
            </div>
            <button className="bg-[#0a3d62] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-[#0c4a75] shadow-xl transition-all w-full md:w-auto">
              AUDIT INVENTORY PROTOCOL
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { route: 'LHR → JFK', seats: '12 Left', price: '$840', type: 'Intl' },
              { route: 'SIN → DXB', seats: 'Sold Out', price: '$1,200', type: 'Intl' },
              { route: 'CDG → LHR', seats: '104 Left', price: '$120', type: 'Reg' },
            ].map((f, i) => (
              <div key={i} className="shiv-perfect-card p-6 sm:p-8 group relative overflow-hidden">
                 <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-[#0a3d62] group-hover:bg-[#FF8A00] group-hover:text-white transition-all duration-500 shadow-sm">
                        <Plane size={20} className="group-hover:rotate-12 transition-transform" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-md">{f.type}</span>
                 </div>
                 <h4 className="text-[20px] font-bold tracking-tighter mb-2 text-[#0a3d62] uppercase relative z-10">{f.route}</h4>
                 <div className="flex justify-between items-end mt-6 pt-6 border-t-2 border-slate-50 relative z-10">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${f.seats === 'Sold Out' ? 'text-red-500' : 'text-slate-400'}`}>{f.seats}</span>
                    <span className="text-[24px] font-bold text-[#0a3d62] tracking-tighter leading-none">{f.price}</span>
                 </div>
                 <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#0a3d62] translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform duration-1000">
                   <Plane size={150} />
                 </div>
              </div>
            ))}
         </div>

         <div className="shiv-tinted-panel p-6 flex items-center justify-between group">
            <div className="flex items-center gap-4">
                <Activity className="text-[#FF8A00]" size={20} />
                <p className="text-[11px] font-bold text-[#0a3d62] uppercase tracking-widest">Global Seat Inventory Synchronized with GDS</p>
            </div>
            <button className="text-[#0a3d62] font-bold text-[10px] uppercase tracking-widest border-b-2 border-transparent hover:border-[#0a3d62] transition-all flex items-center gap-2">
                Sync Details <ArrowRight size={12} />
            </button>
         </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightAvailability;
