import React from 'react';
import { 
  Building2, 
  User, 
  Settings, 
  FileText, 
  Trophy, 
  Newspaper, 
  Briefcase 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';

interface QuickCategoryItem {
  id: string;
  tab: NavigationTab;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

export const HomeCategoryGrid: React.FC = () => {
  const { setActiveTab } = useApp();

  const categories: QuickCategoryItem[] = [
    {
      id: 'sangathit',
      tab: 'sangathit-sanstha',
      title: 'Sangathit Sanstha',
      subtitle: 'सबै संस्थाहरूको अवसर',
      icon: Building2,
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      id: 'loksewa',
      tab: 'lok-sewa',
      title: 'Lok Sewa',
      subtitle: 'निजामती सेवा तयारी',
      icon: User,
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      id: 'enterprises',
      tab: 'public-enterprises',
      title: 'Public Enterprises',
      subtitle: 'सार्वजनिक संस्थानहरू',
      icon: Settings,
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      id: 'practice',
      tab: 'practice',
      title: 'Practice',
      subtitle: 'अभ्यास प्रश्नहरू',
      icon: FileText,
      iconBg: 'bg-sky-50',
      iconColor: 'text-[#0052FF]',
    },
    {
      id: 'mock',
      tab: 'mock-tests',
      title: 'Mock Test',
      subtitle: 'पूर्ण परीक्षा अनुभव',
      icon: Trophy,
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-500',
    },
    {
      id: 'current-affairs',
      tab: 'current-affairs',
      title: 'Current Affairs',
      subtitle: 'समसामयिक घटनाक्रम',
      icon: Newspaper,
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      id: 'vacancies',
      tab: 'vacancies',
      title: 'Vacancies',
      subtitle: 'रोजगारीको अवसर',
      icon: Briefcase,
      iconBg: 'bg-violet-50',
      iconColor: 'text-violet-600',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5">
      {categories.map((cat) => {
        const Icon = cat.icon;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveTab(cat.tab)}
            className="group flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-2xs hover:shadow-md hover:border-blue-100 transition-all duration-200 cursor-pointer text-center"
          >
            {/* Circular Category Icon */}
            <div className={`w-11 h-11 rounded-full ${cat.iconBg} ${cat.iconColor} flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110 shadow-2xs`}>
              <Icon className="w-5 h-5 stroke-[2.2]" />
            </div>

            {/* Title */}
            <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 tracking-tight leading-snug group-hover:text-[#0052FF] transition-colors">
              {cat.title}
            </h4>

            {/* Subtitle in Nepali */}
            <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">
              {cat.subtitle}
            </p>
          </button>
        );
      })}
    </div>
  );
};
