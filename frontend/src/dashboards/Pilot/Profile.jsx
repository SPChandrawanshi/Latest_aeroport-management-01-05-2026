import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { User, Award, MapPin, Phone, Activity, ShieldCheck } from 'lucide-react';

const PilotProfile = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Flight Officer Profile">
      <div className="max-w-6xl animate-in fade-in duration-700 mx-auto space-y-6">
        <div className="shiv-perfect-card p-8 group">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 border-b-2 border-slate-50 pb-8 mb-8">
            <div className="w-32 h-32 bg-slate-50 rounded-xl border-2 border-[#0a3d62]/10 p-1 flex items-center justify-center text-[#0a3d62] shadow-sm group-hover:border-[#0a3d62] transition-all duration-500 overflow-hidden">
               <div className="w-full h-full bg-white rounded-lg flex items-center justify-center border-2 border-slate-100 group-hover:bg-[#0a3d62] group-hover:text-white transition-all duration-500">
                 <User size={64} />
               </div>
            </div>
            <div className="text-center md:text-left flex-1 pb-1">
              <h3 className="text-[32px] font-black text-[#0a3d62] tracking-tighter uppercase leading-none mb-3 italic">CAPT. JAMES WILSON</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1.5 border-2 border-slate-100 rounded-lg">NODE ID: 4001</span>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 border-2 border-emerald-100 rounded-lg flex items-center gap-2">
                  <ShieldCheck size={12} /> Active Status
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-[#0a3d62] uppercase tracking-[0.2em] flex items-center gap-3">
                <Activity size={16} className="text-[#FF8A00]" />
                Neural Telemetry
              </h4>
              <div className="grid grid-cols-2 gap-4">
                 <div className="shiv-tinted-panel p-5 border-2 hover:border-[#0a3d62]">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Flight Cycles</p>
                   <p className="text-[24px] font-black text-[#0a3d62] tracking-tighter">12,450</p>
                 </div>
                 <div className="shiv-tinted-panel p-5 border-2 hover:border-[#0a3d62]">
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Tactical Rank</p>
                   <p className="text-[24px] font-black text-[#0a3d62] tracking-tighter">L4-SENIOR</p>
                 </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border-2 border-slate-100 group/item hover:border-[#0a3d62]/20 transition-all">
                  <MapPin size={18} className="text-[#0a3d62]" />
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Base: London Heathrow (LHR)</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border-2 border-slate-100 group/item hover:border-[#0a3d62]/20 transition-all">
                  <Phone size={18} className="text-[#0a3d62]" />
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">Secure Link: +44 20 7946 0958</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-black text-[#0a3d62] uppercase tracking-[0.2em] flex items-center gap-3">
                <Award size={16} className="text-[#FF8A00]" />
                Tactical Validations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['ATPL Unrestricted', 'Boeing 787 Rating', 'CAT III Certified', 'ETOPS Qualified'].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-emerald-50/50 border-2 border-emerald-100 rounded-xl text-emerald-700 hover:border-emerald-500 hover:bg-white transition-all group/v">
                    <Award size={16} className="group-hover/v:scale-110 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PilotProfile;
