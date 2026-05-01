import React from 'react';
import { useNotification } from '../contexts/NotificationContext';
import { Send } from 'lucide-react';

const Form = ({ title, fields, onSubmit, columns = 2 }) => {
  const { addNotification } = useNotification();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    } else {
      addNotification(`Signal Authorized: ${title || 'Operation'} Initiated`, 'success');
    }
  };

  return (
    <div className="shiv-perfect-card p-6 sm:p-8">
      {title && (
        <h3 className="text-[14px] font-bold text-[#0a3d62] tracking-widest uppercase mb-6 border-b-2 border-slate-50 pb-4">
          {title}
        </h3>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : ''} gap-x-6 gap-y-4`}>
          {fields.map((field, i) => (
            <div key={i} className={field.fullWidth ? 'md:col-span-2' : ''}>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] rounded-xl px-4 py-3 text-[#0a3d62] outline-none transition-all font-bold text-[12px]">
                  {field.options.map((opt, j) => (
                    <option key={j} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea 
                  rows="3" 
                  className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] rounded-xl px-4 py-3 text-[#0a3d62] outline-none transition-all font-bold text-[12px] resize-none placeholder:text-slate-300"
                  placeholder={field.placeholder}
                ></textarea>
              ) : (
                <input 
                  type={field.type || 'text'} 
                  className="w-full bg-slate-50 border-2 border-slate-100 focus:border-[#0a3d62] rounded-xl px-4 py-3 text-[#0a3d62] outline-none transition-all font-bold text-[12px] placeholder:text-slate-300"
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end pt-4">
          <button type="submit" className="bg-[#0a3d62] text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-xl hover:bg-[#0c4a75] transition-all flex items-center gap-3 w-full md:w-auto justify-center">
            Authorize Operation <Send size={14} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
