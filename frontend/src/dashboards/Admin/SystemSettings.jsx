import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Form from '../../components/Form';
import { Settings, Shield, Globe, Database, ToggleRight } from 'lucide-react';

const SystemSettings = ({ menus }) => {
  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="System Configuration">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in duration-700">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
              <Globe size={24} className="text-shiv-primary" />
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

          <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic font-sans">
              <Shield size={24} className="text-shiv-primary" />
              Security & Neural Encryption
            </h3>
            <div className="space-y-6">
              {[
                { label: 'Multi-Factor Auth', status: 'Active', icon: <ToggleRight className="text-success" /> },
                { label: 'Biometric Access', status: 'Inactive', icon: <ToggleRight className="text-shiv-muted opacity-30" /> },
                { label: 'Advanced Firewall', status: 'Active', icon: <ToggleRight className="text-success" /> },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-shiv-bg-secondary/50 rounded-2xl border border-shiv-border transition-all hover:bg-shiv-card-hover group">
                  <span className="font-black text-shiv-text-primary uppercase tracking-[0.1em] text-xs">{s.label}</span>
                  <div className="flex items-center gap-5">
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${s.status === 'Active' ? 'text-success' : 'text-shiv-muted'}`}>{s.status}</span>
                    <div className="transition-transform group-hover:scale-110">{s.icon}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <Database className="text-shiv-primary mb-6 group-hover:animate-pulse" size={40} />
              <h4 className="text-2xl font-black italic mb-4 tracking-tighter uppercase font-sans">Data Integrity Hub</h4>
              <p className="text-shiv-text-secondary text-xs font-bold leading-loose mb-10 tracking-wide">
                Full strategic backup performed <span className="text-shiv-text-primary italic">4h ago</span>. All peripheral nodes are synchronized.
              </p>
              <button className="btn-primary w-full shadow-orange-500/10">
                Trigger Global Sync
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-shiv-primary opacity-[0.03] rounded-full blur-3xl group-hover:opacity-[0.07] transition-opacity duration-1000"></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SystemSettings;
