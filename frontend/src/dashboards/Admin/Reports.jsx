import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { BarChart3, Download, TrendingUp, DollarSign, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

const AdminReports = ({ menus }) => {
  const reports = [
    { title: 'Operational Efficiency Q1', type: 'System Audit', date: '2026-03-01', size: '2.4 MB', author: 'System AI' },
    { title: 'Fleet Maintenance Log', type: 'Maintenance', date: '2026-02-28', size: '1.1 MB', author: 'Tech Lead' },
    { title: 'Staff Performance Review', type: 'Personnel', date: '2026-02-15', size: '840 KB', author: 'HR HQ' },
    { title: 'Fuel Consumption Metrics', type: 'Logistics', date: '2026-02-10', size: '3.5 MB', author: 'Ops Manager' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="System Reports">
      <div className="space-y-6 animate-in fade-in duration-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Growth Index */}
          <div className="shiv-tinted-panel p-6 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0a3d62] text-white flex items-center justify-center shadow-lg group-hover:bg-[#FF8A00] transition-colors">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Growth Index</p>
                <h4 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter">+14.2%</h4>
              </div>
            </div>
            <Chart data={[10, 25, 18, 42, 35, 50, 48]} height={60} color="#0a3d62" />
          </div>
          
          {/* Card 2: Revenue KPI */}
          <div className="shiv-tinted-panel p-6 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0a3d62] text-white flex items-center justify-center shadow-lg group-hover:bg-[#FF8A00] transition-colors">
                <DollarSign size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Revenue KPI</p>
                <h4 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter">$4.2M</h4>
              </div>
            </div>
            <Chart data={[60, 45, 78, 55, 90, 85]} height={60} color="#FF8A00" />
          </div>

          {/* Card 3: Fleet Status */}
          <div className="shiv-tinted-panel p-6 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0a3d62] text-white flex items-center justify-center shadow-lg group-hover:bg-[#FF8A00] transition-colors">
                <Activity size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Fleet Status</p>
                <h4 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter">98.4%</h4>
              </div>
            </div>
            <Chart data={[80, 85, 90, 88, 95, 98]} height={60} color="#10B981" />
          </div>

          {/* Card 4: Security */}
          <div className="shiv-tinted-panel p-6 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0a3d62] text-white flex items-center justify-center shadow-lg group-hover:bg-[#FF8A00] transition-colors">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Security KPI</p>
                <h4 className="text-[20px] font-bold text-[#0a3d62] tracking-tighter">L-1 Active</h4>
              </div>
            </div>
            <Chart data={[40, 50, 45, 60, 55, 65]} height={60} color="#6366F1" />
          </div>
        </div>

        {/* Data Warehouse Table */}
        <div className="shiv-perfect-card p-6 sm:p-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-slate-50">
            <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest flex items-center gap-4">
              <BarChart3 size={20} className="text-[#FF8A00]" />
              Strategic Data Warehouse
            </h3>
            <button className="text-[#0a3d62] font-bold text-[10px] tracking-widest uppercase flex items-center gap-3 hover:gap-4 transition-all group">
              Access Archives <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <Table 
            headers={['Report Title', 'Category', 'Generated', 'Size', 'Actions']}
            data={reports.map(r => ({
              ...r,
              actions: (
                <button className="p-2 bg-slate-50 hover:bg-[#0a3d62] rounded-lg text-[#0a3d62] hover:text-white border-2 border-slate-100 hover:border-[#0a3d62] transition-all shadow-sm">
                  <Download size={16} />
                </button>
              )
            }))}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminReports;
