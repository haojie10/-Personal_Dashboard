import React from 'react';
import QuickCapture from './QuickCapture';

export default function JournalPage() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm min-h-full">
      <h1 className="text-2xl font-bold mb-6">随笔与感悟</h1>
      <div className="max-w-2xl h-[200px] mb-8">
        <QuickCapture />
      </div>
      <div className="space-y-4 max-w-2xl">
        <h3 className="font-bold text-lg">历史记录</h3>
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-sm text-gray-600 mb-2">"今天完成了所有的核心任务，感觉效率很高。明天需要重点关注财务报表的分析。"</p>
          <span className="text-xs text-gray-400">2026年3月3日 18:30</span>
        </div>
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-sm text-gray-600 mb-2">"读完了《原子习惯》的第一章，微小的改变确实能带来巨大的复利效应。"</p>
          <span className="text-xs text-gray-400">2026年3月2日 21:15</span>
        </div>
      </div>
    </div>
  );
}
