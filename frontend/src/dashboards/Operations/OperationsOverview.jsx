import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { Activity, MapPin, Clock, AlertTriangle, Plane, Wifi, ArrowRight } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';

const OperationsOverview = ({ menus }) => {
  const { addNotification } = useNotification();
  
  const opStats = [
    { title: 'Departures', value: '24', change: '8 Ready', icon: <Plane className="rotate-45" size={22} />, trend: 'up' },
    { title: 'Arrivals', value: '31', change: '12 Arriving', icon: <Plane className="rotate-225" size={22} />, trend: 'up' },
    { title: 'Gate Usage', value: '88%', change: 'Peak Hour', icon: <MapPin size={22} />, trend: 'up' },
    { title: 'Avg. Delay', value: '12m', change: '-4m today', icon: <Clock size={22} />, trend: 'down' },
  ];

  const gateStatus = [
    { gate: 'A-01', flight: 'BA-202', status: <span className="text-emerald-600 font-black px-3 py-1 bg-emerald-50 border-2 border-emerald-100 rounded-lg text-[10px] uppercase tracking-widest">Boarding</span>, type: 'Intl', departure: '14:20' },
    { gate: 'A-05', flight: 'AF-311', status: <span className="text-amber-600 font-black px-3 py-1 bg-amber-50 border-2 border-amber-100 rounded-lg text-[10px] uppercase tracking-widest">Final Call</span>, type: 'Intl', departure: '14:45' },
    { gate: 'B-12', flight: 'LH-902', status: <span className="text-blue-600 font-black px-3 py-1 bg-blue-50 border-2 border-blue-100 rounded-lg text-[10px] uppercase tracking-widest">Landed</span>, type: 'Domestic', departure: '15:10' },
    { gate: 'C-08', flight: 'DL-112', status: <span className="text-slate-500 font-black px-3 py-1 bg-slate-50 border-2 border-slate-200 rounded-lg text-[10px] uppercase tracking-widest">Cleaning</span>, type: 'Intl', departure: '15:30' },
  ];

  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Operations Control Center">
      <div className="space-y-8 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {opStats.map((s, i) => (
            <div key={i} onClick={() => addNotification(`Sector stats for ${s.title} updated in real-time.`, 'success')} className="cursor-pointer h-full">
              <DashboardCard {...s} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="shiv-perfect-card p-6 sm:p-8">
              <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest mb-8 border-b-2 border-slate-50 pb-4 flex items-center justify-between">
                Tactical Gate Control
                <ArrowRight size={16} className="text-slate-300" />
              </h3>
              <Table 
                headers={['Gate', 'Flight', 'Status', 'Type', 'Departure']} 
                data={gateStatus}
              />
            </div>
          </div>

          <div className="shiv-perfect-card p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest border-b-2 border-slate-50 pb-4 w-full">Infrastructure Matrix</h3>
              </div>
              <div className="space-y-8">
                {[
                  { label: 'Ground Radar', status: 'Optimal', val: 100, color: 'bg-emerald-500' },
                  { label: 'ILS Systems', status: 'Optimal', val: 100, color: 'bg-emerald-500' },
                  { label: 'Fuel Hydrants', status: 'Maintenance Required', val: 65, color: 'bg-amber-500' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                      <span className="text-slate-400">{item.label}</span>
                      <span className={item.val === 100 ? 'text-emerald-600' : 'text-amber-600'}>{item.status}</span>
                    </div>
                    <div className="h-2 bg-slate-50 rounded-full overflow-hidden border-2 border-slate-100">
                      <div className={`h-full rounded-full transition-all duration-1000 ${item.color} shadow-sm`} style={{ width: `${item.val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 relative z-10 bg-red-50/50 p-6 rounded-2xl border-2 border-red-100 border-dashed">
              <div className="flex items-center gap-3 text-red-600 mb-3 font-black text-[10px] uppercase tracking-widest">
                <AlertTriangle size={18} />
                Strategic Alert
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-bold uppercase italic">PRO-ACTION REQ: Runway 27L disabled due to debris. Rerouting all tactical vectors to 09R protocol.</p>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
               <Wifi size={150} className="animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OperationsOverview;
