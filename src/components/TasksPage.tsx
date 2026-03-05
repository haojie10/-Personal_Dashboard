import React from 'react';
import TaskWall from './TaskWall';

export default function TasksPage() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm min-h-full">
      <h1 className="text-2xl font-bold mb-6">任务管理</h1>
      <div className="max-w-3xl h-[600px]">
        <TaskWall />
      </div>
    </div>
  );
}
