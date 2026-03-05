import React from 'react';
import { Plus } from 'lucide-react';

const goals = [
  { id: 1, title: '紧急备用金', current: 7000, target: 10000, color: 'bg-lime-500', icon: '💰', timeframe: '还需存 4 个月' },
  { id: 2, title: '日本旅行', current: 2500, target: 4000, color: 'bg-orange-400', icon: '✈️', timeframe: '还需存 3 个月' },
  { id: 3, title: '新电脑', current: 1600, target: 2000, color: 'bg-blue-400', icon: '💻', timeframe: '还需存 1 个月' },
];

export default function GoalTracker() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">目标追踪</h2>
        <button className="flex items-center gap-1 text-xs font-medium border border-gray-200 rounded-lg px-2 py-1 hover:bg-gray-50">
          <Plus size={14} /> 添加目标
        </button>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto pr-2">
        {goals.map(goal => {
          const percentage = Math.round((goal.current / goal.target) * 100);
          return (
            <div key={goal.id} className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-xl shadow-sm border border-gray-100 flex-shrink-0">
                {goal.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-end mb-1">
                  <h4 className="text-sm font-bold truncate pr-2">{goal.title}</h4>
                  <span className="text-xs text-gray-500 whitespace-nowrap">¥{goal.current.toLocaleString()} / ¥{goal.target.toLocaleString()}</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-1">
                  <div 
                    className={`h-full ${goal.color} rounded-full`} 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-gray-400">{goal.timeframe}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
