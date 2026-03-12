import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { Plane, Zap, ShieldCheck, PenTool } from 'lucide-react';

const AircraftManagement = ({ menus }) => {
  const fleet = [
    { tail: 'N882AF', model: 'Boeing 787', status: 'In Flight', nextCheck: '2026-04-12', health: '98%' },
    { tail: 'N104BK', model: 'Airbus A350', status: 'Grounded', nextCheck: '2026-03-10', health: '82%' },
    { tail: 'N445DX', model: 'Boeing 737 Max', status: 'Ready', nextCheck: '2026-05-20', health: '95%' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="Aircraft Management">
      <div className="space-y-10 animate-in fade-in duration-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-border-neutral shadow-sm col-span-2">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
              <Zap size={20} className="text-brand-primary" />
              Fleet Status Metrics
            </h3>
            <Chart type="bar" data={[95, 88, 92, 85, 98, 91, 89]} height={180} color="#FF8A00" />
          </div>
          <div className="bg-brand-dark border border-brand-border text-white p-10 rounded-3xl shadow-sm flex flex-col justify-center relative overflow-hidden group">
            <Plane size={64} className="text-brand-primary mb-6 transition-transform group-hover:rotate-12 duration-500" />
            <h4 className="text-6xl font-bold italic tracking-tighter mb-2">124</h4>
            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.3em]">Total Active Aircraft</p>
            <div className="absolute top-0 right-0 p-8 opacity-[0.05] translate-x-12 -translate-y-12">
              <Plane size={200} />
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-border-neutral shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 uppercase tracking-[0.2em] mb-10">Current Fleet Deployment</h3>
          <Table 
            headers={['Tail Number', 'Model', 'Current Status', 'Next Maintenance', 'Efficiency']}
            data={fleet.map(f => ({
              ...f,
              status: (
                <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-widest ${
                  f.status === 'In Flight' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                  f.status === 'Grounded' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'
                }`}>
                  {f.status}
                </span>
              ),
              health: <span className="font-bold text-slate-900">{f.health}</span>
            }))}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AircraftManagement;
