import React from 'react';

const Form = ({ title, fields, onSubmit }) => {
  return (
    <div className="bg-shiv-card rounded-3xl border border-shiv-border shadow-2xl shadow-black/40 p-10">
      <h3 className="text-xl font-black text-shiv-text-primary tracking-tight italic uppercase mb-10 border-b border-shiv-border pb-6">{title}</h3>
      <form onSubmit={onSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map((field, i) => (
            <div key={i} className={field.fullWidth ? 'md:col-span-2' : ''}>
              <label className="block text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em] mb-3 ml-1">
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select className="w-full bg-shiv-bg-secondary border border-shiv-border rounded-xl px-5 py-4 text-shiv-text-primary outline-none focus:border-shiv-primary transition-all duration-300 font-bold text-sm">
                  {field.options.map((opt, j) => (
                    <option key={j} value={opt} className="bg-shiv-card">{opt}</option>
                  ))}
                </select>
              ) : field.type === 'textarea' ? (
                <textarea 
                  rows="4" 
                  className="w-full bg-shiv-bg-secondary border border-shiv-border rounded-xl px-5 py-4 text-shiv-text-primary outline-none focus:border-shiv-primary transition-all duration-300 font-bold text-sm resize-none placeholder:text-shiv-muted/50"
                  placeholder={field.placeholder}
                ></textarea>
              ) : (
                <input 
                  type={field.type || 'text'} 
                  className="w-full bg-shiv-bg-secondary border border-shiv-border rounded-xl px-5 py-4 text-shiv-text-primary outline-none focus:border-shiv-primary transition-all duration-300 font-bold text-sm placeholder:text-shiv-muted/50"
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end pt-6">
          <button type="submit" className="btn-primary w-full md:w-auto shadow-orange-500/10">
            Authorize Operation
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
