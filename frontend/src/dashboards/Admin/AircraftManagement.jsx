import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { Plane, Zap, ShieldCheck, PenTool, Activity, Wrench } from 'lucide-react';

const AircraftManagement = ({ menus }) => {
  const fleet = [
    { tail: 'N882AF', model: 'Boeing 787', status: 'In Flight', nextCheck: '2026-04-12', health: '98%' },
    { tail: 'N104BK', model: 'Airbus A350', status: 'Grounded', nextCheck: '2026-03-10', health: '82%' },
    { tail: 'N445DX', model: 'Boeing 737 Max', status: 'Ready', nextCheck: '2026-05-20', health: '95%' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="Aircraft Management">
      <div className="space-y-6 animate-in fade-in duration-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Fleet Metrics Chart */}
          <div className="shiv-perfect-card p-6 sm:p-8 md:col-span-2">
            <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest mb-6 flex items-center gap-3">
              <Zap size={20} className="text-[#FF8A00]" />
              Fleet Status Metrics
            </h3>
            <Chart type="bar" data={[95, 88, 92, 85, 98, 91, 89]} height={140} color="#FF8A00" />
          </div>

          {/* Card 2: Total Aircraft Stat */}
          <div className="shiv-tinted-panel p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden group">
            <Plane size={48} className="text-[#0a3d62] mb-4 transition-transform group-hover:rotate-12 duration-500" />
            <h4 className="text-[48px] font-bold text-[#0a3d62] tracking-tighter leading-none mb-2">124</h4>
            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em]">Total Active Aircraft</p>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] translate-x-12 -translate-y-12">
              <Plane size={180} />
            </div>
          </div>
        </div>

        {/* Fleet Deployment Table */}
        <div className="shiv-perfect-card p-6 sm:p-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-slate-50">
            <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest flex items-center gap-3">
              <Activity size={20} className="text-[#FF8A00]" />
              Current Fleet Deployment
            </h3>
            <button className="text-[#0a3d62] font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all group">
              Global Tracking <Plane size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <Table 
            headers={['Tail Number', 'Model', 'Current Status', 'Next Maintenance', 'Efficiency']}
            data={fleet.map(f => ({
              ...f,
              status: (
                <span className={`px-4 py-1.5 rounded-lg border-2 text-[10px] font-bold uppercase tracking-widest ${
                  f.status === 'In Flight' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                  f.status === 'Grounded' ? 'bg-red-50 text-red-600 border-red-100' : 'bg-green-50 text-green-600 border-green-100'
                }`}>
                  {f.status}
                </span>
              ),
              health: <span className="font-bold text-[#0a3d62]">{f.health}</span>
            }))}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AircraftManagement;
