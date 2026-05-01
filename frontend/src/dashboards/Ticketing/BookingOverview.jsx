import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { Ticket, CreditCard, Users, Plane, Search, BarChart3, ArrowRight, Activity } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';

const BookingOverview = ({ menus }) => {
  const { addNotification } = useNotification();
  
  const ticketingStats = [
    { title: 'Daily Bookings', value: '1,240', change: '+15%', icon: <Ticket size={22} />, trend: 'up' },
    { title: 'Total Revenue', value: '$254K', change: '+8.2%', icon: <CreditCard size={22} />, trend: 'up' },
    { title: 'Active Searches', value: '8.4K', change: 'Peak', icon: <Search size={22} />, trend: 'up' },
    { title: 'Conversion', value: '3.2%', change: '+0.4%', icon: <BarChart3 size={22} />, trend: 'up' },
  ];

  const recentBookings = [
    { bookingId: '#TK-4402', passenger: 'Alice Johnson', flight: 'SQ-12', class: 'Business', total: '$1,240' },
    { bookingId: '#TK-4403', passenger: 'Bob Smith', flight: 'BA-202', class: 'Economy', total: '$450' },
    { bookingId: '#TK-4404', passenger: 'Charlie Davis', flight: 'LH-311', class: 'First', total: '$3,800' },
    { bookingId: '#TK-4405', passenger: 'Diana Prince', flight: 'EM-402', class: 'Economy', total: '$520' },
  ];

  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Ticketing & Revenue Control">
      <div className="space-y-6 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ticketingStats.map((s, i) => (
            <div key={i} onClick={() => addNotification(`Financial deep-dive for ${s.title} initialized.`, 'success')} className="cursor-pointer h-full">
              <DashboardCard {...s} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="shiv-perfect-card p-6 sm:p-8">
                <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest mb-8 border-b-2 border-slate-50 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Activity size={20} className="text-[#FF8A00]" />
                      Recent Sales Intelligence
                    </div>
                    <ArrowRight size={16} className="text-slate-300" />
                </h3>
                <Table 
                    headers={['Booking ID', 'Passenger', 'Flight', 'Class', 'Total Amount']} 
                    data={recentBookings.map(b => ({
                        ...b,
                        bookingId: <span className="font-black text-[#0a3d62]">{b.bookingId}</span>,
                        total: <span className="font-bold text-slate-500">{b.total}</span>
                    }))}
                />
            </div>
          </div>

          <div className="shiv-perfect-card p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest mb-8 border-b-2 border-slate-50 pb-4">Ticketing Hub</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Issue Ticket', icon: <Ticket size={18} className="text-[#0a3d62]" /> },
                  { label: 'Refund', icon: <CreditCard size={18} className="text-red-500" /> },
                  { label: 'Pax List', icon: <Users size={18} className="text-[#0a3d62]" /> },
                  { label: 'Availability', icon: <Plane size={18} className="text-[#0a3d62]" /> },
                ].map((tool, i) => (
                  <button 
                    key={i} 
                    onClick={() => addNotification(`Hub Command: ${tool.label} module activated.`, 'success')}
                    className="shiv-tinted-panel !bg-slate-50/50 p-4 flex flex-col items-center justify-center border-2 hover:border-[#0a3d62] transition-all group/item"
                  >
                    <div className="mb-2 group-hover/item:scale-110 transition-transform">{tool.icon}</div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover/item:text-[#0a3d62] transition-colors">{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t-2 border-slate-50">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Sales Cycle</p>
                  <p className="text-[32px] font-black text-[#0a3d62] tracking-tighter leading-none">$254,120</p>
                </div>
                <div className="bg-emerald-50 px-3 py-1.5 rounded-lg border-2 border-emerald-100 text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                  102%
                </div>
              </div>
              <div className="h-2 bg-slate-50 rounded-full overflow-hidden border-2 border-slate-100">
                <div className="h-full bg-[#0a3d62] rounded-full shadow-md transition-all duration-1000 group-hover:bg-[#FF8A00]" style={{ width: '85%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookingOverview;
