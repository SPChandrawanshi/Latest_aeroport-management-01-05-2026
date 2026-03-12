import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Chart from '../../components/Chart';
import { BarChart3, Download, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

const AdminReports = ({ menus }) => {
  const reports = [
    { title: 'Operational Efficiency Q1', type: 'System Audit', date: '2026-03-01', size: '2.4 MB', author: 'System AI' },
    { title: 'Fleet Maintenance Log', type: 'Maintenance', date: '2026-02-28', size: '1.1 MB', author: 'Tech Lead' },
    { title: 'Staff Performance Review', type: 'Personnel', date: '2026-02-15', size: '840 KB', author: 'HR HQ' },
    { title: 'Fuel Consumption Metrics', type: 'Logistics', date: '2026-02-10', size: '3.5 MB', author: 'Ops Manager' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="System Reports">
      <div className="space-y-10 animate-in fade-in duration-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl relative overflow-hidden group">
            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="p-4 bg-info/10 text-info rounded-2xl border border-info/20 shadow-lg shadow-black/20 group-hover:rotate-12 transition-transform duration-500"><TrendingUp size={28} /></div>
              <div>
                <p className="text-[10px] text-shiv-muted font-black uppercase tracking-[0.3em] mb-2">Growth Index</p>
                <h4 className="text-4xl font-black italic tracking-tighter text-shiv-text-primary">+14.2%</h4>
              </div>
            </div>
            <Chart data={[10, 25, 18, 42, 35, 50, 48]} height={80} color="#38bdf8" />
          </div>
          
          <div className="bg-shiv-sidebar border border-shiv-border p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="p-4 bg-shiv-primary/10 text-shiv-primary rounded-2xl border border-shiv-primary/20 shadow-lg shadow-black/20 group-hover:-rotate-12 transition-transform duration-500"><DollarSign size={28} /></div>
              <div>
                <p className="text-[10px] text-shiv-muted font-black uppercase tracking-[0.3em] mb-2">Revenue KPI</p>
                <h4 className="text-4xl font-black italic tracking-tighter text-shiv-text-primary">$4.2M</h4>
              </div>
            </div>
            <Chart data={[60, 45, 78, 55, 90, 85]} height={80} color="#FF8A00" />
          </div>
        </div>

        <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] flex items-center gap-4 italic font-sans">
              <BarChart3 size={24} className="text-shiv-primary" />
              Strategic Data Warehouse
            </h3>
            <button className="text-shiv-primary font-black text-[10px] tracking-[0.3em] uppercase flex items-center gap-3 hover:gap-6 transition-all group">
              Access Archives <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <Table 
            headers={['Report Title', 'Category', 'Generated', 'Size', 'Actions']}
            data={reports.map(r => ({
              ...r,
              actions: (
                <button className="p-3 bg-shiv-bg-secondary hover:bg-shiv-card-hover rounded-xl text-shiv-primary border border-shiv-border transition-all">
                  <Download size={18} />
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
