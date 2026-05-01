import { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message, type = 'success') => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications((prev) => [...prev, { id, message, type }]);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  }, []);

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      
      {/* Toast Container */}
      <div className="fixed bottom-8 right-8 z-[9999] space-y-4 pointer-events-none">
        {notifications.map((n) => (
          <div 
            key={n.id}
            className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border pointer-events-auto animate-in slide-in-from-right-10 fade-in duration-300
              ${n.type === 'success' ? 'bg-success/10 text-success border-success/20' : 
                n.type === 'error' ? 'bg-error/10 text-error border-error/20' : 
                'bg-info/10 text-info border-info/20'}`}
          style={{ backdropFilter: 'blur(8px)', minWidth: '300px' }}
          >
            {n.type === 'success' ? <CheckCircle size={20} /> : 
             n.type === 'error' ? <AlertCircle size={20} /> : <Info size={20} />}
            
            <div className="flex-1">
              <p className="text-[10px] uppercase font-black tracking-widest leading-none mb-1 opacity-60">{n.type} Signal</p>
              <p className="text-sm font-bold tracking-tight">{n.message}</p>
            </div>

            <button 
              onClick={() => removeNotification(n.id)}
              className="p-1 hover:bg-black/5 rounded-lg transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
