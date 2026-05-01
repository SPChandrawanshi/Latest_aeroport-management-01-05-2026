import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import Table from '../../components/Table';
import { UserCheck, ShieldAlert, Fingerprint, Search, CheckCircle, XCircle, ShieldCheck } from 'lucide-react';
import { useNotification } from '../../contexts/NotificationContext';

const KYCApprovals = ({ menus }) => {
  const { addNotification } = useNotification();
  const [pendingUsers, setPendingUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);

  const loadUsers = () => {
    // Load mock data
    const mockData = [
      { id: 'MOCK-1', name: 'John Doe', email: 'john@example.com', aadharNumber: 'XXXX-XXXX-4521', biometric: 'Verified', status: 'Pending' },
      { id: 'MOCK-2', name: 'Amit Sharma', email: 'amit.s@gmail.com', aadharNumber: 'XXXX-XXXX-9902', biometric: 'Verified', status: 'Pending' },
    ];
    
    // Load pending from localStorage
    const savedPending = JSON.parse(localStorage.getItem('pending_registrations') || '[]');
    setPendingUsers([...mockData, ...savedPending]);

    // Load approved from localStorage
    const savedApproved = JSON.parse(localStorage.getItem('approved_users') || '[]');
    setApprovedUsers(savedApproved);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleAction = (user, type) => {
    if (type === 'approve') {
      addNotification(`KYC Approved: ${user.name}'s account is now active.`, 'success');
      
      const savedApproved = JSON.parse(localStorage.getItem('approved_users') || '[]');
      savedApproved.push({ ...user, role: 'passenger', status: 'Active', approvedAt: new Date().toLocaleString() });
      localStorage.setItem('approved_users', JSON.stringify(savedApproved));
    } else {
      addNotification(`KYC Rejected: ${user.name}'s identity could not be verified.`, 'error');
    }
    
    const savedPending = JSON.parse(localStorage.getItem('pending_registrations') || '[]');
    const filtered = savedPending.filter(u => u.email !== user.email);
    localStorage.setItem('pending_registrations', JSON.stringify(filtered));
    
    loadUsers();
  };

  const pendingTableData = pendingUsers.map(u => ({
    name: <span className="font-black uppercase italic">{u.name}</span>,
    email: <span className="text-slate-400 font-bold">{u.email}</span>,
    aadhar: <span className="font-black text-[#0a3d62]">{u.aadharNumber || 'N/A'}</span>,
    biometric: (
        <span className={`flex items-center gap-2 font-black uppercase text-[9px] ${u.biometric === 'Verified' ? 'text-emerald-500' : 'text-amber-500'}`}>
            <Fingerprint size={12} /> {u.biometric}
        </span>
    ),
    status: (
      <span className="px-3 py-1 rounded-lg border-2 border-amber-100 bg-amber-50 text-amber-600 text-[9px] font-black uppercase tracking-widest">
        {u.status}
      </span>
    ),
    _raw: u 
  }));

  const approvedTableData = approvedUsers.map(u => ({
    name: <span className="font-black uppercase italic text-[#0a3d62]">{u.name}</span>,
    email: <span className="text-[#FF8A00] font-black">{u.email}</span>,
    status: (
      <span className="px-3 py-1 rounded-lg border-2 border-emerald-100 bg-emerald-50 text-emerald-600 text-[9px] font-black uppercase tracking-widest">
        Authorized
      </span>
    ),
    access: <span className="text-slate-400 font-bold text-[9px]">FULL PORTAL ACCESS</span>,
    _raw: u
  }));

  return (
    <DashboardLayout dashboardType="Admin" menus={menus} pageTitle="KYC Identity Approvals">
      <div className="space-y-6 animate-in fade-in duration-700 max-w-7xl mx-auto custom-scrollbar overflow-y-auto max-h-[calc(100vh-180px)] pr-2">
        
        {/* Pending Requests */}
        <div className="shiv-perfect-card p-5 sm:p-6">
            <div className="flex flex-wrap justify-between items-center gap-6 mb-6 border-b-2 border-slate-50 pb-4">
                <h3 className="text-[12px] font-black text-[#0a3d62] uppercase tracking-tighter flex items-center gap-4">
                  <div className="p-2 bg-[#0a3d62] rounded-lg text-white shadow-lg">
                    <UserCheck size={16} />
                  </div>
                  Pending Biometric Clearances
                </h3>
                <span className="text-[8px] font-black bg-amber-50 text-amber-600 px-3 py-1 rounded-full border-2 border-amber-100 uppercase tracking-widest">
                    {pendingUsers.length} Action Required
                </span>
            </div>

            <div className="space-y-4">
                {pendingUsers.length > 0 ? (
                    <Table 
                      headers={['Applicant Name', 'Email', 'Govt ID', 'Biometric', 'Status']}
                      onAction={(row) => handleAction(row._raw || row, 'approve')}
                      data={pendingTableData}
                    />
                ) : (
                    <div className="text-center py-12 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                        <CheckCircle size={32} className="mx-auto text-slate-200 mb-2" />
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">All clear</p>
                    </div>
                )}
            </div>
        </div>

        {/* Approved Personnel Directory */}
        <div className="shiv-perfect-card p-5 sm:p-6 bg-white/80">
            <div className="flex flex-wrap justify-between items-center gap-6 mb-6 border-b-2 border-slate-50 pb-4">
                <h3 className="text-[12px] font-black text-emerald-600 uppercase tracking-tighter flex items-center gap-4">
                  <div className="p-2 bg-emerald-500 rounded-lg text-white shadow-lg">
                    <ShieldCheck size={16} />
                  </div>
                  Authorized Personnel Directory
                </h3>
                <span className="text-[8px] font-black bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border-2 border-emerald-100 uppercase tracking-widest">
                    Active Node Access
                </span>
            </div>

            <div className="space-y-4">
                {approvedUsers.length > 0 ? (
                    <Table 
                      headers={['Legal Name', 'Registered Email', 'System Status', 'Privileges']}
                      data={approvedTableData}
                    />
                ) : (
                    <div className="text-center py-10 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No authorized users found</p>
                    </div>
                )}
            </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default KYCApprovals;
