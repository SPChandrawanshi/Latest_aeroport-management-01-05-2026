import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { User, Shield, CreditCard, Heart, MapPin } from 'lucide-react';

const PassengerProfile = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Passenger" menus={menus} pageTitle="Passenger Profile">
      <div className="max-w-4xl animate-in fade-in duration-500">
          <div className="bg-shiv-card rounded-[3rem] border border-shiv-border shadow-2xl overflow-hidden mb-10 group relative">
            <div className="flex flex-col md:flex-row p-6 sm:p-12 gap-8 sm:gap-12 relative z-10 items-center md:items-start text-center md:text-left">
               <div className="w-32 h-32 sm:w-40 sm:h-40 bg-shiv-sidebar border border-shiv-border rounded-[2rem] flex items-center justify-center text-shiv-muted shrink-0 shadow-2xl md:-rotate-3 group-hover:rotate-0 transition-transform duration-700">
                 <User size={60} className="text-shiv-primary md:hidden" />
                 <User size={80} className="text-shiv-primary hidden md:block" />
               </div>
               <div className="flex-1 w-full">
                  <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8 gap-6">
                     <div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-shiv-text-primary italic tracking-tighter uppercase leading-tight sm:leading-none break-words">Alexander Reed</h3>
                        <p className="text-[10px] font-black text-shiv-primary uppercase tracking-[0.2em] sm:tracking-[0.4em] mt-4 flex items-center justify-center lg:justify-start gap-2">
                           <Shield size={14} className="animate-pulse" />
                           Gold Elite Protocol · #99021882
                        </p>
                     </div>
                     <span className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4 shadow-xl hover:bg-shiv-card-hover transition-all shrink-0">
                       <Heart size={14} className="text-shiv-primary" fill="currentColor" /> 88.4K Points
                     </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-shiv-border/50 pt-10 mt-2">
                     <div className="space-y-6">
                        <div className="flex items-center gap-4 text-shiv-muted group/item">
                           <MapPin size={20} className="text-shiv-primary group-hover/item:scale-110 transition-transform" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-shiv-muted">Home base: London, United Kingdom</span>
                        </div>
                        <div className="flex items-center gap-4 text-shiv-muted group/item">
                           <Shield size={20} className="text-shiv-primary group-hover/item:scale-110 transition-transform" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-shiv-muted">Biometric identification active</span>
                        </div>
                     </div>
                     <div className="space-y-6">
                        <div className="flex items-center gap-4 text-shiv-muted group/item">
                           <CreditCard size={20} className="text-shiv-primary group-hover/item:scale-110 transition-transform" />
                           <span className="text-[10px] font-black uppercase tracking-widest text-shiv-muted">Card ending in ···· 8821</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-[0.02] pointer-events-none translate-x-12 -translate-y-12">
               <User size={300} />
            </div>
          </div>
      </div>
    </DashboardLayout>
  );
};

export default PassengerProfile;
