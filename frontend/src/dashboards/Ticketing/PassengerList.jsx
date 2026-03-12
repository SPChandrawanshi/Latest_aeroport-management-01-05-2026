import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Users, UserCheck, ShieldAlert } from 'lucide-react';

const PassengerList = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Central Identity Registry">
      <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl animate-in fade-in duration-700">
        <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
          <Users size={28} className="text-shiv-primary" />
          Neural Identity Registry
        </h3>
        <Table 
          headers={['Member ID', 'Full Name', 'Tier Status', 'Total Flights', 'Points']}
          data={[
            { id: 'MBR-001', name: 'Alexander Reed', status: 'Gold', trips: '42', pts: '88,400' },
            { id: 'MBR-002', name: 'Linda Chen', status: 'Silver', trips: '12', pts: '24,100' },
            { id: 'MBR-003', name: 'James Wilson', status: 'Platinum', trips: '112', pts: '450,200' },
          ].map(row => ({
            ...row,
            id: <span className="font-black text-shiv-text-primary italic uppercase tracking-tighter">{row.id}</span>,
            status: (
              <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                row.status === 'Platinum' ? 'bg-shiv-primary/10 text-shiv-primary border-shiv-primary/20' : 
                row.status === 'Gold' ? 'bg-warning/10 text-warning border-warning/20' : 'bg-shiv-bg-secondary text-shiv-muted border-shiv-border'
              }`}>
                {row.status}
              </span>
            ),
            pts: <span className="font-black text-shiv-text-primary">{row.pts}</span>
          }))}
        />
      </div>
    </DashboardLayout>
  );
};

export default PassengerList;
