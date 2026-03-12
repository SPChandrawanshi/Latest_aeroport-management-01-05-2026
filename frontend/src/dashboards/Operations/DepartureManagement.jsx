import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { PlaneTakeoff, Clock, MapPin } from 'lucide-react';

const DepartureManagement = ({ menus }) => {
  const departures = [
    { flight: 'QA-501', dest: 'Dubai', gate: 'B12', time: '10:45', status: 'Boarding' },
    { flight: 'QA-902', dest: 'Tokyo', gate: 'C05', time: '11:20', status: 'Final Call' },
    { flight: 'QA-112', dest: 'London', gate: 'A08', time: '12:15', status: 'Scheduled' },
  ];

  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Departure Command">
      <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl animate-in fade-in duration-700">
        <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
          <PlaneTakeoff size={28} className="text-shiv-primary" />
          Tactical Outbound Flow
        </h3>
        <Table 
          headers={['Flight ID', 'Destination', 'Gate', 'ETD', 'Status']}
          data={departures.map(d => ({
            ...d,
            flight: <span className="font-black text-shiv-text-primary italic tracking-tighter">{d.flight}</span>,
            status: (
              <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                d.status === 'Final Call' ? 'bg-error/10 text-error border-error/20 animate-pulse' : 
                d.status === 'Boarding' ? 'bg-info/10 text-info border-info/20' : 'bg-shiv-bg-secondary text-shiv-muted border-shiv-border'
              }`}>
                {d.status}
              </span>
            )
          }))}
        />
      </div>
    </DashboardLayout>
  );
};

export default DepartureManagement;
