import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardLayout = ({ children, dashboardType, menus, pageTitle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="h-screen bg-bg-main flex overflow-hidden">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} dashboardType={dashboardType} menus={menus} />
      
      <main className={`flex-1 flex flex-col h-screen min-w-0 transition-all duration-300 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'} ml-0 bg-[#F8FAFC]`}>
        <Navbar title={pageTitle} toggleSidebar={() => setIsMobileOpen(true)} />
        
        {/* Fixed Content Area with Internal Scroll */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto w-full shiv-animate-entry">
          <div className="pb-8">
            {children}
          </div>
        </div>
        
        <footer className="py-3 text-center text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] border-t-2 border-slate-100 bg-white">
          &copy; {new Date().getFullYear()} Aero Command. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default DashboardLayout;
