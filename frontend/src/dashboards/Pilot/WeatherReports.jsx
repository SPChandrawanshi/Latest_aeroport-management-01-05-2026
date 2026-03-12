import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Wind, Cloud, CloudRain, Sun, Thermometer, Navigation } from 'lucide-react';

const WeatherReports = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Weather Briefing">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in duration-700">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 italic">Neural Radar Array</h3>
            <div className="aspect-video bg-shiv-bg-secondary rounded-3xl relative overflow-hidden flex items-center justify-center border border-shiv-border group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590059132718-568eaefe9eb4?auto=format&fit=crop&q=80')] bg-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-shiv-bg via-transparent to-transparent"></div>
               <div className="relative text-shiv-primary font-black uppercase text-3xl tracking-[1.2em] italic drop-shadow-2xl">Scanning...</div>
               <div className="absolute top-0 left-0 w-full h-1 bg-shiv-primary/40 animate-scan"></div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
            <h3 className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em] mb-8 italic">Current METAR Logic</h3>
            <div className="space-y-8">
              {[
                { label: 'Temperature', val: '14°C', icon: <Thermometer className="text-shiv-primary" /> },
                { label: 'Wind Velocity', val: '12 kts @ 210°', icon: <Wind className="text-info" /> },
                { label: 'Visibility', val: '>10 NM', icon: <Sun className="text-warning" /> },
                { label: 'Pressure', val: '1013 hPa', icon: <Navigation className="text-success" /> },
              ].map((w, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-shiv-bg-secondary rounded-xl border border-shiv-border group-hover:scale-110 transition-transform">{w.icon}</div>
                    <span className="text-xs font-black uppercase tracking-[0.1em] text-shiv-text-secondary">{w.label}</span>
                  </div>
                  <span className="font-black text-shiv-text-primary tracking-tighter text-lg italic">{w.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
             <h4 className="text-xl font-black mb-6 flex items-center gap-4 italic uppercase tracking-tighter">
               <CloudRain className="text-shiv-primary" size={24} />
               Vector Advisory: JFK
             </h4>
             <p className="text-xs text-shiv-text-secondary font-bold leading-loose tracking-wide italic">
               "Scattered showers detected near destination vector between <span className="text-shiv-primary">16:00 - 19:00 UTC</span>. Potential for moderate turbulence at <span className="text-shiv-text-primary underline decoration-shiv-primary/30">FL320</span>."
             </p>
             <div className="absolute -top-10 -right-10 opacity-[0.03]">
               <CloudRain size={120} />
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WeatherReports;
