import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { User, Shield, CreditCard, Heart, MapPin, Settings } from 'lucide-react';

const PassengerProfile = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Passenger Profile">
      <div className="max-w-4xl animate-in fade-in duration-700 mx-auto">
          <div className="shiv-perfect-card p-8 sm:p-10 relative overflow-hidden group">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 relative z-10 items-center md:items-start text-center md:text-left">
               <div className="w-32 h-32 sm:w-40 sm:h-40 bg-slate-50 border-2 border-slate-100 rounded-3xl flex items-center justify-center text-slate-300 shrink-0 shadow-lg group-hover:border-[#0a3d62]/20 transition-all">
                  <User size={80} className="text-[#0a3d62]/20" />
               </div>
               <div className="flex-1 w-full">
                  <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8 gap-6">
                     <div>
                        <h3 className="text-[32px] sm:text-[40px] font-bold text-[#0a3d62] tracking-tighter uppercase leading-none">Alexander Reed</h3>
                        <p className="text-[11px] font-bold text-[#FF8A00] uppercase tracking-widest mt-4 flex items-center justify-center lg:justify-start gap-3">
                           <Shield size={16} className="animate-pulse" />
                           Gold Elite Protocol · #99021882
                        </p>
                     </div>
                     <div className="bg-slate-50 border-2 border-slate-100 text-[#0a3d62] px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 shadow-md">
                        <Heart size={14} className="text-[#FF8A00]" fill="currentColor" /> 88.4K Points
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t-2 border-slate-50 pt-8 mt-2">
                     <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-500 group/item p-3 bg-slate-50 rounded-xl border-2 border-transparent hover:border-[#0a3d62]/10 transition-all">
                           <MapPin size={18} className="text-[#0a3d62]" />
                           <span className="text-[10px] font-bold uppercase tracking-widest">London, United Kingdom</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-500 group/item p-3 bg-slate-50 rounded-xl border-2 border-transparent hover:border-[#0a3d62]/10 transition-all">
                           <Shield size={18} className="text-[#0a3d62]" />
                           <span className="text-[10px] font-bold uppercase tracking-widest">Biometric identification active</span>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-500 group/item p-3 bg-slate-50 rounded-xl border-2 border-transparent hover:border-[#0a3d62]/10 transition-all">
                           <CreditCard size={18} className="text-[#0a3d62]" />
                           <span className="text-[10px] font-bold uppercase tracking-widest">Card ending in ···· 8821</span>
                        </div>
                        <div className="flex items-center gap-4 text-slate-500 group/item p-3 bg-slate-50 rounded-xl border-2 border-transparent hover:border-[#0a3d62]/10 transition-all">
                           <Settings size={18} className="text-[#0a3d62]" />
                           <span className="text-[10px] font-bold uppercase tracking-widest">Manage Global Preferences</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#0a3d62] translate-x-12 -translate-y-12">
               <User size={300} />
            </div>
          </div>
      </div>
    </DashboardLayout>
  );
};

export default PassengerProfile;
