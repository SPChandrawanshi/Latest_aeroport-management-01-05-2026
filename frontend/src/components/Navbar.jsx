import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

const Navbar = ({ title, toggleSidebar }) => {
  return (
    <header className="sticky top-0 z-30 flex flex-wrap h-auto min-h-16 md:min-h-20 items-center justify-between border-b border-border-neutral bg-white/80 backdrop-blur-xl px-4 sm:px-6 lg:px-10 py-2 transition-all duration-300 gap-2">
      <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
        {toggleSidebar && (
          <button onClick={toggleSidebar} className="lg:hidden p-2 -ml-2 text-slate-700 hover:text-[#0a3d62] rounded-lg transition-colors shrink-0">
            <Menu size={24} />
          </button>
        )}
        <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight uppercase truncate">{title}</h2>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center bg-slate-50 px-5 py-2.5 rounded-xl border border-border-neutral focus-within:border-brand-primary transition-all duration-300">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search Command Center..." 
            className="bg-transparent border-none focus:ring-0 text-xs font-bold uppercase tracking-widest ml-3 w-48 lg:w-64 text-slate-700 placeholder:text-slate-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="relative p-2.5 text-slate-400 hover:text-brand-primary transition-colors">
            <Bell size={22} />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-brand-primary rounded-full border-2 border-white"></span>
          </button>
        </div>
        
        <div className="flex items-center gap-4 pl-6 border-l border-border-neutral">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Operational Lead</p>
            <p className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">Duty Officer</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white border border-border-neutral flex items-center justify-center text-slate-700 shadow-sm transform hover:rotate-3 transition-transform">
            <User size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
