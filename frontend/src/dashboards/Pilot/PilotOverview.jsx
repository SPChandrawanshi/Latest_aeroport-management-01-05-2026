import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { Plane, Clock, ShieldCheck, MapPin, Wind, Map, Activity, Globe, ArrowRight } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';

const PilotOverview = ({ menus }) => {
  const { addNotification } = useNotification();
  
  const pilotStats = [
    { title: 'Total Hours', value: '12,450', change: '+45h', icon: <Clock size={22} />, trend: 'up' },
    { title: 'Current Flight', value: 'PA-202', change: 'En Route', icon: <Plane size={22} />, trend: 'up' },
    { title: 'Next Briefing', value: '08:30 AM', change: 'In 2 Hours', icon: <ShieldCheck size={22} />, trend: 'up' },
    { title: 'Destinations', value: '42', change: 'Global', icon: <Globe size={22} />, trend: 'up' },
  ];

  const upcomingFlights = [
    { callsign: 'SKY-441', origin: 'London (LHR)', destination: 'New York (JFK)', gate: 'B12', departure: '10:45' },
    { callsign: 'SKY-902', origin: 'Paris (CDG)', destination: 'Tokyo (NRT)', gate: 'C05', departure: '14:20' },
    { callsign: 'SKY-112', origin: 'Dubai (DXB)', destination: 'London (LHR)', gate: 'A08', departure: '18:10' },
  ];

  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Pilot Flight Deck">
      <div className="space-y-8 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilotStats.map((s, i) => (
            <div key={i} onClick={() => addNotification(`Fetching logs for: ${s.title}`, 'info')} className="cursor-pointer h-full">
              <DashboardCard {...s} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="shiv-perfect-card p-6 sm:p-8">
              <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest mb-8 border-b-2 border-slate-50 pb-4 flex items-center justify-between">
                Vector Assignments
                <ArrowRight size={16} className="text-slate-300" />
              </h3>
              <Table 
                headers={['Callsign', 'Origin', 'Destination', 'Gate', 'Departure']} 
                data={upcomingFlights}
              />
            </div>
          </div>

          <div className="shiv-perfect-card p-8 space-y-8 group relative overflow-hidden">
            <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest flex items-center gap-3 border-b-2 border-slate-50 pb-4">
              <Wind size={20} className="text-[#FF8A00]" />
              Meteorological Brief
            </h3>
            <div className="space-y-6 relative z-10">
              <div className="shiv-tinted-panel p-5 group/item border-2 hover:border-[#0a3d62]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0a3d62] rounded-xl flex items-center justify-center text-white shadow-lg group-hover/item:rotate-6 transition-all">
                    <Plane size={24} />
                  </div>
                  <div>
                    <p className="font-black text-[#0a3d62] tracking-tighter uppercase text-[13px]">VECTOR: LHR → JFK</p>
                    <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mt-1">ALT: 36,000 FT // OPTIMAL</p>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-3 border-t-2 border-white/20">
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Zenith Status</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Vis: 10NM CAVOK</span>
                </div>
              </div>
              
              <div className="p-5 bg-amber-50/50 rounded-2xl border-2 border-amber-100 border-dashed group-hover:border-amber-200 transition-colors">
                <p className="text-[9px] font-black text-[#FF8A00] uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                  <Activity size={14} /> METAR Intelligence
                </p>
                <p className="text-[12px] text-slate-600 leading-relaxed font-bold uppercase italic">
                  "Light crosswinds detected on JFK 04R approach vector. Wind velocity 08G12KT. Stabilized approach recommended."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
               <Wind size={200} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PilotOverview;
