import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { ClipboardList, History, Calendar, FileCheck } from 'lucide-react';

const InspectionLogs = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Airframe Compliance Logs">
      <div 
        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
        className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#0a3d62]/10 animate-in fade-in duration-700"
      >
        <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest mb-10 flex items-center gap-4">
          <ClipboardList size={20} className="text-[#FF8A00]" />
          Technical Audit Trail
        </h3>
        <Table 
          headers={['Log ID', 'Airframe', 'Inspection Type', 'Technician', 'Result', 'Date']}
          data={[
            { id: 'INS-001', tail: 'N882AF', type: 'A-Check', tech: 'M. Thompson', result: <span className="text-emerald-600 font-bold uppercase tracking-widest text-[10px] px-3 py-1 bg-emerald-50 border-2 border-emerald-100 rounded-lg">Pass</span>, date: '2026-03-01' },
            { id: 'INS-002', tail: 'N104BK', type: 'Engine Swap', tech: 'S. Jenkins', result: <span className="text-red-600 font-bold uppercase tracking-widest text-[10px] px-3 py-1 bg-red-50 border-2 border-red-100 rounded-lg">Fail - Pending</span>, date: '2026-03-08' },
            { id: 'INS-003', tail: 'N445DX', type: 'B-Check', tech: 'P. Davis', result: <span className="text-emerald-600 font-bold uppercase tracking-widest text-[10px] px-3 py-1 bg-emerald-50 border-2 border-emerald-100 rounded-lg">Pass</span>, date: '2026-02-28' },
          ].map(row => ({
            ...row,
            id: <span className="font-bold text-[#0a3d62]">{row.id}</span>,
            tail: <span className="font-bold text-[#0a3d62]">{row.tail}</span>
          }))}
        />
      </div>
    </DashboardLayout>
  );
};

export default InspectionLogs;
