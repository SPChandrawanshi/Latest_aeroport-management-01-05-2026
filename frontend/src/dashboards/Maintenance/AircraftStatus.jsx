import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Plane, Wrench, ShieldAlert } from 'lucide-react';

const AircraftStatus = ({ menus }) => {
  const statusList = [
    { tail: 'N882AF', status: 'Airworthy', maintenanceIn: '144h', health: '98%', location: 'LHR' },
    { tail: 'N104BK', status: 'AOG - Maintenance', maintenanceIn: 'Now', health: '75%', location: 'Hangar 4' },
    { tail: 'N445DX', status: 'Check Required', maintenanceIn: '12h', health: '92%', location: 'JFK' },
  ];

  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Fleet Health Monitoring">
      <div className="space-y-10 animate-in fade-in duration-700">
        <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
           <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
             <ShieldAlert size={24} className="text-shiv-primary" />
             Tactical Airframe Status Matrix
           </h3>
           <Table 
             headers={['Tail ID', 'Current Condition', 'Next Service', 'Health Index', 'Station']}
             data={statusList.map(s => ({
               ...s,
               status: (
                 <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                   s.status.includes('AOG') ? 'bg-error/10 text-error border-error/20' : 
                   s.status.includes('Check') ? 'bg-warning/10 text-warning border-warning/20' : 'bg-success/10 text-success border-success/20'
                 }`}>
                   {s.status}
                 </span>
               ),
               health: <span className="font-black text-shiv-text-primary">{s.health}</span>
             }))}
           />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AircraftStatus;
