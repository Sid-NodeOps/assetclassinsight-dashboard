export interface Asset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  type: 'stock' | 'crypto' | 'commodity' | 'forex';
  marketCap?: string;
  volume: string;
  sparkline: number[];
}

export const ASSETS: Asset[] = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 98452.12,
    change: 1245.50,
    changePercent: 1.28,
    type: 'crypto',
    marketCap: '$1.94T',
    volume: '$45.2B',
    sparkline: [95000, 96200, 95800, 97500, 98100, 97800, 98452]
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3412.85,
    change: -42.10,
    changePercent: -1.22,
    type: 'crypto',
    marketCap: '$410.5B',
    volume: '$18.1B',
    sparkline: [3500, 3480, 3520, 3450, 3400, 3420, 3412]
  },
  {
    id: '3',
    name: 'NVIDIA Corp',
    symbol: 'NVDA',
    price: 142.50,
    change: 3.42,
    changePercent: 2.46,
    type: 'stock',
    marketCap: '$3.51T',
    volume: '$120.4M',
    sparkline: [135, 138, 137, 140, 141, 139, 142.5]
  },
  {
    id: '4',
    name: 'Apple Inc',
    symbol: 'AAPL',
    price: 228.12,
    change: 1.15,
    changePercent: 0.51,
    type: 'stock',
    marketCap: '$3.45T',
    volume: '$48.2M',
    sparkline: [225, 226, 224, 227, 228, 227, 228.12]
  },
  {
    id: '5',
    name: 'Gold',
    symbol: 'GC=F',
    price: 2642.40,
    change: -12.30,
    changePercent: -0.46,
    type: 'commodity',
    volume: '$12.4B',
    sparkline: [2660, 2655, 2670, 2650, 2645, 2648, 2642.4]
  },
  {
    id: '6',
    name: 'Crude Oil',
    symbol: 'CL=F',
    price: 71.85,
    change: 1.42,
    changePercent: 2.01,
    type: 'commodity',
    volume: '$8.1B',
    sparkline: [69.5, 70.2, 70.8, 71.0, 70.5, 71.2, 71.85]
  },
  {
    id: '7',
    name: 'EUR/USD',
    symbol: 'EURUSD',
    price: 1.0542,
    change: -0.0021,
    changePercent: -0.20,
    type: 'forex',
    volume: '$6.6T',
    sparkline: [1.058, 1.057, 1.059, 1.056, 1.055, 1.054, 1.0542]
  },
  {
    id: '8',
    name: 'Tesla, Inc.',
    symbol: 'TSLA',
    price: 352.48,
    change: 8.92,
    changePercent: 2.60,
    type: 'stock',
    marketCap: '$1.13T',
    volume: '$75.1M',
    sparkline: [330, 340, 335, 345, 350, 348, 352.48]
  }
];

export const MARKET_HISTORY = [
  { time: '09:00', value: 4500 },
  { time: '10:00', value: 4520 },
  { time: '11:00', value: 4480 },
  { time: '12:00', value: 4550 },
  { time: '13:00', value: 4580 },
  { time: '14:00', value: 4540 },
  { time: '15:00', value: 4600 },
  { time: '16:00', value: 4620 },
];