import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const schedule = [
  { id: 1, time: '09:00', title: '团队早会', type: 'meeting', duration: '30分钟' },
  { id: 2, time: '11:30', title: '专注工作：UI设计', type: 'work', duration: '2小时' },
  { id: 3, time: '15:00', title: '牙医预约', type: 'personal', duration: '1小时', location: '市中心诊所' },
];

export default function StatusSchedule() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-bold">今日日程</h2>
          <p className="text-sm text-gray-500">2026年3月4日 星期三</p>
        </div>
        <div className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span> 顺利进行中
        </div>
      </div>
      
      <div className="flex-1 relative">
        {/* Timeline line */}
        <div className="absolute left-[39px] top-2 bottom-2 w-px bg-gray-100"></div>
        
        <div className="space-y-6 relative z-10">
          {schedule.map((item) => (
            <div key={item.id} className="flex gap-4 group">
              <div className="w-16 text-right pt-1">
                <span className="text-xs font-medium text-gray-500">{item.time}</span>
              </div>
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-lime-500 absolute -left-[5.5px] top-1.5 group-hover:scale-125 transition-transform"></div>
              </div>
              <div className="flex-1 bg-gray-50 rounded-xl p-3 border border-gray-100 hover:border-lime-200 transition-colors cursor-pointer">
                <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Clock size={12} /> {item.duration}</span>
                  {item.location && <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
