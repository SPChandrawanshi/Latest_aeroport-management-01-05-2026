import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { Plane, Activity, Map, AlertCircle } from 'lucide-react';

const FlightTracking = ({ menus }) => {
  const activeFlights = [
    { callsign: 'QA-202', status: 'En Route', altitude: '36,000 FT', speed: '480 KTS', position: 'Over Atlantic' },
    { callsign: 'QA-501', status: 'Boarding', altitude: '0 FT', speed: '0 KTS', position: 'LHR Gate B12' },
    { callsign: 'QA-112', status: 'En Route', altitude: '28,000 FT', speed: '320 KTS', position: 'Over France' },
  ];

  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Global Flight Tracking">
      <div className="space-y-10 animate-in fade-in duration-700">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
           <div className="lg:col-span-3 bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
             <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
               <Map size={24} className="text-shiv-primary" />
               Neural Position Matrix
             </h3>
             <Table 
               headers={['Callsign', 'Mission Status', 'Altitude', 'Ground Speed', 'Position Vector']}
               data={activeFlights.map(f => ({
                 ...f,
                 callsign: <span className="font-black text-shiv-text-primary italic tracking-tighter uppercase">{f.callsign}</span>,
                 status: (
                   <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                     f.status === 'En Route' ? 'bg-info/10 text-info border-info/20' : 'bg-shiv-bg-secondary text-shiv-muted border-shiv-border'
                   }`}>
                     {f.status}
                   </span>
                 )
               }))}
             />
           </div>
           <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="relative z-10">
                <Activity className="text-shiv-primary mb-8 group-hover:scale-110 transition-transform duration-500" size={40} />
                <h4 className="text-5xl font-black italic tracking-tighter mb-2">1,248</h4>
                <p className="text-shiv-muted text-[10px] font-black uppercase tracking-[0.2em]">Daily Air Movements</p>
              </div>
              <div className="relative z-10 mt-10">
                <Chart data={[20, 45, 30, 80, 50, 90, 70]} height={100} color="#FF8A00" />
              </div>
              <div className="absolute -top-10 -right-10 opacity-[0.02]">
                <Activity size={200} />
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightTracking;
