import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { ClipboardList, History, FileText } from 'lucide-react';

const FlightLogs = ({ menus }) => {
  const logs = [
    { date: '2026-03-08', flight: 'QA-202', duration: '7h 45m', airframe: 'B787-9', fuel: '42,000kg', status: 'Validated' },
    { date: '2026-03-06', flight: 'QA-115', duration: '2h 10m', airframe: 'A320neo', fuel: '8,500kg', status: 'Validated' },
    { date: '2026-03-04', flight: 'QA-881', duration: '11h 20m', airframe: 'B777-300ER', fuel: '92,000kg', status: 'Pending Review' },
  ];

  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Flight Logs">
      <div className="space-y-10 animate-in fade-in duration-700">
        <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] flex items-center gap-4 italic font-sans">
              <ClipboardList size={24} className="text-shiv-primary" />
              Strategic Pilot Logbook
            </h3>
            <button className="btn-primary flex items-center gap-3 text-[10px] font-black tracking-[0.2em] px-6">
              <FileText size={18} /> EXPORT DATA
            </button>
          </div>
          <Table 
            headers={['Date', 'Flight ID', 'Duration', 'Airframe', 'Fuel Burn', 'Status']}
            data={logs.map(l => ({
              ...l,
              status: (
                <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                  l.status === 'Validated' ? 'bg-success/10 text-success border-success/20' : 'bg-warning/10 text-warning border-warning/20'
                }`}>
                  {l.status}
                </span>
              )
            }))}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightLogs;
