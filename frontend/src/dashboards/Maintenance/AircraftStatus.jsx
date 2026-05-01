import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Plane, Wrench, ShieldAlert, Activity } from 'lucide-react';

const AircraftStatus = ({ menus }) => {
  const statusList = [
    { tail: 'N882AF', status: 'Airworthy', maintenanceIn: '144h', health: '98%', location: 'LHR' },
    { tail: 'N104BK', status: 'AOG - Maintenance', maintenanceIn: 'Now', health: '75%', location: 'Hangar 4' },
    { tail: 'N445DX', status: 'Check Required', maintenanceIn: '12h', health: '92%', location: 'JFK' },
  ];

  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Fleet Health Monitoring">
      <div className="space-y-6 animate-in fade-in duration-700">
        <div 
          style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
          className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#0a3d62]/10"
        >
           <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest mb-10 flex items-center gap-4">
             <ShieldAlert size={20} className="text-[#FF8A00]" />
             Tactical Airframe Status Matrix
           </h3>
           <Table 
             headers={['Tail ID', 'Current Condition', 'Next Service', 'Health Index', 'Station']}
             data={statusList.map(s => ({
               ...s,
               status: (
                 <span className={`px-4 py-1.5 rounded-lg border-2 text-[10px] font-bold uppercase tracking-widest ${
                   s.status.includes('AOG') ? 'bg-red-50 text-red-600 border-red-100' : 
                   s.status.includes('Check') ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                 }`}>
                   {s.status}
                 </span>
               ),
               health: <span className="font-bold text-[#0a3d62]">{s.health}</span>
             }))}
           />
        </div>

        <div 
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: 'rgba(248, 194, 145, 0.18)' }}
            className="p-6 rounded-2xl border-2 border-[#0a3d62]/10 flex items-center gap-6"
        >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0a3d62] border-2 border-[#0a3d62]/10 shadow-sm">
                <Activity size={24} className="animate-pulse" />
            </div>
            <div>
                <h4 className="text-[13px] font-bold text-[#0a3d62] uppercase tracking-wider mb-1">Global Health Index: 91.6%</h4>
                <p className="text-[11px] text-slate-600 font-medium uppercase">All assets within operational parameters. 3 Units flagged for proactive inspection.</p>
            </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AircraftStatus;
