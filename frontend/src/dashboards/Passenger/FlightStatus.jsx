import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Plane, MapPin, Clock, Navigation } from 'lucide-react';

const FlightStatus = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Live Flight Tracking">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="lg:col-span-2">
           <div className="shiv-perfect-card p-10 group relative overflow-hidden">
              <div className="flex justify-between items-center mb-12 relative z-10">
                 <div className="flex items-center gap-6">
                    <div className="bg-[#0a3d62] p-4 rounded-2xl text-white shadow-xl group-hover:rotate-6 transition-all duration-500">
                      <Plane size={32} />
                    </div>
                    <div>
                      <h4 className="text-[24px] font-black text-[#0a3d62] italic tracking-tighter uppercase leading-none mb-2">MISSION: QA-501</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">En Route Vector: JFK</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-[42px] font-black text-[#0a3d62] italic tracking-tight leading-none mb-1">2h 45m</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Temporal Delta</p>
                 </div>
              </div>

              <div className="relative pt-16 pb-16 z-10 px-6">
                 <div className="h-2 bg-slate-50 rounded-full w-full relative border-2 border-slate-100">
                    <div className="absolute top-0 left-0 h-full bg-[#FF8A00] w-[65%] rounded-full relative shadow-[0_0_20px_rgba(255,138,0,0.4)]">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 p-3.5 bg-white border-2 border-[#0a3d62] rounded-full text-[#0a3d62] shadow-2xl scale-125 rotate-90 group-hover:bg-[#0a3d62] group-hover:text-white transition-all duration-500">
                          <Plane size={18} />
                        </div>
                    </div>
                 </div>
                 <div className="absolute top-14 left-6 flex flex-col items-center -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full border-4 border-white bg-[#0a3d62] shadow-xl"></div>
                    <span className="mt-4 text-[11px] font-black text-[#0a3d62] uppercase tracking-widest italic">LHR</span>
                 </div>
                 <div className="absolute top-14 right-6 flex flex-col items-center translate-x-1/2">
                    <div className="w-6 h-6 rounded-full border-4 border-white bg-slate-200 shadow-lg"></div>
                    <span className="mt-4 text-[11px] font-black text-[#0a3d62] uppercase tracking-widest italic">JFK</span>
                 </div>
              </div>

              <div className="absolute -bottom-20 -right-20 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <Plane size={400} />
              </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="shiv-perfect-card p-8 relative overflow-hidden group">
              <h3 className="text-[11px] font-black text-[#0a3d62] uppercase tracking-[0.3em] mb-10 border-b-2 border-slate-50 pb-6 flex items-center gap-4">
                 <Navigation size={18} className="text-[#FF8A00]" />
                 Tactical Telemetry
              </h3>
              <div className="space-y-6 relative z-10">
                 {[
                   { label: 'Altitude Vector', val: '38,000 FT', icon: <Navigation size={20} className="text-[#0a3d62]" /> },
                   { label: 'Neural Velocity', val: '512 KTS', icon: <Clock size={20} className="text-[#0a3d62]" /> },
                   { label: 'Geo Location', val: 'Over Atlantic', icon: <MapPin size={20} className="text-[#0a3d62]" /> },
                 ].map((d, i) => (
                   <div key={i} className="shiv-tinted-panel p-5 flex items-center justify-between border-2 hover:border-[#0a3d62] transition-all">
                      <div className="flex items-center gap-4">
                         {d.icon}
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{d.label}</span>
                      </div>
                      <span className="font-black italic tracking-tighter text-[#0a3d62] text-[16px] uppercase leading-none">{d.val}</span>
                   </div>
                 ))}
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[#0a3d62] group-hover:scale-125 transition-transform duration-1000">
                <Navigation size={200} />
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightStatus;
