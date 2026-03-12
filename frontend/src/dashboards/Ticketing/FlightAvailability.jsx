import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Search, Plane, Clock, Filter } from 'lucide-react';

const FlightAvailability = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Inventory Pulse">
      <div className="space-y-10 animate-in fade-in duration-700">
         <div className="bg-shiv-card p-12 rounded-[3rem] border border-shiv-border shadow-2xl flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 w-full relative group">
               <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-shiv-muted group-focus-within:text-shiv-primary transition-colors" size={24} />
               <input 
                 type="text" 
                 placeholder="Route: e.g. LHR - JFK" 
                 className="w-full pl-20 pr-10 py-6 bg-shiv-bg-secondary border border-shiv-border rounded-3xl text-xl font-black italic uppercase tracking-tighter focus:border-shiv-primary focus:ring-1 focus:ring-shiv-primary/30 outline-none transition-all placeholder:text-shiv-muted/50" 
               />
            </div>
            <button className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary px-12 py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-shiv-card-hover hover:border-shiv-primary/50 shadow-2xl transition-all">
              AUDIT INVENTORY PROTOCOL
            </button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { route: 'LHR → JFK', seats: '12 Left', price: '$840', type: 'Intl' },
              { route: 'SIN → DXB', seats: 'Sold Out', price: '$1,200', type: 'Intl' },
              { route: 'CDG → LHR', seats: '104 Left', price: '$120', type: 'Reg' },
            ].map((f, i) => (
              <div key={i} className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl hover:border-shiv-primary/40 transition-all hover:bg-shiv-card-hover group relative overflow-hidden">
                 <div className="flex justify-between items-start mb-8 relative z-10">
                    <Plane className="text-shiv-primary group-hover:rotate-12 transition-transform duration-500" size={32} />
                    <span className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em]">{f.type}</span>
                 </div>
                 <h4 className="text-3xl font-black italic tracking-tighter mb-4 text-shiv-text-primary uppercase relative z-10">{f.route}</h4>
                 <div className="flex justify-between items-center mt-8 pt-8 border-t border-shiv-border/50 relative z-10">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${f.seats === 'Sold Out' ? 'text-error' : 'text-shiv-muted'}`}>{f.seats}</span>
                    <span className="text-3xl font-black text-shiv-text-primary italic">{f.price}</span>
                 </div>
                 <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12">
                   <Plane size={150} />
                 </div>
              </div>
            ))}
         </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightAvailability;
