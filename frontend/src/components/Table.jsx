import React from 'react';

const Table = ({ headers, data }) => {
  return (
    <div className="bg-shiv-card rounded-2xl border border-shiv-border shadow-2xl shadow-black/40 overflow-hidden">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[700px] md:min-w-full">
          <thead>
            <tr className="bg-shiv-bg-secondary/50 border-b border-shiv-border">
              {headers.map((header, j) => (
                <th key={j} className="px-6 py-6 text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em]">{header}</th>
              ))}
              <th className="px-6 py-6 text-[10px] font-black text-shiv-muted uppercase tracking-[0.2em] text-right">Operation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-shiv-border">
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-shiv-card-hover/80 transition-all duration-200 group">
                {Object.values(row).map((val, k) => (
                  <td key={k} className="px-6 py-5 text-sm font-bold text-shiv-text-secondary group-hover:text-shiv-text-primary transition-colors">
                    {typeof val === 'string' && val.startsWith('#') ? (
                      <span className="text-shiv-primary/80">{val}</span>
                    ) : (
                      val
                    )}
                  </td>
                ))}
                <td className="px-6 py-5 text-right">
                  <button className="text-shiv-primary font-black text-[10px] uppercase tracking-widest hover:underline hover:scale-105 transition-all">Execute</button>
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
