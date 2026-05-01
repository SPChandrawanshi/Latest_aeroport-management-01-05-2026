import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import NotificationPanel from '../../components/NotificationPanel';
import { Users, Plane, Calendar, Activity, BarChart3, ShieldCheck, ArrowRight, RefreshCw } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';

const AdminOverview = ({ menus }) => {
  const { addNotification } = useNotification();
  
  const stats = [
    { title: 'Total Flights', value: '452', change: '+8.2%', icon: <Plane size={22} />, trend: 'up' },
    { title: 'Active Staff', value: '1,284', change: '+2.4%', icon: <Users size={22} />, trend: 'up' },
    { title: 'Daily Revenue', value: '$84.2K', change: '+12.5%', icon: <BarChart3 size={22} />, trend: 'up' },
    { title: 'Safety Rating', value: '99.8%', change: '+0.1%', icon: <ShieldCheck size={22} />, trend: 'up' },
  ];

  const recentFlights = [
    { id: '#FL-2034', aircraft: 'Boeing 747', destination: 'London (LHR)', status: <span className="text-emerald-600 font-bold px-3 py-1 bg-emerald-50 border-2 border-emerald-100 rounded-lg text-[10px] uppercase">On Time</span>, time: '14:30' },
    { id: '#FL-2035', aircraft: 'Airbus A320', destination: 'Paris (CDG)', status: <span className="text-amber-600 font-bold px-3 py-1 bg-amber-50 border-2 border-amber-100 rounded-lg text-[10px] uppercase">Delayed</span>, time: '15:15' },
    { id: '#FL-2036', aircraft: 'Boeing 787', destination: 'New York (JFK)', status: <span className="text-blue-600 font-bold px-3 py-1 bg-blue-50 border-2 border-blue-100 rounded-lg text-[10px] uppercase">Boarding</span>, time: '16:00' },
    { id: '#FL-2037', aircraft: 'Airbus A380', destination: 'Dubai (DXB)', status: <span className="text-emerald-600 font-bold px-3 py-1 bg-emerald-50 border-2 border-emerald-100 rounded-lg text-[10px] uppercase">On Time</span>, time: '16:45' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="System Overview">
      <div className="space-y-6 animate-in fade-in duration-700">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} onClick={() => addNotification(`Detailed telemetry for ${s.title} initialized`, 'info')} className="cursor-pointer h-full">
              <DashboardCard {...s} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Activity Table */}
          <div className="lg:col-span-2 space-y-6">
            <div className="shiv-perfect-card p-6 sm:p-8 h-full">
              <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-slate-50">
                <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest flex items-center gap-3">
                    <Activity size={20} className="text-[#FF8A00]" />
                    Real-time Status Feed
                </h3>
                <button 
                    onClick={() => addNotification('Global Flight Schedule synchronized with ATC', 'success')}
                    className="text-[#0a3d62] font-bold text-[10px] uppercase hover:text-[#FF8A00] tracking-widest flex items-center gap-2 transition-colors"
                >
                    Global Schedule <ArrowRight size={14} />
                </button>
              </div>
              <Table 
                headers={['Flight ID', 'Aircraft', 'Destination', 'Status', 'Time']} 
                data={recentFlights}
              />
            </div>
          </div>

          {/* Notifications Panel */}
          <div className="space-y-6 h-full">
            <div className="shiv-perfect-card p-6 h-full">
                <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest mb-6 border-b-2 border-slate-50 pb-4">Operational Alerts</h3>
                <NotificationPanel />
            </div>
          </div>
        </div>

        {/* Dashboard Analytics Panel */}
        <div className="shiv-tinted-panel p-8 sm:p-12 relative overflow-hidden group">
          <div className="relative z-10 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-[32px] sm:text-[40px] font-bold mb-4 tracking-tighter uppercase leading-none text-[#0a3d62]">Operational Analytics</h2>
            <p className="text-slate-600 mb-10 leading-relaxed text-[12px] font-bold tracking-wide uppercase max-w-lg">
              Real-time monitoring of aeroport efficiency, transit throughput, and resource allocation
              across all sectors and flight operations.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <button 
                onClick={() => addNotification('Analytic Report generation sequence started', 'success')}
                className="px-8 py-4 bg-[#0a3d62] text-white rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-xl hover:bg-[#0c4a75] transition-all flex items-center gap-3"
              >
                Generate Report <BarChart3 size={18} />
              </button>
              <button 
                onClick={() => addNotification('Syncing local viewport with main server...', 'info')}
                className="px-8 py-4 bg-white border-2 border-[#0a3d62]/10 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3 shadow-md"
              >
                Sync Viewport <RefreshCw size={18} />
              </button>
            </div>
          </div>
          <div className="absolute bottom-[-60px] right-[-40px] opacity-[0.05] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <Activity size={400} className="rotate-12" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminOverview;
