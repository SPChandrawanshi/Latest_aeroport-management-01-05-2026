import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { ClipboardList, History, Calendar } from 'lucide-react';

const InspectionLogs = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Airframe Compliance Logs">
      <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl animate-in fade-in duration-700">
        <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
          <ClipboardList size={24} className="text-shiv-primary" />
          Technical Audit Trail
        </h3>
        <Table 
          headers={['Log ID', 'Airframe', 'Inspection Type', 'Technician', 'Result', 'Date']}
          data={[
            { id: 'INS-001', tail: 'N882AF', type: 'A-Check', tech: 'M. Thompson', result: <span className="text-success font-black uppercase tracking-widest text-[10px]">Pass</span>, date: '2026-03-01' },
            { id: 'INS-002', tail: 'N104BK', type: 'Engine Swap', tech: 'S. Jenkins', result: <span className="text-error font-black uppercase tracking-widest text-[10px]">Fail - Pending</span>, date: '2026-03-08' },
            { id: 'INS-003', tail: 'N445DX', type: 'B-Check', tech: 'P. Davis', result: <span className="text-success font-black uppercase tracking-widest text-[10px]">Pass</span>, date: '2026-02-28' },
          ].map(row => ({
            ...row,
            id: <span className="font-black text-shiv-text-primary italic">{row.id}</span>,
            tail: <span className="font-bold text-shiv-primary">{row.tail}</span>
          }))}
        />
      </div>
    </DashboardLayout>
  );
};

export default InspectionLogs;
