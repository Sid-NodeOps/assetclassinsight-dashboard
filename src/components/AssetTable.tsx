import React from 'react';
import { Asset } from '../data/mockData';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const AssetTable: React.FC<{ assets: Asset[] }> = ({ assets }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-800">
            <th className="pb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Asset</th>
            <th className="pb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Price</th>
            <th className="pb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">24h Change</th>
            <th className="pb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Volume</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/50">
          {assets.map((asset) => (
            <tr key={asset.id} className="group hover:bg-slate-800/20 transition-colors">
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xs">
                    {asset.symbol[0]}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{asset.name}</p>
                    <p className="text-xs text-slate-500 uppercase">{asset.symbol}</p>
                  </div>
                </div>
              </td>
              <td className="py-4">
                <p className="font-semibold text-sm">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}</p>
              </td>
              <td className="py-4">
                <div className={`flex items-center gap-1 text-sm font-medium ${asset.changePercent >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {asset.changePercent >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {Math.abs(asset.changePercent)}%
                </div>
              </td>
              <td className="py-4 text-right">
                <p className="text-sm font-medium text-slate-300">{asset.volume}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};