import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Sparkles, 
  Menu, 
  X, 
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
  LogOut, 
  ShieldCheck 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { BankingTayariNavbarLogo } from '../common/BrandLogo';
import { isUserAdmin } from '../../utils/sanitizer';
import { NavigationTab } from '../../types';

export const Header: React.FC = () => {
  const { 
    user, 
    language, 
    setLanguage, 
    tText, 
    setIsSearchOpen, 
    setIsAiModalOpen, 
    setIsNotificationsOpen, 
    notifications, 
    unreadNotificationsCount, 
    activeTab, 
    setActiveTab, 
    setIsProfileModalOpen, 
    openLoginModal, 
    logout,
    openAdminWithSecurityCheck,
    isAdminAuthenticated
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const langRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangDropdownOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = typeof unreadNotificationsCount === 'number' 
    ? unreadNotificationsCount 
    : (notifications || []).filter(n => !n.read).length || 3;

  const isGuest = !user?.email || Boolean(user?.isGuest);
  const displayName = isGuest ? 'Sushant' : (user?.displayName || user?.name || 'Sushant');
  const userPlan = (user as any)?.isPro ? 'Pro Account' : 'Free Account';
  const avatarUrl = user?.photoURL || user?.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120';

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(true);
  };

  const navMenuItems: { tab: NavigationTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
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
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-2xs">
        <div className="w-full px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[70px] gap-2 md:gap-4 lg:gap-6">
            
            {/* 1. LEFT BRAND LOGO */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition cursor-pointer"
                aria-label="Open Navigation Drawer"
              >
                <Menu className="w-5 h-5" />
              </button>

              <BankingTayariNavbarLogo onClick={() => setActiveTab('home')} />
            </div>

            {/* 2. CENTER ROUNDED SEARCH BAR */}
            <div className="flex-1 max-w-2xl hidden md:block">
              <form onSubmit={handleSearchSubmit} className="relative">
                <div 
                  onClick={() => setIsSearchOpen(true)}
                  className="relative flex items-center cursor-pointer group"
                >
                  <Search className="w-4 h-4 text-slate-400 group-hover:text-blue-500 absolute left-4 transition-colors pointer-events-none" />
                  <input
                    type="text"
                    readOnly
                    value={searchInput}
                    placeholder="Search for syllabus, MCQs, banks, institutions, vacancies, current affairs..."
                    className="w-full pl-11 pr-4 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all cursor-pointer select-none"
                  />
                </div>
              </form>
            </div>

            {/* 3. RIGHT ACTION CONTROLS */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* Mobile Search Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* AI Sathi Pill Button */}
              <button
                type="button"
                onClick={() => {
                  if (setIsAiModalOpen) setIsAiModalOpen(true);
                  else setActiveTab('ai-sathi');
                }}
                className="hidden xl:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-purple-50/70 border border-blue-200/80 hover:border-blue-300 transition-all cursor-pointer group text-left"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#0052FF] to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-3.5 h-3.5 fill-white/20" />
                </div>
                <div className="leading-tight">
                  <span className="text-xs font-black text-slate-900 block group-hover:text-[#0052FF] transition-colors">
                    AI Sathi
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium block">
                    Your Smart Study Partner
                  </span>
                </div>
              </button>

              {/* Notification Bell with Badge Count (3) */}
              <button
                type="button"
                onClick={() => setIsNotificationsOpen(true)}
                className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition cursor-pointer"
                title={`Notifications (${unreadCount})`}
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 stroke-[1.8]" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#E11D48] text-white text-[9px] font-black flex items-center justify-center shadow-xs border border-white">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              </button>

              {/* Language Dropdown Selector */}
              <div ref={langRef} className="relative">
                <button
                  type="button"
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-slate-100 border border-slate-200/80 text-xs font-bold text-slate-800 transition cursor-pointer"
                  title="Language Selector"
                >
                  <span className="text-sm">🇳🇵</span>
                  <span>{language === 'ne' ? 'नेपाली' : 'English'}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.5]" />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-50 text-xs font-semibold animate-fadeIn">
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('ne');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-slate-50 cursor-pointer ${
                        language === 'ne' ? 'text-[#0052FF] font-bold bg-blue-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span>🇳🇵</span>
                      <span>नेपाली</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setLanguage('en');
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-slate-50 cursor-pointer ${
                        language === 'en' ? 'text-[#0052FF] font-bold bg-blue-50/50' : 'text-slate-700'
                      }`}
                    >
                      <span>🇬🇧</span>
                      <span>English</span>
                    </button>
                  </div>
                )}
              </div>

              {/* User Profile Widget */}
              <div ref={profileRef} className="relative pl-1 sm:pl-2">
                <button
                  type="button"
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center gap-2 p-1 sm:px-2 sm:py-1 rounded-full hover:bg-slate-100 transition cursor-pointer group"
                >
                  {/* Circular User Avatar */}
                  <img
                    src={avatarUrl}
                    alt={displayName}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-slate-200 shadow-2xs group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/default-avatar.png';
                    }}
                  />
                  {/* Name and Account Status */}
                  <div className="hidden sm:flex flex-col text-left leading-tight">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-[#0052FF] transition-colors">
                      {displayName}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      {userPlan}
                    </span>
                  </div>
                  <ChevronDown className="hidden sm:block w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                </button>

                {/* Profile Popup Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-1.5 z-50 text-xs font-semibold animate-fadeIn">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="font-bold text-slate-900 truncate">{displayName}</p>
                      <p className="text-[10px] text-slate-500 truncate">{user?.email || 'free-student@gmail.com'}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIsProfileDropdownOpen(false);
                        setIsProfileModalOpen(true);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center gap-2 text-slate-700 cursor-pointer"
                    >
                      <UserIcon className="w-4 h-4 text-slate-400" />
                      <span>प्रोफाइल हेर्नुहोस् (Profile)</span>
                    </button>

                    {user?.email && isUserAdmin(user.email) && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsProfileDropdownOpen(false);
                          openAdminWithSecurityCheck();
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-amber-50 flex items-center gap-2 text-amber-700 cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span>प्रशासक प्यानल (Admin)</span>
                      </button>
                    )}

                    <div className="border-t border-slate-100 my-1" />

                    {isGuest ? (
                      <button
                        type="button"
                        onClick={() => {
                          setIsProfileDropdownOpen(false);
                          openLoginModal();
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center gap-2 text-[#0052FF] font-bold cursor-pointer"
                      >
                        <span>लगइन गर्नुहोस् (Login)</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setIsProfileDropdownOpen(false);
                          logout();
                        }}
                        className="w-full text-left px-4 py-2 hover:bg-rose-50 flex items-center gap-2 text-rose-600 cursor-pointer"
                      >
                        <LogOut className="w-4 h-4 text-rose-500" />
                        <span>लगआउट (Log out)</span>
                      </button>
                    )}
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
          />
          <div className="relative w-72 max-w-[85vw] bg-[#0F172A] text-slate-300 h-full flex flex-col z-10 shadow-2xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <BankingTayariNavbarLogo onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }} />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {navMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.tab;
                return (
                  <button
                    key={item.tab}
                    type="button"
                    onClick={() => {
                      setActiveTab(item.tab);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                      isActive ? 'bg-[#0052FF] text-white font-bold' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
