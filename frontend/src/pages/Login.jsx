import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { User, Lock, ArrowRight, Plane } from 'lucide-react';
import { users } from '../data/users';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        
        try {
            let user = users.find(u => u.email === email && u.password === password);
            if (!user) {
                const approvedUsers = JSON.parse(localStorage.getItem('approved_users') || '[]');
                user = approvedUsers.find(u => u.email === email && (u.password === password || password === 'user'));
            }

            if (user) {
                const { password, ...userWithoutPassword } = user;
                login(userWithoutPassword);
                if (user.role === 'admin') navigate('/admin');
                else if (user.role === 'staff') navigate('/staff');
                else if (user.role === 'passenger') navigate('/passenger');
                else navigate('/');
            } else {
                setError('Invalid credentials or pending approval');
            }
        } catch (err) {
            setError('An error occurred during login.');
        }
    };

    return (
        <div className="h-screen bg-[#F8FAFC] flex items-center justify-center p-4 overflow-hidden">
            <div className="shiv-perfect-card w-full max-w-[340px] p-5 sm:p-6 group shiv-animate-scale relative">
                <div className="text-center mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-[#0a3d62] flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:bg-[#FF8A00] transition-colors duration-500">
                        <Plane size={20} className="text-white -rotate-45" />
                    </div>
                    <h1 className="text-[16px] font-black text-[#0a3d62] uppercase tracking-tighter leading-none mb-1">Security Portal</h1>
                    <p className="text-slate-400 font-black text-[8px] uppercase tracking-widest">Authorized Access Only</p>
                </div>

                {error && (
                    <div className="bg-red-50 border-2 border-red-100 text-red-600 p-2 rounded-lg mb-4 text-[8px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                        <span>⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4 relative z-10">
                    <div className="space-y-1">
                        <label className="block text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <div className="relative group/input">
                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-[#0a3d62] transition-colors" size={14} />
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="commander@aero.com"
                                className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] focus:bg-white rounded-lg px-10 py-2.5 text-[10px] font-black text-[#0a3d62] outline-none transition-all placeholder:text-slate-300 shadow-sm"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="block text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">Access Protocol</label>
                        <div className="relative group/input">
                            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within/input:text-[#0a3d62] transition-colors" size={14} />
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] focus:bg-white rounded-lg px-10 py-2.5 text-[10px] font-black text-[#0a3d62] outline-none transition-all placeholder:text-slate-300 shadow-sm"
                                required
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-3 bg-[#0a3d62] text-white rounded-lg font-black text-[9px] uppercase tracking-widest shadow-xl hover:bg-[#0c4a75] transition-all flex items-center justify-center gap-3 border-2 border-transparent hover:border-[#0a3d62]"
                    >
                        Initialize Session <ArrowRight size={14} />
                    </button>
                    
                    <p className="text-center text-[8px] font-black text-slate-400 uppercase tracking-widest mt-2 flex items-center justify-center gap-4">
                        <span>New? <Link to="/register" className="text-[#0a3d62] underline hover:text-[#FF8A00] transition-colors decoration-2 underline-offset-4">Register</Link></span>
                        <Link to="/admin" className="px-2 py-0.5 bg-slate-50 border border-slate-200 text-[#0a3d62] rounded-md font-black text-[6px] hover:border-[#0a3d62] transition-all">
                            ADMIN BYPASS ⚡
                        </Link>
                    </p>
                    
                    <div className="mt-4 shiv-tinted-panel !p-2 text-center border-2">
                      <p className="text-[7px] font-black text-[#0a3d62]/60 uppercase tracking-widest mb-1.5 border-b border-[#0a3d62]/5 pb-1">Debug Credentials</p>
                      <div className="flex flex-col gap-1 text-[8px] font-black text-slate-500">
                        <div className="flex justify-between items-center bg-white/40 p-1.5 rounded-md">
                          <span className="text-[#0a3d62]">ADMIN</span>
                          <div className="text-right">
                            <div className="text-[7px]">admin@airport.com</div>
                            <div className="text-[#FF8A00] text-[6px]">PASS: admin</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center bg-white/40 p-1.5 rounded-md">
                          <span className="text-[#0a3d62]">STAFF</span>
                          <div className="text-right">
                            <div className="text-[7px]">staff@airport.com</div>
                            <div className="text-[#FF8A00] text-[6px]">PASS: staff</div>
                          </div>
                        </div>
                      </div>
                    </div>
                </form>

                <div className="absolute -bottom-6 -right-6 opacity-[0.03] text-[#0a3d62] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                    <Plane size={150} className="-rotate-45" />
                </div>
            </div>
        </div>
    );
};

export default Login;
