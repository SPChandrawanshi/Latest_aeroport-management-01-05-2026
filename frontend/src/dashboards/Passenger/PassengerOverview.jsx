import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import DashboardCard from '../../components/DashboardCard';
import Table from '../../components/Table';
import { Ticket, History, Plane, ShieldCheck, MapPin, Heart, CreditCard, LifeBuoy } from 'lucide-react';

const PassengerOverview = ({ menus }) => {
  const stats = [
    { title: 'Active Tickets', value: '2', change: 'Manage', icon: <Ticket size={24} />, trend: 'up' },
    { title: 'Flying Hours', value: '1,240', change: '+20h', icon: <Plane size={24} />, trend: 'up' },
    { title: 'Loyalty Points', value: '88,400', change: 'Gold', icon: <Heart size={24} />, trend: 'up' },
    { title: 'Past Trips', value: '42', change: 'History', icon: <History size={24} />, trend: 'up' },
  ];

  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Passenger Welcome">
      <div className="space-y-12 animate-in fade-in duration-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl group hover:bg-shiv-card-hover hover:border-shiv-primary/30 transition-all animate-in zoom-in duration-700" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-shiv-bg-secondary border border-shiv-border rounded-2xl text-shiv-primary group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                <span className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest">{s.change}</span>
              </div>
              <p className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em] mb-2">{s.title}</p>
              <h4 className="text-4xl font-black text-shiv-text-primary italic tracking-tighter leading-none">{s.value}</h4>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-shiv-card p-12 rounded-[3.5rem] border border-shiv-border shadow-3xl relative overflow-hidden group">
              <h3 className="text-2xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-12 italic flex items-center gap-4 relative z-10">
                <ShieldCheck size={32} className="text-shiv-primary" />
                Mission Vector Brief
              </h3>
              <div className="relative z-10">
                <Table 
                  headers={['Mission ID', 'Vector Destination', 'Temporal Date', 'Sector', 'Protocol Status']}
                  data={[
                    { flight: 'QA-501', dest: 'London (LHR)', date: 'Mar 12, 2026', seat: '12A', status: <span className="text-success font-black uppercase text-[10px] tracking-widest px-4 py-1.5 bg-success/10 border border-success/20 rounded-lg">Confirmed</span> },
                    { flight: 'QA-229', dest: 'Paris (CDG)', date: 'Mar 25, 2026', seat: '04C', status: <span className="text-info font-black uppercase text-[10px] tracking-widest px-4 py-1.5 bg-info/10 border border-info/20 rounded-lg">Processing</span> },
                  ].map(row => ({
                    ...row,
                    flight: <span className="font-black text-shiv-text-primary italic">{row.flight}</span>,
                    dest: <span className="font-bold text-shiv-text-secondary">{row.dest}</span>
                  }))}
                />
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-[0.02] translate-x-12 -translate-y-12">
                 <ShieldCheck size={300} />
              </div>
            </div>
          </div>

          <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-12 rounded-[3.5rem] relative overflow-hidden flex flex-col justify-center shadow-3xl group">
            <div className="relative z-10">
               <MapPin className="text-shiv-primary mb-8 animate-bounce" size={56} />
               <h4 className="text-4xl font-black italic tracking-tighter mb-6 uppercase leading-tight">Transit Protocol Initializing</h4>
               <p className="text-shiv-muted text-sm font-bold mb-12 leading-loose tracking-wide">Secure biometric check-in for vector <span className="text-shiv-primary italic">QA-501</span> initializes in <span className="text-shiv-text-primary">48h</span>. Ensure all credentials are ready.</p>
               <button className="w-full py-6 bg-shiv-card border border-shiv-border text-shiv-primary rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-shiv-card-hover hover:border-shiv-primary/60 shadow-2xl transition-all">
                 LAUNCH TRANSIT HUB
               </button>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
               <Plane size={350} className="-rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PassengerOverview;
