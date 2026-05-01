import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';
import { useNotification } from '../contexts/NotificationContext';

const Navbar = ({ title, toggleSidebar }) => {
  const { addNotification } = useNotification();

  const handleSearch = (e) => {
    e.preventDefault();
    addNotification('Search Engine Primed: Indexing global database...', 'info');
  };

  return (
    <header 
      style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
      className="sticky top-0 z-30 flex flex-wrap h-auto min-h-16 items-center justify-between border-b-2 border-[#0a3d62]/10 bg-white px-4 sm:px-6 lg:px-8 py-2 transition-all duration-300 gap-2"
    >
      <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
        {toggleSidebar && (
          <button onClick={toggleSidebar} className="lg:hidden p-2 -ml-2 text-slate-700 hover:text-[#0a3d62] rounded-lg transition-colors shrink-0">
            <Menu size={24} />
          </button>
        )}
        <h2 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest truncate">{title}</h2>
      </div>
      
      <div className="flex items-center gap-6">
        <form onSubmit={handleSearch} className="hidden md:flex items-center bg-slate-50 px-4 py-2 rounded-xl border-2 border-slate-100 focus-within:border-[#0a3d62] focus-within:bg-white transition-all duration-300 shadow-sm">
          <Search size={16} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search Command..." 
            className="bg-transparent border-none focus:ring-0 text-[11px] font-bold uppercase tracking-widest ml-3 w-48 lg:w-64 text-[#0a3d62] placeholder:text-slate-300 outline-none"
          />
        </form>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => addNotification('Encrypted communication channel active. 0 unread reports.', 'info')}
            className="relative p-2.5 text-slate-400 hover:text-[#0a3d62] hover:bg-slate-50 border-2 border-transparent hover:border-[#0a3d62]/10 rounded-xl transition-all"
          >
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#FF8A00] rounded-full border-2 border-white"></span>
          </button>
        </div>
        
        <div 
          onClick={() => addNotification('User profile synchronized.', 'info')}
          className="flex items-center gap-4 pl-6 border-l-2 border-slate-100 cursor-pointer group"
        >
          <div className="text-right hidden sm:block">
            <p className="text-[11px] font-bold text-[#0a3d62] uppercase group-hover:text-[#FF8A00] transition-colors">Operational Lead</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Duty Officer</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-[#0a3d62] shadow-sm transition-all group-hover:border-[#0a3d62]/20 group-hover:scale-105">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
