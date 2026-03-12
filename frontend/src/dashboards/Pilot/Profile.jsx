import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { User, Shield, CreditCard, Award, MapPin, Phone } from 'lucide-react';

const PilotProfile = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Pilot" menus={menus} pageTitle="Flight Officer Profile">
      <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="bg-shiv-card rounded-[3rem] border border-shiv-border shadow-2xl overflow-hidden mb-12">
          <div className="h-64 bg-shiv-sidebar relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5927?auto=format&fit=crop&q=80')] bg-cover opacity-10 group-hover:opacity-20 transition-opacity duration-[2000ms]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-shiv-card via-transparent to-transparent"></div>
          </div>
          <div className="px-6 sm:px-12 pb-12">
            <div className="relative -mt-16 sm:-mt-24 flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10 mb-12 text-center sm:text-left">
              <div className="w-32 h-32 sm:w-44 sm:h-44 bg-shiv-card rounded-[2rem] p-2 border border-shiv-border shadow-2xl">
                 <div className="w-full h-full bg-shiv-bg-secondary rounded-[1.5rem] flex items-center justify-center text-shiv-muted/30 border border-shiv-border hover:text-shiv-primary transition-colors duration-500">
                   <User size={60} className="sm:hidden" />
                   <User size={80} className="hidden sm:block" />
                 </div>
              </div>
              <div className="pb-4 w-full">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-shiv-text-primary tracking-tighter italic uppercase break-words leading-tight">CAPT. JAMES WILSON</h3>
                <p className="font-black text-shiv-primary uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[10px] sm:text-xs mt-3">Senior Tactical Officer · NODE ID 4001</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em] mb-6 italic">Neural Metrics</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="p-8 bg-shiv-bg-secondary/50 rounded-3xl border border-shiv-border shadow-xl hover:bg-shiv-card-hover transition-all group">
                       <p className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em] mb-2 group-hover:text-shiv-primary transition-colors">Total Flight Cycles</p>
                       <p className="text-3xl font-black text-shiv-text-primary italic">12,450</p>
                     </div>
                     <div className="p-8 bg-shiv-bg-secondary/50 rounded-3xl border border-shiv-border shadow-xl hover:bg-shiv-card-hover transition-all group">
                       <p className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em] mb-2 group-hover:text-shiv-primary transition-colors">Tactical Rank</p>
                       <p className="text-3xl font-black text-shiv-text-primary italic">L4-SENIOR</p>
                     </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6 text-shiv-text-secondary group">
                    <div className="p-3 bg-shiv-bg-secondary rounded-xl border border-shiv-border text-shiv-primary group-hover:rotate-12 transition-transform"><MapPin size={20} /></div>
                    <span className="text-xs font-bold uppercase tracking-widest">Base Vector: London Heathrow (LHR)</span>
                  </div>
                  <div className="flex items-center gap-6 text-shiv-text-secondary group">
                    <div className="p-3 bg-shiv-bg-secondary rounded-xl border border-shiv-border text-shiv-primary group-hover:rotate-12 transition-transform"><Phone size={20} /></div>
                    <span className="text-xs font-bold uppercase tracking-widest">Secure Link: +44 (20) 7946 0958</span>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-black text-shiv-muted uppercase tracking-[0.3em] mb-6 italic">Tactical Validations</h4>
                  <div className="space-y-4">
                    {['ATPL Unrestricted', 'Boeing 787 Type Rating', 'CAT III Landing Cert', 'ETOPS Qualified'].map((c, i) => (
                      <div key={i} className="flex items-center gap-5 p-5 bg-success/5 border border-success/20 rounded-[1.5rem] text-success hover:bg-success/10 transition-all group">
                        <Award size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PilotProfile;
