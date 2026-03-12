import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

const FlightSchedule = ({ menus }) => {
  const schedule = [
    { period: 'Mar 09 - Mar 15', flights: 4, blockHours: '18.5h', layovers: '2', status: 'Published' },
    { period: 'Mar 16 - Mar 22', flights: 3, blockHours: '24.0h', layovers: '1', status: 'Draft' },
    { period: 'Mar 23 - Mar 29', flights: 0, blockHours: '0.0h', layovers: '0', status: 'Standby' },
  ];

  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Flight Schedule">
      <div className="space-y-10 animate-in fade-in duration-700">
        <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] flex items-center gap-4 italic font-sans">
              <Calendar size={24} className="text-shiv-primary" />
              Strategic Rotation Matrix
            </h3>
            <span className="px-6 py-2.5 bg-shiv-sidebar border border-shiv-border text-shiv-text-primary rounded-xl text-[10px] font-black uppercase tracking-[0.3em] shadow-xl">MARCH 2026 CYCLE</span>
          </div>
          <Table 
            headers={['Deployment Period', 'Total Flights', 'Block Hours', 'Layovers', 'Status']}
            data={schedule.map(s => ({
              ...s,
              status: (
                <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                  s.status === 'Published' ? 'bg-success/10 text-success border-success/20' : 'bg-shiv-bg-secondary text-shiv-muted border-shiv-border'
                }`}>
                  {s.status}
                </span>
              ),
              blockHours: <span className="font-black text-shiv-text-primary italic">{s.blockHours}</span>
            }))}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-10 bg-info/5 rounded-[2.5rem] border border-info/20 flex items-center justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-black text-info uppercase tracking-[0.3em] mb-3">Neural Duty Allocation</p>
              <h4 className="text-4xl font-black text-shiv-text-primary italic tracking-tighter">72.5 <span className="text-shiv-muted font-normal text-2xl">/ 90.0</span></h4>
            </div>
            <Clock size={48} className="text-info/20 transition-transform group-hover:rotate-12 duration-500" />
            <div className="absolute top-0 right-0 p-4 opacity-[0.02]">
              <Clock size={120} />
            </div>
          </div>
          <button className="group p-10 bg-shiv-sidebar rounded-[2.5rem] border border-shiv-border text-shiv-text-primary flex items-center justify-between hover:bg-shiv-card-hover transition-all text-left shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[10px] font-black text-shiv-primary uppercase tracking-[0.3em] mb-3 font-sans">Vector Bidding System</p>
              <h4 className="text-2xl font-black italic tracking-tight font-sans">Request Tactical Shift</h4>
            </div>
            <ArrowRight size={32} className="text-shiv-primary transition-transform group-hover:translate-x-3 duration-500" />
            <div className="absolute -bottom-10 -right-10 opacity-[0.02] translate-x-12 translate-y-12">
              <ArrowRight size={200} />
            </div>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightSchedule;
