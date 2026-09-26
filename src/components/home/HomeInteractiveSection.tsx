import React from 'react';
import { 
  Flame, 
  Calendar, 
  Bell, 
  Landmark, 
  ArrowRight, 
  CheckCircle, 
  Scale, 
  TrendingUp, 
  Languages, 
  ChevronRight 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const HomeInteractiveSection: React.FC = () => {
  const { setActiveTab } = useApp();

  const practiceModules = [
    {
      id: 'banking-awareness',
      title: 'Banking Awareness',
      questions: '10 Q',
      icon: Landmark,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
    },
    {
      id: 'constitution-governance',
      title: 'Constitution & Governance',
      questions: '10 Q',
      icon: Scale,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
    },
    {
      id: 'econ-social',
      title: 'Economic & Social Development',
      questions: '10 Q',
      icon: TrendingUp,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50',
    },
    {
      id: 'english',
      title: 'English',
      questions: '10 Q',
      icon: Languages,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
    },
  ];

  const notices = [
    {
      id: 'n1',
      dateDay: '26',
      dateMonth: 'Sep',
      title: 'NRB Assistant Exam Center Notice',
      isNew: true,
      meta: 'NRB | 26 Sep 2025',
    },
    {
      id: 'n2',
      dateDay: '24',
      dateMonth: 'Sep',
      title: 'RBB Level 4 Result Published',
      isNew: false,
      meta: 'RBB | 24 Sep 2025',
    },
    {
      id: 'n3',
      dateDay: '22',
      dateMonth: 'Sep',
      title: 'NTC Vacancy Notice',
      isNew: false,
      meta: 'NTC | 22 Sep 2025',
    },
    {
      id: 'n4',
      dateDay: '20',
      dateMonth: 'Sep',
      title: 'PSC Pre-Test Schedule',
      isNew: false,
      meta: 'PSC | 20 Sep 2025',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
      
      {/* 1. CONTINUE LEARNING */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center gap-2">
            <span className="text-orange-500 text-base">🔥</span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                Continue Learning
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Where you left off
              </p>
            </div>
          </div>

          {/* Module Inner Card */}
          <div className="mt-4 p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-800 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Landmark className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-bold text-slate-900 truncate">
                  NRB Assistant
                </h4>
                <p className="text-xs text-slate-500 font-medium truncate">
                  Unit 3: Monetary Policy
                </p>
              </div>
            </div>

            {/* Progress Bar & Percentage */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-600">
                <span>प्रगति</span>
                <span className="text-teal-700">68%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-600 to-teal-500 rounded-full" 
                  style={{ width: '68%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          type="button"
          onClick={() => setActiveTab('study')}
          className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052FF] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer group"
        >
          <span>Continue Learning</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 2. TODAY'S PRACTICE */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0052FF] flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                Today's Practice
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Build your confidence with daily practice
              </p>
            </div>
          </div>

          {/* Practice Modules List */}
          <div className="mt-4 space-y-2">
            {practiceModules.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab('practice')}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100/70 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className={`w-7 h-7 rounded-lg ${item.iconBg} ${item.iconColor} flex items-center justify-center shrink-0`}>
                      <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 truncate group-hover:text-[#0052FF]">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                    {item.questions}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          type="button"
          onClick={() => setActiveTab('practice')}
          className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0066FF] hover:bg-[#0052FF] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer group"
        >
          <span>Start Practice</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 3. LATEST NOTICES */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                Latest Notices
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                महत्वपूर्ण सूचना र अपडेट
              </p>
            </div>
          </div>

          {/* Notices Chronological List */}
          <div className="mt-4 space-y-2.5">
            {notices.map((notice) => (
              <div
                key={notice.id}
                onClick={() => setActiveTab('vacancies')}
                className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                {/* Date Capsule Box */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200/80 flex flex-col items-center justify-center shrink-0 text-slate-700 leading-tight">
                  <span className="text-xs font-black">{notice.dateDay}</span>
                  <span className="text-[9px] font-bold uppercase text-slate-500">{notice.dateMonth}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h5 className="text-xs font-bold text-slate-800 truncate group-hover:text-[#0052FF] leading-snug">
                      {notice.title}
                    </h5>
                    {notice.isNew && (
                      <span className="px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 rounded-sm">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">
                    {notice.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <button
          type="button"
          onClick={() => setActiveTab('vacancies')}
          className="mt-4 flex items-center justify-center gap-1 text-xs font-bold text-[#0052FF] hover:text-blue-700 transition-colors cursor-pointer py-1.5"
        >
          <span>सबै सूचनाहरू हेर्नुहोस्</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
