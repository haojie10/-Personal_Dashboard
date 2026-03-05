import React from 'react';
import { Search, Bell, Settings, Plus, Menu } from 'lucide-react';

export default function Header({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <header className="h-16 lg:h-20 flex items-center justify-between px-4 lg:px-6 bg-[#f4f5f7]">
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button onClick={toggleMenu} className="lg:hidden p-2 text-gray-600 hover:bg-gray-200 rounded-lg">
          <Menu size={24} />
        </button>
        <div className="relative flex-1 hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="快速搜索..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 shadow-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <button className="p-2 lg:p-2.5 bg-white rounded-xl text-gray-600 hover:text-gray-900 shadow-sm hidden sm:block">
          <Bell size={20} />
        </button>
        <button className="p-2 lg:p-2.5 bg-white rounded-xl text-gray-600 hover:text-gray-900 shadow-sm hidden sm:block">
          <Settings size={20} />
        </button>
        
        <div className="flex items-center gap-3 bg-white pl-2 pr-3 lg:pr-4 py-1.5 rounded-xl shadow-sm cursor-pointer">
          <img 
            src="https://picsum.photos/seed/myavatar/100/100" 
            alt="User" 
            className="w-8 h-8 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-medium leading-tight">Haojie</span>
            <span className="text-xs text-gray-500 leading-tight">haojie10@gmail.com</span>
          </div>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm hover:bg-gray-50">
          <Plus size={18} />
          添加组件
        </button>
      </div>
    </header>
  );
}
