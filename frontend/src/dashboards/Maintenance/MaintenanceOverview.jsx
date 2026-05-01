import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { ShieldCheck, Wrench, AlertTriangle, Clock, Hammer, Settings, ArrowRight, Activity } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';

const MaintenanceOverview = ({ menus }) => {
  const { addNotification } = useNotification();
  
  const mainStats = [
    { title: 'Aircraft Serviced', value: '18', change: 'This Week', icon: <Wrench size={22} />, trend: 'up' },
    { title: 'Active Repairs', value: '5', change: '3 High Priority', icon: <Hammer size={22} />, trend: 'up' },
    { title: 'Parts Inventory', value: '2,401', change: '94% Stock', icon: <Settings size={22} />, trend: 'up' },
    { title: 'Avg. Turnaround', value: '1.4d', change: '-0.2d', icon: <Clock size={22} />, trend: 'down' },
  ];

  const maintenanceLog = [
    { tailNumber: 'N-4021', model: 'Boeing 737', service: 'A-Check', tech: 'M. Chen', status: <span className="text-blue-600 font-bold px-3 py-1 bg-blue-50 border-2 border-blue-100 rounded-lg text-[10px] uppercase">In Progress</span> },
    { tailNumber: 'G-BA33', model: 'Airbus A320', service: 'Engine Inspection', tech: 'R. Wilson', status: <span className="text-emerald-600 font-bold px-3 py-1 bg-emerald-50 border-2 border-emerald-100 rounded-lg text-[10px] uppercase">Completed</span> },
    { tailNumber: 'F-WWAF', model: 'Airbus A350', service: 'Hydraulic Seal', tech: 'A. Smith', status: <span className="text-amber-600 font-bold px-3 py-1 bg-amber-50 border-2 border-amber-100 rounded-lg text-[10px] uppercase">Pending</span> },
    { tailNumber: 'N-882P', model: 'Boeing 787', service: 'Landing Gear', tech: 'S. Knight', status: <span className="text-blue-600 font-bold px-3 py-1 bg-blue-50 border-2 border-blue-100 rounded-lg text-[10px] uppercase">In Progress</span> },
  ];

  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Engineering & Maintenance">
      <div className="space-y-6 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainStats.map((s, i) => (
            <div key={i} onClick={() => addNotification(`Detailed engineering report for ${s.title} generating...`, 'info')} className="h-full">
              <DashboardCard {...s} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="shiv-perfect-card p-6 sm:p-8 h-full">
                <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest mb-8 border-b-2 border-slate-50 pb-4 flex items-center gap-3">
                    <Activity size={20} className="text-[#FF8A00]" />
                    Active Maintenance Integrity
                </h3>
                <Table 
                    headers={['Tail Number', 'Model', 'Service Type', 'Technician', 'Status']} 
                    data={maintenanceLog}
                />
            </div>
          </div>

          <div className="shiv-perfect-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest flex items-center gap-3 border-b-2 border-slate-50 pb-4 mb-8">
                <ShieldCheck size={20} className="text-emerald-500" />
                Safety Matrix
              </h3>
              <div className="space-y-4">
                <div className="shiv-tinted-panel p-5 flex items-center gap-4">
                  <div className="bg-white p-2.5 rounded-lg border-2 border-[#0a3d62]/10 shadow-sm">
                    <span className="text-[14px] font-bold text-[#0a3d62]">QA</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#0a3d62] tracking-tight">Audit Cycle: Mar 12</p>
                    <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest">ISO-9001 // SECURE</p>
                  </div>
                </div>
                
                <div className="p-5 bg-red-50 rounded-xl border-2 border-red-100 flex items-start gap-4">
                  <AlertTriangle size={18} className="text-red-500 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-1">Shortage Detected</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-bold uppercase">Critical depletion of GE9X fuel nozzles. Protocol Alpha-X refuel required.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => addNotification('Inventory Database: Authenticating node connection...', 'info')}
              className="w-full bg-[#0a3d62] text-white font-bold py-4 rounded-xl shadow-xl uppercase text-[10px] tracking-widest hover:bg-[#0c4a75] transition-all flex items-center justify-center gap-3 mt-8"
            >
              Access Inventory Node <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MaintenanceOverview;
