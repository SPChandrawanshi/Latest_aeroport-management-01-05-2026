import React from 'react';
import { ArrowRight, Plane, Users, Activity, Settings, Ticket, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const dashboards = [
    { name: 'Admin',       path: '/admin',       icon: <Settings size={12} />,    desc: 'System control & protocols.' },
    { name: 'Pilot',       path: '/pilot',       icon: <Plane size={12} />,       desc: 'Flight & navigation.' },
    { name: 'Passenger',   path: '/passenger',   icon: <Users size={12} />,       desc: 'Transit & management.' },
    { name: 'Operations',  path: '/operations',  icon: <Activity size={12} />,    desc: 'Ground coordination.' },
    { name: 'Maintenance', path: '/maintenance', icon: <Wrench size={12} />,      desc: 'Aircraft integrity.' },
    { name: 'Ticketing',   path: '/ticketing',   icon: <Ticket size={12} />,      desc: 'Revenue & validation.' },
  ];

  return (
    <div className="h-screen w-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Top Auth Navigation */}
      <div className="absolute top-4 right-6 flex gap-3 z-50">
        <Link to="/login" className="px-3 py-1 rounded-lg font-black text-[8px] transition-all border-2 border-slate-100 text-[#0a3d62] bg-white hover:border-[#0a3d62] shadow-sm uppercase tracking-widest">
          Login
        </Link>
        <Link to="/register" className="px-3 py-1 rounded-lg font-black text-[8px] text-white transition-all shadow-md bg-[#0a3d62] hover:bg-[#0c4a75] uppercase tracking-widest">
          Register
        </Link>
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center animate-in fade-in zoom-in duration-700">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center mb-2">
            <div className="w-9 h-9 rounded-lg bg-[#0a3d62] flex items-center justify-center shadow-lg">
              <Plane size={18} className="text-white -rotate-45" />
            </div>
          </div>
          <h1 className="text-[22px] font-black text-[#0a3d62] tracking-tighter leading-none uppercase">
            Aeroport Management
          </h1>
          <p className="text-[8px] text-slate-400 font-black uppercase tracking-[0.4em] mt-1.5">
            Enterprise Fleet & Logistics Portal
          </p>
        </div>

        {/* Cards Grid Container */}
        <div className="shiv-perfect-card w-full p-5 bg-white relative z-10 group">
          <div className="flex items-center justify-between mb-4 pb-2 border-b-2 border-slate-50">
            <span className="text-[9px] font-black text-[#0a3d62] uppercase tracking-widest">Select Command Center</span>
            <span className="text-[8px] text-slate-300 font-black uppercase tracking-tighter">6 Nodes Active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {dashboards.map((db) => (
              <Link
                key={db.path}
                to={db.path}
                className="shiv-tinted-panel p-3 group/card hover:bg-white hover:border-[#0a3d62] transition-all duration-300 border-2"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0a3d62] flex items-center justify-center mb-2 text-white shadow-md group-hover/card:bg-[#FF8A00] transition-colors duration-500">
                  {db.icon}
                </div>
                <h3 className="text-[11px] font-black text-[#0a3d62] mb-0.5 uppercase tracking-tight leading-none">{db.name}</h3>
                <p className="text-[8px] text-slate-400 font-bold leading-tight mb-3 line-clamp-1 uppercase tracking-tighter">{db.desc}</p>
                <div className="flex items-center gap-2 text-[8px] font-black text-slate-300 group-hover/card:text-[#0a3d62] uppercase tracking-widest transition-colors pt-2 border-t-2 border-slate-50/50">
                  Enter Portal <ArrowRight size={8} className="group-hover/card:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[7px] text-slate-300 font-black uppercase tracking-[0.5em]">
          Aeroport Management System © 2026 · Secure Infrastructure
        </p>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[#0a3d62] pointer-events-none scale-150">
          <Plane size={400} className="-rotate-12" />
      </div>
    </div>
  );
};

export default Home;
