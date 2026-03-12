import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { Ticket, CreditCard, Users, Plane, Search, BarChart3 } from 'lucide-react';

const BookingOverview = ({ menus }) => {
  const ticketingStats = [
    { title: 'Daily Bookings', value: '1,240', change: '+15%', icon: <Ticket size={24} />, trend: 'up' },
    { title: 'Total Revenue', value: '$254K', change: '+8.2%', icon: <CreditCard size={24} />, trend: 'up' },
    { title: 'Active Searches', value: '8.4K', change: 'Peak', icon: <Search size={24} />, trend: 'up' },
    { title: 'Conversion', value: '3.2%', change: '+0.4%', icon: <BarChart3 size={24} />, trend: 'up' },
  ];

  const recentBookings = [
    { bookingId: '#TK-4402', passenger: 'Alice Johnson', flight: 'SQ-12', class: 'Business', total: '$1,240' },
    { bookingId: '#TK-4403', passenger: 'Bob Smith', flight: 'BA-202', class: 'Economy', total: '$450' },
    { bookingId: '#TK-4404', passenger: 'Charlie Davis', flight: 'LH-311', class: 'First', total: '$3,800' },
    { bookingId: '#TK-4405', passenger: 'Diana Prince', flight: 'EM-402', class: 'Economy', total: '$520' },
  ];

  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Ticketing & Revenue Control">
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ticketingStats.map((s, i) => (
            <DashboardCard key={i} {...s} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] italic">Recent Sales Intelligence</h3>
            <Table 
              headers={['Booking ID', 'Passenger', 'Flight', 'Class', 'Total Amount']} 
              data={recentBookings}
            />
          </div>

          <div className="bg-shiv-card rounded-[2.5rem] border border-shiv-border shadow-2xl p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 italic">Ticketing Hub</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Issue Ticket', icon: <Ticket size={20} className="text-shiv-primary" /> },
                  { label: 'Refund', icon: <CreditCard size={20} className="text-red-500" /> },
                  { label: 'Pax List', icon: <Users size={20} className="text-shiv-primary" /> },
                  { label: 'Availability', icon: <Plane size={20} className="text-shiv-primary" /> },
                ].map((tool, i) => (
                  <button key={i} className="flex flex-col items-center justify-center p-6 bg-shiv-bg-secondary rounded-2xl hover:bg-shiv-card-hover transition-all border border-shiv-border group">
                    <div className="mb-3 group-hover:scale-110 transition-transform">{tool.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-shiv-muted group-hover:text-shiv-text-primary">{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-10 pt-10 border-t border-shiv-border">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em] mb-2">Total Sales Cycle</p>
                  <p className="text-4xl font-black text-shiv-text-primary italic tracking-tighter">$254,120</p>
                </div>
                <div className="bg-success/10 px-3 py-1.5 rounded-lg border border-success/30 text-[10px] font-black text-success uppercase tracking-widest">
                  Efficiency: 102%
                </div>
              </div>
              <div className="h-2 bg-shiv-bg-secondary rounded-full overflow-hidden border border-shiv-border">
                <div className="h-full bg-shiv-primary rounded-full shadow-lg shadow-orange-500/50" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookingOverview;
