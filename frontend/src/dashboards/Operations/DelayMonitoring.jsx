import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Chart from '../../components/Chart';
import { AlertTriangle, Clock, TrendingUp } from 'lucide-react';

const DelayMonitoring = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Operations" menus={menus} pageTitle="Dunctuality Audit">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in duration-700">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
             <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 italic">Tactical Delay Matrix (MIN)</h3>
             <Chart data={[12, 18, 15, 25, 22, 14, 10]} height={220} color="#FF8A00" />
           </div>
        </div>
        <div className="space-y-8">
           <div className="bg-warning/5 p-10 rounded-[2.5rem] border border-warning/20 shadow-2xl relative overflow-hidden group">
              <AlertTriangle className="text-shiv-primary mb-6 group-hover:rotate-12 transition-transform duration-500" size={40} />
              <h4 className="text-2xl font-black italic text-shiv-text-primary mb-4 uppercase tracking-tighter">Command Advisory</h4>
              <p className="text-xs text-shiv-text-secondary leading-[2] font-semibold tracking-wide italic">
                Increased ground congestion at LHR causing average <span className="text-shiv-primary font-black">12min taxi-out delays</span>. Operational buffers should be adjusted in vector sync.
              </p>
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12">
                <AlertTriangle size={200} />
              </div>
           </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DelayMonitoring;
