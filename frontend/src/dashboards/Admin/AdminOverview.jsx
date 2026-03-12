import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import NotificationPanel from '../../components/NotificationPanel';
import { Users, Plane, Calendar, Activity, BarChart3, ShieldCheck } from 'lucide-react';

const AdminOverview = ({ menus }) => {
  const stats = [
    { title: 'Total Flights', value: '452', change: '+8.2%', icon: <Plane size={24} />, trend: 'up' },
    { title: 'Active Staff', value: '1,284', change: '+2.4%', icon: <Users size={24} />, trend: 'up' },
    { title: 'Daily Revenue', value: '$84.2K', change: '+12.5%', icon: <BarChart3 size={24} />, trend: 'up' },
    { title: 'Safety Rating', value: '99.8%', change: '+0.1%', icon: <ShieldCheck size={24} />, trend: 'up' },
  ];

  const recentFlights = [
    { id: '#FL-2034', aircraft: 'Boeing 747', destination: 'London (LHR)', status: 'On Time', time: '14:30' },
    { id: '#FL-2035', aircraft: 'Airbus A320', destination: 'Paris (CDG)', status: 'Delayed', time: '15:15' },
    { id: '#FL-2036', aircraft: 'Boeing 787', destination: 'New York (JFK)', status: 'Boarding', time: '16:00' },
    { id: '#FL-2037', aircraft: 'Airbus A380', destination: 'Dubai (DXB)', status: 'On Time', time: '16:45' },
  ];

  const notifications = [
    { title: 'Weather Alert', message: 'Heavy storm approaching north terminal. Expect delays.', type: 'alert', time: '5 MIN AGO' },
    { title: 'New Staff Entry', message: '12 new security personnel onboarded today.', type: 'info', time: '1 HOUR AGO' },
    { title: 'System Update', message: 'Main server maintenance scheduled for 02:00 AM.', type: 'warning', time: '3 HOURS AGO' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="System Overview">
      <div className="space-y-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <DashboardCard key={i} {...s} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Activity Table */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-[0.2em]">Real-time Status Feed</h3>
              <button className="text-brand-primary font-bold text-[10px] uppercase hover:underline tracking-widest">Global Schedule</button>
            </div>
            <Table 
              headers={['Flight ID', 'Aircraft', 'Destination', 'Status', 'Time']} 
              data={recentFlights}
            />
          </div>

          {/* Notifications Panel */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-[0.2em]">Operational Alerts</h3>
            <NotificationPanel notifications={notifications} />
          </div>
        </div>

        {/* Dashboard Analytics Placeholder */}
        <div className="bg-white border border-border-neutral rounded-3xl p-12 text-slate-900 relative overflow-hidden shadow-sm">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl font-bold mb-6 tracking-tighter uppercase">Operational Analytics</h2>
            <p className="text-text-secondary mb-10 leading-loose text-sm font-medium tracking-wide">
              Real-time monitoring of aeroport efficiency, transit throughput, and resource allocation
              across all sectors and flight operations.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="btn-primary">Generate Report</button>
              <button className="px-8 py-3 bg-slate-50 border border-border-neutral rounded-xl font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-slate-100 transition-all">
                Sync Viewport
              </button>
            </div>
          </div>
          <Activity className="absolute bottom-[-60px] right-[-40px] w-96 h-96 text-brand-primary opacity-[0.05] rotate-12" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminOverview;
