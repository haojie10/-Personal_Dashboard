import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

export default function QuickCapture() {
  const [thought, setThought] = useState('');

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="text-orange-400" size={20} />
        <h2 className="text-lg font-bold">灵感速记</h2>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        随时记录你的灵感、想法或每日复盘。
      </p>
      <div className="flex-1 relative flex flex-col min-h-[120px]">
        <textarea
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          placeholder="今天有什么想法？"
          className="flex-1 w-full resize-none bg-gray-50 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 border border-gray-100"
        />
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <span className="text-xs text-gray-400">{thought.length} 字</span>
          <button 
            className={`p-2 rounded-xl transition-colors ${thought.trim() ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            disabled={!thought.trim()}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
