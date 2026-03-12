import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Plane, 
  Users, 
  Settings, 
  BarChart3, 
  Bell, 
  LogOut,
  ChevronLeft,
  Menu,
  X,
  User,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Ticket,
  ClipboardList,
  MapPin,
  Clock,
  AlertTriangle,
  Wrench
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ isCollapsed, setIsCollapsed, isOpen, setIsOpen, dashboardType, menus }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const closeMobile = () => setIsOpen(false);

  const getIcon = (label) => {
    const icons = {
      'Overview': <LayoutDashboard size={20} />,
      'Airport Management': <MapPin size={20} />,
      'Aircraft Management': <Plane size={20} />,
      'Staff Management': <Users size={20} />,
      'Flight Scheduling': <Calendar size={20} />,
      'Reports': <BarChart3 size={20} />,
      'Notifications': <Bell size={20} />,
      'System Settings': <Settings size={20} />,
      'Pilot Overview': <ShieldCheck size={20} />,
      'Assigned Flights': <Plane size={20} />,
      'Flight Logs': <ClipboardList size={20} />,
      'Weather Reports': <MapPin size={20} />,
      'Flight Schedule': <Clock size={20} />,
      'Messages': <MessageSquare size={20} />,
      'Profile': <User size={20} />,
      'Passenger Overview': <User size={20} />,
      'My Tickets': <Ticket size={20} />,
      'Booking History': <Clock size={20} />,
      'Flight Status': <Plane size={20} />,
      'Check-in': <ShieldCheck size={20} />,
      'Support': <MessageSquare size={20} />,
      'Operations Overview': <LayoutDashboard size={20} />,
      'Flight Tracking': <Plane size={20} />,
      'Departure Management': <Plane size={20} />,
      'Arrival Management': <Plane size={20} />,
      'Gate Management': <MapPin size={20} />,
      'Delay Monitoring': <AlertTriangle size={20} />,
      'Alerts': <AlertTriangle size={20} />,
      'Maintenance Overview': <Wrench size={20} />,
      'Aircraft Status': <Plane size={20} />,
      'Inspection Logs': <ClipboardList size={20} />,
      'Maintenance Schedule': <Calendar size={20} />,
      'Repair Requests': <AlertTriangle size={20} />,
      'Spare Parts': <Settings size={20} />,
      'Booking Overview': <LayoutDashboard size={20} />,
      'Ticket Booking': <Ticket size={20} />,
      'Ticket Cancellation': <X size={20} />,
      'Payment Records': <BarChart3 size={20} />,
      'Passenger List': <Users size={20} />,
      'Flight Availability': <Plane size={20} />,
    };
    return icons[label] || <LayoutDashboard size={20} />;
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0a3d62]/20 backdrop-blur-sm z-40 transition-opacity" onClick={closeMobile} />
      )}

      {/* Sidebar */}
      <aside 
        style={{ backgroundColor: 'rgba(248, 194, 145, 1)' }}
        className={`fixed top-0 left-0 h-full text-[#0a3d62] transition-all duration-300 z-50 border-r border-[#0a3d62]/20 shadow-2xl
        ${isCollapsed ? 'w-20' : 'w-64'} 
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        <div className="p-6 flex items-center justify-between border-b border-[#0a3d62]/20">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <Plane className="text-brand-primary" size={28} />
              <span className="font-black text-xl text-[#0a3d62] tracking-tighter italic uppercase">Aero Command</span>
            </div>
          )}
          {isCollapsed && <Plane className="text-brand-primary mx-auto" size={28} />}
          
          <button onClick={toggleSidebar} className="hidden lg:block text-[#0a3d62]/60 hover:text-[#0a3d62]">
            <ChevronLeft size={20} className={isCollapsed ? 'rotate-180' : ''} />
          </button>
        </div>

        <div className="py-6 px-3 space-y-2 overflow-y-auto h-[calc(100%-160px)] custom-scrollbar">
          <div className="px-3 mb-2 text-[10px] font-black text-[#0a3d62]/60 uppercase tracking-[0.2em]">
            {!isCollapsed ? `${dashboardType} Control` : dashboardType[0]}
          </div>
          
          {menus.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.path}
              onClick={closeMobile}
              className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 border
                ${isActive ? 'bg-[#0a3d62] text-white border-[#0a3d62] shadow-lg shadow-[#0a3d62]/20' : 'border-transparent hover:border-[#0a3d62] hover:text-[#0a3d62] hover:bg-white/50'}`}
            >
              <span className="shrink-0">{getIcon(menu.label)}</span>
              {!isCollapsed && <span className="font-bold text-sm tracking-wide">{menu.label}</span>}
            </NavLink>
          ))}
        </div>

        <div className="absolute bottom-6 left-0 w-full px-4">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 w-full px-5 py-4 bg-brand-dark/50 border border-brand-border/50 text-slate-400 hover:text-error hover:border-error/30 hover:bg-white/5 rounded-2xl transition-all uppercase text-[10px] font-black tracking-[0.3em] cursor-pointer group/logout shadow-lg"
          >
            <LogOut size={20} className="group-hover/logout:-translate-x-1 transition-transform" />
            {!isCollapsed && <span>System Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
