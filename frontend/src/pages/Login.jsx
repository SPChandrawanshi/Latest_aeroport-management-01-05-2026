import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Lock, ArrowRight } from 'lucide-react';
import { users } from '../data/users';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        
        try {
            // Simulate API call
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                const { password, ...userWithoutPassword } = user;
                login(userWithoutPassword);
                if (user.role === 'admin') navigate('/admin');
                else if (user.role === 'staff') navigate('/staff');
                else if (user.role === 'passenger') navigate('/');
                else navigate('/');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('An error occurred during login.');
            console.error(err)
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundColor: '#f0f2f5',
            fontFamily: "'Segoe UI', sans-serif",
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                padding: '40px',
                backgroundColor: 'white',
                borderRadius: '15px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                textAlign: 'center'
            }}>
                <div style={{ marginBottom: '30px' }}>
                    <div style={{ 
                        width: '60px', 
                        height: '60px', 
                        backgroundColor: '#e1f5fe', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 auto 15px' 
                    }}>
                        <User size={30} color="#227093" />
                    </div>
                    <h1 style={{ color: '#2c3e50', margin: '0 0 5px', fontSize: '1.8rem' }}>Welcome Back</h1>
                    <p style={{ color: '#909090', margin: 0, fontSize: '0.95rem' }}>Sign in to access your dashboard</p>
                </div>

                {error && <div style={{ 
                    backgroundColor: '#ffebee', 
                    color: '#c62828', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    marginBottom: '25px',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                }}>
                    <span>⚠️</span> {error}
                </div>}

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#b0bec5' }} />
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    fontSize: '15px',
                                    boxSizing: 'border-box',
                                    transition: 'border-color 0.3s',
                                    outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#227093'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                required
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '30px', textAlign: 'left' }}>
                        <label style={{ display: 'block', marginBottom: '8px', color: '#555', fontSize: '0.9rem', fontWeight: '500' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#b0bec5' }} />
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    fontSize: '15px',
                                    boxSizing: 'border-box',
                                    transition: 'border-color 0.3s',
                                    outline: 'none'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#227093'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                required
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        style={{
                            width: '100%',
                            padding: '14px',
                            backgroundColor: '#227093',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'background 0.3s, transform 0.1s',
                            boxShadow: '0 4px 6px rgba(34, 112, 147, 0.2)'
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#1a5c7a'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#227093'}
                        onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
                        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Sign In <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </button>
                    
                    <div style={{marginTop: '25px', textAlign: 'center', padding: '15px', backgroundColor: '#f9fafb', borderRadius: '8px'}}>
                      <p style={{fontSize: '0.85rem', color: '#666', margin: '0 0 8px', fontWeight: 'bold'}}>Demo Credentials:</p>
                      <div style={{fontSize: '0.8rem', color: '#555', display: 'flex', flexDirection: 'column', gap: '4px'}}>
                        <span><strong style={{color: '#227093'}}>Admin:</strong> admin@airport.com / admin</span>
                        <span><strong style={{color: '#227093'}}>Staff:</strong> staff@airport.com / staff</span>
                        <span><strong style={{color: '#227093'}}>User:</strong> passenger@airport.com / user</span>
                      </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
