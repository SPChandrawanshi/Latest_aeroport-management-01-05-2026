import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import Form from '../../components/Form';
import { MapPin, Building2, Globe, Shield } from 'lucide-react';

const AirportManagement = ({ menus }) => {
  const airports = [
    { name: 'Heathrow Airport', code: 'LHR', city: 'London', status: 'Operational', capacity: '95%' },
    { name: 'JFK International', code: 'JFK', city: 'New York', status: 'Operational', capacity: '88%' },
    { name: 'Dubai International', code: 'DXB', city: 'Dubai', status: 'Maintenance', capacity: '75%' },
    { name: 'Changi Airport', code: 'SIN', city: 'Singapore', status: 'Operational', capacity: '92%' },
  ];

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="Airport Management">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in duration-700">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-3xl border border-border-neutral shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
              <Globe size={20} className="text-brand-primary" />
              Operational Airports
            </h3>
            <Table 
              headers={['Airport Name', 'Code', 'City', 'Status', 'Capacity']}
              data={airports.map(a => ({
                ...a,
                status: (
                  <span className={`px-4 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-widest ${
                    a.status === 'Operational' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-amber-50 text-amber-600 border-amber-100'
                  }`}>
                    {a.status}
                  </span>
                ),
                capacity: <span className="font-bold text-slate-900">{a.capacity}</span>
              }))}
            />
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white border border-border-neutral text-slate-900 p-10 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-10 uppercase tracking-tight flex items-center gap-3">
              <Building2 size={24} className="text-brand-primary" />
              Register New Airport
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
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AirportManagement;
