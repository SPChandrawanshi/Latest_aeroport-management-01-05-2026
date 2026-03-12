import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Plane, MapPin, Clock, Navigation } from 'lucide-react';

const FlightStatus = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Live Flight Tracking">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 animate-in fade-in duration-700">
        <div className="lg:col-span-2">
           <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl mb-8 relative overflow-hidden group">
              <div className="flex justify-between items-center mb-10 relative z-10">
                 <div className="flex items-center gap-6">
                    <div className="bg-info/10 p-4 rounded-2xl text-info border border-info/20 group-hover:scale-110 transition-transform duration-500"><Plane size={32} /></div>
                    <div>
                      <h4 className="text-xl font-black text-shiv-text-primary italic tracking-tighter">MISSION: QA-501</h4>
                      <p className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em]">En Route Vector: JFK</p>
                    </div>
                 </div>
                 <div className="text-right">
                    <p className="text-4xl font-black text-shiv-text-primary italic tracking-tight">2h 45m</p>
                    <p className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em]">Temporal Delta</p>
                 </div>
              </div>

              <div className="relative pt-16 pb-16 relative z-10">
                 <div className="h-1 bg-shiv-bg-secondary rounded-full w-full relative border border-shiv-border/30">
                    <div className="absolute top-0 left-0 h-full bg-shiv-primary w-[65%] rounded-full relative shadow-[0_0_20px_rgba(255,138,0,0.3)]">
                       <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 p-3 bg-shiv-primary rounded-full text-shiv-text-primary shadow-2xl scale-125 rotate-90 border border-white/20">
                         <Plane size={20} />
                       </div>
                    </div>
                 </div>
                 <div className="absolute top-12 left-0 flex flex-col items-center -translate-x-1/2">
                    <div className="w-5 h-5 rounded-full border-4 border-shiv-card bg-shiv-muted shadow-lg"></div>
                    <span className="mt-4 text-[10px] font-black text-shiv-text-primary uppercase tracking-widest italic">LHR</span>
                 </div>
                 <div className="absolute top-12 right-0 flex flex-col items-center translate-x-1/2">
                    <div className="w-5 h-5 rounded-full border-4 border-shiv-card bg-shiv-muted shadow-lg"></div>
                    <span className="mt-4 text-[10px] font-black text-shiv-text-primary uppercase tracking-widest italic">JFK</span>
                 </div>
              </div>

              <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none">
                <Plane size={300} />
              </div>
           </div>
        </div>

        <div className="space-y-8">
           <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <h3 className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em] mb-10 border-b border-shiv-border/50 pb-6 flex items-center gap-4">
                 <Navigation size={16} className="text-shiv-primary" />
                 Tactical Telemetry
              </h3>
              <div className="space-y-8 relative z-10">
                 {[
                   { label: 'Altitude Vector', val: '38,000 FT', icon: <Navigation size={20} className="text-shiv-primary" /> },
                   { label: 'Neural Velocity', val: '512 KTS', icon: <Clock size={20} className="text-shiv-primary" /> },
                   { label: 'Geo Location', val: 'Over Atlantic', icon: <MapPin size={20} className="text-shiv-primary" /> },
                 ].map((d, i) => (
                   <div key={i} className="flex items-center justify-between border-b border-shiv-border/30 pb-6 group/item hover:border-shiv-primary/30 transition-all">
                      <div className="flex items-center gap-4">
                         {d.icon}
                         <span className="text-[10px] font-black text-shiv-muted uppercase tracking-widest">{d.label}</span>
                      </div>
                      <span className="font-black italic tracking-tighter text-shiv-text-primary text-lg">{d.val}</span>
                   </div>
                 ))}
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-[0.02]">
                <Navigation size={200} />
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightStatus;
