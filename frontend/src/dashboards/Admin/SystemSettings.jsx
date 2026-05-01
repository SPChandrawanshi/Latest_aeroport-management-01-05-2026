import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Form from '../../components/Form';
import { Settings, Shield, Globe, Database, ToggleRight, CheckCircle2 } from 'lucide-react';

const SystemSettings = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="System Configuration">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
          {/* General Protocols */}
          <div className="shiv-perfect-card p-6 sm:p-8">
            <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest mb-8 flex items-center gap-3 border-b-2 border-slate-50 pb-4">
              <Globe size={20} className="text-[#FF8A00]" />
              General System Protocols
            </h3>
            <Form 
              fields={[
                { label: 'System Identifier', type: 'text', placeholder: 'AERO-MAIN-001' },
                { label: 'Network Gateway', type: 'text', placeholder: '192.168.1.1' },
                { label: 'Primary Data Hub', type: 'select', placeholder: 'Select Region', options: ['Americas', 'EMEA', 'APAC'] },
              ]}
              onSubmit={() => {}}
            />
          </div>

          {/* Security Protocols */}
          <div className="shiv-perfect-card p-6 sm:p-8">
            <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-widest mb-8 flex items-center gap-3 border-b-2 border-slate-50 pb-4">
              <Shield size={20} className="text-[#FF8A00]" />
              Security & Neural Encryption
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Multi-Factor Auth', status: 'Active', active: true },
                { label: 'Biometric Access', status: 'Inactive', active: false },
                { label: 'Advanced Firewall', status: 'Active', active: true },
              ].map((s, i) => (
                <div key={i} className="shiv-tinted-panel !bg-slate-50/50 p-5 group flex items-center justify-between border-2 hover:border-[#0a3d62]">
                  <span className="font-black text-[#0a3d62] uppercase tracking-widest text-[11px]">{s.label}</span>
                  <div className="flex items-center gap-5">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${s.active ? 'text-emerald-600' : 'text-slate-400'}`}>{s.status}</span>
                    <div className={`transition-all ${s.active ? 'text-emerald-500 scale-110' : 'text-slate-300'}`}>
                        <ToggleRight size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Data Integrity Sidebar */}
          <div className="shiv-tinted-panel p-6 sm:p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#0a3d62] text-white flex items-center justify-center mb-6 shadow-xl group-hover:rotate-6 transition-all duration-500">
                <Database size={28} />
              </div>
              <h4 className="text-[22px] font-black text-[#0a3d62] mb-3 tracking-tighter uppercase leading-none">Data Integrity Hub</h4>
              <p className="text-slate-500 text-[11px] font-bold leading-relaxed mb-8 tracking-wide uppercase">
                Full strategic backup performed <span className="text-[#0a3d62] font-black underline decoration-2">4h ago</span>. All peripheral nodes are synchronized.
              </p>
              <button className="w-full py-4 bg-[#0a3d62] text-white rounded-xl font-black uppercase tracking-widest text-[11px] shadow-xl hover:bg-[#0c4a75] transition-all flex items-center justify-center gap-3 hover:border-[#0a3d62] border-2 border-transparent">
                Trigger Global Sync <CheckCircle2 size={16} />
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[#0a3d62] group-hover:scale-110 transition-transform duration-1000">
               <Database size={220} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SystemSettings;
