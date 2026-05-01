import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, Mail, MapPin, Plane, ArrowRight, ShieldCheck, Fingerprint, Map, AlertTriangle } from 'lucide-react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        location: '',
        state: '',
        aadharNumber: '',
    });
    const [fingerprintScanned, setFingerprintScanned] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!fingerprintScanned) {
            setError('Biometric required.');
            return;
        }
        setError('');
        
        try {
            const pendingUsers = JSON.parse(localStorage.getItem('pending_registrations') || '[]');
            const newUser = {
                ...formData,
                id: `U${Date.now()}`,
                biometric: 'Verified',
                status: 'Pending',
            };
            pendingUsers.push(newUser);
            localStorage.setItem('pending_registrations', JSON.stringify(pendingUsers));
            alert('KYC Registered! Pending Admin Approval.');
            navigate('/login');
        } catch (err) {
            setError('Error occurred.');
        }
    };

    return (
        <div className="h-screen bg-[#F8FAFC] flex items-center justify-center p-4 overflow-hidden">
            <div className="shiv-perfect-card w-full max-w-2xl p-5 sm:p-6 group shiv-animate-entry relative">
                <div className="text-center mb-4 relative z-10">
                    <h1 className="text-[18px] font-black text-[#0a3d62] uppercase tracking-tighter leading-none mb-1">KYC Registry</h1>
                    <p className="text-slate-400 font-black text-[8px] uppercase tracking-widest">Identity Verification Protocol</p>
                </div>

                {error && (
                    <div className="bg-red-50 border-2 border-red-100 text-red-600 px-3 py-1.5 rounded-lg mb-4 flex items-center gap-2">
                        <AlertTriangle size={12} />
                        <span className="font-black text-[8px] uppercase tracking-widest">{error}</span>
                    </div>
                )}

                <form onSubmit={handleRegister} className="space-y-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3">
                        <div className="md:col-span-2 border-b-2 border-slate-50 pb-1">
                            <h3 className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Personal Identification</h3>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative group/input">
                                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-[#0a3d62] transition-colors" size={12} />
                                <input name="name" onChange={handleChange} placeholder="Alexander Reed" className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] focus:bg-white rounded-lg px-9 py-2 text-[10px] font-black text-[#0a3d62] outline-none transition-all placeholder:text-slate-300 shadow-sm" required />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group/input">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-[#0a3d62] transition-colors" size={12} />
                                <input name="email" onChange={handleChange} placeholder="alex@aero.com" className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] focus:bg-white rounded-lg px-9 py-2 text-[10px] font-black text-[#0a3d62] outline-none transition-all placeholder:text-slate-300 shadow-sm" required />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Location Details</label>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="relative group/input">
                                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-[#0a3d62] transition-colors" size={12} />
                                    <input name="location" onChange={handleChange} placeholder="Country" className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] focus:bg-white rounded-lg px-8 py-2 text-[10px] font-black text-[#0a3d62] outline-none transition-all shadow-sm" required />
                                </div>
                                <div className="relative group/input">
                                    <Map className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-[#0a3d62] transition-colors" size={12} />
                                    <input name="state" onChange={handleChange} placeholder="State" className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] focus:bg-white rounded-lg px-8 py-2 text-[10px] font-black text-[#0a3d62] outline-none transition-all shadow-sm" required />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Aadhar Number</label>
                            <div className="relative group/input">
                                <ShieldCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-[#0a3d62] transition-colors" size={12} />
                                <input name="aadharNumber" onChange={handleChange} placeholder="XXXX XXXX XXXX" className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] focus:bg-white rounded-lg px-9 py-2 text-[10px] font-black text-[#0a3d62] outline-none transition-all placeholder:text-slate-300 shadow-sm" required />
                            </div>
                        </div>

                        <div className="md:col-span-2 shiv-tinted-panel !p-3 text-center space-y-2 border-2">
                            <div className="flex items-center justify-center gap-4">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 shadow-md ${fingerprintScanned ? 'bg-emerald-500 text-white' : 'bg-[#0a3d62] text-white'}`}>
                                    <Fingerprint size={16} />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-[9px] font-black text-[#0a3d62] uppercase tracking-widest leading-none">Biometric Node</h4>
                                    <p className="text-[7px] text-slate-400 font-bold uppercase mt-1">Identity Sync Required</p>
                                </div>
                                <button 
                                    type="button"
                                    onClick={() => {
                                        setFingerprintScanned(true);
                                        alert('Biometric Synchronized.');
                                    }}
                                    className={`ml-auto px-4 py-1.5 rounded-lg font-black text-[8px] uppercase tracking-widest transition-all border-2
                                        ${fingerprintScanned ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg' : 'bg-white text-[#0a3d62] border-[#0a3d62]/10 hover:border-[#0a3d62] shadow-md'}`}
                                >
                                    {fingerprintScanned ? 'Verified' : 'Initialize Scan'}
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center justify-between gap-6 pt-3 border-t-2 border-slate-50">
                        <div className="flex gap-4 items-center">
                            <Link to="/login" className="text-[8px] font-black text-slate-400 hover:text-[#0a3d62] uppercase tracking-widest transition-colors">
                                Signed Up? <span className="text-[#0a3d62] underline decoration-2 underline-offset-4">Sign In</span>
                            </Link>
                            <Link to="/admin" className="px-3 py-1 bg-slate-50 border-2 border-slate-100 text-[#0a3d62] rounded-lg font-black text-[7px] uppercase tracking-widest hover:border-[#0a3d62] transition-all flex items-center gap-2">
                                Admin Bypass ⚡
                            </Link>
                        </div>
                        <button 
                            type="submit" 
                            className="px-6 py-2.5 bg-[#0a3d62] text-white rounded-lg font-black text-[9px] uppercase tracking-widest shadow-xl hover:bg-[#0c4a75] transition-all flex items-center justify-center gap-3 border-2 border-transparent hover:border-[#0a3d62]"
                        >
                            Submit Registry <ArrowRight size={12} />
                        </button>
                    </div>
                </form>

                <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                    <Plane size={150} className="-rotate-45" />
                </div>
            </div>
        </div>
    );
};

export default Register;
