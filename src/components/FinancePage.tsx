import React from 'react';
import FinanceOverview from './FinanceOverview';

export default function FinancePage() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm min-h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-6">财务分析</h1>
      <div className="h-[400px] w-full max-w-4xl">
        <FinanceOverview />
      </div>
    </div>
  );
}
