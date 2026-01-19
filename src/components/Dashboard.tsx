import React, { useState } from 'react';
import { LayoutDashboard, TrendingUp, BarChart3, Globe, Settings, Bell, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { ASSETS, Asset } from '../data/mockData';
import { AssetCard } from './AssetCard';
import { MarketChart } from './MarketChart';
import { AssetTable } from './AssetTable';

export const Dashboard: React.FC = () => {
  const [activeType, setActiveType] = useState<Asset['type'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAssets = ASSETS.filter(asset => {
    const matchesType = activeType === 'all' || asset.type === activeType;
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         asset.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const topPerformers = [...ASSETS].sort((a, b) => b.changePercent - a.changePercent).slice(0, 4);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-950 p-6 hidden lg:block">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
            <TrendingUp className="text-white" size={24} />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Market<span className="text-emerald-500">Insight</span></h1>
        </div>

        <nav className="space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Overview" active />
          <NavItem icon={<BarChart3 size={20} />} label="Markets" />
          <NavItem icon={<Globe size={20} />} label="News" />
          <NavItem icon={<Bell size={20} />} label="Alerts" />
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </nav>

        <div className="mt-auto pt-10">
          <div className="p-4 rounded-2xl glass-card">
            <p className="text-xs text-slate-400 mb-2">Portfolio Value</p>
            <h3 className="text-lg font-bold">$124,592.00</h3>
            <p className="text-xs text-emerald-500 mt-1">+4.2% today</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold">Market Overview</h2>
            <p className="text-slate-400 text-sm">Real-time insights across global markets</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Search assets..." 
                className="bg-slate-900 border border-slate-800 rounded-xl py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="p-2 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors">
              <Filter size={20} className="text-slate-400" />
            </button>
          </div>
        </header>

        {/* Top Performers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {topPerformers.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 space-y-8">
            <div className="p-6 rounded-2xl glass-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Market Performance (S&P 500)</h3>
                <div className="flex gap-2">
                  {['1D', '1W', '1M', '1Y', 'ALL'].map((p) => (
                    <button key={p} className={`px-3 py-1 text-xs rounded-lg ${p === '1D' ? 'bg-emerald-500 text-white' : 'hover:bg-slate-800 text-slate-400'}`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[300px]">
                <MarketChart />
              </div>
            </div>

            <div className="p-6 rounded-2xl glass-card">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                  <h3 className="font-semibold">Asset Explorer</h3>
                  <div className="flex gap-4">
                    {(['all', 'stock', 'crypto', 'commodity', 'forex'] as const).map((type) => (
                      <button 
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`text-sm capitalize transition-colors ${activeType === type ? 'text-emerald-500 font-medium' : 'text-slate-400 hover:text-slate-200'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <AssetTable assets={filteredAssets} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl glass-card">
              <h3 className="font-semibold mb-4">Latest Market News</h3>
              <div className="space-y-4">
                <NewsItem title="Bitcoin surges past $98k as adoption grows" time="2h ago" tag="Crypto" />
                <NewsItem title="NVIDIA reports record Q3 earnings, AI demand strong" time="4h ago" tag="Tech" />
                <NewsItem title="Federal Reserve signals potential rate pauses" time="6h ago" tag="Economy" />
                <NewsItem title="Gold prices dip amid strengthening dollar" time="8h ago" tag="Commodities" />
              </div>
              <button className="w-full py-2 mt-6 text-sm text-slate-400 hover:text-emerald-500 transition-colors">View all news</button>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 border border-emerald-500/20">
              <h3 className="font-semibold mb-2">Upgrade to Pro</h3>
              <p className="text-sm text-slate-400 mb-4">Get access to real-time institutional data and advanced analytics.</p>
              <button className="w-full py-2 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-medium transition-colors">Start 7-day free trial</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-emerald-500/10 text-emerald-500' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}>
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

const NewsItem = ({ title, time, tag }: { title: string, time: string, tag: string }) => (
  <div className="group cursor-pointer">
    <div className="flex gap-2 mb-1">
      <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-wider">{tag}</span>
      <span className="text-[10px] text-slate-500 tracking-wider">• {time}</span>
    </div>
    <h4 className="text-sm font-medium group-hover:text-emerald-500 transition-colors leading-snug">{title}</h4>
  </div>
);