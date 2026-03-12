import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Form from '../../components/Form';
import { Users, UserCheck, ShieldAlert, Award } from 'lucide-react';

const StaffManagement = ({ menus }) => {
  const staff = [
    { name: 'Capt. James Wilson', role: 'Senior Pilot', id: 'EP-4001', dept: 'Flight Ops', status: 'On Duty' },
    { name: 'Sarah Jenkins', role: 'Chief Engineer', id: 'EM-5012', dept: 'Maintenance', status: 'Off Duty' },
    { name: 'Mark Thompson', role: 'Ground Supervisor', id: 'EG-2209', dept: 'Ground Control', status: 'On Duty' },
    { name: 'Linda Chen', role: 'Logistics Manager', id: 'EL-1088', dept: 'Operations', status: 'On Leave' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="Staff Management">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 animate-in fade-in duration-700">
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-shiv-card p-10 rounded-[2.5rem] border border-shiv-border shadow-2xl">
            <h3 className="text-xl font-black text-shiv-text-primary uppercase tracking-[0.2em] mb-10 flex items-center gap-4 italic">
              <Users size={24} className="text-shiv-primary" />
              Personnel Intelligence Directory
            </h3>
            <Table 
              headers={['Staff Name', 'Position', 'Employee ID', 'Department', 'Status']}
              data={staff.map(s => ({
                ...s,
                status: (
                  <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-widest ${
                    s.status === 'On Duty' ? 'bg-success/10 text-success border-success/20' : 
                    s.status === 'Off Duty' ? 'bg-shiv-bg-secondary text-shiv-muted border-shiv-border' : 'bg-warning/10 text-warning border-warning/20'
                  }`}>
                    {s.status}
                  </span>
                )
              }))}
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-shiv-sidebar border border-shiv-border text-shiv-text-primary p-10 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-xl font-black mb-10 italic uppercase tracking-tight flex items-center gap-3">
              <UserCheck size={24} className="text-shiv-primary" />
              Onboard Node
            </h3>
            <Form 
              fields={[
                { label: 'Full Name', type: 'text', placeholder: 'Enter protocol identifier' },
                { label: 'Role', type: 'text', placeholder: 'e.g. Flight Pilot' },
                { label: 'Employee ID', type: 'text', placeholder: 'e.g. EP-0000' },
              ]}
              onSubmit={() => {}}
            />
          </div>
          
          <div className="bg-warning/5 p-8 rounded-[2rem] border border-warning/20 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-4 text-warning relative z-10">
              <ShieldAlert size={28} />
              <h4 className="font-black uppercase tracking-[0.1em] text-sm">Credential Sync Warning</h4>
            </div>
            <p className="text-xs text-shiv-text-secondary leading-loose font-bold italic relative z-10">
              "12 security certifications are expiring within the next <span className="text-warning">30 SOLAR CYCLES</span>. Initialize node notifications immediately."
            </p>
            <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
              <ShieldAlert size={80} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StaffManagement;
