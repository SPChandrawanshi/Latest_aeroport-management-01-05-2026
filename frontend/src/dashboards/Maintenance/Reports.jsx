import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { DollarSign, BarChart3, TrendingUp } from 'lucide-react';

const MaintenanceReports = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Maintenance" menus={menus} pageTitle="Engineering Intelligence">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in duration-700">
         <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl h-fit hover:bg-shiv-card-hover transition-all">
            <h4 className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em] mb-8 italic">Repair Efficiency Cycle Q1</h4>
            <Chart data={[88, 85, 92, 90, 94, 91]} height={120} color="#FF8A00" />
            <div className="mt-8 flex justify-between items-end">
               <div>
                  <p className="text-[10px] font-black text-success uppercase tracking-widest mb-1">Efficiency Delta</p>
                  <p className="text-3xl font-black text-shiv-text-primary italic">+12.4%</p>
               </div>
               <TrendingUp className="text-success" size={32} />
            </div>
         </div>
         <div className="lg:col-span-2 bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
              <BarChart3 size={24} className="text-shiv-primary" />
              Tactical Resource Audit
            </h3>
            <Table 
              headers={['Department', 'Labor Hours', 'Material Cost', 'Efficiency Index']}
              data={[
                { dept: 'Engine Shop', hrs: '2,440', cost: '$1.2M', index: <span className="text-shiv-primary font-black italic">94%</span> },
                { dept: 'Avionics Lab', hrs: '880', cost: '$440K', index: <span className="text-success font-black italic">98%</span> },
                { dept: 'Hangar Ops', hrs: '4,120', cost: '$220K', index: <span className="text-warning font-black italic">82%</span> },
              ].map(row => ({
                ...row,
                dept: <span className="font-black text-shiv-text-primary uppercase tracking-tight">{row.dept}</span>,
                cost: <span className="font-bold text-shiv-text-secondary">{row.cost}</span>
              }))}
            />
         </div>
      </div>
    </DashboardLayout>
  );
};

export default MaintenanceReports;
