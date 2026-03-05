import React from 'react';
import { CreditCard, Plus, ArrowUpRight, ArrowDownLeft, MoreHorizontal } from 'lucide-react';

const transactions = [
  { id: 1, name: '股票分红', date: '2026年2月25日', amount: '+ ¥1,100', type: 'income', icon: '📈', status: '已完成' },
  { id: 2, name: '年度软件订阅', date: '2026年2月25日', amount: '- ¥6,400', type: 'expense', icon: '💼', status: '已拒绝' },
  { id: 3, name: '定投指数基金', date: '2026年2月21日', amount: '- ¥900', type: 'expense', icon: '🏦', status: '已完成' },
  { id: 4, name: '咨询服务费', date: '2026年2月21日', amount: '- ¥2,100', type: 'expense', icon: '🤝', status: '已完成' },
  { id: 5, name: '购买办公设备', date: '2026年2月20日', amount: '- ¥1,700', type: 'expense', icon: '💻', status: '已完成' },
];

export default function RightSidebar() {
  return (
    <>
      {/* My Card Section */}
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-bold">我的主页</h2>
            <p className="text-xs text-gray-500">快捷操作</p>
          </div>
          <button className="flex items-center gap-1 text-xs font-medium border border-gray-200 rounded-lg px-2 py-1 hover:bg-gray-50">
            <Plus size={14} /> 编辑
          </button>
        </div>

        {/* Mock Credit Card */}
        <div className="bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl p-5 text-white shadow-lg shadow-lime-500/30 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
          <div className="flex justify-between items-start mb-8 relative z-10">
            <span className="font-medium">LifeOS Pro</span>
            <span className="font-bold italic">VISA</span>
          </div>
          <div className="font-mono text-lg tracking-widest mb-2 opacity-90 relative z-10">
            **** **** **** 7890
          </div>
          <div className="flex justify-between items-end text-xs opacity-80 relative z-10">
            <span>Haojie</span>
            <span>12/28</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-2">
          <ActionButton icon={<ArrowUpRight size={18} />} label="收入" />
          <ActionButton icon={<ArrowDownLeft size={18} />} label="支出" />
          <ActionButton icon={<CreditCard size={18} />} label="银行卡" />
          <ActionButton icon={<MoreHorizontal size={18} />} label="更多" />
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-3xl p-6 shadow-sm flex-1 flex flex-col min-h-[300px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">近期动态</h2>
          <select className="bg-gray-50 border-none text-xs rounded-lg px-2 py-1 outline-none">
            <option>近7天</option>
            <option>近30天</option>
          </select>
        </div>

        <div className="flex justify-between text-xs text-gray-400 font-medium mb-3 px-1">
          <span>↑↓ 名称</span>
          <span>金额</span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {transactions.map(tx => (
            <div key={tx.id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-lg border border-gray-100 flex-shrink-0">
                  {tx.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 truncate">{tx.name}</h4>
                  <p className="text-[10px] text-gray-500">{tx.date}</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                <div className={`text-sm font-bold ${tx.type === 'income' ? 'text-lime-600' : 'text-gray-900'}`}>
                  {tx.amount}
                </div>
                <p className={`text-[10px] ${tx.status === '已拒绝' ? 'text-red-500' : 'text-gray-400'}`}>
                  {tx.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex flex-col items-center gap-2 group">
      <div className="w-12 h-12 rounded-2xl border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all shadow-sm">
        {icon}
      </div>
      <span className="text-[10px] font-medium text-gray-600">{label}</span>
    </button>
  );
}
