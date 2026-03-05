import React from 'react';
import { LayoutDashboard, Calendar, CheckSquare, PieChart, Target, BookOpen, Zap } from 'lucide-react';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  closeMenu: () => void;
}

export default function Sidebar({ currentTab, setCurrentTab, closeMenu }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: '仪表盘' },
    { id: 'schedule', icon: <Calendar size={20} />, label: '日程' },
    { id: 'tasks', icon: <CheckSquare size={20} />, label: '任务' },
    { id: 'finance', icon: <PieChart size={20} />, label: '财务' },
    { id: 'goals', icon: <Target size={20} />, label: '目标' },
    { id: 'journal', icon: <BookOpen size={20} />, label: '随笔' },
  ];

  return (
    <aside className="w-64 bg-[#f4f5f7] border-r border-gray-200 flex flex-col h-full px-4 py-6">
      <div className="flex items-center gap-3 px-2 mb-8">
        <img 
          src="https://picsum.photos/seed/myavatar/100/100" 
          alt="Logo" 
          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          referrerPolicy="no-referrer"
        />
        <span className="text-xl font-bold">LifeOS</span>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => { setCurrentTab(item.id); closeMenu(); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
              currentTab === item.id 
                ? 'bg-white text-black shadow-sm font-medium' 
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mb-3">
            <Zap size={16} className="text-white" />
          </div>
          <h4 className="font-bold text-sm mb-1">每日格言</h4>
          <p className="text-xs text-gray-500 mb-3">"每天坚持微小的自律，假以时日，必将成就伟大的事业。"</p>
        </div>
      </div>
    </aside>
  );
}
