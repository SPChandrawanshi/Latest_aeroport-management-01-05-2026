import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Users, ShieldCheck, Mail, AlertTriangle } from 'lucide-react';

const PassengerList = ({ menus }) => {
  const [passengers, setPassengers] = useState([
    { id: 'MBR-001', name: 'Alexander Reed', passport: 'L9876543', verified: true, trips: '42', email: 'alex@example.com' },
    { id: 'MBR-002', name: 'Linda Chen', passport: 'P1122334', verified: false, trips: '12', email: 'linda@example.com' },
    { id: 'MBR-003', name: 'James Wilson', passport: 'K5566778', verified: true, trips: '112', email: 'james@example.com' },
  ]);

  const toggleVerify = (id) => {
    setPassengers(passengers.map(p => p.id === id ? { ...p, verified: !p.verified } : p));
  };

  const sendConfirmation = (name) => {
    alert(`Ticket Confirmation Message sent to ${name}!`);
  };

  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Passenger Management">
      <div className="bg-shiv-card p-5 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-shiv-border shadow-2xl animate-in fade-in duration-700">
        <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-6 sm:mb-10 flex items-center gap-4 italic font-sans">
          <Users size={28} className="text-shiv-primary" />
          Passenger Identity & Verification
        </h3>
        
        <div className="mb-6 bg-shiv-bg-secondary p-4 rounded-xl border border-shiv-border flex items-center gap-3">
          <AlertTriangle className="text-warning" size={20} />
          <p className="text-xs font-bold text-shiv-text-secondary uppercase tracking-wider">
            Admin Note: Please verify Passport Numbers before confirming International tickets.
          </p>
        </div>

        <Table 
          headers={['Member ID', 'Full Name', 'Passport No', 'Verification', 'Total Flights', 'Actions']}
          data={passengers.map(row => ({
            id: <span className="font-black text-shiv-text-primary italic uppercase tracking-tighter">{row.id}</span>,
            name: row.name,
            passport: <span className="font-mono text-shiv-primary font-bold">{row.passport}</span>,
            verification: (
              <button 
                onClick={() => toggleVerify(row.id)}
                className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest transition-all ${
                  row.verified ? 'bg-success/10 text-success border-success/20' : 'bg-error/10 text-error border-error/20'
                }`}
              >
                {row.verified ? 'Verified' : 'Unverified'}
              </button>
            ),
            trips: row.trips,
            actions: (
              <div className="flex gap-2">
                <button 
                  onClick={() => sendConfirmation(row.name)}
                  className="p-2 bg-shiv-primary/10 text-shiv-primary rounded-lg hover:bg-shiv-primary hover:text-white transition-all"
                  title="Send Confirmation Msg"
                >
                  <Mail size={16} />
                </button>
                <button 
                  className="p-2 bg-shiv-bg-secondary text-shiv-text-secondary rounded-lg hover:bg-shiv-border transition-all"
                  title="View Profile"
                >
                  <Users size={16} />
                </button>
              </div>
            )
          }))}
        />
      </div>
    </DashboardLayout>
  );
};

export default PassengerList;
