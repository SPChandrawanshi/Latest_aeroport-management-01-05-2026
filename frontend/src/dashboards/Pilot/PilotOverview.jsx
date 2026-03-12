import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { Plane, Clock, ShieldCheck, MapPin, Wind, Map, Activity, Globe } from 'lucide-react';

const PilotOverview = ({ menus }) => {
  const pilotStats = [
    { title: 'Total Hours', value: '12,450', change: '+45h', icon: <Clock size={24} />, trend: 'up' },
    { title: 'Current Flight', value: 'PA-202', change: 'En Route', icon: <Plane size={24} />, trend: 'up' },
    { title: 'Next Briefing', value: '08:30 AM', change: 'In 2 Hours', icon: <ShieldCheck size={24} />, trend: 'up' },
    { title: 'Destinations', value: '42', change: 'Global', icon: <Globe size={24} />, trend: 'up' },
  ];

  const globeIcon = <MapPin size={24} />; // Using MapPin as globe fallback

  const upcomingFlights = [
    { callsign: 'SKY-441', origin: 'London (LHR)', destination: 'New York (JFK)', gate: 'B12', departure: '10:45' },
    { callsign: 'SKY-902', origin: 'Paris (CDG)', destination: 'Tokyo (NRT)', gate: 'C05', departure: '14:20' },
    { callsign: 'SKY-112', origin: 'Dubai (DXB)', destination: 'London (LHR)', gate: 'A08', departure: '18:10' },
  ];

  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Pilot Flight Deck">
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilotStats.map((s, i) => (
            <DashboardCard key={i} {...s} icon={s.title === 'Destinations' ? globeIcon : s.icon} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] italic">Vector Assignments</h3>
            <Table 
              headers={['Callsign', 'Origin', 'Destination', 'Gate', 'Departure']} 
              data={upcomingFlights}
            />
          </div>

          <div className="bg-shiv-card rounded-[2.5rem] border border-shiv-border shadow-2xl p-10 space-y-8">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] italic flex items-center gap-3">
              <Wind size={20} className="text-shiv-primary" />
              Meteorological Brief
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 bg-shiv-bg-secondary rounded-2xl border border-shiv-border">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-shiv-card rounded-xl border border-shiv-border flex items-center justify-center text-shiv-primary shadow-lg shadow-black/20">
                    <Plane size={28} />
                  </div>
                  <div>
                    <p className="font-black text-shiv-text-primary tracking-tight">VECTOR: LHR → JFK</p>
                    <p className="text-[10px] text-shiv-muted uppercase font-black tracking-[0.2em]">ALT: 36,000 FT // OPTIMAL</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black text-success uppercase tracking-widest mb-1">Zenith Status</p>
                  <p className="text-[10px] font-bold text-shiv-muted uppercase tracking-tighter">Vis: 10NM CAVOK</p>
                </div>
              </div>
              <div className="p-6 bg-warning/5 rounded-2xl border border-warning/20 border-dashed">
                <p className="text-[10px] font-black text-warning uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                  <Activity size={14} /> METAR Intelligence
                </p>
                <p className="text-sm text-shiv-text-secondary leading-relaxed italic font-bold">
                  "Light crosswinds detected on JFK 04R approach vector. Wind velocity 08G12KT. Stabilized approach recommended."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};


export default PilotOverview;
