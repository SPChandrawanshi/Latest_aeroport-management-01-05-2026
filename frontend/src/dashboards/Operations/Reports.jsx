import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { FileText, Download, Filter } from 'lucide-react';

const OperationsReports = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Operational Intelligence">
      <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl animate-in fade-in duration-700">
        <div className="flex justify-between items-center mb-12">
           <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] flex items-center gap-4 italic font-sans">
             <FileText size={28} className="text-shiv-primary" />
             Strategic Mission Logs
           </h3>
           <div className="flex gap-4">
              <button className="p-4 bg-shiv-bg-secondary border border-shiv-border rounded-2xl text-shiv-muted hover:text-shiv-primary hover:border-shiv-primary/30 transition-all group">
                <Filter size={20} className="group-hover:rotate-180 transition-transform duration-500" />
              </button>
              <button className="px-8 py-4 bg-shiv-sidebar border border-shiv-border text-shiv-text-primary rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-shiv-card-hover hover:border-shiv-primary/50 transition-all flex items-center gap-4 group">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> 
                EXPORT CSV
              </button>
           </div>
        </div>
        <Table 
          headers={['Log ID', 'Activity Type', 'Station', 'Timestamp', 'Operator', 'Status']}
          data={[
            { id: 'OPS-990-1', type: 'Fuel Audit', station: 'LHR', time: '08:45', op: 'AI-SYS', status: <span className="text-success font-black text-[10px] uppercase">Compliant</span> },
            { id: 'OPS-990-2', type: 'Gate Swap', station: 'JFK', time: '09:12', op: 'C. Miller', status: <span className="text-info font-black text-[10px] uppercase">Validated</span> },
            { id: 'OPS-990-3', type: 'Crew Roster', station: 'Global', time: '10:00', op: 'S. Jenkins', status: <span className="text-shiv-primary font-black text-[10px] uppercase italic">Active</span> },
          ].map(row => ({
            ...row,
            id: <span className="font-black text-shiv-text-primary italic">{row.id}</span>,
            type: <span className="font-bold text-shiv-text-primary uppercase tracking-tight">{row.type}</span>
          }))}
        />
      </div>
    </DashboardLayout>
  );
};

export default OperationsReports;
