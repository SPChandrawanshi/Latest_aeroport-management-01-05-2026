import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Form from '../../components/Form';
import { MapPin, Building2, Globe, Shield, Map } from 'lucide-react';

const AirportManagement = ({ menus }) => {
  const airports = [
    { name: 'Heathrow Airport', code: 'LHR', city: 'London', status: 'Operational', capacity: '95%' },
    { name: 'JFK International', code: 'JFK', city: 'New York', status: 'Operational', capacity: '88%' },
    { name: 'Dubai International', code: 'DXB', city: 'Dubai', status: 'Maintenance', capacity: '75%' },
    { name: 'Changi Airport', code: 'SIN', city: 'Singapore', status: 'Operational', capacity: '92%' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="Airport Management">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-700">
        <div className="lg:col-span-2 space-y-6">
          <div className="shiv-perfect-card p-6 sm:p-8">
            <h3 className="text-[14px] font-bold text-[#0a3d62] uppercase tracking-widest mb-8 flex items-center gap-3">
              <Globe size={20} className="text-[#FF8A00]" />
              Operational Airports Registry
            </h3>
            <Table 
              headers={['Airport Name', 'Code', 'City', 'Status', 'Capacity']}
              data={airports.map(a => ({
                ...a,
                status: (
                  <span className={`px-4 py-1.5 rounded-lg border-2 text-[10px] font-bold uppercase tracking-widest ${
                    a.status === 'Operational' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                  }`}>
                    {a.status}
                  </span>
                ),
                capacity: <span className="font-bold text-[#0a3d62]">{a.capacity}</span>
              }))}
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="shiv-perfect-card p-6 sm:p-8">
            <h3 className="text-[14px] font-bold text-[#0a3d62] mb-8 uppercase tracking-widest flex items-center gap-3">
              <Building2 size={24} className="text-[#FF8A00]" />
              Initialize Node
            </h3>
            <Form 
              fields={[
                { label: 'Airport Name', type: 'text', placeholder: 'e.g. Indira Gandhi Int' },
                { label: 'IATA Code', type: 'text', placeholder: 'e.g. DEL' },
                { label: 'City/Country', type: 'text', placeholder: 'e.g. Delhi, India' },
              ]}
              onSubmit={() => console.log('Airport added')}
            />
          </div>

          <div className="shiv-tinted-panel p-6 relative overflow-hidden group">
             <h4 className="text-[14px] font-bold text-[#0a3d62] mb-3 flex items-center gap-3 uppercase tracking-tighter">
               <Map size={20} className="text-[#FF8A00]" />
               Strategic Coverage
             </h4>
             <p className="text-[11px] text-slate-600 font-bold leading-relaxed tracking-wide uppercase">
               Global network currently spans across 4 active command centers.
             </p>
             <div className="absolute -bottom-6 -right-6 opacity-[0.05] text-[#0a3d62] group-hover:scale-110 transition-transform duration-700">
               <MapPin size={100} />
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AirportManagement;
