import React from 'react';
import { 
  Home, 
  Landmark, 
  Target, 
  Building2, 
  User as UserIcon, 
  Layers, 
  FileText, 
  Trophy, 
  Newspaper, 
  ShoppingBag, 
  BookOpen, 
  Bot, 
  ChevronRight,
  Mountain
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';

export const Sidebar: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

  const navMenuItems: { 
    tab: NavigationTab; 
    label: string; 
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { tab: 'home', label: 'Home', icon: Home },
    { tab: 'banking', label: 'Banking', icon: Landmark },
    { tab: 'pre-test', label: 'Pre-Test', icon: Target },
    { tab: 'sangathit-sanstha', label: 'Sangathit Sanstha', icon: Building2 },
    { tab: 'lok-sewa', label: 'Lok Sewa', icon: UserIcon },
    { tab: 'public-enterprises', label: 'Public Enterprises', icon: Layers },
    { tab: 'practice', label: 'Practice', icon: FileText },
    { tab: 'mock-tests', label: 'Mock Test', icon: Trophy },
    { tab: 'current-affairs', label: 'Current Affairs', icon: Newspaper },
    { tab: 'vacancies', label: 'Vacancies', icon: ShoppingBag },
    { tab: 'study', label: 'Study', icon: BookOpen },
    { tab: 'ai-sathi', label: 'AI Sathi', icon: Bot },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-56 xl:w-60 shrink-0 bg-[#0B132A] text-slate-300 min-h-[calc(100vh-70px)] sticky top-[70px] border-r border-slate-800/80 select-none z-20">
      
      {/* Navigation Menu Items (12 Items Matching Reference Image) */}
      <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {navMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.tab;

          return (
            <button
              key={item.tab}
              type="button"
              onClick={() => setActiveTab(item.tab)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer group ${
                isActive
                  ? 'bg-[#0066FF] text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <Icon className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
                <span className="truncate">{item.label}</span>
              </div>
              <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isActive ? 'text-white/90' : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5'}`} />
            </button>
          );
        })}
      </div>

      {/* Bottom Glassmorphic Mountain Card */}
      <div className="relative p-3.5 m-3 rounded-2xl overflow-hidden shadow-lg border border-slate-700/60 bg-[url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center text-center">
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[0.5px]" />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-1 text-sky-400">
            <Mountain className="w-7 h-7 stroke-[1.8]" />
          </div>
          
          <h4 className="text-[11px] font-bold text-white tracking-wide">
            Together Towards Your Dream
          </h4>
          <p className="text-[10px] text-slate-200 mt-0.5 font-medium leading-tight">
            तयारी आजको, सफलता भोलिको ।
          </p>
        </div>
      </div>

    </aside>
  );
};
