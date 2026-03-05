import React from 'react';
import FinanceOverview from './FinanceOverview';
import TaskWall from './TaskWall';
import QuickCapture from './QuickCapture';
import StatusSchedule from './StatusSchedule';
import GoalTracker from './GoalTracker';
import RightSidebar from './RightSidebar';

export default function Dashboard() {
  return (
    <div className="flex flex-col xl:flex-row gap-6">
      {/* Main Grid */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        {/* Top Row: Finance Chart + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm flex flex-col min-h-[320px]">
            <FinanceOverview />
          </div>
          <div className="lg:col-span-1 flex flex-col gap-4">
            <StatCard title="总收入" amount="¥15,000" trend="+5.1%" trendUp />
            <StatCard title="总支出" amount="¥6,700" trend="-2.4%" trendUp={false} />
            <StatCard title="结余" amount="¥8,300" trend="+20.7%" trendUp />
          </div>
        </div>

        {/* Middle Row: Task Wall + Quick Capture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col min-h-[280px]">
            <TaskWall />
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col min-h-[280px]">
            <QuickCapture />
          </div>
        </div>

        {/* Bottom Row: Status/Schedule + Goal Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col min-h-[300px]">
            <StatusSchedule />
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col min-h-[300px]">
            <GoalTracker />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full xl:w-[320px] flex-shrink-0 flex flex-col gap-6">
        <RightSidebar />
      </div>
    </div>
  );
}

function StatCard({ title, amount, trend, trendUp }: { title: string; amount: string; trend: string; trendUp: boolean }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm flex-1 flex flex-col justify-center">
      <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-2">{amount}</div>
      <div className={`text-xs font-medium flex items-center gap-1 ${trendUp ? 'text-lime-500' : 'text-red-500'}`}>
        {trendUp ? '↗' : '↘'} 较上月 {trend}
      </div>
    </div>
  );
}
