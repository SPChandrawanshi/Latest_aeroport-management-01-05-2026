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
import { useNotification } from '../contexts/NotificationContext';

const Sidebar = ({ isCollapsed, setIsCollapsed, isOpen, setIsOpen, dashboardType, menus }) => {
  const navigate = useNavigate();
  const { addNotification } = useNotification();

  const handleLogout = () => {
    addNotification('Terminating secure session... Access revoked.', 'error');
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const closeMobile = () => setIsOpen(false);

  const getIcon = (label) => {
    const icons = {
      'Overview': <LayoutDashboard size={18} />,
      'Airport Management': <MapPin size={18} />,
      'Aircraft Management': <Plane size={18} />,
      'Staff Management': <Users size={18} />,
      'Flight Scheduling': <Calendar size={18} />,
      'Reports': <BarChart3 size={18} />,
      'Notifications': <Bell size={18} />,
      'System Settings': <Settings size={18} />,
      'Pilot Overview': <ShieldCheck size={18} />,
      'Assigned Flights': <Plane size={18} />,
      'Flight Logs': <ClipboardList size={18} />,
      'Weather Reports': <MapPin size={18} />,
      'Flight Schedule': <Clock size={18} />,
      'Messages': <MessageSquare size={18} />,
      'Profile': <User size={18} />,
      'Passenger Overview': <User size={18} />,
      'My Tickets': <Ticket size={18} />,
      'Booking History': <Clock size={18} />,
      'Flight Status': <Plane size={18} />,
      'Check-in': <ShieldCheck size={18} />,
      'Support': <MessageSquare size={18} />,
      'Operations Overview': <LayoutDashboard size={18} />,
      'Flight Tracking': <Plane size={18} />,
      'Departure Management': <Plane size={18} />,
      'Arrival Management': <Plane size={18} />,
      'Gate Management': <MapPin size={18} />,
      'Delay Monitoring': <AlertTriangle size={18} />,
      'Alerts': <AlertTriangle size={18} />,
      'Maintenance Overview': <Wrench size={18} />,
      'Aircraft Status': <Plane size={18} />,
      'Inspection Logs': <ClipboardList size={18} />,
      'Maintenance Schedule': <Calendar size={18} />,
      'Repair Requests': <AlertTriangle size={18} />,
      'Spare Parts': <Settings size={18} />,
      'Booking Overview': <LayoutDashboard size={18} />,
      'Ticket Booking': <Ticket size={18} />,
      'Ticket Cancellation': <X size={18} />,
      'Payment Records': <BarChart3 size={18} />,
      'Passenger List': <Users size={18} />,
      'Flight Availability': <Plane size={18} />,
    };
    return icons[label] || <LayoutDashboard size={18} />;
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-[#0a3d62]/20 backdrop-blur-sm z-40 transition-opacity" onClick={closeMobile} />
      )}

      {/* Sidebar */}
      <aside 
        style={{ backgroundColor: 'rgba(248, 194, 145, 1)', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
        className={`fixed top-0 left-0 h-full text-[#0a3d62] transition-all duration-300 z-50 border-r-2 border-[#0a3d62]/10
        ${isCollapsed ? 'w-20' : 'w-64'} 
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        
        <div className="p-6 flex items-center justify-between border-b-2 border-[#0a3d62]/10">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0a3d62] text-white flex items-center justify-center">
                <Plane size={20} />
              </div>
              <span className="font-bold text-[14px] text-[#0a3d62] uppercase tracking-tighter">Aero Command</span>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 rounded-lg bg-[#0a3d62] text-white flex items-center justify-center mx-auto">
              <Plane size={20} />
            </div>
          )}
          
          <button onClick={toggleSidebar} className="hidden lg:block text-[#0a3d62]/60 hover:text-[#0a3d62]">
            <ChevronLeft size={18} className={isCollapsed ? 'rotate-180' : ''} />
          </button>
        </div>

        <div className="py-6 px-3 space-y-2 overflow-y-auto h-[calc(100%-160px)] custom-scrollbar">
          <div className="px-4 mb-3 text-[10px] font-black text-[#0a3d62]/40 uppercase tracking-widest">
            {!isCollapsed ? `${dashboardType} Control` : dashboardType[0]}
          </div>
          
          {menus.map((menu, index) => (
            <NavLink
              key={index}
              to={menu.path}
              onClick={closeMobile}
              className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 shiv-menu-item
                ${isActive ? 'active bg-white text-[#0a3d62] shadow-lg' : 'text-[#0a3d62] hover:bg-[#0a3d62]/5'}`}
            >
              <span className="shrink-0">{getIcon(menu.label)}</span>
              <span className={`font-bold text-[12px] uppercase tracking-tight whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
                {menu.label}
              </span>
            </NavLink>
          ))}
        </div>

        <div className="absolute bottom-6 left-0 w-full px-3">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-4 w-full px-4 py-3.5 bg-[#0a3d62] text-white border-2 border-[#0a3d62]/10 rounded-xl hover:bg-[#0c4a75] transition-all uppercase text-[10px] font-bold tracking-widest cursor-pointer group/logout shadow-lg overflow-hidden"
          >
            <div className="shrink-0"><LogOut size={18} className="group-hover/logout:-translate-x-1 transition-transform" /></div>
            <span className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'}`}>
              System Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
