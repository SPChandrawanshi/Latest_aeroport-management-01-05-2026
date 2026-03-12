import React from 'react';
import { Bell, Info, AlertTriangle, CheckCircle2, X } from 'lucide-react';

const NotificationPanel = ({ notifications = [] }) => {
  return (
    <div className="bg-shiv-card rounded-2xl border border-shiv-border shadow-2xl shadow-black/40 overflow-hidden">
      <div className="p-6 border-b border-shiv-border flex justify-between items-center bg-shiv-bg-secondary/50">
        <h3 className="text-[10px] font-black text-shiv-text-primary uppercase tracking-[0.2em] flex items-center gap-3">
          <Bell size={18} className="text-shiv-primary" />
          Intelligence Feed
        </h3>
        <button className="text-[10px] font-black text-shiv-primary hover:underline uppercase tracking-widest">Wipe Data</button>
      </div>
      <div className="divide-y divide-shiv-border max-h-[400px] overflow-y-auto custom-scrollbar">
        {notifications.map((n, i) => (
          <div key={i} className="p-5 hover:bg-shiv-card-hover transition-colors flex gap-5 items-start relative group">
            <div className={`mt-1 p-2.5 rounded-xl border border-shiv-border
              ${n.type === 'alert' ? 'bg-error/10 text-error' : 
                n.type === 'warning' ? 'bg-warning/10 text-warning' : 
                n.type === 'success' ? 'bg-success/10 text-success' : 
                'bg-info/10 text-info'}`}>
              {n.type === 'alert' ? <AlertTriangle size={18} /> : 
               n.type === 'warning' ? <AlertTriangle size={18} /> : 
               n.type === 'success' ? <CheckCircle2 size={18} /> : 
               <Info size={18} />}
            </div>
            <div className="flex-1">
              <p className="text-sm font-black text-shiv-text-primary mb-1 tracking-tight">{n.title}</p>
              <p className="text-xs text-shiv-text-secondary leading-relaxed mb-3">{n.message}</p>
              <span className="text-[9px] font-black text-shiv-muted uppercase tracking-[0.2em] px-2 py-0.5 bg-shiv-bg-secondary rounded border border-shiv-border">{n.time}</span>
            </div>
            <button className="text-shiv-muted hover:text-shiv-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
      <div className="p-5 bg-shiv-bg-secondary/30 text-center border-t border-shiv-border">
        <button className="text-[10px] font-black text-shiv-muted hover:text-shiv-primary uppercase tracking-[0.2em] transition-colors">
          View Protocol Logs
        </button>
      </div>
    </div>
  );
};

export default NotificationPanel;
