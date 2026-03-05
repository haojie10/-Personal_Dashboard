import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '周日', income: 4000, expense: 2400 },
  { name: '周一', income: 3000, expense: 1398 },
  { name: '周二', income: 2000, expense: 9800 },
  { name: '周三', income: 2780, expense: 3908 },
  { name: '周四', income: 1890, expense: 4800 },
  { name: '周五', income: 2390, expense: 3800 },
  { name: '周六', income: 3490, expense: 4300 },
];

export default function FinanceOverview() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-1">¥12,450</h2>
          <p className="text-sm text-gray-500">资金概览</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-lime-400"></span> 收入
            <span className="w-2 h-2 rounded-full bg-orange-400 ml-2"></span> 支出
          </div>
          <select className="bg-gray-50 border-none text-sm rounded-lg px-3 py-1.5 outline-none">
            <option>近7天</option>
            <option>近30天</option>
          </select>
        </div>
      </div>
      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="income" fill="#a3e635" radius={[4, 4, 4, 4]} barSize={32} />
            <Bar dataKey="expense" fill="#fb923c" radius={[4, 4, 4, 4]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
