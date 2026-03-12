import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = ({ children, dashboardType, menus, pageTitle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-main flex overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} dashboardType={dashboardType} menus={menus} />
      
      <main className={`flex-1 w-full min-w-0 transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'} ml-0`}>
        <Navbar title={pageTitle} toggleSidebar={() => setIsMobileOpen(true)} />
        <div className="p-4 sm:p-6 lg:p-10 max-w-full overflow-x-hidden mx-auto min-h-[calc(100vh-160px)]">
          {children}
        </div>
        
        <footer className="p-6 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] border-t border-border-neutral bg-white">
          &copy; {new Date().getFullYear()} Aero Command. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
