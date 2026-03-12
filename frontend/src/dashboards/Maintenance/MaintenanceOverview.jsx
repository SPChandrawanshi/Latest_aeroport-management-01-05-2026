import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { ShieldCheck, Wrench, AlertTriangle, Clock, Hammer, Settings } from 'lucide-react';

const MaintenanceOverview = ({ menus }) => {
  const mainStats = [
    { title: 'Aircraft Serviced', value: '18', change: 'This Week', icon: <Wrench size={24} />, trend: 'up' },
    { title: 'Active Repairs', value: '5', change: '3 High Priority', icon: <Hammer size={24} />, trend: 'up' },
    { title: 'Parts Inventory', value: '2,401', change: '94% Stock', icon: <Settings size={24} />, trend: 'up' },
    { title: 'Avg. Turnaround', value: '1.4d', change: '-0.2d', icon: <Clock size={24} />, trend: 'down' },
  ];

  const maintenanceLog = [
    { tailNumber: 'N-4021', model: 'Boeing 737', service: 'A-Check', tech: 'M. Chen', status: 'In Progress' },
    { tailNumber: 'G-BA33', model: 'Airbus A320', service: 'Engine Inspection', tech: 'R. Wilson', status: 'Completed' },
    { tailNumber: 'F-WWAF', model: 'Airbus A350', service: 'Hydraulic Seal', tech: 'A. Smith', status: 'Pending' },
    { tailNumber: 'N-882P', model: 'Boeing 787', service: 'Landing Gear', tech: 'S. Knight', status: 'In Progress' },
  ];

  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Engineering & Maintenance">
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainStats.map((s, i) => (
            <DashboardCard key={i} {...s} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] italic">Active Maintenance Integrity</h3>
            <Table 
              headers={['Tail Number', 'Model', 'Service Type', 'Technician', 'Status']} 
              data={maintenanceLog}
            />
          </div>

          <div className="bg-shiv-card rounded-[2.5rem] border border-shiv-border shadow-2xl p-10 space-y-10">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] italic flex items-center gap-4">
              <ShieldCheck size={20} className="text-success" />
              Safety Matrix
            </h3>
            <div className="space-y-6">
              <div className="bg-shiv-bg-secondary p-6 rounded-2xl border border-shiv-border flex items-center gap-5">
                <div className="bg-shiv-card p-3 rounded-xl border border-shiv-border shadow-lg shadow-black/20">
                  <span className="text-2xl font-black text-shiv-primary italic">QA</span>
                </div>
                <div>
                  <p className="text-sm font-black text-shiv-text-primary tracking-tight">Audit Cycle: Mar 12</p>
                  <p className="text-[10px] text-shiv-muted uppercase font-black tracking-[0.2em]">ISO-9001 // SECURE</p>
                </div>
              </div>
              <div className="p-6 bg-error/5 rounded-2xl border border-error/20 flex items-start gap-4">
                <AlertTriangle size={20} className="text-error mt-0.5" />
                <div>
                  <p className="text-[10px] font-black text-error uppercase tracking-[0.2em] mb-2">Shortage Detected</p>
                  <p className="text-sm text-shiv-text-secondary leading-tight font-bold italic">Critical depletion of GE9X fuel nozzles. Protocol Alpha-X refuel required.</p>
                </div>
              </div>
              <button className="w-full bg-shiv-bg-secondary text-shiv-text-primary font-black py-4 rounded-xl border border-shiv-border uppercase text-[10px] tracking-[0.3em] hover:bg-shiv-card-hover transition-all">
                Access Inventory Node
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MaintenanceOverview;
