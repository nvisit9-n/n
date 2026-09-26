import React, { useState } from 'react';
import { 
  Building2, 
  Search, 
  Filter, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Award, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Landmark, 
  Clock, 
  Sparkles, 
  FileText 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { 
  CANONICAL_INSTITUTIONS, 
  CanonicalInstitution, 
  INSTITUTION_CATEGORIES, 
  InstitutionCategory 
} from '../../data/canonicalInstitutionsData';
import { OfficialTrustBadge } from '../common/OfficialTrustBadge';
import { NepalFlagEmblem } from '../common/NepalFlagEmblem';

export const SangathitSansthaScreen: React.FC = () => {
  const { setActiveTab, selectQuizSubCategory, tText } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<InstitutionCategory | 'all'>('all');
  const [preTestOnly, setPreTestOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sangathitInstitutions = CANONICAL_INSTITUTIONS.filter(i => i.isSangathitSanstha);

  const filteredInstitutions = sangathitInstitutions.filter(inst => {
    const matchCat = selectedCategory === 'all' || inst.category === selectedCategory;
    const matchPreTest = !preTestOnly || inst.requiresPreTest;
    const matchQuery = !searchQuery || 
      inst.nameNe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchPreTest && matchQuery;
  });

  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      {/* Header & Verification */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <NepalFlagEmblem className="w-4 h-5 drop-shadow-xs" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-800">
              Verified Public Institutions Hub
            </span>
            <OfficialTrustBadge 
              sourceName="लोक सेवा आयोग ऐन २०७९ तथा संगठित संस्था पदपूर्ति निर्देशिका" 
              verifiedYearBS="२०८१/८२ अद्यावधिक" 
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {tText('संगठित संस्था पदपूर्ति तथा पाठ्यक्रम हब', 'Organized Institutions Ecosystem')}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
            नेपाल सरकारका पूर्ण वा आंशिक स्वामित्व भएका सार्वजनिक प्राधिकरण, संस्थान, बोर्ड, कोष तथा कम्पनीहरूको एकीकृत पदपूर्ति तथा परीक्षा प्रणाली।
          </p>
        </div>

        {/* Action Button to Pre-Test */}
        <button
          onClick={() => setActiveTab('pre-test')}
          className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-700 hover:to-red-800 text-white font-bold text-xs shadow-md transition active:scale-95 cursor-pointer"
        >
          <Award className="w-4 h-4" />
          <span>केन्द्रीय पूर्वयोग्यता (Pre-Test) द्वार</span>
        </button>
      </div>

      {/* Critical Architecture Flow Notice Banner */}
      <div className="bg-gradient-to-r from-indigo-900/90 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg border border-indigo-700/50 relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-mono uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>एकीकृत पदपूर्ति नियम तथा योग्यता प्रवाह (Recruitment Flow)</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            प्रिटेस्ट उत्तीर्ण → प्रमाणपत्र → संगठित संस्थामा विज्ञापन आवेदन
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100/90 max-w-4xl leading-relaxed">
            केन्द्रीय तह ४ वा तह ५ को पूर्वयोग्यता परीक्षा (Pre-Test) उत्तीर्ण गरी प्राप्त हुने प्रमाणपत्रले उम्मेदवारलाई संगठित संस्थाहरूको खुला विज्ञापनमा दरखास्त दिन योग्य बनाउँछ। तर अन्तिम छनोटका लागि प्रत्येक संस्थाको आफ्नै न्यूनतम शैक्षिक योग्यता, सेवा/समूह, मुख्य लिखित परीक्षा र अन्तर्वार्ता उत्तीर्ण गर्न अनिवार्य हुन्छ।
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {['१. केन्द्रीय Pre-Test', '→', '२. उत्तीर्णाङ्क प्राप्त', '→', '३. प्रमाणपत्र वैधता', '→', '४. लक्षित संस्था छनोट', '→', '५. मुख्य लिखित परीक्षा'].map((step, idx) => (
              <span key={idx} className={`text-xs px-2.5 py-1 rounded-lg ${step === '→' ? 'text-indigo-300 font-black' : 'bg-white/10 text-white font-medium border border-white/15'}`}>
                {step}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#0B2046] text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            सबै क्याटगोरी ({sangathitInstitutions.length})
          </button>
          {INSTITUTION_CATEGORIES.map(cat => {
            const count = sangathitInstitutions.filter(i => i.category === cat).length;
            if (count === 0) return null;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0B2046] text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="संस्था, ऐन वा कोड खोज्नुहोस्..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <label className="flex items-center gap-2 self-start sm:self-auto cursor-pointer text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
            <input 
              type="checkbox" 
              checked={preTestOnly} 
              onChange={e => setPreTestOnly(e.target.checked)}
              className="rounded text-indigo-600 focus:ring-0" 
            />
            <span>Pre-Test अनिवार्य भएका मात्र देखाउनुहोस्</span>
          </label>
        </div>
      </div>

      {/* Institutions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInstitutions.map(inst => (
          <div 
            key={inst.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black font-mono bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  {inst.code}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  स्थापना: {inst.establishedYearBS}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {inst.nameNe}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {inst.nameEn}
                </p>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                {inst.descriptionNe}
              </p>

              {/* Legal Charter */}
              <div className="text-[11px] bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                <strong className="text-slate-800 dark:text-white">संविधान / ऐन:</strong> {inst.actOrCharterNe}
              </div>

              {/* Levels & Pre-Test Badge */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">
                  उपलब्ध पद तथा तहहरू:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {inst.levels.map(l => (
                    <span 
                      key={l.levelNumber}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      तह {l.levelNumber} ({l.requiresPreTest ? 'Pre-Test आवश्यक' : 'सिधै लिखित'})
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
              <a
                href={inst.officialCareersUrl || inst.officialWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>सूचना / वेवसाइट</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => {
                  selectQuizSubCategory('sangathit');
                  setActiveTab('quiz');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-bold transition active:scale-95 cursor-pointer"
              >
                <span>५० सेट अभ्यास</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
