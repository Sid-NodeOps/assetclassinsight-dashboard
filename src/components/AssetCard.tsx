import React from 'react';
import { Asset } from '../data/mockData';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

export const AssetCard: React.FC<{ asset: Asset }> = ({ asset }) => {
  const isPositive = asset.changePercent >= 0;
  
  const chartData = asset.sparkline.map((val, i) => ({ val, i }));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-5 rounded-2xl glass-card hover:border-slate-700 transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-slate-400 text-xs font-medium mb-1 uppercase tracking-wider">{asset.name}</h4>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">${asset.price.toLocaleString()}</span>
            <span className={`text-xs flex items-center gap-0.5 ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
              {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {Math.abs(asset.changePercent)}%
            </span>
          </div>
        </div>
        <div className={`p-2 rounded-lg ${isPositive ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
          <span className={`text-xs font-bold ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>{asset.symbol}</span>
        </div>
      </div>

      <div className="h-16 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`gradient-${asset.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={isPositive ? '#10b981' : '#f43f5e'} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={isPositive ? '#10b981' : '#f43f5e'} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="val" 
              stroke={isPositive ? '#10b981' : '#f43f5e'} 
              strokeWidth={2} 
              fillOpacity={1} 
              fill={`url(#gradient-${asset.id})`}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex justify-between items-center text-[10px] text-slate-500">
        <span>Vol: {asset.volume}</span>
        {asset.marketCap && <span>MCap: {asset.marketCap}</span>}
      </div>
    </motion.div>
  );
};