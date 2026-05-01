import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { Plane, Activity, Map, AlertCircle, ArrowRight } from 'lucide-react';

const FlightTracking = ({ menus }) => {
  const activeFlights = [
    { callsign: 'QA-202', status: 'En Route', altitude: '36,000 FT', speed: '480 KTS', position: 'Over Atlantic' },
    { callsign: 'QA-501', status: 'Boarding', altitude: '0 FT', speed: '0 KTS', position: 'LHR Gate B12' },
    { callsign: 'QA-112', status: 'En Route', altitude: '28,000 FT', speed: '320 KTS', position: 'Over France' },
  ];

  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Global Flight Tracking">
      <div className="space-y-10 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
           <div className="lg:col-span-3 shiv-perfect-card p-10 group">
             <h3 className="text-[24px] font-black text-[#0a3d62] uppercase tracking-tighter mb-10 border-b-2 border-slate-50 pb-6 flex items-center justify-between relative z-10">
               <div className="flex items-center gap-4">
                 <Map size={32} className="text-[#0a3d62]" />
                 Neural Position Matrix
               </div>
               <ArrowRight size={20} className="text-slate-300" />
             </h3>
             <Table 
               headers={['Callsign', 'Mission Status', 'Altitude', 'Ground Speed', 'Position Vector']}
               data={activeFlights.map(f => ({
                 ...f,
                 callsign: <span className="font-black text-[#0a3d62] italic tracking-tighter uppercase">{f.callsign}</span>,
                 status: (
                   <span className={`px-4 py-1.5 rounded-lg border-2 text-[10px] font-black uppercase tracking-widest ${
                     f.status === 'En Route' ? 'bg-blue-50 text-[#0a3d62] border-blue-100' : 'bg-slate-50 text-slate-400 border-slate-100'
                   }`}>
                     {f.status}
                   </span>
                 )
               }))}
             />
           </div>
           <div className="shiv-perfect-card p-10 flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#0a3d62] rounded-2xl flex items-center justify-center text-white shadow-xl mb-8 group-hover:rotate-6 transition-all duration-500">
                  <Activity size={32} />
                </div>
                <h4 className="text-[48px] font-black italic tracking-tighter mb-2 text-[#0a3d62] leading-none">1,248</h4>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Daily Air Movements</p>
              </div>
              <div className="relative z-10 mt-10">
                <Chart data={[20, 45, 30, 80, 50, 90, 70]} height={120} color="#FF8A00" />
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
                <Activity size={200} />
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightTracking;
