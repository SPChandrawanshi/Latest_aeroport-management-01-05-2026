import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Form from '../../components/Form';
import { Users, UserCheck, ShieldAlert, Award, Search, UserPlus } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';

const StaffManagement = ({ menus }) => {
  const { addNotification } = useNotification();
  const staff = [
    { name: 'Capt. James Wilson', role: 'Senior Pilot', id: 'EP-4001', dept: 'Flight Ops', status: 'On Duty' },
    { name: 'Sarah Jenkins', role: 'Chief Engineer', id: 'EM-5012', dept: 'Maintenance', status: 'Off Duty' },
    { name: 'Mark Thompson', role: 'Ground Supervisor', id: 'EG-2209', dept: 'Ground Control', status: 'On Duty' },
    { name: 'Linda Chen', role: 'Logistics Manager', id: 'EL-1088', dept: 'Operations', status: 'On Leave' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="Staff Management">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 animate-in fade-in duration-700 max-w-7xl mx-auto">
        <div className="xl:col-span-8 2xl:col-span-9 space-y-6">
          <div className="shiv-perfect-card p-6 sm:p-8">
            <div className="flex flex-wrap justify-between items-center gap-6 mb-8 border-b-2 border-slate-50 pb-6">
                <h3 className="text-[14px] font-black text-[#0a3d62] uppercase tracking-tighter flex items-center gap-4">
                  <div className="p-2 bg-[#0a3d62] rounded-lg text-white">
                    <Users size={18} />
                  </div>
                  Personnel Intelligence Directory
                </h3>
                <div className="relative group flex-1 md:flex-none">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0a3d62] transition-colors" size={16} />
                    <input 
                        type="text" 
                        placeholder="SEARCH PROTOCOL ID..." 
                        className="shiv-input-field pl-12 pr-6 py-3 w-full md:w-72" 
                    />
                </div>
            </div>
            <Table 
              headers={['Staff Name', 'Position', 'Employee ID', 'Department', 'Status']}
              onAction={(item) => addNotification(`Personnel Profile: Accessing telemetry for ${item.name}...`, 'info')}
              data={staff.map(s => ({
                ...s,
                status: (
                  <span className={`px-3 py-1 rounded-lg border-2 text-[10px] font-black uppercase tracking-widest ${
                    s.status === 'On Duty' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                    s.status === 'Off Duty' ? 'bg-slate-50 text-slate-400 border-slate-200' : 'bg-amber-50 text-amber-600 border-amber-100'
                  }`}>
                    {s.status}
                  </span>
                )
              }))}
            />
          </div>
        </div>

        <div className="xl:col-span-4 2xl:col-span-3 space-y-6">
          <div className="shiv-perfect-card p-6 sm:p-8">
            <h3 className="text-[14px] font-black text-[#0a3d62] mb-8 uppercase tracking-widest flex items-center gap-3 border-b-2 border-slate-50 pb-4">
              <UserPlus size={20} className="text-[#FF8A00]" />
              Initialize Node
            </h3>
            <Form 
              columns={1}
              fields={[
                { label: 'Full Name', type: 'text', placeholder: 'Enter protocol identifier' },
                { label: 'Role', type: 'text', placeholder: 'e.g. Flight Pilot' },
                { label: 'Employee ID', type: 'text', placeholder: 'e.g. EP-0000' },
              ]}
              onSubmit={(e) => {
                addNotification('Onboarding Protocol Initiated: Secure credentials generated.', 'success');
              }}
            />
          </div>
          
          <div className="shiv-tinted-panel p-6 relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-4 text-[#0a3d62] relative z-10">
              <ShieldAlert size={22} className="text-[#FF8A00]" />
              <h4 className="font-black uppercase tracking-widest text-[12px]">Credential Sync Warning</h4>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed font-bold uppercase relative z-10">
              12 security certifications are expiring within the next <span className="text-[#0a3d62] font-black underline decoration-2 underline-offset-4">30 SOLAR CYCLES</span>.
            </p>
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-[#0a3d62] group-hover:scale-110 transition-transform duration-700">
               <ShieldAlert size={100} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StaffManagement;
