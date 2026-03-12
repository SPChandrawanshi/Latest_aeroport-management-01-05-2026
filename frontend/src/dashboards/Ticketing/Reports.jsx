import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { BarChart3, TrendingUp, Download } from 'lucide-react';

const TicketingReports = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Revenue Intelligence">
      <div className="space-y-10 animate-in fade-in duration-700">
         <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl relative overflow-hidden group">
            <div className="flex justify-between items-center mb-12 relative z-10">
               <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] flex items-center gap-4 italic font-sans">
                 <TrendingUp size={28} className="text-shiv-primary" />
                 Tactical Yield Index
               </h3>
               <button className="p-4 bg-shiv-bg-secondary border border-shiv-border rounded-2xl text-shiv-muted hover:text-shiv-primary hover:border-shiv-primary/30 transition-all group/btn">
                 <Download size={24} className="group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
            <div className="relative z-10">
              <Chart data={[45, 80, 65, 120, 100, 150]} height={200} color="#FF8A00" type="bar" />
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12">
               <TrendingUp size={200} />
            </div>
         </div>
      </div>
    </DashboardLayout>
  );
};

export default TicketingReports;
