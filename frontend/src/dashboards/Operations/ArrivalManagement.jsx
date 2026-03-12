import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { PlaneLanding, Clock, MapPin } from 'lucide-react';

const ArrivalManagement = ({ menus }) => {
  const arrivals = [
    { flight: 'QA-202', from: 'New York', gate: 'A04', time: '09:30', status: 'Landed' },
    { flight: 'QA-881', from: 'Singapore', gate: 'B08', time: '10:15', status: 'Approaching' },
    { flight: 'QA-712', from: 'Paris', gate: 'C12', time: '11:00', status: 'Confirmed' },
  ];

  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Arrival Command">
      <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl animate-in fade-in duration-700">
        <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
          <PlaneLanding size={28} className="text-shiv-primary" />
          Tactical Inbound Flow
        </h3>
        <Table 
          headers={['Flight ID', 'Origin', 'Terminal/Gate', 'ETA', 'Status']}
          data={arrivals.map(a => ({
            ...a,
            flight: <span className="font-black text-shiv-text-primary italic tracking-tighter">{a.flight}</span>,
            status: (
              <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                a.status === 'Landed' ? 'bg-success/10 text-success border-success/20' : 
                a.status === 'Approaching' ? 'bg-info/10 text-info border-info/20' : 'bg-shiv-bg-secondary text-shiv-muted border-shiv-border'
              }`}>
                {a.status}
              </span>
            )
          }))}
        />
      </div>
    </DashboardLayout>
  );
};

export default ArrivalManagement;
