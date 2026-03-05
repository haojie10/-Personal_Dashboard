import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const initialTasks = [
  { id: 1, title: '复盘第三季度财务报告', tags: ['工作', '重要'], completed: false },
  { id: 2, title: '健身房 - 上肢训练', tags: ['健康'], completed: true },
  { id: 3, title: '阅读《原子习惯》20页', tags: ['学习'], completed: false },
  { id: 4, title: '给妈妈打电话', tags: ['个人'], completed: false },
];

const tagColors: Record<string, string> = {
  '工作': 'bg-blue-100 text-blue-700',
  '重要': 'bg-red-100 text-red-700',
  '健康': 'bg-lime-100 text-lime-700',
  '学习': 'bg-purple-100 text-purple-700',
  '个人': 'bg-orange-100 text-orange-700',
};

export default function TaskWall() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">任务墙</h2>
        <button className="text-sm text-lime-600 font-medium hover:underline">查看全部</button>
      </div>
      <div className="flex-1 overflow-y-auto pr-2 space-y-3">
        {tasks.map(task => (
          <div key={task.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group cursor-pointer" onClick={() => toggleTask(task.id)}>
            <button className="mt-0.5 flex-shrink-0 text-gray-400 group-hover:text-lime-500 transition-colors">
              {task.completed ? <CheckCircle2 className="text-lime-500" size={20} /> : <Circle size={20} />}
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate transition-all ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                {task.title}
              </p>
              <div className="flex gap-2 mt-1.5 overflow-x-auto pb-1 no-scrollbar">
                {task.tags.map(tag => (
                  <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-md font-medium whitespace-nowrap ${tagColors[tag] || 'bg-gray-100 text-gray-600'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
