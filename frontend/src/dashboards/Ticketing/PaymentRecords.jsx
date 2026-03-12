import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Chart from '../../components/Chart';
import { CreditCard, DollarSign, TrendingUp } from 'lucide-react';

const PaymentRecords = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Ticketing" menus={menus} pageTitle="Financial Audit">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-in fade-in duration-700">
         <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-12 rounded-[2.5rem] shadow-2xl flex flex-col justify-center relative overflow-hidden group">
            <DollarSign className="text-shiv-primary mb-6 group-hover:scale-110 transition-transform duration-500" size={48} />
            <h4 className="text-5xl font-black italic tracking-tighter mb-2">$1.24M</h4>
            <p className="text-shiv-muted text-[10px] font-black uppercase tracking-[0.3em]">Total Volume Δ Q1</p>
            <div className="absolute top-0 right-0 p-4 opacity-[0.02] translate-x-12 -translate-y-12">
               <DollarSign size={200} />
            </div>
         </div>
         <div className="md:col-span-2 bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 italic">Revenue Momentum Matrix</h3>
            <Chart data={[80, 120, 95, 140, 180, 160, 210]} height={180} color="#FF8A00" />
         </div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentRecords;
