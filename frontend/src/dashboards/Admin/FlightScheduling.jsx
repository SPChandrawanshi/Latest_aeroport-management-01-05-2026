import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Calendar, Clock, PlaneLanding, PlaneTakeoff } from 'lucide-react';

const FlightScheduling = ({ menus }) => {
  const schedule = [
    { flight: 'QA-501', departure: '09:00 AM', arrival: '11:30 AM', route: 'LHR - JFK', aircraft: 'B787-9', crew: 'Team Alpha' },
    { flight: 'QA-902', departure: '10:15 AM', arrival: '02:45 PM', route: 'DXB - SIN', aircraft: 'A350-1000', crew: 'Team Zulu' },
    { flight: 'QA-112', departure: '01:30 PM', arrival: '03:00 PM', route: 'CDG - LHR', aircraft: 'B737-MAX', crew: 'Team Gamma' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="Flight Scheduling">
      <div className="space-y-10 animate-in fade-in duration-700">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-5 bg-shiv-card p-5 rounded-2xl border border-shiv-border shadow-2xl w-fit">
            <Calendar className="text-shiv-primary" size={24} />
            <span className="font-black text-shiv-text-primary uppercase tracking-[0.2em] text-xs">SOLAR CYCLE: March 09, 2026</span>
          </div>
          <button className="btn-primary flex items-center gap-3 shadow-orange-500/20">
            <Clock size={20} />
            Generate Neural Schedule
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 italic border-b border-shiv-border pb-6">Daily Flight Matrix</h3>
            <Table 
              headers={['Flight ID', 'Departure', 'Arrival', 'Route (ORI-DST)', 'Aircraft', 'Assigned Crew']}
              data={schedule}
            />
          </div>

          <div className="space-y-8">
            <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-10 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-xl font-black mb-10 italic uppercase tracking-tight flex items-center gap-3">
                <PlaneTakeoff size={24} className="text-shiv-primary" />
                Vector Traffic Load
              </h3>
              <div className="space-y-10">
                {[
                  { label: 'Departure Slots', status: '82% LOAD', val: 82, color: 'bg-shiv-primary' },
                  { label: 'Arrival Slots', status: '45% CAPACITY', val: 55, color: 'bg-success' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                      <span className="text-shiv-muted">{item.label}</span>
                      <span className={item.color === 'bg-shiv-primary' ? 'text-shiv-primary' : 'text-success'}>{item.status}</span>
                    </div>
                    <div className="h-1.5 bg-shiv-bg-secondary rounded-full overflow-hidden border border-shiv-border">
                      <div className={`h-full rounded-full ${item.color} shadow-lg shadow-black/40`} style={{ width: `${item.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-shiv-bg-secondary/50 rounded-[2rem] border border-shiv-border border-dashed">
              <h4 className="font-black text-shiv-text-primary mb-4 uppercase tracking-[0.1em] flex items-center gap-3 italic">
                <PlaneLanding className="text-shiv-primary" size={20} />
                Tactical Advisory
              </h4>
              <p className="text-xs text-shiv-text-secondary leading-loose font-bold tracking-wide">
                Slot optimization required for regional vectors between <span className="text-shiv-text-primary">14:00 - 16:00</span> to mitigate tactical congestion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightScheduling;
