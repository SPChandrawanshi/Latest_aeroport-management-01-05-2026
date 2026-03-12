import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { History, Download } from 'lucide-react';

const BookingHistory = ({ menus }) => {
  const history = [
    { id: 'BK-7701', flight: 'QA-112', route: 'LHR - DXB', date: 'Feb 15, 2026', total: '$1,250', status: 'Completed' },
    { id: 'BK-6552', flight: 'QA-902', route: 'SIN - DXB', date: 'Jan 10, 2026', total: '$940', status: 'Completed' },
    { id: 'BK-5011', flight: 'QA-441', route: 'JFK - LHR', date: 'Dec 02, 2025', total: '$2,100', status: 'Refunded' },
  ];

  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Journey Archive">
      <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl animate-in fade-in duration-700">
        <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
          <History size={28} className="text-shiv-primary" />
          Mission Archive
        </h3>
        <Table 
          headers={['Booking ID', 'Flight', 'Route', 'Travel Date', 'Amount', 'Status', 'Actions']}
          data={history.map(h => ({
            ...h,
            id: <span className="font-black text-shiv-text-primary italic tracking-tighter uppercase">{h.id}</span>,
            flight: <span className="font-black text-shiv-text-secondary">{h.flight}</span>,
            status: (
              <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                h.status === 'Completed' ? 'bg-success/10 text-success border-success/20' : 'bg-error/10 text-error border-error/20'
              }`}>
                {h.status}
              </span>
            ),
            actions: <button className="p-3 bg-shiv-bg-secondary border border-shiv-border rounded-xl text-shiv-muted hover:text-shiv-primary transition-all group"><Download size={18} className="group-hover:-translate-y-1 transition-transform" /></button>
          }))}
        />
      </div>
    </DashboardLayout>
  );
};

export default BookingHistory;
