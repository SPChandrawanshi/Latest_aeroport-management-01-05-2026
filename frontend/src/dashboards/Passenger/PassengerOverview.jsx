import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { Ticket, History, Plane, ShieldCheck, MapPin, Heart, CreditCard, LifeBuoy, ArrowRight } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';

const PassengerOverview = ({ menus }) => {
  const { addNotification } = useNotification();
  
  const stats = [
    { title: 'Active Tickets', value: '2', change: 'Manage', icon: <Ticket size={22} />, trend: 'up' },
    { title: 'Flying Hours', value: '1,240', change: '+20h', icon: <Plane size={22} />, trend: 'up' },
    { title: 'Loyalty Points', value: '88,400', change: 'Gold', icon: <Heart size={22} />, trend: 'up' },
    { title: 'Past Trips', value: '42', change: 'History', icon: <History size={22} />, trend: 'up' },
  ];

  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Passenger Welcome">
      <div className="space-y-6 animate-in fade-in duration-700">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} onClick={() => addNotification(`Retrieving ${s.title} detailed records...`, 'info')} className="h-full">
              <DashboardCard {...s} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Table Area */}
          <div className="lg:col-span-2">
            <div className="shiv-perfect-card p-6 sm:p-8 relative overflow-hidden h-full">
              <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-slate-50">
                <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest flex items-center gap-3">
                  <ShieldCheck size={20} className="text-[#FF8A00]" />
                  Mission Vector Brief
                </h3>
              </div>
              
              <Table 
                headers={['Mission ID', 'Vector Destination', 'Temporal Date', 'Sector', 'Protocol Status']}
                data={[
                  { flight: 'QA-501', dest: 'London (LHR)', date: 'Mar 12, 2026', seat: '12A', status: <span className="text-emerald-600 font-bold uppercase text-[10px] tracking-widest px-3 py-1 bg-emerald-50 border-2 border-emerald-100 rounded-lg">Confirmed</span> },
                  { flight: 'QA-229', dest: 'Paris (CDG)', date: 'Mar 25, 2026', seat: '04C', status: <span className="text-blue-600 font-bold uppercase text-[10px] tracking-widest px-3 py-1 bg-blue-50 border-2 border-blue-100 rounded-lg">Processing</span> },
                ]}
              />
            </div>
          </div>

          {/* Quick Action Side Panel */}
          <div className="shiv-tinted-panel p-6 sm:p-8 relative overflow-hidden flex flex-col justify-center group">
             <div className="relative z-10 text-center lg:text-left">
                <div className="w-12 h-12 rounded-xl bg-[#0a3d62] text-white flex items-center justify-center mb-6 mx-auto lg:mx-0 shadow-lg group-hover:bg-[#FF8A00] transition-colors duration-500">
                  <MapPin size={24} className="animate-pulse" />
                </div>
                <h4 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter mb-4 uppercase leading-tight">Transit Protocol Initializing</h4>
                <p className="text-slate-600 text-[11px] font-bold mb-8 leading-relaxed tracking-widest uppercase">
                  Secure biometric check-in for vector <span className="text-[#0a3d62]">QA-501</span> initializes in <span className="text-[#FF8A00]">48h</span>. Ensure all credentials are ready.
                </p>
                <button 
                  onClick={() => addNotification('Biometric Verification Hub initialized. Preparing scanning sequence...', 'success')}
                  className="w-full py-4 bg-[#0a3d62] text-white rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-xl hover:bg-[#0c4a75] transition-all flex items-center justify-center gap-3"
                >
                  LAUNCH TRANSIT HUB <ArrowRight size={16} />
                </button>
             </div>
             <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                <Plane size={300} className="-rotate-45" />
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PassengerOverview;
