import React from 'react';
import { useNotification } from '../contexts/NotificationContext';
import { Play } from 'lucide-react';

const Table = ({ headers, data, onAction }) => {
  const { addNotification } = useNotification();

  const handleAction = (item) => {
    if (onAction) {
      onAction(item);
    } else {
      addNotification(`Operation Executed for ${item.id || item.name || 'Selected Item'}`, 'success');
    }
  };

  return (
    <div className="shiv-perfect-card overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
          <thead>
            <tr className="bg-slate-50 border-b-2 border-slate-100">
              {headers.map((header, j) => (
                <th key={j} className="px-4 sm:px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{header}</th>
              ))}
              <th className="px-4 sm:px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Operation</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-slate-50">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-slate-50/50 transition-all duration-200 group">
                {Object.entries(row).filter(([key]) => !key.startsWith('_')).map(([key, val], k) => (
                  <td key={k} className="px-4 sm:px-6 py-4 text-[12px] font-bold text-[#0a3d62]">
                    {val}
                  </td>
                ))}
                <td className="px-4 sm:px-6 py-4 text-right whitespace-nowrap">
                  <button 
                    onClick={() => handleAction(row)}
                    className="bg-[#0a3d62] text-white px-4 py-1.5 rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-[#0c4a75] transition-all shadow-md flex items-center gap-2 ml-auto"
                  >
                    Execute <Play size={10} fill="currentColor" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
