import React from 'react';
import { ArrowRight, Plane, ShieldCheck, Users, Activity, Settings, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const dashboards = [
    { name: 'Admin',       path: '/admin',       icon: <Settings size={22} />,    desc: 'System control & core protocols.' },
    { name: 'Pilot',       path: '/pilot',       icon: <Plane size={22} />,       desc: 'Flight execution & navigation.' },
    { name: 'Passenger',   path: '/passenger',   icon: <Users size={22} />,       desc: 'Transit & experience management.' },
    { name: 'Operations',  path: '/operations',  icon: <Activity size={22} />,    desc: 'Ground coordination & air traffic.' },
    { name: 'Maintenance', path: '/maintenance', icon: <ShieldCheck size={22} />, desc: 'Aircraft integrity & repair logs.' },
    { name: 'Ticketing',   path: '/ticketing',   icon: <Ticket size={22} />,      desc: 'Revenue streams & transit validation.' },
  ];

  return (
    <div className="min-h-screen bg-bg-main flex flex-col items-center justify-center p-6 font-sans">

      {/* Header */}
      <div className="text-center mb-8">
        {/* Logo Mark */}
        <div className="inline-flex items-center justify-center mb-5">
          <div className="relative">
            {/* Outer dashed ring */}
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#0a3d62]/25 flex items-center justify-center">
              {/* Inner filled circle */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#0a3d62', boxShadow: '0 10px 15px -3px rgba(10, 61, 98, 0.3)' }}
              >
                <Plane size={30} className="text-white -rotate-45" strokeWidth={1.8} />
              </div>
            </div>
            {/* Orbit dot */}
            <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#c7ecee] border-2 border-[#0a3d62]/40" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight" style={{ color: '#0a3d62', letterSpacing: '-0.02em' }}>
          Aeroport
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-[0.15em] uppercase mt-1" style={{ color: '#0a3d62', opacity: 0.7 }}>
          Management
        </h2>
        {/* Decorative line + tagline */}
        <div className="flex items-center justify-center gap-3 mt-3">
          <div className="h-px w-12 bg-[#0a3d62]/30 rounded" />
          <p className="text-sm text-[#0a3d62]/55 font-medium tracking-widest uppercase">
            Select Your Portal
          </p>
          <div className="h-px w-12 bg-[#0a3d62]/30 rounded" />
        </div>
      </div>

      {/* Outer Wrapper Card */}
      <div style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} className="bg-transparent border-2 border-transparent hover:border-[#0a3d62] transition-colors duration-300 rounded-3xl p-6 w-full max-w-4xl">

        {/* Inner label */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
          <span className="text-base font-bold text-[#0a3d62] uppercase tracking-widest">Choose Your Portal</span>
          <span className="text-[10px] text-slate-400 font-medium">6 Portals Available</span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dashboards.map((db) => (
            <Link
              key={db.path}
              to={db.path}
              style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: 'rgba(248, 194, 145, 0.18)' }}
              className="group border-2 border-transparent rounded-2xl p-6 hover:border-[#0a3d62] hover:bg-white transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#c7ecee] border border-[#0a3d62]/15 flex items-center justify-center mb-4 text-[#0a3d62] group-hover:bg-[#0a3d62] group-hover:text-white transition-all duration-200">
                {db.icon}
              </div>

              {/* Text */}
              <h3 className="text-base sm:text-lg font-bold text-[#0a3d62] mb-1.5 uppercase tracking-tight break-words">
                {db.name}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{db.desc}</p>

              {/* Footer link */}
              <div className="flex items-center gap-1.5 text-sm font-bold text-slate-400 group-hover:text-[#0a3d62] uppercase tracking-widest transition-colors duration-200 pt-3 border-t border-slate-200">
                Enter Portal <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-[9px] text-[#0a3d62]/40 font-bold uppercase tracking-[0.3em]">
        Aeroport Management System · Secure Protocol Active
      </p>
    </div>
  );
};

export default Home;
