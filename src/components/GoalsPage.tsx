import React from 'react';
import GoalTracker from './GoalTracker';

export default function GoalsPage() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm min-h-full">
      <h1 className="text-2xl font-bold mb-6">目标追踪</h1>
      <div className="max-w-2xl h-[500px]">
        <GoalTracker />
      </div>
    </div>
  );
}
