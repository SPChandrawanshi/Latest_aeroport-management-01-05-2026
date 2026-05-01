import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Wind, Cloud, CloudRain, Sun, Thermometer, Navigation, ShieldCheck } from 'lucide-react';

const WeatherReports = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Weather Briefing">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-700">
        <div className="lg:col-span-2 space-y-6">
          <div className="shiv-perfect-card p-6 sm:p-8">
            <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest mb-6 flex items-center gap-3">
              <Navigation size={20} className="text-[#FF8A00]" />
              Neural Radar Array
            </h3>
            <div className="aspect-video rounded-xl relative overflow-hidden flex items-center justify-center border-2 border-[#0a3d62]/10 group shadow-inner bg-slate-50">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590059132718-568eaefe9eb4?auto=format&fit=crop&q=80')] bg-cover opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
               <div className="relative text-[#0a3d62] font-bold uppercase text-[24px] tracking-[0.5em] drop-shadow-sm">Scanning Area...</div>
               <div className="absolute top-0 left-0 w-full h-1 bg-[#FF8A00] animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="shiv-perfect-card p-6 sm:p-8">
            <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8 border-b-2 border-slate-50 pb-4">Current METAR Logic</h3>
            <div className="space-y-6">
              {[
                { label: 'Temperature', val: '14°C', icon: <Thermometer size={18} />, color: 'text-blue-500' },
                { label: 'Wind Velocity', val: '12 kts @ 210°', icon: <Wind size={18} />, color: 'text-[#FF8A00]' },
                { label: 'Visibility', val: '>10 NM', icon: <Sun size={18} />, color: 'text-amber-500' },
                { label: 'Pressure', val: '1013 hPa', icon: <ShieldCheck size={18} />, color: 'text-green-500' },
              ].map((w, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg border-2 border-slate-50 group-hover:border-[#0a3d62]/20 transition-all bg-slate-50 text-[#0a3d62]">
                        {w.icon}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">{w.label}</span>
                  </div>
                  <span className="font-bold text-[#0a3d62] text-[14px]">{w.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="shiv-tinted-panel p-6 sm:p-8 relative overflow-hidden group">
             <h4 className="text-[14px] font-bold text-[#0a3d62] mb-4 flex items-center gap-3 uppercase tracking-tighter">
               <CloudRain className="text-[#FF8A00]" size={20} />
               Vector Advisory: JFK
             </h4>
             <p className="text-[11px] text-slate-600 font-bold leading-relaxed tracking-wide uppercase">
               "Scattered showers detected near destination vector between <span className="text-[#FF8A00]">16:00 - 19:00 UTC</span>. Potential for moderate turbulence at <span className="text-[#0a3d62] underline decoration-2 decoration-[#0a3d62]/20 underline-offset-4">FL320</span>."
             </p>
             <div className="absolute -bottom-6 -right-6 opacity-[0.05] text-[#0a3d62] group-hover:scale-110 transition-transform duration-700">
               <CloudRain size={100} />
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WeatherReports;
