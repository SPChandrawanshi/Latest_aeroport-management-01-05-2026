import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Calendar, Clock, PlaneLanding, PlaneTakeoff, ShieldCheck } from 'lucide-react';

const FlightScheduling = ({ menus }) => {
  const schedule = [
    { flight: 'QA-501', departure: '09:00 AM', arrival: '11:30 AM', route: 'LHR - JFK', aircraft: 'B787-9', crew: 'Team Alpha' },
    { flight: 'QA-902', departure: '10:15 AM', arrival: '02:45 PM', route: 'DXB - SIN', aircraft: 'A350-1000', crew: 'Team Zulu' },
    { flight: 'QA-112', departure: '01:30 PM', arrival: '03:00 PM', route: 'CDG - LHR', aircraft: 'B737-MAX', crew: 'Team Gamma' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="Flight Scheduling">
      <div className="space-y-6 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="shiv-perfect-card flex items-center gap-4 px-6 py-3 w-fit">
            <Calendar className="text-[#FF8A00]" size={18} />
            <span className="font-bold text-[#0a3d62] uppercase tracking-widest text-[11px]">SOLAR CYCLE: March 09, 2026</span>
          </div>
          <button className="bg-[#0a3d62] text-white px-6 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center gap-3 shadow-xl hover:bg-[#0c4a75] transition-all hover:border-[#0a3d62] border-2 border-transparent">
            <Clock size={16} />
            Generate Neural Schedule
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 shiv-perfect-card p-6 sm:p-8">
            <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest mb-8 flex items-center gap-3 border-b-2 border-slate-50 pb-4">
                <ShieldCheck size={20} className="text-[#FF8A00]" />
                Daily Flight Matrix
            </h3>
            <Table 
              headers={['Flight ID', 'Departure', 'Arrival', 'Route (ORI-DST)', 'Aircraft', 'Assigned Crew']}
              data={schedule.map(s => ({
                  ...s,
                  flight: <span className="font-bold text-[#0a3d62]">{s.flight}</span>,
                  route: <span className="font-medium text-slate-500">{s.route}</span>
              }))}
            />
          </div>

          <div className="space-y-6">
            <div className="shiv-perfect-card p-6 sm:p-8">
              <h3 className="text-[14px] font-bold text-[#0a3d62] mb-8 uppercase tracking-widest flex items-center gap-3 border-b-2 border-slate-50 pb-4">
                <PlaneTakeoff size={20} className="text-[#FF8A00]" />
                Vector Traffic Load
              </h3>
              <div className="space-y-8">
                {[
                  { label: 'Departure Slots', status: '82% LOAD', val: 82, color: 'bg-[#0a3d62]' },
                  { label: 'Arrival Slots', status: '45% CAPACITY', val: 55, color: 'bg-emerald-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                      <span className="text-slate-400">{item.label}</span>
                      <span className={item.color === 'bg-[#0a3d62]' ? 'text-[#0a3d62]' : 'text-emerald-600'}>{item.status}</span>
                    </div>
                    <div className="h-2 bg-slate-50 rounded-full overflow-hidden border-2 border-slate-100">
                      <div className={`h-full rounded-full ${item.color} shadow-sm`} style={{ width: `${item.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="shiv-tinted-panel p-6 relative overflow-hidden">
              <h4 className="text-[13px] font-bold text-[#0a3d62] mb-4 uppercase tracking-widest flex items-center gap-3 border-b-2 border-[#0a3d62]/5 pb-2">
                <PlaneLanding className="text-[#FF8A00]" size={18} />
                Tactical Advisory
              </h4>
              <p className="text-[11px] text-slate-600 leading-relaxed font-bold tracking-wide uppercase">
                Slot optimization required for regional vectors between <span className="text-[#0a3d62] font-black underline decoration-2 underline-offset-4">14:00 - 16:00</span> to mitigate tactical congestion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FlightScheduling;
