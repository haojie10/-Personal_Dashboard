import React from 'react';
import StatusSchedule from './StatusSchedule';

export default function SchedulePage() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm min-h-full">
      <h1 className="text-2xl font-bold mb-6">日程安排</h1>
      <div className="max-w-2xl h-[500px]">
        <StatusSchedule />
      </div>
    </div>
  );
}
