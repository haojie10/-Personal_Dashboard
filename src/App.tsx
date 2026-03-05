/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SchedulePage from './components/SchedulePage';
import TasksPage from './components/TasksPage';
import FinancePage from './components/FinancePage';
import GoalsPage from './components/GoalsPage';
import JournalPage from './components/JournalPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch(currentTab) {
      case 'dashboard': return <Dashboard />;
      case 'schedule': return <SchedulePage />;
      case 'tasks': return <TasksPage />;
      case 'finance': return <FinancePage />;
      case 'goals': return <GoalsPage />;
      case 'journal': return <JournalPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-[#f4f5f7] font-sans text-gray-900 overflow-hidden">
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      
      <div className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-50`}>
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} closeMenu={() => setIsMobileMenuOpen(false)} />
      </div>
      
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        <Header toggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
