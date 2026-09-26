import React from 'react';
import { 
  Home, 
  HelpCircle, 
  Award, 
  Bot, 
  User as UserIcon 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NavigationTab } from '../../types';

export const BottomNav: React.FC = () => {
  const { activeTab, setActiveTab, user } = useApp();

  const emailPrefix = user?.email ? user.email.split('@')[0] : '';
  const displayName = user?.displayName || (user?.name && user.name !== 'विद्यार्थी' ? user.name : (emailPrefix || 'परीक्षार्थी'));
  const photoURL = user?.photoURL || user?.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=0B2046&color=fff&size=128`;

  interface BottomNavItem {
    tab: NavigationTab;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string;
  }

  // Exact 5 items mandated by design specification:
  // HOME, PRACTICE, PRE-TEST, AI SATHI, PROFILE
  const navItems: BottomNavItem[] = [
    { tab: 'home', label: 'Home', icon: Home },
    { tab: 'practice', label: 'Practice', icon: HelpCircle },
    { tab: 'pre-test', label: 'Pre-Test', icon: Award, badge: 'GATE' },
    { tab: 'ai-sathi', label: 'AI Sathi', icon: Bot },
    { tab: 'profile', label: 'Profile', icon: UserIcon }
  ];

  return (
    <div 
      id="mobile-bottom-navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/98 border-t border-slate-200/90 shadow-lg safe-bottom transition-colors"
    >
      <nav className="flex items-center justify-around h-16 max-w-lg mx-auto px-1">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.tab;

          return (
            <button
              key={item.tab}
              type="button"
              id={`bottom-nav-${item.tab}`}
              onClick={() => setActiveTab(item.tab)}
              className={`flex-1 min-h-[48px] flex flex-col items-center justify-center py-1 transition-all relative cursor-pointer active:scale-95 ${
                isActive 
                  ? 'text-[#0B2046] font-bold' 
                  : 'text-slate-500 hover:text-slate-900 font-medium'
              }`}
            >
              <div className={`p-1 rounded-xl transition-all relative ${
                isActive 
                  ? 'bg-slate-100 text-[#0B2046]' 
                  : 'hover:bg-slate-50'
              }`}>
                {item.tab === 'profile' && user && !user.isGuest ? (
                  <div className="relative">
                    <img 
                      src={photoURL} 
                      alt={displayName} 
                      referrerPolicy="no-referrer"
                      className={`w-5 h-5 rounded-full object-cover transition-all ${
                        isActive 
                          ? 'ring-2 ring-[#0B2046]' 
                          : 'ring-1 ring-slate-300'
                      }`}
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full ring-1 ring-white" />
                  </div>
                ) : (
                  <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5] text-[#0B2046]' : 'stroke-2'}`} />
                )}
                {item.badge && (
                  <span className="absolute -top-1 -right-1 text-[8px] font-black px-1 rounded bg-rose-600 text-white">
                    {item.badge}
                  </span>
                )}
              </div>

              <span className={`text-[10px] mt-0.5 tracking-tight ${
                isActive ? 'font-bold text-[#0B2046]' : 'font-medium text-slate-500'
              }`}>
                {item.label}
              </span>

              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 bg-[#0B2046] rounded-full" />
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNav;
