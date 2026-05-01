import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { DollarSign, BarChart3, TrendingUp, Activity } from 'lucide-react';

const MaintenanceReports = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Engineering Intelligence">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-700">
         <div 
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#0a3d62]/10 h-fit transition-all"
         >
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8">Repair Efficiency Cycle Q1</h4>
            <Chart type="bar" data={[88, 85, 92, 90, 94, 91]} height={120} color="#FF8A00" />
            <div className="mt-8 flex justify-between items-end">
               <div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Efficiency Delta</p>
                  <p className="text-[28px] font-bold text-[#0a3d62] tracking-tighter leading-none">+12.4%</p>
               </div>
               <div className="w-10 h-10 rounded-lg bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center text-emerald-600">
                  <TrendingUp size={20} />
               </div>
            </div>
         </div>

         <div 
            style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#0a3d62]/10"
         >
            <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest mb-10 flex items-center gap-3">
              <BarChart3 size={20} className="text-[#FF8A00]" />
              Tactical Resource Audit
            </h3>
            <Table 
              headers={['Department', 'Labor Hours', 'Material Cost', 'Efficiency Index']}
              data={[
                { dept: 'Engine Shop', hrs: '2,440', cost: '$1.2M', index: <span className="text-[#0a3d62] font-bold">94%</span> },
                { dept: 'Avionics Lab', hrs: '880', cost: '$440K', index: <span className="text-emerald-600 font-bold">98%</span> },
                { dept: 'Hangar Ops', hrs: '4,120', cost: '$220K', index: <span className="text-amber-600 font-bold">82%</span> },
              ].map(row => ({
                ...row,
                dept: <span className="font-bold text-[#0a3d62] uppercase tracking-tight">{row.dept}</span>,
                cost: <span className="font-bold text-slate-500">{row.cost}</span>
              }))}
            />
         </div>
      </div>

      <div 
        style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', backgroundColor: 'rgba(248, 194, 145, 0.18)' }}
        className="mt-6 p-6 rounded-2xl border-2 border-[#0a3d62]/10 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
            <Activity className="text-[#0a3d62]" size={24} />
            <p className="text-[11px] font-bold text-[#0a3d62] uppercase tracking-widest">Global Maintenance Optimization Protocol Active</p>
        </div>
        <button className="text-[#0a3d62] font-bold text-[10px] uppercase tracking-widest border-b-2 border-[#0a3d62]/20 hover:border-[#0a3d62] transition-all">
            Detailed Analysis
        </button>
      </div>
    </DashboardLayout>
  );
};

export default MaintenanceReports;
