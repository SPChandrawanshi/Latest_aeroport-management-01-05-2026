import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { Plane, Clock, MapPin, ShieldCheck } from 'lucide-react';

const AssignedFlights = ({ menus }) => {
  const flights = [
    { callsign: 'SKY-441', origin: 'London (LHR)', destination: 'New York (JFK)', gate: 'B12', departure: '10:45', status: 'Boarding' },
    { callsign: 'SKY-902', origin: 'Paris (CDG)', destination: 'Tokyo (NRT)', gate: 'C05', departure: '14:20', status: 'Scheduled' },
    { callsign: 'SKY-112', origin: 'Dubai (DXB)', destination: 'London (LHR)', gate: 'A08', departure: '18:10', status: 'Scheduled' },
  ];

  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Assigned Flights">
      <div className="space-y-10 animate-in fade-in duration-700">
        <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
          <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
            <Plane size={24} className="text-shiv-primary" />
            Tactical Duty Roster
          </h3>
          <Table 
            headers={['Callsign', 'Origin', 'Destination', 'Gate', 'Departure', 'Status']}
            data={flights.map(f => ({
              ...f,
              status: (
                <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                  f.status === 'Boarding' ? 'bg-info/10 text-info border-info/20' : 'bg-shiv-bg-secondary text-shiv-muted border-shiv-border'
                }`}>
                  {f.status}
                </span>
              )
            }))}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AssignedFlights;
