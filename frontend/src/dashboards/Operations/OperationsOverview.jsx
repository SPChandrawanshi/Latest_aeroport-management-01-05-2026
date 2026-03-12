import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { Activity, MapPin, Clock, AlertTriangle, Plane, Wifi } from 'lucide-react';

const OperationsOverview = ({ menus }) => {
  const opStats = [
    { title: 'Departures', value: '24', change: '8 Ready', icon: <Plane className="rotate-45" size={24} />, trend: 'up' },
    { title: 'Arrivals', value: '31', change: '12 Arriving', icon: <Plane className="rotate-225" size={24} />, trend: 'up' },
    { title: 'Gate Usage', value: '88%', change: 'Peak Hour', icon: <MapPin size={24} />, trend: 'up' },
    { title: 'Avg. Delay', value: '12m', change: '-4m today', icon: <Clock size={24} />, trend: 'down' },
  ];

  const gateStatus = [
    { gate: 'A-01', flight: 'BA-202', status: 'Boarding', type: 'Intl', departure: '14:20' },
    { gate: 'A-05', flight: 'AF-311', status: 'Final Call', type: 'Intl', departure: '14:45' },
    { gate: 'B-12', flight: 'LH-902', status: 'Landed', type: 'Domestic', departure: '15:10' },
    { gate: 'C-08', flight: 'DL-112', status: 'Cleaning', type: 'Intl', departure: '15:30' },
  ];

  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Operations Control Center">
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {opStats.map((s, i) => (
            <DashboardCard key={i} {...s} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] italic">Tactical Gate Control</h3>
            <Table 
              headers={['Gate', 'Flight', 'Status', 'Type', 'Departure']} 
              data={gateStatus}
            />
          </div>

          <div className="bg-shiv-card rounded-[2.5rem] border border-shiv-border p-10 text-shiv-text-primary shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[450px]">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-xl font-black uppercase tracking-[0.2em] italic">Infrastructure Matrix</h3>
                <Wifi size={24} className="text-success animate-pulse" />
              </div>
              <div className="space-y-8">
                {[
                  { label: 'Ground Radar', status: 'Optimal', val: 100 },
                  { label: 'ILS Systems', status: 'Optimal', val: 100 },
                  { label: 'Fuel Hydrants', status: 'Maintenance Required', val: 65 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                      <span className="text-shiv-muted">{item.label}</span>
                      <span className={item.val === 100 ? 'text-success' : 'text-warning'}>{item.status}</span>
                    </div>
                    <div className="h-1.5 bg-shiv-bg-secondary rounded-full overflow-hidden border border-shiv-border">
                      <div className={`h-full rounded-full transition-all duration-1000 ${item.val === 100 ? 'bg-success shadow-lg shadow-success/20' : 'bg-warning shadow-lg shadow-warning/20'}`} style={{ width: `${item.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 relative z-10 bg-error/5 p-6 rounded-2xl border border-error/20">
              <div className="flex items-center gap-3 text-error mb-3 font-black text-[10px] uppercase tracking-[0.2em]">
                <AlertTriangle size={18} />
                Strategic Alert
              </div>
              <p className="text-xs text-shiv-text-secondary leading-relaxed font-bold italic">PRO-ACTION REQ: Runway 27L disabled due to debris. Rerouting all tactical vectors to 09R protocol.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OperationsOverview;
