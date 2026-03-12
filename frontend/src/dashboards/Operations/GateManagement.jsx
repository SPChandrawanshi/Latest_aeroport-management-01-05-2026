import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { MapPin, Key, Clock } from 'lucide-react';

const GateManagement = ({ menus }) => {
  const gates = [
    { gate: 'A01', status: 'Occupied', flight: 'QA-202', type: 'Intl', utility: '85%' },
    { gate: 'A04', status: 'Vacant', flight: '-', type: 'Intl', utility: '40%' },
    { gate: 'B12', status: 'Boarding', flight: 'QA-501', type: 'Intl', utility: '98%' },
    { gate: 'C05', status: 'Delayed', flight: 'QA-902', type: 'Reg', utility: '60%' },
  ];

  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Terminal Gate Command">
      <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl animate-in fade-in duration-700">
        <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
          <Key size={24} className="text-shiv-primary" />
          Terminal Gate Strategy
        </h3>
        <Table 
          headers={['Gate ID', 'Status', 'Current Flight', 'Gate Type', 'Utility Load']}
          data={gates.map(g => ({
            ...g,
            gate: <span className="font-black text-shiv-text-primary italic tracking-tighter uppercase">{g.gate}</span>,
            status: (
              <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                g.status === 'Vacant' ? 'bg-success/10 text-success border-success/20' : 
                g.status === 'Boarding' ? 'bg-info/10 text-info border-info/20' : 
                g.status === 'Delayed' ? 'bg-warning/10 text-warning border-warning/20' : 'bg-shiv-bg-secondary text-shiv-muted border-shiv-border'
              }`}>
                {g.status}
              </span>
            )
          }))}
        />
      </div>
    </DashboardLayout>
  );
};

export default GateManagement;
